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
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, icon, newLi, closeBtn;
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
          i = 0;
        case 23:
          if (!(i < forecastDays.length)) {
            _context2.next = 36;
            break;
          }
          day = forecastDays[i];
          dayName = getForecastDay(day.date);
          avgTemp = day.day.avgtemp_c;
          _context2.next = 29;
          return getDayConditionIcon(day.day.condition.code);
        case 29:
          icon = _context2.sent;
          newLi = document.createElement('li');
          newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/").concat(icon, "\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
          forecastList.append(newLi);
        case 33:
          i++;
          _context2.next = 23;
          break;
        case 36:
          // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context2.next = 44;
          break;
        case 41:
          _context2.prev = 41;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 44:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 41]]);
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
/******/ 	__webpack_require__.h = () => ("f8e8d23a1293354e31e7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGtCQUFrQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1VBQ2pELENBQUMsQ0FBQzs7VUFFRjtVQUNBckYsU0FBUyxDQUFDK0UsTUFBTSxDQUFDbEMsTUFBTSxDQUFDO1VBQUNlLFNBQUEsQ0FBQW5DLElBQUE7VUFBQTtRQUFBO1VBQUFtQyxTQUFBLENBQUFwQyxJQUFBO1VBQUFvQyxTQUFBLENBQUEzQixFQUFBLEdBQUEyQixTQUFBO1VBR3pCMUIsT0FBTyxDQUFDQyxHQUFHLENBQUF5QixTQUFBLENBQUEzQixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQTJCLFNBQUEsQ0FBQXhCLElBQUE7TUFBQTtJQUFBLEdBQUFNLFFBQUE7RUFBQSxDQUUxQjtFQUFBLGdCQTFES0YsWUFBWUEsQ0FBQThDLEdBQUE7SUFBQSxPQUFBN0MsS0FBQSxDQUFBSCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBMERqQjtBQUlEQyxZQUFZLENBQUN6QyxrREFBTSxDQUFDd0YsYUFBYSxDQUFDOzs7Ozs7OztVQ3ZGbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTmllZHppZWxhJywgJ1BvbmllZHppYcWCZWsnLCAnV3RvcmVrJywgJ8Wacm9kYScsICdDendhcnRlaycsICdQacSFdGVrJywgJ1NvYm90YSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gIGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSlcblxuICAgICAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ljb259XCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgZm9yZWNhc3RMaXN0LmFwcGVuZChuZXdMaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgZXZlbnRzIGZvciBidXR0b25zOlxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX193ZWF0aGVyJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cblxuXG5jcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjhlOGQyM2ExMjkzMzU0ZTMxZTdcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJjb25kaXRpb25JdGVtIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImFicnVwdCIsImljb24iLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZU1vZHVsZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJBUElLZXkiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiaSIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwibmV3TGkiLCJjbG9zZUJ0biIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiX3gyIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=