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
    var response, weatherConditions, conditionItem;
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
          return _context.abrupt("return", conditionItem.icon);
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getDayConditionIcon(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createModule = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, icon, newLi;
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
            icon = getDayConditionIcon(day.day.condition.code); // console.log(iconCode)
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/").concat(icon, "\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
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
/******/ 	__webpack_require__.h = () => ("686ad5ea1fa0ebde0874")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFBSCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBdURqQjtBQUVEQyxZQUFZLENBQUN6QyxrREFBTSxDQUFDaUYsYUFBYSxDQUFDOzs7Ozs7OztVQ2xGbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTmllZHppZWxhJywgJ1BvbmllZHppYcWCZWsnLCAnV3RvcmVrJywgJ8Wacm9kYScsICdDendhcnRlaycsICdQacSFdGVrJywgJ1NvYm90YSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZ2V0RGF5Q29uZGl0aW9uSWNvbihkYXkuZGF5LmNvbmRpdGlvbi5jb2RlKVxuXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGljb25Db2RlKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIG5ld0xpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zLyR7aWNvbn1cIi8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj4ke2F2Z1RlbXB9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBmb3JlY2FzdExpc3QuYXBwZW5kKG5ld0xpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuXG59XG5cbmNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ODZhZDVlYTFmYTBlYmRlMDg3NFwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImdldERheUNvbmRpdGlvbkljb24iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb2RlIiwicmVzcG9uc2UiLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImNvbmRpdGlvbkl0ZW0iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImZpbmQiLCJpdGVtIiwiYWJydXB0IiwiaWNvbiIsInQwIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsIkFQSUtleSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJuZXdMaSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsIl94MiIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9