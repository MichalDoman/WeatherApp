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
var cityNameLabel = document.querySelector('.city__name');
var temperatureLabel = document.querySelector('.temperature__value');
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
          temperatureLabel.innerText = data.
          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
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
/******/ 	__webpack_require__.h = () => ("ddfd3406200e30d8ab9e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NzNmNzg2NjU4MGFiNGU3NDE5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFHdEUsSUFBTUcsZUFBZTtFQUFBLElBQUFDLElBQUEsR0FBQUMsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBRSxRQUFnQkMsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVmQyxLQUFLLG1EQUFBQyxNQUFBLENBQzBCVCxNQUFNLDRCQUMvRCxDQUFDO1FBQUE7VUFGUUMsUUFBUSxHQUFBSSxRQUFBLENBQUFLLElBQUE7VUFBQUwsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FHS04sUUFBUSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCVCxJQUFJLEdBQUFHLFFBQUEsQ0FBQUssSUFBQTtVQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDOztVQUVqQjtVQUNBVixhQUFhLENBQUNzQixTQUFTLEdBQUdaLElBQUksQ0FBQ2EsUUFBUSxDQUFDQyxJQUFJO1VBQzVDdkIsZ0JBQWdCLENBQUNxQixTQUFTLEdBQUdaLElBQUk7VUFFakM7VUFDQWIsYUFBYSxDQUFDNEIsZUFBZSxDQUFDLFFBQVEsQ0FBQztVQUFDWixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFhLEVBQUEsR0FBQWIsUUFBQTtVQUd4Q08sT0FBTyxDQUFDQyxHQUFHLENBQUFSLFFBQUEsQ0FBQWEsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFiLFFBQUEsQ0FBQWMsSUFBQTtNQUFBO0lBQUEsR0FBQXBCLE9BQUE7RUFBQSxDQUcxQjtFQUFBLGdCQW5CS0wsZUFBZUEsQ0FBQTBCLEVBQUE7SUFBQSxPQUFBekIsSUFBQSxDQUFBMEIsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQW1CcEI7QUFFRDVCLGVBQWUsQ0FBQ04sa0RBQU0sQ0FBQ21DLGFBQWEsQ0FBQzs7Ozs7Ozs7VUM1QnJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcbmNvbnN0IGNpdHlOYW1lTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcblxuXG5jb25zdCBmZXRjaFdlYXRoZXJBUEkgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5cblxuICAgICAgICAvLyBVbmhpZGUgd2VhdGhlciBtb2R1bGU6XG4gICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuZmV0Y2hXZWF0aGVyQVBJKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRkZmQzNDA2MjAwZTMwZDhhYjllXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIndlYXRoZXJNb2R1bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsImZldGNoV2VhdGhlckFQSSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIkFQSUtleSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsInJlbW92ZUF0dHJpYnV0ZSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==