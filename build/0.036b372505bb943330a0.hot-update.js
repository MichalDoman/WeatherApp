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
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";
          // Forecast:

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
/******/ 	__webpack_require__.h = () => ("5fbf65606808ec7dd107")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMzZiMzcyNTA1YmI5NDMzMzBhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUMzRCxJQUFNRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMscUJBQXFCLENBQUM7QUFDdEUsSUFBTUcsYUFBYSxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNSSxhQUFhLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBQ2hFLElBQU1LLGNBQWMsR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7QUFHbkUsSUFBTU0sZUFBZTtFQUFBLElBQUFDLElBQUEsR0FBQUMsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBRSxRQUFnQkMsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQTtJQUFBLE9BQUFMLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVmQyxLQUFLLG1EQUFBQyxNQUFBLENBQzBCVCxNQUFNLDRCQUMvRCxDQUFDO1FBQUE7VUFGUUMsUUFBUSxHQUFBSSxRQUFBLENBQUFLLElBQUE7VUFBQUwsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FHS04sUUFBUSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCVCxJQUFJLEdBQUFHLFFBQUEsQ0FBQUssSUFBQTtVQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDOztVQUVqQjtVQUNBYixhQUFhLENBQUN5QixTQUFTLEdBQUdaLElBQUksQ0FBQ2EsUUFBUSxDQUFDQyxJQUFJO1VBQzVDMUIsZ0JBQWdCLENBQUN3QixTQUFTLEdBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNO1VBQ2hEM0IsYUFBYSxDQUFDdUIsU0FBUyxHQUFHWixJQUFJLENBQUNlLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHLE1BQU07VUFDM0QzQixhQUFhLENBQUNzQixTQUFTLEdBQUdaLElBQUksQ0FBQ2UsT0FBTyxDQUFDRyxRQUFRLEdBQUcsR0FBRztVQUNyRDNCLGNBQWMsQ0FBQ3FCLFNBQVMsR0FBR1osSUFBSSxDQUFDZSxPQUFPLENBQUNJLFFBQVEsR0FBRyxNQUFNO1VBQ3pEOztVQUVBO1VBQ0FuQyxhQUFhLENBQUNvQyxlQUFlLENBQUMsUUFBUSxDQUFDO1VBQUNqQixRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFrQixFQUFBLEdBQUFsQixRQUFBO1VBR3hDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBa0IsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFsQixRQUFBLENBQUFtQixJQUFBO01BQUE7SUFBQSxHQUFBekIsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBdkJLTCxlQUFlQSxDQUFBK0IsRUFBQTtJQUFBLE9BQUE5QixJQUFBLENBQUErQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBdUJwQjtBQUVEakMsZUFBZSxDQUFDVCxrREFBTSxDQUFDMkMsYUFBYSxDQUFDOzs7Ozs7OztVQ25DckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuY29uc3QgY2l0eU5hbWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG5jb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuY29uc3QgcHJlc3N1cmVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbmNvbnN0IGh1bWlkaXR5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG5jb25zdCB3aW5kU3BlZWRMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuXG5cbmNvbnN0IGZldGNoV2VhdGhlckFQSSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuICAgICAgICAvLyBGb3JlY2FzdDpcblxuICAgICAgICAvLyBVbmhpZGUgd2VhdGhlciBtb2R1bGU6XG4gICAgICAgIHdlYXRoZXJNb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuZmV0Y2hXZWF0aGVyQVBJKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVmYmY2NTYwNjgwOGVjN2RkMTA3XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIndlYXRoZXJNb2R1bGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmZXRjaFdlYXRoZXJBUEkiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJBUElLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwicmVtb3ZlQXR0cmlidXRlIiwidDAiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9