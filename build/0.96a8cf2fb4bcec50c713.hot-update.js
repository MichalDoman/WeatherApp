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
var getDayConditionIcon = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(code) {
    var response, weatherConditions, conditionItem, icon;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("../weather_conditions.json");
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          weatherConditions = _context.sent;
          conditionItem = weatherConditions.find(function (item) {
            return item.code === code;
          });
          icon = conditionItem.icon;
          console.log(icon);
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
  return function getDayConditionIcon(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createModule = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, iconCode, newLi;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n        "));
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          console.log(data);
          module = moduleTemplate.cloneNode(true);
          module.removeAttribute('hidden');

          // Get necessary elements:
          cityNameLabel = module.querySelector('.city__name');
          temperatureLabel = module.querySelector('.temperature__value');
          pressureLabel = module.querySelector('.pressure__value');
          humidityLabel = module.querySelector('.humidity__value');
          windSpeedLabel = module.querySelector('.wind-speed__value');
          forecastList = module.querySelector('ul.weather__forecast'); // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";

          // Forecast:
          forecastDays = data.forecast.forecastday;
          for (i = 0; i < forecastDays.length; i++) {
            day = forecastDays[i];
            dayName = getForecastDay(day.date);
            avgTemp = day.day.avgtemp_c;
            iconCode = day.day.condition.code;
            getDayConditionIcon(iconCode);

            // console.log(iconCode)
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/fog.svg\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
            forecastList.append(newLi);
          }

          // Update HTML:
          container.append(module);
          _context2.next = 29;
          break;
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 26]]);
  }));
  return function createModule(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9a2d8e47547e448133d1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQSxnQkF4REtGLFlBQVlBLENBQUF3QyxHQUFBO0lBQUEsT0FBQXZDLEtBQUEsQ0FBQUgsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQXdEakI7QUFFREMsWUFBWSxDQUFDeEMsa0RBQU0sQ0FBQ2lGLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNuRmxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ05pZWR6aWVsYScsICdQb25pZWR6aWHFgmVrJywgJ1d0b3JlaycsICfFmnJvZGEnLCAnQ3p3YXJ0ZWsnLCAnUGnEhXRlaycsICdTb2JvdGEnXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgZ2V0RGF5Q29uZGl0aW9uSWNvbiA9IGFzeW5jIChjb2RlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL3dlYXRoZXJfY29uZGl0aW9ucy5qc29uXCIpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25JdGVtID0gd2VhdGhlckNvbmRpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGNvbmRpdGlvbkl0ZW0uaWNvblxuICAgICAgICBjb25zb2xlLmxvZyhpY29uKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvcigndWwud2VhdGhlcl9fZm9yZWNhc3QnKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBmb3JlY2FzdERheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgY29uc3QgaWNvbkNvZGUgPSBkYXkuZGF5LmNvbmRpdGlvbi5jb2RlXG4gICAgICAgICAgICBnZXREYXlDb25kaXRpb25JY29uKGljb25Db2RlKVxuXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25Db2RlKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIG5ld0xpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2ZvZy5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj4ke2F2Z1RlbXB9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBmb3JlY2FzdExpc3QuYXBwZW5kKG5ld0xpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YTJkOGU0NzU0N2U0NDgxMzNkMVwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImdldERheUNvbmRpdGlvbkljb24iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb2RlIiwicmVzcG9uc2UiLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImNvbmRpdGlvbkl0ZW0iLCJpY29uIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsIkFQSUtleSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJpY29uQ29kZSIsIm5ld0xpIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiX3gyIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=