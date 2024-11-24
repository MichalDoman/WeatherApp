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
var forecastList = document.querySelector('.weather__forecast');
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
          forecastList.
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
/******/ 	__webpack_require__.h = () => ("1dc60ed713533f8f79e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xM2RmMzRiMzcwODk5YmNjZGQ0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDdEUsSUFBTUcsYUFBYSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNSSxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ2hFLElBQU1LLGNBQWMsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFDbkUsSUFBTU0sWUFBWSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztBQUVqRSxJQUFNTyxlQUFlO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFFLFFBQWdCQyxNQUFNO0lBQUEsSUFBQUMsUUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQUwsc0VBQUEsVUFBQU8sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRWZDLEtBQUssbURBQUFDLE1BQUEsQ0FDMEJULE1BQU0sNEJBQy9ELENBQUM7UUFBQTtVQUZRQyxRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBTCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdLTixRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUJULElBQUksR0FBQUcsUUFBQSxDQUFBSyxJQUFBO1VBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxJQUFJLENBQUM7O1VBRWpCO1VBQ0FkLGFBQWEsQ0FBQzBCLFNBQVMsR0FBR1osSUFBSSxDQUFDYSxRQUFRLENBQUNDLElBQUk7VUFDNUMzQixnQkFBZ0IsQ0FBQ3lCLFNBQVMsR0FBR1osSUFBSSxDQUFDZSxPQUFPLENBQUNDLE1BQU07VUFDaEQ1QixhQUFhLENBQUN3QixTQUFTLEdBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDRSxXQUFXLEdBQUcsTUFBTTtVQUMzRDVCLGFBQWEsQ0FBQ3VCLFNBQVMsR0FBR1osSUFBSSxDQUFDZSxPQUFPLENBQUNHLFFBQVEsR0FBRyxHQUFHO1VBQ3JENUIsY0FBYyxDQUFDc0IsU0FBUyxHQUFHWixJQUFJLENBQUNlLE9BQU8sQ0FBQ0ksUUFBUSxHQUFHLE1BQU07VUFDekQ7VUFDQTVCLFlBQVk7VUFFWjtVQUNBUixhQUFhLENBQUNxQyxlQUFlLENBQUMsUUFBUSxDQUFDO1VBQUNqQixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFrQixFQUFBLEdBQUFsQixRQUFBO1VBR3hDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBa0IsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFsQixRQUFBLENBQUFtQixJQUFBO01BQUE7SUFBQSxHQUFBekIsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBeEJLTCxlQUFlQSxDQUFBK0IsRUFBQTtJQUFBLE9BQUE5QixJQUFBLENBQUErQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBd0JwQjtBQUVEakMsZUFBZSxDQUFDVixrREFBTSxDQUFDNEMsYUFBYSxDQUFDOzs7Ozs7OztVQ3BDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuY29uc3QgY2l0eU5hbWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG5jb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuY29uc3QgcHJlc3N1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbmNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG5jb25zdCB3aW5kU3BlZWRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuY29uc3QgZm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbmNvbnN0IGZldGNoV2VhdGhlckFQSSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgZm9yZWNhc3RMaXN0LlxuXG4gICAgICAgIC8vIFVuaGlkZSB3ZWF0aGVyIG1vZHVsZTpcbiAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5mZXRjaFdlYXRoZXJBUEkoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWRjNjBlZDcxMzUzM2Y4Zjc5ZTFcIikiXSwibmFtZXMiOlsiY29uZmlnIiwid2VhdGhlck1vZHVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZldGNoV2VhdGhlckFQSSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIkFQSUtleSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=