self["webpackHotUpdatees6_async_await"](0,{

/***/ 28:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  WeatherAPIKey: '1343f8ea0eb2442ea9d183929242311'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var container = document.querySelector('section.container');
var moduleTemplate = document.querySelector('.module__weather');
var getForecastDay = function getForecastDay(currentDate) {
  var daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  var date = new Date(currentDate);
  var dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};
var getDayConditionIcon = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(code) {
    var response, weatherConditions, icon;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("../weather_conditions.json");
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          weatherConditions = _context.sent;
          icon = weatherConditions.find();
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getDayConditionIcon(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createModule = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, iconCode, newLi;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n        "));
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          console.log(data);
          module = moduleTemplate.cloneNode(true);
          module.removeAttribute('hidden');

          // Get necessary elements:
          cityNameLabel = module.querySelector('.city__name');
          temperatureLabel = module.querySelector('.temperature__value');
          pressureLabel = module.querySelector('.pressure__value');
          humidityLabel = module.querySelector('.humidity__value');
          windSpeedLabel = module.querySelector('.wind-speed__value');
          forecastList = module.querySelector('ul.weather__forecast'); // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";

          // Forecast:
          forecastDays = data.forecast.forecastday;
          for (i = 0; i < forecastDays.length; i++) {
            day = forecastDays[i];
            dayName = getForecastDay(day.date);
            avgTemp = day.day.avgtemp_c;
            iconCode = day.day.condition.code;
            console.log(iconCode);
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/fog.svg\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
            forecastList.append(newLi);
          }

          // Update HTML:
          container.append(module);
          _context2.next = 29;
          break;
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 26]]);
  }));
  return function createModule(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ }),

/***/ 26:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(27)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 27:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(26)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 24:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("daba7e73123443b7c843")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7QUMvU2pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUcsRUFBRSx5QkFBeUIsU0FBUyx5QkFBeUI7QUFDaEU7QUFDQSwwQkFBMEIseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7O0FDVHJGOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxFQUErQjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7OztVQ3hCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLy5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29uZmlnID0ge1xuICAgIFdlYXRoZXJBUElLZXk6ICcxMzQzZjhlYTBlYjI0NDJlYTlkMTgzOTI5MjQyMzExJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydOaWVkemllbGEnLCAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJ107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGdldERheUNvbmRpdGlvbkljb24gPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvcigndWwud2VhdGhlcl9fZm9yZWNhc3QnKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBmb3JlY2FzdERheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgY29uc3QgaWNvbkNvZGUgPSBkYXkuZGF5LmNvbmRpdGlvbi5jb2RlXG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coaWNvbkNvZGUpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbmV3TGkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lfTwvc3Bhbj4gPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvZm9nLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgIGZvcmVjYXN0TGlzdC5hcHBlbmQobmV3TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKHIubWV0aG9kID0gXCJyZXR1cm5cIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCBcInRocm93XCIgPT09IHIubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBuICYmIChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBuICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgdmFyIGkgPSB0cnlDYXRjaChvLCBlLml0ZXJhdG9yLCByLmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gaS50eXBlKSByZXR1cm4gci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gaS5hcmcsIHIuZGVsZWdhdGUgPSBudWxsLCB5O1xuICAgIHZhciBhID0gaS5hcmc7XG4gICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSByLm1ldGhvZCAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpIDogYSA6IChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIHIuZGVsZWdhdGUgPSBudWxsLCB5KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkodCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdHJ5TG9jOiB0WzBdXG4gICAgfTtcbiAgICAxIGluIHQgJiYgKGUuY2F0Y2hMb2MgPSB0WzFdKSwgMiBpbiB0ICYmIChlLmZpbmFsbHlMb2MgPSB0WzJdLCBlLmFmdGVyTG9jID0gdFszXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkodCkge1xuICAgIHZhciBlID0gdC5jb21wbGV0aW9uIHx8IHt9O1xuICAgIGUudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSBlLmFyZywgdC5jb21wbGV0aW9uID0gZTtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHQpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGUpIHtcbiAgICBpZiAoZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgciA9IGVbYV07XG4gICAgICBpZiAocikgcmV0dXJuIHIuY2FsbChlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubmV4dCkgcmV0dXJuIGU7XG4gICAgICBpZiAoIWlzTmFOKGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgbyA9IC0xLFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsrbyA8IGUubGVuZ3RoOykgaWYgKG4uY2FsbChlLCBvKSkgcmV0dXJuIG5leHQudmFsdWUgPSBlW29dLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkubmV4dCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoX3R5cGVvZihlKSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIG8oR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7XG4gIH0sIGUubWFyayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZih0LCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAodC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKHQsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZyksIHQ7XG4gIH0sIGUuYXdyYXAgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiB0XG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBlLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBlLmFzeW5jID0gZnVuY3Rpb24gKHQsIHIsIG4sIG8sIGkpIHtcbiAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTtcbiAgICB2YXIgYSA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCwgciwgbiwgbyksIGkpO1xuICAgIHJldHVybiBlLmlzR2VuZXJhdG9yRnVuY3Rpb24ocikgPyBhIDogYS5uZXh0KCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKGcpLCBkZWZpbmUoZywgdSwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShnLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoZywgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gT2JqZWN0KHQpLFxuICAgICAgciA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pO1xuICAgIHJldHVybiByLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyByLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIHQgPSByLnBvcCgpO1xuICAgICAgICBpZiAodCBpbiBlKSByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGUudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgciA+PSAwOyAtLXIpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyeUVudHJpZXNbcl07XG4gICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBvLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgaSA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgJiYgKFwiYnJlYWtcIiA9PT0gdCB8fCBcImNvbnRpbnVlXCIgPT09IHQpICYmIGkudHJ5TG9jIDw9IGUgJiYgZSA8PSBpLmZpbmFsbHlMb2MgJiYgKGkgPSBudWxsKTtcbiAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIGEudHlwZSA9IHQsIGEuYXJnID0gZSwgaSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh0LCBlKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gdC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gdC50eXBlID8gdGhpcy5uZXh0ID0gdC5hcmcgOiBcInJldHVyblwiID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLmZpbmFsbHlMb2MgPT09IHQpIHJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbiwgci5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkociksIHk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci50cnlMb2MgPT09IHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBuLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gbi5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAobiwgdCwgZSwgciwgbywgYSwgYykge1xuICB0cnkge1xuICAgIHZhciBpID0gblthXShjKSxcbiAgICAgIHUgPSBpLnZhbHVlO1xuICB9IGNhdGNoIChuKSB7XG4gICAgcmV0dXJuIHZvaWQgZShuKTtcbiAgfVxuICBpLmRvbmUgPyB0KHUpIDogUHJvbWlzZS5yZXNvbHZlKHUpLnRoZW4ociwgbyk7XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHIsIG8pIHtcbiAgICAgIHZhciBhID0gbi5hcHBseSh0LCBlKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KG4pIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGEsIHIsIG8sIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCBuKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhuKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChhLCByLCBvLCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIG4pO1xuICAgICAgfVxuICAgICAgX25leHQodm9pZCAwKTtcbiAgICB9KTtcbiAgfTtcbn1cbmV4cG9ydCB7IF9hc3luY1RvR2VuZXJhdG9yIGFzIGRlZmF1bHQgfTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYWJhN2U3MzEyMzQ0M2I3Yzg0M1wiKSJdLCJuYW1lcyI6WyJjb25maWciLCJXZWF0aGVyQVBJS2V5IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJpY29uIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImkiLCJkYXkiLCJkYXlOYW1lIiwiYXZnVGVtcCIsImljb25Db2RlIiwibmV3TGkiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjb25jYXQiLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImF2Z3RlbXBfYyIsImNvbmRpdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJfeDIiXSwic291cmNlUm9vdCI6IiJ9