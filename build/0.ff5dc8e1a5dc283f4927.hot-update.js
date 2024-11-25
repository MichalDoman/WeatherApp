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
  var submitBtn = formModule.querySelector('form button');
  var formInput = formModule.querySelector('input');
  submitBtn.addEventListener('click', /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            e.preventDefault();
            _context3.next = 3;
            return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);
          case 3:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  closeBtn.click();
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
/******/ 	__webpack_require__.h = () => ("c8170bca2316eb9615a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUcsU0FBQTJGLFNBQUE7SUFBQSxPQUFBM0Ysc0VBQUEsVUFBQTRGLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBbkYsSUFBQSxHQUFBbUYsU0FBQSxDQUFBbEYsSUFBQTtRQUFBO1VBQ1R4QixVQUFVLENBQUNrRixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1lBQ3hDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xCSyxhQUFhLENBQUMsQ0FBQztVQUNuQixDQUFDLENBQUM7VUFBQWlCLFNBQUEsQ0FBQWxGLElBQUE7VUFBQSxPQUVJZSxZQUFZLENBQUMzQyxrREFBTSxDQUFDc0csYUFBYSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFRLFNBQUEsQ0FBQXZFLElBQUE7TUFBQTtJQUFBLEdBQUFxRSxRQUFBO0VBQUEsQ0FDM0M7RUFBQSxnQkFQS0YsSUFBSUEsQ0FBQTtJQUFBLE9BQUFDLEtBQUEsQ0FBQWxFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FPVDtBQUVELE1BQU1nRSxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7OztVQzNIWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgYWRkQ2l0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpXG5jb25zdCBmb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJylcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcmVjYXN0RGF5ID0gKGN1cnJlbnREYXRlKSA9PiB7XG4gICAgY29uc3QgZGF5c09mV2VlayA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgZ2V0RGF5Q29uZGl0aW9uSWNvbiA9IGFzeW5jIChjb2RlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL3dlYXRoZXJfY29uZGl0aW9ucy5qc29uXCIpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb25kaXRpb25JdGVtID0gd2VhdGhlckNvbmRpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcblxuICAgICAgICByZXR1cm4gY29uZGl0aW9uSXRlbS5pY29uO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXksIGNpdHk9XCJhdXRvOmlwXCIpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9JHtjaXR5fSZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvcigndWwud2VhdGhlcl9fZm9yZWNhc3QnKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBmb3JlY2FzdERheXNbaV07XG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZ2V0Rm9yZWNhc3REYXkoZGF5LmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgYXZnVGVtcCA9IGRheS5kYXkuYXZndGVtcF9jO1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9ICBhd2FpdCBnZXREYXlDb25kaXRpb25JY29uKGRheS5kYXkuY29uZGl0aW9uLmNvZGUpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbmV3TGkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lfTwvc3Bhbj4gPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvJHtpY29ufVwiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgIGZvcmVjYXN0TGlzdC5hcHBlbmQobmV3TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50cyBmb3IgYnV0dG9uczpcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fd2VhdGhlcicpLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MOlxuICAgICAgICBjb250YWluZXIuYXBwZW5kKG1vZHVsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBnZXRGb3JtTW9kdWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Nb2R1bGUgPSBmb3JtVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgIGZvcm1Nb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIC8vIENsb3NlIGJ1dHRvbiBmdW5jdGlvbmFsaXR5OlxuICAgIGNvbnN0IGNsb3NlQnRuID0gZm9ybU1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX19mb3JtJykucmVtb3ZlKCk7XG4gICAgICAgIGFkZENpdHlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIFN1Ym1pdCBidXR0b24gZnVuY3Rpb25hbGl0eVxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignZm9ybSBidXR0b24nKTtcbiAgICBjb25zdCBmb3JtSW5wdXQgPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGF3YWl0IGNyZWF0ZU1vZHVsZShjb25maWcuV2VhdGhlckFQSUtleSk7XG4gICAgfSlcblxuICAgIGNsb3NlQnRuLmNsaWNrKClcblxuICAgIGNvbnRhaW5lci5wcmVwZW5kKGZvcm1Nb2R1bGUpO1xufVxuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIGFkZENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdldEZvcm1Nb2R1bGUoKTtcbiAgICB9KVxuXG4gICAgYXdhaXQgY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbn1cblxuYXdhaXQgbWFpbigpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzgxNzBiY2EyMzE2ZWI5NjE1YTZcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQ2l0eUJ0biIsImZvcm1UZW1wbGF0ZSIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiY2l0eSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJuZXdMaSIsImNsb3NlQnRuIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJfeDIiLCJnZXRGb3JtTW9kdWxlIiwiZm9ybU1vZHVsZSIsImRpc2FibGVkIiwic3VibWl0QnRuIiwiZm9ybUlucHV0IiwiX3JlZjMiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIldlYXRoZXJBUElLZXkiLCJfeDMiLCJjbGljayIsInByZXBlbmQiLCJtYWluIiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCJdLCJzb3VyY2VSb290IjoiIn0=