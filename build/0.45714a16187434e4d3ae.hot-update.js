"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);



var weatherModule = document.querySelector('.module__weather');
var cityNameLabel = document.querySelector('.city__name');
var fetchWeatherAPI = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=auto:ip&days=5\n    "));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          console.log(data);

          // Show API data:
          cityNameLabel.innerText = data.location.name;

          // Unhide weather module:
          weatherModule.removeAttribute('hidden');
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function fetchWeatherAPI(_x) {
    return _ref.apply(this, arguments);
  };
}();
fetchWeatherAPI(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("973f7866580ab4e7419c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NTcxNGExNjE4NzQzNGU0ZDNhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUNoRSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUczRCxJQUFNRSxlQUFlO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFFLFFBQWdCQyxNQUFNO0lBQUEsSUFBQUMsUUFBQSxFQUFBQyxJQUFBO0lBQUEsT0FBQUwsc0VBQUEsVUFBQU8sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRWZDLEtBQUssbURBQUFDLE1BQUEsQ0FDMEJULE1BQU0sNEJBQy9ELENBQUM7UUFBQTtVQUZRQyxRQUFRLEdBQUFJLFFBQUEsQ0FBQUssSUFBQTtVQUFBTCxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUdLTixRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUJULElBQUksR0FBQUcsUUFBQSxDQUFBSyxJQUFBO1VBQ1ZFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxJQUFJLENBQUM7O1VBRWpCO1VBQ0FULGFBQWEsQ0FBQ3FCLFNBQVMsR0FBR1osSUFBSSxDQUFDYSxRQUFRLENBQUNDLElBQUk7O1VBRTVDO1VBQ0ExQixhQUFhLENBQUMyQixlQUFlLENBQUMsUUFBUSxDQUFDO1VBQUNaLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQWEsRUFBQSxHQUFBYixRQUFBO1VBR3hDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQVIsUUFBQSxDQUFBYSxFQUFNLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQWIsUUFBQSxDQUFBYyxJQUFBO01BQUE7SUFBQSxHQUFBcEIsT0FBQTtFQUFBLENBRzFCO0VBQUEsZ0JBbEJLTCxlQUFlQSxDQUFBMEIsRUFBQTtJQUFBLE9BQUF6QixJQUFBLENBQUEwQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBa0JwQjtBQUVENUIsZUFBZSxDQUFDTCxrREFBTSxDQUFDa0MsYUFBYSxDQUFDOzs7Ozs7OztVQzFCckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3Qgd2VhdGhlck1vZHVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuY29uc3QgY2l0eU5hbWVMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG5cblxuY29uc3QgZmV0Y2hXZWF0aGVyQVBJID0gYXN5bmMgZnVuY3Rpb24gKEFQSUtleSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSUtleX0mcT1hdXRvOmlwJmRheXM9NVxuICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuXG4gICAgICAgIC8vIFVuaGlkZSB3ZWF0aGVyIG1vZHVsZTpcbiAgICAgICAgd2VhdGhlck1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufVxuXG5mZXRjaFdlYXRoZXJBUEkoY29uZmlnLldlYXRoZXJBUElLZXkpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTczZjc4NjY1ODBhYjRlNzQxOWNcIikiXSwibmFtZXMiOlsiY29uZmlnIiwid2VhdGhlck1vZHVsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNpdHlOYW1lTGFiZWwiLCJmZXRjaFdlYXRoZXJBUEkiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJBUElLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0MCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwiV2VhdGhlckFQSUtleSJdLCJzb3VyY2VSb290IjoiIn0=