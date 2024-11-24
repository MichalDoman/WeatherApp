"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var weatherModule = document.querySelector('.module__weather');
var cityNameLabel = document.querySelector('.city-name');
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
          cityNameLabel.innerText = data.
          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function fetchWeatherAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();
fetchWeatherAPI(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bf7d4a30ffb4ef3fcaff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMzk5ZDkxZTA2MmM5MjQ3ZGJhNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFlBQVksQ0FBQztBQUcxRCxJQUFNRSxlQUFlO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFFLFFBQWdCQyxNQUFNO0lBQUEsSUFBQUMsUUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQUwsc0VBQUEsVUFBQU8sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRWZDLEtBQUssbURBQUFDLE1BQUEsQ0FDMEJULE1BQU0sNEJBQy9ELENBQUM7UUFBQTtVQUZRQyxRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBTCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdLTixRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUJULElBQUksR0FBQUcsUUFBQSxDQUFBSyxJQUFBO1VBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxJQUFJLENBQUM7O1VBRWpCO1VBQ0FULGFBQWEsQ0FBQ3FCLFNBQVMsR0FBR1osSUFBSTtVQUM5QjtVQUNBWixhQUFhLENBQUN5QixlQUFlLENBQUMsUUFBUSxDQUFDO1VBQUNWLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQVcsRUFBQSxHQUFBWCxRQUFBO1VBR3hDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBVyxFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQVgsUUFBQSxDQUFBWSxJQUFBO01BQUE7SUFBQSxHQUFBbEIsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBakJLTCxlQUFlQSxDQUFBd0IsRUFBQTtJQUFBLE9BQUF2QixJQUFBLENBQUF3QixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBaUJwQjtBQUVEMUIsZUFBZSxDQUFDTCxrREFBTSxDQUFDZ0MsYUFBYSxDQUFDOzs7Ozs7OztVQ3pCckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuY29uc3QgY2l0eU5hbWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5LW5hbWUnKTtcblxuXG5jb25zdCBmZXRjaFdlYXRoZXJBUEkgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5cbiAgICAgICAgLy8gVW5oaWRlIHdlYXRoZXIgbW9kdWxlOlxuICAgICAgICB3ZWF0aGVyTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmZldGNoV2VhdGhlckFQSShjb25maWcuV2VhdGhlckFQSUtleSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiZjdkNGEzMGZmYjRlZjNmY2FmZlwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJ3ZWF0aGVyTW9kdWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2l0eU5hbWVMYWJlbCIsImZldGNoV2VhdGhlckFQSSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIkFQSUtleSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==