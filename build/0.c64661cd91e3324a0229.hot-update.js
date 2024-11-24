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
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i;
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
          for (i = 0; i < forecastDays.length; i++) {}
          console.log(forecastDays);

          // Update HTML:
          container.append(module);
          _context.next = 30;
          break;
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
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
/******/ 	__webpack_require__.h = () => ("75eb38744d4a9f841947")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxHQUFHLE1BQU07O1VBRXpEO1VBQ012QixZQUFZLEdBQUdSLElBQUksQ0FBQ2dDLFFBQVEsQ0FBQ0MsV0FBVztVQUM5QyxLQUFVeEIsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxZQUFZLENBQUMwQixNQUFNLEVBQUV6QixDQUFDLEVBQUUsRUFBRSxDQUUvQztVQUVBVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osWUFBWSxDQUFDOztVQUd6QjtVQUNBM0IsU0FBUyxDQUFDc0QsTUFBTSxDQUFDbEMsTUFBTSxDQUFDO1VBQUNXLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQXdCLEVBQUEsR0FBQXhCLFFBQUE7VUFHekJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBUixRQUFBLENBQUF3QixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXhCLFFBQUEsQ0FBQXlCLElBQUE7TUFBQTtJQUFBLEdBQUF4QyxPQUFBO0VBQUEsQ0FHMUI7RUFBQSxnQkExQ0tMLFlBQVlBLENBQUE4QyxFQUFBO0lBQUEsT0FBQTdDLElBQUEsQ0FBQThDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0EwQ2pCO0FBRURoRCxZQUFZLENBQUNaLGtEQUFNLENBQUM2RCxhQUFhLENBQUM7Ozs7Ozs7O1VDekRsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydOaWVkemllbGEnLCAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJ107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX2ZvcmVjYXN0IGxpJyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdERheXMpO1xuXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1ZWIzODc0NGQ0YTlmODQxOTQ3XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiY3JlYXRlTW9kdWxlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiaSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImFwcGVuZCIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==