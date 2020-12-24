webpackHotUpdate_N_E("pages/_app",{

/***/ "./machines/car-machine.js":
/*!*********************************!*\
  !*** ./machines/car-machine.js ***!
  \*********************************/
/*! exports provided: carMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carMachine", function() { return carMachine; });
/* harmony import */ var xstate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xstate */ "./node_modules/xstate/es/index.js");

var defaultFilter = {
  brand: "",
  color: "",
  minYear: "",
  maxYear: "",
  minPrice: "",
  maxPrice: "",
  searchText: ""
};
var carMachine = Object(xstate__WEBPACK_IMPORTED_MODULE_0__["Machine"])({
  id: "filter",
  initial: "initial",
  context: {
    filter: defaultFilter,
    open: false,
    text: "",
    handler: function handler() {},
    push: function push() {},
    id: "",
    loading: true
  },
  states: {
    initial: {
      on: {
        SHOW: {
          target: "show",
          actions: ["showDialog"]
        },
        ADD_BRAND: {
          target: "initial",
          actions: ["addBrandToStore"]
        },
        ADD_COLOR: {
          target: "initial",
          actions: ["addColorToStore"]
        },
        ADD_MINYEAR: {
          target: "initial",
          actions: ["addMinYearToStore"]
        },
        ADD_MAXYEAR: {
          target: "initial",
          actions: ["addMaxYearToStore"]
        },
        ADD_MINPRICE: {
          target: "initial",
          actions: ["addMinPriceToStore"]
        },
        ADD_MAXPRICE: {
          target: "initial",
          actions: ["addMaxPriceToStore"]
        },
        ADD_SEARCH_TEXT: {
          target: "initial",
          actions: ["addSearchText"]
        },
        CLEAR_FILTER: {
          target: "initial",
          actions: ["clearFilter"]
        },
        SET_FILTERS: {
          target: "initial",
          actions: ["setAllFilters"]
        },
        SET_LOADING: {
          target: "initial",
          actions: ["setLoading"]
        }
      }
    },
    show: {
      on: {
        DELETE: {
          target: "initial",
          actions: ["runHandler", "hideDialog", "clearData", "push"]
        },
        CANCEL: {
          target: "initial",
          actions: ["hideDialog", "clearData"]
        }
      }
    }
  }
}, {
  actions: {
    showDialog: function showDialog(ctx, evt) {
      ctx.text = evt.text;
      ctx.open = true;
      ctx.handler = evt.handler;
      ctx.push = evt.push;
    },
    hideDialog: function hideDialog(ctx) {
      ctx.open = false;
    },
    runHandler: function runHandler(ctx) {
      ctx.handler();
    },
    clearData: function clearData(ctx) {
      ctx.text = "";

      ctx.handler = function () {};
    },
    clearFilter: function clearFilter(ctx) {
      ctx.filter = {
        brand: "",
        color: "",
        maxPrice: "",
        maxYear: "",
        minPrice: "",
        minYear: "",
        searchText: ""
      };
    },
    push: function push(ctx) {
      return ctx.push();
    },
    addBrandToStore: function addBrandToStore(ctx, evt) {
      return ctx.filter.brand = evt.brand;
    },
    addColorToStore: function addColorToStore(ctx, evt) {
      return ctx.filter.color = evt.color;
    },
    addYearToStore: function addYearToStore(ctx, evt) {
      return ctx.filter.year = evt.year;
    },
    addMinYearToStore: function addMinYearToStore(ctx, evt) {
      return ctx.filter.minYear = evt.minYear;
    },
    addMaxYearToStore: function addMaxYearToStore(ctx, evt) {
      return ctx.filter.maxYear = evt.maxYear;
    },
    addMinPriceToStore: function addMinPriceToStore(ctx, evt) {
      return ctx.filter.minPrice = evt.minPrice;
    },
    addMaxPriceToStore: function addMaxPriceToStore(ctx, evt) {
      return ctx.filter.maxPrice = evt.maxPrice;
    },
    addSearchText: function addSearchText(ctx, evt) {
      return ctx.filter.searchText = evt.searchText;
    },
    setAllFilters: function setAllFilters(ctx, evt) {
      return ctx.filter = evt.filter;
    },
    setLoading: function setLoading(ctx, evt) {
      return ctx.loading = evt.loading;
    }
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWFjaGluZXMvY2FyLW1hY2hpbmUuanMiXSwibmFtZXMiOlsiZGVmYXVsdEZpbHRlciIsImJyYW5kIiwiY29sb3IiLCJtaW5ZZWFyIiwibWF4WWVhciIsIm1pblByaWNlIiwibWF4UHJpY2UiLCJzZWFyY2hUZXh0IiwiY2FyTWFjaGluZSIsIk1hY2hpbmUiLCJpZCIsImluaXRpYWwiLCJjb250ZXh0IiwiZmlsdGVyIiwib3BlbiIsInRleHQiLCJoYW5kbGVyIiwicHVzaCIsImxvYWRpbmciLCJzdGF0ZXMiLCJvbiIsIlNIT1ciLCJ0YXJnZXQiLCJhY3Rpb25zIiwiQUREX0JSQU5EIiwiQUREX0NPTE9SIiwiQUREX01JTllFQVIiLCJBRERfTUFYWUVBUiIsIkFERF9NSU5QUklDRSIsIkFERF9NQVhQUklDRSIsIkFERF9TRUFSQ0hfVEVYVCIsIkNMRUFSX0ZJTFRFUiIsIlNFVF9GSUxURVJTIiwiU0VUX0xPQURJTkciLCJzaG93IiwiREVMRVRFIiwiQ0FOQ0VMIiwic2hvd0RpYWxvZyIsImN0eCIsImV2dCIsImhpZGVEaWFsb2ciLCJydW5IYW5kbGVyIiwiY2xlYXJEYXRhIiwiY2xlYXJGaWx0ZXIiLCJhZGRCcmFuZFRvU3RvcmUiLCJhZGRDb2xvclRvU3RvcmUiLCJhZGRZZWFyVG9TdG9yZSIsInllYXIiLCJhZGRNaW5ZZWFyVG9TdG9yZSIsImFkZE1heFllYXJUb1N0b3JlIiwiYWRkTWluUHJpY2VUb1N0b3JlIiwiYWRkTWF4UHJpY2VUb1N0b3JlIiwiYWRkU2VhcmNoVGV4dCIsInNldEFsbEZpbHRlcnMiLCJzZXRMb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxJQUFNQSxhQUFhLEdBQUc7QUFDcEJDLE9BQUssRUFBRSxFQURhO0FBRXBCQyxPQUFLLEVBQUUsRUFGYTtBQUdwQkMsU0FBTyxFQUFFLEVBSFc7QUFJcEJDLFNBQU8sRUFBRSxFQUpXO0FBS3BCQyxVQUFRLEVB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LEVBQU1DLEdBQU47QUFBQSxhQUFlRCxHQUFHLENBQUN6QixNQUFKLENBQVdWLE9BQVgsR0FBcUJvQyxHQUFHLENBQUNwQyxPQUF4QztBQUFBLEtBaENaO0FBaUNQOEMscUJBQWlCLEVBQUUsMkJBQUNYLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGFBQWVELEdBQUcsQ0FBQ3pCLE1BQUosQ0FBV1QsT0FBWCxHQUFxQm1DLEdBQUcsQ0FBQ25DLE9BQXhDO0FBQUEsS0FqQ1o7QUFrQ1A4QyxzQkFBa0IsRUFBRSw0QkFBQ1osR0FBRCxFQUFNQyxHQUFOO0FBQUEsYUFBZUQsR0FBRyxDQUFDekIsTUFBSixDQUFXUixRQUFYLEdBQXNCa0MsR0FBRyxDQUFDbEMsUUFBekM7QUFBQSxLQWxDYjtBQW1DUDhDLHNCQUFrQixFQUFFLDRCQUFDYixHQUFELEVBQU1DLEdBQU47QUFBQSxhQUFlRCxHQUFHLENBQUN6QixNQUFKLENBQVdQLFFBQVgsR0FBc0JpQyxHQUFHLENBQUNqQyxRQUF6QztBQUFBLEtBbkNiO0FBb0NQOEMsaUJBQWEsRUFBRSx1QkFBQ2QsR0FBRCxFQUFNQyxHQUFOO0FBQUEsYUFBZUQsR0FBRyxDQUFDekIsTUFBSixDQUFXTixVQUFYLEdBQXdCZ0MsR0FBRyxDQUFDaEMsVUFBM0M7QUFBQSxLQXBDUjtBQXFDUDhDLGlCQUFhLEVBQUUsdUJBQUNmLEdBQUQsRUFBTUMsR0FBTjtBQUFBLGFBQWVELEdBQUcsQ0FBQ3pCLE1BQUosR0FBYTBCLEdBQUcsQ0FBQzFCLE1BQWhDO0FBQUEsS0FyQ1I7QUFzQ1B5QyxjQUFVLEVBQUUsb0JBQUNoQixHQUFELEVBQU1DLEdBQU47QUFBQSxhQUFlRCxHQUFHLENBQUNwQixPQUFKLEdBQWNxQixHQUFHLENBQUNyQixPQUFqQztBQUFBO0FBdENMO0FBRFgsQ0E1RStCLENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjVjNGU2ZWUxZDYwMjc1MDE0NTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hY2hpbmUgfSBmcm9tIFwieHN0YXRlXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0RmlsdGVyID0ge1xyXG4gIGJyYW5kOiBcIlwiLFxyXG4gIGNvbG9yOiBcIlwiLFxyXG4gIG1pblllYXI6IFwiXCIsXHJcbiAgbWF4WWVhcjogXCJcIixcclxuICBtaW5QcmljZTogXCJcIixcclxuICBtYXhQcmljZTogXCJcIixcclxuICBzZWFyY2hUZXh0OiBcIlwiLFxyXG59O1xyXG5leHBvcnQgY29uc3QgY2FyTWFjaGluZSA9IE1hY2hpbmUoXHJcbiAge1xyXG4gICAgaWQ6IFwiZmlsdGVyXCIsXHJcbiAgICBpbml0aWFsOiBcImluaXRpYWxcIixcclxuICAgIGNvbnRleHQ6IHtcclxuICAgICAgZmlsdGVyOiBkZWZhdWx0RmlsdGVyLFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgdGV4dDogXCJcIixcclxuICAgICAgaGFuZGxlcjogKCkgPT4ge30sXHJcbiAgICAgIHB1c2g6ICgpID0+IHt9LFxyXG4gICAgICBpZDogXCJcIixcclxuICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBzdGF0ZXM6IHtcclxuICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgIG9uOiB7XHJcbiAgICAgICAgICBTSE9XOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJzaG93XCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcInNob3dEaWFsb2dcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgQUREX0JSQU5EOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFkZEJyYW5kVG9TdG9yZVwiXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBBRERfQ09MT1I6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wiYWRkQ29sb3JUb1N0b3JlXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIEFERF9NSU5ZRUFSOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFkZE1pblllYXJUb1N0b3JlXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIEFERF9NQVhZRUFSOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFkZE1heFllYXJUb1N0b3JlXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIEFERF9NSU5QUklDRToge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJhZGRNaW5QcmljZVRvU3RvcmVcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgQUREX01BWFBSSUNFOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFkZE1heFByaWNlVG9TdG9yZVwiXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBBRERfU0VBUkNIX1RFWFQ6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wiYWRkU2VhcmNoVGV4dFwiXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBDTEVBUl9GSUxURVI6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wiY2xlYXJGaWx0ZXJcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgU0VUX0ZJTFRFUlM6IHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBcImluaXRpYWxcIixcclxuICAgICAgICAgICAgYWN0aW9uczogW1wic2V0QWxsRmlsdGVyc1wiXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBTRVRfTE9BRElORzoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRMb2FkaW5nXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaG93OiB7XHJcbiAgICAgICAgb246IHtcclxuICAgICAgICAgIERFTEVURToge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiaW5pdGlhbFwiLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJydW5IYW5kbGVyXCIsIFwiaGlkZURpYWxvZ1wiLCBcImNsZWFyRGF0YVwiLCBcInB1c2hcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgQ0FOQ0VMOiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogXCJpbml0aWFsXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImhpZGVEaWFsb2dcIiwgXCJjbGVhckRhdGFcIl0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYWN0aW9uczoge1xyXG4gICAgICBzaG93RGlhbG9nOiAoY3R4LCBldnQpID0+IHtcclxuICAgICAgICBjdHgudGV4dCA9IGV2dC50ZXh0O1xyXG4gICAgICAgIGN0eC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICBjdHguaGFuZGxlciA9IGV2dC5oYW5kbGVyO1xyXG4gICAgICAgIGN0eC5wdXNoID0gZXZ0LnB1c2g7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhpZGVEaWFsb2c6IChjdHgpID0+IHtcclxuICAgICAgICBjdHgub3BlbiA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBydW5IYW5kbGVyOiAoY3R4KSA9PiB7XHJcbiAgICAgICAgY3R4LmhhbmRsZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgY2xlYXJEYXRhOiAoY3R4KSA9PiB7XHJcbiAgICAgICAgY3R4LnRleHQgPSBcIlwiO1xyXG4gICAgICAgIGN0eC5oYW5kbGVyID0gKCkgPT4ge307XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsZWFyRmlsdGVyOiAoY3R4KSA9PiB7XHJcbiAgICAgICAgY3R4LmZpbHRlciA9IHtcclxuICAgICAgICAgIGJyYW5kOiBcIlwiLFxyXG4gICAgICAgICAgY29sb3I6IFwiXCIsXHJcbiAgICAgICAgICBtYXhQcmljZTogXCJcIixcclxuICAgICAgICAgIG1heFllYXI6IFwiXCIsXHJcbiAgICAgICAgICBtaW5QcmljZTogXCJcIixcclxuICAgICAgICAgIG1pblllYXI6IFwiXCIsXHJcbiAgICAgICAgICBzZWFyY2hUZXh0OiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIHB1c2g6IChjdHgpID0+IGN0eC5wdXNoKCksXHJcbiAgICAgIGFkZEJyYW5kVG9TdG9yZTogKGN0eCwgZXZ0KSA9PiAoY3R4LmZpbHRlci5icmFuZCA9IGV2dC5icmFuZCksXHJcbiAgICAgIGFkZENvbG9yVG9TdG9yZTogKGN0eCwgZXZ0KSA9PiAoY3R4LmZpbHRlci5jb2xvciA9IGV2dC5jb2xvciksXHJcbiAgICAgIGFkZFllYXJUb1N0b3JlOiAoY3R4LCBldnQpID0+IChjdHguZmlsdGVyLnllYXIgPSBldnQueWVhciksXHJcbiAgICAgIGFkZE1pblllYXJUb1N0b3JlOiAoY3R4LCBldnQpID0+IChjdHguZmlsdGVyLm1pblllYXIgPSBldnQubWluWWVhciksXHJcbiAgICAgIGFkZE1heFllYXJUb1N0b3JlOiAoY3R4LCBldnQpID0+IChjdHguZmlsdGVyLm1heFllYXIgPSBldnQubWF4WWVhciksXHJcbiAgICAgIGFkZE1pblByaWNlVG9TdG9yZTogKGN0eCwgZXZ0KSA9PiAoY3R4LmZpbHRlci5taW5QcmljZSA9IGV2dC5taW5QcmljZSksXHJcbiAgICAgIGFkZE1heFByaWNlVG9TdG9yZTogKGN0eCwgZXZ0KSA9PiAoY3R4LmZpbHRlci5tYXhQcmljZSA9IGV2dC5tYXhQcmljZSksXHJcbiAgICAgIGFkZFNlYXJjaFRleHQ6IChjdHgsIGV2dCkgPT4gKGN0eC5maWx0ZXIuc2VhcmNoVGV4dCA9IGV2dC5zZWFyY2hUZXh0KSxcclxuICAgICAgc2V0QWxsRmlsdGVyczogKGN0eCwgZXZ0KSA9PiAoY3R4LmZpbHRlciA9IGV2dC5maWx0ZXIpLFxyXG4gICAgICBzZXRMb2FkaW5nOiAoY3R4LCBldnQpID0+IChjdHgubG9hZGluZyA9IGV2dC5sb2FkaW5nKSxcclxuICAgIH0sXHJcbiAgfSxcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==