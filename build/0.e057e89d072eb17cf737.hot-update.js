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
          forecastDays = data.forecast.forecastday; // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context2.next = 31;
          break;
        case 28:
          _context2.prev = 28;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 28]]);
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
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            _context3.prev = 1;
            _context3.next = 4;
            return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey, input.value);
          case 4:
            closeBtn.click();
            _context3.next = 10;
            break;
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            alert("Wrong city name!");
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 7]]);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  container.prepend(formModule);
};
var main = /*#__PURE__*/function () {
  var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          addCityBtn.addEventListener('click', function (e) {
            e.preventDefault();
            getFormModule();
          });
          _context4.next = 3;
          return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function main() {
    return _ref4.apply(this, arguments);
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
/******/ 	__webpack_require__.h = () => ("091116a3dc27088afe15")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBhZGRDaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JylcbmNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKVxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBcblxuICAgICAgICAvLyBBZGQgZXZlbnRzIGZvciBidXR0b25zOlxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX193ZWF0aGVyJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldEZvcm1Nb2R1bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybU1vZHVsZSA9IGZvcm1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZm9ybU1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgLy8gQ2xvc2UgYnV0dG9uIGZ1bmN0aW9uYWxpdHk6XG4gICAgY29uc3QgY2xvc2VCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX2Zvcm0nKS5yZW1vdmUoKTtcbiAgICAgICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gU3VibWl0IGJ1dHRvbiBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCdmb3JtIGJ1dHRvbicpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5LCBpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICBjbG9zZUJ0bi5jbGljaygpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChcIldyb25nIGNpdHkgbmFtZSFcIilcbiAgICAgICAgfVxuXG4gICAgfSlcblxuICAgIGNvbnRhaW5lci5wcmVwZW5kKGZvcm1Nb2R1bGUpO1xufVxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIGFkZENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdldEZvcm1Nb2R1bGUoKTtcbiAgICB9KVxuXG4gICAgYXdhaXQgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbn1cblxuYXdhaXQgbWFpbigpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDkxMTE2YTNkYzI3MDg4YWZlMTVcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQ2l0eUJ0biIsImZvcm1UZW1wbGF0ZSIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiY2l0eSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJjbG9zZUJ0biIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJhcHBlbmQiLCJfeDIiLCJnZXRGb3JtTW9kdWxlIiwiZm9ybU1vZHVsZSIsImRpc2FibGVkIiwic3VibWl0QnRuIiwiaW5wdXQiLCJfcmVmMyIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiV2VhdGhlckFQSUtleSIsInZhbHVlIiwiY2xpY2siLCJhbGVydCIsIl94MyIsInByZXBlbmQiLCJtYWluIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCJdLCJzb3VyY2VSb290IjoiIn0=