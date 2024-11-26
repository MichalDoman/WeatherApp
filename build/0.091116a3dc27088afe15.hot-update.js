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
      forecastElements,
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
          forecastElements = Promise.all(); // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context2.next = 32;
          break;
        case 29:
          _context2.prev = 29;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
        case 32:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 29]]);
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
/******/ 	__webpack_require__.h = () => ("08a9251b4ccf0867b82e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTRELElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7O1VDaEhaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBhZGRDaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1jaXR5JylcbmNvbnN0IGZvcm1UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX2Zvcm0nKVxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBjb25zdCBmb3JlY2FzdEVsZW1lbnRzID0gUHJvbWlzZS5hbGwoKVxuXG4gICAgICAgIC8vIEFkZCBldmVudHMgZm9yIGJ1dHRvbnM6XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX3dlYXRoZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0Rm9ybU1vZHVsZSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtTW9kdWxlID0gZm9ybVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBmb3JtTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAvLyBDbG9zZSBidXR0b24gZnVuY3Rpb25hbGl0eTpcbiAgICBjb25zdCBjbG9zZUJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBTdWJtaXQgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gYnV0dG9uJyk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXksIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsaWNrKClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiV3JvbmcgY2l0eSBuYW1lIVwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLnByZXBlbmQoZm9ybU1vZHVsZSk7XG59XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgYWRkQ2l0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0Rm9ybU1vZHVsZSgpO1xuICAgIH0pXG5cbiAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xufVxuXG5hd2FpdCBtYWluKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOGE5MjUxYjRjY2YwODY3YjgyZVwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRDaXR5QnRuIiwiZm9ybVRlbXBsYXRlIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJjb25kaXRpb25JdGVtIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImFicnVwdCIsImljb24iLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZU1vZHVsZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJBUElLZXkiLCJjaXR5IiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImZvcmVjYXN0RWxlbWVudHMiLCJjbG9zZUJ0biIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiUHJvbWlzZSIsImFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYXBwZW5kIiwiX3gyIiwiZ2V0Rm9ybU1vZHVsZSIsImZvcm1Nb2R1bGUiLCJkaXNhYmxlZCIsInN1Ym1pdEJ0biIsImlucHV0IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIldlYXRoZXJBUElLZXkiLCJ2YWx1ZSIsImNsaWNrIiwiYWxlcnQiLCJfeDMiLCJwcmVwZW5kIiwibWFpbiIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiXSwic291cmNlUm9vdCI6IiJ9