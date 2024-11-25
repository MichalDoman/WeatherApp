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
var addCityBtn = document.querySelector('#add-city');
var formTemplate = document.querySelector('.module__form');
var moduleTemplate = document.querySelector('.module__weather');
var getForecastDay = function getForecastDay(currentDate) {
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
    var city,
      response,
      data,
      module,
      cityNameLabel,
      temperatureLabel,
      pressureLabel,
      humidityLabel,
      windSpeedLabel,
      forecastList,
      forecastDays,
      i,
      day,
      dayName,
      avgTemp,
      icon,
      newLi,
      closeBtn,
      _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          city = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "auto:ip";
          _context2.prev = 1;
          _context2.next = 4;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=").concat(city, "&days=5\n        "));
        case 4:
          response = _context2.sent;
          _context2.next = 7;
          return response.json();
        case 7:
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
        case 24:
          if (!(i < forecastDays.length)) {
            _context2.next = 37;
            break;
          }
          day = forecastDays[i];
          dayName = getForecastDay(day.date);
          avgTemp = day.day.avgtemp_c;
          _context2.next = 30;
          return getDayConditionIcon(day.day.condition.code);
        case 30:
          icon = _context2.sent;
          newLi = document.createElement('li');
          newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/").concat(icon, "\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
          forecastList.append(newLi);
        case 34:
          i++;
          _context2.next = 24;
          break;
        case 37:
          // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context2.next = 45;
          break;
        case 42:
          _context2.prev = 42;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 45:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 42]]);
  }));
  return function createModule(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getFormModule = function getFormModule() {
  var formModule = formTemplate.cloneNode(true);
  formModule.removeAttribute('hidden');
  addCityBtn.disabled = true;

  // Close button functionality:
  var closeBtn = formModule.querySelector('.btn--close');
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('.module__form').remove();
    addCityBtn.disabled = false;
  });

  // Submit button functionality

  container.prepend(formModule);
};
var main = /*#__PURE__*/function () {
  var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          addCityBtn.addEventListener('click', function (e) {
            e.preventDefault();
            getFormModule();
          });
          createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function main() {
    return _ref3.apply(this, arguments);
  };
}();
main();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95a8c37de0b9b427e4d9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQ3dCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7SUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDdkYsVUFBVSxDQUFDMkYsUUFBUSxHQUFHLEtBQUs7RUFDL0IsQ0FBQyxDQUFDOztFQUVGOztFQUdBOUYsU0FBUyxDQUFDK0YsT0FBTyxDQUFDRixVQUFVLENBQUM7QUFDakMsQ0FBQztBQUVELElBQU1HLElBQUk7RUFBQSxJQUFBQyxLQUFBLEdBQUFsRixtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFrRixTQUFBO0lBQUEsT0FBQWxGLHNFQUFBLFVBQUFtRixVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFFLElBQUEsR0FBQTBFLFNBQUEsQ0FBQXpFLElBQUE7UUFBQTtVQUNUeEIsVUFBVSxDQUFDa0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztZQUN4Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNsQkssYUFBYSxDQUFDLENBQUM7VUFDbkIsQ0FBQyxDQUFDO1VBRUZsRCxZQUFZLENBQUMzQyxrREFBTSxDQUFDc0csYUFBYSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFELFNBQUEsQ0FBQTlELElBQUE7TUFBQTtJQUFBLEdBQUE0RCxRQUFBO0VBQUEsQ0FDdEM7RUFBQSxnQkFQS0YsSUFBSUEsQ0FBQTtJQUFBLE9BQUFDLEtBQUEsQ0FBQXpELEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FPVDtBQUVEdUQsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O1VDbkhOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBhZGRDaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JylcbmNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKVxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gIGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSlcblxuICAgICAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ljb259XCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgZm9yZWNhc3RMaXN0LmFwcGVuZChuZXdMaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgZXZlbnRzIGZvciBidXR0b25zOlxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX193ZWF0aGVyJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEZvcm1Nb2R1bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybU1vZHVsZSA9IGZvcm1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZm9ybU1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgLy8gQ2xvc2UgYnV0dG9uIGZ1bmN0aW9uYWxpdHk6XG4gICAgY29uc3QgY2xvc2VCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX2Zvcm0nKS5yZW1vdmUoKTtcbiAgICAgICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gU3VibWl0IGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG5cblxuICAgIGNvbnRhaW5lci5wcmVwZW5kKGZvcm1Nb2R1bGUpO1xufVxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIGFkZENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdldEZvcm1Nb2R1bGUoKTtcbiAgICB9KVxuXG4gICAgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbn1cblxubWFpbigpXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1YThjMzdkZTBiOWI0MjdlNGQ5XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZENpdHlCdG4iLCJmb3JtVGVtcGxhdGUiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImdldERheUNvbmRpdGlvbkljb24iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb2RlIiwicmVzcG9uc2UiLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImNvbmRpdGlvbkl0ZW0iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImZpbmQiLCJpdGVtIiwiYWJydXB0IiwiaWNvbiIsInQwIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsIkFQSUtleSIsImNpdHkiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiaSIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwibmV3TGkiLCJjbG9zZUJ0biIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiX3gyIiwiZ2V0Rm9ybU1vZHVsZSIsImZvcm1Nb2R1bGUiLCJkaXNhYmxlZCIsInByZXBlbmQiLCJtYWluIiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9