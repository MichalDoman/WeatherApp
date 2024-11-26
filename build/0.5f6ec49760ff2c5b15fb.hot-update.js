"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(APIKey) {
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
      forecastElements,
      closeBtn,
      _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          city = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "auto:ip";
          _context3.prev = 1;
          _context3.next = 4;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=").concat(city, "&days=5\n        "));
        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.json();
        case 7:
          data = _context3.sent;
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
          forecastElements = Promise.all(forecastDays.map(/*#__PURE__*/function () {
            var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(day) {
              var dayName, avgTemp, icon;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    dayName = getForecastDay(day.date);
                    avgTemp = day.day.avgtemp_c;
                    _context2.next = 4;
                    return getDayConditionIcon(day.day.condition.code);
                  case 4:
                    icon = _context2.sent;
                    return _context2.abrupt("return", "\n                <li>\n                    <span class=\"day\">".concat(dayName, "</span> \n                    <img src=\"assets/icons/").concat(icon, "\" alt=\"Weather icon\"/>\n                    <span class=\"temperature\">\n                        <span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C\n                    </span>        \n                </li>"));
                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }())); // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context3.next = 32;
          break;
        case 29:
          _context3.prev = 29;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 32:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 29]]);
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
  var submitBtn = formModule.querySelector('form button');
  var input = formModule.querySelector('input');
  submitBtn.addEventListener('click', /*#__PURE__*/function () {
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            _context4.prev = 1;
            _context4.next = 4;
            return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey, input.value);
          case 4:
            closeBtn.click();
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            alert("Wrong city name!");
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 7]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  container.prepend(formModule);
};
var main = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          addCityBtn.addEventListener('click', function (e) {
            e.preventDefault();
            getFormModule();
          });
          _context5.next = 3;
          return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function main() {
    return _ref5.apply(this, arguments);
  };
}();
await main();
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6c65548acdb35d1e6a71")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7WUFBQSxPQUFBSixTQUFBLENBQUFuRSxJQUFBO1FBQUE7TUFBQSxHQUFBaUUsUUFBQTtJQUFBLENBR2hDO0lBQUEsaUJBQUFPLEdBQUE7TUFBQSxPQUFBUixLQUFBLENBQUE5RCxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLElBQUM7RUFFRnpDLFNBQVMsQ0FBQytHLE9BQU8sQ0FBQ2IsVUFBVSxDQUFDO0FBQ2pDLENBQUM7QUFFRCxJQUFNYyxJQUFJO0VBQUEsSUFBQUMsS0FBQSxHQUFBbEcsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBa0csU0FBQTtJQUFBLE9BQUFsRyxzRUFBQSxVQUFBbUcsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUExRixJQUFBLEdBQUEwRixTQUFBLENBQUF6RixJQUFBO1FBQUE7VUFDVHhCLFVBQVUsQ0FBQ3NGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7WUFDeENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7WUFDbEJNLGFBQWEsQ0FBQyxDQUFDO1VBQ25CLENBQUMsQ0FBQztVQUFBbUIsU0FBQSxDQUFBekYsSUFBQTtVQUFBLE9BRUllLFlBQVksQ0FBQzNDLGtEQUFNLENBQUMyRyxhQUFhLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQVUsU0FBQSxDQUFBOUUsSUFBQTtNQUFBO0lBQUEsR0FBQTRFLFFBQUE7RUFBQSxDQUMzQztFQUFBLGdCQVBLRixJQUFJQSxDQUFBO0lBQUEsT0FBQUMsS0FBQSxDQUFBekUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQU9UO0FBRUQsTUFBTXVFLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7O1VDN0haIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBhZGRDaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JylcbmNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKVxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBjb25zdCBmb3JlY2FzdEVsZW1lbnRzID0gUHJvbWlzZS5hbGwoZm9yZWNhc3REYXlzLm1hcChhc3luYyAoZGF5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ljb259XCIgYWx0PVwiV2VhdGhlciBpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgICAgfSkpXG5cbiAgICAgICAgLy8gQWRkIGV2ZW50cyBmb3IgYnV0dG9uczpcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fd2VhdGhlcicpLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBnZXRGb3JtTW9kdWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Nb2R1bGUgPSBmb3JtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGZvcm1Nb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIC8vIENsb3NlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5OlxuICAgIGNvbnN0IGNsb3NlQnRuID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX19mb3JtJykucmVtb3ZlKCk7XG4gICAgICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIFN1Ym1pdCBidXR0b24gZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignZm9ybSBidXR0b24nKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSwgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgY2xvc2VCdG4uY2xpY2soKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoXCJXcm9uZyBjaXR5IG5hbWUhXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjb250YWluZXIucHJlcGVuZChmb3JtTW9kdWxlKTtcbn1cblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgICBhZGRDaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRGb3JtTW9kdWxlKCk7XG4gICAgfSlcblxuICAgIGF3YWl0IGNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG59XG5cbmF3YWl0IG1haW4oKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZjNjU1NDhhY2RiMzVkMWU2YTcxXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZENpdHlCdG4iLCJmb3JtVGVtcGxhdGUiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImdldERheUNvbmRpdGlvbkljb24iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb2RlIiwicmVzcG9uc2UiLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImNvbmRpdGlvbkl0ZW0iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImZpbmQiLCJpdGVtIiwiYWJydXB0IiwiaWNvbiIsInQwIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMyIsIkFQSUtleSIsImNpdHkiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiZm9yZWNhc3RFbGVtZW50cyIsImNsb3NlQnRuIiwiX2FyZ3MzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiX3JlZjMiLCJfY2FsbGVlMiIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiX3gzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJhcHBlbmQiLCJfeDIiLCJnZXRGb3JtTW9kdWxlIiwiZm9ybU1vZHVsZSIsImRpc2FibGVkIiwic3VibWl0QnRuIiwiaW5wdXQiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiV2VhdGhlckFQSUtleSIsInZhbHVlIiwiY2xpY2siLCJhbGVydCIsIl94NCIsInByZXBlbmQiLCJtYWluIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSJdLCJzb3VyY2VSb290IjoiIn0=