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
    var response, data, locationModule, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays;
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
          locationModule = moduleTemplate.cloneNode(false); // Get necessary elements:
          cityNameLabel = locationModule.querySelector('.city__name');
          temperatureLabel = locationModule.querySelector('.temperature__value');
          pressureLabel = locationModule.querySelector('.pressure__value');
          humidityLabel = locationModule.querySelector('.humidity__value');
          windSpeedLabel = locationModule.querySelector('.wind-speed__value');
          forecastList = locationModule.querySelectorAll('.weather__forecast li'); // Show API data:
          cityNameLabel.innerText = data.location.name;
          temperatureLabel.innerText = data.current.temp_c;
          pressureLabel.innerText = data.current.pressure_mb + " hPa";
          humidityLabel.innerText = data.current.humidity + "%";
          windSpeedLabel.innerText = data.current.wind_kph + " kph";

          // Forecast:
          forecastDays = data.forecast.forecastday;
          console.log(forecastDays);

          // Update HTML:
          _context.next = 27;
          break;
        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 24]]);
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
/******/ 	__webpack_require__.h = () => ("0a42402384793a0834be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV6QjtVQUFBRyxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFxQixFQUFBLEdBQUFyQixRQUFBO1VBSUFPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBUixRQUFBLENBQUFxQixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXJCLFFBQUEsQ0FBQXNCLElBQUE7TUFBQTtJQUFBLEdBQUFwQyxPQUFBO0VBQUEsQ0FHMUI7RUFBQSxnQkFwQ0tMLFlBQVlBLENBQUEwQyxFQUFBO0lBQUEsT0FBQXpDLElBQUEsQ0FBQTBDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0FBQUEsR0FvQ2pCO0FBRUQ1QyxZQUFZLENBQUNYLGtEQUFNLENBQUN3RCxhQUFhLENBQUM7Ozs7Ozs7O1VDbERsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ05pZWR6aWVsYScsICdQb25pZWR6aWHFgmVrJywgJ1d0b3JlaycsICfFmnJvZGEnLCAnQ3p3YXJ0ZWsnLCAnUGnEhXRlaycsICdTb2JvdGEnXTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoY3VycmVudERhdGUpO1xuICAgIGNvbnN0IGRheUluZGV4ID0gZGF0ZS5nZXREYXkoKTtcblxuICAgIHJldHVybiBkYXlzT2ZXZWVrW2RheUluZGV4XTtcbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25Nb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUoZmFsc2UpO1xuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBsb2NhdGlvbk1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbG9jYXRpb25Nb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbG9jYXRpb25Nb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbG9jYXRpb25Nb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IGxvY2F0aW9uTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBsb2NhdGlvbk1vZHVsZS5xdWVyeVNlbGVjdG9yQWxsKCcud2VhdGhlcl9fZm9yZWNhc3QgbGknKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3REYXlzKTtcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5jcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGE0MjQwMjM4NDc5M2EwODM0YmVcIikiXSwibmFtZXMiOlsiY29uZmlnIiwibW9kdWxlVGVtcGxhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJjcmVhdGVNb2R1bGUiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJBUElLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJsb2NhdGlvbk1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNsb25lTm9kZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsInQwIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==