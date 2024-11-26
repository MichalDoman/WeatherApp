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
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(APIKey) {
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
      _args3 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          city = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "auto:ip";
          _context3.prev = 1;
          _context3.next = 4;
          return fetch("http://api.weatherapi.com/v1/forecast.json?key=".concat(APIKey, "&q=").concat(city, "&days=5\n        "));
        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.json();
        case 7:
          data = _context3.sent;
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
          forecastElements = Promise.all(forecastDays.map(/*#__PURE__*/function () {
            var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(day) {
              var dayName, avgTemp, icon;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    dayName = getForecastDay(day.date);
                    avgTemp = day.day.avgtemp_c;
                    _context2.next = 4;
                    return getDayConditionIcon(day.day.condition.code);
                  case 4:
                    icon = _context2.sent;
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }())); // Add events for buttons:
          closeBtn = module.querySelector('.btn--close');
          closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.target.closest('.module__weather').remove();
          });

          // Update HTML:
          container.append(module);
          _context3.next = 32;
          break;
        case 29:
          _context3.prev = 29;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 32:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 29]]);
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
    var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            e.preventDefault();
            _context4.prev = 1;
            _context4.next = 4;
            return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey, input.value);
          case 4:
            closeBtn.click();
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](1);
            alert("Wrong city name!");
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 7]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
  container.prepend(formModule);
};
var main = /*#__PURE__*/function () {
  var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          addCityBtn.addEventListener('click', function (e) {
            e.preventDefault();
            getFormModule();
          });
          _context5.next = 3;
          return createModule(_config_js__WEBPACK_IMPORTED_MODULE_2__["default"].WeatherAPIKey);
        case 3:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function main() {
    return _ref5.apply(this, arguments);
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
/******/ 	__webpack_require__.h = () => ("5f6ec49760ff2c5b15fb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZmZjNmZhMDIxZDJlZTRlYzMzOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBRWpDLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7QUFDN0QsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7QUFDdEQsSUFBTUUsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFDNUQsSUFBTUcsY0FBYyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztBQUVqRSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWNBLENBQUlDLFdBQVcsRUFBSztFQUNwQyxJQUFNQyxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7RUFDakcsSUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQ0gsV0FBVyxDQUFDO0VBQ2xDLElBQU1JLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQztFQUU5QixPQUFPSixVQUFVLENBQUNHLFFBQVEsQ0FBQztBQUMvQixDQUFDO0FBRUQsSUFBTUUsbUJBQW1CO0VBQUEsSUFBQUMsSUFBQSxHQUFBQyxtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFFLFFBQU9DLElBQUk7SUFBQSxJQUFBQyxRQUFBLEVBQUFDLGlCQUFBLEVBQUFDLGFBQUE7SUFBQSxPQUFBTixzRUFBQSxVQUFBUSxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFUkMsS0FBSyxDQUFDLDRCQUE0QixDQUFDO1FBQUE7VUFBcERSLFFBQVEsR0FBQUssUUFBQSxDQUFBSSxJQUFBO1VBQUFKLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ2tCUCxRQUFRLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBekNULGlCQUFpQixHQUFBSSxRQUFBLENBQUFJLElBQUE7VUFDakJQLGFBQWEsR0FBR0QsaUJBQWlCLENBQUNVLElBQUksQ0FBQyxVQUFDQyxJQUFJO1lBQUEsT0FBS0EsSUFBSSxDQUFDYixJQUFJLEtBQUtBLElBQUk7VUFBQSxFQUFDO1VBQUEsT0FBQU0sUUFBQSxDQUFBUSxNQUFBLFdBRW5FWCxhQUFhLENBQUNZLElBQUk7UUFBQTtVQUFBVCxRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBVSxFQUFBLEdBQUFWLFFBQUE7VUFFekJXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBWixRQUFBLENBQUFVLEVBQU0sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBVixRQUFBLENBQUFhLElBQUE7TUFBQTtJQUFBLEdBQUFwQixPQUFBO0VBQUEsQ0FFMUI7RUFBQSxnQkFWS0wsbUJBQW1CQSxDQUFBMEIsRUFBQTtJQUFBLE9BQUF6QixJQUFBLENBQUEwQixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBVXhCO0FBRUQsSUFBTUMsWUFBWTtFQUFBLElBQUFDLEtBQUEsR0FBQTVCLG1GQUFBLGNBQUFDLHNFQUFBLENBQUcsU0FBQTRCLFNBQWdCQyxNQUFNO0lBQUEsSUFBQUMsSUFBQTtNQUFBMUIsUUFBQTtNQUFBMkIsSUFBQTtNQUFBQyxNQUFBO01BQUFDLGFBQUE7TUFBQUMsZ0JBQUE7TUFBQUMsYUFBQTtNQUFBQyxhQUFBO01BQUFDLGNBQUE7TUFBQUMsWUFBQTtNQUFBQyxZQUFBO01BQUFDLGdCQUFBO01BQUFDLFFBQUE7TUFBQUMsTUFBQSxHQUFBakIsU0FBQTtJQUFBLE9BQUF6QixzRUFBQSxVQUFBMkMsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFsQyxJQUFBLEdBQUFrQyxTQUFBLENBQUFqQyxJQUFBO1FBQUE7VUFBRW1CLElBQUksR0FBQVksTUFBQSxDQUFBRyxNQUFBLFFBQUFILE1BQUEsUUFBQUksU0FBQSxHQUFBSixNQUFBLE1BQUMsU0FBUztVQUFBRSxTQUFBLENBQUFsQyxJQUFBO1VBQUFrQyxTQUFBLENBQUFqQyxJQUFBO1VBQUEsT0FFNUJDLEtBQUssbURBQUFtQyxNQUFBLENBQzBCbEIsTUFBTSxTQUFBa0IsTUFBQSxDQUFNakIsSUFBSSxzQkFDckUsQ0FBQztRQUFBO1VBRkkxQixRQUFRLEdBQUF3QyxTQUFBLENBQUEvQixJQUFBO1VBQUErQixTQUFBLENBQUFqQyxJQUFBO1VBQUEsT0FHS1AsUUFBUSxDQUFDVSxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCaUIsSUFBSSxHQUFBYSxTQUFBLENBQUEvQixJQUFBO1VBQ1ZPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxJQUFJLENBQUM7VUFFWEMsTUFBTSxHQUFHM0MsY0FBYyxDQUFDMkQsU0FBUyxDQUFDLElBQUksQ0FBQztVQUM3Q2hCLE1BQU0sQ0FBQ2lCLGVBQWUsQ0FBQyxRQUFRLENBQUM7O1VBRWhDO1VBQ01oQixhQUFhLEdBQUdELE1BQU0sQ0FBQzlDLGFBQWEsQ0FBQyxhQUFhLENBQUM7VUFDbkRnRCxnQkFBZ0IsR0FBR0YsTUFBTSxDQUFDOUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1VBQzlEaUQsYUFBYSxHQUFHSCxNQUFNLENBQUM5QyxhQUFhLENBQUMsa0JBQWtCLENBQUM7VUFDeERrRCxhQUFhLEdBQUdKLE1BQU0sQ0FBQzlDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztVQUN4RG1ELGNBQWMsR0FBR0wsTUFBTSxDQUFDOUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDO1VBQzNEb0QsWUFBWSxHQUFHTixNQUFNLENBQUM5QyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFFakU7VUFDQStDLGFBQWEsQ0FBQ2lCLFNBQVMsR0FBR25CLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ0MsSUFBSTtVQUM1Q2xCLGdCQUFnQixDQUFDZ0IsU0FBUyxHQUFHbkIsSUFBSSxDQUFDc0IsT0FBTyxDQUFDQyxNQUFNO1VBQ2hEbkIsYUFBYSxDQUFDZSxTQUFTLEdBQUduQixJQUFJLENBQUNzQixPQUFPLENBQUNFLFdBQVcsR0FBRyxNQUFNO1VBQzNEbkIsYUFBYSxDQUFDYyxTQUFTLEdBQUduQixJQUFJLENBQUNzQixPQUFPLENBQUNHLFFBQVEsR0FBRyxHQUFHO1VBQ3JEbkIsY0FBYyxDQUFDYSxTQUFTLEdBQUduQixJQUFJLENBQUNzQixPQUFPLENBQUNJLFFBQVEsR0FBRyxNQUFNOztVQUV6RDtVQUNNbEIsWUFBWSxHQUFHUixJQUFJLENBQUMyQixRQUFRLENBQUNDLFdBQVc7VUFDeENuQixnQkFBZ0IsR0FBR29CLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdEIsWUFBWSxDQUFDdUIsR0FBRztZQUFBLElBQUFDLEtBQUEsR0FBQWhFLG1GQUFBLGNBQUFDLHNFQUFBLENBQUMsU0FBQWdFLFNBQU9DLEdBQUc7Y0FBQSxJQUFBQyxPQUFBLEVBQUFDLE9BQUEsRUFBQWpELElBQUE7Y0FBQSxPQUFBbEIsc0VBQUEsVUFBQW9FLFVBQUFDLFNBQUE7Z0JBQUEsa0JBQUFBLFNBQUEsQ0FBQTNELElBQUEsR0FBQTJELFNBQUEsQ0FBQTFELElBQUE7a0JBQUE7b0JBQ3REdUQsT0FBTyxHQUFHNUUsY0FBYyxDQUFDMkUsR0FBRyxDQUFDeEUsSUFBSSxDQUFDO29CQUNsQzBFLE9BQU8sR0FBR0YsR0FBRyxDQUFDQSxHQUFHLENBQUNLLFNBQVM7b0JBQUFELFNBQUEsQ0FBQTFELElBQUE7b0JBQUEsT0FDZGQsbUJBQW1CLENBQUNvRSxHQUFHLENBQUNBLEdBQUcsQ0FBQ00sU0FBUyxDQUFDcEUsSUFBSSxDQUFDO2tCQUFBO29CQUF4RGUsSUFBSSxHQUFBbUQsU0FBQSxDQUFBeEQsSUFBQTtrQkFBQTtrQkFBQTtvQkFBQSxPQUFBd0QsU0FBQSxDQUFBL0MsSUFBQTtnQkFBQTtjQUFBLEdBQUEwQyxRQUFBO1lBQUEsQ0FHYjtZQUFBLGlCQUFBUSxHQUFBO2NBQUEsT0FBQVQsS0FBQSxDQUFBdkMsS0FBQSxPQUFBQyxTQUFBO1lBQUE7VUFBQSxJQUFDLENBQUMsRUFFSDtVQUNNZ0IsUUFBUSxHQUFHVCxNQUFNLENBQUM5QyxhQUFhLENBQUMsYUFBYSxDQUFDO1VBQ3BEdUQsUUFBUSxDQUFDZ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztZQUN0Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNsQkQsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQztVQUNqRCxDQUFDLENBQUM7O1VBRUY7VUFDQTlGLFNBQVMsQ0FBQytGLE1BQU0sQ0FBQy9DLE1BQU0sQ0FBQztVQUFDWSxTQUFBLENBQUFqQyxJQUFBO1VBQUE7UUFBQTtVQUFBaUMsU0FBQSxDQUFBbEMsSUFBQTtVQUFBa0MsU0FBQSxDQUFBekIsRUFBQSxHQUFBeUIsU0FBQTtVQUd6QnhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFBdUIsU0FBQSxDQUFBekIsRUFBTSxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUF5QixTQUFBLENBQUF0QixJQUFBO01BQUE7SUFBQSxHQUFBTSxRQUFBO0VBQUEsQ0FFMUI7RUFBQSxnQkFqREtGLFlBQVlBLENBQUFzRCxHQUFBO0lBQUEsT0FBQXJELEtBQUEsQ0FBQUgsS0FBQSxPQUFBQyxTQUFBO0VBQUE7QUFBQSxHQWlEakI7QUFFRCxJQUFNd0QsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBTUMsVUFBVSxHQUFHOUYsWUFBWSxDQUFDNEQsU0FBUyxDQUFDLElBQUksQ0FBQztFQUMvQ2tDLFVBQVUsQ0FBQ2pDLGVBQWUsQ0FBQyxRQUFRLENBQUM7RUFDcEM5RCxVQUFVLENBQUNnRyxRQUFRLEdBQUcsSUFBSTs7RUFFMUI7RUFDQSxJQUFNMUMsUUFBUSxHQUFHeUMsVUFBVSxDQUFDaEcsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUN4RHVELFFBQVEsQ0FBQ2dDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7SUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDbEJELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDM0YsVUFBVSxDQUFDZ0csUUFBUSxHQUFHLEtBQUs7RUFDL0IsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTUMsU0FBUyxHQUFHRixVQUFVLENBQUNoRyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3pELElBQU1tRyxLQUFLLEdBQUdILFVBQVUsQ0FBQ2hHLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFFL0NrRyxTQUFTLENBQUNYLGdCQUFnQixDQUFDLE9BQU87SUFBQSxJQUFBYSxLQUFBLEdBQUF2RixtRkFBQSxjQUFBQyxzRUFBQSxDQUFFLFNBQUF1RixTQUFPYixDQUFDO01BQUEsT0FBQTFFLHNFQUFBLFVBQUF3RixVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQS9FLElBQUEsR0FBQStFLFNBQUEsQ0FBQTlFLElBQUE7VUFBQTtZQUN4QytELENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7WUFBQ2MsU0FBQSxDQUFBL0UsSUFBQTtZQUFBK0UsU0FBQSxDQUFBOUUsSUFBQTtZQUFBLE9BRVRlLFlBQVksQ0FBQzNDLGtEQUFNLENBQUMyRyxhQUFhLEVBQUVMLEtBQUssQ0FBQ00sS0FBSyxDQUFDO1VBQUE7WUFDckRsRCxRQUFRLENBQUNtRCxLQUFLLENBQUMsQ0FBQztZQUFBSCxTQUFBLENBQUE5RSxJQUFBO1lBQUE7VUFBQTtZQUFBOEUsU0FBQSxDQUFBL0UsSUFBQTtZQUFBK0UsU0FBQSxDQUFBdEUsRUFBQSxHQUFBc0UsU0FBQTtZQUVoQkksS0FBSyxDQUFDLGtCQUFrQixDQUFDO1VBQUE7VUFBQTtZQUFBLE9BQUFKLFNBQUEsQ0FBQW5FLElBQUE7UUFBQTtNQUFBLEdBQUFpRSxRQUFBO0lBQUEsQ0FHaEM7SUFBQSxpQkFBQU8sR0FBQTtNQUFBLE9BQUFSLEtBQUEsQ0FBQTlELEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsSUFBQztFQUVGekMsU0FBUyxDQUFDK0csT0FBTyxDQUFDYixVQUFVLENBQUM7QUFDakMsQ0FBQztBQUVELElBQU1jLElBQUk7RUFBQSxJQUFBQyxLQUFBLEdBQUFsRyxtRkFBQSxjQUFBQyxzRUFBQSxDQUFHLFNBQUFrRyxTQUFBO0lBQUEsT0FBQWxHLHNFQUFBLFVBQUFtRyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQTFGLElBQUEsR0FBQTBGLFNBQUEsQ0FBQXpGLElBQUE7UUFBQTtVQUNUeEIsVUFBVSxDQUFDc0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNDLENBQUMsRUFBSztZQUN4Q0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztZQUNsQk0sYUFBYSxDQUFDLENBQUM7VUFDbkIsQ0FBQyxDQUFDO1VBQUFtQixTQUFBLENBQUF6RixJQUFBO1VBQUEsT0FFSWUsWUFBWSxDQUFDM0Msa0RBQU0sQ0FBQzJHLGFBQWEsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBVSxTQUFBLENBQUE5RSxJQUFBO01BQUE7SUFBQSxHQUFBNEUsUUFBQTtFQUFBLENBQzNDO0VBQUEsZ0JBUEtGLElBQUlBLENBQUE7SUFBQSxPQUFBQyxLQUFBLENBQUF6RSxLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBT1Q7QUFFRCxNQUFNdUUsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7VUN0SFoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy8uY29uZmlnLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5jb250YWluZXInKTtcbmNvbnN0IGFkZENpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWNpdHknKVxuY29uc3QgZm9ybVRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZHVsZV9fZm9ybScpXG5jb25zdCBtb2R1bGVUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGVfX3dlYXRoZXInKVxuXG5jb25zdCBnZXRGb3JlY2FzdERheSA9IChjdXJyZW50RGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRheXNPZldlZWsgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGdldERheUNvbmRpdGlvbkljb24gPSBhc3luYyAoY29kZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi93ZWF0aGVyX2NvbmRpdGlvbnMuanNvblwiKVxuICAgICAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgY29uZGl0aW9uSXRlbSA9IHdlYXRoZXJDb25kaXRpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbmRpdGlvbkl0ZW0uaWNvbjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVNb2R1bGUgPSBhc3luYyBmdW5jdGlvbiAoQVBJS2V5LCBjaXR5PVwiYXV0bzppcFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJS2V5fSZxPSR7Y2l0eX0mZGF5cz01XG4gICAgICAgIGApO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBjb25zdCBtb2R1bGUgPSBtb2R1bGVUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG5cbiAgICAgICAgLy8gR2V0IG5lY2Vzc2FyeSBlbGVtZW50czpcbiAgICAgICAgY29uc3QgY2l0eU5hbWVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuY2l0eV9fbmFtZScpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgcHJlc3N1cmVMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmVfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5TGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5X192YWx1ZScpO1xuICAgICAgICBjb25zdCB3aW5kU3BlZWRMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZF9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ3VsLndlYXRoZXJfX2ZvcmVjYXN0Jyk7XG5cbiAgICAgICAgLy8gU2hvdyBBUEkgZGF0YTpcbiAgICAgICAgY2l0eU5hbWVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgdGVtcGVyYXR1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jXG4gICAgICAgIHByZXNzdXJlTGFiZWwuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgXCIgaFBhXCJcbiAgICAgICAgaHVtaWRpdHlMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIlxuICAgICAgICB3aW5kU3BlZWRMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQud2luZF9rcGggKyBcIiBrcGhcIlxuXG4gICAgICAgIC8vIEZvcmVjYXN0OlxuICAgICAgICBjb25zdCBmb3JlY2FzdERheXMgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RWxlbWVudHMgPSBQcm9taXNlLmFsbChmb3JlY2FzdERheXMubWFwKGFzeW5jIChkYXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBnZXRGb3JlY2FzdERheShkYXkuZGF0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdmdUZW1wID0gZGF5LmRheS5hdmd0ZW1wX2M7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gYXdhaXQgZ2V0RGF5Q29uZGl0aW9uSWNvbihkYXkuZGF5LmNvbmRpdGlvbi5jb2RlKTtcblxuICAgICAgICAgICAgXG4gICAgICAgIH0pKVxuXG4gICAgICAgIC8vIEFkZCBldmVudHMgZm9yIGJ1dHRvbnM6XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5tb2R1bGVfX3dlYXRoZXInKS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBVcGRhdGUgSFRNTDpcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChtb2R1bGUpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0Rm9ybU1vZHVsZSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtTW9kdWxlID0gZm9ybVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICBmb3JtTW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgYWRkQ2l0eUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAvLyBDbG9zZSBidXR0b24gZnVuY3Rpb25hbGl0eTpcbiAgICBjb25zdCBjbG9zZUJ0biA9IGZvcm1Nb2R1bGUucXVlcnlTZWxlY3RvcignLmJ0bi0tY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLm1vZHVsZV9fZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICBhZGRDaXR5QnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvLyBTdWJtaXQgYnV0dG9uIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gYnV0dG9uJyk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtTW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXksIGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIGNsb3NlQnRuLmNsaWNrKClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiV3JvbmcgY2l0eSBuYW1lIVwiKVxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgY29udGFpbmVyLnByZXBlbmQoZm9ybU1vZHVsZSk7XG59XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgYWRkQ2l0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZ2V0Rm9ybU1vZHVsZSgpO1xuICAgIH0pXG5cbiAgICBhd2FpdCBjcmVhdGVNb2R1bGUoY29uZmlnLldlYXRoZXJBUElLZXkpO1xufVxuXG5hd2FpdCBtYWluKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZjZlYzQ5NzYwZmYyYzViMTVmYlwiKSJdLCJuYW1lcyI6WyJjb25maWciLCJjb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRDaXR5QnRuIiwiZm9ybVRlbXBsYXRlIiwibW9kdWxlVGVtcGxhdGUiLCJnZXRGb3JlY2FzdERheSIsImN1cnJlbnREYXRlIiwiZGF5c09mV2VlayIsImRhdGUiLCJEYXRlIiwiZGF5SW5kZXgiLCJnZXREYXkiLCJnZXREYXlDb25kaXRpb25JY29uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiY29kZSIsInJlc3BvbnNlIiwid2VhdGhlckNvbmRpdGlvbnMiLCJjb25kaXRpb25JdGVtIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZldGNoIiwic2VudCIsImpzb24iLCJmaW5kIiwiaXRlbSIsImFicnVwdCIsImljb24iLCJ0MCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsImNyZWF0ZU1vZHVsZSIsIl9yZWYyIiwiX2NhbGxlZTMiLCJBUElLZXkiLCJjaXR5IiwiZGF0YSIsIm1vZHVsZSIsImNpdHlOYW1lTGFiZWwiLCJ0ZW1wZXJhdHVyZUxhYmVsIiwicHJlc3N1cmVMYWJlbCIsImh1bWlkaXR5TGFiZWwiLCJ3aW5kU3BlZWRMYWJlbCIsImZvcmVjYXN0TGlzdCIsImZvcmVjYXN0RGF5cyIsImZvcmVjYXN0RWxlbWVudHMiLCJjbG9zZUJ0biIsIl9hcmdzMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsImNsb25lTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJ0ZW1wX2MiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIl9yZWYzIiwiX2NhbGxlZTIiLCJkYXkiLCJkYXlOYW1lIiwiYXZnVGVtcCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImF2Z3RlbXBfYyIsImNvbmRpdGlvbiIsIl94MyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwicmVtb3ZlIiwiYXBwZW5kIiwiX3gyIiwiZ2V0Rm9ybU1vZHVsZSIsImZvcm1Nb2R1bGUiLCJkaXNhYmxlZCIsInN1Ym1pdEJ0biIsImlucHV0IiwiX3JlZjQiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIldlYXRoZXJBUElLZXkiLCJ2YWx1ZSIsImNsaWNrIiwiYWxlcnQiLCJfeDQiLCJwcmVwZW5kIiwibWFpbiIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiXSwic291cmNlUm9vdCI6IiJ9