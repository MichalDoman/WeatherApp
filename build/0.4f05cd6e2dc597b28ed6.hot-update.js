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
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, newLi;
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
            dayName = getForecastDay(day.date);
            avgTemp = day.day.avgtemp_c;
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/snow.svg\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
            forcastList.append(newLi);
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
/******/ 	__webpack_require__.h = () => ("1f5d3d8da8c0d3fe1d79")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzs7Ozs7Ozs7VUNsRWxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ05pZWR6aWVsYScsICdQb25pZWR6aWHFgmVrJywgJ1d0b3JlaycsICfFmnJvZGEnLCAnQ3p3YXJ0ZWsnLCAnUGnEhXRlaycsICdTb2JvdGEnXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QgbGknKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBmb3JlY2FzdERheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIG5ld0xpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3Nub3cuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIGZvcmNhc3RMaXN0LmFwcGVuZChuZXdMaSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZjVkM2Q4ZGE4YzBkM2ZlMWQ3OVwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImNyZWF0ZU1vZHVsZSIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIkFQSUtleSIsInJlc3BvbnNlIiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImkiLCJkYXkiLCJkYXlOYW1lIiwiYXZnVGVtcCIsIm5ld0xpIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiYXZndGVtcF9jIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImZvcmNhc3RMaXN0IiwiYXBwZW5kIiwidDAiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9