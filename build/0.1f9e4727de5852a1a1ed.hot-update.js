"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var createModule = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n        "));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          console.log(data);
          module = moduleTemplate.cloneNode(true);
          module.removeAttribute('hidden');

          // Get necessary elements:
          cityNameLabel = module.querySelector('.city__name');
          temperatureLabel = module.querySelector('.temperature__value');
          pressureLabel = module.querySelector('.pressure__value');
          humidityLabel = module.querySelector('.humidity__value');
          windSpeedLabel = module.querySelector('.wind-speed__value');
          forecastList = module.querySelectorAll('.weather__forecast li'); // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";

          // Forecast:
          forecastDays = data.forecast.forecastday;
          for (i = 0; i < forecastDays.length; i++) {
            day = forecastDays[i];
            dayName = getForecastDay(day.data);
          }

          // Update HTML:
          container.append(module);
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 26]]);
  }));
  return function createModule(_x) {
    return _ref.apply(this, arguments);
  };
}();
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0dca2461422bf96fd724")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQzZCLE9BQU8sQ0FBQ0ksUUFBUSxHQUFHLE1BQU07O1VBRXpEO1VBQ016QixZQUFZLEdBQUdSLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQ0MsV0FBVztVQUM5QyxLQUFVMUIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxZQUFZLENBQUM0QixNQUFNLEVBQUUzQixDQUFDLEVBQUUsRUFBRTtZQUNyQ0MsR0FBRyxHQUFHRixZQUFZLENBQUNDLENBQUMsQ0FBQztZQUNyQkUsT0FBTyxHQUFHMUIsY0FBYyxDQUFDeUIsR0FBRyxDQUFDVixJQUFJLENBQUM7VUFDNUM7O1VBRUE7VUFDQW5CLFNBQVMsQ0FBQ3dELE1BQU0sQ0FBQ3BDLE1BQU0sQ0FBQztVQUFDYSxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUF3QixFQUFBLEdBQUF4QixRQUFBO1VBR3pCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBd0IsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUF4QixRQUFBLENBQUF5QixJQUFBO01BQUE7SUFBQSxHQUFBMUMsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBeENLTCxZQUFZQSxDQUFBZ0QsRUFBQTtJQUFBLE9BQUEvQyxJQUFBLENBQUFnRCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBd0NqQjtBQUVEbEQsWUFBWSxDQUFDWixrREFBTSxDQUFDK0QsYUFBYSxDQUFDOzs7Ozs7OztVQ3ZEbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTmllZHppZWxhJywgJ1BvbmllZHppYcWCZWsnLCAnV3RvcmVrJywgJ8Wacm9kYScsICdDendhcnRlaycsICdQacSFdGVrJywgJ1NvYm90YSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyX19mb3JlY2FzdCBsaScpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5jcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGRjYTI0NjE0MjJiZjk2ZmQ3MjRcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJjcmVhdGVNb2R1bGUiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJBUElLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImFwcGVuZCIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==