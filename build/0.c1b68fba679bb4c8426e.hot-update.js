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
          i = 0;
        case 23:
          if (!(i < forecastDays.length)) {
            _context2.next = 37;
            break;
          }
          day = forecastDays[i];
          dayName = getForecastDay(day.date);
          avgTemp = day.day.avgtemp_c;
          _context2.next = 29;
          return getDayConditionIcon(day.day.condition.code);
        case 29:
          icon = _context2.sent;
          console.log(icon);
          newLi = document.createElement('li');
          newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/").concat(icon, "\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
          forecastList.append(newLi);
        case 34:
          i++;
          _context2.next = 23;
          break;
        case 37:
          // Update HTML:
          container.append(module);
          _context2.next = 43;
          break;
        case 40:
          _context2.prev = 40;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 43:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 40]]);
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
/******/ 	__webpack_require__.h = () => ("a128297fcab4a3e4d0a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMWI2OGZiYTY3OWJiNGM4NDI2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztBQUM3RCxJQUFNQyxjQUFjLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0FBRWpFLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBSUMsV0FBVyxFQUFLO0VBQ3BDLElBQU1DLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztFQUNuRyxJQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDSCxXQUFXLENBQUM7RUFDbEMsSUFBTUksUUFBUSxHQUFHRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0VBRTlCLE9BQU9KLFVBQVUsQ0FBQ0csUUFBUSxDQUFDO0FBQy9CLENBQUM7QUFFRCxJQUFNRSxtQkFBbUI7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGNBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBT0MsSUFBSTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsaUJBQUEsRUFBQUMsYUFBQTtJQUFBLE9BQUFOLHNFQUFBLFVBQUFRLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVSQyxLQUFLLENBQUMsNEJBQTRCLENBQUM7UUFBQTtVQUFwRFIsUUFBUSxHQUFBSyxRQUFBLENBQUFJLElBQUE7VUFBQUosUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FDa0JQLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUF6Q1QsaUJBQWlCLEdBQUFJLFFBQUEsQ0FBQUksSUFBQTtVQUNqQlAsYUFBYSxHQUFHRCxpQkFBaUIsQ0FBQ1UsSUFBSSxDQUFDLFVBQUNDLElBQUk7WUFBQSxPQUFLQSxJQUFJLENBQUNiLElBQUksS0FBS0EsSUFBSTtVQUFBLEVBQUM7VUFBQSxPQUFBTSxRQUFBLENBQUFRLE1BQUEsV0FFbkVYLGFBQWEsQ0FBQ1ksSUFBSTtRQUFBO1VBQUFULFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFVLEVBQUEsR0FBQVYsUUFBQTtVQUV6QlcsT0FBTyxDQUFDQyxHQUFHLENBQUFaLFFBQUEsQ0FBQVUsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFWLFFBQUEsQ0FBQWEsSUFBQTtNQUFBO0lBQUEsR0FBQXBCLE9BQUE7RUFBQSxDQUUxQjtFQUFBLGdCQVZLTCxtQkFBbUJBLENBQUEwQixFQUFBO0lBQUEsT0FBQXpCLElBQUEsQ0FBQTBCLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FVeEI7QUFFRCxJQUFNQyxZQUFZO0VBQUEsSUFBQUMsS0FBQSxHQUFBNUIsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBNEIsU0FBZ0JDLE1BQU07SUFBQSxJQUFBekIsUUFBQSxFQUFBMEIsSUFBQSxFQUFBQyxNQUFBLEVBQUFDLGFBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGNBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBLEVBQUFDLENBQUEsRUFBQUMsR0FBQSxFQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQXhCLElBQUEsRUFBQXlCLEtBQUE7SUFBQSxPQUFBM0Msc0VBQUEsVUFBQTRDLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBbkMsSUFBQSxHQUFBbUMsU0FBQSxDQUFBbEMsSUFBQTtRQUFBO1VBQUFrQyxTQUFBLENBQUFuQyxJQUFBO1VBQUFtQyxTQUFBLENBQUFsQyxJQUFBO1VBQUEsT0FFWkMsS0FBSyxtREFBQWtDLE1BQUEsQ0FDMEJqQixNQUFNLGdDQUMzRCxDQUFDO1FBQUE7VUFGSXpCLFFBQVEsR0FBQXlDLFNBQUEsQ0FBQWhDLElBQUE7VUFBQWdDLFNBQUEsQ0FBQWxDLElBQUE7VUFBQSxPQUdLUCxRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUJnQixJQUFJLEdBQUFlLFNBQUEsQ0FBQWhDLElBQUE7VUFDVk8sT0FBTyxDQUFDQyxHQUFHLENBQUNTLElBQUksQ0FBQztVQUVYQyxNQUFNLEdBQUcxQyxjQUFjLENBQUMwRCxTQUFTLENBQUMsSUFBSSxDQUFDO1VBQzdDaEIsTUFBTSxDQUFDaUIsZUFBZSxDQUFDLFFBQVEsQ0FBQzs7VUFFaEM7VUFDTWhCLGFBQWEsR0FBR0QsTUFBTSxDQUFDM0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztVQUNuRDZDLGdCQUFnQixHQUFHRixNQUFNLENBQUMzQyxhQUFhLENBQUMscUJBQXFCLENBQUM7VUFDOUQ4QyxhQUFhLEdBQUdILE1BQU0sQ0FBQzNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztVQUN4RCtDLGFBQWEsR0FBR0osTUFBTSxDQUFDM0MsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1VBQ3hEZ0QsY0FBYyxHQUFHTCxNQUFNLENBQUMzQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7VUFDM0RpRCxZQUFZLEdBQUdOLE1BQU0sQ0FBQzNDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUVqRTtVQUNBNEMsYUFBYSxDQUFDaUIsU0FBUyxHQUFHbkIsSUFBSSxDQUFDb0IsUUFBUSxDQUFDQyxJQUFJO1VBQzVDbEIsZ0JBQWdCLENBQUNnQixTQUFTLEdBQUduQixJQUFJLENBQUNzQixPQUFPLENBQUNDLE1BQU07VUFDaERuQixhQUFhLENBQUNlLFNBQVMsR0FBR25CLElBQUksQ0FBQ3NCLE9BQU8sQ0FBQ0UsV0FBVyxHQUFHLE1BQU07VUFDM0RuQixhQUFhLENBQUNjLFNBQVMsR0FBR25CLElBQUksQ0FBQ3NCLE9BQU8sQ0FBQ0csUUFBUSxHQUFHLEdBQUc7VUFDckRuQixjQUFjLENBQUNhLFNBQVMsR0FBR25CLElBQUksQ0FBQ3NCLE9BQU8sQ0FBQ0ksUUFBUSxHQUFHLE1BQU07O1VBRXpEO1VBQ01sQixZQUFZLEdBQUdSLElBQUksQ0FBQzJCLFFBQVEsQ0FBQ0MsV0FBVztVQUNwQ25CLENBQUMsR0FBRyxDQUFDO1FBQUE7VUFBQSxNQUFFQSxDQUFDLEdBQUdELFlBQVksQ0FBQ3FCLE1BQU07WUFBQWQsU0FBQSxDQUFBbEMsSUFBQTtZQUFBO1VBQUE7VUFDOUI2QixHQUFHLEdBQUdGLFlBQVksQ0FBQ0MsQ0FBQyxDQUFDO1VBQ3JCRSxPQUFPLEdBQUduRCxjQUFjLENBQUNrRCxHQUFHLENBQUMvQyxJQUFJLENBQUM7VUFDbENpRCxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDb0IsU0FBUztVQUFBZixTQUFBLENBQUFsQyxJQUFBO1VBQUEsT0FDYmQsbUJBQW1CLENBQUMyQyxHQUFHLENBQUNBLEdBQUcsQ0FBQ3FCLFNBQVMsQ0FBQzFELElBQUksQ0FBQztRQUFBO1VBQXpEZSxJQUFJLEdBQUEyQixTQUFBLENBQUFoQyxJQUFBO1VBQ1ZPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7VUFFWHlCLEtBQUssR0FBR3hELFFBQVEsQ0FBQzJFLGFBQWEsQ0FBQyxJQUFJLENBQUM7VUFDMUNuQixLQUFLLENBQUNvQixTQUFTLG9FQUFBakIsTUFBQSxDQUVXTCxPQUFPLHNDQUFBSyxNQUFBLENBQWtDNUIsSUFBSSw2RkFBQTRCLE1BQUEsQ0FDSkosT0FBTyw4REFFekU7VUFFREwsWUFBWSxDQUFDMkIsTUFBTSxDQUFDckIsS0FBSyxDQUFDO1FBQUM7VUFmV0osQ0FBQyxFQUFFO1VBQUFNLFNBQUEsQ0FBQWxDLElBQUE7VUFBQTtRQUFBO1VBa0I3QztVQUNBekIsU0FBUyxDQUFDOEUsTUFBTSxDQUFDakMsTUFBTSxDQUFDO1VBQUNjLFNBQUEsQ0FBQWxDLElBQUE7VUFBQTtRQUFBO1VBQUFrQyxTQUFBLENBQUFuQyxJQUFBO1VBQUFtQyxTQUFBLENBQUExQixFQUFBLEdBQUEwQixTQUFBO1VBR3pCekIsT0FBTyxDQUFDQyxHQUFHLENBQUF3QixTQUFBLENBQUExQixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQTBCLFNBQUEsQ0FBQXZCLElBQUE7TUFBQTtJQUFBLEdBQUFNLFFBQUE7RUFBQSxDQUcxQjtFQUFBLGdCQXJES0YsWUFBWUEsQ0FBQXVDLEdBQUE7SUFBQSxPQUFBdEMsS0FBQSxDQUFBSCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBcURqQjtBQUVEQyxZQUFZLENBQUN6QyxrREFBTSxDQUFDaUYsYUFBYSxDQUFDOzs7Ozs7OztVQ2hGbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnTmllZHppZWxhJywgJ1BvbmllZHppYcWCZWsnLCAnV3RvcmVrJywgJ8Wacm9kYScsICdDendhcnRlaycsICdQacSFdGVrJywgJ1NvYm90YSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gIGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGljb24pXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbmV3TGkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lfTwvc3Bhbj4gPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvJHtpY29ufVwiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgIGZvcmVjYXN0TGlzdC5hcHBlbmQobmV3TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExMjgyOTdmY2FiNGEzZTRkMGE0XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImkiLCJkYXkiLCJkYXlOYW1lIiwiYXZnVGVtcCIsIm5ld0xpIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiX3gyIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=