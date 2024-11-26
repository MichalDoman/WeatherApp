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
          elements = Promise.all(forecastDays.map(/*#__PURE__*/function () {
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
          _context3.next = 34;
          break;
        case 31:
          _context3.prev = 31;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 31]]);
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
/******/ 	__webpack_require__.h = () => ("36e5d7f9a8ad44420f3c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IGFkZENpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNpdHknKVxuY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpXG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGdldERheUNvbmRpdGlvbkljb24gPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSXRlbSA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkl0ZW0uaWNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5LCBjaXR5PVwiYXV0bzppcFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPSR7Y2l0eX0mZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ3VsLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gUHJvbWlzZS5hbGwoZm9yZWNhc3REYXlzLm1hcChhc3luYyAoZGF5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBgXG5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lfTwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zLyR7aWNvbn1cIiBhbHQ9XCJXZWF0aGVyIGljb25cIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0NcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgICB9KSlcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudHMpO1xuICAgICAgICBmb3JlY2FzdExpc3QuaW5uZXJIVE1MID0gZWxlbWVudHMuam9pbignJyk7XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50cyBmb3IgYnV0dG9uczpcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fd2VhdGhlcicpLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBnZXRGb3JtTW9kdWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Nb2R1bGUgPSBmb3JtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGZvcm1Nb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIC8vIENsb3NlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5OlxuICAgIGNvbnN0IGNsb3NlQnRuID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX19mb3JtJykucmVtb3ZlKCk7XG4gICAgICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIFN1Ym1pdCBidXR0b24gZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignZm9ybSBidXR0b24nKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSwgaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgY2xvc2VCdG4uY2xpY2soKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoXCJXcm9uZyBjaXR5IG5hbWUhXCIpXG4gICAgICAgIH1cblxuICAgIH0pXG5cbiAgICBjb250YWluZXIucHJlcGVuZChmb3JtTW9kdWxlKTtcbn1cblxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcbiAgICBhZGRDaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBnZXRGb3JtTW9kdWxlKCk7XG4gICAgfSlcblxuICAgIGF3YWl0IGNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG59XG5cbmF3YWl0IG1haW4oKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM2ZTVkN2Y5YThhZDQ0NDIwZjNjXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZENpdHlCdG4iLCJmb3JtVGVtcGxhdGUiLCJtb2R1bGVUZW1wbGF0ZSIsImdldEZvcmVjYXN0RGF5IiwiY3VycmVudERhdGUiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsIkRhdGUiLCJkYXlJbmRleCIsImdldERheSIsImdldERheUNvbmRpdGlvbkljb24iLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb2RlIiwicmVzcG9uc2UiLCJ3ZWF0aGVyQ29uZGl0aW9ucyIsImNvbmRpdGlvbkl0ZW0iLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImZpbmQiLCJpdGVtIiwiYWJydXB0IiwiaWNvbiIsInQwIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMyIsIkFQSUtleSIsImNpdHkiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiZWxlbWVudHMiLCJjbG9zZUJ0biIsIl9hcmdzMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIl9yZWYzIiwiX2NhbGxlZTIiLCJkYXkiLCJkYXlOYW1lIiwiYXZnVGVtcCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImF2Z3RlbXBfYyIsImNvbmRpdGlvbiIsIl94MyIsImlubmVySFRNTCIsImpvaW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2xvc2VzdCIsInJlbW92ZSIsImFwcGVuZCIsIl94MiIsImdldEZvcm1Nb2R1bGUiLCJmb3JtTW9kdWxlIiwiZGlzYWJsZWQiLCJzdWJtaXRCdG4iLCJpbnB1dCIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJXZWF0aGVyQVBJS2V5IiwidmFsdWUiLCJjbGljayIsImFsZXJ0IiwiX3g0IiwicHJlcGVuZCIsIm1haW4iLCJfcmVmNSIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Il0sInNvdXJjZVJvb3QiOiIifQ==