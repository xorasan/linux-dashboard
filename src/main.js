var controls_list, Dashboard = {}, memory_graph = [], battery_graph = [];
const dbus = require('./deps/dbus-next');
;(async function(){
	'use strict';

	var dom_keys;

	const { exec } = require('child_process');
	const os = require('os');
	const os_utils = require('./deps/os-utils');
	const fs = require('fs');
	dbus.setBigIntCompat(true);
	let bus = dbus.systemBus();

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
	function format_small_point(pct, sign = '%', places = 1) {
		var out = parsefloat(pct, places)+'';
		out = out.split('.');
		if (out.length > 1) {
			out[1] = '<small>.'+(out[1])+'</small>';
		}
		return out[0]+out.slice(1).join(' ') + '<small class="dim">'+sign+'</small>';
	}

	var update_memory_TO, max_mem_graph_steps = 60 * 10; // 600 * 1s = 600s / 60s = 5m
	function update_memory_graph() {
		var graph = controls_list.get_item_keys('mem').graph;
		var w = graph.width, h = graph.height;
		var canvas = Canvas( graph );
		var step_width = (w + 10) / max_mem_graph_steps; // px
		canvas.linewidth(2);
		var points = [];

		for (var i = 0; i < memory_graph.length; ++i) {
			var o = memory_graph[i];
			points.push({
				x: (step_width * ( max_mem_graph_steps - memory_graph.length ) ) + i*step_width,
				y: h*o
			});
		}

		if (memory_graph.length) {
			points.unshift( { x: points[0].x, y: h } );
			points.push( { x: points[points.length-1].x, y: h } );
		}

		var color = Themes.get('accentt');

		canvas.clear();
		canvas.line(points, -1, {
			w: 0,
			h: h*1.5,
			stops: [color, 'transparent']
		});
	}
	Dashboard.update_memory = function () {
		var used = os.totalmem() - os.freemem();
		controls_list.set({
			uid: 'mem',
			info$h: formatBytes(used)+' used out of ' + formatBytes(os.totalmem()),
			state$h: formatBytes(os.freemem()),
		});
		
		var pct = os.freemem() / os.totalmem();
		memory_graph.push(pct);
		if (memory_graph.length > max_mem_graph_steps) memory_graph.shift();
		update_memory_graph();

		clearTimeout(update_memory_TO);
		update_memory_TO = setTimeout(function () {
			Dashboard.update_memory();
		}, 1000);
	};

	Dashboard.battery = {};
	var update_battery_TO, max_bat_graph_steps = 60 * 10; // 600 * 5s = 3000s / 60s = 50m
	const battery_state_index = {
		0: 'Unknown',
		1: 'Charging',
		2: 'Discharging',
		3: 'Empty',
		4: 'Full',
		5: 'Charging paused',
		6: 'Pending discharge',
		7: 'Suspended'
	};
	function battery_interval() {
		// TODO give this the ability to handle sleep times
		clearTimeout(update_battery_TO);
		update_battery_TO = setTimeout(function () {
			battery_graph.push(Dashboard.battery_pct/100);
			if (battery_graph.length > max_bat_graph_steps) battery_graph.shift();
			update_battery_graph();
			battery_interval();
		}, 5000);
	}
	function update_battery_graph() {
		var graph = controls_list.get_item_keys('bat').graph;
		var w = graph.width, h = graph.height;
		var canvas = Canvas( graph );
		var step_width = (w + 20) / max_bat_graph_steps; // px
		canvas.linewidth(2);
		var points = [];

		for (var i = 0; i < battery_graph.length; ++i) {
			var o = 1-battery_graph[i];
			points.push({
				x: (step_width * ( max_bat_graph_steps - battery_graph.length ) ) + i*step_width,
				y: h*o
			});
		}

		if (battery_graph.length) {
			points.unshift( { x: points[0].x, y: h } );
			points.push( { x: points[points.length-1].x, y: h } );
		}

		var color = Themes.get('accentt');

		canvas.clear();
		canvas.line(points, -1, {
			w: 0,
			h: h*1.5,
			stops: [color, 'transparent']
		});
	}
	function battery_state_to_icon(pct, state) {
		// TODO make a batterychargingpaused icon
		const thresholds = ['alert', 20, 30, 50, 60, 80, 90, 'full'];
		const index = Math.min(Math.floor(pct / 10), thresholds.length - 1);
		if ([1, 5].includes(state) && index === 0) index = 1;
		return 'battery'+([1, 5].includes(state) ? 'charging' : '')+thresholds[index];
	}
	function update_battery_item() {
		// TODO add support for multiple batteries and systems with no batteries as well as UPS
		var icon, pct_sign = '<small class="dim">%</small>'; // TODO Weld(`small .dim "%"`)

		var state = Dashboard.battery_state;
		if (state === 0) icon = 'batteryunknown'
		else if ([1, 2, 5, 6].includes(state)) icon = battery_state_to_icon(Dashboard.battery_pct, state);
		else if (state === 3) icon = 'batteryalert';
		else icon = 'batteryfull';

		var energy = Dashboard.battery.energy;

		controls_list.set({
			uid: 'bat',
			switch$h: Dashboard.battery_pct+pct_sign,
			state: battery_state_index[Dashboard.battery_state],
			info$h: Math.floor(energy.full / energy.design * 100) + pct_sign+' energy left',
			icon$icon: 'icon'+icon,
		});
	}
	Dashboard.update_battery = async function () {
		controls_list.set({
			uid: 'bat',
			switch: '...',
		});

		var power_obj = await bus.getProxyObject('org.freedesktop.UPower', '/org/freedesktop/UPower');
		var power_interface = power_obj.getInterface('org.freedesktop.UPower');
		var devices = await power_interface.EnumerateDevices();
		
		if (devices.length < 2) {
			controls_list.set({
				uid: 'bat',
				switch: 'N/A',
			});
			return;
		}
		
		var line_power = devices[0];
		var battery_power = devices[1];

		var battery_obj = await bus.getProxyObject('org.freedesktop.UPower', battery_power);
		var battery_properties = battery_obj.getInterface('org.freedesktop.DBus.Properties');
		var power_device = 'org.freedesktop.UPower.Device';
		var battery_pct = await battery_properties.Get(power_device, 'Percentage');
		var battery_state = await battery_properties.Get(power_device, 'State');
		
		Dashboard.battery_state = battery_state.value;
		Dashboard.battery_pct = battery_pct.value;
		Dashboard.battery_properties = battery_properties;
		Dashboard.battery.energy = {
			empty: (await battery_properties.Get(power_device, 'EnergyEmpty')).value,
			full: (await battery_properties.Get(power_device, 'EnergyFull')).value,
			design: (await battery_properties.Get(power_device, 'EnergyFullDesign')).value,
		};

		update_battery_item();

		battery_properties.on('PropertiesChanged', (iface, changed, invalidated) => {
			var yes;
			for (let prop of Object.keys(changed)) {
				var value = changed[prop].value;
				if (prop == 'Percentage') {
					Dashboard.battery_pct = value;
					yes = 1;
				}
				if (prop == 'State') {
					Dashboard.battery_state = value;
					yes = 1;
				}
				if (prop == 'EnergyEmpty') {
					Dashboard.battery.energy.empty = value;
					yes = 1;
				}
				if (prop == 'EnergyFull') {
					Dashboard.battery.energy.full = value;
					yes = 1;
				}
				if (prop == 'EnergyFullDesign') {
					Dashboard.battery.energy.design = value;
					yes = 1;
				}
//				console.log(`${iface} property changed: ${prop} => ${changed[prop].value} `);
			}
			if (yes) update_battery_item();
		});

		battery_interval();
	};

	var update_wifi_TO;
	Dashboard.wifi = { down: 0, up: 0 };
	Dashboard.update_wifi = async function () {
		controls_list.set({ uid: 'wifi', state: '...' });

		var stats = await os_utils.netstat.stats();

		stats.forEach(function (o, i) {
			if (o.interface == 'wlan0') {
				Dashboard.wifi.down = parseint(o.inputBytes);
				Dashboard.wifi.up = parseint(o.outputBytes);
			}
		});
		

		var clone = controls_list.set({
			uid: 'wifi',
			state$h: formatBytes(Dashboard.wifi.down+Dashboard.wifi.up),
			out_str$h: formatBytes(Dashboard.wifi.up),
			in_str$h: formatBytes(Dashboard.wifi.down),
		});
		
		Webapp.icons(clone);

		clearTimeout(update_wifi_TO);
		update_wifi_TO = setTimeout(function () {
			Dashboard.update_wifi();
		}, 60 * 1000);
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
	
	var update_apps_TO;
	Dashboard.update_apps = async function () {
		controls_list.set({ uid: 'apps', state: '...' });
		var windows = await Apps.get_windows();
		var processes = await Apps.get_processes();
		controls_list.set({
			uid: 'apps',
			state: 'ixtaf',
			info: Object.keys(windows.topmost).length+' windows with '
				+Object.keys(processes).length+' processes',
		});
		
		// TODO make this connect live with WM and update the list dynamically
		clearTimeout(update_apps_TO);
		update_apps_TO = setTimeout(function () {
			Dashboard.update_apps();
		}, 30000);
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

	var update_processor_TO, processor_graph = [], max_cpu_graph_steps = 60 * 5;
	Dashboard.processor = {};
	function update_processor_graph() {
		var graph = controls_list.get_item_keys('cpu').graph;
		var w = graph.width, h = graph.height;
		var canvas = Canvas( graph );
		var step_width = (w + 10) / max_cpu_graph_steps; // px
		canvas.linewidth(2);
		var points = [];

		for (var i = 0; i < processor_graph.length; ++i) {
			var o = processor_graph[i];
			points.push({
				x: (step_width * ( max_cpu_graph_steps - processor_graph.length ) ) + i*step_width,
				y: h*o
			});
		}

		if (processor_graph.length) {
			points.unshift( { x: points[0].x, y: h } );
			points.push( { x: points[points.length-1].x, y: h } );
		}

		var color = Themes.get('accentt');

		canvas.clear();
		canvas.line(points, -1, {
			w: 0,
			h: h*2.5,
			stops: [color, 'transparent']
		});
	}
	async function get_processor_cores() {
		var avg_usage = await os_utils.cpu.usage();

		controls_list.set({
			uid: 'cpu',
			switch$h: format_small_point(avg_usage),
		});

		processor_graph.push(1-avg_usage/100);
		if (processor_graph.length > max_cpu_graph_steps) processor_graph.shift();
		update_processor_graph();

		clearTimeout(update_processor_TO);
		update_processor_TO = setTimeout(async function () {
			await get_processor_cores();
		}, 1000);
	}
	Dashboard.update_processor = function () {
		controls_list.set({
			uid: 'cpu',
			switch: '...',
		});

		get_processor_cores();
	};

	Hooks.set('ready', function (arg_one) {
//		(function () {
//			var w = nw.Screen.screens[0].work_area.width,
//				h = nw.Screen.screens[0].work_area.height;
//			nw.Window.get().moveTo(w - outerWidth, h - outerHeight - 66);
//		})();
		
		Webapp.header();
		Webapp.status_bar_padding();
		Webapp.tall_screen();
		
		dom_keys = View.dom_keys('main');
		
		controls_list = List( dom_keys.list ).id_prefix('controls').list_item('control_item');
		controls_list.listen_on_press(function (o, k) {
			if (k == K.en) { // enter
				// TODO should the view hook have a global delay by default to avoid keypress bleeds
				if (o.uid == 'bt') Hooks.run('view', 'bluetooth');
			}
		});
		
		Dashboard.update_time();

		controls_list.set({ uid: 'wifi' , icon: 'iconwifi',			title: 'WiFi',		switch: 'ON',
			info$h: Weld.decode_htm([
				'.flex .center',
				'\t.mini [icon=iconcallreceived] [id=in]',
				'\t[id=in_str]',
				'\t.padl .padr',
				'\t.mini [icon=iconcallmade] [id=out]',
				'\t[id=out_str]',
			].join('\n')).parsed,
		});
		
		controls_list.select_by_uid('time');

		controls_list.set({ uid: 'bt'   , icon: 'iconbluetooth',	title: 'Bluetooth' });
		controls_list.set({ uid: 'store', icon: 'iconstorage',		title: 'Storage',	switch: 'ixtaf' });
		controls_list.set({ uid: 'cpu'  , icon: 'icontoys',			title: 'Processor',	switch: 'ixtaf' });
		controls_list.set({ uid: 'mem'  , icon: 'iconmemory',		title: 'Memory',	switch: 'ixtaf' });
		controls_list.set({ uid: 'bat'  , icon: 'iconbatteryfull',	title: 'Battery',	switch: 'ixtaf' });
		controls_list.set({ uid: 'apps' , icon: 'iconapps',			title: 'Apps',		switch: 'ixtaf' });

		Dashboard.update_wifi();
		Bluetooth.update();
		Dashboard.update_storage();
		Dashboard.update_processor();
		Dashboard.update_memory();
		Dashboard.update_apps();
		Dashboard.update_battery();
		
		on_resize();
	});
	
	function draw_graphs () {
		update_memory_graph();
		update_battery_graph();
	}
	function on_resize () {
		if (dom_keys)
		$.taxeer('ldresize', function () {
			var cans = dom_keys.list.querySelectorAll('canvas');
			cans.forEach(function (o) {
				var p = o.parentElement;
				o.height = p.offsetHeight;
				o.width = p.offsetWidth;
			});
			draw_graphs();
		}, 20);
	}
	listener('resize', on_resize);

	Hooks.set('view-ready', function (arg_one) { if (View.is_active_fully('main')) {
		Softkeys.list.basic(controls_list);
		Softkeys.remove(K.sr);
	}});

})();
