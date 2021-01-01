module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/[...slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/cars.graphql.js":
/*!*********************************!*\
  !*** ./modules/cars.graphql.js ***!
  \*********************************/
/*! exports provided: carType, carInputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carType", function() { return carType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carInputType", function() { return carInputType; });
const carType = `
type Car {
  _id:ID
  brand: String
  model: String
  year: Int
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  category: String
  externalColor: String
  colorSimpleName: String
  description: String
  date: String
}`;
const carInputType = `
input CarInput {
  brand: String
  model: String
  year: Int
  price: Int
  mileage: Int
  photo: String
  engine: String
  transmission: String
  category: String
  externalColor: String
  colorSimpleName: String
  description:String
}`;

/***/ }),

/***/ "./modules/cars.model.js":
/*!*******************************!*\
  !*** ./modules/cars.model.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const {
  Schema
} = mongoose;
const cars = new Schema({
  brand: String,
  model: String,
  year: Number,
  price: Number,
  mileage: Number,
  photo: String,
  engine: String,
  transmission: String,
  category: String,
  externalColor: String,
  colorSimpleName: String,
  description: String,
  date: {
    type: String,
    default: Date.now()
  }
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose.models && mongoose.models.cars ? mongoose.models.cars : mongoose.model("cars", cars, "cars"));

/***/ }),

/***/ "./modules/cars.resolvers.js":
/*!***********************************!*\
  !*** ./modules/cars.resolvers.js ***!
  \***********************************/
/*! exports provided: carsQuery, carsMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carsQuery", function() { return carsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carsMutation", function() { return carsMutation; });
/* harmony import */ var _cars_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.services */ "./modules/cars.services.js");

const carsQuery = {
  getAllCars: async (_, args) => await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].getAllCars(args),
  getCarById: async (_, args) => {
    try {
      return await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].getCarById(args);
    } catch (e) {
      return {
        message: e.message
      };
    }
  },
  getFilteredCars: async (_, args) => await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].getFilteredCars(args)
};
const carsMutation = {
  addCar: async (parent, args) => await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].addCar(args),
  updateCar: async (_, args) => await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].updateCar(args),
  deleteCar: async (_, args) => await _cars_services__WEBPACK_IMPORTED_MODULE_0__["default"].deleteCar(args)
};


/***/ }),

/***/ "./modules/cars.services.js":
/*!**********************************!*\
  !*** ./modules/cars.services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cars_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cars.model */ "./modules/cars.model.js");


class CarsServices {
  async getAllCars({
    skip,
    limit
  }) {
    const cars = await _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].find().skip(skip).limit(limit).sort({
      year: -1
    });
    const count = await _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].countDocuments();
    return {
      cars,
      count
    };
  }

  async getCarById({
    id
  }) {
    const car = await _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].findById(id);

    if (!car) {
      throw new Error('car not found');
    }

    return car;
  }

  async addCar({
    car
  }) {
    return await new _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"](car).save();
  }

  updateCar({
    id,
    car
  }) {
    return _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndUpdate(id, {
      $set: car
    }, {
      new: true
    });
  }

  deleteCar({
    id
  }) {
    return _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].findByIdAndDelete(id);
  }

  async getFilteredCars({
    filter,
    skip,
    limit
  }) {
    const filters = this.configureFilter(filter);
    const cars = await _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].find(filters).skip(skip).limit(limit);
    const count = await _cars_model__WEBPACK_IMPORTED_MODULE_0__["default"].find(filters).countDocuments();
    return {
      cars,
      count
    };
  }

  configureFilter(data) {
    const filter = {};
    const {
      brand = '',
      model = '',
      minYear = 1990,
      maxYear = 2022,
      minPrice = 0,
      maxPrice = 222222,
      color = '',
      searchText = ''
    } = data;

    if (brand) {
      filter.brand = new RegExp(brand, 'i');
    }

    if (model) {
      filter.model = new RegExp(model, 'i');
    }

    if (minPrice) {
      filter.price = {
        $gte: +minPrice,
        $lte: minPrice
      };
    }

    if (maxPrice) {
      filter.price = {
        $gte: minPrice,
        $lte: +maxPrice
      };
    }

    if (minYear) {
      filter.year = {
        $gte: +minYear,
        $lte: +maxYear
      };
    }

    if (maxYear) {
      filter.year = {
        $gte: +minYear,
        $lte: +maxYear
      };
    }

    if (color) {
      filter.colorSimpleName = new RegExp(color, 'i');
    }

    if (searchText) {
      filter.description = new RegExp(searchText, 'i');
    }

    return filter;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CarsServices());

/***/ }),

/***/ "./pages/api/[...slug].js":
/*!********************************!*\
  !*** ./pages/api/[...slug].js ***!
  \********************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_cars_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/cars.resolvers */ "./modules/cars.resolvers.js");
/* harmony import */ var _modules_cars_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/cars.graphql */ "./modules/cars.graphql.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/db */ "./utils/db.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_db__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





_utils_db__WEBPACK_IMPORTED_MODULE_3___default()();
const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  ${_modules_cars_graphql__WEBPACK_IMPORTED_MODULE_2__["carType"]}
  ${_modules_cars_graphql__WEBPACK_IMPORTED_MODULE_2__["carInputType"]}

  type PaginatedCar {
    cars: [Car]
    count: Int
  }
  type Query {
    getAllCars(skip: Int, limit: Int): PaginatedCar
    getCarById(id: ID!): Car
    getFilteredCars(filter: FilterInput, skip: Int, limit: Int): PaginatedCar
  }
  type Mutation {
    addCar(car: CarInput!): Car
    updateCar(car: CarInput!, id: ID!): Car
    deleteCar(id: ID!): Car
  }
  input FilterInput {
    brand: String
    color: String
    model: String
    minYear: String
    maxYear: String
    minPrice: String
    maxPrice: String
    searchText: String
    page: String
  }
`;
const resolvers = {
  Query: _objectSpread({}, _modules_cars_resolvers__WEBPACK_IMPORTED_MODULE_1__["carsQuery"]),
  Mutation: _objectSpread({}, _modules_cars_resolvers__WEBPACK_IMPORTED_MODULE_1__["carsMutation"])
};
const server = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  typeDefs,
  resolvers
});
const handler = server.createHandler({
  path: '/api/graphql',
  onHealthCheck: () => {
    console.log('server is running...');
  }
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectDB = async () => {
  const db = process.env.MONGO_URL;

  try {
    await _mongoose.default.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXJzLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXJzLm1vZGVsLmpzIiwid2VicGFjazovLy8uL21vZHVsZXMvY2Fycy5yZXNvbHZlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9jYXJzLnNlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9bLi4uc2x1Z10uanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlci1taWNyb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiXSwibmFtZXMiOlsiY2FyVHlwZSIsImNhcklucHV0VHlwZSIsIm1vbmdvb3NlIiwicmVxdWlyZSIsIlNjaGVtYSIsImNhcnMiLCJicmFuZCIsIlN0cmluZyIsIm1vZGVsIiwieWVhciIsIk51bWJlciIsInByaWNlIiwibWlsZWFnZSIsInBob3RvIiwiZW5naW5lIiwidHJhbnNtaXNzaW9uIiwiY2F0ZWdvcnkiLCJleHRlcm5hbENvbG9yIiwiY29sb3JTaW1wbGVOYW1lIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwidHlwZSIsImRlZmF1bHQiLCJEYXRlIiwibm93IiwibW9kZWxzIiwiY2Fyc1F1ZXJ5IiwiZ2V0QWxsQ2FycyIsIl8iLCJhcmdzIiwiY2Fyc1NlcnZpY2VzIiwiZ2V0Q2FyQnlJZCIsImUiLCJtZXNzYWdlIiwiZ2V0RmlsdGVyZWRDYXJzIiwiY2Fyc011dGF0aW9uIiwiYWRkQ2FyIiwicGFyZW50IiwidXBkYXRlQ2FyIiwiZGVsZXRlQ2FyIiwiQ2Fyc1NlcnZpY2VzIiwic2tpcCIsImxpbWl0IiwiQ2FycyIsImZpbmQiLCJzb3J0IiwiY291bnQiLCJjb3VudERvY3VtZW50cyIsImlkIiwiY2FyIiwiZmluZEJ5SWQiLCJFcnJvciIsInNhdmUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIiRzZXQiLCJuZXciLCJmaW5kQnlJZEFuZERlbGV0ZSIsImZpbHRlciIsImZpbHRlcnMiLCJjb25maWd1cmVGaWx0ZXIiLCJkYXRhIiwibWluWWVhciIsIm1heFllYXIiLCJtaW5QcmljZSIsIm1heFByaWNlIiwiY29sb3IiLCJzZWFyY2hUZXh0IiwiUmVnRXhwIiwiJGd0ZSIsIiRsdGUiLCJjb25uZWN0RGIiLCJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwiTXV0YXRpb24iLCJzZXJ2ZXIiLCJBcG9sbG9TZXJ2ZXIiLCJoYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiLCJvbkhlYWx0aENoZWNrIiwiY29uc29sZSIsImxvZyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJjb25uZWN0REIiLCJkYiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiZXJyIiwiZXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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Q2hCQyxPQUFLLG9CQUNBaEQsaUVBREEsQ0FEVztBQUloQmlELFVBQVEsb0JBQ0h4QyxvRUFERztBQUpRLENBQWxCO0FBU0EsTUFBTXlDLE1BQU0sR0FBRyxJQUFJQyxnRUFBSixDQUFpQjtBQUFFTixVQUFGO0FBQVlFO0FBQVosQ0FBakIsQ0FBZjtBQUVBLE1BQU1LLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxhQUFQLENBQXFCO0FBQ25DQyxNQUFJLEVBQUUsY0FENkI7QUFFbkNDLGVBQWEsRUFBRSxNQUFNO0FBQ25CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNEO0FBSmtDLENBQXJCLENBQWhCO0FBT08sTUFBTUMsTUFBTSxHQUFHO0FBQ3BCQyxLQUFHLEVBQUU7QUFDSEMsY0FBVSxFQUFFO0FBRFQ7QUFEZSxDQUFmO0FBTVFSLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDOURBOzs7O0FBRUEsTUFBTVMsU0FBUyxHQUFHLFlBQVk7QUFDNUIsUUFBTUMsRUFBRSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBdkI7O0FBQ0EsTUFBSTtBQUNGLFVBQU16RixrQkFBUzBGLE9BQVQsQ0FBaUJKLEVBQWpCLEVBQXFCO0FBQ3pCSyxxQkFBZSxFQUFFLElBRFE7QUFFekJDLHdCQUFrQixFQUFFLElBRks7QUFHekJDLG9CQUFjLEVBQUUsSUFIUztBQUl6QkMsc0JBQWdCLEVBQUU7QUFKTyxLQUFyQixDQUFOO0FBTUQsR0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaZixXQUFPLENBQUNnQixLQUFSLENBQWNELEdBQWQ7QUFDRDtBQUNGLENBWkQ7O0FBY0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmIsU0FBakIsQzs7Ozs7Ozs7Ozs7QUNoQkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvYXBpL1suLi5zbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL1suLi5zbHVnXS5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBjYXJUeXBlID0gYFxyXG50eXBlIENhciB7XHJcbiAgX2lkOklEXHJcbiAgYnJhbmQ6IFN0cmluZ1xyXG4gIG1vZGVsOiBTdHJpbmdcclxuICB5ZWFyOiBJbnRcclxuICBwcmljZTogSW50XHJcbiAgbWlsZWFnZTogSW50XHJcbiAgcGhvdG86IFN0cmluZ1xyXG4gIGVuZ2luZTogU3RyaW5nXHJcbiAgdHJhbnNtaXNzaW9uOiBTdHJpbmdcclxuICBjYXRlZ29yeTogU3RyaW5nXHJcbiAgZXh0ZXJuYWxDb2xvcjogU3RyaW5nXHJcbiAgY29sb3JTaW1wbGVOYW1lOiBTdHJpbmdcclxuICBkZXNjcmlwdGlvbjogU3RyaW5nXHJcbiAgZGF0ZTogU3RyaW5nXHJcbn1gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcklucHV0VHlwZSA9IGBcclxuaW5wdXQgQ2FySW5wdXQge1xyXG4gIGJyYW5kOiBTdHJpbmdcclxuICBtb2RlbDogU3RyaW5nXHJcbiAgeWVhcjogSW50XHJcbiAgcHJpY2U6IEludFxyXG4gIG1pbGVhZ2U6IEludFxyXG4gIHBob3RvOiBTdHJpbmdcclxuICBlbmdpbmU6IFN0cmluZ1xyXG4gIHRyYW5zbWlzc2lvbjogU3RyaW5nXHJcbiAgY2F0ZWdvcnk6IFN0cmluZ1xyXG4gIGV4dGVybmFsQ29sb3I6IFN0cmluZ1xyXG4gIGNvbG9yU2ltcGxlTmFtZTogU3RyaW5nXHJcbiAgZGVzY3JpcHRpb246U3RyaW5nXHJcbn1gO1xyXG4iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IGNhcnMgPSBuZXcgU2NoZW1hKHtcclxuICBicmFuZDogU3RyaW5nLFxyXG4gIG1vZGVsOiBTdHJpbmcsXHJcbiAgeWVhcjogTnVtYmVyLFxyXG4gIHByaWNlOiBOdW1iZXIsXHJcbiAgbWlsZWFnZTogTnVtYmVyLFxyXG4gIHBob3RvOiBTdHJpbmcsXHJcbiAgZW5naW5lOiBTdHJpbmcsXHJcbiAgdHJhbnNtaXNzaW9uOiBTdHJpbmcsXHJcbiAgY2F0ZWdvcnk6IFN0cmluZyxcclxuICBleHRlcm5hbENvbG9yOiBTdHJpbmcsXHJcbiAgY29sb3JTaW1wbGVOYW1lOiBTdHJpbmcsXHJcbiAgZGVzY3JpcHRpb246IFN0cmluZyxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBEYXRlLm5vdygpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzICYmIG1vbmdvb3NlLm1vZGVscy5jYXJzXHJcbiAgPyBtb25nb29zZS5tb2RlbHMuY2Fyc1xyXG4gIDogbW9uZ29vc2UubW9kZWwoXCJjYXJzXCIsIGNhcnMsIFwiY2Fyc1wiKTtcclxuIiwiaW1wb3J0IGNhcnNTZXJ2aWNlcyBmcm9tICcuL2NhcnMuc2VydmljZXMnO1xyXG5cclxuY29uc3QgY2Fyc1F1ZXJ5ID0ge1xyXG4gIGdldEFsbENhcnM6IGFzeW5jIChfLCBhcmdzKSA9PiBhd2FpdCBjYXJzU2VydmljZXMuZ2V0QWxsQ2FycyhhcmdzKSxcclxuICBnZXRDYXJCeUlkOiBhc3luYyAoXywgYXJncykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGNhcnNTZXJ2aWNlcy5nZXRDYXJCeUlkKGFyZ3MpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4geyBtZXNzYWdlOiBlLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdldEZpbHRlcmVkQ2FyczogYXN5bmMgKF8sIGFyZ3MpID0+IGF3YWl0IGNhcnNTZXJ2aWNlcy5nZXRGaWx0ZXJlZENhcnMoYXJncyksXHJcbn07XHJcbmNvbnN0IGNhcnNNdXRhdGlvbiA9IHtcclxuICBhZGRDYXI6IGFzeW5jIChwYXJlbnQsIGFyZ3MpID0+IGF3YWl0IGNhcnNTZXJ2aWNlcy5hZGRDYXIoYXJncyksXHJcbiAgdXBkYXRlQ2FyOiBhc3luYyAoXywgYXJncykgPT4gYXdhaXQgY2Fyc1NlcnZpY2VzLnVwZGF0ZUNhcihhcmdzKSxcclxuICBkZWxldGVDYXI6IGFzeW5jIChfLCBhcmdzKSA9PiBhd2FpdCBjYXJzU2VydmljZXMuZGVsZXRlQ2FyKGFyZ3MpLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgY2Fyc1F1ZXJ5LCBjYXJzTXV0YXRpb24gfTtcclxuIiwiaW1wb3J0IENhcnMgZnJvbSAnLi9jYXJzLm1vZGVsJztcclxuXHJcbmNsYXNzIENhcnNTZXJ2aWNlcyB7XHJcbiAgYXN5bmMgZ2V0QWxsQ2Fycyh7IHNraXAsIGxpbWl0IH0pIHtcclxuICAgIGNvbnN0IGNhcnMgPSBhd2FpdCBDYXJzLmZpbmQoKS5za2lwKHNraXApLmxpbWl0KGxpbWl0KS5zb3J0KHsgeWVhcjogLTEgfSk7XHJcbiAgICBjb25zdCBjb3VudCA9IGF3YWl0IENhcnMuY291bnREb2N1bWVudHMoKTtcclxuICAgIHJldHVybiB7IGNhcnMsIGNvdW50IH07XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDYXJCeUlkKHsgaWQgfSkge1xyXG4gICAgY29uc3QgY2FyID0gYXdhaXQgQ2Fycy5maW5kQnlJZChpZCk7XHJcbiAgICBpZiAoIWNhcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhciBub3QgZm91bmQnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjYXI7XHJcbiAgfVxyXG5cclxuICBhc3luYyBhZGRDYXIoeyBjYXIgfSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBDYXJzKGNhcikuc2F2ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2FyKHsgaWQsIGNhciB9KSB7XHJcbiAgICByZXR1cm4gQ2Fycy5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyAkc2V0OiBjYXIgfSwgeyBuZXc6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDYXIoeyBpZCB9KSB7XHJcbiAgICByZXR1cm4gQ2Fycy5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRGaWx0ZXJlZENhcnMoeyBmaWx0ZXIsIHNraXAsIGxpbWl0IH0pIHtcclxuICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmNvbmZpZ3VyZUZpbHRlcihmaWx0ZXIpO1xyXG4gICAgY29uc3QgY2FycyA9IGF3YWl0IENhcnMuZmluZChmaWx0ZXJzKS5za2lwKHNraXApLmxpbWl0KGxpbWl0KTtcclxuICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgQ2Fycy5maW5kKGZpbHRlcnMpLmNvdW50RG9jdW1lbnRzKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY2FycywgY291bnQgfTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZUZpbHRlcihkYXRhKSB7XHJcbiAgICBjb25zdCBmaWx0ZXIgPSB7fTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgYnJhbmQgPSAnJyxcclxuICAgICAgbW9kZWwgPSAnJyxcclxuICAgICAgbWluWWVhciA9IDE5OTAsXHJcbiAgICAgIG1heFllYXIgPSAyMDIyLFxyXG4gICAgICBtaW5QcmljZSA9IDAsXHJcbiAgICAgIG1heFByaWNlID0gMjIyMjIyLFxyXG4gICAgICBjb2xvciA9ICcnLFxyXG4gICAgICBzZWFyY2hUZXh0ID0gJycsXHJcbiAgICB9ID0gZGF0YTtcclxuXHJcbiAgICBpZiAoYnJhbmQpIHtcclxuICAgICAgZmlsdGVyLmJyYW5kID0gbmV3IFJlZ0V4cChicmFuZCwgJ2knKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW9kZWwpIHtcclxuICAgICAgZmlsdGVyLm1vZGVsID0gbmV3IFJlZ0V4cChtb2RlbCwgJ2knKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluUHJpY2UpIHtcclxuICAgICAgZmlsdGVyLnByaWNlID0geyAkZ3RlOiArbWluUHJpY2UsICRsdGU6IG1pblByaWNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1heFByaWNlKSB7XHJcbiAgICAgIGZpbHRlci5wcmljZSA9IHsgJGd0ZTogbWluUHJpY2UsICRsdGU6ICttYXhQcmljZSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW5ZZWFyKSB7XHJcbiAgICAgIGZpbHRlci55ZWFyID0geyAkZ3RlOiArbWluWWVhciwgJGx0ZTogK21heFllYXIgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF4WWVhcikge1xyXG4gICAgICBmaWx0ZXIueWVhciA9IHsgJGd0ZTogK21pblllYXIsICRsdGU6ICttYXhZZWFyIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbG9yKSB7XHJcbiAgICAgIGZpbHRlci5jb2xvclNpbXBsZU5hbWUgPSBuZXcgUmVnRXhwKGNvbG9yLCAnaScpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlYXJjaFRleHQpIHtcclxuICAgICAgZmlsdGVyLmRlc2NyaXB0aW9uID0gbmV3IFJlZ0V4cChzZWFyY2hUZXh0LCAnaScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ2Fyc1NlcnZpY2VzKCk7XHJcbiIsImltcG9ydCB7IEFwb2xsb1NlcnZlciwgZ3FsIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1taWNybyc7XHJcbmltcG9ydCB7IGNhcnNRdWVyeSwgY2Fyc011dGF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9jYXJzLnJlc29sdmVycyc7XHJcbmltcG9ydCB7IGNhclR5cGUsIGNhcklucHV0VHlwZSB9IGZyb20gJy4uLy4uL21vZHVsZXMvY2Fycy5ncmFwaHFsJztcclxuaW1wb3J0IGNvbm5lY3REYiBmcm9tICcuLi8uLi91dGlscy9kYic7XHJcblxyXG5jb25uZWN0RGIoKTtcclxuXHJcbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gICR7Y2FyVHlwZX1cclxuICAke2NhcklucHV0VHlwZX1cclxuXHJcbiAgdHlwZSBQYWdpbmF0ZWRDYXIge1xyXG4gICAgY2FyczogW0Nhcl1cclxuICAgIGNvdW50OiBJbnRcclxuICB9XHJcbiAgdHlwZSBRdWVyeSB7XHJcbiAgICBnZXRBbGxDYXJzKHNraXA6IEludCwgbGltaXQ6IEludCk6IFBhZ2luYXRlZENhclxyXG4gICAgZ2V0Q2FyQnlJZChpZDogSUQhKTogQ2FyXHJcbiAgICBnZXRGaWx0ZXJlZENhcnMoZmlsdGVyOiBGaWx0ZXJJbnB1dCwgc2tpcDogSW50LCBsaW1pdDogSW50KTogUGFnaW5hdGVkQ2FyXHJcbiAgfVxyXG4gIHR5cGUgTXV0YXRpb24ge1xyXG4gICAgYWRkQ2FyKGNhcjogQ2FySW5wdXQhKTogQ2FyXHJcbiAgICB1cGRhdGVDYXIoY2FyOiBDYXJJbnB1dCEsIGlkOiBJRCEpOiBDYXJcclxuICAgIGRlbGV0ZUNhcihpZDogSUQhKTogQ2FyXHJcbiAgfVxyXG4gIGlucHV0IEZpbHRlcklucHV0IHtcclxuICAgIGJyYW5kOiBTdHJpbmdcclxuICAgIGNvbG9yOiBTdHJpbmdcclxuICAgIG1vZGVsOiBTdHJpbmdcclxuICAgIG1pblllYXI6IFN0cmluZ1xyXG4gICAgbWF4WWVhcjogU3RyaW5nXHJcbiAgICBtaW5QcmljZTogU3RyaW5nXHJcbiAgICBtYXhQcmljZTogU3RyaW5nXHJcbiAgICBzZWFyY2hUZXh0OiBTdHJpbmdcclxuICAgIHBhZ2U6IFN0cmluZ1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHJlc29sdmVycyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgLi4uY2Fyc1F1ZXJ5LFxyXG4gIH0sXHJcbiAgTXV0YXRpb246IHtcclxuICAgIC4uLmNhcnNNdXRhdGlvbixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7IHR5cGVEZWZzLCByZXNvbHZlcnMgfSk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gc2VydmVyLmNyZWF0ZUhhbmRsZXIoe1xyXG4gIHBhdGg6ICcvYXBpL2dyYXBocWwnLFxyXG4gIG9uSGVhbHRoQ2hlY2s6ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzZXJ2ZXIgaXMgcnVubmluZy4uLicpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgZGIgPSBwcm9jZXNzLmVudi5NT05HT19VUkw7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGIsIHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxyXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdERCO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLW1pY3JvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=