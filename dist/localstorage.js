(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LocalStorage"] = factory();
	else
		root["LocalStorage"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(2);


let LocalStorage = {
    storage: window.localStorage,
    set(key = '', value = '', cover = false) {
        if (key && __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            // 不覆盖
            if(!cover) {
                if(this.get(key) != null && this.get(key) != false) {
                    console.error(`data ${key} already existed.\nif you want to cover the original data, use set(key, value, true)`);
                    return false;
                }
            }
            this.storage.setItem(key, JSON.stringify(value));
            let obj = {};
            obj.key = key;
            obj.val = this.get(key);
            return obj;
        }
        return false;
    },
    get(key = '') {
        if (key && __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            return __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].jsonParse(this.storage.getItem(key));
        }
        return false;
    },
    has(key = '') {
        if (key && __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            return this.get(key) != null;
        }
        return false;
    },
    remove(key = '') {
        if (key && __WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            this.storage.removeItem(key);
            return !this.get(key);
        }
        return false;
    },
    clear() {
        if (__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            this.storage.clear();
            return !this.storage.length;
        }
        return false;
    },
    getKeyList() {
        if (__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            let list = [];

            for (let i = 0; i < this.storage.length; i++) {
                list.push(this.storage.key(i));
            }

            return list;
        }
        return false;
    },
    getAll() {
        if (__WEBPACK_IMPORTED_MODULE_0__lib_util__["a" /* default */].support()) {
            let allKeys = this.getKeyList();
            let res = {};
            for (let k of allKeys) {
                res[k] = this.get(k);
            }

            return res;
        }
        return false;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (LocalStorage);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_localstorage__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_localstorage__["a" /* default */]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _ = {
    support() {
        if (!window.localStorage) {
            console.error('(〒︿〒) 该浏览器不支持localstorage');
            return false;
        }

        return true;
    },
    jsonParse(string) {
        let res = null;
        try {
            res = JSON.parse(string);
        } catch (e) {
            return null;
        }
        return res;
    },
    compareObject(x, y) {
        // If both x and y are null or undefined and exactly the same
        if (x === y) {
            return true;
        }

        // If they are not strictly equal, they both need to be Objects
        if (!(x instanceof Object) || !(y instanceof Object)) {
            return false;
        }

        //They must have the exact same prototype chain,the closest we can do is
        //test the constructor.
        if (x.constructor !== y.constructor) {
            return false;
        }

        for (let p in x) {
            //Inherited properties were tested using x.constructor === y.constructor
            if (x.hasOwnProperty(p)) {
                // Allows comparing x[ p ] and y[ p ] when set to undefined
                if (!y.hasOwnProperty(p)) {
                    return false;
                }

                // If they have the same strict value or identity then they are equal
                if (x[p] === y[p]) {
                    continue;
                }

                // Numbers, Strings, Functions, Booleans must be strictly equal
                if (typeof (x[p]) !== 'object') {
                    return false;
                }

                // Objects and Arrays must be tested recursively
                if (!Object.equals(x[p], y[p])) {
                    return false;
                }
            }
        }

        for (let p in y) {
            // allows x[ p ] to be set to undefined
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                return false;
            }
        }
        return true;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (_);

/***/ })
/******/ ]);
});