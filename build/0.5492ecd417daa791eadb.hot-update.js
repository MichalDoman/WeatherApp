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
    var response, weatherConditions, icon;
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
          icon = weatherConditions.find(function (item) {
            return item.code === code;
          });
          console.log(icon);
          _context.next = 14;
          break;
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
            getDayConditionIcon(iconCode);

            // console.log(iconCode)
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
/******/ 	__webpack_require__.h = () => ("96a8cf2fb4bcec50c713")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBQUgsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQXdEakI7QUFFREMsWUFBWSxDQUFDdkMsa0RBQU0sQ0FBQ2dGLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNsRmxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ05pZWR6aWVsYScsICdQb25pZWR6aWHFgmVrJywgJ1d0b3JlaycsICfFmnJvZGEnLCAnQ3p3YXJ0ZWsnLCAnUGnEhXRlaycsICdTb2JvdGEnXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgZ2V0RGF5Q29uZGl0aW9uSWNvbiA9IGFzeW5jIChjb2RlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL3dlYXRoZXJfY29uZGl0aW9ucy5qc29uXCIpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBpY29uID0gd2VhdGhlckNvbmRpdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5jb2RlID09PSBjb2RlKTtcbiAgICAgICAgY29uc29sZS5sb2coaWNvbilcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPWF1dG86aXAmZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ3VsLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gZm9yZWNhc3REYXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGdldEZvcmVjYXN0RGF5KGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF2Z1RlbXAgPSBkYXkuZGF5LmF2Z3RlbXBfYztcbiAgICAgICAgICAgIGNvbnN0IGljb25Db2RlID0gZGF5LmRheS5jb25kaXRpb24uY29kZVxuICAgICAgICAgICAgZ2V0RGF5Q29uZGl0aW9uSWNvbihpY29uQ29kZSlcblxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpY29uQ29kZSlcblxuICAgICAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9mb2cuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgZm9yZWNhc3RMaXN0LmFwcGVuZChuZXdMaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5jcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTZhOGNmMmZiNGJjZWM1MGM3MTNcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJpY29uIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiY3JlYXRlTW9kdWxlIiwiX3JlZjIiLCJfY2FsbGVlMiIsIkFQSUtleSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJpY29uQ29kZSIsIm5ld0xpIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiX3gyIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=