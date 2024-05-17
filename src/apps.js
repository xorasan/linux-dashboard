var Apps = {};
const x11 = require('./deps/x11');
const child_process = require('child_process');
const util = require('util');
const exec = util.promisify(child_process.exec);
;(function(){


function escape_regexp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function match_rough(haystack, needle) {
	const escaped = escape_regexp(needle);
	const pattern = new RegExp(escaped, "i");

	return haystack.match(pattern);
}
function xprop_to_obj(output) {
	const lines = output.trim().split('\n');
	const out = {};
	var current_prop;
	
	lines.forEach(function (line, i) {
		if (line.includes('=') || line.includes(':')) { // new prop
			var splat;
			var equal = line.indexOf('='), colon = line.indexOf(':');
			if (equal > -1 && colon > -1) { // if both found, pick the first one & nullify the other one
				if (equal < colon) colon = -1;
				else equal = -1;
			}
			if (equal > -1) splat = line.split('=');
			if (colon > -1) splat = line.split(':');
			current_prop = splat[0].trim();
			var value = splat.slice(1);

			if (equal > -1) out[current_prop] = value.join('=').trim();
			if (colon > -1) out[current_prop] = value.join(':').trim();
		} else {
			out[current_prop] += line;
		}
	});
	
	return out;
}
function pid_to_name(output) {
	const matches = output.match(/_NET_WM_PID\(CARDINAL\) = (\d+)/);
	if (matches && matches[1]) {
		const pid = parseInt(matches[1]);
		// Use 'ps' command to fetch the process name
		exec(`ps -p ${pid} -o comm=`, (error, stdout, stderr) => {
			if (error) {
				err(`Error fetching process name for PID ${pid}: ${error.message}`);
				return;
			}
			if (stderr) {
				err(`Error fetching process name for PID ${pid}: ${stderr}`);
				return;
			}
			const processName = stdout.trim();
			$.log("Window ID:", windowId, "Process Name:", processName);
		});
	}
	
}
function print_prop(name, value) {
	$.log( name, ': "', value, '"' );
}
function get_relevant_props(o) {
	var r = {};
	for (var i in o) {
		var value = o[i];
		if (match_rough(i, 'wm_name')) {
			r.name = value.slice(1, -1).trim();
		}
		if (match_rough(i, 'wm_class(string)')) {
			// converts ' "example_class", "ExampleClass" ' to [example_class, ExampleClass]
			r.class = value.split(',').map(v => v.trim().slice(1, -1));
		}
		if (match_rough(i, 'wm_client_leader(window)')) {
			// converts 'window id # 0x5c00008' to 0x5c00008
			r.leader = parseint(value.slice(12));
		}
	}
	return r;
}

async function get_windows() {
	var on_resolve, on_error;
	var promise = new Promise(function (r, e) {
		on_resolve = r; on_error = e;
	});
	x11.createClient(function(err, display) {
		const X = display.client;
		
		var windows = {
			topmost: {},
			all: {},
		};
		const get_window_attributes = function (wid) {
			var resolve;
			var promise = new Promise(function (r) {
				resolve = r;
			});
			X.GetWindowAttributes(wid, function (e, v) {
				resolve(v);
			});
			return promise;
		};
		const query_tree = function (wid) {
			var resolve;
			var promise = new Promise(function (r) {
				resolve = r;
			});
			X.QueryTree(wid || display.screen[0].root, function(err, tree) {
				if (err) throw err;
				
				resolve(tree);
			});
			return promise;
		};
		
		async function get_children (parent, parent_obj) {
			const tree = await query_tree(parent);
//			$.log( parent || 0, 'has total', tree.children.length );
			
			for await (var window_id of tree.children) {
				var { error, stdout, stderr } = await exec(`xprop -id ${window_id}`);
				if (error) {
					$.log.e(`Error fetching process ID for window ${window_id}: ${error.message}`);
				} else if (stderr) {
					$.log.e(`Error fetching process ID for window ${window_id}: ${stderr}`);
				} else {
					var o = xprop_to_obj(stdout);
					var out = parent_obj || windows.all;
					var window = out[ window_id ] = get_relevant_props( o );
					window.raw_props = o;

					var attrs = await get_window_attributes(window_id);
					window.raw_attrs = attrs;
					if (attrs) {
						if (!attrs.overrideRedirect // Skip override redirect windows (e.g., pop-up dialogs)
							&& attrs.mapState !== 0 // IsViewable
						) { // this window is topmost
							if (window.name)
								windows.topmost[window_id] = window;
						}
					}

					var potential_children = {};
					await get_children(window_id, potential_children);
					if (Object.keys(potential_children).length) {
						out[ window_id ].children = potential_children;
					}
				}
			}
		}
		
		(async function(){
			try {
				await get_children();
			} catch (e) {
				$.log.e( e );
			}
			on_resolve( windows );
			X.terminate();
		})();
	});
	return promise;
}
async function get_processes() {
	const { error, stdout, stderr } = await exec('ps -eo pid,comm');
	if (error) throw error;
	
	if (stderr) throw new Error(stderr);

	const processes = stdout.trim().split('\n').slice(1); // split by lines and remove header
	var out = {};
	processes.forEach(process => {
		const [ pid, name ] = process.trim().split(/\s+/);
		out[pid] = name;
	});
	return out;
}
Apps.get_processes = get_processes;
Apps.get_windows = get_windows;

})();


