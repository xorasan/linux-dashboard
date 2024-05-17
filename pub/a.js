var Config={"deps":["dbus-next","x11"],"copy_deps":"1","name":"linux-dashboard","width":"640","height":"800","frame":false,"root":"."};

function updatetheme(o) {
return 'body {'
+'\n	color:'+o.text+';'
+'\n}'
+'\nbody {'
+'\n	background-color:'+o.primary+';'
+'\n}'
+'\nbody[data-transparency] {'
+'\n	background-color:'+o.primaryt+';'
+'\n}'
+'\nhr {'
+'\n	border-top:2px dashed '+o.secondary+';'
+'\n}'
+'\ns {'
+'\n	text-decoration-color:'+o.text+';'
+'\n}'
+'\na {'
+'\n	color:'+o.accent+';'
+'\n	text-decoration:underline '+o.accent+';'
+'\n}'
+'\na:active {'
+'\n	color:'+o.tertiary+';'
+'\n	text-decoration:underline '+o.accentd+';'
+'\n}'
+'\nbutton {'
+'\n	background:'+o.primary+';'
+'\n	border:2px solid '+o.secondary+';'
+'\n}'
+'\nbutton:active {'
+'\n	border-color:'+o.accentl+';'
+'\n	color:'+o.accent+';'
+'\n	fill:'+o.accent+';'
+'\n	box-shadow:0 0 0 0 '+o.textl+';'
+'\n}'
+'\nbutton:active svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\nbutton:active span {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\nbutton:focus {'
+'\n	border-color:'+o.accentl+';'
+'\n}'
+'\nbutton svg {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\nbutton[data-selected] {'
+'\n	background:'+o.accent+' !important;'
+'\n}'
+'\nbutton[data-selected] svg {'
+'\n	fill:'+o.primary+' !important;'
+'\n}'
+'\ninput, textarea, select, .input {'
+'\n	border-bottom:2px solid '+o.secondary+';'
+'\n	color:'+o.textd+';'
+'\n}'
+'\ninput:active, input:focus, .input:active, .input:focus {'
+'\n	color:'+o.textl+';'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\ninput[data-error], .input[data-error] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\nselect {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\nselect, select:focus {'
+'\n	background-image:linear-gradient(45deg, transparent 40%, '+o.text+' 50%), linear-gradient(135deg, '+o.text+' 50%, transparent 60%);'
+'\n}'
+'\noption {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.text+';'
+'\n}'
+'\n.tahweem {'
+'\n	background:'+o.accentt+';'
+'\n}'
+'\n.above {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n[data-sticky].headerui {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.tag {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n.icon svg, .icon img {'
+'\n	fill:'+o.textl+';'
+'\n}'
+'\n.accent {'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n.accent svg {'
+'\n	fill:'+o.accent+';'
+'\n}'
+'\n.red {'
+'\n	color:'+o.redl+';'
+'\n}'
+'\n.redbg {'
+'\n	background:'+o.redd+';'
+'\n}'
+'\nbutton.xaas {'
+'\n	background:'+o.secondaryd+';'
+'\n	border:4px solid '+o.secondaryl+';'
+'\n}'
+'\nbutton.xaas:focus {'
+'\n	background:'+o.accentl+';'
+'\n	border-color:'+o.accent+';'
+'\n	color:'+o.primary+';'
+'\n}'
+'\nbutton.xaas:active {'
+'\n	background:'+o.accent+';'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n#dimmer {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n#dimmertext {'
+'\n	color:'+o.textd+';'
+'\n	border:1px solid '+o.tertiary+';'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.header {'
+'\n	background:'+o.primary+';'
+'\n	color:'+o.accent+';'
+'\n}'
+'\n#webapp_status_ui .text {'
+'\n	box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	border:1px solid '+o.tertiaryl+';'
+'\n}'
+'\n#taht3nsar .text {'
+'\n	border:1px solid '+o.tertiaryd+';'
+'\n}'
+'\n#webapp_status_ui .text, #taht3nsar .text {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n[data-transparency] #webapp_status_ui .text, [data-transparency] #taht3nsar .text {'
+'\n	background:'+o.primaryt+';'
+'\n	border-color:'+o.secondaryt+';'
+'\n}'
+'\n@media (min-width:320px) {'
+'\n	#softkeysui .row2 button .tooltip {'
+'\n		border:1px solid '+o.secondaryd+';'
+'\n		background:'+o.primaryl+';'
+'\n	}'
+'\n	#softkeysui button .key {'
+'\n		background:'+o.secondaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	::-webkit-scrollbar {'
+'\n		background:'+o.primary+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb {'
+'\n		background:'+o.textd+';'
+'\n	}'
+'\n	::-webkit-scrollbar-thumb:active {'
+'\n		background:'+o.text+';'
+'\n	}'
+'\n}'
+'\n.list .a3laa {'
+'\n	background:'+o.secondaryt+';'
+'\n	color:'+o.textd+';'
+'\n	text-shadow:0px 1px '+o.secondary+';'
+'\n}'
+'\n[dir=rtl] .list .a3laa {'
+'\n	background:linear-gradient(45deg, transparent 50%, '+o.secondaryt+' 90%);'
+'\n}'
+'\n.list .item, .list .listitem {'
+'\n	border-bottom:1px solid '+o.secondary+';'
+'\n}'
+'\n.list .item:hover, .list .listitem:hover {'
+'\n	background:'+o.secondaryd+';'
+'\n}'
+'\n.list .item[data-baidaa], .list .listitem[data-baidaa] {'
+'\n	box-shadow:0 0 5px 2px '+o.accentl+', 0 0 5px 2px '+o.accentd+' inset;'
+'\n	border-color:'+o.accentd+';'
+'\n}'
+'\n.list .item[data-selected], .list .listitem[data-selected] {'
+'\n	border-color:'+o.textxd+';'
+'\n}'
+'\n[data-focussed].list .item[data-selected], [data-focussed].list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.primaryl+' -110%, '+o.secondaryd+' 220%);'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n[dir=rtl] .list .item[data-selected], [dir=rtl] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.tertiary+' -200%, '+o.secondary+' 110%);'
+'\n}'
+'\n[data-transparency] .list .item[data-selected], [data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, '+o.secondary+' 0%, transparent 220%);'
+'\n	border-bottom:1px solid '+o.accent+';'
+'\n}'
+'\n[dir=rtl][data-transparency] .list .item[data-selected], [dir=rtl][data-transparency] .list .listitem[data-selected] {'
+'\n	background:linear-gradient(45deg, transparent -220%, '+o.secondary+' 110%);'
+'\n}'
+'\n.list .body {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item .icon {'
+'\n	background:linear-gradient(200deg, '+o.primary+', transparent);'
+'\n}'
+'\n.list .item[data-selected] .icon {'
+'\n	background:linear-gradient(200deg, '+o.accent+', transparent);'
+'\n}'
+'\n.list .days {'
+'\n	color:'+o.textd+';'
+'\n}'
+'\n.list .item[data-selected] .days {'
+'\n	color:'+o.primaryl+';'
+'\n}'
+'\n[data-selected] [data-past] {'
+'\n	color:'+o.redd+' !important;'
+'\n}'
+'\n[data-past] {'
+'\n	color:'+o.redl+' !important;'
+'\n}'
+'\n.list [data-mufarraq] {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n[data-transparency] .list [data-mufarraq] {'
+'\n	background:'+o.primaryt+';'
+'\n}'
+'\n.list .item .tawassa3, .list .listitem .tawassa3 {'
+'\n	color:'+o.textl+';'
+'\n	background:'+o.tertiaryt+';'
+'\n	box-shadow:0 0 12px 0px '+o.primaryl+';'
+'\n}'
+'\n.soft_item:hover {'
+'\n	background:'+o.secondaryxd+';'
+'\n}'
+'\n.soft_item[data-selected] {'
+'\n	background:'+o.secondaryl+';'
+'\n	box-shadow:0 0 0 2px '+o.secondaryd+' inset;'
+'\n	border-color:'+o.accent+';'
+'\n}'
+'\n.settingsitem[data-selected] {'
+'\n	border:1px solid '+o.accent+' !important;'
+'\n}'
+'\n#softkeysui {'
+'\n	background:linear-gradient(0deg, '+o.primary+' 5%, '+o.primaryt+' 15%, transparent);'
+'\n}'
+'\n#softkeysui[data-hidden] {'
+'\n	background:linear-gradient(0deg, '+o.primaryt+' 0%, transparent);'
+'\n}'
+'\n#softkeys_backstack .dot {'
+'\n	border:1px solid '+o.primaryt+';'
+'\n	background:'+o.secondary+';'
+'\n}'
+'\n#softkeysui button {'
+'\n	background:'+o.primaryt+';'
+'\n	color:'+o.textl+';'
+'\n}'
+'\n#softkeysui button label {'
+'\n	border:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button {'
+'\n	border-top:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row1 button:hover {'
+'\n	box-shadow:0 0 25px 2px '+o.secondary+';'
+'\n}'
+'\n#softkeysui .row1 button:focus {'
+'\n	box-shadow:0 0 25px 2px '+o.accentd+';'
+'\n}'
+'\n#softkeysui .row2 button {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .row2 button:hover {'
+'\n	box-shadow:-20px 0 15px 0px '+o.secondary+' inset;'
+'\n}'
+'\n#softkeysui .row2 button:focus {'
+'\n	box-shadow:-20px 0 15px 0px '+o.accentd+' inset;'
+'\n}'
+'\n#softkeysui .left {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .center {'
+'\n	border-right:1px solid '+o.secondaryd+';'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\n#softkeysui .right {'
+'\n	border-left:1px solid '+o.secondaryd+';'
+'\n}'
+'\ninput[data-over], textarea[data-over], input[data-under], textarea[data-under] {'
+'\n	border-color:'+o.red+';'
+'\n}'
+'\n#sheetui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#sheetui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n#dialogui {'
+'\n	background:'+o.primary+';'
+'\n}'
+'\n@media (min-width:640px) {'
+'\n	#dialogui {'
+'\n		box-shadow:0 0 20px 5px '+o.tertiaryd+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui button {'
+'\n		background:'+o.primaryt+';'
+'\n		color:'+o.textl+';'
+'\n	}'
+'\n	#softkeysui .row1 button {'
+'\n		background:'+o.primaryt+';'
+'\n	}'
+'\n	#softkeysui button:active, #softkeysui button[data-lamsah] {'
+'\n		background:'+o.secondary+';'
+'\n		box-shadow:0 0 30px 6px '+o.tertiaryd+';'
+'\n	}'
+'\n	#softkeysui .row2, #skdots {'
+'\n		box-shadow:0 0 10px 0 '+o.tertiary+';'
+'\n	}'
+'\n	#skdots {'
+'\n		background:'+o.primaryt+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n@media (min-width:321px) {'
+'\n	#softkeysui .row2 [data-hawm="1"] span {'
+'\n		background:'+o.secondary+';'
+'\n		border:1px solid '+o.tertiary+';'
+'\n	}'
+'\n	#softkeysui .row2 {'
+'\n		background:'+o.primaryt+';'
+'\n		border-top:1px solid '+o.tertiary+';'
+'\n		border-left:1px solid '+o.tertiary+';'
+'\n		border-bottom:1px solid '+o.tertiary+';'
+'\n	}'
+'\n}'
+'\n[data-selected].bubble {'
+'\n	box-shadow:0 0 3px 0 '+o.accent+';'
+'\n}'
+'\n.control_item {'
+'\n	border:1px solid '+o.secondary+';'
+'\n}'
+'\n.control_item .icon {'
+'\n	background:linear-gradient(90deg, '+o.primaryxt+', transparent);'
+'\n}'
+'\n.control_item .icon svg {'
+'\n	fill:'+o.text+';'
+'\n}'
+'\n.control_item .switch {'
+'\n	background:linear-gradient(-90deg, '+o.primaryxt+', transparent);'
+'\n}';
};

/* 01 Jan 2017
* these are on demand
* included in the custom engine build process
* standard ECMA/JS shims
* don't include shims for non-standard JS features
* or vendor specific features here
* index engine/shims.js
* shims/node.js
* shims/dom-removenode.js
* shims/object-create.js
* shims/object-assign.js
* shims/string-trim.js
*/
if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
	};
}
var glatteis = {
};
/*
* a move to .then(cb) would be awesome or nuh?
* @todo indeed.
*/
var glatteisfn = function (name, fn) {
	if (name) {
		var mod = (glatteis._mods[name] || glatteis[name]);
		if (typeof fn === 'function') { // defer execution
			if (mod) { // if the mod is loaded or it's a core module
				fn(mod);
			} else {
				if (glatteis._paths[name]) { // if its path is defined
					glatteis.require(glatteis._paths[name], function(mod) {
						glatteis._mods[name] = mod;
						fn(mod);
					});
				}
			}
			return null; // the function will be called
		} else { // immediate execution
			return (mod || false);
		}
	}
	return false; // if name wasn't provided
};
var $ = $$ = glatteis = Object.assign(glatteisfn, glatteis);
if (typeof module === 'object') {
	module.exports = glatteis;
}
$.log = function () {
	console.log.apply(console, arguments);
};
;(function(){
	var proto = {
		s: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.log('+a+');');
		},
		e: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.error('+a+');');
		},
		w: function () {
			var a = '', str = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
				str += ' '+ arguments[b];
			}
			eval('console.warn('+a+');');
		},
		i: function () {
			var a = '';
			for (var b in arguments) {
				if (b > 0) {
					a = a+', ';
				}
				a = a+'arguments['+b+']';
			}
			eval('console.info('+a+');');
		}
	};
	$.log = Object.assign($.log, proto);
})();
;(function (){
	/*
	* takes a function with a unique name, if a function with this name is
	* provided again, it delays the exec of that function by a few ms
	*
	* calling without fn will just clear the timeout on that id
	* */
	var taxeeraat = {};
	$.taxeercancel = function (id) {
		clearTimeout(taxeeraat[id]);
	};
	$.taxeer = function (id, fn, customdelay, nofurtherdelay) {
		customdelay = customdelay || 300;
		if ( nofurtherdelay && taxeeraat[id] ) return;
		if ( taxeeraat[id] ) {
			clearTimeout( taxeeraat[id] );
			taxeeraat[id] = undefined;
		}
		if ( typeof fn === 'function' ) {
			taxeeraat[id] = setTimeout( function () {
				fn(function () {
					$.taxeer(id, fn, customdelay, nofurtherdelay);
				});
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};
})();
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	return object;
};
$.regex = $.re;
/*
* this restores the initial module.exports = {} from
* = glatteis by ._c
* inclusion in other parent scripts after concatenation &
* uglification
*/
$._r = function () {
	module.exports = glatteis;
};
/*
* used only when mods are concat'd
* if no ._name property is present in mod, use the name argument
* if no name argument, return false
*/
$._c = function (name) {
	var mod = module.exports;
	module.exports = {};
	if (mod instanceof Object
		&& (typeof(name) === 'string' || typeof(mod._name) === 'string')
	) {
		if (typeof(mod._name) === 'string') {
			glatteis._mods[mod._name] = mod;
		} else {
			glatteis._mods[name] = mod;
		}
		return true;
	}
	return false;
};
$._paths = {
};
$._mods = {
};
$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};
$.unload = function (mods, fn) {
	/*
	* @TODO: delete/unload mods from memory
	* run ._unload per mod for a graceful exit
	* once all mods are unloaded in a chain/order -> call fn
	*/
};
;(function (){
	var _arrayPrototype = {
		set: function (id, object) {
			if (this._keys[id] !== undefined) { // update
				if (typeof object === 'function') {
					this._array[this._keys[id]] = object(this._array[this._keys[id]]);
				} else {
					this._array[this._keys[id]] = object;
				}
				typeof this.onset === 'function' && this.onset(object, id);
			} else { // add
				if (typeof object === 'function') {
					this._keys[id] = this._array.push(
												object(this._array[this._keys[id]])
											) - 1;
				} else {
					this._keys[id] = this._array.push(object) - 1;
				}
				typeof this.onadd === 'function' && this.onadd(object, id);
				++this.length;
			}
			return this;
		},
		alter: function (id, object) {
			var item = this.get(id);
			if (item) {
				this.set( id , Object.assign( item, object ) );
			}
			return this;
		},
		pop: function (id) {
			if (this._keys[id] !== undefined) {
				typeof this.onpop === 'function' && this.onpop(id);
				this._array[this._keys[id]] = undefined;
				delete this._keys[id];
				--this.length;
			}
			return this;
		},
		popall: function (array) {
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.pop( array[i] );
			}
		},
		get: function (id) {
			if (this._keys[id] > -1) {
				return this._array[ this._keys[id] ];
			} else {
				return undefined;
			}
		},
		each: function (fn) {
			if (typeof fn === 'function') {
				for (var i in this._array) {
					if (this._array[i] !== undefined) {
						var val = fn(this._array[i], i);
						if (val !== undefined) {
							this._array[i] = val;
						}
					}
				}
			}
		},
		/*
		* this supports both native and Ge arrays
		* id is the prop name in array that you want to be the id
		* */
		setall: function (id, array) {
			this._id = id;
			if (typeof array.toNative === 'function') array = array.toNative();
			for (var i in array) {
				this.set( array[i][id], array[i] );
			}
		},
		unique: function () {
			var uniquearray = [];
			this._array.forEach(function (item) {
				if (uniquearray.indexOf(item) === -1)
					uniquearray.push(item);
			});
			return uniquearray;
		},
		order: function (order) {
			var ordered = [];
			for (var i in order) {
				var val = order[i];
				var index = this._array.indexOf(val);
				if (index > -1) {
					ordered.push( this._array[index] );
					this._array.splice(index, 1);
				}
			}
			return ordered.concat(this._array);
		},
		slice: function (from, to) {
			var nativearr = $.array();
			this.each(function (item, i) {
				if (i >= from && i <= to)
					nativearr.set(item.uid, item);
			});
			return nativearr;
		},
		/*
		* id is the prop name in array that you want to be the id
		* key is the prop you want to compare for order
		* */
		sort: function (reverse, key, id) {
			var temparray = this.toNative();
			if (typeof reverse === 'function') {
				temparray.sort(reverse);
			} else {
				temparray.sort(function (a, b) {
					if (reverse) {
						if (key) {
							return b[key]-a[key];
						} else {
							return b-a;
						}
					} else {
						if (key) {
							return a[key]-b[key];
						} else {
							return a-b;
						}
					}
				});
			}
			if (id || this._id) {
				this._array = [];
				this.length = 0;
				this._keys = {};
				this.setall(id || this._id, temparray);
			}
			return this;
		},
		/*reverse: function (id, order) {
			this._array.reverse();
			this.setall(id, this._array);
			return this;
		},*/
		/*
		* the new non-camelcase format in effect since 29nov2018
		* returns all keys that are not 'undefined'
		* returns native array
		* */
		tokeys: function () {
			var arr = [], keys = Object.keys(this._keys);
			for (var i in keys) {
				if (keys[i] !== undefined)
					arr.push( keys[i] );
			}
			return arr;
		},
		saabiq: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index-1; i >= 0; --i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		qaadim: function (uid) {
			var index = this._keys[uid];
			if (!isundef(index) && index > -1) {
				for (var i = index+1; i < this._array.length; ++i) {
					if (!isundef(this._array[i])) {
						return this._array[i];
					}
				}
			}
		},
		eawwad: function (uid, uid2) { // swap objects in array to change order
			var index = this._keys[uid];
			var index2 = this._keys[uid2];
			if (index > -1 && index2 > -1) {
				this._keys[uid] = index2;
				this._keys[uid2] = index;
				var temp = this._array[index];
				this._array[index] = this._array[index2];
				this._array[index2] = temp;
			}
		},
		toNative: function () {
			var arr = [];
			for (var i in this._array) {
				if (this._array[i] !== undefined) {
					arr.push(this._array[i]);
				}
			}
			return arr;
		}
	};
	$.array = function (prearray, id) {
		var newqueue = Object.create(_arrayPrototype);
		prearray = prearray || [];
		if (typeof prearray.toNative === 'function') prearray = prearray.toNative();
		newqueue._array = prearray;
		newqueue._keys = {};
		newqueue._id = id;
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});
		newqueue.length = newqueue._array.length;
		return newqueue;
	};
	$.array.clean = function (arr) {
		var arr2 = [];
		if (arr) arr.forEach(function (item, i) {
			arr2.push(item);
		});
		return arr2;
	};
})();
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
				this._didinit = true;
				this._didrun = false;
				this.queuearray = [];
				this.active = false;
				this.count = 0;
				this.uid = false;
				this._onnext = false;
				this._onfinish = false;
			}
		},
		_next: function (queue, extra) {
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
			if (queue.muntahaa) return;
			if (typeof queue._onnext === 'function') {
				if (queue.queuearray.length > 0) {
					queue.uid = queue.queuearray.length;
					queue.active = true;
					var worker = queue.queuearray.pop();
					var done = function (queue, extra) {
						queue._onnext(queue._next, queue, extra);
					};
					worker(done, queue, extra);
					return false;
				} else {
					queue.active = false;
					--queue.count;
					if (typeof queue._onfinish === 'function') {
						queue._onfinish(queue, extra);
					}
					return false;
				}
			}
		},
		intahaa: function () {
			this.muntahaa = 1
		},
		set: function (worker) {
			this._init();
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			return this;
		},
		run: function (_onfinish) {
			this.onfinish(_onfinish);
			var queue = this;
			queue._init();
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			if (!queue._didrun
			&& typeof queue._onnext === 'function') {
				queue._didrun = true;
				queue._process(queue);
			}
		},
		onnext: function (cb) {
			if (typeof cb === 'function') {
				this._onnext = cb;
			}
		},
		onfinish: function (cb) {
			if (typeof cb === 'function') {
				this._onfinish = cb;
			}
		}
	};
	$.queue = function (onnext, onfinish) {
		var newqueue = Object.create(_queuePrototype);
		newqueue._init();
		if (typeof onnext === 'function') {
			newqueue._onnext = onnext;
		}
		if (typeof onfinish === 'function') {
			newqueue._onfinish = onfinish;
		}
		return newqueue;
	};
})();
;(function (){
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;
				if (this.active === true)
					return this.cnt;
				else
					return this.process(this);
			},
			/* TODO
			* when requests are queued too fast, it gets stuck on the last
			* request and never processes it unless queue is called again
			* or process is called manually
			*
			* fix this asap, it's an ugly prob
			* */
			process: function (carriedthis) {
				carriedthis = carriedthis || this;
				if (carriedthis._array.length && !carriedthis.active) {
					carriedthis.id = carriedthis._array.length;
					carriedthis.active = true;
					var options = carriedthis._array.pop();
					{
						if (options.uri.match(/http.*\:\/\//) === null) {
							if (typeof nw === 'object') {
								options.uri = 'file://'+options.uri;
							}
						}
						var request;
						var shorty = options.uri;
						if (window.XMLHttpRequest) {
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
						request.timeout = carriedthis.fetchtimeout || $.fetchtimeout;
						carriedthis.cur = request;
						if (options.type == 'get') {
							request.open('GET', options.uri, true);
						} else {
							request.open('POST', options.uri, true);
							if (!options.headers)
								request.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset = UTF-8");
						}
						if (options.headers instanceof Object) {
							Object.keys(options.headers).forEach(function (key) {
								request.setRequestHeader(key, options.headers[key]);
							});
						}
						(request.upload ? request.upload : request).onprogress = function (event) {
							if (event.lengthComputable && typeof carriedthis.progressfn === 'function') {
								carriedthis.progressfn(event.loaded, event.total);
							}
						};
						var onend = function (errtype) {
							typeof options.callback === 'function' && options.callback('', errtype || request.status);
							carriedthis.cnt++;
							carriedthis.process(carriedthis);
							carriedthis.active = false;
							return carriedthis.cnt;
						};
						request.onreadystatechange = function() {
							if (request.readyState == 4) {
								if (request.status === 200) {
									typeof options.callback === 'function' && options.callback(request.responseText);
									carriedthis.cnt++;
									carriedthis.process(carriedthis);
									carriedthis.active = false;
									return carriedthis.cnt;
								} else {
									onend(request.status);
								}
							}
						}
						request.onabort = function () {
							onend(-100);
						};
						request.ontimeout = function () {
							onend(-200);
						};
						request.onerror = function () {
							onend(-300);
						};
						request.send( options.type == 'get' ? null : options.payload );
					}
					return false;
				} else {
					carriedthis.active = false; carriedthis.cnt = 0;
					return false;
				}
			},
		};
		var newobject = Object.create(queuerequest);
		return newobject;
	};
	/*
	* (s)cript location is required, (c)allback function is passed the
	* responseText as the first argument
	* (e)xecute the script before the callback function
	* this is fetch 2.0 now
	* it tries to implement a very basic form of ES6 fetch + then
	* it uses a barebones promise without depending on JS base Promise or
	* Response class
	*
	* channels: strings that identify separate independent queues of requests
	* for example in web apps, one for regular sync requests and another for
	* listening for events from the server
	*/
	$.fetchtimeout = 30 * 1000;
	$.fetchcancel = function (channel) {
		channel = $.fetchchannels[channel || 1];
		if ( channel ) {
			channel._array = [];
			if (channel.cur)
				channel.cur.abort();
			channel.active = false;
			channel.cnt = 0;
			channel.cur = 0;
		}
	};
	$.fetchchannels = {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		var response = false,
			thencb = false,
			thenfn = function (callback) {
				if (response) {
					if (typeof callback === 'function') callback(response);
				} else {
					thencb = callback;
				}
			};
		if ( !$.fetchchannels[channel] ) {
			$.fetchchannels[channel] = /*Object.create(queuerequest)*/ $.queuerequest();
			$.fetchchannels[channel].name = channel;
			$.fetchchannels[channel].fetchtimeout = fetchtimeout || $.fetchtimeout;
		}
		if (typeof progressfn === 'function')
			$.fetchchannels[channel].progressfn = progressfn;
		$.fetchchannels[channel].queue({
			uri: uri,
			payload: (data || null),
			headers: headers || 0,
			type: (data ? 'post' : 'get'),
			callback: function (body, err) {
				try {
					if (typeof thencb === 'function') {
						thencb({
							body: body,
							err: err
						});
					}
				} catch (e) {
					glatteis.log.e(e);
				}
			}
		});
		return {
			then: thenfn
		};
	};
})();
$._r();
$.b = 2;
'use strict';
var taraajim = {"en":{"network":"Network","offlinesince":"Offline since","settings":"Settings","requestfeat":"Request Feature","reportbug":"Report Bug","author":"Author","build":"Build","openad":"Ad","quality":"Quality","largetext":"Large Text","transparency":"Transparency","calendar":"Calendar","hijri":"Hijri","gregorian":"Gregorian","builton":"Built On","skhelp":"Press # for actions","softkeystouchdpad":"Touch D-Pad","theme":"Theme","black":"Black","white":"White","contrast":"Contrast","high":"High","low":"Low","infuture":"in","justnow":"just now","sseconds":"s","secondsago":"secs","aminuteago":"a min","minute":"min","sminutes":"m","minutes":"mins","minutesago":"mins","anhourago":"an hr","hourago":"hr","hoursago":"hrs","yesterday":"yesterday","tomorrow":"tomorrow","adayago":"a day","dayago":"d","daysago":"d","lastmonth":"last month","monthago":"mo","monthsago":"mo","lastyear":"last year","yearago":"y","yearsago":"y","alongtime":"a long time","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday",",":",","am":"am","pm":"pm","st":"st","nd":"nd","rd":"rd","th":"th","timeformat":"Time Format","hours24":"24 hour","hours12":"12 hour","language":"Language","en":"English","ar":"Arabic","ur":"Urdu","ru":"Russian","de":"German","es":"Spanish","loading":"Loading...","exiting":"Exiting...","newversionfound":"New version found","appcachefailed":"Failed to cache app, you can still use it but it will be slow to start","unsupported":"Your device can't run this app","swunsupported":"Your browser doesn't support Service Workers","appcachedoffline":"App cached offline, it will load faster next time!","off":"Off","on":"On","animations":"Animations","webapptouchdir":"Touch affects direction"}};
var Hooks, hooks;
;(function (){
	'use strict';
	var getargs = function (start_at, oldargs) {
		var args = [];
		for (var i = start_at || 0; i < oldargs.length; ++i) {
			args.push( oldargs[i] );
		}
		return args;
	};
	Hooks = {
		_registry_first: {},
		_registry: {},
		_map: {},
		_uid: 0,
		set: function (hook, id, fn, priority) {
			if (hook instanceof Array) {
				hook.forEach(function (item) {
					Hooks.set(item, id, fn, priority);
				});
				return;
			}
			var registry = Hooks._registry;
			if (priority) registry = Hooks._registry_first;
			if (typeof id === 'function')
				fn = id, id = new Date().getTime();
			if (typeof fn === 'function') {
				if (registry[hook] === undefined) {
					registry[hook] = [];
				}
				++Hooks._uid;
				registry[hook][Hooks._uid] = fn;
				Hooks._map[hook+'_'+id] = Hooks._uid;
				return true;
			}
			return false;
		},
		set_first: function (hook, id, fn) {
			return this.set(hook, id, fn, 1);
		},
		run: function (hook, extras) {
			var args = getargs(1, arguments);
			var handlers_first = Hooks._registry_first[hook];
			var handlers = Hooks._registry[hook];
			if (handlers_first instanceof Array || handlers instanceof Array) {
				handlers = ( handlers_first || [] ).concat( handlers || [] );
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						handlers[i].apply(handlers[i], args);
					}
				}
				return true;
			}
			return false;
		},
		rununtilconsumed: function (hook, extras) { // use .until instead if u want a promise
			var args = getargs(1, arguments);
			var handlers_first = Hooks._registry_first[hook];
			var handlers = Hooks._registry[hook];
			if (handlers_first instanceof Array || handlers instanceof Array) {
				handlers = ( handlers_first || [] ).concat( handlers || [] );
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = handlers[i].apply(handlers[i], args);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		until: async function (hook, extras) { // uses promises
			var args = getargs(1, arguments);
			var handlers_first = Hooks._registry_first[hook];
			var handlers = Hooks._registry[hook];
			if (handlers_first instanceof Array || handlers instanceof Array) {
				handlers = ( handlers_first || [] ).concat( handlers || [] );
				for (var i in handlers) {
					if (typeof handlers[i] === 'function') {
						var returnedvalue = await handlers[i].apply(handlers[i], args);
						if (returnedvalue) {
							return returnedvalue;
						}
					}
				}
			}
			return false;
		},
		pop: function (hook, id) {
			if (Hooks._registry_first[hook]) {
				delete Hooks._registry_first[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			if (Hooks._registry[hook]) {
				delete Hooks._registry[hook][ Hooks._map[hook+'_'+id] ];
				return true;
			}
			return false;
		},
		hook: function (hook) {
			Hooks._registry_first[hook] = [];
			Hooks._registry[hook] = [];
		},
		unhook: function (hook) {
			delete Hooks._registry_first[hook];
			delete Hooks._registry[hook];
		}
	};
	module.exports = Hooks;
	hooks = Hooks;
})();
var
get_global_object = function () { // to check module prop in window.* or global.*
	return window || {}; // TODO add global safely
},
generate_alias = function (o, l) { // this replaces helpers.alias database.alias wuqu3aat.alias
	o = o || '';
	if (o.length === 0) return '';
	l = l || 255;
	o = o.substr(0, l)
		.replace(/\%/g, ' pct' )
		.replace(/\@/g, ' at ' )
		.replace(/\&/g, ' and ' )
		.replace(/[$-\-/:-?\{\}-~!"^_`\[\]@#]/g, '-' ) // symbols
		.replace(/[^.\d\wa-zA-Z0-9ا-ےÄäÜüÖößЀ-ҁҊ-ӿÇçĞğŞşIıÜüﻙ]+/g, '-' ) // most alphanums
		.replace(/\s[\s]+/g, '-' )
		.replace(/[\s]+/g, '-' )
		.replace(/^[\-]+/g, '' )
		.replace(/[\-]+$/g, '' )
		.replace(/\-\-/g, '-' )
		.replace(/\.\-/g, '.' )
		.replace(/\-\./g, '.' )
		.replace(/^\./g, '' )
		.replace(/\.$/g, '' )
		.trim()
		.toLowerCase();
	return o;
},
stringify = function (o) {
	return JSON.stringify(o);
},
parsejson = function (o) {
	return JSON.parse(o);
},
mubaaraat = function (str, re) {
	return (str.match(re)||[])[0];
},
tabdeel = function (str, arr) {
	if (isstr(str) && isarr(arr)) {
		for (var i = 0; i < arr.length; i += 2) {
			str = str.replace(arr[i], arr[i+1]);
		}
	}
	return str;
},
deepcopy = function (v) {
},
isundef = function (v) {
	return v === undefined;
},
isstr = function (v) {
	return typeof v == 'string';
},
isfinite = function (v) {
	return Number.isFinite(v);
},
isnan = function (v) {
	return Number.isNaN(v);
},
isnum = function (v) {
	return typeof v == 'number' && !isnan(v) && isfinite(v);
},
isfun = function (v) {
	return typeof v == 'function';
},
isarr = function (v) {
	return v instanceof Array;
},
areobjectsequal = function (a, b) { // only compares primitives bw 2 objs
	var same = 1;
	if (a && b && Object.keys(a).length === Object.keys(b).length)
	for (var i in a) {
		if (a[i] !== b[i]) {
			same = 0;
			break;
		}
	}
	else same = 0;
	return same;
},
zero = function (num) {
	return num < 10 ? '0'+num : num;
},
collapsearray = function (arr) {
	var arr2 = [];
	arr.forEach(function (e) {
		if (!isundef(e)) arr2.push(e);
	});
	return arr2;
},
array2string = function (arr) { // [ 1, 2 ] -> " 1 2"
	return ' '+arr.join(' ');
},
intersect = function (arr, superset) { // [ num, num, ... ]
	var arr2 = [];
	arr.forEach(function (item) {
		if (!isundef(superset[ item ])) arr2.push(item);
	});
	return arr2;
},
shallowcopy = function (v) { // return a copy of array of objs or just one obj
	if (isnum(v) || isstr(v)) {
		return v;
	} else
	if (v instanceof Array) {
		var v2 = [];
		v.forEach(function (item) {
			v2.push( Object.assign({}, item) );
		});
		return v2;
	}
	else {
		return Object.assign({}, v);
	}
},
parseint = function (v, r) {
	return parseInt(v, r);
},
parsefloat = function (v, n) {
	if (n) v = parseFloat(v).toFixed(n);
	return parseFloat(v);
},
parsestring = function (v, m) { // forces v to be a string, maximum
	if (isstr(v)) {}
	else if (isnum(v)) v = String(v);
	else v = '';
	if (isnum(m)) v = v.substr(0, m);
	return v;
},
is_truthy = function (v) { return [true , 'true' , '1', 1, 'y', 'yes'].includes(v) || !!v; },
is_falsy = function (v) { return [false, 'false', '0', 0, 'n', 'no' ].includes(v) || !v; },
to_bool = function (v) { return is_truthy(v) ? true : false; },
to_bool_num = function (v) { return is_truthy(v) ? 1 : 0; },
to_str_or_num = function (v) {
	if (isundef(v)) return;
	else if (isnum(v) || isstr(v)) return v;
	else return parsestring(v);
},
to_num = function (v) { // forces v to be an integer or float or undefined
	if (isundef(v)) return;
	else if (isnum(v) || isstr(v)) {
		v = Number(v);
		if (isnan(v)) return;
		return v;
	}
	return;
},
intify = function (arr) {
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = parseint(arr[i]);
	}
	return arr;
},
tolower = function (s) {
	return (s||'').toLowerCase();
},
toupper = function (s) {
	return (s||'').toUpperCase();
};
var
is_partly_visible = function (el, partiallyVisible = true) {
	const { top, left, bottom, right } = el.getBoundingClientRect();
	const { innerHeight, innerWidth } = window;
	return partiallyVisible
		? ((top > 0 && top < innerHeight) ||
			(bottom > 0 && bottom < innerHeight)) &&
			((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
},
select_content = function (e, start, end) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		if (isnum(start)) {
			e.selectionStart = start || 0;
			e.selectionEnd = end || start || 0;
		} else if (isfun(e.select)) {
			e.select();
		}
	} else {
		function getTextNodesIn(node) {
			var textNodes = [];
			if (node.nodeType == 3) {
				textNodes.push(node);
			} else {
				var children = node.childNodes;
				for (var i = 0, len = children.length; i < len; ++i) {
					textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
				}
			}
			return textNodes;
		}
		if (document.createRange && window.getSelection) {
			var range = document.createRange();
			range.selectNodeContents(e);
			var textNodes = getTextNodesIn(e);
			var foundStart = false;
			var charCount = 0, endCharCount;
			for (var i = 0, textNode; textNode = textNodes[i++]; ) {
				endCharCount = charCount + textNode.length;
				if (!foundStart && start >= charCount
						&& (start < endCharCount ||
						(start == endCharCount && i <= textNodes.length))) {
					range.setStart(textNode, start - charCount);
					foundStart = true;
				}
				if (foundStart && end <= endCharCount) {
					range.setEnd(textNode, end - charCount);
					break;
				}
				charCount = endCharCount;
			}
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range);
		} else if (document.selection && document.body.createTextRange) {
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(e);
			textRange.collapse(true);
			textRange.moveEnd("character", end);
			textRange.moveStart("character", start);
			textRange.select();
		}
	}
},
get_caret_position = function (e) {
	if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
		return [e.selectionStart, e.selectionEnd];
	}
var start = 0;
var end = 0;
var doc = e.ownerDocument || e.document;
var win = doc.defaultView || doc.parentWindow;
var sel;
if (typeof win.getSelection != "undefined") {
sel = win.getSelection();
if (sel.rangeCount > 0) {
var range = win.getSelection().getRangeAt(0);
var preCaretRange = range.cloneRange();
preCaretRange.selectNodeContents(e);
preCaretRange.setEnd(range.startContainer, range.startOffset);
start = preCaretRange.toString().length;
preCaretRange.setEnd(range.endContainer, range.endOffset);
end = preCaretRange.toString().length;
}
} else if ( (sel = doc.selection) && sel.type != "Control") {
var textRange = sel.createRange();
var preCaretTextRange = doc.body.createTextRange();
preCaretTextRange.moveToElementText(e);
preCaretTextRange.setEndPoint("EndToStart", textRange);
start = preCaretTextRange.text.length;
preCaretTextRange.setEndPoint("EndToEnd", textRange);
end = preCaretTextRange.text.length;
}
return [start, end];
},
enc = function (v) {
	return encodeURIComponent(v);
},
dec = function (v) {
	return decodeURIComponent(v);
},
encp = function (v) {
	return encodeURI(v);
},
decp = function (v) {
	return decodeURI(v);
},
innerhtml = function (obj, v) {
	obj.innerHTML = v;
},
setvalue = function (obj, v) {
	obj.value = v;
},
scroll_by = function (x, y, a) {
	scrollBy({ left: x, top: y, behavior: a ? 'smooth' : 'instant' });
},
scroll_to = function (x, y, a) {
	scrollTo({ left: x, top: y, behavior: a ? 'smooth' : 'instant' });
},
scrollintoview = function (obj) {
	obj && obj.scrollIntoView(1);
},
scroll_into_view_with_padding = function (e, padding) {
	var rect = e.getBoundingClientRect();
	var padt, padb, pads, pade;
	padt = padb = padding || 0;
	if (isarr(padding)) {
		if (padding.length == 2) { // [v, h]
			padt = padb = padding[0];
			pads = pade = padding[1];
		}
		if (padding.length == 4) { // cw [t, e, b, s]
			padt = padding[0];
			pade = padding[1];
			padb = padding[2];
			pads = padding[3];
		}
	}
	var se = scrollingelement(), top;
	if (rect.y < padt) {
		top = padt;
	} else if (rect.y >= innerheight()-padb) {
		top = innerheight()+padb; // extra to compensate for element height
	}
	if (isnum(top)) scrollTo({ top: top, behavior: 'smooth' });
},
prevsibling = function (obj) {
	return obj.previousElementSibling;
},
nextsibling = function (obj) {
	return obj.nextElementSibling;
},
getattribute = function (obj, k) {
	return obj.getAttribute(k);
},
attribute = function (obj, k, v) {
	v == '' ? obj.removeAttribute(k) : obj.setAttribute(k, v);
},
setcss = function (obj, k, v) {
	if (v === undefined)
		obj.style[k] = '';
	else
		obj.style[k] = v;
},
getcss = function (obj, k) {
	return obj.style[k];
},
popdata = function (obj, k, v) {
	if (obj) delete obj.dataset[k];
},
setdata = function (obj, k, v) {
	if (obj) obj.dataset[k] = v;
},
getdata = function (obj, k) {
	return obj.dataset[k];
},
innertext = function (obj, v) {
	if (isundef(v)) return obj.innerText;
	else obj.innerText = v;
},
innerwidth = function (v) { // returns width + v
	return innerWidth + (v||0);
},
innerheight = function (v) {
	return innerHeight + (v||0);
},
hasownprop = function (obj, i) {
	if (obj && obj.hasOwnProperty)
		return obj.hasOwnProperty(i);
},
izhar = function (v) {
	for (var v of arguments) {
		v.hidden = 0;
	}
},
ixtaf = function () {
	for (var v of arguments) {
		v.hidden = 1;
	}
},
isixtaf = function (v) {
	return v.hidden || getattribute(v, 'type') == 'hidden';
},
markooz = function () {
	return document.activeElement;
},
preventdefault = function (obj) {
	obj && obj.cancelable && obj.preventDefault && obj.preventDefault();
},
raycast = function (x, y) {
	return document.elementsFromPoint(x, y);
},
elementbyid = function (id) {
	return document.getElementById(id);
},
listener = function (obj, name, fn, o) {
	if (typeof obj === 'string' || obj instanceof Array)
		o = fn,
		fn = name,
		name = obj,
		obj = window;
	if (name instanceof Array) {
		name.forEach(function (item) {
			obj.addEventListener(item, fn, o);
		});
	} else obj.addEventListener(name, fn, o);
},
createelement = function (name, classes, id) {
	var e = document.createElement(name||'div');
	if (classes) e.className = classes;
	if (id) e.id = id;
	return e;
},
tahmeel = function (filename, text, mimetype, encode) { // download file with a name
	var e = createelement('a'), prefix = '';
	if (mimetype !== false) prefix = (mimetype||'data:text/plain;charset=utf-8,');
	if (encode !== false) text = encodeURIComponent(text);
	attribute(e, 'href', prefix + text);
	attribute(e, 'download', filename);
	setcss(e, 'display', 'none');
	document.body.appendChild(e);
	e.click();
	document.body.removeChild(e);
},
iswithinelement = function (arr, element) {
	var a = arr[0],
		b = arr[1],
		x = element.offsetLeft,
		y = element.offsetTop,
		w = x+element.offsetWidth,
		h = y+element.offsetHeight;
	return (a >= x && a <= w && b >= y && b <= h);
},
getposition = function (el) {
	var x = 0, y = 0, w = 0, h = 0;
	if (el) {
		var pos = el.getBoundingClientRect();
		x = pos.x; y = pos.y;
		w = pos.width; h = pos.height;
	}
	return [x, y, w, h];
},
get_bounds = getposition,
replacewith = function (el, el2) {
	el.replaceWith(el2);
};
;(function(){
	var replacewithpolyfill = function () {
	'use-strict'; // For safari, and IE > 10
	var parent = this.parentNode, i = arguments.length, currentNode;
	if (!parent) return;
	if (!i) // if there are no arguments
		parent.removeChild(this);
	while (i--) { // i-- decrements i and returns the value of i before the decrement
		currentNode = arguments[i];
		if (typeof currentNode !== 'object'){
		currentNode = this.ownerDocument.createTextNode(currentNode);
		} else if (currentNode.parentNode){
		currentNode.parentNode.removeChild(currentNode);
		}
		if (!i) // if currentNode is the first argument (currentNode === arguments[0])
		parent.replaceChild(currentNode, this);
		else // if currentNode isn't the first
		parent.insertBefore(currentNode, this.nextSibling);
	}
	}
	if (!Element.prototype.replaceWith)
		Element.prototype.replaceWith = replacewithpolyfill;
	if (!CharacterData.prototype.replaceWith)
		CharacterData.prototype.replaceWith = replacewithpolyfill;
	if (!DocumentType.prototype.replaceWith)
		DocumentType.prototype.replaceWith = replacewithpolyfill;
})();
var Webapp, webapp, appname = 'linux-dashboard' || '',
	Offline = Offline || 0,
	pager = pager || 0,
	Pager = Pager || 0,
	Checkbox = Checkbox || 0,
	preferences = preferences || 0,
	translate = translate || 0,
	rakkazawwal, focus_first_element, focusprev, focusnext, navigables, is_navigable,
	LAYERTOPMOST = 3000;
;(function(){
	var doc = document, bod = doc.body, wakelockstatus, isalbixraaj;
	navigables = ['input', 'textarea', 'button', 'a', 'select'];
	is_navigable = function (e) {
		return navigables.includes(e.tagName.toLowerCase()) || e.contentEditable == 'true';
	};
	focus_first_element = rakkazawwal = function (e, scroll) {
		if (e) {
			var s = e.querySelector('input, textarea, button, a, select, [contenteditable]');
			if (s) {
				s.focus();
				if (scroll) webapp.scrollto(s);
				return s;
			}
		}
	};
	/* FOCUS how this works
	* for elements inside other formating elements, set data-focus on each parent
	* this hints to this algo to go up a parent
	* */
	focusprev = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.previousElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.previousElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.last();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.lastElementChild ) {
				out = focusprev(element.lastElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusprev( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusprev( element.parentElement, 0, ++num );
		} else {
			/* BUG
			* come up with a solution for this
			* */
		}
		if (markooz() === element) {
			element.onprev && element.onprev(element);
		}
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected++;*/ // to avoid a +1 jump
			return out;
		}
	};
	focusnext = function (element, thisone, num) {
		var orig = element, out, LV;
		num = num || 0; if (num > 100) return;
		while ( element.nextElementSibling && num < 100 ) {
			++num;
			element = thisone ? element : element.nextElementSibling;
			if (isixtaf(element)) {
			} else if ( element.dataset.focus == 'list' ) {
				LV = element.listobject;
				if (LV.length()) {
					webapp.blur();
					element.focus();
					LV.first();
					LV.rakkaz(1, 1);
					out = element;
					break;
				}
			} else if ( element.dataset.focus && element.firstElementChild ) {
				out = focusnext(element.firstElementChild, 1, ++num);
				break;
			}
			else if ( is_navigable( element ) ) {
				element.focus();
				out = element;
				break;
			}
			if (thisone) thisone = 0; // after first run, go to the next element
		}
		if ( out ) {}
		else if ( element.dataset.focus == 1 ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		else if ( element.parentElement.dataset.focus ) {
			return focusnext( element.parentElement, 0, ++num );
		}
		/* BUG CASE
		* changed this to orig because i wasn't able to override this inside
		* a listitem with an input element, on pressing down it kept replacing
		* element with the nextsibling (see above while loop) :(
		* more testing needed
		* */
		orig.onnext && orig.onnext(orig);
		if (out) {
			if (orig && orig.listobject) {
				orig.listobject.deselect();
			} /*else LV && LV.selected--;*/ // to avoid a +1 jump
			return out;
		}
	};
	var viewsindex = {}, header_keys,
		getform = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var payload = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].getvalue)
						payload[ otherviews[i].dataset.id ] = otherviews[i].getvalue();
					else
						payload[ otherviews[i].dataset.id ] = otherviews[i].value;
/*
					if (otherviews[i] instanceof HTMLSelectElement) {
						otherviews[i].value = 0;
					}
					else if ( ['text', 'textarea'].includes(otherviews[i].type) ) {
						otherviews[i].value = '';
					}
					else {
					}
*/
				}
			}
			return payload;
		},
		getformkeys = function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		/*
		* this version lets you setup custom callbacks for forms
		* each call sends you three things
		* cb(formelement, pressedbutton, payload)
		* */
		sendform = function (element, button) {
			var payload, keys;
			if (element) {
				payload = getform(element);
				keys = getformkeys(element);
			} else {
				element = {
					id: button.dataset.form,
				};
			}
			Hooks.run('domformdata', {
				form: element,
				button: button,
				payload: payload,
				keys: keys,
			});
		},
		setupforms = function () {
			var sendbuttons = doc.querySelectorAll('.form .send');
			for (var i in sendbuttons) {
				if ( sendbuttons.hasOwnProperty(i) ) {
					sendbuttons[i].onclick = function () {
						sendform( doc.querySelector( '#'+this.dataset.form ), this );
					};
				}
			}
			var counts = doc.querySelectorAll('.form label.count');
			for (var i in counts) {
				var countlabel = counts[i];
				if ( counts.hasOwnProperty(i) ) {
					var field = countlabel.parentNode.nextElementSibling;
					field.oninput = function () {
						this.previousElementSibling.lastElementChild.innerText = (this.value || '').length;
					};
					field.oninput();
				}
			}
		};
	/*
	* webapp features like 3inch handles linked-modules functionality example:
	* when backstack reports darajah, 3inch updates softkeys
	* */
	Webapp = webapp = {
		visible: 1,
		isdimmed: 0,
		has_focus: () => document.hasFocus(),
		/* an array of features that can be check like
		* 'feature' in window OR
		* in Navigator OR
		* in navigator
		* even if a singe one fails, an error is shown
		* */
		lavaazim: function (inwindow) {
			inwindow = inwindow || [];
			var err;
			for (var i in inwindow) {
				var feature = inwindow[i];
				if ( feature in window
					|| feature in navigator
					|| feature in Navigator ) {
				} else {
					err = 1;
					break;
				}
			}
			if (err) {
				Webapp.header( translate && translate('unsupported') );
				return 0;
			} else {
				Webapp.header();
				return 1;
			}
		},
		blur: function () {
			var ae = markooz();
			ae && ae.blur();
			blur();
			return ae;
		},
		header: function (text, align, original_keys) {
			var header_icon, header_title = text, header_subtitle = '';
			if (isarr(text) && text.length >= 2) {
				header_title = text[0];
				header_subtitle = text[1];
				header_icon = text[2];
			}
			var keys = original_keys || header_keys;
			var title = keys.title;
			var subtitle = keys.subtitle;
			var header = keys.header;
			var icon = keys.icon;
			if (align == 1) header.dataset.align = '1';
			else if (align == 2) header.dataset.align = '2';
			else delete header.dataset.align;
				if (text) {
					if (header_title instanceof Array && header_title[0]) {
						title.dataset.i18n = header_title[0];
					} else {
						delete title.dataset.i18n,
						innertext(title, header_title || '');
					}
					if (header_subtitle instanceof Array && header_subtitle[0]) {
						subtitle.dataset.i18n = header_subtitle[0];
					} else {
						delete subtitle.dataset.i18n,
						innertext(subtitle, header_subtitle || '');
					}
					header.hidden = 0;
				} else {
					delete title.dataset.i18n;
					title.innerText = '';
					header.hidden = 1;
				}
				if (isstr(header_icon) && header_icon.length) {
					if (header_icon.startsWith('/')) {
						innerhtml(icon, '<img src="'+header_icon+'" />');
					} else {
						var e = icons.querySelector('#'+header_icon);
						if (e) {
							innerhtml(icon, '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>');
						}
					}
				} else {
					innerhtml(icon, '');
				}
				if (!original_keys) this.header(text, align, tall_header_keys);
			translate.update();
			document.title = title.innerText + ( subtitle.innerText ? (' - ' + subtitle.innerText) : '' );
		},
		sahhar: function (what) { // keep awake wakelock TODO convert to english
			if (navigator && navigator.requestWakeLock) {
				webapp.nawwam();
				wakelockstatus = navigator.requestWakeLock(what||'screen');
			}
		},
		nawwam: function () { // let sleep, put to sleep, clear wakelock
			if (wakelockstatus && wakelockstatus.unlock) {
				try { wakelockstatus.unlock(); } catch (e) { $.log( e ); }
				wakelockstatus = 0;
			}
		},
		scrollx: function (v) {
			var se = scrollingelement();
			se.scrollTop += v;
		},
		scrolly: function (v) {
			var se = scrollingelement();
			se.scrollLeft += v;
		},
		dimmer: function (zindex, text) {
			zindex && (dimmer.style.zIndex = zindex);
			dimmer.hidden = zindex ? 0 : 1;
			webapp.isdimmed = zindex ? 1 : 0;
			if (text)
				dimmertext.hidden = 0,
				dimmertext.dataset.i18n = text;
			else
				dimmertext.hidden = 1,
				delete dimmertext.dataset.i18n,
				innerhtml(dimmertext, '');
			doc.scrollingElement.style.overflow = zindex ? 'hidden' : '';
			translate.update(dimmer);
		},
		statusbarpadding: function (yes) { // TODO deprecate
			if (yes) {
				statusbarpadding.hidden = 0;
				statusbarshadow.hidden = 0;
			} else {
				statusbarpadding.hidden = 1;
				statusbarshadow.hidden = 1;
			}
		},
		status_bar_padding: function (yes) {
			this.statusbarpadding(yes);
		},
		transparency: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(23, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				doc.body.dataset.transparency = 1;
			} else {
				delete doc.body.dataset.transparency;
			}
		},
		textsize: function (yes) {
			yes = yes === undefined ? preferences && preferences.get(9, 1) : yes;
			if (yes/* || Navigator.largeTextEnabled*/) {
				doc.body.dataset.largetext = 1;
			} else {
				delete doc.body.dataset.largetext;
			}
		},
		bixraaj: function (isal) { // on exit, ask or no
			if (isal) isalbixraaj = 1;
			else isalbixraaj = 0;
		},
		exit: function () {
			if (isalbixraaj) {
				if ( confirm(xlate('sure')) ) close();
			} else close();
		},
		icons: function () {
			var elements = doc.body.querySelectorAll('[data-icon]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.icon ) {
					var e = icons.querySelector('#'+elements[i].dataset.icon);
					if (e)
						elements[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
				}
			}
		},
		uponresize: function () {
			$.taxeer('webappresize', function () {
				if (innerwidth() <= 320) {
					setdata(bod, 'aqil', 1);
				} else {
					popdata(bod, 'aqil');
				}
				if (innerwidth() > 320 && innerwidth() <= 640) {
					setdata(bod, 'qaleel', 1);
				} else {
					popdata(bod, 'qaleel');
				}
				if (innerwidth() > 320) {
					setdata(bod, 'qaleelah', 1);
				} else {
					popdata(bod, 'qaleelah');
				}
				if (innerwidth() > 640 && innerwidth() <= 800) {
					setdata(bod, 'wast', 1);
				} else {
					popdata(bod, 'wast');
				}
				if (innerwidth() > 640) {
					setdata(bod, 'wastah', 1);
				} else {
					popdata(bod, 'wastah');
				}
			}, 100);
			if (innerheight() <= 480) doc.body.dataset.keyboardopen = 1;
			else delete doc.body.dataset.keyboardopen;
			$.taxeer('webapp-on-scroll', function () {
				on_scroll();
			}, 10);
		},
	};
	var tall_screen_support = 1;
	Webapp.tall_screen = function (yes) {
		tall_screen_support = yes;
		on_scroll();
	};
	Webapp.get_tall_screen_height = function () {
		return tallscreenpadding.offsetHeight;
	};
	Webapp.get_header_height = function () {
		return headerui.offsetHeight;
	};
	var previous_tall_height;
	function on_scroll() {
		if (!tall_screen_support) {
			ixtaf(tallheaderui, tallscreenpadding);
			izhar(headerui);
			tallheaderui.style.opacity = '';
			headerui.style.opacity = '';
			return;
		}
		var height = tallscreenpadding.offsetHeight * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		var force_hide = 0;
		if (previous_tall_height != innerheight()) {
			if (innerheight() < 600) {
				percent = 0;
				force_hide = 1;
			} else
				percent = doc.scrollingElement.scrollTop / height;
		}
		previous_tall_height = innerheight();
		if (percent > 1 || Webapp.is_minimal() || force_hide) {
			percent = 1;
			ixtaf(tallheaderui);
		} else {
			izhar(tallheaderui);
		}
		var header_pct = percent * .8;
		if (header_pct >= .8) header_pct = 1;
		headerui.style.opacity = header_pct;
		var tall_pct = (1 - percent) * .8;
		if (tall_pct >= .8) tall_pct = 1;
		tallheaderui.style.opacity = tall_pct;
		tallheaderui.style.paddingTop = (12 * (1 - percent))+'vh';
	}
	Webapp.on_scroll = on_scroll;
	Webapp.header_sticky = function (yes) {
		if (yes) setdata(headerui, 'sticky', 1);
		else popdata(headerui, 'sticky');
	};
	var home_views = ['main'];
	Webapp.get_home_views = function () {
		return home_views.concat([]);
	};
	Webapp.add_home_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_home_view(o)
			});
		} else if (!home_views.includes(name)) {
			home_views.push(name);
		}
	};
	Webapp.remove_home_view = function (name) {
		home_views.splice( home_views.indexOf(name), 1 );
	};
	Webapp.is_home_view = function (name) {
		return Webapp.get_home_views().includes(name);
	};
	Webapp.is_at_home = function () {
		return backstack.darajah === 0 && view.is_active( home_views );
	};
	Webapp.ask_on_exit = webapp.bixraaj;
	var status_dom_keys;
	Webapp.itlaa3 = function (text, time) {
		status_dom_keys = status_dom_keys || Templates.keys(webapp_status_ui);
		var element = status_dom_keys.text;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				Translate.update(webapp_status_ui);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			webapp_status_ui.hidden = 0;
			if (innerwidth() > 1024) webapp_status_ui.style.right = '-20px';
			else webapp_status_ui.style.right = '';
			$.taxeer('webapp_status_animation', function () {
				webapp_status_ui.style.right = '';
			}, 100);
			$.taxeer('webapp_status', function () {
				if (innerwidth() > 1024) webapp_status_ui.style.right = '-20px';
				$.taxeer('webapp_status_final', function () {
					Webapp.status();
				}, 100);
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			webapp_status_ui.hidden = 1;
		}
	};
	Webapp.status = webapp.itlaa3;
	var minimal_views = [];
	Webapp.apply_minimal_view = function () {
		if (Webapp.is_minimal()) {
			setdata(bod, 'minimal', 1);
		} else {
			popdata(bod, 'minimal', 1);
		}
	};
	Webapp.get_minimal_views = function () {
		return minimal_views.concat([]);
	};
	Webapp.add_minimal_view = function (name) {
		if (isarr(name)) {
			name.forEach(function (o) {
				Webapp.add_minimal_view(o)
			});
		} else if (!minimal_views.includes(name)) {
			minimal_views.push(name);
		}
		Webapp.apply_minimal_view();
		on_scroll();
	};
	Webapp.remove_minimal_view = function (name) {
		minimal_views.splice( minimal_views.indexOf(name), 1 );
		Webapp.apply_minimal_view();
		on_scroll();
	};
	Webapp.is_minimal = function () {
		return view.is_active( minimal_views );
	};
	var viewport_config = {};
	function update_viewport() {
		var str = [];
		str.push( 'width='+(viewport_config.width || 'device-width') );
		str.push( 'interactive-widget='+(viewport_config.resize_rule || 'resizes-content') );
		str.push( 'user-scalable='+(viewport_config.scalable || 'no') );
		str.push( 'initial-scale='+(viewport_config.scale || '1') );
		if (viewport_config.fit)
			str.push( 'viewport-fit='+(viewport_config.fit || 'contain') );
		viewportsettings.content = str.join(',');
	}
	Webapp.viewport_width = function (v) { viewport_config.width = v; update_viewport(); };
	Webapp.viewport_height = function (v) { viewport_config.height = v; update_viewport(); };
	Webapp.viewport_resize_rule = function (v) { viewport_config.resize_rule = v; update_viewport(); };
	Webapp.viewport_scalable = function (v) { viewport_config.scalable = v; update_viewport(); };
	Webapp.viewport_scale = function (v) { viewport_config.scale = v; update_viewport(); };
	Webapp.viewport_fit = function (v) { viewport_config.fit = v; update_viewport(); };
	Hooks.set('restore', function (args) {
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		});
	});
	Hooks.set('viewready', function (args) {
		Webapp.apply_minimal_view();
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		});
	});
	listener('dragover', function (e) {
		setdata(bod, 'tahweem', 1);
		preventdefault(e);
		return false;
	});
	listener('dragleave', function (e) {
		$.taxeer('dragleave', function () {
			popdata(bod, 'tahweem');
		}, 3000);
		preventdefault(e);
		return false;
	});
	listener('paste', function (e) {
		var items = (e.clipboardData || e.originalEvent.clipboardData).items;
		for (var index in items) {
			var item = items[index];
			if (item.kind === 'file') {
				var blob = item.getAsFile();
				if (!Uploader.busy()) {
					Uploader.pick(blob);
				}
			}
		}
	});
	listener('drop', function (e) {
		popdata(bod, 'tahweem');
		preventdefault(e);
		var f = e.dataTransfer.files;
		if (f && f.length) {
			Hooks.run('huboot', f);
		}
		Hooks.run('dropped', e.dataTransfer);
		return false;
	});
	listener('resize', function () {
		Webapp.uponresize();
	});
	listener('contextmenu', function (e) {
		var yes = Hooks.rununtilconsumed('contextmenu', e);
		if (yes && e) preventdefault(e);
	});
	listener('scroll', function (e) {
		Hooks.run('scroll', doc.scrollingElement.scrollTop);
		on_scroll();
	});
	listener('scrollend', function (e) {
		Hooks.run('scrollend', doc.scrollingElement.scrollTop);
		return;
		var offset_height = tallscreenpadding.offsetHeight;
		var height = offset_height * .75;
		var percent = doc.scrollingElement.scrollTop / height;
		if (percent >= 0.4 && percent < 1.6) {
			doc.scrollingElement.scrollTop = 1 * offset_height;
		} else if (percent > 0.1 && percent < 0.4) {
			doc.scrollingElement.scrollTop = 0;
		}
	});
	listener('keyup', function (e) {
		Hooks.rununtilconsumed('keyup', e);
	});
	listener('keydown', function (e) {
		Hooks.rununtilconsumed('keydown', e);
	});
	listener('load', function (e) {
		header_keys = templates.keys(headerui);
		tall_header_keys = templates.keys(tallheaderui);
		Webapp.header( xlate(appname) );
		xlate.update();
		time && time.start();
		webapp.icons();
		webapp.uponresize();
		view.fahras();
		setupforms();
		doc.title = 'linux-dashboard';
		if (Offline && Offline.init) {
			Offline.init(function () {
				Hooks.run('ready', 1);
				Backstack.main(2);
				loadingbox.hidden = 1;
			});
		}
		else {
			Hooks.run('ready', 1);
			$.taxeer('loadingbox', function () {
				loadingbox.hidden = 1;
			});
			Backstack.main(2);
		}
		$.taxeer('webapp-on-scroll', function () {
			on_scroll();
		}, 10);
		doc.addEventListener('visibilitychange', function () {
			if (doc.visibilityState === 'visible') {
				webapp.visible = 1;
				Hooks.run('visible');
			} else {
				webapp.visible = 0;
				Hooks.run('hidden');
			}
		});
		Hooks.run('visible');
	});
})();
var scrollingelement = function () {
	var darajah = backstack.darajah;
	if ([0, 1].includes(darajah)) {
		return document.scrollingElement;
	}
	if (darajah === 2) {
		return sheetui;
	}
	if (darajah === 3) {
		return dialogui;
	}
};
var datepicker = datepicker || 0;
;(function(){
	Webapp.taht3nsar = function (text, time, taht) { // below element
		taht = document.activeElement || taht;
		var element = taht3nsar.firstElementChild;
		if (text) {
			if (text instanceof Array) {
				element.dataset.i18n = text[0];
				translate.update(taht3nsar);
			} else {
				delete element.dataset.i18n,
				element.innerText = text;
			}
			taht3nsar.hidden = 0;
			if (taht) {
				var pos = get_bounds(taht);
				setcss(taht3nsar, 'top', (pos[1]-20)+'px');
				if (taht.dir == 'rtl') {
					setcss(taht3nsar, 'right');
					setcss(taht3nsar, 'left', pos[0]+'px');
				} else {
					setcss(taht3nsar, 'left');
					setcss(taht3nsar, 'right', innerwidth()-pos[0]-taht.offsetWidth+'px');
				}
			}
			$.taxeer('taht3nsar', function () {
				webapp.taht3nsar();
			}, time||3000);
		} else {
			delete element.dataset.i18n,
			element.innerText = '',
			taht3nsar.hidden = 1;
		}
	};
	Webapp.scrollto = function (element) {
		var se = scrollingelement();
		se.scrollTop = 0 + (element ? element.offsetTop - (se.clientHeight / 4) : 0);
	};
	Webapp.scrolltotop = function () {
		var se = scrollingelement();
		se.scrollTop = 0;
	};
	Webapp.scrolltobottom = function () {
		var se = scrollingelement();
		se.scrollTop = se.scrollHeight - se.clientHeight;
		return se.scrollTop;
	};
	Webapp.isatop = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === 0;
	};
	Webapp.isatbottom = function () {
		var se = scrollingelement();
		return Math.floor(se.scrollTop) === se.scrollHeight - se.clientHeight;
	};
	Hooks.set('closeall', function (level) {
		if (level === 3) {
			datepicker && datepicker.hide();
			dialog.hide();
			Webapp.blur();
		}
		if (level === 2) Sheet.hide(), Webapp.blur();
		if (level === 1) View.get('main'), Webapp.blur();
		if (level === 0) {
		}
	});
	Hooks.set('restore', function (level) {
		if (level === 3) Webapp.dimmer(600);
		if (level === 2) Webapp.dimmer(400);
		if (level === 1) Webapp.dimmer();
		if (level === 0) Webapp.header(), Webapp.dimmer();
	});
	Hooks.set('backstackmain', function (name) {
		Softkeys.clear();
		Softkeys.P.empty();
		View.run('main');
	});
	Hooks.set('ready', function () {
		settings.adaaf('animations', function () {
			var animationsoff = preferences.get(15, 1);
			if (animationsoff) {
				delete document.body.dataset.animations;
				setcss(document.firstElementChild, 'scrollBehavior');
			}
			else {
				document.body.dataset.animations = 1;
				setcss(document.firstElementChild, 'scrollBehavior', 'smooth');
			}
			return [animationsoff ? 'off' : 'on'];
		}, function () {
			if (preferences.get(15, 1)) {
				preferences.set(15, 0);
			}
			else {
				preferences.set(15, 1);
			}
		}, 'iconplayarrow');
	});
})();
;(function(){
	dimmer.onclick = function () {
		if (dimmertext.innerText == '') {
			Backstack.back();
		}
	};
	/*
	* this messes up the nishaat pins list so it needs improvement
	* */
	/*listener('mousewheel', function (e) {
		e.preventDefault();
		if (e.wheelDeltaX >= 1 || e.wheelDeltaX <= -1
		|| e.wheelDeltaY >= 1 || e.wheelDeltaY <= -1) {
			helpers.delayedexec('mousewheel', function () {
				x = 0, y = 0;
			}, 400);
			x += e.wheelDeltaX; y += e.wheelDeltaY;
			var xx = x/60, yy = y/60;
			if (xx > 1 || xx < -1) x = 0;
			if (yy > 1 || yy < -1) y = 0;
			Hooks.rununtilconsumed('mousewheel', {
				type: 'mousewheel',
				x: xx,
				y: yy,
				preventDefault: function () {
					e.preventDefault();
				},
			});
		}
	}, {passive: false});*/
})();
/* lists have an adapter $.array, it contains the objects present in the dom list
*
* the adapter set/pop functions can be overriden to provide your own logic
*
* the dom list set/pop functions also mutate the adapter
* */
var List, list;
;(function(){
	'use strict';
	var direction = function () { return document.body.dir; };
	var proto = {
		_muntahaabox: 0,
		_muntahaa: -1,
		murakkaz: 0,
		adapter: 0,
		/* EXPLAIN TODO
		* my hunch is that this is to change idb prop names to dom prop names
		* but im not sure, prolly also used to remap prop names
		* */
		beforeset: 0,
		before_set: 0,
		beforepop: 0,
		uponpastend: function () {
			var yes = focusnext(this.element);
			if (yes && yes.listobject) Softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponpaststart: function () {
			var yes = focusprev(this.element);
			if (yes && yes.listobject) Softkeys.list.basic(yes.listobject);
			return yes;
		},
		uponend: 0, // when reached list end, do what? return 1 to avoid default
		uponstart: 0,
		bintixaab: 0, // upon selection change [TODO deprecate this]
		uponintaxab: 0, // same as bintixaab [TODO deprecate this]
		on_selection: 0, // 2023 NEW
		uponnavi: 0, // ( type )
		_scroll_on_focus: 1,
		scroll_on_focus: function (yes) {
			this._scroll_on_focus = yes;
			return this;
		},
		moveup: function (uid, fake) {
			if (!fake && this.reverse) return this.movedown(uid, 1);
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var prev = clone.previousElementSibling;
				if (prev) {
					var prevuid = prev.dataset.uid;
					var obj = this.adapter.get(uid);
					var prevobj = this.adapter.get(prevuid);
					if (obj && prevobj) {
						this.adapter.eawwad(prevuid, uid);
						this.keys.items.insertBefore(clone, prev);
						if (this.gridnum > 1) this.left();
						else this.up();
					}
				}
			}
		},
		movedown: function (uid, fake) {
			if (!fake && this.reverse) return this.moveup(uid, 1);
			uid = uid || (this.axavmuntaxab()||{}).uid;
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				var next = clone.nextElementSibling;
				if (next) {
					var nextuid = next.dataset.uid;
					var obj = this.adapter.get(uid);
					var nextobj = this.adapter.get(nextuid);
					if (obj && nextobj) {
						this.adapter.eawwad(nextuid, uid);
						this.keys.items.insertBefore(next, clone);
						if (this.gridnum > 1) this.right();
						else this.down();
					}
				}
			}
		},
		ixtaf: function () {
			this.element.hidden = 1;
			this.element.parentElement.hidden = 1;
		},
		izhar: function () {
			this.element.hidden = 0;
			this.element.parentElement.hidden = 0;
		},
		uponrakkaz: function (v, active) { // active = visible & view is active
			if (v && active) Softkeys.list.basic(this);
			if (isfun(this.on_focus)) this.on_focus(v, active);
		},
		rakkaz: function (v, active) { // deprecated, use set_focus
			var o = this.get_item_object();
			var prevent_focus = 0;
			if (o) prevent_focus = o._prevent_focus;
			if (this._prevent_focus || prevent_focus) return;
			var yes;
			this.murakkaz = !!v;
			if (v && !this.element.dataset.focussed) this.element.dataset.focussed = 1, yes = 1;
			else if (!v && this.element.dataset.focussed) delete this.element.dataset.focussed, yes = 1;
			(yes || active) && this.uponrakkaz && this.uponrakkaz(v, active);
		},
		/* TODO
		* improve this navigation to account for mufarraqaat
		* detect if the next item is a mufarraq, skip it.
		* */
		first: function (select, fake) {
			if (!fake && this.reverse) return this.last(select, 1);
			this.selected = select === undefined ? -1 : select;
			var item = this.get(++this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		last: function (select, fake) {
			if (!fake && this.reverse) return this.first(select, 1);
			this.selected = this.length();
			var item = this.get(--this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			this.intaxabscroll( this.intaxabsaamitan() );
			return this;
		},
		message: function (msg) {
			if (msg) {
				this.keys.message.dataset.i18n = msg;
				this.keys.message.parentElement.hidden = 0;
				this.keys.items.hidden = 1;
			} else {
				delete this.keys.message.dataset.i18n;
				this.keys.message.innerText = '';
				this.keys.message.parentElement.hidden = 1;
				this.keys.items.hidden = 0;
			}
			translate.update();
		},
		left: function (e, fake) {
			if (!fake && this.reverse) return this.right(e, 1);
			if (!fake && direction() === 'rtl') return this.right(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected < 0)
				this.first();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		up: function (e, fake) {
			if (!fake && this.reverse) return this.down(e, 1);
			if (e) preventdefault(e);
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected -= delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(--this.selected)
				}
			}
			if (this.selected < 0) {
				var yes;
				if (this.reverse) {
					if (this.uponpastend)
						yes = this.uponpastend(this.selectedold);
				} else {
					if (this.uponpaststart)
						yes = this.uponpaststart(this.selectedold);
				}
				if (yes) {
					this.selected = 0;
						this.intaxabsaamitan()
				}
				else this.last();
			} else {
					this.intaxabsaamitan()
			}
			item = this.get(this.selected);
			if (item) { // TODO only scroll if too close to edge
				if (this.reverse) {
					scroll_by(0, item.offsetHeight);
				} else {
					scroll_by(0, -item.offsetHeight);
				}
			}
			return this;
		},
		calc_selection: function () {
			var i = 0;
			var selected_item = this.keys.items.querySelector('[data-selected]');
			if (selected_item) {
				while ( (selected_item = selected_item.previousElementSibling) != null ) ++i;
				this.selected = i;
			}
			return this;
		},
		length: function () {
			if (isfun(this.uponlength)) // custom length algo
				return this.uponlength();
			return this.keys.items.children.length;
		},
		down: function (e, fake) {
			if (!fake && this.reverse) return this.up(e, 1);
			if (e) preventdefault(e);
			this.selectedold = this.selected;
			var delta = this.gridnum ? this.gridnum : 1;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected)
				}
			}
			if (this.selected > this.length()-1) {
				this.selected = this.length()-1;
				var yes;
				if (this.reverse) {
					if (this.uponpaststart)
						yes = this.uponpaststart(this.selectedold);
				} else {
					if (this.uponpastend)
						yes = this.uponpastend(this.selectedold);
				}
				if (yes) {
					this.selected = this.length()-1;
						this.intaxabsaamitan()
				}
				else this.first(this.gridnum ? this.selected - this.length()-1 : -1);
			} else {
					this.intaxabsaamitan()
			}
			item = this.get(this.selected);
			if (item) { // TODO only scroll if too close to edge
				if (this.reverse) {
					scroll_by(0, -item.offsetHeight);
				} else {
					scroll_by(0, item.offsetHeight);
				}
			}
			return this;
		},
		right: function (e, fake) { // fake prevents max stack errs
			if (!fake && this.reverse) return this.left(e, 1);
			if (!fake && direction() === 'rtl') return this.left(e, 1);
			var delta = this.gridnum ? 1 : 10;
			this.selected += delta;
			var item = this.get(this.selected);
			while (item) {
				if (item.dataset.listitem) {
					item = 0;
				} else {
					item = this.get(++this.selected);
				}
			}
			if (this.selected > this.length()-1)
				this.last();
			else {
				this.intaxabscroll( this.intaxabsaamitan() );
			}
			return this;
		},
		baidaa: function (id, multiple) { // with multiple it also toggles, depr, use highlight instead
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id) {
						if (multiple) {
							if (item.dataset.baidaa) delete item.dataset.baidaa;
						} else item.dataset.baidaa = 1;
					}
					else if (!multiple)
						delete item.dataset.baidaa;
				}
			}
			return item;
		},
		/* id can be a number or string id
		* */
		select: function (id, noscroll, silent, nofocus) {
			id = id === undefined ? this.selected : id;
			var selected = this.intaxabsaamitan(id);
			if (!noscroll) this.intaxabscroll(selected);
			if (selected && !nofocus) {
				markooz() && markooz().blur();
				selected.focus();
				this.rakkaz(1, 1);
			}
			this.selected = id;
			if (this.uponselect && !silent) {
				selected = this.get(this.selected);
				if (selected) {
					selected = this.adapter.get( selected.dataset.uid );
					if (selected) this.uponselect(selected);
				}
			}
			return this;
		},
		select_by_uid: function (id, noscroll, silent, nofocus) {
			return this.select(this.id2num(id), noscroll, silent, nofocus);
		},
		intaxabscroll: function (selected) { // select_scroll TODO rename
			if (!this._scroll_on_focus) return;
			if (isundef(selected)) {
				selected = this.get( this.selected );
			}
			if (this.filmakaan) {
				if (selected) {
					scrollintoview(selected);
				}
			} else {
				if (this.selected === 0) {
					if (!this.reverse) {
						Webapp.scrollto(); // scroll to top
					}
				}
				else if (selected) {
					Webapp.scrollto(selected);
				}
			}
		},
		intaxabsaamitan: function (id) { // select silently
			id = id === undefined ? this.selected : id;
			var items = this.keys.items.children, item, selected;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (i == id)
						item.dataset.selected = 1, selected = item;
					else
						delete item.dataset.selected;
				}
			}
			if (isfun(this.on_selection) && selected) {
				var a = this.adapter.get( selected.dataset.uid );
				if (a) this.on_selection(a);
			}
			return selected;
		},
		deselect: function () {
			var old = this.selected;
			this.selected = -1;
			this.intaxabsaamitan();
			this.selected = old;
			this.rakkaz();
			if (isfun(this.on_deselection)) {
				this.on_deselection();
			}
			return this;
		},
		/* TODO
		* add a sticky mufarraq compensation function
		* this func should add a px comp
		* use case to add another sticky heading on top of this list
		* */
		mufarraq: function (pixels) {
		},
		eawwad: function (o, uid) { // replace with o at num
			var oldclone = this.get( this.id2num(uid) );
			if (oldclone) {
				var newclone = this.set(o);
				replacewith(oldclone, newclone);
				this.adapter.eawwad(uid, o.uid)
				this.adapter.pop(uid);
			}
		},
		set: function (o, id) { // deprecate the second argument
			/* IMPORTANT
			* id would actually change the html#id
			* so avoid it unless you know what you're doing
			* */
			if (id) $.log('List.set, stop using id, use o.uid instead');
			o = o || {};
			var clone, LV = this, listitem = o._listitem || LV._listitem,
				parent = LV.keys.items,
				available_height = innerheight() - LV.element.offsetTop,
				actual_height = parent.offsetHeight;
			if (isnum(LV._muntahaa) && LV._muntahaa > -1 && LV.length() >= LV._muntahaa)
				return; // muntahaa limit hit
			if (id === undefined)
				if (o.uid === undefined) {
					var newuid = LV.length();
					LV.adapter.each(function (c, e) {
						if (newuid <= c.uid) newuid = c.uid+1;
					});
					o.uid = id = newuid;
				}
				else id = o.uid;
			if (LV.idprefix_raw && o.uid !== undefined)
				o.id_dom = LV.idprefix_raw + o.uid;
			if (o.uid) {
				clone = elementbyid( o.id_dom || o.uid );
			}
			if (LV.idprefix_raw && o.ruid) {
				clone = elementbyid( LV.idprefix_raw + o.ruid );
				if (clone) {
					clone.id = o.id_dom;
					setdata(clone, 'uid', o.uid)
				}
			}
			if (LV.beforeset) o = LV.beforeset(o, o.uid, listitem); // TODO deprecate
			if (LV.before_set) o = LV.before_set(o, o.uid, listitem); // new & approved
			if (o.ruid) {
				LV.adapter.pop(o.ruid);
				delete o.ruid;
			}
			LV.adapter.set(o.uid, o);
			if (LV._recycle) return; // defer rendering to scroll events
			if (!clone) {
				/*
				* this is to avoid modifying provided o object
				* it sets dataset on clone
				* */
				var o2 = Object.assign({
					id: o.id_dom, // sets the #id of an element
					data: {
						uid: o.uid,
					},
				}, o);
				clone = templates.get(listitem, parent, o.before || o.awwal, o.id_dom || o.uid)(o2);
				clone.dataset.listitem = 1;
				if (o.mufarraq) clone.dataset.mufarraq = o.mufarraq;
			}
			else {
				var selected = clone.dataset.selected;
				var baidaa = clone.dataset.baidaa;
				templates.set( clone, o, listitem );
				if (o.before) { // this allows resorting
					parent.insertBefore(clone, o.before);
				}
				if (selected) clone.dataset.selected = 1;
				if (baidaa) clone.dataset.baidaa = 1;
			}
			delete o.before;
			delete o.awwal;
			if (clone) {
				if (o.mu3allaq) setdata(clone, 'mu3allaq', 1);
				else popdata(clone, 'mu3allaq');
				clone.onclick = function (e) {
					var item = LV.adapter.get( o.uid );
					if (item) {
						LV.uponclick &&
						LV.uponclick( item, e, LV.id2num(o.uid) );
					}
				};
			}
			LV._katabmowdoo3();
			LV.afterset && LV.afterset( o, clone, templates.keys(clone), listitem ); // TODO deprecate
			LV.ba3dihi && LV.ba3dihi( o, clone, templates.keys(clone), listitem ); // TODO deprecate
			LV.after_set && LV.after_set( o, clone, templates.keys(clone), listitem );
			LV.uponadaaf && LV.uponadaaf( LV.length() );
			return clone;
		},
		namoovaj: function (eansarism) { // deprecated
			this._listitem = eansarism || 'listitem';
			return this;
		},
		listitem: function (elementname) { // namoovaj alternative
			return this.namoovaj(elementname);
		},
		axavmfateeh: function (uid) { // TODO deprecate
			var clone = this.get( this.id2num(uid) );
			if (clone) {
				return templates.mfateeh(clone);
			}
		},
		get_item_keys: function (uid) { // NEW
			return this.axavmfateeh(uid);
		},
		axavmuntaxab: function (uid) { // get [selected] item's adapter object
			return this.axadmuntaxab(uid);
		},
		axadmuntaxab: function (uid) {
			uid = this.num2id( uid || this.selected || 0 );
			if (!isundef(uid)) {
				return this.adapter.get( uid );
			}
			return false;
		},
		axav: function () {
			return this.axad();
		},
		axad: function () { // get baidaa item's adapter object
			var items = this.keys.items.children, item, baidaa;
			for (var i in items) {
				if (items.hasOwnProperty(i)) {
					item = items[i];
					if (item.dataset.baidaa) {
						baidaa = item.dataset.uid;
						break;
					}
				}
			}
			if (!isundef(baidaa)) {
				return this.adapter.get( baidaa );
			}
			return false;
		},
		get_item_object: function (num) {
			return this.adapter.get( this.num2id( isundef(num) ? this.selected : num ) );
		},
		get_item_element: function (num) {
			return this.get( isundef(num) ? this.selected : num );
		},
		get_item_element_by_uid: function (uid) {
			return this.get( this.id2num(uid) );
		},
		get: function (id) {
			return this.keys.items.children[id];
		},
		pop: function (id) { // deprecated, use remove_by_uid
			var element, LV = this, uid;
			if (isundef(id)) {
				element = LV.get(LV.selected);
			} else {
				if (LV.idprefix_raw) id = LV.idprefix_raw + id;
				element = elementbyid(id);
			}
			if (element) {
				uid = element.dataset.uid;
				var prev_selected = parseint( LV.id2num( uid ) );
				LV.adapter.pop( uid );
				element.remove();
				if (LV.selected) {
					if (LV.selected == LV.length()) // if selected item was the last one
					LV.selected = LV.length()-1;
					else if (LV.selected == prev_selected) // if deleted item was selected
					LV.selected = LV.selected-1;
				}
				LV.intaxabsaamitan();
				LV._katabmowdoo3();
				LV.uponhavaf && LV.uponhavaf( LV.length() );
			}
		},
		remove_by_uid: function (uid) { // pop
			return this.pop(uid);
		},
		popall: function () {
			this.adapter = $.array();
			innertext(this.keys.items, '');
			innertext(this._muntahaabox, '');
			this._katabmowdoo3();
		},
		remove_all: function () { // popall
			return this.popall();
		},
		press: function (key, force) {
			var element = this.get(this.selected);
			if (element) {
				var item = this.adapter.get( element.dataset.uid );
				if (item) {
					(this.element.dataset.focussed || force) &&
					this.onpress && this.onpress( item, key, this.selected );
					for (var opl in this.on_press_listeners) {
						this.on_press_listeners[opl]( item, key, this.selected );
					}
				}
			}
			return this;
		},
		num2id: function (id) {
			var clone = this.get(id || this.selected);
			if (clone) return clone.dataset.uid;
			return false;
		},
		id2num: function (uid) { // return id of item that has this uid
			var cn = this.keys.items.children;
			for (var i in cn) {
				if (cn.hasOwnProperty(i)) {
					if (cn[i].dataset.uid == uid) return i;
				}
			}
			return false;
		},
		grid: function (num) {
			this.gridnum = num;
			if (num) this.element.dataset.grid = num;
			else delete this.element.dataset.grid;
			return this;
		},
		zumrah: function (zumraat) {
			this.element.className = 'list '+zumraat;
			return this;
		},
		freeflow: function (v) {
			if (v) this.grid(), this.element.dataset.freeflow = 1;
			else delete this.element.dataset.freeflow;
			return this;
		},
		hidetext: function (num) {
			if (num) this.element.dataset.hidetext = num;
			else delete this.element.dataset.hidetext;
			return this;
		},
		muntahaa: function (max, muntahaabox) { // maximum
			this._muntahaa = max || -1;
			this._muntahaabox = this.keys.miqyaas || this._muntahaabox;
			if (this._muntahaabox && max > -1) this.keys.miqyaas.hidden = 0;
			return this;
		},
		_katabmowdoo3: function () {
			var LV = this, len = LV.length();
			if (isnum(LV._muntahaa) && LV._muntahaa > -1) {
				innertext(LV._muntahaabox, len+' / '+ LV._muntahaa);
			}
			if (!this._mowdoo3) {
				if (!this.keys.raees.hidden) this.keys.raees.hidden = 1;
			} else {
				var new_value = len ? 0 : 1;
				if (this.keys.raees.hidden !== !!new_value) this.keys.raees.hidden = new_value;
			}
		},
		mowdoo3: function (m, i18n) { // deprecated -> title
			this._mowdoo3 = m || 0;
			if (i18n)
				attribute(this.keys.mowdoo3list, 'data-i18n', m),
				xlate.update(this.element);
			else if (m)
				innertext(this.keys.mowdoo3list, m);
			this._katabmowdoo3();
			return this;
		},
		title: function (m, i18n) { // only visible when length > 0
			return this.mowdoo3(m, i18n);
		},
		set_scrolling_element: function () {
		},
		destroy: function () {
		},
		idprefix: function (id) {
			this.idprefix_raw = id;
			return this;
		},
		bahac: function (bahacbox) {
			var LV = this;
			/* EXPLAIN
			* connects this list to bahacbox, bahacbox.onchange is listened on
			* with a $.taxeer
			* list.uponpaststart is also connected to bahacbox.focus
			* bahacbox.onpastend is prolly auto handled by softkeys
			* */
			if (bahacbox instanceof HTMLInputElement) {
				LV.uponpaststart = function () {
					bahacbox.focus();
					return 1;
				};
				bahacbox.oninput = function () {
					$.taxeer('listbahac', function () {
						LV.uponbahac && LV.uponbahac( bahacbox.value.trim() )
					}, 250);
				};
				bahacbox.onfocus = function () {
					LV.rakkaz();
				};
			}
			return LV;
		},
	};
	proto.set_reversed = function (yes) {
		this.reverse = yes ? 1 : 0;
	};
	proto.id_prefix = proto.idprefix;
	proto.list_item = proto.listitem;
	proto.set_focus = proto.rakkaz;
	proto.highlight = proto.baidaa;
	proto.select_silently = proto.intaxabsaamitan;
	proto.prevent_focus = function (yes) {
		this._prevent_focus = yes;
		return this;
	};
	proto.on_press_listeners = {};
	proto.listen_on_press = function (callback, name) {
		var count = Object.keys( this.on_press_listeners ).length;
		this.on_press_listeners[ name || count ] = callback;
	};
	List = list = function (element) { // TODO deprecate list
		var LV = Object.create(proto);
		element.dataset.focus = 'list';
		element.listobject = LV;
		LV.filmakaan = element.dataset.filmakaan;
		LV.element = templates.get( 'list', element )();
		LV.listitem();
		LV.adapter = $.array();
		LV.keys = templates.keys( LV.element );
		LV.selected = 0;
		LV.muntahaa();
		LV.title();
		/* IMPORTANT EXPLAIN
		* this is for use cases with a single list that is focussed by default
		* for multiple lists in a focus group, chain .rakkaz() to unset this
		* before setting uponrakkaz
		* */
		LV.uponclick = function (i, e, uid) {
			/* call these before triggering press events in case press handler
			* calls pop or set and that changes this.selected
			* */
			LV.beforepress && LV.beforepress(i, e, uid);
			LV.intaxabsaamitan( uid ); // select without trig event
			var yes = LV.selected == uid && LV.element.dataset.focussed == 1;
			LV.selected = parseint(uid);
			LV.rakkaz(1, 1);
			if (yes) LV.press(K.en);
		};
		return LV;
	};
})();
/* @TODO
* add .back_twice_to_exit, which adds having to press back/esc twice to exit with delay
* also make the exit button red when in delay
* is_darajah is_level or is_stage or is_state
* */
var Backstack, backstack;
;(function(){
	var s,
	storage = {
		3 : {}, // searches, dialogs, menus
		2 : {}, // settings, ...
		1 : {}, // lists, editors, renderuis, ...
		0 : {}, // main, ...
	},
	do_level = function () {
		var level = 0;
		if (s.dialog) level = 3;
		else if (s.sheet) level = 2;
		else if (s.view) {
			var view_name = s.view.name;
			var view_uid = s.view.uid;
			if (Webapp.is_home_view(view_name) && !view_uid) {
				level = 0;
			} else {
				level = 1;
			}
		}
		else level = 0;
		Backstack.darajah = level;
		return level;
	},
	savefocus = function () { // save focus on each level, restore automatically
		backstack.set('backstackfocus', document.activeElement);
	},
	restorefocus = function () {
		var active = backstack.get('backstackfocus');
		active && active.focus && active.focus();
	};
	/*
	* this is the mudeer standalone platform
	* there's no browser history stack or back+forward buttons to worry about
	* so we can take full control
	* no need to make it compatible with almudeer since that's for PWAs
	* here we have way more freedom so let's capitalize on it
	*
	* this basically replaces the browser backstack
	*
	* the backstack event is fired on all changes
	* */
	Backstack = backstack = {
		storage,
		darajah: 0,
		states: {
			dialog : 0, // searches, dialogs, menus
			sheet : 0, // settings, ...
			view : 0, // lists, editors, renderuis, ...
			main : 0, // main, ...
		},
		do_level,
		set: function (key, value) {
			storage[backstack.darajah][key] = value;
		},
		get: function (key) {
			if (key) return storage[backstack.darajah][key] ;
			else return storage[backstack.darajah] ;
		},
		dialog: function (args, backing) {
			savefocus();
			s.dialog = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackdialog', args);
			if (!backing) Hooks.run('backstack-dialog', args);
			Hooks.run('backstack', backstack.darajah);
		},
		sheet: function (args, backing) {
			savefocus();
			s.sheet = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstacksheet', args);
			if (!backing) Hooks.run('backstack-sheet', args);
			Hooks.run('backstack', backstack.darajah);
		},
		view: function (args, backing) {
			if (args == 'main') {
				s.view = 0;
				this.main(args);
				return;
			}
			savefocus();
			s.view = args;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.rununtilconsumed('backstackview', args);
			if (!backing) Hooks.run('backstack-view', args);
			Hooks.run('backstack', backstack.darajah);
		},
		main: function (args) { // 1 = active, 2 = Webapp startup
			savefocus();
			s.main = args || 1;
			do_level();
			storage[backstack.darajah] = {};
			Hooks.run('backstack-main', s.main);
			Hooks.rununtilconsumed('backstackmain', args);
			Hooks.run('backstack', backstack.darajah);
		},
		is_main_in_startup: function () {
			return s.main === 2 ? 1 : 0;
		},
		close_all: function () { // this should return the states to main
			if (s.dialog)
				s.dialog = 0, do_level(), Hooks.run('closeall', 3);
			if (s.sheet)
				s.sheet = 0, do_level(), Hooks.run('closeall', 2);
			if (s.view)
				s.view = 0, s.main = 1, do_level(), Hooks.run('closeall', 1);
		},
		back: function () {
			if (s.dialog)
				s.dialog = 0, do_level(), Hooks.run('closeall', 3);
			else if (s.sheet)
				s.sheet = 0, do_level(), Hooks.run('closeall', 2);
			else if (s.view)
				s.view = 0, s.main = 1, do_level(), Hooks.run('closeall', 1);
			else
				s.main = 0, do_level(), Hooks.run('closeall', 0);
			Hooks.run('restore', Backstack.darajah);
			Hooks.run('backstack', Backstack.darajah);
			restorefocus();
		},
	};
	Hooks.set('back', function () {
		Backstack.back();
	});
	Hooks.set('dialog', function (args) {
		Backstack.dialog(args);
	});
	Hooks.set('sheet', function (args) {
		Backstack.sheet(args);
	});
	Hooks.set('view', function (args) {
		Backstack.view(args);
	});
	Hooks.set('main', function (args) {
		Backstack.main(args);
	});
	s = Backstack.states;
})();
var Canvas, canvas;
var calcdistance = function (x1, y1, x2, y2) {
	var dx = x2 - x1; dx *= dx;
	var dy = y2 - y1; dy *= dy;
	return Math.sqrt( dx + dy );
};
;(function(){
	var toradians = function (degs) {
		return degs * Math.PI / 180;
	};
	var todegrees = function (angle) {
		return angle * (180 / Math.PI);
	};
	var coordtoangle = function (x0, y0, x1, y1) {
		var dx = x1 - x0;
		var dy = y1 - y0;
		var ang = todegrees( Math.atan2(dy, dx) );
		return (ang < 0 ? ang + 360 : ang);
	};
	Canvas = canvas = function (element) {
		var c = {
			f: '#fff',
			s: -1,
			o: element.getContext('2d')
		};
		c.linedash = function (v) {
			c.o.setLineDash(v || [])
		};
		c.linecap = function (v) {
			c.o.lineCap = v;
		};
		c.linejoin = function (v) {
			c.o.lineJoin = v;
		};
		c.linewidth = function (v) {
			c.o.lineWidth = v;
		};
		c.fillcolor = function (v) { // { x, y, w, h, stops: [ [0, color], [1, color] ] }
			c.f = v;
			if (typeof v == 'object') {
				var x = isundef(v.x) ? 0 : v.x;
				var y = isundef(v.y) ? 0 : v.y;
				var w = isundef(v.w) ? element.width : v.w;
				var h = isundef(v.h) ? element.height : v.h;
				var grd = c.o.createLinearGradient( x, y, w, h );
				v.stops.forEach(function (item, i) {
					if (item instanceof Array) {
						grd.addColorStop(item[0], item[1] || 'black');
					} else {
						grd.addColorStop(i, item || 'black');
					}
				});
				c.o.fillStyle = grd;
			} else c.o.fillStyle = v;
		};
		c.strokecolor = function (v) {
			c.s = v;
			c.o.strokeStyle = v;
		};
		c.matn = function (x, y, m, s, f, mw) {
			c.fillcolor(f);
			c.strokecolor(s);
			if (c.f !== -1) c.o.fillText(m, x, y, mw);
			if (c.s !== -1) c.o.strokeText(m, x, y, mw);
		};
		c.rect = function (x, y, w, h, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			if (c.f !== -1) c.o.fillRect (x, y, w, h);
			if (c.s !== -1) c.o.strokeRect (x, y, w, h);
		};
		c.line = function (points, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			var lw = c.o.lineWidth;
			points.forEach(function (p, i) {
				if (i === 0) {
					c.o.beginPath();
					c.o.moveTo(p.x, p.y);
				}
				if (p.c) {
					c.o.quadraticCurveTo(p.cx, p.cy, p.x, p.y);
				}
				else {
					c.o.lineTo(p.x, p.y);
				}
				if (i === points.length-1) {
					if (s != -1) c.o.stroke();
					if (f != -1) c.o.fill();
				}
			});
			c.o.lineWidth = lw;
		};
		c.circle = function (x, y, r, sa, ea, s, f) {
			c.fillcolor(f);
			c.strokecolor(s);
			c.o.beginPath(); // for a clean start
			c.o.arc(x, y, r, toradians(sa || 0), toradians(ea || 360), 0);
			if (f) c.o.fill();
			if (s) c.o.stroke();
		};
		c.clear = function (x, y, w, h) {
			c.o.clearRect(x || 0, y || 0, w || element.width, h || element.height);
		};
		c.text = c.matn;
		return c;
	};
	Canvas.coordtoangle = coordtoangle;
	Canvas.todegrees = todegrees;
	Canvas.toradians = toradians;
})();
var Preferences, preferences;
;(function(){
	'use strict';
	/* LEGEND preferences local storage
	* @ last sync time
	* @0 offline since
	* 1 key
	* 2 uid (account)
	* 3 ruid
	* 4 list views cache
	* 5 is menu hidden, 1 yes
	* 6 initial sync done?
	* 7 softkeys help
	* 8 sound off
	* 9 largetext
	* 10 default perms for different account types
	* 11 permissions of current account
	* 12 temp unit C F K
	* 13 meanings
	* 15 animations off
	* 16 softkeystouch dpad
	* 17 pagerasmaa
	* 18 webapptouchdir
	* 19 theme
	* 20 username
	* 21 display name
	* 22 account type
	* 23 transparency
	* 24 24 hour
	* 25 lang
	* 26 calendar type hijri gregorian
	* 27 digit comma separation
	* 30 app uid
	* 40 app title
	* 50 app address
	* 60 app phone
	* 70 billing on Central
	* 80 default currency
	* 81 latitude
	* 82 longitude
	* 90 sign in required
	* 91 location required
	* 100 remember viewed articles
	* 110 frequency of used dashboard items
	* 120 home view
	* 130 units (SI, imperial)
	* 140 font
	* 150 global newform toggle
	* 160 features
	* 170 conf
	* 1100 umoor what tag(s) to show?
	* */
	Preferences = preferences = {
		popall: function () {
			return localStorage.clear();
		},
		set: function (name, value) {
			return localStorage.setItem(name, value);
		},
		get: function (name, json) {
			if (json) {
				try {
					return JSON.parse( localStorage.getItem(name) );
				} catch (ignore) {
				}
				return {};
			} else
				return localStorage.getItem(name);
		},
		pop: function (name) {
			return localStorage.removeItem(name);
		},
		/*
		* for json data, fetches stored data, parses as json, gives you a nice
		* object to work with in a callback, you make the changes and just
		* return the result, it saves the object back
		* */
		change: function (name, callback) {
			if (typeof callback === 'function') {
				var data;
				try {
					data = preferences.get(name);
					data = JSON.parse( data );
				} catch (ignore) {
				}
				if (!(data instanceof Object))
					data = {};
				data = callback(data);
				preferences.set(name, JSON.stringify( data ) );
			}
		},
	};
	var buildnum = preferences.get('#', 1);
	if ( buildnum != 345 ) {
		preferences.pop(3); // ruid
		preferences.pop('@'); // last sync time
		preferences.pop(4); // list view cache
		preferences.pop(6); // initial sync done
	}
	preferences.set('#', 345);
	Hooks.set('ready', function () {
		if ( buildnum != 345 ) {
			$.taxeer('seeghahjadeedah', function () {
				Hooks.run('seeghahjadeedah', buildnum);
			}, 2000);
		}
	});
	$.log.s( 345 );
})();
var activity;
;(function(){
	activity = {
		jaame3: function (name, type, key, value) { // generic
			if ('MozActivity' in window) {
				var data = {
					type: type,
				};
				data[key] = value;
				new MozActivity({
					name: name,
					data: data,
				});
			}
		},
		ittasal: function (num) { // call/telephone (verb)
			if (num) activity.jaame3('dial', 'webtelephony/number', 'number', num);
		},
		arsal: function (num) { // send (verb) risaalah (noun) message
			if (num) activity.jaame3('new', 'websms/sms', 'number', num);
		},
		abrad: function (address) { // (e)mail (verb) breed (noun)
			if (address) activity.jaame3('new', 'mail', 'url', 'mailto:'+address);
		},
	};
})();
var View, view, debug_view = 0;
;(function(){
	var index = {};
	View = view = {
		zaahir: function (name) { // is_active, deprecated
			return view.axav() === name;
		},
		is_active: function (name) {
			if (isarr(name)) {
				for (var i = 0; i < name.length; ++i) {
					if (this.zaahir(name[i])) return true;
				}
				return false;
			} else {
				return this.zaahir(name);
			}
		},
		is_active_fully: function (name, uid) { // at proper level, with no sheets or dialogs
			var yes = this.is_active(name) && Backstack.darajah <= 1;
			if (!isundef(uid)) {
				yes = this.get_uid() == uid;
			}
			return yes;
		},
		mfateeh: function (name) { // dom_keys
			var element = index[name];
			if (element) return templates.keys(element);
			return false;
		},
		run: async function (name, uid) {
			var level = backstack.level ,
				exists = View.get_element(name) ;
			if (isundef(exists)) {
				$.log.w('View not found: "'+name+'"');
			} else {
				var element = view.get(name) ,
					keys = templates.keys(element) ;
				var out = {
					name: name,
					uid: uid,
					element: element,
					keys: keys,
					level: level,
				};
				if (debug_view) $.log.w('View ready', name, uid);
				Hooks.run('viewready', out); // TODO rename to view-ready
				Hooks.run('view-ready', out);
				if (View.is_active_fully(name, uid)) {
					if (debug_view) $.log.w('View before-init', name, uid);
					await Hooks.until('view-before-init', out);
				}
				if (View.is_active_fully(name, uid)) {
					if (debug_view) $.log.w('View init', name, uid);
					await Hooks.until('view-init', out); // view-init users should assume async behavior
				}
				if (View.is_active_fully(name, uid)) {
					if (debug_view) $.log.w('View loaded', name, uid);
					await Hooks.until('view-loaded', out);
				}
			}
		},
		get_element: function (name) { // get dom element of a view
			return this.get(name, 1);
		},
		get_uid: function () {
			if (Backstack.states.view) {
				return Backstack.states.view.uid;
			}
		},
		axav: function (name, onlyelement) { // get
			if (!name) {
				for (var i in index) {
					if (!index[i].hidden) {
						return i;
					}
				}
				return;
			}
			var view;
			for (var i in index) {
				if (i == name)
					view = index[i];
				else if (!onlyelement)
					index[i].hidden = 1;
			}
			if (view) {
				if (!onlyelement) view.hidden = 0;
				return view;
			}
		},
		axad: function (name, onlyelement) { // get, deprecated
			return view.axav(name, onlyelement);
		},
		fahras: function () { // index
			var elements = document.body.querySelectorAll('[data-view]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.view ) {
					if (elements[i].dataset.view !== 'main')
						elements[i].hidden = 1;
					index[ elements[i].dataset.view ] = elements[i];
				}
			}
			return index;
		},
	};
	View.get = View.axav;
	View.ishtaghal = View.run;
	View.dom_keys = View.mfateeh;
	Hooks.set('backstackview', function (args) {
		var name, uid;
		if (isstr(args)) {
			name = args;
		} else if (args) {
			name = args.name || args.n;
			uid = args.uid || args.u;
		}
		Webapp.dimmer();
		Softkeys.clear();
		Softkeys.P.empty();
		Softkeys.set(K.sr, function () {
			Hooks.run('back');
		}, 0, 'iconarrowback');
		View.run(name, uid);
		return 1; // stop propagation
	});
})();
var Time, time;
;(function(){
	var val = {}, timeout, started,
		monthnames = ('january february march april may june july '
					+ 'august september october november december').split(' '),
		weekdays = 'sunday monday tuesday wednesday thursday friday saturday'.split(' ');
	Time = time = function (parent) {
		var items = (parent||document).querySelectorAll('[data-time]'),
			is24 = preferences.get(24, 1);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var datetime = dataset.time;
					var by = dataset.by;
					datetime = parseInt(datetime);
					if (e.dataset.deadline) {
						if (time.now() < datetime)
							delete e.dataset.past, e.dataset.future = 1;
						else
							delete e.dataset.future, e.dataset.past = 1;
					} else
						delete e.dataset.future, delete e.dataset.past;
					if (by) {
						time.relativetime(0, items[i]);
					}
					else if (datetime !== '') {
						if (datetime !== 'false') {
							e.setAttribute('title',
								time.formatdate(
									new Date(datetime),
									'Do MMM YYYY, ' + (is24 ? 'HH:mm' : 'hh:mma')
								)
							);
						}
						e.innerHTML = time.relativetime(datetime, 0, e.dataset);
					}
				}
			}
		}
	};
	time.monthname = function (value) { //starts at zero
		return monthnames[value];
	};
	time.miqdaar = function (delta, secondary) { // to mins, hrs, days, etc
		var fuzzy = '',
			minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		if (delta < minute) {
			fuzzy = delta + ' ' + xlate('secondsago');
		}
		else if (delta < 2 * minute) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minute');
		}
		else if (delta < hour) {
			fuzzy = parsefloat(delta / minute, 1) + xlate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + xlate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + parsefloat(mins, 1) + xlate('minutesago');
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + ' ' + xlate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + xlate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + xlate('dayago') : days + xlate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + xlate('hourago')
								: hours + xlate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + xlate('dayago')
									: days + xlate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + xlate('yearago')
					: years + xlate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + xlate('monthago')
					: months + xlate('monthsago'));
		}
		return fuzzy;
	};
	time.days = function (days) {
		days = new Date().getTime() - new Date(days).getTime();
		days = days / time.day;
		return days;
	};
	time.fuzzytime = function (date, muxtasar) {
		date = date || +new Date;
		var delta = Math.round( (+new Date - date) / 1000),
			future;
		if (delta < 0) {
			future = 1;
			delta *= -1;
		}
		var minute = 60,
			hour = minute * 60,
			day = hour * 24,
			week = day * 7,
			month = day * 30,
			year = month * 12;
		var fuzzy;
		if (!future && delta < 15) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = translate('justnow');
		}
		else if (delta < minute) {
			if (muxtasar)
			fuzzy = delta + translate('sseconds');
			else
			fuzzy = delta + ' ' + translate('secondsago');
		}
		else if (delta < 2 * minute) {
			if (muxtasar)
			fuzzy = 1 + translate('sminutes');
			else
			fuzzy = translate('aminuteago');
		}
		else if (delta < hour) {
			if (muxtasar)
			fuzzy = Math.floor(delta / minute) + translate('sminutes');
			else
			fuzzy = Math.floor(delta / minute) + ' ' + translate('minutesago');
		}
		else if (Math.floor(delta / hour) == 1) {
			fuzzy = 1 + translate('hourago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) {
				if (muxtasar)
				fuzzy = ' ' + mins + translate('sminutes');
				else
				fuzzy += ' ' + mins + translate('minutesago');
			}
		}
		else if (delta < day) {
			fuzzy = Math.floor(delta / hour) + translate('hoursago');
			var mins = Math.floor( (delta % hour) / minute );
			if (mins) fuzzy += ' ' + mins + translate('minutesago');
		}
		else if (delta >= day && delta < month) {
			var days = Math.floor(delta / day);
			fuzzy = days === 1 ? 1 + translate('dayago') : days + translate('daysago');
			var hours = Math.floor( (delta % day) / hour );
			if (hours)
				fuzzy += ' ' + (hours === 1 ?
								hours + translate('hourago')
								: hours + translate('hoursago'));
		}
		else if (delta > month && delta < year) {
			var months = Math.floor(delta / month);
			fuzzy = months === 1 ? months + translate('monthago')
					: months + translate('monthsago');
			var days = Math.floor( (delta % month) / day );
			if (days) fuzzy += ' ' + (days === 1 ? days + translate('dayago')
									: days + translate('daysago'));
		}
		else if (delta > year) {
			var years = Math.floor(delta / year);
			fuzzy = years === 1 ? years + translate('yearago')
					: years + translate('yearsago');
			var months = Math.floor( (delta % year) / month );
			if (months) fuzzy += ' ' + (months === 1 ? months + translate('monthago')
					: months + translate('monthsago'));
		}
		if (future) fuzzy = translate('infuture') +' '+ fuzzy;
		return translate.a3daad(fuzzy);
	};
	time.relativetime = function (datetime, e, dataset) {
		if (datetime === 'false') return translate('alongtime');
		var today = time.striptime().getTime(),
			yesterday = time.traversebydays(today, -1),
			tomorrow = time.traversebydays(today, 1),
			text = '',
			is24 = preferences.get(24, 1);
		if (e) {
			dataset = e.dataset;
			var datetime = parseInt(dataset.time),
				minus = dataset.minus,
				by = dataset.by;
			delete dataset.i18n;
			if (minus !== undefined) datetime = time.now() - datetime;
			if (by === 'age') {
				innerhtml(e, time.fuzzytime(datetime));
			} else
			if (by === 'days') {
				var days = time.days(datetime);
				if (days < 0.1) days = days.toFixed(2);
				else if (days < 1) days = days.toFixed(1);
				else days = Math.floor(days);
				innerhtml(e, days + ' ' + translate('daysago'));
			} else
			if (by === 'hourly') {
				innerhtml(e, time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') ));
			} else
			if (by === 'yearly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'YYYY' ));
			} else
			if (by === 'monthly') {
				innerhtml(e, time.formatdate( new Date(datetime), 'MMMM YYYY' ));
			} else
			if (by === 'daily') {
				innerhtml(e, time.formatdate( new Date(datetime), 'Do MMMM YYYY' ));
			} else
			if (by === 'minute') {
				innerhtml(e, time.formatdate( new Date(datetime), is24 ? 'HH:mm' : 'hh:mma' ));
			} else {
				if (datetime === today)
					dataset.i18n = 'today';
				else if (datetime === yesterday)
					dataset.i18n = 'yesterday';
				else if (datetime === tomorrow)
					dataset.i18n = 'tomorrow';
				else
					innerhtml(e, time.formatdate( new Date(datetime), 'Do MMM YYYY' ));
			}
		} else {
			var at = translate('@');
			var c = translate(','); // unicode commas
			var months = ( ( Time.now() - datetime ) / time.month );
			var days = ( ( Time.now() - datetime ) / time.day );
			var hours = ( ( Time.now() - datetime ) / time.hour );
			if (hours <= 2) {
				text += time.fuzzytime( datetime );
			} else if (hours <= 6) {
				text = time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
			} else if (days <= 1) {
				if (dataset && dataset.muxtasar == '3')
					text += time.fuzzytime( datetime, 1 );
				else if (dataset && dataset.muxtasar == '2')
					text += time.fuzzytime( datetime );
				else {
					if (dataset && !dataset.muxtasar)
						text += time.fuzzytime( datetime ) + ' '+at+' ';
					text += time.formatdate( new Date(datetime), (is24 ? 'HH:mm' : 'hh:mma') );
				}
			} else if (days > 1 && days <= 4) {
				text = time.formatdate( new Date(datetime), 'dddd'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else if (months < 2) {
				text = time.formatdate( new Date(datetime), 'Do MMM'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			} else {
				text = time.formatdate( new Date(datetime), 'Do MMM YYYY'+c+' '+(is24 ? 'HH:mm' : 'hh:mma') );
			}
			if (e) innerhtml(e, text);
		}
		return text;
	};
	time._calcs = {};
	time._replacements = [];
	time._uid = 0;
	time.now = function () { return new Date().getTime(); };
	time.zero = function (s) { return s < 10 ? '0'+s : s };
	time.year = 31557600000 ;
	time.month = 2629800000 ;
	time.day = 87660000 ;
	time.hour = 3652500 ;
	time.minute = 60875 ;
	time.second = 1000 ;
	time.milli = 1 ;
	time.striptime = function (_time) {
		var parsed = new Date(_time||new Date().getTime());
		parsed = (parsed.getDate()) + ' ' + monthnames[parsed.getMonth()] + ' ' + parsed.getFullYear() + ' GMT';
		parsed = new Date(parsed);
		if (parsed.toString() === 'Invalid Date') parsed = false;
		return parsed;
	};
	/*
	* both int values
	* */
	time.traversebydays = function (intdate, num) {
		intdate = new Date( intdate );
		intdate.setDate( intdate.getDate() + num );
		return intdate.getTime();
	};
	time.realdatereplace = function (s) {
		if ( s === ('YYYY') ) { return val._year }
		if ( s === ('YY') ) { return val._shortyear < 10 ? '0'+val._shortyear: val._shortyear }
		if ( s === ('Y') ) { return val._shortyear }
		if ( s === ('HH') ) { return val._hours < 10 ? '0'+val._hours: val._hours }
		if ( s === ('H') ) { return val._hours }
		if ( s === ('hh') ) { return val._hours12 < 10 ? '0'+val._hours12: val._hours12 }
		if ( s === ('h') ) { return val._hours12 }
		if ( s === ('mm') ) { return val._minutes < 10 ? '0'+val._minutes: val._minutes }
		if ( s === ('m') ) { return val._minutes }
		if ( s === ('ss') ) { return val._seconds < 10 ? '0'+val._seconds: val._seconds }
		if ( s === ('s') ) { return val._seconds }
		if ( s === ('a') ) { return val._ampm }
		if ( s === ('MMMM') ) { return val._monthname }
		if ( s === ('MMM') ) { return (val._monthname||'').substr(0, 3) }
		if ( s === ('MM') ) { return val._month < 10 ? '0'+val._month: val._month }
		if ( s === ('M') ) { return val._month }
		if ( s === ('dddd') ) { return val._dayname }
		if ( s === ('ddd') ) { return (val._dayname||'').substr(0, 3) }
		if ( s === ('DD') ) { return val._day < 10 ? '0'+val._day: val._day }
		if ( s === ('Do') ) { return val._day+val._o }
		if ( s === ('D') ) { return val._day }
	};
	time.replacewithuid = function () {
		time._replacements[time._uid] = time.realdatereplace(arguments[0]);
		++time._uid;
		return '%{'+time._uid+'}';
	};
	time.formatdate = function (date, format) {
		date = date || 0;
		format = format || 'MM/DD/YYYY h:mma';
		if (isnum(date)) date = new Date(date);
		time._uid = 0;
		time._replacements = [];
		val._year = date.getFullYear()+'' ,
		val._shortyear = parseInt(val._year.substr(-2)) ,
		val._month = date.getMonth()+1 ,
		val._monthname = monthnames[val._month-1] ,
		val._day = date.getDate() ,
		val._dayname = weekdays[date.getDay()] ,
		val._hours = date.getHours() ,
		val._hours12 = val._hours % 12 ,
		val._hours12 = val._hours12 < 1 ? 12 : val._hours12 , // the hour '0' should be '12'
		val._minutes = date.getMinutes() ,
		val._seconds = date.getSeconds() ,
		val._ampm = val._hours >= 12 ? translate('pm') : translate('am') ;
		val._monthname = translate(val._monthname);
		val._dayname = translate(val._dayname);
		val._o = translate('th');
		if (val._day === 1 || val._day === 21 || val._day === 31) val._o = translate('st');
		if (val._day === 2 || val._day === 22) val._o = translate('nd');
		if (val._day === 3 || val._day === 23) val._o = translate('rd');
		var datetimestring = format;
			datetimestring = datetimestring
				.replace(/YYYY/g, time.replacewithuid)
				.replace(/YY/g , time.replacewithuid)
				.replace(/Y/g , time.replacewithuid)
				.replace(/HH/g , time.replacewithuid)
				.replace(/H/g , time.replacewithuid)
				.replace(/hh/g , time.replacewithuid)
				.replace(/h/g , time.replacewithuid)
				.replace(/mm/g , time.replacewithuid)
				.replace(/m/g , time.replacewithuid)
				.replace(/ss/g , time.replacewithuid)
				.replace(/s/g , time.replacewithuid)
				.replace(/a/g , time.replacewithuid)
				.replace(/MMMM/g, time.replacewithuid)
				.replace(/MMM/g , time.replacewithuid)
				.replace(/MM/g , time.replacewithuid)
				.replace(/M/g , time.replacewithuid)
				.replace(/dddd/g, time.replacewithuid)
				.replace(/ddd/g , time.replacewithuid)
				.replace(/DD/g , time.replacewithuid)
				.replace(/Do/g , time.replacewithuid)
				.replace(/D/g , time.replacewithuid)
				;
		var matches;
		datetimestring = datetimestring.replace(/\%\{(\d)*\}/gm, function () {
			return time._replacements[ arguments[1]-1 ];
		});
		return datetimestring;
	};
	time.format = time.formatdate; // NEW 2024
	time.start = function (parent) {
		started = 1;
		clearTimeout(timeout);
		timeout = setTimeout(function () {
			time(parent);
			if (started) time.start();
		}, 10*1000);
	};
	time.stop = function () {
		clearTimeout(timeout);
		started = 0;
	};
	Hooks.set('visible', function () {
		time.start();
	});
	Hooks.set('hidden', function () {
		time.stop();
	});
	Hooks.set('widgets', function (parent) {
		if (parent) time(parent);
	});
	Hooks.set('ready', function () {
	});
})();
var Settings, settings, currentad;
;(function(){
	var settingsitems = [], module_name = 'settings';
	function add(a) { settingsitems.push(a); }
	/*['quality', 0, function () {
		Hooks.run('sheet', {
			name: 'quality',
			title: translate('quality'),
		});
	}],*/
	add(['Mudeer '+$.b, function () {
		return 'Web Framework';
	}, function () {
		open('https://github.com/xorasan/mudeer', '_blank');
	}, 'iconmudeer']);
	if (Config.repo) {
		add([Config.appname+' '+345, function () {
			return Config.sub;
		}, function () {
			open(Config.repo, '_blank');
		}, '/e.png']);
	}
	add(['timeformat', function () {
		var is24 = preferences.get(24, 1);
		return [is24 ? 'hours24' : 'hours12'];
	}, function () {
		var is24 = preferences.get(24, 1);
		if (is24) preferences.set(24, 0);
		else preferences.set(24, 1);
	}, 'icontimer']);
	add(['calendar', function () {
		var isgregorian = preferences.get(26, 1);
		return [isgregorian ? 'gregorian' : 'hijri'];
	}, function () {
		var isgregorian = preferences.get(26, 1);
		if (isgregorian) preferences.set(26, 0);
		else preferences.set(26, 1);
	}, 'icondaterange']);
	add(['largetext', function () {
		var largetext = preferences.get(9, 1);
		webapp.textsize();
		return [largetext ? 'on' : 'off'];
	}, function () {
		preferences.set(9, preferences.get(9, 1) ? 0 : 1);
	}, 'iconformatsize']);
	var settingslist, keys;
	Settings = settings = {
		get_dom_keys: function () {
			return keys;
		},
		adaaf: function (name, getvalue, onpress, icon) { // add
			settingsitems.push([name, getvalue, onpress, icon]);
			settings.jaddad(settingsitems.length-1);
			return settingsitems.length-1;
		},
		axad: function (uid) { // get
			return settingsitems[uid];
		},
		jaddad: function (uid) { // update
			var item = settings.axad(uid);
			if (item) {
				var body = typeof item[1] === 'function' ? item[1]() : undefined;
				var obj = {
					uid: uid,
				};
				obj.index = uid;
				obj.title$t = item[0];
				obj.icon = item[3];
				if (body instanceof Array) obj.body$t = body[0];
				else obj.body = body;
				if (settingslist) {
					settingslist.set(obj);
					if (backstack.states.view === module_name)
						settingslist.select();
				}
			}
		},
	};
	Hooks.set('ready', function () {
		if (get_global_object().Sidebar) { Sidebar.set({
			uid: module_name,
			title: translate( module_name ),
			icon: 'iconsettings',
		}); }
		keys = view.mfateeh(module_name);
		settingslist = list( keys.list ).idprefix(module_name)
						.listitem('settingsitem')
						.grid(3);
		settingslist.beforeset = function (item, id) {
			return item;
		};
		settingsitems.forEach(function (item, i) {
			settings.jaddad(i);
		});
		settingslist.onpress = function (item, key, uid) {
			if (item) {
				settings.axad(item.index)[2]();
				settings.jaddad(item.index);
			}
		};
	});
	Hooks.set('viewready', function (args) {
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Settings',
				ctrl: 1,
				alt: 1,
				k: 'p',
				i: 'iconsettings', // TODO icons module should generate variables like icon_settings
				c: function () {
					Hooks.run('view', module_name);
				}
			});
		}
		if (args.name == module_name) {
			if (get_global_object().Sidebar) Sidebar.choose(module_name);
				webapp.header([[module_name], 0, 'iconsettings']);
			softkeys.list.basic(settingslist);
			softkeys.set(K.en, function () {
				settingslist.press(K.en);
			});
			softkeys.set(K.bs, function () {
				backstack.back();
			});
			/* TEST
			* this can be automated by giving a function to view.?set?
			*
			* view should autocall this function on restore
			* it can find functions by looping
			* */
			settingslist.select(undefined, 0);
			settingslist.set_focus(1, 1);
		}
	});
})();
var translate, taraajim = taraajim || {}, xlate;
;(function(){
	'use strict';
	var
	languages = Object.keys(taraajim),
	uglynames = {
		en: 'en',
		ar: 'ar',
		ur: 'ur',
	},
	defaultlang = 'en',
	donumbers = function (translation) {
		var language = translate.get();
		if (['ur', 'ar'].includes(language)) {
			return translation .replace(/0/g, '٠')
								.replace(/1/g, '١')
								.replace(/2/g, '٢')
								.replace(/3/g, '٣')
								.replace(/4/g, '٤')
								.replace(/5/g, '٥')
								.replace(/6/g, '٦')
								.replace(/7/g, '٧')
								.replace(/8/g, '٨')
								.replace(/9/g, '٩')
								.replace(/%/g, '٪');
		} else {
			return translation;
		}
	},
	dodirection = function (parent, selector) {
		if (selector === undefined) selector = '[data-dir]';
		var items = (parent||document).querySelectorAll(selector);
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dir;
					if (e instanceof HTMLInputElement
					|| e instanceof HTMLTextAreaElement) {
						dir = translate.direction(e.value);
						e.dir = dir === 1 ? 'rtl' : 'ltr';
						listener(e, ['focus', 'input'], function () {
							dir = translate.direction(this.value);
							this.dir = dir === 1 ? 'rtl' : 'ltr';
						});
					} else {
						if (e.dataset.dir === 'rtl') { // force rtl
							dir = 'rtl';
						} else if (e.dataset.dir === 'ltr') { // force ltr
							dir = 'ltr';
						} else {
							dir = translate.direction(e.innerText);
						}
						if (e.dataset.dir == 'parent') { // apply to parent
							e.parentElement.dir = dir === 1 ? 'rtl' : 'ltr';
						} else {
							e.dir = dir === 1 ? 'rtl' : 'ltr';
						}
					}
				}
			}
		}
	};
	translate = function (alias) {
		var str = '';
		var language = translate.get();
		if (language && taraajim[language]) {
			if (taraajim[language][alias])
				str = taraajim[language][alias];
		}
		if (str === '') {
			if (taraajim['en'] && taraajim['en'][alias])
				str = taraajim['en'][alias];
		}
		var args = arguments;
		if (args.length > 1) {
			for (var i = 0; i < args.length; ++i) {
				str = str.replace( new RegExp('\%'+(i+1), 'g'), args[i+1] );
			}
		}
		if (str === '') str = alias || '';
		str = donumbers(str);
		return '' + str;
	};
	translate.get = function () {
		return preferences.get(translate.saveto) || defaultlang;
	};
	translate.set = function (language) {
		preferences.set(translate.saveto, language);
	};
	translate.saveto = 25;
	translate.change = function (language) {
		language = language || defaultlang;
		if (['ur', 'ar'].includes(language)) {
			document.body.dir = 'rtl';
		} else {
			document.body.dir = 'ltr';
		}
		Hooks && Hooks.run('translateupdate');
		translate.set(language);
		translate.update();
	};
	translate.a3daad = function (str) {
		return donumbers(str);
	};
	translate.update = function (parent) {
		var items = (parent||document).querySelectorAll('[data-i18n]');
		for (var i in items) {
			if (items.hasOwnProperty(i)) {
				var e = items[i];
				if (e) {
					var dataset = e.dataset;
					var i18n = dataset.i18n;
					if (i18n !== '') {
						var translation = translate(i18n);
						translation = donumbers(translation);
						if (e instanceof HTMLInputElement
						|| e instanceof HTMLSelectElement
						|| e instanceof HTMLTextAreaElement) {
							e.placeholder = translation;
						} else {
							e.innerText = translation;
						}
					}
				}
			}
		}
		dodirection(parent);
		dodirection(parent, 'input');
		dodirection(parent, 'textarea');
	};
	/*
	* detect language direction, 0-ltr, 1-rtl, 2-mixed
	* */
	translate.direction = function (text) {
		text = text || '';
		var ltr = text.match(/[a-zA-Z]+/),
			rtl = text.match(/[ا-ےا-ي]+/);
		if (rtl) return 1;
		if (ltr) return 0;
		return 2;
	};
	Hooks.set('ready', function () {
		translate.change( translate.get() );
		settings.adaaf('language', function () {
			var language = translate.get();
			if (language) return translate( uglynames[language]||'' );
		}, function () {
			var language = translate.get();
			var index = languages.indexOf( language );
			if (index < languages.length-1)
				++index;
			else
				index = 0;
			translate.change(languages[index]);
		}, 'icontranslate');
	});
	xlate = translate;
})();
/*
* props ending in $h use innerhtml
* ... $t use [i18n]
* */
var Templates, templates, namaavij;
;(function(){
	var index = {};
	Templates = templates = {
		mfateeh: function (element) {
			return templates.keys(element);
		},
		keys: function (element) {
			if (!(element instanceof HTMLElement)) return;
			var keys = {};
			var otherviews = element.querySelectorAll('[data-id]');
			for (var i in otherviews) {
				if ( otherviews.hasOwnProperty(i) ) {
					if (otherviews[i].dataset)
						keys[ otherviews[i].dataset.id ] = otherviews[i];
				}
			}
			return keys;
		},
		has_property: function (o, prop) {
			for (var i in o) {
				var name = i.split('$')[0];
				if (name == prop)
					return o[i];
			}
			return false;
		},
		set: function (clone, o, template) { // template is optional
			var keys = templates.keys(clone);
			o = o || {};
			if (o.hidden) clone.hidden = 1;
			if (o.id) clone.id = o.id;
			if (o.classes) clone.className = o.classes;
			if (o.status == 1) clone.dataset.selected = 1, clone.disabled = 0;
			else if (o.status == 2) clone.disabled = 1, delete clone.dataset.selected;
			else clone.disabled = 0, delete clone.dataset.selected;
			if (o.data)
			for (var i in o.data) {
				if (o.data[i] !== undefined)
					clone.dataset[i] = o.data[i];
				else
					delete clone.dataset[i];
			}
			if (o.onclick) clone.onclick = o.onclick;
			for (var i in keys) {
				if (o[i+'$t'] === '') { //
					if (keys[i].dataset.i18n) {
						innertext(keys[i], '');
						delete keys[i].dataset.i18n;
					}
				}
				var is_icon = !isundef( o[i+'$icon'] );
				var is_image = !isundef( o[i+'$image'] );
				var has_time = i+'$time';
				if (!isundef( o[has_time] )) {
					if (isundef( o[has_time] )) {
						popdata(keys[i], 'time');
						innertext(keys[i], '');
					} else
						setdata(keys[i], 'time', o[has_time]);
				}
				if ( !isundef(o[i]) || !isundef(o[i+'$h']) || !isundef(o[i+'$t']) || is_icon || is_image ) {
					if (o[i] == 'ixtaf') {
						keys[i].hidden = 1;
					} else
					if (o[i] == 'izhar') {
						keys[i].hidden = 0;
					} else
					if (isfun(keys[i].set_value)) {
						keys[i].set_value(o[i]);
					} else
					if (keys[i] instanceof HTMLInputElement) {
						keys[i].value = o[i];
					} else
					if (keys[i] instanceof HTMLImageElement) {
						if (typeof o[i] === 'string' && o[i].length) {
							if (o[i].startsWith('app://'))
								keys[i].src = o[i];
							else
								keys[i].src = o[i];
							keys[i].hidden = 0;
						} else {
							keys[i].hidden = 1;
						}
					} else
					if ( ['titlehours', 'titledays', 'titletime',
							'time', 'timeshow', 'days', 'waqt']
						.includes(i) ) { // dataset.time...
						if (o[i] !== undefined) {
							keys[i].dataset.time = o[i];
						}
						if (o.deadline)
							keys[i].dataset.deadline = 1;
						else
							delete keys[i].dataset.deadline;
					} else // improve how this is handled
					if (['titlei18n', 'bodyi18n'].includes(i)) {
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].dataset.i18n = o[i];
						} else {
							keys[i].hidden = 1;
							delete keys[i].dataset.i18n;
							keys[i].innerHTML = '';
						}
					} else // improve how this is handled
					if (['titlehtml', 'bodyhtml', 'bodyshowhtml']
						.includes(i)) { // raw HTML mode
						if (o[i]) {
							keys[i].hidden = 0;
							keys[i].innerHTML = o[i];
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else
					if (['icon', 'eqonah'].includes(i) || is_icon || is_image) { // create SVG inside or img if src = /...
						var icon_src = o[i];
						if (is_icon || is_image) {
							icon_src = o[i+'$icon'] || o[i+'$image'];
						}
						if (isstr(icon_src) && icon_src.length) {
							keys[i].hidden = 0;
							if (icon_src.startsWith('/') || is_image) {
								innerhtml(keys[i], '<img src="'+icon_src+'" />');
							} else {
								var e = icons.querySelector('#'+icon_src);
								if (e)
									keys[i].innerHTML = '<svg viewBox="0 0 48 48">'+e.cloneNode(1).innerHTML+'</svg>';
							}
						} else {
							keys[i].hidden = 1;
							keys[i].innerHTML = '';
						}
					} else {
						if (keys[i].hidden) keys[i].hidden = 0;
						var html = o[i+'$h'], trjm = o[i+'$t'];
						if (!isundef(html)) {
							innerhtml(keys[i], html);
						} else if (!isundef(trjm)) {
							keys[i].dataset.i18n = trjm;
						} else {
							innertext(keys[i], o[i]);
						}
					}
				}
			}
			Hooks.rununtilconsumed('templateset', [clone, o, keys, template]);
			translate && translate.update(clone.parentElement);
			time && time(clone.parentElement);
			datepicker && datepicker.fahras(clone.parentElement);
			return clone;
		},
		/*
		* you can pass either an element or a name that's already indexed
		*
		* if only element is specified, then its clone is returned
		*
		* if parent is also specified then it inserts the clone under parent
		* and returns a function that accepts {options} to setup the clone
		*
		* before can be a child under parent to insert before, else appends
		*
		* id can be used to reuse old elements
		* */
		get: function (element, parent, before, id) {
			if (isstr(element)) element = index[element];
			if (!(element instanceof HTMLElement)) {
				$.log.e( 'templates.get element not found', arguments );
				return false;
			}
			var clone, template;
			if (id) {
				clone = document.getElementById(id);
				if (clone) before = clone.nextElementSibling;
			}
			if (!clone)
				clone = element.cloneNode(true),
				template = clone.dataset.template,
				delete clone.dataset.template,
				clone.hidden = 0;
			if (parent) {
				if (before instanceof HTMLElement) {
					parent.insertBefore(clone, before);
				} else if (before) {
					parent.insertBefore(clone, parent.firstElementChild);
				} else
					parent.appendChild(clone);
				Hooks.rununtilconsumed('widgets', parent);
				return function (o) {
					return templates.set(clone, o, template);
				};
			}
			return clone;
		},
		/* replace element with a template
		*
		*/
		replace_with: function (element, replacement) {
			if (isstr(replacement)) replacement = index[ replacement ];
			if (!(element instanceof HTMLElement)) return false;
			if (!(replacement instanceof HTMLElement)) return false;
			var clone, template;
			clone = replacement.cloneNode(true),
			template = clone.dataset.template,
			delete clone.dataset.template,
			clone.hidden = 0;
			element.replaceWith(clone);
			return function (o) {
				return templates.set(clone, o, template);
			};
		},
		/*
		* indexes any htm elements marked with [template=<name>]
		* */
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-template]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.template ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.template ] = elements[i];
				}
			}
			return index;
		},
	};
	templates.index();
	namaavij = templates;
	namaavij.axav = namaavij.get;
})();
/* TODO
* .row1 should be animated
* simplify this module with better logic
*/
/* FEATURES
* <element>.on_focus_prev() triggered when K.up is pressed on an element
* <element>.on_focus_next() triggered when K.dn is pressed on an element
* all keyups are pd'd, fig out logic for keydowns in .press
* modifiers now do work! 13 sep 2023
*/
var Softkeys, softkeys, K, P, debug_softkeys = 0;
;(function(){
	K = { // key code names
		mt: 'microphonetoggle',
		sr: 'softright',
		sl: 'softleft',
		en: 'enter',
		pu: 'pageup',
		pd: 'pagedown',
		up: 'arrowup',
		dn: 'arrowdown',
		rt: 'arrowright',
		lf: 'arrowleft',
		cl: 'call',
		bs: 'backspace',
	},
	P = {
		empty: {},
		sheet: {},
		dialog: {},
		list: {},
	};
	var global_keys = ['f1', 'f2', 'f5', 'escape', K.sl, K.sr];
	var hfizM = {}, M = {}, // mapped keys
	current,
	inlongpress, lastkey, lastkeytime, repeatmode,
	index = {},
	removableparent = function (element) {
		var parent = element.parentElement;
		if (parent.dataset.focus) {
			if (parent.dataset.removable)
				return parent;
			else // check parent's parent
				return removableparent(parent);
		}
	},
	updatekey = function (uid) {
		var parent, o = {}, classes = '', args = M[uid];
		if (!args) return;
		if (args.length === 1 || args.hidden || args.h) o.hidden = 1;
		var callback = args[0] || args._callback;
		var k = args.key || uid;
		if (callback) o.onclick = function (e) {
			if (index[k]) index[k].blur(); // prevent focus
			var key = e ? e.key : undefined;
			callback(key, e);
		};
		if (o.contextmenu) o.oncontextmenu = function (e) {
			if (index[k]) index[k].blur(); // prevent focus
			var key = e ? e.key : undefined;
			o.contextmenu(key, e);
		};
		o.name = args.name || args.n || '';
		o.label = args[1] || args.label || args.l || '';
		o.real_icon$icon = args[2] || args.icon || args.i;
		o.status = args[3] || args.status || args.s;
		if (o.real_icon$icon === false) {
			o.name = k;
		}
		if (!isarr(args)) { // only .add API
			o.key = (args.ctrl ? 'ctrl ' : '')
						+ (args.alt ? 'alt ' : '')
						+ (args.shift ? 'shift ' : '')
						+ (args.key || uid)
						;
		}
		if ( k == K.sl ) classes = 'left' ;
		if ( k == K.en ) classes = 'center';
		if ( k == K.sr ) classes = 'right' ;
		if ( k == '*' ) classes = 'star' ;
		if ( k == '#' ) classes = 'hash' ;
		if ([K.sr, K.sl, K.en].includes(k)) {
			parent = skmain;
		} else {
			parent = skhints;
		}
		o.id = 'sk'+k;
		o.classes = classes;
		var before = 0;
		if (args.first) {
			before = parent.firstElementChild;
		}
		if (args.last) {
			before = parent.lastElementChild;
		}
		index[k] = templates.get('skbutton', parent, before, o.id)(o);
		skdots.hidden = totalvisible() ? 0 : 1;
		resize();
	},
	adaaf = function (name, callback, label, icon, status) {
		var action = [];
		M[name] = M[name] || action;
		action[0] = callback === undefined ? M[name][0] : callback;
		action[1] = label === undefined ? M[name][1] : label;
		action[2] = icon === undefined ? M[name][2] : icon;
		action[3] = status === undefined ? M[name][3] : status;
		M[name] = action;
	},
	talaf = function (name) {
		M[name] = undefined;
	};
	totalvisible = function () {
		var total = 0;
		for (var i in skhints.childNodes) {
			if (skhints.childNodes.hasOwnProperty(i))
				if (!skhints.childNodes[i].hidden) total++;
		}
		return total;
	};
	/*
	* putting these inside a function keeps them unique
	* */
	P.empty = function () {
		if (debug_softkeys) $.log.w('Softkeys.P.empty');
		M[K.sr] = [function () {
			Hooks.run('back');
			return 1;
		}, 0, 'iconclose'];
		M[K.bs] = [function () {
			Hooks.run('minimize');
		}];
		M['#'] = [function () {
			Softkeys.showhints();
			return 1;
		}/*, '#', 'iconhelp'*/];
		Softkeys.update();
	},
	Softkeys = softkeys = {
		P: P,
		K: K,
		saveto: 7,
		/* clear previous map explicitly, .map doesn't clear it by default
		* */
		clear: function () {
			M = {};
			softkeys.update();
			backstack.set('softkeys', M);
			return softkeys;
		},
		havaf: function (name) {
			return softkeys.talaf(name);
		},
		baidaa: function (name, yes) { if (M[name]) {
			M[name][3] = yes ? 1 : undefined;
			softkeys.update();
		} },
		talaf: function (name) { // TODO deprecate, NEW remove
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						talaf(n);
					});
				} else {
					talaf(name);
				}
				Softkeys.update();
				Backstack.set('softkeys', M);
			}
			return softkeys;
		},
		update: function () {
			skhints.innerHTML = '';
			skmain.innerHTML = '';
			if (M) for (var k in M) updatekey(k);
		},
		showhints: function (time) {
			delete softkeysui.dataset.hidden;
			setdata(softkeysui, 'shown', 1);
			if (!skhelp.hidden) {
				skhelp.hidden = 1;
				Preferences.set(7, 1);
			}
			$.taxeer('softkeyshints', function () {
				popdata(softkeysui, 'shown');
				softkeysui.dataset.hidden = 1;
			}, time || 2500);
		},
		/* remember one or more actions which you can recall later
		* you can also forget stored actions
		* */
		hfiz: function (name) { // remember
			if (name) {
				if (name instanceof Array) {
					name.forEach(function (n) {
						softkeys.hfiz(n);
					});
				} else {
					hfizM[name] = M[name];
				}
			}
			return softkeys;
		},
		fasax: function () { // recall
			for (var i in hfizM) {
				M[i] = hfizM[i];
			}
			softkeys.update();
			return softkeys;
		},
		nsee: function () { // forget
			hfizM = {};
			return softkeys;
		},
		/*
		* update a single key definition in M
		* status 0normal 1selected 2disabled
		* */
		set: function (name, callback, label, icon, status) { // TODO deprecate for add
			if (name) {
				if (isarr(name)) {
					name.forEach(function (n, i) {
						var labeli = label;
						if (isarr(label)) labeli = label[i];
						var iconi = icon;
						if (isarr(icon)) iconi = icon[i];
						if (i)
						adaaf(n, callback, name[0], iconi, status);
						else
						adaaf(n, callback);
					});
				} else {
					adaaf(name, callback, label, icon, status);
				}
				Softkeys.update(name);
				Backstack.set('softkeys', M);
			}
			return this;
		},
		add: function (o) { // use this instead of .set
			/* key uid is based on mods + keyname
			properties
			uid generated, you can later use it to remove keys
			n name
			h hidden
			i icon
			l label
			s status
			k key
			a aux right click/context menu
			c cb callback
			first: keeps this softkey at the top
			last: keeps this softkey at the bottom
			*/
			o._callback = o.callback || o.c || o.cb;
			o.contextmenu = o.a || o.aux;
			o.key = tolower(o.key || o.k);
			if ( isfun(o._callback) && isstr(o.key) ) {
				o.uid = (o.ctrl ? 1 : 0) +'-'+
						(o.alt ? 1 : 0) +'-'+
						(o.shift ? 1 : 0) +'-'+
						o.key;
				M[ o.uid ] = o;
				updatekey(o.uid);
				Backstack.set('softkeys', M);
			}
			return this;
		},
		remove: function (uid) { // use this instead of .talaf, also accepts { uid }
			if (uid && uid.uid) {
				uid = uid.uid;
				delete uid.uid; // to retain the object and be able to reuse it with a new gen'd uid
			}
			this.talaf(uid);
		},
		/*
		* preset P.<name>
		* callbacks {enter: callback}
		* */
		map: function (preset, callbacks) {
			M = Object.assign({}, M, preset);
			if (M && callbacks) {
				for (var i in callbacks) {
					M[i] = M[i] || [];
					M[i][0] = callbacks[i];
				}
			}
			softkeys.update();
			backstack.set('softkeys', M);
		},
		actualpress: function (k, e, longpress) {
			var pd = function () { e && e.preventDefault() };
			k = k.toLowerCase();
			if (k == 'sl') k = K.sl, pd();
			if (k == 'up') k = K.up, pd();
			if (k == 'sr') k = K.sr, pd();
			if (k == 'lf') k = K.lf, pd();
			if (k == 'en') k = K.en, pd();
			if (k == 'rt') k = K.rt, pd();
			if (k == 'cl') k = K.cl, pd();
			if (k == 'dn') k = K.dn, pd();
			if (k == 'bs') k = K.bs, pd();
			if (M && M[k] && typeof M[k][0] == 'function')
				M[k][0](k, e, e && e.type, longpress) && pd(); // prevent default if true is returned
		},
		press: function (k, e, longpress) {
			var caught, pd = function () { preventdefault(e); };
			kraw = k;
			if (isstr(k)) k = k.toLowerCase();
			if (e && e.type && e.type == 'mousewheel') {
				if (e.y <= -1) k = K.up;
				if (e.y >= 1) k = K.dn;
			}
			if (k == 'f1') k = K.sl, pd();
			if (k == 'f2') k = K.sr, pd();
			if (k == 'f5' ||
					(e && e.ctrlKey && ['r', 'ر'].includes(k))
				) {
				history.go();
			}
			if ('escape' == k && !document.fullscreenElement)
				k = K.sr, pd();
			if (k == K.mt) pd();
			var editmode = 0, a = document.activeElement, dir;
			var left_key = K.lf,
				right_key = K.rt;
			if ((a instanceof HTMLTextAreaElement) || a.contentEditable == 'true') {
				if (e && e.altKey || [K.sl, K.sr].includes(k)) {
				} else {
				}
			}
			if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement || a.contentEditable == 'true')
			&& a.type != 'range') {
				editmode = 1;
				if (a.contentEditable == 'true') {
					dir = translate.direction(a.innerText);
				} else {
					dir = translate.direction(a.value);
				}
				a.dir = dir === 1 ? 'rtl' : 'ltr';
			}
			if (a instanceof HTMLButtonElement) {
				if (a.dataset.remover && k == K.en) {
					var parent = removableparent(a);
					if (!focusprev(parent))
						caught = focusnext(parent);
					if (parent) parent.remove();
					pd();
				}
				if ( isfun(a.on_focus_prev) && (k == K.up || k == left_key) ) {
					caught = 1;
					pd();
					a.on_focus_prev();
					return;
				}
				if ( isfun(a.on_focus_next) && (k == K.dn || k == right_key) ) {
					caught = 1;
					pd();
					a.on_focus_next();
					return;
				}
			}
			var length = 0, selectionStart = 0;
			/* TODO test left/right keys on buttons and single line inputs
			* always allow using up/down keys to move between fields
			* left/right should detect language direction
			* */
			if (editmode) {
				var event_type = e ? e.type : '';
				if (a.contentEditable == 'true') {
					length = a.textContent.length;
					selectionStart = getSelection().baseOffset;
				} else {
					length = a.value.length;
					selectionStart = a.selectionStart;
				}
				var atend = (length === selectionStart),
					atstart = (0 === selectionStart);
				if ( atstart && (k == K.up || (k == left_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { // MERGE ?
					if ( isfun(a.on_focus_prev) ) { caught = 1; pd(); a.on_focus_prev(); return; }
					caught = focusprev(a), pd();
				}
				if ( atend && (k == K.dn || (k == right_key && dir !== 1) ) && !e.altKey && !e.ctrlKey && !e.shiftKey ) { // MERGE ?
					if ( isfun(a.on_focus_next) ) { caught = 1; pd(); a.on_focus_next(); return; }
					caught = focusnext(a), pd();
				}
				else
				if (k == K.en && e.shiftKey && a.uponshiftenter) {
					if (event_type == 'keyup') a.uponshiftenter(atstart, atend);
					pd();
				}
				else if (k == K.en && !e.shiftKey && a.uponenter) {
					if (event_type == 'keyup') a.uponenter (atstart, atend);
					pd();
				}
			}
			else if (a) {
				if ( is_navigable( a )
					|| a.parentElement.dataset.focus ) {
					if (k == K.up || k == left_key) caught = focusprev(a), pd();
					if (k == K.dn || k == right_key) caught = focusnext(a), pd();
					if (k == K.en && a.onclick) a.onclick(), pd();
				}
			}
			/* if text field isn't empty, disable arrow key handling
			* K.bs is managed by KaiOS
			* */
			if (editmode && !length) {
				if (k == K.bs) {
					if (a.dataset.removable)
						caught = focusprev(a), a.remove(), pd();
					else
						/*Hooks.run('back'), webapp.blur(), */pd();
				}
			}
			caught = caught || Hooks.rununtilconsumed('softkey', [k, e || {}, e && e.type, longpress]);
			if (caught) return;
			var mmm = M[kraw] || M[k];
			/* if defined key has ctrl yes; then just in that case let it through
			*/
			var let_through, callback = mmm ? mmm[0] : 0;
			var event = e || {};
			var uid = (event.ctrlKey?1:0) +'-'+ (event.altKey?1:0) +'-'+ (event.shiftKey?1:0) +'-'+ k;
			if (M[uid]) {
				mmm = M[uid];
				callback = mmm._callback;
				let_through = 1;
			}
			if ( (!editmode || e.altKey || let_through || global_keys.includes(k)) && mmm && isfun(callback)
			) {
				caught = callback(k, e, e && e.type, longpress);
				if ( caught ) pd(); // prevent default if true is returned
			} else {
				/*if (k == K.dn) {
					webapp.scrollx(40);
					pd();
				}
				if (k == K.up) {
					webapp.scrollx(-40);
					pd();
				}
				if (k == K.rt) {
					webapp.scrolltobottom();
					pd();
				}
				if (k == K.lf) {
					webapp.scrolltotop();
					pd();
				}*/
			}
			if (isundef(caught) || caught == 1) { // true|1|undef = yes; 0|false = no
				var softkey_element = elementbyid( 'sk'+k );
				if (softkey_element) {
					setdata(softkey_element, 'hawm', 1);
					$.taxeer('sk'+k, function () {
						popdata(softkey_element, 'hawm');
					}, 400);
				}
			}
		},
	};
	Softkeys.get_main_height = function () {
		return skmain.offsetHeight;
	};
	Softkeys.showhints();
	Softkeys.M = function () { return M; };
	var shadow_visible = 1;
	Softkeys.shadow = function (yes) {
		if (yes) {
			shadow_visible = 1;
			setcss(softkeysui, 'background', '');
			setcss(skmain, 'min-height', '');
		} else {
			shadow_visible = 0;
			setcss(softkeysui, 'background', '0');
			setcss(skmain, 'min-height', '0');
		}
	};
	var dots_visible = 1;
	Softkeys.hide_dots = function () {
		if (dots_visible) {
			dots_visible = 0;
			ixtaf(softkeys_backstack);
		} else {
			dots_visible = 1;
			izhar(softkeys_backstack);
		}
	};
	var autoheight = function (a) {
		if (a instanceof HTMLTextAreaElement) {
			setcss(a, 'height', 0);
			if (a.scrollHeight > a.offsetHeight)
				setcss(a, 'height', a.scrollHeight+3+'px');
		}
	};
	Softkeys.autoheight = autoheight;
	var resize = function () {
		var w = innerwidth(), sl = index[K.sl], sr = index[K.sr];
		if (w > 720) {
			var ww = ((innerwidth()-590)/2);
			if (sl) setcss(sl, 'width', ww+'px');
			if (sr) setcss(sr, 'width', ww+'px');
		} else {
			if (sl) setcss(sl, 'width');
			if (sr) setcss(sr, 'width');
		}
	};
	listener('resize', function () {
		$.taxeer('resizesoftkeys', function () { resize(); }, 100);
	});
	resize();
	Hooks.set('contextmenu', function (e) {
		var a = document.activeElement;
		if (a && (a instanceof HTMLInputElement
		|| a.contentEditable == 'true'
		|| a instanceof HTMLTextAreaElement
		|| a instanceof HTMLAnchorElement) && a.type != 'range') {
		} else {
			Softkeys.showhints();
			return 1;
		}
	});
	Hooks.set('ready', function () {
		skdots.onclick = function () {
			Softkeys.showhints();
		};
	});
	Hooks.set('mousewheel', function (e) {
		e && softkeys.press('', e, e.type);
	});
	Hooks.set('keyup', function (e) {
		var a = document.activeElement;
		if ((a instanceof HTMLInputElement
		|| a instanceof HTMLTextAreaElement) && a.type != 'range') {
			var str = a.value;
			if (a.type != 'password') str = str.trim();
			var len = str.length, yes;
			if (len) {
				var min = parseint(getattribute(a, 'min') || 0);
				var max = parseint(getattribute(a, 'max') || 0);
				if (min && len < min) a.dataset.under = 1, yes = 1;
				else delete a.dataset.under;
				if (max && len > max) a.dataset.over = 1, yes = 2;
				else delete a.dataset.over;
			} else {
				delete a.dataset.under;
				delete a.dataset.over;
			}
			$.taxeer('softkeysminmax', function () {
				if (yes === 1) Webapp.taht3nsar('-'+(min-len));
				else if (yes === 2) Webapp.taht3nsar(len+' / '+max+' +'+(len-max));
				else Webapp.taht3nsar(len);
			}, 50);
			$.taxeer('softkeysautoheight', function () {
				autoheight(a);
			}, 100);
		} else {
		}
		var key = (e.key||'').toLowerCase();
		Hooks.rununtilconsumed('softkey', [key, e || {}, e && e.type, 0]);
		preventdefault(e);
	});
	Hooks.set('keydown', function (e) {
		if (time.now() - lastkeytime > 60 || lastkeytime === undefined || !0) {
			e && Softkeys.press(e.key, e, e.type, 0);
			lastkeytime = time.now();
		} else {
			preventdefault(e);
		}
	});
	Hooks.set('templateset', function (args) {
		var c = args[0],
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			if (k.icon && !o.real_icon$icon)
				k.icon.remove();
			if (!o.label && !o.real_icon$icon)
				c.hidden = 1;
		}
	});
	Hooks.set_first('restore', function (args) {
		if (debug_softkeys) $.log.w( 'Softkeys restore hook' );
		var oldM = backstack.get('softkeys');
		if (oldM) {
			M = Object.assign({}, oldM);
			softkeys.update();
		}
	});
	Hooks.set('backstack', function (level) {
		softkeys_backstack.querySelectorAll('span').forEach(function (o, i) {
			o.hidden = i > level;
		});
	});
	if (preferences.get(softkeys.saveto, 1)) skhelp.hidden = 1;
})();
;(function(){
	var softkeys_list_debug = 0;
	softkeys.list = {
		/*
		* if LV is undefined, it clears these keys
		* */
		basic: function (LV) {
			if (softkeys_list_debug) $.log.w('softkeys.list.basic', LV);
			if (LV) {
				Softkeys.add({ n: 'Select',
					k: K.en,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.press(K.en);
							e && e.preventDefault();
						}
					}
				});
				Softkeys.set(K.up, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.up();
						e && e.preventDefault();
					}
				});
				Softkeys.set(K.dn, function (k, e) {
					if (LV.element.dataset.focussed) {
						LV.down();
						e && e.preventDefault();
					}
				});
				Softkeys.add({
					k: K.rt,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.right();
							e && e.preventDefault();
						}
					},
				});
				Softkeys.add({
					k: K.lf,
					c: function (k, e) {
						if (LV.element.dataset.focussed) {
							LV.left();
							e && e.preventDefault();
						}
					},
				});
			} else {
				Softkeys.talaf([K.en, K.up, K.dn, K.rt, K.lf]);
			}
		},
	};
})();
var Sheet, sheet,
	sheet_ready = 'sheet-ready',
	sheet_done = 'sheet-done',
	sheet_cancel= 'sheet-cancel',
	sheet_anyway= 'sheet-anyway'
	;
;(function(){
	var index = {}, header, container, active_sheet_name, active_sheet_uid, active_args, active_keys, new_list,
		active_data, before_okay, debug_sheet,
		ae, murakkaz;
	Sheet = sheet = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		zaahir: function (name) { // currently active sheet TODO deprecate
			return active_sheet_name === name;
		},
		is_active: function (name) {
			return active_sheet_name === name;
		},
		get_active: function () {
			return active_sheet_name;
		},
		get_active_uid: function () {
			return active_sheet_uid;
		},
		get_active_title: function () {
			return header.innerText;
		},
		set_data: function (o) {
			active_data = o;
		},
		get_data: function () {
			return active_data;
		},
		get_title: function () {
			return header.innerText;
		},
		set_title: function (text) {
			return this.header(text);
		},
		bardaa: function (v) {
			if (!container.firstElementChild) return;
			var children = Object.values(container.firstElementChild.children);
			if (v) {
				children.forEach(function (item) {
					if (getdata(item, 'focus') === 'list') {
						var l = item.listobject;
						if (l.murakkaz) {
							murakkaz = l;
							l.rakkaz();
						}
					}
				});
				setdata(container, 'bardaa', 1);
				softkeys.set(K.sl, function (e) {
					webapp.itlaa3('pleasewait');
				}, 0, 'iconhourglassempty');
				ae = webapp.blur();
			}
			else {
				softkeys.set(K.sl, function (e) {
					sheet.okay();
				}, 0, 'icondone');
				popdata(container, 'bardaa');
				if (ae) ae.focus();
				if (murakkaz) murakkaz.rakkaz(1);
			}
		},
		header: function (text) {
			if (text) {
				if (isarr(text)) {
					header.dataset.i18n = text[0];
				} else {
					header.innerText = text;
				}
				header.hidden = 0;
			} else {
				delete headerui.dataset.i18n;
				header.innerText = '';
				header.hidden = 1;
			}
		},
		hide: function () {
			if (debug_sheet) $.log.w( 'Sheet hide' );
			sheetui.hidden = 1;
			sheet.okay = 0;
			sheet.cancel = 0;
			active_sheet_name =
			active_sheet_uid =
			active_args =
			active_keys =
			new_list =
			before_okay = undefined;
		},
		set_before_okay: function (cb) {
			before_okay = cb;
		},
		show: function (args) {
			ae = murakkaz = 0;
			container.innerHTML = '';
			sheetui.hidden = 0;
			if (typeof args === 'string')
				args = {
					name: args,
				};
			active_args = args;
			this.set_data();
			var name = args.name || args.n,
				title = args.title || args.t || '',
				uid = args.uid || args.u,
				minqabl = args.minqabl || args.before_okay || args.b,
				callback = args.callback || args.c,
				oncancel = args.oncancel || args.x,
				ayyihaal = args.ayyihaal || args.a,
				init = args.init || args.i,
				keys;
			name = name || 'list_sheet';
			new_list; // passed as 3rd arg to hooks
			args.n = args.name = name;
			args.u = args.uid = uid;
			header.innerText = title;
			sheet.onshow && sheet.onshow(name);
			var ui = index[name];
			if (ui) {
				active_sheet_name = name;
				active_sheet_uid = uid;
				var node = ui.cloneNode(true);
				if (node) {
					delete node.dataset.sheet;
					node.dataset.visiblesheet = 1;
					node.hidden = 0;
					container.appendChild(node);
					sheetui.focus();
					translate && translate.update( sheetui );
					Hooks.rununtilconsumed('widgets', sheetui);
					active_keys = keys = templates.keys(container);
					if (name == 'list_sheet') {
						new_list = list( keys.list ).listitem( 'list_sheet_item' ).idprefix( 'list_sheet_item' );
						new_list.after_set = function (o, c, k) {
							if (o.count) izhar(k.count_tag); else ixtaf(k.count_tag);
						};
						init && init( keys, uid, args, new_list );
						var original_callback = callback;
						callback = function () {
							if (isfun(original_callback)) original_callback(new_list);
						};
					} else {
						init && init( keys, uid, args );
					}
					Hooks.run(sheet_ready, args, keys, new_list);
					Hooks.rununtilconsumed('widgets', sheetui);
				}
			}
			var original_okay = function () {
				callback && callback( args || keys );
				ayyihaal && ayyihaal( args || keys );
				Hooks.run(sheet_done, args, keys, new_list);
				Hooks.run(sheet_anyway, args, keys, new_list);
				Webapp.blur();
				Hooks.run('back');
			};
			Sheet.okay = function () {
				if (isfun(before_okay)) {
					Sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						original_okay(args || keys);
					});
				} else {
					original_okay();
				}
			};
			Sheet.bardaa();
			if (isfun(minqabl)) {
				Sheet.okay = function (args) {
					Sheet.bardaa(1);
					minqabl(args || keys, function (args) {
						original_okay(args || keys);
					});
				};
			}
			Sheet.cancel = function () {
				oncancel && oncancel( args || keys );
				ayyihaal && ayyihaal( args || keys );
				Hooks.run(sheet_cancel, args, keys, new_list);
				Hooks.run(sheet_anyway, args, keys, new_list);
				Webapp.blur();
				Hooks.run('back');
			};
		},
		get: function (name) {
			if (!name) return container.firstElementChild;
			else return index[name];
		},
		index: function (parent) {
			var elements = (parent||document.body).querySelectorAll('[data-sheet]');
			for (var i in elements) {
				if ( elements.hasOwnProperty(i) && elements[i].dataset.sheet ) {
					elements[i].hidden = 1;
					index[ elements[i].dataset.sheet ] = elements[i];
				}
			}
			return index;
		},
	};
	Hooks.set('ready', function () {
		Sheet.index();
		var mfateeh = templates.keys(sheetui);
		header = mfateeh.header;
		container = mfateeh.container;
	});
	Hooks.set('backstacksheet', function (args) {
		Webapp.dimmer(400);
		Softkeys.clear();
		if (args.callback || args.c) {
			Softkeys.set(K.sl, function () {
				Sheet.okay && Sheet.okay();
			}, 0, 'icondone');
		}
		Softkeys.set(K.sr, function () {
			Sheet.cancel && Sheet.cancel();
		}, 0, 'iconarrowback');
		Sheet.show(args);
	});
	Hooks.set('backstack-crumbs', function (crumbs) {
		if (!crumbs.is_sheet) {
			if (!isundef(active_sheet_uid)) { // a sheet was active previously
				Hooks.run(sheet_cancel, active_args, active_keys, new_list);
				Hooks.run(sheet_anyway, active_args, active_keys, new_list);
			}
			Sheet.hide(); // clear active sheet name and uid + okay/cancel funcs
			Webapp.blur();
		}
	});
})();
function open_list_sheet(args, init, callback) { // string, fn( list ), fn( )
	var name, uid;
	if (typeof args === 'string')
		args = {
			name: args,
		};
	var new_list;
	Backstack.sheet({
		n: 'list_sheet', // TODO make this default if no n, add searchbox
		t: name,
		u: args.u || args.uid,
		i: function (k) {
			new_list = list( k.list ).listitem( 'list_sheet_item' ).idprefix( 'list_sheet_item' );
			new_list.after_set = function (o, c, k) {
				if (o.count) izhar(k.count_tag); else ixtaf(k.count_tag);
			};
			if (isfun(init)) init(new_list);
		},
		c: function () {
			if (isfun(callback)) callback(new_list);
		}
	});
}
var Themes, themes;
;(function(){
	var K, P, settingsuid, settings_contrast_uid, current = 0, contrast = 0, debug_themes = 0;
	var store = {
		0: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#0e0e0e',
			primary: 'black',
			primaryd: '#070707',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#353535',
			secondary: '#333',
			secondaryd: '#252525',
			secondaryxd:'#151515',
			secondaryt: 'rgba(40,40,40,0.8)',
			tertiaryl: '#454545',
			tertiary: '#444',
			tertiaryd: '#353535',
			tertiaryt: 'rgba(53,53,53,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellowd: '#b90',
			yellow: '#ca0',
			yellowl: '#db0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		1: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e9e9e9',
			primary: '#fff',
			primaryd: '#f3f3f3',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#c6c6c6',
			secondary: '#d6d6d6',
			secondaryd: '#e1e1e1',
			secondaryxd:'#e5e5e5',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#d9d9d9',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(112, 198, 255, 0.7)',
			accentxt: 'rgba(112, 198, 255, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellowd: '#b90',
			yellow: '#ca0',
			yellowl: '#db0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
		2: {
			status: 'rgba(0,0,0,0.7)',
			statusm: 'rgba(0,0,0,0.35)',
			textl: '#fff',
			text: '#ddd',
			textd: '#aaa',
			textdt: '#aaaaaa55',
			textxd: '#777',
			textxdt: '#77777755',
			primaryl: '#050505',
			primary: 'black',
			primaryd: 'black',
			primaryt: 'rgba(0,0,0,0.8)', // perfect transparent level
			primaryxt: 'rgba(0,0,0,0.4)',
			secondaryl: '#555',
			secondary: '#444',
			secondaryd: '#333',
			secondaryt: 'rgba(60,60,60,0.8)',
			tertiaryl: '#777',
			tertiary: '#666',
			tertiaryd: '#555',
			tertiaryt: 'rgba(83,83,83,0.8)',
			accentl: '#4ccbfc',
			accent: '#04baf5',
			accentt: 'rgba(4, 186, 245, 0.7)',
			accentxt: 'rgba(4, 186, 245, 0.4)',
			accentd: '#0284c0',
			accentdt: 'rgba(4, 126, 205, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#f99',
			red: '#c00',
			redd: '#900',
},
		3: {
			status: 'rgba(0,0,0,0.6)',
			statusm: 'rgba(0,0,0,0.2)',
			textl: '#111',
			text: '#333',
			textd: '#666',
			textdt: '#66666655',
			textxd: '#888',
			textxdt: '#88888855',
			primaryl: '#e6e6e6',
			primary: '#fff',
			primaryd: '#d6d6d6',
			primaryt: 'rgba(255,255,255,0.8)', // perfect transparent level
			primaryxt: 'rgba(255,255,255,0.4)',
			secondaryl: '#e6e6e6',
			secondary: '#d6d6d6',
			secondaryd: '#c6c6c6',
			secondaryt: 'rgba(180,180,180,0.8)',
			tertiaryl: '#eee',
			tertiary: '#ddd',
			tertiaryd: '#ccc',
			tertiaryt: 'rgba(204,204,204,0.8)',
			accentl: '#0bb8cb',
			accent: '#00609a',
			accentt: 'rgba(112, 198, 255, 0.7)',
			accentxt: 'rgba(112, 198, 255, 0.4)',
			accentd: '#004371',
			accentdt: 'rgba(0, 37, 93, 0.7)',
			greend: '#0b0',
			green: '#0c0',
			greenl: '#0d0',
			yellow: '#ca0',
			redl: '#900',
			red: '#c00',
			redd: '#faa',
		},
	};
	function set_theme_with_contrast(theme) {
			if ( theme ) { // white
				themes.set(1);
			} else { // black
				themes.set(0);
			}
	}
	Themes = themes = {
		/* in preferences (using localStorage), use this key to remember theme
		* */
		saveto: 19,
		saveto_contrast: '19c',
		/* +changes the theme if only the theme name is provided
		* theme is a string, refers to an object inside store
		* this objects contains key:value pairs
		* that refer to slang css variables
		*
		* +if only theme & key are provided and not value
		* assumes theme is key, and key is value and set it into the current theme
		*
		* +if key and value are also provided
		* inside a store.theme, set a key to value
		* */
		set: function (theme, key, value) {
			var arglen = arguments.length;
			if (arglen === 0) {
				Themes.set(current);
			}
			if (arglen === 1) {
				if (store[theme]) {
					dynamicstyle.innerHTML = updatetheme(store[theme]);
					themecolor && themecolor.setAttribute('content', themes.get('status'));
				}
			}
			if (arglen === 2) {
				store[current] = store[current] || {};
				store[current][theme] = key;
			}
			if (arglen === 3) {
				store[theme] = store[theme] || {};
				store[theme][key] = value;
			}
			return themes;
		},
		/* if only one arg is provided, assume it's the key
		* */
		get: function (theme, key) {
			var arglen = arguments.length;
			if (arglen === 0 && current !== undefined)
				return current;
			if (arglen === 1 && current !== undefined)
				return store[current][theme];
			if (arglen === 2)
				return store[theme][key];
			return false;
		},
		toggle: function () {
			if (debug_themes) $.log.w( 'Themes toggle', current );
			current = current ? 0 : 1;
			set_theme_with_contrast(current);
			Preferences.set(Themes.saveto, current);
			settings.jaddad(settingsuid);
		},
	};
	function darken_hex_color(hexColor, threshold = 180, factor = 0.7) {
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
		if (luminance > threshold) {
			const darkenedR = Math.round(r * factor);
			const darkenedG = Math.round(g * factor);
			const darkenedB = Math.round(b * factor);
			const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
			return darkenedHex;
		}
		return hexColor;
	}
	Themes.darken_hex_color = darken_hex_color;
	function brighten_hex_color(hexColor, threshold = 180, factor = 0.7) {
		const r = parseInt(hexColor.slice(1, 3), 16);
		const g = parseInt(hexColor.slice(3, 5), 16);
		const b = parseInt(hexColor.slice(5, 7), 16);
		const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
		if (luminance < threshold) {
			const darkenedR = Math.round(r / factor);
			const darkenedG = Math.round(g / factor);
			const darkenedB = Math.round(b / factor);
			const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
			return darkenedHex;
		}
		return hexColor;
	}
	Themes.brighten_hex_color = brighten_hex_color;
	function generate_predictable_color(text = '') {
		var hash = 0;
		for (var i = 0; i < text.length; i++) {
			hash = text.charCodeAt(i) + ((hash << 5) - hash);
			hash &= hash; // fix for potential negative hash values
		}
		return '#' + ('00000' + (hash & 0xFFFFFF).toString(16)).slice(-6).toUpperCase();
	}
	Themes.generate_predictable_color = generate_predictable_color;
	Hooks.set('ready', function () {
		if (preferences) {
			current = preferences.get(themes.saveto, 1) || 0;
			contrast = preferences.get(themes.saveto_contrast, 1) || 0;
		}
		set_theme_with_contrast(current);
		settingsuid = settings.adaaf('theme', function () {
			var iswhite = preferences.get(themes.saveto, 1);
			current = iswhite ? 1 : 0;
			set_theme_with_contrast(current);
			return [ iswhite ? 'white' : 'black' ];
		}, function () {
			preferences.set(themes.saveto, preferences.get(themes.saveto, 1) ? 0 : 1);
		}, 'icontheme');
	});
	Hooks.set('viewready', function (args) {
		K = softkeys.K, // key names
		P = softkeys.P; // presets
		if (Webapp.is_at_home()) {
			softkeys.add({ n: 'Theme',
				k: 'i',
				ctrl: 1,
				alt: 1,
				i: 'icontheme',
				c: function (k, e) {
					themes.toggle();
					e && e.preventDefault();
				}
			});
		}
	});
})();
var Dialog, dialog,
	dialog_ready = 'dialog-ready',
	dialog_done = 'dialog-done',
	dialog_cancel = 'dialog-cancel',
	dialog_anyway = 'dialog-anyway';
;(function(){
	var current_name, current_uid;
	Dialog = dialog = {
		okay: 0,
		cancel: 0,
		onshow: 0,
		hide: function () {
			dialogui.hidden = 1;
			dialog.okay = 0;
			dialog.cancel = 0;
			current_name = undefined;
			current_uid = undefined;
		},
		get_name: function () {
			return current_name;
		},
		get_uid: function () {
			return current_uid;
		},
		set_message: function (m) {
			var k = templates.keys(dialogui);
			innertext(k.message, '');
			if (isarr(m)) {
				setdata(k.message, 'i18n', message || '');
				translate.update(dialogui);
			} else {
				innertext(k.message, m);
			}
		},
		show: function (args) {
			args = args || {};
			markooz() && markooz().blur();
			dialogui.hidden = 0;
			var k = templates.keys(dialogui) ,
				name = args.name || args.n ,
				uid = args.uid || args.u ,
				max = args.max || args.x ,
				callback = args.callback || args.c ,
				message = args.message || args.m ,
				answer = args.answer || args.a ,
				question = args.question || args.q ,
				multiline = args.multiline,
				input_element;
			current_name = args.n = args.name = name;
			current_uid = args.u = args.uid = uid;
			k.input.value = '';
			k.textarea.value = '';
			if (multiline) {
				ixtaf(k.input);
				izhar(k.textarea);
				input_element = k.textarea;
			} else {
				ixtaf(k.textarea);
				izhar(k.input);
				input_element = k.input;
			}
			Dialog.onshow && Dialog.onshow(name);
			Hooks.run(dialog_ready, args, k);
			Dialog.okay = function () {
				var answer = input_element.value;
				if (max) answer = answer.slice(0, max);
				callback && callback(answer);
				document.activeElement && document.activeElement.blur();
				Hooks.run(dialog_done, args, k, answer);
				Hooks.run(dialog_anyway, args, k, answer);
				Hooks.run('back');
			};
			Dialog.cancel = function () {
				document.activeElement && document.activeElement.blur();
				Hooks.run(dialog_cancel, args, k);
				Hooks.run(dialog_anyway, args, k);
				Hooks.run('back');
			};
			input_element.value = answer || '';
			attribute(input_element, 'max', max || 0);
			if (question) {
				input_element.hidden = 0;
				input_element.focus();
			} else {
				input_element.hidden = 1;
			}
			this.set_message( message );
		},
	};
	Hooks.set('backstackdialog', function (args) {
		var date = 0;
		if (datepicker && args instanceof HTMLElement) date = 1;
		Webapp.dimmer(600);
		Softkeys.clear();
		Softkeys.add({ k: K.sl,
			i: 'icondone',
			c: function () {
				if (date) datepicker.okay && datepicker.okay(args);
				else Dialog.okay && Dialog.okay();
			}
		});
		Softkeys.add({ k: K.sr,
			i: 'iconclose',
			c: function () {
				if (date) datepicker.cancel && datepicker.cancel();
				else Dialog.cancel && Dialog.cancel();
			}
		});
		if (date) datepicker.show(args);
		else Dialog.show(args);
	});
	Hooks.set('backstack-crumbs', function (crumbs) {
		if (!crumbs.is_dialog) {
			if (!isundef(current_uid)) { // a dialog was active previously
				Hooks.run('dialog-cancel', current_name, current_uid);
				Hooks.run('dialog-anyway', current_name, current_uid);
			}
			Dialog.hide(); // clear active dialog name and uid + okay/cancel funcs
		}
	});
})();
/*
* when a touchscreen is detected, this adds an option to settings that allows
* switching between dpad and touch navigation
*
* with dpad navigation, touch also emulates a dpad
* */
;(function(){
	var x = 0, y = 0, curx = 0, cury = 0, horizontal = 0, vertical = 0,
		size = 20, sizew = 15, caught = 0, start = 0;
	var saveto = 18, settingsuid, webapptouchdir = 0;
	Hooks.set('ready', function () {
		/*if (preferences) webapptouchdir = preferences.get(saveto, 1) || 1;
		webapp.touchdir = webapptouchdir;
		settingsuid = settings.adaaf('webapptouchdir', function () {
			webapptouchdir = preferences.get(saveto, 1);
			webapp.touchdir = webapptouchdir;
			if (!webapptouchdir) delete document.body.dataset.align;
			return [webapptouchdir ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});*/
	});
	Hooks.set('keyup', function (e) {
		var k = tolower(e.key||'');
		if (k === 'r' && e.ctrlKey)
			location.reload(), preventdefault(e);
		if (['escape', 'f11'].includes(k) && document.fullscreenElement)
			document.exitFullscreen(), preventdefault(e);
		else if (k === 'f11')
			document.firstElementChild.requestFullscreen(), preventdefault(e);
	});
	listener('touchstart', function (e) {
		if (softkeys.touchdpad) preventdefault(e);
		x = e.touches[0].clientX;
		y = e.touches[0].clientY;
		caught = 0;
		start = e.timeStamp;
		if (webapptouchdir) {
			if ( x / innerwidth() < 0.5 ) {
				document.body.dataset.align = 'left';
			} else {
				delete document.body.dataset.align;
			}
		}
		Hooks.run('navigationstart', [x, y]);
	}, { passive: false });
	listener('touchmove', function (e) {
		curx = e.touches[0].clientX,
		cury = e.touches[0].clientY,
		horizontal = curx - x,
		vertical = cury - y;
		if (horizontal < -sizew || horizontal > sizew) {
			if (horizontal > sizew)
				horizontal = 1;
			else if (horizontal < -sizew)
				horizontal = -1;
			if (horizontal !== 0)
				x = curx;
		} else horizontal = 0;
		if (vertical < -size || vertical > size) {
			if (vertical > size)
				vertical = 1;
			else if (vertical < -size)
				vertical = -1;
			if (vertical !== 0)
				y = cury;
		} else vertical = 0;
		if (horizontal !== 0 || vertical !== 0)
			caught = 1,
			Hooks.run('navigation', [horizontal, vertical]);
	});
	listener('touchend', function (e) {
		if (!caught) {
			if ( e.timeStamp - start > 250 ) // held for 250ms or more
				Hooks.run('navigationlongpress', [x, y, e.path, horizontal, vertical]);
			else
				Hooks.run('navigationpress', [x, y, e.path, horizontal, vertical]);
		} else
			Hooks.run('navigationend', [x, y, e.path, horizontal, vertical]);
	});
})();
;(function(){
	var saveto = 16, settingsuid, locked = 0,
		edgestart = 0, // -1 left, 0 center, 1 right
		edgeend = 0, lastitem, lamsahbar,
		softkeystouchdpad = 1; // 1 hor, 2 vert
	Hooks.set('ready', function () {
		if (preferences) softkeystouchdpad = preferences.get(saveto, 1) || 1;
		softkeys.touchdpad = softkeystouchdpad;
		settingsuid = settings.adaaf('softkeystouchdpad', function () {
			softkeystouchdpad = preferences.get(saveto, 1);
			softkeys.touchdpad = softkeystouchdpad;
			return [softkeystouchdpad ? 'on' : 'off' ];
		}, function () {
			preferences.set(saveto, preferences.get(saveto, 1) ? 0 : 1);
		});
	});
	Hooks.set('navigationstart', function (args) {
		locked = 0; // free direction lock
		if (args[0] > innerwidth(-60)) edgestart = 1;
		else if (args[0] < 60) edgestart = -1;
		else edgestart = 0;
	});
	Hooks.set('navigation', function (args) {
		if (!locked || locked === 2) {
			if (args[0] > 0) { // right
				if (softkeystouchdpad && !edgestart) softkeys.press(K.rt);
				locked = 2;
			}
			if (args[0] < 0) { // left
				if (softkeystouchdpad && !edgestart) softkeys.press(K.lf);
				locked = 2;
			}
		}
		if (!locked || locked === 1) {
			if (args[1] > 0) { // down
				if (softkeystouchdpad && !edgestart) softkeys.press(K.dn);
				locked = 1;
			}
			if (args[1] < 0) { // up
				if (softkeystouchdpad && !edgestart) softkeys.press(K.up);
				locked = 1;
			}
		}
	});
	var doclick = function (path) {
		if (path)
		for (var i = 0; i < path.length; ++i) {
			if (path[i].onclick) {
				path[i].onclick();
				path[i].blur();
				break;
			}
			if (path[i] instanceof HTMLButtonElement) {
				path[i].click();
				path[i].blur();
				break;
			}
		}
	};
	Hooks.set('navigationend', function (args) {
		if (!softkeystouchdpad) {
			if (args[3] < 0) {
				pager && pager.yameen();
			}
			if (args[3] > 0) {
				pager && pager.shimaal();
			}
		} else
		if (pager && edgestart) { // started on an edge
			edgeend = 0;
			if (args[0] > innerwidth(-60)) edgeend = 1;
			else if (args[0] < 60) edgeend = -1;
			else edgeend = 0;
			if (edgestart !== edgeend) { // ended on a diff edge
				if (edgestart === 1) pager.yameen(); // right
				else if (edgestart === -1) pager.shimaal(); // left
			}
		}
	});
	Hooks.set('navigationpress', function (args) {
		var isbutton = 0;
		if (isarr(args[2]))
		args[2].forEach(function (item) {
			if (item instanceof HTMLButtonElement
			|| item instanceof HTMLInputElement
			|| item instanceof HTMLTextAreaElement
			) {
				isbutton = 1;
				item.focus();
				if (lastitem) {
					popdata(lastitem, 'lamsah');
					lastitem = 0;
				}
				setdata(item, 'lamsah', 1);
				lastitem = item;
				$.taxeer('sklamsah', function () {
					if (lastitem) {
						popdata(lastitem, 'lamsah');
						lastitem = 0;
					}
				}, 300);
			}
		});
		if (args[1] > innerheight(-60)) {
			if (softkeystouchdpad) doclick(args[2]);
		} else
		if (iswithinelement(args, skhints) || isbutton) {
			if (softkeystouchdpad) doclick(args[2]);
		}
		else if (softkeystouchdpad) {
			if (!skhints.hidden) Softkeys.showhints();
			Softkeys.press(K.en);
		}
	});
	Hooks.set('navigationlongpress', function (args) {
		Softkeys.showhints();
	});
	/* TAJREEBI lamsah bar yameen
	* when touch inside the bar, pop it in
	* whatever button is under the pointer, make its label appear next to it
	* */
	var lamsahbarimtahan = function () {
	};
	listener(skhints, ['touchstart'/*, 'mousedown'*/], function (e) {
		preventdefault(e);
		lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
	});
	listener(skhints, ['touchmove'/*, 'mousemove'*/], function (e) {
		if (lamsahbar) {
			lamsahbar = [e.touches[0].pageX, e.touches[0].pageY-scrollingelement().scrollTop];
			var ch = skhints.children, el,
				path;
			if (e.type == 'touchmove') {
				path = raycast(lamsahbar[0], lamsahbar[1]);
			}
			for (var i in ch) {
				if ( ch.hasOwnProperty(i) ) {
					for (j in path) {
						if (path[j] == ch[i]) el = ch[i];
					}
				}
			}
			if (el) {
				for (var i in ch) {
					if ( ch.hasOwnProperty(i) ) {
						if (path[j] != el) popdata(ch[i], 'hawm');
					}
				}
				setdata(el, 'hawm', 1);
			}
			setdata(skhints, 'held', 1);
		}
	});
	listener(skhints, ['touchend', 'touchcancel'/*, 'mouseup', 'mouseleave'*/], function (e) {
		var ch = skhints.children, path;
		if (e.type == 'touchend' && lamsahbar) {
			path = raycast(lamsahbar[0], lamsahbar[1]);
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				for (j in path) {
					if (path[j] == ch[i]) {
						if (ch[i] && e.type == 'touchend') {
							ch[i].click();
						}
					}
				}
			}
		}
		for (var i in ch) {
			if ( ch.hasOwnProperty(i) ) {
				popdata(ch[i], 'hawm');
			}
		}
		popdata(skhints, 'held');
		lamsahbar = 0;
	});
	/*Hooks.set('templateset', function (args) {
		var c = args[0], // clone
			o = args[1],
			k = args[2],
			t = args[3];
		if (t === 'skbutton') {
			listener(c, ['touchmove', 'mouseenter'], function () {
				if (lamsahbar) {
					lamsahbar = c;
					$.log(c.id);
					setdata(c, 'hawm', 1);
				}
			});
		}
	});*/
})();
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
			r.class = value.split(',').map(v => v.trim().slice(1, -1));
		}
		if (match_rough(i, 'wm_client_leader(window)')) {
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
var controls_list, Dashboard = {}, memory_graph = [], battery_graph = [];
const dbus = require('./deps/dbus-next');
;(async function(){
	'use strict';
	var dom_keys;
	const { exec } = require('child_process');
	const os = require('os');
	const fs = require('fs');
	dbus.setBigIntCompat(true);
	let bus = dbus.systemBus();
	let Variant = dbus.Variant;
	function bytesToGB(bytes) {
		return (bytes / (1024 * 1024 * 1024)).toFixed(2);
	}
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
		const thresholds = ['alert', 20, 30, 50, 60, 80, 90, 'full'];
		const index = Math.min(Math.floor(pct / 10), thresholds.length - 1);
		if ([1, 5].includes(state) && index === 0) index = 1;
		return 'battery'+([1, 5].includes(state) ? 'charging' : '')+thresholds[index];
	}
	Dashboard.battery_state_to_icon = battery_state_to_icon;
	function update_battery_item() {
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
			}
			if (yes) update_battery_item();
		});
		battery_interval();
	};
	var update_storage_TO;
	Dashboard.update_storage = function () {
		controls_list.set({ uid: 'store', state: '...' });
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
			const lines = stdout.split('\n').filter(line => line.trim() !== '');
			const partitions = lines.slice(1).map(line => {
				const [filesystem, size, used, available, percentage, mounted] = line.split(/\s+/);
				return { filesystem, size, used, available, percentage, mounted };
			});
			let totalSpace = 0;
			let freeSpace = 0;
			partitions.forEach(partition => {
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
			hours: zero( date.getHours() ) ,
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
		Webapp.header();
		Webapp.status_bar_padding();
		Webapp.tall_screen();
		dom_keys = View.dom_keys('main');
		controls_list = List( dom_keys.list ).id_prefix('controls').list_item('control_item');
		Dashboard.update_time();
		controls_list.set({ uid: 'wifi' , icon: 'iconwifi', title: 'WiFi', switch: 'ON' });
		controls_list.set({ uid: 'bt' , icon: 'iconbluetooth', title: 'Bluetooth' });
		controls_list.set({ uid: 'store', icon: 'iconstorage', title: 'Storage', switch: 'ixtaf' });
		controls_list.set({ uid: 'mem' , icon: 'iconmemory', title: 'Memory', switch: 'ixtaf' });
		controls_list.set({ uid: 'bat' , icon: 'iconbatteryfull', title: 'Battery', switch: 'ixtaf' });
		controls_list.set({ uid: 'apps' , icon: 'iconapps', title: 'Apps', switch: 'ixtaf' });
		Dashboard.update_bluetooth();
		Dashboard.update_storage();
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
		Softkeys.remove(K.sr);
	}});
})();

