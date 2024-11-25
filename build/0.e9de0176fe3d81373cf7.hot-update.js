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
var addCityBtn = document.querySelector('#add-city');
var formTemplate = document.querySelector('.module__form');
var moduleTemplate = document.querySelector('.module__weather');
var getFormModule = function getFormModule() {
  var form = formTemplate.cloneNode(true);
  form.id = "unique-form";
  form.removeAttribute('hidden');
  var closeBtn = form.querySelector('.btn--close');
  closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('.module__form').remove();
  });
  container.prepend(form);
};
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
addCityBtn.addEventListener('click', function (e) {
  e.preventDefault();
  getFormModule();
});
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8725103af6f29467d758")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUEwQixTQUFBLENBQUE1QixFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQTRCLFNBQUEsQ0FBQXpCLElBQUE7TUFBQTtJQUFBLEdBQUFNLFFBQUE7RUFBQSxDQUUxQjtFQUFBLGdCQTFES0YsWUFBWUEsQ0FBQXdDLEdBQUE7SUFBQSxPQUFBdkMsS0FBQSxDQUFBSCxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBMERqQjtBQUVEbkQsVUFBVSxDQUFDUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0VBQ3hDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ2xCUixhQUFhLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRmlELFlBQVksQ0FBQ3hELGtEQUFNLENBQUNpRyxhQUFhLENBQUM7Ozs7Ozs7O1VDMUdsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgYWRkQ2l0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtY2l0eScpXG5jb25zdCBmb3JtVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX19mb3JtJylcbmNvbnN0IG1vZHVsZVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fd2VhdGhlcicpXG5cbmNvbnN0IGdldEZvcm1Nb2R1bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1UZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgZm9ybS5pZCA9IFwidW5pcXVlLWZvcm1cIlxuICAgIGZvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX19mb3JtJykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb250YWluZXIucHJlcGVuZChmb3JtKTtcbn1cblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSk7XG4gICAgY29uc3QgZGF5SW5kZXggPSBkYXRlLmdldERheSgpO1xuXG4gICAgcmV0dXJuIGRheXNPZldlZWtbZGF5SW5kZXhdO1xufVxuXG5jb25zdCBnZXREYXlDb25kaXRpb25JY29uID0gYXN5bmMgKGNvZGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vd2VhdGhlcl9jb25kaXRpb25zLmpzb25cIilcbiAgICAgICAgY29uc3Qgd2VhdGhlckNvbmRpdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkl0ZW0gPSB3ZWF0aGVyQ29uZGl0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuXG4gICAgICAgIHJldHVybiBjb25kaXRpb25JdGVtLmljb247XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSwgY2l0eT1cImF1dG86aXBcIikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT0ke2NpdHl9JmRheXM9NVxuICAgICAgICBgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbW9kdWxlVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBtb2R1bGUucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxuXG4gICAgICAgIC8vIEdldCBuZWNlc3NhcnkgZWxlbWVudHM6XG4gICAgICAgIGNvbnN0IGNpdHlOYW1lTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmNpdHlfX25hbWUnKTtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHByZXNzdXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnByZXNzdXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBodW1pZGl0eUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLndpbmQtc3BlZWRfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0TGlzdCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCd1bC53ZWF0aGVyX19mb3JlY2FzdCcpO1xuXG4gICAgICAgIC8vIFNob3cgQVBJIGRhdGE6XG4gICAgICAgIGNpdHlOYW1lTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5sb2NhdGlvbi5uYW1lXG4gICAgICAgIHRlbXBlcmF0dXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfY1xuICAgICAgICBwcmVzc3VyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5wcmVzc3VyZV9tYiArIFwiIGhQYVwiXG4gICAgICAgIGh1bWlkaXR5TGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgXCIlXCJcbiAgICAgICAgd2luZFNwZWVkTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga3BoXCJcblxuICAgICAgICAvLyBGb3JlY2FzdDpcbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlzID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVxuICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdERheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IGZvcmVjYXN0RGF5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gIGF3YWl0IGdldERheUNvbmRpdGlvbkljb24oZGF5LmRheS5jb25kaXRpb24uY29kZSlcblxuICAgICAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ljb259XCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+JHthdmdUZW1wfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcblxuICAgICAgICAgICAgZm9yZWNhc3RMaXN0LmFwcGVuZChuZXdMaSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgZXZlbnRzIGZvciBidXR0b25zOlxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuYnRuLS1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcubW9kdWxlX193ZWF0aGVyJykucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmFkZENpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBnZXRGb3JtTW9kdWxlKCk7XG59KVxuXG5jcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODcyNTEwM2FmNmYyOTQ2N2Q3NThcIikiXSwibmFtZXMiOlsiY29uZmlnIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkQ2l0eUJ0biIsImZvcm1UZW1wbGF0ZSIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9ybU1vZHVsZSIsImZvcm0iLCJjbG9uZU5vZGUiLCJpZCIsInJlbW92ZUF0dHJpYnV0ZSIsImNsb3NlQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJwcmVwZW5kIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiY2l0eSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJuZXdMaSIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYXZndGVtcF9jIiwiY29uZGl0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZCIsIl94MiIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9