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
          module = moduleTemplate.cloneNode(true);
          module.removeAttribute('hidden');

          // Get necessary elements:
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
          document.body.appendChild(module);
          _context.next = 29;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 29:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 26]]);
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
/******/ 	__webpack_require__.h = () => ("d32ef5adf9a7599bd578")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MWY3YzJkNTc5MDJjNjQ3YzUyMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUVqRSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLFdBQVcsRUFBSztFQUNwQyxJQUFNQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7RUFDbkcsSUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQ0gsV0FBVyxDQUFDO0VBQ2xDLElBQU1JLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztFQUU5QixPQUFPSixVQUFVLENBQUNHLFFBQVEsQ0FBQztBQUMvQixDQUFDO0FBRUQsSUFBTUUsWUFBWTtFQUFBLElBQUFDLElBQUEsR0FBQUMsbUZBQUEsY0FBQUMsc0VBQUEsQ0FBRyxTQUFBRSxRQUFnQkMsTUFBTTtJQUFBLElBQUFDLFFBQUEsRUFBQUMsSUFBQSxFQUFBQyxNQUFBLEVBQUFDLGFBQUEsRUFBQUMsZ0JBQUEsRUFBQUMsYUFBQSxFQUFBQyxhQUFBLEVBQUFDLGNBQUEsRUFBQUMsWUFBQSxFQUFBQyxZQUFBO0lBQUEsT0FBQWIsc0VBQUEsVUFBQWUsU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRVpDLEtBQUssbURBQUFDLE1BQUEsQ0FDMEJqQixNQUFNLGdDQUMzRCxDQUFDO1FBQUE7VUFGSUMsUUFBUSxHQUFBWSxRQUFBLENBQUFLLElBQUE7VUFBQUwsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FHS2QsUUFBUSxDQUFDa0IsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUE1QmpCLElBQUksR0FBQVcsUUFBQSxDQUFBSyxJQUFBO1VBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbkIsSUFBSSxDQUFDO1VBRVhDLE1BQU0sR0FBR25CLGNBQWMsQ0FBQ3NDLFNBQVMsQ0FBQyxJQUFJLENBQUM7VUFDN0NuQixNQUFNLENBQUNvQixlQUFlLENBQUMsUUFBUSxDQUFDOztVQUVoQztVQUNNbkIsYUFBYSxHQUFHRCxNQUFNLENBQUNqQixhQUFhLENBQUMsYUFBYSxDQUFDO1VBQ25EbUIsZ0JBQWdCLEdBQUdGLE1BQU0sQ0FBQ2pCLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztVQUM5RG9CLGFBQWEsR0FBR0gsTUFBTSxDQUFDakIsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1VBQ3hEcUIsYUFBYSxHQUFHSixNQUFNLENBQUNqQixhQUFhLENBQUMsa0JBQWtCLENBQUM7VUFDeERzQixjQUFjLEdBQUdMLE1BQU0sQ0FBQ2pCLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQztVQUMzRHVCLFlBQVksR0FBR04sTUFBTSxDQUFDcUIsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsRUFFckU7VUFDQXBCLGFBQWEsQ0FBQ3FCLFNBQVMsR0FBR3ZCLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQ0MsSUFBSTtVQUM1Q3RCLGdCQUFnQixDQUFDb0IsU0FBUyxHQUFHdkIsSUFBSSxDQUFDMEIsT0FBTyxDQUFDQyxNQUFNO1VBQ2hEdkIsYUFBYSxDQUFDbUIsU0FBUyxHQUFHdkIsSUFBSSxDQUFDMEIsT0FBTyxDQUFDRSxXQUFXLEdBQUcsTUFBTTtVQUMzRHZCLGFBQWEsQ0FBQ2tCLFNBQVMsR0FBR3ZCLElBQUksQ0FBQzBCLE9BQU8sQ0FBQ0csUUFBUSxHQUFHLEdBQUc7VUFDckR2QixjQUFjLENBQUNpQixTQUFTLEdBQUd2QixJQUFJLENBQUMwQixPQUFPLENBQUNJLFFBQVEsR0FBRyxNQUFNOztVQUV6RDtVQUNNdEIsWUFBWSxHQUFHUixJQUFJLENBQUMrQixRQUFRLENBQUNDLFdBQVc7VUFDOUNkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxZQUFZLENBQUM7O1VBRXpCO1VBQ0F6QixRQUFRLENBQUNrRCxJQUFJLENBQUNDLFdBQVcsQ0FBQ2pDLE1BQU0sQ0FBQztVQUFDVSxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUF3QixFQUFBLEdBQUF4QixRQUFBO1VBR2xDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBd0IsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUF4QixRQUFBLENBQUF5QixJQUFBO01BQUE7SUFBQSxHQUFBdkMsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBckNLTCxZQUFZQSxDQUFBNkMsRUFBQTtJQUFBLE9BQUE1QyxJQUFBLENBQUE2QyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBcUNqQjtBQUVEL0MsWUFBWSxDQUFDWCxrREFBTSxDQUFDMkQsYUFBYSxDQUFDOzs7Ozs7OztVQ25EbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydOaWVkemllbGEnLCAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJ107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvckFsbCgnLndlYXRoZXJfX2ZvcmVjYXN0IGxpJyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0RGF5cyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQzMmVmNWFkZjlhNzU5OWJkNTc4XCIpIl0sIm5hbWVzIjpbImNvbmZpZyIsIm1vZHVsZVRlbXBsYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiY3JlYXRlTW9kdWxlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2xvbmVOb2RlIiwicmVtb3ZlQXR0cmlidXRlIiwicXVlcnlTZWxlY3RvckFsbCIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwidDAiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9