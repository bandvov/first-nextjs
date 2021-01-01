module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: external "@xstate/react"
var react_ = __webpack_require__("LrOz");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/mainContext.js
var mainContext = __webpack_require__("VnCb");

// EXTERNAL MODULE: external "xstate"
var external_xstate_ = __webpack_require__("w8Mv");

// CONCATENATED MODULE: ./machines/car-machine.js

const defaultFilter = {
  brand: '',
  color: '',
  minYear: '',
  maxYear: '',
  minPrice: '',
  maxPrice: '',
  searchText: ''
};
const carMachine = Object(external_xstate_["Machine"])({
  id: 'filter',
  initial: 'initial',
  context: {
    filter: defaultFilter,
    open: false,
    text: '',
    handler: () => {},
    push: () => {},
    id: '',
    loading: true,
    currentPage: 1
  },
  states: {
    initial: {
      on: {
        SHOW: {
          target: 'show',
          actions: ['showDialog']
        },
        ADD_BRAND: {
          target: 'initial',
          actions: ['addBrandToStore']
        },
        ADD_COLOR: {
          target: 'initial',
          actions: ['addColorToStore']
        },
        ADD_MINYEAR: {
          target: 'initial',
          actions: ['addMinYearToStore']
        },
        ADD_MAXYEAR: {
          target: 'initial',
          actions: ['addMaxYearToStore']
        },
        ADD_MINPRICE: {
          target: 'initial',
          actions: ['addMinPriceToStore']
        },
        ADD_MAXPRICE: {
          target: 'initial',
          actions: ['addMaxPriceToStore']
        },
        ADD_SEARCH_TEXT: {
          target: 'initial',
          actions: ['addSearchText']
        },
        CLEAR_FILTER: {
          target: 'initial',
          actions: ['clearFilter']
        },
        SET_FILTERS: {
          target: 'initial',
          actions: ['setAllFilters', 'setCurrentPage']
        },
        SET_LOADING: {
          target: 'initial',
          actions: ['setLoading']
        },
        SET_CURRENT_PAGE: {
          target: 'initial',
          actions: ['setCurrentPage']
        }
      }
    },
    show: {
      on: {
        DELETE: {
          target: 'initial',
          actions: ['runHandler', 'hideDialog', 'clearData', 'push']
        },
        CANCEL: {
          target: 'initial',
          actions: ['hideDialog', 'clearData']
        }
      }
    }
  }
}, {
  actions: {
    showDialog: (ctx, evt) => {
      ctx.text = evt.text;
      ctx.open = true;
      ctx.handler = evt.handler;
      ctx.push = evt.push;
    },
    hideDialog: ctx => {
      ctx.open = false;
    },
    runHandler: ctx => {
      ctx.handler();
    },
    clearData: ctx => {
      ctx.text = '';

      ctx.handler = () => {};
    },
    clearFilter: ctx => {
      ctx.filter = {
        brand: '',
        color: '',
        maxPrice: '',
        maxYear: '',
        minPrice: '',
        minYear: '',
        searchText: ''
      };
      ctx.currentPage = 1;
    },
    push: ctx => ctx.push(),
    addBrandToStore: (ctx, evt) => ctx.filter.brand = evt.brand,
    addColorToStore: (ctx, evt) => ctx.filter.color = evt.color,
    addYearToStore: (ctx, evt) => ctx.filter.year = evt.year,
    addMinYearToStore: (ctx, evt) => ctx.filter.minYear = evt.minYear,
    addMaxYearToStore: (ctx, evt) => ctx.filter.maxYear = evt.maxYear,
    addMinPriceToStore: (ctx, evt) => ctx.filter.minPrice = evt.minPrice,
    addMaxPriceToStore: (ctx, evt) => ctx.filter.maxPrice = evt.maxPrice,
    addSearchText: (ctx, evt) => ctx.filter.searchText = evt.searchText,
    setAllFilters: (ctx, evt) => {
      ctx.filter = evt.filter;
      ctx.currentPage = evt.currentPage;
    },
    setLoading: (ctx, evt) => ctx.loading = evt.loading,
    setCurrentPage: (ctx, evt) => ctx.currentPage = evt.currentPage
  }
});
// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const [state, send] = Object(react_["useMachine"])(carMachine);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (router.route === "/") {
      send({
        type: "CLEAR_FILTER"
      });
    }
  }, [router.route]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(mainContext["a" /* MainContext */].Provider, {
    value: {
      state,
      send
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "LrOz":
/***/ (function(module, exports) {

module.exports = require("@xstate/react");

/***/ }),

/***/ "VnCb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MainContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "w8Mv":
/***/ (function(module, exports) {

module.exports = require("xstate");

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });