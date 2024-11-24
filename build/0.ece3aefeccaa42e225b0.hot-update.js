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
var getForecastDay = function getForecastDay(currentDate) {
  var daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  var date = new Date(currentDate);
  var dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};
var fetchWeatherAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data, forecastDays;
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
          forecastDays = data.forecast.forecastday;
          console.log(forecastDays);

          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 21;
          break;
        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 18]]);
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
/******/ 	__webpack_require__.h = () => ("bf5a9e31fffa51d6ec6b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXBCLFFBQUE7VUFHeENPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBUixRQUFBLENBQUFvQixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXBCLFFBQUEsQ0FBQXFCLElBQUE7TUFBQTtJQUFBLEdBQUE1QixPQUFBO0VBQUEsQ0FHMUI7RUFBQSxnQkF6QktMLGVBQWVBLENBQUFrQyxFQUFBO0lBQUEsT0FBQWpDLElBQUEsQ0FBQWtDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0F5QnBCO0FBRURwQyxlQUFlLENBQUNsQixrREFBTSxDQUFDdUQsYUFBYSxDQUFDOzs7Ozs7OztVQzdDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuY29uc3QgY2l0eU5hbWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG5jb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuY29uc3QgcHJlc3N1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbmNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG5jb25zdCB3aW5kU3BlZWRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuY29uc3QgZm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX2ZvcmVjYXN0IGxpJyk7XG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTmllZHppZWxhJywgJ1BvbmllZHppYcWCZWsnLCAnV3RvcmVrJywgJ8Wacm9kYScsICdDendhcnRlaycsICdQacSFdGVrJywgJ1NvYm90YSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBmZXRjaFdlYXRoZXJBUEkgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXlzKTtcblxuICAgICAgICAvLyBVbmhpZGUgd2VhdGhlciBtb2R1bGU6XG4gICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuZmV0Y2hXZWF0aGVyQVBJKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJmNWE5ZTMxZmZmYTUxZDZlYzZiXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIndlYXRoZXJNb2R1bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZmV0Y2hXZWF0aGVyQVBJIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwiZm9yZWNhc3REYXlzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=