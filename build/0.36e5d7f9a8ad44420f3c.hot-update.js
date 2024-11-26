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
      elements,
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
          _context3.next = 25;
          return Promise.all(forecastDays.map(/*#__PURE__*/function () {
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
                    return _context2.abrupt("return", "\n\n                <li>\n                    <span class=\"day\">".concat(dayName, "</span> \n                    <img src=\"assets/icons/").concat(icon, "\" alt=\"Weather icon\"/>\n                    <span class=\"temperature\">\n                        <span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C\n                    </span>        \n                </li>"));
                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 25:
          elements = _context3.sent;
          console.log(elements);
          forecastList.innerHTML = elements.join('');

          // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context3.next = 36;
          break;
        case 33:
          _context3.prev = 33;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 36:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 33]]);
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
/******/ 	__webpack_require__.h = () => ("3f279f08305afc7d94db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBhZGRDaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JylcbmNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKVxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKGZvcmVjYXN0RGF5cy5tYXAoYXN5bmMgKGRheSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGdldEZvcmVjYXN0RGF5KGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF2Z1RlbXAgPSBkYXkuZGF5LmF2Z3RlbXBfYztcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBhd2FpdCBnZXREYXlDb25kaXRpb25JY29uKGRheS5kYXkuY29uZGl0aW9uLmNvZGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gYFxuXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ljb259XCIgYWx0PVwiV2VhdGhlciBpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgICAgfSkpXG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnRzKTtcbiAgICAgICAgZm9yZWNhc3RMaXN0LmlubmVySFRNTCA9IGVsZW1lbnRzLmpvaW4oJycpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudHMgZm9yIGJ1dHRvbnM6XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX3dlYXRoZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0Rm9ybU1vZHVsZSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtTW9kdWxlID0gZm9ybVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBmb3JtTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAvLyBDbG9zZSBidXR0b24gZnVuY3Rpb25hbGl0eTpcbiAgICBjb25zdCBjbG9zZUJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBTdWJtaXQgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gYnV0dG9uJyk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXksIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsaWNrKClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiV3JvbmcgY2l0eSBuYW1lIVwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLnByZXBlbmQoZm9ybU1vZHVsZSk7XG59XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgYWRkQ2l0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0Rm9ybU1vZHVsZSgpO1xuICAgIH0pXG5cbiAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xufVxuXG5hd2FpdCBtYWluKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZjI3OWYwODMwNWFmYzdkOTRkYlwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRDaXR5QnRuIiwiZm9ybVRlbXBsYXRlIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJjb25kaXRpb25JdGVtIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImFicnVwdCIsImljb24iLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZU1vZHVsZSIsIl9yZWYyIiwiX2NhbGxlZTMiLCJBUElLZXkiLCJjaXR5IiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImVsZW1lbnRzIiwiY2xvc2VCdG4iLCJfYXJnczMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb25jYXQiLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJfcmVmMyIsIl9jYWxsZWUyIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJfeDMiLCJpbm5lckhUTUwiLCJqb2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJhcHBlbmQiLCJfeDIiLCJnZXRGb3JtTW9kdWxlIiwiZm9ybU1vZHVsZSIsImRpc2FibGVkIiwic3VibWl0QnRuIiwiaW5wdXQiLCJfcmVmNCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiV2VhdGhlckFQSUtleSIsInZhbHVlIiwiY2xpY2siLCJhbGVydCIsIl94NCIsInByZXBlbmQiLCJtYWluIiwiX3JlZjUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSJdLCJzb3VyY2VSb290IjoiIn0=