/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "/lib/" + ({}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/vue-webpack/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(100);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _vueStrap = __webpack_require__(101);
	
	var _vueStrap2 = _interopRequireDefault(_vueStrap);
	
	var _bootstrapMin = __webpack_require__(102);
	
	var _bootstrapMin2 = _interopRequireDefault(_bootstrapMin);
	
	var _style = __webpack_require__(110);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _today = __webpack_require__(112);
	
	var _today2 = _interopRequireDefault(_today);
	
	var _all = __webpack_require__(127);
	
	var _all2 = _interopRequireDefault(_all);
	
	var _menu = __webpack_require__(132);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	var _week = __webpack_require__(136);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _month = __webpack_require__(141);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _task = __webpack_require__(116);
	
	var _task2 = _interopRequireDefault(_task);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//调用路由
	
	
	//引入路由组件
	
	
	//添加全局CSS
	_vue2.default.use(_vueRouter2.default); //引入bootstrap
	//添加Vue,router
	
	
	_vue2.default.config.devtools = true;
	
	//设置路由
	var router = new _vueRouter2.default();
	router.map({
	    '/today': {
	        name: 'today',
	        component: _today2.default
	    },
	    '/all': {
	        name: 'all',
	        component: _all2.default
	    },
	    '/week': {
	        name: 'week',
	        component: _week2.default
	    },
	    '/month': {
	        name: 'month',
	        component: _month2.default
	    }
	});
	
	//开启
	var Layout = _vue2.default.extend({
	    components: {
	        'my-menu': _menu2.default
	    }
	});
	router.start(Layout, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, jQuery) {"use strict";
	
	var _getOwnPropertyNames = __webpack_require__(73);
	
	var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
	
	var _defineProperties = __webpack_require__(77);
	
	var _defineProperties2 = _interopRequireDefault(_defineProperties);
	
	var _freeze = __webpack_require__(80);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _getOwnPropertyDescriptor = __webpack_require__(83);
	
	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
	
	var _isExtensible = __webpack_require__(86);
	
	var _isExtensible2 = _interopRequireDefault(_isExtensible);
	
	var _create = __webpack_require__(89);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _stringify = __webpack_require__(92);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _defineProperty = __webpack_require__(94);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	var _keys = __webpack_require__(97);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(4);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*!
	 * Vue.js v1.0.21
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	!function (t, e) {
	  "object" == ( false ? "undefined" : (0, _typeof3.default)(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Vue = e();
	}(undefined, function () {
	  "use strict";
	  function t(e, n, r) {
	    if (i(e, n)) return void (e[n] = r);if (e._isVue) return void t(e._data, n, r);var s = e.__ob__;if (!s) return void (e[n] = r);if (s.convert(n, r), s.dep.notify(), s.vms) for (var o = s.vms.length; o--;) {
	      var a = s.vms[o];a._proxy(n), a._digest();
	    }return r;
	  }function e(t, e) {
	    if (i(t, e)) {
	      delete t[e];var n = t.__ob__;if (n && (n.dep.notify(), n.vms)) for (var r = n.vms.length; r--;) {
	        var s = n.vms[r];s._unproxy(e), s._digest();
	      }
	    }
	  }function i(t, e) {
	    return xi.call(t, e);
	  }function n(t) {
	    return Ai.test(t);
	  }function r(t) {
	    var e = (t + "").charCodeAt(0);return 36 === e || 95 === e;
	  }function s(t) {
	    return null == t ? "" : t.toString();
	  }function o(t) {
	    if ("string" != typeof t) return t;var e = Number(t);return isNaN(e) ? t : e;
	  }function a(t) {
	    return "true" === t ? !0 : "false" === t ? !1 : t;
	  }function h(t) {
	    var e = t.charCodeAt(0),
	        i = t.charCodeAt(t.length - 1);return e !== i || 34 !== e && 39 !== e ? t : t.slice(1, -1);
	  }function l(t) {
	    return t.replace(Oi, c);
	  }function c(t, e) {
	    return e ? e.toUpperCase() : "";
	  }function u(t) {
	    return t.replace(Ti, "$1-$2").toLowerCase();
	  }function f(t) {
	    return t.replace(Ni, c);
	  }function p(t, e) {
	    return function (i) {
	      var n = arguments.length;return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e);
	    };
	  }function d(t, e) {
	    e = e || 0;for (var i = t.length - e, n = new Array(i); i--;) {
	      n[i] = t[i + e];
	    }return n;
	  }function v(t, e) {
	    for (var i = (0, _keys2.default)(e), n = i.length; n--;) {
	      t[i[n]] = e[i[n]];
	    }return t;
	  }function m(t) {
	    return null !== t && "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t));
	  }function g(t) {
	    return ji.call(t) === Ei;
	  }function _(t, e, i, n) {
	    (0, _defineProperty2.default)(t, e, { value: i, enumerable: !!n, writable: !0, configurable: !0 });
	  }function y(t, e) {
	    var i,
	        n,
	        r,
	        s,
	        o,
	        a = function h() {
	      var a = Date.now() - s;e > a && a >= 0 ? i = setTimeout(h, e - a) : (i = null, o = t.apply(r, n), i || (r = n = null));
	    };return function () {
	      return r = this, n = arguments, s = Date.now(), i || (i = setTimeout(a, e)), o;
	    };
	  }function b(t, e) {
	    for (var i = t.length; i--;) {
	      if (t[i] === e) return i;
	    }return -1;
	  }function w(t) {
	    var e = function i() {
	      return i.cancelled ? void 0 : t.apply(this, arguments);
	    };return e.cancel = function () {
	      e.cancelled = !0;
	    }, e;
	  }function C(t, e) {
	    return t == e || (m(t) && m(e) ? (0, _stringify2.default)(t) === (0, _stringify2.default)(e) : !1);
	  }function $(t) {
	    this.size = 0, this.limit = t, this.head = this.tail = void 0, this._keymap = (0, _create2.default)(null);
	  }function k() {
	    var t,
	        e = qi.slice(Yi, Zi).trim();if (e) {
	      t = {};var i = e.match(an);t.name = i[0], i.length > 1 && (t.args = i.slice(1).map(x));
	    }t && (Qi.filters = Qi.filters || []).push(t), Yi = Zi + 1;
	  }function x(t) {
	    if (hn.test(t)) return { value: o(t), dynamic: !1 };var e = h(t),
	        i = e === t;return { value: i ? t : e, dynamic: i };
	  }function A(t) {
	    var e = on.get(t);if (e) return e;for (qi = t, tn = en = !1, nn = rn = sn = 0, Yi = 0, Qi = {}, Zi = 0, Xi = qi.length; Xi > Zi; Zi++) {
	      if (Ki = Gi, Gi = qi.charCodeAt(Zi), tn) 39 === Gi && 92 !== Ki && (tn = !tn);else if (en) 34 === Gi && 92 !== Ki && (en = !en);else if (124 === Gi && 124 !== qi.charCodeAt(Zi + 1) && 124 !== qi.charCodeAt(Zi - 1)) null == Qi.expression ? (Yi = Zi + 1, Qi.expression = qi.slice(0, Zi).trim()) : k();else switch (Gi) {case 34:
	          en = !0;break;case 39:
	          tn = !0;break;case 40:
	          sn++;break;case 41:
	          sn--;break;case 91:
	          rn++;break;case 93:
	          rn--;break;case 123:
	          nn++;break;case 125:
	          nn--;}
	    }return null == Qi.expression ? Qi.expression = qi.slice(0, Zi).trim() : 0 !== Yi && k(), on.put(t, Qi), Qi;
	  }function O(t) {
	    return t.replace(cn, "\\$&");
	  }function T() {
	    var t = O(_n.delimiters[0]),
	        e = O(_n.delimiters[1]),
	        i = O(_n.unsafeDelimiters[0]),
	        n = O(_n.unsafeDelimiters[1]);fn = new RegExp(i + "((?:.|\\n)+?)" + n + "|" + t + "((?:.|\\n)+?)" + e, "g"), pn = new RegExp("^" + i + ".*" + n + "$"), un = new $(1e3);
	  }function N(t) {
	    un || T();var e = un.get(t);if (e) return e;if (!fn.test(t)) return null;for (var i, n, r, s, o, a, h = [], l = fn.lastIndex = 0; i = fn.exec(t);) {
	      n = i.index, n > l && h.push({ value: t.slice(l, n) }), r = pn.test(i[0]), s = r ? i[1] : i[2], o = s.charCodeAt(0), a = 42 === o, s = a ? s.slice(1) : s, h.push({ tag: !0, value: s.trim(), html: r, oneTime: a }), l = n + i[0].length;
	    }return l < t.length && h.push({ value: t.slice(l) }), un.put(t, h), h;
	  }function j(t, e) {
	    return t.length > 1 ? t.map(function (t) {
	      return E(t, e);
	    }).join("+") : E(t[0], e, !0);
	  }function E(t, e, i) {
	    return t.tag ? t.oneTime && e ? '"' + e.$eval(t.value) + '"' : F(t.value, i) : '"' + t.value + '"';
	  }function F(t, e) {
	    if (dn.test(t)) {
	      var i = A(t);return i.filters ? "this._applyFilters(" + i.expression + ",null," + (0, _stringify2.default)(i.filters) + ",false)" : "(" + t + ")";
	    }return e ? t : "(" + t + ")";
	  }function S(t, e, i, n) {
	    R(t, 1, function () {
	      e.appendChild(t);
	    }, i, n);
	  }function D(t, e, i, n) {
	    R(t, 1, function () {
	      B(t, e);
	    }, i, n);
	  }function P(t, e, i) {
	    R(t, -1, function () {
	      z(t);
	    }, e, i);
	  }function R(t, e, i, n, r) {
	    var s = t.__v_trans;if (!s || !s.hooks && !Wi || !n._isCompiled || n.$parent && !n.$parent._isCompiled) return i(), void (r && r());var o = e > 0 ? "enter" : "leave";s[o](i, r);
	  }function L(t) {
	    if ("string" == typeof t) {
	      t = document.querySelector(t);
	    }return t;
	  }function H(t) {
	    var e = document.documentElement,
	        i = t && t.parentNode;return e === t || e === i || !(!i || 1 !== i.nodeType || !e.contains(i));
	  }function M(t, e) {
	    var i = t.getAttribute(e);return null !== i && t.removeAttribute(e), i;
	  }function W(t, e) {
	    var i = M(t, ":" + e);return null === i && (i = M(t, "v-bind:" + e)), i;
	  }function I(t, e) {
	    return t.hasAttribute(e) || t.hasAttribute(":" + e) || t.hasAttribute("v-bind:" + e);
	  }function B(t, e) {
	    e.parentNode.insertBefore(t, e);
	  }function V(t, e) {
	    e.nextSibling ? B(t, e.nextSibling) : e.parentNode.appendChild(t);
	  }function z(t) {
	    t.parentNode.removeChild(t);
	  }function U(t, e) {
	    e.firstChild ? B(t, e.firstChild) : e.appendChild(t);
	  }function J(t, e) {
	    var i = t.parentNode;i && i.replaceChild(e, t);
	  }function q(t, e, i, n) {
	    t.addEventListener(e, i, n);
	  }function Q(t, e, i) {
	    t.removeEventListener(e, i);
	  }function G(t) {
	    var e = t.className;return "object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) && (e = e.baseVal || ""), e;
	  }function K(t, e) {
	    Li && !/svg$/.test(t.namespaceURI) ? t.className = e : t.setAttribute("class", e);
	  }function Z(t, e) {
	    if (t.classList) t.classList.add(e);else {
	      var i = " " + G(t) + " ";i.indexOf(" " + e + " ") < 0 && K(t, (i + e).trim());
	    }
	  }function X(t, e) {
	    if (t.classList) t.classList.remove(e);else {
	      for (var i = " " + G(t) + " ", n = " " + e + " "; i.indexOf(n) >= 0;) {
	        i = i.replace(n, " ");
	      }K(t, i.trim());
	    }t.className || t.removeAttribute("class");
	  }function Y(t, e) {
	    var i, n;if (it(t) && at(t.content) && (t = t.content), t.hasChildNodes()) for (tt(t), n = e ? document.createDocumentFragment() : document.createElement("div"); i = t.firstChild;) {
	      n.appendChild(i);
	    }return n;
	  }function tt(t) {
	    for (var e; e = t.firstChild, et(e);) {
	      t.removeChild(e);
	    }for (; e = t.lastChild, et(e);) {
	      t.removeChild(e);
	    }
	  }function et(t) {
	    return t && (3 === t.nodeType && !t.data.trim() || 8 === t.nodeType);
	  }function it(t) {
	    return t.tagName && "template" === t.tagName.toLowerCase();
	  }function nt(t, e) {
	    var i = _n.debug ? document.createComment(t) : document.createTextNode(e ? " " : "");return i.__v_anchor = !0, i;
	  }function rt(t) {
	    if (t.hasAttributes()) for (var e = t.attributes, i = 0, n = e.length; n > i; i++) {
	      var r = e[i].name;if (wn.test(r)) return l(r.replace(wn, ""));
	    }
	  }function st(t, e, i) {
	    for (var n; t !== e;) {
	      n = t.nextSibling, i(t), t = n;
	    }i(e);
	  }function ot(t, e, i, n, r) {
	    function s() {
	      if (a++, o && a >= h.length) {
	        for (var t = 0; t < h.length; t++) {
	          n.appendChild(h[t]);
	        }r && r();
	      }
	    }var o = !1,
	        a = 0,
	        h = [];st(t, e, function (t) {
	      t === e && (o = !0), h.push(t), P(t, i, s);
	    });
	  }function at(t) {
	    return t && 11 === t.nodeType;
	  }function ht(t) {
	    if (t.outerHTML) return t.outerHTML;var e = document.createElement("div");return e.appendChild(t.cloneNode(!0)), e.innerHTML;
	  }function lt(t, e) {
	    var i = t.tagName.toLowerCase(),
	        n = t.hasAttributes();if (Cn.test(i) || $n.test(i)) {
	      if (n) return ct(t);
	    } else {
	      if (gt(e, "components", i)) return { id: i };var r = n && ct(t);if (r) return r;
	    }
	  }function ct(t) {
	    var e = M(t, "is");return null != e ? { id: e } : (e = W(t, "is"), null != e ? { id: e, dynamic: !0 } : void 0);
	  }function ut(e, n) {
	    var r, s, o;for (r in n) {
	      s = e[r], o = n[r], i(e, r) ? m(s) && m(o) && ut(s, o) : t(e, r, o);
	    }return e;
	  }function ft(t, e) {
	    var i = (0, _create2.default)(t);return e ? v(i, vt(e)) : i;
	  }function pt(t) {
	    if (t.components) for (var e, i = t.components = vt(t.components), n = (0, _keys2.default)(i), r = 0, s = n.length; s > r; r++) {
	      var o = n[r];Cn.test(o) || $n.test(o) || (e = i[o], g(e) && (i[o] = yi.extend(e)));
	    }
	  }function dt(t) {
	    var e,
	        i,
	        n = t.props;if (Fi(n)) for (t.props = {}, e = n.length; e--;) {
	      i = n[e], "string" == typeof i ? t.props[i] = null : i.name && (t.props[i.name] = i);
	    } else if (g(n)) {
	      var r = (0, _keys2.default)(n);for (e = r.length; e--;) {
	        i = n[r[e]], "function" == typeof i && (n[r[e]] = { type: i });
	      }
	    }
	  }function vt(t) {
	    if (Fi(t)) {
	      for (var e, i = {}, n = t.length; n--;) {
	        e = t[n];var r = "function" == typeof e ? e.options && e.options.name || e.id : e.name || e.id;r && (i[r] = e);
	      }return i;
	    }return t;
	  }function mt(t, e, n) {
	    function r(i) {
	      var r = kn[i] || xn;o[i] = r(t[i], e[i], n, i);
	    }pt(e), dt(e);var s,
	        o = {};if (e.mixins) for (var a = 0, h = e.mixins.length; h > a; a++) {
	      t = mt(t, e.mixins[a], n);
	    }for (s in t) {
	      r(s);
	    }for (s in e) {
	      i(t, s) || r(s);
	    }return o;
	  }function gt(t, e, i, n) {
	    if ("string" == typeof i) {
	      var r,
	          s = t[e],
	          o = s[i] || s[r = l(i)] || s[r.charAt(0).toUpperCase() + r.slice(1)];return o;
	    }
	  }function _t() {
	    this.id = An++, this.subs = [];
	  }function yt(t) {
	    jn = !1, t(), jn = !0;
	  }function bt(t) {
	    if (this.value = t, this.dep = new _t(), _(t, "__ob__", this), Fi(t)) {
	      var e = Si ? wt : Ct;e(t, Tn, Nn), this.observeArray(t);
	    } else this.walk(t);
	  }function wt(t, e) {
	    t.__proto__ = e;
	  }function Ct(t, e, i) {
	    for (var n = 0, r = i.length; r > n; n++) {
	      var s = i[n];_(t, s, e[s]);
	    }
	  }function $t(t, e) {
	    if (t && "object" == (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t))) {
	      var n;return i(t, "__ob__") && t.__ob__ instanceof bt ? n = t.__ob__ : jn && (Fi(t) || g(t)) && (0, _isExtensible2.default)(t) && !t._isVue && (n = new bt(t)), n && e && n.addVm(e), n;
	    }
	  }function kt(t, e, i) {
	    var n = new _t(),
	        r = (0, _getOwnPropertyDescriptor2.default)(t, e);if (!r || r.configurable !== !1) {
	      var s = r && r.get,
	          o = r && r.set,
	          a = $t(i);(0, _defineProperty2.default)(t, e, { enumerable: !0, configurable: !0, get: function get() {
	          var e = s ? s.call(t) : i;if (_t.target && (n.depend(), a && a.dep.depend(), Fi(e))) for (var r, o = 0, h = e.length; h > o; o++) {
	            r = e[o], r && r.__ob__ && r.__ob__.dep.depend();
	          }return e;
	        }, set: function set(e) {
	          var r = s ? s.call(t) : i;e !== r && (o ? o.call(t, e) : i = e, a = $t(e), n.notify());
	        } });
	    }
	  }function xt(t) {
	    t.prototype._init = function (t) {
	      t = t || {}, this.$el = null, this.$parent = t.parent, this.$root = this.$parent ? this.$parent.$root : this, this.$children = [], this.$refs = {}, this.$els = {}, this._watchers = [], this._directives = [], this._uid = Fn++, this._isVue = !0, this._events = {}, this._eventsCount = {}, this._isFragment = !1, this._fragment = this._fragmentStart = this._fragmentEnd = null, this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1, this._unlinkFn = null, this._context = t._context || this.$parent, this._scope = t._scope, this._frag = t._frag, this._frag && this._frag.children.push(this), this.$parent && this.$parent.$children.push(this), t = this.$options = mt(this.constructor.options, t, this), this._updateRef(), this._data = {}, this._runtimeData = t.data, this._callHook("init"), this._initState(), this._initEvents(), this._callHook("created"), t.el && this.$mount(t.el);
	    };
	  }function At(t) {
	    if (void 0 === t) return "eof";var e = t.charCodeAt(0);switch (e) {case 91:case 93:case 46:case 34:case 39:case 48:
	        return t;case 95:case 36:
	        return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:
	        return "ws";}return e >= 97 && 122 >= e || e >= 65 && 90 >= e ? "ident" : e >= 49 && 57 >= e ? "number" : "else";
	  }function Ot(t) {
	    var e = t.trim();return "0" === t.charAt(0) && isNaN(t) ? !1 : n(e) ? h(e) : "*" + e;
	  }function Tt(t) {
	    function e() {
	      var e = t[c + 1];return u === Vn && "'" === e || u === zn && '"' === e ? (c++, n = "\\" + e, p[Dn](), !0) : void 0;
	    }var i,
	        n,
	        r,
	        s,
	        o,
	        a,
	        h,
	        l = [],
	        c = -1,
	        u = Hn,
	        f = 0,
	        p = [];for (p[Pn] = function () {
	      void 0 !== r && (l.push(r), r = void 0);
	    }, p[Dn] = function () {
	      void 0 === r ? r = n : r += n;
	    }, p[Rn] = function () {
	      p[Dn](), f++;
	    }, p[Ln] = function () {
	      if (f > 0) f--, u = Bn, p[Dn]();else {
	        if (f = 0, r = Ot(r), r === !1) return !1;p[Pn]();
	      }
	    }; null != u;) {
	      if (c++, i = t[c], "\\" !== i || !e()) {
	        if (s = At(i), h = qn[u], o = h[s] || h["else"] || Jn, o === Jn) return;if (u = o[0], a = p[o[1]], a && (n = o[2], n = void 0 === n ? i : n, a() === !1)) return;if (u === Un) return l.raw = t, l;
	      }
	    }
	  }function Nt(t) {
	    var e = Sn.get(t);return e || (e = Tt(t), e && Sn.put(t, e)), e;
	  }function jt(t, e) {
	    return Ht(e).get(t);
	  }function Et(e, i, n) {
	    var r = e;if ("string" == typeof i && (i = Tt(i)), !i || !m(e)) return !1;for (var s, o, a = 0, h = i.length; h > a; a++) {
	      s = e, o = i[a], "*" === o.charAt(0) && (o = Ht(o.slice(1)).get.call(r, r)), h - 1 > a ? (e = e[o], m(e) || (e = {}, t(s, o, e))) : Fi(e) ? e.$set(o, n) : o in e ? e[o] = n : t(e, o, n);
	    }return !0;
	  }function Ft(t, e) {
	    var i = hr.length;return hr[i] = e ? t.replace(ir, "\\n") : t, '"' + i + '"';
	  }function St(t) {
	    var e = t.charAt(0),
	        i = t.slice(1);return Xn.test(i) ? t : (i = i.indexOf('"') > -1 ? i.replace(rr, Dt) : i, e + "scope." + i);
	  }function Dt(t, e) {
	    return hr[e];
	  }function Pt(t) {
	    tr.test(t), hr.length = 0;var e = t.replace(nr, Ft).replace(er, "");return e = (" " + e).replace(or, St).replace(rr, Dt), Rt(e);
	  }function Rt(t) {
	    try {
	      return new Function("scope", "return " + t + ";");
	    } catch (e) {}
	  }function Lt(t) {
	    var e = Nt(t);return e ? function (t, i) {
	      Et(t, e, i);
	    } : void 0;
	  }function Ht(t, e) {
	    t = t.trim();var i = Kn.get(t);if (i) return e && !i.set && (i.set = Lt(i.exp)), i;var n = { exp: t };return n.get = Mt(t) && t.indexOf("[") < 0 ? Rt("scope." + t) : Pt(t), e && (n.set = Lt(t)), Kn.put(t, n), n;
	  }function Mt(t) {
	    return sr.test(t) && !ar.test(t) && "Math." !== t.slice(0, 5);
	  }function Wt() {
	    cr = [], ur = [], fr = {}, pr = {}, dr = vr = !1;
	  }function It() {
	    Bt(cr), vr = !0, Bt(ur), Pi && _n.devtools && Pi.emit("flush"), Wt();
	  }function Bt(t) {
	    for (Qn = 0; Qn < t.length; Qn++) {
	      var e = t[Qn],
	          i = e.id;fr[i] = null, e.run();
	    }
	  }function Vt(t) {
	    var e = t.id;if (null == fr[e]) if (vr && !t.user) ur.splice(Qn + 1, 0, t);else {
	      var i = t.user ? ur : cr;fr[e] = i.length, i.push(t), dr || (dr = !0, Ui(It));
	    }
	  }function zt(t, e, i, n) {
	    n && v(this, n);var r = "function" == typeof e;if (this.vm = t, t._watchers.push(this), this.expression = e, this.cb = i, this.id = ++mr, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = (0, _create2.default)(null), this.newDepIds = null, this.prevError = null, r) this.getter = e, this.setter = void 0;else {
	      var s = Ht(e, this.twoWay);this.getter = s.get, this.setter = s.set;
	    }this.value = this.lazy ? void 0 : this.get(), this.queued = this.shallow = !1;
	  }function Ut(t) {
	    var e, i;if (Fi(t)) for (e = t.length; e--;) {
	      Ut(t[e]);
	    } else if (m(t)) for (i = (0, _keys2.default)(t), e = i.length; e--;) {
	      Ut(t[i[e]]);
	    }
	  }function Jt(t) {
	    return it(t) && at(t.content);
	  }function qt(t, e) {
	    var i = e ? t : t.trim(),
	        n = _r.get(i);if (n) return n;var r = document.createDocumentFragment(),
	        s = t.match(wr),
	        o = Cr.test(t);if (s || o) {
	      var a = s && s[1],
	          h = br[a] || br.efault,
	          l = h[0],
	          c = h[1],
	          u = h[2],
	          f = document.createElement("div");for (f.innerHTML = c + t + u; l--;) {
	        f = f.lastChild;
	      }for (var p; p = f.firstChild;) {
	        r.appendChild(p);
	      }
	    } else r.appendChild(document.createTextNode(t));return e || tt(r), _r.put(i, r), r;
	  }function Qt(t) {
	    if (Jt(t)) return tt(t.content), t.content;if ("SCRIPT" === t.tagName) return qt(t.textContent);for (var e, i = Gt(t), n = document.createDocumentFragment(); e = i.firstChild;) {
	      n.appendChild(e);
	    }return tt(n), n;
	  }function Gt(t) {
	    if (!t.querySelectorAll) return t.cloneNode();var e,
	        i,
	        n,
	        r = t.cloneNode(!0);if ($r) {
	      var s = r;if (Jt(t) && (t = t.content, s = r.content), i = t.querySelectorAll("template"), i.length) for (n = s.querySelectorAll("template"), e = n.length; e--;) {
	        n[e].parentNode.replaceChild(Gt(i[e]), n[e]);
	      }
	    }if (kr) if ("TEXTAREA" === t.tagName) r.value = t.value;else if (i = t.querySelectorAll("textarea"), i.length) for (n = r.querySelectorAll("textarea"), e = n.length; e--;) {
	      n[e].value = i[e].value;
	    }return r;
	  }function Kt(t, e, i) {
	    var n, r;return at(t) ? (tt(t), e ? Gt(t) : t) : ("string" == typeof t ? i || "#" !== t.charAt(0) ? r = qt(t, i) : (r = yr.get(t), r || (n = document.getElementById(t.slice(1)), n && (r = Qt(n), yr.put(t, r)))) : t.nodeType && (r = Qt(t)), r && e ? Gt(r) : r);
	  }function Zt(t, e, i, n, r, s) {
	    this.children = [], this.childFrags = [], this.vm = e, this.scope = r, this.inserted = !1, this.parentFrag = s, s && s.childFrags.push(this), this.unlink = t(e, i, n, r, this);var o = this.single = 1 === i.childNodes.length && !i.childNodes[0].__v_anchor;o ? (this.node = i.childNodes[0], this.before = Xt, this.remove = Yt) : (this.node = nt("fragment-start"), this.end = nt("fragment-end"), this.frag = i, U(this.node, i), i.appendChild(this.end), this.before = te, this.remove = ee), this.node.__v_frag = this;
	  }function Xt(t, e) {
	    this.inserted = !0;var i = e !== !1 ? D : B;i(this.node, t, this.vm), H(this.node) && this.callHook(ie);
	  }function Yt() {
	    this.inserted = !1;var t = H(this.node),
	        e = this;this.beforeRemove(), P(this.node, this.vm, function () {
	      t && e.callHook(ne), e.destroy();
	    });
	  }function te(t, e) {
	    this.inserted = !0;var i = this.vm,
	        n = e !== !1 ? D : B;st(this.node, this.end, function (e) {
	      n(e, t, i);
	    }), H(this.node) && this.callHook(ie);
	  }function ee() {
	    this.inserted = !1;var t = this,
	        e = H(this.node);this.beforeRemove(), ot(this.node, this.end, this.vm, this.frag, function () {
	      e && t.callHook(ne), t.destroy();
	    });
	  }function ie(t) {
	    !t._isAttached && H(t.$el) && t._callHook("attached");
	  }function ne(t) {
	    t._isAttached && !H(t.$el) && t._callHook("detached");
	  }function re(t, e) {
	    this.vm = t;var i,
	        n = "string" == typeof e;n || it(e) ? i = Kt(e, !0) : (i = document.createDocumentFragment(), i.appendChild(e)), this.template = i;var r,
	        s = t.constructor.cid;if (s > 0) {
	      var o = s + (n ? e : ht(e));r = Or.get(o), r || (r = Se(i, t.$options, !0), Or.put(o, r));
	    } else r = Se(i, t.$options, !0);this.linker = r;
	  }function se(t, e, i) {
	    var n = t.node.previousSibling;if (n) {
	      for (t = n.__v_frag; !(t && t.forId === i && t.inserted || n === e);) {
	        if (n = n.previousSibling, !n) return;t = n.__v_frag;
	      }return t;
	    }
	  }function oe(t) {
	    var e = t.node;if (t.end) for (; !e.__vue__ && e !== t.end && e.nextSibling;) {
	      e = e.nextSibling;
	    }return e.__vue__;
	  }function ae(t) {
	    for (var e = -1, i = new Array(Math.floor(t)); ++e < t;) {
	      i[e] = e;
	    }return i;
	  }function he(t, e, i) {
	    for (var n, r, s, o = e ? [] : null, a = 0, h = t.options.length; h > a; a++) {
	      if (n = t.options[a], s = i ? n.hasAttribute("selected") : n.selected) {
	        if (r = n.hasOwnProperty("_value") ? n._value : n.value, !e) return r;o.push(r);
	      }
	    }return o;
	  }function le(t, e) {
	    for (var i = t.length; i--;) {
	      if (C(t[i], e)) return i;
	    }return -1;
	  }function ce(t, e) {
	    var i = e.map(function (t) {
	      var e = t.charCodeAt(0);return e > 47 && 58 > e ? parseInt(t, 10) : 1 === t.length && (e = t.toUpperCase().charCodeAt(0), e > 64 && 91 > e) ? e : Qr[t];
	    });return i = [].concat.apply([], i), function (e) {
	      return i.indexOf(e.keyCode) > -1 ? t.call(this, e) : void 0;
	    };
	  }function ue(t) {
	    return function (e) {
	      return e.stopPropagation(), t.call(this, e);
	    };
	  }function fe(t) {
	    return function (e) {
	      return e.preventDefault(), t.call(this, e);
	    };
	  }function pe(t) {
	    return function (e) {
	      return e.target === e.currentTarget ? t.call(this, e) : void 0;
	    };
	  }function de(t) {
	    if (Yr[t]) return Yr[t];var e = ve(t);return Yr[t] = Yr[e] = e, e;
	  }function ve(t) {
	    t = u(t);var e = l(t),
	        i = e.charAt(0).toUpperCase() + e.slice(1);ts || (ts = document.createElement("div"));for (var n, r = Kr.length; r--;) {
	      if (n = Zr[r] + i, n in ts.style) return { kebab: Kr[r] + t, camel: n };
	    }return e in ts.style ? { kebab: t, camel: e } : void 0;
	  }function me(t, e) {
	    for (var i = (0, _keys2.default)(e), n = 0, r = i.length; r > n; n++) {
	      var s = i[n];e[s] && _e(t, s, Z);
	    }
	  }function ge(t) {
	    for (var e = {}, i = t.trim().split(/\s+/), n = 0, r = i.length; r > n; n++) {
	      e[i[n]] = !0;
	    }return e;
	  }function _e(t, e, i) {
	    if (e = e.trim(), -1 === e.indexOf(" ")) return void i(t, e);for (var n = e.split(/\s+/), r = 0, s = n.length; s > r; r++) {
	      i(t, n[r]);
	    }
	  }function ye(t, e, i) {
	    function n() {
	      ++s >= r ? i() : t[s].call(e, n);
	    }var r = t.length,
	        s = 0;t[0].call(e, n);
	  }function be(t, e, i) {
	    for (var r, s, o, a, h, c, f, p = [], d = (0, _keys2.default)(e), v = d.length; v--;) {
	      s = d[v], r = e[s] || ms, h = l(s), gs.test(h) && (f = { name: s, path: h, options: r, mode: vs.ONE_WAY, raw: null }, o = u(s), null === (a = W(t, o)) && (null !== (a = W(t, o + ".sync")) ? f.mode = vs.TWO_WAY : null !== (a = W(t, o + ".once")) && (f.mode = vs.ONE_TIME)), null !== a ? (f.raw = a, c = A(a), a = c.expression, f.filters = c.filters, n(a) && !c.filters ? f.optimizedLiteral = !0 : f.dynamic = !0, f.parentPath = a) : null !== (a = M(t, o)) && (f.raw = a), p.push(f));
	    }return we(p);
	  }function we(t) {
	    return function (e, i) {
	      e._props = {};for (var n, r, s, l, c, f = t.length; f--;) {
	        if (n = t[f], c = n.raw, r = n.path, s = n.options, e._props[r] = n, null === c) $e(e, n, void 0);else if (n.dynamic) n.mode === vs.ONE_TIME ? (l = (i || e._context || e).$get(n.parentPath), $e(e, n, l)) : e._context ? e._bindDir({ name: "prop", def: ys, prop: n }, null, null, i) : $e(e, n, e.$get(n.parentPath));else if (n.optimizedLiteral) {
	          var p = h(c);l = p === c ? a(o(c)) : p, $e(e, n, l);
	        } else l = s.type !== Boolean || "" !== c && c !== u(n.name) ? c : !0, $e(e, n, l);
	      }
	    };
	  }function Ce(t, e, i, n) {
	    var r = e.dynamic && Mt(e.parentPath),
	        s = i;void 0 === s && (s = xe(t, e)), s = Oe(e, s);var o = s !== i;Ae(e, s, t) || (s = void 0), r && !o ? yt(function () {
	      n(s);
	    }) : n(s);
	  }function $e(t, e, i) {
	    Ce(t, e, i, function (i) {
	      kt(t, e.path, i);
	    });
	  }function ke(t, e, i) {
	    Ce(t, e, i, function (i) {
	      t[e.path] = i;
	    });
	  }function xe(t, e) {
	    var n = e.options;if (!i(n, "default")) return n.type === Boolean ? !1 : void 0;var r = n["default"];return m(r), "function" == typeof r && n.type !== Function ? r.call(t) : r;
	  }function Ae(t, e, i) {
	    if (!t.options.required && (null === t.raw || null == e)) return !0;var n = t.options,
	        r = n.type,
	        s = !r,
	        o = [];if (r) {
	      Fi(r) || (r = [r]);for (var a = 0; a < r.length && !s; a++) {
	        var h = Te(e, r[a]);o.push(h.expectedType), s = h.valid;
	      }
	    }if (!s) return !1;var l = n.validator;return l && !l(e) ? !1 : !0;
	  }function Oe(t, e) {
	    var i = t.options.coerce;return i ? i(e) : e;
	  }function Te(t, e) {
	    var i, n;return e === String ? (n = "string", i = (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) === n) : e === Number ? (n = "number", i = (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) === n) : e === Boolean ? (n = "boolean", i = (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) === n) : e === Function ? (n = "function", i = (typeof t === "undefined" ? "undefined" : (0, _typeof3.default)(t)) === n) : e === Object ? (n = "object", i = g(t)) : e === Array ? (n = "array", i = Fi(t)) : i = t instanceof e, { valid: i, expectedType: n };
	  }function Ne(t) {
	    bs.push(t), ws || (ws = !0, Ui(je));
	  }function je() {
	    for (var t = document.documentElement.offsetHeight, e = 0; e < bs.length; e++) {
	      bs[e]();
	    }return bs = [], ws = !1, t;
	  }function Ee(t, e, i, n) {
	    this.id = e, this.el = t, this.enterClass = i && i.enterClass || e + "-enter", this.leaveClass = i && i.leaveClass || e + "-leave", this.hooks = i, this.vm = n, this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null, this.justEntered = !1, this.entered = this.left = !1, this.typeCache = {}, this.type = i && i.type;var r = this;["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function (t) {
	      r[t] = p(r[t], r);
	    });
	  }function Fe(t) {
	    if (/svg$/.test(t.namespaceURI)) {
	      var e = t.getBoundingClientRect();return !(e.width || e.height);
	    }return !(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
	  }function Se(t, e, i) {
	    var n = i || !e._asComponent ? We(t, e) : null,
	        r = n && n.terminal || "SCRIPT" === t.tagName || !t.hasChildNodes() ? null : Je(t.childNodes, e);return function (t, e, i, s, o) {
	      var a = d(e.childNodes),
	          h = De(function () {
	        n && n(t, e, i, s, o), r && r(t, a, i, s, o);
	      }, t);return Re(t, h);
	    };
	  }function De(t, e) {
	    e._directives = [];var i = e._directives.length;t();var n = e._directives.slice(i);n.sort(Pe);for (var r = 0, s = n.length; s > r; r++) {
	      n[r]._bind();
	    }return n;
	  }function Pe(t, e) {
	    return t = t.descriptor.def.priority || Rs, e = e.descriptor.def.priority || Rs, t > e ? -1 : t === e ? 0 : 1;
	  }function Re(t, e, i, n) {
	    function r(r) {
	      Le(t, e, r), i && n && Le(i, n);
	    }return r.dirs = e, r;
	  }function Le(t, e, i) {
	    for (var n = e.length; n--;) {
	      e[n]._teardown();
	    }
	  }function He(t, e, i, n) {
	    var r = be(e, i, t),
	        s = De(function () {
	      r(t, n);
	    }, t);return Re(t, s);
	  }function Me(t, e, i) {
	    var n,
	        r,
	        s = e._containerAttrs,
	        o = e._replacerAttrs;return 11 !== t.nodeType && (e._asComponent ? (s && i && (n = Ye(s, i)), o && (r = Ye(o, e))) : r = Ye(t.attributes, e)), e._containerAttrs = e._replacerAttrs = null, function (t, e, i) {
	      var s,
	          o = t._context;o && n && (s = De(function () {
	        n(o, e, null, i);
	      }, o));var a = De(function () {
	        r && r(t, e);
	      }, t);return Re(t, a, o, s);
	    };
	  }function We(t, e) {
	    var i = t.nodeType;return 1 === i && "SCRIPT" !== t.tagName ? Ie(t, e) : 3 === i && t.data.trim() ? Be(t, e) : null;
	  }function Ie(t, e) {
	    if ("TEXTAREA" === t.tagName) {
	      var i = N(t.value);i && (t.setAttribute(":value", j(i)), t.value = "");
	    }var n,
	        r = t.hasAttributes(),
	        s = r && d(t.attributes);return r && (n = Ke(t, s, e)), n || (n = Qe(t, e)), n || (n = Ge(t, e)), !n && r && (n = Ye(s, e)), n;
	  }function Be(t, e) {
	    if (t._skip) return Ve;var i = N(t.wholeText);if (!i) return null;for (var n = t.nextSibling; n && 3 === n.nodeType;) {
	      n._skip = !0, n = n.nextSibling;
	    }for (var r, s, o = document.createDocumentFragment(), a = 0, h = i.length; h > a; a++) {
	      s = i[a], r = s.tag ? ze(s, e) : document.createTextNode(s.value), o.appendChild(r);
	    }return Ue(i, o, e);
	  }function Ve(t, e) {
	    z(e);
	  }function ze(t, e) {
	    function i(e) {
	      if (!t.descriptor) {
	        var i = A(t.value);t.descriptor = { name: e, def: fs[e], expression: i.expression, filters: i.filters };
	      }
	    }var n;return t.oneTime ? n = document.createTextNode(t.value) : t.html ? (n = document.createComment("v-html"), i("html")) : (n = document.createTextNode(" "), i("text")), n;
	  }function Ue(t, e) {
	    return function (i, n, r, s) {
	      for (var o, a, h, l = e.cloneNode(!0), c = d(l.childNodes), u = 0, f = t.length; f > u; u++) {
	        o = t[u], a = o.value, o.tag && (h = c[u], o.oneTime ? (a = (s || i).$eval(a), o.html ? J(h, Kt(a, !0)) : h.data = a) : i._bindDir(o.descriptor, h, r, s));
	      }J(n, l);
	    };
	  }function Je(t, e) {
	    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) {
	      r = t[o], i = We(r, e), n = i && i.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : Je(r.childNodes, e), s.push(i, n);
	    }return s.length ? qe(s) : null;
	  }function qe(t) {
	    return function (e, i, n, r, s) {
	      for (var o, a, h, l = 0, c = 0, u = t.length; u > l; c++) {
	        o = i[c], a = t[l++], h = t[l++];var f = d(o.childNodes);a && a(e, o, n, r, s), h && h(e, f, n, r, s);
	      }
	    };
	  }function Qe(t, e) {
	    var i = t.tagName.toLowerCase();if (!Cn.test(i)) {
	      var n = gt(e, "elementDirectives", i);return n ? Xe(t, i, "", e, n) : void 0;
	    }
	  }function Ge(t, e) {
	    var i = lt(t, e);if (i) {
	      var n = rt(t),
	          r = { name: "component", ref: n, expression: i.id, def: js.component, modifiers: { literal: !i.dynamic } },
	          s = function s(t, e, i, _s2, o) {
	        n && kt((_s2 || t).$refs, n, null), t._bindDir(r, e, i, _s2, o);
	      };return s.terminal = !0, s;
	    }
	  }function Ke(t, e, i) {
	    if (null !== M(t, "v-pre")) return Ze;if (t.hasAttribute("v-else")) {
	      var n = t.previousElementSibling;if (n && n.hasAttribute("v-if")) return Ze;
	    }for (var r, s, o, a, h, l, c, u, f, p, d = 0, v = e.length; v > d; d++) {
	      r = e[d], a = ti(r.name), s = r.name.replace(Ds, ""), (h = s.match(Ss)) && (f = gt(i, "directives", h[1]), f && f.terminal && (!p || (f.priority || Ls) > p.priority) && (p = f, c = r.name, o = r.value, l = h[1], u = h[2]));
	    }return p ? Xe(t, l, o, i, p, c, u, a) : void 0;
	  }function Ze() {}function Xe(t, e, i, n, r, s, o, a) {
	    var h = A(i),
	        l = { name: e, arg: o, expression: h.expression, filters: h.filters, raw: i, attr: s, modifiers: a, def: r };("for" === e || "router-view" === e) && (l.ref = rt(t));var c = function c(t, e, i, n, r) {
	      l.ref && kt((n || t).$refs, l.ref, null), t._bindDir(l, e, i, n, r);
	    };return c.terminal = !0, c;
	  }function Ye(t, e) {
	    function i(t, e, i) {
	      var n = i && ii(i),
	          r = !n && A(s);v.push({ name: t, attr: o, raw: a, def: e, arg: l, modifiers: c, expression: r && r.expression, filters: r && r.filters, interp: i, hasOneTime: n });
	    }for (var n, r, s, o, a, h, l, c, u, f, p, d = t.length, v = []; d--;) {
	      if (n = t[d], r = o = n.name, s = a = n.value, f = N(s), l = null, c = ti(r), r = r.replace(Ds, ""), f) s = j(f), l = r, i("bind", fs.bind, f);else if (Ps.test(r)) c.literal = !Es.test(r), i("transition", js.transition);else if (Fs.test(r)) l = r.replace(Fs, ""), i("on", fs.on);else if (Es.test(r)) h = r.replace(Es, ""), "style" === h || "class" === h ? i(h, js[h]) : (l = h, i("bind", fs.bind));else if (p = r.match(Ss)) {
	        if (h = p[1], l = p[2], "else" === h) continue;u = gt(e, "directives", h, !0), u && i(h, u);
	      }
	    }return v.length ? ei(v) : void 0;
	  }function ti(t) {
	    var e = (0, _create2.default)(null),
	        i = t.match(Ds);if (i) for (var n = i.length; n--;) {
	      e[i[n].slice(1)] = !0;
	    }return e;
	  }function ei(t) {
	    return function (e, i, n, r, s) {
	      for (var o = t.length; o--;) {
	        e._bindDir(t[o], i, n, r, s);
	      }
	    };
	  }function ii(t) {
	    for (var e = t.length; e--;) {
	      if (t[e].oneTime) return !0;
	    }
	  }function ni(t, e) {
	    return e && (e._containerAttrs = si(t)), it(t) && (t = Kt(t)), e && (e._asComponent && !e.template && (e.template = "<slot></slot>"), e.template && (e._content = Y(t), t = ri(t, e))), at(t) && (U(nt("v-start", !0), t), t.appendChild(nt("v-end", !0))), t;
	  }function ri(t, e) {
	    var i = e.template,
	        n = Kt(i, !0);if (n) {
	      var r = n.firstChild,
	          s = r.tagName && r.tagName.toLowerCase();return e.replace ? (t === document.body, n.childNodes.length > 1 || 1 !== r.nodeType || "component" === s || gt(e, "components", s) || I(r, "is") || gt(e, "elementDirectives", s) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? n : (e._replacerAttrs = si(r), oi(t, r), r)) : (t.appendChild(n), t);
	    }
	  }function si(t) {
	    return 1 === t.nodeType && t.hasAttributes() ? d(t.attributes) : void 0;
	  }function oi(t, e) {
	    for (var i, n, r = t.attributes, s = r.length; s--;) {
	      i = r[s].name, n = r[s].value, e.hasAttribute(i) || Hs.test(i) ? "class" !== i || N(n) || n.trim().split(/\s+/).forEach(function (t) {
	        Z(e, t);
	      }) : e.setAttribute(i, n);
	    }
	  }function ai(t, e) {
	    if (e) {
	      for (var i, n, r = t._slotContents = (0, _create2.default)(null), s = 0, o = e.children.length; o > s; s++) {
	        i = e.children[s], (n = i.getAttribute("slot")) && (r[n] || (r[n] = [])).push(i);
	      }for (n in r) {
	        r[n] = hi(r[n], e);
	      }e.hasChildNodes() && (r["default"] = hi(e.childNodes, e));
	    }
	  }function hi(t, e) {
	    var i = document.createDocumentFragment();t = d(t);for (var n = 0, r = t.length; r > n; n++) {
	      var s = t[n];!it(s) || s.hasAttribute("v-if") || s.hasAttribute("v-for") || (e.removeChild(s), s = Kt(s)), i.appendChild(s);
	    }return i;
	  }function li(t) {
	    function e() {}function n(t, e) {
	      var i = new zt(e, t, null, { lazy: !0 });return function () {
	        return i.dirty && i.evaluate(), _t.target && i.depend(), i.value;
	      };
	    }Object.defineProperty(t.prototype, "$data", { get: function get() {
	        return this._data;
	      }, set: function set(t) {
	        t !== this._data && this._setData(t);
	      } }), t.prototype._initState = function () {
	      this._initProps(), this._initMeta(), this._initMethods(), this._initData(), this._initComputed();
	    }, t.prototype._initProps = function () {
	      var t = this.$options,
	          e = t.el,
	          i = t.props;e = t.el = L(e), this._propsUnlinkFn = e && 1 === e.nodeType && i ? He(this, e, i, this._scope) : null;
	    }, t.prototype._initData = function () {
	      var t = this.$options.data,
	          e = this._data = t ? t() : {};g(e) || (e = {});var n,
	          r,
	          s = this._props,
	          o = this._runtimeData ? "function" == typeof this._runtimeData ? this._runtimeData() : this._runtimeData : null,
	          a = (0, _keys2.default)(e);for (n = a.length; n--;) {
	        r = a[n], (!s || !i(s, r) || o && i(o, r) && null === s[r].raw) && this._proxy(r);
	      }$t(e, this);
	    }, t.prototype._setData = function (t) {
	      t = t || {};var e = this._data;this._data = t;var n, r, s;for (n = (0, _keys2.default)(e), s = n.length; s--;) {
	        r = n[s], r in t || this._unproxy(r);
	      }for (n = (0, _keys2.default)(t), s = n.length; s--;) {
	        r = n[s], i(this, r) || this._proxy(r);
	      }e.__ob__.removeVm(this), $t(t, this), this._digest();
	    }, t.prototype._proxy = function (t) {
	      if (!r(t)) {
	        var e = this;(0, _defineProperty2.default)(e, t, { configurable: !0, enumerable: !0, get: function get() {
	            return e._data[t];
	          }, set: function set(i) {
	            e._data[t] = i;
	          } });
	      }
	    }, t.prototype._unproxy = function (t) {
	      r(t) || delete this[t];
	    }, t.prototype._digest = function () {
	      for (var t = 0, e = this._watchers.length; e > t; t++) {
	        this._watchers[t].update(!0);
	      }
	    }, t.prototype._initComputed = function () {
	      var t = this.$options.computed;if (t) for (var i in t) {
	        var r = t[i],
	            s = { enumerable: !0, configurable: !0 };"function" == typeof r ? (s.get = n(r, this), s.set = e) : (s.get = r.get ? r.cache !== !1 ? n(r.get, this) : p(r.get, this) : e, s.set = r.set ? p(r.set, this) : e), (0, _defineProperty2.default)(this, i, s);
	      }
	    }, t.prototype._initMethods = function () {
	      var t = this.$options.methods;if (t) for (var e in t) {
	        this[e] = p(t[e], this);
	      }
	    }, t.prototype._initMeta = function () {
	      var t = this.$options._meta;if (t) for (var e in t) {
	        kt(this, e, t[e]);
	      }
	    };
	  }function ci(t) {
	    function e(t, e) {
	      for (var i, n, r = e.attributes, s = 0, o = r.length; o > s; s++) {
	        i = r[s].name, Ws.test(i) && (i = i.replace(Ws, ""), n = (t._scope || t._context).$eval(r[s].value, !0), "function" == typeof n && (n._fromParent = !0, t.$on(i.replace(Ws), n)));
	      }
	    }function i(t, e, i) {
	      if (i) {
	        var r, s, o, a;for (s in i) {
	          if (r = i[s], Fi(r)) for (o = 0, a = r.length; a > o; o++) {
	            n(t, e, s, r[o]);
	          } else n(t, e, s, r);
	        }
	      }
	    }function n(t, e, i, r, s) {
	      var o = typeof r === "undefined" ? "undefined" : (0, _typeof3.default)(r);if ("function" === o) t[e](i, r, s);else if ("string" === o) {
	        var a = t.$options.methods,
	            h = a && a[r];h && t[e](i, h, s);
	      } else r && "object" === o && n(t, e, i, r.handler, r);
	    }function r() {
	      this._isAttached || (this._isAttached = !0, this.$children.forEach(s));
	    }function s(t) {
	      !t._isAttached && H(t.$el) && t._callHook("attached");
	    }function o() {
	      this._isAttached && (this._isAttached = !1, this.$children.forEach(a));
	    }function a(t) {
	      t._isAttached && !H(t.$el) && t._callHook("detached");
	    }t.prototype._initEvents = function () {
	      var t = this.$options;t._asComponent && e(this, t.el), i(this, "$on", t.events), i(this, "$watch", t.watch);
	    }, t.prototype._initDOMHooks = function () {
	      this.$on("hook:attached", r), this.$on("hook:detached", o);
	    }, t.prototype._callHook = function (t) {
	      this.$emit("pre-hook:" + t);var e = this.$options[t];if (e) for (var i = 0, n = e.length; n > i; i++) {
	        e[i].call(this);
	      }this.$emit("hook:" + t);
	    };
	  }function ui() {}function fi(t, e, i, n, r, s) {
	    this.vm = e, this.el = i, this.descriptor = t, this.name = t.name, this.expression = t.expression, this.arg = t.arg, this.modifiers = t.modifiers, this.filters = t.filters, this.literal = this.modifiers && this.modifiers.literal, this._locked = !1, this._bound = !1, this._listeners = null, this._host = n, this._scope = r, this._frag = s;
	  }function pi(t) {
	    t.prototype._updateRef = function (t) {
	      var e = this.$options._ref;if (e) {
	        var i = (this._scope || this._context).$refs;t ? i[e] === this && (i[e] = null) : i[e] = this;
	      }
	    }, t.prototype._compile = function (t) {
	      var e = this.$options,
	          i = t;if (t = ni(t, e), this._initElement(t), 1 !== t.nodeType || null === M(t, "v-pre")) {
	        var n = this._context && this._context.$options,
	            r = Me(t, e, n);ai(this, e._content);var s,
	            o = this.constructor;e._linkerCachable && (s = o.linker, s || (s = o.linker = Se(t, e)));var a = r(this, t, this._scope),
	            h = s ? s(this, t) : Se(t, e)(this, t);this._unlinkFn = function () {
	          a(), h(!0);
	        }, e.replace && J(i, t), this._isCompiled = !0, this._callHook("compiled");
	      }
	    }, t.prototype._initElement = function (t) {
	      at(t) ? (this._isFragment = !0, this.$el = this._fragmentStart = t.firstChild, this._fragmentEnd = t.lastChild, 3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""), this._fragment = t) : this.$el = t, this.$el.__vue__ = this, this._callHook("beforeCompile");
	    }, t.prototype._bindDir = function (t, e, i, n, r) {
	      this._directives.push(new fi(t, this, e, i, n, r));
	    }, t.prototype._destroy = function (t, e) {
	      if (this._isBeingDestroyed) return void (e || this._cleanup());var i,
	          n,
	          r = this,
	          s = function s() {
	        !i || n || e || r._cleanup();
	      };t && this.$el && (n = !0, this.$remove(function () {
	        n = !1, s();
	      })), this._callHook("beforeDestroy"), this._isBeingDestroyed = !0;var o,
	          a = this.$parent;for (a && !a._isBeingDestroyed && (a.$children.$remove(this), this._updateRef(!0)), o = this.$children.length; o--;) {
	        this.$children[o].$destroy();
	      }for (this._propsUnlinkFn && this._propsUnlinkFn(), this._unlinkFn && this._unlinkFn(), o = this._watchers.length; o--;) {
	        this._watchers[o].teardown();
	      }this.$el && (this.$el.__vue__ = null), i = !0, s();
	    }, t.prototype._cleanup = function () {
	      this._isDestroyed || (this._frag && this._frag.children.$remove(this), this._data.__ob__ && this._data.__ob__.removeVm(this), this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null, this._isDestroyed = !0, this._callHook("destroyed"), this.$off());
	    };
	  }function di(t) {
	    t.prototype._applyFilters = function (t, e, i, n) {
	      var r, s, o, a, h, l, c, u, f;for (l = 0, c = i.length; c > l; l++) {
	        if (r = i[n ? c - l - 1 : l], s = gt(this.$options, "filters", r.name, !0), s && (s = n ? s.write : s.read || s, "function" == typeof s)) {
	          if (o = n ? [t, e] : [t], h = n ? 2 : 1, r.args) for (u = 0, f = r.args.length; f > u; u++) {
	            a = r.args[u], o[u + h] = a.dynamic ? this.$get(a.value) : a.value;
	          }t = s.apply(this, o);
	        }
	      }return t;
	    }, t.prototype._resolveComponent = function (e, i) {
	      var n;if (n = "function" == typeof e ? e : gt(this.$options, "components", e, !0)) if (n.options) i(n);else if (n.resolved) i(n.resolved);else if (n.requested) n.pendingCallbacks.push(i);else {
	        n.requested = !0;var r = n.pendingCallbacks = [i];n.call(this, function (e) {
	          g(e) && (e = t.extend(e)), n.resolved = e;for (var i = 0, s = r.length; s > i; i++) {
	            r[i](e);
	          }
	        }, function (t) {});
	      }
	    };
	  }function vi(t) {
	    function i(t) {
	      return JSON.parse((0, _stringify2.default)(t));
	    }t.prototype.$get = function (t, e) {
	      var i = Ht(t);if (i) {
	        if (e && !Mt(t)) {
	          var n = this;return function () {
	            n.$arguments = d(arguments);var t = i.get.call(n, n);return n.$arguments = null, t;
	          };
	        }try {
	          return i.get.call(this, this);
	        } catch (r) {}
	      }
	    }, t.prototype.$set = function (t, e) {
	      var i = Ht(t, !0);i && i.set && i.set.call(this, this, e);
	    }, t.prototype.$delete = function (t) {
	      e(this._data, t);
	    }, t.prototype.$watch = function (t, e, i) {
	      var n,
	          r = this;"string" == typeof t && (n = A(t), t = n.expression);var s = new zt(r, t, e, { deep: i && i.deep, sync: i && i.sync, filters: n && n.filters, user: !i || i.user !== !1 });return i && i.immediate && e.call(r, s.value), function () {
	        s.teardown();
	      };
	    }, t.prototype.$eval = function (t, e) {
	      if (Is.test(t)) {
	        var i = A(t),
	            n = this.$get(i.expression, e);return i.filters ? this._applyFilters(n, null, i.filters) : n;
	      }return this.$get(t, e);
	    }, t.prototype.$interpolate = function (t) {
	      var e = N(t),
	          i = this;return e ? 1 === e.length ? i.$eval(e[0].value) + "" : e.map(function (t) {
	        return t.tag ? i.$eval(t.value) : t.value;
	      }).join("") : t;
	    }, t.prototype.$log = function (t) {
	      var e = t ? jt(this._data, t) : this._data;if (e && (e = i(e)), !t) {
	        var n;for (n in this.$options.computed) {
	          e[n] = i(this[n]);
	        }if (this._props) for (n in this._props) {
	          e[n] = i(this[n]);
	        }
	      }console.log(e);
	    };
	  }function mi(t) {
	    function e(t, e, n, r, s, o) {
	      e = i(e);var a = !H(e),
	          h = r === !1 || a ? s : o,
	          l = !a && !t._isAttached && !H(t.$el);return t._isFragment ? (st(t._fragmentStart, t._fragmentEnd, function (i) {
	        h(i, e, t);
	      }), n && n()) : h(t.$el, e, t, n), l && t._callHook("attached"), t;
	    }function i(t) {
	      return "string" == typeof t ? document.querySelector(t) : t;
	    }function n(t, e, i, n) {
	      e.appendChild(t), n && n();
	    }function r(t, e, i, n) {
	      B(t, e), n && n();
	    }function s(t, e, i) {
	      z(t), i && i();
	    }t.prototype.$nextTick = function (t) {
	      Ui(t, this);
	    }, t.prototype.$appendTo = function (t, i, r) {
	      return e(this, t, i, r, n, S);
	    }, t.prototype.$prependTo = function (t, e, n) {
	      return t = i(t), t.hasChildNodes() ? this.$before(t.firstChild, e, n) : this.$appendTo(t, e, n), this;
	    }, t.prototype.$before = function (t, i, n) {
	      return e(this, t, i, n, r, D);
	    }, t.prototype.$after = function (t, e, n) {
	      return t = i(t), t.nextSibling ? this.$before(t.nextSibling, e, n) : this.$appendTo(t.parentNode, e, n), this;
	    }, t.prototype.$remove = function (t, e) {
	      if (!this.$el.parentNode) return t && t();var i = this._isAttached && H(this.$el);i || (e = !1);var n = this,
	          r = function r() {
	        i && n._callHook("detached"), t && t();
	      };if (this._isFragment) ot(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);else {
	        var o = e === !1 ? s : P;o(this.$el, this, r);
	      }return this;
	    };
	  }function gi(t) {
	    function e(t, e, n) {
	      var r = t.$parent;if (r && n && !i.test(e)) for (; r;) {
	        r._eventsCount[e] = (r._eventsCount[e] || 0) + n, r = r.$parent;
	      }
	    }t.prototype.$on = function (t, i) {
	      return (this._events[t] || (this._events[t] = [])).push(i), e(this, t, 1), this;
	    }, t.prototype.$once = function (t, e) {
	      function i() {
	        n.$off(t, i), e.apply(this, arguments);
	      }var n = this;return i.fn = e, this.$on(t, i), this;
	    }, t.prototype.$off = function (t, i) {
	      var n;if (!arguments.length) {
	        if (this.$parent) for (t in this._events) {
	          n = this._events[t], n && e(this, t, -n.length);
	        }return this._events = {}, this;
	      }if (n = this._events[t], !n) return this;if (1 === arguments.length) return e(this, t, -n.length), this._events[t] = null, this;for (var r, s = n.length; s--;) {
	        if (r = n[s], r === i || r.fn === i) {
	          e(this, t, -1), n.splice(s, 1);break;
	        }
	      }return this;
	    }, t.prototype.$emit = function (t) {
	      var e = "string" == typeof t;t = e ? t : t.name;var i = this._events[t],
	          n = e || !i;if (i) {
	        i = i.length > 1 ? d(i) : i;var r = e && i.some(function (t) {
	          return t._fromParent;
	        });r && (n = !1);for (var s = d(arguments, 1), o = 0, a = i.length; a > o; o++) {
	          var h = i[o],
	              l = h.apply(this, s);l !== !0 || r && !h._fromParent || (n = !0);
	        }
	      }return n;
	    }, t.prototype.$broadcast = function (t) {
	      var e = "string" == typeof t;if (t = e ? t : t.name, this._eventsCount[t]) {
	        var i = this.$children,
	            n = d(arguments);e && (n[0] = { name: t, source: this });for (var r = 0, s = i.length; s > r; r++) {
	          var o = i[r],
	              a = o.$emit.apply(o, n);a && o.$broadcast.apply(o, n);
	        }return this;
	      }
	    }, t.prototype.$dispatch = function (t) {
	      var e = this.$emit.apply(this, arguments);if (e) {
	        var i = this.$parent,
	            n = d(arguments);for (n[0] = { name: t, source: this }; i;) {
	          e = i.$emit.apply(i, n), i = e ? i.$parent : null;
	        }return this;
	      }
	    };var i = /^hook:/;
	  }function _i(t) {
	    function e() {
	      this._isAttached = !0, this._isReady = !0, this._callHook("ready");
	    }t.prototype.$mount = function (t) {
	      return this._isCompiled ? void 0 : (t = L(t), t || (t = document.createElement("div")), this._compile(t), this._initDOMHooks(), H(this.$el) ? (this._callHook("attached"), e.call(this)) : this.$once("hook:attached", e), this);
	    }, t.prototype.$destroy = function (t, e) {
	      this._destroy(t, e);
	    }, t.prototype.$compile = function (t, e, i, n) {
	      return Se(t, this.$options, !0)(this, t, e, i, n);
	    };
	  }function yi(t) {
	    this._init(t);
	  }function bi(t, e, i) {
	    return i = i ? parseInt(i, 10) : 0, e = o(e), "number" == typeof e ? t.slice(i, i + e) : t;
	  }function wi(t, e, i) {
	    if (t = Us(t), null == e) return t;if ("function" == typeof e) return t.filter(e);e = ("" + e).toLowerCase();for (var n, r, s, o, a = "in" === i ? 3 : 2, h = Array.prototype.concat.apply([], d(arguments, a)), l = [], c = 0, u = t.length; u > c; c++) {
	      if (n = t[c], s = n && n.$value || n, o = h.length) {
	        for (; o--;) {
	          if (r = h[o], "$key" === r && $i(n.$key, e) || $i(jt(s, r), e)) {
	            l.push(n);break;
	          }
	        }
	      } else $i(n, e) && l.push(n);
	    }return l;
	  }function Ci(t) {
	    function e(t, e, i) {
	      var r = n[i];return r && ("$key" !== r && (m(t) && "$value" in t && (t = t.$value), m(e) && "$value" in e && (e = e.$value)), t = m(t) ? jt(t, r) : t, e = m(e) ? jt(e, r) : e), t === e ? 0 : t > e ? s : -s;
	    }var _i2 = null,
	        n = void 0;t = Us(t);var r = d(arguments, 1),
	        s = r[r.length - 1];"number" == typeof s ? (s = 0 > s ? -1 : 1, r = r.length > 1 ? r.slice(0, -1) : r) : s = 1;var o = r[0];return o ? ("function" == typeof o ? _i2 = function i(t, e) {
	      return o(t, e) * s;
	    } : (n = Array.prototype.concat.apply([], r), _i2 = function i(t, r, s) {
	      return s = s || 0, s >= n.length - 1 ? e(t, r, s) : e(t, r, s) || _i2(t, r, s + 1);
	    }), t.slice().sort(_i2)) : t;
	  }function $i(t, e) {
	    var i;if (g(t)) {
	      var n = (0, _keys2.default)(t);for (i = n.length; i--;) {
	        if ($i(t[n[i]], e)) return !0;
	      }
	    } else if (Fi(t)) {
	      for (i = t.length; i--;) {
	        if ($i(t[i], e)) return !0;
	      }
	    } else if (null != t) return t.toString().toLowerCase().indexOf(e) > -1;
	  }function ki(i) {
	    function n(t) {
	      return new Function("return function " + f(t) + " (options) { this._init(options) }")();
	    }i.options = { directives: fs, elementDirectives: zs, filters: qs, transitions: {}, components: {}, partials: {}, replace: !0 }, i.util = En, i.config = _n, i.set = t, i["delete"] = e, i.nextTick = Ui, i.compiler = Ms, i.FragmentFactory = re, i.internalDirectives = js, i.parsers = { path: Gn, text: vn, template: xr, directive: ln, expression: lr }, i.cid = 0;var r = 1;i.extend = function (t) {
	      t = t || {};var e = this,
	          i = 0 === e.cid;if (i && t._Ctor) return t._Ctor;var s = t.name || e.options.name,
	          o = n(s || "VueComponent");return o.prototype = (0, _create2.default)(e.prototype), o.prototype.constructor = o, o.cid = r++, o.options = mt(e.options, t), o["super"] = e, o.extend = e.extend, _n._assetTypes.forEach(function (t) {
	        o[t] = e[t];
	      }), s && (o.options.components[s] = o), i && (t._Ctor = o), o;
	    }, i.use = function (t) {
	      if (!t.installed) {
	        var e = d(arguments, 1);return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this;
	      }
	    }, i.mixin = function (t) {
	      i.options = mt(i.options, t);
	    }, _n._assetTypes.forEach(function (t) {
	      i[t] = function (e, n) {
	        return n ? ("component" === t && g(n) && (n.name = e, n = i.extend(n)), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
	      };
	    }), v(i.transition, bn);
	  }var xi = Object.prototype.hasOwnProperty,
	      Ai = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,
	      Oi = /-(\w)/g,
	      Ti = /([a-z\d])([A-Z])/g,
	      Ni = /(?:^|[-_\/])(\w)/g,
	      ji = Object.prototype.toString,
	      Ei = "[object Object]",
	      Fi = Array.isArray,
	      Si = "__proto__" in {},
	      Di = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window),
	      Pi = Di && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
	      Ri = Di && window.navigator.userAgent.toLowerCase(),
	      Li = Ri && Ri.indexOf("msie 9.0") > 0,
	      Hi = Ri && Ri.indexOf("android") > 0,
	      Mi = void 0,
	      Wi = void 0,
	      Ii = void 0,
	      Bi = void 0;if (Di && !Li) {
	    var Vi = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend,
	        zi = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;Mi = Vi ? "WebkitTransition" : "transition", Wi = Vi ? "webkitTransitionEnd" : "transitionend", Ii = zi ? "WebkitAnimation" : "animation", Bi = zi ? "webkitAnimationEnd" : "animationend";
	  }var Ui = function () {
	    function t() {
	      n = !1;var t = i.slice(0);i = [];for (var e = 0; e < t.length; e++) {
	        t[e]();
	      }
	    }var e,
	        i = [],
	        n = !1;if ("undefined" != typeof MutationObserver) {
	      var r = 1,
	          s = new MutationObserver(t),
	          o = document.createTextNode(r);s.observe(o, { characterData: !0 }), e = function e() {
	        r = (r + 1) % 2, o.data = r;
	      };
	    } else {
	      var a = Di ? window : "undefined" != typeof global ? global : {};e = a.setImmediate || setTimeout;
	    }return function (r, s) {
	      var o = s ? function () {
	        r.call(s);
	      } : r;i.push(o), n || (n = !0, e(t, 0));
	    };
	  }(),
	      Ji = $.prototype;Ji.put = function (t, e) {
	    var i;this.size === this.limit && (i = this.shift());var n = this.get(t, !0);return n || (n = { key: t }, this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size++), n.value = e, i;
	  }, Ji.shift = function () {
	    var t = this.head;return t && (this.head = this.head.newer, this.head.older = void 0, t.newer = t.older = void 0, this._keymap[t.key] = void 0, this.size--), t;
	  }, Ji.get = function (t, e) {
	    var i = this._keymap[t];if (void 0 !== i) return i === this.tail ? e ? i : i.value : (i.newer && (i === this.head && (this.head = i.newer), i.newer.older = i.older), i.older && (i.older.newer = i.newer), i.newer = void 0, i.older = this.tail, this.tail && (this.tail.newer = i), this.tail = i, e ? i : i.value);
	  };var qi,
	      Qi,
	      Gi,
	      Ki,
	      Zi,
	      Xi,
	      Yi,
	      tn,
	      en,
	      nn,
	      rn,
	      sn,
	      on = new $(1e3),
	      an = /[^\s'"]+|'[^']*'|"[^"]*"/g,
	      hn = /^in$|^-?\d+/,
	      ln = (0, _freeze2.default)({ parseDirective: A }),
	      cn = /[-.*+?^${}()|[\]\/\\]/g,
	      un = void 0,
	      fn = void 0,
	      pn = void 0,
	      dn = /[^|]\|[^|]/,
	      vn = (0, _freeze2.default)({ compileRegex: T, parseText: N, tokensToExp: j }),
	      mn = ["{{", "}}"],
	      gn = ["{{{", "}}}"],
	      _n = (0, _defineProperties2.default)({ debug: !1, silent: !1, async: !0, warnExpressionErrors: !0, devtools: !1, _delimitersChanged: !0, _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"], _propBindingModes: { ONE_WAY: 0, TWO_WAY: 1, ONE_TIME: 2 }, _maxUpdateCount: 100 }, { delimiters: { get: function get() {
	        return mn;
	      }, set: function set(t) {
	        mn = t, T();
	      }, configurable: !0, enumerable: !0 }, unsafeDelimiters: { get: function get() {
	        return gn;
	      }, set: function set(t) {
	        gn = t, T();
	      }, configurable: !0, enumerable: !0 } }),
	      yn = void 0,
	      bn = (0, _freeze2.default)({ appendWithTransition: S, beforeWithTransition: D, removeWithTransition: P, applyTransition: R }),
	      wn = /^v-ref:/,
	      Cn = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,
	      $n = /^(slot|partial|component)$/i,
	      kn = _n.optionMergeStrategies = (0, _create2.default)(null);kn.data = function (t, e, i) {
	    return i ? t || e ? function () {
	      var n = "function" == typeof e ? e.call(i) : e,
	          r = "function" == typeof t ? t.call(i) : void 0;return n ? ut(n, r) : r;
	    } : void 0 : e ? "function" != typeof e ? t : t ? function () {
	      return ut(e.call(this), t.call(this));
	    } : e : t;
	  }, kn.el = function (t, e, i) {
	    if (i || !e || "function" == typeof e) {
	      var n = e || t;return i && "function" == typeof n ? n.call(i) : n;
	    }
	  }, kn.init = kn.created = kn.ready = kn.attached = kn.detached = kn.beforeCompile = kn.compiled = kn.beforeDestroy = kn.destroyed = kn.activate = function (t, e) {
	    return e ? t ? t.concat(e) : Fi(e) ? e : [e] : t;
	  }, _n._assetTypes.forEach(function (t) {
	    kn[t + "s"] = ft;
	  }), kn.watch = kn.events = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = {};v(i, t);for (var n in e) {
	      var r = i[n],
	          s = e[n];r && !Fi(r) && (r = [r]), i[n] = r ? r.concat(s) : [s];
	    }return i;
	  }, kn.props = kn.methods = kn.computed = function (t, e) {
	    if (!e) return t;if (!t) return e;var i = (0, _create2.default)(null);return v(i, t), v(i, e), i;
	  };var xn = function xn(t, e) {
	    return void 0 === e ? t : e;
	  },
	      An = 0;_t.target = null, _t.prototype.addSub = function (t) {
	    this.subs.push(t);
	  }, _t.prototype.removeSub = function (t) {
	    this.subs.$remove(t);
	  }, _t.prototype.depend = function () {
	    _t.target.addDep(this);
	  }, _t.prototype.notify = function () {
	    for (var t = d(this.subs), e = 0, i = t.length; i > e; e++) {
	      t[e].update();
	    }
	  };var On = Array.prototype,
	      Tn = (0, _create2.default)(On);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
	    var e = On[t];_(Tn, t, function () {
	      for (var i = arguments.length, n = new Array(i); i--;) {
	        n[i] = arguments[i];
	      }var r,
	          s = e.apply(this, n),
	          o = this.__ob__;switch (t) {case "push":
	          r = n;break;case "unshift":
	          r = n;break;case "splice":
	          r = n.slice(2);}return r && o.observeArray(r), o.dep.notify(), s;
	    });
	  }), _(On, "$set", function (t, e) {
	    return t >= this.length && (this.length = Number(t) + 1), this.splice(t, 1, e)[0];
	  }), _(On, "$remove", function (t) {
	    if (this.length) {
	      var e = b(this, t);return e > -1 ? this.splice(e, 1) : void 0;
	    }
	  });var Nn = (0, _getOwnPropertyNames2.default)(Tn),
	      jn = !0;bt.prototype.walk = function (t) {
	    for (var e = (0, _keys2.default)(t), i = 0, n = e.length; n > i; i++) {
	      this.convert(e[i], t[e[i]]);
	    }
	  }, bt.prototype.observeArray = function (t) {
	    for (var e = 0, i = t.length; i > e; e++) {
	      $t(t[e]);
	    }
	  }, bt.prototype.convert = function (t, e) {
	    kt(this.value, t, e);
	  }, bt.prototype.addVm = function (t) {
	    (this.vms || (this.vms = [])).push(t);
	  }, bt.prototype.removeVm = function (t) {
	    this.vms.$remove(t);
	  };var En = (0, _freeze2.default)({ defineReactive: kt, set: t, del: e, hasOwn: i, isLiteral: n, isReserved: r, _toString: s, toNumber: o, toBoolean: a, stripQuotes: h, camelize: l, hyphenate: u, classify: f, bind: p, toArray: d, extend: v, isObject: m, isPlainObject: g, def: _, debounce: y, indexOf: b, cancellable: w, looseEqual: C, isArray: Fi, hasProto: Si, inBrowser: Di, devtools: Pi, isIE9: Li, isAndroid: Hi, get transitionProp() {
	      return Mi;
	    }, get transitionEndEvent() {
	      return Wi;
	    }, get animationProp() {
	      return Ii;
	    }, get animationEndEvent() {
	      return Bi;
	    }, nextTick: Ui, query: L, inDoc: H, getAttr: M, getBindAttr: W, hasBindAttr: I, before: B, after: V, remove: z, prepend: U, replace: J, on: q, off: Q, setClass: K, addClass: Z, removeClass: X, extractContent: Y, trimNode: tt, isTemplate: it, createAnchor: nt, findRef: rt, mapNodeRange: st, removeNodeRange: ot, isFragment: at, getOuterHTML: ht, mergeOptions: mt, resolveAsset: gt, checkComponentAttr: lt, commonTagRE: Cn, reservedTagRE: $n, warn: yn }),
	      Fn = 0,
	      Sn = new $(1e3),
	      Dn = 0,
	      Pn = 1,
	      Rn = 2,
	      Ln = 3,
	      Hn = 0,
	      Mn = 1,
	      Wn = 2,
	      In = 3,
	      Bn = 4,
	      Vn = 5,
	      zn = 6,
	      Un = 7,
	      Jn = 8,
	      qn = [];qn[Hn] = { ws: [Hn], ident: [In, Dn], "[": [Bn], eof: [Un] }, qn[Mn] = { ws: [Mn], ".": [Wn], "[": [Bn], eof: [Un] }, qn[Wn] = { ws: [Wn], ident: [In, Dn] }, qn[In] = { ident: [In, Dn], 0: [In, Dn], number: [In, Dn], ws: [Mn, Pn], ".": [Wn, Pn], "[": [Bn, Pn], eof: [Un, Pn] }, qn[Bn] = { "'": [Vn, Dn], '"': [zn, Dn], "[": [Bn, Rn], "]": [Mn, Ln], eof: Jn, "else": [Bn, Dn] }, qn[Vn] = { "'": [Bn, Dn], eof: Jn, "else": [Vn, Dn] }, qn[zn] = { '"': [Bn, Dn], eof: Jn, "else": [zn, Dn] };var Qn,
	      Gn = (0, _freeze2.default)({ parsePath: Nt, getPath: jt, setPath: Et }),
	      Kn = new $(1e3),
	      Zn = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",
	      Xn = new RegExp("^(" + Zn.replace(/,/g, "\\b|") + "\\b)"),
	      Yn = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",
	      tr = new RegExp("^(" + Yn.replace(/,/g, "\\b|") + "\\b)"),
	      er = /\s/g,
	      ir = /\n/g,
	      nr = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,
	      rr = /"(\d+)"/g,
	      sr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,
	      or = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g,
	      ar = /^(?:true|false)$/,
	      hr = [],
	      lr = (0, _freeze2.default)({ parseExpression: Ht, isSimplePath: Mt }),
	      cr = [],
	      ur = [],
	      fr = {},
	      pr = {},
	      dr = !1,
	      vr = !1,
	      mr = 0;zt.prototype.get = function () {
	    this.beforeGet();var t,
	        e = this.scope || this.vm;try {
	      t = this.getter.call(e, e);
	    } catch (i) {}return this.deep && Ut(t), this.preProcess && (t = this.preProcess(t)), this.filters && (t = e._applyFilters(t, null, this.filters, !1)), this.postProcess && (t = this.postProcess(t)), this.afterGet(), t;
	  }, zt.prototype.set = function (t) {
	    var e = this.scope || this.vm;this.filters && (t = e._applyFilters(t, this.value, this.filters, !0));try {
	      this.setter.call(e, e, t);
	    } catch (i) {}var n = e.$forContext;if (n && n.alias === this.expression) {
	      if (n.filters) return;n._withLock(function () {
	        e.$key ? n.rawValue[e.$key] = t : n.rawValue.$set(e.$index, t);
	      });
	    }
	  }, zt.prototype.beforeGet = function () {
	    _t.target = this, this.newDepIds = (0, _create2.default)(null), this.newDeps.length = 0;
	  }, zt.prototype.addDep = function (t) {
	    var e = t.id;this.newDepIds[e] || (this.newDepIds[e] = !0, this.newDeps.push(t), this.depIds[e] || t.addSub(this));
	  }, zt.prototype.afterGet = function () {
	    _t.target = null;for (var t = this.deps.length; t--;) {
	      var e = this.deps[t];this.newDepIds[e.id] || e.removeSub(this);
	    }this.depIds = this.newDepIds;var i = this.deps;this.deps = this.newDeps, this.newDeps = i;
	  }, zt.prototype.update = function (t) {
	    this.lazy ? this.dirty = !0 : this.sync || !_n.async ? this.run() : (this.shallow = this.queued ? t ? this.shallow : !1 : !!t, this.queued = !0, Vt(this));
	  }, zt.prototype.run = function () {
	    if (this.active) {
	      var t = this.get();if (t !== this.value || (m(t) || this.deep) && !this.shallow) {
	        var e = this.value;this.value = t;this.prevError;this.cb.call(this.vm, t, e);
	      }this.queued = this.shallow = !1;
	    }
	  }, zt.prototype.evaluate = function () {
	    var t = _t.target;this.value = this.get(), this.dirty = !1, _t.target = t;
	  }, zt.prototype.depend = function () {
	    for (var t = this.deps.length; t--;) {
	      this.deps[t].depend();
	    }
	  }, zt.prototype.teardown = function () {
	    if (this.active) {
	      this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);for (var t = this.deps.length; t--;) {
	        this.deps[t].removeSub(this);
	      }this.active = !1, this.vm = this.cb = this.value = null;
	    }
	  };var gr = { bind: function bind() {
	      this.attr = 3 === this.el.nodeType ? "data" : "textContent";
	    }, update: function update(t) {
	      this.el[this.attr] = s(t);
	    } },
	      _r = new $(1e3),
	      yr = new $(1e3),
	      br = { efault: [0, "", ""], legend: [1, "<fieldset>", "</fieldset>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] };br.td = br.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"], br.option = br.optgroup = [1, '<select multiple="multiple">', "</select>"], br.thead = br.tbody = br.colgroup = br.caption = br.tfoot = [1, "<table>", "</table>"], br.g = br.defs = br.symbol = br.use = br.image = br.text = br.circle = br.ellipse = br.line = br.path = br.polygon = br.polyline = br.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];var wr = /<([\w:-]+)/,
	      Cr = /&#?\w+?;/,
	      $r = function () {
	    if (Di) {
	      var t = document.createElement("div");return t.innerHTML = "<template>1</template>", !t.cloneNode(!0).firstChild.innerHTML;
	    }return !1;
	  }(),
	      kr = function () {
	    if (Di) {
	      var t = document.createElement("textarea");return t.placeholder = "t", "t" === t.cloneNode(!0).value;
	    }return !1;
	  }(),
	      xr = (0, _freeze2.default)({ cloneNode: Gt, parseTemplate: Kt }),
	      Ar = { bind: function bind() {
	      8 === this.el.nodeType && (this.nodes = [], this.anchor = nt("v-html"), J(this.el, this.anchor));
	    }, update: function update(t) {
	      t = s(t), this.nodes ? this.swap(t) : this.el.innerHTML = t;
	    }, swap: function swap(t) {
	      for (var e = this.nodes.length; e--;) {
	        z(this.nodes[e]);
	      }var i = Kt(t, !0, !0);this.nodes = d(i.childNodes), B(i, this.anchor);
	    } };Zt.prototype.callHook = function (t) {
	    var e, i;for (e = 0, i = this.childFrags.length; i > e; e++) {
	      this.childFrags[e].callHook(t);
	    }for (e = 0, i = this.children.length; i > e; e++) {
	      t(this.children[e]);
	    }
	  }, Zt.prototype.beforeRemove = function () {
	    var t, e;for (t = 0, e = this.childFrags.length; e > t; t++) {
	      this.childFrags[t].beforeRemove(!1);
	    }for (t = 0, e = this.children.length; e > t; t++) {
	      this.children[t].$destroy(!1, !0);
	    }var i = this.unlink.dirs;for (t = 0, e = i.length; e > t; t++) {
	      i[t]._watcher && i[t]._watcher.teardown();
	    }
	  }, Zt.prototype.destroy = function () {
	    this.parentFrag && this.parentFrag.childFrags.$remove(this), this.node.__v_frag = null, this.unlink();
	  };var Or = new $(5e3);re.prototype.create = function (t, e, i) {
	    var n = Gt(this.template);return new Zt(this.linker, this.vm, n, t, e, i);
	  };var Tr = 700,
	      Nr = 800,
	      jr = 850,
	      Er = 1100,
	      Fr = 1500,
	      Sr = 1500,
	      Dr = 1750,
	      Pr = 2100,
	      Rr = 2200,
	      Lr = 2300,
	      Hr = 0,
	      Mr = { priority: Rr, terminal: !0, params: ["track-by", "stagger", "enter-stagger", "leave-stagger"], bind: function bind() {
	      var t = this.expression.match(/(.*) (?:in|of) (.*)/);if (t) {
	        var e = t[1].match(/\((.*),(.*)\)/);e ? (this.iterator = e[1].trim(), this.alias = e[2].trim()) : this.alias = t[1].trim(), this.expression = t[2];
	      }if (this.alias) {
	        this.id = "__v-for__" + ++Hr;var i = this.el.tagName;this.isOption = ("OPTION" === i || "OPTGROUP" === i) && "SELECT" === this.el.parentNode.tagName, this.start = nt("v-for-start"), this.end = nt("v-for-end"), J(this.el, this.end), B(this.start, this.end), this.cache = (0, _create2.default)(null), this.factory = new re(this.vm, this.el);
	      }
	    }, update: function update(t) {
	      this.diff(t), this.updateRef(), this.updateModel();
	    }, diff: function diff(t) {
	      var e,
	          n,
	          r,
	          s,
	          o,
	          a,
	          h = t[0],
	          l = this.fromObject = m(h) && i(h, "$key") && i(h, "$value"),
	          c = this.params.trackBy,
	          u = this.frags,
	          f = this.frags = new Array(t.length),
	          p = this.alias,
	          d = this.iterator,
	          v = this.start,
	          g = this.end,
	          _ = H(v),
	          y = !u;for (e = 0, n = t.length; n > e; e++) {
	        h = t[e], s = l ? h.$key : null, o = l ? h.$value : h, a = !m(o), r = !y && this.getCachedFrag(o, e, s), r ? (r.reused = !0, r.scope.$index = e, s && (r.scope.$key = s), d && (r.scope[d] = null !== s ? s : e), (c || l || a) && yt(function () {
	          r.scope[p] = o;
	        })) : (r = this.create(o, p, e, s), r.fresh = !y), f[e] = r, y && r.before(g);
	      }if (!y) {
	        var b = 0,
	            w = u.length - f.length;for (this.vm._vForRemoving = !0, e = 0, n = u.length; n > e; e++) {
	          r = u[e], r.reused || (this.deleteCachedFrag(r), this.remove(r, b++, w, _));
	        }this.vm._vForRemoving = !1, b && (this.vm._watchers = this.vm._watchers.filter(function (t) {
	          return t.active;
	        }));var C,
	            $,
	            k,
	            x = 0;for (e = 0, n = f.length; n > e; e++) {
	          r = f[e], C = f[e - 1], $ = C ? C.staggerCb ? C.staggerAnchor : C.end || C.node : v, r.reused && !r.staggerCb ? (k = se(r, v, this.id), k === C || k && se(k, v, this.id) === C || this.move(r, $)) : this.insert(r, x++, $, _), r.reused = r.fresh = !1;
	        }
	      }
	    }, create: function create(t, e, i, n) {
	      var r = this._host,
	          s = this._scope || this.vm,
	          o = (0, _create2.default)(s);o.$refs = (0, _create2.default)(s.$refs), o.$els = (0, _create2.default)(s.$els), o.$parent = s, o.$forContext = this, yt(function () {
	        kt(o, e, t);
	      }), kt(o, "$index", i), n ? kt(o, "$key", n) : o.$key && _(o, "$key", null), this.iterator && kt(o, this.iterator, null !== n ? n : i);var a = this.factory.create(r, o, this._frag);return a.forId = this.id, this.cacheFrag(t, a, i, n), a;
	    }, updateRef: function updateRef() {
	      var t = this.descriptor.ref;if (t) {
	        var e,
	            i = (this._scope || this.vm).$refs;this.fromObject ? (e = {}, this.frags.forEach(function (t) {
	          e[t.scope.$key] = oe(t);
	        })) : e = this.frags.map(oe), i[t] = e;
	      }
	    }, updateModel: function updateModel() {
	      if (this.isOption) {
	        var t = this.start.parentNode,
	            e = t && t.__v_model;e && e.forceUpdate();
	      }
	    }, insert: function insert(t, e, i, n) {
	      t.staggerCb && (t.staggerCb.cancel(), t.staggerCb = null);var r = this.getStagger(t, e, null, "enter");if (n && r) {
	        var s = t.staggerAnchor;s || (s = t.staggerAnchor = nt("stagger-anchor"), s.__v_frag = t), V(s, i);var o = t.staggerCb = w(function () {
	          t.staggerCb = null, t.before(s), z(s);
	        });setTimeout(o, r);
	      } else t.before(i.nextSibling);
	    }, remove: function remove(t, e, i, n) {
	      if (t.staggerCb) return t.staggerCb.cancel(), void (t.staggerCb = null);var r = this.getStagger(t, e, i, "leave");if (n && r) {
	        var s = t.staggerCb = w(function () {
	          t.staggerCb = null, t.remove();
	        });setTimeout(s, r);
	      } else t.remove();
	    }, move: function move(t, e) {
	      e.nextSibling || this.end.parentNode.appendChild(this.end), t.before(e.nextSibling, !1);
	    }, cacheFrag: function cacheFrag(t, e, n, r) {
	      var s,
	          o = this.params.trackBy,
	          a = this.cache,
	          h = !m(t);r || o || h ? (s = o ? "$index" === o ? n : jt(t, o) : r || t, a[s] || (a[s] = e)) : (s = this.id, i(t, s) ? null === t[s] && (t[s] = e) : _(t, s, e)), e.raw = t;
	    }, getCachedFrag: function getCachedFrag(t, e, i) {
	      var n,
	          r = this.params.trackBy,
	          s = !m(t);if (i || r || s) {
	        var o = r ? "$index" === r ? e : jt(t, r) : i || t;n = this.cache[o];
	      } else n = t[this.id];return n && (n.reused || n.fresh), n;
	    }, deleteCachedFrag: function deleteCachedFrag(t) {
	      var e = t.raw,
	          n = this.params.trackBy,
	          r = t.scope,
	          s = r.$index,
	          o = i(r, "$key") && r.$key,
	          a = !m(e);if (n || o || a) {
	        var h = n ? "$index" === n ? s : jt(e, n) : o || e;this.cache[h] = null;
	      } else e[this.id] = null, t.raw = null;
	    }, getStagger: function getStagger(t, e, i, n) {
	      n += "Stagger";var r = t.node.__v_trans,
	          s = r && r.hooks,
	          o = s && (s[n] || s.stagger);return o ? o.call(t, e, i) : e * parseInt(this.params[n] || this.params.stagger, 10);
	    }, _preProcess: function _preProcess(t) {
	      return this.rawValue = t, t;
	    }, _postProcess: function _postProcess(t) {
	      if (Fi(t)) return t;if (g(t)) {
	        for (var e, i = (0, _keys2.default)(t), n = i.length, r = new Array(n); n--;) {
	          e = i[n], r[n] = { $key: e, $value: t[e] };
	        }return r;
	      }return "number" != typeof t || isNaN(t) || (t = ae(t)), t || [];
	    }, unbind: function unbind() {
	      if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null), this.frags) for (var t, e = this.frags.length; e--;) {
	        t = this.frags[e], this.deleteCachedFrag(t), t.destroy();
	      }
	    } },
	      Wr = { priority: Pr, terminal: !0, bind: function bind() {
	      var t = this.el;if (t.__vue__) this.invalid = !0;else {
	        var e = t.nextElementSibling;e && null !== M(e, "v-else") && (z(e), this.elseEl = e), this.anchor = nt("v-if"), J(t, this.anchor);
	      }
	    }, update: function update(t) {
	      this.invalid || (t ? this.frag || this.insert() : this.remove());
	    }, insert: function insert() {
	      this.elseFrag && (this.elseFrag.remove(), this.elseFrag = null), this.factory || (this.factory = new re(this.vm, this.el)), this.frag = this.factory.create(this._host, this._scope, this._frag), this.frag.before(this.anchor);
	    }, remove: function remove() {
	      this.frag && (this.frag.remove(), this.frag = null), this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new re(this.elseEl._context || this.vm, this.elseEl)), this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag), this.elseFrag.before(this.anchor));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy(), this.elseFrag && this.elseFrag.destroy();
	    } },
	      Ir = { bind: function bind() {
	      var t = this.el.nextElementSibling;t && null !== M(t, "v-else") && (this.elseEl = t);
	    }, update: function update(t) {
	      this.apply(this.el, t), this.elseEl && this.apply(this.elseEl, !t);
	    }, apply: function apply(t, e) {
	      function i() {
	        t.style.display = e ? "" : "none";
	      }H(t) ? R(t, e ? 1 : -1, i, this.vm) : i();
	    } },
	      Br = { bind: function bind() {
	      var t = this,
	          e = this.el,
	          i = "range" === e.type,
	          n = this.params.lazy,
	          r = this.params.number,
	          s = this.params.debounce,
	          a = !1;if (Hi || i || (this.on("compositionstart", function () {
	        a = !0;
	      }), this.on("compositionend", function () {
	        a = !1, n || t.listener();
	      })), this.focused = !1, i || n || (this.on("focus", function () {
	        t.focused = !0;
	      }), this.on("blur", function () {
	        t.focused = !1, (!t._frag || t._frag.inserted) && t.rawListener();
	      })), this.listener = this.rawListener = function () {
	        if (!a && t._bound) {
	          var n = r || i ? o(e.value) : e.value;t.set(n), Ui(function () {
	            t._bound && !t.focused && t.update(t._watcher.value);
	          });
	        }
	      }, s && (this.listener = y(this.listener, s)), this.hasjQuery = "function" == typeof jQuery, this.hasjQuery) {
	        var h = jQuery.fn.on ? "on" : "bind";jQuery(e)[h]("change", this.rawListener), n || jQuery(e)[h]("input", this.listener);
	      } else this.on("change", this.rawListener), n || this.on("input", this.listener);!n && Li && (this.on("cut", function () {
	        Ui(t.listener);
	      }), this.on("keyup", function (e) {
	        (46 === e.keyCode || 8 === e.keyCode) && t.listener();
	      })), (e.hasAttribute("value") || "TEXTAREA" === e.tagName && e.value.trim()) && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      this.el.value = s(t);
	    }, unbind: function unbind() {
	      var t = this.el;if (this.hasjQuery) {
	        var e = jQuery.fn.off ? "off" : "unbind";jQuery(t)[e]("change", this.listener), jQuery(t)[e]("input", this.listener);
	      }
	    } },
	      Vr = { bind: function bind() {
	      var t = this,
	          e = this.el;this.getValue = function () {
	        if (e.hasOwnProperty("_value")) return e._value;var i = e.value;return t.params.number && (i = o(i)), i;
	      }, this.listener = function () {
	        t.set(t.getValue());
	      }, this.on("change", this.listener), e.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      this.el.checked = C(t, this.getValue());
	    } },
	      zr = { bind: function bind() {
	      var t = this,
	          e = this.el;this.forceUpdate = function () {
	        t._watcher && t.update(t._watcher.get());
	      };var i = this.multiple = e.hasAttribute("multiple");this.listener = function () {
	        var n = he(e, i);n = t.params.number ? Fi(n) ? n.map(o) : o(n) : n, t.set(n);
	      }, this.on("change", this.listener);var n = he(e, i, !0);(i && n.length || !i && null !== n) && (this.afterBind = this.listener), this.vm.$on("hook:attached", this.forceUpdate);
	    }, update: function update(t) {
	      var e = this.el;e.selectedIndex = -1;for (var i, n, r = this.multiple && Fi(t), s = e.options, o = s.length; o--;) {
	        i = s[o], n = i.hasOwnProperty("_value") ? i._value : i.value, i.selected = r ? le(t, n) > -1 : C(t, n);
	      }
	    }, unbind: function unbind() {
	      this.vm.$off("hook:attached", this.forceUpdate);
	    } },
	      Ur = { bind: function bind() {
	      function t() {
	        var t = i.checked;return t && i.hasOwnProperty("_trueValue") ? i._trueValue : !t && i.hasOwnProperty("_falseValue") ? i._falseValue : t;
	      }var e = this,
	          i = this.el;this.getValue = function () {
	        return i.hasOwnProperty("_value") ? i._value : e.params.number ? o(i.value) : i.value;
	      }, this.listener = function () {
	        var n = e._watcher.value;if (Fi(n)) {
	          var r = e.getValue();i.checked ? b(n, r) < 0 && n.push(r) : n.$remove(r);
	        } else e.set(t());
	      }, this.on("change", this.listener), i.hasAttribute("checked") && (this.afterBind = this.listener);
	    }, update: function update(t) {
	      var e = this.el;Fi(t) ? e.checked = b(t, this.getValue()) > -1 : e.hasOwnProperty("_trueValue") ? e.checked = C(t, e._trueValue) : e.checked = !!t;
	    } },
	      Jr = { text: Br, radio: Vr, select: zr, checkbox: Ur },
	      qr = { priority: Nr, twoWay: !0, handlers: Jr, params: ["lazy", "number", "debounce"], bind: function bind() {
	      this.checkFilters(), this.hasRead && !this.hasWrite;var t,
	          e = this.el,
	          i = e.tagName;if ("INPUT" === i) t = Jr[e.type] || Jr.text;else if ("SELECT" === i) t = Jr.select;else {
	        if ("TEXTAREA" !== i) return;t = Jr.text;
	      }e.__v_model = this, t.bind.call(this), this.update = t.update, this._unbind = t.unbind;
	    }, checkFilters: function checkFilters() {
	      var t = this.filters;if (t) for (var e = t.length; e--;) {
	        var i = gt(this.vm.$options, "filters", t[e].name);("function" == typeof i || i.read) && (this.hasRead = !0), i.write && (this.hasWrite = !0);
	      }
	    }, unbind: function unbind() {
	      this.el.__v_model = null, this._unbind && this._unbind();
	    } },
	      Qr = { esc: 27, tab: 9, enter: 13, space: 32, "delete": [8, 46], up: 38, left: 37, right: 39, down: 40 },
	      Gr = { priority: Tr, acceptStatement: !0, keyCodes: Qr, bind: function bind() {
	      if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
	        var t = this;this.iframeBind = function () {
	          q(t.el.contentWindow, t.arg, t.handler, t.modifiers.capture);
	        }, this.on("load", this.iframeBind);
	      }
	    }, update: function update(t) {
	      if (this.descriptor.raw || (t = function t() {}), "function" == typeof t) {
	        this.modifiers.stop && (t = ue(t)), this.modifiers.prevent && (t = fe(t)), this.modifiers.self && (t = pe(t));var e = (0, _keys2.default)(this.modifiers).filter(function (t) {
	          return "stop" !== t && "prevent" !== t && "self" !== t;
	        });e.length && (t = ce(t, e)), this.reset(), this.handler = t, this.iframeBind ? this.iframeBind() : q(this.el, this.arg, this.handler, this.modifiers.capture);
	      }
	    }, reset: function reset() {
	      var t = this.iframeBind ? this.el.contentWindow : this.el;this.handler && Q(t, this.arg, this.handler);
	    }, unbind: function unbind() {
	      this.reset();
	    } },
	      Kr = ["-webkit-", "-moz-", "-ms-"],
	      Zr = ["Webkit", "Moz", "ms"],
	      Xr = /!important;?$/,
	      Yr = (0, _create2.default)(null),
	      ts = null,
	      es = { deep: !0, update: function update(t) {
	      "string" == typeof t ? this.el.style.cssText = t : Fi(t) ? this.handleObject(t.reduce(v, {})) : this.handleObject(t || {});
	    }, handleObject: function handleObject(t) {
	      var e,
	          i,
	          n = this.cache || (this.cache = {});for (e in n) {
	        e in t || (this.handleSingle(e, null), delete n[e]);
	      }for (e in t) {
	        i = t[e], i !== n[e] && (n[e] = i, this.handleSingle(e, i));
	      }
	    }, handleSingle: function handleSingle(t, e) {
	      if (t = de(t)) if (null != e && (e += ""), e) {
	        var i = Xr.test(e) ? "important" : "";i ? (e = e.replace(Xr, "").trim(), this.el.style.setProperty(t.kebab, e, i)) : this.el.style[t.camel] = e;
	      } else this.el.style[t.camel] = "";
	    } },
	      is = "http://www.w3.org/1999/xlink",
	      ns = /^xlink:/,
	      rs = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,
	      ss = /^(?:value|checked|selected|muted)$/,
	      os = /^(?:draggable|contenteditable|spellcheck)$/,
	      as = { value: "_value", "true-value": "_trueValue", "false-value": "_falseValue" },
	      hs = { priority: jr, bind: function bind() {
	      var t = this.arg,
	          e = this.el.tagName;t || (this.deep = !0);var i = this.descriptor,
	          n = i.interp;n && (i.hasOneTime && (this.expression = j(n, this._scope || this.vm)), (rs.test(t) || "name" === t && ("PARTIAL" === e || "SLOT" === e)) && (this.el.removeAttribute(t), this.invalid = !0));
	    }, update: function update(t) {
	      if (!this.invalid) {
	        var e = this.arg;this.arg ? this.handleSingle(e, t) : this.handleObject(t || {});
	      }
	    }, handleObject: es.handleObject, handleSingle: function handleSingle(t, e) {
	      var i = this.el,
	          n = this.descriptor.interp;this.modifiers.camel && (t = l(t)), !n && ss.test(t) && t in i && (i[t] = "value" === t && null == e ? "" : e);var r = as[t];if (!n && r) {
	        i[r] = e;var s = i.__v_model;s && s.listener();
	      }return "value" === t && "TEXTAREA" === i.tagName ? void i.removeAttribute(t) : void (os.test(t) ? i.setAttribute(t, e ? "true" : "false") : null != e && e !== !1 ? "class" === t ? (i.__v_trans && (e += " " + i.__v_trans.id + "-transition"), K(i, e)) : ns.test(t) ? i.setAttributeNS(is, t, e === !0 ? "" : e) : i.setAttribute(t, e === !0 ? "" : e) : i.removeAttribute(t));
	    } },
	      ls = { priority: Fr, bind: function bind() {
	      if (this.arg) {
	        var t = this.id = l(this.arg),
	            e = (this._scope || this.vm).$els;i(e, t) ? e[t] = this.el : kt(e, t, this.el);
	      }
	    }, unbind: function unbind() {
	      var t = (this._scope || this.vm).$els;t[this.id] === this.el && (t[this.id] = null);
	    } },
	      cs = { bind: function bind() {} },
	      us = { bind: function bind() {
	      var t = this.el;this.vm.$once("pre-hook:compiled", function () {
	        t.removeAttribute("v-cloak");
	      });
	    } },
	      fs = { text: gr, html: Ar, "for": Mr, "if": Wr, show: Ir, model: qr, on: Gr, bind: hs, el: ls, ref: cs, cloak: us },
	      ps = { deep: !0, update: function update(t) {
	      t && "string" == typeof t ? this.handleObject(ge(t)) : g(t) ? this.handleObject(t) : Fi(t) ? this.handleArray(t) : this.cleanup();
	    }, handleObject: function handleObject(t) {
	      this.cleanup(t), this.prevKeys = (0, _keys2.default)(t), me(this.el, t);
	    }, handleArray: function handleArray(t) {
	      this.cleanup(t);for (var e = 0, i = t.length; i > e; e++) {
	        var n = t[e];n && g(n) ? me(this.el, n) : n && "string" == typeof n && Z(this.el, n);
	      }this.prevKeys = t.slice();
	    }, cleanup: function cleanup(t) {
	      if (this.prevKeys) for (var e = this.prevKeys.length; e--;) {
	        var i = this.prevKeys[e];if (i) for (var n = g(i) ? (0, _keys2.default)(i) : [i], r = 0, s = n.length; s > r; r++) {
	          _e(this.el, n[r], X);
	        }
	      }
	    } },
	      ds = { priority: Sr, params: ["keep-alive", "transition-mode", "inline-template"], bind: function bind() {
	      this.el.__vue__ || (this.keepAlive = this.params.keepAlive, this.keepAlive && (this.cache = {}), this.params.inlineTemplate && (this.inlineTemplate = Y(this.el, !0)), this.pendingComponentCb = this.Component = null, this.pendingRemovals = 0, this.pendingRemovalCb = null, this.anchor = nt("v-component"), J(this.el, this.anchor), this.el.removeAttribute("is"), this.descriptor.ref && this.el.removeAttribute("v-ref:" + u(this.descriptor.ref)), this.literal && this.setComponent(this.expression));
	    }, update: function update(t) {
	      this.literal || this.setComponent(t);
	    }, setComponent: function setComponent(t, e) {
	      if (this.invalidatePending(), t) {
	        var i = this;this.resolveComponent(t, function () {
	          i.mountComponent(e);
	        });
	      } else this.unbuild(!0), this.remove(this.childVM, e), this.childVM = null;
	    }, resolveComponent: function resolveComponent(t, e) {
	      var i = this;this.pendingComponentCb = w(function (n) {
	        i.ComponentName = n.options.name || ("string" == typeof t ? t : null), i.Component = n, e();
	      }), this.vm._resolveComponent(t, this.pendingComponentCb);
	    }, mountComponent: function mountComponent(t) {
	      this.unbuild(!0);var e = this,
	          i = this.Component.options.activate,
	          n = this.getCached(),
	          r = this.build();i && !n ? (this.waitingFor = r, ye(i, r, function () {
	        e.waitingFor === r && (e.waitingFor = null, e.transition(r, t));
	      })) : (n && r._updateRef(), this.transition(r, t));
	    }, invalidatePending: function invalidatePending() {
	      this.pendingComponentCb && (this.pendingComponentCb.cancel(), this.pendingComponentCb = null);
	    }, build: function build(t) {
	      var e = this.getCached();if (e) return e;if (this.Component) {
	        var i = { name: this.ComponentName, el: Gt(this.el), template: this.inlineTemplate, parent: this._host || this.vm, _linkerCachable: !this.inlineTemplate, _ref: this.descriptor.ref, _asComponent: !0, _isRouterView: this._isRouterView, _context: this.vm, _scope: this._scope, _frag: this._frag };t && v(i, t);var n = new this.Component(i);return this.keepAlive && (this.cache[this.Component.cid] = n), n;
	      }
	    }, getCached: function getCached() {
	      return this.keepAlive && this.cache[this.Component.cid];
	    }, unbuild: function unbuild(t) {
	      this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(), this.waitingFor = null);var e = this.childVM;return !e || this.keepAlive ? void (e && (e._inactive = !0, e._updateRef(!0))) : void e.$destroy(!1, t);
	    }, remove: function remove(t, e) {
	      var i = this.keepAlive;if (t) {
	        this.pendingRemovals++, this.pendingRemovalCb = e;var n = this;t.$remove(function () {
	          n.pendingRemovals--, i || t._cleanup(), !n.pendingRemovals && n.pendingRemovalCb && (n.pendingRemovalCb(), n.pendingRemovalCb = null);
	        });
	      } else e && e();
	    }, transition: function transition(t, e) {
	      var i = this,
	          n = this.childVM;switch (n && (n._inactive = !0), t._inactive = !1, this.childVM = t, i.params.transitionMode) {case "in-out":
	          t.$before(i.anchor, function () {
	            i.remove(n, e);
	          });break;case "out-in":
	          i.remove(n, function () {
	            t.$before(i.anchor, e);
	          });break;default:
	          i.remove(n), t.$before(i.anchor, e);}
	    }, unbind: function unbind() {
	      if (this.invalidatePending(), this.unbuild(), this.cache) {
	        for (var t in this.cache) {
	          this.cache[t].$destroy();
	        }this.cache = null;
	      }
	    } },
	      vs = _n._propBindingModes,
	      ms = {},
	      gs = /^[$_a-zA-Z]+[\w$]*$/,
	      _s = _n._propBindingModes,
	      ys = { bind: function bind() {
	      var t = this.vm,
	          e = t._context,
	          i = this.descriptor.prop,
	          n = i.path,
	          r = i.parentPath,
	          s = i.mode === _s.TWO_WAY,
	          o = this.parentWatcher = new zt(e, r, function (e) {
	        ke(t, i, e);
	      }, { twoWay: s, filters: i.filters, scope: this._scope });if ($e(t, i, o.value), s) {
	        var a = this;t.$once("pre-hook:created", function () {
	          a.childWatcher = new zt(t, n, function (t) {
	            o.set(t);
	          }, { sync: !0 });
	        });
	      }
	    }, unbind: function unbind() {
	      this.parentWatcher.teardown(), this.childWatcher && this.childWatcher.teardown();
	    } },
	      bs = [],
	      ws = !1,
	      Cs = "transition",
	      $s = "animation",
	      ks = Mi + "Duration",
	      xs = Ii + "Duration",
	      As = Di && window.requestAnimationFrame,
	      Os = As ? function (t) {
	    As(function () {
	      As(t);
	    });
	  } : function (t) {
	    setTimeout(t, 50);
	  },
	      Ts = Ee.prototype;Ts.enter = function (t, e) {
	    this.cancelPending(), this.callHook("beforeEnter"), this.cb = e, Z(this.el, this.enterClass), t(), this.entered = !1, this.callHookWithCb("enter"), this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled, Ne(this.enterNextTick));
	  }, Ts.enterNextTick = function () {
	    var t = this;this.justEntered = !0, Os(function () {
	      t.justEntered = !1;
	    });var e = this.enterDone,
	        i = this.getCssTransitionType(this.enterClass);this.pendingJsCb ? i === Cs && X(this.el, this.enterClass) : i === Cs ? (X(this.el, this.enterClass), this.setupCssCb(Wi, e)) : i === $s ? this.setupCssCb(Bi, e) : e();
	  }, Ts.enterDone = function () {
	    this.entered = !0, this.cancel = this.pendingJsCb = null, X(this.el, this.enterClass), this.callHook("afterEnter"), this.cb && this.cb();
	  }, Ts.leave = function (t, e) {
	    this.cancelPending(), this.callHook("beforeLeave"), this.op = t, this.cb = e, Z(this.el, this.leaveClass), this.left = !1, this.callHookWithCb("leave"), this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled, this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : Ne(this.leaveNextTick)));
	  }, Ts.leaveNextTick = function () {
	    var t = this.getCssTransitionType(this.leaveClass);if (t) {
	      var e = t === Cs ? Wi : Bi;this.setupCssCb(e, this.leaveDone);
	    } else this.leaveDone();
	  }, Ts.leaveDone = function () {
	    this.left = !0, this.cancel = this.pendingJsCb = null, this.op(), X(this.el, this.leaveClass), this.callHook("afterLeave"), this.cb && this.cb(), this.op = null;
	  }, Ts.cancelPending = function () {
	    this.op = this.cb = null;var t = !1;this.pendingCssCb && (t = !0, Q(this.el, this.pendingCssEvent, this.pendingCssCb), this.pendingCssEvent = this.pendingCssCb = null), this.pendingJsCb && (t = !0, this.pendingJsCb.cancel(), this.pendingJsCb = null), t && (X(this.el, this.enterClass), X(this.el, this.leaveClass)), this.cancel && (this.cancel.call(this.vm, this.el), this.cancel = null);
	  }, Ts.callHook = function (t) {
	    this.hooks && this.hooks[t] && this.hooks[t].call(this.vm, this.el);
	  }, Ts.callHookWithCb = function (t) {
	    var e = this.hooks && this.hooks[t];e && (e.length > 1 && (this.pendingJsCb = w(this[t + "Done"])), e.call(this.vm, this.el, this.pendingJsCb));
	  }, Ts.getCssTransitionType = function (t) {
	    if (!(!Wi || document.hidden || this.hooks && this.hooks.css === !1 || Fe(this.el))) {
	      var e = this.type || this.typeCache[t];if (e) return e;var i = this.el.style,
	          n = window.getComputedStyle(this.el),
	          r = i[ks] || n[ks];if (r && "0s" !== r) e = Cs;else {
	        var s = i[xs] || n[xs];s && "0s" !== s && (e = $s);
	      }return e && (this.typeCache[t] = e), e;
	    }
	  }, Ts.setupCssCb = function (t, e) {
	    this.pendingCssEvent = t;var i = this,
	        n = this.el,
	        r = this.pendingCssCb = function (s) {
	      s.target === n && (Q(n, t, r), i.pendingCssEvent = i.pendingCssCb = null, !i.pendingJsCb && e && e());
	    };q(n, t, r);
	  };var Ns = { priority: Er, update: function update(t, e) {
	      var i = this.el,
	          n = gt(this.vm.$options, "transitions", t);t = t || "v", i.__v_trans = new Ee(i, t, n, this.vm), e && X(i, e + "-transition"), Z(i, t + "-transition");
	    } },
	      js = { style: es, "class": ps, component: ds, prop: ys, transition: Ns },
	      Es = /^v-bind:|^:/,
	      Fs = /^v-on:|^@/,
	      Ss = /^v-([^:]+)(?:$|:(.*)$)/,
	      Ds = /\.[^\.]+/g,
	      Ps = /^(v-bind:|:)?transition$/,
	      Rs = 1e3,
	      Ls = 2e3;Ze.terminal = !0;var Hs = /[^\w\-:\.]/,
	      Ms = (0, _freeze2.default)({ compile: Se, compileAndLinkProps: He, compileRoot: Me, transclude: ni, resolveSlots: ai }),
	      Ws = /^v-on:|^@/;fi.prototype._bind = function () {
	    var t = this.name,
	        e = this.descriptor;if (("cloak" !== t || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	      var i = e.attr || "v-" + t;this.el.removeAttribute(i);
	    }var n = e.def;if ("function" == typeof n ? this.update = n : v(this, n), this._setupParams(), this.bind && this.bind(), this._bound = !0, this.literal) this.update && this.update(e.raw);else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	      var r = this;this.update ? this._update = function (t, e) {
	        r._locked || r.update(t, e);
	      } : this._update = ui;var s = this._preProcess ? p(this._preProcess, this) : null,
	          o = this._postProcess ? p(this._postProcess, this) : null,
	          a = this._watcher = new zt(this.vm, this.expression, this._update, { filters: this.filters, twoWay: this.twoWay, deep: this.deep, preProcess: s, postProcess: o, scope: this._scope });this.afterBind ? this.afterBind() : this.update && this.update(a.value);
	    }
	  }, fi.prototype._setupParams = function () {
	    if (this.params) {
	      var t = this.params;this.params = (0, _create2.default)(null);for (var e, i, n, r = t.length; r--;) {
	        e = u(t[r]), n = l(e), i = W(this.el, e), null != i ? this._setupParamWatcher(n, i) : (i = M(this.el, e), null != i && (this.params[n] = "" === i ? !0 : i));
	      }
	    }
	  }, fi.prototype._setupParamWatcher = function (t, e) {
	    var i = this,
	        n = !1,
	        r = (this._scope || this.vm).$watch(e, function (e, r) {
	      if (i.params[t] = e, n) {
	        var s = i.paramWatchers && i.paramWatchers[t];s && s.call(i, e, r);
	      } else n = !0;
	    }, { immediate: !0, user: !1 });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r);
	  }, fi.prototype._checkStatement = function () {
	    var t = this.expression;if (t && this.acceptStatement && !Mt(t)) {
	      var e = Ht(t).get,
	          i = this._scope || this.vm,
	          n = function n(t) {
	        i.$event = t, e.call(i, i), i.$event = null;
	      };return this.filters && (n = i._applyFilters(n, null, this.filters)), this.update(n), !0;
	    }
	  }, fi.prototype.set = function (t) {
	    this.twoWay && this._withLock(function () {
	      this._watcher.set(t);
	    });
	  }, fi.prototype._withLock = function (t) {
	    var e = this;e._locked = !0, t.call(e), Ui(function () {
	      e._locked = !1;
	    });
	  }, fi.prototype.on = function (t, e, i) {
	    q(this.el, t, e, i), (this._listeners || (this._listeners = [])).push([t, e]);
	  }, fi.prototype._teardown = function () {
	    if (this._bound) {
	      this._bound = !1, this.unbind && this.unbind(), this._watcher && this._watcher.teardown();var t,
	          e = this._listeners;if (e) for (t = e.length; t--;) {
	        Q(this.el, e[t][0], e[t][1]);
	      }var i = this._paramUnwatchFns;if (i) for (t = i.length; t--;) {
	        i[t]();
	      }this.vm = this.el = this._watcher = this._listeners = null;
	    }
	  };var Is = /[^|]\|[^|]/;xt(yi), li(yi), ci(yi), pi(yi), di(yi), vi(yi), mi(yi), gi(yi), _i(yi);var Bs = { priority: Lr, params: ["name"], bind: function bind() {
	      var t = this.params.name || "default",
	          e = this.vm._slotContents && this.vm._slotContents[t];e && e.hasChildNodes() ? this.compile(e.cloneNode(!0), this.vm._context, this.vm) : this.fallback();
	    }, compile: function compile(t, e, i) {
	      if (t && e) {
	        if (this.el.hasChildNodes() && 1 === t.childNodes.length && 1 === t.childNodes[0].nodeType && t.childNodes[0].hasAttribute("v-if")) {
	          var n = document.createElement("template");n.setAttribute("v-else", ""), n.innerHTML = this.el.innerHTML, n._context = this.vm, t.appendChild(n);
	        }var r = i ? i._scope : this._scope;this.unlink = e.$compile(t, i, r, this._frag);
	      }t ? J(this.el, t) : z(this.el);
	    }, fallback: function fallback() {
	      this.compile(Y(this.el, !0), this.vm);
	    }, unbind: function unbind() {
	      this.unlink && this.unlink();
	    } },
	      Vs = { priority: Dr, params: ["name"], paramWatchers: { name: function name(t) {
	        Wr.remove.call(this), t && this.insert(t);
	      } }, bind: function bind() {
	      this.anchor = nt("v-partial"), J(this.el, this.anchor), this.insert(this.params.name);
	    }, insert: function insert(t) {
	      var e = gt(this.vm.$options, "partials", t, !0);e && (this.factory = new re(this.vm, e), Wr.insert.call(this));
	    }, unbind: function unbind() {
	      this.frag && this.frag.destroy();
	    } },
	      zs = { slot: Bs, partial: Vs },
	      Us = Mr._postProcess,
	      Js = /(\d{3})(?=\d)/g,
	      qs = { orderBy: Ci, filterBy: wi, limitBy: bi, json: { read: function read(t, e) {
	        return "string" == typeof t ? t : (0, _stringify2.default)(t, null, Number(e) || 2);
	      }, write: function write(t) {
	        try {
	          return JSON.parse(t);
	        } catch (e) {
	          return t;
	        }
	      } }, capitalize: function capitalize(t) {
	      return t || 0 === t ? (t = t.toString(), t.charAt(0).toUpperCase() + t.slice(1)) : "";
	    }, uppercase: function uppercase(t) {
	      return t || 0 === t ? t.toString().toUpperCase() : "";
	    }, lowercase: function lowercase(t) {
	      return t || 0 === t ? t.toString().toLowerCase() : "";
	    }, currency: function currency(t, e) {
	      if (t = parseFloat(t), !isFinite(t) || !t && 0 !== t) return "";e = null != e ? e : "$";var i = Math.abs(t).toFixed(2),
	          n = i.slice(0, -3),
	          r = n.length % 3,
	          s = r > 0 ? n.slice(0, r) + (n.length > 3 ? "," : "") : "",
	          o = i.slice(-3),
	          a = 0 > t ? "-" : "";return a + e + s + n.slice(r).replace(Js, "$1,") + o;
	    }, pluralize: function pluralize(t) {
	      var e = d(arguments, 1);return e.length > 1 ? e[t % 10 - 1] || e[e.length - 1] : e[0] + (1 === t ? "" : "s");
	    }, debounce: function debounce(t, e) {
	      return t ? (e || (e = 300), y(t, e)) : void 0;
	    } };return ki(yi), yi.version = "1.0.21", setTimeout(function () {
	    _n.devtools && Pi && Pi.emit("init", yi);
	  }, 0), yi;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof2 = __webpack_require__(4);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
	!function (a, b) {
	  "object" == ( false ? "undefined" : (0, _typeof3.default)(module)) && "object" == (0, _typeof3.default)(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	}("undefined" != typeof window ? window : undefined, function (a, b) {
	  var c = [],
	      d = c.slice,
	      e = c.concat,
	      f = c.push,
	      g = c.indexOf,
	      h = {},
	      i = h.toString,
	      j = h.hasOwnProperty,
	      k = {},
	      l = "1.11.3",
	      m = function m(a, b) {
	    return new m.fn.init(a, b);
	  },
	      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      o = /^-ms-/,
	      p = /-([\da-z])/gi,
	      q = function q(a, b) {
	    return b.toUpperCase();
	  };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
	      return d.call(this);
	    }, get: function get(a) {
	      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
	    }, each: function each(a, b) {
	      return m.each(this, a, b);
	    }, map: function map(a) {
	      return this.pushStack(m.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(d.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor(null);
	    }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : (0, _typeof3.default)(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
	      if (null != (e = arguments[h])) for (d in e) {
	        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
	      }
	    }return g;
	  }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === m.type(a);
	    }, isArray: Array.isArray || function (a) {
	      return "array" === m.type(a);
	    }, isWindow: function isWindow(a) {
	      return null != a && a == a.window;
	    }, isNumeric: function isNumeric(a) {
	      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) {
	        return !1;
	      }return !0;
	    }, isPlainObject: function isPlainObject(a) {
	      var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
	        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
	      } catch (c) {
	        return !1;
	      }if (k.ownLast) for (b in a) {
	        return j.call(a, b);
	      }for (b in a) {}return void 0 === b || j.call(a, b);
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a);
	    }, globalEval: function globalEval(b) {
	      b && m.trim(b) && (a.execScript || function (b) {
	        a.eval.call(a, b);
	      })(b);
	    }, camelCase: function camelCase(a) {
	      return a.replace(o, "ms-").replace(p, q);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b, c) {
	      var d,
	          e = 0,
	          f = a.length,
	          g = r(a);if (c) {
	        if (g) {
	          for (; f > e; e++) {
	            if (d = b.apply(a[e], c), d === !1) break;
	          }
	        } else for (e in a) {
	          if (d = b.apply(a[e], c), d === !1) break;
	        }
	      } else if (g) {
	        for (; f > e; e++) {
	          if (d = b.call(a[e], e, a[e]), d === !1) break;
	        }
	      } else for (e in a) {
	        if (d = b.call(a[e], e, a[e]), d === !1) break;
	      }return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(n, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      var d;if (b) {
	        if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
	          if (c in b && b[c] === a) return c;
	        }
	      }return -1;
	    }, merge: function merge(a, b) {
	      var c = +b.length,
	          d = 0,
	          e = a.length;while (c > d) {
	        a[e++] = b[d++];
	      }if (c !== c) while (void 0 !== b[d]) {
	        a[e++] = b[d++];
	      }return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
	        d = !b(a[f], f), d !== h && e.push(a[f]);
	      }return e;
	    }, map: function map(a, b, c) {
	      var d,
	          f = 0,
	          g = a.length,
	          h = r(a),
	          i = [];if (h) for (; g > f; f++) {
	        d = b(a[f], f, c), null != d && i.push(d);
	      } else for (f in a) {
	        d = b(a[f], f, c), null != d && i.push(d);
	      }return e.apply([], i);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
	        return a.apply(b || this, c.concat(d.call(arguments)));
	      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
	    }, now: function now() {
	      return +new Date();
	    }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
	    h["[object " + b + "]"] = b.toLowerCase();
	  });function r(a) {
	    var b = "length" in a && a.length,
	        c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	  }var s = function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ha(),
	        z = ha(),
	        A = ha(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = 1 << 31,
	        D = {}.hasOwnProperty,
	        E = [],
	        F = E.pop,
	        G = E.push,
	        H = E.push,
	        I = E.slice,
	        J = function J(a, b) {
	      for (var c = 0, d = a.length; d > c; c++) {
	        if (a[c] === b) return c;
	      }return -1;
	    },
	        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        L = "[\\x20\\t\\r\\n\\f]",
	        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        N = M.replace("w", "w#"),
	        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
	        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
	        Q = new RegExp(L + "+", "g"),
	        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
	        S = new RegExp("^" + L + "*," + L + "*"),
	        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
	        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
	        V = new RegExp(P),
	        W = new RegExp("^" + N + "$"),
	        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
	        Y = /^(?:input|select|textarea|button)$/i,
	        Z = /^h\d$/i,
	        $ = /^[^{]+\{\s*\[native \w/,
	        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        aa = /[+~]/,
	        ba = /'|\\/g,
	        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
	        da = function da(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        ea = function ea() {
	      m();
	    };try {
	      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	    } catch (fa) {
	      H = { apply: E.length ? function (a, b) {
	          G.apply(a, I.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
	        } };
	    }function ga(a, b, d, e) {
	      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
	        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
	          if (9 === k) {
	            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
	          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
	        } else {
	          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
	        }if (c.qsa && (!q || !q.test(a))) {
	          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
	            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
	              o[l] = s + ra(o[l]);
	            }w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
	          }if (x) try {
	            return H.apply(d, w.querySelectorAll(x)), d;
	          } catch (y) {} finally {
	            r || b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(R, "$1"), b, d, e);
	    }function ha() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ia(a) {
	      return a[u] = !0, a;
	    }function ja(a) {
	      var b = n.createElement("div");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ka(a, b) {
	      var c = a.split("|"),
	          e = a.length;while (e--) {
	        d.attrHandle[c[e]] = b;
	      }
	    }function la(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
	        if (c === b) return -1;
	      }return a ? 1 : -1;
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function na(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function oa(a) {
	      return ia(function (b) {
	        return b = +b, ia(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) {
	            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	          }
	        });
	      });
	    }function pa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = ga.support = {}, f = ga.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
	    }, m = ga.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ja(function (a) {
	        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
	        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(ca, da);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(ca, da);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) {
	            1 === c.nodeType && d.push(c);
	          }return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        return p ? b.getElementsByClassName(a) : void 0;
	      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ja(function (a) {
	        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
	        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) {
	          if (b === a) return !0;
	        }return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            h = [a],
	            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
	          h.unshift(c);
	        }c = b;while (c = c.parentNode) {
	          i.unshift(c);
	        }while (h[d] === i[d]) {
	          d++;
	        }return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
	      }, g) : n;
	    }, ga.matches = function (a, b) {
	      return ga(a, null, null, b);
	    }, ga.matchesSelector = function (a, b) {
	      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return ga(b, n, null, [a]).length > 0;
	    }, ga.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, ga.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, ga.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, ga.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
	        while (b = a[f++]) {
	          b === a[f] && (e = d.push(f));
	        }while (e--) {
	          a.splice(d[e], 1);
	        }
	      }return k = null, a;
	    }, e = ga.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
	            c += e(a);
	          }
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) {
	        c += e(b);
	      }return c;
	    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h;if (q) {
	              if (f) {
	                while (p) {
	                  l = b;while (l = l[p]) {
	                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
	                  }o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
	                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
	                  if (1 === l.nodeType && ++m && l === b) {
	                    k[a] = [w, n, m];break;
	                  }
	                }
	              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
	                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
	              }return m -= e, m === d || m % d === 0 && m / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) {
	              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
	            }
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ia(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) {
	              (f = g[h]) && (a[h] = !(b[h] = f));
	            }
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ia(function (a) {
	          return function (b) {
	            return ga(a, b).length > 0;
	          };
	        }), contains: ia(function (a) {
	          return a = a.replace(ca, da), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ia(function (a) {
	          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
	            var c;do {
	              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
	            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: function enabled(a) {
	          return a.disabled === !1;
	        }, disabled: function disabled(a) {
	          return a.disabled === !0;
	        }, checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) {
	            if (a.nodeType < 6) return !1;
	          }return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return Z.test(a.nodeName);
	        }, input: function input(a) {
	          return Y.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: oa(function () {
	          return [0];
	        }), last: oa(function (a, b) {
	          return [b - 1];
	        }), eq: oa(function (a, b, c) {
	          return [0 > c ? c + b : c];
	        }), even: oa(function (a, b) {
	          for (var c = 0; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), odd: oa(function (a, b) {
	          for (var c = 1; b > c; c += 2) {
	            a.push(c);
	          }return a;
	        }), lt: oa(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; --d >= 0;) {
	            a.push(d);
	          }return a;
	        }), gt: oa(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; ++d < b;) {
	            a.push(d);
	          }return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	      d.pseudos[b] = ma(b);
	    }for (b in { submit: !0, reset: !0 }) {
	      d.pseudos[b] = na(b);
	    }function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
	          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
	        }if (!c) break;
	      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
	    };function ra(a) {
	      for (var b = 0, c = a.length, d = ""; c > b; b++) {
	        d += a[b].value;
	      }return d;
	    }function sa(a, b, c) {
	      var d = b.dir,
	          e = c && "parentNode" === d,
	          f = x++;return b.first ? function (b, c, f) {
	        while (b = b[d]) {
	          if (1 === b.nodeType || e) return a(b, c, f);
	        }
	      } : function (b, c, g) {
	        var h,
	            i,
	            j = [w, f];if (g) {
	          while (b = b[d]) {
	            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
	          }
	        } else while (b = b[d]) {
	          if (1 === b.nodeType || e) {
	            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
	          }
	        }
	      };
	    }function ta(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) {
	          if (!a[e](b, c, d)) return !1;
	        }return !0;
	      } : a[0];
	    }function ua(a, b, c) {
	      for (var d = 0, e = b.length; e > d; d++) {
	        ga(a, b[d], c);
	      }return c;
	    }function va(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
	        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
	      }return g;
	    }function wa(a, b, c, d, e, f) {
	      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : va(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
	          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
	            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	          }
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) {
	                (l = r[k]) && j.push(q[k] = l);
	              }e(null, r = [], j, i);
	            }k = r.length;while (k--) {
	              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	            }
	          }
	        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
	      });
	    }function xa(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
	        return a === b;
	      }, h, !0), l = sa(function (a) {
	        return J(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; f > i; i++) {
	        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
	          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
	            for (e = ++i; f > e; e++) {
	              if (d.relative[a[e].type]) break;
	            }return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
	          }m.push(c);
	        }
	      }return ta(m);
	    }function ya(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            m,
	            o,
	            p = 0,
	            q = "0",
	            r = _f && [],
	            s = [],
	            t = j,
	            u = _f || e && d.find.TAG("*", k),
	            v = w += null == t ? 1 : Math.random() || .1,
	            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
	          if (e && l) {
	            m = 0;while (o = a[m++]) {
	              if (o(l, g, h)) {
	                i.push(l);break;
	              }
	            }k && (w = v);
	          }c && ((l = !o && l) && p--, _f && r.push(l));
	        }if (p += q, c && q !== p) {
	          m = 0;while (o = b[m++]) {
	            o(r, s, g, h);
	          }if (_f) {
	            if (p > 0) while (q--) {
	              r[q] || s[q] || (s[q] = F.call(i));
	            }s = va(s);
	          }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
	        }return k && (w = v, j = t), r;
	      };return c ? ia(f) : f;
	    }return h = ga.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) {
	          f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
	        }f = A(a, ya(e, d)), f.selector = a;
	      }return f;
	    }, i = ga.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
	        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
	          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
	            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
	          }
	        }
	      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("div"));
	    }), ja(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ka("type|href|height|width", function (a, b, c) {
	      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ja(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ka("value", function (a, b, c) {
	      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	    }), ja(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ka(K, function (a, b, c) {
	      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), ga;
	  }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
	      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
	    if (m.isFunction(b)) return m.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    });if (b.nodeType) return m.grep(a, function (a) {
	      return a === b !== c;
	    });if ("string" == typeof b) {
	      if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
	    }return m.grep(a, function (a) {
	      return m.inArray(a, b) >= 0 !== c;
	    });
	  }m.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, m.fn.extend({ find: function find(a) {
	      var b,
	          c = [],
	          d = this,
	          e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
	        for (b = 0; e > b; b++) {
	          if (m.contains(d[b], this)) return !0;
	        }
	      }));for (b = 0; e > b; b++) {
	        m.find(a, d[b], c);
	      }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
	    }, filter: function filter(a) {
	      return this.pushStack(w(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(w(this, a || [], !0));
	    }, is: function is(a) {
	      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
	    } });var x,
	      y = a.document,
	      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      A = m.fn.init = function (a, b) {
	    var c, d;if (!a) return this;if ("string" == typeof a) {
	      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
	        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
	          m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
	        }return this;
	      }if (d = y.getElementById(c[2]), d && d.parentNode) {
	        if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
	      }return this.context = y, this.selector = a, this;
	    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
	  };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
	      C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
	      var d = [],
	          e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
	        1 === e.nodeType && d.push(e), e = e[b];
	      }return d;
	    }, sibling: function sibling(a, b) {
	      for (var c = []; a; a = a.nextSibling) {
	        1 === a.nodeType && a !== b && c.push(a);
	      }return c;
	    } }), m.fn.extend({ has: function has(a) {
	      var b,
	          c = m(a, this),
	          d = c.length;return this.filter(function () {
	        for (b = 0; d > b; b++) {
	          if (m.contains(this, c[b])) return !0;
	        }
	      });
	    }, closest: function closest(a, b) {
	      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
	        for (c = this[d]; c && c !== b; c = c.parentNode) {
	          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
	            f.push(c);break;
	          }
	        }
	      }return this.pushStack(f.length > 1 ? m.unique(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function D(a, b) {
	    do {
	      a = a[b];
	    } while (a && 1 !== a.nodeType);return a;
	  }m.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return m.dir(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return m.dir(a, "parentNode", c);
	    }, next: function next(a) {
	      return D(a, "nextSibling");
	    }, prev: function prev(a) {
	      return D(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return m.dir(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return m.dir(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return m.dir(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return m.dir(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return m.sibling((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return m.sibling(a.firstChild);
	    }, contents: function contents(a) {
	      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
	    } }, function (a, b) {
	    m.fn[a] = function (c, d) {
	      var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
	    };
	  });var E = /\S+/g,
	      F = {};function G(a) {
	    var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }m.Callbacks = function (a) {
	    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h = [],
	        i = !a.once && [],
	        j = function j(l) {
	      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
	        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
	          c = !1;break;
	        }
	      }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
	    },
	        k = { add: function add() {
	        if (h) {
	          var d = h.length;!function f(b) {
	            m.each(b, function (b, c) {
	              var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
	            });
	          }(arguments), b ? e = h.length : c && (g = d, j(c));
	        }return this;
	      }, remove: function remove() {
	        return h && m.each(arguments, function (a, c) {
	          var d;while ((d = m.inArray(c, h, d)) > -1) {
	            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
	          }
	        }), this;
	      }, has: function has(a) {
	        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
	      }, empty: function empty() {
	        return h = [], e = 0, this;
	      }, disable: function disable() {
	        return h = i = c = void 0, this;
	      }, disabled: function disabled() {
	        return !h;
	      }, lock: function lock() {
	        return i = void 0, c || k.disable(), this;
	      }, locked: function locked() {
	        return !i;
	      }, fireWith: function fireWith(a, c) {
	        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
	      }, fire: function fire() {
	        return k.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!d;
	      } };return k;
	  }, m.extend({ Deferred: function Deferred(a) {
	      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
	          c = "pending",
	          d = { state: function state() {
	          return c;
	        }, always: function always() {
	          return e.done(arguments).fail(arguments), this;
	        }, then: function then() {
	          var a = arguments;return m.Deferred(function (c) {
	            m.each(b, function (b, f) {
	              var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
	                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? m.extend(a, d) : d;
	        } },
	          e = {};return d.pipe = d.then, m.each(b, function (a, f) {
	        var g = f[2],
	            h = f[3];d[f[1]] = g.add, h && g.add(function () {
	          c = h;
	        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
	          return e[f[0] + "With"](this === e ? d : this, arguments), this;
	        }, e[f[0] + "With"] = g.fireWith;
	      }), d.promise(e), a && a.call(e, e), e;
	    }, when: function when(a) {
	      var b = 0,
	          c = d.call(arguments),
	          e = c.length,
	          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
	          g = 1 === f ? a : m.Deferred(),
	          h = function h(a, b, c) {
	        return function (e) {
	          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
	        };
	      },
	          i,
	          j,
	          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
	        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
	      }return f || g.resolveWith(k, c), g.promise();
	    } });var H;m.fn.ready = function (a) {
	    return m.ready.promise().done(a), this;
	  }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? m.readyWait++ : m.ready(!0);
	    }, ready: function ready(a) {
	      if (a === !0 ? ! --m.readyWait : !m.isReady) {
	        if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
	      }
	    } });function I() {
	    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
	  }function J() {
	    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
	  }m.ready.promise = function (b) {
	    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
	      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
	        c = null == a.frameElement && y.documentElement;
	      } catch (d) {}c && c.doScroll && !function e() {
	        if (!m.isReady) {
	          try {
	            c.doScroll("left");
	          } catch (a) {
	            return setTimeout(e, 50);
	          }I(), m.ready();
	        }
	      }();
	    }return H.promise(b);
	  };var K = "undefined",
	      L;for (L in m(k)) {
	    break;
	  }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
	    var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), (0, _typeof3.default)(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
	  }), function () {
	    var a = y.createElement("div");if (null == k.deleteExpando) {
	      k.deleteExpando = !0;try {
	        delete a.test;
	      } catch (b) {
	        k.deleteExpando = !1;
	      }
	    }a = null;
	  }(), m.acceptData = function (a) {
	    var b = m.noData[(a.nodeName + " ").toLowerCase()],
	        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
	  };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      N = /([A-Z])/g;function O(a, b, c) {
	    if (void 0 === c && 1 === a.nodeType) {
	      var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
	        try {
	          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
	        } catch (e) {}m.data(a, b, c);
	      } else c = void 0;
	    }return c;
	  }function P(a) {
	    var b;for (b in a) {
	      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
	    }return !0;
	  }function Q(a, b, d, e) {
	    if (m.acceptData(a)) {
	      var f,
	          g,
	          h = m.expando,
	          i = a.nodeType,
	          j = i ? m.cache : a,
	          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
	    }
	  }function R(a, b, c) {
	    if (m.acceptData(a)) {
	      var d,
	          e,
	          f = a.nodeType,
	          g = f ? m.cache : a,
	          h = f ? a[m.expando] : m.expando;if (g[h]) {
	        if (b && (d = c ? g[h] : g[h].data)) {
	          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
	            delete d[b[e]];
	          }if (c ? !P(d) : !m.isEmptyObject(d)) return;
	        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
	      }
	    }
	  }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
	      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
	    }, data: function data(a, b, c) {
	      return Q(a, b, c);
	    }, removeData: function removeData(a, b) {
	      return R(a, b);
	    }, _data: function _data(a, b, c) {
	      return Q(a, b, c, !0);
	    }, _removeData: function _removeData(a, b) {
	      return R(a, b, !0);
	    } }), m.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
	          c = g.length;while (c--) {
	            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
	          }m._data(f, "parsedAttrs", !0);
	        }return e;
	      }return "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) ? this.each(function () {
	        m.data(this, a);
	      }) : arguments.length > 1 ? this.each(function () {
	        m.data(this, a, b);
	      }) : f ? O(f, a, m.data(f, a)) : void 0;
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        m.removeData(this, a);
	      });
	    } }), m.extend({ queue: function queue(a, b, c) {
	      var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = m.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = m._queueHooks(a, b),
	          g = function g() {
	        m.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
	          m._removeData(a, b + "queue"), m._removeData(a, c);
	        }) });
	    } }), m.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        m.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = m.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
	        c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
	      }return h(), e.promise(b);
	    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      T = ["Top", "Right", "Bottom", "Left"],
	      U = function U(a, b) {
	    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
	  },
	      V = m.access = function (a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === m.type(c)) {
	      e = !0;for (h in c) {
	        m.access(a, b, h, c[h], !0, f, g);
	      }
	    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
	      return j.call(m(a), c);
	    })), b)) for (; i > h; h++) {
	      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
	    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  },
	      W = /^(?:checkbox|radio)$/i;!function () {
	    var a = y.createElement("input"),
	        b = y.createElement("div"),
	        c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
	      k.noCloneEvent = !1;
	    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
	      k.deleteExpando = !0;try {
	        delete b.test;
	      } catch (d) {
	        k.deleteExpando = !1;
	      }
	    }
	  }(), function () {
	    var b,
	        c,
	        d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
	      c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
	    }d = null;
	  }();var X = /^(?:input|select|textarea)$/i,
	      Y = /^key/,
	      Z = /^(?:mouse|pointer|contextmenu)|click/,
	      $ = /^(?:focusinfocus|focusoutblur)$/,
	      _ = /^([^.]*)(?:\.(.+)|)$/;function aa() {
	    return !0;
	  }function ba() {
	    return !1;
	  }function ca() {
	    try {
	      return y.activeElement;
	    } catch (a) {}
	  }m.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          n,
	          o,
	          p,
	          q,
	          r = m._data(a);if (r) {
	        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
	          return (typeof m === "undefined" ? "undefined" : (0, _typeof3.default)(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
	        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
	          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
	        }a = null;
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          n,
	          o,
	          p,
	          q,
	          r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
	        b = (b || "").match(E) || [""], j = b.length;while (j--) {
	          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
	            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
	              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
	            }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
	          } else for (o in k) {
	            m.event.remove(a, o + b[j], c, d, !0);
	          }
	        }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
	      }
	    }, trigger: function trigger(b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          k,
	          l,
	          n,
	          o = [d || y],
	          p = j.call(b, "type") ? b.type : b,
	          q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
	        if (!e && !k.noBubble && !m.isWindow(d)) {
	          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
	            o.push(h), l = h;
	          }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
	        }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
	          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
	        }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
	          l = d[g], l && (d[g] = null), m.event.triggered = p;try {
	            d[p]();
	          } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
	        }return b.result;
	      }
	    }, dispatch: function dispatch(a) {
	      a = m.event.fix(a);var b,
	          c,
	          e,
	          f,
	          g,
	          h = [],
	          i = d.call(arguments),
	          j = (m._data(this, "events") || {})[a.type] || [],
	          k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
	        h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
	          a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
	            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
	          }
	        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
	        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
	          for (e = [], f = 0; h > f; f++) {
	            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
	          }e.length && g.push({ elem: i, handlers: e });
	        }
	      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
	    }, fix: function fix(a) {
	      if (a[m.expando]) return a;var b,
	          c,
	          d,
	          e = a.type,
	          f = a,
	          g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
	        c = d[b], a[c] = f[c];
	      }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
	        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
	      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
	        var c,
	            d,
	            e,
	            f = b.button,
	            g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
	      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          if (this !== ca() && this.focus) try {
	            return this.focus(), !1;
	          } catch (a) {}
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
	        }, _default: function _default(a) {
	          return m.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } }, simulate: function simulate(a, b, c, d) {
	      var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
	    } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c, !1);
	  } : function (a, b, c) {
	    var d = "on" + b;a.detachEvent && ((0, _typeof3.default)(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
	  }, m.Event = function (a, b) {
	    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
	  }, m.Event.prototype = { isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
	      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
	        var b = a.target,
	            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
	          a._submit_bubble = !0;
	        }), m._data(c, "submitBubbles", !0));
	      });
	    }, postDispatch: function postDispatch(a) {
	      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
	    }, teardown: function teardown() {
	      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
	    } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
	      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
	        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
	      }), m.event.add(this, "click._change", function (a) {
	        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
	      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
	        var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
	          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
	        }), m._data(b, "changeBubbles", !0));
	      });
	    }, handle: function handle(a) {
	      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
	    }, teardown: function teardown() {
	      return m.event.remove(this, "._change"), !X.test(this.nodeName);
	    } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      m.event.simulate(b, a.target, m.event.fix(a), !0);
	    };m.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
	      } };
	  }), m.fn.extend({ on: function on(a, b, c, d, e) {
	      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a))) {
	        "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
	          this.on(f, b, c, a[f], e);
	        }return this;
	      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
	        return m().off(a), g.apply(this, arguments);
	      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
	        m.event.add(this, a, d, c, b);
	      });
	    }, one: function one(a, b, c, d) {
	      return this.on(a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a))) {
	        for (e in a) {
	          this.off(e, b, a[e]);
	        }return this;
	      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
	        m.event.remove(this, a, c, b);
	      });
	    }, trigger: function trigger(a, b) {
	      return this.each(function () {
	        m.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
	    } });function da(a) {
	    var b = ea.split("|"),
	        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
	      c.createElement(b.pop());
	    }return c;
	  }var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	      fa = / jQuery\d+="(?:null|\d+)"/g,
	      ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
	      ha = /^\s+/,
	      ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      ja = /<([\w:]+)/,
	      ka = /<tbody/i,
	      la = /<|&#?\w+;/,
	      ma = /<(?:script|style|link)/i,
	      na = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      oa = /^$|\/(?:java|ecma)script/i,
	      pa = /^true\/(.*)/,
	      qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	      ra = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
	      sa = da(y),
	      ta = sa.appendChild(y.createElement("div"));ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;function ua(a, b) {
	    var c,
	        d,
	        e = 0,
	        f = (0, _typeof3.default)(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : (0, _typeof3.default)(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
	      !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
	    }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
	  }function va(a) {
	    W.test(a.type) && (a.defaultChecked = a.checked);
	  }function wa(a, b) {
	    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	  }function xa(a) {
	    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
	  }function ya(a) {
	    var b = pa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function za(a, b) {
	    for (var c, d = 0; null != (c = a[d]); d++) {
	      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
	    }
	  }function Aa(a, b) {
	    if (1 === b.nodeType && m.hasData(a)) {
	      var c,
	          d,
	          e,
	          f = m._data(a),
	          g = m._data(b, f),
	          h = f.events;if (h) {
	        delete g.handle, g.events = {};for (c in h) {
	          for (d = 0, e = h[c].length; e > d; d++) {
	            m.event.add(b, c, h[c][d]);
	          }
	        }
	      }g.data && (g.data = m.extend({}, g.data));
	    }
	  }function Ba(a, b) {
	    var c, d, e;if (1 === b.nodeType) {
	      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
	        e = m._data(b);for (d in e.events) {
	          m.removeEvent(b, d, e.handle);
	        }b.removeAttribute(m.expando);
	      }"script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	    }
	  }m.extend({ clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) {
	        d[g] && Ba(e, d[g]);
	      }if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) {
	        Aa(e, d[g]);
	      } else Aa(a, f);return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f;
	    }, buildFragment: function buildFragment(a, b, c, d) {
	      for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) {
	        if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (la.test(f)) {
	          h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];while (e--) {
	            h = h.lastChild;
	          }if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
	            f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
	              m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
	            }
	          }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
	            h.removeChild(h.firstChild);
	          }h = o.lastChild;
	        } else p.push(b.createTextNode(f));
	      }h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;while (f = p[q++]) {
	        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
	          e = 0;while (f = h[e++]) {
	            oa.test(f.type || "") && c.push(f);
	          }
	        }
	      }return h = null, o;
	    }, cleanData: function cleanData(a, b) {
	      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
	        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
	          if (g.events) for (e in g.events) {
	            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
	          }j[f] && (delete j[f], l ? delete d[i] : (0, _typeof3.default)(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
	        }
	      }
	    } }), m.fn.extend({ text: function text(a) {
	      return V(this, function (a) {
	        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = wa(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = wa(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, remove: function remove(a, b) {
	      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
	        b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
	      }return this;
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) {
	        1 === a.nodeType && m.cleanData(ua(a, !1));while (a.firstChild) {
	          a.removeChild(a.firstChild);
	        }a.options && m.nodeName(a, "select") && (a.options.length = 0);
	      }return this;
	    }, clone: function clone(a, b) {
	      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
	        return m.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return V(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
	          a = a.replace(ia, "<$1></$2>");try {
	            for (; d > c; c++) {
	              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
	            }b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = arguments[0];return this.domManip(arguments, function (b) {
	        a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
	      }), a && (a.length || a.nodeType) ? this : this.remove();
	    }, detach: function detach(a) {
	      return this.remove(a, !0);
	    }, domManip: function domManip(a, b) {
	      a = e.apply([], a);var c,
	          d,
	          f,
	          g,
	          h,
	          i,
	          j = 0,
	          l = this.length,
	          n = this,
	          o = l - 1,
	          p = a[0],
	          q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
	        var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
	      });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
	        for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) {
	          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
	        }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) {
	          d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
	        }i = c = null;
	      }return this;
	    } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    m.fn[a] = function (a) {
	      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
	        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
	      }return this.pushStack(e);
	    };
	  });var Ca,
	      Da = {};function Ea(b, c) {
	    var d,
	        e = m(c.createElement(b)).appendTo(c.body),
	        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
	  }function Fa(a) {
	    var b = y,
	        c = Da[a];return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c;
	  }!function () {
	    var a;k.shrinkWrapBlocks = function () {
	      if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), (0, _typeof3.default)(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
	    };
	  }();var Ga = /^margin/,
	      Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
	      Ia,
	      Ja,
	      Ka = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ia = function Ia(b) {
	    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	  }, Ja = function Ja(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
	  }) : y.documentElement.currentStyle && (Ia = function Ia(a) {
	    return a.currentStyle;
	  }, Ja = function Ja(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
	  });function La(a, b) {
	    return { get: function get() {
	        var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }!function () {
	    var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
	      (function () {
	        var i = function i() {
	          var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
	        };
	
	        c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
	            return null == g && i(), g;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == f && i(), f;
	          }, pixelPosition: function pixelPosition() {
	            return null == e && i(), e;
	          }, reliableMarginRight: function reliableMarginRight() {
	            return null == h && i(), h;
	          } });
	      })();
	    }
	  }(), m.swap = function (a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) {
	      g[f] = a.style[f], a.style[f] = b[f];
	    }e = c.apply(a, d || []);for (f in b) {
	      a.style[f] = g[f];
	    }return e;
	  };var Ma = /alpha\([^)]*\)/i,
	      Na = /opacity\s*=\s*([^)]*)/,
	      Oa = /^(none|table(?!-c[ea]).+)/,
	      Pa = new RegExp("^(" + S + ")(.*)$", "i"),
	      Qa = new RegExp("^([+-])=(" + S + ")", "i"),
	      Ra = { position: "absolute", visibility: "hidden", display: "block" },
	      Sa = { letterSpacing: "0", fontWeight: "400" },
	      Ta = ["Webkit", "O", "Moz", "ms"];function Ua(a, b) {
	    if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
	        d = b,
	        e = Ta.length;while (e--) {
	      if (b = Ta[e] + c, b in a) return b;
	    }return d;
	  }function Va(a, b) {
	    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
	      d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
	    }for (g = 0; h > g; g++) {
	      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
	    }return a;
	  }function Wa(a, b, c) {
	    var d = Pa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	  }function Xa(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
	      "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
	    }return g;
	  }function Ya(a, b, c) {
	    var d = !0,
	        e = "width" === b ? a.offsetWidth : a.offsetHeight,
	        f = Ia(a),
	        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
	      if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	    }return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
	  }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = Ja(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = m.camelCase(b),
	            i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : (0, _typeof3.default)(c), "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
	          i[b] = c;
	        } catch (j) {}
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
	    } }), m.each(["height", "width"], function (a, b) {
	    m.cssHooks[b] = { get: function get(a, c, d) {
	        return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
	          return Ya(a, b, d);
	        }) : Ya(a, b, d) : void 0;
	      }, set: function set(a, c, d) {
	        var e = d && Ia(a);return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
	      } };
	  }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
	      return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
	    }, set: function set(a, b) {
	      var c = a.style,
	          d = a.currentStyle,
	          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
	          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
	    } }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
	    return b ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"]) : void 0;
	  }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    m.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
	          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
	        }return e;
	      } }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
	  }), m.fn.extend({ css: function css(a, b) {
	      return V(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (m.isArray(b)) {
	          for (d = Ia(a), e = b.length; e > g; g++) {
	            f[b[g]] = m.css(a, b[g], !1, d);
	          }return f;
	        }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
	      }, a, b, arguments.length > 1);
	    }, show: function show() {
	      return Va(this, !0);
	    }, hide: function hide() {
	      return Va(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        U(this) ? m(this).show() : m(this).hide();
	      });
	    } });function Za(a, b, c, d, e) {
	    return new Za.prototype.init(a, b, c, d, e);
	  }m.Tween = Za, Za.prototype = { constructor: Za, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Za.propHooks[this.prop];return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Za.propHooks[this.prop];return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
	    } }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = { _default: { get: function get(a) {
	        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
	      }, set: function set(a) {
	        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
	      } } }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, m.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    } }, m.fx = Za.prototype.init, m.fx.step = {};var $a,
	      _a,
	      ab = /^(?:toggle|show|hide)$/,
	      bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
	      cb = /queueHooks$/,
	      db = [ib],
	      eb = { "*": [function (a, b) {
	      var c = this.createTween(a, b),
	          d = c.cur(),
	          e = bb.exec(b),
	          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
	          g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
	          h = 1,
	          i = 20;if (g && g[3] !== f) {
	        f = f || g[3], e = e || [], g = +d || 1;do {
	          h = h || ".5", g /= h, m.style(c.elem, a, g + f);
	        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
	      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
	    }] };function fb() {
	    return setTimeout(function () {
	      $a = void 0;
	    }), $a = m.now();
	  }function gb(a, b) {
	    var c,
	        d = { height: a },
	        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
	      c = T[e], d["margin" + c] = d["padding" + c] = a;
	    }return b && (d.opacity = d.width = a), d;
	  }function hb(a, b, c) {
	    for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) {
	      if (d = e[f].call(c, b, a)) return d;
	    }
	  }function ib(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        l,
	        n = this,
	        o = {},
	        p = a.style,
	        q = a.nodeType && U(a),
	        r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
	      h.unqueued || i();
	    }), h.unqueued++, n.always(function () {
	      n.always(function () {
	        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
	      });
	    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
	      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
	    }));for (d in b) {
	      if (e = b[d], ab.exec(e)) {
	        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
	          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
	        }o[d] = r && r[d] || m.style(a, d);
	      } else j = void 0;
	    }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);else {
	      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
	        m(a).hide();
	      }), n.done(function () {
	        var b;m._removeData(a, "fxshow");for (b in o) {
	          m.style(a, b, o[b]);
	        }
	      });for (d in o) {
	        g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	      }
	    }
	  }function jb(a, b) {
	    var c, d, e, f, g;for (c in a) {
	      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
	        f = g.expand(f), delete a[d];for (c in f) {
	          c in a || (a[c] = f[c], b[c] = e);
	        }
	      } else b[d] = e;
	    }
	  }function kb(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = db.length,
	        h = m.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
	        j.tweens[g].run(f);
	      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $a || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
	          j.tweens[c].run(1);
	        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for (jb(k, j.opts.specialEasing); g > f; f++) {
	      if (d = db[f].call(j, a, k, j.opts)) return d;
	    }return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }m.Animation = m.extend(kb, { tweener: function tweener(a, b) {
	      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
	        c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
	      }
	    }, prefilter: function prefilter(a, b) {
	      b ? db.unshift(a) : db.push(a);
	    } }), m.speed = function (a, b, c) {
	    var d = a && "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
	      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
	    }, d;
	  }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = m.isEmptyObject(a),
	          f = m.speed(b, c, d),
	          g = function g() {
	        var b = kb(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = m.timers,
	            g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
	          g[e] && g[e].stop && cb.test(e) && d(g[e]);
	        }for (e = f.length; e--;) {
	          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
	        }(b || !c) && m.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = m._data(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = m.timers,
	            g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
	          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
	        }for (b = 0; g > b; b++) {
	          d[b] && d[b].finish && d[b].finish.call(this);
	        }delete c.finish;
	      });
	    } }), m.each(["toggle", "show", "hide"], function (a, b) {
	    var c = m.fn[b];m.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
	    };
	  }), m.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    m.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), m.timers = [], m.fx.tick = function () {
	    var a,
	        b = m.timers,
	        c = 0;for ($a = m.now(); c < b.length; c++) {
	      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
	    }b.length || m.fx.stop(), $a = void 0;
	  }, m.fx.timer = function (a) {
	    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
	  }, m.fx.interval = 13, m.fx.start = function () {
	    _a || (_a = setInterval(m.fx.tick, m.fx.interval));
	  }, m.fx.stop = function () {
	    clearInterval(_a), _a = null;
	  }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
	    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
	      var d = setTimeout(b, a);c.stop = function () {
	        clearTimeout(d);
	      };
	    });
	  }, function () {
	    var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
	  }();var lb = /\r/g;m.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
	      }
	    } }), m.extend({ valHooks: { option: { get: function get(a) {
	          var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
	            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
	              if (b = m(c).val(), f) return b;g.push(b);
	            }
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = m.makeArray(b),
	              g = e.length;while (g--) {
	            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
	              d.selected = c = !0;
	            } catch (h) {
	              d.scrollHeight;
	            } else d.selected = !1;
	          }return c || (a.selectedIndex = -1), e;
	        } } } }), m.each(["radio", "checkbox"], function () {
	    m.valHooks[this] = { set: function set(a, b) {
	        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
	      } }, k.checkOn || (m.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  });var mb,
	      nb,
	      ob = m.expr.attrHandle,
	      pb = /^(?:checked|selected)$/i,
	      qb = k.getSetAttribute,
	      rb = k.input;m.fn.extend({ attr: function attr(a, b) {
	      return V(this, m.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        m.removeAttr(this, a);
	      });
	    } }), m.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return (0, _typeof3.default)(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
	    }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d,
	          e = 0,
	          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
	        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d);
	      }
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } } }), nb = { set: function set(a, b, c) {
	      return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
	    } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = ob[b] || m.find.attr;ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
	      var e, f;return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e;
	    } : function (a, b, c) {
	      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
	    };
	  }), rb && qb || (m.attrHooks.value = { set: function set(a, b, c) {
	      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
	    } }), qb || (mb = { set: function set(a, b, c) {
	      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
	    } }, ob.id = ob.name = ob.coords = function (a, b, c) {
	    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
	  }, m.valHooks.button = { get: function get(a, b) {
	      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
	    }, set: mb.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
	      mb.set(a, "" === b ? !1 : b, c);
	    } }, m.each(["width", "height"], function (a, b) {
	    m.attrHooks[b] = { set: function set(a, c) {
	        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
	      } };
	  })), k.style || (m.attrHooks.style = { get: function get(a) {
	      return a.style.cssText || void 0;
	    }, set: function set(a, b) {
	      return a.style.cssText = b + "";
	    } });var sb = /^(?:input|select|textarea|button|object)$/i,
	      tb = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
	      return V(this, m.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return a = m.propFix[a] || a, this.each(function () {
	        try {
	          this[a] = void 0, delete this[a];
	        } catch (b) {}
	      });
	    } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
	      var d,
	          e,
	          f,
	          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
	        } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
	    m.propHooks[b] = { get: function get(a) {
	        return a.getAttribute(b, 4);
	      } };
	  }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
	    } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    m.propFix[this.toLowerCase()] = this;
	  }), k.enctype || (m.propFix.enctype = "encoding");var ub = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = 0,
	          i = this.length,
	          j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
	        m(this).addClass(a.call(this, b, this.className));
	      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
	        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
	          f = 0;while (e = b[f++]) {
	            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
	          }g = m.trim(d), c.className !== g && (c.className = g);
	        }
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = 0,
	          i = this.length,
	          j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
	        m(this).removeClass(a.call(this, b, this.className));
	      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
	        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
	          f = 0;while (e = b[f++]) {
	            while (d.indexOf(" " + e + " ") >= 0) {
	              d = d.replace(" " + e + " ", " ");
	            }
	          }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
	        }
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
	        m(this).toggleClass(a.call(this, c, this.className, b), b);
	      } : function () {
	        if ("string" === c) {
	          var b,
	              d = 0,
	              e = m(this),
	              f = a.match(E) || [];while (b = f[d++]) {
	            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	          }
	        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
	      });
	    }, hasClass: function hasClass(a) {
	      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
	        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
	      }return !1;
	    } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	    m.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), m.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    }, bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } });var vb = m.now(),
	      wb = /\?/,
	      xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
	    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
	        d = null,
	        e = m.trim(b + "");return e && !m.trim(e.replace(xb, function (a, b, e, f) {
	      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
	    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
	  }, m.parseXML = function (b) {
	    var c, d;if (!b || "string" != typeof b) return null;try {
	      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
	    } catch (e) {
	      c = void 0;
	    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
	  };var yb,
	      zb,
	      Ab = /#.*$/,
	      Bb = /([?&])_=[^&]*/,
	      Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	      Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      Eb = /^(?:GET|HEAD)$/,
	      Fb = /^\/\//,
	      Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	      Hb = {},
	      Ib = {},
	      Jb = "*/".concat("*");try {
	    zb = location.href;
	  } catch (Kb) {
	    zb = y.createElement("a"), zb.href = "", zb = zb.href;
	  }yb = Gb.exec(zb.toLowerCase()) || [];function Lb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
	        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	      }
	    };
	  }function Mb(a, b, c, d) {
	    var e = {},
	        f = a === Ib;function g(h) {
	      var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function Nb(a, b) {
	    var c,
	        d,
	        e = m.ajaxSettings.flatOptions || {};for (d in b) {
	      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
	    }return c && m.extend(!0, a, c), a;
	  }function Ob(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) {
	      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
	    }if (e) for (g in h) {
	      if (h[g] && h[g].test(e)) {
	        i.unshift(g);break;
	      }
	    }if (i[0] in c) f = i[0];else {
	      for (g in c) {
	        if (!i[0] || a.converters[g + " " + i[0]]) {
	          f = g;break;
	        }d || (d = g);
	      }f = f || d;
	    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	  }function Pb(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
	      j[g.toLowerCase()] = a.converters[g];
	    }f = k.shift();while (f) {
	      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
	          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
	            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	          }
	        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	          b = g(b);
	        } catch (l) {
	          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	        }
	      }
	    }return { state: "success", data: b };
	  }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zb, type: "GET", isLocal: Db.test(yb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
	    }, ajaxPrefilter: Lb(Hb), ajaxTransport: Lb(Ib), ajax: function ajax(a, b) {
	      "object" == (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) && (b = a, a = void 0), b = b || {};var c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = m.ajaxSetup({}, b),
	          l = k.context || k,
	          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
	          o = m.Deferred(),
	          p = m.Callbacks("once memory"),
	          q = k.statusCode || {},
	          r = {},
	          s = {},
	          t = 0,
	          u = "canceled",
	          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (2 === t) {
	            if (!j) {
	              j = {};while (b = Cb.exec(f)) {
	                j[b[1].toLowerCase()] = b[2];
	              }
	            }b = j[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === t ? f : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return t || (k.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (2 > t) for (b in a) {
	            q[b] = [q[b], a[b]];
	          } else v.always(a[v.status]);return this;
	        }, abort: function abort(a) {
	          var b = a || u;return i && i.abort(b), x(0, b), this;
	        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
	        v.setRequestHeader(d, k.headers[d]);
	      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
	        v[d](k[d]);
	      }if (i = Mb(Ib, k, b, v)) {
	        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
	          v.abort("timeout");
	        }, k.timeout));try {
	          t = 1, i.send(r, x);
	        } catch (w) {
	          if (!(2 > t)) throw w;x(-1, w);
	        }
	      } else x(-1, "No Transport");function x(a, b, c, d) {
	        var j,
	            r,
	            s,
	            u,
	            w,
	            x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
	      }return v;
	    }, getJSON: function getJSON(a, b, c) {
	      return m.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return m.get(a, void 0, b, "script");
	    } }), m.each(["get", "post"], function (a, b) {
	    m[b] = function (a, c, d, e) {
	      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
	    };
	  }), m._evalUrl = function (a) {
	    return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	  }, m.fn.extend({ wrapAll: function wrapAll(a) {
	      if (m.isFunction(a)) return this.each(function (b) {
	        m(this).wrapAll(a.call(this, b));
	      });if (this[0]) {
	        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
	            a = a.firstChild;
	          }return a;
	        }).append(this);
	      }return this;
	    }, wrapInner: function wrapInner(a) {
	      return this.each(m.isFunction(a) ? function (b) {
	        m(this).wrapInner(a.call(this, b));
	      } : function () {
	        var b = m(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = m.isFunction(a);return this.each(function (c) {
	        m(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
	      }).end();
	    } }), m.expr.filters.hidden = function (a) {
	    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
	  }, m.expr.filters.visible = function (a) {
	    return !m.expr.filters.hidden(a);
	  };var Qb = /%20/g,
	      Rb = /\[\]$/,
	      Sb = /\r?\n/g,
	      Tb = /^(?:submit|button|image|reset|file)$/i,
	      Ub = /^(?:input|select|textarea|keygen)/i;function Vb(a, b, c, d) {
	    var e;if (m.isArray(b)) m.each(b, function (b, e) {
	      c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : (0, _typeof3.default)(e)) ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
	      Vb(a + "[" + e + "]", b[e], c, d);
	    }
	  }m.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	    };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) {
	      Vb(c, a[c], b, e);
	    }return d.join("&").replace(Qb, "+");
	  }, m.fn.extend({ serialize: function serialize() {
	      return m.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
	      }).map(function (a, b) {
	        var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
	          return { name: b.name, value: a.replace(Sb, "\r\n") };
	        }) : { name: b.name, value: c.replace(Sb, "\r\n") };
	      }).get();
	    } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
	    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
	  } : Zb;var Wb = 0,
	      Xb = {},
	      Yb = m.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
	    for (var a in Xb) {
	      Xb[a](void 0, !0);
	    }
	  }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
	    if (!a.crossDomain || k.cors) {
	      var _b3;return { send: function send(c, d) {
	          var e,
	              f = a.xhr(),
	              g = ++Wb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
	            f[e] = a.xhrFields[e];
	          }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
	            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
	          }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
	            var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xb[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
	              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
	                i = f.statusText;
	              } catch (k) {
	                i = "";
	              }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
	            }j && d(h, i, j, f.getAllResponseHeaders());
	          }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xb[g] = _b3 : _b3();
	        }, abort: function abort() {
	          _b3 && _b3(void 0, !0);
	        } };
	    }
	  });function Zb() {
	    try {
	      return new a.XMLHttpRequest();
	    } catch (b) {}
	  }function $b() {
	    try {
	      return new a.ActiveXObject("Microsoft.XMLHTTP");
	    } catch (b) {}
	  }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
	        return m.globalEval(a), a;
	      } } }), m.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
	  }), m.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b,
	          c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
	          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
	            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
	          }, c.insertBefore(b, c.firstChild);
	        }, abort: function abort() {
	          b && b.onload(void 0, !0);
	        } };
	    }
	  });var _b = [],
	      ac = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = _b.pop() || m.expando + "_" + vb++;return this[a] = !0, a;
	    } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || m.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script") : void 0;
	  }), m.parseHTML = function (a, b, c) {
	    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
	        e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
	  };var bc = m.fn.load;m.fn.load = function (a, b, c) {
	    if ("string" != typeof a && bc) return bc.apply(this, arguments);var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
	      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
	    }).complete(c && function (a, b) {
	      g.each(c, e || [a.responseText, b, a]);
	    }), this;
	  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    m.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), m.expr.filters.animated = function (a) {
	    return m.grep(m.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };var cc = a.document.documentElement;function dc(a) {
	    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
	  }m.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = m.css(a, "position"),
	          l = m(a),
	          n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
	    } }, m.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        m.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d = { top: 0, left: 0 },
	          e = this[0],
	          f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? ((0, _typeof3.default)(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = { top: 0, left: 0 },
	            d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent || cc;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
	          a = a.offsetParent;
	        }return a || cc;
	      });
	    } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
	    var c = /Y/.test(b);m.fn[a] = function (d) {
	      return V(this, function (a, d, e) {
	        var f = dc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
	      }, a, d, arguments.length, null);
	    };
	  }), m.each(["top", "left"], function (a, b) {
	    m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
	      return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
	    });
	  }), m.each({ Height: "height", Width: "width" }, function (a, b) {
	    m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      m.fn[d] = function (d, e) {
	        var f = arguments.length && (c || "boolean" != typeof d),
	            g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
	          var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
	        }, b, f ? d : void 0, f, null);
	      };
	    });
	  }), m.fn.size = function () {
	    return this.length;
	  }, m.fn.andSelf = m.fn.addBack, "function" == "function" && __webpack_require__(72) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return m;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var ec = a.jQuery,
	      fc = a.$;return m.noConflict = function (b) {
	    return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
	  }, (typeof b === "undefined" ? "undefined" : (0, _typeof3.default)(b)) === K && (a.jQuery = a.$ = m), m;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(5);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(56);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(51);
	module.exports = __webpack_require__(55).f('iterator');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(8)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(11)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , defined   = __webpack_require__(10);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(12)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(14).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(34);
	
	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(39)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(40)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(9)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(48)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(14).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(10);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global        = __webpack_require__(14)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(30)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(36);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(11)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(48);

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(14)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , META           = __webpack_require__(59).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , wksExt         = __webpack_require__(55)
	  , wksDefine      = __webpack_require__(60)
	  , keyOf          = __webpack_require__(61)
	  , enumKeys       = __webpack_require__(62)
	  , isArray        = __webpack_require__(65)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(32)
	  , gOPNExt        = __webpack_require__(66)
	  , $GOPD          = __webpack_require__(68)
	  , $DP            = __webpack_require__(19)
	  , $keys          = __webpack_require__(34)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(67).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(64).f  = $propertyIsEnumerable;
	  __webpack_require__(63).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(12)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(14)
	  , core           = __webpack_require__(15)
	  , LIBRARY        = __webpack_require__(12)
	  , wksExt         = __webpack_require__(55)
	  , defineProperty = __webpack_require__(19).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(63)
	  , pIE     = __webpack_require__(64);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 64 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(67).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(64)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 69 */
/***/ function(module, exports) {



/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60)('asyncIterator');

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(60)('observable');

/***/ },
/* 72 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	var $Object = __webpack_require__(15).Object;
	module.exports = function getOwnPropertyNames(it){
	  return $Object.getOwnPropertyNames(it);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(76)('getOwnPropertyNames', function(){
	  return __webpack_require__(66).f;
	});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(15)
	  , fails   = __webpack_require__(24);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperties(T, D){
	  return $Object.defineProperties(T, D);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperties: __webpack_require__(33)});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(15).Object.freeze;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(21)
	  , meta     = __webpack_require__(59).onFreeze;
	
	__webpack_require__(76)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	var $Object = __webpack_require__(15).Object;
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $Object.getOwnPropertyDescriptor(it, key);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(36)
	  , $getOwnPropertyDescriptor = __webpack_require__(68).f;
	
	__webpack_require__(76)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(87), __esModule: true };

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	module.exports = __webpack_require__(15).Object.isExtensible;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(21);
	
	__webpack_require__(76)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(90), __esModule: true };

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(91);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(32)});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(15)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96);
	var $Object = __webpack_require__(15).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(23), 'Object', {defineProperty: __webpack_require__(19).f});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99);
	module.exports = __webpack_require__(15).Object.keys;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(50)
	  , $keys    = __webpack_require__(34);
	
	__webpack_require__(76)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';
	
	  var babelHelpers = {};
	
	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }
	
	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;
	
	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }
	
	      this.matcher.add(this.path, target);
	
	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };
	
	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }
	
	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },
	
	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;
	
	      var match = generateMatch(path, matcher, delegate);
	
	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }
	
	      callback(match);
	    }
	  };
	
	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;
	
	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }
	
	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }
	
	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }
	
	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;
	
	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);
	
	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }
	
	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();
	
	    callback(generateMatch("", matcher, this.delegate));
	
	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }
	
	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
	
	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
	
	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }
	
	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }
	
	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat
	
	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;
	
	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },
	
	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },
	
	    generate: function generate() {
	      return this.string;
	    }
	  };
	
	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },
	
	    regex: function regex() {
	      return "([^/]+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },
	
	    regex: function regex() {
	      return "(.+)";
	    },
	
	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };
	
	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };
	
	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }
	
	    var segments = route.split("/"),
	        results = [];
	
	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';
	
	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;
	
	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }
	
	    specificity.val = +specificity.val;
	
	    return results;
	  }
	
	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.
	
	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }
	
	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];
	
	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;
	
	        if (isEqual) {
	          return child;
	        }
	      }
	    },
	
	    put: function put(charSpec) {
	      var state;
	
	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }
	
	      // Make a new state for the character spec
	      state = new State(charSpec);
	
	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);
	
	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }
	
	      // Return the new state
	      return state;
	    },
	
	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;
	
	      // DEBUG "  " + debugState(this)
	      var returned = [];
	
	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];
	
	        charSpec = child.charSpec;
	
	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }
	
	      return returned;
	    }
	
	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };
	
	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }
	
	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/
	
	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }
	
	  function recognizeChar(states, ch) {
	    var nextStates = [];
	
	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];
	
	      nextStates = nextStates.concat(state.match(ch));
	    }
	
	    return nextStates;
	  }
	
	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };
	
	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });
	
	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);
	
	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};
	
	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }
	
	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }
	
	    return result;
	  }
	
	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;
	
	      currentState = currentState.put(ch);
	    });
	
	    return currentState;
	  }
	
	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }
	
	  // The main interface
	
	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };
	
	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;
	
	      var isEmpty = true;
	
	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];
	
	        var segments = parse(route.path, names, specificity);
	
	        allSegments = allSegments.concat(segments);
	
	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];
	
	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }
	
	          isEmpty = false;
	
	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";
	
	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }
	
	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }
	
	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }
	
	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;
	
	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },
	
	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }
	
	      return result;
	    },
	
	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },
	
	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }
	
	      var segments = route.segments;
	
	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];
	
	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }
	
	        output += "/";
	        output += segment.generate(params);
	      }
	
	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }
	
	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }
	
	      return output;
	    },
	
	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }
	
	      if (pairs.length === 0) {
	        return '';
	      }
	
	      return "?" + pairs.join("&");
	    },
	
	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },
	
	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;
	
	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }
	
	      path = tryDecode(path);
	      if (!path) return;
	
	      // DEBUG GROUP path
	
	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }
	
	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }
	
	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }
	
	      // END DEBUG GROUP
	
	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }
	
	      states = sortSolutions(solutions);
	
	      var state = solutions[0];
	
	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };
	
	  RouteRecognizer.prototype.map = map;
	
	  var genQuery = RouteRecognizer.prototype.generateQueryString;
	
	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */
	
	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }
	
	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */
	
	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }
	
	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */
	
	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }
	
	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */
	
	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }
	
	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */
	
	  var resolver = undefined;
	
	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }
	
	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */
	
	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};
	
	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }
	
	  var hashRE = /#.*$/;
	
	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);
	
	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }
	
	    HTML5History.prototype.start = function start() {
	      var _this = this;
	
	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };
	
	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };
	
	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };
	
	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };
	
	    return HTML5History;
	  })();
	
	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);
	
	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }
	
	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };
	
	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };
	
	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };
	
	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };
	
	    return HashHistory;
	  })();
	
	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);
	
	      this.onChange = onChange;
	      this.currentPath = '/';
	    }
	
	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };
	
	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };
	
	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };
	
	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };
	
	    return AbstractHistory;
	  })();
	
	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */
	
	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }
	
	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }
	
	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }
	
	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */
	
	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }
	
	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */
	
	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }
	
	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');
	
	    view.depth = depth;
	    view.activated = false;
	
	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);
	
	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;
	
	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);
	
	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);
	
	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });
	
	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }
	
	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };
	
	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };
	
	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };
	
	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };
	
	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }
	
	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */
	
	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }
	
	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */
	
	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }
	
	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */
	
	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }
	
	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */
	
	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */
	
	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);
	
	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }
	
	    /**
	     * Abort current transition and return to previous location.
	     */
	
	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };
	
	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */
	
	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };
	
	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;
	
	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();
	
	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });
	
	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }
	
	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase
	
	            // Update router current route
	            transition.router._onTransitionValidated(transition);
	
	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });
	
	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };
	
	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */
	
	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };
	
	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */
	
	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;
	
	      var transition = this;
	      var nextCalled = false;
	
	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };
	
	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };
	
	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };
	
	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };
	
	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };
	
	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };
	
	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };
	
	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }
	
	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };
	
	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */
	
	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;
	
	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };
	
	    return RouteTransition;
	  })();
	
	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }
	
	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }
	
	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;
	
	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */
	
	  var Route = function Route(path, router) {
	    var _this = this;
	
	    babelHelpers.classCallCheck(this, Route);
	
	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };
	
	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;
	
	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };
	
	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };
	
	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;
	
	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }
	
	  function View (Vue) {
	
	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);
	
	    // with some overrides
	    _.extend(viewDef, {
	
	      _isRouterView: true,
	
	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);
	
	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }
	
	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },
	
	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });
	
	    Vue.elementDirective('router-view', viewDef);
	  }
	
	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;
	
	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;
	
	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';
	
	    var activeId = 0;
	
	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;
	
	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });
	
	    Vue.directive('link', {
	      priority: onPriority - 2,
	
	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },
	
	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },
	
	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;
	
	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },
	
	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },
	
	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },
	
	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },
	
	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },
	
	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });
	
	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }
	
	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }
	
	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };
	
	  // late bind during install
	  var Vue = undefined;
	
	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */
	
	  var Router = (function () {
	    function Router() {
	      var _this = this;
	
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);
	
	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }
	
	      // Vue instances
	      this.app = null;
	      this._children = [];
	
	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();
	
	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];
	
	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;
	
	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;
	
	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;
	
	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';
	
	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });
	
	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }
	
	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */
	
	    // API ===================================================
	
	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */
	
	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };
	
	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */
	
	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };
	
	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */
	
	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };
	
	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */
	
	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };
	
	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */
	
	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };
	
	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */
	
	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };
	
	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */
	
	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }
	
	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }
	
	      this.history.start();
	    };
	
	    /**
	     * Stop listening to route changes.
	     */
	
	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };
	
	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */
	
	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };
	
	    // Internal methods ======================================
	
	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */
	
	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };
	
	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */
	
	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };
	
	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */
	
	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };
	
	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */
	
	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };
	
	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */
	
	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;
	
	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };
	
	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */
	
	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };
	
	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;
	
	      if (this._checkGuard(path)) {
	        return;
	      }
	
	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;
	
	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }
	
	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);
	
	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;
	
	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }
	
	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };
	
	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }
	
	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }
	
	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };
	
	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */
	
	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };
	
	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */
	
	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };
	
	    return Router;
	  })();
	
	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }
	
	  /* Installation */
	
	  Router.installed = false;
	
	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */
	
	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };
	
	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }
	
	  return Router;
	
	}));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["VueStrap"] = factory();
		else
			root["VueStrap"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		var _Accordion = __webpack_require__(94);
		
		var _Accordion2 = _interopRequireDefault(_Accordion);
		
		var _Affix = __webpack_require__(98);
		
		var _Affix2 = _interopRequireDefault(_Affix);
		
		var _Alert = __webpack_require__(101);
		
		var _Alert2 = _interopRequireDefault(_Alert);
		
		var _Aside = __webpack_require__(108);
		
		var _Aside2 = _interopRequireDefault(_Aside);
		
		var _buttonGroup = __webpack_require__(113);
		
		var _buttonGroup2 = _interopRequireDefault(_buttonGroup);
		
		var _Carousel = __webpack_require__(116);
		
		var _Carousel2 = _interopRequireDefault(_Carousel);
		
		var _Checkbox = __webpack_require__(121);
		
		var _Checkbox2 = _interopRequireDefault(_Checkbox);
		
		var _Datepicker = __webpack_require__(126);
		
		var _Datepicker2 = _interopRequireDefault(_Datepicker);
		
		var _Dropdown = __webpack_require__(131);
		
		var _Dropdown2 = _interopRequireDefault(_Dropdown);
		
		var _Input = __webpack_require__(136);
		
		var _Input2 = _interopRequireDefault(_Input);
		
		var _Modal = __webpack_require__(141);
		
		var _Modal2 = _interopRequireDefault(_Modal);
		
		var _Navbar = __webpack_require__(150);
		
		var _Navbar2 = _interopRequireDefault(_Navbar);
		
		var _Option = __webpack_require__(153);
		
		var _Option2 = _interopRequireDefault(_Option);
		
		var _Panel = __webpack_require__(158);
		
		var _Panel2 = _interopRequireDefault(_Panel);
		
		var _Popover = __webpack_require__(163);
		
		var _Popover2 = _interopRequireDefault(_Popover);
		
		var _Progressbar = __webpack_require__(169);
		
		var _Progressbar2 = _interopRequireDefault(_Progressbar);
		
		var _Radio = __webpack_require__(172);
		
		var _Radio2 = _interopRequireDefault(_Radio);
		
		var _Select = __webpack_require__(177);
		
		var _Select2 = _interopRequireDefault(_Select);
		
		var _Slider = __webpack_require__(197);
		
		var _Slider2 = _interopRequireDefault(_Slider);
		
		var _Spinner = __webpack_require__(200);
		
		var _Spinner2 = _interopRequireDefault(_Spinner);
		
		var _Tab = __webpack_require__(205);
		
		var _Tab2 = _interopRequireDefault(_Tab);
		
		var _TabGroup = __webpack_require__(208);
		
		var _TabGroup2 = _interopRequireDefault(_TabGroup);
		
		var _Tabset = __webpack_require__(213);
		
		var _Tabset2 = _interopRequireDefault(_Tabset);
		
		var _Tooltip = __webpack_require__(218);
		
		var _Tooltip2 = _interopRequireDefault(_Tooltip);
		
		var _Typeahead = __webpack_require__(223);
		
		var _Typeahead2 = _interopRequireDefault(_Typeahead);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var VueStrap = {
		  $: _NodeList2.default,
		  accordion: _Accordion2.default,
		  affix: _Affix2.default,
		  alert: _Alert2.default,
		  aside: _Aside2.default,
		  buttonGroup: _buttonGroup2.default,
		  carousel: _Carousel2.default,
		  checkbox: _Checkbox2.default,
		  datepicker: _Datepicker2.default,
		  dropdown: _Dropdown2.default,
		  input: _Input2.default,
		  modal: _Modal2.default,
		  navbar: _Navbar2.default,
		  option: _Option2.default,
		  panel: _Panel2.default,
		  popover: _Popover2.default,
		  progressbar: _Progressbar2.default,
		  radio: _Radio2.default,
		  select: _Select2.default,
		  slider: _Slider2.default,
		  spinner: _Spinner2.default,
		  tab: _Tab2.default,
		  tabGroup: _TabGroup2.default,
		  tabset: _Tabset2.default,
		  tooltip: _Tooltip2.default,
		  typeahead: _Typeahead2.default
		};
		
		module.exports = VueStrap;
	
	/***/ },
	/* 1 */,
	/* 2 */,
	/* 3 */,
	/* 4 */,
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */,
	/* 9 */,
	/* 10 */,
	/* 11 */,
	/* 12 */,
	/* 13 */,
	/* 14 */,
	/* 15 */,
	/* 16 */,
	/* 17 */,
	/* 18 */,
	/* 19 */,
	/* 20 */,
	/* 21 */,
	/* 22 */,
	/* 23 */,
	/* 24 */,
	/* 25 */,
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _defineProperty = __webpack_require__(27);
		
		var _defineProperty2 = _interopRequireDefault(_defineProperty);
		
		var _iterator24 = __webpack_require__(45);
		
		var _iterator25 = _interopRequireDefault(_iterator24);
		
		var _getOwnPropertyNames = __webpack_require__(81);
		
		var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);
		
		var _getIterator2 = __webpack_require__(87);
		
		var _getIterator3 = _interopRequireDefault(_getIterator2);
		
		var _classCallCheck2 = __webpack_require__(92);
		
		var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
		
		var _createClass2 = __webpack_require__(93);
		
		var _createClass3 = _interopRequireDefault(_createClass2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var ArrayProto = Array.prototype;
		var nodeError = new Error('Passed arguments must be of Node');
		var blurEvent = void 0;
		var blurList = [];
		var Events = [];
		
		var NodeList = function () {
		  function NodeList(args) {
		    (0, _classCallCheck3.default)(this, NodeList);
		
		    var i = 0,
		        l,
		        nodes = args;
		    if (args[0] === window) {
		      nodes = [window];
		    } else if (typeof args[0] === 'string') {
		      nodes = (args[1] || document).querySelectorAll(args[0]);
		      if (args[1]) {
		        this.owner = args[1];
		      }
		    } else if (0 in args && !(args[0] instanceof Node) && args[0] && 'length' in args[0]) {
		      nodes = args[0];
		      if (args[1]) {
		        this.owner = args[1];
		      }
		    }
		    if (nodes) {
		      for (var _i in nodes) {
		        this[_i] = nodes[_i];
		      }
		      this.length = nodes.length;
		    } else {
		      this.length = 0;
		    }
		  }
		
		  (0, _createClass3.default)(NodeList, [{
		    key: 'concat',
		    value: function concat() {
		      var nodes = ArrayProto.slice.call(this);
		      function flatten(arr) {
		        var _iteratorNormalCompletion = true;
		        var _didIteratorError = false;
		        var _iteratorError = undefined;
		
		        try {
		          for (var _iterator = (0, _getIterator3.default)(arr), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		            var el = _step.value;
		
		            if (el instanceof Node) {
		              if (!~nodes.indexOf(el)) nodes.push(el);
		            } else if (el) {
		              flatten(el);
		            }
		          }
		        } catch (err) {
		          _didIteratorError = true;
		          _iteratorError = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion && _iterator.return) {
		              _iterator.return();
		            }
		          } finally {
		            if (_didIteratorError) {
		              throw _iteratorError;
		            }
		          }
		        }
		      }
		      var _iteratorNormalCompletion2 = true;
		      var _didIteratorError2 = false;
		      var _iteratorError2 = undefined;
		
		      try {
		        for (var _iterator2 = (0, _getIterator3.default)(arguments), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		          var arg = _step2.value;
		
		          if (arg instanceof Node) {
		            if (!~nodes.indexOf(arg)) nodes.push(arg);
		          } else if (arg instanceof window.NodeList || arg instanceof NodeList || arg instanceof HTMLCollection || arg instanceof Array) {
		            flatten(arg);
		          } else {
		            throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)');
		          }
		        }
		      } catch (err) {
		        _didIteratorError2 = true;
		        _iteratorError2 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion2 && _iterator2.return) {
		            _iterator2.return();
		          }
		        } finally {
		          if (_didIteratorError2) {
		            throw _iteratorError2;
		          }
		        }
		      }
		
		      return new NodeList([nodes, this]);
		    }
		  }, {
		    key: 'each',
		    value: function each() {
		      ArrayProto.forEach.apply(this, arguments);
		      return this;
		    }
		  }, {
		    key: 'parent',
		    value: function parent() {
		      return this.map(function (el) {
		        return el.parentNode;
		      });
		    }
		  }, {
		    key: 'filter',
		    value: function filter() {
		      return new NodeList([ArrayProto.filter.apply(this, arguments), this]);
		    }
		  }, {
		    key: 'find',
		    value: function find(element) {
		      var nodes = [];
		      var _iteratorNormalCompletion3 = true;
		      var _didIteratorError3 = false;
		      var _iteratorError3 = undefined;
		
		      try {
		        for (var _iterator3 = (0, _getIterator3.default)(flatten(this)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		          var el = _step3.value;
		
		          var node = el.querySelectorAll(element);
		          if (node && node.length) nodes.push(node);
		        }
		      } catch (err) {
		        _didIteratorError3 = true;
		        _iteratorError3 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion3 && _iterator3.return) {
		            _iterator3.return();
		          }
		        } finally {
		          if (_didIteratorError3) {
		            throw _iteratorError3;
		          }
		        }
		      }
		
		      return flatten(nodes, this.owner);
		    }
		  }, {
		    key: 'findChildren',
		    value: function findChildren(element) {
		      var _this = this;
		
		      return this.find(element).filter(function (el) {
		        return _this.includes(el.parentElement);
		      });
		    }
		  }, {
		    key: 'forEach',
		    value: function forEach() {
		      ArrayProto.forEach.apply(this, arguments);
		      return this;
		    }
		  }, {
		    key: 'includes',
		    value: function includes(element, index) {
		      return ~this.indexOf(element, index);
		    }
		  }, {
		    key: 'map',
		    value: function map() {
		      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		        args[_key] = arguments[_key];
		      }
		
		      return flatten(ArrayProto.map.apply(this, args), this);
		    }
		  }, {
		    key: 'pop',
		    value: function pop(amount) {
		      if (typeof amount !== 'number') {
		        amount = 1;
		      }
		      var nodes = [];
		      var pop = ArrayProto.pop.bind(this);
		      while (amount--) {
		        nodes.push(pop());
		      }return new NodeList([nodes, this]);
		    }
		  }, {
		    key: 'push',
		    value: function push() {
		      var _iteratorNormalCompletion4 = true;
		      var _didIteratorError4 = false;
		      var _iteratorError4 = undefined;
		
		      try {
		        for (var _iterator4 = (0, _getIterator3.default)(arguments), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		          var arg = _step4.value;
		
		          if (!(arg instanceof Node)) throw nodeError;
		          if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg);
		        }
		      } catch (err) {
		        _didIteratorError4 = true;
		        _iteratorError4 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion4 && _iterator4.return) {
		            _iterator4.return();
		          }
		        } finally {
		          if (_didIteratorError4) {
		            throw _iteratorError4;
		          }
		        }
		      }
		
		      return this;
		    }
		  }, {
		    key: 'delete',
		    value: function _delete() {
		      var list = new NodeList([[], this.owner]);
		      var splice = function splice(index) {
		        return ArrayProto.splice.apply();
		      };
		      var i = this.length - 1;
		      for (var el = this[i]; el; el = this[--i]) {
		        if (el.remove) {
		          el.remove();
		          ArrayProto.splice.call(this, i, 1);
		        } else if (el.parentNode) {
		          el.parentNode.removeChild(el);
		          ArrayProto.splice.call(this, i, 1);
		        }
		      }
		      return this;
		    }
		  }, {
		    key: 'shift',
		    value: function shift(amount) {
		      if (typeof amount !== 'number') {
		        amount = 1;
		      }
		      var nodes = [];
		      var shift = ArrayProto.shift.bind(this);
		      while (amount--) {
		        nodes.push(shift());
		      }return new NodeList([nodes, this]);
		    }
		  }, {
		    key: 'slice',
		    value: function slice() {
		      return new NodeList([ArrayProto.slice.apply(this, arguments), this]);
		    }
		  }, {
		    key: 'splice',
		    value: function splice() {
		      for (var i = 2, l = arguments.length; i < l; i++) {
		        if (!(arguments[i] instanceof Node)) throw nodeError;
		      }
		      return new NodeList([ArrayProto.splice.apply(this, arguments), this]);
		    }
		  }, {
		    key: 'unshift',
		    value: function unshift() {
		      var unshift = ArrayProto.unshift.bind(this);
		      var _iteratorNormalCompletion5 = true;
		      var _didIteratorError5 = false;
		      var _iteratorError5 = undefined;
		
		      try {
		        for (var _iterator5 = (0, _getIterator3.default)(arguments), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
		          var arg = _step5.value;
		
		          if (!(arg instanceof Node)) throw nodeError;
		          if (!~this.indexOf(arg)) unshift(arg);
		        }
		      } catch (err) {
		        _didIteratorError5 = true;
		        _iteratorError5 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion5 && _iterator5.return) {
		            _iterator5.return();
		          }
		        } finally {
		          if (_didIteratorError5) {
		            throw _iteratorError5;
		          }
		        }
		      }
		
		      return this;
		    }
		  }, {
		    key: 'addClass',
		    value: function addClass(classes) {
		      return this.toggleClass(classes, true);
		    }
		  }, {
		    key: 'removeClass',
		    value: function removeClass(classes) {
		      return this.toggleClass(classes, false);
		    }
		  }, {
		    key: 'toggleClass',
		    value: function toggleClass(classes, value) {
		      var _this2 = this;
		
		      var method = value === undefined || value === null ? 'toggle' : value ? 'add' : 'remove';
		      if (typeof classes === 'string') {
		        classes = classes.trim().replace(/\s+/, ' ').split(' ');
		      }
		      classes.forEach(function (c) {
		        return _this2.each(function (el) {
		          return el.classList[method](c);
		        });
		      });
		      return this;
		    }
		  }, {
		    key: 'get',
		    value: function get(prop) {
		      var arr = [];
		      var _iteratorNormalCompletion6 = true;
		      var _didIteratorError6 = false;
		      var _iteratorError6 = undefined;
		
		      try {
		        for (var _iterator6 = (0, _getIterator3.default)(this), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
		          var el = _step6.value;
		
		          if (el !== null) {
		            el = el[prop];
		          }
		          arr.push(el);
		        }
		      } catch (err) {
		        _didIteratorError6 = true;
		        _iteratorError6 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion6 && _iterator6.return) {
		            _iterator6.return();
		          }
		        } finally {
		          if (_didIteratorError6) {
		            throw _iteratorError6;
		          }
		        }
		      }
		
		      return flatten(arr, this);
		    }
		  }, {
		    key: 'set',
		    value: function set(prop, value) {
		      if (prop.constructor === Object) {
		        var _iteratorNormalCompletion7 = true;
		        var _didIteratorError7 = false;
		        var _iteratorError7 = undefined;
		
		        try {
		          for (var _iterator7 = (0, _getIterator3.default)(this), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
		            var el = _step7.value;
		
		            if (el) {
		              for (key in prop) {
		                if (key in el) {
		                  el[key] = prop[key];
		                }
		              }
		            }
		          }
		        } catch (err) {
		          _didIteratorError7 = true;
		          _iteratorError7 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion7 && _iterator7.return) {
		              _iterator7.return();
		            }
		          } finally {
		            if (_didIteratorError7) {
		              throw _iteratorError7;
		            }
		          }
		        }
		      } else {
		        var _iteratorNormalCompletion8 = true;
		        var _didIteratorError8 = false;
		        var _iteratorError8 = undefined;
		
		        try {
		          for (var _iterator8 = (0, _getIterator3.default)(this), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
		            var _el = _step8.value;
		
		            if (prop in _el) {
		              _el[prop] = value;
		            }
		          }
		        } catch (err) {
		          _didIteratorError8 = true;
		          _iteratorError8 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion8 && _iterator8.return) {
		              _iterator8.return();
		            }
		          } finally {
		            if (_didIteratorError8) {
		              throw _iteratorError8;
		            }
		          }
		        }
		      }
		      return this;
		    }
		  }, {
		    key: 'call',
		    value: function call() {
		      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		        args[_key2] = arguments[_key2];
		      }
		
		      var method = ArrayProto.shift.call(args);
		      var arr = [];
		      var returnThis = true;
		      var _iteratorNormalCompletion9 = true;
		      var _didIteratorError9 = false;
		      var _iteratorError9 = undefined;
		
		      try {
		        for (var _iterator9 = (0, _getIterator3.default)(this), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
		          var el = _step9.value;
		
		          if (el && el[method] instanceof Function) {
		            el = el[method].apply(el, args);
		            arr.push(el);
		            if (returnThis && el !== undefined) {
		              returnThis = false;
		            }
		          } else {
		            arr.push(undefined);
		          }
		        }
		      } catch (err) {
		        _didIteratorError9 = true;
		        _iteratorError9 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion9 && _iterator9.return) {
		            _iterator9.return();
		          }
		        } finally {
		          if (_didIteratorError9) {
		            throw _iteratorError9;
		          }
		        }
		      }
		
		      return returnThis ? this : flatten(arr, this);
		    }
		  }, {
		    key: 'item',
		    value: function item(index) {
		      return new NodeList([[this[index]], this]);
		    }
		  }, {
		    key: 'on',
		
		
		    // event handlers
		    value: function on(events, selector, callback) {
		      if (typeof events === 'string') {
		        events = events.trim().replace(/\s+/, ' ').split(' ');
		      }
		      if (!this || !this.length) return this;
		      if (callback === undefined) {
		        callback = selector;
		        selector = null;
		      }
		      if (!callback) return this;
		      var fn = callback;
		      callback = selector ? function (e) {
		        var els = new NodeList([selector, this]);
		        if (!els.length) {
		          return;
		        }
		        els.some(function (el) {
		          var target = el.contains(e.target);
		          if (target) fn.call(el, e, el);
		          return target;
		        });
		      } : function (e) {
		        fn.apply(this, [e, this]);
		      };
		      var _iteratorNormalCompletion10 = true;
		      var _didIteratorError10 = false;
		      var _iteratorError10 = undefined;
		
		      try {
		        for (var _iterator10 = (0, _getIterator3.default)(events), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
		          var event = _step10.value;
		          var _iteratorNormalCompletion11 = true;
		          var _didIteratorError11 = false;
		          var _iteratorError11 = undefined;
		
		          try {
		            for (var _iterator11 = (0, _getIterator3.default)(this), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
		              var el = _step11.value;
		
		              el.addEventListener(event, callback, false);
		              Events.push({
		                el: el,
		                event: event,
		                callback: callback
		              });
		            }
		          } catch (err) {
		            _didIteratorError11 = true;
		            _iteratorError11 = err;
		          } finally {
		            try {
		              if (!_iteratorNormalCompletion11 && _iterator11.return) {
		                _iterator11.return();
		              }
		            } finally {
		              if (_didIteratorError11) {
		                throw _iteratorError11;
		              }
		            }
		          }
		        }
		      } catch (err) {
		        _didIteratorError10 = true;
		        _iteratorError10 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion10 && _iterator10.return) {
		            _iterator10.return();
		          }
		        } finally {
		          if (_didIteratorError10) {
		            throw _iteratorError10;
		          }
		        }
		      }
		
		      return this;
		    }
		  }, {
		    key: 'off',
		    value: function off(events, callback) {
		      if (events instanceof Function) {
		        callback = events;
		        events = null;
		      }
		      if (typeof events === 'string' && callback instanceof Function) {
		        var _iteratorNormalCompletion12 = true;
		        var _didIteratorError12 = false;
		        var _iteratorError12 = undefined;
		
		        try {
		          for (var _iterator12 = (0, _getIterator3.default)(this), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
		            var el = _step12.value;
		
		            for (var e in Events) {
		              var _iteratorNormalCompletion13 = true;
		              var _didIteratorError13 = false;
		              var _iteratorError13 = undefined;
		
		              try {
		                for (var _iterator13 = (0, _getIterator3.default)(events.split(' ')), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
		                  var event = _step13.value;
		
		                  if (Events[e] && Events[e].el === el && Events[e].event === event && Events[e].callback === callback) {
		                    Events[e].el.removeEventListener(Events[e].event, Events[e].callback);
		                    delete Events[e];
		                  }
		                }
		              } catch (err) {
		                _didIteratorError13 = true;
		                _iteratorError13 = err;
		              } finally {
		                try {
		                  if (!_iteratorNormalCompletion13 && _iterator13.return) {
		                    _iterator13.return();
		                  }
		                } finally {
		                  if (_didIteratorError13) {
		                    throw _iteratorError13;
		                  }
		                }
		              }
		            }
		          }
		        } catch (err) {
		          _didIteratorError12 = true;
		          _iteratorError12 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion12 && _iterator12.return) {
		              _iterator12.return();
		            }
		          } finally {
		            if (_didIteratorError12) {
		              throw _iteratorError12;
		            }
		          }
		        }
		      } else if (typeof events === 'string') {
		        var _iteratorNormalCompletion14 = true;
		        var _didIteratorError14 = false;
		        var _iteratorError14 = undefined;
		
		        try {
		          for (var _iterator14 = (0, _getIterator3.default)(this), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
		            var _el2 = _step14.value;
		
		            for (var _e in Events) {
		              var _iteratorNormalCompletion15 = true;
		              var _didIteratorError15 = false;
		              var _iteratorError15 = undefined;
		
		              try {
		                for (var _iterator15 = (0, _getIterator3.default)(events.split(' ')), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
		                  var _event = _step15.value;
		
		                  if (Events[_e] && Events[_e].el === _el2 && Events[_e].event === _event) {
		                    Events[_e].el.removeEventListener(Events[_e].event, Events[_e].callback);
		                    delete Events[_e];
		                  }
		                }
		              } catch (err) {
		                _didIteratorError15 = true;
		                _iteratorError15 = err;
		              } finally {
		                try {
		                  if (!_iteratorNormalCompletion15 && _iterator15.return) {
		                    _iterator15.return();
		                  }
		                } finally {
		                  if (_didIteratorError15) {
		                    throw _iteratorError15;
		                  }
		                }
		              }
		            }
		          }
		        } catch (err) {
		          _didIteratorError14 = true;
		          _iteratorError14 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion14 && _iterator14.return) {
		              _iterator14.return();
		            }
		          } finally {
		            if (_didIteratorError14) {
		              throw _iteratorError14;
		            }
		          }
		        }
		      } else if (callback instanceof Function) {
		        var _iteratorNormalCompletion16 = true;
		        var _didIteratorError16 = false;
		        var _iteratorError16 = undefined;
		
		        try {
		          for (var _iterator16 = (0, _getIterator3.default)(this), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
		            var _el3 = _step16.value;
		
		            for (var _e2 in Events) {
		              if (Events[_e2] && Events[_e2].el === _el3 && Events[_e2].callback === callback) {
		                Events[_e2].el.removeEventListener(Events[_e2].event, Events[_e2].callback);
		                delete Events[_e2];
		              }
		            }
		          }
		        } catch (err) {
		          _didIteratorError16 = true;
		          _iteratorError16 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion16 && _iterator16.return) {
		              _iterator16.return();
		            }
		          } finally {
		            if (_didIteratorError16) {
		              throw _iteratorError16;
		            }
		          }
		        }
		      } else {
		        var _iteratorNormalCompletion17 = true;
		        var _didIteratorError17 = false;
		        var _iteratorError17 = undefined;
		
		        try {
		          for (var _iterator17 = (0, _getIterator3.default)(this), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
		            var _el4 = _step17.value;
		
		            for (var _e3 in Events) {
		              if (Events[_e3] && Events[_e3].el === _el4) {
		                Events[_e3].el.removeEventListener(Events[_e3].event, Events[_e3].callback);
		                delete Events[_e3];
		              }
		            }
		          }
		        } catch (err) {
		          _didIteratorError17 = true;
		          _iteratorError17 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion17 && _iterator17.return) {
		              _iterator17.return();
		            }
		          } finally {
		            if (_didIteratorError17) {
		              throw _iteratorError17;
		            }
		          }
		        }
		      }
		      Events = Events.filter(function (el) {
		        return el !== undefined;
		      });
		      return this;
		    }
		  }, {
		    key: 'onBlur',
		    value: function onBlur(callback) {
		      if (!this || !this.length) return this;
		      if (!callback) return this;
		      this.each(function (el) {
		        blurList.push({
		          el: el,
		          callback: callback
		        });
		      });
		      if (!blurEvent) {
		        blurEvent = function blurEvent(e) {
		          var _iteratorNormalCompletion18 = true;
		          var _didIteratorError18 = false;
		          var _iteratorError18 = undefined;
		
		          try {
		            for (var _iterator18 = (0, _getIterator3.default)(blurList), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
		              var item = _step18.value;
		
		              var target = item.el.contains(e.target) || item.el === e.target;
		              if (!target) item.callback.call(item.el, e, item.el);
		            }
		          } catch (err) {
		            _didIteratorError18 = true;
		            _iteratorError18 = err;
		          } finally {
		            try {
		              if (!_iteratorNormalCompletion18 && _iterator18.return) {
		                _iterator18.return();
		              }
		            } finally {
		              if (_didIteratorError18) {
		                throw _iteratorError18;
		              }
		            }
		          }
		        };
		        document.addEventListener('click', blurEvent, false);
		        document.addEventListener('touchstart', blurEvent, false);
		      }
		      return this;
		    }
		  }, {
		    key: 'offBlur',
		    value: function offBlur(callback) {
		      this.each(function (el) {
		        for (var e in blurList) {
		          if (blurList[e] && blurList[e].el === el && (!callback || blurList[e].callback === callback)) {
		            delete blurList[e];
		          }
		        }
		      });
		      blurList = blurList.filter(function (el) {
		        return el !== undefined;
		      });
		      return this;
		    }
		  }, {
		    key: 'asArray',
		    get: function get() {
		      return ArrayProto.slice.call(this);
		    }
		  }]);
		  return NodeList;
		}();
		
		var NL = NodeList.prototype;
		
		function flatten(arr, owner) {
		  var list = [];
		  var _iteratorNormalCompletion19 = true;
		  var _didIteratorError19 = false;
		  var _iteratorError19 = undefined;
		
		  try {
		    for (var _iterator19 = (0, _getIterator3.default)(arr), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
		      var el = _step19.value;
		
		      if (el instanceof Node || el === null) {
		        if (!~list.indexOf(el)) list.push(el);
		      } else if (el instanceof window.NodeList || el instanceof NodeList || el instanceof HTMLCollection || el instanceof Array) {
		        var _iteratorNormalCompletion20 = true;
		        var _didIteratorError20 = false;
		        var _iteratorError20 = undefined;
		
		        try {
		          for (var _iterator20 = (0, _getIterator3.default)(el), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
		            var el2 = _step20.value;
		            list.push(el2);
		          }
		        } catch (err) {
		          _didIteratorError20 = true;
		          _iteratorError20 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion20 && _iterator20.return) {
		              _iterator20.return();
		            }
		          } finally {
		            if (_didIteratorError20) {
		              throw _iteratorError20;
		            }
		          }
		        }
		      } else {
		        arr.get = NL.get;
		        arr.set = NL.set;
		        arr.call = NL.call;
		        arr.owner = owner;
		        return arr;
		      }
		    }
		  } catch (err) {
		    _didIteratorError19 = true;
		    _iteratorError19 = err;
		  } finally {
		    try {
		      if (!_iteratorNormalCompletion19 && _iterator19.return) {
		        _iterator19.return();
		      }
		    } finally {
		      if (_didIteratorError19) {
		        throw _iteratorError19;
		      }
		    }
		  }
		
		  return new NodeList([list, owner]);
		}
		
		(0, _getOwnPropertyNames2.default)(ArrayProto).forEach(function (key) {
		  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && NL[key] === undefined) {
		    NL[key] = ArrayProto[key];
		  }
		});
		if (window.Symbol && _iterator25.default) {
		  NL[_iterator25.default] = NL.values = ArrayProto[_iterator25.default];
		}
		var div = document.createElement('div');
		function setterGetter(prop) {
		  var _this3 = this,
		      _arguments = arguments;
		
		  if (div[prop] instanceof Function) {
		    NL[prop] = function () {
		      var arr = [];
		      var returnThis = true;
		      var _iteratorNormalCompletion21 = true;
		      var _didIteratorError21 = false;
		      var _iteratorError21 = undefined;
		
		      try {
		        for (var _iterator21 = (0, _getIterator3.default)(NL), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
		          var el = _step21.value;
		
		          if (el && el[prop] instanceof Function) {
		            el = el[prop].apply(el, _arguments);
		            arr.push(el);
		            if (returnThis && el !== undefined) {
		              returnThis = false;
		            }
		          } else {
		            arr.push(undefined);
		          }
		        }
		      } catch (err) {
		        _didIteratorError21 = true;
		        _iteratorError21 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion21 && _iterator21.return) {
		            _iterator21.return();
		          }
		        } finally {
		          if (_didIteratorError21) {
		            throw _iteratorError21;
		          }
		        }
		      }
		
		      return returnThis ? _this3 : flatten(arr, _this3);
		    };
		  } else {
		    (0, _defineProperty2.default)(NL, prop, {
		      get: function get() {
		        var arr = [];
		        var _iteratorNormalCompletion22 = true;
		        var _didIteratorError22 = false;
		        var _iteratorError22 = undefined;
		
		        try {
		          for (var _iterator22 = (0, _getIterator3.default)(this), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
		            var el = _step22.value;
		
		            if (el !== null) {
		              el = el[prop];
		            }
		            arr.push(el);
		          }
		        } catch (err) {
		          _didIteratorError22 = true;
		          _iteratorError22 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion22 && _iterator22.return) {
		              _iterator22.return();
		            }
		          } finally {
		            if (_didIteratorError22) {
		              throw _iteratorError22;
		            }
		          }
		        }
		
		        return flatten(arr, this);
		      },
		      set: function set(value) {
		        var _iteratorNormalCompletion23 = true;
		        var _didIteratorError23 = false;
		        var _iteratorError23 = undefined;
		
		        try {
		          for (var _iterator23 = (0, _getIterator3.default)(this), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
		            var el = _step23.value;
		
		            if (el && prop in el) {
		              el[prop] = value;
		            }
		          }
		        } catch (err) {
		          _didIteratorError23 = true;
		          _iteratorError23 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion23 && _iterator23.return) {
		              _iterator23.return();
		            }
		          } finally {
		            if (_didIteratorError23) {
		              throw _iteratorError23;
		            }
		          }
		        }
		      }
		    });
		  }
		}
		for (var prop in div) {
		  setterGetter(prop);
		}function NodeListJS() {
		  return new NodeList(arguments);
		}
		window.NL = NodeListJS;
		
		exports.default = NodeListJS;
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(28), __esModule: true };
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(29);
		var $Object = __webpack_require__(32).Object;
		module.exports = function defineProperty(it, key, desc){
		  return $Object.defineProperty(it, key, desc);
		};
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
		var $export = __webpack_require__(30);
		// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
		$export($export.S + $export.F * !__webpack_require__(40), 'Object', {defineProperty: __webpack_require__(36).f});
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global    = __webpack_require__(31)
		  , core      = __webpack_require__(32)
		  , ctx       = __webpack_require__(33)
		  , hide      = __webpack_require__(35)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;
	
	/***/ },
	/* 31 */
	/***/ function(module, exports) {
	
		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
	
	/***/ },
	/* 32 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		// optional / simple context binding
		var aFunction = __webpack_require__(34);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};
	
	/***/ },
	/* 34 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP         = __webpack_require__(36)
		  , createDesc = __webpack_require__(44);
		module.exports = __webpack_require__(40) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject       = __webpack_require__(37)
		  , IE8_DOM_DEFINE = __webpack_require__(39)
		  , toPrimitive    = __webpack_require__(43)
		  , dP             = Object.defineProperty;
		
		exports.f = __webpack_require__(40) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(38);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};
	
	/***/ },
	/* 38 */
	/***/ function(module, exports) {
	
		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = !__webpack_require__(40) && !__webpack_require__(41)(function(){
		  return Object.defineProperty(__webpack_require__(42)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(41)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});
	
	/***/ },
	/* 41 */
	/***/ function(module, exports) {
	
		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
		var isObject = __webpack_require__(38)
		  , document = __webpack_require__(31).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(38);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};
	
	/***/ },
	/* 44 */
	/***/ function(module, exports) {
	
		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(46), __esModule: true };
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(47);
		__webpack_require__(76);
		module.exports = __webpack_require__(80).f('iterator');
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var $at  = __webpack_require__(48)(true);
		
		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(51)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(49)
		  , defined   = __webpack_require__(50);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};
	
	/***/ },
	/* 49 */
	/***/ function(module, exports) {
	
		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};
	
	/***/ },
	/* 50 */
	/***/ function(module, exports) {
	
		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var LIBRARY        = __webpack_require__(52)
		  , $export        = __webpack_require__(30)
		  , redefine       = __webpack_require__(53)
		  , hide           = __webpack_require__(35)
		  , has            = __webpack_require__(54)
		  , Iterators      = __webpack_require__(55)
		  , $iterCreate    = __webpack_require__(56)
		  , setToStringTag = __webpack_require__(72)
		  , getPrototypeOf = __webpack_require__(74)
		  , ITERATOR       = __webpack_require__(73)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';
		
		var returnThis = function(){ return this; };
		
		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};
	
	/***/ },
	/* 52 */
	/***/ function(module, exports) {
	
		module.exports = true;
	
	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(35);
	
	/***/ },
	/* 54 */
	/***/ function(module, exports) {
	
		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};
	
	/***/ },
	/* 55 */
	/***/ function(module, exports) {
	
		module.exports = {};
	
	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var create         = __webpack_require__(57)
		  , descriptor     = __webpack_require__(44)
		  , setToStringTag = __webpack_require__(72)
		  , IteratorPrototype = {};
		
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(35)(IteratorPrototype, __webpack_require__(73)('iterator'), function(){ return this; });
		
		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(37)
		  , dPs         = __webpack_require__(58)
		  , enumBugKeys = __webpack_require__(70)
		  , IE_PROTO    = __webpack_require__(67)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';
		
		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(42)('iframe')
		    , i      = enumBugKeys.length
		    , lt     = '<'
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(71).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};
		
		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};
	
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
		var dP       = __webpack_require__(36)
		  , anObject = __webpack_require__(37)
		  , getKeys  = __webpack_require__(59);
		
		module.exports = __webpack_require__(40) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(60)
		  , enumBugKeys = __webpack_require__(70);
		
		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
		var has          = __webpack_require__(54)
		  , toIObject    = __webpack_require__(61)
		  , arrayIndexOf = __webpack_require__(64)(false)
		  , IE_PROTO     = __webpack_require__(67)('IE_PROTO');
		
		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(62)
		  , defined = __webpack_require__(50);
		module.exports = function(it){
		  return IObject(defined(it));
		};
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(63);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};
	
	/***/ },
	/* 63 */
	/***/ function(module, exports) {
	
		var toString = {}.toString;
		
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(61)
		  , toLength  = __webpack_require__(65)
		  , toIndex   = __webpack_require__(66);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.15 ToLength
		var toInteger = __webpack_require__(49)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};
	
	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
	
		var toInteger = __webpack_require__(49)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};
	
	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
	
		var shared = __webpack_require__(68)('keys')
		  , uid    = __webpack_require__(69);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};
	
	/***/ },
	/* 68 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global = __webpack_require__(31)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};
	
	/***/ },
	/* 69 */
	/***/ function(module, exports) {
	
		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};
	
	/***/ },
	/* 70 */
	/***/ function(module, exports) {
	
		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(31).document && document.documentElement;
	
	/***/ },
	/* 72 */
	/***/ function(module, exports, __webpack_require__) {
	
		var def = __webpack_require__(36).f
		  , has = __webpack_require__(54)
		  , TAG = __webpack_require__(73)('toStringTag');
		
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};
	
	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {
	
		var store      = __webpack_require__(68)('wks')
		  , uid        = __webpack_require__(69)
		  , Symbol     = __webpack_require__(31).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';
		
		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};
		
		$exports.store = store;
	
	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(54)
		  , toObject    = __webpack_require__(75)
		  , IE_PROTO    = __webpack_require__(67)('IE_PROTO')
		  , ObjectProto = Object.prototype;
		
		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};
	
	/***/ },
	/* 75 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(50);
		module.exports = function(it){
		  return Object(defined(it));
		};
	
	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(77);
		var global        = __webpack_require__(31)
		  , hide          = __webpack_require__(35)
		  , Iterators     = __webpack_require__(55)
		  , TO_STRING_TAG = __webpack_require__(73)('toStringTag');
		
		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype;
		  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		  Iterators[NAME] = Iterators.Array;
		}
	
	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		var addToUnscopables = __webpack_require__(78)
		  , step             = __webpack_require__(79)
		  , Iterators        = __webpack_require__(55)
		  , toIObject        = __webpack_require__(61);
		
		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(51)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');
		
		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;
		
		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');
	
	/***/ },
	/* 78 */
	/***/ function(module, exports) {
	
		module.exports = function(){ /* empty */ };
	
	/***/ },
	/* 79 */
	/***/ function(module, exports) {
	
		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};
	
	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports.f = __webpack_require__(73);
	
	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(82), __esModule: true };
	
	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(83);
		var $Object = __webpack_require__(32).Object;
		module.exports = function getOwnPropertyNames(it){
		  return $Object.getOwnPropertyNames(it);
		};
	
	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.7 Object.getOwnPropertyNames(O)
		__webpack_require__(84)('getOwnPropertyNames', function(){
		  return __webpack_require__(85).f;
		});
	
	/***/ },
	/* 84 */
	/***/ function(module, exports, __webpack_require__) {
	
		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(30)
		  , core    = __webpack_require__(32)
		  , fails   = __webpack_require__(41);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};
	
	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {
	
		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(61)
		  , gOPN      = __webpack_require__(86).f
		  , toString  = {}.toString;
		
		var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];
		
		var getWindowNames = function(it){
		  try {
		    return gOPN(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};
		
		module.exports.f = function getOwnPropertyNames(it){
		  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
		};
	
	
	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
		var $keys      = __webpack_require__(60)
		  , hiddenKeys = __webpack_require__(70).concat('length', 'prototype');
		
		exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
		  return $keys(O, hiddenKeys);
		};
	
	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(88), __esModule: true };
	
	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(76);
		__webpack_require__(47);
		module.exports = __webpack_require__(89);
	
	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {
	
		var anObject = __webpack_require__(37)
		  , get      = __webpack_require__(90);
		module.exports = __webpack_require__(32).getIterator = function(it){
		  var iterFn = get(it);
		  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
		  return anObject(iterFn.call(it));
		};
	
	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {
	
		var classof   = __webpack_require__(91)
		  , ITERATOR  = __webpack_require__(73)('iterator')
		  , Iterators = __webpack_require__(55);
		module.exports = __webpack_require__(32).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};
	
	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {
	
		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(63)
		  , TAG = __webpack_require__(73)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
		
		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};
		
		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};
	
	/***/ },
	/* 92 */
	/***/ function(module, exports) {
	
		"use strict";
		
		exports.__esModule = true;
		
		exports.default = function (instance, Constructor) {
		  if (!(instance instanceof Constructor)) {
		    throw new TypeError("Cannot call a class as a function");
		  }
		};
	
	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		
		exports.__esModule = true;
		
		var _defineProperty = __webpack_require__(27);
		
		var _defineProperty2 = _interopRequireDefault(_defineProperty);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = function () {
		  function defineProperties(target, props) {
		    for (var i = 0; i < props.length; i++) {
		      var descriptor = props[i];
		      descriptor.enumerable = descriptor.enumerable || false;
		      descriptor.configurable = true;
		      if ("value" in descriptor) descriptor.writable = true;
		      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
		    }
		  }
		
		  return function (Constructor, protoProps, staticProps) {
		    if (protoProps) defineProperties(Constructor.prototype, protoProps);
		    if (staticProps) defineProperties(Constructor, staticProps);
		    return Constructor;
		  };
		}();
	
	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(95)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(97)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Accordion.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Accordion.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    type: {
		      type: String,
		      default: null
		    },
		    oneAtAtime: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    }
		  },
		  created: function created() {
		    var _this = this;
		
		    this._isAccordion = true;
		    this.$on('isOpenEvent', function (child) {
		      if (_this.oneAtAtime) {
		        _this.$children.forEach(function (item) {
		          if (child !== item) {
		            item.isOpen = false;
		          }
		        });
		      }
		    });
		  }
		};
		// </script>
		// <template>
		
		//   <div class="panel-group">
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.coerce = undefined;
		
		var _getIterator2 = __webpack_require__(87);
		
		var _getIterator3 = _interopRequireDefault(_getIterator2);
		
		exports.callAjax = callAjax;
		exports.getScrollBarWidth = getScrollBarWidth;
		exports.translations = translations;
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// coerce convert som types of data into another type
		var coerce = exports.coerce = {
		  // Convert a string to booleam. Otherwise, return the value without modification, so if is not boolean, Vue throw a warning.
		  boolean: function boolean(val) {
		    return typeof val !== 'string' ? val : val === 'true' ? true : val === 'false' ? false : val === 'null' ? false : val === 'undefined' ? false : val;
		  },
		  // Attempt to convert a string value to a Number. Otherwise, return 0.
		  number: function number(val) {
		    var alt = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
		    return typeof val === 'number' ? val : val === undefined || val === null || isNaN(Number(val)) ? alt : Number(val);
		  }
		};
		
		// callAjax (only get)
		function callAjax(url, callback) {
		  var request = new window.XMLHttpRequest();
		  var data = {};
		  // p (-simulated- promise)
		  var p = {
		    then: function then(fn1, fn2, fn3) {
		      return p.done(fn1).fail(fn2).always(fn3);
		    }
		  };
		  var _arr = ['done', 'fail', 'always'];
		
		  var _loop = function _loop() {
		    var name = _arr[_i];
		    data[name] = [];
		    p[name] = function (fn) {
		      if (fn instanceof Function) data[name].push(fn);
		      return p;
		    };
		  };
		
		  for (var _i = 0; _i < _arr.length; _i++) {
		    _loop();
		  }
		  p.done(callback);
		  request.onreadystatechange = function () {
		    if (request.readyState === 4) {
		      if (request.status === 200) {
		        try {
		          var response = JSON.parse(request.responseText);
		          var _iteratorNormalCompletion = true;
		          var _didIteratorError = false;
		          var _iteratorError = undefined;
		
		          try {
		            for (var _iterator = (0, _getIterator3.default)(data.done), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		              var done = _step.value;
		              done(response);
		            }
		          } catch (err) {
		            _didIteratorError = true;
		            _iteratorError = err;
		          } finally {
		            try {
		              if (!_iteratorNormalCompletion && _iterator.return) {
		                _iterator.return();
		              }
		            } finally {
		              if (_didIteratorError) {
		                throw _iteratorError;
		              }
		            }
		          }
		        } catch (e) {
		          var _iteratorNormalCompletion2 = true;
		          var _didIteratorError2 = false;
		          var _iteratorError2 = undefined;
		
		          try {
		            for (var _iterator2 = (0, _getIterator3.default)(data.fail), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		              var fail = _step2.value;
		              fail(e);
		            }
		          } catch (err) {
		            _didIteratorError2 = true;
		            _iteratorError2 = err;
		          } finally {
		            try {
		              if (!_iteratorNormalCompletion2 && _iterator2.return) {
		                _iterator2.return();
		              }
		            } finally {
		              if (_didIteratorError2) {
		                throw _iteratorError2;
		              }
		            }
		          }
		        }
		      } else {
		        var _iteratorNormalCompletion3 = true;
		        var _didIteratorError3 = false;
		        var _iteratorError3 = undefined;
		
		        try {
		          for (var _iterator3 = (0, _getIterator3.default)(data.fail), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
		            var _fail = _step3.value;
		
		            _fail({ status: request.status });
		          }
		        } catch (err) {
		          _didIteratorError3 = true;
		          _iteratorError3 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion3 && _iterator3.return) {
		              _iterator3.return();
		            }
		          } finally {
		            if (_didIteratorError3) {
		              throw _iteratorError3;
		            }
		          }
		        }
		      }
		      var _iteratorNormalCompletion4 = true;
		      var _didIteratorError4 = false;
		      var _iteratorError4 = undefined;
		
		      try {
		        for (var _iterator4 = (0, _getIterator3.default)(data.always), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
		          var always = _step4.value;
		
		          always({ status: request.status });
		        }
		      } catch (err) {
		        _didIteratorError4 = true;
		        _iteratorError4 = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion4 && _iterator4.return) {
		            _iterator4.return();
		          }
		        } finally {
		          if (_didIteratorError4) {
		            throw _iteratorError4;
		          }
		        }
		      }
		    }
		  };
		  request.open('GET', url);
		  request.setRequestHeader('Accept', 'application/json');
		  request.send();
		  return p;
		}
		
		function getScrollBarWidth() {
		  if (document.documentElement.scrollHeight <= document.documentElement.clientHeight) {
		    return 0;
		  }
		  var inner = document.createElement('p');
		  inner.style.width = '100%';
		  inner.style.height = '200px';
		
		  var outer = document.createElement('div');
		  outer.style.position = 'absolute';
		  outer.style.top = '0px';
		  outer.style.left = '0px';
		  outer.style.visibility = 'hidden';
		  outer.style.width = '200px';
		  outer.style.height = '150px';
		  outer.style.overflow = 'hidden';
		  outer.appendChild(inner);
		
		  document.body.appendChild(outer);
		  var w1 = inner.offsetWidth;
		  outer.style.overflow = 'scroll';
		  var w2 = inner.offsetWidth;
		  if (w1 === w2) w2 = outer.clientWidth;
		
		  document.body.removeChild(outer);
		
		  return w1 - w2;
		}
		
		// return all the translations or the default language (english)
		function translations(lang) {
		  lang = lang || 'en';
		  var text = {
		    daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		    limit: 'Limit reached ({{limit}} items max).',
		    loading: 'Loading...',
		    minLength: 'Min. Length',
		    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		    notSelected: 'Nothing Selected',
		    required: 'Required',
		    search: 'Search'
		  };
		  return window.VueStrapLang ? window.VueStrapLang(lang) : text;
		}
	
	/***/ },
	/* 97 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"panel-group\">\r\n    <slot></slot>\r\n  </div>";
	
	/***/ },
	/* 98 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(99)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(100)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Affix.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Affix.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <div class="hidden-print hidden-xs hidden-sm">
		
		//     <nav class="bs-docs-sidebar" :class="{affix:affixed}" :style="{marginTop:top}">
		
		//       <slot></slot>
		
		//     </nav>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    offset: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 0
		    }
		  },
		  data: function data() {
		    return {
		      affixed: false
		    };
		  },
		
		  computed: {
		    top: function top() {
		      return this.offset > 0 ? this.offset + 'px' : null;
		    }
		  },
		  methods: {
		    // from https://github.com/ant-design/ant-design/blob/master/components/affix/index.jsx#L20
		    checkScroll: function checkScroll() {
		      // if is hidden don't calculate anything
		      if (!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
		        return;
		      }
		      // get window scroll and element position to detect if have to be normal or affixed
		      var scroll = {};
		      var element = {};
		      var rect = this.$el.getBoundingClientRect();
		      var body = document.body;
		      var _arr = ['Top', 'Left'];
		      for (var _i = 0; _i < _arr.length; _i++) {
		        var type = _arr[_i];
		        var t = type.toLowerCase();
		        var ret = window['page' + (type === 'Top' ? 'Y' : 'X') + 'Offset'];
		        var method = 'scroll' + type;
		        if (typeof ret !== 'number') {
		          // ie6,7,8 standard mode
		          ret = document.documentElement[method];
		          if (typeof ret !== 'number') {
		            // quirks mode
		            ret = document.body[method];
		          }
		        }
		        scroll[t] = ret;
		        element[t] = scroll[t] + rect[t] - (this.$el['client' + type] || body['client' + type] || 0);
		      }
		      var fix = scroll.top > element.top - this.offset;
		      if (this.affixed !== fix) {
		        this.affixed = fix;
		      }
		    }
		  },
		  ready: function ready() {
		    var _this = this;
		
		    this.checkScroll();
		    (0, _NodeList2.default)(window).on('scroll resize', function () {
		      return _this.checkScroll();
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    var _this2 = this;
		
		    (0, _NodeList2.default)(window).off('scroll resize', function () {
		      return _this2.checkScroll();
		    });
		  }
		};
		// </script>
	
	/***/ },
	/* 100 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"hidden-print hidden-xs hidden-sm\">\r\n    <nav class=\"bs-docs-sidebar\" :class=\"{affix:affixed}\" :style=\"{marginTop:top}\">\r\n      <slot></slot>\r\n    </nav>\r\n  </div>";
	
	/***/ },
	/* 101 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(102)
		module.exports = __webpack_require__(106)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(107)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Alert.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Alert.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(103);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-af7c1f6a&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-af7c1f6a&file=Alert.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Alert.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".fade-transition {\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n}\r\n.fade-enter,\r\n.fade-leave {\r\n  height: 0;\r\n  opacity: 0;\r\n}\r\n.alert.top {\r\n  position: fixed;\r\n  top: 30px;\r\n  margin: 0 auto;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 1050;\r\n}\r\n.alert.top-right {\r\n  position: fixed;\r\n  top: 30px;\r\n  right: 50px;\r\n  z-index: 1050;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 104 */
	/***/ function(module, exports) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];
		
			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};
		
			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};
	
	
	/***/ },
	/* 105 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];
		
		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}
		
			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();
		
			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
		
			var styles = listToStyles(list);
			addStylesToDom(styles, options);
		
			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}
		
		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}
		
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
		
		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}
		
		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}
		
		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}
		
		function createLinkElement(options) {
			var linkElement = document.createElement("link");
			linkElement.rel = "stylesheet";
			insertStyleElement(options, linkElement);
			return linkElement;
		}
		
		function addStyle(obj, options) {
			var styleElement, update, remove;
		
			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement(options);
				update = updateLink.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}
		
			update(obj);
		
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}
		
		var replaceText = (function () {
			var textStore = [];
		
			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();
		
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
		
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
		
		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
		
			if(media) {
				styleElement.setAttribute("media", media)
			}
		
			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}
		
		function updateLink(linkElement, obj) {
			var css = obj.css;
			var sourceMap = obj.sourceMap;
		
			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}
		
			var blob = new Blob([css], { type: "text/css" });
		
			var oldSrc = linkElement.href;
		
			linkElement.href = URL.createObjectURL(blob);
		
			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}
	
	
	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    type: {
		      type: String
		    },
		    dismissable: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    show: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true,
		      twoWay: true
		    },
		    duration: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 0
		    },
		    width: {
		      type: String
		    },
		    placement: {
		      type: String
		    }
		  },
		  watch: {
		    show: function show(val) {
		      var _this = this;
		
		      if (this._timeout) clearTimeout(this._timeout);
		      if (val && Boolean(this.duration)) {
		        this._timeout = setTimeout(function () {
		          _this.show = false;
		        }, this.duration);
		      }
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .fade-transition {
		
		//   transition: opacity .3s ease;
		
		// }
		
		// .fade-enter,
		
		// .fade-leave {
		
		//   height: 0;
		
		//   opacity: 0;
		
		// }
		
		// .alert.top {
		
		//   position: fixed;
		
		//   top: 30px;
		
		//   margin: 0 auto;
		
		//   left: 0;
		
		//   right: 0;
		
		//   z-index: 1050;
		
		// }
		
		// .alert.top-right {
		
		//   position: fixed;
		
		//   top: 30px;
		
		//   right: 50px;
		
		//   z-index: 1050;
		
		// }
		
		// </style>
		// <template>
		
		//   <div
		
		//     v-show="show"
		
		//     v-bind:class="{
		
		//       'alert':		true,
		
		//       'alert-success':(type == 'success'),
		
		//       'alert-warning':(type == 'warning'),
		
		//       'alert-info':	(type == 'info'),
		
		//       'alert-danger':	(type == 'danger'),
		
		//       'top': 			(placement === 'top'),
		
		//       'top-right': 	(placement === 'top-right')
		
		//     }"
		
		//     transition="fade"
		
		//     v-bind:style="{width:width}"
		
		//     role="alert">
		
		//     <button v-show="dismissable" type="button" class="close"
		
		//       @click="show = false">
		
		//       <span>&times;</span>
		
		//     </button>
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 107 */
	/***/ function(module, exports) {
	
		module.exports = "<div\r\n    v-show=\"show\"\r\n    v-bind:class=\"{\r\n      'alert':\t\ttrue,\r\n      'alert-success':(type == 'success'),\r\n      'alert-warning':(type == 'warning'),\r\n      'alert-info':\t(type == 'info'),\r\n      'alert-danger':\t(type == 'danger'),\r\n      'top': \t\t\t(placement === 'top'),\r\n      'top-right': \t(placement === 'top-right')\r\n    }\"\r\n    transition=\"fade\"\r\n    v-bind:style=\"{width:width}\"\r\n    role=\"alert\">\r\n    <button v-show=\"dismissable\" type=\"button\" class=\"close\"\r\n      @click=\"show = false\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <slot></slot>\r\n  </div>";
	
	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(109)
		module.exports = __webpack_require__(111)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(112)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Aside.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Aside.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(110);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3a4bde27&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3a4bde27&file=Aside.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Aside.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".aside-open {\r\n  -webkit-transition: -webkit-transform 0.3s;\r\n  transition: -webkit-transform 0.3s;\r\n  transition: transform 0.3s;\r\n  transition: transform 0.3s, -webkit-transform 0.3s;\r\n}\r\n.aside-open.has-push-right {\r\n  -webkit-transform: translateX(-300px);\r\n          transform: translateX(-300px);\r\n}\r\n.aside {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1049;\r\n    overflow: auto;\r\n    background: #fff;\r\n}\r\n.aside.left {\r\n  left: 0;\r\n  right: auto;\r\n}\r\n.aside.right {\r\n  left: auto;\r\n  right: 0;\r\n}\r\n.slideleft-enter {\r\n  -webkit-animation:slideleft-in .3s;\r\n          animation:slideleft-in .3s;\r\n}\r\n.slideleft-leave {\r\n  -webkit-animation:slideleft-out .3s;\r\n          animation:slideleft-out .3s;\r\n}\r\n@-webkit-keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideleft-in {\r\n  0% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideleft-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.slideright-enter {\r\n  -webkit-animation:slideright-in .3s;\r\n          animation:slideright-in .3s;\r\n}\r\n.slideright-leave {\r\n  -webkit-animation:slideright-out .3s;\r\n          animation:slideright-out .3s;\r\n}\r\n@-webkit-keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes slideright-in {\r\n  0% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes slideright-out {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    opacity: 0;\r\n  }\r\n}\r\n.aside:focus {\r\n    outline: 0\r\n}\r\n@media (max-width: 991px) {\r\n  .aside {\r\n    min-width:240px\r\n  }\r\n}\r\n.aside.left {\r\n  right: auto;\r\n  left: 0\r\n}\r\n.aside.right {\r\n  right: 0;\r\n  left: auto\r\n}\r\n.aside .aside-dialog .aside-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  min-height: 16.43px;\r\n  padding: 6px 15px;\r\n  background: #337ab7;\r\n  color: #fff\r\n}\r\n.aside .aside-dialog .aside-header .close {\r\n  margin-right: -8px;\r\n  padding: 4px 8px;\r\n  color: #fff;\r\n  font-size: 25px;\r\n  opacity: .8\r\n}\r\n.aside .aside-dialog .aside-body {\r\n  position: relative;\r\n  padding: 15px\r\n}\r\n.aside .aside-dialog .aside-footer {\r\n  padding: 15px;\r\n  text-align: right;\r\n  border-top: 1px solid #e5e5e5\r\n}\r\n.aside .aside-dialog .aside-footer .btn+.btn {\r\n  margin-left: 5px;\r\n  margin-bottom: 0\r\n}\r\n.aside .aside-dialog .aside-footer .btn-group .btn+.btn {\r\n  margin-left: -1px\r\n}\r\n.aside .aside-dialog .aside-footer .btn-block+.btn-block {\r\n  margin-left: 0\r\n}\r\n.aside-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  opacity: 0;\r\n  -webkit-transition: opacity .3s ease;\r\n  transition: opacity .3s ease;\r\n  background-color: #000\r\n}\r\n.aside-backdrop.in {\r\n  opacity: .5;\r\n  filter: alpha(opacity=50)\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <div class="aside"
		
		//     v-bind:style="{width:width + 'px'}"
		
		//     v-bind:class="{
		
		//     left:placement === 'left',
		
		//     right:placement === 'right'
		
		//     }"
		
		//     v-show="show"
		
		//     :transition="(this.placement === 'left') ? 'slideleft' : 'slideright'">
		
		//     <div class="aside-dialog">
		
		//       <div class="aside-content">
		
		//         <div class="aside-header">
		
		//           <button type="button" class="close" @click='close'><span>&times;</span></button>
		
		//           <h4 class="aside-title">
		
		//           <slot name="header">
		
		//             {{ header }}
		
		//           </slot>
		
		//           </h4>
		
		//         </div>
		
		//         <div class="aside-body">
		
		//           <slot></slot>
		
		//         </div>
		
		//       </div>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    show: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      required: true,
		      twoWay: true
		    },
		    placement: {
		      type: String,
		      default: 'right'
		    },
		    header: {
		      type: String
		    },
		    width: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 320
		    }
		  },
		  watch: {
		    show: function show(val) {
		      var _this = this;
		
		      var body = document.body;
		      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
		      if (val) {
		        if (!this._backdrop) {
		          this._backdrop = document.createElement('div');
		        }
		        this._backdrop.className = 'aside-backdrop';
		        body.appendChild(this._backdrop);
		        body.classList.add('modal-open');
		        if (scrollBarWidth !== 0) {
		          body.style.paddingRight = scrollBarWidth + 'px';
		        }
		        // request property that requires layout to force a layout
		        var x = this._backdrop.clientHeight;
		        this._backdrop.classList.add('in');
		        (0, _NodeList2.default)(this._backdrop).on('click', function () {
		          return _this.close();
		        });
		      } else {
		        (0, _NodeList2.default)(this._backdrop).on('transitionend', function () {
		          (0, _NodeList2.default)(_this._backdrop).off();
		          try {
		            body.classList.remove('modal-open');
		            body.style.paddingRight = '0';
		            body.removeChild(_this._backdrop);
		            _this._backdrop = null;
		          } catch (e) {}
		        });
		        this._backdrop.className = 'aside-backdrop';
		      }
		    }
		  },
		  methods: {
		    close: function close() {
		      this.show = false;
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .aside-open {
		
		//   transition: transform 0.3s;
		
		// }
		
		// .aside-open.has-push-right {
		
		//   transform: translateX(-300px);
		
		// }
		
		// .aside {
		
		//     position: fixed;
		
		//     top: 0;
		
		//     bottom: 0;
		
		//     z-index: 1049;
		
		//     overflow: auto;
		
		//     background: #fff;
		
		// }
		
		// .aside.left {
		
		//   left: 0;
		
		//   right: auto;
		
		// }
		
		// .aside.right {
		
		//   left: auto;
		
		//   right: 0;
		
		// }
		
		// .slideleft-enter {
		
		//   animation:slideleft-in .3s;
		
		// }
		
		// .slideleft-leave {
		
		//   animation:slideleft-out .3s;
		
		// }
		
		// @keyframes slideleft-in {
		
		//   0% {
		
		//     transform: translateX(-100%);
		
		//     opacity: 0;
		
		//   }
		
		//   100% {
		
		//     transform: translateX(0);
		
		//     opacity: 1;
		
		//   }
		
		// }
		
		// @keyframes slideleft-out {
		
		//   0% {
		
		//     transform: translateX(0);
		
		//     opacity: 1;
		
		//   }
		
		//   100% {
		
		//     transform: translateX(-100%);
		
		//     opacity: 0;
		
		//   }
		
		// }
		
		// .slideright-enter {
		
		//   animation:slideright-in .3s;
		
		// }
		
		// .slideright-leave {
		
		//   animation:slideright-out .3s;
		
		// }
		
		// @keyframes slideright-in {
		
		//   0% {
		
		//     transform: translateX(100%);
		
		//     opacity: 0;
		
		//   }
		
		//   100% {
		
		//     transform: translateX(0);
		
		//     opacity: 1;
		
		//   }
		
		// }
		
		// @keyframes slideright-out {
		
		//   0% {
		
		//     transform: translateX(0);
		
		//     opacity: 1;
		
		//   }
		
		//   100% {
		
		//     transform: translateX(100%);
		
		//     opacity: 0;
		
		//   }
		
		// }
		
		// .aside:focus {
		
		//     outline: 0
		
		// }
		
		// @media (max-width: 991px) {
		
		//   .aside {
		
		//     min-width:240px
		
		//   }
		
		// }
		
		// .aside.left {
		
		//   right: auto;
		
		//   left: 0
		
		// }
		
		// .aside.right {
		
		//   right: 0;
		
		//   left: auto
		
		// }
		
		// .aside .aside-dialog .aside-header {
		
		//   border-bottom: 1px solid #e5e5e5;
		
		//   min-height: 16.43px;
		
		//   padding: 6px 15px;
		
		//   background: #337ab7;
		
		//   color: #fff
		
		// }
		
		// .aside .aside-dialog .aside-header .close {
		
		//   margin-right: -8px;
		
		//   padding: 4px 8px;
		
		//   color: #fff;
		
		//   font-size: 25px;
		
		//   opacity: .8
		
		// }
		
		// .aside .aside-dialog .aside-body {
		
		//   position: relative;
		
		//   padding: 15px
		
		// }
		
		// .aside .aside-dialog .aside-footer {
		
		//   padding: 15px;
		
		//   text-align: right;
		
		//   border-top: 1px solid #e5e5e5
		
		// }
		
		// .aside .aside-dialog .aside-footer .btn+.btn {
		
		//   margin-left: 5px;
		
		//   margin-bottom: 0
		
		// }
		
		// .aside .aside-dialog .aside-footer .btn-group .btn+.btn {
		
		//   margin-left: -1px
		
		// }
		
		// .aside .aside-dialog .aside-footer .btn-block+.btn-block {
		
		//   margin-left: 0
		
		// }
		
		// .aside-backdrop {
		
		//   position: fixed;
		
		//   top: 0;
		
		//   right: 0;
		
		//   bottom: 0;
		
		//   left: 0;
		
		//   z-index: 1040;
		
		//   opacity: 0;
		
		//   transition: opacity .3s ease;
		
		//   background-color: #000
		
		// }
		
		// .aside-backdrop.in {
		
		//   opacity: .5;
		
		//   filter: alpha(opacity=50)
		
		// }
		
		// </style>
	
	/***/ },
	/* 112 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"aside\"\r\n    v-bind:style=\"{width:width + 'px'}\"\r\n    v-bind:class=\"{\r\n    left:placement === 'left',\r\n    right:placement === 'right'\r\n    }\"\r\n    v-show=\"show\"\r\n    :transition=\"(this.placement === 'left') ? 'slideleft' : 'slideright'\">\r\n    <div class=\"aside-dialog\">\r\n      <div class=\"aside-content\">\r\n        <div class=\"aside-header\">\r\n          <button type=\"button\" class=\"close\" @click='close'><span>&times;</span></button>\r\n          <h4 class=\"aside-title\">\r\n          <slot name=\"header\">\r\n            {{ header }}\r\n          </slot>\r\n          </h4>\r\n        </div>\r\n        <div class=\"aside-body\">\r\n          <slot></slot>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(114)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(115)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./buttonGroup.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./buttonGroup.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    value: null,
		    buttons: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    type: {
		      type: String,
		      default: 'default'
		    }
		  },
		  watch: {
		    value: {
		      deep: true,
		      handler: function handler(val) {
		        this.$children.forEach(function (el) {
		          if (el.group && el.eval) el.eval();
		        });
		      }
		    }
		  },
		  created: function created() {
		    this._btnGroup = true;
		  }
		};
		// </script>
		// <template>
		
		//   <div :class="{'btn-group':buttons}" :data-toggle="buttons&&'buttons'">
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 115 */
	/***/ function(module, exports) {
	
		module.exports = "<div :class=\"{'btn-group':buttons}\" :data-toggle=\"buttons&&'buttons'\">\r\n    <slot></slot>\r\n  </div>";
	
	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(117)
		module.exports = __webpack_require__(119)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(120)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-322dee41&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Carousel.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-322dee41&file=Carousel.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Carousel.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(118);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-322dee41&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-322dee41&file=Carousel.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Carousel.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".carousel-control[_v-322dee41] {\r\n  cursor: pointer;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		// <div class="carousel slide" data-ride="carousel">
		
		//   <!-- Indicators -->
		
		//   <ol class="carousel-indicators" v-show="indicators">
		
		//     <li v-for="i in indicator" @click="indicatorClick($index)" v-bind:class="{active:$index === index}"><span></span></li>
		
		//   </ol>
		
		//   <!-- Wrapper for slides -->
		
		//   <div class="carousel-inner" role="listbox">
		
		//     <slot></slot>
		
		//   </div>
		
		//   <!-- Controls -->
		
		//   <div v-show="controls" class="carousel-controls hidden-xs">
		
		//     <a class="left carousel-control" role="button" @click="prev">
		
		//       <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
		
		//     </a>
		
		//     <a class="right carousel-control" role="button" @click="next">
		
		//       <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		
		//     </a>
		
		//   </div>
		
		// </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    indicators: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    controls: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    interval: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 5000
		    }
		  },
		  data: function data() {
		    return {
		      indicator: [],
		      index: 0,
		      isAnimating: false
		    };
		  },
		
		  watch: {
		    index: function index(newVal, oldVal) {
		      this.slide(newVal > oldVal ? 'left' : 'right', newVal, oldVal);
		    }
		  },
		  methods: {
		    indicatorClick: function indicatorClick(index) {
		      if (this.isAnimating || this.index === index) return false;
		      this.isAnimating = true;
		      this.index = index;
		    },
		    slide: function slide(direction, next, prev) {
		      var _this = this;
		
		      if (!this.$el) {
		        return;
		      }
		      var $slider = (0, _NodeList2.default)('.item', this.$el);
		      if (!$slider.length) {
		        return;
		      }
		      var selected = $slider[next] || $slider[0];
		      (0, _NodeList2.default)(selected).addClass(direction === 'left' ? 'next' : 'prev');
		      // request property that requires layout to force a layout
		      var x = selected.clientHeight;
		      (0, _NodeList2.default)([$slider[prev], selected]).addClass(direction).on('transitionend', function () {
		        $slider.off('transitionend').className = 'item';
		        (0, _NodeList2.default)(selected).addClass('active');
		        _this.isAnimating = false;
		      });
		    },
		    next: function next() {
		      if (!this.$el || this.isAnimating) {
		        return false;
		      }
		      this.isAnimating = true;
		      this.index + 1 < (0, _NodeList2.default)('.item', this.$el).length ? this.index += 1 : this.index = 0;
		    },
		    prev: function prev() {
		      if (!this.$el || this.isAnimating) {
		        return false;
		      }
		      this.isAnimating = true;
		      this.index === 0 ? this.index = (0, _NodeList2.default)('.item', this.$el).length - 1 : this.index -= 1;
		    },
		    toggleInterval: function toggleInterval(val) {
		      if (val === undefined) {
		        val = this._intervalID;
		      }
		      if (this._intervalID) {
		        clearInterval(this._intervalID);
		        delete this._intervalID;
		      }
		      if (val && this.interval > 0) {
		        this._intervalID = setInterval(this.next, this.interval);
		      }
		    }
		  },
		  ready: function ready() {
		    var _this2 = this;
		
		    this.toggleInterval(true);
		    (0, _NodeList2.default)(this.$el).on('mouseenter', function () {
		      return _this2.toggleInterval(false);
		    }).on('mouseleave', function () {
		      return _this2.toggleInterval(true);
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    this.toggleInterval(false);
		    (0, _NodeList2.default)(this.$el).off('mouseenter mouseleave');
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .carousel-control {
		
		//   cursor: pointer;
		
		// }
		
		// </style>
	
	/***/ },
	/* 120 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"carousel slide\" data-ride=\"carousel\" _v-322dee41=\"\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\" v-show=\"indicators\" _v-322dee41=\"\">\n    <li v-for=\"i in indicator\" @click=\"indicatorClick($index)\" v-bind:class=\"{active:$index === index}\" _v-322dee41=\"\"><span _v-322dee41=\"\"></span></li>\n  </ol>\n  <!-- Wrapper for slides -->\n  <div class=\"carousel-inner\" role=\"listbox\" _v-322dee41=\"\">\n    <slot _v-322dee41=\"\"></slot>\n  </div>\n  <!-- Controls -->\n  <div v-show=\"controls\" class=\"carousel-controls hidden-xs\" _v-322dee41=\"\">\n    <a class=\"left carousel-control\" role=\"button\" @click=\"prev\" _v-322dee41=\"\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" _v-322dee41=\"\"></span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" @click=\"next\" _v-322dee41=\"\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" _v-322dee41=\"\"></span>\n    </a>\n  </div>\n</div>";
	
	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(122)
		module.exports = __webpack_require__(124)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(125)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-6922bf24&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Checkbox.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-6922bf24&file=Checkbox.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Checkbox.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 122 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(123);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6922bf24&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6922bf24&file=Checkbox.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Checkbox.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".checkbox[_v-6922bf24] { position: relative; }\r\n.checkbox > label > input[_v-6922bf24] {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: -1;\r\n  padding: 0;\r\n  opacity: 0;\r\n  margin: 0;\r\n}\r\n.checkbox > label > .icon[_v-6922bf24] {\r\n  position: absolute;\r\n  top: .2rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  line-height:1rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .35rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.checkbox:not(.active) > label > .icon[_v-6922bf24] {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.checkbox > label > input:focus ~ .icon[_v-6922bf24] {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.checkbox.active > label > .icon[_v-6922bf24] {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);\r\n}\r\n.checkbox.active .btn-default[_v-6922bf24] { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\n.checkbox.disabled > label > .icon[_v-6922bf24],\r\n.checkbox.readonly > label > .icon[_v-6922bf24],\r\n.btn.readonly[_v-6922bf24] {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=checkbox][_v-6922bf24] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    value: {
		      default: true
		    },
		    checked: {
		      twoWay: true
		    },
		    button: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    name: {
		      type: String,
		      default: null
		    },
		    readonly: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    type: {
		      type: String,
		      default: null
		    }
		  },
		  computed: {
		    active: function active() {
		      return typeof this.value !== 'boolean' && this.group ? ~this.$parent.value.indexOf(this.value) : this.checked === this.value;
		    },
		    buttonStyle: function buttonStyle() {
		      return this.button || this.group && this.$parent.buttons;
		    },
		    group: function group() {
		      return this.$parent && this.$parent._checkboxGroup;
		    },
		    typeColor: function typeColor() {
		      return this.type || this.$parent && this.$parent.type || 'default';
		    }
		  },
		  watch: {
		    checked: function checked(val) {
		      if (typeof this.value !== 'boolean' && this.group) {
		        if (this.checked && !~this.$parent.value.indexOf(this.value)) this.$parent.value.push(this.value);
		        if (!this.checked && ~this.$parent.value.indexOf(this.value)) this.$parent.value.$remove(this.value);
		      }
		    }
		  },
		  created: function created() {
		    if (typeof this.value === 'boolean') {
		      return;
		    }
		    var parent = this.$parent;
		    if (parent && parent._btnGroup && !parent._radioGroup) {
		      parent._checkboxGroup = true;
		      if (!(parent.value instanceof Array)) {
		        parent.value = [];
		      }
		    }
		  },
		  ready: function ready() {
		    if (!this.$parent._checkboxGroup || typeof this.value === 'boolean') {
		      return;
		    }
		    if (this.$parent.value.length) {
		      this.checked = ~this.$parent.value.indexOf(this.value);
		    } else if (this.checked) {
		      this.$parent.value.push(this.value);
		    }
		  },
		
		  methods: {
		    eval: function _eval() {
		      if (typeof this.value !== 'boolean' && this.group) {
		        this.checked = ~this.$parent.value.indexOf(this.value);
		      }
		    },
		    focus: function focus() {
		      this.$els.input.focus();
		    },
		    toggle: function toggle() {
		      if (!this.disabled) {
		        this.focus();
		        if (!this.readonly) {
		          this.checked = this.checked ? null : this.value;
		          if (this.group && typeof this.value !== 'boolean') {
		            var index = this.$parent.value.indexOf(this.value);
		            this.$parent.value[~index ? '$remove' : 'push'](this.value);
		          }
		        }
		      }
		      return false;
		    }
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .checkbox { position: relative; }
		
		// .checkbox > label > input {
		
		//   box-sizing: border-box;
		
		//   position: absolute;
		
		//   z-index: -1;
		
		//   padding: 0;
		
		//   opacity: 0;
		
		//   margin: 0;
		
		// }
		
		// .checkbox > label > .icon {
		
		//   position: absolute;
		
		//   top: .2rem;
		
		//   left: 0;
		
		//   display: block;
		
		//   width: 1.4rem;
		
		//   height: 1.4rem;
		
		//   line-height:1rem;
		
		//   text-align: center;
		
		//   user-select: none;
		
		//   border-radius: .35rem;
		
		//   background-repeat: no-repeat;
		
		//   background-position: center center;
		
		//   background-size: 50% 50%;
		
		// }
		
		// .checkbox:not(.active) > label > .icon {
		
		//   background-color: #ddd;
		
		//   border: 1px solid #bbb;
		
		// }
		
		// .checkbox > label > input:focus ~ .icon {
		
		//   outline: 0;
		
		//   border: 1px solid #66afe9;
		
		//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		
		// }
		
		// .checkbox.active > label > .icon {
		
		//   background-size: 1rem 1rem;
		
		//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNyIgaGVpZ2h0PSI3Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNS43MywwLjUybC0zLjEyNDIyLDMuMzQxNjFsLTEuMzM4OTUsLTEuNDMyMTJsLTEuMjQ5NjksMS4zMzY2NWwyLjU4ODYzLDIuNzY4NzZsNC4zNzM5LC00LjY3ODI2bC0xLjI0OTY5LC0xLjMzNjY1bDAsMGwwLjAwMDAyLDAuMDAwMDF6Ii8+PC9zdmc+);
		
		// }
		
		// .checkbox.active .btn-default { filter: brightness(75%); }
		
		
		// .checkbox.disabled > label > .icon,
		
		// .checkbox.readonly > label > .icon,
		
		// .btn.readonly {
		
		//   filter: alpha(opacity=65);
		
		//   box-shadow: none;
		
		//   opacity: .65;
		
		// }
		
		// label.btn > input[type=checkbox] {
		
		//   position: absolute;
		
		//   clip: rect(0,0,0,0);
		
		//   pointer-events: none;
		
		// }
		
		// </style>
		// <template>
		
		//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
		
		//     <input type="checkbox" autocomplete="off"
		
		//       v-el:input
		
		//       v-show="!readonly"
		
		//       :checked="active"
		
		//       :value="value"
		
		//       :name="name"
		
		//       :readonly="readonly"
		
		//       :disabled="disabled"
		
		//     />
		
		//     <slot></slot>
		
		//   </label>
		
		//   <div v-else :class="['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
		
		//     <label class="open">
		
		//       <input type="checkbox" autocomplete="off"
		
		//         v-el:input
		
		//         :checked="active"
		
		//         :value="value"
		
		//         :name="name"
		
		//         :readonly="readonly"
		
		//         :disabled="disabled"
		
		//       />
		
		//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
		
		//       <span v-if="active&&typeColor==='default'" class="icon"></span>
		
		//       <slot></slot>
		
		//     </label>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 125 */
	/***/ function(module, exports) {
	
		module.exports = "<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-6922bf24=\"\">\n    <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" v-show=\"!readonly\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-6922bf24=\"\">\n    <slot _v-6922bf24=\"\"></slot>\n  </label>\n  <div v-else=\"\" :class=\"['checkbox',typeColor,{active:checked,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\" _v-6922bf24=\"\">\n    <label class=\"open\" _v-6922bf24=\"\">\n      <input type=\"checkbox\" autocomplete=\"off\" v-el:input=\"\" :checked=\"active\" :value=\"value\" :name=\"name\" :readonly=\"readonly\" :disabled=\"disabled\" _v-6922bf24=\"\">\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\" _v-6922bf24=\"\"></span>\n      <span v-if=\"active&amp;&amp;typeColor==='default'\" class=\"icon\" _v-6922bf24=\"\"></span>\n      <slot _v-6922bf24=\"\"></slot>\n    </label>\n  </div>";
	
	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(127)
		module.exports = __webpack_require__(129)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(130)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datepicker.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datepicker.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(128);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-477b8e5d&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-477b8e5d&file=Datepicker.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Datepicker.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 128 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".datepicker{\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\ninput.datepicker-input.with-reset-button {\r\n  padding-right: 25px;\r\n}\r\n.datepicker > button.close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  outline: none;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.datepicker > button.close:focus {\r\n  opacity: .2;\r\n}\r\n.datepicker-popup{\r\n  position: absolute;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  margin-top: 2px;\r\n  z-index: 1000;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,0.175);\r\n}\r\n.datepicker-inner{\r\n  width: 218px;\r\n}\r\n.datepicker-body{\r\n  padding: 10px 10px;\r\n}\r\n.datepicker-ctrl p,\r\n.datepicker-ctrl span,\r\n.datepicker-body span{\r\n  display: inline-block;\r\n  width: 28px;\r\n  line-height: 28px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n}\r\n.datepicker-ctrl p {\r\n  width: 65%;\r\n}\r\n.datepicker-ctrl span {\r\n  position: absolute;\r\n}\r\n.datepicker-body span {\r\n  text-align: center;\r\n}\r\n.datepicker-monthRange span{\r\n  width: 48px;\r\n  height: 50px;\r\n  line-height: 45px;\r\n}\r\n.datepicker-item-disable {\r\n  background-color: white!important;\r\n  cursor: not-allowed!important;\r\n}\r\n.decadeRange span:first-child,\r\n.decadeRange span:last-child,\r\n.datepicker-item-disable,\r\n.datepicker-item-gray{\r\n  color: #999;\r\n}\r\n\r\n.datepicker-dateRange-item-active:hover,\r\n.datepicker-dateRange-item-active {\r\n  background: rgb(50, 118, 177)!important;\r\n  color: white!important;\r\n}\r\n.datepicker-monthRange {\r\n  margin-top: 10px\r\n}\r\n.datepicker-monthRange span,\r\n.datepicker-ctrl span,\r\n.datepicker-ctrl p,\r\n.datepicker-dateRange span {\r\n  cursor: pointer;\r\n}\r\n.datepicker-monthRange span:hover,\r\n.datepicker-ctrl p:hover,\r\n.datepicker-ctrl i:hover,\r\n.datepicker-dateRange span:hover,\r\n.datepicker-dateRange-item-hover {\r\n  background-color : #eeeeee;\r\n}\r\n.datepicker-weekRange span{\r\n  font-weight: bold;\r\n}\r\n.datepicker-label{\r\n  background-color: #f8f8f8;\r\n  font-weight: 700;\r\n  padding: 7px 0;\r\n  text-align: center;\r\n}\r\n.datepicker-ctrl{\r\n  position: relative;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n.month-btn{\r\n  font-weight: bold;\r\n  -webkit-user-select:none;\r\n  -moz-user-select:none;\r\n  -ms-user-select:none;\r\n  user-select:none;\r\n}\r\n.datepicker-preBtn{\r\n  left: 2px;\r\n}\r\n.datepicker-nextBtn{\r\n  right: 2px;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <div class="datepicker">
		
		//     <input class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
		
		//         :style="{width:width}"
		
		//         @click="inputClick"
		
		//         v-model="value"/>
		
		//     <button v-if="clearButton && value" type="button" class="close" @click="value = ''">
		
		//       <span>&times;</span>
		
		//     </button>
		
		//     <div class="datepicker-popup" v-show="displayDayView">
		
		//       <div class="datepicker-inner">
		
		//         <div class="datepicker-body">
		
		//           <div class="datepicker-ctrl">
		
		//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>
		
		//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>
		
		//             <p @click="switchMonthView">{{stringifyDayHeader(currDate)}}</p>
		
		//           </div>
		
		//           <div class="datepicker-weekRange">
		
		//             <span v-for="w in text.daysOfWeek">{{w}}</span>
		
		//           </div>
		
		//           <div class="datepicker-dateRange">
		
		//             <span v-for="d in dateRange" :class="d.sclass" @click="daySelect(d.date,this)">{{d.text}}</span>
		
		//           </div>
		
		//         </div>
		
		//       </div>
		
		//     </div>
		
		//     <div class="datepicker-popup" v-show="displayMonthView">
		
		//       <div class="datepicker-inner">
		
		//         <div class="datepicker-body">
		
		//           <div class="datepicker-ctrl">
		
		//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>
		
		//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>
		
		//             <p @click="switchDecadeView">{{stringifyYearHeader(currDate)}}</p>
		
		//           </div>
		
		//           <div class="datepicker-monthRange">
		
		//             <template v-for="m in text.months">
		
		//               <span   :class="{'datepicker-dateRange-item-active':
		
		//                   (text.months[parse(value).getMonth()]  === m) &&
		
		//                   currDate.getFullYear() === parse(value).getFullYear()}"
		
		//                   @click="monthSelect($index)"
		
		//                 >{{m.substr(0,3)}}</span>
		
		//             </template>
		
		//           </div>
		
		//         </div>
		
		//       </div>
		
		//     </div>
		
		//     <div class="datepicker-popup" v-show="displayYearView">
		
		//       <div class="datepicker-inner">
		
		//         <div class="datepicker-body">
		
		//           <div class="datepicker-ctrl">
		
		//             <span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>
		
		//             <span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>
		
		//             <p>{{stringifyDecadeHeader(currDate)}}</p>
		
		//           </div>
		
		//           <div class="datepicker-monthRange decadeRange">
		
		//             <template v-for="decade in decadeRange">
		
		//               <span :class="{'datepicker-dateRange-item-active':
		
		//                   parse(this.value).getFullYear() === decade.text}"
		
		//                   @click.stop="yearSelect(decade.text)"
		
		//                 >{{decade.text}}</span>
		
		//             </template>
		
		//           </div>
		
		//         </div>
		
		//       </div>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    value: {
		      type: String,
		      twoWay: true
		    },
		    format: {
		      default: 'MM/dd/yyyy'
		    },
		    disabledDaysOfWeek: {
		      type: Array,
		      default: function _default() {
		        return [];
		      }
		    },
		    width: {
		      type: String,
		      default: '200px'
		    },
		    clearButton: {
		      type: Boolean,
		      default: false
		    },
		    lang: {
		      type: String,
		      default: navigator.language
		    },
		    placeholder: {
		      type: String
		    }
		  },
		  ready: function ready() {
		    var _this = this;
		
		    this._blur = function (e) {
		      if (!_this.$el.contains(e.target)) _this.close();
		    };
		    this.$dispatch('child-created', this);
		    this.currDate = this.parse(this.value) || this.parse(new Date());
		    (0, _NodeList2.default)(window).on('click', this._blur);
		  },
		  beforeDestroy: function beforeDestroy() {
		    (0, _NodeList2.default)(window).off('click', this._blur);
		  },
		  data: function data() {
		    return {
		      currDate: new Date(),
		      dateRange: [],
		      decadeRange: [],
		      displayDayView: false,
		      displayMonthView: false,
		      displayYearView: false
		    };
		  },
		
		  watch: {
		    currDate: function currDate() {
		      this.getDateRange();
		    }
		  },
		  computed: {
		    text: function text() {
		      return (0, _utils.translations)(this.lang);
		    }
		  },
		  methods: {
		    close: function close() {
		      this.displayDayView = this.displayMonthView = this.displayYearView = false;
		    },
		    inputClick: function inputClick() {
		      this.currDate = this.parse(this.value) || this.parse(new Date());
		      if (this.displayMonthView || this.displayYearView) {
		        this.displayDayView = false;
		      } else {
		        this.displayDayView = !this.displayDayView;
		      }
		    },
		    preNextDecadeClick: function preNextDecadeClick(flag) {
		      var year = this.currDate.getFullYear();
		      var months = this.currDate.getMonth();
		      var date = this.currDate.getDate();
		
		      if (flag === 0) {
		        this.currDate = new Date(year - 10, months, date);
		      } else {
		        this.currDate = new Date(year + 10, months, date);
		      }
		    },
		    preNextMonthClick: function preNextMonthClick(flag) {
		      var year = this.currDate.getFullYear();
		      var month = this.currDate.getMonth();
		      var date = this.currDate.getDate();
		
		      if (flag === 0) {
		        var preMonth = this.getYearMonth(year, month - 1);
		        this.currDate = new Date(preMonth.year, preMonth.month, date);
		      } else {
		        var nextMonth = this.getYearMonth(year, month + 1);
		        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
		      }
		    },
		    preNextYearClick: function preNextYearClick(flag) {
		      var year = this.currDate.getFullYear();
		      var months = this.currDate.getMonth();
		      var date = this.currDate.getDate();
		
		      if (flag === 0) {
		        this.currDate = new Date(year - 1, months, date);
		      } else {
		        this.currDate = new Date(year + 1, months, date);
		      }
		    },
		    yearSelect: function yearSelect(year) {
		      this.displayYearView = false;
		      this.displayMonthView = true;
		      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
		    },
		    daySelect: function daySelect(date, el) {
		      if (el.$el.classList[0] === 'datepicker-item-disable') {
		        return false;
		      } else {
		        this.currDate = date;
		        this.value = this.stringify(this.currDate);
		        this.displayDayView = false;
		      }
		    },
		    switchMonthView: function switchMonthView() {
		      this.displayDayView = false;
		      this.displayMonthView = true;
		    },
		    switchDecadeView: function switchDecadeView() {
		      this.displayMonthView = false;
		      this.displayYearView = true;
		    },
		    monthSelect: function monthSelect(index) {
		      this.displayMonthView = false;
		      this.displayDayView = true;
		      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
		    },
		    getYearMonth: function getYearMonth(year, month) {
		      if (month > 11) {
		        year++;
		        month = 0;
		      } else if (month < 0) {
		        year--;
		        month = 11;
		      }
		      return { year: year, month: month };
		    },
		    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
		      var yearStr = date.getFullYear().toString();
		      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
		      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
		      return firstYearOfDecade + '-' + lastYearOfDecade;
		    },
		    stringifyDayHeader: function stringifyDayHeader(date) {
		      return this.text.months[date.getMonth()] + ' ' + date.getFullYear();
		    },
		    parseMonth: function parseMonth(date) {
		      return this.text.months[date.getMonth()];
		    },
		    stringifyYearHeader: function stringifyYearHeader(date) {
		      return date.getFullYear();
		    },
		    stringify: function stringify(date) {
		      var format = arguments.length <= 1 || arguments[1] === undefined ? this.format : arguments[1];
		
		      if (!date) date = this.parse();
		      if (!date) return '';
		      var year = date.getFullYear();
		      var month = date.getMonth() + 1;
		      var day = date.getDate();
		      var monthName = this.parseMonth(date);
		
		      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
		    },
		    parse: function parse() {
		      var str = arguments.length <= 0 || arguments[0] === undefined ? this.value : arguments[0];
		
		      var date = void 0;
		      if (str.length === 10 && (this.format === 'dd-MM-yyyy' || this.format === 'dd/MM/yyyy')) {
		        date = new Date(str.substring(6, 10), str.substring(3, 5), str.substring(0, 2));
		      } else {
		        date = new Date(str);
		      }
		      return isNaN(date.getFullYear()) ? new Date(null) : date;
		    },
		    getDayCount: function getDayCount(year, month) {
		      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		      if (month === 1) {
		        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
		          return 29;
		        }
		      }
		      return dict[month];
		    },
		    getDateRange: function getDateRange() {
		      var _this2 = this;
		
		      this.dateRange = [];
		      this.decadeRange = [];
		      var time = {
		        year: this.currDate.getFullYear(),
		        month: this.currDate.getMonth(),
		        day: this.currDate.getDate()
		      };
		      var yearStr = time.year.toString();
		      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;
		      for (var i = 0; i < 12; i++) {
		        this.decadeRange.push({
		          text: firstYearOfDecade + i
		        });
		      }
		
		      var currMonthFirstDay = new Date(time.year, time.month, 1);
		      var firstDayWeek = currMonthFirstDay.getDay() + 1;
		      if (firstDayWeek === 0) {
		        firstDayWeek = 7;
		      }
		      var dayCount = this.getDayCount(time.year, time.month);
		      if (firstDayWeek > 1) {
		        var preMonth = this.getYearMonth(time.year, time.month - 1);
		        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
		        for (var _i = 1; _i < firstDayWeek; _i++) {
		          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
		          this.dateRange.push({
		            text: dayText,
		            date: new Date(preMonth.year, preMonth.month, dayText),
		            sclass: 'datepicker-item-gray'
		          });
		        }
		      }
		
		      var _loop = function _loop(_i2) {
		        var date = new Date(time.year, time.month, _i2);
		        var week = date.getDay();
		        var sclass = '';
		        _this2.disabledDaysOfWeek.forEach(function (el) {
		          if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
		        });
		        if (_i2 === time.day) {
		          if (_this2.value) {
		            var valueDate = _this2.parse(_this2.value);
		            if (valueDate) {
		              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
		                sclass = 'datepicker-dateRange-item-active';
		              }
		            }
		          }
		        }
		        _this2.dateRange.push({
		          text: _i2,
		          date: date,
		          sclass: sclass
		        });
		      };
		
		      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
		        _loop(_i2);
		      }
		
		      if (this.dateRange.length < 42) {
		        var nextMonthNeed = 42 - this.dateRange.length;
		        var nextMonth = this.getYearMonth(time.year, time.month + 1);
		
		        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
		          this.dateRange.push({
		            text: _i3,
		            date: new Date(nextMonth.year, nextMonth.month, _i3),
		            sclass: 'datepicker-item-gray'
		          });
		        }
		      }
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .datepicker{
		
		//   position: relative;
		
		//   display: inline-block;
		
		// }
		
		// input.datepicker-input.with-reset-button {
		
		//   padding-right: 25px;
		
		// }
		
		// .datepicker > button.close {
		
		//   position: absolute;
		
		//   top: 0;
		
		//   right: 0;
		
		//   outline: none;
		
		//   z-index: 2;
		
		//   display: block;
		
		//   width: 34px;
		
		//   height: 34px;
		
		//   line-height: 34px;
		
		//   text-align: center;
		
		// }
		
		// .datepicker > button.close:focus {
		
		//   opacity: .2;
		
		// }
		
		// .datepicker-popup{
		
		//   position: absolute;
		
		//   border: 1px solid #ccc;
		
		//   border-radius: 5px;
		
		//   background: #fff;
		
		//   margin-top: 2px;
		
		//   z-index: 1000;
		
		//   box-shadow: 0 6px 12px rgba(0,0,0,0.175);
		
		// }
		
		// .datepicker-inner{
		
		//   width: 218px;
		
		// }
		
		// .datepicker-body{
		
		//   padding: 10px 10px;
		
		// }
		
		// .datepicker-ctrl p,
		
		// .datepicker-ctrl span,
		
		// .datepicker-body span{
		
		//   display: inline-block;
		
		//   width: 28px;
		
		//   line-height: 28px;
		
		//   height: 28px;
		
		//   border-radius: 4px;
		
		// }
		
		// .datepicker-ctrl p {
		
		//   width: 65%;
		
		// }
		
		// .datepicker-ctrl span {
		
		//   position: absolute;
		
		// }
		
		// .datepicker-body span {
		
		//   text-align: center;
		
		// }
		
		// .datepicker-monthRange span{
		
		//   width: 48px;
		
		//   height: 50px;
		
		//   line-height: 45px;
		
		// }
		
		// .datepicker-item-disable {
		
		//   background-color: white!important;
		
		//   cursor: not-allowed!important;
		
		// }
		
		// .decadeRange span:first-child,
		
		// .decadeRange span:last-child,
		
		// .datepicker-item-disable,
		
		// .datepicker-item-gray{
		
		//   color: #999;
		
		// }
		
		
		// .datepicker-dateRange-item-active:hover,
		
		// .datepicker-dateRange-item-active {
		
		//   background: rgb(50, 118, 177)!important;
		
		//   color: white!important;
		
		// }
		
		// .datepicker-monthRange {
		
		//   margin-top: 10px
		
		// }
		
		// .datepicker-monthRange span,
		
		// .datepicker-ctrl span,
		
		// .datepicker-ctrl p,
		
		// .datepicker-dateRange span {
		
		//   cursor: pointer;
		
		// }
		
		// .datepicker-monthRange span:hover,
		
		// .datepicker-ctrl p:hover,
		
		// .datepicker-ctrl i:hover,
		
		// .datepicker-dateRange span:hover,
		
		// .datepicker-dateRange-item-hover {
		
		//   background-color : #eeeeee;
		
		// }
		
		// .datepicker-weekRange span{
		
		//   font-weight: bold;
		
		// }
		
		// .datepicker-label{
		
		//   background-color: #f8f8f8;
		
		//   font-weight: 700;
		
		//   padding: 7px 0;
		
		//   text-align: center;
		
		// }
		
		// .datepicker-ctrl{
		
		//   position: relative;
		
		//   height: 30px;
		
		//   line-height: 30px;
		
		//   font-weight: bold;
		
		//   text-align: center;
		
		// }
		
		// .month-btn{
		
		//   font-weight: bold;
		
		//   -webkit-user-select:none;
		
		//   -moz-user-select:none;
		
		//   -ms-user-select:none;
		
		//   user-select:none;
		
		// }
		
		// .datepicker-preBtn{
		
		//   left: 2px;
		
		// }
		
		// .datepicker-nextBtn{
		
		//   right: 2px;
		
		// }
		
		// </style>
	
	/***/ },
	/* 130 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"datepicker\">\r\n    <input class=\"form-control datepicker-input\" :class=\"{'with-reset-button': clearButton}\" type=\"text\" :placeholder=\"placeholder\"\r\n        :style=\"{width:width}\"\r\n        @click=\"inputClick\"\r\n        v-model=\"value\"/>\r\n    <button v-if=\"clearButton && value\" type=\"button\" class=\"close\" @click=\"value = ''\">\r\n      <span>&times;</span>\r\n    </button>\r\n    <div class=\"datepicker-popup\" v-show=\"displayDayView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextMonthClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextMonthClick(1)\"></span>\r\n            <p @click=\"switchMonthView\">{{stringifyDayHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-weekRange\">\r\n            <span v-for=\"w in text.daysOfWeek\">{{w}}</span>\r\n          </div>\r\n          <div class=\"datepicker-dateRange\">\r\n            <span v-for=\"d in dateRange\" :class=\"d.sclass\" @click=\"daySelect(d.date,this)\">{{d.text}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayMonthView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextYearClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextYearClick(1)\"></span>\r\n            <p @click=\"switchDecadeView\">{{stringifyYearHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange\">\r\n            <template v-for=\"m in text.months\">\r\n              <span   :class=\"{'datepicker-dateRange-item-active':\r\n                  (text.months[parse(value).getMonth()]  === m) &&\r\n                  currDate.getFullYear() === parse(value).getFullYear()}\"\r\n                  @click=\"monthSelect($index)\"\r\n                >{{m.substr(0,3)}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"datepicker-popup\" v-show=\"displayYearView\">\r\n      <div class=\"datepicker-inner\">\r\n        <div class=\"datepicker-body\">\r\n          <div class=\"datepicker-ctrl\">\r\n            <span class=\"datepicker-preBtn glyphicon glyphicon-chevron-left\" aria-hidden=\"true\" @click=\"preNextDecadeClick(0)\"></span>\r\n            <span class=\"datepicker-nextBtn glyphicon glyphicon-chevron-right\" aria-hidden=\"true\" @click=\"preNextDecadeClick(1)\"></span>\r\n            <p>{{stringifyDecadeHeader(currDate)}}</p>\r\n          </div>\r\n          <div class=\"datepicker-monthRange decadeRange\">\r\n            <template v-for=\"decade in decadeRange\">\r\n              <span :class=\"{'datepicker-dateRange-item-active':\r\n                  parse(this.value).getFullYear() === decade.text}\"\r\n                  @click.stop=\"yearSelect(decade.text)\"\r\n                >{{decade.text}}</span>\r\n            </template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(132)
		module.exports = __webpack_require__(134)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(135)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-39be1072&file=Dropdown.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Dropdown.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-39be1072&file=Dropdown.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Dropdown.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 132 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(133);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-39be1072&file=Dropdown.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-39be1072&file=Dropdown.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dropdown.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".secret[_v-39be1072] {\r\n  position: absolute;\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n  margin: -1px;\r\n  height: 1px;\r\n  width: 1px;\r\n  padding: 0;\r\n  border: 0;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 134 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <li v-if="$parent._navbar||$parent.menu||$parent._tabset" v-el:dropdown class="dropdown" :class="classes">
		
		//       <a v-if="text" class="dropdown-toggle" role="button" :class="{disabled: disabled}" @keyup.esc="show = false">
		
		//         {{ text }}
		
		//         <span class="caret"></span>
		
		//       </a>
		
		//       <slot v-else name="button"></slot>
		
		//     <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
		
		//     <ul v-else class="dropdown-menu">
		
		//       <slot></slot>
		
		//     </ul>
		
		//   </li>
		
		//   <div v-else v-el:dropdown class="btn-group" :class="classes">
		
		//       <button v-if="text" type="button" class="btn btn-{{type||'default'}} dropdown-toggle" @keyup.esc="show = false" :disabled="disabled">
		
		//         {{ text }}
		
		//         <span class="caret"></span>
		
		//       </button>
		
		//       <slot v-else name="button"></slot>
		
		//     <slot v-if="slots['dropdown-menu']" name="dropdown-menu"></slot>
		
		//     <ul v-else class="dropdown-menu">
		
		//       <slot></slot>
		
		//     </ul>
		
		//   </div>
		
		// </template>
		
		// <script>
		exports.default = {
		  props: {
		    show: {
		      twoWay: true,
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    'class': null,
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    text: {
		      type: String,
		      default: null
		    },
		    type: {
		      type: String,
		      default: null
		    }
		  },
		  computed: {
		    classes: function classes() {
		      return [{ open: this.show, disabled: this.disabled }, this.class];
		    },
		    menu: function menu() {
		      return !this.$parent || this.$parent.navbar;
		    },
		    submenu: function submenu() {
		      return this.$parent && (this.$parent.menu || this.$parent.submenu);
		    },
		    slots: function slots() {
		      return this._slotContents;
		    }
		  },
		  methods: {
		    blur: function blur() {
		      var _this = this;
		
		      this.unblur();
		      this._hide = setTimeout(function () {
		        _this._hide = null;
		        _this.show = false;
		      }, 100);
		    },
		    unblur: function unblur() {
		      if (this._hide) {
		        clearTimeout(this._hide);
		        this._hide = null;
		      }
		    }
		  },
		  ready: function ready() {
		    var _this2 = this;
		
		    var $el = (0, _NodeList2.default)(this.$els.dropdown);
		    $el.onBlur(function (e) {
		      _this2.show = false;
		    });
		    $el.findChildren('a,button').on('click', function (e) {
		      e.preventDefault();
		      if (_this2.disabled) {
		        return false;
		      }
		      _this2.show = !_this2.show;
		      return false;
		    });
		    $el.findChildren('ul').on('click', 'li>a', function (e) {
		      _this2.show = false;
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    var $el = (0, _NodeList2.default)(this.$els.dropdown);
		    $el.offBlur();
		    $el.findChildren('a,button').off();
		    $el.findChildren('ul').off();
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .secret {
		
		//   position: absolute;
		
		//   clip: rect(0 0 0 0);
		
		//   overflow: hidden;
		
		//   margin: -1px;
		
		//   height: 1px;
		
		//   width: 1px;
		
		//   padding: 0;
		
		//   border: 0;
		
		// }
		
		// </style>
	
	/***/ },
	/* 135 */
	/***/ function(module, exports) {
	
		module.exports = "<li v-if=\"$parent._navbar||$parent.menu||$parent._tabset\" v-el:dropdown=\"\" class=\"dropdown\" :class=\"classes\" _v-39be1072=\"\">\n      <a v-if=\"text\" class=\"dropdown-toggle\" role=\"button\" :class=\"{disabled: disabled}\" @keyup.esc=\"show = false\" _v-39be1072=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-39be1072=\"\"></span>\n      </a>\n      <slot v-else=\"\" name=\"button\" _v-39be1072=\"\"></slot>\n    <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\" _v-39be1072=\"\"></slot>\n    <ul v-else=\"\" class=\"dropdown-menu\" _v-39be1072=\"\">\n      <slot _v-39be1072=\"\"></slot>\n    </ul>\n  </li>\n  <div v-else=\"\" v-el:dropdown=\"\" class=\"btn-group\" :class=\"classes\" _v-39be1072=\"\">\n      <button v-if=\"text\" type=\"button\" class=\"btn btn-{{type||'default'}} dropdown-toggle\" @keyup.esc=\"show = false\" :disabled=\"disabled\" _v-39be1072=\"\">\n        {{ text }}\n        <span class=\"caret\" _v-39be1072=\"\"></span>\n      </button>\n      <slot v-else=\"\" name=\"button\" _v-39be1072=\"\"></slot>\n    <slot v-if=\"slots['dropdown-menu']\" name=\"dropdown-menu\" _v-39be1072=\"\"></slot>\n    <ul v-else=\"\" class=\"dropdown-menu\" _v-39be1072=\"\">\n      <slot _v-39be1072=\"\"></slot>\n    </ul>\n  </div>";
	
	/***/ },
	/* 136 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(137)
		module.exports = __webpack_require__(139)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(140)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-652ad7b9&file=Input.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Input.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Input.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-652ad7b9&file=Input.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Input.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(138);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-652ad7b9&file=Input.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-652ad7b9&file=Input.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Input.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".form-group[_v-652ad7b9] {\r\n  position: relative;\r\n}\r\nlabel~.close[_v-652ad7b9] {\r\n  top: 25px;\r\n}\r\n.close[_v-652ad7b9] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\n.has-feedback.has-success button.close[_v-652ad7b9],\r\n.has-feedback.has-error button.close[_v-652ad7b9] {\r\n  right:20px;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 139 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <div class="form-group" @click="focus()" :class="{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}">
		
		//     <label v-if="label" class="control-label">{{label}}</label>
		
		//     <textarea v-if="type=='textarea'" class="form-control" v-el:input v-model="value"
		
		//       :cols="cols"
		
		//       :rows="rows"
		
		//       :name="name"
		
		//       :readonly="readonly"
		
		//       :required="required"
		
		//       :disabled="disabled"
		
		//       :maxlength="maxlength"
		
		//       :placeholder="placeholder"
		
		//     ></textarea>
		
		//     <template v-else>
		
		//       <div v-if="slots.before||slots.after" class="input-group">
		
		//         <slot name="before"></slot>
		
		//         <input class="form-control" v-el:input v-model="value"
		
		//           :name="name"
		
		//           :type="type"
		
		//           :pattern="textPattern"
		
		//           :title="title"
		
		//           :readonly="readonly"
		
		//           :required="required"
		
		//           :disabled="disabled"
		
		//           :maxlength="maxlength"
		
		//           :placeholder="placeholder"
		
		//           @keyup.enter="enterSubmit&&submit()"
		
		//         />
		
		//         <slot name="after"></slot>
		
		//       </div>
		
		//       <input v-else class="form-control" v-el:input v-model="value"
		
		//         :name="name"
		
		//         :type="type"
		
		//         :pattern="textPattern"
		
		//         :title="title"
		
		//         :readonly="readonly"
		
		//         :required="required"
		
		//         :disabled="disabled"
		
		//         :maxlength="maxlength"
		
		//         :placeholder="placeholder"
		
		//         @keyup.enter="enterSubmit&&submit()"
		
		//       />
		
		//     </template>
		
		//     <span v-if="clearButton && value" class="close" @click="value = ''">&times;</span>
		
		//     <span v-if="icon&&valid!==null" class="glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback" aria-hidden="true"></span>
		
		//     <div v-if="showHelp" class="help-block">{{help}}</div>
		
		//     <div v-if="showError" class="help-block with-errors">{{errorText}}</div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    value: {
		      twoWay: true,
		      default: null
		    },
		    match: {
		      type: String,
		      default: null
		    },
		    clearButton: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    enterSubmit: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    error: {
		      type: String,
		      default: null
		    },
		    help: {
		      type: String,
		      default: null
		    },
		    hideHelp: { // hide when have error
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    icon: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    label: {
		      type: String,
		      default: null
		    },
		    lang: {
		      type: String,
		      default: navigator.language
		    },
		    mask: null,
		    maxlength: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: null
		    },
		    minlength: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 0
		    },
		    name: {
		      type: String,
		      default: null
		    },
		    noValidate: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    onfocus: null,
		    pattern: null,
		    placeholder: {
		      type: String,
		      default: null
		    },
		    readonly: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    required: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    rows: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 3
		    },
		    type: {
		      type: String,
		      default: 'text'
		    },
		    validationDelay: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 250
		    }
		  },
		  data: function data() {
		    return {
		      valid: null,
		      timeout: null
		    };
		  },
		
		  computed: {
		    slots: function slots() {
		      return this._slotContents || {};
		    },
		    bsForm: function bsForm() {
		      return true;
		    },
		    input: function input() {
		      return true;
		    },
		    text: function text() {
		      return (0, _utils.translations)(this.lang);
		    },
		    showHelp: function showHelp() {
		      return this.help && (!this.showError || !this.hideHelp);
		    },
		    showError: function showError() {
		      return this.error && this.valid === false;
		    },
		    errorText: function errorText() {
		      var value = this.value;
		      var error = [this.error];
		      if (!value && this.required) error.push('(' + this.text.required.toLowerCase() + ')');
		      if (value && value.length < this.minlength) error.push('(' + this.text.minLength.toLowerCase() + ': ' + this.minlength + ')');
		      return error.join(' ');
		    },
		    textPattern: function textPattern() {
		      return typeof this.pattern === 'string' ? this.pattern : null;
		    },
		    title: function title() {
		      return this.errorText || this.help || '';
		    }
		  },
		  watch: {
		    match: function match(val) {
		      this.eval();
		    },
		    valid: function valid(val) {
		      if (this.$parent.eval) {
		        this.$parent.eval();
		      }
		    }
		  },
		  methods: {
		    focus: function focus() {
		      this.$els.input.focus();
		    },
		    eval: function _eval() {
		      var _this = this;
		
		      var value = this.value || '';
		      if (this.mask instanceof Function) value = this.mask(value);
		      if (this.value !== value) this.value = value;
		      if (this.timeout) clearTimeout(this.timeout);
		      if (this.noValidate) {
		        if (this.valid !== null) {
		          this.valid = null;
		        }
		      } else {
		        this.timeout = setTimeout(function () {
		          _this.valid = _this.validate();
		          _this.timeout = null;
		        }, this.validationDelay);
		      }
		    },
		    submit: function submit() {
		      if (this.$els.input.form) {
		        var invalids = (0, _NodeList2.default)('.form-group.validate:not(.has-success)', this.$els.input.form);
		        if (invalids.length) {
		          invalids.find('input,textarea,select')[0].focus();
		        } else {
		          this.$els.input.form.submit();
		        }
		      }
		    },
		    validate: function validate() {
		      var value = (this.value || '').trim();
		      if (!value) {
		        return !this.required;
		      }
		      if (this.match !== null && this.match !== value) {
		        return false;
		      }
		      if (value.length < this.minlength) {
		        return false;
		      }
		      var valid = true;
		      if (this.$els.input.checkValidity && !this.$els.input.checkValidity()) {
		        return false;
		      }
		      if (this.pattern instanceof Function) valid = this.pattern(this.value);
		      if (typeof this.pattern === 'string') {
		        var regex = new RegExp(this.pattern);
		        valid = regex.test(this.value);
		      }
		      return valid;
		    }
		  },
		  ready: function ready() {
		    var _this2 = this;
		
		    (0, _NodeList2.default)(this.$els.input).on('change keypress keydown keyup', function () {
		      return _this2.eval();
		    }).on('blur', function () {
		      if (!_this2.noValidate) {
		        _this2.valid = _this2.validate();
		      }
		    }).on('focus', function (e) {
		      if (_this2.onfocus instanceof Function) _this2.onfocus.call(_this2, e);
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    (0, _NodeList2.default)(this.$els.input).off();
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .form-group {
		
		//   position: relative;
		
		// }
		
		// label~.close {
		
		//   top: 25px;
		
		// }
		
		// .close {
		
		//   position: absolute;
		
		//   top: 0;
		
		//   right: 0;
		
		//   z-index: 2;
		
		//   display: block;
		
		//   width: 34px;
		
		//   height: 34px;
		
		//   line-height: 34px;
		
		//   text-align: center;
		
		// }
		
		// .has-feedback.has-success button.close,
		
		// .has-feedback.has-error button.close {
		
		//   right:20px;
		
		// }
		
		// </style>
	
	/***/ },
	/* 140 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"form-group\" @click=\"focus()\" :class=\"{'has-feedback':icon,'has-error':valid===false,'has-success':valid===true,validate:!noValidate}\" _v-652ad7b9=\"\">\n    <label v-if=\"label\" class=\"control-label\" _v-652ad7b9=\"\">{{label}}</label>\n    <textarea v-if=\"type=='textarea'\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :cols=\"cols\" :rows=\"rows\" :name=\"name\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" _v-652ad7b9=\"\"></textarea>\n    <template v-else=\"\" _v-652ad7b9=\"\">\n      <div v-if=\"slots.before||slots.after\" class=\"input-group\" _v-652ad7b9=\"\">\n        <slot name=\"before\" _v-652ad7b9=\"\"></slot>\n        <input class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :type=\"type\" :pattern=\"textPattern\" :title=\"title\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" _v-652ad7b9=\"\">\n        <slot name=\"after\" _v-652ad7b9=\"\"></slot>\n      </div>\n      <input v-else=\"\" class=\"form-control\" v-el:input=\"\" v-model=\"value\" :name=\"name\" :type=\"type\" :pattern=\"textPattern\" :title=\"title\" :readonly=\"readonly\" :required=\"required\" :disabled=\"disabled\" :maxlength=\"maxlength\" :placeholder=\"placeholder\" @keyup.enter=\"enterSubmit&amp;&amp;submit()\" _v-652ad7b9=\"\">\n    </template>\n    <span v-if=\"clearButton &amp;&amp; value\" class=\"close\" @click=\"value = ''\" _v-652ad7b9=\"\">×</span>\n    <span v-if=\"icon&amp;&amp;valid!==null\" class=\"glyphicon glyphicon-{{valid?'ok':'remove'}} form-control-feedback\" aria-hidden=\"true\" _v-652ad7b9=\"\"></span>\n    <div v-if=\"showHelp\" class=\"help-block\" _v-652ad7b9=\"\">{{help}}</div>\n    <div v-if=\"showError\" class=\"help-block with-errors\" _v-652ad7b9=\"\">{{errorText}}</div>\n  </div>";
	
	/***/ },
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(142)
		module.exports = __webpack_require__(144)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(149)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Modal.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Modal.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 142 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(143);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fe7d5dc8&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-fe7d5dc8&file=Modal.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Modal.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".modal {\r\n  -webkit-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n.modal.in {\r\n  background-color: rgba(0,0,0,0.5);\r\n}\r\n.modal.zoom .modal-dialog {\r\n  -webkit-transform: scale(0.1);\r\n  transform: scale(0.1);\r\n  top: 300px;\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n}\r\n.modal.zoom.in .modal-dialog {\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  -webkit-transform: translate3d(0, -300px, 0);\r\n  transform: translate3d(0, -300px, 0);\r\n  opacity: 1;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 144 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _isInteger = __webpack_require__(145);
		
		var _isInteger2 = _interopRequireDefault(_isInteger);
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <div role="dialog"
		
		//     v-bind:class="{
		
		//     'modal':true,
		
		//     'fade':effect === 'fade',
		
		//     'zoom':effect === 'zoom'
		
		//     }"
		
		//     >
		
		//     <div v-bind:class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
		
		//       v-bind:style="{width: optionalWidth}">
		
		//       <div class="modal-content">
		
		//         <slot name="modal-header">
		
		//           <div class="modal-header">
		
		//             <button type="button" class="close" @click="close"><span>&times;</span></button>
		
		//             <h4 class="modal-title" > 
		
		//               <slot name="title">
		
		//                 {{title}}
		
		//               </slot>
		
		//             </h4>
		
		//           </div>
		
		//         </slot>
		
		//         <slot name="modal-body">
		
		//           <div class="modal-body"></div>
		
		//         </slot>
		
		//         <slot name="modal-footer">
		
		//           <div class="modal-footer">
		
		//             <button type="button" class="btn btn-default" @click="close">{{ cancelText }}</button>
		
		//             <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
		
		//           </div>
		
		//         </slot>
		
		//       </div>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    okText: {
		      type: String,
		      default: 'Save changes'
		    },
		    cancelText: {
		      type: String,
		      default: 'Close'
		    },
		    title: {
		      type: String,
		      default: ''
		    },
		    show: {
		      required: true,
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      twoWay: true
		    },
		    width: {
		      default: null
		    },
		    callback: {
		      type: Function,
		      default: function _default() {}
		    },
		    effect: {
		      type: String,
		      default: null
		    },
		    backdrop: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    large: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    small: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    }
		  },
		  computed: {
		    optionalWidth: function optionalWidth() {
		      if (this.width === null) {
		        return null;
		      } else if ((0, _isInteger2.default)(this.width)) {
		        return this.width + 'px';
		      }
		      return this.width;
		    }
		  },
		  watch: {
		    show: function show(val) {
		      var _this = this;
		
		      var el = this.$el;
		      var body = document.body;
		      var scrollBarWidth = (0, _utils.getScrollBarWidth)();
		      if (val) {
		        (0, _NodeList2.default)(el).find('.modal-content').focus();
		        el.style.display = 'block';
		        setTimeout(function () {
		          return (0, _NodeList2.default)(el).addClass('in');
		        }, 0);
		        (0, _NodeList2.default)(body).addClass('modal-open');
		        if (scrollBarWidth !== 0) {
		          body.style.paddingRight = scrollBarWidth + 'px';
		        }
		        if (this.backdrop) {
		          (0, _NodeList2.default)(el).on('click', function (e) {
		            if (e.target === el) _this.show = false;
		          });
		        }
		      } else {
		        (0, _NodeList2.default)(el).on('transitionend', function () {
		          (0, _NodeList2.default)(el).off('click transitionend');
		          el.style.display = 'none';
		          body.style.paddingRight = '0';
		        }).removeClass('in');
		        (0, _NodeList2.default)(body).removeClass('modal-open');
		      }
		    }
		  },
		  methods: {
		    close: function close() {
		      this.show = false;
		    }
		  }
		};
		// </script>
		
		// <style>
		
		// .modal {
		
		//   transition: all 0.3s ease;
		
		// }
		
		// .modal.in {
		
		//   background-color: rgba(0,0,0,0.5);
		
		// }
		
		// .modal.zoom .modal-dialog {
		
		//   -webkit-transform: scale(0.1);
		
		//   -moz-transform: scale(0.1);
		
		//   -ms-transform: scale(0.1);
		
		//   transform: scale(0.1);
		
		//   top: 300px;
		
		//   opacity: 0;
		
		//   -webkit-transition: all 0.3s;
		
		//   -moz-transition: all 0.3s;
		
		//   transition: all 0.3s;
		
		// }
		
		// .modal.zoom.in .modal-dialog {
		
		//   -webkit-transform: scale(1);
		
		//   -moz-transform: scale(1);
		
		//   -ms-transform: scale(1);
		
		//   transform: scale(1);
		
		//   -webkit-transform: translate3d(0, -300px, 0);
		
		//   transform: translate3d(0, -300px, 0);
		
		//   opacity: 1;
		
		// }
		
		// </style>
	
	/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(146), __esModule: true };
	
	/***/ },
	/* 146 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(147);
		module.exports = __webpack_require__(32).Number.isInteger;
	
	/***/ },
	/* 147 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.3 Number.isInteger(number)
		var $export = __webpack_require__(30);
		
		$export($export.S, 'Number', {isInteger: __webpack_require__(148)});
	
	/***/ },
	/* 148 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 20.1.2.3 Number.isInteger(number)
		var isObject = __webpack_require__(38)
		  , floor    = Math.floor;
		module.exports = function isInteger(it){
		  return !isObject(it) && isFinite(it) && floor(it) === it;
		};
	
	/***/ },
	/* 149 */
	/***/ function(module, exports) {
	
		module.exports = "<div role=\"dialog\"\r\n    v-bind:class=\"{\r\n    'modal':true,\r\n    'fade':effect === 'fade',\r\n    'zoom':effect === 'zoom'\r\n    }\"\r\n    >\r\n    <div v-bind:class=\"{'modal-dialog':true,'modal-lg':large,'modal-sm':small}\" role=\"document\"\r\n      v-bind:style=\"{width: optionalWidth}\">\r\n      <div class=\"modal-content\">\r\n        <slot name=\"modal-header\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" @click=\"close\"><span>&times;</span></button>\r\n            <h4 class=\"modal-title\" > \r\n              <slot name=\"title\">\r\n                {{title}}\r\n              </slot>\r\n            </h4>\r\n          </div>\r\n        </slot>\r\n        <slot name=\"modal-body\">\r\n          <div class=\"modal-body\"></div>\r\n        </slot>\r\n        <slot name=\"modal-footer\">\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" @click=\"close\">{{ cancelText }}</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" @click=\"callback\">{{ okText }}</button>\r\n          </div>\r\n        </slot>\r\n      </div>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 150 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(151)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(152)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Navbar.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Navbar.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 151 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    type: {
		      type: String,
		      default: 'default'
		    },
		    placement: {
		      type: String,
		      default: 'top'
		    }
		  },
		  data: function data() {
		    return {
		      id: 'bs-example-navbar-collapse-1',
		      collapsed: true,
		      styles: {}
		    };
		  },
		
		  computed: {
		    slots: function slots() {
		      return this._slotContents;
		    }
		  },
		  methods: {
		    toggleCollapse: function toggleCollapse(e) {
		      e && e.preventDefault();
		      this.collapsed = !this.collapsed;
		    }
		  },
		  created: function created() {
		    this._navbar = true;
		  },
		  ready: function ready() {
		    var _this = this;
		
		    var $dropdown = (0, _NodeList2.default)('.dropdown>[data-toggle="dropdown"]', this.$el).parent();
		    console.log('navbar blur', $dropdown.length);
		    $dropdown.on('click', '.dropdown-toggle', function (e) {
		      e.preventDefault();
		      $dropdown.each(function (content) {
		        if (content.contains(e.target)) content.classList.toggle('open');
		      });
		    }).on('click', '.dropdown-menu>li>a', function (e) {
		      $dropdown.each(function (content) {
		        if (content.contains(e.target)) content.classList.remove('open');
		      });
		    }).onBlur(function (e) {
		      $dropdown.each(function (content) {
		        if (!content.contains(e.target)) content.classList.remove('open');
		      });
		    });
		    (0, _NodeList2.default)(this.$el).on('click touchstart', 'li:not(.dropdown)>a', function (e) {
		      _this.collapsed = true;
		    }).onBlur(function (e) {
		      if (!_this.$el.contains(e.target)) {
		        _this.collapsed = true;
		      }
		    });
		    var height = this.$el.offsetHeight;
		    if (this.placement === 'top') {
		      document.body.style.paddingTop = height + 'px';
		    }
		    if (this.placement === 'bottom') {
		      document.body.style.paddingBottom = height + 'px';
		    }
		    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).on('click', function (e) {
		      return _this.toggleCollapse(e);
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    (0, _NodeList2.default)('.dropdown', this.$el).off('click').offBlur();
		    if (this.slots.collapse) (0, _NodeList2.default)('[data-toggle="collapse"]', this.$el).off('click');
		  }
		};
		// </script>
		// <template>
		
		//   <nav v-el:navbar :class="['navbar',{
		
		//     'navbar-inverse':(type == 'inverse'),
		
		//     'navbar-default':(type == 'default'),
		
		//     'navbar-fixed-top':(placement === 'top'),
		
		//     'navbar-fixed-bottom':(placement === 'bottom'),
		
		//     'navbar-static-top':(placement === 'static')
		
		//   }]">
		
		//     <div class="container-fluid">
		
		//       <div class="navbar-header">
		
		//         <button v-if="!slots.collapse" type="button" class="navbar-toggle collapsed"  aria-expanded="false" @click="toggleCollapse">
		
		//           <span class="sr-only">Toggle navigation</span>
		
		//           <span class="icon-bar"></span>
		
		//           <span class="icon-bar"></span>
		
		//           <span class="icon-bar"></span>
		
		//         </button>
		
		//         <slot name="collapse"></slot>
		
		//         <slot name="brand"></slot>
		
		//       </div>
		
		//       <div :class="['navbar-collapse',{collapse:collapsed}]">
		
		//         <ul class="nav navbar-nav">
		
		//           <slot></slot>
		
		//         </ul>
		
		//         <ul v-if="slots.right" class="nav navbar-nav navbar-right">
		
		//           <slot name="right"></slot>
		
		//         </ul>
		
		//       </div>
		
		//     </div>
		
		//   </nav>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 152 */
	/***/ function(module, exports) {
	
		module.exports = "<nav v-el:navbar :class=\"['navbar',{\r\n    'navbar-inverse':(type == 'inverse'),\r\n    'navbar-default':(type == 'default'),\r\n    'navbar-fixed-top':(placement === 'top'),\r\n    'navbar-fixed-bottom':(placement === 'bottom'),\r\n    'navbar-static-top':(placement === 'static')\r\n  }]\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <button v-if=\"!slots.collapse\" type=\"button\" class=\"navbar-toggle collapsed\"  aria-expanded=\"false\" @click=\"toggleCollapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <slot name=\"collapse\"></slot>\r\n        <slot name=\"brand\"></slot>\r\n      </div>\r\n      <div :class=\"['navbar-collapse',{collapse:collapsed}]\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <slot></slot>\r\n        </ul>\r\n        <ul v-if=\"slots.right\" class=\"nav navbar-nav navbar-right\">\r\n          <slot name=\"right\"></slot>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>";
	
	/***/ },
	/* 153 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(154)
		module.exports = __webpack_require__(156)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(157)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-42088116&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Option.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-42088116&file=Option.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Option.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 154 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(155);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-42088116&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-42088116&file=Option.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Option.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 155 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, "a span.check-mark[_v-42088116] {\r\n  position: absolute;\r\n  display: inline-block;\r\n  right: 15px;\r\n  margin-top: 5px;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 156 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		// <template>
		
		//   <li style="position:relative">
		
		//     <a @mousedown.prevent="handleClick" style="cursor:pointer">
		
		//       <span v-el:v><slot></slot></span>
		
		//       <span class="glyphicon glyphicon-ok check-mark" v-show="chosen"></span>
		
		//     </a>
		
		//   </li>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  props: {
		    value: {
		      type: String
		    }
		  },
		  data: function data() {
		    return {
		      chosen: false
		    };
		  },
		
		  computed: {
		    chosen: function chosen() {
		      return this.$parent.value.indexOf(this.value) !== -1;
		    }
		  },
		  methods: {
		    handleClick: function handleClick() {
		      var parent = this.$parent;
		      if (parent.multiple) {
		        var index = parent.value.indexOf(this.value);
		        parent.value[~index ? '$remove' : 'push'](this.value);
		      } else {
		        parent.value = [this.value];
		        parent.show = false;
		      }
		    }
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// a span.check-mark {
		
		//   position: absolute;
		
		//   display: inline-block;
		
		//   right: 15px;
		
		//   margin-top: 5px;
		
		// }
		
		// </style>
	
	/***/ },
	/* 157 */
	/***/ function(module, exports) {
	
		module.exports = "<li style=\"position:relative\" _v-42088116=\"\">\n    <a @mousedown.prevent=\"handleClick\" style=\"cursor:pointer\" _v-42088116=\"\">\n      <span v-el:v=\"\" _v-42088116=\"\"><slot _v-42088116=\"\"></slot></span>\n      <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"chosen\" _v-42088116=\"\"></span>\n    </a>\n  </li>";
	
	/***/ },
	/* 158 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(159)
		module.exports = __webpack_require__(161)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(162)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Panel.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Panel.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 159 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(160);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b1e0461a&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b1e0461a&file=Panel.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Panel.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 160 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".accordion-toggle {\r\n  cursor: pointer;\r\n}\r\n.collapse-transition {\r\n  -webkit-transition: max-height .5s ease;\r\n  transition: max-height .5s ease;\r\n}\r\n.collapse-enter, .collapse-leave {\r\n  max-height: 0!important;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 161 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    header: {
		      type: String
		    },
		    isOpen: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: null
		    },
		    type: {
		      type: String,
		      default: null
		    }
		  },
		  computed: {
		    inAccordion: function inAccordion() {
		      return this.$parent && this.$parent._isAccordion;
		    },
		    panelType: function panelType() {
		      return 'panel-' + (this.type || this.$parent && this.$parent.type || 'default');
		    }
		  },
		  methods: {
		    toggle: function toggle() {
		      this.isOpen = !this.isOpen;
		      this.$dispatch('isOpenEvent', this);
		    }
		  },
		  transitions: {
		    collapse: {
		      afterEnter: function afterEnter(el) {
		        el.style.maxHeight = '';
		        el.style.overflow = '';
		      },
		      beforeLeave: function beforeLeave(el) {
		        el.style.maxHeight = el.offsetHeight + 'px';
		        el.style.overflow = 'hidden';
		        // Recalculate DOM before the class gets added.
		        return el.offsetHeight;
		      }
		    }
		  },
		  created: function created() {
		    if (this.isOpen === null) {
		      this.isOpen = !this.inAccordion;
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .accordion-toggle {
		
		//   cursor: pointer;
		
		// }
		
		// .collapse-transition {
		
		//   transition: max-height .5s ease;
		
		// }
		
		// .collapse-enter, .collapse-leave {
		
		//   max-height: 0!important;
		
		// }
		
		// </style>
		// <template>
		
		//   <div class="panel {{panelType}}">
		
		//     <div :class="['panel-heading',{'accordion-toggle':inAccordion}]" @click.prevent="inAccordion&&toggle()">
		
		//       <slot name="header">
		
		//         <h4 class="panel-title">{{ header }}</h4>
		
		//       </slot>
		
		//     </div>
		
		//     <div class="panel-collapse"
		
		//       v-el:panel
		
		//       v-show="isOpen"
		
		//       transition="collapse"
		
		//     >
		
		//       <div class="panel-body">
		
		//         <slot></slot>
		
		//       </div>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 162 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"panel {{panelType}}\">\r\n    <div :class=\"['panel-heading',{'accordion-toggle':inAccordion}]\" @click.prevent=\"inAccordion&&toggle()\">\r\n      <slot name=\"header\">\r\n        <h4 class=\"panel-title\">{{ header }}</h4>\r\n      </slot>\r\n    </div>\r\n    <div class=\"panel-collapse\"\r\n      v-el:panel\r\n      v-show=\"isOpen\"\r\n      transition=\"collapse\"\r\n    >\r\n      <div class=\"panel-body\">\r\n        <slot></slot>\r\n      </div>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 163 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(164)
		module.exports = __webpack_require__(166)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(168)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Popover.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Popover.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 164 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(165);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2465bf54&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2465bf54&file=Popover.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Popover.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 165 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".scale-transition,\r\n.fade-transition {\r\n  display: block;\r\n}\r\n.scale-enter {\r\n  -webkit-animation:scale-in 0.15s ease-in;\r\n          animation:scale-in 0.15s ease-in;\r\n}\r\n.scale-leave {\r\n  -webkit-animation:scale-out 0.15s ease-out;\r\n          animation:scale-out 0.15s ease-out;\r\n}\r\n@-webkit-keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes scale-in {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes scale-out {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n  }\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 166 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _popoverMixins = __webpack_require__(167);
		
		var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  mixins: [_popoverMixins2.default],
		  props: {
		    trigger: {
		      type: String,
		      default: 'click'
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .scale-transition,
		
		// .fade-transition {
		
		//   display: block;
		
		// }
		
		// .scale-enter {
		
		//   animation:scale-in 0.15s ease-in;
		
		// }
		
		// .scale-leave {
		
		//   animation:scale-out 0.15s ease-out;
		
		// }
		
		// @keyframes scale-in {
		
		//   0% {
		
		//     transform: scale(0);
		
		//     opacity: 0;
		
		//   }
		
		//   100% {
		
		//     transform: scale(1);
		
		//     opacity: 1;
		
		//   }
		
		// }
		
		// @keyframes scale-out {
		
		//   0% {
		
		//     transform: scale(1);
		
		//     opacity: 1;
		
		//   }
		
		//   100% {
		
		//     transform: scale(0);
		
		//     opacity: 0;
		
		//   }
		
		// }
		
		// </style>
		// <template>
		
		//   <span v-el:trigger>
		
		//     <slot></slot>
		
		//   </span>
		
		//   <div v-el:popover v-show="show"
		
		//     :class="['popover',placement]"
		
		//     :transition="effect"
		
		//   >
		
		//     <div class="arrow"></div>
		
		//     <h3 class="popover-title" v-if="title">
		
		//       <slot name="title">{{title}}</slot>
		
		//     </h3>
		
		//     <div class="popover-content">
		
		//       <slot name="content">{{{content}}}</slot>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 167 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    trigger: {
		      type: String
		    },
		    effect: {
		      type: String,
		      default: 'fadein'
		    },
		    title: {
		      type: String
		    },
		    content: {
		      type: String
		    },
		    header: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: true
		    },
		    placement: {
		      type: String
		    }
		  },
		  data: function data() {
		    return {
		      position: {
		        top: 0,
		        left: 0
		      },
		      show: true
		    };
		  },
		
		  methods: {
		    toggle: function toggle(e) {
		      this.show = !this.show;
		      if (e && this.trigger === 'contextmenu') e.preventDefault();
		    }
		  },
		  ready: function ready() {
		    var popover = this.$els.popover;
		    if (!popover) return console.error('Could not find popover v-el in your component that uses popoverMixin.');
		    var trigger = this.$els.trigger.children[0];
		    switch (this.placement) {
		      case 'top':
		        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
		        this.position.top = trigger.offsetTop - popover.offsetHeight;
		        break;
		      case 'left':
		        this.position.left = trigger.offsetLeft - popover.offsetWidth;
		        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
		        break;
		      case 'right':
		        this.position.left = trigger.offsetLeft + trigger.offsetWidth;
		        this.position.top = trigger.offsetTop + trigger.offsetHeight / 2 - popover.offsetHeight / 2;
		        break;
		      case 'bottom':
		        this.position.left = trigger.offsetLeft - popover.offsetWidth / 2 + trigger.offsetWidth / 2;
		        this.position.top = trigger.offsetTop + trigger.offsetHeight;
		        break;
		      default:
		        console.warn('Wrong placement prop');
		    }
		    popover.style.top = this.position.top + 'px';
		    popover.style.left = this.position.left + 'px';
		    popover.style.display = 'none';
		    this.show = !this.show;
		
		    var events = this.trigger === 'contextmenu' ? 'contextmenu' : this.trigger === 'hover' ? 'mouseleave mouseenter' : this.trigger === 'focus' ? 'blur focus' : 'click';
		    (0, _NodeList2.default)(trigger).on(events, this.toggle);
		  },
		  beforeDestroy: function beforeDestroy() {
		    (0, _NodeList2.default)(this.$els.trigger.children[0]).off();
		  }
		};
	
	/***/ },
	/* 168 */
	/***/ function(module, exports) {
	
		module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n  </span>\r\n  <div v-el:popover v-show=\"show\"\r\n    :class=\"['popover',placement]\"\r\n    :transition=\"effect\"\r\n  >\r\n    <div class=\"arrow\"></div>\r\n    <h3 class=\"popover-title\" v-if=\"title\">\r\n      <slot name=\"title\">{{title}}</slot>\r\n    </h3>\r\n    <div class=\"popover-content\">\r\n      <slot name=\"content\">{{{content}}}</slot>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 169 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(170)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(171)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Progressbar.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Progressbar.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 170 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    now: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      required: true
		    },
		    label: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    type: {
		      type: String
		    },
		    striped: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    animated: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    }
		  }
		};
		// </script>
		// <template>
		
		//   <div role="progressbar" 
		
		//     :class="['progress-bar',{
		
		//       'progress-bar-success':type == 'success',
		
		//       'progress-bar-warning':type == 'warning',
		
		//       'progress-bar-info':type == 'info',
		
		//       'progress-bar-danger':type == 'danger',
		
		//       'progress-bar-striped':striped,
		
		//       'active':animated
		
		//     }]"
		
		//     :style="{width: now + '%'}"
		
		//   >
		
		//     {{label ? now + '%' : ''}}
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 171 */
	/***/ function(module, exports) {
	
		module.exports = "<div role=\"progressbar\" \r\n    :class=\"['progress-bar',{\r\n      'progress-bar-success':type == 'success',\r\n      'progress-bar-warning':type == 'warning',\r\n      'progress-bar-info':type == 'info',\r\n      'progress-bar-danger':type == 'danger',\r\n      'progress-bar-striped':striped,\r\n      'active':animated\r\n    }]\"\r\n    :style=\"{width: now + '%'}\"\r\n  >\r\n    {{label ? now + '%' : ''}}\r\n  </div>";
	
	/***/ },
	/* 172 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(173)
		module.exports = __webpack_require__(175)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(176)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Radio.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Radio.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 173 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(174);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-74cfd92c&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-74cfd92c&file=Radio.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Radio.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 174 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".radio { position: relative; }\r\n.radio > label > input {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  opacity: 0;\r\n  z-index: -1;\r\n  box-sizing: border-box;\r\n}\r\n.radio > label > .icon {\r\n  position: absolute;\r\n  top: .15rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1.4rem;\r\n  height: 1.4rem;\r\n  text-align: center;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border-radius: .7rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n.radio:not(.active) > label > .icon {\r\n  background-color: #ddd;\r\n  border: 1px solid #bbb;\r\n}\r\n.radio > label > input:focus ~ .icon {\r\n  outline: 0;\r\n  border: 1px solid #66afe9;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}\r\n.radio.active > label > .icon {\r\n  background-size: 1rem 1rem;\r\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);\r\n}\r\n.radio.active .btn-default { -webkit-filter: brightness(75%); filter: brightness(75%); }\r\n\r\n.radio.disabled > label > .icon,\r\n.radio.readonly > label > .icon,\r\n.btn.readonly {\r\n  filter: alpha(opacity=65);\r\n  box-shadow: none;\r\n  opacity: .65;\r\n}\r\nlabel.btn > input[type=radio] {\r\n  position: absolute;\r\n  clip: rect(0,0,0,0);\r\n  pointer-events: none;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 175 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    value: {
		      default: true
		    },
		    checked: {
		      twoWay: true
		    },
		    button: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    name: {
		      type: String,
		      default: null
		    },
		    readonly: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    type: {
		      type: String,
		      default: null
		    }
		  },
		  computed: {
		    active: function active() {
		      return this.group ? this.$parent.value === this.value : this.value === this.checked;
		    },
		    buttonStyle: function buttonStyle() {
		      return this.button || this.group && this.$parent.buttons;
		    },
		    group: function group() {
		      return this.$parent && this.$parent._radioGroup;
		    },
		    typeColor: function typeColor() {
		      return this.type || this.$parent && this.$parent.type || 'default';
		    }
		  },
		  created: function created() {
		    var parent = this.$parent;
		    if (!parent) return;
		    if (parent._btnGroup && !parent._checkboxGroup) {
		      parent._radioGroup = true;
		    }
		  },
		  ready: function ready() {
		    if (!this.$parent._radioGroup) return;
		    if (this.$parent.value) {
		      this.checked = this.$parent.value === this.value;
		    } else if (this.checked) {
		      this.$parent.value = this.value;
		    }
		  },
		
		  methods: {
		    focus: function focus() {
		      this.$els.input.focus();
		    },
		    toggle: function toggle() {
		      if (this.disabled) {
		        return;
		      }
		      this.focus();
		      if (this.readonly) {
		        return;
		      }
		      this.checked = this.value;
		      if (this.group) {
		        this.$parent.value = this.value;
		      }
		    }
		  }
		};
		// </script>
		
		
		// <style scope>
		
		// .radio { position: relative; }
		
		// .radio > label > input {
		
		//   position: absolute;
		
		//   margin: 0;
		
		//   padding: 0;
		
		//   opacity: 0;
		
		//   z-index: -1;
		
		//   box-sizing: border-box;
		
		// }
		
		// .radio > label > .icon {
		
		//   position: absolute;
		
		//   top: .15rem;
		
		//   left: 0;
		
		//   display: block;
		
		//   width: 1.4rem;
		
		//   height: 1.4rem;
		
		//   text-align: center;
		
		//   user-select: none;
		
		//   border-radius: .7rem;
		
		//   background-repeat: no-repeat;
		
		//   background-position: center center;
		
		//   background-size: 50% 50%;
		
		// }
		
		// .radio:not(.active) > label > .icon {
		
		//   background-color: #ddd;
		
		//   border: 1px solid #bbb;
		
		// }
		
		// .radio > label > input:focus ~ .icon {
		
		//   outline: 0;
		
		//   border: 1px solid #66afe9;
		
		//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		
		// }
		
		// .radio.active > label > .icon {
		
		//   background-size: 1rem 1rem;
		
		//   background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI0IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
		
		// }
		
		// .radio.active .btn-default { filter: brightness(75%); }
		
		
		// .radio.disabled > label > .icon,
		
		// .radio.readonly > label > .icon,
		
		// .btn.readonly {
		
		//   filter: alpha(opacity=65);
		
		//   box-shadow: none;
		
		//   opacity: .65;
		
		// }
		
		// label.btn > input[type=radio] {
		
		//   position: absolute;
		
		//   clip: rect(0,0,0,0);
		
		//   pointer-events: none;
		
		// }
		
		// </style>
		// <template>
		
		//   <label v-if="buttonStyle" :class="['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
		
		//     <input type="radio" autocomplete="off"
		
		//       v-el:input
		
		//       v-show="!readonly"
		
		//       :checked="active"
		
		//       :value="value"
		
		//       :name="name"
		
		//       :readonly="readonly"
		
		//       :disabled="disabled"
		
		//     />
		
		//     <slot></slot>
		
		//   </label>
		
		//   <div v-else :class="['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]" @click.prevent="toggle">
		
		//     <label class="open">
		
		//       <input type="radio" autocomplete="off"
		
		//         v-el:input
		
		//         :checked="active"
		
		//         :value="value"
		
		//         :name="name"
		
		//         :readonly="readonly"
		
		//         :disabled="disabled"
		
		//       />
		
		//       <span class="icon dropdown-toggle" :class="[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]"></span>
		
		//       <span v-if="active&&typeColor==='default'" class="icon"></span>
		
		//       <slot></slot>
		
		//     </label>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 176 */
	/***/ function(module, exports) {
	
		module.exports = "<label v-if=\"buttonStyle\" :class=\"['btn btn-'+typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <input type=\"radio\" autocomplete=\"off\"\r\n      v-el:input\r\n      v-show=\"!readonly\"\r\n      :checked=\"active\"\r\n      :value=\"value\"\r\n      :name=\"name\"\r\n      :readonly=\"readonly\"\r\n      :disabled=\"disabled\"\r\n    />\r\n    <slot></slot>\r\n  </label>\r\n  <div v-else :class=\"['radio',typeColor,{active:active,disabled:disabled,readonly:readonly}]\" @click.prevent=\"toggle\">\r\n    <label class=\"open\">\r\n      <input type=\"radio\" autocomplete=\"off\"\r\n        v-el:input\r\n        :checked=\"active\"\r\n        :value=\"value\"\r\n        :name=\"name\"\r\n        :readonly=\"readonly\"\r\n        :disabled=\"disabled\"\r\n      />\r\n      <span class=\"icon dropdown-toggle\" :class=\"[active?'btn-'+typeColor:'',{bg:typeColor==='default'}]\"></span>\r\n      <span v-if=\"active&&typeColor==='default'\" class=\"icon\"></span>\r\n      <slot></slot>\r\n    </label>\r\n  </div>";
	
	/***/ },
	/* 177 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(178)
		module.exports = __webpack_require__(180)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(196)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-e514dbc6&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Select.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-e514dbc6&file=Select.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Select.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 178 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(179);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e514dbc6&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e514dbc6&file=Select.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Select.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 179 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".btn-select[_v-e514dbc6] { display: inline-block; }\r\n.btn-select>.btn-group>.dropdown-menu>li[_v-e514dbc6] { position:relative; }\r\n.btn-select>.btn-group>.dropdown-menu>li>a[_v-e514dbc6] { cursor:pointer; }\r\n.bs-searchbox[_v-e514dbc6] {\r\n  position: relative;\r\n  margin: 4px 8px;\r\n}\r\n.bs-searchbox .close[_v-e514dbc6] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n  display: block;\r\n  width: 34px;\r\n  height: 34px;\r\n  line-height: 34px;\r\n  text-align: center;\r\n}\r\nbutton>.close[_v-e514dbc6] { margin-left: 5px;}\r\n.notify.out[_v-e514dbc6] { position: relative; }\r\n.notify.in[_v-e514dbc6],\r\n.notify>div[_v-e514dbc6] {\r\n  position: absolute;\r\n  width: 96%;\r\n  margin: 0 2%;\r\n  min-height: 26px;\r\n  padding: 3px 5px;\r\n  background: #f5f5f5;\r\n  border: 1px solid #e3e3e3;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);\r\n  pointer-events: none;\r\n}\r\n.notify>div[_v-e514dbc6] {\r\n  top: 5px;\r\n  z-index: 1;\r\n}\r\n.notify.in[_v-e514dbc6] {\r\n  opacity: .9;\r\n  bottom: 5px;\r\n}\r\n.btn-group.btn-group-justified .dropdown-menu[_v-e514dbc6] { width: 100%; }\r\nspan.caret[_v-e514dbc6] {\r\n  float: right;\r\n  margin-top: 9px;\r\n  margin-left: 5px;\r\n}\r\n.secret[_v-e514dbc6] {\r\n  border: 0;\r\n  clip: rect(0 0 0 0);\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  position: absolute;\r\n  width: 1px;\r\n}\r\n.bs-searchbox input[_v-e514dbc6]:focus,\r\n.secret:focus + button[_v-e514dbc6] {\r\n  outline: 0;\r\n  border-color: #66afe9 !important;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 180 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _typeof2 = __webpack_require__(181);
		
		var _typeof3 = _interopRequireDefault(_typeof2);
		
		var _getIterator2 = __webpack_require__(87);
		
		var _getIterator3 = _interopRequireDefault(_getIterator2);
		
		var _utils = __webpack_require__(96);
		
		var _NodeList = __webpack_require__(26);
		
		var _NodeList2 = _interopRequireDefault(_NodeList);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		// <div v-el:select :class="{'btn-group btn-group-justified': justified, 'btn-select': !justified}">
		
		//   <slot name="before"></slot>
		
		//   <div :class="{open:show,dropdown:!justified}">
		
		//     <select v-el:sel v-model="value" v-show="show" name="{{name}}" class="secret" :multiple="multiple" :required="required" :readonly="readonly" :disabled="disabled">
		
		//       <option v-if="required" value=""></option>
		
		//       <option v-for="option in options" :value="option.value||option">{{ option.label||option }}</option>
		
		//     </select>
		
		//     <button type="button" class="form-control dropdown-toggle"
		
		//       :disabled="disabled || !hasParent"
		
		//       :readonly="readonly"
		
		//       @click="toggle()"
		
		//       @keyup.esc="show = false"
		
		//     >
		
		//       <span class="btn-content">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>
		
		//       <span class="caret"></span>
		
		//       <span v-if="clearButton&&values.length" class="close" @click="clear()">&times;</span>
		
		//     </button>
		
		//     <ul class="dropdown-menu">
		
		//       <template v-if="options.length">
		
		//         <li v-if="canSearch" class="bs-searchbox">
		
		//           <input type="text" placeholder="{{searchText||text.search}}" class="form-control" autocomplete="off"
		
		//             v-el:search
		
		//             v-model="searchValue"
		
		//             @keyup.esc="show = false"
		
		//           />
		
		//           <span v-show="searchValue" class="close" @click="clearSearch">&times;</span>
		
		//         </li>
		
		//         <li v-if="required&&!clearButton"><a @mousedown.prevent="clear() && blur()">{{ placeholder || text.notSelected }}</a></li>
		
		//         <li v-for="option in options | filterBy searchValue" :id="option.value||option">
		
		//           <a @mousedown.prevent="select(option.value||option)">
		
		//             {{ option.label||option }}
		
		//             <span class="glyphicon glyphicon-ok check-mark" v-show="isSelected(option.value||option)"></span>
		
		//           </a>
		
		//         </li>
		
		//       </template>
		
		//       <slot v-else></slot>
		
		//       <div v-if="showNotify && !closeOnSelect" class="notify in" transition="fadein">{{limitText}}</div>
		
		//     </ul>
		
		//     <div v-if="showNotify && closeOnSelect" class="notify out" transition="fadein"><div>{{limitText}}</div></div>
		
		//   </div>
		
		//   <slot name="after"></slot>
		
		// </div>
		
		// </template>
		
		
		// <script>
		var timeout = {};
		exports.default = {
		  props: {
		    value: {
		      twoWay: true
		    },
		    options: {
		      type: Array,
		      default: function _default() {
		        return [];
		      }
		    },
		    multiple: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    clearButton: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    closeOnSelect: { // only works when multiple
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    justified: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    lang: {
		      type: String,
		      default: navigator.language
		    },
		    limit: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 1024
		    },
		    name: {
		      type: String,
		      default: null
		    },
		    parent: {
		      default: true
		    },
		    placeholder: {
		      type: String,
		      default: null
		    },
		    readonly: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: null
		    },
		    required: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: null
		    },
		    minSearch: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 0
		    },
		    search: { // Allow searching (only works when options are provided)
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    searchText: {
		      type: String,
		      default: null
		    },
		    url: {
		      type: String,
		      default: null
		      // },
		      // cache: { // save old data -- not working yet (experimental)
		      //   type: Array,
		      //   default: true
		    }
		  },
		  data: function data() {
		    return {
		      loading: null,
		      searchValue: null,
		      show: false,
		      showNotify: false
		    };
		  },
		
		  computed: {
		    selectedItems: function selectedItems() {
		      if (this.options.length === 0) {
		        return '';
		      }
		      var foundItems = [];
		      var _iteratorNormalCompletion = true;
		      var _didIteratorError = false;
		      var _iteratorError = undefined;
		
		      try {
		        for (var _iterator = (0, _getIterator3.default)(this.values), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		          var item = _step.value;
		
		          if (~['number', 'string'].indexOf(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
		            var option = null;
		            if (this.options.some(function (o) {
		              if (o instanceof Object ? o.value === item : o === item) {
		                option = o;
		                return true;
		              }
		            })) {
		              foundItems.push(option.label || option);
		            }
		          }
		        }
		      } catch (err) {
		        _didIteratorError = true;
		        _iteratorError = err;
		      } finally {
		        try {
		          if (!_iteratorNormalCompletion && _iterator.return) {
		            _iterator.return();
		          }
		        } finally {
		          if (_didIteratorError) {
		            throw _iteratorError;
		          }
		        }
		      }
		
		      return foundItems.join(', ');
		    },
		    canSearch: function canSearch() {
		      return this.minSearch ? this.options.length >= this.minSearch : this.search;
		    },
		    limitText: function limitText() {
		      return this.text.limit.replace('{{limit}}', this.limit);
		    },
		    showPlaceholder: function showPlaceholder() {
		      return this.values.length === 0 || !this.hasParent ? this.placeholder || this.text.notSelected : null;
		    },
		    text: function text() {
		      return (0, _utils.translations)(this.lang);
		    },
		    hasParent: function hasParent() {
		      return this.parent instanceof Array ? this.parent.length : this.parent;
		    },
		    values: function values() {
		      return this.value instanceof Array ? this.value : this.value !== null && this.value !== undefined ? [this.value] : [];
		    }
		  },
		  watch: {
		    options: function options(_options) {
		      var changed = false;
		      if (_options instanceof Array && _options.length) {
		        for (var i in _options) {
		          if (!(_options[i] instanceof Object)) {
		            _options[i] = { label: _options[i], value: _options[i] };
		            changed = true;
		          }
		        }
		      }
		      if (changed) this.options = _options;
		    },
		    value: function value(val) {
		      var _this = this;
		
		      if (this.value instanceof Array && val.length > this.limit) {
		        this.showNotify = true;
		        if (timeout.limit) clearTimeout(timeout.limit);
		        timeout.limit = setTimeout(function () {
		          timeout.limit = false;
		          _this.showNotify = false;
		        }, 1500);
		      }
		      this.checkValue();
		    },
		    show: function show(val) {
		      if (val) {
		        this.$els.sel.focus();
		        this.$els.search && this.$els.search.focus();
		      }
		    },
		    url: function url() {
		      this.update();
		    }
		  },
		  methods: {
		    select: function select(v) {
		      if (this.value instanceof Array) {
		        if (~this.value.indexOf(v)) {
		          this.value.$remove(v);
		        } else {
		          this.value.push(v);
		        }
		        if (this.closeOnSelect) {
		          this.toggle();
		        }
		      } else {
		        this.value = v;
		        this.toggle();
		      }
		    },
		    clear: function clear() {
		      if (this.disabled || this.readonly) {
		        return;
		      }
		      this.value = this.value instanceof Array ? [] : null;
		      this.toggle();
		    },
		    clearSearch: function clearSearch() {
		      this.searchValue = '';
		      this.$els.search.focus();
		    },
		    checkValue: function checkValue() {
		      if (this.multiple && !(this.value instanceof Array)) {
		        this.value = this.value === null || this.value === undefined ? [] : [this.value];
		      }
		      if (!this.multiple && this.value instanceof Array) {
		        this.value = this.value.length ? this.value.pop() : null;
		      }
		      if (this.limit < 1) {
		        this.limit = 1;
		      }
		      if (this.values.length > this.limit) {
		        this.value = this.value.slice(0, this.limit);
		      }
		    },
		    isSelected: function isSelected(v) {
		      return this.values.indexOf(v) > -1;
		    },
		    toggle: function toggle() {
		      this.show = !this.show;
		    },
		    blur: function blur() {
		      this.show = false;
		    },
		    update: function update() {
		      var _this2 = this;
		
		      if (!this.url) return;
		      this.loading = true;
		      (0, _utils.callAjax)(this.url, function (data) {
		        var options = [];
		        var _iteratorNormalCompletion2 = true;
		        var _didIteratorError2 = false;
		        var _iteratorError2 = undefined;
		
		        try {
		          for (var _iterator2 = (0, _getIterator3.default)(data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		            var opc = _step2.value;
		
		            if (opc.value !== undefined && opc.label !== undefined) options.push({ value: opc.value, label: opc.label });
		          }
		        } catch (err) {
		          _didIteratorError2 = true;
		          _iteratorError2 = err;
		        } finally {
		          try {
		            if (!_iteratorNormalCompletion2 && _iterator2.return) {
		              _iterator2.return();
		            }
		          } finally {
		            if (_didIteratorError2) {
		              throw _iteratorError2;
		            }
		          }
		        }
		
		        _this2.options = options;
		        if (!options.length) {
		          _this2.value = _this2.value instanceof Array ? [] : null;
		        }
		      }).always(function () {
		        _this2.loading = false;
		        _this2.checkValue();
		      });
		    }
		  },
		  created: function created() {
		    if (this.value === undefined || !this.parent) {
		      this.value = null;
		    }
		    if (!this.multiple && this.value instanceof Array) {
		      this.value = this.value.shift();
		    }
		    this.checkValue();
		    if (this.url) this.update();
		  },
		  ready: function ready() {
		    var _this3 = this;
		
		    (0, _NodeList2.default)(this.$els.select).onBlur(function (e) {
		      _this3.show = false;
		    });
		  },
		  beforeDestroy: function beforeDestroy() {
		    (0, _NodeList2.default)(this.$els.select).offBlur();
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .btn-select { display: inline-block; }
		
		// .btn-select>.btn-group>.dropdown-menu>li { position:relative; }
		
		// .btn-select>.btn-group>.dropdown-menu>li>a { cursor:pointer; }
		
		// .bs-searchbox {
		
		//   position: relative;
		
		//   margin: 4px 8px;
		
		// }
		
		// .bs-searchbox .close {
		
		//   position: absolute;
		
		//   top: 0;
		
		//   right: 0;
		
		//   z-index: 2;
		
		//   display: block;
		
		//   width: 34px;
		
		//   height: 34px;
		
		//   line-height: 34px;
		
		//   text-align: center;
		
		// }
		
		// button>.close { margin-left: 5px;}
		
		// .notify.out { position: relative; }
		
		// .notify.in,
		
		// .notify>div {
		
		//   position: absolute;
		
		//   width: 96%;
		
		//   margin: 0 2%;
		
		//   min-height: 26px;
		
		//   padding: 3px 5px;
		
		//   background: #f5f5f5;
		
		//   border: 1px solid #e3e3e3;
		
		//   box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
		
		//   pointer-events: none;
		
		// }
		
		// .notify>div {
		
		//   top: 5px;
		
		//   z-index: 1;
		
		// }
		
		// .notify.in {
		
		//   opacity: .9;
		
		//   bottom: 5px;
		
		// }
		
		// .btn-group.btn-group-justified .dropdown-menu { width: 100%; }
		
		// span.caret {
		
		//   float: right;
		
		//   margin-top: 9px;
		
		//   margin-left: 5px;
		
		// }
		
		// .secret {
		
		//   border: 0;
		
		//   clip: rect(0 0 0 0);
		
		//   height: 1px;
		
		//   margin: -1px;
		
		//   overflow: hidden;
		
		//   padding: 0;
		
		//   position: absolute;
		
		//   width: 1px;
		
		// }
		
		// .bs-searchbox input:focus,
		
		// .secret:focus + button {
		
		//   outline: 0;
		
		//   border-color: #66afe9 !important;
		
		//   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		
		//   box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		
		// }
		
		// </style>
	
	/***/ },
	/* 181 */
	/***/ function(module, exports, __webpack_require__) {
	
		"use strict";
		
		exports.__esModule = true;
		
		var _iterator = __webpack_require__(45);
		
		var _iterator2 = _interopRequireDefault(_iterator);
		
		var _symbol = __webpack_require__(182);
		
		var _symbol2 = _interopRequireDefault(_symbol);
		
		var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
		  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
		} : function (obj) {
		  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		};
	
	/***/ },
	/* 182 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(183), __esModule: true };
	
	/***/ },
	/* 183 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(184);
		__webpack_require__(193);
		__webpack_require__(194);
		__webpack_require__(195);
		module.exports = __webpack_require__(32).Symbol;
	
	/***/ },
	/* 184 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		// ECMAScript 6 symbols shim
		var global         = __webpack_require__(31)
		  , has            = __webpack_require__(54)
		  , DESCRIPTORS    = __webpack_require__(40)
		  , $export        = __webpack_require__(30)
		  , redefine       = __webpack_require__(53)
		  , META           = __webpack_require__(185).KEY
		  , $fails         = __webpack_require__(41)
		  , shared         = __webpack_require__(68)
		  , setToStringTag = __webpack_require__(72)
		  , uid            = __webpack_require__(69)
		  , wks            = __webpack_require__(73)
		  , wksExt         = __webpack_require__(80)
		  , wksDefine      = __webpack_require__(186)
		  , keyOf          = __webpack_require__(187)
		  , enumKeys       = __webpack_require__(188)
		  , isArray        = __webpack_require__(191)
		  , anObject       = __webpack_require__(37)
		  , toIObject      = __webpack_require__(61)
		  , toPrimitive    = __webpack_require__(43)
		  , createDesc     = __webpack_require__(44)
		  , _create        = __webpack_require__(57)
		  , gOPNExt        = __webpack_require__(85)
		  , $GOPD          = __webpack_require__(192)
		  , $DP            = __webpack_require__(36)
		  , $keys          = __webpack_require__(59)
		  , gOPD           = $GOPD.f
		  , dP             = $DP.f
		  , gOPN           = gOPNExt.f
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , PROTOTYPE      = 'prototype'
		  , HIDDEN         = wks('_hidden')
		  , TO_PRIMITIVE   = wks('toPrimitive')
		  , isEnum         = {}.propertyIsEnumerable
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , OPSymbols      = shared('op-symbols')
		  , ObjectProto    = Object[PROTOTYPE]
		  , USE_NATIVE     = typeof $Symbol == 'function'
		  , QObject        = global.QObject;
		// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
		var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
		
		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(dP({}, 'a', {
		    get: function(){ return dP(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = gOPD(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  dP(it, key, D);
		  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
		} : dP;
		
		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
		  sym._k = tag;
		  return sym;
		};
		
		var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
		  return typeof it == 'symbol';
		} : function(it){
		  return it instanceof $Symbol;
		};
		
		var $defineProperty = function defineProperty(it, key, D){
		  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
		  anObject(it);
		  key = toPrimitive(key, true);
		  anObject(D);
		  if(has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return dP(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key = toPrimitive(key, true));
		  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  it  = toIObject(it);
		  key = toPrimitive(key, true);
		  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
		  var D = gOPD(it, key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = gOPN(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
		  } return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var IS_OP  = it === ObjectProto
		    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i){
		    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
		  } return result;
		};
		
		// 19.4.1.1 Symbol([description])
		if(!USE_NATIVE){
		  $Symbol = function Symbol(){
		    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
		    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
		    var $set = function(value){
		      if(this === ObjectProto)$set.call(OPSymbols, value);
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    };
		    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
		    return wrap(tag);
		  };
		  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
		    return this._k;
		  });
		
		  $GOPD.f = $getOwnPropertyDescriptor;
		  $DP.f   = $defineProperty;
		  __webpack_require__(86).f = gOPNExt.f = $getOwnPropertyNames;
		  __webpack_require__(190).f  = $propertyIsEnumerable;
		  __webpack_require__(189).f = $getOwnPropertySymbols;
		
		  if(DESCRIPTORS && !__webpack_require__(52)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
		
		  wksExt.f = function(name){
		    return wrap(wks(name));
		  }
		}
		
		$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
		
		for(var symbols = (
		  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
		).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
		
		for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
		
		$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    if(isSymbol(key))return keyOf(SymbolRegistry, key);
		    throw TypeError(key + ' is not a symbol!');
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		});
		
		$export($export.S + $export.F * !USE_NATIVE, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});
		
		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		})), 'JSON', {
		  stringify: function stringify(it){
		    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		    var args = [it]
		      , i    = 1
		      , replacer, $replacer;
		    while(arguments.length > i)args.push(arguments[i++]);
		    replacer = args[1];
		    if(typeof replacer == 'function')$replacer = replacer;
		    if($replacer || !isArray(replacer))replacer = function(key, value){
		      if($replacer)value = $replacer.call(this, key, value);
		      if(!isSymbol(value))return value;
		    };
		    args[1] = replacer;
		    return _stringify.apply($JSON, args);
		  }
		});
		
		// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
		$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(35)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);
	
	/***/ },
	/* 185 */
	/***/ function(module, exports, __webpack_require__) {
	
		var META     = __webpack_require__(69)('meta')
		  , isObject = __webpack_require__(38)
		  , has      = __webpack_require__(54)
		  , setDesc  = __webpack_require__(36).f
		  , id       = 0;
		var isExtensible = Object.isExtensible || function(){
		  return true;
		};
		var FREEZE = !__webpack_require__(41)(function(){
		  return isExtensible(Object.preventExtensions({}));
		});
		var setMeta = function(it){
		  setDesc(it, META, {value: {
		    i: 'O' + ++id, // object ID
		    w: {}          // weak collections IDs
		  }});
		};
		var fastKey = function(it, create){
		  // return primitive with prefix
		  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return 'F';
		    // not necessary to add metadata
		    if(!create)return 'E';
		    // add missing metadata
		    setMeta(it);
		  // return object ID
		  } return it[META].i;
		};
		var getWeak = function(it, create){
		  if(!has(it, META)){
		    // can't set metadata to uncaught frozen object
		    if(!isExtensible(it))return true;
		    // not necessary to add metadata
		    if(!create)return false;
		    // add missing metadata
		    setMeta(it);
		  // return hash weak collections IDs
		  } return it[META].w;
		};
		// add metadata on freeze-family methods calling
		var onFreeze = function(it){
		  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
		  return it;
		};
		var meta = module.exports = {
		  KEY:      META,
		  NEED:     false,
		  fastKey:  fastKey,
		  getWeak:  getWeak,
		  onFreeze: onFreeze
		};
	
	/***/ },
	/* 186 */
	/***/ function(module, exports, __webpack_require__) {
	
		var global         = __webpack_require__(31)
		  , core           = __webpack_require__(32)
		  , LIBRARY        = __webpack_require__(52)
		  , wksExt         = __webpack_require__(80)
		  , defineProperty = __webpack_require__(36).f;
		module.exports = function(name){
		  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
		  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
		};
	
	/***/ },
	/* 187 */
	/***/ function(module, exports, __webpack_require__) {
	
		var getKeys   = __webpack_require__(59)
		  , toIObject = __webpack_require__(61);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};
	
	/***/ },
	/* 188 */
	/***/ function(module, exports, __webpack_require__) {
	
		// all enumerable object keys, includes symbols
		var getKeys = __webpack_require__(59)
		  , gOPS    = __webpack_require__(189)
		  , pIE     = __webpack_require__(190);
		module.exports = function(it){
		  var result     = getKeys(it)
		    , getSymbols = gOPS.f;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = pIE.f
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
		  } return result;
		};
	
	/***/ },
	/* 189 */
	/***/ function(module, exports) {
	
		exports.f = Object.getOwnPropertySymbols;
	
	/***/ },
	/* 190 */
	/***/ function(module, exports) {
	
		exports.f = {}.propertyIsEnumerable;
	
	/***/ },
	/* 191 */
	/***/ function(module, exports, __webpack_require__) {
	
		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(63);
		module.exports = Array.isArray || function isArray(arg){
		  return cof(arg) == 'Array';
		};
	
	/***/ },
	/* 192 */
	/***/ function(module, exports, __webpack_require__) {
	
		var pIE            = __webpack_require__(190)
		  , createDesc     = __webpack_require__(44)
		  , toIObject      = __webpack_require__(61)
		  , toPrimitive    = __webpack_require__(43)
		  , has            = __webpack_require__(54)
		  , IE8_DOM_DEFINE = __webpack_require__(39)
		  , gOPD           = Object.getOwnPropertyDescriptor;
		
		exports.f = __webpack_require__(40) ? gOPD : function getOwnPropertyDescriptor(O, P){
		  O = toIObject(O);
		  P = toPrimitive(P, true);
		  if(IE8_DOM_DEFINE)try {
		    return gOPD(O, P);
		  } catch(e){ /* empty */ }
		  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
		};
	
	/***/ },
	/* 193 */
	/***/ function(module, exports) {
	
	
	
	/***/ },
	/* 194 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(186)('asyncIterator');
	
	/***/ },
	/* 195 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(186)('observable');
	
	/***/ },
	/* 196 */
	/***/ function(module, exports) {
	
		module.exports = "<div v-el:select=\"\" :class=\"{'btn-group btn-group-justified': justified, 'btn-select': !justified}\" _v-e514dbc6=\"\">\n  <slot name=\"before\" _v-e514dbc6=\"\"></slot>\n  <div :class=\"{open:show,dropdown:!justified}\" _v-e514dbc6=\"\">\n    <select v-el:sel=\"\" v-model=\"value\" v-show=\"show\" name=\"{{name}}\" class=\"secret\" :multiple=\"multiple\" :required=\"required\" :readonly=\"readonly\" :disabled=\"disabled\" _v-e514dbc6=\"\">\n      <option v-if=\"required\" value=\"\" _v-e514dbc6=\"\"></option>\n      <option v-for=\"option in options\" :value=\"option.value||option\" _v-e514dbc6=\"\">{{ option.label||option }}</option>\n    </select>\n    <button type=\"button\" class=\"form-control dropdown-toggle\" :disabled=\"disabled || !hasParent\" :readonly=\"readonly\" @click=\"toggle()\" @keyup.esc=\"show = false\" _v-e514dbc6=\"\">\n      <span class=\"btn-content\" _v-e514dbc6=\"\">{{ loading ? text.loading : showPlaceholder || selectedItems }}</span>\n      <span class=\"caret\" _v-e514dbc6=\"\"></span>\n      <span v-if=\"clearButton&amp;&amp;values.length\" class=\"close\" @click=\"clear()\" _v-e514dbc6=\"\">×</span>\n    </button>\n    <ul class=\"dropdown-menu\" _v-e514dbc6=\"\">\n      <template v-if=\"options.length\" _v-e514dbc6=\"\">\n        <li v-if=\"canSearch\" class=\"bs-searchbox\" _v-e514dbc6=\"\">\n          <input type=\"text\" placeholder=\"{{searchText||text.search}}\" class=\"form-control\" autocomplete=\"off\" v-el:search=\"\" v-model=\"searchValue\" @keyup.esc=\"show = false\" _v-e514dbc6=\"\">\n          <span v-show=\"searchValue\" class=\"close\" @click=\"clearSearch\" _v-e514dbc6=\"\">×</span>\n        </li>\n        <li v-if=\"required&amp;&amp;!clearButton\" _v-e514dbc6=\"\"><a @mousedown.prevent=\"clear() &amp;&amp; blur()\" _v-e514dbc6=\"\">{{ placeholder || text.notSelected }}</a></li>\n        <li v-for=\"option in options | filterBy searchValue\" :id=\"option.value||option\" _v-e514dbc6=\"\">\n          <a @mousedown.prevent=\"select(option.value||option)\" _v-e514dbc6=\"\">\n            {{ option.label||option }}\n            <span class=\"glyphicon glyphicon-ok check-mark\" v-show=\"isSelected(option.value||option)\" _v-e514dbc6=\"\"></span>\n          </a>\n        </li>\n      </template>\n      <slot v-else=\"\" _v-e514dbc6=\"\"></slot>\n      <div v-if=\"showNotify &amp;&amp; !closeOnSelect\" class=\"notify in\" transition=\"fadein\" _v-e514dbc6=\"\">{{limitText}}</div>\n    </ul>\n    <div v-if=\"showNotify &amp;&amp; closeOnSelect\" class=\"notify out\" transition=\"fadein\" _v-e514dbc6=\"\"><div _v-e514dbc6=\"\">{{limitText}}</div></div>\n  </div>\n  <slot name=\"after\" _v-e514dbc6=\"\"></slot>\n</div>";
	
	/***/ },
	/* 197 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(198)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(199)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Slider.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Slider.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 198 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		// <template>
		
		//   <div class="item">
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  data: function data() {
		    return {
		      index: 0,
		      show: false
		    };
		  },
		
		  computed: {
		    show: function show() {
		      return this.$parent.index === this.index;
		    }
		  },
		  ready: function ready() {
		    for (var c in this.$parent.$children) {
		      if (this.$parent.$children[c] === this) {
		        this.index = parseInt(c, 10);
		        break;
		      }
		    }
		    //this.index = [...this.$el.parentNode.children].indexOf(this.$el)
		    this.$parent.indicator.push(this.index);
		    if (this.index === 0) {
		      this.$el.classList.add('active');
		    }
		  }
		};
		// </script>
	
	/***/ },
	/* 199 */
	/***/ function(module, exports) {
	
		module.exports = "<div class=\"item\">\r\n    <slot></slot>\r\n  </div>";
	
	/***/ },
	/* 200 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(201)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(204)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Spinner.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Spinner.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 201 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		__webpack_require__(202);
		
		var _utils = __webpack_require__(96);
		
		// <template>
		
		//   <div :class="['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]" v-show="active">
		
		//     <div class="spinner-wrapper">
		
		//       <div class="spinner-circle"></div>
		
		//       <div class="spinner-text">{{text}}</div>
		
		//     </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		// import styling
		var MIN_WAIT = 500; // in ms
		
		exports.default = {
		  props: {
		    size: {
		      type: String,
		      default: 'md'
		    },
		    text: {
		      type: String,
		      default: ''
		    },
		    fixed: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    }
		  },
		  data: function data() {
		    return {
		      active: false
		    };
		  },
		
		  computed: {
		    spinnerSize: function spinnerSize() {
		      return this.size ? 'spinner-' + this.size : 'spinner-sm';
		    }
		  },
		  ready: function ready() {
		    this._body = document.querySelector('body');
		    this._bodyOverflow = this._body.style.overflowY || '';
		  },
		
		  methods: {
		    getMinWait: function getMinWait(delay) {
		      delay = delay || 0;
		      return new Date().getTime() - this._started.getTime() < MIN_WAIT ? MIN_WAIT - parseInt(new Date().getTime() - this._started.getTime(), 10) + delay : 0 + delay;
		    },
		    show: function show(options) {
		      if (options && options.text) {
		        this.text = options.text;
		      }
		      if (options && options.size) {
		        this.size = options.size;
		      }
		      if (options && options.fixed) {
		        this.fixed = options.fixed;
		      }
		
		      // block scrolling when spinner is on
		      this._body.style.overflowY = 'hidden';
		
		      // activate spinner
		      this._started = new Date();
		      this.active = true;
		      this.$root.$broadcast('shown::spinner');
		    },
		    hide: function hide() {
		      var _this = this;
		
		      var delay = 0;
		      this._spinnerAnimation = setTimeout(function () {
		        _this.active = false;
		        _this._body.style.overflowY = _this._bodyOverflow;
		        _this.$root.$broadcast('hidden::spinner');
		      }, this.getMinWait(delay));
		    }
		  },
		  events: {
		    'show::spinner': function showSpinner(options) {
		      this.show(options);
		    },
		    'hide::spinner': function hideSpinner() {
		      this.hide();
		    },
		    'start::ajax': function startAjax(options) {
		      this.show(options);
		    },
		    'end::ajax': function endAjax() {
		      this.hide();
		    }
		  },
		  destroyed: function destroyed() {
		    clearTimeout(this._spinnerAnimation);
		    this._body.style.overflowY = this._bodyOverflow;
		  }
		};
		// </script>
	
	/***/ },
	/* 202 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(203);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./spinner.scss");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 203 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, "/*!\r\n *\r\n * Spinner\r\n * With fallback to IE9\r\n *\r\n */\n@keyframes spin {\n  100% {\n    transform: rotate(360deg); } }\n\n.spinner-gritcode {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 9998;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.9); }\n  .spinner-gritcode.spinner-fixed {\n    position: fixed; }\n  .spinner-gritcode .spinner-wrapper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n  .spinner-gritcode .spinner-circle {\n    position: relative;\n    border: 4px solid #ccc;\n    border-right-color: #337ab7;\n    border-radius: 50%;\n    display: inline-block;\n    animation: spin 0.6s linear;\n    animation-iteration-count: infinite;\n    width: 3em;\n    height: 3em;\n    z-index: 2; }\n  .spinner-gritcode .spinner-text {\n    position: relative;\n    text-align: center;\n    margin-top: 0.5em;\n    z-index: 2;\n    width: 100%;\n    font-size: 95%;\n    color: #337ab7; }\n\n.spinner-gritcode.spinner-sm .spinner-circle {\n  width: 1.5em;\n  height: 1.5em; }\n\n.spinner-gritcode.spinner-md .spinner-circle {\n  width: 2em;\n  height: 2em; }\n\n.spinner-gritcode.spinner-lg .spinner-circle {\n  width: 2.5em;\n  height: 2.5em; }\n\n.spinner-gritcode.spinner-xl .spinner-circle {\n  width: 3.5em;\n  height: 3.5em; }\n\n.lt-ie10 .spinner-gritcode .spinner-circle, .ie9 .spinner-gritcode .spinner-circle, .oldie .spinner-gritcode .spinner-circle, .no-csstransitions .spinner-gritcode .spinner-circle, .no-csstransforms3d .spinner-gritcode .spinner-circle {\n  background: url(\"http://i2.wp.com/www.thegreatnovelingadventure.com/wp-content/plugins/wp-polls/images/loading.gif\") center center no-repeat;\n  animation: none;\n  margin-left: 0;\n  margin-top: 5px;\n  border: none;\n  width: 32px;\n  height: 32px; }\n", ""]);
		
		// exports
	
	
	/***/ },
	/* 204 */
	/***/ function(module, exports) {
	
		module.exports = "<div :class=\"['spinner spinner-gritcode',spinnerSize,{'spinner-fixed':fixed}]\" v-show=\"active\">\r\n    <div class=\"spinner-wrapper\">\r\n      <div class=\"spinner-circle\"></div>\r\n      <div class=\"spinner-text\">{{text}}</div>\r\n    </div>\r\n  </div>";
	
	/***/ },
	/* 205 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(206)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(207)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tab.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tab.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 206 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    header: {
		      type: String
		    },
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    }
		  },
		  computed: {
		    active: function active() {
		      return this._tabset.show == this;
		    },
		    index: function index() {
		      return this._tabset.tabs.indexOf(this);
		    },
		    show: function show() {
		      return this._tabset && this._tabset.show === this;
		    },
		    transition: function transition() {
		      return this._tabset ? this._tabset.effect : null;
		    }
		  },
		  created: function created() {
		    this._ingroup = this.$parent && this.$parent._tabgroup;
		    var tabset = this;
		    while (tabset && tabset._tabset !== true && tabset.$parent) {
		      tabset = tabset.$parent;
		    }
		    if (!tabset._tabset) {
		      this._tabset = {};
		      console.warn('Warning: "tab" depend on "tabset" to work properly.');
		    } else {
		      tabset.tabs.push(this);
		      if (!this._ingroup) {
		        tabset.headers.push(this);
		      } else {
		        if (!~tabset.headers.indexOf(this.$parent)) {
		          tabset.headers.push(this.$parent);
		        }
		      }
		      this._tabset = tabset;
		    }
		    if (this._ingroup) {
		      this.$parent.tabs.push(this);
		    }
		  },
		  beforeDestroy: function beforeDestroy() {
		    if (this._tabset.active === this.index) {
		      this._tabset.active = 0;
		    }
		    this._tabset.tabs.$remove(this);
		  }
		};
		// </script>
		// <template>
		
		//   <div role="tabpanel" class="tab-pane active" v-show="show"
		
		//     :class="{hide:!show}"
		
		//     :transition="transition"
		
		//   >
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 207 */
	/***/ function(module, exports) {
	
		module.exports = "<div role=\"tabpanel\" class=\"tab-pane active\" v-show=\"show\"\r\n    :class=\"{hide:!show}\"\r\n    :transition=\"transition\"\r\n  >\r\n    <slot></slot>\r\n  </div>";
	
	/***/ },
	/* 208 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(209)
		module.exports = __webpack_require__(211)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(212)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-55faf3cb&file=TabGroup.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./TabGroup.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-55faf3cb&file=TabGroup.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./TabGroup.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 209 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(210);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-55faf3cb&file=TabGroup.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-55faf3cb&file=TabGroup.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabGroup.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 210 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".nav-tabs[_v-55faf3cb] {\r\n  margin-bottom: 15px;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 211 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		exports.default = {
		  props: {
		    disabled: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    header: {
		      type: String
		    }
		  },
		  data: function data() {
		    return {
		      tabs: [],
		      show: false
		    };
		  },
		
		  computed: {
		    active: function active() {
		      return ~this.tabs.indexOf(this._tabset.show);
		    }
		  },
		  created: function created() {
		    this._tabgroup = true;
		    var tabset = this.$parent && this.$parent._tabset === true ? this.$parent : {};
		    if (this.$parent && this.$parent._tabgroup) {
		      console.error('Can\'t nest tabgroups.');
		    }
		    while (tabset && !tabset._tabset && tabset.$parent) {
		      tabset = tabset.$parent;
		    }
		    if (!tabset._tabset) {
		      this._tabset = {};
		      this.show = true;
		      console.warn('Warning: tabgroup depend on tabset to work properly.');
		    } else {
		      this._tabset = tabset;
		    }
		  },
		
		  methods: {
		    blur: function blur() {
		      this.show = false;
		    },
		    toggle: function toggle() {
		      this.show = !this.show;
		    }
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .nav-tabs {
		
		//   margin-bottom: 15px;
		
		// }
		
		// </style>
		// <template><slot></slot></template>
		
		
		// <script>
	
	/***/ },
	/* 212 */
	/***/ function(module, exports) {
	
		module.exports = "<slot _v-55faf3cb=\"\"></slot>";
	
	/***/ },
	/* 213 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(214)
		module.exports = __webpack_require__(216)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(217)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-09e2754e&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tabset.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/template-rewriter.js?id=_v-09e2754e&file=Tabset.vue!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tabset.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 214 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(215);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-09e2754e&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-09e2754e&file=Tabset.vue&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tabset.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 215 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".nav-tabs[_v-09e2754e] {\r\n  margin-bottom: 15px;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 216 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var _Dropdown = __webpack_require__(131);
		
		var _Dropdown2 = _interopRequireDefault(_Dropdown);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		// <template>
		
		//   <!-- Nav tabs -->
		
		//   <ul class="nav nav-{{navStyle}}" role="tablist">
		
		//     <template v-for="t in headers">
		
		//       <li v-if="!t._tabgroup" :class="{active:t.active, disabled:t.disabled}" @click.prevent="select(t)">
		
		//         <a href="#"><slot name="header">{{{t.header}}}</slot></a>
		
		//       </li>
		
		//       <dropdown v-else :text="t.header" :class="{active:t.active}" :disabled="t.disabled">
		
		//         <li v-for="tab in t.tabs" :class="{disabled:tab.disabled}"><a href="#" @click.prevent="select(tab)">{{tab.header}}</a></li>
		
		//       </dropdown>
		
		//     </template>
		
		//   </ul>
		
		//   <div class="tab-content" v-el:tab-content>
		
		//     <slot></slot>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  components: {
		    dropdown: _Dropdown2.default
		  },
		  props: {
		    navStyle: {
		      type: String,
		      default: 'tabs'
		    },
		    effect: {
		      type: String,
		      default: 'fadein'
		    },
		    active: {
		      type: Number,
		      coerce: _utils.coerce.number,
		      default: 0
		    }
		  },
		  data: function data() {
		    return {
		      show: null,
		      headers: [],
		      tabs: []
		    };
		  },
		  created: function created() {
		    this._tabset = true;
		  },
		
		  watch: {
		    active: function active(val) {
		      this.show = this.tabs[val];
		    }
		  },
		  ready: function ready() {
		    this.show = this.tabs[this.active];
		  },
		
		  methods: {
		    select: function select(tab) {
		      if (!tab.disabled) {
		        this.active = tab.index;
		      }
		    }
		  }
		};
		// </script>
		
		
		// <style scoped>
		
		// .nav-tabs {
		
		//   margin-bottom: 15px;
		
		// }
		
		// </style>
	
	/***/ },
	/* 217 */
	/***/ function(module, exports) {
	
		module.exports = "<!-- Nav tabs -->\n  <ul class=\"nav nav-{{navStyle}}\" role=\"tablist\" _v-09e2754e=\"\">\n    <template v-for=\"t in headers\" _v-09e2754e=\"\">\n      <li v-if=\"!t._tabgroup\" :class=\"{active:t.active, disabled:t.disabled}\" @click.prevent=\"select(t)\" _v-09e2754e=\"\">\n        <a href=\"#\" _v-09e2754e=\"\"><slot name=\"header\" _v-09e2754e=\"\">{{{t.header}}}</slot></a>\n      </li>\n      <dropdown v-else=\"\" :text=\"t.header\" :class=\"{active:t.active}\" :disabled=\"t.disabled\" _v-09e2754e=\"\">\n        <li v-for=\"tab in t.tabs\" :class=\"{disabled:tab.disabled}\" _v-09e2754e=\"\"><a href=\"#\" @click.prevent=\"select(tab)\" _v-09e2754e=\"\">{{tab.header}}</a></li>\n      </dropdown>\n    </template>\n  </ul>\n  <div class=\"tab-content\" v-el:tab-content=\"\" _v-09e2754e=\"\">\n    <slot _v-09e2754e=\"\"></slot>\n  </div>";
	
	/***/ },
	/* 218 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(219)
		module.exports = __webpack_require__(221)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(222)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Tooltip.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Tooltip.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 219 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(220);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-48fb51b2&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-48fb51b2&file=Tooltip.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Tooltip.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 220 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".tooltip {\r\n  opacity: .9\r\n}\r\n.fadein-enter {\r\n  -webkit-animation:fadein-in 0.3s ease-in;\r\n          animation:fadein-in 0.3s ease-in;\r\n}\r\n.fadein-leave {\r\n  -webkit-animation:fadein-out 0.3s ease-out;\r\n          animation:fadein-out 0.3s ease-out;\r\n}\r\n@-webkit-keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@keyframes fadein-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: .9;\r\n  }\r\n}\r\n@-webkit-keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes fadein-out {\r\n  0% {\r\n    opacity: .9;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 221 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _popoverMixins = __webpack_require__(167);
		
		var _popoverMixins2 = _interopRequireDefault(_popoverMixins);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  mixins: [_popoverMixins2.default],
		  props: {
		    trigger: {
		      type: String,
		      default: 'hover'
		    },
		    effect: {
		      type: String,
		      default: 'scale'
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .tooltip {
		
		//   opacity: .9
		
		// }
		
		// .fadein-enter {
		
		//   animation:fadein-in 0.3s ease-in;
		
		// }
		
		// .fadein-leave {
		
		//   animation:fadein-out 0.3s ease-out;
		
		// }
		
		// @keyframes fadein-in {
		
		//   0% {
		
		//     opacity: 0;
		
		//   }
		
		//   100% {
		
		//     opacity: .9;
		
		//   }
		
		// }
		
		// @keyframes fadein-out {
		
		//   0% {
		
		//     opacity: .9;
		
		//   }
		
		//   100% {
		
		//     opacity: 0;
		
		//   }
		
		// }
		
		// </style>
		// <template>
		
		//   <span v-el:trigger>
		
		//     <slot></slot>
		
		//   </span>
		
		//   <div v-el:popover v-show="show" role="tooltip"
		
		//     :class="['tooltip',placement]"
		
		//     :transition="effect"
		
		//   >
		
		//     <div class="tooltip-arrow"></div>
		
		//     <div class="tooltip-inner">
		
		//       <slot name="content">{{{content}}}</slot>
		
		//    </div>
		
		//   </div>
		
		// </template>
		
		
		// <script>
	
	/***/ },
	/* 222 */
	/***/ function(module, exports) {
	
		module.exports = "<span v-el:trigger>\r\n    <slot></slot>\r\n  </span>\r\n  <div v-el:popover v-show=\"show\" role=\"tooltip\"\r\n    :class=\"['tooltip',placement]\"\r\n    :transition=\"effect\"\r\n  >\r\n    <div class=\"tooltip-arrow\"></div>\r\n    <div class=\"tooltip-inner\">\r\n      <slot name=\"content\">{{{content}}}</slot>\r\n   </div>\r\n  </div>";
	
	/***/ },
	/* 223 */
	/***/ function(module, exports, __webpack_require__) {
	
		__webpack_require__(224)
		module.exports = __webpack_require__(226)
		
		if (module.exports.__esModule) module.exports = module.exports.default
		;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(227)
		if (false) {
		(function () {
		var hotAPI = require("vue-hot-reload-api")
		hotAPI.install(require("vue"))
		if (!hotAPI.compatible) return
		var id = "-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue"
		hotAPI.createRecord(id, module.exports)
		module.hot.accept(["-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue","-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue"], function () {
		var newOptions = require("-!babel!./../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Typeahead.vue")
		if (newOptions && newOptions.__esModule) newOptions = newOptions.default
		var newTemplate = require("-!vue-html-loader!./../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Typeahead.vue")
		hotAPI.update(id, newOptions, newTemplate)
		})
		})()
		}
	
	/***/ },
	/* 224 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(225);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(105)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5b5f5e94&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5b5f5e94&file=Typeahead.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Typeahead.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 225 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(104)();
		// imports
		
		
		// module
		exports.push([module.id, ".dropdown-menu > li > a {\r\n  cursor: pointer;\r\n}", ""]);
		
		// exports
	
	
	/***/ },
	/* 226 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _utils = __webpack_require__(96);
		
		var Vue = window.Vue; // <template>
		
		//   <div style="position: relative"
		
		//     v-bind:class="{'open':showDropdown}"
		
		//   >
		
		//     <input type="text" class="form-control"
		
		//       :placeholder="placeholder"
		
		//       autocomplete="off"
		
		//       v-model="value"
		
		//       @input="update"
		
		//       @keydown.up="up"
		
		//       @keydown.down="down"
		
		//       @keydown.enter= "hit"
		
		//       @keydown.esc="reset"
		
		//       @blur="showDropdown = false"
		
		//     />
		
		//     <ul class="dropdown-menu" v-el:dropdown>
		
		//       <li v-for="item in items" v-bind:class="{'active': isActive($index)}">
		
		//         <a @mousedown.prevent="hit" @mousemove="setActive($index)">
		
		//           <partial :name="templateName"></partial>
		
		//         </a>
		
		//       </li>
		
		//     </ul>
		
		//   </div>
		
		// </template>
		
		
		// <script>
		exports.default = {
		  created: function created() {
		    this.items = this.primitiveData;
		  },
		
		  partials: {
		    default: '<span v-html="item | highlight query"></span>'
		  },
		  props: {
		    value: {
		      twoWay: true,
		      type: String,
		      default: ''
		    },
		    data: {
		      type: Array
		    },
		    limit: {
		      type: Number,
		      default: 8
		    },
		    async: {
		      type: String
		    },
		    template: {
		      type: String
		    },
		    templateName: {
		      type: String,
		      default: 'default'
		    },
		    key: {
		      type: String,
		      default: null
		    },
		    matchCase: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    matchStart: {
		      type: Boolean,
		      coerce: _utils.coerce.boolean,
		      default: false
		    },
		    onHit: {
		      type: Function,
		      default: function _default(items) {
		        this.reset();
		        this.value = items;
		      }
		    },
		    placeholder: {
		      type: String
		    }
		  },
		  data: function data() {
		    return {
		      showDropdown: false,
		      noResults: true,
		      current: 0,
		      items: []
		    };
		  },
		
		  computed: {
		    primitiveData: function primitiveData() {
		      var _this = this;
		
		      if (this.data) {
		        return this.data.filter(function (value) {
		          value = _this.matchCase ? value : value.toLowerCase();
		          var query = _this.matchCase ? _this.value : _this.value.toLowerCase();
		          return _this.matchStart ? value.indexOf(query) === 0 : value.indexOf(query) !== -1;
		        }).slice(0, this.limit);
		      }
		    }
		  },
		  ready: function ready() {
		    // register a partial:
		    if (this.templateName && this.templateName !== 'default') {
		      Vue.partial(this.templateName, this.template);
		    }
		  },
		
		  methods: {
		    update: function update() {
		      var _this2 = this;
		
		      if (!this.value) {
		        this.reset();
		        return false;
		      }
		      if (this.data) {
		        this.items = this.primitiveData;
		        this.showDropdown = this.items.length > 0;
		      }
		      if (this.async) {
		        (0, _utils.callAjax)(this.async + this.value, function (data) {
		          _this2.items = (_this2.key ? data[_this2.key] : data).slice(0, _this2.limit);
		          _this2.showDropdown = _this2.items.length > 0;
		        });
		      }
		    },
		    reset: function reset() {
		      this.items = [];
		      this.value = '';
		      this.loading = false;
		      this.showDropdown = false;
		    },
		    setActive: function setActive(index) {
		      this.current = index;
		    },
		    isActive: function isActive(index) {
		      return this.current === index;
		    },
		    hit: function hit(e) {
		      e.preventDefault();
		      this.onHit(this.items[this.current], this);
		    },
		    up: function up() {
		      if (this.current > 0) this.current--;
		    },
		    down: function down() {
		      if (this.current < this.items.length - 1) this.current++;
		    }
		  },
		  filters: {
		    highlight: function highlight(value, phrase) {
		      return value.replace(new RegExp('(' + phrase + ')', 'gi'), '<strong>$1</strong>');
		    }
		  }
		};
		// </script>
		
		
		// <style>
		
		// .dropdown-menu > li > a {
		
		//   cursor: pointer;
		
		// }
		
		// </style>
	
	/***/ },
	/* 227 */
	/***/ function(module, exports) {
	
		module.exports = "<div style=\"position: relative\"\r\n    v-bind:class=\"{'open':showDropdown}\"\r\n  >\r\n    <input type=\"text\" class=\"form-control\"\r\n      :placeholder=\"placeholder\"\r\n      autocomplete=\"off\"\r\n      v-model=\"value\"\r\n      @input=\"update\"\r\n      @keydown.up=\"up\"\r\n      @keydown.down=\"down\"\r\n      @keydown.enter= \"hit\"\r\n      @keydown.esc=\"reset\"\r\n      @blur=\"showDropdown = false\"\r\n    />\r\n    <ul class=\"dropdown-menu\" v-el:dropdown>\r\n      <li v-for=\"item in items\" v-bind:class=\"{'active': isActive($index)}\">\r\n        <a @mousedown.prevent=\"hit\" @mousemove=\"setActive($index)\">\r\n          <partial :name=\"templateName\"></partial>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>";
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=vue-strap.js.map

/***/ },
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 110 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(113)
	__vue_script__ = __webpack_require__(115)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\today\\today.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(126)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./today.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(114);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(109)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./today.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(104)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy90b2RheS90b2RheS52dWUifQ== */", ""]);
	
	// exports


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _task = __webpack_require__(116);
	
	var _task2 = _interopRequireDefault(_task);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            filter: {
	                title: "今天",
	                showContent: {
	                    today: true,
	                    complete: true,
	                    addContent: true
	                }
	            }
	        };
	    },
	
	    components: {
	        "task-list": _task2.default
	    }
	};
	// </script>
	
	/* generated by vue-loader */
	// <template>
	//     <task-list :filter="filter"></task-list>
	// </template>
	// <style>
	// </style>
	// <script>
	//    import html from "./today.html"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(117)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\task\\task.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./task.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _bootstrapDatetimepickerMin = __webpack_require__(118);
	
	var _bootstrapDatetimepickerMin2 = _interopRequireDefault(_bootstrapDatetimepickerMin);
	
	var _bootstrapDatetimepickerZhCN = __webpack_require__(119);
	
	var _bootstrapDatetimepickerZhCN2 = _interopRequireDefault(_bootstrapDatetimepickerZhCN);
	
	var _bootstrapDatetimepicker = __webpack_require__(120);
	
	var _bootstrapDatetimepicker2 = _interopRequireDefault(_bootstrapDatetimepicker);
	
	var _task = __webpack_require__(122);
	
	var _task2 = _interopRequireDefault(_task);
	
	var _dynamicClock = __webpack_require__(123);
	
	var _dynamicClock2 = _interopRequireDefault(_dynamicClock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    template: _task2.default,
	    props: ['filter'],
	    components: {
	        'clock': _dynamicClock2.default
	    },
	    data: function data() {
	        var addDate = new Date();
	        return {
	            format: "yyyy/dd/MM/",
	            taskMsg: {
	                addMsg: '',
	                addDate: addDate,
	                todayList: {
	                    title: "今天",
	                    data: [{
	                        item: 'testtte',
	                        tag: 'td'
	                    }, {
	                        item: 'testtte',
	                        tag: 'td'
	                    }]
	                },
	                weekList: {
	                    title: "最近一周",
	                    data: [{
	                        item: 'tes3234ttte',
	                        tag: 'week'
	                    }, {
	                        item: '23',
	                        tag: 'week'
	                    }]
	                },
	                monthList: {
	                    title: "最近一月",
	                    data: [{
	                        item: 'tes3234ttte',
	                        tag: 'month'
	                    }, {
	                        item: '23',
	                        tag: 'month'
	                    }]
	                },
	                highPriorList: {
	                    title: "高优先级",
	                    data: [{
	                        item: "test",
	                        tag: 'hp'
	                    }, {
	                        item: "test2",
	                        tag: 'hp'
	                    }]
	                },
	                nonPriorList: {
	                    title: "无优先级",
	                    data: [{
	                        item: "test",
	                        tag: 'np'
	                    }, {
	                        item: "test2",
	                        tag: 'np'
	                    }]
	                },
	                completeList: {
	                    title: "已完成",
	                    data: [{
	                        item: 'test'
	                    }, {
	                        item: 'test'
	                    }]
	                }
	            }
	        };
	    },
	
	    methods: {
	        addTask: function addTask(msg) {
	            if (msg.addMsg) {
	                var vm = this;
	                var disTime = new Date(msg.addDate).getTime() - new Date().getTime();
	                if (disTime > 0 && disTime < 1000 * 60 * 60 * 24) {
	                    vm.taskMsg.todayList.data.push({
	                        item: msg.addMsg,
	                        tag: 'td',
	                        date: new Date(msg.addDate)
	                    });
	                } else if (disTime > 1000 * 60 * 60 * 24 && disTime < 1000 * 60 * 60 * 24 * 7) {
	                    vm.taskMsg.weekList.data.push({
	                        item: msg.addMsg,
	                        tag: 'week',
	                        date: new Date(msg.addDate)
	                    });
	                } else {
	                    vm.taskMsg.nonPriorList.data.push({
	                        item: msg.addMsg,
	                        tag: 'np',
	                        date: new Date(msg.addDate)
	                    });
	                }
	                vm.taskMsg.addMsg = "";
	            }
	        },
	        achiveTask: function achiveTask(i, item, obj) {
	            var vm = this;
	            vm.taskMsg[obj].data.splice(i, 1);
	            vm.taskMsg.completeList.data.push(item);
	        },
	        unachiveTask: function unachiveTask(i, item) {
	            var vm = this;
	            var tag = item.tag;
	            switch (tag) {
	                case "td":
	                    tag = 'todayList';
	                    break;
	                case "week":
	                    tag = 'weekList';
	                    break;
	                case "month":
	                    tag = 'monthList';
	                    break;
	                case "hp":
	                    tag = 'highPriorList';
	                    break;
	                case "np":
	                    tag = 'nonPriorList';
	                    break;
	                default:
	                    tag = 'highPriorList';
	            }
	            vm.taskMsg.completeList.data.splice(i, 1);
	            vm.taskMsg[tag].data.push(item);
	        }
	    },
	    ready: function ready() {
	        var vm = this;
	        var option = {
	            format: 'yyyy-mm-dd hh:ii:ss',
	            language: 'zh-CN',
	            weekStart: 1,
	            todayBtn: 1,
	            autoclose: 1,
	            todayHighlight: 1,
	            startView: 2,
	            forceParse: 0,
	            showMeridian: 1
	
	        };
	        if ($('.datetimepicker').length > 0) {
	            $('.datetimepicker').remove();
	        }
	        $('.datepicker').datetimepicker(option).on('changeDate', function () {
	
	            vm.taskMsg.addDate = $('#datepicker').datetimepicker('getFormattedDate');
	        });
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof2 = __webpack_require__(4);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (a) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    if ((typeof exports === "undefined" ? "undefined" : (0, _typeof3.default)(exports)) === "object") {
	      a(require("jquery"));
	    } else {
	      a(jQuery);
	    }
	  }
	})(function (f, c) {
	  if (!("indexOf" in Array.prototype)) {
	    Array.prototype.indexOf = function (k, j) {
	      if (j === c) {
	        j = 0;
	      }if (j < 0) {
	        j += this.length;
	      }if (j < 0) {
	        j = 0;
	      }for (var l = this.length; j < l; j++) {
	        if (j in this && this[j] === k) {
	          return j;
	        }
	      }return -1;
	    };
	  }function e(l) {
	    var k = f(l);var j = k.add(k.parents());var m = false;j.each(function () {
	      if (f(this).css("position") === "fixed") {
	        m = true;return false;
	      }
	    });return m;
	  }function h() {
	    return new Date(Date.UTC.apply(Date, arguments));
	  }function d() {
	    var j = new Date();return h(j.getUTCFullYear(), j.getUTCMonth(), j.getUTCDate(), j.getUTCHours(), j.getUTCMinutes(), j.getUTCSeconds(), 0);
	  }var i = function i(l, k) {
	    var n = this;this.element = f(l);this.container = k.container || "body";this.language = k.language || this.element.data("date-language") || "en";this.language = this.language in a ? this.language : this.language.split("-")[0];this.language = this.language in a ? this.language : "en";this.isRTL = a[this.language].rtl || false;this.formatType = k.formatType || this.element.data("format-type") || "standard";this.format = g.parseFormat(k.format || this.element.data("date-format") || a[this.language].format || g.getDefaultFormat(this.formatType, "input"), this.formatType);this.isInline = false;this.isVisible = false;this.isInput = this.element.is("input");this.fontAwesome = k.fontAwesome || this.element.data("font-awesome") || false;this.bootcssVer = k.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2);this.component = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent() : false;this.componentReset = this.element.is(".date") ? this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent() : false;this.hasInput = this.component && this.element.find("input").length;if (this.component && this.component.length === 0) {
	      this.component = false;
	    }this.linkField = k.linkField || this.element.data("link-field") || false;this.linkFormat = g.parseFormat(k.linkFormat || this.element.data("link-format") || g.getDefaultFormat(this.formatType, "link"), this.formatType);this.minuteStep = k.minuteStep || this.element.data("minute-step") || 5;this.pickerPosition = k.pickerPosition || this.element.data("picker-position") || "bottom-right";this.showMeridian = k.showMeridian || this.element.data("show-meridian") || false;this.initialDate = k.initialDate || new Date();this.zIndex = k.zIndex || this.element.data("z-index") || c;this.title = typeof k.title === "undefined" ? false : k.title;this.defaultTimeZone = new Date().toString().split("(")[1].slice(0, -1);this.timezone = k.timezone || this.defaultTimeZone;this.icons = { leftArrow: this.fontAwesome ? "fa-arrow-left" : this.bootcssVer === 3 ? "glyphicon-arrow-left" : "icon-arrow-left", rightArrow: this.fontAwesome ? "fa-arrow-right" : this.bootcssVer === 3 ? "glyphicon-arrow-right" : "icon-arrow-right" };this.icontype = this.fontAwesome ? "fa" : "glyphicon";this._attachEvents();this.clickedOutside = function (o) {
	      if (f(o.target).closest(".datetimepicker").length === 0) {
	        n.hide();
	      }
	    };this.formatViewType = "datetime";if ("formatViewType" in k) {
	      this.formatViewType = k.formatViewType;
	    } else {
	      if ("formatViewType" in this.element.data()) {
	        this.formatViewType = this.element.data("formatViewType");
	      }
	    }this.minView = 0;if ("minView" in k) {
	      this.minView = k.minView;
	    } else {
	      if ("minView" in this.element.data()) {
	        this.minView = this.element.data("min-view");
	      }
	    }this.minView = g.convertViewMode(this.minView);this.maxView = g.modes.length - 1;if ("maxView" in k) {
	      this.maxView = k.maxView;
	    } else {
	      if ("maxView" in this.element.data()) {
	        this.maxView = this.element.data("max-view");
	      }
	    }this.maxView = g.convertViewMode(this.maxView);this.wheelViewModeNavigation = false;if ("wheelViewModeNavigation" in k) {
	      this.wheelViewModeNavigation = k.wheelViewModeNavigation;
	    } else {
	      if ("wheelViewModeNavigation" in this.element.data()) {
	        this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation");
	      }
	    }this.wheelViewModeNavigationInverseDirection = false;if ("wheelViewModeNavigationInverseDirection" in k) {
	      this.wheelViewModeNavigationInverseDirection = k.wheelViewModeNavigationInverseDirection;
	    } else {
	      if ("wheelViewModeNavigationInverseDirection" in this.element.data()) {
	        this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir");
	      }
	    }this.wheelViewModeNavigationDelay = 100;if ("wheelViewModeNavigationDelay" in k) {
	      this.wheelViewModeNavigationDelay = k.wheelViewModeNavigationDelay;
	    } else {
	      if ("wheelViewModeNavigationDelay" in this.element.data()) {
	        this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay");
	      }
	    }this.startViewMode = 2;if ("startView" in k) {
	      this.startViewMode = k.startView;
	    } else {
	      if ("startView" in this.element.data()) {
	        this.startViewMode = this.element.data("start-view");
	      }
	    }this.startViewMode = g.convertViewMode(this.startViewMode);this.viewMode = this.startViewMode;this.viewSelect = this.minView;if ("viewSelect" in k) {
	      this.viewSelect = k.viewSelect;
	    } else {
	      if ("viewSelect" in this.element.data()) {
	        this.viewSelect = this.element.data("view-select");
	      }
	    }this.viewSelect = g.convertViewMode(this.viewSelect);this.forceParse = true;if ("forceParse" in k) {
	      this.forceParse = k.forceParse;
	    } else {
	      if ("dateForceParse" in this.element.data()) {
	        this.forceParse = this.element.data("date-force-parse");
	      }
	    }var m = this.bootcssVer === 3 ? g.templateV3 : g.template;while (m.indexOf("{iconType}") !== -1) {
	      m = m.replace("{iconType}", this.icontype);
	    }while (m.indexOf("{leftArrow}") !== -1) {
	      m = m.replace("{leftArrow}", this.icons.leftArrow);
	    }while (m.indexOf("{rightArrow}") !== -1) {
	      m = m.replace("{rightArrow}", this.icons.rightArrow);
	    }this.picker = f(m).appendTo(this.isInline ? this.element : this.container).on({ click: f.proxy(this.click, this), mousedown: f.proxy(this.mousedown, this) });if (this.wheelViewModeNavigation) {
	      if (f.fn.mousewheel) {
	        this.picker.on({ mousewheel: f.proxy(this.mousewheel, this) });
	      } else {
	        console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option");
	      }
	    }if (this.isInline) {
	      this.picker.addClass("datetimepicker-inline");
	    } else {
	      this.picker.addClass("datetimepicker-dropdown-" + this.pickerPosition + " dropdown-menu");
	    }if (this.isRTL) {
	      this.picker.addClass("datetimepicker-rtl");var j = this.bootcssVer === 3 ? ".prev span, .next span" : ".prev i, .next i";this.picker.find(j).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow);
	    }f(document).on("mousedown", this.clickedOutside);this.autoclose = false;if ("autoclose" in k) {
	      this.autoclose = k.autoclose;
	    } else {
	      if ("dateAutoclose" in this.element.data()) {
	        this.autoclose = this.element.data("date-autoclose");
	      }
	    }this.keyboardNavigation = true;if ("keyboardNavigation" in k) {
	      this.keyboardNavigation = k.keyboardNavigation;
	    } else {
	      if ("dateKeyboardNavigation" in this.element.data()) {
	        this.keyboardNavigation = this.element.data("date-keyboard-navigation");
	      }
	    }this.todayBtn = k.todayBtn || this.element.data("date-today-btn") || false;this.clearBtn = k.clearBtn || this.element.data("date-clear-btn") || false;this.todayHighlight = k.todayHighlight || this.element.data("date-today-highlight") || false;this.weekStart = (k.weekStart || this.element.data("date-weekstart") || a[this.language].weekStart || 0) % 7;this.weekEnd = (this.weekStart + 6) % 7;this.startDate = -Infinity;this.endDate = Infinity;this.datesDisabled = [];this.daysOfWeekDisabled = [];this.setStartDate(k.startDate || this.element.data("date-startdate"));this.setEndDate(k.endDate || this.element.data("date-enddate"));this.setDatesDisabled(k.datesDisabled || this.element.data("date-dates-disabled"));this.setDaysOfWeekDisabled(k.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(k.minutesDisabled || this.element.data("date-minute-disabled"));this.setHoursDisabled(k.hoursDisabled || this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if (this.isInline) {
	      this.show();
	    }
	  };i.prototype = { constructor: i, _events: [], _attachEvents: function _attachEvents() {
	      this._detachEvents();if (this.isInput) {
	        this._events = [[this.element, { focus: f.proxy(this.show, this), keyup: f.proxy(this.update, this), keydown: f.proxy(this.keydown, this) }]];
	      } else {
	        if (this.component && this.hasInput) {
	          this._events = [[this.element.find("input"), { focus: f.proxy(this.show, this), keyup: f.proxy(this.update, this), keydown: f.proxy(this.keydown, this) }], [this.component, { click: f.proxy(this.show, this) }]];if (this.componentReset) {
	            this._events.push([this.componentReset, { click: f.proxy(this.reset, this) }]);
	          }
	        } else {
	          if (this.element.is("div")) {
	            this.isInline = true;
	          } else {
	            this._events = [[this.element, { click: f.proxy(this.show, this) }]];
	          }
	        }
	      }for (var j = 0, k, l; j < this._events.length; j++) {
	        k = this._events[j][0];l = this._events[j][1];k.on(l);
	      }
	    }, _detachEvents: function _detachEvents() {
	      for (var j = 0, k, l; j < this._events.length; j++) {
	        k = this._events[j][0];l = this._events[j][1];k.off(l);
	      }this._events = [];
	    }, show: function show(j) {
	      this.picker.show();this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();if (this.forceParse) {
	        this.update();
	      }this.place();f(window).on("resize", f.proxy(this.place, this));if (j) {
	        j.stopPropagation();j.preventDefault();
	      }this.isVisible = true;this.element.trigger({ type: "show", date: this.date });
	    }, hide: function hide(j) {
	      if (!this.isVisible) {
	        return;
	      }if (this.isInline) {
	        return;
	      }this.picker.hide();f(window).off("resize", this.place);this.viewMode = this.startViewMode;this.showMode();if (!this.isInput) {
	        f(document).off("mousedown", this.hide);
	      }if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val())) {
	        this.setValue();
	      }this.isVisible = false;this.element.trigger({ type: "hide", date: this.date });
	    }, remove: function remove() {
	      this._detachEvents();f(document).off("mousedown", this.clickedOutside);this.picker.remove();delete this.picker;delete this.element.data().datetimepicker;
	    }, getDate: function getDate() {
	      var j = this.getUTCDate();return new Date(j.getTime() + j.getTimezoneOffset() * 60000);
	    }, getUTCDate: function getUTCDate() {
	      return this.date;
	    }, getInitialDate: function getInitialDate() {
	      return this.initialDate;
	    }, setInitialDate: function setInitialDate(j) {
	      this.initialDate = j;
	    }, setDate: function setDate(j) {
	      this.setUTCDate(new Date(j.getTime() - j.getTimezoneOffset() * 60000));
	    }, setUTCDate: function setUTCDate(j) {
	      if (j >= this.startDate && j <= this.endDate) {
	        this.date = j;this.setValue();this.viewDate = this.date;this.fill();
	      } else {
	        this.element.trigger({ type: "outOfRange", date: j, startDate: this.startDate, endDate: this.endDate });
	      }
	    }, setFormat: function setFormat(k) {
	      this.format = g.parseFormat(k, this.formatType);var j;if (this.isInput) {
	        j = this.element;
	      } else {
	        if (this.component) {
	          j = this.element.find("input");
	        }
	      }if (j && j.val()) {
	        this.setValue();
	      }
	    }, setValue: function setValue() {
	      var j = this.getFormattedDate();if (!this.isInput) {
	        if (this.component) {
	          this.element.find("input").val(j);
	        }this.element.data("date", j);
	      } else {
	        this.element.val(j);
	      }if (this.linkField) {
	        f("#" + this.linkField).val(this.getFormattedDate(this.linkFormat));
	      }
	    }, getFormattedDate: function getFormattedDate(j) {
	      if (j == c) {
	        j = this.format;
	      }return g.formatDate(this.date, j, this.language, this.formatType, this.timezone);
	    }, setStartDate: function setStartDate(j) {
	      this.startDate = j || -Infinity;if (this.startDate !== -Infinity) {
	        this.startDate = g.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone);
	      }this.update();this.updateNavArrows();
	    }, setEndDate: function setEndDate(j) {
	      this.endDate = j || Infinity;if (this.endDate !== Infinity) {
	        this.endDate = g.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone);
	      }this.update();this.updateNavArrows();
	    }, setDatesDisabled: function setDatesDisabled(j) {
	      this.datesDisabled = j || [];if (!f.isArray(this.datesDisabled)) {
	        this.datesDisabled = this.datesDisabled.split(/,\s*/);
	      }this.datesDisabled = f.map(this.datesDisabled, function (k) {
	        return g.parseDate(k, this.format, this.language, this.formatType, this.timezone).toDateString();
	      });this.update();this.updateNavArrows();
	    }, setTitle: function setTitle(j, k) {
	      return this.picker.find(j).find("th:eq(1)").text(this.title === false ? k : this.title);
	    }, setDaysOfWeekDisabled: function setDaysOfWeekDisabled(j) {
	      this.daysOfWeekDisabled = j || [];if (!f.isArray(this.daysOfWeekDisabled)) {
	        this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
	      }this.daysOfWeekDisabled = f.map(this.daysOfWeekDisabled, function (k) {
	        return parseInt(k, 10);
	      });this.update();this.updateNavArrows();
	    }, setMinutesDisabled: function setMinutesDisabled(j) {
	      this.minutesDisabled = j || [];if (!f.isArray(this.minutesDisabled)) {
	        this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
	      }this.minutesDisabled = f.map(this.minutesDisabled, function (k) {
	        return parseInt(k, 10);
	      });this.update();this.updateNavArrows();
	    }, setHoursDisabled: function setHoursDisabled(j) {
	      this.hoursDisabled = j || [];if (!f.isArray(this.hoursDisabled)) {
	        this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
	      }this.hoursDisabled = f.map(this.hoursDisabled, function (k) {
	        return parseInt(k, 10);
	      });this.update();this.updateNavArrows();
	    }, place: function place() {
	      if (this.isInline) {
	        return;
	      }if (!this.zIndex) {
	        var k = 0;f("div").each(function () {
	          var p = parseInt(f(this).css("zIndex"), 10);if (p > k) {
	            k = p;
	          }
	        });this.zIndex = k + 10;
	      }var o, n, m, l;if (this.container instanceof f) {
	        l = this.container.offset();
	      } else {
	        l = f(this.container).offset();
	      }if (this.component) {
	        o = this.component.offset();m = o.left;if (this.pickerPosition == "bottom-left" || this.pickerPosition == "top-left") {
	          m += this.component.outerWidth() - this.picker.outerWidth();
	        }
	      } else {
	        o = this.element.offset();m = o.left;if (this.pickerPosition == "bottom-left" || this.pickerPosition == "top-left") {
	          m += this.element.outerWidth() - this.picker.outerWidth();
	        }
	      }var j = document.body.clientWidth || window.innerWidth;if (m + 220 > j) {
	        m = j - 220;
	      }if (this.pickerPosition == "top-left" || this.pickerPosition == "top-right") {
	        n = o.top - this.picker.outerHeight();
	      } else {
	        n = o.top + this.height;
	      }n = n - l.top;m = m - l.left;this.picker.css({ top: n, left: m, zIndex: this.zIndex });
	    }, update: function update() {
	      var j,
	          k = false;if (arguments && arguments.length && (typeof arguments[0] === "string" || arguments[0] instanceof Date)) {
	        j = arguments[0];k = true;
	      } else {
	        j = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate;if (typeof j == "string" || j instanceof String) {
	          j = j.replace(/^\s+|\s+$/g, "");
	        }
	      }if (!j) {
	        j = new Date();k = false;
	      }this.date = g.parseDate(j, this.format, this.language, this.formatType, this.timezone);if (k) {
	        this.setValue();
	      }if (this.date < this.startDate) {
	        this.viewDate = new Date(this.startDate);
	      } else {
	        if (this.date > this.endDate) {
	          this.viewDate = new Date(this.endDate);
	        } else {
	          this.viewDate = new Date(this.date);
	        }
	      }this.fill();
	    }, fillDow: function fillDow() {
	      var j = this.weekStart,
	          k = "<tr>";while (j < this.weekStart + 7) {
	        k += '<th class="dow">' + a[this.language].daysMin[j++ % 7] + "</th>";
	      }k += "</tr>";this.picker.find(".datetimepicker-days thead").append(k);
	    }, fillMonths: function fillMonths() {
	      var k = "",
	          j = 0;while (j < 12) {
	        k += '<span class="month">' + a[this.language].monthsShort[j++] + "</span>";
	      }this.picker.find(".datetimepicker-months td").html(k);
	    }, fill: function fill() {
	      if (this.date == null || this.viewDate == null) {
	        return;
	      }var H = new Date(this.viewDate),
	          u = H.getUTCFullYear(),
	          I = H.getUTCMonth(),
	          n = H.getUTCDate(),
	          D = H.getUTCHours(),
	          y = H.getUTCMinutes(),
	          z = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
	          E = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
	          q = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
	          A = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
	          r = new h(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
	          G = new Date();this.setTitle(".datetimepicker-days", a[this.language].months[I] + " " + u);if (this.formatViewType == "time") {
	        var k = this.getFormattedDate();this.setTitle(".datetimepicker-hours", k);this.setTitle(".datetimepicker-minutes", k);
	      } else {
	        this.setTitle(".datetimepicker-hours", n + " " + a[this.language].months[I] + " " + u);this.setTitle(".datetimepicker-minutes", n + " " + a[this.language].months[I] + " " + u);
	      }this.picker.find("tfoot th.today").text(a[this.language].today || a.en.today).toggle(this.todayBtn !== false);this.picker.find("tfoot th.clear").text(a[this.language].clear || a.en.clear).toggle(this.clearBtn !== false);this.updateNavArrows();this.fillMonths();var K = h(u, I - 1, 28, 0, 0, 0, 0),
	          C = g.getDaysInMonth(K.getUTCFullYear(), K.getUTCMonth());K.setUTCDate(C);K.setUTCDate(C - (K.getUTCDay() - this.weekStart + 7) % 7);var j = new Date(K);j.setUTCDate(j.getUTCDate() + 42);j = j.valueOf();var s = [];var v;while (K.valueOf() < j) {
	        if (K.getUTCDay() == this.weekStart) {
	          s.push("<tr>");
	        }v = "";if (K.getUTCFullYear() < u || K.getUTCFullYear() == u && K.getUTCMonth() < I) {
	          v += " old";
	        } else {
	          if (K.getUTCFullYear() > u || K.getUTCFullYear() == u && K.getUTCMonth() > I) {
	            v += " new";
	          }
	        }if (this.todayHighlight && K.getUTCFullYear() == G.getFullYear() && K.getUTCMonth() == G.getMonth() && K.getUTCDate() == G.getDate()) {
	          v += " today";
	        }if (K.valueOf() == r) {
	          v += " active";
	        }if (K.valueOf() + 86400000 <= this.startDate || K.valueOf() > this.endDate || f.inArray(K.getUTCDay(), this.daysOfWeekDisabled) !== -1 || f.inArray(K.toDateString(), this.datesDisabled) !== -1) {
	          v += " disabled";
	        }s.push('<td class="day' + v + '">' + K.getUTCDate() + "</td>");if (K.getUTCDay() == this.weekEnd) {
	          s.push("</tr>");
	        }K.setUTCDate(K.getUTCDate() + 1);
	      }this.picker.find(".datetimepicker-days tbody").empty().append(s.join(""));s = [];var w = "",
	          F = "",
	          t = "";var l = this.hoursDisabled || [];for (var B = 0; B < 24; B++) {
	        if (l.indexOf(B) !== -1) {
	          continue;
	        }var x = h(u, I, n, B);v = "";if (x.valueOf() + 3600000 <= this.startDate || x.valueOf() > this.endDate) {
	          v += " disabled";
	        } else {
	          if (D == B) {
	            v += " active";
	          }
	        }if (this.showMeridian && a[this.language].meridiem.length == 2) {
	          F = B < 12 ? a[this.language].meridiem[0] : a[this.language].meridiem[1];if (F != t) {
	            if (t != "") {
	              s.push("</fieldset>");
	            }s.push('<fieldset class="hour"><legend>' + F.toUpperCase() + "</legend>");
	          }t = F;w = B % 12 ? B % 12 : 12;s.push('<span class="hour' + v + " hour_" + (B < 12 ? "am" : "pm") + '">' + w + "</span>");if (B == 23) {
	            s.push("</fieldset>");
	          }
	        } else {
	          w = B + ":00";s.push('<span class="hour' + v + '">' + w + "</span>");
	        }
	      }this.picker.find(".datetimepicker-hours td").html(s.join(""));s = [];w = "", F = "", t = "";var m = this.minutesDisabled || [];for (var B = 0; B < 60; B += this.minuteStep) {
	        if (m.indexOf(B) !== -1) {
	          continue;
	        }var x = h(u, I, n, D, B, 0);v = "";if (x.valueOf() < this.startDate || x.valueOf() > this.endDate) {
	          v += " disabled";
	        } else {
	          if (Math.floor(y / this.minuteStep) == Math.floor(B / this.minuteStep)) {
	            v += " active";
	          }
	        }if (this.showMeridian && a[this.language].meridiem.length == 2) {
	          F = D < 12 ? a[this.language].meridiem[0] : a[this.language].meridiem[1];if (F != t) {
	            if (t != "") {
	              s.push("</fieldset>");
	            }s.push('<fieldset class="minute"><legend>' + F.toUpperCase() + "</legend>");
	          }t = F;w = D % 12 ? D % 12 : 12;s.push('<span class="minute' + v + '">' + w + ":" + (B < 10 ? "0" + B : B) + "</span>");if (B == 59) {
	            s.push("</fieldset>");
	          }
	        } else {
	          w = B + ":00";s.push('<span class="minute' + v + '">' + D + ":" + (B < 10 ? "0" + B : B) + "</span>");
	        }
	      }this.picker.find(".datetimepicker-minutes td").html(s.join(""));var L = this.date.getUTCFullYear();var p = this.setTitle(".datetimepicker-months", u).end().find("span").removeClass("active");if (L == u) {
	        var o = p.length - 12;p.eq(this.date.getUTCMonth() + o).addClass("active");
	      }if (u < z || u > q) {
	        p.addClass("disabled");
	      }if (u == z) {
	        p.slice(0, E).addClass("disabled");
	      }if (u == q) {
	        p.slice(A).addClass("disabled");
	      }s = "";u = parseInt(u / 10, 10) * 10;var J = this.setTitle(".datetimepicker-years", u + "-" + (u + 9)).end().find("td");u -= 1;for (var B = -1; B < 11; B++) {
	        s += '<span class="year' + (B == -1 || B == 10 ? " old" : "") + (L == u ? " active" : "") + (u < z || u > q ? " disabled" : "") + '">' + u + "</span>";u += 1;
	      }J.html(s);this.place();
	    }, updateNavArrows: function updateNavArrows() {
	      var n = new Date(this.viewDate),
	          l = n.getUTCFullYear(),
	          m = n.getUTCMonth(),
	          k = n.getUTCDate(),
	          j = n.getUTCHours();switch (this.viewMode) {case 0:
	          if (this.startDate !== -Infinity && l <= this.startDate.getUTCFullYear() && m <= this.startDate.getUTCMonth() && k <= this.startDate.getUTCDate() && j <= this.startDate.getUTCHours()) {
	            this.picker.find(".prev").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".prev").css({ visibility: "visible" });
	          }if (this.endDate !== Infinity && l >= this.endDate.getUTCFullYear() && m >= this.endDate.getUTCMonth() && k >= this.endDate.getUTCDate() && j >= this.endDate.getUTCHours()) {
	            this.picker.find(".next").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".next").css({ visibility: "visible" });
	          }break;case 1:
	          if (this.startDate !== -Infinity && l <= this.startDate.getUTCFullYear() && m <= this.startDate.getUTCMonth() && k <= this.startDate.getUTCDate()) {
	            this.picker.find(".prev").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".prev").css({ visibility: "visible" });
	          }if (this.endDate !== Infinity && l >= this.endDate.getUTCFullYear() && m >= this.endDate.getUTCMonth() && k >= this.endDate.getUTCDate()) {
	            this.picker.find(".next").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".next").css({ visibility: "visible" });
	          }break;case 2:
	          if (this.startDate !== -Infinity && l <= this.startDate.getUTCFullYear() && m <= this.startDate.getUTCMonth()) {
	            this.picker.find(".prev").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".prev").css({ visibility: "visible" });
	          }if (this.endDate !== Infinity && l >= this.endDate.getUTCFullYear() && m >= this.endDate.getUTCMonth()) {
	            this.picker.find(".next").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".next").css({ visibility: "visible" });
	          }break;case 3:case 4:
	          if (this.startDate !== -Infinity && l <= this.startDate.getUTCFullYear()) {
	            this.picker.find(".prev").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".prev").css({ visibility: "visible" });
	          }if (this.endDate !== Infinity && l >= this.endDate.getUTCFullYear()) {
	            this.picker.find(".next").css({ visibility: "hidden" });
	          } else {
	            this.picker.find(".next").css({ visibility: "visible" });
	          }break;}
	    }, mousewheel: function mousewheel(k) {
	      k.preventDefault();k.stopPropagation();if (this.wheelPause) {
	        return;
	      }this.wheelPause = true;var j = k.originalEvent;var m = j.wheelDelta;var l = m > 0 ? 1 : m === 0 ? 0 : -1;if (this.wheelViewModeNavigationInverseDirection) {
	        l = -l;
	      }this.showMode(l);setTimeout(f.proxy(function () {
	        this.wheelPause = false;
	      }, this), this.wheelViewModeNavigationDelay);
	    }, click: function click(n) {
	      n.stopPropagation();n.preventDefault();var o = f(n.target).closest("span, td, th, legend");if (o.is("." + this.icontype)) {
	        o = f(o).parent().closest("span, td, th, legend");
	      }if (o.length == 1) {
	        if (o.is(".disabled")) {
	          this.element.trigger({ type: "outOfRange", date: this.viewDate, startDate: this.startDate, endDate: this.endDate });return;
	        }switch (o[0].nodeName.toLowerCase()) {case "th":
	            switch (o[0].className) {case "switch":
	                this.showMode(1);break;case "prev":case "next":
	                var j = g.modes[this.viewMode].navStep * (o[0].className == "prev" ? -1 : 1);switch (this.viewMode) {case 0:
	                    this.viewDate = this.moveHour(this.viewDate, j);break;case 1:
	                    this.viewDate = this.moveDate(this.viewDate, j);break;case 2:
	                    this.viewDate = this.moveMonth(this.viewDate, j);break;case 3:case 4:
	                    this.viewDate = this.moveYear(this.viewDate, j);break;}this.fill();this.element.trigger({ type: o[0].className + ":" + this.convertViewModeText(this.viewMode), date: this.viewDate, startDate: this.startDate, endDate: this.endDate });break;case "clear":
	                this.reset();if (this.autoclose) {
	                  this.hide();
	                }break;case "today":
	                var k = new Date();k = h(k.getFullYear(), k.getMonth(), k.getDate(), k.getHours(), k.getMinutes(), k.getSeconds(), 0);if (k < this.startDate) {
	                  k = this.startDate;
	                } else {
	                  if (k > this.endDate) {
	                    k = this.endDate;
	                  }
	                }this.viewMode = this.startViewMode;this.showMode(0);this._setDate(k);this.fill();if (this.autoclose) {
	                  this.hide();
	                }break;}break;case "span":
	            if (!o.is(".disabled")) {
	              var q = this.viewDate.getUTCFullYear(),
	                  p = this.viewDate.getUTCMonth(),
	                  r = this.viewDate.getUTCDate(),
	                  s = this.viewDate.getUTCHours(),
	                  l = this.viewDate.getUTCMinutes(),
	                  t = this.viewDate.getUTCSeconds();if (o.is(".month")) {
	                this.viewDate.setUTCDate(1);p = o.parent().find("span").index(o);r = this.viewDate.getUTCDate();this.viewDate.setUTCMonth(p);this.element.trigger({ type: "changeMonth", date: this.viewDate });if (this.viewSelect >= 3) {
	                  this._setDate(h(q, p, r, s, l, t, 0));
	                }
	              } else {
	                if (o.is(".year")) {
	                  this.viewDate.setUTCDate(1);q = parseInt(o.text(), 10) || 0;this.viewDate.setUTCFullYear(q);this.element.trigger({ type: "changeYear", date: this.viewDate });if (this.viewSelect >= 4) {
	                    this._setDate(h(q, p, r, s, l, t, 0));
	                  }
	                } else {
	                  if (o.is(".hour")) {
	                    s = parseInt(o.text(), 10) || 0;if (o.hasClass("hour_am") || o.hasClass("hour_pm")) {
	                      if (s == 12 && o.hasClass("hour_am")) {
	                        s = 0;
	                      } else {
	                        if (s != 12 && o.hasClass("hour_pm")) {
	                          s += 12;
	                        }
	                      }
	                    }this.viewDate.setUTCHours(s);this.element.trigger({ type: "changeHour", date: this.viewDate });if (this.viewSelect >= 1) {
	                      this._setDate(h(q, p, r, s, l, t, 0));
	                    }
	                  } else {
	                    if (o.is(".minute")) {
	                      l = parseInt(o.text().substr(o.text().indexOf(":") + 1), 10) || 0;this.viewDate.setUTCMinutes(l);this.element.trigger({ type: "changeMinute", date: this.viewDate });if (this.viewSelect >= 0) {
	                        this._setDate(h(q, p, r, s, l, t, 0));
	                      }
	                    }
	                  }
	                }
	              }if (this.viewMode != 0) {
	                var m = this.viewMode;this.showMode(-1);this.fill();if (m == this.viewMode && this.autoclose) {
	                  this.hide();
	                }
	              } else {
	                this.fill();if (this.autoclose) {
	                  this.hide();
	                }
	              }
	            }break;case "td":
	            if (o.is(".day") && !o.is(".disabled")) {
	              var r = parseInt(o.text(), 10) || 1;var q = this.viewDate.getUTCFullYear(),
	                  p = this.viewDate.getUTCMonth(),
	                  s = this.viewDate.getUTCHours(),
	                  l = this.viewDate.getUTCMinutes(),
	                  t = this.viewDate.getUTCSeconds();if (o.is(".old")) {
	                if (p === 0) {
	                  p = 11;q -= 1;
	                } else {
	                  p -= 1;
	                }
	              } else {
	                if (o.is(".new")) {
	                  if (p == 11) {
	                    p = 0;q += 1;
	                  } else {
	                    p += 1;
	                  }
	                }
	              }this.viewDate.setUTCFullYear(q);this.viewDate.setUTCMonth(p, r);this.element.trigger({ type: "changeDay", date: this.viewDate });if (this.viewSelect >= 2) {
	                this._setDate(h(q, p, r, s, l, t, 0));
	              }
	            }var m = this.viewMode;this.showMode(-1);this.fill();if (m == this.viewMode && this.autoclose) {
	              this.hide();
	            }break;}
	      }
	    }, _setDate: function _setDate(j, l) {
	      if (!l || l == "date") {
	        this.date = j;
	      }if (!l || l == "view") {
	        this.viewDate = j;
	      }this.fill();this.setValue();var k;if (this.isInput) {
	        k = this.element;
	      } else {
	        if (this.component) {
	          k = this.element.find("input");
	        }
	      }if (k) {
	        k.change();if (this.autoclose && (!l || l == "date")) {}
	      }this.element.trigger({ type: "changeDate", date: this.getDate() });if (j == null) {
	        this.date = this.viewDate;
	      }
	    }, moveMinute: function moveMinute(k, j) {
	      if (!j) {
	        return k;
	      }var l = new Date(k.valueOf());l.setUTCMinutes(l.getUTCMinutes() + j * this.minuteStep);return l;
	    }, moveHour: function moveHour(k, j) {
	      if (!j) {
	        return k;
	      }var l = new Date(k.valueOf());l.setUTCHours(l.getUTCHours() + j);return l;
	    }, moveDate: function moveDate(k, j) {
	      if (!j) {
	        return k;
	      }var l = new Date(k.valueOf());l.setUTCDate(l.getUTCDate() + j);return l;
	    }, moveMonth: function moveMonth(j, k) {
	      if (!k) {
	        return j;
	      }var n = new Date(j.valueOf()),
	          r = n.getUTCDate(),
	          o = n.getUTCMonth(),
	          m = Math.abs(k),
	          q,
	          p;k = k > 0 ? 1 : -1;if (m == 1) {
	        p = k == -1 ? function () {
	          return n.getUTCMonth() == o;
	        } : function () {
	          return n.getUTCMonth() != q;
	        };q = o + k;n.setUTCMonth(q);if (q < 0 || q > 11) {
	          q = (q + 12) % 12;
	        }
	      } else {
	        for (var l = 0; l < m; l++) {
	          n = this.moveMonth(n, k);
	        }q = n.getUTCMonth();n.setUTCDate(r);p = function p() {
	          return q != n.getUTCMonth();
	        };
	      }while (p()) {
	        n.setUTCDate(--r);n.setUTCMonth(q);
	      }return n;
	    }, moveYear: function moveYear(k, j) {
	      return this.moveMonth(k, j * 12);
	    }, dateWithinRange: function dateWithinRange(j) {
	      return j >= this.startDate && j <= this.endDate;
	    }, keydown: function keydown(n) {
	      if (this.picker.is(":not(:visible)")) {
	        if (n.keyCode == 27) {
	          this.show();
	        }return;
	      }var p = false,
	          k,
	          q,
	          o,
	          r,
	          j;switch (n.keyCode) {case 27:
	          this.hide();n.preventDefault();break;case 37:case 39:
	          if (!this.keyboardNavigation) {
	            break;
	          }k = n.keyCode == 37 ? -1 : 1;viewMode = this.viewMode;if (n.ctrlKey) {
	            viewMode += 2;
	          } else {
	            if (n.shiftKey) {
	              viewMode += 1;
	            }
	          }if (viewMode == 4) {
	            r = this.moveYear(this.date, k);j = this.moveYear(this.viewDate, k);
	          } else {
	            if (viewMode == 3) {
	              r = this.moveMonth(this.date, k);j = this.moveMonth(this.viewDate, k);
	            } else {
	              if (viewMode == 2) {
	                r = this.moveDate(this.date, k);j = this.moveDate(this.viewDate, k);
	              } else {
	                if (viewMode == 1) {
	                  r = this.moveHour(this.date, k);j = this.moveHour(this.viewDate, k);
	                } else {
	                  if (viewMode == 0) {
	                    r = this.moveMinute(this.date, k);j = this.moveMinute(this.viewDate, k);
	                  }
	                }
	              }
	            }
	          }if (this.dateWithinRange(r)) {
	            this.date = r;this.viewDate = j;this.setValue();this.update();n.preventDefault();p = true;
	          }break;case 38:case 40:
	          if (!this.keyboardNavigation) {
	            break;
	          }k = n.keyCode == 38 ? -1 : 1;viewMode = this.viewMode;if (n.ctrlKey) {
	            viewMode += 2;
	          } else {
	            if (n.shiftKey) {
	              viewMode += 1;
	            }
	          }if (viewMode == 4) {
	            r = this.moveYear(this.date, k);j = this.moveYear(this.viewDate, k);
	          } else {
	            if (viewMode == 3) {
	              r = this.moveMonth(this.date, k);j = this.moveMonth(this.viewDate, k);
	            } else {
	              if (viewMode == 2) {
	                r = this.moveDate(this.date, k * 7);j = this.moveDate(this.viewDate, k * 7);
	              } else {
	                if (viewMode == 1) {
	                  if (this.showMeridian) {
	                    r = this.moveHour(this.date, k * 6);j = this.moveHour(this.viewDate, k * 6);
	                  } else {
	                    r = this.moveHour(this.date, k * 4);j = this.moveHour(this.viewDate, k * 4);
	                  }
	                } else {
	                  if (viewMode == 0) {
	                    r = this.moveMinute(this.date, k * 4);j = this.moveMinute(this.viewDate, k * 4);
	                  }
	                }
	              }
	            }
	          }if (this.dateWithinRange(r)) {
	            this.date = r;this.viewDate = j;this.setValue();this.update();n.preventDefault();p = true;
	          }break;case 13:
	          if (this.viewMode != 0) {
	            var m = this.viewMode;this.showMode(-1);this.fill();if (m == this.viewMode && this.autoclose) {
	              this.hide();
	            }
	          } else {
	            this.fill();if (this.autoclose) {
	              this.hide();
	            }
	          }n.preventDefault();break;case 9:
	          this.hide();break;}if (p) {
	        var l;if (this.isInput) {
	          l = this.element;
	        } else {
	          if (this.component) {
	            l = this.element.find("input");
	          }
	        }if (l) {
	          l.change();
	        }this.element.trigger({ type: "changeDate", date: this.getDate() });
	      }
	    }, showMode: function showMode(j) {
	      if (j) {
	        var k = Math.max(0, Math.min(g.modes.length - 1, this.viewMode + j));if (k >= this.minView && k <= this.maxView) {
	          this.element.trigger({ type: "changeMode", date: this.viewDate, oldViewMode: this.viewMode, newViewMode: k });this.viewMode = k;
	        }
	      }this.picker.find(">div").hide().filter(".datetimepicker-" + g.modes[this.viewMode].clsName).css("display", "block");this.updateNavArrows();
	    }, reset: function reset(j) {
	      this._setDate(null, "date");
	    }, convertViewModeText: function convertViewModeText(j) {
	      switch (j) {case 4:
	          return "decade";case 3:
	          return "year";case 2:
	          return "month";case 1:
	          return "day";case 0:
	          return "hour";}
	    } };var b = f.fn.datetimepicker;f.fn.datetimepicker = function (l) {
	    var j = Array.apply(null, arguments);j.shift();var k;this.each(function () {
	      var o = f(this),
	          n = o.data("datetimepicker"),
	          m = (typeof l === "undefined" ? "undefined" : (0, _typeof3.default)(l)) == "object" && l;if (!n) {
	        o.data("datetimepicker", n = new i(this, f.extend({}, f.fn.datetimepicker.defaults, m)));
	      }if (typeof l == "string" && typeof n[l] == "function") {
	        k = n[l].apply(n, j);if (k !== c) {
	          return false;
	        }
	      }
	    });if (k !== c) {
	      return k;
	    } else {
	      return this;
	    }
	  };f.fn.datetimepicker.defaults = {};f.fn.datetimepicker.Constructor = i;var a = f.fn.datetimepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], meridiem: ["am", "pm"], suffix: ["st", "nd", "rd", "th"], today: "Today", clear: "Clear" } };var g = { modes: [{ clsName: "minutes", navFnc: "Hours", navStep: 1 }, { clsName: "hours", navFnc: "Date", navStep: 1 }, { clsName: "days", navFnc: "Month", navStep: 1 }, { clsName: "months", navFnc: "FullYear", navStep: 1 }, { clsName: "years", navFnc: "FullYear", navStep: 10 }], isLeapYear: function isLeapYear(j) {
	      return j % 4 === 0 && j % 100 !== 0 || j % 400 === 0;
	    }, getDaysInMonth: function getDaysInMonth(j, k) {
	      return [31, g.isLeapYear(j) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][k];
	    }, getDefaultFormat: function getDefaultFormat(j, k) {
	      if (j == "standard") {
	        if (k == "input") {
	          return "yyyy-mm-dd hh:ii";
	        } else {
	          return "yyyy-mm-dd hh:ii:ss";
	        }
	      } else {
	        if (j == "php") {
	          if (k == "input") {
	            return "Y-m-d H:i";
	          } else {
	            return "Y-m-d H:i:s";
	          }
	        } else {
	          throw new Error("Invalid format type.");
	        }
	      }
	    }, validParts: function validParts(j) {
	      if (j == "standard") {
	        return (/t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g
	        );
	      } else {
	        if (j == "php") {
	          return (/[dDjlNwzFmMnStyYaABgGhHis]/g
	          );
	        } else {
	          throw new Error("Invalid format type.");
	        }
	      }
	    }, nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g, parseFormat: function parseFormat(m, k) {
	      var j = m.replace(this.validParts(k), "\0").split("\0"),
	          l = m.match(this.validParts(k));if (!j || !j.length || !l || l.length == 0) {
	        throw new Error("Invalid date format.");
	      }return { separators: j, parts: l };
	    }, parseDate: function parseDate(A, y, v, j, r) {
	      if (A instanceof Date) {
	        var u = new Date(A.valueOf() - A.getTimezoneOffset() * 60000);u.setMilliseconds(0);return u;
	      }if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(A)) {
	        y = this.parseFormat("yyyy-mm-dd", j);
	      }if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(A)) {
	        y = this.parseFormat("yyyy-mm-dd hh:ii", j);
	      }if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(A)) {
	        y = this.parseFormat("yyyy-mm-dd hh:ii:ss", j);
	      }if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(A)) {
	        var l = /([-+]\d+)([dmwy])/,
	            q = A.match(/([-+]\d+)([dmwy])/g),
	            t,
	            p;A = new Date();for (var x = 0; x < q.length; x++) {
	          t = l.exec(q[x]);p = parseInt(t[1]);switch (t[2]) {case "d":
	              A.setUTCDate(A.getUTCDate() + p);break;case "m":
	              A = i.prototype.moveMonth.call(i.prototype, A, p);break;case "w":
	              A.setUTCDate(A.getUTCDate() + p * 7);break;case "y":
	              A = i.prototype.moveYear.call(i.prototype, A, p);break;}
	        }return h(A.getUTCFullYear(), A.getUTCMonth(), A.getUTCDate(), A.getUTCHours(), A.getUTCMinutes(), A.getUTCSeconds(), 0);
	      }var q = A && A.toString().match(this.nonpunctuation) || [],
	          A = new Date(0, 0, 0, 0, 0, 0, 0),
	          m = {},
	          z = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"],
	          o = { hh: function hh(C, s) {
	          return C.setUTCHours(s);
	        }, h: function h(C, s) {
	          return C.setUTCHours(s);
	        }, HH: function HH(C, s) {
	          return C.setUTCHours(s == 12 ? 0 : s);
	        }, H: function H(C, s) {
	          return C.setUTCHours(s == 12 ? 0 : s);
	        }, ii: function ii(C, s) {
	          return C.setUTCMinutes(s);
	        }, i: function i(C, s) {
	          return C.setUTCMinutes(s);
	        }, ss: function ss(C, s) {
	          return C.setUTCSeconds(s);
	        }, s: function s(C, _s) {
	          return C.setUTCSeconds(_s);
	        }, yyyy: function yyyy(C, s) {
	          return C.setUTCFullYear(s);
	        }, yy: function yy(C, s) {
	          return C.setUTCFullYear(2000 + s);
	        }, m: function m(C, s) {
	          s -= 1;while (s < 0) {
	            s += 12;
	          }s %= 12;C.setUTCMonth(s);while (C.getUTCMonth() != s) {
	            if (isNaN(C.getUTCMonth())) {
	              return C;
	            } else {
	              C.setUTCDate(C.getUTCDate() - 1);
	            }
	          }return C;
	        }, d: function d(C, s) {
	          return C.setUTCDate(s);
	        }, p: function p(C, s) {
	          return C.setUTCHours(s == 1 ? C.getUTCHours() + 12 : C.getUTCHours());
	        }, z: function z() {
	          return r;
	        } },
	          B,
	          k,
	          t;o.M = o.MM = o.mm = o.m;o.dd = o.d;o.P = o.p;o.Z = o.z;A = h(A.getFullYear(), A.getMonth(), A.getDate(), A.getHours(), A.getMinutes(), A.getSeconds());if (q.length == y.parts.length) {
	        for (var x = 0, w = y.parts.length; x < w; x++) {
	          B = parseInt(q[x], 10);t = y.parts[x];if (isNaN(B)) {
	            switch (t) {case "MM":
	                k = f(a[v].months).filter(function () {
	                  var s = this.slice(0, q[x].length),
	                      C = q[x].slice(0, s.length);return s == C;
	                });B = f.inArray(k[0], a[v].months) + 1;break;case "M":
	                k = f(a[v].monthsShort).filter(function () {
	                  var s = this.slice(0, q[x].length),
	                      C = q[x].slice(0, s.length);return s.toLowerCase() == C.toLowerCase();
	                });B = f.inArray(k[0], a[v].monthsShort) + 1;break;case "p":case "P":
	                B = f.inArray(q[x].toLowerCase(), a[v].meridiem);break;case "z":case "Z":
	                r;break;}
	          }m[t] = B;
	        }for (var x = 0, n; x < z.length; x++) {
	          n = z[x];if (n in m && !isNaN(m[n])) {
	            o[n](A, m[n]);
	          }
	        }
	      }return A;
	    }, formatDate: function formatDate(l, q, m, p, o) {
	      if (l == null) {
	        return "";
	      }var k;if (p == "standard") {
	        k = { t: l.getTime(), yy: l.getUTCFullYear().toString().substring(2), yyyy: l.getUTCFullYear(), m: l.getUTCMonth() + 1, M: a[m].monthsShort[l.getUTCMonth()], MM: a[m].months[l.getUTCMonth()], d: l.getUTCDate(), D: a[m].daysShort[l.getUTCDay()], DD: a[m].days[l.getUTCDay()], p: a[m].meridiem.length == 2 ? a[m].meridiem[l.getUTCHours() < 12 ? 0 : 1] : "", h: l.getUTCHours(), i: l.getUTCMinutes(), s: l.getUTCSeconds(), z: o };if (a[m].meridiem.length == 2) {
	          k.H = k.h % 12 == 0 ? 12 : k.h % 12;
	        } else {
	          k.H = k.h;
	        }k.HH = (k.H < 10 ? "0" : "") + k.H;k.P = k.p.toUpperCase();k.Z = k.z;k.hh = (k.h < 10 ? "0" : "") + k.h;k.ii = (k.i < 10 ? "0" : "") + k.i;k.ss = (k.s < 10 ? "0" : "") + k.s;k.dd = (k.d < 10 ? "0" : "") + k.d;k.mm = (k.m < 10 ? "0" : "") + k.m;
	      } else {
	        if (p == "php") {
	          k = { y: l.getUTCFullYear().toString().substring(2), Y: l.getUTCFullYear(), F: a[m].months[l.getUTCMonth()], M: a[m].monthsShort[l.getUTCMonth()], n: l.getUTCMonth() + 1, t: g.getDaysInMonth(l.getUTCFullYear(), l.getUTCMonth()), j: l.getUTCDate(), l: a[m].days[l.getUTCDay()], D: a[m].daysShort[l.getUTCDay()], w: l.getUTCDay(), N: l.getUTCDay() == 0 ? 7 : l.getUTCDay(), S: l.getUTCDate() % 10 <= a[m].suffix.length ? a[m].suffix[l.getUTCDate() % 10 - 1] : "", a: a[m].meridiem.length == 2 ? a[m].meridiem[l.getUTCHours() < 12 ? 0 : 1] : "", g: l.getUTCHours() % 12 == 0 ? 12 : l.getUTCHours() % 12, G: l.getUTCHours(), i: l.getUTCMinutes(), s: l.getUTCSeconds() };k.m = (k.n < 10 ? "0" : "") + k.n;k.d = (k.j < 10 ? "0" : "") + k.j;k.A = k.a.toString().toUpperCase();k.h = (k.g < 10 ? "0" : "") + k.g;k.H = (k.G < 10 ? "0" : "") + k.G;k.i = (k.i < 10 ? "0" : "") + k.i;k.s = (k.s < 10 ? "0" : "") + k.s;
	        } else {
	          throw new Error("Invalid format type.");
	        }
	      }var l = [],
	          r = f.extend([], q.separators);for (var n = 0, j = q.parts.length; n < j; n++) {
	        if (r.length) {
	          l.push(r.shift());
	        }l.push(k[q.parts[n]]);
	      }if (r.length) {
	        l.push(r.shift());
	      }return l.join("");
	    }, convertViewMode: function convertViewMode(j) {
	      switch (j) {case 4:case "decade":
	          j = 4;break;case 3:case "year":
	          j = 3;break;case 2:case "month":
	          j = 2;break;case 1:case "day":
	          j = 1;break;case 0:case "hour":
	          j = 0;break;}return j;
	    }, headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>', headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };g.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>";g.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + g.headTemplateV3 + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + g.headTemplateV3 + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + g.headTemplateV3 + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + g.headTemplateV3 + g.contTemplate + g.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + g.headTemplateV3 + g.contTemplate + g.footTemplate + "</table></div></div>";f.fn.datetimepicker.DPGlobal = g;f.fn.datetimepicker.noConflict = function () {
	    f.fn.datetimepicker = b;return this;
	  };f(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function (k) {
	    var j = f(this);if (j.data("datetimepicker")) {
	      return;
	    }k.preventDefault();j.datetimepicker("show");
	  });f(function () {
	    f('[data-provide="datetimepicker-inline"]').datetimepicker();
	  });
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
	
	/**
	 * Simplified Chinese translation for bootstrap-datetimepicker
	 * Yuan Cheung <advanimal@gmail.com>
	 */
	;(function ($) {
		$.fn.datetimepicker.dates['zh-CN'] = {
			days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
			daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
			daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
			months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
			today: "今天",
			suffix: [],
			meridiem: ["上午", "下午"]
		};
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 120 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 121 */,
/* 122 */
/***/ function(module, exports) {

	module.exports = "<div class=\"content-container\"  transition=\"show\">\r\n    <!--任务输入添加-->\r\n    <div class=\"task-wrap\" v-if=\"filter.showContent.addContent\">\r\n        <div>\r\n            <div class=\"title\">\r\n                {{ filter.title }}\r\n                <span>{{ taskMsg.addDate }}</span>\r\n            </div>\r\n            <div class=\"task-add\">\r\n                <input placeholder=\"输入任务\" v-model=\"taskMsg.addMsg\" @keyup.enter=\"addTask(taskMsg)\" >\r\n                <div class=\"add-task-tool\">\r\n                    <span class=\"glyphicon glyphicon-calendar datepicker\">\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--今天-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.todayList.data.length>0&&filter.showContent.today\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#todaylist\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.todayList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.todayList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"todaylist\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.todayList.data\">\r\n                        <input type=\"checkbox\" @change=\"achiveTask($index,elist,'todayList')\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--最近一周-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.weekList.data.length>0&&filter.showContent.week\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#weeklist\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.weekList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.weekList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"weeklist\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.weekList.data\">\r\n                        <input type=\"checkbox\" @change=\"achiveTask($index,elist,'weekList')\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--最近一月-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.monthList.data.length>0&&filter.showContent.month\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#monthlist\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.monthList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.monthList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"monthlist\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.monthList.data\">\r\n                        <input type=\"checkbox\" @change=\"achiveTask($index,elist,'monthList')\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--高优先级-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.highPriorList.data.length>0&&filter.showContent.highPriority\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#highPrior\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.highPriorList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.highPriorList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"highPrior\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.highPriorList.data\">\r\n                        <input type=\"checkbox\" @change=\"achiveTask($index,elist,'highPriorList')\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--无优先级-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.nonPriorList.data.length>0&&filter.showContent.nonPriority\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#nonPrior\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.nonPriorList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.nonPriorList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"nonPrior\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.nonPriorList.data\">\r\n                        <input type=\"checkbox\" @change=\"achiveTask($index,elist,'nonPriorList')\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--完成-->\r\n    <div class=\"task-list-container\" v-if=\"taskMsg.completeList.data.length>0&&filter.showContent.complete\">\r\n        <div>\r\n            <div  data-toggle=\"collapse\" data-target=\"#complete\" class=\"list-toggle\">\r\n                <i class=\"toggle-icon glyphicon glyphicon-chevron-right\"></i>\r\n                <div class=\"toggle-item clearfloat\">\r\n                    <div class=\"toggle-date\">{{taskMsg.completeList.title||' - '}}</div>\r\n                    <div class=\"toggle-acount\">{{taskMsg.completeList.data.length}}</div>\r\n                </div>\r\n            </div>\r\n            <div id=\"complete\" class=\"collapse\">\r\n                <ul class=\"every-list-container\">\r\n                    <li v-for=\"elist in taskMsg.completeList.data\">\r\n                        <input type=\"checkbox\" @change=\"unachiveTask($index,elist)\">\r\n                        <span>{{elist.item}}</span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<clock></clock>";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _dynamicClock = __webpack_require__(124);
	
	var _dynamicClock2 = _interopRequireDefault(_dynamicClock);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    template: _dynamicClock2.default,
	    components: {},
	    data: function data() {
	        return {};
	    },
	
	    methods: {},
	    created: function created() {},
	    ready: function ready() {
	        var vm = this;
	        var el = document.getElementById('clock');
	        var clock = el.getContext('2d');
	        vm.$set('clock', clock);
	        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(125)]; (function () {
	            alert('test');
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	    }
	}; /**
	    * Created by zhongxinzhi on 2016/9/23.
	    */

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <canvas id=\"clock\" width=\"256\" height=\"128\">\r\n    </canvas>\r\n</div>\r\n";

/***/ },
/* 125 */,
/* 126 */
/***/ function(module, exports) {

	module.exports = "\n<task-list :filter=\"filter\"></task-list>\n";

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(128)
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\all\\all.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(131)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./all.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(129);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(109)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./all.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./all.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(104)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbGwvYWxsLnZ1ZSJ9 */", ""]);
	
	// exports


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _task = __webpack_require__(116);
	
	var _task2 = _interopRequireDefault(_task);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            filter: {
	                title: "所有",
	                showContent: {
	                    today: false,
	                    complete: true,
	                    addContent: true,
	                    highPriority: true,
	                    nonPriority: true
	                }
	            }
	        };
	    },
	
	    components: {
	        "task-list": _task2.default
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <task-list :filter="filter"></task-list>
	// </template>
	// <style>
	// </style>
	// <script>
	//    import html from "./today.html"

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = "\n<task-list :filter=\"filter\"></task-list>\n";

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(133)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\menu\\menu.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _menu = __webpack_require__(134);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    template: _menu2.default,
	    components: {},
	
	    data: function data() {
	        return {
	            allList: [{
	                icon: 'glyphicon-envelope',
	                title: '所有',
	                count: 20,
	                link: '/all'
	            }, {
	                icon: 'glyphicon-th-list',
	                title: '今天',
	                count: 20,
	                link: '/today'
	            }, {
	                icon: 'glyphicon-th-large',
	                title: '最近七天',
	                count: 20,
	                link: '/week'
	            }, {
	                icon: 'glyphicon-th-large',
	                title: '最近一月',
	                count: 20,
	                link: '/month'
	            }],
	            menuToggle: {
	                toggleStatus: 'on',
	                toggleIcon: "glyphicon-chevron-left"
	            }
	        };
	    },
	
	
	    methods: {
	        toggle: function toggle() {
	            var vm = this;
	            if (vm.menuToggle.toggleStatus == "on") {
	                vm.menuToggle.toggleStatus = "off";
	                $('.main').animate({ left: "130px" }, 600, function () {
	                    vm.menuToggle.toggleIcon = "glyphicon-chevron-right";
	                    $('.menu-toggle').css('right', '133px');
	                });
	            } else {
	                vm.menuToggle.toggleStatus = "on";
	                $('.main').animate({ left: "260px" }, 600);
	                $('.menu-toggle').animate({ right: "2px" }, 600, function () {
	                    vm.menuToggle.toggleIcon = "glyphicon-chevron-left";
	                });
	            }
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */
	// /**
	//  * Created by zhongxinzhi on 2016/9/12.
	//  */
	// <script>
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"menu\">\r\n    <div :class=\"['menu-toggle',menuToggle.toggleStatus]\" @click=\"toggle\">\r\n        <span :class=\"['glyphicon',menuToggle.toggleIcon]\"></span>\r\n    </div>\r\n    <div class=\"user-info clearfloat\">\r\n        <div class=\"user-portrait\">\r\n            <img src=\"" + __webpack_require__(135) + "\">\r\n        </div>\r\n        <div class=\"user-name\"><a href=\"#\">zworld</a></div>\r\n        <div class=\"user-tool\">\r\n            <a href=\"#\"><span  class=\"glyphicon glyphicon-search\"></span></a>\r\n            <a href=\"#\"><span  class=\"glyphicon glyphicon-envelope\"></span></a>\r\n        </div>\r\n    </div>\r\n    <div class=\"item-list-container\">\r\n        <ul class='menu-list'>\r\n            <li class=\"list-item\" v-for=\"item in allList\" v-link=\"{path: item.link}\">\r\n                <div class=\"item-left\">\r\n                    <span  :class=\"['glyphicon',item.icon]\"></span>\r\n                    <span class=\"item-title\">{{item.title}}</span>\r\n                </div>\r\n                <div class=\"count-tag\">\r\n                    {{item.count}}\r\n                </div>\r\n            </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n";

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./images/portrait.jpg?69c38a97";

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(137)
	__vue_script__ = __webpack_require__(139)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\week\\week.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(140)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./week.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(109)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./week.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./week.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(104)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy93ZWVrL3dlZWsudnVlIn0= */", ""]);
	
	// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _task = __webpack_require__(116);
	
	var _task2 = _interopRequireDefault(_task);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            filter: {
	                title: "最近一周",
	                showContent: {
	                    complete: true,
	                    addContent: true,
	                    week: true
	                }
	            }
	        };
	    },
	
	    components: {
	        "task-list": _task2.default
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <task-list :filter="filter"></task-list>
	// </template>
	// <style>
	// </style>
	// <script>
	//    import html from "./today.html"

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "\n<task-list :filter=\"filter\"></task-list>\n";

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(142)
	__vue_script__ = __webpack_require__(144)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\month\\month.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./month.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(143);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(109)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./month.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./month.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(104)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9tb250aC9tb250aC52dWUifQ== */", ""]);
	
	// exports


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _task = __webpack_require__(116);
	
	var _task2 = _interopRequireDefault(_task);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            filter: {
	                title: "最近一月",
	                showContent: {
	                    complete: true,
	                    addContent: true,
	                    month: true
	                }
	            }
	        };
	    },
	
	    components: {
	        "task-list": _task2.default
	    }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//     <task-list :filter="filter"></task-list>
	// </template>
	// <style>
	// </style>
	// <script>
	//    import html from "./today.html"

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "\n<task-list :filter=\"filter\"></task-list>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map