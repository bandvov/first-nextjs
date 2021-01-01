module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "23GE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ MainLayout; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__("vRNQ");
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/mainContext.js
var mainContext = __webpack_require__("VnCb");

// CONCATENATED MODULE: ./components/dialog-window.js










const dialogTitle = "Car deleting";
function DialogWindow() {
  const {
    state,
    send
  } = Object(external_react_["useContext"])(mainContext["a" /* MainContext */]);

  const agreeHandler = () => send("DELETE");

  const disagreeHandler = () => send("CANCEL");

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog_default.a, {
      open: state.context.open,
      onClose: disagreeHandler,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogTitle_default.a, {
        id: "alert-dialog-title",
        children: dialogTitle
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContentText_default.a, {
          id: "alert-dialog-description",
          children: state.context.text
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
          type: "button",
          variant: "outlined",
          onClick: disagreeHandler,
          color: "primary",
          children: "no"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
          type: "button",
          variant: "contained",
          onClick: agreeHandler,
          color: "secondary",
          autoFocus: true,
          children: "yes"
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/InputBase"
var InputBase_ = __webpack_require__("ynsX");
var InputBase_default = /*#__PURE__*/__webpack_require__.n(InputBase_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./styles/header.module.css
var header_module = __webpack_require__("V0O9");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__("Qi1R");

// CONCATENATED MODULE: ./components/header.js












function Header() {
  const router = Object(router_["useRouter"])();
  const {
    state,
    send
  } = Object(external_react_["useContext"])(mainContext["a" /* MainContext */]);
  const {
    fetchData
  } = Object(utils["a" /* helper */])(state, send);

  const submitHandler = e => {
    e.preventDefault();
    fetchData();
  };

  const changeHandler = e => {
    send({
      type: 'ADD_SEARCH_TEXT',
      searchText: e.target.value
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: header_module_default.a.header,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        children: [' ', /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "CARS"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Paper_default.a, {
      style: {
        display: 'flex',
        justifyContent: 'stretch'
      },
      component: "form",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(InputBase_default.a, {
        "aria-label": "here you can search a car",
        type: "text",
        value: state.context.filter.searchText,
        onChange: changeHandler,
        id: "searchfield",
        variant: "outlined"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
        "aria-label": "search button",
        type: "submit",
        onClick: submitHandler,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search_default.a, {})
      })]
    }), router.route === '/car/add' ? '' : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/car/add",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button_default.a, {
        variant: "outlined",
        children: "Add a new car"
      })
    })]
  });
}
// CONCATENATED MODULE: ./components/main-layout.js







function MainLayout({
  children
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Cars"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Header, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Home_module_default.a.main,
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogWindow, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: Home_module_default.a.footer,
      children: "\xA9 2020 SoftServe"
    })]
  });
}

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PfUG");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "JnuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return brands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return prices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return carsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return years; });
const colors = ['White', 'Black', 'Red', 'Blue', 'Grey'];
const brands = ['Audi', 'BMW', 'Ford', 'Opel', 'Toyota', 'Volkswagen'];
const prices = [1000, 2000, 5000, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000];
const categories = ['Coupe', 'Convertible', 'Sedan', 'Hatchback', 'SUV', 'Wagon'];
const carsPerPage = 12;
const years = [2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "N61Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ getAllCars; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ getCarById; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ addCar; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ updateCar; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ deleteCar; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getFilteredCars; });

// UNUSED EXPORTS: getCarsId

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// CONCATENATED MODULE: ./utils/client.js


const client = new external_apollo_boost_default.a({
  uri: "http://localhost:3000/api/graphql",
  cache: new external_apollo_cache_inmemory_["InMemoryCache"]({
    addTypename: false
  })
});
``;
// CONCATENATED MODULE: ./operations/car-operations.js


const getAllCars = async (skip, limit) => {
  const res = await client.query({
    query: external_apollo_boost_["gql"]`
      query($skip: Int, $limit: Int) {
        getAllCars(skip: $skip, limit: $limit) {
          cars {
            _id
            brand
            model
            photo
            price
            year
            mileage
          }
          count
        }
      }
    `,
    variables: {
      skip,
      limit
    }
  });
  client.resetStore();
  return res.data.getAllCars;
};
const getCarsId = async () => {
  const res = await client.query({
    query: external_apollo_boost_["gql"]`
      query {
        getAllCars {
          cars {
            _id
          }
        }
      }
    `,
    fetchPolicy: 'no-cache'
  });
  client.resetStore();
  return res.data.getAllCars.cars;
};
const getCarById = async id => {
  const res = await client.query({
    query: external_apollo_boost_["gql"]`
      query($id: ID!) {
        getCarById(id: $id) {
          _id
          brand
          model
          category
          date
          price
          year
          mileage
          transmission
          externalColor
          photo
          engine
          colorSimpleName
          description
        }
      }
    `,
    variables: {
      id
    }
  });
  return res.data.getCarById;
};
const addCar = async car => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;
  const res = await client.mutate({
    mutation: external_apollo_boost_["gql"]`
      mutation($car: CarInput!) {
        addCar(car: $car) {
          _id
        }
      }
    `,
    variables: {
      car
    }
  });
  return res.data.addCar;
};
const updateCar = async ({
  id,
  car
}) => {
  car.price = +car.price;
  car.year = +car.year;
  car.mileage = +car.mileage;
  const res = await client.mutate({
    mutation: external_apollo_boost_["gql"]`
      mutation($id: ID!, $car: CarInput!) {
        updateCar(id: $id, car: $car) {
          _id
        }
      }
    `,
    variables: {
      id,
      car
    }
  });
  return res.data.updateCar;
};
const deleteCar = async id => {
  const res = await client.mutate({
    mutation: external_apollo_boost_["gql"]`
      mutation($id: ID!) {
        deleteCar(id: $id) {
          _id
        }
      }
    `,
    variables: {
      id
    }
  });
  return res.data.deleteCar;
};
const getFilteredCars = async (filter, skip, limit) => {
  const res = await client.query({
    query: external_apollo_boost_["gql"]`
      query($filter: FilterInput, $skip: Int, $limit: Int) {
        getFilteredCars(filter: $filter, skip: $skip, limit: $limit) {
          cars {
            _id
            brand
            model
            photo
            price
            year
            mileage
          }
          count
        }
      }
    `,
    variables: {
      filter,
      skip,
      limit
    }
  });
  return {
    cars: res.data.getFilteredCars.cars,
    count: res.data.getFilteredCars.count
  };
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PfUG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_main_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("23GE");
/* harmony import */ var _components_car_form_car_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("V4rH");
/* harmony import */ var _operations_car_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("N61Y");




function Edit({
  car
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_main_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_car_form_car_form__WEBPACK_IMPORTED_MODULE_2__[/* CarForm */ "a"], {
      edit: true,
      car: car
    })
  });
}
async function getServerSideProps(ctx) {
  const car = await Object(_operations_car_operations__WEBPACK_IMPORTED_MODULE_3__[/* getCarById */ "d"])(ctx.params.id);
  return {
    props: {
      car
    }
  };
}

/***/ }),

/***/ "Qi1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return helper; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const helper = (state = {}, send) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  const fetchData = () => {
    send({
      type: 'SET_LOADING',
      loading: true
    });
    const filter = {};

    if (state.context.filter.minYear) {
      filter.minYear = state.context.filter.minYear;
    }

    if (state.context.filter.maxYear) {
      filter.maxYear = state.context.filter.maxYear;
    }

    if (state.context.filter.minPrice) {
      filter.minPrice = state.context.filter.minPrice;
    }

    if (state.context.filter.maxPrice) {
      filter.maxPrice = state.context.filter.maxPrice;
    }

    if (state.context.filter.brand) {
      filter.brand = state.context.filter.brand;
    }

    if (state.context.filter.color) {
      filter.color = state.context.filter.color;
    }

    if (state.context.filter.searchText) {
      filter.searchText = state.context.filter.searchText;
    }

    if (state.context.currentPage) {
      filter.page = state.context.currentPage;
    }

    router.push({
      pathname: '/search',
      query: filter
    });
    window.scrollTo(0, 0);
  };

  const changeHandler = (e, filter) => {
    send({
      type: `ADD_${filter.toUpperCase()}`,
      [filter]: e.target.value
    });
    send({
      type: 'SET_CURRENT_PAGE',
      currentPage: 1
    });
    fetchData();
  };

  return {
    changeHandler,
    fetchData
  };
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "V0O9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__1-9k4"
};


/***/ }),

/***/ "V4rH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CarForm; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/car-form/car-form.styles.js
const {
  makeStyles
} = __webpack_require__("KKbo");

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    width: '60vw',
    margin: 'auto',
    height: '100%',
    '@media (max-width:1280px)': {
      width: '80vw'
    },
    '@media (max-width:768px)': {
      width: '100vw'
    }
  },
  image: props => ({
    alignSelf: 'stretch',
    background: `url(${props.photo}) no-repeat center`,
    backgroundSize: 'cover',
    '@media (max-width:960px)': {
      height: '25vw'
    },
    '@media (max-width:500px)': {
      height: '60vw'
    }
  }),
  inputMargin: {
    margin: 0,
    height: '70px'
  },
  inputError: {
    color: 'red'
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    '& button': {
      margin: '1rem'
    }
  }
}));
// CONCATENATED MODULE: ./configs/validation.js
const carValidationMessages = {
  MIN_LENGTH_MESSAGE: "Minimum 2 characters",
  MAX_LENGTH_MESSAGE: "Maximum 200 characters",
  VALIDATION_ERROR: "Field is required",
  PRICE_VALIDATION_ERROR: "Only digits"
};
// CONCATENATED MODULE: ./configs/regexpSchemas.js
const carRegExp = {
  onlyPositiveDigits: /^\d+$/
};
// EXTERNAL MODULE: ./configs/index.js
var configs = __webpack_require__("JnuR");

// EXTERNAL MODULE: ./context/mainContext.js
var mainContext = __webpack_require__("VnCb");

// EXTERNAL MODULE: ./operations/car-operations.js + 1 modules
var car_operations = __webpack_require__("N61Y");

// CONCATENATED MODULE: ./components/car-form/car-form.js

















const {
  MIN_LENGTH_MESSAGE,
  MAX_LENGTH_MESSAGE,
  VALIDATION_ERROR,
  PRICE_VALIDATION_ERROR
} = carValidationMessages;
function CarForm({
  edit = false,
  car = {}
}) {
  const classes = useStyles();
  const {
    send
  } = Object(external_react_["useContext"])(mainContext["a" /* MainContext */]);

  const addCarhandler = car => {
    send({
      type: 'SHOW',
      text: 'Are you sure you want to add the car?',
      handler: () => Object(car_operations["a" /* addCar */])(car),
      push: () => router_default.a.push('/')
    });
  };

  const updateCarhandler = data => {
    send({
      type: 'SHOW',
      text: 'Are you sure you want to update the car data?',
      handler: () => Object(car_operations["f" /* updateCar */])(data),
      push: () => router_default.a.push('/')
    });
  };

  const mappedColors = configs["d" /* colors */].map(color => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    children: color
  }, color));
  const mappedYears = configs["f" /* years */].map(year => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    children: year
  }, year));
  const mappedCategories = configs["c" /* categories */].map(category => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
    children: category
  }, category));
  const formSchema = external_yup_["object"]().shape({
    brand: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    model: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    year: external_yup_["string"]().matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR).required(VALIDATION_ERROR),
    engine: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    transmission: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    mileage: external_yup_["string"]().matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR).required(VALIDATION_ERROR),
    price: external_yup_["string"]().matches(carRegExp.onlyPositiveDigits, PRICE_VALIDATION_ERROR).required(VALIDATION_ERROR),
    photo: external_yup_["string"]().required(VALIDATION_ERROR),
    description: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(200, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    externalColor: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    colorSimpleName: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR),
    category: external_yup_["string"]().min(2, MIN_LENGTH_MESSAGE).max(100, MAX_LENGTH_MESSAGE).required(VALIDATION_ERROR)
  });
  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched
  } = Object(external_formik_["useFormik"])({
    validationSchema: formSchema,
    validateOnBlur: true,
    initialValues: {
      brand: car.brand || '',
      year: car.year || '',
      model: car.model || '',
      photo: car.photo || '',
      price: car.price || '',
      engine: car.engine || '',
      mileage: car.mileage || '',
      description: car.description || '',
      transmission: car.transmission || '',
      externalColor: car.externalColor || '',
      colorSimpleName: car.colorSimpleName || '',
      category: car.category || ''
    },
    onSubmit: data => {
      if (edit) {
        updateCarhandler({
          id: car._id,
          car: data
        });
      }

      addCarhandler(data);
    }
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paper_default.a, {
    elevation: 10,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Paper_default.a, {
        className: classes.paper,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
            container: true,
            md: 4,
            id: "photo div",
            style: {
              padding: '1rem',
              display: 'grid',
              justifyItems: 'center',
              alignItems: 'center',
              minHeight: '10rem'
            },
            children: values.photo ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              alt: "car",
              style: {
                maxWidth: '100%',
                height: 'auto'
              },
              src: values.photo
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Image"], {
              style: {
                width: '100%',
                height: '100%'
              }
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
            container: true,
            md: 8,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
              container: true,
              md: 12,
              style: {
                padding: '1rem'
              },
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
                sm: 12,
                md: 12,
                style: {
                  padding: '1rem 1rem 0'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    error: touched.photo && errors.photo,
                    name: "photo",
                    label: "Photo",
                    placeholder: "Photo",
                    size: "small",
                    fullWidth: true,
                    value: values.photo,
                    variant: "outlined",
                    onChange: handleChange
                  }), touched.photo && errors.photo && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.photo
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
                item: true,
                style: {
                  padding: '0 1rem'
                },
                xs: 12,
                sm: 12,
                md: 6,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    "aria-label": "enter car brand",
                    name: "brand",
                    error: touched.brand && errors.brand,
                    placeholder: "Brand",
                    label: "Brand",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.brand
                  }), touched.brand && errors.brand && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.brand
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "model",
                    error: touched.model && errors.model,
                    placeholder: "Model",
                    label: "Model",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.model
                  }), touched.model && errors.model && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.model
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "price",
                    error: touched.price && errors.price,
                    placeholder: "Price",
                    label: "Price",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.price
                  }), touched.price && errors.price && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.price
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "engine",
                    error: touched.engine && errors.engine,
                    placeholder: "Engine",
                    label: "Engine",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.engine
                  }), touched.engine && errors.engine && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.engine
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "externalColor",
                    error: touched.externalColor && errors.externalColor,
                    placeholder: "External color",
                    label: "External color",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.externalColor
                  }), touched.externalColor && errors.externalColor && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.externalColor
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Grid_default.a, {
                item: true,
                style: {
                  padding: '0 1rem'
                },
                xs: 12,
                sm: 12,
                md: 6,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "mileage",
                    error: touched.mileage && errors.mileage,
                    placeholder: "Mileage",
                    label: "Mileage",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.mileage
                  }), touched.mileage && errors.mileage && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.mileage
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["TextField"], {
                    name: "colorSimpleName",
                    error: touched.colorSimpleName && errors.colorSimpleName,
                    placeholder: "Simple color",
                    select: true,
                    label: "Simple color",
                    SelectProps: {
                      native: true
                    },
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.colorSimpleName,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {}), mappedColors]
                  }), touched.colorSimpleName && errors.colorSimpleName && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.colorSimpleName
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["TextField"], {
                    name: "year",
                    error: touched.year && errors.year,
                    placeholder: "choose a year",
                    label: "year",
                    select: true,
                    SelectProps: {
                      native: true
                    },
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.year,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {}), mappedYears]
                  }), touched.year && errors.year && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.year
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["TextField"], {
                    name: "transmission",
                    error: touched.transmission && errors.transmission,
                    placeholder: "choose a transmission",
                    label: "transmission",
                    select: true,
                    SelectProps: {
                      native: true
                    },
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.transmission,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                      children: "Automatic"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                      children: "Manual"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                      children: "Steptronic"
                    })]
                  }), touched.transmission && errors.transmission && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.transmission
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: classes.inputMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["TextField"], {
                    name: "category",
                    error: touched.category && errors.category,
                    placeholder: "choose a category",
                    label: "category",
                    select: true,
                    SelectProps: {
                      native: true
                    },
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    onChange: handleChange,
                    value: values.category,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {}), mappedCategories]
                  }), touched.category && errors.category && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.category
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Grid_default.a, {
                xs: 12,
                sm: 12,
                md: 12,
                item: true,
                style: {
                  padding: '0 1rem'
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  style: {
                    minHeight: '70px'
                  },
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
                    name: "description",
                    error: touched.description && errors.description,
                    multiline: true,
                    placeholder: "description",
                    label: "description",
                    size: "small",
                    fullWidth: true,
                    variant: "outlined",
                    value: values.description,
                    onChange: handleChange
                  }), touched.description && errors.description && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: classes.inputError,
                    children: errors.description
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: classes.buttonDiv,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
                    type: "button",
                    variant: "outlined",
                    color: "secondary",
                    children: "Back to main"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
                  type: "submit",
                  variant: "contained",
                  color: "primary",
                  children: "Create car"
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "VnCb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MainContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath = "/first-nextjs" || false;

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "vRNQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"cars": "Home_cars__OAuEa"
};


/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ynsX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputBase");

/***/ })

/******/ });