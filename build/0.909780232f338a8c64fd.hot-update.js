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
          // forecastList.forEach((el) => console.log(el))

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
console.log(new Date('2024-11-23').getDay());
fetchWeatherAPI(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d50c3651968cd2807ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCB3ZWF0aGVyTW9kdWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5jb25zdCBjaXR5TmFtZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbmNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG5jb25zdCBwcmVzc3VyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuY29uc3QgaHVtaWRpdHlMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbmNvbnN0IHdpbmRTcGVlZExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG5jb25zdCBmb3JlY2FzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QgbGknKTtcblxuY29uc3QgZmV0Y2hXZWF0aGVyQVBJID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICAvLyBmb3JlY2FzdExpc3QuZm9yRWFjaCgoZWwpID0+IGNvbnNvbGUubG9nKGVsKSlcblxuICAgICAgICAvLyBVbmhpZGUgd2VhdGhlciBtb2R1bGU6XG4gICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY29uc29sZS5sb2cobmV3IERhdGUoJzIwMjQtMTEtMjMnKS5nZXREYXkoKSk7XG5mZXRjaFdlYXRoZXJBUEkoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmQ1MGMzNjUxOTY4Y2QyODA3ZWFcIikiXSwibmFtZXMiOlsiY29uZmlnIiwid2VhdGhlck1vZHVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmZXRjaFdlYXRoZXJBUEkiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJBUElLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwicmVtb3ZlQXR0cmlidXRlIiwidDAiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIkRhdGUiLCJnZXREYXkiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==