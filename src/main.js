var controls_list, Dashboard = {};
;(async function(){
	'use strict';

	var dom_keys;

	const { exec } = require('child_process');
	const os = require('os');
	const fs = require('fs');
	const dbus = require('./deps/dbus-next');
	dbus.setBigIntCompat(true);
	let bus = dbus.systemBus();
	let Variant = dbus.Variant;

	function bytesToGB(bytes) {
		return (bytes / (1024 * 1024 * 1024)).toFixed(2);
	}
	// Function to parse unit from df output (e.g., MB, GB, etc.)
	const parseUnit = (value) => {
		const unit = value.slice(-1).toUpperCase();
		switch (unit) {
			case 'G':
			return 1024 * 1024 * 1024;
			case 'M':
			return 1024 * 1024;
			case 'K':
			return 1024;
			default:
			return 1;
		}
	};
	const formatBytes = (bytes) => {
		const units_long = ['B', 'KB', 'MB', 'GB', 'TB'];
		const units = ['B', 'K', 'M', 'G', 'T'];
		let index = 0;
		while (bytes >= 1024 && index < units.length - 1) {
			bytes /= 1024;
			index++;
		}
		var out = parsefloat(bytes, 2)+'';
		out = out.split('.');
		if (out.length > 1) {
			out[1] = '<small>'+(out[1])+'</small>';
		}
		return out.join('.') + '<small class="dim">'+units[index]+'</small>';
	};

	var update_memory_TO;
	Dashboard.update_memory = function () {
		var used = os.totalmem() - os.freemem();
		controls_list.set({
			uid: 'mem',
			info$h: formatBytes(used)+' used out of ' + formatBytes(os.totalmem()),
			state$h: formatBytes(os.freemem()),
		});

		clearTimeout(update_memory_TO);
		update_memory_TO = setTimeout(function () {
			Dashboard.update_memory();
		}, 2000);
	};

	var update_storage_TO;
	Dashboard.update_storage = function () {
		controls_list.set({ uid: 'store', state: '...' });

		// Get available free space
		exec('df -h', (error, stdout, stderr) => {
			if (error) {
				console.error(`Error executing command: ${error.message}`);
				controls_list.set({ uid: 'store', state: 'Error' });
				return;
			}
			if (stderr) {
				controls_list.set({ uid: 'store', state: 'Error' });
				console.error(`Error: ${stderr}`);
				return;
			}
			
			// Parse the output to extract partition information
			const lines = stdout.split('\n').filter(line => line.trim() !== '');
			const partitions = lines.slice(1).map(line => {
				const [filesystem, size, used, available, percentage, mounted] = line.split(/\s+/);
				return { filesystem, size, used, available, percentage, mounted };
			});
			
			// Calculate total and free space for all partitions
			let totalSpace = 0;
			let freeSpace = 0;
			
			partitions.forEach(partition => {
				// Extract numerical values from size and available fields
				const sizeBytes = parseInt(partition.size) * parseUnit(partition.size);
				const availableBytes = parseInt(partition.available) * parseUnit(partition.available);
				totalSpace += sizeBytes;
				freeSpace += availableBytes;
			});

			controls_list.set({
				uid: 'store',
				state$h: formatBytes(freeSpace),
				info$h: formatBytes(totalSpace-freeSpace) +' used out of '+ formatBytes(totalSpace),
			});

			clearTimeout(update_storage_TO);
			update_storage_TO = setTimeout(function () {
				Dashboard.update_storage();
			}, 60 * 1000);
		});
	};
	
	var update_time_TO;
	Dashboard.update_time = function () {
		var date = new Date();
		controls_list.set({
			uid: 'time',
			hours: zero( date.getHours()   ) ,
			mins : zero( date.getMinutes() ) ,
			secs : zero( date.getSeconds() ) ,
			date : zero(date.getDate()+1) +' '+zero(date.getMonth()+1) +' '+ date.getFullYear() ,
			_listitem: 'time_item',
		});
		
		clearTimeout(update_time_TO);
		update_time_TO = setTimeout(function () {
			Dashboard.update_time();
		}, 2000);
	};
	
	Dashboard.bluetooth = {};
	Dashboard.bluetooth_info = function () {
		var info = [
			Dashboard.bluetooth.discovering ? 'Discovering...' : '',
		].join(' ');

		controls_list.set({
			uid: 'bt',
			info,
		});
	};
	Dashboard.update_bluetooth = async function () {
		controls_list.set({
			uid: 'bt',
			switch: '...',
		});
		
		let obj = await bus.getProxyObject('org.bluez', '/org/bluez/hci0');
		let adapter = obj.getInterface('org.bluez.Adapter1');
		let properties = obj.getInterface('org.freedesktop.DBus.Properties');
		
		var bluetooth_powered = await properties.Get('org.bluez.Adapter1', 'Powered');
		
		controls_list.set({
			uid: 'bt',
			switch: bluetooth_powered.value ? 'ON' : 'OFF',
		});

		Dashboard.bt_props = properties;
		
		properties.on('PropertiesChanged', (iface, changed, invalidated) => {
			for (let prop of Object.keys(changed)) {
				if (prop == 'Powered') {
					controls_list.set({
						uid: 'bt',
						switch: changed[prop].value ? 'ON' : 'OFF',
					});
				}
				if (prop == 'Discovering') {
					Dashboard.bluetooth.discovering = changed[prop].value;
					Dashboard.bluetooth_info();
				}
				console.log(`${iface} property changed: ${prop} => ${changed[prop].value} `);
			}
		});
	};

	Hooks.set('ready', function (arg_one) {
		(function () {
			var w = nw.Screen.screens[0].work_area.width,
				h = nw.Screen.screens[0].work_area.height;
			nw.Window.get().moveTo(w - outerWidth, h - outerHeight - 66);
		})();
		
		Webapp.header();
		Webapp.status_bar_padding();
		Webapp.tall_screen();
		
		dom_keys = View.dom_keys('main');
		
		controls_list = List( dom_keys.list ).id_prefix('controls').list_item('control_item');
		
		Dashboard.update_time();

		controls_list.set({ uid: 'wifi', title: 'WiFi', switch: 'ON' });
		controls_list.set({ uid: 'bt', title: 'Bluetooth' });
		controls_list.set({ uid: 'store', title: 'Storage', switch: 'ixtaf' });
		controls_list.set({ uid: 'mem', title: 'Memory', switch: 'ixtaf' });
		controls_list.set({ uid: 'bat', title: 'Battery', switch: 'ixtaf' });
		controls_list.set({ uid: 'apps', title: 'Apps', switch: 'ixtaf' });

		Dashboard.update_bluetooth();
		Dashboard.update_storage();
		Dashboard.update_memory();
		
	});
	
	Hooks.set('view-ready', function (arg_one) { if (View.is_active_fully('main')) {
		Softkeys.remove(K.sr);
	}});

})();
