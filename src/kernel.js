
//shims
/* 01 Jan 2017
 * these are on demand
 * included in the custom engine build process
 * standard ECMA/JS shims
 * don't include shims for non-standard JS features
 * or vendor specific features here
 * index   engine/shims.js
 * 				  shims/node.js
 * 				  shims/dom-removenode.js
 * 				  shims/object-create.js
 * 				  shims/object-assign.js
 * 				  shims/string-trim.js
 */

if (typeof module !== 'object') { module = {}; }
if (typeof module.exports !== 'object') { module.exports = {}; }
if (typeof window !== 'object') { window = global||{}; }
if (typeof document !== 'object') {
	document = {
		body: {},
//		getElementsByTagName: function () { return []; }
	};
}


//frontend
//+ _mods _paths
var glatteis = {
};

// if fn is not provided, that means the user is expecting immediate response and no deferring
// in that case, return false if the module is not loaded
// otherwise load the module and then run fn(mod)
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
				// example
				// $('dom')(
				// 		function () {}
				// )
				// this autoloads mods and then you can run relevant code on top
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

//log
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

//taxeer
//+ taxeer taxeercancel
// thu 01 oct 2020 you can recall the same taxeer by calling the first arg
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

		// continue exec without adding to its delay
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
				
				// cleanup to trigger garbage collection, save memory :)
				taxeeraat[id] = undefined;
			}, customdelay );
		}
	};

})();


//regexp
//+ re regex
$.re = function (string, automaton, flags) { // automaton, flags
	var object = (new RegExp(automaton||'', flags||'')).exec(string||'') || {};
	
	object.re = function (automaton, flags) {
		return $.re(object[0]||'', automaton, flags);
	};
	
	return object;
};
//$.regex = require('xregexp');
//$.regex.install('astral');
$.regex = $.re;

//mod-concat
//+ _r _c _name
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

//modules
//+ _paths _mods cache unload
$._paths = {
};

$._mods = {
};

$.cache = function (name, path) { // cache a module's path
	$._paths[name] = path;
};

$.unload = function (mods, fn) {
	/*
	 * @TODO:	delete/unload mods from memory
	 * 			run ._unload per mod for a graceful exit
	 * 			once all mods are unloaded in a chain/order -> call fn
	 */
};

//array
//+ array _array _keys alter unique order onadd onset _id toNative each clean
//+ saabiq qaadim
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
						// if a value is returned, replace the internal one
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
					nativearr.set(item.XPO.uid, item);
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
			// id is the prop name in array that you want to be the id
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
		
		newqueue._array		= prearray;
		newqueue._keys		= {};
		newqueue._id		= id;
		
		if (id)
			prearray.forEach(function (item, i) {
				newqueue._keys[ item[id] ] = i;
			});

		newqueue.length		= newqueue._array.length;
		
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


//queue
//+ _init _next _process run onnext onfinish uid count _didinit _didrun queuearray
//+ _onnext _onfinish intahaa muntahaa
;(function (){
	var _queuePrototype = {
		_init: function () {
			if (!this._didinit) {
//				console.log('_init');
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
//			console.log('_next');
			++queue.count;
			queue._process(queue, extra);
			queue.active = false;
			return queue.count;
		},
		_process: function (queue, extra) {
//			console.log('_process');
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
//			console.log('set');
			this._init();
			
			if (typeof worker === 'function') {
				this.queuearray.unshift(worker);
			}
			
			return this;
		},
		run: function (_onfinish) {
//			console.log('run');

			this.onfinish(_onfinish);

			var queue = this;
			queue._init();
			
			// if there's no _onnext fn set, use the built in one
			if (typeof queue._onnext !== 'function') {
				queue.onnext(function (done, _queue, extra) {
					done(_queue, extra);
				});
			}
			
			if (!queue._didrun
			&&	typeof queue._onnext === 'function') {
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
	
//	var ourarray = [
//		{text: 'one', num: 1},
//		{text: 'two', num: 2},
//		{text: 'three', num: 3},
//		{text: 'four', num: 4}
//	];
//	
//	var finalarray = [];
//	
//	var ourworker = function (done, queue) {
//		$.log.s('ourworker', queue.count, ourarray[queue.count].text);
//		var extra = {com: ourarray[queue.count].text+ourarray[queue.count].num};
//		done(queue, extra);
//	};
//	
//	var ouronnext = function (done, queue, extra) {
//		$.log.s('ouronnext', queue.count, ourarray[queue.count].text);
//		finalarray.push(extra);
//		done(queue);
//	};
//	
//	var ouronfinish = function (queue) {
//		$.log.s('ouronfinish', queue.count);
//		for (var i in finalarray) {
//			console.log(finalarray[i]);
//		}
//	};
//	
//	var queue = $.queue(ouronnext, ouronfinish);
//	for (var i in ourarray) {
//		queue.set(ourworker);
//	}
//	queue.run();

})();


//fetch
//+ queuerequest cnt queue cur fetchcancel fetchchannels fetchprocess fetchtimeout
//+ uri payload callback progressfn _array

;(function (){
	// TODO: move queue requests here, only the XHR parts
	// TODO make a way to check if a fetch request is active
	// qr is deprecated henceforth, use queue with fetch for the same effect
	// fetch by default uses XHRs but it can also use node requests
	$.queuerequest = function () {
		var queuerequest = {
			name: 1,
			active: false,
			cnt: 0,
			id: false,
			_array: [],
			// current request
			cur: false,
			queue: function (options) {
				this._array.unshift(options);
				this.id = this._array.length;

//				$.log.s( this.name, this.active );

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

//				$.log.s( 'fetch.process', carriedthis.name, carriedthis.active );

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
//						var shorty = options.uri.replace(glatteis.sys.path, '');
						var shorty = options.uri;
						if (window.XMLHttpRequest) { 
							request = new XMLHttpRequest();
						}
						else if (typeof require === 'function') {
							request = require(options.uri);
							typeof options.callback === 'function' && options.callback(request);
							carriedthis.cnt++; carriedthis.process(carriedthis); carriedthis.active = false; return carriedthis.cnt;
						}
//						else { request = new ActiveXObject("Microsoft.XMLHTTP"); }
	
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
//							$.log.s( 'onend', carriedthis.name );
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
						
						// bigger the number, the more fatal the level
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
	$.fetchtimeout	= 30 * 1000;
	$.fetchcancel	= function (channel) {
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
	$.fetchchannels	= {};
	$.fetchprocess = function (channel) {
		channel = channel || 1;
		
		if ( $.fetchchannels[channel] )
			$.fetchchannels[channel].process();
	};
	$.fetch = function (uri, data, channel, progressfn, fetchtimeout, headers) {
		channel = channel || 1;
		
		var response	= false,
			thencb		= false,
			thenfn		= function (callback) {
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
		
//		$.log.s( 'queue on ', channel, $.fetchchannels[channel].active );
		
		$.fetchchannels[channel].queue({
			uri:		uri, 
			payload:	(data || null), 
			headers:	headers || 0,
			// todo better way to specify type and move body to uri?-
			// these improvements should be intro'd in $.axav!!
			type:		(data ? 'post' : 'get'),
			callback:	function (body, err) {
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
