"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var moduleTemplate = document.querySelector('.module__weather');
var getForecastDay = function getForecastDay(currentDate) {
  var daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
  var date = new Date(currentDate);
  var dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
};
var createModule = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n        "));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          console.log(data);
          module = moduleTemplate.cloneNode(true); // Get necessary elements:
          cityNameLabel = module.querySelector('.city__name');
          temperatureLabel = module.querySelector('.temperature__value');
          pressureLabel = module.querySelector('.pressure__value');
          humidityLabel = module.querySelector('.humidity__value');
          windSpeedLabel = module.querySelector('.wind-speed__value');
          forecastList = module.querySelectorAll('.weather__forecast li'); // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";

          // Forecast:
          forecastDays = data.forecast.forecastday;
          console.log(forecastDays);

          // Update HTML:
          document.appendChild(module);
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 25]]);
  }));
  return function createModule(_x) {
    return _ref.apply(this, arguments);
  };
}();
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("066ba74301a1f46abbaa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV6QjtVQUNBekIsUUFBUSxDQUFDaUQsV0FBVyxDQUFDL0IsTUFBTSxDQUFDO1VBQUNVLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQXNCLEVBQUEsR0FBQXRCLFFBQUE7VUFHN0JPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBUixRQUFBLENBQUFzQixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXRCLFFBQUEsQ0FBQXVCLElBQUE7TUFBQTtJQUFBLEdBQUFyQyxPQUFBO0VBQUEsQ0FHMUI7RUFBQSxnQkFwQ0tMLFlBQVlBLENBQUEyQyxFQUFBO0lBQUEsT0FBQTFDLElBQUEsQ0FBQTJDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FvQ2pCO0FBRUQ3QyxZQUFZLENBQUNYLGtEQUFNLENBQUN5RCxhQUFhLENBQUM7Ozs7Ozs7O1VDbERsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ05pZWR6aWVsYScsICdQb25pZWR6aWHFgmVrJywgJ1d0b3JlaycsICfFmnJvZGEnLCAnQ3p3YXJ0ZWsnLCAnUGnEhXRlaycsICdTb2JvdGEnXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QgbGknKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXlzKTtcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgZG9jdW1lbnQuYXBwZW5kQ2hpbGQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA2NmJhNzQzMDFhMWY0NmFiYmFhXCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIm1vZHVsZVRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiY3JlYXRlTW9kdWxlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xvbmVOb2RlIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYXBwZW5kQ2hpbGQiLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=