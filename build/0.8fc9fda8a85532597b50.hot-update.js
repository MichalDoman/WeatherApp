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
createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac1e35c7131092741455")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxhQUFhLENBQUM7VUFDcER5RCxRQUFRLENBQUN3QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO1lBQ3RDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xCRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1VBQ2pELENBQUMsQ0FBQzs7VUFFRjtVQUNBeEYsU0FBUyxDQUFDa0YsTUFBTSxDQUFDcEMsTUFBTSxDQUFDO1VBQUNnQixTQUFBLENBQUFyQyxJQUFBO1VBQUE7UUFBQTtVQUFBcUMsU0FBQSxDQUFBdEMsSUFBQTtVQUFBc0MsU0FBQSxDQUFBN0IsRUFBQSxHQUFBNkIsU0FBQTtVQUd6QjVCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBMkIsU0FBQSxDQUFBN0IsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUE2QixTQUFBLENBQUExQixJQUFBO01BQUE7SUFBQSxHQUFBTSxRQUFBO0VBQUEsQ0FFMUI7RUFBQSxnQkExREtGLFlBQVlBLENBQUFpRCxHQUFBO0lBQUEsT0FBQWhELEtBQUEsQ0FBQUgsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQTBEakI7QUFFREMsWUFBWSxDQUFDekMsa0RBQU0sQ0FBQzJGLGFBQWEsQ0FBQzs7Ozs7Ozs7VUNyRmxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcvLmNvbmZpZy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24uY29udGFpbmVyJyk7XG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGdldERheUNvbmRpdGlvbkljb24gPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSXRlbSA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkl0ZW0uaWNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5LCBjaXR5PVwiYXV0bzppcFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPSR7Y2l0eX0mZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ3VsLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGZvciAoIGxldCBpID0gMDsgaSA8IGZvcmVjYXN0RGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZGF5ID0gZm9yZWNhc3REYXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGdldEZvcmVjYXN0RGF5KGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF2Z1RlbXAgPSBkYXkuZGF5LmF2Z3RlbXBfYztcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSAgYXdhaXQgZ2V0RGF5Q29uZGl0aW9uSWNvbihkYXkuZGF5LmNvbmRpdGlvbi5jb2RlKVxuXG4gICAgICAgICAgICBjb25zdCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIG5ld0xpLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheVwiPiR7ZGF5TmFtZX08L3NwYW4+IDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zLyR7aWNvbn1cIi8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj4ke2F2Z1RlbXB9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYFxuXG4gICAgICAgICAgICBmb3JlY2FzdExpc3QuYXBwZW5kKG5ld0xpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBldmVudHMgZm9yIGJ1dHRvbnM6XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX3dlYXRoZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFjMWUzNWM3MTMxMDkyNzQxNDU1XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiZ2V0RGF5Q29uZGl0aW9uSWNvbiIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvZGUiLCJyZXNwb25zZSIsIndlYXRoZXJDb25kaXRpb25zIiwiY29uZGl0aW9uSXRlbSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsInNlbnQiLCJqc29uIiwiZmluZCIsIml0ZW0iLCJhYnJ1cHQiLCJpY29uIiwidDAiLCJjb25zb2xlIiwibG9nIiwic3RvcCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjcmVhdGVNb2R1bGUiLCJfcmVmMiIsIl9jYWxsZWUyIiwiQVBJS2V5IiwiY2l0eSIsImRhdGEiLCJtb2R1bGUiLCJjaXR5TmFtZUxhYmVsIiwidGVtcGVyYXR1cmVMYWJlbCIsInByZXNzdXJlTGFiZWwiLCJodW1pZGl0eUxhYmVsIiwid2luZFNwZWVkTGFiZWwiLCJmb3JlY2FzdExpc3QiLCJmb3JlY2FzdERheXMiLCJpIiwiZGF5IiwiZGF5TmFtZSIsImF2Z1RlbXAiLCJuZXdMaSIsImNsb3NlQnRuIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uY2F0IiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsInRlbXBfYyIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJhdmd0ZW1wX2MiLCJjb25kaXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJfeDIiLCJXZWF0aGVyQVBJS2V5Il0sInNvdXJjZVJvb3QiOiIifQ==