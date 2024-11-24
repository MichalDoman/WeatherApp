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
var pressureLabel = document.querySelector('.pressure__value');
var humidityLabel = document.querySelector('.humidity__value');
var windSpeedLabel = document.querySelector('.wind-speed__value');
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
          pressureLabel.innerText = data.current.pressure_mb + "hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + "kph";

          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
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
/******/ 	__webpack_require__.h = () => ("fee95c597acaaad69c61")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYmI4MTI4ZDNhNGVlNzMyYmFlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDdEUsSUFBTUcsYUFBYSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNSSxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ2hFLElBQU1LLGNBQWMsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFHbkUsSUFBTU0sZUFBZTtFQUFBLElBQUFDLElBQUEsR0FBQUMsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBRSxRQUFnQkMsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVmQyxLQUFLLG1EQUFBQyxNQUFBLENBQzBCVCxNQUFNLDRCQUMvRCxDQUFDO1FBQUE7VUFGUUMsUUFBUSxHQUFBSSxRQUFBLENBQUFLLElBQUE7VUFBQUwsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FHS04sUUFBUSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCVCxJQUFJLEdBQUFHLFFBQUEsQ0FBQUssSUFBQTtVQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDOztVQUVqQjtVQUNBYixhQUFhLENBQUN5QixTQUFTLEdBQUdaLElBQUksQ0FBQ2EsUUFBUSxDQUFDQyxJQUFJO1VBQzVDMUIsZ0JBQWdCLENBQUN3QixTQUFTLEdBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNO1VBQ2hEM0IsYUFBYSxDQUFDdUIsU0FBUyxHQUFHWixJQUFJLENBQUNlLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHLEtBQUs7VUFDMUQzQixhQUFhLENBQUNzQixTQUFTLEdBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDRyxRQUFRLEdBQUcsR0FBRztVQUNyRDNCLGNBQWMsQ0FBQ3FCLFNBQVMsR0FBR1osSUFBSSxDQUFDZSxPQUFPLENBQUNJLFFBQVEsR0FBRyxLQUFLOztVQUV4RDtVQUNBbkMsYUFBYSxDQUFDb0MsZUFBZSxDQUFDLFFBQVEsQ0FBQztVQUFDakIsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBa0IsRUFBQSxHQUFBbEIsUUFBQTtVQUd4Q08sT0FBTyxDQUFDQyxHQUFHLENBQUFSLFFBQUEsQ0FBQWtCLEVBQU0sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBbEIsUUFBQSxDQUFBbUIsSUFBQTtNQUFBO0lBQUEsR0FBQXpCLE9BQUE7RUFBQSxDQUcxQjtFQUFBLGdCQXRCS0wsZUFBZUEsQ0FBQStCLEVBQUE7SUFBQSxPQUFBOUIsSUFBQSxDQUFBK0IsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQXNCcEI7QUFFRGpDLGVBQWUsQ0FBQ1Qsa0RBQU0sQ0FBQzJDLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNsQ3JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IHdlYXRoZXJNb2R1bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcbmNvbnN0IGNpdHlOYW1lTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbmNvbnN0IHByZXNzdXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG5jb25zdCBodW1pZGl0eUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcblxuXG5jb25zdCBmZXRjaFdlYXRoZXJBUEkgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcImtwaFwiXG5cbiAgICAgICAgLy8gVW5oaWRlIHdlYXRoZXIgbW9kdWxlOlxuICAgICAgICB3ZWF0aGVyTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmZldGNoV2VhdGhlckFQSShjb25maWcuV2VhdGhlckFQSUtleSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZWU5NWM1OTdhY2FhYWQ2OWM2MVwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJ3ZWF0aGVyTW9kdWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZmV0Y2hXZWF0aGVyQVBJIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsInJlbW92ZUF0dHJpYnV0ZSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==