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
var forecastList = document.querySelectorAll('.weather__forecast li');
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
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";
          // Forecast:
          forecastList.forEach(function (el) {
            return console.log(el);
          });

          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 20;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
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
/******/ 	__webpack_require__.h = () => ("142d5f7f574cc2bdae9c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCB3ZWF0aGVyTW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5jb25zdCBjaXR5TmFtZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbmNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG5jb25zdCBwcmVzc3VyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuY29uc3QgaHVtaWRpdHlMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbmNvbnN0IHdpbmRTcGVlZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG5jb25zdCBmb3JlY2FzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QgbGknKTtcblxuY29uc3QgZmV0Y2hXZWF0aGVyQVBJID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBmb3JlY2FzdExpc3QuZm9yRWFjaCgoZWwpID0+IGNvbnNvbGUubG9nKGVsKSlcblxuICAgICAgICAvLyBVbmhpZGUgd2VhdGhlciBtb2R1bGU6XG4gICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuZmV0Y2hXZWF0aGVyQVBJKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0MmQ1ZjdmNTc0Y2MyYmRhZTljXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIndlYXRoZXJNb2R1bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmV0Y2hXZWF0aGVyQVBJIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvckVhY2giLCJlbCIsInJlbW92ZUF0dHJpYnV0ZSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==