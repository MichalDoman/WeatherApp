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
    var response, weatherConditions;
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
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getDayConditionIcon(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createModule = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, iconCode, newLi;
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
          for (i = 0; i < forecastDays.length; i++) {
            day = forecastDays[i];
            dayName = getForecastDay(day.date);
            avgTemp = day.day.avgtemp_c;
            iconCode = day.day.condition.code;
            console.log(iconCode);
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/fog.svg\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
            forecastList.append(newLi);
          }

          // Update HTML:
          container.append(module);
          _context2.next = 29;
          break;
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 29:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 26]]);
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
/******/ 	__webpack_require__.h = () => ("aafbb4cd487dd03a0ffe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydOaWVkemllbGEnLCAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJ107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGdldERheUNvbmRpdGlvbkljb24gPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ3VsLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gZm9yZWNhc3REYXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGdldEZvcmVjYXN0RGF5KGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF2Z1RlbXAgPSBkYXkuZGF5LmF2Z3RlbXBfYztcbiAgICAgICAgICAgIGNvbnN0IGljb25Db2RlID0gZGF5LmRheS5jb25kaXRpb24uY29kZVxuICAgICAgICAgICAgY29uc29sZS5sb2coaWNvbkNvZGUpXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbmV3TGkuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5XCI+JHtkYXlOYW1lfTwvc3Bhbj4gPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvZm9nLnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgIGZvcmVjYXN0TGlzdC5hcHBlbmQobmV3TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFhZmJiNGNkNDg3ZGQwM2EwZmZlXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZU1vZHVsZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJBUElLZXkiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiaSIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwiaWNvbkNvZGUiLCJuZXdMaSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsIl94MiIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9