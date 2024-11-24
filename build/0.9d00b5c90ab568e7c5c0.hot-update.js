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



var weatherModule = document.querySelector('.module__weather');
var cityNameLabel = document.querySelector('.city__name');
var temperatureLabel = document.querySelector('.temperature__value');
var pressureLabel = document.querySelector('.pressure__value');
var humidityLabel = document.querySelector('.humidity__value');
var windSpeedlabel = document.querySelector('.wind-speed__value');
var fetchWeatherAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n    "));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          console.log(data);

          // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;

          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function fetchWeatherAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();
fetchWeatherAPI(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

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
/******/ 	__webpack_require__.h = () => ("927bad5da5e0655cb3c5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7OztBQy9Takc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRyxFQUFFLHlCQUF5QixTQUFTLHlCQUF5QjtBQUNoRTtBQUNBLDBCQUEwQix5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7QUNUckY7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLEVBQStCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb25maWcgPSB7XG4gICAgV2VhdGhlckFQSUtleTogJzEzNDNmOGVhMGViMjQ0MmVhOWQxODM5MjkyNDIzMTEnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcbmNvbnN0IGNpdHlOYW1lTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbmNvbnN0IHByZXNzdXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG5jb25zdCBodW1pZGl0eUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuY29uc3Qgd2luZFNwZWVkbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcblxuXG5jb25zdCBmZXRjaFdlYXRoZXJBUEkgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIC8vIFVuaGlkZSB3ZWF0aGVyIG1vZHVsZTpcbiAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5mZXRjaFdlYXRoZXJBUEkoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgdCxcbiAgICBlID0ge30sXG4gICAgciA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgbiA9IHIuaGFzT3duUHJvcGVydHksXG4gICAgbyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAodCwgZSwgcikge1xuICAgICAgdFtlXSA9IHIudmFsdWU7XG4gICAgfSxcbiAgICBpID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBhID0gaS5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBjID0gaS5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdSA9IGkudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBlLCB7XG4gICAgICB2YWx1ZTogcixcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCB0W2VdO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAodCkge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgICByZXR1cm4gdFtlXSA9IHI7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKHQsIGUsIHIsIG4pIHtcbiAgICB2YXIgaSA9IGUgJiYgZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBlIDogR2VuZXJhdG9yLFxuICAgICAgYSA9IE9iamVjdC5jcmVhdGUoaS5wcm90b3R5cGUpLFxuICAgICAgYyA9IG5ldyBDb250ZXh0KG4gfHwgW10pO1xuICAgIHJldHVybiBvKGEsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZCh0LCByLCBjKVxuICAgIH0pLCBhO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKHQsIGUsIHIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiB0LmNhbGwoZSwgcilcbiAgICAgIH07XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IHRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGUud3JhcCA9IHdyYXA7XG4gIHZhciBoID0gXCJzdXNwZW5kZWRTdGFydFwiLFxuICAgIGwgPSBcInN1c3BlbmRlZFlpZWxkXCIsXG4gICAgZiA9IFwiZXhlY3V0aW5nXCIsXG4gICAgcyA9IFwiY29tcGxldGVkXCIsXG4gICAgeSA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIHAgPSB7fTtcbiAgZGVmaW5lKHAsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBkID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIHYgPSBkICYmIGQoZCh2YWx1ZXMoW10pKSk7XG4gIHYgJiYgdiAhPT0gciAmJiBuLmNhbGwodiwgYSkgJiYgKHAgPSB2KTtcbiAgdmFyIGcgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHQpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZGVmaW5lKHQsIGUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoZSwgdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UociwgbywgaSwgYSkge1xuICAgICAgdmFyIGMgPSB0cnlDYXRjaCh0W3JdLCB0LCBvKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IGMudHlwZSkge1xuICAgICAgICB2YXIgdSA9IGMuYXJnLFxuICAgICAgICAgIGggPSB1LnZhbHVlO1xuICAgICAgICByZXR1cm4gaCAmJiBcIm9iamVjdFwiID09IF90eXBlb2YoaCkgJiYgbi5jYWxsKGgsIFwiX19hd2FpdFwiKSA/IGUucmVzb2x2ZShoLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHQsIGksIGEpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KSA6IGUucmVzb2x2ZShoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdS52YWx1ZSA9IHQsIGkodSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGEoYy5hcmcpO1xuICAgIH1cbiAgICB2YXIgcjtcbiAgICBvKHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIGludm9rZSh0LCBuLCBlLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciA9IHIgPyByLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChlLCByLCBuKSB7XG4gICAgdmFyIG8gPSBoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgYSkge1xuICAgICAgaWYgKG8gPT09IGYpIHRocm93IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChvID09PSBzKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IGkpIHRocm93IGE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgICAgZG9uZTogITBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZvciAobi5tZXRob2QgPSBpLCBuLmFyZyA9IGE7Oykge1xuICAgICAgICB2YXIgYyA9IG4uZGVsZWdhdGU7XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgdmFyIHUgPSBtYXliZUludm9rZURlbGVnYXRlKGMsIG4pO1xuICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICBpZiAodSA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBuLm1ldGhvZCkgbi5zZW50ID0gbi5fc2VudCA9IG4uYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gbi5tZXRob2QpIHtcbiAgICAgICAgICBpZiAobyA9PT0gaCkgdGhyb3cgbyA9IHMsIG4uYXJnO1xuICAgICAgICAgIG4uZGlzcGF0Y2hFeGNlcHRpb24obi5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gbi5tZXRob2QgJiYgbi5hYnJ1cHQoXCJyZXR1cm5cIiwgbi5hcmcpO1xuICAgICAgICBvID0gZjtcbiAgICAgICAgdmFyIHAgPSB0cnlDYXRjaChlLCByLCBuKTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHAudHlwZSkge1xuICAgICAgICAgIGlmIChvID0gbi5kb25lID8gcyA6IGwsIHAuYXJnID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHAuYXJnLFxuICAgICAgICAgICAgZG9uZTogbi5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHAudHlwZSAmJiAobyA9IHMsIG4ubWV0aG9kID0gXCJ0aHJvd1wiLCBuLmFyZyA9IHAuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgcikge1xuICAgIHZhciBuID0gci5tZXRob2QsXG4gICAgICBvID0gZS5pdGVyYXRvcltuXTtcbiAgICBpZiAobyA9PT0gdCkgcmV0dXJuIHIuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG4gJiYgZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoci5tZXRob2QgPSBcInJldHVyblwiLCByLmFyZyA9IHQsIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgciksIFwidGhyb3dcIiA9PT0gci5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG4gJiYgKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG4gKyBcIicgbWV0aG9kXCIpKSwgeTtcbiAgICB2YXIgaSA9IHRyeUNhdGNoKG8sIGUuaXRlcmF0b3IsIHIuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSBpLnR5cGUpIHJldHVybiByLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBpLmFyZywgci5kZWxlZ2F0ZSA9IG51bGwsIHk7XG4gICAgdmFyIGEgPSBpLmFyZztcbiAgICByZXR1cm4gYSA/IGEuZG9uZSA/IChyW2UucmVzdWx0TmFtZV0gPSBhLnZhbHVlLCByLm5leHQgPSBlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IHIubWV0aG9kICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCByLmRlbGVnYXRlID0gbnVsbCwgeSkgOiBhIDogKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB7XG4gICAgICB0cnlMb2M6IHRbMF1cbiAgICB9O1xuICAgIDEgaW4gdCAmJiAoZS5jYXRjaExvYyA9IHRbMV0pLCAyIGluIHQgJiYgKGUuZmluYWxseUxvYyA9IHRbMl0sIGUuYWZ0ZXJMb2MgPSB0WzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB0LmNvbXBsZXRpb24gfHwge307XG4gICAgZS50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIGUuYXJnLCB0LmNvbXBsZXRpb24gPSBlO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHQuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoZSkge1xuICAgIGlmIChlIHx8IFwiXCIgPT09IGUpIHtcbiAgICAgIHZhciByID0gZVthXTtcbiAgICAgIGlmIChyKSByZXR1cm4gci5jYWxsKGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5uZXh0KSByZXR1cm4gZTtcbiAgICAgIGlmICghaXNOYU4oZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBvID0gLTEsXG4gICAgICAgICAgaSA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytvIDwgZS5sZW5ndGg7KSBpZiAobi5jYWxsKGUsIG8pKSByZXR1cm4gbmV4dC52YWx1ZSA9IGVbb10sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaS5uZXh0ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihfdHlwZW9mKGUpICsgXCIgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgbyhnLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgbyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBlLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIHQuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoZS5kaXNwbGF5TmFtZSB8fCBlLm5hbWUpKTtcbiAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6ICh0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUodCwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDtcbiAgfSwgZS5hd3JhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IHRcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGUuYXN5bmMgPSBmdW5jdGlvbiAodCwgciwgbiwgbywgaSkge1xuICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IFByb21pc2UpO1xuICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7XG4gICAgcmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKSA/IGEgOiBhLm5leHQoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5kb25lID8gdC52YWx1ZSA6IGEubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoZyksIGRlZmluZShnLCB1LCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShnLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGUua2V5cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBPYmplY3QodCksXG4gICAgICByID0gW107XG4gICAgZm9yICh2YXIgbiBpbiBlKSByLnB1c2gobik7XG4gICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IHIubGVuZ3RoOykge1xuICAgICAgICB2YXIgdCA9IHIucG9wKCk7XG4gICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZS52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChlKSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB0LCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIWUpIGZvciAodmFyIHIgaW4gdGhpcykgXCJ0XCIgPT09IHIuY2hhckF0KDApICYmIG4uY2FsbCh0aGlzLCByKSAmJiAhaXNOYU4oK3Iuc2xpY2UoMSkpICYmICh0aGlzW3JdID0gdCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZSkge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZTtcbiAgICAgIHZhciByID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShuLCBvKSB7XG4gICAgICAgIHJldHVybiBhLnR5cGUgPSBcInRocm93XCIsIGEuYXJnID0gZSwgci5uZXh0ID0gbiwgbyAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgISFvO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgbyA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBvID49IDA7IC0tbykge1xuICAgICAgICB2YXIgaSA9IHRoaXMudHJ5RW50cmllc1tvXSxcbiAgICAgICAgICBhID0gaS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoaS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGMgPSBuLmNhbGwoaSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIHUgPSBuLmNhbGwoaSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1KSB0aHJvdyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodCwgZSkge1xuICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJ5RW50cmllc1tyXTtcbiAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldiAmJiBuLmNhbGwobywgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IG8uZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSAmJiAoXCJicmVha1wiID09PSB0IHx8IFwiY29udGludWVcIiA9PT0gdCkgJiYgaS50cnlMb2MgPD0gZSAmJiBlIDw9IGkuZmluYWxseUxvYyAmJiAoaSA9IG51bGwpO1xuICAgICAgdmFyIGEgPSBpID8gaS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGkuZmluYWxseUxvYywgeSkgOiB0aGlzLmNvbXBsZXRlKGEpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkge1xuICAgICAgICAgIHZhciBuID0gci5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG4udHlwZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoZSwgciwgbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHIsXG4gICAgICAgIG5leHRMb2M6IG5cbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB0KSwgeTtcbiAgICB9XG4gIH0sIGU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChuLCB0LCBlLCByLCBvLCBhLCBjKSB7XG4gIHRyeSB7XG4gICAgdmFyIGkgPSBuW2FdKGMpLFxuICAgICAgdSA9IGkudmFsdWU7XG4gIH0gY2F0Y2ggKG4pIHtcbiAgICByZXR1cm4gdm9pZCBlKG4pO1xuICB9XG4gIGkuZG9uZSA/IHQodSkgOiBQcm9taXNlLnJlc29sdmUodSkudGhlbihyLCBvKTtcbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAociwgbykge1xuICAgICAgdmFyIGEgPSBuLmFwcGx5KHQsIGUpO1xuICAgICAgZnVuY3Rpb24gX25leHQobikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoYSwgciwgbywgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIG4pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KG4pIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGEsIHIsIG8sIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgbik7XG4gICAgICB9XG4gICAgICBfbmV4dCh2b2lkIDApO1xuICAgIH0pO1xuICB9O1xufVxuZXhwb3J0IHsgX2FzeW5jVG9HZW5lcmF0b3IgYXMgZGVmYXVsdCB9OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkyN2JhZDVkYTVlMDY1NWNiM2M1XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIldlYXRoZXJBUElLZXkiLCJ3ZWF0aGVyTW9kdWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZGxhYmVsIiwiZmV0Y2hXZWF0aGVyQVBJIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInJlbW92ZUF0dHJpYnV0ZSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9