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
          forecastList.innerHTML = elements.join('');

          // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context3.next = 35;
          break;
        case 32:
          _context3.prev = 32;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 35:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 32]]);
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
/******/ 	__webpack_require__.h = () => ("a9819929c255fb534662")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgYWRkQ2l0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpXG5jb25zdCBmb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJylcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgZ2V0RGF5Q29uZGl0aW9uSWNvbiA9IGFzeW5jIChjb2RlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL3dlYXRoZXJfY29uZGl0aW9ucy5qc29uXCIpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25JdGVtID0gd2VhdGhlckNvbmRpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcblxuICAgICAgICByZXR1cm4gY29uZGl0aW9uSXRlbS5pY29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXksIGNpdHk9XCJhdXRvOmlwXCIpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9JHtjaXR5fSZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvcigndWwud2VhdGhlcl9fZm9yZWNhc3QnKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBhd2FpdCBQcm9taXNlLmFsbChmb3JlY2FzdERheXMubWFwKGFzeW5jIChkYXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gYXdhaXQgZ2V0RGF5Q29uZGl0aW9uSWNvbihkYXkuZGF5LmNvbmRpdGlvbi5jb2RlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGBcblxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvJHtpY29ufVwiIGFsdD1cIldlYXRoZXIgaWNvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj4ke2F2Z1RlbXB9PC9zcGFuPiZkZWc7Q1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICAgIH0pKVxuXG4gICAgICAgIGZvcmVjYXN0TGlzdC5pbm5lckhUTUwgPSBlbGVtZW50cy5qb2luKCcnKTtcblxuICAgICAgICAvLyBBZGQgZXZlbnRzIGZvciBidXR0b25zOlxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX193ZWF0aGVyJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEZvcm1Nb2R1bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybU1vZHVsZSA9IGZvcm1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZm9ybU1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgLy8gQ2xvc2UgYnV0dG9uIGZ1bmN0aW9uYWxpdHk6XG4gICAgY29uc3QgY2xvc2VCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX2Zvcm0nKS5yZW1vdmUoKTtcbiAgICAgICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gU3VibWl0IGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCdmb3JtIGJ1dHRvbicpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5LCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGljaygpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChcIldyb25nIGNpdHkgbmFtZSFcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5wcmVwZW5kKGZvcm1Nb2R1bGUpO1xufVxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIGFkZENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdldEZvcm1Nb2R1bGUoKTtcbiAgICB9KVxuXG4gICAgYXdhaXQgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbn1cblxuYXdhaXQgbWFpbigpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTk4MTk5MjljMjU1ZmI1MzQ2NjJcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQ2l0eUJ0biIsImZvcm1UZW1wbGF0ZSIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUzIiwiQVBJS2V5IiwiY2l0eSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJlbGVtZW50cyIsImNsb3NlQnRuIiwiX2FyZ3MzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiX3JlZjMiLCJfY2FsbGVlMiIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiX3gzIiwiaW5uZXJIVE1MIiwiam9pbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYXBwZW5kIiwiX3gyIiwiZ2V0Rm9ybU1vZHVsZSIsImZvcm1Nb2R1bGUiLCJkaXNhYmxlZCIsInN1Ym1pdEJ0biIsImlucHV0IiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIldlYXRoZXJBUElLZXkiLCJ2YWx1ZSIsImNsaWNrIiwiYWxlcnQiLCJfeDQiLCJwcmVwZW5kIiwibWFpbiIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiXSwic291cmNlUm9vdCI6IiJ9