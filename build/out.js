/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=3001&pathname=%2Fws&logging=info&reconnect=10";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />









/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | { warnings?: boolean, errors?: boolean, trustedTypesPolicyName?: string }} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @type {Status}
 */

var status = {
  isUnloading: false,
  // TODO Workaround for webpack v4, `__webpack_hash__` is not replaced without HotModuleReplacement
  // eslint-disable-next-line camelcase
  currentHash:  true ? __webpack_require__.h() : 0
};
/** @type {Options} */

var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
var parsedResourceQuery = (0,_utils_parseURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])(__resourceQuery);

if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
}

if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
}

if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}

if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}
/**
 * @param {string} level
 */


function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_5__.setLogLevel)(level);
}

if (options.logging) {
  setAllLogLevel(options.logging);
}

self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }

    options.hot = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Hot Module Replacement enabled.");
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }

    options.liveReload = true;
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Live Reloading enabled.");
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("App updated. Recompiling..."); // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Invalid");
  },

  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,

  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }

    options.overlay = value;
  },

  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }

    options.reconnect = value;
  },

  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },

  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Nothing changed.");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Ok");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },
  // TODO: remove in v5 in favor of 'static-changed'

  /**
   * @param {string} file
   */
  "content-changed": function contentChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },

  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn("Warnings while compiling.");

    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("warning", error),
          header = _formatProblem.header,
          body = _formatProblem.body;

      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Warnings", printableWarnings);

    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.warn(printableWarnings[i]);
    }

    var needShowOverlayForWarnings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;

    if (needShowOverlayForWarnings) {
      var trustedTypesPolicyName = typeof options.overlay === "object" && options.overlay.trustedTypesPolicyName;
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("warning", _warnings, trustedTypesPolicyName || null);
    }

    if (params && params.preventReloading) {
      return;
    }

    (0,_utils_reloadApp_js__WEBPACK_IMPORTED_MODULE_7__["default"])(options, status);
  },

  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error("Errors while compiling. Reload prevented.");

    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.formatProblem)("error", error),
          header = _formatProblem2.header,
          body = _formatProblem2.body;

      return "".concat(header, "\n").concat((0,_utils_stripAnsi_js__WEBPACK_IMPORTED_MODULE_1__["default"])(body));
    });

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Errors", printableErrors);

    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(printableErrors[i]);
    }

    var needShowOverlayForErrors = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;

    if (needShowOverlayForErrors) {
      var trustedTypesPolicyName = typeof options.overlay === "object" && options.overlay.trustedTypesPolicyName;
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.show)("error", _errors, trustedTypesPolicyName || null);
    }
  },

  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_5__.log.info("Disconnected!");

    if (options.overlay) {
      (0,_overlay_js__WEBPACK_IMPORTED_MODULE_4__.hide)();
    }

    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_6__["default"])("Close");
  }
};
var socketURL = (0,_utils_createSocketURL_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socketURL, onSocketMessage, options.reconnect);

/***/ }),
/* 1 */
/***/ ((module) => {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
	logLevel = level;
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	}
	return stack;
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");
/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */

function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(typeof string, "`"));
  }

  return string.replace(ansiRegex, "");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stripAnsi);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */

function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var options = {};

  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");

    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      options[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = (0,_getCurrentScriptSource_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    var scriptSourceURL;

    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {// URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }

    if (scriptSourceURL) {
      options = scriptSourceURL;
      options.fromCurrentScript = true;
    }
  }

  return options;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseURL);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  } // Fallback to getting all scripts running in the document.


  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });

  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  } // Fail as there was no script to use.


  throw new Error("[webpack-dev-server] Failed to get current script source.");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentScriptSource);

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(6);
/* global __webpack_dev_server_client__ */

 // this WebsocketClient is here as a default fallback, in case the client is not injected

/* eslint-disable camelcase */

var Client = // eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10; // Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports

var client = null;
/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */

var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;

    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    } // Try to reconnect.


    client = null; // After 10 retries stop trying, to prevent logspam.

    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);

    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);

    this.client = new WebSocket(url);

    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }
  /**
   * @param {(...args: any[]) => void} f
   */


  _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }
    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    } // call f with the message string as the first argument

    /**
     * @param {(...args: any[]) => void} f
     */

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return WebSocketClient;
}();



/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server"; // default level is set on the client side, so it does not need
// to be set by the CLI or API

var defaultLevel = "info"; // options new options, merge with old options

/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */

function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}

setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(9);
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/SyncBailHookFake.js":
/*!*******************************************************!*\
  !*** ./client-src/modules/logger/SyncBailHookFake.js ***!
  \*******************************************************/
/***/ (function(module) {


/**
 * Client stub for tapable SyncBailHook
 */

module.exports = function clientTapableSyncBailHook() {
  return {
    call: function call() {}
  };
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var LogType = Object.freeze({
  error:
  /** @type {"error"} */
  "error",
  // message, c style arguments
  warn:
  /** @type {"warn"} */
  "warn",
  // message, c style arguments
  info:
  /** @type {"info"} */
  "info",
  // message, c style arguments
  log:
  /** @type {"log"} */
  "log",
  // message, c style arguments
  debug:
  /** @type {"debug"} */
  "debug",
  // message, c style arguments
  trace:
  /** @type {"trace"} */
  "trace",
  // no arguments
  group:
  /** @type {"group"} */
  "group",
  // [label]
  groupCollapsed:
  /** @type {"groupCollapsed"} */
  "groupCollapsed",
  // [label]
  groupEnd:
  /** @type {"groupEnd"} */
  "groupEnd",
  // [label]
  profile:
  /** @type {"profile"} */
  "profile",
  // [profileName]
  profileEnd:
  /** @type {"profileEnd"} */
  "profileEnd",
  // [profileName]
  time:
  /** @type {"time"} */
  "time",
  // name, time as [seconds, nanoseconds]
  clear:
  /** @type {"clear"} */
  "clear",
  // no arguments
  status:
  /** @type {"status"} */
  "status" // message, arguments

});
exports.LogType = LogType;
/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");

var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {function(LogTypeEnum, any[]=): void} log log function
   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);

    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this[LOG_SYMBOL](LogType.error, args);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this[LOG_SYMBOL](LogType.warn, args);
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this[LOG_SYMBOL](LogType.info, args);
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this[LOG_SYMBOL](LogType.log, args);
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this[LOG_SYMBOL](LogType.debug, args);
    }
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }

        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      this[LOG_SYMBOL](LogType.status, args);
    }
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      this[LOG_SYMBOL](LogType.group, args);
    }
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }

      this[LOG_SYMBOL](LogType.groupEnd, args);
    }
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }
  }, {
    key: "time",
    value: function time(label) {
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }

      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);

      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }

      var time = process.hrtime(prev);
      this[TIMERS_SYMBOL].delete(label);
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);

      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }

      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);

  return WebpackLogger;
}();

exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_10785__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) !== "undefined" && iter[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var _require = __nested_webpack_require_10785__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    LogType = _require.LogType;
/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */

/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */

/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {function(string): boolean} FilterFunction */

/**
 * @typedef {Object} LoggerConsole
 * @property {function(): void} clear
 * @property {function(): void} trace
 * @property {(...args: any[]) => void} info
 * @property {(...args: any[]) => void} log
 * @property {(...args: any[]) => void} warn
 * @property {(...args: any[]) => void} error
 * @property {(...args: any[]) => void=} debug
 * @property {(...args: any[]) => void=} group
 * @property {(...args: any[]) => void=} groupCollapsed
 * @property {(...args: any[]) => void=} groupEnd
 * @property {(...args: any[]) => void=} status
 * @property {(...args: any[]) => void=} profile
 * @property {(...args: any[]) => void=} profileEnd
 * @property {(...args: any[]) => void=} logTime
 */

/**
 * @typedef {Object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction} filter function
 */


var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace( // eslint-disable-next-line no-useless-escape
    /[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }

  if (item && typeof item === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }

  if (typeof item === "function") {
    return item;
  }

  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};
/**
 * @enum {number}
 */


var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};
/**
 * @param {LoggerOptions} options options object
 * @returns {function(string, LogTypeEnum, any[]): void} logging function
 */

module.exports = function (_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? "info" : _ref$level,
      _ref$debug = _ref.debug,
      debug = _ref$debug === void 0 ? false : _ref$debug,
      console = _ref.console;
  var debugFilters = typeof debug === "boolean" ? [function () {
    return debug;
  }] :
  /** @type {FilterItemTypes[]} */
  [].concat(debug).map(filterToFunction);
  /** @type {number} */

  var loglevel = LogLevel["".concat(level)] || 0;
  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {any[]} args arguments of the log entry
   * @returns {void}
   */

  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        } else {
          return ["[".concat(name, "]")].concat(_toConsumableArray(args));
        }
      } else {
        return [];
      }
    };

    var debug = debugFilters.some(function (f) {
      return f(name);
    });

    switch (type) {
      case LogType.debug:
        if (!debug) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.debug === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;

      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;

      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;

        if (!debug && loglevel > LogLevel.verbose) {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          if (typeof console.groupCollapsed === "function") {
            // eslint-disable-next-line node/no-unsupported-features/node-builtins
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }

          break;
        }

      // falls through

      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.group === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.groupEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.groupEnd();
        }

        break;

      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var ms = args[1] * 1000 + args[2] / 1000000;
          var msg = "[".concat(name, "] ").concat(args[0], ": ").concat(ms, " ms");

          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }

          break;
        }

      case LogType.profile:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profile === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.profileEnd:
        // eslint-disable-next-line node/no-unsupported-features/node-builtins
        if (typeof console.profileEnd === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }

        break;

      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return; // eslint-disable-next-line node/no-unsupported-features/node-builtins

        if (typeof console.clear === "function") {
          // eslint-disable-next-line node/no-unsupported-features/node-builtins
          console.clear();
        }

        break;

      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;

        if (typeof console.status === "function") {
          if (args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else {
          if (args.length !== 0) {
            console.info.apply(console, _toConsumableArray(labeledArgs()));
          }
        }

        break;

      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };

  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_20872__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var SyncBailHook = __nested_webpack_require_20872__(/*! tapable/lib/SyncBailHook */ "./client-src/modules/logger/SyncBailHookFake.js");

var _require = __nested_webpack_require_20872__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
    Logger = _require.Logger;

var createConsoleLogger = __nested_webpack_require_20872__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");
/** @type {createConsoleLogger.LoggerOptions} */


var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */

exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return exports.getLogger("".concat(name, "/").concat(childName));
  });
};
/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */


exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);

  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};

exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_22988__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_22988__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_22988__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_22988__.o(definition, key) && !__nested_webpack_require_22988__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_22988__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_22988__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_22988__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_22988__.d(__nested_webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_22988__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var i in __nested_webpack_exports__) __webpack_export_target__[i] = __nested_webpack_exports__[i];
if(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),
/* 9 */
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatProblem: () => (/* binding */ formatProblem),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   show: () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_1__);
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).


var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
/** @type {HTMLIFrameElement | null | undefined} */

var iframeContainerElement;
/** @type {HTMLDivElement | null | undefined} */

var containerElement;
/** @type {Array<(element: HTMLDivElement) => void>} */

var onLoadQueue = [];
/** @type {TrustedTypePolicy | undefined} */

var overlayTrustedTypesPolicy;
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);
/**
 * @param {string | null} trustedTypesPolicyName
 */

function createContainer(trustedTypesPolicyName) {
  // Enable Trusted Types if they are available in the current browser.
  if (window.trustedTypes) {
    overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
      createHTML: function createHTML(value) {
        return value;
      }
    });
  }

  iframeContainerElement = document.createElement("iframe");
  iframeContainerElement.id = "webpack-dev-server-client-overlay";
  iframeContainerElement.src = "about:blank";
  iframeContainerElement.style.position = "fixed";
  iframeContainerElement.style.left = 0;
  iframeContainerElement.style.top = 0;
  iframeContainerElement.style.right = 0;
  iframeContainerElement.style.bottom = 0;
  iframeContainerElement.style.width = "100vw";
  iframeContainerElement.style.height = "100vh";
  iframeContainerElement.style.border = "none";
  iframeContainerElement.style.zIndex = 9999999999;

  iframeContainerElement.onload = function () {
    containerElement =
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.createElement("div");
    containerElement.id = "webpack-dev-server-client-overlay-div";
    containerElement.style.position = "fixed";
    containerElement.style.boxSizing = "border-box";
    containerElement.style.left = 0;
    containerElement.style.top = 0;
    containerElement.style.right = 0;
    containerElement.style.bottom = 0;
    containerElement.style.width = "100vw";
    containerElement.style.height = "100vh";
    containerElement.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    containerElement.style.color = "#E8E8E8";
    containerElement.style.fontFamily = "Menlo, Consolas, monospace";
    containerElement.style.fontSize = "large";
    containerElement.style.padding = "2rem";
    containerElement.style.lineHeight = "1.2";
    containerElement.style.whiteSpace = "pre-wrap";
    containerElement.style.overflow = "auto";
    var headerElement = document.createElement("span");
    headerElement.innerText = "Compiled with problems:";
    var closeButtonElement = document.createElement("button");
    closeButtonElement.innerText = "X";
    closeButtonElement.style.background = "transparent";
    closeButtonElement.style.border = "none";
    closeButtonElement.style.fontSize = "20px";
    closeButtonElement.style.fontWeight = "bold";
    closeButtonElement.style.color = "white";
    closeButtonElement.style.cursor = "pointer";
    closeButtonElement.style.cssFloat = "right"; // @ts-ignore

    closeButtonElement.style.styleFloat = "right";
    closeButtonElement.addEventListener("click", function () {
      hide();
    });
    containerElement.appendChild(headerElement);
    containerElement.appendChild(closeButtonElement);
    containerElement.appendChild(document.createElement("br"));
    containerElement.appendChild(document.createElement("br"));
    /** @type {Document} */

    /** @type {HTMLIFrameElement} */
    iframeContainerElement.contentDocument.body.appendChild(containerElement);
    onLoadQueue.forEach(function (onLoad) {
      onLoad(
      /** @type {HTMLDivElement} */
      containerElement);
    });
    onLoadQueue = [];
    /** @type {HTMLIFrameElement} */

    iframeContainerElement.onload = null;
  };

  document.body.appendChild(iframeContainerElement);
}
/**
 * @param {(element: HTMLDivElement) => void} callback
 * @param {string | null} trustedTypesPolicyName
 */


function ensureOverlayExists(callback, trustedTypesPolicyName) {
  if (containerElement) {
    // Everything is ready, call the callback right away.
    callback(containerElement);
    return;
  }

  onLoadQueue.push(callback);

  if (iframeContainerElement) {
    return;
  }

  createContainer(trustedTypesPolicyName);
} // Successful compilation.


function hide() {
  if (!iframeContainerElement) {
    return;
  } // Clean up and reset internal state.


  document.body.removeChild(iframeContainerElement);
  iframeContainerElement = null;
  containerElement = null;
}
/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string }} item
 * @returns {{ header: string, body: string }}
 */


function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";

  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || ""; // eslint-disable-next-line no-nested-ternary

    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }

  return {
    header: header,
    body: body
  };
} // Compilation with errors (e.g. syntax error or missing modules).

/**
 * @param {string} type
 * @param {Array<string  | { file?: string, moduleName?: string, loc?: string, message?: string }>} messages
 * @param {string | null} trustedTypesPolicyName
 */


function show(type, messages, trustedTypesPolicyName) {
  ensureOverlayExists(function () {
    messages.forEach(function (message) {
      var entryElement = document.createElement("div");
      var typeElement = document.createElement("span");

      var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;

      typeElement.innerText = header;
      typeElement.style.color = "#".concat(colors.red); // Make it look similar to our terminal.

      var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()((0,html_entities__WEBPACK_IMPORTED_MODULE_1__.encode)(body));
      var messageTextNode = document.createElement("div");
      messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
      entryElement.appendChild(typeElement);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(messageTextNode);
      entryElement.appendChild(document.createElement("br"));
      entryElement.appendChild(document.createElement("br"));
      /** @type {HTMLDivElement} */

      containerElement.appendChild(entryElement);
    });
  }, trustedTypesPolicyName);
}



/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __assign=this&&this.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p]}return t};return __assign.apply(this,arguments)};Object.defineProperty(exports, "__esModule", ({value:true}));var named_references_1=__webpack_require__(13);var numeric_unicode_map_1=__webpack_require__(14);var surrogate_pairs_1=__webpack_require__(15);var allNamedReferences=__assign(__assign({},named_references_1.namedReferences),{all:named_references_1.namedReferences.html5});function replaceUsingRegExp(macroText,macroRegExp,macroReplacer){macroRegExp.lastIndex=0;var replaceMatch=macroRegExp.exec(macroText);var replaceResult;if(replaceMatch){replaceResult="";var replaceLastIndex=0;do{if(replaceLastIndex!==replaceMatch.index){replaceResult+=macroText.substring(replaceLastIndex,replaceMatch.index)}var replaceInput=replaceMatch[0];replaceResult+=macroReplacer(replaceInput);replaceLastIndex=replaceMatch.index+replaceInput.length}while(replaceMatch=macroRegExp.exec(macroText));if(replaceLastIndex!==macroText.length){replaceResult+=macroText.substring(replaceLastIndex)}}else{replaceResult=macroText}return replaceResult}var encodeRegExps={specialChars:/[<>'"&]/g,nonAscii:/[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintable:/[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintableOnly:/[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,extensive:/[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g};var defaultEncodeOptions={mode:"specialChars",level:"all",numeric:"decimal"};function encode(text,_a){var _b=_a===void 0?defaultEncodeOptions:_a,_c=_b.mode,mode=_c===void 0?"specialChars":_c,_d=_b.numeric,numeric=_d===void 0?"decimal":_d,_e=_b.level,level=_e===void 0?"all":_e;if(!text){return""}var encodeRegExp=encodeRegExps[mode];var references=allNamedReferences[level].characters;var isHex=numeric==="hexadecimal";return replaceUsingRegExp(text,encodeRegExp,(function(input){var result=references[input];if(!result){var code=input.length>1?surrogate_pairs_1.getCodePoint(input,0):input.charCodeAt(0);result=(isHex?"&#x"+code.toString(16):"&#"+code)+";"}return result}))}exports.encode=encode;var defaultDecodeOptions={scope:"body",level:"all"};var strict=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g;var attribute=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g;var baseDecodeRegExps={xml:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.xml},html4:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.html4},html5:{strict:strict,attribute:attribute,body:named_references_1.bodyRegExps.html5}};var decodeRegExps=__assign(__assign({},baseDecodeRegExps),{all:baseDecodeRegExps.html5});var fromCharCode=String.fromCharCode;var outOfBoundsChar=fromCharCode(65533);var defaultDecodeEntityOptions={level:"all"};function getDecodedEntity(entity,references,isAttribute,isStrict){var decodeResult=entity;var decodeEntityLastChar=entity[entity.length-1];if(isAttribute&&decodeEntityLastChar==="="){decodeResult=entity}else if(isStrict&&decodeEntityLastChar!==";"){decodeResult=entity}else{var decodeResultByReference=references[entity];if(decodeResultByReference){decodeResult=decodeResultByReference}else if(entity[0]==="&"&&entity[1]==="#"){var decodeSecondChar=entity[2];var decodeCode=decodeSecondChar=="x"||decodeSecondChar=="X"?parseInt(entity.substr(3),16):parseInt(entity.substr(2));decodeResult=decodeCode>=1114111?outOfBoundsChar:decodeCode>65535?surrogate_pairs_1.fromCodePoint(decodeCode):fromCharCode(numeric_unicode_map_1.numericUnicodeMap[decodeCode]||decodeCode)}}return decodeResult}function decodeEntity(entity,_a){var _b=(_a===void 0?defaultDecodeEntityOptions:_a).level,level=_b===void 0?"all":_b;if(!entity){return""}return getDecodedEntity(entity,allNamedReferences[level].entities,false,false)}exports.decodeEntity=decodeEntity;function decode(text,_a){var _b=_a===void 0?defaultDecodeOptions:_a,_c=_b.level,level=_c===void 0?"all":_c,_d=_b.scope,scope=_d===void 0?level==="xml"?"strict":"body":_d;if(!text){return""}var decodeRegExp=decodeRegExps[level][scope];var references=allNamedReferences[level].entities;var isAttribute=scope==="attribute";var isStrict=scope==="strict";return replaceUsingRegExp(text,decodeRegExp,(function(entity){return getDecodedEntity(entity,references,isAttribute,isStrict)}))}exports.decode=decode;
//# sourceMappingURL=./index.js.map

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};exports.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;","º":"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;","À":"&Agrave;","Á":"&Aacute;","Â":"&Acirc;","Ã":"&Atilde;","Ä":"&Auml;","Å":"&Aring;","Æ":"&AElig;","Ç":"&Ccedil;","È":"&Egrave;","É":"&Eacute;","Ê":"&Ecirc;","Ë":"&Euml;","Ì":"&Igrave;","Í":"&Iacute;","Î":"&Icirc;","Ï":"&Iuml;","Ð":"&ETH;","Ñ":"&Ntilde;","Ò":"&Ograve;","Ó":"&Oacute;","Ô":"&Ocirc;","Õ":"&Otilde;","Ö":"&Ouml;","×":"&times;","Ø":"&Oslash;","Ù":"&Ugrave;","Ú":"&Uacute;","Û":"&Ucirc;","Ü":"&Uuml;","Ý":"&Yacute;","Þ":"&THORN;","ß":"&szlig;","à":"&agrave;","á":"&aacute;","â":"&acirc;","ã":"&atilde;","ä":"&auml;","å":"&aring;","æ":"&aelig;","ç":"&ccedil;","è":"&egrave;","é":"&eacute;","ê":"&ecirc;","ë":"&euml;","ì":"&igrave;","í":"&iacute;","î":"&icirc;","ï":"&iuml;","ð":"&eth;","ñ":"&ntilde;","ò":"&ograve;","ó":"&oacute;","ô":"&ocirc;","õ":"&otilde;","ö":"&ouml;","÷":"&divide;","ø":"&oslash;","ù":"&ugrave;","ú":"&uacute;","û":"&ucirc;","ü":"&uuml;","ý":"&yacute;","þ":"&thorn;","ÿ":"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;","Œ":"&OElig;","œ":"&oelig;","Š":"&Scaron;","š":"&scaron;","Ÿ":"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;","ƒ":"&fnof;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":"\n","&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"\t","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{"Æ":"&AElig;","&":"&amp;","Á":"&Aacute;","Ă":"&Abreve;","Â":"&Acirc;","А":"&Acy;","𝔄":"&Afr;","À":"&Agrave;","Α":"&Alpha;","Ā":"&Amacr;","⩓":"&And;","Ą":"&Aogon;","𝔸":"&Aopf;","⁡":"&af;","Å":"&angst;","𝒜":"&Ascr;","≔":"&coloneq;","Ã":"&Atilde;","Ä":"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;","Б":"&Bcy;","∵":"&because;","ℬ":"&bernou;","Β":"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;","Ч":"&CHcy;","©":"&copy;","Ć":"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;","ℭ":"&Cfr;","Č":"&Ccaron;","Ç":"&Ccedil;","Ĉ":"&Ccirc;","∰":"&Cconint;","Ċ":"&Cdot;","¸":"&cedil;","·":"&middot;","Χ":"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;","ℂ":"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;","Ђ":"&DJcy;","Ѕ":"&DScy;","Џ":"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;","Ď":"&Dcaron;","Д":"&Dcy;","∇":"&nabla;","Δ":"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;","Đ":"&Dstrok;","Ŋ":"&ENG;","Ð":"&ETH;","É":"&Eacute;","Ě":"&Ecaron;","Ê":"&Ecirc;","Э":"&Ecy;","Ė":"&Edot;","𝔈":"&Efr;","È":"&Egrave;","∈":"&isinv;","Ē":"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;","Ę":"&Eogon;","𝔼":"&Eopf;","Ε":"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;","ℰ":"&expectation;","⩳":"&Esim;","Η":"&Eta;","Ë":"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;","Ф":"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;","ℱ":"&Fscr;","Ѓ":"&GJcy;",">":"&gt;","Γ":"&Gamma;","Ϝ":"&Gammad;","Ğ":"&Gbreve;","Ģ":"&Gcedil;","Ĝ":"&Gcirc;","Г":"&Gcy;","Ġ":"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;","Ъ":"&HARDcy;","ˇ":"&caron;","^":"&Hat;","Ĥ":"&Hcirc;","ℌ":"&Poincareplane;","ℋ":"&hamilt;","ℍ":"&quaternions;","─":"&boxh;","Ħ":"&Hstrok;","≏":"&bumpeq;","Е":"&IEcy;","Ĳ":"&IJlig;","Ё":"&IOcy;","Í":"&Iacute;","Î":"&Icirc;","И":"&Icy;","İ":"&Idot;","ℑ":"&imagpart;","Ì":"&Igrave;","Ī":"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;","Į":"&Iogon;","𝕀":"&Iopf;","Ι":"&Iota;","ℐ":"&imagline;","Ĩ":"&Itilde;","І":"&Iukcy;","Ï":"&Iuml;","Ĵ":"&Jcirc;","Й":"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;","Ј":"&Jsercy;","Є":"&Jukcy;","Х":"&KHcy;","Ќ":"&KJcy;","Κ":"&Kappa;","Ķ":"&Kcedil;","К":"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;","Љ":"&LJcy;","<":"&lt;","Ĺ":"&Lacute;","Λ":"&Lambda;","⟪":"&Lang;","ℒ":"&lagran;","↞":"&twoheadleftarrow;","Ľ":"&Lcaron;","Ļ":"&Lcedil;","Л":"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;","Ŀ":"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;","Ł":"&Lstrok;","≪":"&ll;","⤅":"&Map;","М":"&Mcy;"," ":"&MediumSpace;","ℳ":"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;","Μ":"&Mu;","Њ":"&NJcy;","Ń":"&Nacute;","Ň":"&Ncaron;","Ņ":"&Ncedil;","Н":"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;","ℕ":"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;","Ñ":"&Ntilde;","Ν":"&Nu;","Œ":"&OElig;","Ó":"&Oacute;","Ô":"&Ocirc;","О":"&Ocy;","Ő":"&Odblac;","𝔒":"&Ofr;","Ò":"&Ograve;","Ō":"&Omacr;","Ω":"&ohm;","Ο":"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;","Ø":"&Oslash;","Õ":"&Otilde;","⨷":"&Otimes;","Ö":"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;","П":"&Pcy;","𝔓":"&Pfr;","Φ":"&Phi;","Π":"&Pi;","±":"&pm;","ℙ":"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;","Ψ":"&Psi;",'"':"&quot;","𝔔":"&Qfr;","ℚ":"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;","Ŕ":"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;","Ř":"&Rcaron;","Ŗ":"&Rcedil;","Р":"&Rcy;","ℜ":"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;","Ρ":"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;","ℝ":"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;","ℛ":"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;","Щ":"&SHCHcy;","Ш":"&SHcy;","Ь":"&SOFTcy;","Ś":"&Sacute;","⪼":"&Sc;","Š":"&Scaron;","Ş":"&Scedil;","Ŝ":"&Scirc;","С":"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;","Σ":"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;","Þ":"&THORN;","™":"&trade;","Ћ":"&TSHcy;","Ц":"&TScy;","\t":"&Tab;","Τ":"&Tau;","Ť":"&Tcaron;","Ţ":"&Tcedil;","Т":"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;","Θ":"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;","Ŧ":"&Tstrok;","Ú":"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;","Ў":"&Ubrcy;","Ŭ":"&Ubreve;","Û":"&Ucirc;","У":"&Ucy;","Ű":"&Udblac;","𝔘":"&Ufr;","Ù":"&Ugrave;","Ū":"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;","Ų":"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;","ϒ":"&upsih;","Υ":"&Upsilon;","Ů":"&Uring;","𝒰":"&Uscr;","Ũ":"&Utilde;","Ü":"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;","В":"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;","Ŵ":"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;","Ξ":"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;","Я":"&YAcy;","Ї":"&YIcy;","Ю":"&YUcy;","Ý":"&Yacute;","Ŷ":"&Ycirc;","Ы":"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;","Ÿ":"&Yuml;","Ж":"&ZHcy;","Ź":"&Zacute;","Ž":"&Zcaron;","З":"&Zcy;","Ż":"&Zdot;","Ζ":"&Zeta;","ℨ":"&zeetrf;","ℤ":"&integers;","𝒵":"&Zscr;","á":"&aacute;","ă":"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;","â":"&acirc;","а":"&acy;","æ":"&aelig;","𝔞":"&afr;","à":"&agrave;","ℵ":"&aleph;","α":"&alpha;","ā":"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;","ą":"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;","å":"&aring;","𝒶":"&ascr;","*":"&midast;","ã":"&atilde;","ä":"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;","б":"&bcy;","„":"&ldquor;","⦰":"&bemptyv;","β":"&beta;","ℶ":"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;","ć":"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;","č":"&ccaron;","ç":"&ccedil;","ĉ":"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;","ċ":"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;","ч":"&chcy;","✓":"&checkmark;","χ":"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;","ℸ":"&daleth;","‐":"&hyphen;","⤏":"&rBarr;","ď":"&dcaron;","д":"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;","δ":"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;","ϝ":"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;","ђ":"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;","ѕ":"&dscy;","⧶":"&dsol;","đ":"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;","џ":"&dzcy;","⟿":"&dzigrarr;","é":"&eacute;","⩮":"&easter;","ě":"&ecaron;","≖":"&eqcirc;","ê":"&ecirc;","≕":"&eqcolon;","э":"&ecy;","ė":"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;","è":"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;","ℓ":"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;","ē":"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;","ŋ":"&eng;"," ":"&ensp;","ę":"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;","ε":"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;","ℯ":"&escr;","η":"&eta;","ð":"&eth;","ë":"&euml;","€":"&euro;","!":"&excl;","ф":"&fcy;","♀":"&female;","ﬃ":"&ffilig;","ﬀ":"&fflig;","ﬄ":"&ffllig;","𝔣":"&ffr;","ﬁ":"&filig;",fj:"&fjlig;","♭":"&flat;","ﬂ":"&fllig;","▱":"&fltns;","ƒ":"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;","ǵ":"&gacute;","γ":"&gamma;","⪆":"&gtrapprox;","ğ":"&gbreve;","ĝ":"&gcirc;","г":"&gcy;","ġ":"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;","ℷ":"&gimel;","ѓ":"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;","ℊ":"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;","ъ":"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;","ℏ":"&plankv;","ĥ":"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;","ħ":"&hstrok;","⁃":"&hybull;","í":"&iacute;","î":"&icirc;","и":"&icy;","е":"&iecy;","¡":"&iexcl;","𝔦":"&ifr;","ì":"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;","ĳ":"&ijlig;","ī":"&imacr;","ı":"&inodot;","⊷":"&imof;","Ƶ":"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;","ё":"&iocy;","į":"&iogon;","𝕚":"&iopf;","ι":"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;","ĩ":"&itilde;","і":"&iukcy;","ï":"&iuml;","ĵ":"&jcirc;","й":"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;","ј":"&jsercy;","є":"&jukcy;","κ":"&kappa;","ϰ":"&varkappa;","ķ":"&kcedil;","к":"&kcy;","𝔨":"&kfr;","ĸ":"&kgreen;","х":"&khcy;","ќ":"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;","ĺ":"&lacute;","⦴":"&laemptyv;","λ":"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;","ľ":"&lcaron;","ļ":"&lcedil;","л":"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;","љ":"&ljcy;","⥫":"&llhard;","◺":"&lltri;","ŀ":"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;","ł":"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;","м":"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;","µ":"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;","μ":"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;","ń":"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;","ŉ":"&napos;","♮":"&natural;","⩃":"&ncap;","ň":"&ncaron;","ņ":"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;","н":"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;","њ":"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;","ñ":"&ntilde;","ν":"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;","ó":"&oacute;","ô":"&ocirc;","о":"&ocy;","ő":"&odblac;","⨸":"&odiv;","⦼":"&odsold;","œ":"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;","ò":"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;","ō":"&omacr;","ω":"&omega;","ο":"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;","ℴ":"&oscr;","ª":"&ordf;","º":"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;","ø":"&oslash;","⊘":"&osol;","õ":"&otilde;","⨶":"&otimesas;","ö":"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;","п":"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;","φ":"&phi;","ϕ":"&varphi;","☎":"&phone;","π":"&pi;","ϖ":"&varpi;","ℎ":"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;","ψ":"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;","ŕ":"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;","ř":"&rcaron;","ŗ":"&rcedil;","р":"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;","ρ":"&rho;","ϱ":"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;","ś":"&sacute;","⪴":"&scE;","⪸":"&succapprox;","š":"&scaron;","ş":"&scedil;","ŝ":"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;","с":"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;","щ":"&shchcy;","ш":"&shcy;","­":"&shy;","σ":"&sigma;","ς":"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;","ь":"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;","ß":"&szlig;","⌖":"&target;","τ":"&tau;","ť":"&tcaron;","ţ":"&tcedil;","т":"&tcy;","⌕":"&telrec;","𝔱":"&tfr;","θ":"&theta;","ϑ":"&vartheta;","þ":"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;","ц":"&tscy;","ћ":"&tshcy;","ŧ":"&tstrok;","⥣":"&uHar;","ú":"&uacute;","ў":"&ubrcy;","ŭ":"&ubreve;","û":"&ucirc;","у":"&ucy;","ű":"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;","ù":"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;","ū":"&umacr;","ų":"&uogon;","𝕦":"&uopf;","υ":"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;","ů":"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;","ũ":"&utilde;","ü":"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;","в":"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;","ŵ":"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;","ξ":"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;","ý":"&yacute;","я":"&yacy;","ŷ":"&ycirc;","ы":"&ycy;","¥":"&yen;","𝔶":"&yfr;","ї":"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;","ю":"&yucy;","ÿ":"&yuml;","ź":"&zacute;","ž":"&zcaron;","з":"&zcy;","ż":"&zdot;","ζ":"&zeta;","𝔷":"&zfr;","ж":"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};
//# sourceMappingURL=./named-references.js.map

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};
//# sourceMappingURL=./numeric-unicode-map.js.map

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.fromCodePoint=String.fromCodePoint||function(astralCodePoint){return String.fromCharCode(Math.floor((astralCodePoint-65536)/1024)+55296,(astralCodePoint-65536)%1024+56320)};exports.getCodePoint=String.prototype.codePointAt?function(input,position){return input.codePointAt(position)}:function(input,position){return(input.charCodeAt(position)-55296)*1024+input.charCodeAt(position+1)-56320+65536};exports.highSurrogateFrom=55296;exports.highSurrogateTo=56319;
//# sourceMappingURL=./surrogate-pairs.js.map

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */
// Send messages to the outside, so plugins can consume it.

/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


/** @typedef {import("../index").Options} Options
/** @typedef {import("../index").Status} Status

/**
 * @param {Options} options
 * @param {Status} status
 */

function reloadApp(_ref, status) {
  var hot = _ref.hot,
      liveReload = _ref.liveReload;

  if (status.isUnloading) {
    return;
  }

  var currentHash = status.currentHash,
      previousHash = status.previousHash;
  var isInitial = currentHash.indexOf(
  /** @type {string} */
  previousHash) >= 0;

  if (isInitial) {
    return;
  }
  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */


  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }

  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;

  if (hot && allowToHot) {
    _log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_0___default().emit("webpackHotUpdate", status.currentHash);

    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(status.currentHash), "*");
    }
  } // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self; // use parent window for reload (in case we're in an iframe with no valid src)

    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;

        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadApp);

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(19);
module.exports = new EventEmitter();


/***/ }),
/* 19 */
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
function format(objURL) {
  var protocol = objURL.protocol || "";

  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }

  var auth = objURL.auth || "";

  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }

  var host = "";

  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));

    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }

  var pathname = objURL.pathname || "";

  if (objURL.slashes) {
    host = "//".concat(host || "");

    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }

  var search = objURL.search || "";

  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }

  var hash = objURL.hash || "";

  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }

  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}
/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */


function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname; // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'

  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]"; // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384

  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }

  var socketURLProtocol = parsedURL.protocol || self.location.protocol; // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.

  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }

  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = ""; // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them

  if (parsedURL.username) {
    socketURLAuth = parsedURL.username; // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.

    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  } // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided


  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;

  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  } // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.


  var socketURLPathname = "/ws";

  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }

  return format({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSocketURL);

/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	/** @type {undefined|string} */
	var lastHash;
	var upToDate = function upToDate() {
		return /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(1);
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log(
						"warning",
						"[HMR] Cannot find update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					if (typeof window !== "undefined") {
						window.location.reload();
					}
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(22)(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log("warning", "[HMR] " + log.formatError(err));
					if (typeof window !== "undefined") {
						window.location.reload();
					}
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(18);
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else {}


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(1);

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
var createModule = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(APIKey) {
    var response, data, module, cityNameLabel, temperatureLabel, pressureLabel, humidityLabel, windSpeedLabel, forecastList, forecastDays, i, day, dayName, avgTemp, newLi;
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
            console.log(day.day.condition.text);
            dayName = getForecastDay(day.date);
            avgTemp = day.day.avgtemp_c;
            newLi = document.createElement('li');
            newLi.innerHTML = "\n                <li>\n                  <span class=\"day\">".concat(dayName, "</span> <img src=\"assets/icons/snow.svg\"/>\n                  <span class=\"temperature\"><span class=\"temperature__value\">").concat(avgTemp, "</span>&deg;C</span>\n                </li>\n            ");
            forecastList.append(newLi);
          }

          // Update HTML:
          container.append(module);
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

/***/ }),
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(26)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(27)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  WeatherAPIKey: '1343f8ea0eb2442ea9d183929242311'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f4bfa4ce6982fdbe7d63")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "es6-async-await:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatees6_async_await"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(0);
/******/ 	__webpack_require__(21);
/******/ 	var __webpack_exports__ = __webpack_require__(23);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkIseUJBQXlCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qix1QkFBdUIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLDZCQUE2Qix5QkFBeUIsMkJBQTJCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDJCQUEyQix5QkFBeUIsNkJBQTZCLDJCQUEyQiwyQkFBMkIsNkJBQTZCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLHlCQUF5QiwyQkFBMkIsMkJBQTJCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDJCQUEyQix5QkFBeUIsNkJBQTZCLDZCQUE2QiwyQkFBMkIseUJBQXlCLHVCQUF1Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QiwyQkFBMkIsNkJBQTZCLHlCQUF5Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qix5QkFBeUIsdUJBQXVCLHFCQUFxQixxQkFBcUIsY0FBYyxjQUFjLGVBQWUsZUFBZSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsZUFBZSxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsWUFBWSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsV0FBVyxXQUFXLGdCQUFnQixXQUFXLFlBQVksY0FBYyxZQUFZLGdCQUFnQixZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsYUFBYSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsWUFBWSxjQUFjLGFBQWEsY0FBYyxlQUFlLFdBQVcsV0FBVyxXQUFXLGdCQUFnQixXQUFXLFlBQVksZUFBZSxjQUFjLFlBQVksZ0JBQWdCLFlBQVksWUFBWSxZQUFZLGNBQWMsaUJBQWlCLGNBQWMsWUFBWSxhQUFhLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsYUFBYSxjQUFjLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsZUFBZSxhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxXQUFXLGFBQWEsWUFBWSxjQUFjLGVBQWUsY0FBYyxhQUFhLGNBQWMsWUFBWSxZQUFZLFdBQVcsWUFBWSxZQUFZLFlBQVksZUFBZSxZQUFZLGFBQWEsY0FBYyxXQUFXLGNBQWMsV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsYUFBYSxhQUFhLFlBQVksZUFBZSxjQUFjLGVBQWUsY0FBYyxNQUFNLGFBQWEsV0FBVyxhQUFhLGNBQWMsYUFBYSxjQUFjLGVBQWUsWUFBWSxlQUFlLGFBQWEsWUFBWSxhQUFhLGFBQWEsY0FBYyxZQUFZLFlBQVksWUFBWSxhQUFhLFlBQVksZUFBZSxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGFBQWEsYUFBYSxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGFBQWEsZUFBZSxlQUFlLGNBQWMsYUFBYSxZQUFZLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLGFBQWEsWUFBWSxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsYUFBYSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsYUFBYSxlQUFlLGNBQWMsYUFBYSxhQUFhLFlBQVksV0FBVyxXQUFXLGNBQWMsY0FBYyxlQUFlLGVBQWUsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGVBQWUsYUFBYSxZQUFZLFlBQVksWUFBWSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNB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LGNBQWMsWUFBWSxhQUFhLGdCQUFnQixjQUFjLGVBQWUsY0FBYyxjQUFjLGVBQWUsY0FBYyxpQkFBaUIsbUJBQW1CLGlCQUFpQixtQkFBbUIsY0FBYyxjQUFjLGVBQWUsZUFBZSxpQkFBaUIsYUFBYSxlQUFlLG9CQUFvQixnQkFBZ0IsWUFBWSxlQUFlLGVBQWUsaUJBQWlCLGNBQWMsY0FBYyxjQUFjLGFBQWEsYUFBYSxZQUFZLGVBQWUsZUFBZSxZQUFZLGFBQWEsa0JBQWtCLGNBQWMsb0JBQW9CLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxlQUFlLGVBQWUsYUFBYSxpQkFBaUIsY0FBYyxlQUFlLGNBQWMsWUFBWSxlQUFlLGFBQWEsZUFBZSxjQUFjLGFBQWEsbUJBQW1CLGFBQWEseUJBQXlCLGFBQWEsY0FBYyxjQUFjLGNBQWMsbUJBQW1CLGNBQWMsYUFBYSxjQUFjLGFBQWEsaUJBQWlCLGdCQUFnQixnQkFBZ0IsY0FBYyxnQkFBZ0IsY0FBYyxjQUFjLGVBQWUsYUFBYSxjQUFjLGFBQWEsWUFBWSxjQUFjLGVBQWUsYUFBYSxhQUFhLGFBQWEsYUFBYSwwQkFBMEIsZUFBZSxlQUFlLGFBQWEsY0FBYyxjQUFjLGVBQWUsY0FBYyxlQUFlLGFBQWEsY0FBYyxjQUFjLGFBQWEsV0FBVyxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsZUFBZSxjQUFjLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGVBQWUsZUFBZSxZQUFZLGFBQWEsYUFBYSxlQUFlLGlCQUFpQixjQUFjLGVBQWUsZUFBZSxlQUFlLGFBQWEsWUFBWSxjQUFjLFlBQVksY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsYUFBYSxpQkFBaUIsYUFBYSxjQUFjLGFBQWEsc0JBQXNCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlCQUFpQixpQkFBaUIsY0FBYyxnQkFBZ0IsaUJBQWlCLGVBQWUsZ0JBQWdCLGNBQWMsY0FBYyxZQUFZLGVBQWUsaUJBQWlCLGFBQWEsYUFBYSxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixpQkFBaUIsWUFBWSxlQUFlLGdCQUFnQixhQUFhLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGNBQWMsYUFBYSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGlCQUFpQixhQUFhLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLGVBQWUsWUFBWSxlQUFlLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsY0FBYyxjQUFjLGdCQUFnQixhQUFhLGdCQUFnQixhQUFhLGFBQWEsYUFBYSxrQkFBa0IsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxXQUFXLGFBQWEsYUFBYSxjQUFjLGlCQUFpQixlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxjQUFjLGVBQWUsbUJBQW1CLGdCQUFnQixjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsYUFBYSxjQUFjLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixnQkFBZ0Isb0JBQW9CLG9CQUFvQix1QkFBdUIsZ0JBQWdCLFlBQVksaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGNBQWMsY0FBYyx3QkFBd0IsZ0JBQWdCLGNBQWMsY0FBYyxlQUFlLGNBQWMsZUFBZSxhQUFhLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxZQUFZLHVCQUF1QixjQUFjLFlBQVksY0FBYyxnQkFBZ0IsZUFBZSxhQUFhLGNBQWMsZUFBZSxjQUFjLGVBQWUsZUFBZSxhQUFhLGlCQUFpQixlQUFlLGFBQWEsY0FBYyxhQUFhLGVBQWUsZUFBZSxjQUFjLGlCQUFpQixlQUFlLGNBQWMsYUFBYSxhQUFhLGVBQWUsY0FBYyxxQkFBcUIsZ0JBQWdCLGFBQWEsaUJBQWlCLGVBQWUsZUFBZSxlQUFlLGVBQWUsY0FBYyxnQkFBZ0IsWUFBWSxhQUFhLHNCQUFzQixhQUFhLFdBQVcsZUFBZSxtQkFBbUIsZUFBZSxXQUFXLGlCQUFpQixZQUFZLG9CQUFvQixlQUFlLGNBQWMsbUJBQW1CLGVBQWUsZUFBZSxhQUFhLFlBQVksYUFBYSxjQUFjLGNBQWMsYUFBYSxlQUFlLGNBQWMsZ0JBQWdCLG1CQUFtQixlQUFlLGdCQUFnQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixjQUFjLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksZUFBZSxlQUFlLGNBQWMsZUFBZSxhQUFhLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGNBQWMsa0JBQWtCLGNBQWMsaUJBQWlCLGFBQWEsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxlQUFlLGNBQWMsZUFBZSxjQUFjLG1CQUFtQixlQUFlLGNBQWMsa0JBQWtCLGVBQWUsY0FBYyxZQUFZLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsY0FBYyxlQUFlLGFBQWEsY0FBYyxhQUFhLFlBQVksWUFBWSxZQUFZLGNBQWMsaUJBQWlCLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxjQUFjLGFBQWEsY0FBYyxlQUFlLGVBQWUsZ0JBQWdCLGVBQWUsY0FBYyxlQUFlLGdCQUFnQiw0QkFBNEIsZUFBZSxjQUFjLGtCQUFrQixhQUFhLGVBQWUsYUFBYSxlQUFlLGVBQWUsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLGVBQWUsY0FBYyxlQUFlLGVBQWUsZUFBZSxjQUFjLFlBQVksYUFBYSxjQUFjLGFBQWEsZUFBZSxhQUFhLGFBQWEsZUFBZSxjQUFjLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGNBQWMsaUJBQWlCLGlCQUFpQixpQkFBaUIsY0FBYyxhQUFhLGNBQWMsY0FBYyxhQUFhLGVBQWUsY0FBYyxjQUFjLGdCQUFnQixjQUFjLGVBQWUsZUFBZSxjQUFjLGFBQWEsY0FBYyxZQUFZLGFBQWEsY0FBYyxjQUFjLGNBQWMsZUFBZSxjQUFjLGNBQWMsaUJBQWlCLGVBQWUsWUFBWSxhQUFhLGVBQWUsYUFBYSxhQUFhLGNBQWMsY0FBYyxlQUFlLGNBQWMsbUJBQW1CLGFBQWEsZUFBZSxpQkFBaUIsZUFBZSxjQUFjLG1CQUFtQixjQUFjLGdCQUFnQixlQUFlLHNCQUFzQixlQUFlLGdCQUFnQixzQkFBc0IsWUFBWSxlQUFlLGFBQWEsZUFBZSxjQUFjLGNBQWMsSUFBSSxTQUFTLGFBQWEsY0FBYyxnQkFBZ0IsZ0JBQWdCLGVBQWUsZUFBZSxZQUFZLGFBQWEsZ0JBQWdCLGlCQUFpQixhQUFhLFlBQVksY0FBYyxlQUFlLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWMsZUFBZSxjQUFjLGVBQWUsYUFBYSxZQUFZLGVBQWUsY0FBYyxhQUFhLGVBQWUsY0FBYyxlQUFlLG1CQUFtQixjQUFjLGlCQUFpQixhQUFhLGNBQWMsY0FBYyxjQUFjLGFBQWEsZUFBZSxjQUFjLGNBQWMsZUFBZSxnQkFBZ0IsZUFBZSxnQkFBZ0IsYUFBYSxlQUFlLGVBQWUsWUFBWSxjQUFjLGVBQWUsY0FBYyxjQUFjLGNBQWMsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGVBQWUsZ0JBQWdCLGVBQWUscUJBQXFCLGlCQUFpQixnQkFBZ0IsY0FBYyxjQUFjLGNBQWMsYUFBYSxnQkFBZ0IsZUFBZSxlQUFlLFlBQVksY0FBYyxhQUFhLFlBQVksY0FBYyxlQUFlLGNBQWMsZ0JBQWdCLGFBQWEsZUFBZSxjQUFjLGNBQWMsV0FBVyxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsYUFBYSxlQUFlLGVBQWUsa0JBQWtCLGFBQWEsWUFBWSxjQUFjLGNBQWMsZUFBZSxlQUFlLGFBQWEsYUFBYSx3QkFBd0IsY0FBYyxZQUFZLGFBQWEsYUFBYSxlQUFlLG1CQUFtQixhQUFhLGNBQWMsWUFBWSxnQkFBZ0Isa0JBQWtCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsZUFBZSxnQkFBZ0Isb0JBQW9CLGdCQUFnQixnQkFBZ0IsY0FBYyxhQUFhLG9CQUFvQixhQUFhLG9CQUFvQixlQUFlLFdBQVcsWUFBWSxlQUFlLGNBQWMsZUFBZSxlQUFlLGNBQWMsZUFBZSxjQUFjLGNBQWMsZ0JBQWdCLGVBQWUsY0FBYyxjQUFjLGlCQUFpQixlQUFlLGlCQUFpQixlQUFlLGNBQWMsZUFBZSxlQUFlLGVBQWUsY0FBYyxZQUFZLGVBQWUsYUFBYSxlQUFlLGNBQWMsY0FBYyxhQUFhLGFBQWEsZUFBZSxZQUFZLGNBQWMsY0FBYyxnQkFBZ0IsWUFBWSxjQUFjLGNBQWMsZ0JBQWdCLGFBQWEsY0FBYyxhQUFhLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGVBQWUsYUFBYSxnQkFBZ0IsWUFBWSxlQUFlLGFBQWEsZUFBZSxpQkFBaUIsYUFBYSxjQUFjLGFBQWEsZUFBZSxjQUFjLFlBQVksZUFBZSxlQUFlLGVBQWUsZ0JBQWdCLGFBQWEsWUFBWSxlQUFlLGNBQWMsV0FBVyxjQUFjLGdCQUFnQixhQUFhLGlCQUFpQixnQkFBZ0IsZUFBZSxjQUFjLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGNBQWMsY0FBYyxZQUFZLG1CQUFtQixjQUFjLGFBQWEsZUFBZSxjQUFjLGlCQUFpQixpQkFBaUIsaUJBQWlCLGVBQWUsY0FBYyxZQUFZLGVBQWUsYUFBYSxjQUFjLGVBQWUsY0FBYyxnQkFBZ0IsY0FBYyxlQUFlLGFBQWEsY0FBYyxlQUFlLGlCQUFpQixjQUFjLGNBQWMsY0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUIsMkJBQTJCO1dBQzlDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLGtCQUFrQixjQUFjO1dBQ2hDO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLE1BQU07V0FDcEI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYyxhQUFhO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsaUJBQWlCLDRCQUE0QjtXQUM3QztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBLGdCQUFnQiw0QkFBNEI7V0FDNUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0JBQWtCLHVDQUF1QztXQUN6RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQixpQ0FBaUM7V0FDcEQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQix1Q0FBdUM7V0FDN0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHNCQUFzQjtXQUM1QztXQUNBO1dBQ0EsU0FBUztXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1gsV0FBVztXQUNYO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsWUFBWTtXQUNaO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQSxtQkFBbUIsd0NBQXdDO1dBQzNEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1IsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRSxJQUFJO1dBQ047V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLHNDQUFzQztXQUN0QztXQUNBO1dBQ0EsRUFBRTtXQUNGOztXQUVBOztXQUVBOzs7OztVRTNmQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL3N0cmlwQW5zaS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9wYXJzZVVSTC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9nZXRDdXJyZW50U2NyaXB0U291cmNlLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3NvY2tldC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvbW9kdWxlcy9sb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5LmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9hbnNpLWh0bWwtY29tbXVuaXR5L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9odG1sLWVudGl0aWVzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbmFtZWQtcmVmZXJlbmNlcy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvbnVtZXJpYy11bmljb2RlLW1hcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvaHRtbC1lbnRpdGllcy9saWIvc3Vycm9nYXRlLXBhaXJzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL3NlbmRNZXNzYWdlLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL3JlbG9hZEFwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9jcmVhdGVTb2NrZXRVUkwuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLy5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnksIF9fd2VicGFja19oYXNoX18gKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2VicGFjay9tb2R1bGVcIiAvPlxuaW1wb3J0IHdlYnBhY2tIb3RMb2cgZnJvbSBcIndlYnBhY2svaG90L2xvZy5qc1wiO1xuaW1wb3J0IHN0cmlwQW5zaSBmcm9tIFwiLi91dGlscy9zdHJpcEFuc2kuanNcIjtcbmltcG9ydCBwYXJzZVVSTCBmcm9tIFwiLi91dGlscy9wYXJzZVVSTC5qc1wiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IGZvcm1hdFByb2JsZW0sIHNob3csIGhpZGUgfSBmcm9tIFwiLi9vdmVybGF5LmpzXCI7XG5pbXBvcnQgeyBsb2csIHNldExvZ0xldmVsIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSBcIi4vdXRpbHMvc2VuZE1lc3NhZ2UuanNcIjtcbmltcG9ydCByZWxvYWRBcHAgZnJvbSBcIi4vdXRpbHMvcmVsb2FkQXBwLmpzXCI7XG5pbXBvcnQgY3JlYXRlU29ja2V0VVJMIGZyb20gXCIuL3V0aWxzL2NyZWF0ZVNvY2tldFVSTC5qc1wiO1xuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGhvdFxuICogQHByb3BlcnR5IHtib29sZWFufSBsaXZlUmVsb2FkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCB7IHdhcm5pbmdzPzogYm9vbGVhbiwgZXJyb3JzPzogYm9vbGVhbiwgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZT86IHN0cmluZyB9fSBvdmVybGF5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2xvZ2dpbmddXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3JlY29ubmVjdF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0YXR1c1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc1VubG9hZGluZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnJlbnRIYXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3ByZXZpb3VzSGFzaF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlIHtTdGF0dXN9XG4gKi9cblxudmFyIHN0YXR1cyA9IHtcbiAgaXNVbmxvYWRpbmc6IGZhbHNlLFxuICAvLyBUT0RPIFdvcmthcm91bmQgZm9yIHdlYnBhY2sgdjQsIGBfX3dlYnBhY2tfaGFzaF9fYCBpcyBub3QgcmVwbGFjZWQgd2l0aG91dCBIb3RNb2R1bGVSZXBsYWNlbWVudFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGN1cnJlbnRIYXNoOiB0eXBlb2YgX193ZWJwYWNrX2hhc2hfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19oYXNoX18gOiBcIlwiXG59O1xuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgaG90OiBmYWxzZSxcbiAgbGl2ZVJlbG9hZDogZmFsc2UsXG4gIHByb2dyZXNzOiBmYWxzZSxcbiAgb3ZlcmxheTogZmFsc2Vcbn07XG52YXIgcGFyc2VkUmVzb3VyY2VRdWVyeSA9IHBhcnNlVVJMKF9fcmVzb3VyY2VRdWVyeSk7XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmhvdCA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICBsb2cuaW5mbyhcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgZW5hYmxlZC5cIik7XG59XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5W1wibGl2ZS1yZWxvYWRcIl0gPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMubGl2ZVJlbG9hZCA9IHRydWU7XG4gIGxvZy5pbmZvKFwiTGl2ZSBSZWxvYWRpbmcgZW5hYmxlZC5cIik7XG59XG5cbmlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LmxvZ2dpbmcpIHtcbiAgb3B0aW9ucy5sb2dnaW5nID0gcGFyc2VkUmVzb3VyY2VRdWVyeS5sb2dnaW5nO1xufVxuXG5pZiAodHlwZW9mIHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIG9wdGlvbnMucmVjb25uZWN0ID0gTnVtYmVyKHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRBbGxMb2dMZXZlbChsZXZlbCkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBITVIgbG9nZ2VyIG9wZXJhdGUgc2VwYXJhdGVseSBmcm9tIGRldiBzZXJ2ZXIgbG9nZ2VyXG4gIHdlYnBhY2tIb3RMb2cuc2V0TG9nTGV2ZWwobGV2ZWwgPT09IFwidmVyYm9zZVwiIHx8IGxldmVsID09PSBcImxvZ1wiID8gXCJpbmZvXCIgOiBsZXZlbCk7XG4gIHNldExvZ0xldmVsKGxldmVsKTtcbn1cblxuaWYgKG9wdGlvbnMubG9nZ2luZykge1xuICBzZXRBbGxMb2dMZXZlbChvcHRpb25zLmxvZ2dpbmcpO1xufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBzdGF0dXMuaXNVbmxvYWRpbmcgPSB0cnVlO1xufSk7XG52YXIgb25Tb2NrZXRNZXNzYWdlID0ge1xuICBob3Q6IGZ1bmN0aW9uIGhvdCgpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5ob3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMuaG90ID0gdHJ1ZTtcbiAgICBsb2cuaW5mbyhcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnQgZW5hYmxlZC5cIik7XG4gIH0sXG4gIGxpdmVSZWxvYWQ6IGZ1bmN0aW9uIGxpdmVSZWxvYWQoKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnlbXCJsaXZlLXJlbG9hZFwiXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5saXZlUmVsb2FkID0gdHJ1ZTtcbiAgICBsb2cuaW5mbyhcIkxpdmUgUmVsb2FkaW5nIGVuYWJsZWQuXCIpO1xuICB9LFxuICBpbnZhbGlkOiBmdW5jdGlvbiBpbnZhbGlkKCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlY29tcGlsaW5nLi4uXCIpOyAvLyBGaXhlcyAjMTA0Mi4gb3ZlcmxheSBkb2Vzbid0IGNsZWFyIGlmIGVycm9ycyBhcmUgZml4ZWQgYnV0IHdhcm5pbmdzIHJlbWFpbi5cblxuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShcIkludmFsaWRcIik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICBoYXNoOiBmdW5jdGlvbiBoYXNoKF9oYXNoKSB7XG4gICAgc3RhdHVzLnByZXZpb3VzSGFzaCA9IHN0YXR1cy5jdXJyZW50SGFzaDtcbiAgICBzdGF0dXMuY3VycmVudEhhc2ggPSBfaGFzaDtcbiAgfSxcbiAgbG9nZ2luZzogc2V0QWxsTG9nTGV2ZWwsXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIG92ZXJsYXk6IGZ1bmN0aW9uIG92ZXJsYXkodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5vdmVybGF5ID0gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgcmVjb25uZWN0OiBmdW5jdGlvbiByZWNvbm5lY3QodmFsdWUpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9wdGlvbnMucmVjb25uZWN0ID0gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAgICovXG4gIHByb2dyZXNzOiBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSkge1xuICAgIG9wdGlvbnMucHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHt7IHBsdWdpbk5hbWU/OiBzdHJpbmcsIHBlcmNlbnQ6IG51bWJlciwgbXNnOiBzdHJpbmcgfX0gZGF0YVxuICAgKi9cbiAgXCJwcm9ncmVzcy11cGRhdGVcIjogZnVuY3Rpb24gcHJvZ3Jlc3NVcGRhdGUoZGF0YSkge1xuICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICBsb2cuaW5mbyhcIlwiLmNvbmNhdChkYXRhLnBsdWdpbk5hbWUgPyBcIltcIi5jb25jYXQoZGF0YS5wbHVnaW5OYW1lLCBcIl0gXCIpIDogXCJcIikuY29uY2F0KGRhdGEucGVyY2VudCwgXCIlIC0gXCIpLmNvbmNhdChkYXRhLm1zZywgXCIuXCIpKTtcbiAgICB9XG5cbiAgICBzZW5kTWVzc2FnZShcIlByb2dyZXNzXCIsIGRhdGEpO1xuICB9LFxuICBcInN0aWxsLW9rXCI6IGZ1bmN0aW9uIHN0aWxsT2soKSB7XG4gICAgbG9nLmluZm8oXCJOb3RoaW5nIGNoYW5nZWQuXCIpO1xuXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgaGlkZSgpO1xuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKFwiU3RpbGxPa1wiKTtcbiAgfSxcbiAgb2s6IGZ1bmN0aW9uIG9rKCkge1xuICAgIHNlbmRNZXNzYWdlKFwiT2tcIik7XG5cbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuXG4gICAgcmVsb2FkQXBwKG9wdGlvbnMsIHN0YXR1cyk7XG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSBpbiB2NSBpbiBmYXZvciBvZiAnc3RhdGljLWNoYW5nZWQnXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAqL1xuICBcImNvbnRlbnQtY2hhbmdlZFwiOiBmdW5jdGlvbiBjb250ZW50Q2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAqL1xuICBcInN0YXRpYy1jaGFuZ2VkXCI6IGZ1bmN0aW9uIHN0YXRpY0NoYW5nZWQoZmlsZSkge1xuICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGZpbGUgPyBcIlxcXCJcIi5jb25jYXQoZmlsZSwgXCJcXFwiXCIpIDogXCJDb250ZW50XCIsIFwiIGZyb20gc3RhdGljIGRpcmVjdG9yeSB3YXMgY2hhbmdlZC4gUmVsb2FkaW5nLi4uXCIpKTtcbiAgICBzZWxmLmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IHdhcm5pbmdzXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAgICovXG4gIHdhcm5pbmdzOiBmdW5jdGlvbiB3YXJuaW5ncyhfd2FybmluZ3MsIHBhcmFtcykge1xuICAgIGxvZy53YXJuKFwiV2FybmluZ3Mgd2hpbGUgY29tcGlsaW5nLlwiKTtcblxuICAgIHZhciBwcmludGFibGVXYXJuaW5ncyA9IF93YXJuaW5ncy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0gPSBmb3JtYXRQcm9ibGVtKFwid2FybmluZ1wiLCBlcnJvciksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyLCBcIlxcblwiKS5jb25jYXQoc3RyaXBBbnNpKGJvZHkpKTtcbiAgICB9KTtcblxuICAgIHNlbmRNZXNzYWdlKFwiV2FybmluZ3NcIiwgcHJpbnRhYmxlV2FybmluZ3MpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVXYXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLndhcm4ocHJpbnRhYmxlV2FybmluZ3NbaV0pO1xuICAgIH1cblxuICAgIHZhciBuZWVkU2hvd092ZXJsYXlGb3JXYXJuaW5ncyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS53YXJuaW5ncztcblxuICAgIGlmIChuZWVkU2hvd092ZXJsYXlGb3JXYXJuaW5ncykge1xuICAgICAgdmFyIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMub3ZlcmxheS50cnVzdGVkVHlwZXNQb2xpY3lOYW1lO1xuICAgICAgc2hvdyhcIndhcm5pbmdcIiwgX3dhcm5pbmdzLCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnByZXZlbnRSZWxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZWxvYWRBcHAob3B0aW9ucywgc3RhdHVzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcltdfSBlcnJvcnNcbiAgICovXG4gIGVycm9yczogZnVuY3Rpb24gZXJyb3JzKF9lcnJvcnMpIHtcbiAgICBsb2cuZXJyb3IoXCJFcnJvcnMgd2hpbGUgY29tcGlsaW5nLiBSZWxvYWQgcHJldmVudGVkLlwiKTtcblxuICAgIHZhciBwcmludGFibGVFcnJvcnMgPSBfZXJyb3JzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbTIgPSBmb3JtYXRQcm9ibGVtKFwiZXJyb3JcIiwgZXJyb3IpLFxuICAgICAgICAgIGhlYWRlciA9IF9mb3JtYXRQcm9ibGVtMi5oZWFkZXIsXG4gICAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtMi5ib2R5O1xuXG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQoaGVhZGVyLCBcIlxcblwiKS5jb25jYXQoc3RyaXBBbnNpKGJvZHkpKTtcbiAgICB9KTtcblxuICAgIHNlbmRNZXNzYWdlKFwiRXJyb3JzXCIsIHByaW50YWJsZUVycm9ycyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW50YWJsZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLmVycm9yKHByaW50YWJsZUVycm9yc1tpXSk7XG4gICAgfVxuXG4gICAgdmFyIG5lZWRTaG93T3ZlcmxheUZvckVycm9ycyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS5lcnJvcnM7XG5cbiAgICBpZiAobmVlZFNob3dPdmVybGF5Rm9yRXJyb3JzKSB7XG4gICAgICB2YXIgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZSA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5vdmVybGF5LnRydXN0ZWRUeXBlc1BvbGljeU5hbWU7XG4gICAgICBzaG93KFwiZXJyb3JcIiwgX2Vycm9ycywgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZSB8fCBudWxsKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoX2Vycm9yKSB7XG4gICAgbG9nLmVycm9yKF9lcnJvcik7XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBsb2cuaW5mbyhcIkRpc2Nvbm5lY3RlZCFcIik7XG5cbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBoaWRlKCk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoXCJDbG9zZVwiKTtcbiAgfVxufTtcbnZhciBzb2NrZXRVUkwgPSBjcmVhdGVTb2NrZXRVUkwocGFyc2VkUmVzb3VyY2VRdWVyeSk7XG5zb2NrZXQoc29ja2V0VVJMLCBvblNvY2tldE1lc3NhZ2UsIG9wdGlvbnMucmVjb25uZWN0KTsiLCIvKiogQHR5cGVkZWYge1wiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCJ9IExvZ0xldmVsICovXG5cbi8qKiBAdHlwZSB7TG9nTGV2ZWx9ICovXG52YXIgbG9nTGV2ZWwgPSBcImluZm9cIjtcblxuZnVuY3Rpb24gZHVtbXkoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUsIGlmIHNob3VsZCBsb2dcbiAqL1xuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KG1zZz86IHN0cmluZykgPT4gdm9pZH0gbG9nRm4gbG9nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7KGxldmVsOiBMb2dMZXZlbCwgbXNnPzogc3RyaW5nKSA9PiB2b2lkfSBmdW5jdGlvbiB0aGF0IGxvZ3Mgd2hlbiBsb2cgbGV2ZWwgaXMgc3VmZmljaWVudFxuICovXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gbXNnIG1lc3NhZ2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGV2ZWwsIG1zZykge1xuXHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdGlmIChsZXZlbCA9PT0gXCJpbmZvXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUud2Fybihtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdH1cblx0fVxufTtcblxudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cCA9IGxvZ0dyb3VwKGdyb3VwKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBDb2xsYXBzZWQgPSBsb2dHcm91cChncm91cENvbGxhcHNlZCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwRW5kID0gbG9nR3JvdXAoZ3JvdXBFbmQpO1xuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICovXG5tb2R1bGUuZXhwb3J0cy5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuXHRsb2dMZXZlbCA9IGxldmVsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgZXJyb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBlcnJvclxuICovXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fVxuXHRyZXR1cm4gc3RhY2s7XG59O1xuIiwidmFyIGFuc2lSZWdleCA9IG5ldyBSZWdFeHAoW1wiW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KVwiLCBcIig/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnEtdXk9Pjx+XSkpXCJdLmpvaW4oXCJ8XCIpLCBcImdcIik7XG4vKipcbiAqXG4gKiBTdHJpcCBbQU5TSSBlc2NhcGUgY29kZXNdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUpIGZyb20gYSBzdHJpbmcuXG4gKiBBZGFwdGVkIGZyb20gY29kZSBvcmlnaW5hbGx5IHJlbGVhc2VkIGJ5IFNpbmRyZSBTb3JodXNcbiAqIExpY2Vuc2VkIHRoZSBNSVQgTGljZW5zZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBzdHJpcEFuc2koc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgYHN0cmluZ2AsIGdvdCBgXCIuY29uY2F0KHR5cGVvZiBzdHJpbmcsIFwiYFwiKSk7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4LCBcIlwiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBBbnNpOyIsImltcG9ydCBnZXRDdXJyZW50U2NyaXB0U291cmNlIGZyb20gXCIuL2dldEN1cnJlbnRTY3JpcHRTb3VyY2UuanNcIjtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlUXVlcnlcbiAqIEByZXR1cm5zIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfX1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVVSTChyZXNvdXJjZVF1ZXJ5KSB7XG4gIC8qKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfX0gKi9cbiAgdmFyIG9wdGlvbnMgPSB7fTtcblxuICBpZiAodHlwZW9mIHJlc291cmNlUXVlcnkgPT09IFwic3RyaW5nXCIgJiYgcmVzb3VyY2VRdWVyeSAhPT0gXCJcIikge1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSByZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpLnNwbGl0KFwiJlwiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFpciA9IHNlYXJjaFBhcmFtc1tpXS5zcGxpdChcIj1cIik7XG4gICAgICBvcHRpb25zW3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBFbHNlLCBnZXQgdGhlIHVybCBmcm9tIHRoZSA8c2NyaXB0PiB0aGlzIGZpbGUgd2FzIGNhbGxlZCB3aXRoLlxuICAgIHZhciBzY3JpcHRTb3VyY2UgPSBnZXRDdXJyZW50U2NyaXB0U291cmNlKCk7XG4gICAgdmFyIHNjcmlwdFNvdXJjZVVSTDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBUaGUgcGxhY2Vob2xkZXIgYGJhc2VVUkxgIHdpdGggYHdpbmRvdy5sb2NhdGlvbi5ocmVmYCxcbiAgICAgIC8vIGlzIHRvIGFsbG93IHBhcnNpbmcgb2YgcGF0aC1yZWxhdGl2ZSBvciBwcm90b2NvbC1yZWxhdGl2ZSBVUkxzLFxuICAgICAgLy8gYW5kIHdpbGwgaGF2ZSBubyBlZmZlY3QgaWYgYHNjcmlwdFNvdXJjZWAgaXMgYSBmdWxseSB2YWxpZCBVUkwuXG4gICAgICBzY3JpcHRTb3VyY2VVUkwgPSBuZXcgVVJMKHNjcmlwdFNvdXJjZSwgc2VsZi5sb2NhdGlvbi5ocmVmKTtcbiAgICB9IGNhdGNoIChlcnJvcikgey8vIFVSTCBwYXJzaW5nIGZhaWxlZCwgZG8gbm90aGluZy5cbiAgICAgIC8vIFdlIHdpbGwgc3RpbGwgcHJvY2VlZCB0byBzZWUgaWYgd2UgY2FuIHJlY292ZXIgdXNpbmcgYHJlc291cmNlUXVlcnlgXG4gICAgfVxuXG4gICAgaWYgKHNjcmlwdFNvdXJjZVVSTCkge1xuICAgICAgb3B0aW9ucyA9IHNjcmlwdFNvdXJjZVVSTDtcbiAgICAgIG9wdGlvbnMuZnJvbUN1cnJlbnRTY3JpcHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwYXJzZVVSTDsiLCIvKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRTb3VyY2UoKSB7XG4gIC8vIGBkb2N1bWVudC5jdXJyZW50U2NyaXB0YCBpcyB0aGUgbW9zdCBhY2N1cmF0ZSB3YXkgdG8gZmluZCB0aGUgY3VycmVudCBzY3JpcHQsXG4gIC8vIGJ1dCBpcyBub3Qgc3VwcG9ydGVkIGluIGFsbCBicm93c2Vycy5cbiAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gIH0gLy8gRmFsbGJhY2sgdG8gZ2V0dGluZyBhbGwgc2NyaXB0cyBydW5uaW5nIGluIHRoZSBkb2N1bWVudC5cblxuXG4gIHZhciBzY3JpcHRFbGVtZW50cyA9IGRvY3VtZW50LnNjcmlwdHMgfHwgW107XG4gIHZhciBzY3JpcHRFbGVtZW50c1dpdGhTcmMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoc2NyaXB0RWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9KTtcblxuICBpZiAoc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY3VycmVudFNjcmlwdCA9IHNjcmlwdEVsZW1lbnRzV2l0aFNyY1tzY3JpcHRFbGVtZW50c1dpdGhTcmMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9IC8vIEZhaWwgYXMgdGhlcmUgd2FzIG5vIHNjcmlwdCB0byB1c2UuXG5cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJbd2VicGFjay1kZXYtc2VydmVyXSBGYWlsZWQgdG8gZ2V0IGN1cnJlbnQgc2NyaXB0IHNvdXJjZS5cIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnRTY3JpcHRTb3VyY2U7IiwiLyogZ2xvYmFsIF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fICovXG5pbXBvcnQgV2ViU29ja2V0Q2xpZW50IGZyb20gXCIuL2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjsgLy8gdGhpcyBXZWJzb2NrZXRDbGllbnQgaXMgaGVyZSBhcyBhIGRlZmF1bHQgZmFsbGJhY2ssIGluIGNhc2UgdGhlIGNsaWVudCBpcyBub3QgaW5qZWN0ZWRcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5cbnZhciBDbGllbnQgPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbnR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXy5kZWZhdWx0ICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCA6IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fIDogV2ViU29ja2V0Q2xpZW50O1xuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxudmFyIHJldHJpZXMgPSAwO1xudmFyIG1heFJldHJpZXMgPSAxMDsgLy8gSW5pdGlhbGl6ZWQgY2xpZW50IGlzIGV4cG9ydGVkIHNvIGV4dGVybmFsIGNvbnN1bWVycyBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBpbnN0YW5jZVxuLy8gSXQgaXMgbXV0YWJsZSB0byBlbmZvcmNlIHNpbmdsZXRvblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcblxuZXhwb3J0IHZhciBjbGllbnQgPSBudWxsO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge3sgW2hhbmRsZXI6IHN0cmluZ106IChkYXRhPzogYW55LCBwYXJhbXM/OiBhbnkpID0+IGFueSB9fSBoYW5kbGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtyZWNvbm5lY3RdXG4gKi9cblxudmFyIHNvY2tldCA9IGZ1bmN0aW9uIGluaXRTb2NrZXQodXJsLCBoYW5kbGVycywgcmVjb25uZWN0KSB7XG4gIGNsaWVudCA9IG5ldyBDbGllbnQodXJsKTtcbiAgY2xpZW50Lm9uT3BlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0cmllcyA9IDA7XG5cbiAgICBpZiAodHlwZW9mIHJlY29ubmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbWF4UmV0cmllcyA9IHJlY29ubmVjdDtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub25DbG9zZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJldHJpZXMgPT09IDApIHtcbiAgICAgIGhhbmRsZXJzLmNsb3NlKCk7XG4gICAgfSAvLyBUcnkgdG8gcmVjb25uZWN0LlxuXG5cbiAgICBjbGllbnQgPSBudWxsOyAvLyBBZnRlciAxMCByZXRyaWVzIHN0b3AgdHJ5aW5nLCB0byBwcmV2ZW50IGxvZ3NwYW0uXG5cbiAgICBpZiAocmV0cmllcyA8IG1heFJldHJpZXMpIHtcbiAgICAgIC8vIEV4cG9uZW50aWFsbHkgaW5jcmVhc2UgdGltZW91dCB0byByZWNvbm5lY3QuXG4gICAgICAvLyBSZXNwZWN0ZnVsbHkgY29waWVkIGZyb20gdGhlIHBhY2thZ2UgYGdvdGAuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gICAgICB2YXIgcmV0cnlJbk1zID0gMTAwMCAqIE1hdGgucG93KDIsIHJldHJpZXMpICsgTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgIHJldHJpZXMgKz0gMTtcbiAgICAgIGxvZy5pbmZvKFwiVHJ5aW5nIHRvIHJlY29ubmVjdC4uLlwiKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzb2NrZXQodXJsLCBoYW5kbGVycywgcmVjb25uZWN0KTtcbiAgICAgIH0sIHJldHJ5SW5Ncyk7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lm9uTWVzc2FnZShcbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShkYXRhKTtcblxuICAgIGlmIChoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKSB7XG4gICAgICBoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5wYXJhbXMpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvbG9nLmpzXCI7XG5cbnZhciBXZWJTb2NrZXRDbGllbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgZnVuY3Rpb24gV2ViU29ja2V0Q2xpZW50KHVybCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJTb2NrZXRDbGllbnQpO1xuXG4gICAgdGhpcy5jbGllbnQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cbiAgICB0aGlzLmNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFdlYlNvY2tldENsaWVudCwgW3tcbiAgICBrZXk6IFwib25PcGVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uT3BlbihmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbm9wZW4gPSBmO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib25DbG9zZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsb3NlKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9uY2xvc2UgPSBmO1xuICAgIH0gLy8gY2FsbCBmIHdpdGggdGhlIG1lc3NhZ2Ugc3RyaW5nIGFzIHRoZSBmaXJzdCBhcmd1bWVudFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVzc2FnZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lc3NhZ2UoZikge1xuICAgICAgdGhpcy5jbGllbnQub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZihlLmRhdGEpO1xuICAgICAgfTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2ViU29ja2V0Q2xpZW50O1xufSgpO1xuXG5leHBvcnQgeyBXZWJTb2NrZXRDbGllbnQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzXCI7XG52YXIgbmFtZSA9IFwid2VicGFjay1kZXYtc2VydmVyXCI7IC8vIGRlZmF1bHQgbGV2ZWwgaXMgc2V0IG9uIHRoZSBjbGllbnQgc2lkZSwgc28gaXQgZG9lcyBub3QgbmVlZFxuLy8gdG8gYmUgc2V0IGJ5IHRoZSBDTEkgb3IgQVBJXG5cbnZhciBkZWZhdWx0TGV2ZWwgPSBcImluZm9cIjsgLy8gb3B0aW9ucyBuZXcgb3B0aW9ucywgbWVyZ2Ugd2l0aCBvbGQgb3B0aW9uc1xuXG4vKipcbiAqIEBwYXJhbSB7ZmFsc2UgfCB0cnVlIHwgXCJub25lXCIgfCBcImVycm9yXCIgfCBcIndhcm5cIiB8IFwiaW5mb1wiIHwgXCJsb2dcIiB8IFwidmVyYm9zZVwifSBsZXZlbFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgbG9nZ2VyLmNvbmZpZ3VyZURlZmF1bHRMb2dnZXIoe1xuICAgIGxldmVsOiBsZXZlbFxuICB9KTtcbn1cblxuc2V0TG9nTGV2ZWwoZGVmYXVsdExldmVsKTtcbnZhciBsb2cgPSBsb2dnZXIuZ2V0TG9nZ2VyKG5hbWUpO1xuZXhwb3J0IHsgbG9nLCBzZXRMb2dMZXZlbCB9OyIsIi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHRcInVzZSBzdHJpY3RcIjtcbi8qKioqKiovIFx0dmFyIF9fd2VicGFja19tb2R1bGVzX18gPSAoe1xuXG4vKioqLyBcIi4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9TeW5jQmFpbEhvb2tGYWtlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9TeW5jQmFpbEhvb2tGYWtlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG5cbi8qKlxuICogQ2xpZW50IHN0dWIgZm9yIHRhcGFibGUgU3luY0JhaWxIb29rXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjbGllbnRUYXBhYmxlU3luY0JhaWxIb29rKCkge1xuICByZXR1cm4ge1xuICAgIGNhbGw6IGZ1bmN0aW9uIGNhbGwoKSB7fVxuICB9O1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxudmFyIExvZ1R5cGUgPSBPYmplY3QuZnJlZXplKHtcbiAgZXJyb3I6XG4gIC8qKiBAdHlwZSB7XCJlcnJvclwifSAqL1xuICBcImVycm9yXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIHdhcm46XG4gIC8qKiBAdHlwZSB7XCJ3YXJuXCJ9ICovXG4gIFwid2FyblwiLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICBpbmZvOlxuICAvKiogQHR5cGUge1wiaW5mb1wifSAqL1xuICBcImluZm9cIixcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgbG9nOlxuICAvKiogQHR5cGUge1wibG9nXCJ9ICovXG4gIFwibG9nXCIsXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGRlYnVnOlxuICAvKiogQHR5cGUge1wiZGVidWdcIn0gKi9cbiAgXCJkZWJ1Z1wiLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICB0cmFjZTpcbiAgLyoqIEB0eXBlIHtcInRyYWNlXCJ9ICovXG4gIFwidHJhY2VcIixcbiAgLy8gbm8gYXJndW1lbnRzXG4gIGdyb3VwOlxuICAvKiogQHR5cGUge1wiZ3JvdXBcIn0gKi9cbiAgXCJncm91cFwiLFxuICAvLyBbbGFiZWxdXG4gIGdyb3VwQ29sbGFwc2VkOlxuICAvKiogQHR5cGUge1wiZ3JvdXBDb2xsYXBzZWRcIn0gKi9cbiAgXCJncm91cENvbGxhcHNlZFwiLFxuICAvLyBbbGFiZWxdXG4gIGdyb3VwRW5kOlxuICAvKiogQHR5cGUge1wiZ3JvdXBFbmRcIn0gKi9cbiAgXCJncm91cEVuZFwiLFxuICAvLyBbbGFiZWxdXG4gIHByb2ZpbGU6XG4gIC8qKiBAdHlwZSB7XCJwcm9maWxlXCJ9ICovXG4gIFwicHJvZmlsZVwiLFxuICAvLyBbcHJvZmlsZU5hbWVdXG4gIHByb2ZpbGVFbmQ6XG4gIC8qKiBAdHlwZSB7XCJwcm9maWxlRW5kXCJ9ICovXG4gIFwicHJvZmlsZUVuZFwiLFxuICAvLyBbcHJvZmlsZU5hbWVdXG4gIHRpbWU6XG4gIC8qKiBAdHlwZSB7XCJ0aW1lXCJ9ICovXG4gIFwidGltZVwiLFxuICAvLyBuYW1lLCB0aW1lIGFzIFtzZWNvbmRzLCBuYW5vc2Vjb25kc11cbiAgY2xlYXI6XG4gIC8qKiBAdHlwZSB7XCJjbGVhclwifSAqL1xuICBcImNsZWFyXCIsXG4gIC8vIG5vIGFyZ3VtZW50c1xuICBzdGF0dXM6XG4gIC8qKiBAdHlwZSB7XCJzdGF0dXNcIn0gKi9cbiAgXCJzdGF0dXNcIiAvLyBtZXNzYWdlLCBhcmd1bWVudHNcblxufSk7XG5leHBvcnRzLkxvZ1R5cGUgPSBMb2dUeXBlO1xuLyoqIEB0eXBlZGVmIHt0eXBlb2YgTG9nVHlwZVtrZXlvZiB0eXBlb2YgTG9nVHlwZV19IExvZ1R5cGVFbnVtICovXG5cbnZhciBMT0dfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciByYXcgbG9nIG1ldGhvZFwiKTtcbnZhciBUSU1FUlNfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciB0aW1lc1wiKTtcbnZhciBUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIGFnZ3JlZ2F0ZWQgdGltZXNcIik7XG5cbnZhciBXZWJwYWNrTG9nZ2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oTG9nVHlwZUVudW0sIGFueVtdPSk6IHZvaWR9IGxvZyBsb2cgZnVuY3Rpb25cbiAgICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcgfCBmdW5jdGlvbigpOiBzdHJpbmcpOiBXZWJwYWNrTG9nZ2VyfSBnZXRDaGlsZExvZ2dlciBmdW5jdGlvbiB0byBjcmVhdGUgY2hpbGQgbG9nZ2VyXG4gICAqL1xuICBmdW5jdGlvbiBXZWJwYWNrTG9nZ2VyKGxvZywgZ2V0Q2hpbGRMb2dnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VicGFja0xvZ2dlcik7XG5cbiAgICB0aGlzW0xPR19TWU1CT0xdID0gbG9nO1xuICAgIHRoaXMuZ2V0Q2hpbGRMb2dnZXIgPSBnZXRDaGlsZExvZ2dlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhXZWJwYWNrTG9nZ2VyLCBbe1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZXJyb3IsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ3YXJuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhcm4oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUud2FybiwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluZm9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5mbygpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5pbmZvLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5sb2csIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWJ1Z1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW41ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNSksIF9rZXk1ID0gMDsgX2tleTUgPCBfbGVuNTsgX2tleTUrKykge1xuICAgICAgICBhcmdzW19rZXk1XSA9IGFyZ3VtZW50c1tfa2V5NV07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5kZWJ1ZywgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFzc2VydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhc3NlcnQoYXNzZXJ0aW9uKSB7XG4gICAgICBpZiAoIWFzc2VydGlvbikge1xuICAgICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYgPiAxID8gX2xlbjYgLSAxIDogMCksIF9rZXk2ID0gMTsgX2tleTYgPCBfbGVuNjsgX2tleTYrKykge1xuICAgICAgICAgIGFyZ3NbX2tleTYgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZXJyb3IsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFjZSgpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50cmFjZSwgW1wiVHJhY2VcIl0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5jbGVhcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGF0dXMoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuc3RhdHVzLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXAsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJncm91cENvbGxhcHNlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBncm91cENvbGxhcHNlZCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW45ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuOSksIF9rZXk5ID0gMDsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgICAgICBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gICAgICB9XG5cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5ncm91cENvbGxhcHNlZCwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdyb3VwRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwRW5kKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTEwXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICAgICAgfVxuXG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXBFbmQsIGFyZ3MpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJwcm9maWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2ZpbGUobGFiZWwpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5wcm9maWxlLCBbbGFiZWxdKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlRW5kKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZUVuZCwgW2xhYmVsXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX1NZTUJPTF0gfHwgbmV3IE1hcCgpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5zZXQobGFiZWwsIHByb2Nlc3MuaHJ0aW1lKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lTG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVMb2cobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG5cbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lTG9nKClcIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVFbmQobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG5cbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lRW5kKClcIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGUobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG5cbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lQWdncmVnYXRlKClcIikpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG5cbiAgICAgIGlmIChjdXJyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRpbWVbMV0gKyBjdXJyZW50WzFdID4gMWU5KSB7XG4gICAgICAgICAgdGltZVswXSArPSBjdXJyZW50WzBdICsgMTtcbiAgICAgICAgICB0aW1lWzFdID0gdGltZVsxXSAtIDFlOSArIGN1cnJlbnRbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGltZVswXSArPSBjdXJyZW50WzBdO1xuICAgICAgICAgIHRpbWVbMV0gKz0gY3VycmVudFsxXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uc2V0KGxhYmVsLCB0aW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUFnZ3JlZ2F0ZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lQWdncmVnYXRlRW5kKGxhYmVsKSB7XG4gICAgICBpZiAodGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHZhciB0aW1lID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2VicGFja0xvZ2dlcjtcbn0oKTtcblxuZXhwb3J0cy5Mb2dnZXIgPSBXZWJwYWNrTG9nZ2VyO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCIpLFxuICAgIExvZ1R5cGUgPSBfcmVxdWlyZS5Mb2dUeXBlO1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVySXRlbVR5cGVzfSBGaWx0ZXJJdGVtVHlwZXMgKi9cblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVyVHlwZXN9IEZpbHRlclR5cGVzICovXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi9Mb2dnZXJcIikuTG9nVHlwZUVudW19IExvZ1R5cGVFbnVtICovXG5cbi8qKiBAdHlwZWRlZiB7ZnVuY3Rpb24oc3RyaW5nKTogYm9vbGVhbn0gRmlsdGVyRnVuY3Rpb24gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBMb2dnZXJDb25zb2xlXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6IHZvaWR9IGNsZWFyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9uKCk6IHZvaWR9IHRyYWNlXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gaW5mb1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGxvZ1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IHdhcm5cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBlcnJvclxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBkZWJ1Z1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBncm91cFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBncm91cENvbGxhcHNlZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBncm91cEVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBzdGF0dXNcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkPX0gcHJvZmlsZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogYW55W10pID0+IHZvaWQ9fSBwcm9maWxlRW5kXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZD19IGxvZ1RpbWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IExvZ2dlck9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZmFsc2V8dHJ1ZXxcIm5vbmVcInxcImVycm9yXCJ8XCJ3YXJuXCJ8XCJpbmZvXCJ8XCJsb2dcInxcInZlcmJvc2VcIn0gbGV2ZWwgbG9nbGV2ZWxcbiAqIEBwcm9wZXJ0eSB7RmlsdGVyVHlwZXN8Ym9vbGVhbn0gZGVidWcgZmlsdGVyIGZvciBkZWJ1ZyBsb2dnaW5nXG4gKiBAcHJvcGVydHkge0xvZ2dlckNvbnNvbGV9IGNvbnNvbGUgdGhlIGNvbnNvbGUgdG8gbG9nIHRvXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0ZpbHRlckl0ZW1UeXBlc30gaXRlbSBhbiBpbnB1dCBpdGVtXG4gKiBAcmV0dXJucyB7RmlsdGVyRnVuY3Rpb259IGZpbHRlciBmdW5jdGlvblxuICovXG5cblxudmFyIGZpbHRlclRvRnVuY3Rpb24gPSBmdW5jdGlvbiBmaWx0ZXJUb0Z1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJbXFxcXFxcXFwvXVwiLmNvbmNhdChpdGVtLnJlcGxhY2UoIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxuICAgIC9bLVtcXF17fSgpKis/LlxcXFxeJHxdL2csIFwiXFxcXCQmXCIpLCBcIihbXFxcXFxcXFwvXXwkfCF8XFxcXD8pXCIpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkZW50KSB7XG4gICAgICByZXR1cm4gcmVnRXhwLnRlc3QoaWRlbnQpO1xuICAgIH07XG4gIH1cblxuICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgaXRlbS50ZXN0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkZW50KSB7XG4gICAgICByZXR1cm4gaXRlbS50ZXN0KGlkZW50KTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgfVxufTtcbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xuXG5cbnZhciBMb2dMZXZlbCA9IHtcbiAgbm9uZTogNixcbiAgZmFsc2U6IDYsXG4gIGVycm9yOiA1LFxuICB3YXJuOiA0LFxuICBpbmZvOiAzLFxuICBsb2c6IDIsXG4gIHRydWU6IDIsXG4gIHZlcmJvc2U6IDFcbn07XG4vKipcbiAqIEBwYXJhbSB7TG9nZ2VyT3B0aW9uc30gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgTG9nVHlwZUVudW0sIGFueVtdKTogdm9pZH0gbG9nZ2luZyBmdW5jdGlvblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkbGV2ZWwgPSBfcmVmLmxldmVsLFxuICAgICAgbGV2ZWwgPSBfcmVmJGxldmVsID09PSB2b2lkIDAgPyBcImluZm9cIiA6IF9yZWYkbGV2ZWwsXG4gICAgICBfcmVmJGRlYnVnID0gX3JlZi5kZWJ1ZyxcbiAgICAgIGRlYnVnID0gX3JlZiRkZWJ1ZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlYnVnLFxuICAgICAgY29uc29sZSA9IF9yZWYuY29uc29sZTtcbiAgdmFyIGRlYnVnRmlsdGVycyA9IHR5cGVvZiBkZWJ1ZyA9PT0gXCJib29sZWFuXCIgPyBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWJ1ZztcbiAgfV0gOlxuICAvKiogQHR5cGUge0ZpbHRlckl0ZW1UeXBlc1tdfSAqL1xuICBbXS5jb25jYXQoZGVidWcpLm1hcChmaWx0ZXJUb0Z1bmN0aW9uKTtcbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cbiAgdmFyIGxvZ2xldmVsID0gTG9nTGV2ZWxbXCJcIi5jb25jYXQobGV2ZWwpXSB8fCAwO1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgbmFtZSBvZiB0aGUgbG9nZ2VyXG4gICAqIEBwYXJhbSB7TG9nVHlwZUVudW19IHR5cGUgdHlwZSBvZiB0aGUgbG9nIGVudHJ5XG4gICAqIEBwYXJhbSB7YW55W119IGFyZ3MgYXJndW1lbnRzIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG4gIHZhciBsb2dnZXIgPSBmdW5jdGlvbiBsb2dnZXIobmFtZSwgdHlwZSwgYXJncykge1xuICAgIHZhciBsYWJlbGVkQXJncyA9IGZ1bmN0aW9uIGxhYmVsZWRBcmdzKCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiBbXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGFyZ3NbMF0pXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3Muc2xpY2UoMSkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl1cIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkZWJ1ZyA9IGRlYnVnRmlsdGVycy5zb21lKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gZihuYW1lKTtcbiAgICB9KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2dUeXBlLmRlYnVnOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZGVidWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLmRlYnVnLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUubG9nOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuaW5mbzpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmluZm8pIHJldHVybjtcbiAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUud2FybjpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLndhcm4pIHJldHVybjtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuZXJyb3I6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5lcnJvcikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUudHJhY2U6XG4gICAgICAgIGlmICghZGVidWcpIHJldHVybjtcbiAgICAgICAgY29uc29sZS50cmFjZSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwQ29sbGFwc2VkOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLnZlcmJvc2UpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwQ29sbGFwc2VkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG5cbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5ncm91cC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwRW5kOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZ3JvdXBFbmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLnRpbWU6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgICAgdmFyIG1zID0gYXJnc1sxXSAqIDEwMDAgKyBhcmdzWzJdIC8gMTAwMDAwMDtcbiAgICAgICAgICB2YXIgbXNnID0gXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGFyZ3NbMF0sIFwiOiBcIikuY29uY2F0KG1zLCBcIiBtc1wiKTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5sb2dUaW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nVGltZShtc2cpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgTG9nVHlwZS5wcm9maWxlOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5wcm9maWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm9kZS9uby11bnN1cHBvcnRlZC1mZWF0dXJlcy9ub2RlLWJ1aWx0aW5zXG4gICAgICAgICAgY29uc29sZS5wcm9maWxlLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBMb2dUeXBlLnByb2ZpbGVFbmQ6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnByb2ZpbGVFbmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL25vZGUtYnVpbHRpbnNcbiAgICAgICAgICBjb25zb2xlLnByb2ZpbGVFbmQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuY2xlYXI6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5jbGVhciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vZGUvbm8tdW5zdXBwb3J0ZWQtZmVhdHVyZXMvbm9kZS1idWlsdGluc1xuICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExvZ1R5cGUuc3RhdHVzOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwuaW5mbykgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5zdGF0dXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5zdGF0dXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5zdGF0dXMuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBMb2dUeXBlIFwiLmNvbmNhdCh0eXBlKSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsb2dnZXI7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG52YXIgU3luY0JhaWxIb29rID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgdGFwYWJsZS9saWIvU3luY0JhaWxIb29rICovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL1N5bmNCYWlsSG9va0Zha2UuanNcIik7XG5cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gICAgTG9nZ2VyID0gX3JlcXVpcmUuTG9nZ2VyO1xuXG52YXIgY3JlYXRlQ29uc29sZUxvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlQ29uc29sZUxvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiKTtcbi8qKiBAdHlwZSB7Y3JlYXRlQ29uc29sZUxvZ2dlci5Mb2dnZXJPcHRpb25zfSAqL1xuXG5cbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMgPSB7XG4gIGxldmVsOiBcImluZm9cIixcbiAgZGVidWc6IGZhbHNlLFxuICBjb25zb2xlOiBjb25zb2xlXG59O1xudmFyIGN1cnJlbnREZWZhdWx0TG9nZ2VyID0gY3JlYXRlQ29uc29sZUxvZ2dlcihjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMpO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAqIEByZXR1cm5zIHtMb2dnZXJ9IGEgbG9nZ2VyXG4gKi9cblxuZXhwb3J0cy5nZXRMb2dnZXIgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmV3IExvZ2dlcihmdW5jdGlvbiAodHlwZSwgYXJncykge1xuICAgIGlmIChleHBvcnRzLmhvb2tzLmxvZy5jYWxsKG5hbWUsIHR5cGUsIGFyZ3MpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1cnJlbnREZWZhdWx0TG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGNoaWxkTmFtZSkge1xuICAgIHJldHVybiBleHBvcnRzLmdldExvZ2dlcihcIlwiLmNvbmNhdChuYW1lLCBcIi9cIikuY29uY2F0KGNoaWxkTmFtZSkpO1xuICB9KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7Y3JlYXRlQ29uc29sZUxvZ2dlci5Mb2dnZXJPcHRpb25zfSBvcHRpb25zIG5ldyBvcHRpb25zLCBtZXJnZSB3aXRoIG9sZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG5cbmV4cG9ydHMuY29uZmlndXJlRGVmYXVsdExvZ2dlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIF9leHRlbmRzKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgY3VycmVudERlZmF1bHRMb2dnZXIgPSBjcmVhdGVDb25zb2xlTG9nZ2VyKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyk7XG59O1xuXG5leHBvcnRzLmhvb2tzID0ge1xuICBsb2c6IG5ldyBTeW5jQmFpbEhvb2soW1wib3JpZ2luXCIsIFwidHlwZVwiLCBcImFyZ3NcIl0pXG59O1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbi8vIFRoaXMgZW50cnkgbmVlZCB0byBiZSB3cmFwcGVkIGluIGFuIElJRkUgYmVjYXVzZSBpdCBuZWVkIHRvIGJlIGlzb2xhdGVkIGFnYWluc3Qgb3RoZXIgbW9kdWxlcyBpbiB0aGUgY2h1bmsuXG4hZnVuY3Rpb24oKSB7XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgXCJkZWZhdWx0XCI6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogcmVleHBvcnQgZGVmYXVsdCBleHBvcnQgZnJvbSBuYW1lZCBtb2R1bGUgKi8gd2VicGFja19saWJfbG9nZ2luZ19ydW50aW1lX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX187IH1cbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIHdlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzXCIpO1xuXG59KCk7XG52YXIgX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXyA9IGV4cG9ydHM7XG5mb3IodmFyIGkgaW4gX193ZWJwYWNrX2V4cG9ydHNfXykgX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfX1tpXSA9IF9fd2VicGFja19leHBvcnRzX19baV07XG5pZihfX3dlYnBhY2tfZXhwb3J0c19fLl9fZXNNb2R1bGUpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIH0pKClcbjsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLy8gVGhlIGVycm9yIG92ZXJsYXkgaXMgaW5zcGlyZWQgKGFuZCBtb3N0bHkgY29waWVkKSBmcm9tIENyZWF0ZSBSZWFjdCBBcHAgKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9va2luY3ViYXRvci9jcmVhdGUtcmVhY3QtYXBwKVxuLy8gVGhleSwgaW4gdHVybiwgZ290IGluc3BpcmVkIGJ5IHdlYnBhY2staG90LW1pZGRsZXdhcmUgKGh0dHBzOi8vZ2l0aHViLmNvbS9nbGVuamFtaW4vd2VicGFjay1ob3QtbWlkZGxld2FyZSkuXG5pbXBvcnQgYW5zaUhUTUwgZnJvbSBcImFuc2ktaHRtbC1jb21tdW5pdHlcIjtcbmltcG9ydCB7IGVuY29kZSB9IGZyb20gXCJodG1sLWVudGl0aWVzXCI7XG52YXIgY29sb3JzID0ge1xuICByZXNldDogW1widHJhbnNwYXJlbnRcIiwgXCJ0cmFuc3BhcmVudFwiXSxcbiAgYmxhY2s6IFwiMTgxODE4XCIsXG4gIHJlZDogXCJFMzYwNDlcIixcbiAgZ3JlZW46IFwiQjNDQjc0XCIsXG4gIHllbGxvdzogXCJGRkQwODBcIixcbiAgYmx1ZTogXCI3Q0FGQzJcIixcbiAgbWFnZW50YTogXCI3RkFDQ0FcIixcbiAgY3lhbjogXCJDM0MyRUZcIixcbiAgbGlnaHRncmV5OiBcIkVCRTdFM1wiLFxuICBkYXJrZ3JleTogXCI2RDc4OTFcIlxufTtcbi8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuXG52YXIgaWZyYW1lQ29udGFpbmVyRWxlbWVudDtcbi8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuXG52YXIgY29udGFpbmVyRWxlbWVudDtcbi8qKiBAdHlwZSB7QXJyYXk8KGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50KSA9PiB2b2lkPn0gKi9cblxudmFyIG9uTG9hZFF1ZXVlID0gW107XG4vKiogQHR5cGUge1RydXN0ZWRUeXBlUG9saWN5IHwgdW5kZWZpbmVkfSAqL1xuXG52YXIgb3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSkge1xuICAvLyBFbmFibGUgVHJ1c3RlZCBUeXBlcyBpZiB0aGV5IGFyZSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgYnJvd3Nlci5cbiAgaWYgKHdpbmRvdy50cnVzdGVkVHlwZXMpIHtcbiAgICBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5ID0gd2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSB8fCBcIndlYnBhY2stZGV2LXNlcnZlciNvdmVybGF5XCIsIHtcbiAgICAgIGNyZWF0ZUhUTUw6IGZ1bmN0aW9uIGNyZWF0ZUhUTUwodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheVwiO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnNyYyA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5sZWZ0ID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS50b3AgPSAwO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLnJpZ2h0ID0gMDtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3R0b20gPSAwO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zdHlsZS56SW5kZXggPSA5OTk5OTk5OTk5O1xuXG4gIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPVxuICAgIC8qKiBAdHlwZSB7RG9jdW1lbnR9ICovXG5cbiAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuY29udGVudERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyRWxlbWVudC5pZCA9IFwid2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5LWRpdlwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmxlZnQgPSAwO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUudG9wID0gMDtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIiNFOEU4RThcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSBcIk1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlXCI7XG4gICAgY29udGFpbmVyRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwibGFyZ2VcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjJyZW1cIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMlwiO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwicHJlLXdyYXBcIjtcbiAgICBjb250YWluZXJFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG4gICAgdmFyIGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQ29tcGlsZWQgd2l0aCBwcm9ibGVtczpcIjtcbiAgICB2YXIgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuaW5uZXJUZXh0ID0gXCJYXCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgY2xvc2VCdXR0b25FbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSBcInJpZ2h0XCI7IC8vIEB0cy1pZ25vcmVcblxuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5zdHlsZS5zdHlsZUZsb2F0ID0gXCJyaWdodFwiO1xuICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaGlkZSgpO1xuICAgIH0pO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG4gICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbkVsZW1lbnQpO1xuICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcbiAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cblxuICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50KTtcbiAgICBvbkxvYWRRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvbkxvYWQpIHtcbiAgICAgIG9uTG9hZChcbiAgICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovXG4gICAgICBjb250YWluZXJFbGVtZW50KTtcbiAgICB9KTtcbiAgICBvbkxvYWRRdWV1ZSA9IFtdO1xuICAgIC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG5cbiAgICBpZnJhbWVDb250YWluZXJFbGVtZW50Lm9ubG9hZCA9IG51bGw7XG4gIH07XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWVDb250YWluZXJFbGVtZW50KTtcbn1cbi8qKlxuICogQHBhcmFtIHsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWR9IGNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAqL1xuXG5cbmZ1bmN0aW9uIGVuc3VyZU92ZXJsYXlFeGlzdHMoY2FsbGJhY2ssIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpIHtcbiAgaWYgKGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAvLyBFdmVyeXRoaW5nIGlzIHJlYWR5LCBjYWxsIHRoZSBjYWxsYmFjayByaWdodCBhd2F5LlxuICAgIGNhbGxiYWNrKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uTG9hZFF1ZXVlLnB1c2goY2FsbGJhY2spO1xuXG4gIGlmIChpZnJhbWVDb250YWluZXJFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3JlYXRlQ29udGFpbmVyKHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpO1xufSAvLyBTdWNjZXNzZnVsIGNvbXBpbGF0aW9uLlxuXG5cbmZ1bmN0aW9uIGhpZGUoKSB7XG4gIGlmICghaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDbGVhbiB1cCBhbmQgcmVzZXQgaW50ZXJuYWwgc3RhdGUuXG5cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICBpZnJhbWVDb250YWluZXJFbGVtZW50ID0gbnVsbDtcbiAgY29udGFpbmVyRWxlbWVudCA9IG51bGw7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZyAgfCB7IGZpbGU/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9fSBpdGVtXG4gKiBAcmV0dXJucyB7eyBoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nIH19XG4gKi9cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9ibGVtKHR5cGUsIGl0ZW0pIHtcbiAgdmFyIGhlYWRlciA9IHR5cGUgPT09IFwid2FybmluZ1wiID8gXCJXQVJOSU5HXCIgOiBcIkVSUk9SXCI7XG4gIHZhciBib2R5ID0gXCJcIjtcblxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBib2R5ICs9IGl0ZW07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZpbGUgPSBpdGVtLmZpbGUgfHwgXCJcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG5cbiAgICB2YXIgbW9kdWxlTmFtZSA9IGl0ZW0ubW9kdWxlTmFtZSA/IGl0ZW0ubW9kdWxlTmFtZS5pbmRleE9mKFwiIVwiKSAhPT0gLTEgPyBcIlwiLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUucmVwbGFjZSgvXihcXHN8XFxTKSohLywgXCJcIiksIFwiIChcIikuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZSwgXCIpXCIpIDogXCJcIi5jb25jYXQoaXRlbS5tb2R1bGVOYW1lKSA6IFwiXCI7XG4gICAgdmFyIGxvYyA9IGl0ZW0ubG9jO1xuICAgIGhlYWRlciArPSBcIlwiLmNvbmNhdChtb2R1bGVOYW1lIHx8IGZpbGUgPyBcIiBpbiBcIi5jb25jYXQobW9kdWxlTmFtZSA/IFwiXCIuY29uY2F0KG1vZHVsZU5hbWUpLmNvbmNhdChmaWxlID8gXCIgKFwiLmNvbmNhdChmaWxlLCBcIilcIikgOiBcIlwiKSA6IGZpbGUpLmNvbmNhdChsb2MgPyBcIiBcIi5jb25jYXQobG9jKSA6IFwiXCIpIDogXCJcIik7XG4gICAgYm9keSArPSBpdGVtLm1lc3NhZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgYm9keTogYm9keVxuICB9O1xufSAvLyBDb21waWxhdGlvbiB3aXRoIGVycm9ycyAoZS5nLiBzeW50YXggZXJyb3Igb3IgbWlzc2luZyBtb2R1bGVzKS5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmcgIHwgeyBmaWxlPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfT59IG1lc3NhZ2VzXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAqL1xuXG5cbmZ1bmN0aW9uIHNob3codHlwZSwgbWVzc2FnZXMsIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpIHtcbiAgZW5zdXJlT3ZlcmxheUV4aXN0cyhmdW5jdGlvbiAoKSB7XG4gICAgbWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgdmFyIGVudHJ5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB2YXIgdHlwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtID0gZm9ybWF0UHJvYmxlbSh0eXBlLCBtZXNzYWdlKSxcbiAgICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtLmJvZHk7XG5cbiAgICAgIHR5cGVFbGVtZW50LmlubmVyVGV4dCA9IGhlYWRlcjtcbiAgICAgIHR5cGVFbGVtZW50LnN0eWxlLmNvbG9yID0gXCIjXCIuY29uY2F0KGNvbG9ycy5yZWQpOyAvLyBNYWtlIGl0IGxvb2sgc2ltaWxhciB0byBvdXIgdGVybWluYWwuXG5cbiAgICAgIHZhciB0ZXh0ID0gYW5zaUhUTUwoZW5jb2RlKGJvZHkpKTtcbiAgICAgIHZhciBtZXNzYWdlVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVzc2FnZVRleHROb2RlLmlubmVySFRNTCA9IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPyBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodGV4dCkgOiB0ZXh0O1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKHR5cGVFbGVtZW50KTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHROb2RlKTtcbiAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuICAgICAgZW50cnlFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG4gICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuXG4gICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVudHJ5RWxlbWVudCk7XG4gICAgfSk7XG4gIH0sIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpO1xufVxuXG5leHBvcnQgeyBmb3JtYXRQcm9ibGVtLCBzaG93LCBoaWRlIH07IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5zaUhUTUxcblxuLy8gUmVmZXJlbmNlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYW5zaS1yZWdleFxudmFyIF9yZWdBTlNJID0gLyg/Oig/OlxcdTAwMWJcXFspfFxcdTAwOWIpKD86KD86WzAtOV17MSwzfSk/KD86KD86O1swLTldezAsM30pKik/W0EtTXxmLW1dKXxcXHUwMDFiW0EtTV0vXG5cbnZhciBfZGVmQ29sb3JzID0ge1xuICByZXNldDogWydmZmYnLCAnMDAwJ10sIC8vIFtGT1JFR1JPVURfQ09MT1IsIEJBQ0tHUk9VTkRfQ09MT1JdXG4gIGJsYWNrOiAnMDAwJyxcbiAgcmVkOiAnZmYwMDAwJyxcbiAgZ3JlZW46ICcyMDk4MDUnLFxuICB5ZWxsb3c6ICdlOGJmMDMnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgbWFnZW50YTogJ2ZmMDBmZicsXG4gIGN5YW46ICcwMGZmZWUnLFxuICBsaWdodGdyZXk6ICdmMGYwZjAnLFxuICBkYXJrZ3JleTogJzg4OCdcbn1cbnZhciBfc3R5bGVzID0ge1xuICAzMDogJ2JsYWNrJyxcbiAgMzE6ICdyZWQnLFxuICAzMjogJ2dyZWVuJyxcbiAgMzM6ICd5ZWxsb3cnLFxuICAzNDogJ2JsdWUnLFxuICAzNTogJ21hZ2VudGEnLFxuICAzNjogJ2N5YW4nLFxuICAzNzogJ2xpZ2h0Z3JleSdcbn1cbnZhciBfb3BlblRhZ3MgPSB7XG4gICcxJzogJ2ZvbnQtd2VpZ2h0OmJvbGQnLCAvLyBib2xkXG4gICcyJzogJ29wYWNpdHk6MC41JywgLy8gZGltXG4gICczJzogJzxpPicsIC8vIGl0YWxpY1xuICAnNCc6ICc8dT4nLCAvLyB1bmRlcnNjb3JlXG4gICc4JzogJ2Rpc3BsYXk6bm9uZScsIC8vIGhpZGRlblxuICAnOSc6ICc8ZGVsPicgLy8gZGVsZXRlXG59XG52YXIgX2Nsb3NlVGFncyA9IHtcbiAgJzIzJzogJzwvaT4nLCAvLyByZXNldCBpdGFsaWNcbiAgJzI0JzogJzwvdT4nLCAvLyByZXNldCB1bmRlcnNjb3JlXG4gICcyOSc6ICc8L2RlbD4nIC8vIHJlc2V0IGRlbGV0ZVxufVxuXG47WzAsIDIxLCAyMiwgMjcsIDI4LCAzOSwgNDldLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgX2Nsb3NlVGFnc1tuXSA9ICc8L3NwYW4+J1xufSlcblxuLyoqXG4gKiBDb252ZXJ0cyB0ZXh0IHdpdGggQU5TSSBjb2xvciBjb2RlcyB0byBIVE1MIG1hcmt1cC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gYW5zaUhUTUwgKHRleHQpIHtcbiAgLy8gUmV0dXJucyB0aGUgdGV4dCBpZiB0aGUgc3RyaW5nIGhhcyBubyBBTlNJIGVzY2FwZSBjb2RlLlxuICBpZiAoIV9yZWdBTlNJLnRlc3QodGV4dCkpIHtcbiAgICByZXR1cm4gdGV4dFxuICB9XG5cbiAgLy8gQ2FjaGUgb3BlbmVkIHNlcXVlbmNlLlxuICB2YXIgYW5zaUNvZGVzID0gW11cbiAgLy8gUmVwbGFjZSB3aXRoIG1hcmt1cC5cbiAgdmFyIHJldCA9IHRleHQucmVwbGFjZSgvXFwwMzNcXFsoXFxkKyltL2csIGZ1bmN0aW9uIChtYXRjaCwgc2VxKSB7XG4gICAgdmFyIG90ID0gX29wZW5UYWdzW3NlcV1cbiAgICBpZiAob3QpIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgc2VxdWVuY2UgaGFzIGJlZW4gb3BlbmVkLCBjbG9zZSBpdC5cbiAgICAgIGlmICghIX5hbnNpQ29kZXMuaW5kZXhPZihzZXEpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXh0cmEtYm9vbGVhbi1jYXN0XG4gICAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgICByZXR1cm4gJzwvc3Bhbj4nXG4gICAgICB9XG4gICAgICAvLyBPcGVuIHRhZy5cbiAgICAgIGFuc2lDb2Rlcy5wdXNoKHNlcSlcbiAgICAgIHJldHVybiBvdFswXSA9PT0gJzwnID8gb3QgOiAnPHNwYW4gc3R5bGU9XCInICsgb3QgKyAnO1wiPidcbiAgICB9XG5cbiAgICB2YXIgY3QgPSBfY2xvc2VUYWdzW3NlcV1cbiAgICBpZiAoY3QpIHtcbiAgICAgIC8vIFBvcCBzZXF1ZW5jZVxuICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICByZXR1cm4gY3RcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH0pXG5cbiAgLy8gTWFrZSBzdXJlIHRhZ3MgYXJlIGNsb3NlZC5cbiAgdmFyIGwgPSBhbnNpQ29kZXMubGVuZ3RoXG4gIDsobCA+IDApICYmIChyZXQgKz0gQXJyYXkobCArIDEpLmpvaW4oJzwvc3Bhbj4nKSlcblxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogQ3VzdG9taXplIGNvbG9ycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvcnMgcmVmZXJlbmNlIHRvIF9kZWZDb2xvcnNcbiAqL1xuYW5zaUhUTUwuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBpZiAodHlwZW9mIGNvbG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bjb2xvcnNgIHBhcmFtZXRlciBtdXN0IGJlIGFuIE9iamVjdC4nKVxuICB9XG5cbiAgdmFyIF9maW5hbENvbG9ycyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBfZGVmQ29sb3JzKSB7XG4gICAgdmFyIGhleCA9IGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gY29sb3JzW2tleV0gOiBudWxsXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIF9maW5hbENvbG9yc1trZXldID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoJ3Jlc2V0JyA9PT0ga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGhleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGV4ID0gW2hleF1cbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShoZXgpIHx8IGhleC5sZW5ndGggPT09IDAgfHwgaGV4LnNvbWUoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBoICE9PSAnc3RyaW5nJ1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGFuIEFycmF5IGFuZCBlYWNoIGl0ZW0gY291bGQgb25seSBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgICB9XG4gICAgICB2YXIgZGVmSGV4Q29sb3IgPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGlmICghaGV4WzBdKSB7XG4gICAgICAgIGhleFswXSA9IGRlZkhleENvbG9yWzBdXG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSB8fCAhaGV4WzFdKSB7XG4gICAgICAgIGhleCA9IFtoZXhbMF1dXG4gICAgICAgIGhleC5wdXNoKGRlZkhleENvbG9yWzFdKVxuICAgICAgfVxuXG4gICAgICBoZXggPSBoZXguc2xpY2UoMCwgMilcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgIH1cbiAgICBfZmluYWxDb2xvcnNba2V5XSA9IGhleFxuICB9XG4gIF9zZXRUYWdzKF9maW5hbENvbG9ycylcbn1cblxuLyoqXG4gKiBSZXNldCBjb2xvcnMuXG4gKi9cbmFuc2lIVE1MLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBfc2V0VGFncyhfZGVmQ29sb3JzKVxufVxuXG4vKipcbiAqIEV4cG9zZSB0YWdzLCBpbmNsdWRpbmcgb3BlbiBhbmQgY2xvc2UuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5hbnNpSFRNTC50YWdzID0ge31cblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ29wZW4nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfb3BlblRhZ3MgfVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ2Nsb3NlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2Nsb3NlVGFncyB9XG4gIH0pXG59IGVsc2Uge1xuICBhbnNpSFRNTC50YWdzLm9wZW4gPSBfb3BlblRhZ3NcbiAgYW5zaUhUTUwudGFncy5jbG9zZSA9IF9jbG9zZVRhZ3Ncbn1cblxuZnVuY3Rpb24gX3NldFRhZ3MgKGNvbG9ycykge1xuICAvLyByZXNldCBhbGxcbiAgX29wZW5UYWdzWycwJ10gPSAnZm9udC13ZWlnaHQ6bm9ybWFsO29wYWNpdHk6MTtjb2xvcjojJyArIGNvbG9ycy5yZXNldFswXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFsxXVxuICAvLyBpbnZlcnNlXG4gIF9vcGVuVGFnc1snNyddID0gJ2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzFdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzBdXG4gIC8vIGRhcmsgZ3JleVxuICBfb3BlblRhZ3NbJzkwJ10gPSAnY29sb3I6IycgKyBjb2xvcnMuZGFya2dyZXlcblxuICBmb3IgKHZhciBjb2RlIGluIF9zdHlsZXMpIHtcbiAgICB2YXIgY29sb3IgPSBfc3R5bGVzW2NvZGVdXG4gICAgdmFyIG9yaUNvbG9yID0gY29sb3JzW2NvbG9yXSB8fCAnMDAwJ1xuICAgIF9vcGVuVGFnc1tjb2RlXSA9ICdjb2xvcjojJyArIG9yaUNvbG9yXG4gICAgY29kZSA9IHBhcnNlSW50KGNvZGUpXG4gICAgX29wZW5UYWdzWyhjb2RlICsgMTApLnRvU3RyaW5nKCldID0gJ2JhY2tncm91bmQ6IycgKyBvcmlDb2xvclxuICB9XG59XG5cbmFuc2lIVE1MLnJlc2V0KClcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfX2Fzc2lnbj10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe19fYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgcyxpPTEsbj1hcmd1bWVudHMubGVuZ3RoO2k8bjtpKyspe3M9YXJndW1lbnRzW2ldO2Zvcih2YXIgcCBpbiBzKWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLHApKXRbcF09c1twXX1yZXR1cm4gdH07cmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTt2YXIgbmFtZWRfcmVmZXJlbmNlc18xPXJlcXVpcmUoXCIuL25hbWVkLXJlZmVyZW5jZXNcIik7dmFyIG51bWVyaWNfdW5pY29kZV9tYXBfMT1yZXF1aXJlKFwiLi9udW1lcmljLXVuaWNvZGUtbWFwXCIpO3ZhciBzdXJyb2dhdGVfcGFpcnNfMT1yZXF1aXJlKFwiLi9zdXJyb2dhdGUtcGFpcnNcIik7dmFyIGFsbE5hbWVkUmVmZXJlbmNlcz1fX2Fzc2lnbihfX2Fzc2lnbih7fSxuYW1lZF9yZWZlcmVuY2VzXzEubmFtZWRSZWZlcmVuY2VzKSx7YWxsOm5hbWVkX3JlZmVyZW5jZXNfMS5uYW1lZFJlZmVyZW5jZXMuaHRtbDV9KTtmdW5jdGlvbiByZXBsYWNlVXNpbmdSZWdFeHAobWFjcm9UZXh0LG1hY3JvUmVnRXhwLG1hY3JvUmVwbGFjZXIpe21hY3JvUmVnRXhwLmxhc3RJbmRleD0wO3ZhciByZXBsYWNlTWF0Y2g9bWFjcm9SZWdFeHAuZXhlYyhtYWNyb1RleHQpO3ZhciByZXBsYWNlUmVzdWx0O2lmKHJlcGxhY2VNYXRjaCl7cmVwbGFjZVJlc3VsdD1cIlwiO3ZhciByZXBsYWNlTGFzdEluZGV4PTA7ZG97aWYocmVwbGFjZUxhc3RJbmRleCE9PXJlcGxhY2VNYXRjaC5pbmRleCl7cmVwbGFjZVJlc3VsdCs9bWFjcm9UZXh0LnN1YnN0cmluZyhyZXBsYWNlTGFzdEluZGV4LHJlcGxhY2VNYXRjaC5pbmRleCl9dmFyIHJlcGxhY2VJbnB1dD1yZXBsYWNlTWF0Y2hbMF07cmVwbGFjZVJlc3VsdCs9bWFjcm9SZXBsYWNlcihyZXBsYWNlSW5wdXQpO3JlcGxhY2VMYXN0SW5kZXg9cmVwbGFjZU1hdGNoLmluZGV4K3JlcGxhY2VJbnB1dC5sZW5ndGh9d2hpbGUocmVwbGFjZU1hdGNoPW1hY3JvUmVnRXhwLmV4ZWMobWFjcm9UZXh0KSk7aWYocmVwbGFjZUxhc3RJbmRleCE9PW1hY3JvVGV4dC5sZW5ndGgpe3JlcGxhY2VSZXN1bHQrPW1hY3JvVGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleCl9fWVsc2V7cmVwbGFjZVJlc3VsdD1tYWNyb1RleHR9cmV0dXJuIHJlcGxhY2VSZXN1bHR9dmFyIGVuY29kZVJlZ0V4cHM9e3NwZWNpYWxDaGFyczovWzw+J1wiJl0vZyxub25Bc2NpaTovWzw+J1wiJlxcdTAwODAtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS9nLG5vbkFzY2lpUHJpbnRhYmxlOi9bPD4nXCImXFx4MDEtXFx4MDhcXHgxMS1cXHgxNVxceDE3LVxceDFGXFx4N2YtXFx1RDdGRlxcdUUwMDAtXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl1bXFx1REMwMC1cXHVERkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS9nLG5vbkFzY2lpUHJpbnRhYmxlT25seTovW1xceDAxLVxceDA4XFx4MTEtXFx4MTVcXHgxNy1cXHgxRlxceDdmLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vZyxleHRlbnNpdmU6L1tcXHgwMS1cXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4MmNcXHgyZS1cXHgyZlxceDNhLVxceDQwXFx4NWItXFx4NjBcXHg3Yi1cXHg3ZFxceDdmLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vZ307dmFyIGRlZmF1bHRFbmNvZGVPcHRpb25zPXttb2RlOlwic3BlY2lhbENoYXJzXCIsbGV2ZWw6XCJhbGxcIixudW1lcmljOlwiZGVjaW1hbFwifTtmdW5jdGlvbiBlbmNvZGUodGV4dCxfYSl7dmFyIF9iPV9hPT09dm9pZCAwP2RlZmF1bHRFbmNvZGVPcHRpb25zOl9hLF9jPV9iLm1vZGUsbW9kZT1fYz09PXZvaWQgMD9cInNwZWNpYWxDaGFyc1wiOl9jLF9kPV9iLm51bWVyaWMsbnVtZXJpYz1fZD09PXZvaWQgMD9cImRlY2ltYWxcIjpfZCxfZT1fYi5sZXZlbCxsZXZlbD1fZT09PXZvaWQgMD9cImFsbFwiOl9lO2lmKCF0ZXh0KXtyZXR1cm5cIlwifXZhciBlbmNvZGVSZWdFeHA9ZW5jb2RlUmVnRXhwc1ttb2RlXTt2YXIgcmVmZXJlbmNlcz1hbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmNoYXJhY3RlcnM7dmFyIGlzSGV4PW51bWVyaWM9PT1cImhleGFkZWNpbWFsXCI7cmV0dXJuIHJlcGxhY2VVc2luZ1JlZ0V4cCh0ZXh0LGVuY29kZVJlZ0V4cCwoZnVuY3Rpb24oaW5wdXQpe3ZhciByZXN1bHQ9cmVmZXJlbmNlc1tpbnB1dF07aWYoIXJlc3VsdCl7dmFyIGNvZGU9aW5wdXQubGVuZ3RoPjE/c3Vycm9nYXRlX3BhaXJzXzEuZ2V0Q29kZVBvaW50KGlucHV0LDApOmlucHV0LmNoYXJDb2RlQXQoMCk7cmVzdWx0PShpc0hleD9cIiYjeFwiK2NvZGUudG9TdHJpbmcoMTYpOlwiJiNcIitjb2RlKStcIjtcIn1yZXR1cm4gcmVzdWx0fSkpfWV4cG9ydHMuZW5jb2RlPWVuY29kZTt2YXIgZGVmYXVsdERlY29kZU9wdGlvbnM9e3Njb3BlOlwiYm9keVwiLGxldmVsOlwiYWxsXCJ9O3ZhciBzdHJpY3Q9LyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOy9nO3ZhciBhdHRyaWJ1dGU9LyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspWzs9XT8vZzt2YXIgYmFzZURlY29kZVJlZ0V4cHM9e3htbDp7c3RyaWN0OnN0cmljdCxhdHRyaWJ1dGU6YXR0cmlidXRlLGJvZHk6bmFtZWRfcmVmZXJlbmNlc18xLmJvZHlSZWdFeHBzLnhtbH0saHRtbDQ6e3N0cmljdDpzdHJpY3QsYXR0cmlidXRlOmF0dHJpYnV0ZSxib2R5Om5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy5odG1sNH0saHRtbDU6e3N0cmljdDpzdHJpY3QsYXR0cmlidXRlOmF0dHJpYnV0ZSxib2R5Om5hbWVkX3JlZmVyZW5jZXNfMS5ib2R5UmVnRXhwcy5odG1sNX19O3ZhciBkZWNvZGVSZWdFeHBzPV9fYXNzaWduKF9fYXNzaWduKHt9LGJhc2VEZWNvZGVSZWdFeHBzKSx7YWxsOmJhc2VEZWNvZGVSZWdFeHBzLmh0bWw1fSk7dmFyIGZyb21DaGFyQ29kZT1TdHJpbmcuZnJvbUNoYXJDb2RlO3ZhciBvdXRPZkJvdW5kc0NoYXI9ZnJvbUNoYXJDb2RlKDY1NTMzKTt2YXIgZGVmYXVsdERlY29kZUVudGl0eU9wdGlvbnM9e2xldmVsOlwiYWxsXCJ9O2Z1bmN0aW9uIGdldERlY29kZWRFbnRpdHkoZW50aXR5LHJlZmVyZW5jZXMsaXNBdHRyaWJ1dGUsaXNTdHJpY3Qpe3ZhciBkZWNvZGVSZXN1bHQ9ZW50aXR5O3ZhciBkZWNvZGVFbnRpdHlMYXN0Q2hhcj1lbnRpdHlbZW50aXR5Lmxlbmd0aC0xXTtpZihpc0F0dHJpYnV0ZSYmZGVjb2RlRW50aXR5TGFzdENoYXI9PT1cIj1cIil7ZGVjb2RlUmVzdWx0PWVudGl0eX1lbHNlIGlmKGlzU3RyaWN0JiZkZWNvZGVFbnRpdHlMYXN0Q2hhciE9PVwiO1wiKXtkZWNvZGVSZXN1bHQ9ZW50aXR5fWVsc2V7dmFyIGRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlPXJlZmVyZW5jZXNbZW50aXR5XTtpZihkZWNvZGVSZXN1bHRCeVJlZmVyZW5jZSl7ZGVjb2RlUmVzdWx0PWRlY29kZVJlc3VsdEJ5UmVmZXJlbmNlfWVsc2UgaWYoZW50aXR5WzBdPT09XCImXCImJmVudGl0eVsxXT09PVwiI1wiKXt2YXIgZGVjb2RlU2Vjb25kQ2hhcj1lbnRpdHlbMl07dmFyIGRlY29kZUNvZGU9ZGVjb2RlU2Vjb25kQ2hhcj09XCJ4XCJ8fGRlY29kZVNlY29uZENoYXI9PVwiWFwiP3BhcnNlSW50KGVudGl0eS5zdWJzdHIoMyksMTYpOnBhcnNlSW50KGVudGl0eS5zdWJzdHIoMikpO2RlY29kZVJlc3VsdD1kZWNvZGVDb2RlPj0xMTE0MTExP291dE9mQm91bmRzQ2hhcjpkZWNvZGVDb2RlPjY1NTM1P3N1cnJvZ2F0ZV9wYWlyc18xLmZyb21Db2RlUG9pbnQoZGVjb2RlQ29kZSk6ZnJvbUNoYXJDb2RlKG51bWVyaWNfdW5pY29kZV9tYXBfMS5udW1lcmljVW5pY29kZU1hcFtkZWNvZGVDb2RlXXx8ZGVjb2RlQ29kZSl9fXJldHVybiBkZWNvZGVSZXN1bHR9ZnVuY3Rpb24gZGVjb2RlRW50aXR5KGVudGl0eSxfYSl7dmFyIF9iPShfYT09PXZvaWQgMD9kZWZhdWx0RGVjb2RlRW50aXR5T3B0aW9uczpfYSkubGV2ZWwsbGV2ZWw9X2I9PT12b2lkIDA/XCJhbGxcIjpfYjtpZighZW50aXR5KXtyZXR1cm5cIlwifXJldHVybiBnZXREZWNvZGVkRW50aXR5KGVudGl0eSxhbGxOYW1lZFJlZmVyZW5jZXNbbGV2ZWxdLmVudGl0aWVzLGZhbHNlLGZhbHNlKX1leHBvcnRzLmRlY29kZUVudGl0eT1kZWNvZGVFbnRpdHk7ZnVuY3Rpb24gZGVjb2RlKHRleHQsX2Epe3ZhciBfYj1fYT09PXZvaWQgMD9kZWZhdWx0RGVjb2RlT3B0aW9uczpfYSxfYz1fYi5sZXZlbCxsZXZlbD1fYz09PXZvaWQgMD9cImFsbFwiOl9jLF9kPV9iLnNjb3BlLHNjb3BlPV9kPT09dm9pZCAwP2xldmVsPT09XCJ4bWxcIj9cInN0cmljdFwiOlwiYm9keVwiOl9kO2lmKCF0ZXh0KXtyZXR1cm5cIlwifXZhciBkZWNvZGVSZWdFeHA9ZGVjb2RlUmVnRXhwc1tsZXZlbF1bc2NvcGVdO3ZhciByZWZlcmVuY2VzPWFsbE5hbWVkUmVmZXJlbmNlc1tsZXZlbF0uZW50aXRpZXM7dmFyIGlzQXR0cmlidXRlPXNjb3BlPT09XCJhdHRyaWJ1dGVcIjt2YXIgaXNTdHJpY3Q9c2NvcGU9PT1cInN0cmljdFwiO3JldHVybiByZXBsYWNlVXNpbmdSZWdFeHAodGV4dCxkZWNvZGVSZWdFeHAsKGZ1bmN0aW9uKGVudGl0eSl7cmV0dXJuIGdldERlY29kZWRFbnRpdHkoZW50aXR5LHJlZmVyZW5jZXMsaXNBdHRyaWJ1dGUsaXNTdHJpY3QpfSkpfWV4cG9ydHMuZGVjb2RlPWRlY29kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPS4vaW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLmJvZHlSZWdFeHBzPXt4bWw6LyYoPzojXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZyxodG1sNDovJm5vdGluO3wmKD86bmJzcHxpZXhjbHxjZW50fHBvdW5kfGN1cnJlbnx5ZW58YnJ2YmFyfHNlY3R8dW1sfGNvcHl8b3JkZnxsYXF1b3xub3R8c2h5fHJlZ3xtYWNyfGRlZ3xwbHVzbW58c3VwMnxzdXAzfGFjdXRlfG1pY3JvfHBhcmF8bWlkZG90fGNlZGlsfHN1cDF8b3JkbXxyYXF1b3xmcmFjMTR8ZnJhYzEyfGZyYWMzNHxpcXVlc3R8QWdyYXZlfEFhY3V0ZXxBY2lyY3xBdGlsZGV8QXVtbHxBcmluZ3xBRWxpZ3xDY2VkaWx8RWdyYXZlfEVhY3V0ZXxFY2lyY3xFdW1sfElncmF2ZXxJYWN1dGV8SWNpcmN8SXVtbHxFVEh8TnRpbGRlfE9ncmF2ZXxPYWN1dGV8T2NpcmN8T3RpbGRlfE91bWx8dGltZXN8T3NsYXNofFVncmF2ZXxVYWN1dGV8VWNpcmN8VXVtbHxZYWN1dGV8VEhPUk58c3psaWd8YWdyYXZlfGFhY3V0ZXxhY2lyY3xhdGlsZGV8YXVtbHxhcmluZ3xhZWxpZ3xjY2VkaWx8ZWdyYXZlfGVhY3V0ZXxlY2lyY3xldW1sfGlncmF2ZXxpYWN1dGV8aWNpcmN8aXVtbHxldGh8bnRpbGRlfG9ncmF2ZXxvYWN1dGV8b2NpcmN8b3RpbGRlfG91bWx8ZGl2aWRlfG9zbGFzaHx1Z3JhdmV8dWFjdXRlfHVjaXJjfHV1bWx8eWFjdXRlfHRob3JufHl1bWx8cXVvdHxhbXB8bHR8Z3R8I1xcZCt8I1t4WF1bXFxkYS1mQS1GXSt8WzAtOWEtekEtWl0rKTs/L2csaHRtbDU6LyZjZW50ZXJkb3Q7fCZjb3B5c3I7fCZkaXZpZGVvbnRpbWVzO3wmZ3RjYzt8Jmd0Y2lyO3wmZ3Rkb3Q7fCZndGxQYXI7fCZndHF1ZXN0O3wmZ3RyYXBwcm94O3wmZ3RyYXJyO3wmZ3RyZG90O3wmZ3RyZXFsZXNzO3wmZ3RyZXFxbGVzczt8Jmd0cmxlc3M7fCZndHJzaW07fCZsdGNjO3wmbHRjaXI7fCZsdGRvdDt8Jmx0aHJlZTt8Jmx0aW1lczt8Jmx0bGFycjt8Jmx0cXVlc3Q7fCZsdHJQYXI7fCZsdHJpO3wmbHRyaWU7fCZsdHJpZjt8Jm5vdGluO3wmbm90aW5FO3wmbm90aW5kb3Q7fCZub3RpbnZhO3wmbm90aW52Yjt8Jm5vdGludmM7fCZub3RuaTt8Jm5vdG5pdmE7fCZub3RuaXZiO3wmbm90bml2Yzt8JnBhcmFsbGVsO3wmdGltZXNiO3wmdGltZXNiYXI7fCZ0aW1lc2Q7fCYoPzpBRWxpZ3xBTVB8QWFjdXRlfEFjaXJjfEFncmF2ZXxBcmluZ3xBdGlsZGV8QXVtbHxDT1BZfENjZWRpbHxFVEh8RWFjdXRlfEVjaXJjfEVncmF2ZXxFdW1sfEdUfElhY3V0ZXxJY2lyY3xJZ3JhdmV8SXVtbHxMVHxOdGlsZGV8T2FjdXRlfE9jaXJjfE9ncmF2ZXxPc2xhc2h8T3RpbGRlfE91bWx8UVVPVHxSRUd8VEhPUk58VWFjdXRlfFVjaXJjfFVncmF2ZXxVdW1sfFlhY3V0ZXxhYWN1dGV8YWNpcmN8YWN1dGV8YWVsaWd8YWdyYXZlfGFtcHxhcmluZ3xhdGlsZGV8YXVtbHxicnZiYXJ8Y2NlZGlsfGNlZGlsfGNlbnR8Y29weXxjdXJyZW58ZGVnfGRpdmlkZXxlYWN1dGV8ZWNpcmN8ZWdyYXZlfGV0aHxldW1sfGZyYWMxMnxmcmFjMTR8ZnJhYzM0fGd0fGlhY3V0ZXxpY2lyY3xpZXhjbHxpZ3JhdmV8aXF1ZXN0fGl1bWx8bGFxdW98bHR8bWFjcnxtaWNyb3xtaWRkb3R8bmJzcHxub3R8bnRpbGRlfG9hY3V0ZXxvY2lyY3xvZ3JhdmV8b3JkZnxvcmRtfG9zbGFzaHxvdGlsZGV8b3VtbHxwYXJhfHBsdXNtbnxwb3VuZHxxdW90fHJhcXVvfHJlZ3xzZWN0fHNoeXxzdXAxfHN1cDJ8c3VwM3xzemxpZ3x0aG9ybnx0aW1lc3x1YWN1dGV8dWNpcmN8dWdyYXZlfHVtbHx1dW1sfHlhY3V0ZXx5ZW58eXVtbHwjXFxkK3wjW3hYXVtcXGRhLWZBLUZdK3xbMC05YS16QS1aXSspOz8vZ307ZXhwb3J0cy5uYW1lZFJlZmVyZW5jZXM9e3htbDp7ZW50aXRpZXM6e1wiJmx0O1wiOlwiPFwiLFwiJmd0O1wiOlwiPlwiLFwiJnF1b3Q7XCI6J1wiJyxcIiZhcG9zO1wiOlwiJ1wiLFwiJmFtcDtcIjpcIiZcIn0sY2hhcmFjdGVyczp7XCI8XCI6XCImbHQ7XCIsXCI+XCI6XCImZ3Q7XCIsJ1wiJzpcIiZxdW90O1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCImXCI6XCImYW1wO1wifX0saHRtbDQ6e2VudGl0aWVzOntcIiZhcG9zO1wiOlwiJ1wiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImaWV4Y2xcIjpcIsKhXCIsXCImaWV4Y2w7XCI6XCLCoVwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJmN1cnJlblwiOlwiwqRcIixcIiZjdXJyZW47XCI6XCLCpFwiLFwiJnllblwiOlwiwqVcIixcIiZ5ZW47XCI6XCLCpVwiLFwiJmJydmJhclwiOlwiwqZcIixcIiZicnZiYXI7XCI6XCLCplwiLFwiJnNlY3RcIjpcIsKnXCIsXCImc2VjdDtcIjpcIsKnXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZub3RcIjpcIsKsXCIsXCImbm90O1wiOlwiwqxcIixcIiZzaHlcIjpcIsKtXCIsXCImc2h5O1wiOlwiwq1cIixcIiZyZWdcIjpcIsKuXCIsXCImcmVnO1wiOlwiwq5cIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJnBsdXNtblwiOlwiwrFcIixcIiZwbHVzbW47XCI6XCLCsVwiLFwiJnN1cDJcIjpcIsKyXCIsXCImc3VwMjtcIjpcIsKyXCIsXCImc3VwM1wiOlwiwrNcIixcIiZzdXAzO1wiOlwiwrNcIixcIiZhY3V0ZVwiOlwiwrRcIixcIiZhY3V0ZTtcIjpcIsK0XCIsXCImbWljcm9cIjpcIsK1XCIsXCImbWljcm87XCI6XCLCtVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImbWlkZG90XCI6XCLCt1wiLFwiJm1pZGRvdDtcIjpcIsK3XCIsXCImY2VkaWxcIjpcIsK4XCIsXCImY2VkaWw7XCI6XCLCuFwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImb3JkbVwiOlwiwrpcIixcIiZvcmRtO1wiOlwiwrpcIixcIiZyYXF1b1wiOlwiwrtcIixcIiZyYXF1bztcIjpcIsK7XCIsXCImZnJhYzE0XCI6XCLCvFwiLFwiJmZyYWMxNDtcIjpcIsK8XCIsXCImZnJhYzEyXCI6XCLCvVwiLFwiJmZyYWMxMjtcIjpcIsK9XCIsXCImZnJhYzM0XCI6XCLCvlwiLFwiJmZyYWMzNDtcIjpcIsK+XCIsXCImaXF1ZXN0XCI6XCLCv1wiLFwiJmlxdWVzdDtcIjpcIsK/XCIsXCImQWdyYXZlXCI6XCLDgFwiLFwiJkFncmF2ZTtcIjpcIsOAXCIsXCImQWFjdXRlXCI6XCLDgVwiLFwiJkFhY3V0ZTtcIjpcIsOBXCIsXCImQWNpcmNcIjpcIsOCXCIsXCImQWNpcmM7XCI6XCLDglwiLFwiJkF0aWxkZVwiOlwiw4NcIixcIiZBdGlsZGU7XCI6XCLDg1wiLFwiJkF1bWxcIjpcIsOEXCIsXCImQXVtbDtcIjpcIsOEXCIsXCImQXJpbmdcIjpcIsOFXCIsXCImQXJpbmc7XCI6XCLDhVwiLFwiJkFFbGlnXCI6XCLDhlwiLFwiJkFFbGlnO1wiOlwiw4ZcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZFZ3JhdmVcIjpcIsOIXCIsXCImRWdyYXZlO1wiOlwiw4hcIixcIiZFYWN1dGVcIjpcIsOJXCIsXCImRWFjdXRlO1wiOlwiw4lcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRXVtbFwiOlwiw4tcIixcIiZFdW1sO1wiOlwiw4tcIixcIiZJZ3JhdmVcIjpcIsOMXCIsXCImSWdyYXZlO1wiOlwiw4xcIixcIiZJYWN1dGVcIjpcIsONXCIsXCImSWFjdXRlO1wiOlwiw41cIixcIiZJY2lyY1wiOlwiw45cIixcIiZJY2lyYztcIjpcIsOOXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZFVEhcIjpcIsOQXCIsXCImRVRIO1wiOlwiw5BcIixcIiZOdGlsZGVcIjpcIsORXCIsXCImTnRpbGRlO1wiOlwiw5FcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT3RpbGRlXCI6XCLDlVwiLFwiJk90aWxkZTtcIjpcIsOVXCIsXCImT3VtbFwiOlwiw5ZcIixcIiZPdW1sO1wiOlwiw5ZcIixcIiZ0aW1lc1wiOlwiw5dcIixcIiZ0aW1lcztcIjpcIsOXXCIsXCImT3NsYXNoXCI6XCLDmFwiLFwiJk9zbGFzaDtcIjpcIsOYXCIsXCImVWdyYXZlXCI6XCLDmVwiLFwiJlVncmF2ZTtcIjpcIsOZXCIsXCImVWFjdXRlXCI6XCLDmlwiLFwiJlVhY3V0ZTtcIjpcIsOaXCIsXCImVWNpcmNcIjpcIsObXCIsXCImVWNpcmM7XCI6XCLDm1wiLFwiJlV1bWxcIjpcIsOcXCIsXCImVXVtbDtcIjpcIsOcXCIsXCImWWFjdXRlXCI6XCLDnVwiLFwiJllhY3V0ZTtcIjpcIsOdXCIsXCImVEhPUk5cIjpcIsOeXCIsXCImVEhPUk47XCI6XCLDnlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhYWN1dGVcIjpcIsOhXCIsXCImYWFjdXRlO1wiOlwiw6FcIixcIiZhY2lyY1wiOlwiw6JcIixcIiZhY2lyYztcIjpcIsOiXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYWVsaWdcIjpcIsOmXCIsXCImYWVsaWc7XCI6XCLDplwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVhY3V0ZVwiOlwiw6lcIixcIiZlYWN1dGU7XCI6XCLDqVwiLFwiJmVjaXJjXCI6XCLDqlwiLFwiJmVjaXJjO1wiOlwiw6pcIixcIiZldW1sXCI6XCLDq1wiLFwiJmV1bWw7XCI6XCLDq1wiLFwiJmlncmF2ZVwiOlwiw6xcIixcIiZpZ3JhdmU7XCI6XCLDrFwiLFwiJmlhY3V0ZVwiOlwiw61cIixcIiZpYWN1dGU7XCI6XCLDrVwiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpdW1sXCI6XCLDr1wiLFwiJml1bWw7XCI6XCLDr1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJm50aWxkZVwiOlwiw7FcIixcIiZudGlsZGU7XCI6XCLDsVwiLFwiJm9ncmF2ZVwiOlwiw7JcIixcIiZvZ3JhdmU7XCI6XCLDslwiLFwiJm9hY3V0ZVwiOlwiw7NcIixcIiZvYWN1dGU7XCI6XCLDs1wiLFwiJm9jaXJjXCI6XCLDtFwiLFwiJm9jaXJjO1wiOlwiw7RcIixcIiZvdGlsZGVcIjpcIsO1XCIsXCImb3RpbGRlO1wiOlwiw7VcIixcIiZvdW1sXCI6XCLDtlwiLFwiJm91bWw7XCI6XCLDtlwiLFwiJmRpdmlkZVwiOlwiw7dcIixcIiZkaXZpZGU7XCI6XCLDt1wiLFwiJm9zbGFzaFwiOlwiw7hcIixcIiZvc2xhc2g7XCI6XCLDuFwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVhY3V0ZVwiOlwiw7pcIixcIiZ1YWN1dGU7XCI6XCLDulwiLFwiJnVjaXJjXCI6XCLDu1wiLFwiJnVjaXJjO1wiOlwiw7tcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnlhY3V0ZVwiOlwiw71cIixcIiZ5YWN1dGU7XCI6XCLDvVwiLFwiJnRob3JuXCI6XCLDvlwiLFwiJnRob3JuO1wiOlwiw75cIixcIiZ5dW1sXCI6XCLDv1wiLFwiJnl1bWw7XCI6XCLDv1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZhbXBcIjpcIiZcIixcIiZhbXA7XCI6XCImXCIsXCImbHRcIjpcIjxcIixcIiZsdDtcIjpcIjxcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImU2Nhcm9uO1wiOlwixaBcIixcIiZzY2Fyb247XCI6XCLFoVwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJmNpcmM7XCI6XCLLhlwiLFwiJnRpbGRlO1wiOlwiy5xcIixcIiZlbnNwO1wiOlwi4oCCXCIsXCImZW1zcDtcIjpcIuKAg1wiLFwiJnRoaW5zcDtcIjpcIuKAiVwiLFwiJnp3bmo7XCI6XCLigIxcIixcIiZ6d2o7XCI6XCLigI1cIixcIiZscm07XCI6XCLigI5cIixcIiZybG07XCI6XCLigI9cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImbGRxdW87XCI6XCLigJxcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJmJkcXVvO1wiOlwi4oCeXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImRGFnZ2VyO1wiOlwi4oChXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImcnNhcXVvO1wiOlwi4oC6XCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmZub2Y7XCI6XCLGklwiLFwiJkFscGhhO1wiOlwizpFcIixcIiZCZXRhO1wiOlwizpJcIixcIiZHYW1tYTtcIjpcIs6TXCIsXCImRGVsdGE7XCI6XCLOlFwiLFwiJkVwc2lsb247XCI6XCLOlVwiLFwiJlpldGE7XCI6XCLOllwiLFwiJkV0YTtcIjpcIs6XXCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJklvdGE7XCI6XCLOmVwiLFwiJkthcHBhO1wiOlwizppcIixcIiZMYW1iZGE7XCI6XCLOm1wiLFwiJk11O1wiOlwizpxcIixcIiZOdTtcIjpcIs6dXCIsXCImWGk7XCI6XCLOnlwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJlBpO1wiOlwizqBcIixcIiZSaG87XCI6XCLOoVwiLFwiJlNpZ21hO1wiOlwizqNcIixcIiZUYXU7XCI6XCLOpFwiLFwiJlVwc2lsb247XCI6XCLOpVwiLFwiJlBoaTtcIjpcIs6mXCIsXCImQ2hpO1wiOlwizqdcIixcIiZQc2k7XCI6XCLOqFwiLFwiJk9tZWdhO1wiOlwizqlcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYmV0YTtcIjpcIs6yXCIsXCImZ2FtbWE7XCI6XCLOs1wiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZ6ZXRhO1wiOlwizrZcIixcIiZldGE7XCI6XCLOt1wiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZpb3RhO1wiOlwizrlcIixcIiZrYXBwYTtcIjpcIs66XCIsXCImbGFtYmRhO1wiOlwizrtcIixcIiZtdTtcIjpcIs68XCIsXCImbnU7XCI6XCLOvVwiLFwiJnhpO1wiOlwizr5cIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZwaTtcIjpcIs+AXCIsXCImcmhvO1wiOlwiz4FcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnVwc2lsb247XCI6XCLPhVwiLFwiJnBoaTtcIjpcIs+GXCIsXCImY2hpO1wiOlwiz4dcIixcIiZwc2k7XCI6XCLPiFwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdXBzaWg7XCI6XCLPklwiLFwiJnBpdjtcIjpcIs+WXCIsXCImYnVsbDtcIjpcIuKAolwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJnByaW1lO1wiOlwi4oCyXCIsXCImUHJpbWU7XCI6XCLigLNcIixcIiZvbGluZTtcIjpcIuKAvlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImd2VpZXJwO1wiOlwi4oSYXCIsXCImaW1hZ2U7XCI6XCLihJFcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImdHJhZGU7XCI6XCLihKJcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImbGFycjtcIjpcIuKGkFwiLFwiJnVhcnI7XCI6XCLihpFcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZ1QXJyO1wiOlwi4oeRXCIsXCImckFycjtcIjpcIuKHklwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZoQXJyO1wiOlwi4oeUXCIsXCImZm9yYWxsO1wiOlwi4oiAXCIsXCImcGFydDtcIjpcIuKIglwiLFwiJmV4aXN0O1wiOlwi4oiDXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZuYWJsYTtcIjpcIuKIh1wiLFwiJmlzaW47XCI6XCLiiIhcIixcIiZub3RpbjtcIjpcIuKIiVwiLFwiJm5pO1wiOlwi4oiLXCIsXCImcHJvZDtcIjpcIuKIj1wiLFwiJnN1bTtcIjpcIuKIkVwiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbG93YXN0O1wiOlwi4oiXXCIsXCImcmFkaWM7XCI6XCLiiJpcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImaW5maW47XCI6XCLiiJ5cIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmQ7XCI6XCLiiKdcIixcIiZvcjtcIjpcIuKIqFwiLFwiJmNhcDtcIjpcIuKIqVwiLFwiJmN1cDtcIjpcIuKIqlwiLFwiJmludDtcIjpcIuKIq1wiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnNpbTtcIjpcIuKIvFwiLFwiJmNvbmc7XCI6XCLiiYVcIixcIiZhc3ltcDtcIjpcIuKJiFwiLFwiJm5lO1wiOlwi4omgXCIsXCImZXF1aXY7XCI6XCLiiaFcIixcIiZsZTtcIjpcIuKJpFwiLFwiJmdlO1wiOlwi4omlXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3VwO1wiOlwi4oqDXCIsXCImbnN1YjtcIjpcIuKKhFwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdXBlO1wiOlwi4oqHXCIsXCImb3BsdXM7XCI6XCLiipVcIixcIiZvdGltZXM7XCI6XCLiipdcIixcIiZwZXJwO1wiOlwi4oqlXCIsXCImc2RvdDtcIjpcIuKLhVwiLFwiJmxjZWlsO1wiOlwi4oyIXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZsZmxvb3I7XCI6XCLijIpcIixcIiZyZmxvb3I7XCI6XCLijItcIixcIiZsYW5nO1wiOlwi4oypXCIsXCImcmFuZztcIjpcIuKMqlwiLFwiJmxvejtcIjpcIuKXilwiLFwiJnNwYWRlcztcIjpcIuKZoFwiLFwiJmNsdWJzO1wiOlwi4pmjXCIsXCImaGVhcnRzO1wiOlwi4pmlXCIsXCImZGlhbXM7XCI6XCLimaZcIn0sY2hhcmFjdGVyczp7XCInXCI6XCImYXBvcztcIixcIsKgXCI6XCImbmJzcDtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLCo1wiOlwiJnBvdW5kO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLCpVwiOlwiJnllbjtcIixcIsKmXCI6XCImYnJ2YmFyO1wiLFwiwqdcIjpcIiZzZWN0O1wiLFwiwqhcIjpcIiZ1bWw7XCIsXCLCqVwiOlwiJmNvcHk7XCIsXCLCqlwiOlwiJm9yZGY7XCIsXCLCq1wiOlwiJmxhcXVvO1wiLFwiwqxcIjpcIiZub3Q7XCIsXCLCrVwiOlwiJnNoeTtcIixcIsKuXCI6XCImcmVnO1wiLFwiwq9cIjpcIiZtYWNyO1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLCsVwiOlwiJnBsdXNtbjtcIixcIsKyXCI6XCImc3VwMjtcIixcIsKzXCI6XCImc3VwMztcIixcIsK0XCI6XCImYWN1dGU7XCIsXCLCtVwiOlwiJm1pY3JvO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrlcIjpcIiZzdXAxO1wiLFwiwrpcIjpcIiZvcmRtO1wiLFwiwrtcIjpcIiZyYXF1bztcIixcIsK8XCI6XCImZnJhYzE0O1wiLFwiwr1cIjpcIiZmcmFjMTI7XCIsXCLCvlwiOlwiJmZyYWMzNDtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwiw4BcIjpcIiZBZ3JhdmU7XCIsXCLDgVwiOlwiJkFhY3V0ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLDg1wiOlwiJkF0aWxkZTtcIixcIsOEXCI6XCImQXVtbDtcIixcIsOFXCI6XCImQXJpbmc7XCIsXCLDhlwiOlwiJkFFbGlnO1wiLFwiw4dcIjpcIiZDY2VkaWw7XCIsXCLDiFwiOlwiJkVncmF2ZTtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwiw4pcIjpcIiZFY2lyYztcIixcIsOLXCI6XCImRXVtbDtcIixcIsOMXCI6XCImSWdyYXZlO1wiLFwiw41cIjpcIiZJYWN1dGU7XCIsXCLDjlwiOlwiJkljaXJjO1wiLFwiw49cIjpcIiZJdW1sO1wiLFwiw5BcIjpcIiZFVEg7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIsOSXCI6XCImT2dyYXZlO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwiw5VcIjpcIiZPdGlsZGU7XCIsXCLDllwiOlwiJk91bWw7XCIsXCLDl1wiOlwiJnRpbWVzO1wiLFwiw5hcIjpcIiZPc2xhc2g7XCIsXCLDmVwiOlwiJlVncmF2ZTtcIixcIsOaXCI6XCImVWFjdXRlO1wiLFwiw5tcIjpcIiZVY2lyYztcIixcIsOcXCI6XCImVXVtbDtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwiw55cIjpcIiZUSE9STjtcIixcIsOfXCI6XCImc3psaWc7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIsOhXCI6XCImYWFjdXRlO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcIsOjXCI6XCImYXRpbGRlO1wiLFwiw6RcIjpcIiZhdW1sO1wiLFwiw6VcIjpcIiZhcmluZztcIixcIsOmXCI6XCImYWVsaWc7XCIsXCLDp1wiOlwiJmNjZWRpbDtcIixcIsOoXCI6XCImZWdyYXZlO1wiLFwiw6lcIjpcIiZlYWN1dGU7XCIsXCLDqlwiOlwiJmVjaXJjO1wiLFwiw6tcIjpcIiZldW1sO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLDr1wiOlwiJml1bWw7XCIsXCLDsFwiOlwiJmV0aDtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLDs1wiOlwiJm9hY3V0ZTtcIixcIsO0XCI6XCImb2NpcmM7XCIsXCLDtVwiOlwiJm90aWxkZTtcIixcIsO2XCI6XCImb3VtbDtcIixcIsO3XCI6XCImZGl2aWRlO1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLDuVwiOlwiJnVncmF2ZTtcIixcIsO6XCI6XCImdWFjdXRlO1wiLFwiw7tcIjpcIiZ1Y2lyYztcIixcIsO8XCI6XCImdXVtbDtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsO/XCI6XCImeXVtbDtcIiwnXCInOlwiJnF1b3Q7XCIsXCImXCI6XCImYW1wO1wiLFwiPFwiOlwiJmx0O1wiLFwiPlwiOlwiJmd0O1wiLFwixZJcIjpcIiZPRWxpZztcIixcIsWTXCI6XCImb2VsaWc7XCIsXCLFoFwiOlwiJlNjYXJvbjtcIixcIsWhXCI6XCImc2Nhcm9uO1wiLFwixbhcIjpcIiZZdW1sO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwiy5xcIjpcIiZ0aWxkZTtcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLigINcIjpcIiZlbXNwO1wiLFwi4oCJXCI6XCImdGhpbnNwO1wiLFwi4oCMXCI6XCImenduajtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjlwiOlwiJmxybTtcIixcIuKAj1wiOlwiJnJsbTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKAmVwiOlwiJnJzcXVvO1wiLFwi4oCaXCI6XCImc2JxdW87XCIsXCLigJxcIjpcIiZsZHF1bztcIixcIuKAnVwiOlwiJnJkcXVvO1wiLFwi4oCeXCI6XCImYmRxdW87XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLigKFcIjpcIiZEYWdnZXI7XCIsXCLigLBcIjpcIiZwZXJtaWw7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLigLpcIjpcIiZyc2FxdW87XCIsXCLigqxcIjpcIiZldXJvO1wiLFwixpJcIjpcIiZmbm9mO1wiLFwizpFcIjpcIiZBbHBoYTtcIixcIs6SXCI6XCImQmV0YTtcIixcIs6TXCI6XCImR2FtbWE7XCIsXCLOlFwiOlwiJkRlbHRhO1wiLFwizpVcIjpcIiZFcHNpbG9uO1wiLFwizpZcIjpcIiZaZXRhO1wiLFwizpdcIjpcIiZFdGE7XCIsXCLOmFwiOlwiJlRoZXRhO1wiLFwizplcIjpcIiZJb3RhO1wiLFwizppcIjpcIiZLYXBwYTtcIixcIs6bXCI6XCImTGFtYmRhO1wiLFwizpxcIjpcIiZNdTtcIixcIs6dXCI6XCImTnU7XCIsXCLOnlwiOlwiJlhpO1wiLFwizp9cIjpcIiZPbWljcm9uO1wiLFwizqBcIjpcIiZQaTtcIixcIs6hXCI6XCImUmhvO1wiLFwizqNcIjpcIiZTaWdtYTtcIixcIs6kXCI6XCImVGF1O1wiLFwizqVcIjpcIiZVcHNpbG9uO1wiLFwizqZcIjpcIiZQaGk7XCIsXCLOp1wiOlwiJkNoaTtcIixcIs6oXCI6XCImUHNpO1wiLFwizqlcIjpcIiZPbWVnYTtcIixcIs6xXCI6XCImYWxwaGE7XCIsXCLOslwiOlwiJmJldGE7XCIsXCLOs1wiOlwiJmdhbW1hO1wiLFwizrRcIjpcIiZkZWx0YTtcIixcIs61XCI6XCImZXBzaWxvbjtcIixcIs62XCI6XCImemV0YTtcIixcIs63XCI6XCImZXRhO1wiLFwizrhcIjpcIiZ0aGV0YTtcIixcIs65XCI6XCImaW90YTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLOu1wiOlwiJmxhbWJkYTtcIixcIs68XCI6XCImbXU7XCIsXCLOvVwiOlwiJm51O1wiLFwizr5cIjpcIiZ4aTtcIixcIs6/XCI6XCImb21pY3JvbjtcIixcIs+AXCI6XCImcGk7XCIsXCLPgVwiOlwiJnJobztcIixcIs+CXCI6XCImc2lnbWFmO1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+EXCI6XCImdGF1O1wiLFwiz4VcIjpcIiZ1cHNpbG9uO1wiLFwiz4ZcIjpcIiZwaGk7XCIsXCLPh1wiOlwiJmNoaTtcIixcIs+IXCI6XCImcHNpO1wiLFwiz4lcIjpcIiZvbWVnYTtcIixcIs+RXCI6XCImdGhldGFzeW07XCIsXCLPklwiOlwiJnVwc2loO1wiLFwiz5ZcIjpcIiZwaXY7XCIsXCLigKJcIjpcIiZidWxsO1wiLFwi4oCmXCI6XCImaGVsbGlwO1wiLFwi4oCyXCI6XCImcHJpbWU7XCIsXCLigLNcIjpcIiZQcmltZTtcIixcIuKAvlwiOlwiJm9saW5lO1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLihJhcIjpcIiZ3ZWllcnA7XCIsXCLihJFcIjpcIiZpbWFnZTtcIixcIuKEnFwiOlwiJnJlYWw7XCIsXCLihKJcIjpcIiZ0cmFkZTtcIixcIuKEtVwiOlwiJmFsZWZzeW07XCIsXCLihpBcIjpcIiZsYXJyO1wiLFwi4oaRXCI6XCImdWFycjtcIixcIuKGklwiOlwiJnJhcnI7XCIsXCLihpNcIjpcIiZkYXJyO1wiLFwi4oaUXCI6XCImaGFycjtcIixcIuKGtVwiOlwiJmNyYXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5JcIjpcIiZyQXJyO1wiLFwi4oeTXCI6XCImZEFycjtcIixcIuKHlFwiOlwiJmhBcnI7XCIsXCLiiIBcIjpcIiZmb3JhbGw7XCIsXCLiiIJcIjpcIiZwYXJ0O1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLiiIVcIjpcIiZlbXB0eTtcIixcIuKIh1wiOlwiJm5hYmxhO1wiLFwi4oiIXCI6XCImaXNpbjtcIixcIuKIiVwiOlwiJm5vdGluO1wiLFwi4oiLXCI6XCImbmk7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4oiSXCI6XCImbWludXM7XCIsXCLiiJdcIjpcIiZsb3dhc3Q7XCIsXCLiiJpcIjpcIiZyYWRpYztcIixcIuKInVwiOlwiJnByb3A7XCIsXCLiiJ5cIjpcIiZpbmZpbjtcIixcIuKIoFwiOlwiJmFuZztcIixcIuKIp1wiOlwiJmFuZDtcIixcIuKIqFwiOlwiJm9yO1wiLFwi4oipXCI6XCImY2FwO1wiLFwi4oiqXCI6XCImY3VwO1wiLFwi4oirXCI6XCImaW50O1wiLFwi4oi0XCI6XCImdGhlcmU0O1wiLFwi4oi8XCI6XCImc2ltO1wiLFwi4omFXCI6XCImY29uZztcIixcIuKJiFwiOlwiJmFzeW1wO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiaFcIjpcIiZlcXVpdjtcIixcIuKJpFwiOlwiJmxlO1wiLFwi4omlXCI6XCImZ2U7XCIsXCLiioJcIjpcIiZzdWI7XCIsXCLiioNcIjpcIiZzdXA7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4oqGXCI6XCImc3ViZTtcIixcIuKKh1wiOlwiJnN1cGU7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLijIlcIjpcIiZyY2VpbDtcIixcIuKMilwiOlwiJmxmbG9vcjtcIixcIuKMi1wiOlwiJnJmbG9vcjtcIixcIuKMqVwiOlwiJmxhbmc7XCIsXCLijKpcIjpcIiZyYW5nO1wiLFwi4peKXCI6XCImbG96O1wiLFwi4pmgXCI6XCImc3BhZGVzO1wiLFwi4pmjXCI6XCImY2x1YnM7XCIsXCLimaVcIjpcIiZoZWFydHM7XCIsXCLimaZcIjpcIiZkaWFtcztcIn19LGh0bWw1OntlbnRpdGllczp7XCImQUVsaWdcIjpcIsOGXCIsXCImQUVsaWc7XCI6XCLDhlwiLFwiJkFNUFwiOlwiJlwiLFwiJkFNUDtcIjpcIiZcIixcIiZBYWN1dGVcIjpcIsOBXCIsXCImQWFjdXRlO1wiOlwiw4FcIixcIiZBYnJldmU7XCI6XCLEglwiLFwiJkFjaXJjXCI6XCLDglwiLFwiJkFjaXJjO1wiOlwiw4JcIixcIiZBY3k7XCI6XCLQkFwiLFwiJkFmcjtcIjpcIvCdlIRcIixcIiZBZ3JhdmVcIjpcIsOAXCIsXCImQWdyYXZlO1wiOlwiw4BcIixcIiZBbHBoYTtcIjpcIs6RXCIsXCImQW1hY3I7XCI6XCLEgFwiLFwiJkFuZDtcIjpcIuKpk1wiLFwiJkFvZ29uO1wiOlwixIRcIixcIiZBb3BmO1wiOlwi8J2UuFwiLFwiJkFwcGx5RnVuY3Rpb247XCI6XCLigaFcIixcIiZBcmluZ1wiOlwiw4VcIixcIiZBcmluZztcIjpcIsOFXCIsXCImQXNjcjtcIjpcIvCdkpxcIixcIiZBc3NpZ247XCI6XCLiiZRcIixcIiZBdGlsZGVcIjpcIsODXCIsXCImQXRpbGRlO1wiOlwiw4NcIixcIiZBdW1sXCI6XCLDhFwiLFwiJkF1bWw7XCI6XCLDhFwiLFwiJkJhY2tzbGFzaDtcIjpcIuKIllwiLFwiJkJhcnY7XCI6XCLiq6dcIixcIiZCYXJ3ZWQ7XCI6XCLijIZcIixcIiZCY3k7XCI6XCLQkVwiLFwiJkJlY2F1c2U7XCI6XCLiiLVcIixcIiZCZXJub3VsbGlzO1wiOlwi4oSsXCIsXCImQmV0YTtcIjpcIs6SXCIsXCImQmZyO1wiOlwi8J2UhVwiLFwiJkJvcGY7XCI6XCLwnZS5XCIsXCImQnJldmU7XCI6XCLLmFwiLFwiJkJzY3I7XCI6XCLihKxcIixcIiZCdW1wZXE7XCI6XCLiiY5cIixcIiZDSGN5O1wiOlwi0KdcIixcIiZDT1BZXCI6XCLCqVwiLFwiJkNPUFk7XCI6XCLCqVwiLFwiJkNhY3V0ZTtcIjpcIsSGXCIsXCImQ2FwO1wiOlwi4ouSXCIsXCImQ2FwaXRhbERpZmZlcmVudGlhbEQ7XCI6XCLihYVcIixcIiZDYXlsZXlzO1wiOlwi4oStXCIsXCImQ2Nhcm9uO1wiOlwixIxcIixcIiZDY2VkaWxcIjpcIsOHXCIsXCImQ2NlZGlsO1wiOlwiw4dcIixcIiZDY2lyYztcIjpcIsSIXCIsXCImQ2NvbmludDtcIjpcIuKIsFwiLFwiJkNkb3Q7XCI6XCLEilwiLFwiJkNlZGlsbGE7XCI6XCLCuFwiLFwiJkNlbnRlckRvdDtcIjpcIsK3XCIsXCImQ2ZyO1wiOlwi4oStXCIsXCImQ2hpO1wiOlwizqdcIixcIiZDaXJjbGVEb3Q7XCI6XCLiiplcIixcIiZDaXJjbGVNaW51cztcIjpcIuKKllwiLFwiJkNpcmNsZVBsdXM7XCI6XCLiipVcIixcIiZDaXJjbGVUaW1lcztcIjpcIuKKl1wiLFwiJkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIslwiLFwiJkNsb3NlQ3VybHlEb3VibGVRdW90ZTtcIjpcIuKAnVwiLFwiJkNsb3NlQ3VybHlRdW90ZTtcIjpcIuKAmVwiLFwiJkNvbG9uO1wiOlwi4oi3XCIsXCImQ29sb25lO1wiOlwi4qm0XCIsXCImQ29uZ3J1ZW50O1wiOlwi4omhXCIsXCImQ29uaW50O1wiOlwi4oivXCIsXCImQ29udG91ckludGVncmFsO1wiOlwi4oiuXCIsXCImQ29wZjtcIjpcIuKEglwiLFwiJkNvcHJvZHVjdDtcIjpcIuKIkFwiLFwiJkNvdW50ZXJDbG9ja3dpc2VDb250b3VySW50ZWdyYWw7XCI6XCLiiLNcIixcIiZDcm9zcztcIjpcIuKor1wiLFwiJkNzY3I7XCI6XCLwnZKeXCIsXCImQ3VwO1wiOlwi4ouTXCIsXCImQ3VwQ2FwO1wiOlwi4omNXCIsXCImREQ7XCI6XCLihYVcIixcIiZERG90cmFoZDtcIjpcIuKkkVwiLFwiJkRKY3k7XCI6XCLQglwiLFwiJkRTY3k7XCI6XCLQhVwiLFwiJkRaY3k7XCI6XCLQj1wiLFwiJkRhZ2dlcjtcIjpcIuKAoVwiLFwiJkRhcnI7XCI6XCLihqFcIixcIiZEYXNodjtcIjpcIuKrpFwiLFwiJkRjYXJvbjtcIjpcIsSOXCIsXCImRGN5O1wiOlwi0JRcIixcIiZEZWw7XCI6XCLiiIdcIixcIiZEZWx0YTtcIjpcIs6UXCIsXCImRGZyO1wiOlwi8J2Uh1wiLFwiJkRpYWNyaXRpY2FsQWN1dGU7XCI6XCLCtFwiLFwiJkRpYWNyaXRpY2FsRG90O1wiOlwiy5lcIixcIiZEaWFjcml0aWNhbERvdWJsZUFjdXRlO1wiOlwiy51cIixcIiZEaWFjcml0aWNhbEdyYXZlO1wiOlwiYFwiLFwiJkRpYWNyaXRpY2FsVGlsZGU7XCI6XCLLnFwiLFwiJkRpYW1vbmQ7XCI6XCLii4RcIixcIiZEaWZmZXJlbnRpYWxEO1wiOlwi4oWGXCIsXCImRG9wZjtcIjpcIvCdlLtcIixcIiZEb3Q7XCI6XCLCqFwiLFwiJkRvdERvdDtcIjpcIuKDnFwiLFwiJkRvdEVxdWFsO1wiOlwi4omQXCIsXCImRG91YmxlQ29udG91ckludGVncmFsO1wiOlwi4oivXCIsXCImRG91YmxlRG90O1wiOlwiwqhcIixcIiZEb3VibGVEb3duQXJyb3c7XCI6XCLih5NcIixcIiZEb3VibGVMZWZ0QXJyb3c7XCI6XCLih5BcIixcIiZEb3VibGVMZWZ0UmlnaHRBcnJvdztcIjpcIuKHlFwiLFwiJkRvdWJsZUxlZnRUZWU7XCI6XCLiq6RcIixcIiZEb3VibGVMb25nTGVmdEFycm93O1wiOlwi4p+4XCIsXCImRG91YmxlTG9uZ0xlZnRSaWdodEFycm93O1wiOlwi4p+6XCIsXCImRG91YmxlTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7lcIixcIiZEb3VibGVSaWdodEFycm93O1wiOlwi4oeSXCIsXCImRG91YmxlUmlnaHRUZWU7XCI6XCLiiqhcIixcIiZEb3VibGVVcEFycm93O1wiOlwi4oeRXCIsXCImRG91YmxlVXBEb3duQXJyb3c7XCI6XCLih5VcIixcIiZEb3VibGVWZXJ0aWNhbEJhcjtcIjpcIuKIpVwiLFwiJkRvd25BcnJvdztcIjpcIuKGk1wiLFwiJkRvd25BcnJvd0JhcjtcIjpcIuKkk1wiLFwiJkRvd25BcnJvd1VwQXJyb3c7XCI6XCLih7VcIixcIiZEb3duQnJldmU7XCI6XCLMkVwiLFwiJkRvd25MZWZ0UmlnaHRWZWN0b3I7XCI6XCLipZBcIixcIiZEb3duTGVmdFRlZVZlY3RvcjtcIjpcIuKlnlwiLFwiJkRvd25MZWZ0VmVjdG9yO1wiOlwi4oa9XCIsXCImRG93bkxlZnRWZWN0b3JCYXI7XCI6XCLipZZcIixcIiZEb3duUmlnaHRUZWVWZWN0b3I7XCI6XCLipZ9cIixcIiZEb3duUmlnaHRWZWN0b3I7XCI6XCLih4FcIixcIiZEb3duUmlnaHRWZWN0b3JCYXI7XCI6XCLipZdcIixcIiZEb3duVGVlO1wiOlwi4oqkXCIsXCImRG93blRlZUFycm93O1wiOlwi4oanXCIsXCImRG93bmFycm93O1wiOlwi4oeTXCIsXCImRHNjcjtcIjpcIvCdkp9cIixcIiZEc3Ryb2s7XCI6XCLEkFwiLFwiJkVORztcIjpcIsWKXCIsXCImRVRIXCI6XCLDkFwiLFwiJkVUSDtcIjpcIsOQXCIsXCImRWFjdXRlXCI6XCLDiVwiLFwiJkVhY3V0ZTtcIjpcIsOJXCIsXCImRWNhcm9uO1wiOlwixJpcIixcIiZFY2lyY1wiOlwiw4pcIixcIiZFY2lyYztcIjpcIsOKXCIsXCImRWN5O1wiOlwi0K1cIixcIiZFZG90O1wiOlwixJZcIixcIiZFZnI7XCI6XCLwnZSIXCIsXCImRWdyYXZlXCI6XCLDiFwiLFwiJkVncmF2ZTtcIjpcIsOIXCIsXCImRWxlbWVudDtcIjpcIuKIiFwiLFwiJkVtYWNyO1wiOlwixJJcIixcIiZFbXB0eVNtYWxsU3F1YXJlO1wiOlwi4pe7XCIsXCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqtcIixcIiZFb2dvbjtcIjpcIsSYXCIsXCImRW9wZjtcIjpcIvCdlLxcIixcIiZFcHNpbG9uO1wiOlwizpVcIixcIiZFcXVhbDtcIjpcIuKptVwiLFwiJkVxdWFsVGlsZGU7XCI6XCLiiYJcIixcIiZFcXVpbGlicml1bTtcIjpcIuKHjFwiLFwiJkVzY3I7XCI6XCLihLBcIixcIiZFc2ltO1wiOlwi4qmzXCIsXCImRXRhO1wiOlwizpdcIixcIiZFdW1sXCI6XCLDi1wiLFwiJkV1bWw7XCI6XCLDi1wiLFwiJkV4aXN0cztcIjpcIuKIg1wiLFwiJkV4cG9uZW50aWFsRTtcIjpcIuKFh1wiLFwiJkZjeTtcIjpcItCkXCIsXCImRmZyO1wiOlwi8J2UiVwiLFwiJkZpbGxlZFNtYWxsU3F1YXJlO1wiOlwi4pe8XCIsXCImRmlsbGVkVmVyeVNtYWxsU3F1YXJlO1wiOlwi4paqXCIsXCImRm9wZjtcIjpcIvCdlL1cIixcIiZGb3JBbGw7XCI6XCLiiIBcIixcIiZGb3VyaWVydHJmO1wiOlwi4oSxXCIsXCImRnNjcjtcIjpcIuKEsVwiLFwiJkdKY3k7XCI6XCLQg1wiLFwiJkdUXCI6XCI+XCIsXCImR1Q7XCI6XCI+XCIsXCImR2FtbWE7XCI6XCLOk1wiLFwiJkdhbW1hZDtcIjpcIs+cXCIsXCImR2JyZXZlO1wiOlwixJ5cIixcIiZHY2VkaWw7XCI6XCLEolwiLFwiJkdjaXJjO1wiOlwixJxcIixcIiZHY3k7XCI6XCLQk1wiLFwiJkdkb3Q7XCI6XCLEoFwiLFwiJkdmcjtcIjpcIvCdlIpcIixcIiZHZztcIjpcIuKLmVwiLFwiJkdvcGY7XCI6XCLwnZS+XCIsXCImR3JlYXRlckVxdWFsO1wiOlwi4omlXCIsXCImR3JlYXRlckVxdWFsTGVzcztcIjpcIuKLm1wiLFwiJkdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiadcIixcIiZHcmVhdGVyR3JlYXRlcjtcIjpcIuKqolwiLFwiJkdyZWF0ZXJMZXNzO1wiOlwi4om3XCIsXCImR3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb5cIixcIiZHcmVhdGVyVGlsZGU7XCI6XCLiibNcIixcIiZHc2NyO1wiOlwi8J2SolwiLFwiJkd0O1wiOlwi4omrXCIsXCImSEFSRGN5O1wiOlwi0KpcIixcIiZIYWNlaztcIjpcIsuHXCIsXCImSGF0O1wiOlwiXlwiLFwiJkhjaXJjO1wiOlwixKRcIixcIiZIZnI7XCI6XCLihIxcIixcIiZIaWxiZXJ0U3BhY2U7XCI6XCLihItcIixcIiZIb3BmO1wiOlwi4oSNXCIsXCImSG9yaXpvbnRhbExpbmU7XCI6XCLilIBcIixcIiZIc2NyO1wiOlwi4oSLXCIsXCImSHN0cm9rO1wiOlwixKZcIixcIiZIdW1wRG93bkh1bXA7XCI6XCLiiY5cIixcIiZIdW1wRXF1YWw7XCI6XCLiiY9cIixcIiZJRWN5O1wiOlwi0JVcIixcIiZJSmxpZztcIjpcIsSyXCIsXCImSU9jeTtcIjpcItCBXCIsXCImSWFjdXRlXCI6XCLDjVwiLFwiJklhY3V0ZTtcIjpcIsONXCIsXCImSWNpcmNcIjpcIsOOXCIsXCImSWNpcmM7XCI6XCLDjlwiLFwiJkljeTtcIjpcItCYXCIsXCImSWRvdDtcIjpcIsSwXCIsXCImSWZyO1wiOlwi4oSRXCIsXCImSWdyYXZlXCI6XCLDjFwiLFwiJklncmF2ZTtcIjpcIsOMXCIsXCImSW07XCI6XCLihJFcIixcIiZJbWFjcjtcIjpcIsSqXCIsXCImSW1hZ2luYXJ5STtcIjpcIuKFiFwiLFwiJkltcGxpZXM7XCI6XCLih5JcIixcIiZJbnQ7XCI6XCLiiKxcIixcIiZJbnRlZ3JhbDtcIjpcIuKIq1wiLFwiJkludGVyc2VjdGlvbjtcIjpcIuKLglwiLFwiJkludmlzaWJsZUNvbW1hO1wiOlwi4oGjXCIsXCImSW52aXNpYmxlVGltZXM7XCI6XCLigaJcIixcIiZJb2dvbjtcIjpcIsSuXCIsXCImSW9wZjtcIjpcIvCdlYBcIixcIiZJb3RhO1wiOlwizplcIixcIiZJc2NyO1wiOlwi4oSQXCIsXCImSXRpbGRlO1wiOlwixKhcIixcIiZJdWtjeTtcIjpcItCGXCIsXCImSXVtbFwiOlwiw49cIixcIiZJdW1sO1wiOlwiw49cIixcIiZKY2lyYztcIjpcIsS0XCIsXCImSmN5O1wiOlwi0JlcIixcIiZKZnI7XCI6XCLwnZSNXCIsXCImSm9wZjtcIjpcIvCdlYFcIixcIiZKc2NyO1wiOlwi8J2SpVwiLFwiJkpzZXJjeTtcIjpcItCIXCIsXCImSnVrY3k7XCI6XCLQhFwiLFwiJktIY3k7XCI6XCLQpVwiLFwiJktKY3k7XCI6XCLQjFwiLFwiJkthcHBhO1wiOlwizppcIixcIiZLY2VkaWw7XCI6XCLEtlwiLFwiJktjeTtcIjpcItCaXCIsXCImS2ZyO1wiOlwi8J2UjlwiLFwiJktvcGY7XCI6XCLwnZWCXCIsXCImS3NjcjtcIjpcIvCdkqZcIixcIiZMSmN5O1wiOlwi0IlcIixcIiZMVFwiOlwiPFwiLFwiJkxUO1wiOlwiPFwiLFwiJkxhY3V0ZTtcIjpcIsS5XCIsXCImTGFtYmRhO1wiOlwizptcIixcIiZMYW5nO1wiOlwi4p+qXCIsXCImTGFwbGFjZXRyZjtcIjpcIuKEklwiLFwiJkxhcnI7XCI6XCLihp5cIixcIiZMY2Fyb247XCI6XCLEvVwiLFwiJkxjZWRpbDtcIjpcIsS7XCIsXCImTGN5O1wiOlwi0JtcIixcIiZMZWZ0QW5nbGVCcmFja2V0O1wiOlwi4p+oXCIsXCImTGVmdEFycm93O1wiOlwi4oaQXCIsXCImTGVmdEFycm93QmFyO1wiOlwi4oekXCIsXCImTGVmdEFycm93UmlnaHRBcnJvdztcIjpcIuKHhlwiLFwiJkxlZnRDZWlsaW5nO1wiOlwi4oyIXCIsXCImTGVmdERvdWJsZUJyYWNrZXQ7XCI6XCLin6ZcIixcIiZMZWZ0RG93blRlZVZlY3RvcjtcIjpcIuKloVwiLFwiJkxlZnREb3duVmVjdG9yO1wiOlwi4oeDXCIsXCImTGVmdERvd25WZWN0b3JCYXI7XCI6XCLipZlcIixcIiZMZWZ0Rmxvb3I7XCI6XCLijIpcIixcIiZMZWZ0UmlnaHRBcnJvdztcIjpcIuKGlFwiLFwiJkxlZnRSaWdodFZlY3RvcjtcIjpcIuKljlwiLFwiJkxlZnRUZWU7XCI6XCLiiqNcIixcIiZMZWZ0VGVlQXJyb3c7XCI6XCLihqRcIixcIiZMZWZ0VGVlVmVjdG9yO1wiOlwi4qWaXCIsXCImTGVmdFRyaWFuZ2xlO1wiOlwi4oqyXCIsXCImTGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePXCIsXCImTGVmdFRyaWFuZ2xlRXF1YWw7XCI6XCLiirRcIixcIiZMZWZ0VXBEb3duVmVjdG9yO1wiOlwi4qWRXCIsXCImTGVmdFVwVGVlVmVjdG9yO1wiOlwi4qWgXCIsXCImTGVmdFVwVmVjdG9yO1wiOlwi4oa/XCIsXCImTGVmdFVwVmVjdG9yQmFyO1wiOlwi4qWYXCIsXCImTGVmdFZlY3RvcjtcIjpcIuKGvFwiLFwiJkxlZnRWZWN0b3JCYXI7XCI6XCLipZJcIixcIiZMZWZ0YXJyb3c7XCI6XCLih5BcIixcIiZMZWZ0cmlnaHRhcnJvdztcIjpcIuKHlFwiLFwiJkxlc3NFcXVhbEdyZWF0ZXI7XCI6XCLii5pcIixcIiZMZXNzRnVsbEVxdWFsO1wiOlwi4ommXCIsXCImTGVzc0dyZWF0ZXI7XCI6XCLiibZcIixcIiZMZXNzTGVzcztcIjpcIuKqoVwiLFwiJkxlc3NTbGFudEVxdWFsO1wiOlwi4qm9XCIsXCImTGVzc1RpbGRlO1wiOlwi4omyXCIsXCImTGZyO1wiOlwi8J2Uj1wiLFwiJkxsO1wiOlwi4ouYXCIsXCImTGxlZnRhcnJvdztcIjpcIuKHmlwiLFwiJkxtaWRvdDtcIjpcIsS/XCIsXCImTG9uZ0xlZnRBcnJvdztcIjpcIuKftVwiLFwiJkxvbmdMZWZ0UmlnaHRBcnJvdztcIjpcIuKft1wiLFwiJkxvbmdSaWdodEFycm93O1wiOlwi4p+2XCIsXCImTG9uZ2xlZnRhcnJvdztcIjpcIuKfuFwiLFwiJkxvbmdsZWZ0cmlnaHRhcnJvdztcIjpcIuKfulwiLFwiJkxvbmdyaWdodGFycm93O1wiOlwi4p+5XCIsXCImTG9wZjtcIjpcIvCdlYNcIixcIiZMb3dlckxlZnRBcnJvdztcIjpcIuKGmVwiLFwiJkxvd2VyUmlnaHRBcnJvdztcIjpcIuKGmFwiLFwiJkxzY3I7XCI6XCLihJJcIixcIiZMc2g7XCI6XCLihrBcIixcIiZMc3Ryb2s7XCI6XCLFgVwiLFwiJkx0O1wiOlwi4omqXCIsXCImTWFwO1wiOlwi4qSFXCIsXCImTWN5O1wiOlwi0JxcIixcIiZNZWRpdW1TcGFjZTtcIjpcIuKBn1wiLFwiJk1lbGxpbnRyZjtcIjpcIuKEs1wiLFwiJk1mcjtcIjpcIvCdlJBcIixcIiZNaW51c1BsdXM7XCI6XCLiiJNcIixcIiZNb3BmO1wiOlwi8J2VhFwiLFwiJk1zY3I7XCI6XCLihLNcIixcIiZNdTtcIjpcIs6cXCIsXCImTkpjeTtcIjpcItCKXCIsXCImTmFjdXRlO1wiOlwixYNcIixcIiZOY2Fyb247XCI6XCLFh1wiLFwiJk5jZWRpbDtcIjpcIsWFXCIsXCImTmN5O1wiOlwi0J1cIixcIiZOZWdhdGl2ZU1lZGl1bVNwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGlja1NwYWNlO1wiOlwi4oCLXCIsXCImTmVnYXRpdmVUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZWdhdGl2ZVZlcnlUaGluU3BhY2U7XCI6XCLigItcIixcIiZOZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKJq1wiLFwiJk5lc3RlZExlc3NMZXNzO1wiOlwi4omqXCIsXCImTmV3TGluZTtcIjpcIlxcblwiLFwiJk5mcjtcIjpcIvCdlJFcIixcIiZOb0JyZWFrO1wiOlwi4oGgXCIsXCImTm9uQnJlYWtpbmdTcGFjZTtcIjpcIsKgXCIsXCImTm9wZjtcIjpcIuKElVwiLFwiJk5vdDtcIjpcIuKrrFwiLFwiJk5vdENvbmdydWVudDtcIjpcIuKJolwiLFwiJk5vdEN1cENhcDtcIjpcIuKJrVwiLFwiJk5vdERvdWJsZVZlcnRpY2FsQmFyO1wiOlwi4oimXCIsXCImTm90RWxlbWVudDtcIjpcIuKIiVwiLFwiJk5vdEVxdWFsO1wiOlwi4omgXCIsXCImTm90RXF1YWxUaWxkZTtcIjpcIuKJgsy4XCIsXCImTm90RXhpc3RzO1wiOlwi4oiEXCIsXCImTm90R3JlYXRlcjtcIjpcIuKJr1wiLFwiJk5vdEdyZWF0ZXJFcXVhbDtcIjpcIuKJsVwiLFwiJk5vdEdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiafMuFwiLFwiJk5vdEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrzLhcIixcIiZOb3RHcmVhdGVyTGVzcztcIjpcIuKJuVwiLFwiJk5vdEdyZWF0ZXJTbGFudEVxdWFsO1wiOlwi4qm+zLhcIixcIiZOb3RHcmVhdGVyVGlsZGU7XCI6XCLiibVcIixcIiZOb3RIdW1wRG93bkh1bXA7XCI6XCLiiY7MuFwiLFwiJk5vdEh1bXBFcXVhbDtcIjpcIuKJj8y4XCIsXCImTm90TGVmdFRyaWFuZ2xlO1wiOlwi4ouqXCIsXCImTm90TGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePzLhcIixcIiZOb3RMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrFwiLFwiJk5vdExlc3M7XCI6XCLiia5cIixcIiZOb3RMZXNzRXF1YWw7XCI6XCLiibBcIixcIiZOb3RMZXNzR3JlYXRlcjtcIjpcIuKJuFwiLFwiJk5vdExlc3NMZXNzO1wiOlwi4omqzLhcIixcIiZOb3RMZXNzU2xhbnRFcXVhbDtcIjpcIuKpvcy4XCIsXCImTm90TGVzc1RpbGRlO1wiOlwi4om0XCIsXCImTm90TmVzdGVkR3JlYXRlckdyZWF0ZXI7XCI6XCLiqqLMuFwiLFwiJk5vdE5lc3RlZExlc3NMZXNzO1wiOlwi4qqhzLhcIixcIiZOb3RQcmVjZWRlcztcIjpcIuKKgFwiLFwiJk5vdFByZWNlZGVzRXF1YWw7XCI6XCLiqq/MuFwiLFwiJk5vdFByZWNlZGVzU2xhbnRFcXVhbDtcIjpcIuKLoFwiLFwiJk5vdFJldmVyc2VFbGVtZW50O1wiOlwi4oiMXCIsXCImTm90UmlnaHRUcmlhbmdsZTtcIjpcIuKLq1wiLFwiJk5vdFJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5DMuFwiLFwiJk5vdFJpZ2h0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrVwiLFwiJk5vdFNxdWFyZVN1YnNldDtcIjpcIuKKj8y4XCIsXCImTm90U3F1YXJlU3Vic2V0RXF1YWw7XCI6XCLii6JcIixcIiZOb3RTcXVhcmVTdXBlcnNldDtcIjpcIuKKkMy4XCIsXCImTm90U3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKLo1wiLFwiJk5vdFN1YnNldDtcIjpcIuKKguKDklwiLFwiJk5vdFN1YnNldEVxdWFsO1wiOlwi4oqIXCIsXCImTm90U3VjY2VlZHM7XCI6XCLiioFcIixcIiZOb3RTdWNjZWVkc0VxdWFsO1wiOlwi4qqwzLhcIixcIiZOb3RTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLii6FcIixcIiZOb3RTdWNjZWVkc1RpbGRlO1wiOlwi4om/zLhcIixcIiZOb3RTdXBlcnNldDtcIjpcIuKKg+KDklwiLFwiJk5vdFN1cGVyc2V0RXF1YWw7XCI6XCLiiolcIixcIiZOb3RUaWxkZTtcIjpcIuKJgVwiLFwiJk5vdFRpbGRlRXF1YWw7XCI6XCLiiYRcIixcIiZOb3RUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJh1wiLFwiJk5vdFRpbGRlVGlsZGU7XCI6XCLiiYlcIixcIiZOb3RWZXJ0aWNhbEJhcjtcIjpcIuKIpFwiLFwiJk5zY3I7XCI6XCLwnZKpXCIsXCImTnRpbGRlXCI6XCLDkVwiLFwiJk50aWxkZTtcIjpcIsORXCIsXCImTnU7XCI6XCLOnVwiLFwiJk9FbGlnO1wiOlwixZJcIixcIiZPYWN1dGVcIjpcIsOTXCIsXCImT2FjdXRlO1wiOlwiw5NcIixcIiZPY2lyY1wiOlwiw5RcIixcIiZPY2lyYztcIjpcIsOUXCIsXCImT2N5O1wiOlwi0J5cIixcIiZPZGJsYWM7XCI6XCLFkFwiLFwiJk9mcjtcIjpcIvCdlJJcIixcIiZPZ3JhdmVcIjpcIsOSXCIsXCImT2dyYXZlO1wiOlwiw5JcIixcIiZPbWFjcjtcIjpcIsWMXCIsXCImT21lZ2E7XCI6XCLOqVwiLFwiJk9taWNyb247XCI6XCLOn1wiLFwiJk9vcGY7XCI6XCLwnZWGXCIsXCImT3BlbkN1cmx5RG91YmxlUXVvdGU7XCI6XCLigJxcIixcIiZPcGVuQ3VybHlRdW90ZTtcIjpcIuKAmFwiLFwiJk9yO1wiOlwi4qmUXCIsXCImT3NjcjtcIjpcIvCdkqpcIixcIiZPc2xhc2hcIjpcIsOYXCIsXCImT3NsYXNoO1wiOlwiw5hcIixcIiZPdGlsZGVcIjpcIsOVXCIsXCImT3RpbGRlO1wiOlwiw5VcIixcIiZPdGltZXM7XCI6XCLiqLdcIixcIiZPdW1sXCI6XCLDllwiLFwiJk91bWw7XCI6XCLDllwiLFwiJk92ZXJCYXI7XCI6XCLigL5cIixcIiZPdmVyQnJhY2U7XCI6XCLij55cIixcIiZPdmVyQnJhY2tldDtcIjpcIuKOtFwiLFwiJk92ZXJQYXJlbnRoZXNpcztcIjpcIuKPnFwiLFwiJlBhcnRpYWxEO1wiOlwi4oiCXCIsXCImUGN5O1wiOlwi0J9cIixcIiZQZnI7XCI6XCLwnZSTXCIsXCImUGhpO1wiOlwizqZcIixcIiZQaTtcIjpcIs6gXCIsXCImUGx1c01pbnVzO1wiOlwiwrFcIixcIiZQb2luY2FyZXBsYW5lO1wiOlwi4oSMXCIsXCImUG9wZjtcIjpcIuKEmVwiLFwiJlByO1wiOlwi4qq7XCIsXCImUHJlY2VkZXM7XCI6XCLiibpcIixcIiZQcmVjZWRlc0VxdWFsO1wiOlwi4qqvXCIsXCImUHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4om8XCIsXCImUHJlY2VkZXNUaWxkZTtcIjpcIuKJvlwiLFwiJlByaW1lO1wiOlwi4oCzXCIsXCImUHJvZHVjdDtcIjpcIuKIj1wiLFwiJlByb3BvcnRpb247XCI6XCLiiLdcIixcIiZQcm9wb3J0aW9uYWw7XCI6XCLiiJ1cIixcIiZQc2NyO1wiOlwi8J2Sq1wiLFwiJlBzaTtcIjpcIs6oXCIsXCImUVVPVFwiOidcIicsXCImUVVPVDtcIjonXCInLFwiJlFmcjtcIjpcIvCdlJRcIixcIiZRb3BmO1wiOlwi4oSaXCIsXCImUXNjcjtcIjpcIvCdkqxcIixcIiZSQmFycjtcIjpcIuKkkFwiLFwiJlJFR1wiOlwiwq5cIixcIiZSRUc7XCI6XCLCrlwiLFwiJlJhY3V0ZTtcIjpcIsWUXCIsXCImUmFuZztcIjpcIuKfq1wiLFwiJlJhcnI7XCI6XCLihqBcIixcIiZSYXJydGw7XCI6XCLipJZcIixcIiZSY2Fyb247XCI6XCLFmFwiLFwiJlJjZWRpbDtcIjpcIsWWXCIsXCImUmN5O1wiOlwi0KBcIixcIiZSZTtcIjpcIuKEnFwiLFwiJlJldmVyc2VFbGVtZW50O1wiOlwi4oiLXCIsXCImUmV2ZXJzZUVxdWlsaWJyaXVtO1wiOlwi4oeLXCIsXCImUmV2ZXJzZVVwRXF1aWxpYnJpdW07XCI6XCLipa9cIixcIiZSZnI7XCI6XCLihJxcIixcIiZSaG87XCI6XCLOoVwiLFwiJlJpZ2h0QW5nbGVCcmFja2V0O1wiOlwi4p+pXCIsXCImUmlnaHRBcnJvdztcIjpcIuKGklwiLFwiJlJpZ2h0QXJyb3dCYXI7XCI6XCLih6VcIixcIiZSaWdodEFycm93TGVmdEFycm93O1wiOlwi4oeEXCIsXCImUmlnaHRDZWlsaW5nO1wiOlwi4oyJXCIsXCImUmlnaHREb3VibGVCcmFja2V0O1wiOlwi4p+nXCIsXCImUmlnaHREb3duVGVlVmVjdG9yO1wiOlwi4qWdXCIsXCImUmlnaHREb3duVmVjdG9yO1wiOlwi4oeCXCIsXCImUmlnaHREb3duVmVjdG9yQmFyO1wiOlwi4qWVXCIsXCImUmlnaHRGbG9vcjtcIjpcIuKMi1wiLFwiJlJpZ2h0VGVlO1wiOlwi4oqiXCIsXCImUmlnaHRUZWVBcnJvdztcIjpcIuKGplwiLFwiJlJpZ2h0VGVlVmVjdG9yO1wiOlwi4qWbXCIsXCImUmlnaHRUcmlhbmdsZTtcIjpcIuKKs1wiLFwiJlJpZ2h0VHJpYW5nbGVCYXI7XCI6XCLip5BcIixcIiZSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLiirVcIixcIiZSaWdodFVwRG93blZlY3RvcjtcIjpcIuKlj1wiLFwiJlJpZ2h0VXBUZWVWZWN0b3I7XCI6XCLipZxcIixcIiZSaWdodFVwVmVjdG9yO1wiOlwi4oa+XCIsXCImUmlnaHRVcFZlY3RvckJhcjtcIjpcIuKllFwiLFwiJlJpZ2h0VmVjdG9yO1wiOlwi4oeAXCIsXCImUmlnaHRWZWN0b3JCYXI7XCI6XCLipZNcIixcIiZSaWdodGFycm93O1wiOlwi4oeSXCIsXCImUm9wZjtcIjpcIuKEnVwiLFwiJlJvdW5kSW1wbGllcztcIjpcIuKlsFwiLFwiJlJyaWdodGFycm93O1wiOlwi4oebXCIsXCImUnNjcjtcIjpcIuKEm1wiLFwiJlJzaDtcIjpcIuKGsVwiLFwiJlJ1bGVEZWxheWVkO1wiOlwi4qe0XCIsXCImU0hDSGN5O1wiOlwi0KlcIixcIiZTSGN5O1wiOlwi0KhcIixcIiZTT0ZUY3k7XCI6XCLQrFwiLFwiJlNhY3V0ZTtcIjpcIsWaXCIsXCImU2M7XCI6XCLiqrxcIixcIiZTY2Fyb247XCI6XCLFoFwiLFwiJlNjZWRpbDtcIjpcIsWeXCIsXCImU2NpcmM7XCI6XCLFnFwiLFwiJlNjeTtcIjpcItChXCIsXCImU2ZyO1wiOlwi8J2UllwiLFwiJlNob3J0RG93bkFycm93O1wiOlwi4oaTXCIsXCImU2hvcnRMZWZ0QXJyb3c7XCI6XCLihpBcIixcIiZTaG9ydFJpZ2h0QXJyb3c7XCI6XCLihpJcIixcIiZTaG9ydFVwQXJyb3c7XCI6XCLihpFcIixcIiZTaWdtYTtcIjpcIs6jXCIsXCImU21hbGxDaXJjbGU7XCI6XCLiiJhcIixcIiZTb3BmO1wiOlwi8J2VilwiLFwiJlNxcnQ7XCI6XCLiiJpcIixcIiZTcXVhcmU7XCI6XCLilqFcIixcIiZTcXVhcmVJbnRlcnNlY3Rpb247XCI6XCLiipNcIixcIiZTcXVhcmVTdWJzZXQ7XCI6XCLiio9cIixcIiZTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKKkVwiLFwiJlNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQXCIsXCImU3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKKklwiLFwiJlNxdWFyZVVuaW9uO1wiOlwi4oqUXCIsXCImU3NjcjtcIjpcIvCdkq5cIixcIiZTdGFyO1wiOlwi4ouGXCIsXCImU3ViO1wiOlwi4ouQXCIsXCImU3Vic2V0O1wiOlwi4ouQXCIsXCImU3Vic2V0RXF1YWw7XCI6XCLiioZcIixcIiZTdWNjZWVkcztcIjpcIuKJu1wiLFwiJlN1Y2NlZWRzRXF1YWw7XCI6XCLiqrBcIixcIiZTdWNjZWVkc1NsYW50RXF1YWw7XCI6XCLiib1cIixcIiZTdWNjZWVkc1RpbGRlO1wiOlwi4om/XCIsXCImU3VjaFRoYXQ7XCI6XCLiiItcIixcIiZTdW07XCI6XCLiiJFcIixcIiZTdXA7XCI6XCLii5FcIixcIiZTdXBlcnNldDtcIjpcIuKKg1wiLFwiJlN1cGVyc2V0RXF1YWw7XCI6XCLiiodcIixcIiZTdXBzZXQ7XCI6XCLii5FcIixcIiZUSE9STlwiOlwiw55cIixcIiZUSE9STjtcIjpcIsOeXCIsXCImVFJBREU7XCI6XCLihKJcIixcIiZUU0hjeTtcIjpcItCLXCIsXCImVFNjeTtcIjpcItCmXCIsXCImVGFiO1wiOlwiXFx0XCIsXCImVGF1O1wiOlwizqRcIixcIiZUY2Fyb247XCI6XCLFpFwiLFwiJlRjZWRpbDtcIjpcIsWiXCIsXCImVGN5O1wiOlwi0KJcIixcIiZUZnI7XCI6XCLwnZSXXCIsXCImVGhlcmVmb3JlO1wiOlwi4oi0XCIsXCImVGhldGE7XCI6XCLOmFwiLFwiJlRoaWNrU3BhY2U7XCI6XCLigZ/igIpcIixcIiZUaGluU3BhY2U7XCI6XCLigIlcIixcIiZUaWxkZTtcIjpcIuKIvFwiLFwiJlRpbGRlRXF1YWw7XCI6XCLiiYNcIixcIiZUaWxkZUZ1bGxFcXVhbDtcIjpcIuKJhVwiLFwiJlRpbGRlVGlsZGU7XCI6XCLiiYhcIixcIiZUb3BmO1wiOlwi8J2Vi1wiLFwiJlRyaXBsZURvdDtcIjpcIuKDm1wiLFwiJlRzY3I7XCI6XCLwnZKvXCIsXCImVHN0cm9rO1wiOlwixaZcIixcIiZVYWN1dGVcIjpcIsOaXCIsXCImVWFjdXRlO1wiOlwiw5pcIixcIiZVYXJyO1wiOlwi4oafXCIsXCImVWFycm9jaXI7XCI6XCLipYlcIixcIiZVYnJjeTtcIjpcItCOXCIsXCImVWJyZXZlO1wiOlwixaxcIixcIiZVY2lyY1wiOlwiw5tcIixcIiZVY2lyYztcIjpcIsObXCIsXCImVWN5O1wiOlwi0KNcIixcIiZVZGJsYWM7XCI6XCLFsFwiLFwiJlVmcjtcIjpcIvCdlJhcIixcIiZVZ3JhdmVcIjpcIsOZXCIsXCImVWdyYXZlO1wiOlwiw5lcIixcIiZVbWFjcjtcIjpcIsWqXCIsXCImVW5kZXJCYXI7XCI6XCJfXCIsXCImVW5kZXJCcmFjZTtcIjpcIuKPn1wiLFwiJlVuZGVyQnJhY2tldDtcIjpcIuKOtVwiLFwiJlVuZGVyUGFyZW50aGVzaXM7XCI6XCLij51cIixcIiZVbmlvbjtcIjpcIuKLg1wiLFwiJlVuaW9uUGx1cztcIjpcIuKKjlwiLFwiJlVvZ29uO1wiOlwixbJcIixcIiZVb3BmO1wiOlwi8J2VjFwiLFwiJlVwQXJyb3c7XCI6XCLihpFcIixcIiZVcEFycm93QmFyO1wiOlwi4qSSXCIsXCImVXBBcnJvd0Rvd25BcnJvdztcIjpcIuKHhVwiLFwiJlVwRG93bkFycm93O1wiOlwi4oaVXCIsXCImVXBFcXVpbGlicml1bTtcIjpcIuKlrlwiLFwiJlVwVGVlO1wiOlwi4oqlXCIsXCImVXBUZWVBcnJvdztcIjpcIuKGpVwiLFwiJlVwYXJyb3c7XCI6XCLih5FcIixcIiZVcGRvd25hcnJvdztcIjpcIuKHlVwiLFwiJlVwcGVyTGVmdEFycm93O1wiOlwi4oaWXCIsXCImVXBwZXJSaWdodEFycm93O1wiOlwi4oaXXCIsXCImVXBzaTtcIjpcIs+SXCIsXCImVXBzaWxvbjtcIjpcIs6lXCIsXCImVXJpbmc7XCI6XCLFrlwiLFwiJlVzY3I7XCI6XCLwnZKwXCIsXCImVXRpbGRlO1wiOlwixahcIixcIiZVdW1sXCI6XCLDnFwiLFwiJlV1bWw7XCI6XCLDnFwiLFwiJlZEYXNoO1wiOlwi4oqrXCIsXCImVmJhcjtcIjpcIuKrq1wiLFwiJlZjeTtcIjpcItCSXCIsXCImVmRhc2g7XCI6XCLiiqlcIixcIiZWZGFzaGw7XCI6XCLiq6ZcIixcIiZWZWU7XCI6XCLii4FcIixcIiZWZXJiYXI7XCI6XCLigJZcIixcIiZWZXJ0O1wiOlwi4oCWXCIsXCImVmVydGljYWxCYXI7XCI6XCLiiKNcIixcIiZWZXJ0aWNhbExpbmU7XCI6XCJ8XCIsXCImVmVydGljYWxTZXBhcmF0b3I7XCI6XCLinZhcIixcIiZWZXJ0aWNhbFRpbGRlO1wiOlwi4omAXCIsXCImVmVyeVRoaW5TcGFjZTtcIjpcIuKAilwiLFwiJlZmcjtcIjpcIvCdlJlcIixcIiZWb3BmO1wiOlwi8J2VjVwiLFwiJlZzY3I7XCI6XCLwnZKxXCIsXCImVnZkYXNoO1wiOlwi4oqqXCIsXCImV2NpcmM7XCI6XCLFtFwiLFwiJldlZGdlO1wiOlwi4ouAXCIsXCImV2ZyO1wiOlwi8J2UmlwiLFwiJldvcGY7XCI6XCLwnZWOXCIsXCImV3NjcjtcIjpcIvCdkrJcIixcIiZYZnI7XCI6XCLwnZSbXCIsXCImWGk7XCI6XCLOnlwiLFwiJlhvcGY7XCI6XCLwnZWPXCIsXCImWHNjcjtcIjpcIvCdkrNcIixcIiZZQWN5O1wiOlwi0K9cIixcIiZZSWN5O1wiOlwi0IdcIixcIiZZVWN5O1wiOlwi0K5cIixcIiZZYWN1dGVcIjpcIsOdXCIsXCImWWFjdXRlO1wiOlwiw51cIixcIiZZY2lyYztcIjpcIsW2XCIsXCImWWN5O1wiOlwi0KtcIixcIiZZZnI7XCI6XCLwnZScXCIsXCImWW9wZjtcIjpcIvCdlZBcIixcIiZZc2NyO1wiOlwi8J2StFwiLFwiJll1bWw7XCI6XCLFuFwiLFwiJlpIY3k7XCI6XCLQllwiLFwiJlphY3V0ZTtcIjpcIsW5XCIsXCImWmNhcm9uO1wiOlwixb1cIixcIiZaY3k7XCI6XCLQl1wiLFwiJlpkb3Q7XCI6XCLFu1wiLFwiJlplcm9XaWR0aFNwYWNlO1wiOlwi4oCLXCIsXCImWmV0YTtcIjpcIs6WXCIsXCImWmZyO1wiOlwi4oSoXCIsXCImWm9wZjtcIjpcIuKEpFwiLFwiJlpzY3I7XCI6XCLwnZK1XCIsXCImYWFjdXRlXCI6XCLDoVwiLFwiJmFhY3V0ZTtcIjpcIsOhXCIsXCImYWJyZXZlO1wiOlwixINcIixcIiZhYztcIjpcIuKIvlwiLFwiJmFjRTtcIjpcIuKIvsyzXCIsXCImYWNkO1wiOlwi4oi/XCIsXCImYWNpcmNcIjpcIsOiXCIsXCImYWNpcmM7XCI6XCLDolwiLFwiJmFjdXRlXCI6XCLCtFwiLFwiJmFjdXRlO1wiOlwiwrRcIixcIiZhY3k7XCI6XCLQsFwiLFwiJmFlbGlnXCI6XCLDplwiLFwiJmFlbGlnO1wiOlwiw6ZcIixcIiZhZjtcIjpcIuKBoVwiLFwiJmFmcjtcIjpcIvCdlJ5cIixcIiZhZ3JhdmVcIjpcIsOgXCIsXCImYWdyYXZlO1wiOlwiw6BcIixcIiZhbGVmc3ltO1wiOlwi4oS1XCIsXCImYWxlcGg7XCI6XCLihLVcIixcIiZhbHBoYTtcIjpcIs6xXCIsXCImYW1hY3I7XCI6XCLEgVwiLFwiJmFtYWxnO1wiOlwi4qi/XCIsXCImYW1wXCI6XCImXCIsXCImYW1wO1wiOlwiJlwiLFwiJmFuZDtcIjpcIuKIp1wiLFwiJmFuZGFuZDtcIjpcIuKplVwiLFwiJmFuZGQ7XCI6XCLiqZxcIixcIiZhbmRzbG9wZTtcIjpcIuKpmFwiLFwiJmFuZHY7XCI6XCLiqZpcIixcIiZhbmc7XCI6XCLiiKBcIixcIiZhbmdlO1wiOlwi4qakXCIsXCImYW5nbGU7XCI6XCLiiKBcIixcIiZhbmdtc2Q7XCI6XCLiiKFcIixcIiZhbmdtc2RhYTtcIjpcIuKmqFwiLFwiJmFuZ21zZGFiO1wiOlwi4qapXCIsXCImYW5nbXNkYWM7XCI6XCLipqpcIixcIiZhbmdtc2RhZDtcIjpcIuKmq1wiLFwiJmFuZ21zZGFlO1wiOlwi4qasXCIsXCImYW5nbXNkYWY7XCI6XCLipq1cIixcIiZhbmdtc2RhZztcIjpcIuKmrlwiLFwiJmFuZ21zZGFoO1wiOlwi4qavXCIsXCImYW5ncnQ7XCI6XCLiiJ9cIixcIiZhbmdydHZiO1wiOlwi4oq+XCIsXCImYW5ncnR2YmQ7XCI6XCLipp1cIixcIiZhbmdzcGg7XCI6XCLiiKJcIixcIiZhbmdzdDtcIjpcIsOFXCIsXCImYW5nemFycjtcIjpcIuKNvFwiLFwiJmFvZ29uO1wiOlwixIVcIixcIiZhb3BmO1wiOlwi8J2VklwiLFwiJmFwO1wiOlwi4omIXCIsXCImYXBFO1wiOlwi4qmwXCIsXCImYXBhY2lyO1wiOlwi4qmvXCIsXCImYXBlO1wiOlwi4omKXCIsXCImYXBpZDtcIjpcIuKJi1wiLFwiJmFwb3M7XCI6XCInXCIsXCImYXBwcm94O1wiOlwi4omIXCIsXCImYXBwcm94ZXE7XCI6XCLiiYpcIixcIiZhcmluZ1wiOlwiw6VcIixcIiZhcmluZztcIjpcIsOlXCIsXCImYXNjcjtcIjpcIvCdkrZcIixcIiZhc3Q7XCI6XCIqXCIsXCImYXN5bXA7XCI6XCLiiYhcIixcIiZhc3ltcGVxO1wiOlwi4omNXCIsXCImYXRpbGRlXCI6XCLDo1wiLFwiJmF0aWxkZTtcIjpcIsOjXCIsXCImYXVtbFwiOlwiw6RcIixcIiZhdW1sO1wiOlwiw6RcIixcIiZhd2NvbmludDtcIjpcIuKIs1wiLFwiJmF3aW50O1wiOlwi4qiRXCIsXCImYk5vdDtcIjpcIuKrrVwiLFwiJmJhY2tjb25nO1wiOlwi4omMXCIsXCImYmFja2Vwc2lsb247XCI6XCLPtlwiLFwiJmJhY2twcmltZTtcIjpcIuKAtVwiLFwiJmJhY2tzaW07XCI6XCLiiL1cIixcIiZiYWNrc2ltZXE7XCI6XCLii41cIixcIiZiYXJ2ZWU7XCI6XCLiir1cIixcIiZiYXJ3ZWQ7XCI6XCLijIVcIixcIiZiYXJ3ZWRnZTtcIjpcIuKMhVwiLFwiJmJicms7XCI6XCLijrVcIixcIiZiYnJrdGJyaztcIjpcIuKOtlwiLFwiJmJjb25nO1wiOlwi4omMXCIsXCImYmN5O1wiOlwi0LFcIixcIiZiZHF1bztcIjpcIuKAnlwiLFwiJmJlY2F1cztcIjpcIuKItVwiLFwiJmJlY2F1c2U7XCI6XCLiiLVcIixcIiZiZW1wdHl2O1wiOlwi4qawXCIsXCImYmVwc2k7XCI6XCLPtlwiLFwiJmJlcm5vdTtcIjpcIuKErFwiLFwiJmJldGE7XCI6XCLOslwiLFwiJmJldGg7XCI6XCLihLZcIixcIiZiZXR3ZWVuO1wiOlwi4omsXCIsXCImYmZyO1wiOlwi8J2Un1wiLFwiJmJpZ2NhcDtcIjpcIuKLglwiLFwiJmJpZ2NpcmM7XCI6XCLil69cIixcIiZiaWdjdXA7XCI6XCLii4NcIixcIiZiaWdvZG90O1wiOlwi4qiAXCIsXCImYmlnb3BsdXM7XCI6XCLiqIFcIixcIiZiaWdvdGltZXM7XCI6XCLiqIJcIixcIiZiaWdzcWN1cDtcIjpcIuKohlwiLFwiJmJpZ3N0YXI7XCI6XCLimIVcIixcIiZiaWd0cmlhbmdsZWRvd247XCI6XCLilr1cIixcIiZiaWd0cmlhbmdsZXVwO1wiOlwi4pazXCIsXCImYmlndXBsdXM7XCI6XCLiqIRcIixcIiZiaWd2ZWU7XCI6XCLii4FcIixcIiZiaWd3ZWRnZTtcIjpcIuKLgFwiLFwiJmJrYXJvdztcIjpcIuKkjVwiLFwiJmJsYWNrbG96ZW5nZTtcIjpcIuKnq1wiLFwiJmJsYWNrc3F1YXJlO1wiOlwi4paqXCIsXCImYmxhY2t0cmlhbmdsZTtcIjpcIuKWtFwiLFwiJmJsYWNrdHJpYW5nbGVkb3duO1wiOlwi4pa+XCIsXCImYmxhY2t0cmlhbmdsZWxlZnQ7XCI6XCLil4JcIixcIiZibGFja3RyaWFuZ2xlcmlnaHQ7XCI6XCLilrhcIixcIiZibGFuaztcIjpcIuKQo1wiLFwiJmJsazEyO1wiOlwi4paSXCIsXCImYmxrMTQ7XCI6XCLilpFcIixcIiZibGszNDtcIjpcIuKWk1wiLFwiJmJsb2NrO1wiOlwi4paIXCIsXCImYm5lO1wiOlwiPeKDpVwiLFwiJmJuZXF1aXY7XCI6XCLiiaHig6VcIixcIiZibm90O1wiOlwi4oyQXCIsXCImYm9wZjtcIjpcIvCdlZNcIixcIiZib3Q7XCI6XCLiiqVcIixcIiZib3R0b207XCI6XCLiiqVcIixcIiZib3d0aWU7XCI6XCLii4hcIixcIiZib3hETDtcIjpcIuKVl1wiLFwiJmJveERSO1wiOlwi4pWUXCIsXCImYm94RGw7XCI6XCLilZZcIixcIiZib3hEcjtcIjpcIuKVk1wiLFwiJmJveEg7XCI6XCLilZBcIixcIiZib3hIRDtcIjpcIuKVplwiLFwiJmJveEhVO1wiOlwi4pWpXCIsXCImYm94SGQ7XCI6XCLilaRcIixcIiZib3hIdTtcIjpcIuKVp1wiLFwiJmJveFVMO1wiOlwi4pWdXCIsXCImYm94VVI7XCI6XCLilZpcIixcIiZib3hVbDtcIjpcIuKVnFwiLFwiJmJveFVyO1wiOlwi4pWZXCIsXCImYm94VjtcIjpcIuKVkVwiLFwiJmJveFZIO1wiOlwi4pWsXCIsXCImYm94Vkw7XCI6XCLilaNcIixcIiZib3hWUjtcIjpcIuKVoFwiLFwiJmJveFZoO1wiOlwi4pWrXCIsXCImYm94Vmw7XCI6XCLilaJcIixcIiZib3hWcjtcIjpcIuKVn1wiLFwiJmJveGJveDtcIjpcIuKniVwiLFwiJmJveGRMO1wiOlwi4pWVXCIsXCImYm94ZFI7XCI6XCLilZJcIixcIiZib3hkbDtcIjpcIuKUkFwiLFwiJmJveGRyO1wiOlwi4pSMXCIsXCImYm94aDtcIjpcIuKUgFwiLFwiJmJveGhEO1wiOlwi4pWlXCIsXCImYm94aFU7XCI6XCLilahcIixcIiZib3hoZDtcIjpcIuKUrFwiLFwiJmJveGh1O1wiOlwi4pS0XCIsXCImYm94bWludXM7XCI6XCLiip9cIixcIiZib3hwbHVzO1wiOlwi4oqeXCIsXCImYm94dGltZXM7XCI6XCLiiqBcIixcIiZib3h1TDtcIjpcIuKVm1wiLFwiJmJveHVSO1wiOlwi4pWYXCIsXCImYm94dWw7XCI6XCLilJhcIixcIiZib3h1cjtcIjpcIuKUlFwiLFwiJmJveHY7XCI6XCLilIJcIixcIiZib3h2SDtcIjpcIuKVqlwiLFwiJmJveHZMO1wiOlwi4pWhXCIsXCImYm94dlI7XCI6XCLilZ5cIixcIiZib3h2aDtcIjpcIuKUvFwiLFwiJmJveHZsO1wiOlwi4pSkXCIsXCImYm94dnI7XCI6XCLilJxcIixcIiZicHJpbWU7XCI6XCLigLVcIixcIiZicmV2ZTtcIjpcIsuYXCIsXCImYnJ2YmFyXCI6XCLCplwiLFwiJmJydmJhcjtcIjpcIsKmXCIsXCImYnNjcjtcIjpcIvCdkrdcIixcIiZic2VtaTtcIjpcIuKBj1wiLFwiJmJzaW07XCI6XCLiiL1cIixcIiZic2ltZTtcIjpcIuKLjVwiLFwiJmJzb2w7XCI6XCJcXFxcXCIsXCImYnNvbGI7XCI6XCLip4VcIixcIiZic29saHN1YjtcIjpcIuKfiFwiLFwiJmJ1bGw7XCI6XCLigKJcIixcIiZidWxsZXQ7XCI6XCLigKJcIixcIiZidW1wO1wiOlwi4omOXCIsXCImYnVtcEU7XCI6XCLiqq5cIixcIiZidW1wZTtcIjpcIuKJj1wiLFwiJmJ1bXBlcTtcIjpcIuKJj1wiLFwiJmNhY3V0ZTtcIjpcIsSHXCIsXCImY2FwO1wiOlwi4oipXCIsXCImY2FwYW5kO1wiOlwi4qmEXCIsXCImY2FwYnJjdXA7XCI6XCLiqYlcIixcIiZjYXBjYXA7XCI6XCLiqYtcIixcIiZjYXBjdXA7XCI6XCLiqYdcIixcIiZjYXBkb3Q7XCI6XCLiqYBcIixcIiZjYXBzO1wiOlwi4oip77iAXCIsXCImY2FyZXQ7XCI6XCLigYFcIixcIiZjYXJvbjtcIjpcIsuHXCIsXCImY2NhcHM7XCI6XCLiqY1cIixcIiZjY2Fyb247XCI6XCLEjVwiLFwiJmNjZWRpbFwiOlwiw6dcIixcIiZjY2VkaWw7XCI6XCLDp1wiLFwiJmNjaXJjO1wiOlwixIlcIixcIiZjY3VwcztcIjpcIuKpjFwiLFwiJmNjdXBzc207XCI6XCLiqZBcIixcIiZjZG90O1wiOlwixItcIixcIiZjZWRpbFwiOlwiwrhcIixcIiZjZWRpbDtcIjpcIsK4XCIsXCImY2VtcHR5djtcIjpcIuKmslwiLFwiJmNlbnRcIjpcIsKiXCIsXCImY2VudDtcIjpcIsKiXCIsXCImY2VudGVyZG90O1wiOlwiwrdcIixcIiZjZnI7XCI6XCLwnZSgXCIsXCImY2hjeTtcIjpcItGHXCIsXCImY2hlY2s7XCI6XCLinJNcIixcIiZjaGVja21hcms7XCI6XCLinJNcIixcIiZjaGk7XCI6XCLPh1wiLFwiJmNpcjtcIjpcIuKXi1wiLFwiJmNpckU7XCI6XCLip4NcIixcIiZjaXJjO1wiOlwiy4ZcIixcIiZjaXJjZXE7XCI6XCLiiZdcIixcIiZjaXJjbGVhcnJvd2xlZnQ7XCI6XCLihrpcIixcIiZjaXJjbGVhcnJvd3JpZ2h0O1wiOlwi4oa7XCIsXCImY2lyY2xlZFI7XCI6XCLCrlwiLFwiJmNpcmNsZWRTO1wiOlwi4pOIXCIsXCImY2lyY2xlZGFzdDtcIjpcIuKKm1wiLFwiJmNpcmNsZWRjaXJjO1wiOlwi4oqaXCIsXCImY2lyY2xlZGRhc2g7XCI6XCLiip1cIixcIiZjaXJlO1wiOlwi4omXXCIsXCImY2lyZm5pbnQ7XCI6XCLiqJBcIixcIiZjaXJtaWQ7XCI6XCLiq69cIixcIiZjaXJzY2lyO1wiOlwi4qeCXCIsXCImY2x1YnM7XCI6XCLimaNcIixcIiZjbHVic3VpdDtcIjpcIuKZo1wiLFwiJmNvbG9uO1wiOlwiOlwiLFwiJmNvbG9uZTtcIjpcIuKJlFwiLFwiJmNvbG9uZXE7XCI6XCLiiZRcIixcIiZjb21tYTtcIjpcIixcIixcIiZjb21tYXQ7XCI6XCJAXCIsXCImY29tcDtcIjpcIuKIgVwiLFwiJmNvbXBmbjtcIjpcIuKImFwiLFwiJmNvbXBsZW1lbnQ7XCI6XCLiiIFcIixcIiZjb21wbGV4ZXM7XCI6XCLihIJcIixcIiZjb25nO1wiOlwi4omFXCIsXCImY29uZ2RvdDtcIjpcIuKprVwiLFwiJmNvbmludDtcIjpcIuKIrlwiLFwiJmNvcGY7XCI6XCLwnZWUXCIsXCImY29wcm9kO1wiOlwi4oiQXCIsXCImY29weVwiOlwiwqlcIixcIiZjb3B5O1wiOlwiwqlcIixcIiZjb3B5c3I7XCI6XCLihJdcIixcIiZjcmFycjtcIjpcIuKGtVwiLFwiJmNyb3NzO1wiOlwi4pyXXCIsXCImY3NjcjtcIjpcIvCdkrhcIixcIiZjc3ViO1wiOlwi4quPXCIsXCImY3N1YmU7XCI6XCLiq5FcIixcIiZjc3VwO1wiOlwi4quQXCIsXCImY3N1cGU7XCI6XCLiq5JcIixcIiZjdGRvdDtcIjpcIuKLr1wiLFwiJmN1ZGFycmw7XCI6XCLipLhcIixcIiZjdWRhcnJyO1wiOlwi4qS1XCIsXCImY3VlcHI7XCI6XCLii55cIixcIiZjdWVzYztcIjpcIuKLn1wiLFwiJmN1bGFycjtcIjpcIuKGtlwiLFwiJmN1bGFycnA7XCI6XCLipL1cIixcIiZjdXA7XCI6XCLiiKpcIixcIiZjdXBicmNhcDtcIjpcIuKpiFwiLFwiJmN1cGNhcDtcIjpcIuKphlwiLFwiJmN1cGN1cDtcIjpcIuKpilwiLFwiJmN1cGRvdDtcIjpcIuKKjVwiLFwiJmN1cG9yO1wiOlwi4qmFXCIsXCImY3VwcztcIjpcIuKIqu+4gFwiLFwiJmN1cmFycjtcIjpcIuKGt1wiLFwiJmN1cmFycm07XCI6XCLipLxcIixcIiZjdXJseWVxcHJlYztcIjpcIuKLnlwiLFwiJmN1cmx5ZXFzdWNjO1wiOlwi4oufXCIsXCImY3VybHl2ZWU7XCI6XCLii45cIixcIiZjdXJseXdlZGdlO1wiOlwi4ouPXCIsXCImY3VycmVuXCI6XCLCpFwiLFwiJmN1cnJlbjtcIjpcIsKkXCIsXCImY3VydmVhcnJvd2xlZnQ7XCI6XCLihrZcIixcIiZjdXJ2ZWFycm93cmlnaHQ7XCI6XCLihrdcIixcIiZjdXZlZTtcIjpcIuKLjlwiLFwiJmN1d2VkO1wiOlwi4ouPXCIsXCImY3djb25pbnQ7XCI6XCLiiLJcIixcIiZjd2ludDtcIjpcIuKIsVwiLFwiJmN5bGN0eTtcIjpcIuKMrVwiLFwiJmRBcnI7XCI6XCLih5NcIixcIiZkSGFyO1wiOlwi4qWlXCIsXCImZGFnZ2VyO1wiOlwi4oCgXCIsXCImZGFsZXRoO1wiOlwi4oS4XCIsXCImZGFycjtcIjpcIuKGk1wiLFwiJmRhc2g7XCI6XCLigJBcIixcIiZkYXNodjtcIjpcIuKKo1wiLFwiJmRia2Fyb3c7XCI6XCLipI9cIixcIiZkYmxhYztcIjpcIsudXCIsXCImZGNhcm9uO1wiOlwixI9cIixcIiZkY3k7XCI6XCLQtFwiLFwiJmRkO1wiOlwi4oWGXCIsXCImZGRhZ2dlcjtcIjpcIuKAoVwiLFwiJmRkYXJyO1wiOlwi4oeKXCIsXCImZGRvdHNlcTtcIjpcIuKpt1wiLFwiJmRlZ1wiOlwiwrBcIixcIiZkZWc7XCI6XCLCsFwiLFwiJmRlbHRhO1wiOlwizrRcIixcIiZkZW1wdHl2O1wiOlwi4qaxXCIsXCImZGZpc2h0O1wiOlwi4qW/XCIsXCImZGZyO1wiOlwi8J2UoVwiLFwiJmRoYXJsO1wiOlwi4oeDXCIsXCImZGhhcnI7XCI6XCLih4JcIixcIiZkaWFtO1wiOlwi4ouEXCIsXCImZGlhbW9uZDtcIjpcIuKLhFwiLFwiJmRpYW1vbmRzdWl0O1wiOlwi4pmmXCIsXCImZGlhbXM7XCI6XCLimaZcIixcIiZkaWU7XCI6XCLCqFwiLFwiJmRpZ2FtbWE7XCI6XCLPnVwiLFwiJmRpc2luO1wiOlwi4ouyXCIsXCImZGl2O1wiOlwiw7dcIixcIiZkaXZpZGVcIjpcIsO3XCIsXCImZGl2aWRlO1wiOlwiw7dcIixcIiZkaXZpZGVvbnRpbWVzO1wiOlwi4ouHXCIsXCImZGl2b254O1wiOlwi4ouHXCIsXCImZGpjeTtcIjpcItGSXCIsXCImZGxjb3JuO1wiOlwi4oyeXCIsXCImZGxjcm9wO1wiOlwi4oyNXCIsXCImZG9sbGFyO1wiOlwiJFwiLFwiJmRvcGY7XCI6XCLwnZWVXCIsXCImZG90O1wiOlwiy5lcIixcIiZkb3RlcTtcIjpcIuKJkFwiLFwiJmRvdGVxZG90O1wiOlwi4omRXCIsXCImZG90bWludXM7XCI6XCLiiLhcIixcIiZkb3RwbHVzO1wiOlwi4oiUXCIsXCImZG90c3F1YXJlO1wiOlwi4oqhXCIsXCImZG91YmxlYmFyd2VkZ2U7XCI6XCLijIZcIixcIiZkb3duYXJyb3c7XCI6XCLihpNcIixcIiZkb3duZG93bmFycm93cztcIjpcIuKHilwiLFwiJmRvd25oYXJwb29ubGVmdDtcIjpcIuKHg1wiLFwiJmRvd25oYXJwb29ucmlnaHQ7XCI6XCLih4JcIixcIiZkcmJrYXJvdztcIjpcIuKkkFwiLFwiJmRyY29ybjtcIjpcIuKMn1wiLFwiJmRyY3JvcDtcIjpcIuKMjFwiLFwiJmRzY3I7XCI6XCLwnZK5XCIsXCImZHNjeTtcIjpcItGVXCIsXCImZHNvbDtcIjpcIuKntlwiLFwiJmRzdHJvaztcIjpcIsSRXCIsXCImZHRkb3Q7XCI6XCLii7FcIixcIiZkdHJpO1wiOlwi4pa/XCIsXCImZHRyaWY7XCI6XCLilr5cIixcIiZkdWFycjtcIjpcIuKHtVwiLFwiJmR1aGFyO1wiOlwi4qWvXCIsXCImZHdhbmdsZTtcIjpcIuKmplwiLFwiJmR6Y3k7XCI6XCLRn1wiLFwiJmR6aWdyYXJyO1wiOlwi4p+/XCIsXCImZUREb3Q7XCI6XCLiqbdcIixcIiZlRG90O1wiOlwi4omRXCIsXCImZWFjdXRlXCI6XCLDqVwiLFwiJmVhY3V0ZTtcIjpcIsOpXCIsXCImZWFzdGVyO1wiOlwi4qmuXCIsXCImZWNhcm9uO1wiOlwixJtcIixcIiZlY2lyO1wiOlwi4omWXCIsXCImZWNpcmNcIjpcIsOqXCIsXCImZWNpcmM7XCI6XCLDqlwiLFwiJmVjb2xvbjtcIjpcIuKJlVwiLFwiJmVjeTtcIjpcItGNXCIsXCImZWRvdDtcIjpcIsSXXCIsXCImZWU7XCI6XCLihYdcIixcIiZlZkRvdDtcIjpcIuKJklwiLFwiJmVmcjtcIjpcIvCdlKJcIixcIiZlZztcIjpcIuKqmlwiLFwiJmVncmF2ZVwiOlwiw6hcIixcIiZlZ3JhdmU7XCI6XCLDqFwiLFwiJmVncztcIjpcIuKqllwiLFwiJmVnc2RvdDtcIjpcIuKqmFwiLFwiJmVsO1wiOlwi4qqZXCIsXCImZWxpbnRlcnM7XCI6XCLij6dcIixcIiZlbGw7XCI6XCLihJNcIixcIiZlbHM7XCI6XCLiqpVcIixcIiZlbHNkb3Q7XCI6XCLiqpdcIixcIiZlbWFjcjtcIjpcIsSTXCIsXCImZW1wdHk7XCI6XCLiiIVcIixcIiZlbXB0eXNldDtcIjpcIuKIhVwiLFwiJmVtcHR5djtcIjpcIuKIhVwiLFwiJmVtc3AxMztcIjpcIuKAhFwiLFwiJmVtc3AxNDtcIjpcIuKAhVwiLFwiJmVtc3A7XCI6XCLigINcIixcIiZlbmc7XCI6XCLFi1wiLFwiJmVuc3A7XCI6XCLigIJcIixcIiZlb2dvbjtcIjpcIsSZXCIsXCImZW9wZjtcIjpcIvCdlZZcIixcIiZlcGFyO1wiOlwi4ouVXCIsXCImZXBhcnNsO1wiOlwi4qejXCIsXCImZXBsdXM7XCI6XCLiqbFcIixcIiZlcHNpO1wiOlwizrVcIixcIiZlcHNpbG9uO1wiOlwizrVcIixcIiZlcHNpdjtcIjpcIs+1XCIsXCImZXFjaXJjO1wiOlwi4omWXCIsXCImZXFjb2xvbjtcIjpcIuKJlVwiLFwiJmVxc2ltO1wiOlwi4omCXCIsXCImZXFzbGFudGd0cjtcIjpcIuKqllwiLFwiJmVxc2xhbnRsZXNzO1wiOlwi4qqVXCIsXCImZXF1YWxzO1wiOlwiPVwiLFwiJmVxdWVzdDtcIjpcIuKJn1wiLFwiJmVxdWl2O1wiOlwi4omhXCIsXCImZXF1aXZERDtcIjpcIuKpuFwiLFwiJmVxdnBhcnNsO1wiOlwi4qelXCIsXCImZXJEb3Q7XCI6XCLiiZNcIixcIiZlcmFycjtcIjpcIuKlsVwiLFwiJmVzY3I7XCI6XCLihK9cIixcIiZlc2RvdDtcIjpcIuKJkFwiLFwiJmVzaW07XCI6XCLiiYJcIixcIiZldGE7XCI6XCLOt1wiLFwiJmV0aFwiOlwiw7BcIixcIiZldGg7XCI6XCLDsFwiLFwiJmV1bWxcIjpcIsOrXCIsXCImZXVtbDtcIjpcIsOrXCIsXCImZXVybztcIjpcIuKCrFwiLFwiJmV4Y2w7XCI6XCIhXCIsXCImZXhpc3Q7XCI6XCLiiINcIixcIiZleHBlY3RhdGlvbjtcIjpcIuKEsFwiLFwiJmV4cG9uZW50aWFsZTtcIjpcIuKFh1wiLFwiJmZhbGxpbmdkb3RzZXE7XCI6XCLiiZJcIixcIiZmY3k7XCI6XCLRhFwiLFwiJmZlbWFsZTtcIjpcIuKZgFwiLFwiJmZmaWxpZztcIjpcIu+sg1wiLFwiJmZmbGlnO1wiOlwi76yAXCIsXCImZmZsbGlnO1wiOlwi76yEXCIsXCImZmZyO1wiOlwi8J2Uo1wiLFwiJmZpbGlnO1wiOlwi76yBXCIsXCImZmpsaWc7XCI6XCJmalwiLFwiJmZsYXQ7XCI6XCLima1cIixcIiZmbGxpZztcIjpcIu+sglwiLFwiJmZsdG5zO1wiOlwi4paxXCIsXCImZm5vZjtcIjpcIsaSXCIsXCImZm9wZjtcIjpcIvCdlZdcIixcIiZmb3JhbGw7XCI6XCLiiIBcIixcIiZmb3JrO1wiOlwi4ouUXCIsXCImZm9ya3Y7XCI6XCLiq5lcIixcIiZmcGFydGludDtcIjpcIuKojVwiLFwiJmZyYWMxMlwiOlwiwr1cIixcIiZmcmFjMTI7XCI6XCLCvVwiLFwiJmZyYWMxMztcIjpcIuKFk1wiLFwiJmZyYWMxNFwiOlwiwrxcIixcIiZmcmFjMTQ7XCI6XCLCvFwiLFwiJmZyYWMxNTtcIjpcIuKFlVwiLFwiJmZyYWMxNjtcIjpcIuKFmVwiLFwiJmZyYWMxODtcIjpcIuKFm1wiLFwiJmZyYWMyMztcIjpcIuKFlFwiLFwiJmZyYWMyNTtcIjpcIuKFllwiLFwiJmZyYWMzNFwiOlwiwr5cIixcIiZmcmFjMzQ7XCI6XCLCvlwiLFwiJmZyYWMzNTtcIjpcIuKFl1wiLFwiJmZyYWMzODtcIjpcIuKFnFwiLFwiJmZyYWM0NTtcIjpcIuKFmFwiLFwiJmZyYWM1NjtcIjpcIuKFmlwiLFwiJmZyYWM1ODtcIjpcIuKFnVwiLFwiJmZyYWM3ODtcIjpcIuKFnlwiLFwiJmZyYXNsO1wiOlwi4oGEXCIsXCImZnJvd247XCI6XCLijKJcIixcIiZmc2NyO1wiOlwi8J2Su1wiLFwiJmdFO1wiOlwi4omnXCIsXCImZ0VsO1wiOlwi4qqMXCIsXCImZ2FjdXRlO1wiOlwix7VcIixcIiZnYW1tYTtcIjpcIs6zXCIsXCImZ2FtbWFkO1wiOlwiz51cIixcIiZnYXA7XCI6XCLiqoZcIixcIiZnYnJldmU7XCI6XCLEn1wiLFwiJmdjaXJjO1wiOlwixJ1cIixcIiZnY3k7XCI6XCLQs1wiLFwiJmdkb3Q7XCI6XCLEoVwiLFwiJmdlO1wiOlwi4omlXCIsXCImZ2VsO1wiOlwi4oubXCIsXCImZ2VxO1wiOlwi4omlXCIsXCImZ2VxcTtcIjpcIuKJp1wiLFwiJmdlcXNsYW50O1wiOlwi4qm+XCIsXCImZ2VzO1wiOlwi4qm+XCIsXCImZ2VzY2M7XCI6XCLiqqlcIixcIiZnZXNkb3Q7XCI6XCLiqoBcIixcIiZnZXNkb3RvO1wiOlwi4qqCXCIsXCImZ2VzZG90b2w7XCI6XCLiqoRcIixcIiZnZXNsO1wiOlwi4oub77iAXCIsXCImZ2VzbGVzO1wiOlwi4qqUXCIsXCImZ2ZyO1wiOlwi8J2UpFwiLFwiJmdnO1wiOlwi4omrXCIsXCImZ2dnO1wiOlwi4ouZXCIsXCImZ2ltZWw7XCI6XCLihLdcIixcIiZnamN5O1wiOlwi0ZNcIixcIiZnbDtcIjpcIuKJt1wiLFwiJmdsRTtcIjpcIuKqklwiLFwiJmdsYTtcIjpcIuKqpVwiLFwiJmdsajtcIjpcIuKqpFwiLFwiJmduRTtcIjpcIuKJqVwiLFwiJmduYXA7XCI6XCLiqopcIixcIiZnbmFwcHJveDtcIjpcIuKqilwiLFwiJmduZTtcIjpcIuKqiFwiLFwiJmduZXE7XCI6XCLiqohcIixcIiZnbmVxcTtcIjpcIuKJqVwiLFwiJmduc2ltO1wiOlwi4ounXCIsXCImZ29wZjtcIjpcIvCdlZhcIixcIiZncmF2ZTtcIjpcImBcIixcIiZnc2NyO1wiOlwi4oSKXCIsXCImZ3NpbTtcIjpcIuKJs1wiLFwiJmdzaW1lO1wiOlwi4qqOXCIsXCImZ3NpbWw7XCI6XCLiqpBcIixcIiZndFwiOlwiPlwiLFwiJmd0O1wiOlwiPlwiLFwiJmd0Y2M7XCI6XCLiqqdcIixcIiZndGNpcjtcIjpcIuKpulwiLFwiJmd0ZG90O1wiOlwi4ouXXCIsXCImZ3RsUGFyO1wiOlwi4qaVXCIsXCImZ3RxdWVzdDtcIjpcIuKpvFwiLFwiJmd0cmFwcHJveDtcIjpcIuKqhlwiLFwiJmd0cmFycjtcIjpcIuKluFwiLFwiJmd0cmRvdDtcIjpcIuKLl1wiLFwiJmd0cmVxbGVzcztcIjpcIuKLm1wiLFwiJmd0cmVxcWxlc3M7XCI6XCLiqoxcIixcIiZndHJsZXNzO1wiOlwi4om3XCIsXCImZ3Ryc2ltO1wiOlwi4omzXCIsXCImZ3ZlcnRuZXFxO1wiOlwi4omp77iAXCIsXCImZ3ZuRTtcIjpcIuKJqe+4gFwiLFwiJmhBcnI7XCI6XCLih5RcIixcIiZoYWlyc3A7XCI6XCLigIpcIixcIiZoYWxmO1wiOlwiwr1cIixcIiZoYW1pbHQ7XCI6XCLihItcIixcIiZoYXJkY3k7XCI6XCLRilwiLFwiJmhhcnI7XCI6XCLihpRcIixcIiZoYXJyY2lyO1wiOlwi4qWIXCIsXCImaGFycnc7XCI6XCLihq1cIixcIiZoYmFyO1wiOlwi4oSPXCIsXCImaGNpcmM7XCI6XCLEpVwiLFwiJmhlYXJ0cztcIjpcIuKZpVwiLFwiJmhlYXJ0c3VpdDtcIjpcIuKZpVwiLFwiJmhlbGxpcDtcIjpcIuKAplwiLFwiJmhlcmNvbjtcIjpcIuKKuVwiLFwiJmhmcjtcIjpcIvCdlKVcIixcIiZoa3NlYXJvdztcIjpcIuKkpVwiLFwiJmhrc3dhcm93O1wiOlwi4qSmXCIsXCImaG9hcnI7XCI6XCLih79cIixcIiZob210aHQ7XCI6XCLiiLtcIixcIiZob29rbGVmdGFycm93O1wiOlwi4oapXCIsXCImaG9va3JpZ2h0YXJyb3c7XCI6XCLihqpcIixcIiZob3BmO1wiOlwi8J2VmVwiLFwiJmhvcmJhcjtcIjpcIuKAlVwiLFwiJmhzY3I7XCI6XCLwnZK9XCIsXCImaHNsYXNoO1wiOlwi4oSPXCIsXCImaHN0cm9rO1wiOlwixKdcIixcIiZoeWJ1bGw7XCI6XCLigYNcIixcIiZoeXBoZW47XCI6XCLigJBcIixcIiZpYWN1dGVcIjpcIsOtXCIsXCImaWFjdXRlO1wiOlwiw61cIixcIiZpYztcIjpcIuKBo1wiLFwiJmljaXJjXCI6XCLDrlwiLFwiJmljaXJjO1wiOlwiw65cIixcIiZpY3k7XCI6XCLQuFwiLFwiJmllY3k7XCI6XCLQtVwiLFwiJmlleGNsXCI6XCLCoVwiLFwiJmlleGNsO1wiOlwiwqFcIixcIiZpZmY7XCI6XCLih5RcIixcIiZpZnI7XCI6XCLwnZSmXCIsXCImaWdyYXZlXCI6XCLDrFwiLFwiJmlncmF2ZTtcIjpcIsOsXCIsXCImaWk7XCI6XCLihYhcIixcIiZpaWlpbnQ7XCI6XCLiqIxcIixcIiZpaWludDtcIjpcIuKIrVwiLFwiJmlpbmZpbjtcIjpcIuKnnFwiLFwiJmlpb3RhO1wiOlwi4oSpXCIsXCImaWpsaWc7XCI6XCLEs1wiLFwiJmltYWNyO1wiOlwixKtcIixcIiZpbWFnZTtcIjpcIuKEkVwiLFwiJmltYWdsaW5lO1wiOlwi4oSQXCIsXCImaW1hZ3BhcnQ7XCI6XCLihJFcIixcIiZpbWF0aDtcIjpcIsSxXCIsXCImaW1vZjtcIjpcIuKKt1wiLFwiJmltcGVkO1wiOlwixrVcIixcIiZpbjtcIjpcIuKIiFwiLFwiJmluY2FyZTtcIjpcIuKEhVwiLFwiJmluZmluO1wiOlwi4oieXCIsXCImaW5maW50aWU7XCI6XCLip51cIixcIiZpbm9kb3Q7XCI6XCLEsVwiLFwiJmludDtcIjpcIuKIq1wiLFwiJmludGNhbDtcIjpcIuKKulwiLFwiJmludGVnZXJzO1wiOlwi4oSkXCIsXCImaW50ZXJjYWw7XCI6XCLiirpcIixcIiZpbnRsYXJoaztcIjpcIuKol1wiLFwiJmludHByb2Q7XCI6XCLiqLxcIixcIiZpb2N5O1wiOlwi0ZFcIixcIiZpb2dvbjtcIjpcIsSvXCIsXCImaW9wZjtcIjpcIvCdlZpcIixcIiZpb3RhO1wiOlwizrlcIixcIiZpcHJvZDtcIjpcIuKovFwiLFwiJmlxdWVzdFwiOlwiwr9cIixcIiZpcXVlc3Q7XCI6XCLCv1wiLFwiJmlzY3I7XCI6XCLwnZK+XCIsXCImaXNpbjtcIjpcIuKIiFwiLFwiJmlzaW5FO1wiOlwi4ou5XCIsXCImaXNpbmRvdDtcIjpcIuKLtVwiLFwiJmlzaW5zO1wiOlwi4ou0XCIsXCImaXNpbnN2O1wiOlwi4ouzXCIsXCImaXNpbnY7XCI6XCLiiIhcIixcIiZpdDtcIjpcIuKBolwiLFwiJml0aWxkZTtcIjpcIsSpXCIsXCImaXVrY3k7XCI6XCLRllwiLFwiJml1bWxcIjpcIsOvXCIsXCImaXVtbDtcIjpcIsOvXCIsXCImamNpcmM7XCI6XCLEtVwiLFwiJmpjeTtcIjpcItC5XCIsXCImamZyO1wiOlwi8J2Up1wiLFwiJmptYXRoO1wiOlwiyLdcIixcIiZqb3BmO1wiOlwi8J2Vm1wiLFwiJmpzY3I7XCI6XCLwnZK/XCIsXCImanNlcmN5O1wiOlwi0ZhcIixcIiZqdWtjeTtcIjpcItGUXCIsXCIma2FwcGE7XCI6XCLOulwiLFwiJmthcHBhdjtcIjpcIs+wXCIsXCIma2NlZGlsO1wiOlwixLdcIixcIiZrY3k7XCI6XCLQulwiLFwiJmtmcjtcIjpcIvCdlKhcIixcIiZrZ3JlZW47XCI6XCLEuFwiLFwiJmtoY3k7XCI6XCLRhVwiLFwiJmtqY3k7XCI6XCLRnFwiLFwiJmtvcGY7XCI6XCLwnZWcXCIsXCIma3NjcjtcIjpcIvCdk4BcIixcIiZsQWFycjtcIjpcIuKHmlwiLFwiJmxBcnI7XCI6XCLih5BcIixcIiZsQXRhaWw7XCI6XCLipJtcIixcIiZsQmFycjtcIjpcIuKkjlwiLFwiJmxFO1wiOlwi4ommXCIsXCImbEVnO1wiOlwi4qqLXCIsXCImbEhhcjtcIjpcIuKlolwiLFwiJmxhY3V0ZTtcIjpcIsS6XCIsXCImbGFlbXB0eXY7XCI6XCLiprRcIixcIiZsYWdyYW47XCI6XCLihJJcIixcIiZsYW1iZGE7XCI6XCLOu1wiLFwiJmxhbmc7XCI6XCLin6hcIixcIiZsYW5nZDtcIjpcIuKmkVwiLFwiJmxhbmdsZTtcIjpcIuKfqFwiLFwiJmxhcDtcIjpcIuKqhVwiLFwiJmxhcXVvXCI6XCLCq1wiLFwiJmxhcXVvO1wiOlwiwqtcIixcIiZsYXJyO1wiOlwi4oaQXCIsXCImbGFycmI7XCI6XCLih6RcIixcIiZsYXJyYmZzO1wiOlwi4qSfXCIsXCImbGFycmZzO1wiOlwi4qSdXCIsXCImbGFycmhrO1wiOlwi4oapXCIsXCImbGFycmxwO1wiOlwi4oarXCIsXCImbGFycnBsO1wiOlwi4qS5XCIsXCImbGFycnNpbTtcIjpcIuKls1wiLFwiJmxhcnJ0bDtcIjpcIuKGolwiLFwiJmxhdDtcIjpcIuKqq1wiLFwiJmxhdGFpbDtcIjpcIuKkmVwiLFwiJmxhdGU7XCI6XCLiqq1cIixcIiZsYXRlcztcIjpcIuKqre+4gFwiLFwiJmxiYXJyO1wiOlwi4qSMXCIsXCImbGJicms7XCI6XCLinbJcIixcIiZsYnJhY2U7XCI6XCJ7XCIsXCImbGJyYWNrO1wiOlwiW1wiLFwiJmxicmtlO1wiOlwi4qaLXCIsXCImbGJya3NsZDtcIjpcIuKmj1wiLFwiJmxicmtzbHU7XCI6XCLipo1cIixcIiZsY2Fyb247XCI6XCLEvlwiLFwiJmxjZWRpbDtcIjpcIsS8XCIsXCImbGNlaWw7XCI6XCLijIhcIixcIiZsY3ViO1wiOlwie1wiLFwiJmxjeTtcIjpcItC7XCIsXCImbGRjYTtcIjpcIuKktlwiLFwiJmxkcXVvO1wiOlwi4oCcXCIsXCImbGRxdW9yO1wiOlwi4oCeXCIsXCImbGRyZGhhcjtcIjpcIuKlp1wiLFwiJmxkcnVzaGFyO1wiOlwi4qWLXCIsXCImbGRzaDtcIjpcIuKGslwiLFwiJmxlO1wiOlwi4omkXCIsXCImbGVmdGFycm93O1wiOlwi4oaQXCIsXCImbGVmdGFycm93dGFpbDtcIjpcIuKGolwiLFwiJmxlZnRoYXJwb29uZG93bjtcIjpcIuKGvVwiLFwiJmxlZnRoYXJwb29udXA7XCI6XCLihrxcIixcIiZsZWZ0bGVmdGFycm93cztcIjpcIuKHh1wiLFwiJmxlZnRyaWdodGFycm93O1wiOlwi4oaUXCIsXCImbGVmdHJpZ2h0YXJyb3dzO1wiOlwi4oeGXCIsXCImbGVmdHJpZ2h0aGFycG9vbnM7XCI6XCLih4tcIixcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiOlwi4oatXCIsXCImbGVmdHRocmVldGltZXM7XCI6XCLii4tcIixcIiZsZWc7XCI6XCLii5pcIixcIiZsZXE7XCI6XCLiiaRcIixcIiZsZXFxO1wiOlwi4ommXCIsXCImbGVxc2xhbnQ7XCI6XCLiqb1cIixcIiZsZXM7XCI6XCLiqb1cIixcIiZsZXNjYztcIjpcIuKqqFwiLFwiJmxlc2RvdDtcIjpcIuKpv1wiLFwiJmxlc2RvdG87XCI6XCLiqoFcIixcIiZsZXNkb3RvcjtcIjpcIuKqg1wiLFwiJmxlc2c7XCI6XCLii5rvuIBcIixcIiZsZXNnZXM7XCI6XCLiqpNcIixcIiZsZXNzYXBwcm94O1wiOlwi4qqFXCIsXCImbGVzc2RvdDtcIjpcIuKLllwiLFwiJmxlc3NlcWd0cjtcIjpcIuKLmlwiLFwiJmxlc3NlcXFndHI7XCI6XCLiqotcIixcIiZsZXNzZ3RyO1wiOlwi4om2XCIsXCImbGVzc3NpbTtcIjpcIuKJslwiLFwiJmxmaXNodDtcIjpcIuKlvFwiLFwiJmxmbG9vcjtcIjpcIuKMilwiLFwiJmxmcjtcIjpcIvCdlKlcIixcIiZsZztcIjpcIuKJtlwiLFwiJmxnRTtcIjpcIuKqkVwiLFwiJmxoYXJkO1wiOlwi4oa9XCIsXCImbGhhcnU7XCI6XCLihrxcIixcIiZsaGFydWw7XCI6XCLipapcIixcIiZsaGJsaztcIjpcIuKWhFwiLFwiJmxqY3k7XCI6XCLRmVwiLFwiJmxsO1wiOlwi4omqXCIsXCImbGxhcnI7XCI6XCLih4dcIixcIiZsbGNvcm5lcjtcIjpcIuKMnlwiLFwiJmxsaGFyZDtcIjpcIuKlq1wiLFwiJmxsdHJpO1wiOlwi4pe6XCIsXCImbG1pZG90O1wiOlwixYBcIixcIiZsbW91c3Q7XCI6XCLijrBcIixcIiZsbW91c3RhY2hlO1wiOlwi4o6wXCIsXCImbG5FO1wiOlwi4omoXCIsXCImbG5hcDtcIjpcIuKqiVwiLFwiJmxuYXBwcm94O1wiOlwi4qqJXCIsXCImbG5lO1wiOlwi4qqHXCIsXCImbG5lcTtcIjpcIuKqh1wiLFwiJmxuZXFxO1wiOlwi4omoXCIsXCImbG5zaW07XCI6XCLii6ZcIixcIiZsb2FuZztcIjpcIuKfrFwiLFwiJmxvYXJyO1wiOlwi4oe9XCIsXCImbG9icms7XCI6XCLin6ZcIixcIiZsb25nbGVmdGFycm93O1wiOlwi4p+1XCIsXCImbG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+3XCIsXCImbG9uZ21hcHN0bztcIjpcIuKfvFwiLFwiJmxvbmdyaWdodGFycm93O1wiOlwi4p+2XCIsXCImbG9vcGFycm93bGVmdDtcIjpcIuKGq1wiLFwiJmxvb3BhcnJvd3JpZ2h0O1wiOlwi4oasXCIsXCImbG9wYXI7XCI6XCLipoVcIixcIiZsb3BmO1wiOlwi8J2VnVwiLFwiJmxvcGx1cztcIjpcIuKorVwiLFwiJmxvdGltZXM7XCI6XCLiqLRcIixcIiZsb3dhc3Q7XCI6XCLiiJdcIixcIiZsb3diYXI7XCI6XCJfXCIsXCImbG96O1wiOlwi4peKXCIsXCImbG96ZW5nZTtcIjpcIuKXilwiLFwiJmxvemY7XCI6XCLip6tcIixcIiZscGFyO1wiOlwiKFwiLFwiJmxwYXJsdDtcIjpcIuKmk1wiLFwiJmxyYXJyO1wiOlwi4oeGXCIsXCImbHJjb3JuZXI7XCI6XCLijJ9cIixcIiZscmhhcjtcIjpcIuKHi1wiLFwiJmxyaGFyZDtcIjpcIuKlrVwiLFwiJmxybTtcIjpcIuKAjlwiLFwiJmxydHJpO1wiOlwi4oq/XCIsXCImbHNhcXVvO1wiOlwi4oC5XCIsXCImbHNjcjtcIjpcIvCdk4FcIixcIiZsc2g7XCI6XCLihrBcIixcIiZsc2ltO1wiOlwi4omyXCIsXCImbHNpbWU7XCI6XCLiqo1cIixcIiZsc2ltZztcIjpcIuKqj1wiLFwiJmxzcWI7XCI6XCJbXCIsXCImbHNxdW87XCI6XCLigJhcIixcIiZsc3F1b3I7XCI6XCLigJpcIixcIiZsc3Ryb2s7XCI6XCLFglwiLFwiJmx0XCI6XCI8XCIsXCImbHQ7XCI6XCI8XCIsXCImbHRjYztcIjpcIuKqplwiLFwiJmx0Y2lyO1wiOlwi4qm5XCIsXCImbHRkb3Q7XCI6XCLii5ZcIixcIiZsdGhyZWU7XCI6XCLii4tcIixcIiZsdGltZXM7XCI6XCLii4lcIixcIiZsdGxhcnI7XCI6XCLipbZcIixcIiZsdHF1ZXN0O1wiOlwi4qm7XCIsXCImbHRyUGFyO1wiOlwi4qaWXCIsXCImbHRyaTtcIjpcIuKXg1wiLFwiJmx0cmllO1wiOlwi4oq0XCIsXCImbHRyaWY7XCI6XCLil4JcIixcIiZsdXJkc2hhcjtcIjpcIuKlilwiLFwiJmx1cnVoYXI7XCI6XCLipaZcIixcIiZsdmVydG5lcXE7XCI6XCLiiajvuIBcIixcIiZsdm5FO1wiOlwi4omo77iAXCIsXCImbUREb3Q7XCI6XCLiiLpcIixcIiZtYWNyXCI6XCLCr1wiLFwiJm1hY3I7XCI6XCLCr1wiLFwiJm1hbGU7XCI6XCLimYJcIixcIiZtYWx0O1wiOlwi4pygXCIsXCImbWFsdGVzZTtcIjpcIuKcoFwiLFwiJm1hcDtcIjpcIuKGplwiLFwiJm1hcHN0bztcIjpcIuKGplwiLFwiJm1hcHN0b2Rvd247XCI6XCLihqdcIixcIiZtYXBzdG9sZWZ0O1wiOlwi4oakXCIsXCImbWFwc3RvdXA7XCI6XCLihqVcIixcIiZtYXJrZXI7XCI6XCLilq5cIixcIiZtY29tbWE7XCI6XCLiqKlcIixcIiZtY3k7XCI6XCLQvFwiLFwiJm1kYXNoO1wiOlwi4oCUXCIsXCImbWVhc3VyZWRhbmdsZTtcIjpcIuKIoVwiLFwiJm1mcjtcIjpcIvCdlKpcIixcIiZtaG87XCI6XCLihKdcIixcIiZtaWNyb1wiOlwiwrVcIixcIiZtaWNybztcIjpcIsK1XCIsXCImbWlkO1wiOlwi4oijXCIsXCImbWlkYXN0O1wiOlwiKlwiLFwiJm1pZGNpcjtcIjpcIuKrsFwiLFwiJm1pZGRvdFwiOlwiwrdcIixcIiZtaWRkb3Q7XCI6XCLCt1wiLFwiJm1pbnVzO1wiOlwi4oiSXCIsXCImbWludXNiO1wiOlwi4oqfXCIsXCImbWludXNkO1wiOlwi4oi4XCIsXCImbWludXNkdTtcIjpcIuKoqlwiLFwiJm1sY3A7XCI6XCLiq5tcIixcIiZtbGRyO1wiOlwi4oCmXCIsXCImbW5wbHVzO1wiOlwi4oiTXCIsXCImbW9kZWxzO1wiOlwi4oqnXCIsXCImbW9wZjtcIjpcIvCdlZ5cIixcIiZtcDtcIjpcIuKIk1wiLFwiJm1zY3I7XCI6XCLwnZOCXCIsXCImbXN0cG9zO1wiOlwi4oi+XCIsXCImbXU7XCI6XCLOvFwiLFwiJm11bHRpbWFwO1wiOlwi4oq4XCIsXCImbXVtYXA7XCI6XCLiirhcIixcIiZuR2c7XCI6XCLii5nMuFwiLFwiJm5HdDtcIjpcIuKJq+KDklwiLFwiJm5HdHY7XCI6XCLiiavMuFwiLFwiJm5MZWZ0YXJyb3c7XCI6XCLih41cIixcIiZuTGVmdHJpZ2h0YXJyb3c7XCI6XCLih45cIixcIiZuTGw7XCI6XCLii5jMuFwiLFwiJm5MdDtcIjpcIuKJquKDklwiLFwiJm5MdHY7XCI6XCLiiarMuFwiLFwiJm5SaWdodGFycm93O1wiOlwi4oePXCIsXCImblZEYXNoO1wiOlwi4oqvXCIsXCImblZkYXNoO1wiOlwi4oquXCIsXCImbmFibGE7XCI6XCLiiIdcIixcIiZuYWN1dGU7XCI6XCLFhFwiLFwiJm5hbmc7XCI6XCLiiKDig5JcIixcIiZuYXA7XCI6XCLiiYlcIixcIiZuYXBFO1wiOlwi4qmwzLhcIixcIiZuYXBpZDtcIjpcIuKJi8y4XCIsXCImbmFwb3M7XCI6XCLFiVwiLFwiJm5hcHByb3g7XCI6XCLiiYlcIixcIiZuYXR1cjtcIjpcIuKZrlwiLFwiJm5hdHVyYWw7XCI6XCLima5cIixcIiZuYXR1cmFscztcIjpcIuKElVwiLFwiJm5ic3BcIjpcIsKgXCIsXCImbmJzcDtcIjpcIsKgXCIsXCImbmJ1bXA7XCI6XCLiiY7MuFwiLFwiJm5idW1wZTtcIjpcIuKJj8y4XCIsXCImbmNhcDtcIjpcIuKpg1wiLFwiJm5jYXJvbjtcIjpcIsWIXCIsXCImbmNlZGlsO1wiOlwixYZcIixcIiZuY29uZztcIjpcIuKJh1wiLFwiJm5jb25nZG90O1wiOlwi4qmtzLhcIixcIiZuY3VwO1wiOlwi4qmCXCIsXCImbmN5O1wiOlwi0L1cIixcIiZuZGFzaDtcIjpcIuKAk1wiLFwiJm5lO1wiOlwi4omgXCIsXCImbmVBcnI7XCI6XCLih5dcIixcIiZuZWFyaGs7XCI6XCLipKRcIixcIiZuZWFycjtcIjpcIuKGl1wiLFwiJm5lYXJyb3c7XCI6XCLihpdcIixcIiZuZWRvdDtcIjpcIuKJkMy4XCIsXCImbmVxdWl2O1wiOlwi4omiXCIsXCImbmVzZWFyO1wiOlwi4qSoXCIsXCImbmVzaW07XCI6XCLiiYLMuFwiLFwiJm5leGlzdDtcIjpcIuKIhFwiLFwiJm5leGlzdHM7XCI6XCLiiIRcIixcIiZuZnI7XCI6XCLwnZSrXCIsXCImbmdFO1wiOlwi4omnzLhcIixcIiZuZ2U7XCI6XCLiibFcIixcIiZuZ2VxO1wiOlwi4omxXCIsXCImbmdlcXE7XCI6XCLiiafMuFwiLFwiJm5nZXFzbGFudDtcIjpcIuKpvsy4XCIsXCImbmdlcztcIjpcIuKpvsy4XCIsXCImbmdzaW07XCI6XCLiibVcIixcIiZuZ3Q7XCI6XCLiia9cIixcIiZuZ3RyO1wiOlwi4omvXCIsXCImbmhBcnI7XCI6XCLih45cIixcIiZuaGFycjtcIjpcIuKGrlwiLFwiJm5ocGFyO1wiOlwi4quyXCIsXCImbmk7XCI6XCLiiItcIixcIiZuaXM7XCI6XCLii7xcIixcIiZuaXNkO1wiOlwi4ou6XCIsXCImbml2O1wiOlwi4oiLXCIsXCImbmpjeTtcIjpcItGaXCIsXCImbmxBcnI7XCI6XCLih41cIixcIiZubEU7XCI6XCLiiabMuFwiLFwiJm5sYXJyO1wiOlwi4oaaXCIsXCImbmxkcjtcIjpcIuKApVwiLFwiJm5sZTtcIjpcIuKJsFwiLFwiJm5sZWZ0YXJyb3c7XCI6XCLihppcIixcIiZubGVmdHJpZ2h0YXJyb3c7XCI6XCLihq5cIixcIiZubGVxO1wiOlwi4omwXCIsXCImbmxlcXE7XCI6XCLiiabMuFwiLFwiJm5sZXFzbGFudDtcIjpcIuKpvcy4XCIsXCImbmxlcztcIjpcIuKpvcy4XCIsXCImbmxlc3M7XCI6XCLiia5cIixcIiZubHNpbTtcIjpcIuKJtFwiLFwiJm5sdDtcIjpcIuKJrlwiLFwiJm5sdHJpO1wiOlwi4ouqXCIsXCImbmx0cmllO1wiOlwi4ousXCIsXCImbm1pZDtcIjpcIuKIpFwiLFwiJm5vcGY7XCI6XCLwnZWfXCIsXCImbm90XCI6XCLCrFwiLFwiJm5vdDtcIjpcIsKsXCIsXCImbm90aW47XCI6XCLiiIlcIixcIiZub3RpbkU7XCI6XCLii7nMuFwiLFwiJm5vdGluZG90O1wiOlwi4ou1zLhcIixcIiZub3RpbnZhO1wiOlwi4oiJXCIsXCImbm90aW52YjtcIjpcIuKLt1wiLFwiJm5vdGludmM7XCI6XCLii7ZcIixcIiZub3RuaTtcIjpcIuKIjFwiLFwiJm5vdG5pdmE7XCI6XCLiiIxcIixcIiZub3RuaXZiO1wiOlwi4ou+XCIsXCImbm90bml2YztcIjpcIuKLvVwiLFwiJm5wYXI7XCI6XCLiiKZcIixcIiZucGFyYWxsZWw7XCI6XCLiiKZcIixcIiZucGFyc2w7XCI6XCLiq73ig6VcIixcIiZucGFydDtcIjpcIuKIgsy4XCIsXCImbnBvbGludDtcIjpcIuKolFwiLFwiJm5wcjtcIjpcIuKKgFwiLFwiJm5wcmN1ZTtcIjpcIuKLoFwiLFwiJm5wcmU7XCI6XCLiqq/MuFwiLFwiJm5wcmVjO1wiOlwi4oqAXCIsXCImbnByZWNlcTtcIjpcIuKqr8y4XCIsXCImbnJBcnI7XCI6XCLih49cIixcIiZucmFycjtcIjpcIuKGm1wiLFwiJm5yYXJyYztcIjpcIuKks8y4XCIsXCImbnJhcnJ3O1wiOlwi4oadzLhcIixcIiZucmlnaHRhcnJvdztcIjpcIuKGm1wiLFwiJm5ydHJpO1wiOlwi4ourXCIsXCImbnJ0cmllO1wiOlwi4outXCIsXCImbnNjO1wiOlwi4oqBXCIsXCImbnNjY3VlO1wiOlwi4ouhXCIsXCImbnNjZTtcIjpcIuKqsMy4XCIsXCImbnNjcjtcIjpcIvCdk4NcIixcIiZuc2hvcnRtaWQ7XCI6XCLiiKRcIixcIiZuc2hvcnRwYXJhbGxlbDtcIjpcIuKIplwiLFwiJm5zaW07XCI6XCLiiYFcIixcIiZuc2ltZTtcIjpcIuKJhFwiLFwiJm5zaW1lcTtcIjpcIuKJhFwiLFwiJm5zbWlkO1wiOlwi4oikXCIsXCImbnNwYXI7XCI6XCLiiKZcIixcIiZuc3FzdWJlO1wiOlwi4ouiXCIsXCImbnNxc3VwZTtcIjpcIuKLo1wiLFwiJm5zdWI7XCI6XCLiioRcIixcIiZuc3ViRTtcIjpcIuKrhcy4XCIsXCImbnN1YmU7XCI6XCLiiohcIixcIiZuc3Vic2V0O1wiOlwi4oqC4oOSXCIsXCImbnN1YnNldGVxO1wiOlwi4oqIXCIsXCImbnN1YnNldGVxcTtcIjpcIuKrhcy4XCIsXCImbnN1Y2M7XCI6XCLiioFcIixcIiZuc3VjY2VxO1wiOlwi4qqwzLhcIixcIiZuc3VwO1wiOlwi4oqFXCIsXCImbnN1cEU7XCI6XCLiq4bMuFwiLFwiJm5zdXBlO1wiOlwi4oqJXCIsXCImbnN1cHNldDtcIjpcIuKKg+KDklwiLFwiJm5zdXBzZXRlcTtcIjpcIuKKiVwiLFwiJm5zdXBzZXRlcXE7XCI6XCLiq4bMuFwiLFwiJm50Z2w7XCI6XCLiiblcIixcIiZudGlsZGVcIjpcIsOxXCIsXCImbnRpbGRlO1wiOlwiw7FcIixcIiZudGxnO1wiOlwi4om4XCIsXCImbnRyaWFuZ2xlbGVmdDtcIjpcIuKLqlwiLFwiJm50cmlhbmdsZWxlZnRlcTtcIjpcIuKLrFwiLFwiJm50cmlhbmdsZXJpZ2h0O1wiOlwi4ourXCIsXCImbnRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKLrVwiLFwiJm51O1wiOlwizr1cIixcIiZudW07XCI6XCIjXCIsXCImbnVtZXJvO1wiOlwi4oSWXCIsXCImbnVtc3A7XCI6XCLigIdcIixcIiZudkRhc2g7XCI6XCLiiq1cIixcIiZudkhhcnI7XCI6XCLipIRcIixcIiZudmFwO1wiOlwi4omN4oOSXCIsXCImbnZkYXNoO1wiOlwi4oqsXCIsXCImbnZnZTtcIjpcIuKJpeKDklwiLFwiJm52Z3Q7XCI6XCI+4oOSXCIsXCImbnZpbmZpbjtcIjpcIuKnnlwiLFwiJm52bEFycjtcIjpcIuKkglwiLFwiJm52bGU7XCI6XCLiiaTig5JcIixcIiZudmx0O1wiOlwiPOKDklwiLFwiJm52bHRyaWU7XCI6XCLiirTig5JcIixcIiZudnJBcnI7XCI6XCLipINcIixcIiZudnJ0cmllO1wiOlwi4oq14oOSXCIsXCImbnZzaW07XCI6XCLiiLzig5JcIixcIiZud0FycjtcIjpcIuKHllwiLFwiJm53YXJoaztcIjpcIuKko1wiLFwiJm53YXJyO1wiOlwi4oaWXCIsXCImbndhcnJvdztcIjpcIuKGllwiLFwiJm53bmVhcjtcIjpcIuKkp1wiLFwiJm9TO1wiOlwi4pOIXCIsXCImb2FjdXRlXCI6XCLDs1wiLFwiJm9hY3V0ZTtcIjpcIsOzXCIsXCImb2FzdDtcIjpcIuKKm1wiLFwiJm9jaXI7XCI6XCLiippcIixcIiZvY2lyY1wiOlwiw7RcIixcIiZvY2lyYztcIjpcIsO0XCIsXCImb2N5O1wiOlwi0L5cIixcIiZvZGFzaDtcIjpcIuKKnVwiLFwiJm9kYmxhYztcIjpcIsWRXCIsXCImb2RpdjtcIjpcIuKouFwiLFwiJm9kb3Q7XCI6XCLiiplcIixcIiZvZHNvbGQ7XCI6XCLiprxcIixcIiZvZWxpZztcIjpcIsWTXCIsXCImb2ZjaXI7XCI6XCLipr9cIixcIiZvZnI7XCI6XCLwnZSsXCIsXCImb2dvbjtcIjpcIsubXCIsXCImb2dyYXZlXCI6XCLDslwiLFwiJm9ncmF2ZTtcIjpcIsOyXCIsXCImb2d0O1wiOlwi4qeBXCIsXCImb2hiYXI7XCI6XCLiprVcIixcIiZvaG07XCI6XCLOqVwiLFwiJm9pbnQ7XCI6XCLiiK5cIixcIiZvbGFycjtcIjpcIuKGulwiLFwiJm9sY2lyO1wiOlwi4qa+XCIsXCImb2xjcm9zcztcIjpcIuKmu1wiLFwiJm9saW5lO1wiOlwi4oC+XCIsXCImb2x0O1wiOlwi4qeAXCIsXCImb21hY3I7XCI6XCLFjVwiLFwiJm9tZWdhO1wiOlwiz4lcIixcIiZvbWljcm9uO1wiOlwizr9cIixcIiZvbWlkO1wiOlwi4qa2XCIsXCImb21pbnVzO1wiOlwi4oqWXCIsXCImb29wZjtcIjpcIvCdlaBcIixcIiZvcGFyO1wiOlwi4qa3XCIsXCImb3BlcnA7XCI6XCLiprlcIixcIiZvcGx1cztcIjpcIuKKlVwiLFwiJm9yO1wiOlwi4oioXCIsXCImb3JhcnI7XCI6XCLihrtcIixcIiZvcmQ7XCI6XCLiqZ1cIixcIiZvcmRlcjtcIjpcIuKEtFwiLFwiJm9yZGVyb2Y7XCI6XCLihLRcIixcIiZvcmRmXCI6XCLCqlwiLFwiJm9yZGY7XCI6XCLCqlwiLFwiJm9yZG1cIjpcIsK6XCIsXCImb3JkbTtcIjpcIsK6XCIsXCImb3JpZ29mO1wiOlwi4oq2XCIsXCImb3JvcjtcIjpcIuKpllwiLFwiJm9yc2xvcGU7XCI6XCLiqZdcIixcIiZvcnY7XCI6XCLiqZtcIixcIiZvc2NyO1wiOlwi4oS0XCIsXCImb3NsYXNoXCI6XCLDuFwiLFwiJm9zbGFzaDtcIjpcIsO4XCIsXCImb3NvbDtcIjpcIuKKmFwiLFwiJm90aWxkZVwiOlwiw7VcIixcIiZvdGlsZGU7XCI6XCLDtVwiLFwiJm90aW1lcztcIjpcIuKKl1wiLFwiJm90aW1lc2FzO1wiOlwi4qi2XCIsXCImb3VtbFwiOlwiw7ZcIixcIiZvdW1sO1wiOlwiw7ZcIixcIiZvdmJhcjtcIjpcIuKMvVwiLFwiJnBhcjtcIjpcIuKIpVwiLFwiJnBhcmFcIjpcIsK2XCIsXCImcGFyYTtcIjpcIsK2XCIsXCImcGFyYWxsZWw7XCI6XCLiiKVcIixcIiZwYXJzaW07XCI6XCLiq7NcIixcIiZwYXJzbDtcIjpcIuKrvVwiLFwiJnBhcnQ7XCI6XCLiiIJcIixcIiZwY3k7XCI6XCLQv1wiLFwiJnBlcmNudDtcIjpcIiVcIixcIiZwZXJpb2Q7XCI6XCIuXCIsXCImcGVybWlsO1wiOlwi4oCwXCIsXCImcGVycDtcIjpcIuKKpVwiLFwiJnBlcnRlbms7XCI6XCLigLFcIixcIiZwZnI7XCI6XCLwnZStXCIsXCImcGhpO1wiOlwiz4ZcIixcIiZwaGl2O1wiOlwiz5VcIixcIiZwaG1tYXQ7XCI6XCLihLNcIixcIiZwaG9uZTtcIjpcIuKYjlwiLFwiJnBpO1wiOlwiz4BcIixcIiZwaXRjaGZvcms7XCI6XCLii5RcIixcIiZwaXY7XCI6XCLPllwiLFwiJnBsYW5jaztcIjpcIuKEj1wiLFwiJnBsYW5ja2g7XCI6XCLihI5cIixcIiZwbGFua3Y7XCI6XCLihI9cIixcIiZwbHVzO1wiOlwiK1wiLFwiJnBsdXNhY2lyO1wiOlwi4qijXCIsXCImcGx1c2I7XCI6XCLiip5cIixcIiZwbHVzY2lyO1wiOlwi4qiiXCIsXCImcGx1c2RvO1wiOlwi4oiUXCIsXCImcGx1c2R1O1wiOlwi4qilXCIsXCImcGx1c2U7XCI6XCLiqbJcIixcIiZwbHVzbW5cIjpcIsKxXCIsXCImcGx1c21uO1wiOlwiwrFcIixcIiZwbHVzc2ltO1wiOlwi4qimXCIsXCImcGx1c3R3bztcIjpcIuKop1wiLFwiJnBtO1wiOlwiwrFcIixcIiZwb2ludGludDtcIjpcIuKolVwiLFwiJnBvcGY7XCI6XCLwnZWhXCIsXCImcG91bmRcIjpcIsKjXCIsXCImcG91bmQ7XCI6XCLCo1wiLFwiJnByO1wiOlwi4om6XCIsXCImcHJFO1wiOlwi4qqzXCIsXCImcHJhcDtcIjpcIuKqt1wiLFwiJnByY3VlO1wiOlwi4om8XCIsXCImcHJlO1wiOlwi4qqvXCIsXCImcHJlYztcIjpcIuKJulwiLFwiJnByZWNhcHByb3g7XCI6XCLiqrdcIixcIiZwcmVjY3VybHllcTtcIjpcIuKJvFwiLFwiJnByZWNlcTtcIjpcIuKqr1wiLFwiJnByZWNuYXBwcm94O1wiOlwi4qq5XCIsXCImcHJlY25lcXE7XCI6XCLiqrVcIixcIiZwcmVjbnNpbTtcIjpcIuKLqFwiLFwiJnByZWNzaW07XCI6XCLiib5cIixcIiZwcmltZTtcIjpcIuKAslwiLFwiJnByaW1lcztcIjpcIuKEmVwiLFwiJnBybkU7XCI6XCLiqrVcIixcIiZwcm5hcDtcIjpcIuKquVwiLFwiJnBybnNpbTtcIjpcIuKLqFwiLFwiJnByb2Q7XCI6XCLiiI9cIixcIiZwcm9mYWxhcjtcIjpcIuKMrlwiLFwiJnByb2ZsaW5lO1wiOlwi4oySXCIsXCImcHJvZnN1cmY7XCI6XCLijJNcIixcIiZwcm9wO1wiOlwi4oidXCIsXCImcHJvcHRvO1wiOlwi4oidXCIsXCImcHJzaW07XCI6XCLiib5cIixcIiZwcnVyZWw7XCI6XCLiirBcIixcIiZwc2NyO1wiOlwi8J2ThVwiLFwiJnBzaTtcIjpcIs+IXCIsXCImcHVuY3NwO1wiOlwi4oCIXCIsXCImcWZyO1wiOlwi8J2UrlwiLFwiJnFpbnQ7XCI6XCLiqIxcIixcIiZxb3BmO1wiOlwi8J2VolwiLFwiJnFwcmltZTtcIjpcIuKBl1wiLFwiJnFzY3I7XCI6XCLwnZOGXCIsXCImcXVhdGVybmlvbnM7XCI6XCLihI1cIixcIiZxdWF0aW50O1wiOlwi4qiWXCIsXCImcXVlc3Q7XCI6XCI/XCIsXCImcXVlc3RlcTtcIjpcIuKJn1wiLFwiJnF1b3RcIjonXCInLFwiJnF1b3Q7XCI6J1wiJyxcIiZyQWFycjtcIjpcIuKHm1wiLFwiJnJBcnI7XCI6XCLih5JcIixcIiZyQXRhaWw7XCI6XCLipJxcIixcIiZyQmFycjtcIjpcIuKkj1wiLFwiJnJIYXI7XCI6XCLipaRcIixcIiZyYWNlO1wiOlwi4oi9zLFcIixcIiZyYWN1dGU7XCI6XCLFlVwiLFwiJnJhZGljO1wiOlwi4oiaXCIsXCImcmFlbXB0eXY7XCI6XCLiprNcIixcIiZyYW5nO1wiOlwi4p+pXCIsXCImcmFuZ2Q7XCI6XCLippJcIixcIiZyYW5nZTtcIjpcIuKmpVwiLFwiJnJhbmdsZTtcIjpcIuKfqVwiLFwiJnJhcXVvXCI6XCLCu1wiLFwiJnJhcXVvO1wiOlwiwrtcIixcIiZyYXJyO1wiOlwi4oaSXCIsXCImcmFycmFwO1wiOlwi4qW1XCIsXCImcmFycmI7XCI6XCLih6VcIixcIiZyYXJyYmZzO1wiOlwi4qSgXCIsXCImcmFycmM7XCI6XCLipLNcIixcIiZyYXJyZnM7XCI6XCLipJ5cIixcIiZyYXJyaGs7XCI6XCLihqpcIixcIiZyYXJybHA7XCI6XCLihqxcIixcIiZyYXJycGw7XCI6XCLipYVcIixcIiZyYXJyc2ltO1wiOlwi4qW0XCIsXCImcmFycnRsO1wiOlwi4oajXCIsXCImcmFycnc7XCI6XCLihp1cIixcIiZyYXRhaWw7XCI6XCLipJpcIixcIiZyYXRpbztcIjpcIuKItlwiLFwiJnJhdGlvbmFscztcIjpcIuKEmlwiLFwiJnJiYXJyO1wiOlwi4qSNXCIsXCImcmJicms7XCI6XCLinbNcIixcIiZyYnJhY2U7XCI6XCJ9XCIsXCImcmJyYWNrO1wiOlwiXVwiLFwiJnJicmtlO1wiOlwi4qaMXCIsXCImcmJya3NsZDtcIjpcIuKmjlwiLFwiJnJicmtzbHU7XCI6XCLippBcIixcIiZyY2Fyb247XCI6XCLFmVwiLFwiJnJjZWRpbDtcIjpcIsWXXCIsXCImcmNlaWw7XCI6XCLijIlcIixcIiZyY3ViO1wiOlwifVwiLFwiJnJjeTtcIjpcItGAXCIsXCImcmRjYTtcIjpcIuKkt1wiLFwiJnJkbGRoYXI7XCI6XCLipalcIixcIiZyZHF1bztcIjpcIuKAnVwiLFwiJnJkcXVvcjtcIjpcIuKAnVwiLFwiJnJkc2g7XCI6XCLihrNcIixcIiZyZWFsO1wiOlwi4oScXCIsXCImcmVhbGluZTtcIjpcIuKEm1wiLFwiJnJlYWxwYXJ0O1wiOlwi4oScXCIsXCImcmVhbHM7XCI6XCLihJ1cIixcIiZyZWN0O1wiOlwi4patXCIsXCImcmVnXCI6XCLCrlwiLFwiJnJlZztcIjpcIsKuXCIsXCImcmZpc2h0O1wiOlwi4qW9XCIsXCImcmZsb29yO1wiOlwi4oyLXCIsXCImcmZyO1wiOlwi8J2Ur1wiLFwiJnJoYXJkO1wiOlwi4oeBXCIsXCImcmhhcnU7XCI6XCLih4BcIixcIiZyaGFydWw7XCI6XCLipaxcIixcIiZyaG87XCI6XCLPgVwiLFwiJnJob3Y7XCI6XCLPsVwiLFwiJnJpZ2h0YXJyb3c7XCI6XCLihpJcIixcIiZyaWdodGFycm93dGFpbDtcIjpcIuKGo1wiLFwiJnJpZ2h0aGFycG9vbmRvd247XCI6XCLih4FcIixcIiZyaWdodGhhcnBvb251cDtcIjpcIuKHgFwiLFwiJnJpZ2h0bGVmdGFycm93cztcIjpcIuKHhFwiLFwiJnJpZ2h0bGVmdGhhcnBvb25zO1wiOlwi4oeMXCIsXCImcmlnaHRyaWdodGFycm93cztcIjpcIuKHiVwiLFwiJnJpZ2h0c3F1aWdhcnJvdztcIjpcIuKGnVwiLFwiJnJpZ2h0dGhyZWV0aW1lcztcIjpcIuKLjFwiLFwiJnJpbmc7XCI6XCLLmlwiLFwiJnJpc2luZ2RvdHNlcTtcIjpcIuKJk1wiLFwiJnJsYXJyO1wiOlwi4oeEXCIsXCImcmxoYXI7XCI6XCLih4xcIixcIiZybG07XCI6XCLigI9cIixcIiZybW91c3Q7XCI6XCLijrFcIixcIiZybW91c3RhY2hlO1wiOlwi4o6xXCIsXCImcm5taWQ7XCI6XCLiq65cIixcIiZyb2FuZztcIjpcIuKfrVwiLFwiJnJvYXJyO1wiOlwi4oe+XCIsXCImcm9icms7XCI6XCLin6dcIixcIiZyb3BhcjtcIjpcIuKmhlwiLFwiJnJvcGY7XCI6XCLwnZWjXCIsXCImcm9wbHVzO1wiOlwi4qiuXCIsXCImcm90aW1lcztcIjpcIuKotVwiLFwiJnJwYXI7XCI6XCIpXCIsXCImcnBhcmd0O1wiOlwi4qaUXCIsXCImcnBwb2xpbnQ7XCI6XCLiqJJcIixcIiZycmFycjtcIjpcIuKHiVwiLFwiJnJzYXF1bztcIjpcIuKAulwiLFwiJnJzY3I7XCI6XCLwnZOHXCIsXCImcnNoO1wiOlwi4oaxXCIsXCImcnNxYjtcIjpcIl1cIixcIiZyc3F1bztcIjpcIuKAmVwiLFwiJnJzcXVvcjtcIjpcIuKAmVwiLFwiJnJ0aHJlZTtcIjpcIuKLjFwiLFwiJnJ0aW1lcztcIjpcIuKLilwiLFwiJnJ0cmk7XCI6XCLilrlcIixcIiZydHJpZTtcIjpcIuKKtVwiLFwiJnJ0cmlmO1wiOlwi4pa4XCIsXCImcnRyaWx0cmk7XCI6XCLip45cIixcIiZydWx1aGFyO1wiOlwi4qWoXCIsXCImcng7XCI6XCLihJ5cIixcIiZzYWN1dGU7XCI6XCLFm1wiLFwiJnNicXVvO1wiOlwi4oCaXCIsXCImc2M7XCI6XCLiibtcIixcIiZzY0U7XCI6XCLiqrRcIixcIiZzY2FwO1wiOlwi4qq4XCIsXCImc2Nhcm9uO1wiOlwixaFcIixcIiZzY2N1ZTtcIjpcIuKJvVwiLFwiJnNjZTtcIjpcIuKqsFwiLFwiJnNjZWRpbDtcIjpcIsWfXCIsXCImc2NpcmM7XCI6XCLFnVwiLFwiJnNjbkU7XCI6XCLiqrZcIixcIiZzY25hcDtcIjpcIuKqulwiLFwiJnNjbnNpbTtcIjpcIuKLqVwiLFwiJnNjcG9saW50O1wiOlwi4qiTXCIsXCImc2NzaW07XCI6XCLiib9cIixcIiZzY3k7XCI6XCLRgVwiLFwiJnNkb3Q7XCI6XCLii4VcIixcIiZzZG90YjtcIjpcIuKKoVwiLFwiJnNkb3RlO1wiOlwi4qmmXCIsXCImc2VBcnI7XCI6XCLih5hcIixcIiZzZWFyaGs7XCI6XCLipKVcIixcIiZzZWFycjtcIjpcIuKGmFwiLFwiJnNlYXJyb3c7XCI6XCLihphcIixcIiZzZWN0XCI6XCLCp1wiLFwiJnNlY3Q7XCI6XCLCp1wiLFwiJnNlbWk7XCI6XCI7XCIsXCImc2Vzd2FyO1wiOlwi4qSpXCIsXCImc2V0bWludXM7XCI6XCLiiJZcIixcIiZzZXRtbjtcIjpcIuKIllwiLFwiJnNleHQ7XCI6XCLinLZcIixcIiZzZnI7XCI6XCLwnZSwXCIsXCImc2Zyb3duO1wiOlwi4oyiXCIsXCImc2hhcnA7XCI6XCLima9cIixcIiZzaGNoY3k7XCI6XCLRiVwiLFwiJnNoY3k7XCI6XCLRiFwiLFwiJnNob3J0bWlkO1wiOlwi4oijXCIsXCImc2hvcnRwYXJhbGxlbDtcIjpcIuKIpVwiLFwiJnNoeVwiOlwiwq1cIixcIiZzaHk7XCI6XCLCrVwiLFwiJnNpZ21hO1wiOlwiz4NcIixcIiZzaWdtYWY7XCI6XCLPglwiLFwiJnNpZ21hdjtcIjpcIs+CXCIsXCImc2ltO1wiOlwi4oi8XCIsXCImc2ltZG90O1wiOlwi4qmqXCIsXCImc2ltZTtcIjpcIuKJg1wiLFwiJnNpbWVxO1wiOlwi4omDXCIsXCImc2ltZztcIjpcIuKqnlwiLFwiJnNpbWdFO1wiOlwi4qqgXCIsXCImc2ltbDtcIjpcIuKqnVwiLFwiJnNpbWxFO1wiOlwi4qqfXCIsXCImc2ltbmU7XCI6XCLiiYZcIixcIiZzaW1wbHVzO1wiOlwi4qikXCIsXCImc2ltcmFycjtcIjpcIuKlslwiLFwiJnNsYXJyO1wiOlwi4oaQXCIsXCImc21hbGxzZXRtaW51cztcIjpcIuKIllwiLFwiJnNtYXNocDtcIjpcIuKos1wiLFwiJnNtZXBhcnNsO1wiOlwi4qekXCIsXCImc21pZDtcIjpcIuKIo1wiLFwiJnNtaWxlO1wiOlwi4oyjXCIsXCImc210O1wiOlwi4qqqXCIsXCImc210ZTtcIjpcIuKqrFwiLFwiJnNtdGVzO1wiOlwi4qqs77iAXCIsXCImc29mdGN5O1wiOlwi0YxcIixcIiZzb2w7XCI6XCIvXCIsXCImc29sYjtcIjpcIuKnhFwiLFwiJnNvbGJhcjtcIjpcIuKMv1wiLFwiJnNvcGY7XCI6XCLwnZWkXCIsXCImc3BhZGVzO1wiOlwi4pmgXCIsXCImc3BhZGVzdWl0O1wiOlwi4pmgXCIsXCImc3BhcjtcIjpcIuKIpVwiLFwiJnNxY2FwO1wiOlwi4oqTXCIsXCImc3FjYXBzO1wiOlwi4oqT77iAXCIsXCImc3FjdXA7XCI6XCLiipRcIixcIiZzcWN1cHM7XCI6XCLiipTvuIBcIixcIiZzcXN1YjtcIjpcIuKKj1wiLFwiJnNxc3ViZTtcIjpcIuKKkVwiLFwiJnNxc3Vic2V0O1wiOlwi4oqPXCIsXCImc3FzdWJzZXRlcTtcIjpcIuKKkVwiLFwiJnNxc3VwO1wiOlwi4oqQXCIsXCImc3FzdXBlO1wiOlwi4oqSXCIsXCImc3FzdXBzZXQ7XCI6XCLiipBcIixcIiZzcXN1cHNldGVxO1wiOlwi4oqSXCIsXCImc3F1O1wiOlwi4pahXCIsXCImc3F1YXJlO1wiOlwi4pahXCIsXCImc3F1YXJmO1wiOlwi4paqXCIsXCImc3F1ZjtcIjpcIuKWqlwiLFwiJnNyYXJyO1wiOlwi4oaSXCIsXCImc3NjcjtcIjpcIvCdk4hcIixcIiZzc2V0bW47XCI6XCLiiJZcIixcIiZzc21pbGU7XCI6XCLijKNcIixcIiZzc3RhcmY7XCI6XCLii4ZcIixcIiZzdGFyO1wiOlwi4piGXCIsXCImc3RhcmY7XCI6XCLimIVcIixcIiZzdHJhaWdodGVwc2lsb247XCI6XCLPtVwiLFwiJnN0cmFpZ2h0cGhpO1wiOlwiz5VcIixcIiZzdHJucztcIjpcIsKvXCIsXCImc3ViO1wiOlwi4oqCXCIsXCImc3ViRTtcIjpcIuKrhVwiLFwiJnN1YmRvdDtcIjpcIuKqvVwiLFwiJnN1YmU7XCI6XCLiioZcIixcIiZzdWJlZG90O1wiOlwi4quDXCIsXCImc3VibXVsdDtcIjpcIuKrgVwiLFwiJnN1Ym5FO1wiOlwi4quLXCIsXCImc3VibmU7XCI6XCLiiopcIixcIiZzdWJwbHVzO1wiOlwi4qq/XCIsXCImc3VicmFycjtcIjpcIuKluVwiLFwiJnN1YnNldDtcIjpcIuKKglwiLFwiJnN1YnNldGVxO1wiOlwi4oqGXCIsXCImc3Vic2V0ZXFxO1wiOlwi4quFXCIsXCImc3Vic2V0bmVxO1wiOlwi4oqKXCIsXCImc3Vic2V0bmVxcTtcIjpcIuKri1wiLFwiJnN1YnNpbTtcIjpcIuKrh1wiLFwiJnN1YnN1YjtcIjpcIuKrlVwiLFwiJnN1YnN1cDtcIjpcIuKrk1wiLFwiJnN1Y2M7XCI6XCLiibtcIixcIiZzdWNjYXBwcm94O1wiOlwi4qq4XCIsXCImc3VjY2N1cmx5ZXE7XCI6XCLiib1cIixcIiZzdWNjZXE7XCI6XCLiqrBcIixcIiZzdWNjbmFwcHJveDtcIjpcIuKqulwiLFwiJnN1Y2NuZXFxO1wiOlwi4qq2XCIsXCImc3VjY25zaW07XCI6XCLii6lcIixcIiZzdWNjc2ltO1wiOlwi4om/XCIsXCImc3VtO1wiOlwi4oiRXCIsXCImc3VuZztcIjpcIuKZqlwiLFwiJnN1cDFcIjpcIsK5XCIsXCImc3VwMTtcIjpcIsK5XCIsXCImc3VwMlwiOlwiwrJcIixcIiZzdXAyO1wiOlwiwrJcIixcIiZzdXAzXCI6XCLCs1wiLFwiJnN1cDM7XCI6XCLCs1wiLFwiJnN1cDtcIjpcIuKKg1wiLFwiJnN1cEU7XCI6XCLiq4ZcIixcIiZzdXBkb3Q7XCI6XCLiqr5cIixcIiZzdXBkc3ViO1wiOlwi4quYXCIsXCImc3VwZTtcIjpcIuKKh1wiLFwiJnN1cGVkb3Q7XCI6XCLiq4RcIixcIiZzdXBoc29sO1wiOlwi4p+JXCIsXCImc3VwaHN1YjtcIjpcIuKrl1wiLFwiJnN1cGxhcnI7XCI6XCLipbtcIixcIiZzdXBtdWx0O1wiOlwi4quCXCIsXCImc3VwbkU7XCI6XCLiq4xcIixcIiZzdXBuZTtcIjpcIuKKi1wiLFwiJnN1cHBsdXM7XCI6XCLiq4BcIixcIiZzdXBzZXQ7XCI6XCLiioNcIixcIiZzdXBzZXRlcTtcIjpcIuKKh1wiLFwiJnN1cHNldGVxcTtcIjpcIuKrhlwiLFwiJnN1cHNldG5lcTtcIjpcIuKKi1wiLFwiJnN1cHNldG5lcXE7XCI6XCLiq4xcIixcIiZzdXBzaW07XCI6XCLiq4hcIixcIiZzdXBzdWI7XCI6XCLiq5RcIixcIiZzdXBzdXA7XCI6XCLiq5ZcIixcIiZzd0FycjtcIjpcIuKHmVwiLFwiJnN3YXJoaztcIjpcIuKkplwiLFwiJnN3YXJyO1wiOlwi4oaZXCIsXCImc3dhcnJvdztcIjpcIuKGmVwiLFwiJnN3bndhcjtcIjpcIuKkqlwiLFwiJnN6bGlnXCI6XCLDn1wiLFwiJnN6bGlnO1wiOlwiw59cIixcIiZ0YXJnZXQ7XCI6XCLijJZcIixcIiZ0YXU7XCI6XCLPhFwiLFwiJnRicms7XCI6XCLijrRcIixcIiZ0Y2Fyb247XCI6XCLFpVwiLFwiJnRjZWRpbDtcIjpcIsWjXCIsXCImdGN5O1wiOlwi0YJcIixcIiZ0ZG90O1wiOlwi4oObXCIsXCImdGVscmVjO1wiOlwi4oyVXCIsXCImdGZyO1wiOlwi8J2UsVwiLFwiJnRoZXJlNDtcIjpcIuKItFwiLFwiJnRoZXJlZm9yZTtcIjpcIuKItFwiLFwiJnRoZXRhO1wiOlwizrhcIixcIiZ0aGV0YXN5bTtcIjpcIs+RXCIsXCImdGhldGF2O1wiOlwiz5FcIixcIiZ0aGlja2FwcHJveDtcIjpcIuKJiFwiLFwiJnRoaWNrc2ltO1wiOlwi4oi8XCIsXCImdGhpbnNwO1wiOlwi4oCJXCIsXCImdGhrYXA7XCI6XCLiiYhcIixcIiZ0aGtzaW07XCI6XCLiiLxcIixcIiZ0aG9yblwiOlwiw75cIixcIiZ0aG9ybjtcIjpcIsO+XCIsXCImdGlsZGU7XCI6XCLLnFwiLFwiJnRpbWVzXCI6XCLDl1wiLFwiJnRpbWVzO1wiOlwiw5dcIixcIiZ0aW1lc2I7XCI6XCLiiqBcIixcIiZ0aW1lc2JhcjtcIjpcIuKosVwiLFwiJnRpbWVzZDtcIjpcIuKosFwiLFwiJnRpbnQ7XCI6XCLiiK1cIixcIiZ0b2VhO1wiOlwi4qSoXCIsXCImdG9wO1wiOlwi4oqkXCIsXCImdG9wYm90O1wiOlwi4oy2XCIsXCImdG9wY2lyO1wiOlwi4quxXCIsXCImdG9wZjtcIjpcIvCdlaVcIixcIiZ0b3Bmb3JrO1wiOlwi4quaXCIsXCImdG9zYTtcIjpcIuKkqVwiLFwiJnRwcmltZTtcIjpcIuKAtFwiLFwiJnRyYWRlO1wiOlwi4oSiXCIsXCImdHJpYW5nbGU7XCI6XCLilrVcIixcIiZ0cmlhbmdsZWRvd247XCI6XCLilr9cIixcIiZ0cmlhbmdsZWxlZnQ7XCI6XCLil4NcIixcIiZ0cmlhbmdsZWxlZnRlcTtcIjpcIuKKtFwiLFwiJnRyaWFuZ2xlcTtcIjpcIuKJnFwiLFwiJnRyaWFuZ2xlcmlnaHQ7XCI6XCLilrlcIixcIiZ0cmlhbmdsZXJpZ2h0ZXE7XCI6XCLiirVcIixcIiZ0cmlkb3Q7XCI6XCLil6xcIixcIiZ0cmllO1wiOlwi4omcXCIsXCImdHJpbWludXM7XCI6XCLiqLpcIixcIiZ0cmlwbHVzO1wiOlwi4qi5XCIsXCImdHJpc2I7XCI6XCLip41cIixcIiZ0cml0aW1lO1wiOlwi4qi7XCIsXCImdHJwZXppdW07XCI6XCLij6JcIixcIiZ0c2NyO1wiOlwi8J2TiVwiLFwiJnRzY3k7XCI6XCLRhlwiLFwiJnRzaGN5O1wiOlwi0ZtcIixcIiZ0c3Ryb2s7XCI6XCLFp1wiLFwiJnR3aXh0O1wiOlwi4omsXCIsXCImdHdvaGVhZGxlZnRhcnJvdztcIjpcIuKGnlwiLFwiJnR3b2hlYWRyaWdodGFycm93O1wiOlwi4oagXCIsXCImdUFycjtcIjpcIuKHkVwiLFwiJnVIYXI7XCI6XCLipaNcIixcIiZ1YWN1dGVcIjpcIsO6XCIsXCImdWFjdXRlO1wiOlwiw7pcIixcIiZ1YXJyO1wiOlwi4oaRXCIsXCImdWJyY3k7XCI6XCLRnlwiLFwiJnVicmV2ZTtcIjpcIsWtXCIsXCImdWNpcmNcIjpcIsO7XCIsXCImdWNpcmM7XCI6XCLDu1wiLFwiJnVjeTtcIjpcItGDXCIsXCImdWRhcnI7XCI6XCLih4VcIixcIiZ1ZGJsYWM7XCI6XCLFsVwiLFwiJnVkaGFyO1wiOlwi4qWuXCIsXCImdWZpc2h0O1wiOlwi4qW+XCIsXCImdWZyO1wiOlwi8J2UslwiLFwiJnVncmF2ZVwiOlwiw7lcIixcIiZ1Z3JhdmU7XCI6XCLDuVwiLFwiJnVoYXJsO1wiOlwi4oa/XCIsXCImdWhhcnI7XCI6XCLihr5cIixcIiZ1aGJsaztcIjpcIuKWgFwiLFwiJnVsY29ybjtcIjpcIuKMnFwiLFwiJnVsY29ybmVyO1wiOlwi4oycXCIsXCImdWxjcm9wO1wiOlwi4oyPXCIsXCImdWx0cmk7XCI6XCLil7hcIixcIiZ1bWFjcjtcIjpcIsWrXCIsXCImdW1sXCI6XCLCqFwiLFwiJnVtbDtcIjpcIsKoXCIsXCImdW9nb247XCI6XCLFs1wiLFwiJnVvcGY7XCI6XCLwnZWmXCIsXCImdXBhcnJvdztcIjpcIuKGkVwiLFwiJnVwZG93bmFycm93O1wiOlwi4oaVXCIsXCImdXBoYXJwb29ubGVmdDtcIjpcIuKGv1wiLFwiJnVwaGFycG9vbnJpZ2h0O1wiOlwi4oa+XCIsXCImdXBsdXM7XCI6XCLiio5cIixcIiZ1cHNpO1wiOlwiz4VcIixcIiZ1cHNpaDtcIjpcIs+SXCIsXCImdXBzaWxvbjtcIjpcIs+FXCIsXCImdXB1cGFycm93cztcIjpcIuKHiFwiLFwiJnVyY29ybjtcIjpcIuKMnVwiLFwiJnVyY29ybmVyO1wiOlwi4oydXCIsXCImdXJjcm9wO1wiOlwi4oyOXCIsXCImdXJpbmc7XCI6XCLFr1wiLFwiJnVydHJpO1wiOlwi4pe5XCIsXCImdXNjcjtcIjpcIvCdk4pcIixcIiZ1dGRvdDtcIjpcIuKLsFwiLFwiJnV0aWxkZTtcIjpcIsWpXCIsXCImdXRyaTtcIjpcIuKWtVwiLFwiJnV0cmlmO1wiOlwi4pa0XCIsXCImdXVhcnI7XCI6XCLih4hcIixcIiZ1dW1sXCI6XCLDvFwiLFwiJnV1bWw7XCI6XCLDvFwiLFwiJnV3YW5nbGU7XCI6XCLipqdcIixcIiZ2QXJyO1wiOlwi4oeVXCIsXCImdkJhcjtcIjpcIuKrqFwiLFwiJnZCYXJ2O1wiOlwi4qupXCIsXCImdkRhc2g7XCI6XCLiiqhcIixcIiZ2YW5ncnQ7XCI6XCLippxcIixcIiZ2YXJlcHNpbG9uO1wiOlwiz7VcIixcIiZ2YXJrYXBwYTtcIjpcIs+wXCIsXCImdmFybm90aGluZztcIjpcIuKIhVwiLFwiJnZhcnBoaTtcIjpcIs+VXCIsXCImdmFycGk7XCI6XCLPllwiLFwiJnZhcnByb3B0bztcIjpcIuKInVwiLFwiJnZhcnI7XCI6XCLihpVcIixcIiZ2YXJyaG87XCI6XCLPsVwiLFwiJnZhcnNpZ21hO1wiOlwiz4JcIixcIiZ2YXJzdWJzZXRuZXE7XCI6XCLiiorvuIBcIixcIiZ2YXJzdWJzZXRuZXFxO1wiOlwi4quL77iAXCIsXCImdmFyc3Vwc2V0bmVxO1wiOlwi4oqL77iAXCIsXCImdmFyc3Vwc2V0bmVxcTtcIjpcIuKrjO+4gFwiLFwiJnZhcnRoZXRhO1wiOlwiz5FcIixcIiZ2YXJ0cmlhbmdsZWxlZnQ7XCI6XCLiirJcIixcIiZ2YXJ0cmlhbmdsZXJpZ2h0O1wiOlwi4oqzXCIsXCImdmN5O1wiOlwi0LJcIixcIiZ2ZGFzaDtcIjpcIuKKolwiLFwiJnZlZTtcIjpcIuKIqFwiLFwiJnZlZWJhcjtcIjpcIuKKu1wiLFwiJnZlZWVxO1wiOlwi4omaXCIsXCImdmVsbGlwO1wiOlwi4ouuXCIsXCImdmVyYmFyO1wiOlwifFwiLFwiJnZlcnQ7XCI6XCJ8XCIsXCImdmZyO1wiOlwi8J2Us1wiLFwiJnZsdHJpO1wiOlwi4oqyXCIsXCImdm5zdWI7XCI6XCLiioLig5JcIixcIiZ2bnN1cDtcIjpcIuKKg+KDklwiLFwiJnZvcGY7XCI6XCLwnZWnXCIsXCImdnByb3A7XCI6XCLiiJ1cIixcIiZ2cnRyaTtcIjpcIuKKs1wiLFwiJnZzY3I7XCI6XCLwnZOLXCIsXCImdnN1Ym5FO1wiOlwi4quL77iAXCIsXCImdnN1Ym5lO1wiOlwi4oqK77iAXCIsXCImdnN1cG5FO1wiOlwi4quM77iAXCIsXCImdnN1cG5lO1wiOlwi4oqL77iAXCIsXCImdnppZ3phZztcIjpcIuKmmlwiLFwiJndjaXJjO1wiOlwixbVcIixcIiZ3ZWRiYXI7XCI6XCLiqZ9cIixcIiZ3ZWRnZTtcIjpcIuKIp1wiLFwiJndlZGdlcTtcIjpcIuKJmVwiLFwiJndlaWVycDtcIjpcIuKEmFwiLFwiJndmcjtcIjpcIvCdlLRcIixcIiZ3b3BmO1wiOlwi8J2VqFwiLFwiJndwO1wiOlwi4oSYXCIsXCImd3I7XCI6XCLiiYBcIixcIiZ3cmVhdGg7XCI6XCLiiYBcIixcIiZ3c2NyO1wiOlwi8J2TjFwiLFwiJnhjYXA7XCI6XCLii4JcIixcIiZ4Y2lyYztcIjpcIuKXr1wiLFwiJnhjdXA7XCI6XCLii4NcIixcIiZ4ZHRyaTtcIjpcIuKWvVwiLFwiJnhmcjtcIjpcIvCdlLVcIixcIiZ4aEFycjtcIjpcIuKfulwiLFwiJnhoYXJyO1wiOlwi4p+3XCIsXCImeGk7XCI6XCLOvlwiLFwiJnhsQXJyO1wiOlwi4p+4XCIsXCImeGxhcnI7XCI6XCLin7VcIixcIiZ4bWFwO1wiOlwi4p+8XCIsXCImeG5pcztcIjpcIuKLu1wiLFwiJnhvZG90O1wiOlwi4qiAXCIsXCImeG9wZjtcIjpcIvCdlalcIixcIiZ4b3BsdXM7XCI6XCLiqIFcIixcIiZ4b3RpbWU7XCI6XCLiqIJcIixcIiZ4ckFycjtcIjpcIuKfuVwiLFwiJnhyYXJyO1wiOlwi4p+2XCIsXCImeHNjcjtcIjpcIvCdk41cIixcIiZ4c3FjdXA7XCI6XCLiqIZcIixcIiZ4dXBsdXM7XCI6XCLiqIRcIixcIiZ4dXRyaTtcIjpcIuKWs1wiLFwiJnh2ZWU7XCI6XCLii4FcIixcIiZ4d2VkZ2U7XCI6XCLii4BcIixcIiZ5YWN1dGVcIjpcIsO9XCIsXCImeWFjdXRlO1wiOlwiw71cIixcIiZ5YWN5O1wiOlwi0Y9cIixcIiZ5Y2lyYztcIjpcIsW3XCIsXCImeWN5O1wiOlwi0YtcIixcIiZ5ZW5cIjpcIsKlXCIsXCImeWVuO1wiOlwiwqVcIixcIiZ5ZnI7XCI6XCLwnZS2XCIsXCImeWljeTtcIjpcItGXXCIsXCImeW9wZjtcIjpcIvCdlapcIixcIiZ5c2NyO1wiOlwi8J2TjlwiLFwiJnl1Y3k7XCI6XCLRjlwiLFwiJnl1bWxcIjpcIsO/XCIsXCImeXVtbDtcIjpcIsO/XCIsXCImemFjdXRlO1wiOlwixbpcIixcIiZ6Y2Fyb247XCI6XCLFvlwiLFwiJnpjeTtcIjpcItC3XCIsXCImemRvdDtcIjpcIsW8XCIsXCImemVldHJmO1wiOlwi4oSoXCIsXCImemV0YTtcIjpcIs62XCIsXCImemZyO1wiOlwi8J2Ut1wiLFwiJnpoY3k7XCI6XCLQtlwiLFwiJnppZ3JhcnI7XCI6XCLih51cIixcIiZ6b3BmO1wiOlwi8J2Vq1wiLFwiJnpzY3I7XCI6XCLwnZOPXCIsXCImendqO1wiOlwi4oCNXCIsXCImenduajtcIjpcIuKAjFwifSxjaGFyYWN0ZXJzOntcIsOGXCI6XCImQUVsaWc7XCIsXCImXCI6XCImYW1wO1wiLFwiw4FcIjpcIiZBYWN1dGU7XCIsXCLEglwiOlwiJkFicmV2ZTtcIixcIsOCXCI6XCImQWNpcmM7XCIsXCLQkFwiOlwiJkFjeTtcIixcIvCdlIRcIjpcIiZBZnI7XCIsXCLDgFwiOlwiJkFncmF2ZTtcIixcIs6RXCI6XCImQWxwaGE7XCIsXCLEgFwiOlwiJkFtYWNyO1wiLFwi4qmTXCI6XCImQW5kO1wiLFwixIRcIjpcIiZBb2dvbjtcIixcIvCdlLhcIjpcIiZBb3BmO1wiLFwi4oGhXCI6XCImYWY7XCIsXCLDhVwiOlwiJmFuZ3N0O1wiLFwi8J2SnFwiOlwiJkFzY3I7XCIsXCLiiZRcIjpcIiZjb2xvbmVxO1wiLFwiw4NcIjpcIiZBdGlsZGU7XCIsXCLDhFwiOlwiJkF1bWw7XCIsXCLiiJZcIjpcIiZzc2V0bW47XCIsXCLiq6dcIjpcIiZCYXJ2O1wiLFwi4oyGXCI6XCImZG91YmxlYmFyd2VkZ2U7XCIsXCLQkVwiOlwiJkJjeTtcIixcIuKItVwiOlwiJmJlY2F1c2U7XCIsXCLihKxcIjpcIiZiZXJub3U7XCIsXCLOklwiOlwiJkJldGE7XCIsXCLwnZSFXCI6XCImQmZyO1wiLFwi8J2UuVwiOlwiJkJvcGY7XCIsXCLLmFwiOlwiJmJyZXZlO1wiLFwi4omOXCI6XCImYnVtcDtcIixcItCnXCI6XCImQ0hjeTtcIixcIsKpXCI6XCImY29weTtcIixcIsSGXCI6XCImQ2FjdXRlO1wiLFwi4ouSXCI6XCImQ2FwO1wiLFwi4oWFXCI6XCImREQ7XCIsXCLihK1cIjpcIiZDZnI7XCIsXCLEjFwiOlwiJkNjYXJvbjtcIixcIsOHXCI6XCImQ2NlZGlsO1wiLFwixIhcIjpcIiZDY2lyYztcIixcIuKIsFwiOlwiJkNjb25pbnQ7XCIsXCLEilwiOlwiJkNkb3Q7XCIsXCLCuFwiOlwiJmNlZGlsO1wiLFwiwrdcIjpcIiZtaWRkb3Q7XCIsXCLOp1wiOlwiJkNoaTtcIixcIuKKmVwiOlwiJm9kb3Q7XCIsXCLiipZcIjpcIiZvbWludXM7XCIsXCLiipVcIjpcIiZvcGx1cztcIixcIuKKl1wiOlwiJm90aW1lcztcIixcIuKIslwiOlwiJmN3Y29uaW50O1wiLFwi4oCdXCI6XCImcmRxdW9yO1wiLFwi4oCZXCI6XCImcnNxdW9yO1wiLFwi4oi3XCI6XCImUHJvcG9ydGlvbjtcIixcIuKptFwiOlwiJkNvbG9uZTtcIixcIuKJoVwiOlwiJmVxdWl2O1wiLFwi4oivXCI6XCImRG91YmxlQ29udG91ckludGVncmFsO1wiLFwi4oiuXCI6XCImb2ludDtcIixcIuKEglwiOlwiJmNvbXBsZXhlcztcIixcIuKIkFwiOlwiJmNvcHJvZDtcIixcIuKIs1wiOlwiJmF3Y29uaW50O1wiLFwi4qivXCI6XCImQ3Jvc3M7XCIsXCLwnZKeXCI6XCImQ3NjcjtcIixcIuKLk1wiOlwiJkN1cDtcIixcIuKJjVwiOlwiJmFzeW1wZXE7XCIsXCLipJFcIjpcIiZERG90cmFoZDtcIixcItCCXCI6XCImREpjeTtcIixcItCFXCI6XCImRFNjeTtcIixcItCPXCI6XCImRFpjeTtcIixcIuKAoVwiOlwiJmRkYWdnZXI7XCIsXCLihqFcIjpcIiZEYXJyO1wiLFwi4qukXCI6XCImRG91YmxlTGVmdFRlZTtcIixcIsSOXCI6XCImRGNhcm9uO1wiLFwi0JRcIjpcIiZEY3k7XCIsXCLiiIdcIjpcIiZuYWJsYTtcIixcIs6UXCI6XCImRGVsdGE7XCIsXCLwnZSHXCI6XCImRGZyO1wiLFwiwrRcIjpcIiZhY3V0ZTtcIixcIsuZXCI6XCImZG90O1wiLFwiy51cIjpcIiZkYmxhYztcIixcImBcIjpcIiZncmF2ZTtcIixcIsucXCI6XCImdGlsZGU7XCIsXCLii4RcIjpcIiZkaWFtb25kO1wiLFwi4oWGXCI6XCImZGQ7XCIsXCLwnZS7XCI6XCImRG9wZjtcIixcIsKoXCI6XCImdW1sO1wiLFwi4oOcXCI6XCImRG90RG90O1wiLFwi4omQXCI6XCImZXNkb3Q7XCIsXCLih5NcIjpcIiZkQXJyO1wiLFwi4oeQXCI6XCImbEFycjtcIixcIuKHlFwiOlwiJmlmZjtcIixcIuKfuFwiOlwiJnhsQXJyO1wiLFwi4p+6XCI6XCImeGhBcnI7XCIsXCLin7lcIjpcIiZ4ckFycjtcIixcIuKHklwiOlwiJnJBcnI7XCIsXCLiiqhcIjpcIiZ2RGFzaDtcIixcIuKHkVwiOlwiJnVBcnI7XCIsXCLih5VcIjpcIiZ2QXJyO1wiLFwi4oilXCI6XCImc3BhcjtcIixcIuKGk1wiOlwiJmRvd25hcnJvdztcIixcIuKkk1wiOlwiJkRvd25BcnJvd0JhcjtcIixcIuKHtVwiOlwiJmR1YXJyO1wiLFwizJFcIjpcIiZEb3duQnJldmU7XCIsXCLipZBcIjpcIiZEb3duTGVmdFJpZ2h0VmVjdG9yO1wiLFwi4qWeXCI6XCImRG93bkxlZnRUZWVWZWN0b3I7XCIsXCLihr1cIjpcIiZsaGFyZDtcIixcIuKlllwiOlwiJkRvd25MZWZ0VmVjdG9yQmFyO1wiLFwi4qWfXCI6XCImRG93blJpZ2h0VGVlVmVjdG9yO1wiLFwi4oeBXCI6XCImcmlnaHRoYXJwb29uZG93bjtcIixcIuKll1wiOlwiJkRvd25SaWdodFZlY3RvckJhcjtcIixcIuKKpFwiOlwiJnRvcDtcIixcIuKGp1wiOlwiJm1hcHN0b2Rvd247XCIsXCLwnZKfXCI6XCImRHNjcjtcIixcIsSQXCI6XCImRHN0cm9rO1wiLFwixYpcIjpcIiZFTkc7XCIsXCLDkFwiOlwiJkVUSDtcIixcIsOJXCI6XCImRWFjdXRlO1wiLFwixJpcIjpcIiZFY2Fyb247XCIsXCLDilwiOlwiJkVjaXJjO1wiLFwi0K1cIjpcIiZFY3k7XCIsXCLEllwiOlwiJkVkb3Q7XCIsXCLwnZSIXCI6XCImRWZyO1wiLFwiw4hcIjpcIiZFZ3JhdmU7XCIsXCLiiIhcIjpcIiZpc2ludjtcIixcIsSSXCI6XCImRW1hY3I7XCIsXCLil7tcIjpcIiZFbXB0eVNtYWxsU3F1YXJlO1wiLFwi4parXCI6XCImRW1wdHlWZXJ5U21hbGxTcXVhcmU7XCIsXCLEmFwiOlwiJkVvZ29uO1wiLFwi8J2UvFwiOlwiJkVvcGY7XCIsXCLOlVwiOlwiJkVwc2lsb247XCIsXCLiqbVcIjpcIiZFcXVhbDtcIixcIuKJglwiOlwiJmVzaW07XCIsXCLih4xcIjpcIiZybGhhcjtcIixcIuKEsFwiOlwiJmV4cGVjdGF0aW9uO1wiLFwi4qmzXCI6XCImRXNpbTtcIixcIs6XXCI6XCImRXRhO1wiLFwiw4tcIjpcIiZFdW1sO1wiLFwi4oiDXCI6XCImZXhpc3Q7XCIsXCLihYdcIjpcIiZleHBvbmVudGlhbGU7XCIsXCLQpFwiOlwiJkZjeTtcIixcIvCdlIlcIjpcIiZGZnI7XCIsXCLil7xcIjpcIiZGaWxsZWRTbWFsbFNxdWFyZTtcIixcIuKWqlwiOlwiJnNxdWY7XCIsXCLwnZS9XCI6XCImRm9wZjtcIixcIuKIgFwiOlwiJmZvcmFsbDtcIixcIuKEsVwiOlwiJkZzY3I7XCIsXCLQg1wiOlwiJkdKY3k7XCIsXCI+XCI6XCImZ3Q7XCIsXCLOk1wiOlwiJkdhbW1hO1wiLFwiz5xcIjpcIiZHYW1tYWQ7XCIsXCLEnlwiOlwiJkdicmV2ZTtcIixcIsSiXCI6XCImR2NlZGlsO1wiLFwixJxcIjpcIiZHY2lyYztcIixcItCTXCI6XCImR2N5O1wiLFwixKBcIjpcIiZHZG90O1wiLFwi8J2UilwiOlwiJkdmcjtcIixcIuKLmVwiOlwiJmdnZztcIixcIvCdlL5cIjpcIiZHb3BmO1wiLFwi4omlXCI6XCImZ2VxO1wiLFwi4oubXCI6XCImZ3RyZXFsZXNzO1wiLFwi4omnXCI6XCImZ2VxcTtcIixcIuKqolwiOlwiJkdyZWF0ZXJHcmVhdGVyO1wiLFwi4om3XCI6XCImZ3RybGVzcztcIixcIuKpvlwiOlwiJmdlcztcIixcIuKJs1wiOlwiJmd0cnNpbTtcIixcIvCdkqJcIjpcIiZHc2NyO1wiLFwi4omrXCI6XCImZ2c7XCIsXCLQqlwiOlwiJkhBUkRjeTtcIixcIsuHXCI6XCImY2Fyb247XCIsXCJeXCI6XCImSGF0O1wiLFwixKRcIjpcIiZIY2lyYztcIixcIuKEjFwiOlwiJlBvaW5jYXJlcGxhbmU7XCIsXCLihItcIjpcIiZoYW1pbHQ7XCIsXCLihI1cIjpcIiZxdWF0ZXJuaW9ucztcIixcIuKUgFwiOlwiJmJveGg7XCIsXCLEplwiOlwiJkhzdHJvaztcIixcIuKJj1wiOlwiJmJ1bXBlcTtcIixcItCVXCI6XCImSUVjeTtcIixcIsSyXCI6XCImSUpsaWc7XCIsXCLQgVwiOlwiJklPY3k7XCIsXCLDjVwiOlwiJklhY3V0ZTtcIixcIsOOXCI6XCImSWNpcmM7XCIsXCLQmFwiOlwiJkljeTtcIixcIsSwXCI6XCImSWRvdDtcIixcIuKEkVwiOlwiJmltYWdwYXJ0O1wiLFwiw4xcIjpcIiZJZ3JhdmU7XCIsXCLEqlwiOlwiJkltYWNyO1wiLFwi4oWIXCI6XCImaWk7XCIsXCLiiKxcIjpcIiZJbnQ7XCIsXCLiiKtcIjpcIiZpbnQ7XCIsXCLii4JcIjpcIiZ4Y2FwO1wiLFwi4oGjXCI6XCImaWM7XCIsXCLigaJcIjpcIiZpdDtcIixcIsSuXCI6XCImSW9nb247XCIsXCLwnZWAXCI6XCImSW9wZjtcIixcIs6ZXCI6XCImSW90YTtcIixcIuKEkFwiOlwiJmltYWdsaW5lO1wiLFwixKhcIjpcIiZJdGlsZGU7XCIsXCLQhlwiOlwiJkl1a2N5O1wiLFwiw49cIjpcIiZJdW1sO1wiLFwixLRcIjpcIiZKY2lyYztcIixcItCZXCI6XCImSmN5O1wiLFwi8J2UjVwiOlwiJkpmcjtcIixcIvCdlYFcIjpcIiZKb3BmO1wiLFwi8J2SpVwiOlwiJkpzY3I7XCIsXCLQiFwiOlwiJkpzZXJjeTtcIixcItCEXCI6XCImSnVrY3k7XCIsXCLQpVwiOlwiJktIY3k7XCIsXCLQjFwiOlwiJktKY3k7XCIsXCLOmlwiOlwiJkthcHBhO1wiLFwixLZcIjpcIiZLY2VkaWw7XCIsXCLQmlwiOlwiJktjeTtcIixcIvCdlI5cIjpcIiZLZnI7XCIsXCLwnZWCXCI6XCImS29wZjtcIixcIvCdkqZcIjpcIiZLc2NyO1wiLFwi0IlcIjpcIiZMSmN5O1wiLFwiPFwiOlwiJmx0O1wiLFwixLlcIjpcIiZMYWN1dGU7XCIsXCLOm1wiOlwiJkxhbWJkYTtcIixcIuKfqlwiOlwiJkxhbmc7XCIsXCLihJJcIjpcIiZsYWdyYW47XCIsXCLihp5cIjpcIiZ0d29oZWFkbGVmdGFycm93O1wiLFwixL1cIjpcIiZMY2Fyb247XCIsXCLEu1wiOlwiJkxjZWRpbDtcIixcItCbXCI6XCImTGN5O1wiLFwi4p+oXCI6XCImbGFuZ2xlO1wiLFwi4oaQXCI6XCImc2xhcnI7XCIsXCLih6RcIjpcIiZsYXJyYjtcIixcIuKHhlwiOlwiJmxyYXJyO1wiLFwi4oyIXCI6XCImbGNlaWw7XCIsXCLin6ZcIjpcIiZsb2JyaztcIixcIuKloVwiOlwiJkxlZnREb3duVGVlVmVjdG9yO1wiLFwi4oeDXCI6XCImZG93bmhhcnBvb25sZWZ0O1wiLFwi4qWZXCI6XCImTGVmdERvd25WZWN0b3JCYXI7XCIsXCLijIpcIjpcIiZsZmxvb3I7XCIsXCLihpRcIjpcIiZsZWZ0cmlnaHRhcnJvdztcIixcIuKljlwiOlwiJkxlZnRSaWdodFZlY3RvcjtcIixcIuKKo1wiOlwiJmRhc2h2O1wiLFwi4oakXCI6XCImbWFwc3RvbGVmdDtcIixcIuKlmlwiOlwiJkxlZnRUZWVWZWN0b3I7XCIsXCLiirJcIjpcIiZ2bHRyaTtcIixcIuKnj1wiOlwiJkxlZnRUcmlhbmdsZUJhcjtcIixcIuKKtFwiOlwiJnRyaWFuZ2xlbGVmdGVxO1wiLFwi4qWRXCI6XCImTGVmdFVwRG93blZlY3RvcjtcIixcIuKloFwiOlwiJkxlZnRVcFRlZVZlY3RvcjtcIixcIuKGv1wiOlwiJnVwaGFycG9vbmxlZnQ7XCIsXCLipZhcIjpcIiZMZWZ0VXBWZWN0b3JCYXI7XCIsXCLihrxcIjpcIiZsaGFydTtcIixcIuKlklwiOlwiJkxlZnRWZWN0b3JCYXI7XCIsXCLii5pcIjpcIiZsZXNzZXFndHI7XCIsXCLiiaZcIjpcIiZsZXFxO1wiLFwi4om2XCI6XCImbGc7XCIsXCLiqqFcIjpcIiZMZXNzTGVzcztcIixcIuKpvVwiOlwiJmxlcztcIixcIuKJslwiOlwiJmxzaW07XCIsXCLwnZSPXCI6XCImTGZyO1wiLFwi4ouYXCI6XCImTGw7XCIsXCLih5pcIjpcIiZsQWFycjtcIixcIsS/XCI6XCImTG1pZG90O1wiLFwi4p+1XCI6XCImeGxhcnI7XCIsXCLin7dcIjpcIiZ4aGFycjtcIixcIuKftlwiOlwiJnhyYXJyO1wiLFwi8J2Vg1wiOlwiJkxvcGY7XCIsXCLihplcIjpcIiZzd2Fycm93O1wiLFwi4oaYXCI6XCImc2VhcnJvdztcIixcIuKGsFwiOlwiJmxzaDtcIixcIsWBXCI6XCImTHN0cm9rO1wiLFwi4omqXCI6XCImbGw7XCIsXCLipIVcIjpcIiZNYXA7XCIsXCLQnFwiOlwiJk1jeTtcIixcIuKBn1wiOlwiJk1lZGl1bVNwYWNlO1wiLFwi4oSzXCI6XCImcGhtbWF0O1wiLFwi8J2UkFwiOlwiJk1mcjtcIixcIuKIk1wiOlwiJm1wO1wiLFwi8J2VhFwiOlwiJk1vcGY7XCIsXCLOnFwiOlwiJk11O1wiLFwi0IpcIjpcIiZOSmN5O1wiLFwixYNcIjpcIiZOYWN1dGU7XCIsXCLFh1wiOlwiJk5jYXJvbjtcIixcIsWFXCI6XCImTmNlZGlsO1wiLFwi0J1cIjpcIiZOY3k7XCIsXCLigItcIjpcIiZaZXJvV2lkdGhTcGFjZTtcIixcIlxcblwiOlwiJk5ld0xpbmU7XCIsXCLwnZSRXCI6XCImTmZyO1wiLFwi4oGgXCI6XCImTm9CcmVhaztcIixcIsKgXCI6XCImbmJzcDtcIixcIuKElVwiOlwiJm5hdHVyYWxzO1wiLFwi4qusXCI6XCImTm90O1wiLFwi4omiXCI6XCImbmVxdWl2O1wiLFwi4omtXCI6XCImTm90Q3VwQ2FwO1wiLFwi4oimXCI6XCImbnNwYXI7XCIsXCLiiIlcIjpcIiZub3RpbnZhO1wiLFwi4omgXCI6XCImbmU7XCIsXCLiiYLMuFwiOlwiJm5lc2ltO1wiLFwi4oiEXCI6XCImbmV4aXN0cztcIixcIuKJr1wiOlwiJm5ndHI7XCIsXCLiibFcIjpcIiZuZ2VxO1wiLFwi4omnzLhcIjpcIiZuZ2VxcTtcIixcIuKJq8y4XCI6XCImbkd0djtcIixcIuKJuVwiOlwiJm50Z2w7XCIsXCLiqb7MuFwiOlwiJm5nZXM7XCIsXCLiibVcIjpcIiZuZ3NpbTtcIixcIuKJjsy4XCI6XCImbmJ1bXA7XCIsXCLiiY/MuFwiOlwiJm5idW1wZTtcIixcIuKLqlwiOlwiJm50cmlhbmdsZWxlZnQ7XCIsXCLip4/MuFwiOlwiJk5vdExlZnRUcmlhbmdsZUJhcjtcIixcIuKLrFwiOlwiJm50cmlhbmdsZWxlZnRlcTtcIixcIuKJrlwiOlwiJm5sdDtcIixcIuKJsFwiOlwiJm5sZXE7XCIsXCLiibhcIjpcIiZudGxnO1wiLFwi4omqzLhcIjpcIiZuTHR2O1wiLFwi4qm9zLhcIjpcIiZubGVzO1wiLFwi4om0XCI6XCImbmxzaW07XCIsXCLiqqLMuFwiOlwiJk5vdE5lc3RlZEdyZWF0ZXJHcmVhdGVyO1wiLFwi4qqhzLhcIjpcIiZOb3ROZXN0ZWRMZXNzTGVzcztcIixcIuKKgFwiOlwiJm5wcmVjO1wiLFwi4qqvzLhcIjpcIiZucHJlY2VxO1wiLFwi4ougXCI6XCImbnByY3VlO1wiLFwi4oiMXCI6XCImbm90bml2YTtcIixcIuKLq1wiOlwiJm50cmlhbmdsZXJpZ2h0O1wiLFwi4qeQzLhcIjpcIiZOb3RSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4outXCI6XCImbnRyaWFuZ2xlcmlnaHRlcTtcIixcIuKKj8y4XCI6XCImTm90U3F1YXJlU3Vic2V0O1wiLFwi4ouiXCI6XCImbnNxc3ViZTtcIixcIuKKkMy4XCI6XCImTm90U3F1YXJlU3VwZXJzZXQ7XCIsXCLii6NcIjpcIiZuc3FzdXBlO1wiLFwi4oqC4oOSXCI6XCImdm5zdWI7XCIsXCLiiohcIjpcIiZuc3Vic2V0ZXE7XCIsXCLiioFcIjpcIiZuc3VjYztcIixcIuKqsMy4XCI6XCImbnN1Y2NlcTtcIixcIuKLoVwiOlwiJm5zY2N1ZTtcIixcIuKJv8y4XCI6XCImTm90U3VjY2VlZHNUaWxkZTtcIixcIuKKg+KDklwiOlwiJnZuc3VwO1wiLFwi4oqJXCI6XCImbnN1cHNldGVxO1wiLFwi4omBXCI6XCImbnNpbTtcIixcIuKJhFwiOlwiJm5zaW1lcTtcIixcIuKJh1wiOlwiJm5jb25nO1wiLFwi4omJXCI6XCImbmFwcHJveDtcIixcIuKIpFwiOlwiJm5zbWlkO1wiLFwi8J2SqVwiOlwiJk5zY3I7XCIsXCLDkVwiOlwiJk50aWxkZTtcIixcIs6dXCI6XCImTnU7XCIsXCLFklwiOlwiJk9FbGlnO1wiLFwiw5NcIjpcIiZPYWN1dGU7XCIsXCLDlFwiOlwiJk9jaXJjO1wiLFwi0J5cIjpcIiZPY3k7XCIsXCLFkFwiOlwiJk9kYmxhYztcIixcIvCdlJJcIjpcIiZPZnI7XCIsXCLDklwiOlwiJk9ncmF2ZTtcIixcIsWMXCI6XCImT21hY3I7XCIsXCLOqVwiOlwiJm9obTtcIixcIs6fXCI6XCImT21pY3JvbjtcIixcIvCdlYZcIjpcIiZPb3BmO1wiLFwi4oCcXCI6XCImbGRxdW87XCIsXCLigJhcIjpcIiZsc3F1bztcIixcIuKplFwiOlwiJk9yO1wiLFwi8J2SqlwiOlwiJk9zY3I7XCIsXCLDmFwiOlwiJk9zbGFzaDtcIixcIsOVXCI6XCImT3RpbGRlO1wiLFwi4qi3XCI6XCImT3RpbWVzO1wiLFwiw5ZcIjpcIiZPdW1sO1wiLFwi4oC+XCI6XCImb2xpbmU7XCIsXCLij55cIjpcIiZPdmVyQnJhY2U7XCIsXCLijrRcIjpcIiZ0YnJrO1wiLFwi4o+cXCI6XCImT3ZlclBhcmVudGhlc2lzO1wiLFwi4oiCXCI6XCImcGFydDtcIixcItCfXCI6XCImUGN5O1wiLFwi8J2Uk1wiOlwiJlBmcjtcIixcIs6mXCI6XCImUGhpO1wiLFwizqBcIjpcIiZQaTtcIixcIsKxXCI6XCImcG07XCIsXCLihJlcIjpcIiZwcmltZXM7XCIsXCLiqrtcIjpcIiZQcjtcIixcIuKJulwiOlwiJnByZWM7XCIsXCLiqq9cIjpcIiZwcmVjZXE7XCIsXCLiibxcIjpcIiZwcmVjY3VybHllcTtcIixcIuKJvlwiOlwiJnByc2ltO1wiLFwi4oCzXCI6XCImUHJpbWU7XCIsXCLiiI9cIjpcIiZwcm9kO1wiLFwi4oidXCI6XCImdnByb3A7XCIsXCLwnZKrXCI6XCImUHNjcjtcIixcIs6oXCI6XCImUHNpO1wiLCdcIic6XCImcXVvdDtcIixcIvCdlJRcIjpcIiZRZnI7XCIsXCLihJpcIjpcIiZyYXRpb25hbHM7XCIsXCLwnZKsXCI6XCImUXNjcjtcIixcIuKkkFwiOlwiJmRyYmthcm93O1wiLFwiwq5cIjpcIiZyZWc7XCIsXCLFlFwiOlwiJlJhY3V0ZTtcIixcIuKfq1wiOlwiJlJhbmc7XCIsXCLihqBcIjpcIiZ0d29oZWFkcmlnaHRhcnJvdztcIixcIuKkllwiOlwiJlJhcnJ0bDtcIixcIsWYXCI6XCImUmNhcm9uO1wiLFwixZZcIjpcIiZSY2VkaWw7XCIsXCLQoFwiOlwiJlJjeTtcIixcIuKEnFwiOlwiJnJlYWxwYXJ0O1wiLFwi4oiLXCI6XCImbml2O1wiLFwi4oeLXCI6XCImbHJoYXI7XCIsXCLipa9cIjpcIiZkdWhhcjtcIixcIs6hXCI6XCImUmhvO1wiLFwi4p+pXCI6XCImcmFuZ2xlO1wiLFwi4oaSXCI6XCImc3JhcnI7XCIsXCLih6VcIjpcIiZyYXJyYjtcIixcIuKHhFwiOlwiJnJsYXJyO1wiLFwi4oyJXCI6XCImcmNlaWw7XCIsXCLin6dcIjpcIiZyb2JyaztcIixcIuKlnVwiOlwiJlJpZ2h0RG93blRlZVZlY3RvcjtcIixcIuKHglwiOlwiJmRvd25oYXJwb29ucmlnaHQ7XCIsXCLipZVcIjpcIiZSaWdodERvd25WZWN0b3JCYXI7XCIsXCLijItcIjpcIiZyZmxvb3I7XCIsXCLiiqJcIjpcIiZ2ZGFzaDtcIixcIuKGplwiOlwiJm1hcHN0bztcIixcIuKlm1wiOlwiJlJpZ2h0VGVlVmVjdG9yO1wiLFwi4oqzXCI6XCImdnJ0cmk7XCIsXCLip5BcIjpcIiZSaWdodFRyaWFuZ2xlQmFyO1wiLFwi4oq1XCI6XCImdHJpYW5nbGVyaWdodGVxO1wiLFwi4qWPXCI6XCImUmlnaHRVcERvd25WZWN0b3I7XCIsXCLipZxcIjpcIiZSaWdodFVwVGVlVmVjdG9yO1wiLFwi4oa+XCI6XCImdXBoYXJwb29ucmlnaHQ7XCIsXCLipZRcIjpcIiZSaWdodFVwVmVjdG9yQmFyO1wiLFwi4oeAXCI6XCImcmlnaHRoYXJwb29udXA7XCIsXCLipZNcIjpcIiZSaWdodFZlY3RvckJhcjtcIixcIuKEnVwiOlwiJnJlYWxzO1wiLFwi4qWwXCI6XCImUm91bmRJbXBsaWVzO1wiLFwi4oebXCI6XCImckFhcnI7XCIsXCLihJtcIjpcIiZyZWFsaW5lO1wiLFwi4oaxXCI6XCImcnNoO1wiLFwi4qe0XCI6XCImUnVsZURlbGF5ZWQ7XCIsXCLQqVwiOlwiJlNIQ0hjeTtcIixcItCoXCI6XCImU0hjeTtcIixcItCsXCI6XCImU09GVGN5O1wiLFwixZpcIjpcIiZTYWN1dGU7XCIsXCLiqrxcIjpcIiZTYztcIixcIsWgXCI6XCImU2Nhcm9uO1wiLFwixZ5cIjpcIiZTY2VkaWw7XCIsXCLFnFwiOlwiJlNjaXJjO1wiLFwi0KFcIjpcIiZTY3k7XCIsXCLwnZSWXCI6XCImU2ZyO1wiLFwi4oaRXCI6XCImdXBhcnJvdztcIixcIs6jXCI6XCImU2lnbWE7XCIsXCLiiJhcIjpcIiZjb21wZm47XCIsXCLwnZWKXCI6XCImU29wZjtcIixcIuKImlwiOlwiJnJhZGljO1wiLFwi4pahXCI6XCImc3F1YXJlO1wiLFwi4oqTXCI6XCImc3FjYXA7XCIsXCLiio9cIjpcIiZzcXN1YnNldDtcIixcIuKKkVwiOlwiJnNxc3Vic2V0ZXE7XCIsXCLiipBcIjpcIiZzcXN1cHNldDtcIixcIuKKklwiOlwiJnNxc3Vwc2V0ZXE7XCIsXCLiipRcIjpcIiZzcWN1cDtcIixcIvCdkq5cIjpcIiZTc2NyO1wiLFwi4ouGXCI6XCImc3N0YXJmO1wiLFwi4ouQXCI6XCImU3Vic2V0O1wiLFwi4oqGXCI6XCImc3Vic2V0ZXE7XCIsXCLiibtcIjpcIiZzdWNjO1wiLFwi4qqwXCI6XCImc3VjY2VxO1wiLFwi4om9XCI6XCImc3VjY2N1cmx5ZXE7XCIsXCLiib9cIjpcIiZzdWNjc2ltO1wiLFwi4oiRXCI6XCImc3VtO1wiLFwi4ouRXCI6XCImU3Vwc2V0O1wiLFwi4oqDXCI6XCImc3Vwc2V0O1wiLFwi4oqHXCI6XCImc3Vwc2V0ZXE7XCIsXCLDnlwiOlwiJlRIT1JOO1wiLFwi4oSiXCI6XCImdHJhZGU7XCIsXCLQi1wiOlwiJlRTSGN5O1wiLFwi0KZcIjpcIiZUU2N5O1wiLFwiXFx0XCI6XCImVGFiO1wiLFwizqRcIjpcIiZUYXU7XCIsXCLFpFwiOlwiJlRjYXJvbjtcIixcIsWiXCI6XCImVGNlZGlsO1wiLFwi0KJcIjpcIiZUY3k7XCIsXCLwnZSXXCI6XCImVGZyO1wiLFwi4oi0XCI6XCImdGhlcmVmb3JlO1wiLFwizphcIjpcIiZUaGV0YTtcIixcIuKBn+KAilwiOlwiJlRoaWNrU3BhY2U7XCIsXCLigIlcIjpcIiZ0aGluc3A7XCIsXCLiiLxcIjpcIiZ0aGtzaW07XCIsXCLiiYNcIjpcIiZzaW1lcTtcIixcIuKJhVwiOlwiJmNvbmc7XCIsXCLiiYhcIjpcIiZ0aGthcDtcIixcIvCdlYtcIjpcIiZUb3BmO1wiLFwi4oObXCI6XCImdGRvdDtcIixcIvCdkq9cIjpcIiZUc2NyO1wiLFwixaZcIjpcIiZUc3Ryb2s7XCIsXCLDmlwiOlwiJlVhY3V0ZTtcIixcIuKGn1wiOlwiJlVhcnI7XCIsXCLipYlcIjpcIiZVYXJyb2NpcjtcIixcItCOXCI6XCImVWJyY3k7XCIsXCLFrFwiOlwiJlVicmV2ZTtcIixcIsObXCI6XCImVWNpcmM7XCIsXCLQo1wiOlwiJlVjeTtcIixcIsWwXCI6XCImVWRibGFjO1wiLFwi8J2UmFwiOlwiJlVmcjtcIixcIsOZXCI6XCImVWdyYXZlO1wiLFwixapcIjpcIiZVbWFjcjtcIixfOlwiJmxvd2JhcjtcIixcIuKPn1wiOlwiJlVuZGVyQnJhY2U7XCIsXCLijrVcIjpcIiZiYnJrO1wiLFwi4o+dXCI6XCImVW5kZXJQYXJlbnRoZXNpcztcIixcIuKLg1wiOlwiJnhjdXA7XCIsXCLiio5cIjpcIiZ1cGx1cztcIixcIsWyXCI6XCImVW9nb247XCIsXCLwnZWMXCI6XCImVW9wZjtcIixcIuKkklwiOlwiJlVwQXJyb3dCYXI7XCIsXCLih4VcIjpcIiZ1ZGFycjtcIixcIuKGlVwiOlwiJnZhcnI7XCIsXCLipa5cIjpcIiZ1ZGhhcjtcIixcIuKKpVwiOlwiJnBlcnA7XCIsXCLihqVcIjpcIiZtYXBzdG91cDtcIixcIuKGllwiOlwiJm53YXJyb3c7XCIsXCLihpdcIjpcIiZuZWFycm93O1wiLFwiz5JcIjpcIiZ1cHNpaDtcIixcIs6lXCI6XCImVXBzaWxvbjtcIixcIsWuXCI6XCImVXJpbmc7XCIsXCLwnZKwXCI6XCImVXNjcjtcIixcIsWoXCI6XCImVXRpbGRlO1wiLFwiw5xcIjpcIiZVdW1sO1wiLFwi4oqrXCI6XCImVkRhc2g7XCIsXCLiq6tcIjpcIiZWYmFyO1wiLFwi0JJcIjpcIiZWY3k7XCIsXCLiiqlcIjpcIiZWZGFzaDtcIixcIuKrplwiOlwiJlZkYXNobDtcIixcIuKLgVwiOlwiJnh2ZWU7XCIsXCLigJZcIjpcIiZWZXJ0O1wiLFwi4oijXCI6XCImc21pZDtcIixcInxcIjpcIiZ2ZXJ0O1wiLFwi4p2YXCI6XCImVmVydGljYWxTZXBhcmF0b3I7XCIsXCLiiYBcIjpcIiZ3cmVhdGg7XCIsXCLigIpcIjpcIiZoYWlyc3A7XCIsXCLwnZSZXCI6XCImVmZyO1wiLFwi8J2VjVwiOlwiJlZvcGY7XCIsXCLwnZKxXCI6XCImVnNjcjtcIixcIuKKqlwiOlwiJlZ2ZGFzaDtcIixcIsW0XCI6XCImV2NpcmM7XCIsXCLii4BcIjpcIiZ4d2VkZ2U7XCIsXCLwnZSaXCI6XCImV2ZyO1wiLFwi8J2VjlwiOlwiJldvcGY7XCIsXCLwnZKyXCI6XCImV3NjcjtcIixcIvCdlJtcIjpcIiZYZnI7XCIsXCLOnlwiOlwiJlhpO1wiLFwi8J2Vj1wiOlwiJlhvcGY7XCIsXCLwnZKzXCI6XCImWHNjcjtcIixcItCvXCI6XCImWUFjeTtcIixcItCHXCI6XCImWUljeTtcIixcItCuXCI6XCImWVVjeTtcIixcIsOdXCI6XCImWWFjdXRlO1wiLFwixbZcIjpcIiZZY2lyYztcIixcItCrXCI6XCImWWN5O1wiLFwi8J2UnFwiOlwiJllmcjtcIixcIvCdlZBcIjpcIiZZb3BmO1wiLFwi8J2StFwiOlwiJllzY3I7XCIsXCLFuFwiOlwiJll1bWw7XCIsXCLQllwiOlwiJlpIY3k7XCIsXCLFuVwiOlwiJlphY3V0ZTtcIixcIsW9XCI6XCImWmNhcm9uO1wiLFwi0JdcIjpcIiZaY3k7XCIsXCLFu1wiOlwiJlpkb3Q7XCIsXCLOllwiOlwiJlpldGE7XCIsXCLihKhcIjpcIiZ6ZWV0cmY7XCIsXCLihKRcIjpcIiZpbnRlZ2VycztcIixcIvCdkrVcIjpcIiZac2NyO1wiLFwiw6FcIjpcIiZhYWN1dGU7XCIsXCLEg1wiOlwiJmFicmV2ZTtcIixcIuKIvlwiOlwiJm1zdHBvcztcIixcIuKIvsyzXCI6XCImYWNFO1wiLFwi4oi/XCI6XCImYWNkO1wiLFwiw6JcIjpcIiZhY2lyYztcIixcItCwXCI6XCImYWN5O1wiLFwiw6ZcIjpcIiZhZWxpZztcIixcIvCdlJ5cIjpcIiZhZnI7XCIsXCLDoFwiOlwiJmFncmF2ZTtcIixcIuKEtVwiOlwiJmFsZXBoO1wiLFwizrFcIjpcIiZhbHBoYTtcIixcIsSBXCI6XCImYW1hY3I7XCIsXCLiqL9cIjpcIiZhbWFsZztcIixcIuKIp1wiOlwiJndlZGdlO1wiLFwi4qmVXCI6XCImYW5kYW5kO1wiLFwi4qmcXCI6XCImYW5kZDtcIixcIuKpmFwiOlwiJmFuZHNsb3BlO1wiLFwi4qmaXCI6XCImYW5kdjtcIixcIuKIoFwiOlwiJmFuZ2xlO1wiLFwi4qakXCI6XCImYW5nZTtcIixcIuKIoVwiOlwiJm1lYXN1cmVkYW5nbGU7XCIsXCLipqhcIjpcIiZhbmdtc2RhYTtcIixcIuKmqVwiOlwiJmFuZ21zZGFiO1wiLFwi4qaqXCI6XCImYW5nbXNkYWM7XCIsXCLipqtcIjpcIiZhbmdtc2RhZDtcIixcIuKmrFwiOlwiJmFuZ21zZGFlO1wiLFwi4qatXCI6XCImYW5nbXNkYWY7XCIsXCLipq5cIjpcIiZhbmdtc2RhZztcIixcIuKmr1wiOlwiJmFuZ21zZGFoO1wiLFwi4oifXCI6XCImYW5ncnQ7XCIsXCLiir5cIjpcIiZhbmdydHZiO1wiLFwi4qadXCI6XCImYW5ncnR2YmQ7XCIsXCLiiKJcIjpcIiZhbmdzcGg7XCIsXCLijbxcIjpcIiZhbmd6YXJyO1wiLFwixIVcIjpcIiZhb2dvbjtcIixcIvCdlZJcIjpcIiZhb3BmO1wiLFwi4qmwXCI6XCImYXBFO1wiLFwi4qmvXCI6XCImYXBhY2lyO1wiLFwi4omKXCI6XCImYXBwcm94ZXE7XCIsXCLiiYtcIjpcIiZhcGlkO1wiLFwiJ1wiOlwiJmFwb3M7XCIsXCLDpVwiOlwiJmFyaW5nO1wiLFwi8J2StlwiOlwiJmFzY3I7XCIsXCIqXCI6XCImbWlkYXN0O1wiLFwiw6NcIjpcIiZhdGlsZGU7XCIsXCLDpFwiOlwiJmF1bWw7XCIsXCLiqJFcIjpcIiZhd2ludDtcIixcIuKrrVwiOlwiJmJOb3Q7XCIsXCLiiYxcIjpcIiZiY29uZztcIixcIs+2XCI6XCImYmVwc2k7XCIsXCLigLVcIjpcIiZicHJpbWU7XCIsXCLiiL1cIjpcIiZic2ltO1wiLFwi4ouNXCI6XCImYnNpbWU7XCIsXCLiir1cIjpcIiZiYXJ2ZWU7XCIsXCLijIVcIjpcIiZiYXJ3ZWRnZTtcIixcIuKOtlwiOlwiJmJicmt0YnJrO1wiLFwi0LFcIjpcIiZiY3k7XCIsXCLigJ5cIjpcIiZsZHF1b3I7XCIsXCLiprBcIjpcIiZiZW1wdHl2O1wiLFwizrJcIjpcIiZiZXRhO1wiLFwi4oS2XCI6XCImYmV0aDtcIixcIuKJrFwiOlwiJnR3aXh0O1wiLFwi8J2Un1wiOlwiJmJmcjtcIixcIuKXr1wiOlwiJnhjaXJjO1wiLFwi4qiAXCI6XCImeG9kb3Q7XCIsXCLiqIFcIjpcIiZ4b3BsdXM7XCIsXCLiqIJcIjpcIiZ4b3RpbWU7XCIsXCLiqIZcIjpcIiZ4c3FjdXA7XCIsXCLimIVcIjpcIiZzdGFyZjtcIixcIuKWvVwiOlwiJnhkdHJpO1wiLFwi4pazXCI6XCImeHV0cmk7XCIsXCLiqIRcIjpcIiZ4dXBsdXM7XCIsXCLipI1cIjpcIiZyYmFycjtcIixcIuKnq1wiOlwiJmxvemY7XCIsXCLilrRcIjpcIiZ1dHJpZjtcIixcIuKWvlwiOlwiJmR0cmlmO1wiLFwi4peCXCI6XCImbHRyaWY7XCIsXCLilrhcIjpcIiZydHJpZjtcIixcIuKQo1wiOlwiJmJsYW5rO1wiLFwi4paSXCI6XCImYmxrMTI7XCIsXCLilpFcIjpcIiZibGsxNDtcIixcIuKWk1wiOlwiJmJsazM0O1wiLFwi4paIXCI6XCImYmxvY2s7XCIsXCI94oOlXCI6XCImYm5lO1wiLFwi4omh4oOlXCI6XCImYm5lcXVpdjtcIixcIuKMkFwiOlwiJmJub3Q7XCIsXCLwnZWTXCI6XCImYm9wZjtcIixcIuKLiFwiOlwiJmJvd3RpZTtcIixcIuKVl1wiOlwiJmJveERMO1wiLFwi4pWUXCI6XCImYm94RFI7XCIsXCLilZZcIjpcIiZib3hEbDtcIixcIuKVk1wiOlwiJmJveERyO1wiLFwi4pWQXCI6XCImYm94SDtcIixcIuKVplwiOlwiJmJveEhEO1wiLFwi4pWpXCI6XCImYm94SFU7XCIsXCLilaRcIjpcIiZib3hIZDtcIixcIuKVp1wiOlwiJmJveEh1O1wiLFwi4pWdXCI6XCImYm94VUw7XCIsXCLilZpcIjpcIiZib3hVUjtcIixcIuKVnFwiOlwiJmJveFVsO1wiLFwi4pWZXCI6XCImYm94VXI7XCIsXCLilZFcIjpcIiZib3hWO1wiLFwi4pWsXCI6XCImYm94Vkg7XCIsXCLilaNcIjpcIiZib3hWTDtcIixcIuKVoFwiOlwiJmJveFZSO1wiLFwi4pWrXCI6XCImYm94Vmg7XCIsXCLilaJcIjpcIiZib3hWbDtcIixcIuKVn1wiOlwiJmJveFZyO1wiLFwi4qeJXCI6XCImYm94Ym94O1wiLFwi4pWVXCI6XCImYm94ZEw7XCIsXCLilZJcIjpcIiZib3hkUjtcIixcIuKUkFwiOlwiJmJveGRsO1wiLFwi4pSMXCI6XCImYm94ZHI7XCIsXCLilaVcIjpcIiZib3hoRDtcIixcIuKVqFwiOlwiJmJveGhVO1wiLFwi4pSsXCI6XCImYm94aGQ7XCIsXCLilLRcIjpcIiZib3hodTtcIixcIuKKn1wiOlwiJm1pbnVzYjtcIixcIuKKnlwiOlwiJnBsdXNiO1wiLFwi4oqgXCI6XCImdGltZXNiO1wiLFwi4pWbXCI6XCImYm94dUw7XCIsXCLilZhcIjpcIiZib3h1UjtcIixcIuKUmFwiOlwiJmJveHVsO1wiLFwi4pSUXCI6XCImYm94dXI7XCIsXCLilIJcIjpcIiZib3h2O1wiLFwi4pWqXCI6XCImYm94dkg7XCIsXCLilaFcIjpcIiZib3h2TDtcIixcIuKVnlwiOlwiJmJveHZSO1wiLFwi4pS8XCI6XCImYm94dmg7XCIsXCLilKRcIjpcIiZib3h2bDtcIixcIuKUnFwiOlwiJmJveHZyO1wiLFwiwqZcIjpcIiZicnZiYXI7XCIsXCLwnZK3XCI6XCImYnNjcjtcIixcIuKBj1wiOlwiJmJzZW1pO1wiLFwiXFxcXFwiOlwiJmJzb2w7XCIsXCLip4VcIjpcIiZic29sYjtcIixcIuKfiFwiOlwiJmJzb2xoc3ViO1wiLFwi4oCiXCI6XCImYnVsbGV0O1wiLFwi4qquXCI6XCImYnVtcEU7XCIsXCLEh1wiOlwiJmNhY3V0ZTtcIixcIuKIqVwiOlwiJmNhcDtcIixcIuKphFwiOlwiJmNhcGFuZDtcIixcIuKpiVwiOlwiJmNhcGJyY3VwO1wiLFwi4qmLXCI6XCImY2FwY2FwO1wiLFwi4qmHXCI6XCImY2FwY3VwO1wiLFwi4qmAXCI6XCImY2FwZG90O1wiLFwi4oip77iAXCI6XCImY2FwcztcIixcIuKBgVwiOlwiJmNhcmV0O1wiLFwi4qmNXCI6XCImY2NhcHM7XCIsXCLEjVwiOlwiJmNjYXJvbjtcIixcIsOnXCI6XCImY2NlZGlsO1wiLFwixIlcIjpcIiZjY2lyYztcIixcIuKpjFwiOlwiJmNjdXBzO1wiLFwi4qmQXCI6XCImY2N1cHNzbTtcIixcIsSLXCI6XCImY2RvdDtcIixcIuKmslwiOlwiJmNlbXB0eXY7XCIsXCLColwiOlwiJmNlbnQ7XCIsXCLwnZSgXCI6XCImY2ZyO1wiLFwi0YdcIjpcIiZjaGN5O1wiLFwi4pyTXCI6XCImY2hlY2ttYXJrO1wiLFwiz4dcIjpcIiZjaGk7XCIsXCLil4tcIjpcIiZjaXI7XCIsXCLip4NcIjpcIiZjaXJFO1wiLFwiy4ZcIjpcIiZjaXJjO1wiLFwi4omXXCI6XCImY2lyZTtcIixcIuKGulwiOlwiJm9sYXJyO1wiLFwi4oa7XCI6XCImb3JhcnI7XCIsXCLik4hcIjpcIiZvUztcIixcIuKKm1wiOlwiJm9hc3Q7XCIsXCLiippcIjpcIiZvY2lyO1wiLFwi4oqdXCI6XCImb2Rhc2g7XCIsXCLiqJBcIjpcIiZjaXJmbmludDtcIixcIuKrr1wiOlwiJmNpcm1pZDtcIixcIuKnglwiOlwiJmNpcnNjaXI7XCIsXCLimaNcIjpcIiZjbHVic3VpdDtcIixcIjpcIjpcIiZjb2xvbjtcIixcIixcIjpcIiZjb21tYTtcIixcIkBcIjpcIiZjb21tYXQ7XCIsXCLiiIFcIjpcIiZjb21wbGVtZW50O1wiLFwi4qmtXCI6XCImY29uZ2RvdDtcIixcIvCdlZRcIjpcIiZjb3BmO1wiLFwi4oSXXCI6XCImY29weXNyO1wiLFwi4oa1XCI6XCImY3JhcnI7XCIsXCLinJdcIjpcIiZjcm9zcztcIixcIvCdkrhcIjpcIiZjc2NyO1wiLFwi4quPXCI6XCImY3N1YjtcIixcIuKrkVwiOlwiJmNzdWJlO1wiLFwi4quQXCI6XCImY3N1cDtcIixcIuKrklwiOlwiJmNzdXBlO1wiLFwi4ouvXCI6XCImY3Rkb3Q7XCIsXCLipLhcIjpcIiZjdWRhcnJsO1wiLFwi4qS1XCI6XCImY3VkYXJycjtcIixcIuKLnlwiOlwiJmN1cmx5ZXFwcmVjO1wiLFwi4oufXCI6XCImY3VybHllcXN1Y2M7XCIsXCLihrZcIjpcIiZjdXJ2ZWFycm93bGVmdDtcIixcIuKkvVwiOlwiJmN1bGFycnA7XCIsXCLiiKpcIjpcIiZjdXA7XCIsXCLiqYhcIjpcIiZjdXBicmNhcDtcIixcIuKphlwiOlwiJmN1cGNhcDtcIixcIuKpilwiOlwiJmN1cGN1cDtcIixcIuKKjVwiOlwiJmN1cGRvdDtcIixcIuKphVwiOlwiJmN1cG9yO1wiLFwi4oiq77iAXCI6XCImY3VwcztcIixcIuKGt1wiOlwiJmN1cnZlYXJyb3dyaWdodDtcIixcIuKkvFwiOlwiJmN1cmFycm07XCIsXCLii45cIjpcIiZjdXZlZTtcIixcIuKLj1wiOlwiJmN1d2VkO1wiLFwiwqRcIjpcIiZjdXJyZW47XCIsXCLiiLFcIjpcIiZjd2ludDtcIixcIuKMrVwiOlwiJmN5bGN0eTtcIixcIuKlpVwiOlwiJmRIYXI7XCIsXCLigKBcIjpcIiZkYWdnZXI7XCIsXCLihLhcIjpcIiZkYWxldGg7XCIsXCLigJBcIjpcIiZoeXBoZW47XCIsXCLipI9cIjpcIiZyQmFycjtcIixcIsSPXCI6XCImZGNhcm9uO1wiLFwi0LRcIjpcIiZkY3k7XCIsXCLih4pcIjpcIiZkb3duZG93bmFycm93cztcIixcIuKpt1wiOlwiJmVERG90O1wiLFwiwrBcIjpcIiZkZWc7XCIsXCLOtFwiOlwiJmRlbHRhO1wiLFwi4qaxXCI6XCImZGVtcHR5djtcIixcIuKlv1wiOlwiJmRmaXNodDtcIixcIvCdlKFcIjpcIiZkZnI7XCIsXCLimaZcIjpcIiZkaWFtcztcIixcIs+dXCI6XCImZ2FtbWFkO1wiLFwi4ouyXCI6XCImZGlzaW47XCIsXCLDt1wiOlwiJmRpdmlkZTtcIixcIuKLh1wiOlwiJmRpdm9ueDtcIixcItGSXCI6XCImZGpjeTtcIixcIuKMnlwiOlwiJmxsY29ybmVyO1wiLFwi4oyNXCI6XCImZGxjcm9wO1wiLCQ6XCImZG9sbGFyO1wiLFwi8J2VlVwiOlwiJmRvcGY7XCIsXCLiiZFcIjpcIiZlRG90O1wiLFwi4oi4XCI6XCImbWludXNkO1wiLFwi4oiUXCI6XCImcGx1c2RvO1wiLFwi4oqhXCI6XCImc2RvdGI7XCIsXCLijJ9cIjpcIiZscmNvcm5lcjtcIixcIuKMjFwiOlwiJmRyY3JvcDtcIixcIvCdkrlcIjpcIiZkc2NyO1wiLFwi0ZVcIjpcIiZkc2N5O1wiLFwi4qe2XCI6XCImZHNvbDtcIixcIsSRXCI6XCImZHN0cm9rO1wiLFwi4ouxXCI6XCImZHRkb3Q7XCIsXCLilr9cIjpcIiZ0cmlhbmdsZWRvd247XCIsXCLipqZcIjpcIiZkd2FuZ2xlO1wiLFwi0Z9cIjpcIiZkemN5O1wiLFwi4p+/XCI6XCImZHppZ3JhcnI7XCIsXCLDqVwiOlwiJmVhY3V0ZTtcIixcIuKprlwiOlwiJmVhc3RlcjtcIixcIsSbXCI6XCImZWNhcm9uO1wiLFwi4omWXCI6XCImZXFjaXJjO1wiLFwiw6pcIjpcIiZlY2lyYztcIixcIuKJlVwiOlwiJmVxY29sb247XCIsXCLRjVwiOlwiJmVjeTtcIixcIsSXXCI6XCImZWRvdDtcIixcIuKJklwiOlwiJmZhbGxpbmdkb3RzZXE7XCIsXCLwnZSiXCI6XCImZWZyO1wiLFwi4qqaXCI6XCImZWc7XCIsXCLDqFwiOlwiJmVncmF2ZTtcIixcIuKqllwiOlwiJmVxc2xhbnRndHI7XCIsXCLiqphcIjpcIiZlZ3Nkb3Q7XCIsXCLiqplcIjpcIiZlbDtcIixcIuKPp1wiOlwiJmVsaW50ZXJzO1wiLFwi4oSTXCI6XCImZWxsO1wiLFwi4qqVXCI6XCImZXFzbGFudGxlc3M7XCIsXCLiqpdcIjpcIiZlbHNkb3Q7XCIsXCLEk1wiOlwiJmVtYWNyO1wiLFwi4oiFXCI6XCImdmFybm90aGluZztcIixcIuKAhFwiOlwiJmVtc3AxMztcIixcIuKAhVwiOlwiJmVtc3AxNDtcIixcIuKAg1wiOlwiJmVtc3A7XCIsXCLFi1wiOlwiJmVuZztcIixcIuKAglwiOlwiJmVuc3A7XCIsXCLEmVwiOlwiJmVvZ29uO1wiLFwi8J2VllwiOlwiJmVvcGY7XCIsXCLii5VcIjpcIiZlcGFyO1wiLFwi4qejXCI6XCImZXBhcnNsO1wiLFwi4qmxXCI6XCImZXBsdXM7XCIsXCLOtVwiOlwiJmVwc2lsb247XCIsXCLPtVwiOlwiJnZhcmVwc2lsb247XCIsXCI9XCI6XCImZXF1YWxzO1wiLFwi4omfXCI6XCImcXVlc3RlcTtcIixcIuKpuFwiOlwiJmVxdWl2REQ7XCIsXCLip6VcIjpcIiZlcXZwYXJzbDtcIixcIuKJk1wiOlwiJnJpc2luZ2RvdHNlcTtcIixcIuKlsVwiOlwiJmVyYXJyO1wiLFwi4oSvXCI6XCImZXNjcjtcIixcIs63XCI6XCImZXRhO1wiLFwiw7BcIjpcIiZldGg7XCIsXCLDq1wiOlwiJmV1bWw7XCIsXCLigqxcIjpcIiZldXJvO1wiLFwiIVwiOlwiJmV4Y2w7XCIsXCLRhFwiOlwiJmZjeTtcIixcIuKZgFwiOlwiJmZlbWFsZTtcIixcIu+sg1wiOlwiJmZmaWxpZztcIixcIu+sgFwiOlwiJmZmbGlnO1wiLFwi76yEXCI6XCImZmZsbGlnO1wiLFwi8J2Uo1wiOlwiJmZmcjtcIixcIu+sgVwiOlwiJmZpbGlnO1wiLGZqOlwiJmZqbGlnO1wiLFwi4pmtXCI6XCImZmxhdDtcIixcIu+sglwiOlwiJmZsbGlnO1wiLFwi4paxXCI6XCImZmx0bnM7XCIsXCLGklwiOlwiJmZub2Y7XCIsXCLwnZWXXCI6XCImZm9wZjtcIixcIuKLlFwiOlwiJnBpdGNoZm9yaztcIixcIuKrmVwiOlwiJmZvcmt2O1wiLFwi4qiNXCI6XCImZnBhcnRpbnQ7XCIsXCLCvVwiOlwiJmhhbGY7XCIsXCLihZNcIjpcIiZmcmFjMTM7XCIsXCLCvFwiOlwiJmZyYWMxNDtcIixcIuKFlVwiOlwiJmZyYWMxNTtcIixcIuKFmVwiOlwiJmZyYWMxNjtcIixcIuKFm1wiOlwiJmZyYWMxODtcIixcIuKFlFwiOlwiJmZyYWMyMztcIixcIuKFllwiOlwiJmZyYWMyNTtcIixcIsK+XCI6XCImZnJhYzM0O1wiLFwi4oWXXCI6XCImZnJhYzM1O1wiLFwi4oWcXCI6XCImZnJhYzM4O1wiLFwi4oWYXCI6XCImZnJhYzQ1O1wiLFwi4oWaXCI6XCImZnJhYzU2O1wiLFwi4oWdXCI6XCImZnJhYzU4O1wiLFwi4oWeXCI6XCImZnJhYzc4O1wiLFwi4oGEXCI6XCImZnJhc2w7XCIsXCLijKJcIjpcIiZzZnJvd247XCIsXCLwnZK7XCI6XCImZnNjcjtcIixcIuKqjFwiOlwiJmd0cmVxcWxlc3M7XCIsXCLHtVwiOlwiJmdhY3V0ZTtcIixcIs6zXCI6XCImZ2FtbWE7XCIsXCLiqoZcIjpcIiZndHJhcHByb3g7XCIsXCLEn1wiOlwiJmdicmV2ZTtcIixcIsSdXCI6XCImZ2NpcmM7XCIsXCLQs1wiOlwiJmdjeTtcIixcIsShXCI6XCImZ2RvdDtcIixcIuKqqVwiOlwiJmdlc2NjO1wiLFwi4qqAXCI6XCImZ2VzZG90O1wiLFwi4qqCXCI6XCImZ2VzZG90bztcIixcIuKqhFwiOlwiJmdlc2RvdG9sO1wiLFwi4oub77iAXCI6XCImZ2VzbDtcIixcIuKqlFwiOlwiJmdlc2xlcztcIixcIvCdlKRcIjpcIiZnZnI7XCIsXCLihLdcIjpcIiZnaW1lbDtcIixcItGTXCI6XCImZ2pjeTtcIixcIuKqklwiOlwiJmdsRTtcIixcIuKqpVwiOlwiJmdsYTtcIixcIuKqpFwiOlwiJmdsajtcIixcIuKJqVwiOlwiJmduZXFxO1wiLFwi4qqKXCI6XCImZ25hcHByb3g7XCIsXCLiqohcIjpcIiZnbmVxO1wiLFwi4ounXCI6XCImZ25zaW07XCIsXCLwnZWYXCI6XCImZ29wZjtcIixcIuKEilwiOlwiJmdzY3I7XCIsXCLiqo5cIjpcIiZnc2ltZTtcIixcIuKqkFwiOlwiJmdzaW1sO1wiLFwi4qqnXCI6XCImZ3RjYztcIixcIuKpulwiOlwiJmd0Y2lyO1wiLFwi4ouXXCI6XCImZ3RyZG90O1wiLFwi4qaVXCI6XCImZ3RsUGFyO1wiLFwi4qm8XCI6XCImZ3RxdWVzdDtcIixcIuKluFwiOlwiJmd0cmFycjtcIixcIuKJqe+4gFwiOlwiJmd2bkU7XCIsXCLRilwiOlwiJmhhcmRjeTtcIixcIuKliFwiOlwiJmhhcnJjaXI7XCIsXCLihq1cIjpcIiZsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiLFwi4oSPXCI6XCImcGxhbmt2O1wiLFwixKVcIjpcIiZoY2lyYztcIixcIuKZpVwiOlwiJmhlYXJ0c3VpdDtcIixcIuKAplwiOlwiJm1sZHI7XCIsXCLiirlcIjpcIiZoZXJjb247XCIsXCLwnZSlXCI6XCImaGZyO1wiLFwi4qSlXCI6XCImc2VhcmhrO1wiLFwi4qSmXCI6XCImc3dhcmhrO1wiLFwi4oe/XCI6XCImaG9hcnI7XCIsXCLiiLtcIjpcIiZob210aHQ7XCIsXCLihqlcIjpcIiZsYXJyaGs7XCIsXCLihqpcIjpcIiZyYXJyaGs7XCIsXCLwnZWZXCI6XCImaG9wZjtcIixcIuKAlVwiOlwiJmhvcmJhcjtcIixcIvCdkr1cIjpcIiZoc2NyO1wiLFwixKdcIjpcIiZoc3Ryb2s7XCIsXCLigYNcIjpcIiZoeWJ1bGw7XCIsXCLDrVwiOlwiJmlhY3V0ZTtcIixcIsOuXCI6XCImaWNpcmM7XCIsXCLQuFwiOlwiJmljeTtcIixcItC1XCI6XCImaWVjeTtcIixcIsKhXCI6XCImaWV4Y2w7XCIsXCLwnZSmXCI6XCImaWZyO1wiLFwiw6xcIjpcIiZpZ3JhdmU7XCIsXCLiqIxcIjpcIiZxaW50O1wiLFwi4oitXCI6XCImdGludDtcIixcIuKnnFwiOlwiJmlpbmZpbjtcIixcIuKEqVwiOlwiJmlpb3RhO1wiLFwixLNcIjpcIiZpamxpZztcIixcIsSrXCI6XCImaW1hY3I7XCIsXCLEsVwiOlwiJmlub2RvdDtcIixcIuKKt1wiOlwiJmltb2Y7XCIsXCLGtVwiOlwiJmltcGVkO1wiLFwi4oSFXCI6XCImaW5jYXJlO1wiLFwi4oieXCI6XCImaW5maW47XCIsXCLip51cIjpcIiZpbmZpbnRpZTtcIixcIuKKulwiOlwiJmludGVyY2FsO1wiLFwi4qiXXCI6XCImaW50bGFyaGs7XCIsXCLiqLxcIjpcIiZpcHJvZDtcIixcItGRXCI6XCImaW9jeTtcIixcIsSvXCI6XCImaW9nb247XCIsXCLwnZWaXCI6XCImaW9wZjtcIixcIs65XCI6XCImaW90YTtcIixcIsK/XCI6XCImaXF1ZXN0O1wiLFwi8J2SvlwiOlwiJmlzY3I7XCIsXCLii7lcIjpcIiZpc2luRTtcIixcIuKLtVwiOlwiJmlzaW5kb3Q7XCIsXCLii7RcIjpcIiZpc2lucztcIixcIuKLs1wiOlwiJmlzaW5zdjtcIixcIsSpXCI6XCImaXRpbGRlO1wiLFwi0ZZcIjpcIiZpdWtjeTtcIixcIsOvXCI6XCImaXVtbDtcIixcIsS1XCI6XCImamNpcmM7XCIsXCLQuVwiOlwiJmpjeTtcIixcIvCdlKdcIjpcIiZqZnI7XCIsXCLIt1wiOlwiJmptYXRoO1wiLFwi8J2Vm1wiOlwiJmpvcGY7XCIsXCLwnZK/XCI6XCImanNjcjtcIixcItGYXCI6XCImanNlcmN5O1wiLFwi0ZRcIjpcIiZqdWtjeTtcIixcIs66XCI6XCIma2FwcGE7XCIsXCLPsFwiOlwiJnZhcmthcHBhO1wiLFwixLdcIjpcIiZrY2VkaWw7XCIsXCLQulwiOlwiJmtjeTtcIixcIvCdlKhcIjpcIiZrZnI7XCIsXCLEuFwiOlwiJmtncmVlbjtcIixcItGFXCI6XCIma2hjeTtcIixcItGcXCI6XCIma2pjeTtcIixcIvCdlZxcIjpcIiZrb3BmO1wiLFwi8J2TgFwiOlwiJmtzY3I7XCIsXCLipJtcIjpcIiZsQXRhaWw7XCIsXCLipI5cIjpcIiZsQmFycjtcIixcIuKqi1wiOlwiJmxlc3NlcXFndHI7XCIsXCLipaJcIjpcIiZsSGFyO1wiLFwixLpcIjpcIiZsYWN1dGU7XCIsXCLiprRcIjpcIiZsYWVtcHR5djtcIixcIs67XCI6XCImbGFtYmRhO1wiLFwi4qaRXCI6XCImbGFuZ2Q7XCIsXCLiqoVcIjpcIiZsZXNzYXBwcm94O1wiLFwiwqtcIjpcIiZsYXF1bztcIixcIuKkn1wiOlwiJmxhcnJiZnM7XCIsXCLipJ1cIjpcIiZsYXJyZnM7XCIsXCLihqtcIjpcIiZsb29wYXJyb3dsZWZ0O1wiLFwi4qS5XCI6XCImbGFycnBsO1wiLFwi4qWzXCI6XCImbGFycnNpbTtcIixcIuKGolwiOlwiJmxlZnRhcnJvd3RhaWw7XCIsXCLiqqtcIjpcIiZsYXQ7XCIsXCLipJlcIjpcIiZsYXRhaWw7XCIsXCLiqq1cIjpcIiZsYXRlO1wiLFwi4qqt77iAXCI6XCImbGF0ZXM7XCIsXCLipIxcIjpcIiZsYmFycjtcIixcIuKdslwiOlwiJmxiYnJrO1wiLFwie1wiOlwiJmxjdWI7XCIsXCJbXCI6XCImbHNxYjtcIixcIuKmi1wiOlwiJmxicmtlO1wiLFwi4qaPXCI6XCImbGJya3NsZDtcIixcIuKmjVwiOlwiJmxicmtzbHU7XCIsXCLEvlwiOlwiJmxjYXJvbjtcIixcIsS8XCI6XCImbGNlZGlsO1wiLFwi0LtcIjpcIiZsY3k7XCIsXCLipLZcIjpcIiZsZGNhO1wiLFwi4qWnXCI6XCImbGRyZGhhcjtcIixcIuKli1wiOlwiJmxkcnVzaGFyO1wiLFwi4oayXCI6XCImbGRzaDtcIixcIuKJpFwiOlwiJmxlcTtcIixcIuKHh1wiOlwiJmxsYXJyO1wiLFwi4ouLXCI6XCImbHRocmVlO1wiLFwi4qqoXCI6XCImbGVzY2M7XCIsXCLiqb9cIjpcIiZsZXNkb3Q7XCIsXCLiqoFcIjpcIiZsZXNkb3RvO1wiLFwi4qqDXCI6XCImbGVzZG90b3I7XCIsXCLii5rvuIBcIjpcIiZsZXNnO1wiLFwi4qqTXCI6XCImbGVzZ2VzO1wiLFwi4ouWXCI6XCImbHRkb3Q7XCIsXCLipbxcIjpcIiZsZmlzaHQ7XCIsXCLwnZSpXCI6XCImbGZyO1wiLFwi4qqRXCI6XCImbGdFO1wiLFwi4qWqXCI6XCImbGhhcnVsO1wiLFwi4paEXCI6XCImbGhibGs7XCIsXCLRmVwiOlwiJmxqY3k7XCIsXCLipatcIjpcIiZsbGhhcmQ7XCIsXCLil7pcIjpcIiZsbHRyaTtcIixcIsWAXCI6XCImbG1pZG90O1wiLFwi4o6wXCI6XCImbG1vdXN0YWNoZTtcIixcIuKJqFwiOlwiJmxuZXFxO1wiLFwi4qqJXCI6XCImbG5hcHByb3g7XCIsXCLiqodcIjpcIiZsbmVxO1wiLFwi4oumXCI6XCImbG5zaW07XCIsXCLin6xcIjpcIiZsb2FuZztcIixcIuKHvVwiOlwiJmxvYXJyO1wiLFwi4p+8XCI6XCImeG1hcDtcIixcIuKGrFwiOlwiJnJhcnJscDtcIixcIuKmhVwiOlwiJmxvcGFyO1wiLFwi8J2VnVwiOlwiJmxvcGY7XCIsXCLiqK1cIjpcIiZsb3BsdXM7XCIsXCLiqLRcIjpcIiZsb3RpbWVzO1wiLFwi4oiXXCI6XCImbG93YXN0O1wiLFwi4peKXCI6XCImbG96ZW5nZTtcIixcIihcIjpcIiZscGFyO1wiLFwi4qaTXCI6XCImbHBhcmx0O1wiLFwi4qWtXCI6XCImbHJoYXJkO1wiLFwi4oCOXCI6XCImbHJtO1wiLFwi4oq/XCI6XCImbHJ0cmk7XCIsXCLigLlcIjpcIiZsc2FxdW87XCIsXCLwnZOBXCI6XCImbHNjcjtcIixcIuKqjVwiOlwiJmxzaW1lO1wiLFwi4qqPXCI6XCImbHNpbWc7XCIsXCLigJpcIjpcIiZzYnF1bztcIixcIsWCXCI6XCImbHN0cm9rO1wiLFwi4qqmXCI6XCImbHRjYztcIixcIuKpuVwiOlwiJmx0Y2lyO1wiLFwi4ouJXCI6XCImbHRpbWVzO1wiLFwi4qW2XCI6XCImbHRsYXJyO1wiLFwi4qm7XCI6XCImbHRxdWVzdDtcIixcIuKmllwiOlwiJmx0clBhcjtcIixcIuKXg1wiOlwiJnRyaWFuZ2xlbGVmdDtcIixcIuKlilwiOlwiJmx1cmRzaGFyO1wiLFwi4qWmXCI6XCImbHVydWhhcjtcIixcIuKJqO+4gFwiOlwiJmx2bkU7XCIsXCLiiLpcIjpcIiZtRERvdDtcIixcIsKvXCI6XCImc3RybnM7XCIsXCLimYJcIjpcIiZtYWxlO1wiLFwi4pygXCI6XCImbWFsdGVzZTtcIixcIuKWrlwiOlwiJm1hcmtlcjtcIixcIuKoqVwiOlwiJm1jb21tYTtcIixcItC8XCI6XCImbWN5O1wiLFwi4oCUXCI6XCImbWRhc2g7XCIsXCLwnZSqXCI6XCImbWZyO1wiLFwi4oSnXCI6XCImbWhvO1wiLFwiwrVcIjpcIiZtaWNybztcIixcIuKrsFwiOlwiJm1pZGNpcjtcIixcIuKIklwiOlwiJm1pbnVzO1wiLFwi4qiqXCI6XCImbWludXNkdTtcIixcIuKrm1wiOlwiJm1sY3A7XCIsXCLiiqdcIjpcIiZtb2RlbHM7XCIsXCLwnZWeXCI6XCImbW9wZjtcIixcIvCdk4JcIjpcIiZtc2NyO1wiLFwizrxcIjpcIiZtdTtcIixcIuKKuFwiOlwiJm11bWFwO1wiLFwi4ouZzLhcIjpcIiZuR2c7XCIsXCLiiavig5JcIjpcIiZuR3Q7XCIsXCLih41cIjpcIiZubEFycjtcIixcIuKHjlwiOlwiJm5oQXJyO1wiLFwi4ouYzLhcIjpcIiZuTGw7XCIsXCLiiarig5JcIjpcIiZuTHQ7XCIsXCLih49cIjpcIiZuckFycjtcIixcIuKKr1wiOlwiJm5WRGFzaDtcIixcIuKKrlwiOlwiJm5WZGFzaDtcIixcIsWEXCI6XCImbmFjdXRlO1wiLFwi4oig4oOSXCI6XCImbmFuZztcIixcIuKpsMy4XCI6XCImbmFwRTtcIixcIuKJi8y4XCI6XCImbmFwaWQ7XCIsXCLFiVwiOlwiJm5hcG9zO1wiLFwi4pmuXCI6XCImbmF0dXJhbDtcIixcIuKpg1wiOlwiJm5jYXA7XCIsXCLFiFwiOlwiJm5jYXJvbjtcIixcIsWGXCI6XCImbmNlZGlsO1wiLFwi4qmtzLhcIjpcIiZuY29uZ2RvdDtcIixcIuKpglwiOlwiJm5jdXA7XCIsXCLQvVwiOlwiJm5jeTtcIixcIuKAk1wiOlwiJm5kYXNoO1wiLFwi4oeXXCI6XCImbmVBcnI7XCIsXCLipKRcIjpcIiZuZWFyaGs7XCIsXCLiiZDMuFwiOlwiJm5lZG90O1wiLFwi4qSoXCI6XCImdG9lYTtcIixcIvCdlKtcIjpcIiZuZnI7XCIsXCLihq5cIjpcIiZubGVmdHJpZ2h0YXJyb3c7XCIsXCLiq7JcIjpcIiZuaHBhcjtcIixcIuKLvFwiOlwiJm5pcztcIixcIuKLulwiOlwiJm5pc2Q7XCIsXCLRmlwiOlwiJm5qY3k7XCIsXCLiiabMuFwiOlwiJm5sZXFxO1wiLFwi4oaaXCI6XCImbmxlZnRhcnJvdztcIixcIuKApVwiOlwiJm5sZHI7XCIsXCLwnZWfXCI6XCImbm9wZjtcIixcIsKsXCI6XCImbm90O1wiLFwi4ou5zLhcIjpcIiZub3RpbkU7XCIsXCLii7XMuFwiOlwiJm5vdGluZG90O1wiLFwi4ou3XCI6XCImbm90aW52YjtcIixcIuKLtlwiOlwiJm5vdGludmM7XCIsXCLii75cIjpcIiZub3RuaXZiO1wiLFwi4ou9XCI6XCImbm90bml2YztcIixcIuKrveKDpVwiOlwiJm5wYXJzbDtcIixcIuKIgsy4XCI6XCImbnBhcnQ7XCIsXCLiqJRcIjpcIiZucG9saW50O1wiLFwi4oabXCI6XCImbnJpZ2h0YXJyb3c7XCIsXCLipLPMuFwiOlwiJm5yYXJyYztcIixcIuKGncy4XCI6XCImbnJhcnJ3O1wiLFwi8J2Tg1wiOlwiJm5zY3I7XCIsXCLiioRcIjpcIiZuc3ViO1wiLFwi4quFzLhcIjpcIiZuc3Vic2V0ZXFxO1wiLFwi4oqFXCI6XCImbnN1cDtcIixcIuKrhsy4XCI6XCImbnN1cHNldGVxcTtcIixcIsOxXCI6XCImbnRpbGRlO1wiLFwizr1cIjpcIiZudTtcIixcIiNcIjpcIiZudW07XCIsXCLihJZcIjpcIiZudW1lcm87XCIsXCLigIdcIjpcIiZudW1zcDtcIixcIuKKrVwiOlwiJm52RGFzaDtcIixcIuKkhFwiOlwiJm52SGFycjtcIixcIuKJjeKDklwiOlwiJm52YXA7XCIsXCLiiqxcIjpcIiZudmRhc2g7XCIsXCLiiaXig5JcIjpcIiZudmdlO1wiLFwiPuKDklwiOlwiJm52Z3Q7XCIsXCLip55cIjpcIiZudmluZmluO1wiLFwi4qSCXCI6XCImbnZsQXJyO1wiLFwi4omk4oOSXCI6XCImbnZsZTtcIixcIjzig5JcIjpcIiZudmx0O1wiLFwi4oq04oOSXCI6XCImbnZsdHJpZTtcIixcIuKkg1wiOlwiJm52ckFycjtcIixcIuKKteKDklwiOlwiJm52cnRyaWU7XCIsXCLiiLzig5JcIjpcIiZudnNpbTtcIixcIuKHllwiOlwiJm53QXJyO1wiLFwi4qSjXCI6XCImbndhcmhrO1wiLFwi4qSnXCI6XCImbnduZWFyO1wiLFwiw7NcIjpcIiZvYWN1dGU7XCIsXCLDtFwiOlwiJm9jaXJjO1wiLFwi0L5cIjpcIiZvY3k7XCIsXCLFkVwiOlwiJm9kYmxhYztcIixcIuKouFwiOlwiJm9kaXY7XCIsXCLiprxcIjpcIiZvZHNvbGQ7XCIsXCLFk1wiOlwiJm9lbGlnO1wiLFwi4qa/XCI6XCImb2ZjaXI7XCIsXCLwnZSsXCI6XCImb2ZyO1wiLFwiy5tcIjpcIiZvZ29uO1wiLFwiw7JcIjpcIiZvZ3JhdmU7XCIsXCLip4FcIjpcIiZvZ3Q7XCIsXCLiprVcIjpcIiZvaGJhcjtcIixcIuKmvlwiOlwiJm9sY2lyO1wiLFwi4qa7XCI6XCImb2xjcm9zcztcIixcIuKngFwiOlwiJm9sdDtcIixcIsWNXCI6XCImb21hY3I7XCIsXCLPiVwiOlwiJm9tZWdhO1wiLFwizr9cIjpcIiZvbWljcm9uO1wiLFwi4qa2XCI6XCImb21pZDtcIixcIvCdlaBcIjpcIiZvb3BmO1wiLFwi4qa3XCI6XCImb3BhcjtcIixcIuKmuVwiOlwiJm9wZXJwO1wiLFwi4oioXCI6XCImdmVlO1wiLFwi4qmdXCI6XCImb3JkO1wiLFwi4oS0XCI6XCImb3NjcjtcIixcIsKqXCI6XCImb3JkZjtcIixcIsK6XCI6XCImb3JkbTtcIixcIuKKtlwiOlwiJm9yaWdvZjtcIixcIuKpllwiOlwiJm9yb3I7XCIsXCLiqZdcIjpcIiZvcnNsb3BlO1wiLFwi4qmbXCI6XCImb3J2O1wiLFwiw7hcIjpcIiZvc2xhc2g7XCIsXCLiiphcIjpcIiZvc29sO1wiLFwiw7VcIjpcIiZvdGlsZGU7XCIsXCLiqLZcIjpcIiZvdGltZXNhcztcIixcIsO2XCI6XCImb3VtbDtcIixcIuKMvVwiOlwiJm92YmFyO1wiLFwiwrZcIjpcIiZwYXJhO1wiLFwi4quzXCI6XCImcGFyc2ltO1wiLFwi4qu9XCI6XCImcGFyc2w7XCIsXCLQv1wiOlwiJnBjeTtcIixcIiVcIjpcIiZwZXJjbnQ7XCIsXCIuXCI6XCImcGVyaW9kO1wiLFwi4oCwXCI6XCImcGVybWlsO1wiLFwi4oCxXCI6XCImcGVydGVuaztcIixcIvCdlK1cIjpcIiZwZnI7XCIsXCLPhlwiOlwiJnBoaTtcIixcIs+VXCI6XCImdmFycGhpO1wiLFwi4piOXCI6XCImcGhvbmU7XCIsXCLPgFwiOlwiJnBpO1wiLFwiz5ZcIjpcIiZ2YXJwaTtcIixcIuKEjlwiOlwiJnBsYW5ja2g7XCIsXCIrXCI6XCImcGx1cztcIixcIuKoo1wiOlwiJnBsdXNhY2lyO1wiLFwi4qiiXCI6XCImcGx1c2NpcjtcIixcIuKopVwiOlwiJnBsdXNkdTtcIixcIuKpslwiOlwiJnBsdXNlO1wiLFwi4qimXCI6XCImcGx1c3NpbTtcIixcIuKop1wiOlwiJnBsdXN0d287XCIsXCLiqJVcIjpcIiZwb2ludGludDtcIixcIvCdlaFcIjpcIiZwb3BmO1wiLFwiwqNcIjpcIiZwb3VuZDtcIixcIuKqs1wiOlwiJnByRTtcIixcIuKqt1wiOlwiJnByZWNhcHByb3g7XCIsXCLiqrlcIjpcIiZwcm5hcDtcIixcIuKqtVwiOlwiJnBybkU7XCIsXCLii6hcIjpcIiZwcm5zaW07XCIsXCLigLJcIjpcIiZwcmltZTtcIixcIuKMrlwiOlwiJnByb2ZhbGFyO1wiLFwi4oySXCI6XCImcHJvZmxpbmU7XCIsXCLijJNcIjpcIiZwcm9mc3VyZjtcIixcIuKKsFwiOlwiJnBydXJlbDtcIixcIvCdk4VcIjpcIiZwc2NyO1wiLFwiz4hcIjpcIiZwc2k7XCIsXCLigIhcIjpcIiZwdW5jc3A7XCIsXCLwnZSuXCI6XCImcWZyO1wiLFwi8J2VolwiOlwiJnFvcGY7XCIsXCLigZdcIjpcIiZxcHJpbWU7XCIsXCLwnZOGXCI6XCImcXNjcjtcIixcIuKollwiOlwiJnF1YXRpbnQ7XCIsXCI/XCI6XCImcXVlc3Q7XCIsXCLipJxcIjpcIiZyQXRhaWw7XCIsXCLipaRcIjpcIiZySGFyO1wiLFwi4oi9zLFcIjpcIiZyYWNlO1wiLFwixZVcIjpcIiZyYWN1dGU7XCIsXCLiprNcIjpcIiZyYWVtcHR5djtcIixcIuKmklwiOlwiJnJhbmdkO1wiLFwi4qalXCI6XCImcmFuZ2U7XCIsXCLCu1wiOlwiJnJhcXVvO1wiLFwi4qW1XCI6XCImcmFycmFwO1wiLFwi4qSgXCI6XCImcmFycmJmcztcIixcIuKks1wiOlwiJnJhcnJjO1wiLFwi4qSeXCI6XCImcmFycmZzO1wiLFwi4qWFXCI6XCImcmFycnBsO1wiLFwi4qW0XCI6XCImcmFycnNpbTtcIixcIuKGo1wiOlwiJnJpZ2h0YXJyb3d0YWlsO1wiLFwi4oadXCI6XCImcmlnaHRzcXVpZ2Fycm93O1wiLFwi4qSaXCI6XCImcmF0YWlsO1wiLFwi4oi2XCI6XCImcmF0aW87XCIsXCLinbNcIjpcIiZyYmJyaztcIixcIn1cIjpcIiZyY3ViO1wiLFwiXVwiOlwiJnJzcWI7XCIsXCLipoxcIjpcIiZyYnJrZTtcIixcIuKmjlwiOlwiJnJicmtzbGQ7XCIsXCLippBcIjpcIiZyYnJrc2x1O1wiLFwixZlcIjpcIiZyY2Fyb247XCIsXCLFl1wiOlwiJnJjZWRpbDtcIixcItGAXCI6XCImcmN5O1wiLFwi4qS3XCI6XCImcmRjYTtcIixcIuKlqVwiOlwiJnJkbGRoYXI7XCIsXCLihrNcIjpcIiZyZHNoO1wiLFwi4patXCI6XCImcmVjdDtcIixcIuKlvVwiOlwiJnJmaXNodDtcIixcIvCdlK9cIjpcIiZyZnI7XCIsXCLipaxcIjpcIiZyaGFydWw7XCIsXCLPgVwiOlwiJnJobztcIixcIs+xXCI6XCImdmFycmhvO1wiLFwi4oeJXCI6XCImcnJhcnI7XCIsXCLii4xcIjpcIiZydGhyZWU7XCIsXCLLmlwiOlwiJnJpbmc7XCIsXCLigI9cIjpcIiZybG07XCIsXCLijrFcIjpcIiZybW91c3RhY2hlO1wiLFwi4quuXCI6XCImcm5taWQ7XCIsXCLin61cIjpcIiZyb2FuZztcIixcIuKHvlwiOlwiJnJvYXJyO1wiLFwi4qaGXCI6XCImcm9wYXI7XCIsXCLwnZWjXCI6XCImcm9wZjtcIixcIuKorlwiOlwiJnJvcGx1cztcIixcIuKotVwiOlwiJnJvdGltZXM7XCIsXCIpXCI6XCImcnBhcjtcIixcIuKmlFwiOlwiJnJwYXJndDtcIixcIuKoklwiOlwiJnJwcG9saW50O1wiLFwi4oC6XCI6XCImcnNhcXVvO1wiLFwi8J2Th1wiOlwiJnJzY3I7XCIsXCLii4pcIjpcIiZydGltZXM7XCIsXCLilrlcIjpcIiZ0cmlhbmdsZXJpZ2h0O1wiLFwi4qeOXCI6XCImcnRyaWx0cmk7XCIsXCLipahcIjpcIiZydWx1aGFyO1wiLFwi4oSeXCI6XCImcng7XCIsXCLFm1wiOlwiJnNhY3V0ZTtcIixcIuKqtFwiOlwiJnNjRTtcIixcIuKquFwiOlwiJnN1Y2NhcHByb3g7XCIsXCLFoVwiOlwiJnNjYXJvbjtcIixcIsWfXCI6XCImc2NlZGlsO1wiLFwixZ1cIjpcIiZzY2lyYztcIixcIuKqtlwiOlwiJnN1Y2NuZXFxO1wiLFwi4qq6XCI6XCImc3VjY25hcHByb3g7XCIsXCLii6lcIjpcIiZzdWNjbnNpbTtcIixcIuKok1wiOlwiJnNjcG9saW50O1wiLFwi0YFcIjpcIiZzY3k7XCIsXCLii4VcIjpcIiZzZG90O1wiLFwi4qmmXCI6XCImc2RvdGU7XCIsXCLih5hcIjpcIiZzZUFycjtcIixcIsKnXCI6XCImc2VjdDtcIixcIjtcIjpcIiZzZW1pO1wiLFwi4qSpXCI6XCImdG9zYTtcIixcIuKctlwiOlwiJnNleHQ7XCIsXCLwnZSwXCI6XCImc2ZyO1wiLFwi4pmvXCI6XCImc2hhcnA7XCIsXCLRiVwiOlwiJnNoY2hjeTtcIixcItGIXCI6XCImc2hjeTtcIixcIsKtXCI6XCImc2h5O1wiLFwiz4NcIjpcIiZzaWdtYTtcIixcIs+CXCI6XCImdmFyc2lnbWE7XCIsXCLiqapcIjpcIiZzaW1kb3Q7XCIsXCLiqp5cIjpcIiZzaW1nO1wiLFwi4qqgXCI6XCImc2ltZ0U7XCIsXCLiqp1cIjpcIiZzaW1sO1wiLFwi4qqfXCI6XCImc2ltbEU7XCIsXCLiiYZcIjpcIiZzaW1uZTtcIixcIuKopFwiOlwiJnNpbXBsdXM7XCIsXCLipbJcIjpcIiZzaW1yYXJyO1wiLFwi4qizXCI6XCImc21hc2hwO1wiLFwi4qekXCI6XCImc21lcGFyc2w7XCIsXCLijKNcIjpcIiZzc21pbGU7XCIsXCLiqqpcIjpcIiZzbXQ7XCIsXCLiqqxcIjpcIiZzbXRlO1wiLFwi4qqs77iAXCI6XCImc210ZXM7XCIsXCLRjFwiOlwiJnNvZnRjeTtcIixcIi9cIjpcIiZzb2w7XCIsXCLip4RcIjpcIiZzb2xiO1wiLFwi4oy/XCI6XCImc29sYmFyO1wiLFwi8J2VpFwiOlwiJnNvcGY7XCIsXCLimaBcIjpcIiZzcGFkZXN1aXQ7XCIsXCLiipPvuIBcIjpcIiZzcWNhcHM7XCIsXCLiipTvuIBcIjpcIiZzcWN1cHM7XCIsXCLwnZOIXCI6XCImc3NjcjtcIixcIuKYhlwiOlwiJnN0YXI7XCIsXCLiioJcIjpcIiZzdWJzZXQ7XCIsXCLiq4VcIjpcIiZzdWJzZXRlcXE7XCIsXCLiqr1cIjpcIiZzdWJkb3Q7XCIsXCLiq4NcIjpcIiZzdWJlZG90O1wiLFwi4quBXCI6XCImc3VibXVsdDtcIixcIuKri1wiOlwiJnN1YnNldG5lcXE7XCIsXCLiiopcIjpcIiZzdWJzZXRuZXE7XCIsXCLiqr9cIjpcIiZzdWJwbHVzO1wiLFwi4qW5XCI6XCImc3VicmFycjtcIixcIuKrh1wiOlwiJnN1YnNpbTtcIixcIuKrlVwiOlwiJnN1YnN1YjtcIixcIuKrk1wiOlwiJnN1YnN1cDtcIixcIuKZqlwiOlwiJnN1bmc7XCIsXCLCuVwiOlwiJnN1cDE7XCIsXCLCslwiOlwiJnN1cDI7XCIsXCLCs1wiOlwiJnN1cDM7XCIsXCLiq4ZcIjpcIiZzdXBzZXRlcXE7XCIsXCLiqr5cIjpcIiZzdXBkb3Q7XCIsXCLiq5hcIjpcIiZzdXBkc3ViO1wiLFwi4quEXCI6XCImc3VwZWRvdDtcIixcIuKfiVwiOlwiJnN1cGhzb2w7XCIsXCLiq5dcIjpcIiZzdXBoc3ViO1wiLFwi4qW7XCI6XCImc3VwbGFycjtcIixcIuKrglwiOlwiJnN1cG11bHQ7XCIsXCLiq4xcIjpcIiZzdXBzZXRuZXFxO1wiLFwi4oqLXCI6XCImc3Vwc2V0bmVxO1wiLFwi4quAXCI6XCImc3VwcGx1cztcIixcIuKriFwiOlwiJnN1cHNpbTtcIixcIuKrlFwiOlwiJnN1cHN1YjtcIixcIuKrllwiOlwiJnN1cHN1cDtcIixcIuKHmVwiOlwiJnN3QXJyO1wiLFwi4qSqXCI6XCImc3dud2FyO1wiLFwiw59cIjpcIiZzemxpZztcIixcIuKMllwiOlwiJnRhcmdldDtcIixcIs+EXCI6XCImdGF1O1wiLFwixaVcIjpcIiZ0Y2Fyb247XCIsXCLFo1wiOlwiJnRjZWRpbDtcIixcItGCXCI6XCImdGN5O1wiLFwi4oyVXCI6XCImdGVscmVjO1wiLFwi8J2UsVwiOlwiJnRmcjtcIixcIs64XCI6XCImdGhldGE7XCIsXCLPkVwiOlwiJnZhcnRoZXRhO1wiLFwiw75cIjpcIiZ0aG9ybjtcIixcIsOXXCI6XCImdGltZXM7XCIsXCLiqLFcIjpcIiZ0aW1lc2JhcjtcIixcIuKosFwiOlwiJnRpbWVzZDtcIixcIuKMtlwiOlwiJnRvcGJvdDtcIixcIuKrsVwiOlwiJnRvcGNpcjtcIixcIvCdlaVcIjpcIiZ0b3BmO1wiLFwi4quaXCI6XCImdG9wZm9yaztcIixcIuKAtFwiOlwiJnRwcmltZTtcIixcIuKWtVwiOlwiJnV0cmk7XCIsXCLiiZxcIjpcIiZ0cmllO1wiLFwi4pesXCI6XCImdHJpZG90O1wiLFwi4qi6XCI6XCImdHJpbWludXM7XCIsXCLiqLlcIjpcIiZ0cmlwbHVzO1wiLFwi4qeNXCI6XCImdHJpc2I7XCIsXCLiqLtcIjpcIiZ0cml0aW1lO1wiLFwi4o+iXCI6XCImdHJwZXppdW07XCIsXCLwnZOJXCI6XCImdHNjcjtcIixcItGGXCI6XCImdHNjeTtcIixcItGbXCI6XCImdHNoY3k7XCIsXCLFp1wiOlwiJnRzdHJvaztcIixcIuKlo1wiOlwiJnVIYXI7XCIsXCLDulwiOlwiJnVhY3V0ZTtcIixcItGeXCI6XCImdWJyY3k7XCIsXCLFrVwiOlwiJnVicmV2ZTtcIixcIsO7XCI6XCImdWNpcmM7XCIsXCLRg1wiOlwiJnVjeTtcIixcIsWxXCI6XCImdWRibGFjO1wiLFwi4qW+XCI6XCImdWZpc2h0O1wiLFwi8J2UslwiOlwiJnVmcjtcIixcIsO5XCI6XCImdWdyYXZlO1wiLFwi4paAXCI6XCImdWhibGs7XCIsXCLijJxcIjpcIiZ1bGNvcm5lcjtcIixcIuKMj1wiOlwiJnVsY3JvcDtcIixcIuKXuFwiOlwiJnVsdHJpO1wiLFwixatcIjpcIiZ1bWFjcjtcIixcIsWzXCI6XCImdW9nb247XCIsXCLwnZWmXCI6XCImdW9wZjtcIixcIs+FXCI6XCImdXBzaWxvbjtcIixcIuKHiFwiOlwiJnV1YXJyO1wiLFwi4oydXCI6XCImdXJjb3JuZXI7XCIsXCLijI5cIjpcIiZ1cmNyb3A7XCIsXCLFr1wiOlwiJnVyaW5nO1wiLFwi4pe5XCI6XCImdXJ0cmk7XCIsXCLwnZOKXCI6XCImdXNjcjtcIixcIuKLsFwiOlwiJnV0ZG90O1wiLFwixalcIjpcIiZ1dGlsZGU7XCIsXCLDvFwiOlwiJnV1bWw7XCIsXCLipqdcIjpcIiZ1d2FuZ2xlO1wiLFwi4quoXCI6XCImdkJhcjtcIixcIuKrqVwiOlwiJnZCYXJ2O1wiLFwi4qacXCI6XCImdmFuZ3J0O1wiLFwi4oqK77iAXCI6XCImdnN1Ym5lO1wiLFwi4quL77iAXCI6XCImdnN1Ym5FO1wiLFwi4oqL77iAXCI6XCImdnN1cG5lO1wiLFwi4quM77iAXCI6XCImdnN1cG5FO1wiLFwi0LJcIjpcIiZ2Y3k7XCIsXCLiirtcIjpcIiZ2ZWViYXI7XCIsXCLiiZpcIjpcIiZ2ZWVlcTtcIixcIuKLrlwiOlwiJnZlbGxpcDtcIixcIvCdlLNcIjpcIiZ2ZnI7XCIsXCLwnZWnXCI6XCImdm9wZjtcIixcIvCdk4tcIjpcIiZ2c2NyO1wiLFwi4qaaXCI6XCImdnppZ3phZztcIixcIsW1XCI6XCImd2NpcmM7XCIsXCLiqZ9cIjpcIiZ3ZWRiYXI7XCIsXCLiiZlcIjpcIiZ3ZWRnZXE7XCIsXCLihJhcIjpcIiZ3cDtcIixcIvCdlLRcIjpcIiZ3ZnI7XCIsXCLwnZWoXCI6XCImd29wZjtcIixcIvCdk4xcIjpcIiZ3c2NyO1wiLFwi8J2UtVwiOlwiJnhmcjtcIixcIs6+XCI6XCImeGk7XCIsXCLii7tcIjpcIiZ4bmlzO1wiLFwi8J2VqVwiOlwiJnhvcGY7XCIsXCLwnZONXCI6XCImeHNjcjtcIixcIsO9XCI6XCImeWFjdXRlO1wiLFwi0Y9cIjpcIiZ5YWN5O1wiLFwixbdcIjpcIiZ5Y2lyYztcIixcItGLXCI6XCImeWN5O1wiLFwiwqVcIjpcIiZ5ZW47XCIsXCLwnZS2XCI6XCImeWZyO1wiLFwi0ZdcIjpcIiZ5aWN5O1wiLFwi8J2VqlwiOlwiJnlvcGY7XCIsXCLwnZOOXCI6XCImeXNjcjtcIixcItGOXCI6XCImeXVjeTtcIixcIsO/XCI6XCImeXVtbDtcIixcIsW6XCI6XCImemFjdXRlO1wiLFwixb5cIjpcIiZ6Y2Fyb247XCIsXCLQt1wiOlwiJnpjeTtcIixcIsW8XCI6XCImemRvdDtcIixcIs62XCI6XCImemV0YTtcIixcIvCdlLdcIjpcIiZ6ZnI7XCIsXCLQtlwiOlwiJnpoY3k7XCIsXCLih51cIjpcIiZ6aWdyYXJyO1wiLFwi8J2Vq1wiOlwiJnpvcGY7XCIsXCLwnZOPXCI6XCImenNjcjtcIixcIuKAjVwiOlwiJnp3ajtcIixcIuKAjFwiOlwiJnp3bmo7XCJ9fX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD0uL25hbWVkLXJlZmVyZW5jZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOnRydWV9KTtleHBvcnRzLm51bWVyaWNVbmljb2RlTWFwPXswOjY1NTMzLDEyODo4MzY0LDEzMDo4MjE4LDEzMTo0MDIsMTMyOjgyMjIsMTMzOjgyMzAsMTM0OjgyMjQsMTM1OjgyMjUsMTM2OjcxMCwxMzc6ODI0MCwxMzg6MzUyLDEzOTo4MjQ5LDE0MDozMzgsMTQyOjM4MSwxNDU6ODIxNiwxNDY6ODIxNywxNDc6ODIyMCwxNDg6ODIyMSwxNDk6ODIyNiwxNTA6ODIxMSwxNTE6ODIxMiwxNTI6NzMyLDE1Mzo4NDgyLDE1NDozNTMsMTU1OjgyNTAsMTU2OjMzOSwxNTg6MzgyLDE1OTozNzZ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Li9udW1lcmljLXVuaWNvZGUtbWFwLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5mcm9tQ29kZVBvaW50PVN0cmluZy5mcm9tQ29kZVBvaW50fHxmdW5jdGlvbihhc3RyYWxDb2RlUG9pbnQpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoKGFzdHJhbENvZGVQb2ludC02NTUzNikvMTAyNCkrNTUyOTYsKGFzdHJhbENvZGVQb2ludC02NTUzNiklMTAyNCs1NjMyMCl9O2V4cG9ydHMuZ2V0Q29kZVBvaW50PVN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQ/ZnVuY3Rpb24oaW5wdXQscG9zaXRpb24pe3JldHVybiBpbnB1dC5jb2RlUG9pbnRBdChwb3NpdGlvbil9OmZ1bmN0aW9uKGlucHV0LHBvc2l0aW9uKXtyZXR1cm4oaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbiktNTUyOTYpKjEwMjQraW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbisxKS01NjMyMCs2NTUzNn07ZXhwb3J0cy5oaWdoU3Vycm9nYXRlRnJvbT01NTI5NjtleHBvcnRzLmhpZ2hTdXJyb2dhdGVUbz01NjMxOTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPS4vc3Vycm9nYXRlLXBhaXJzLmpzLm1hcCIsIi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnkgV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8vIFNlbmQgbWVzc2FnZXMgdG8gdGhlIG91dHNpZGUsIHNvIHBsdWdpbnMgY2FuIGNvbnN1bWUgaXQuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7YW55fSBbZGF0YV1cbiAqL1xuZnVuY3Rpb24gc2VuZE1zZyh0eXBlLCBkYXRhKSB7XG4gIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAodHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlID09PSBcInVuZGVmaW5lZFwiIHx8ICEoc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSkpIHtcbiAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwid2VicGFja1wiLmNvbmNhdCh0eXBlKSxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9LCBcIipcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VuZE1zZzsiLCJpbXBvcnQgaG90RW1pdHRlciBmcm9tIFwid2VicGFjay9ob3QvZW1pdHRlci5qc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nLmpzXCI7XG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uL2luZGV4XCIpLk9wdGlvbnN9IE9wdGlvbnNcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vaW5kZXhcIikuU3RhdHVzfSBTdGF0dXNcblxuLyoqXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RhdHVzfSBzdGF0dXNcbiAqL1xuXG5mdW5jdGlvbiByZWxvYWRBcHAoX3JlZiwgc3RhdHVzKSB7XG4gIHZhciBob3QgPSBfcmVmLmhvdCxcbiAgICAgIGxpdmVSZWxvYWQgPSBfcmVmLmxpdmVSZWxvYWQ7XG5cbiAgaWYgKHN0YXR1cy5pc1VubG9hZGluZykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjdXJyZW50SGFzaCA9IHN0YXR1cy5jdXJyZW50SGFzaCxcbiAgICAgIHByZXZpb3VzSGFzaCA9IHN0YXR1cy5wcmV2aW91c0hhc2g7XG4gIHZhciBpc0luaXRpYWwgPSBjdXJyZW50SGFzaC5pbmRleE9mKFxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgcHJldmlvdXNIYXNoKSA+PSAwO1xuXG4gIGlmIChpc0luaXRpYWwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2luZG93fSByb290V2luZG93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbElkXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgbG9nLmluZm8oXCJBcHAgdXBkYXRlZC4gUmVsb2FkaW5nLi4uXCIpO1xuICAgIHJvb3RXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICB2YXIgc2VhcmNoID0gc2VsZi5sb2NhdGlvbi5zZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsbG93VG9Ib3QgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1ob3Q9ZmFsc2VcIikgPT09IC0xO1xuICB2YXIgYWxsb3dUb0xpdmVSZWxvYWQgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1saXZlLXJlbG9hZD1mYWxzZVwiKSA9PT0gLTE7XG5cbiAgaWYgKGhvdCAmJiBhbGxvd1RvSG90KSB7XG4gICAgbG9nLmluZm8oXCJBcHAgaG90IHVwZGF0ZS4uLlwiKTtcbiAgICBob3RFbWl0dGVyLmVtaXQoXCJ3ZWJwYWNrSG90VXBkYXRlXCIsIHN0YXR1cy5jdXJyZW50SGFzaCk7XG5cbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi53aW5kb3cpIHtcbiAgICAgIC8vIGJyb2FkY2FzdCB1cGRhdGUgdG8gd2luZG93XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKFwid2VicGFja0hvdFVwZGF0ZVwiLmNvbmNhdChzdGF0dXMuY3VycmVudEhhc2gpLCBcIipcIik7XG4gICAgfVxuICB9IC8vIGFsbG93IHJlZnJlc2hpbmcgdGhlIHBhZ2Ugb25seSBpZiBsaXZlUmVsb2FkIGlzbid0IGRpc2FibGVkXG4gIGVsc2UgaWYgKGxpdmVSZWxvYWQgJiYgYWxsb3dUb0xpdmVSZWxvYWQpIHtcbiAgICB2YXIgcm9vdFdpbmRvdyA9IHNlbGY7IC8vIHVzZSBwYXJlbnQgd2luZG93IGZvciByZWxvYWQgKGluIGNhc2Ugd2UncmUgaW4gYW4gaWZyYW1lIHdpdGggbm8gdmFsaWQgc3JjKVxuXG4gICAgdmFyIGludGVydmFsSWQgPSBzZWxmLnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyb290V2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSBcImFib3V0OlwiKSB7XG4gICAgICAgIC8vIHJlbG9hZCBpbW1lZGlhdGVseSBpZiBwcm90b2NvbCBpcyB2YWxpZFxuICAgICAgICBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RXaW5kb3cgPSByb290V2luZG93LnBhcmVudDtcblxuICAgICAgICBpZiAocm9vdFdpbmRvdy5wYXJlbnQgPT09IHJvb3RXaW5kb3cpIHtcbiAgICAgICAgICAvLyBpZiBwYXJlbnQgZXF1YWxzIGN1cnJlbnQgd2luZG93IHdlJ3ZlIHJlYWNoZWQgdGhlIHJvb3Qgd2hpY2ggd291bGQgY29udGludWUgZm9yZXZlciwgc28gdHJpZ2dlciBhIHJlbG9hZCBhbnl3YXlzXG4gICAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWxvYWRBcHA7IiwidmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCIvKipcbiAqIEBwYXJhbSB7eyBwcm90b2NvbD86IHN0cmluZywgYXV0aD86IHN0cmluZywgaG9zdG5hbWU/OiBzdHJpbmcsIHBvcnQ/OiBzdHJpbmcsIHBhdGhuYW1lPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGhhc2g/OiBzdHJpbmcsIHNsYXNoZXM/OiBib29sZWFuIH19IG9ialVSTFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZm9ybWF0KG9ialVSTCkge1xuICB2YXIgcHJvdG9jb2wgPSBvYmpVUkwucHJvdG9jb2wgfHwgXCJcIjtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gXCI6XCIpIHtcbiAgICBwcm90b2NvbCArPSBcIjpcIjtcbiAgfVxuXG4gIHZhciBhdXRoID0gb2JqVVJMLmF1dGggfHwgXCJcIjtcblxuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksIFwiOlwiKTtcbiAgICBhdXRoICs9IFwiQFwiO1xuICB9XG5cbiAgdmFyIGhvc3QgPSBcIlwiO1xuXG4gIGlmIChvYmpVUkwuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArIChvYmpVUkwuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgPT09IC0xID8gb2JqVVJMLmhvc3RuYW1lIDogXCJbXCIuY29uY2F0KG9ialVSTC5ob3N0bmFtZSwgXCJdXCIpKTtcblxuICAgIGlmIChvYmpVUkwucG9ydCkge1xuICAgICAgaG9zdCArPSBcIjpcIi5jb25jYXQob2JqVVJMLnBvcnQpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IG9ialVSTC5wYXRobmFtZSB8fCBcIlwiO1xuXG4gIGlmIChvYmpVUkwuc2xhc2hlcykge1xuICAgIGhvc3QgPSBcIi8vXCIuY29uY2F0KGhvc3QgfHwgXCJcIik7XG5cbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSBcIi9cIikge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIi5jb25jYXQocGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSBcIlwiO1xuICB9XG5cbiAgdmFyIHNlYXJjaCA9IG9ialVSTC5zZWFyY2ggfHwgXCJcIjtcblxuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09IFwiP1wiKSB7XG4gICAgc2VhcmNoID0gXCI/XCIuY29uY2F0KHNlYXJjaCk7XG4gIH1cblxuICB2YXIgaGFzaCA9IG9ialVSTC5oYXNoIHx8IFwiXCI7XG5cbiAgaWYgKGhhc2ggJiYgaGFzaC5jaGFyQXQoMCkgIT09IFwiI1wiKSB7XG4gICAgaGFzaCA9IFwiI1wiLmNvbmNhdChoYXNoKTtcbiAgfVxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKFwiI1wiLCBcIiUyM1wiKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3RvY29sKS5jb25jYXQoaG9zdCkuY29uY2F0KHBhdGhuYW1lKS5jb25jYXQoc2VhcmNoKS5jb25jYXQoaGFzaCk7XG59XG4vKipcbiAqIEBwYXJhbSB7VVJMICYgeyBmcm9tQ3VycmVudFNjcmlwdD86IGJvb2xlYW4gfX0gcGFyc2VkVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFVSTCkge1xuICB2YXIgaG9zdG5hbWUgPSBwYXJzZWRVUkwuaG9zdG5hbWU7IC8vIE5vZGUuanMgbW9kdWxlIHBhcnNlcyBpdCBhcyBgOjpgXG4gIC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxTdHJpbmddKWAgcGFyc2VzIGl0IGFzICdbOjpdJ1xuXG4gIHZhciBpc0luQWRkckFueSA9IGhvc3RuYW1lID09PSBcIjAuMC4wLjBcIiB8fCBob3N0bmFtZSA9PT0gXCI6OlwiIHx8IGhvc3RuYW1lID09PSBcIls6Ol1cIjsgLy8gd2h5IGRvIHdlIG5lZWQgdGhpcyBjaGVjaz9cbiAgLy8gaG9zdG5hbWUgbi9hIGZvciBmaWxlIHByb3RvY29sIChleGFtcGxlLCB3aGVuIHVzaW5nIGVsZWN0cm9uLCBpb25pYylcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay93ZWJwYWNrLWRldi1zZXJ2ZXIvcHVsbC8zODRcblxuICBpZiAoaXNJbkFkZHJBbnkgJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiBzZWxmLmxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpID09PSAwKSB7XG4gICAgaG9zdG5hbWUgPSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lO1xuICB9XG5cbiAgdmFyIHNvY2tldFVSTFByb3RvY29sID0gcGFyc2VkVVJMLnByb3RvY29sIHx8IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7IC8vIFdoZW4gaHR0cHMgaXMgdXNlZCBpbiB0aGUgYXBwLCBzZWN1cmUgd2ViIHNvY2tldHMgYXJlIGFsd2F5cyBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgYnJvd3NlciBkb2Vzbid0IGFjY2VwdCBub24tc2VjdXJlIHdlYiBzb2NrZXRzLlxuXG4gIGlmIChzb2NrZXRVUkxQcm90b2NvbCA9PT0gXCJhdXRvOlwiIHx8IGhvc3RuYW1lICYmIGlzSW5BZGRyQW55ICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICBzb2NrZXRVUkxQcm90b2NvbCA9IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG4gIH1cblxuICBzb2NrZXRVUkxQcm90b2NvbCA9IHNvY2tldFVSTFByb3RvY29sLnJlcGxhY2UoL14oPzpodHRwfC4rLWV4dGVuc2lvbnxmaWxlKS9pLCBcIndzXCIpO1xuICB2YXIgc29ja2V0VVJMQXV0aCA9IFwiXCI7IC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxzdHJpbmddKWAgZG9lc24ndCBoYXZlIGBhdXRoYCBwcm9wZXJ0eVxuICAvLyBQYXJzZSBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBpbiBjYXNlIHdlIG5lZWQgdGhlbVxuXG4gIGlmIChwYXJzZWRVUkwudXNlcm5hbWUpIHtcbiAgICBzb2NrZXRVUkxBdXRoID0gcGFyc2VkVVJMLnVzZXJuYW1lOyAvLyBTaW5jZSBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uIGRvZXMgbm90IGFsbG93IGVtcHR5IHVzZXJuYW1lLFxuICAgIC8vIHdlIG9ubHkgaW5jbHVkZSBwYXNzd29yZCBpZiB0aGUgdXNlcm5hbWUgaXMgbm90IGVtcHR5LlxuXG4gICAgaWYgKHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgLy8gUmVzdWx0OiA8dXNlcm5hbWU+OjxwYXNzd29yZD5cbiAgICAgIHNvY2tldFVSTEF1dGggPSBzb2NrZXRVUkxBdXRoLmNvbmNhdChcIjpcIiwgcGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICB9XG4gIH0gLy8gSW4gY2FzZSB0aGUgaG9zdCBpcyBhIHJhdyBJUHY2IGFkZHJlc3MsIGl0IGNhbiBiZSBlbmNsb3NlZCBpblxuICAvLyB0aGUgYnJhY2tldHMgYXMgdGhlIGJyYWNrZXRzIGFyZSBuZWVkZWQgaW4gdGhlIGZpbmFsIFVSTCBzdHJpbmcuXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHRob3NlIGFzIHVybC5mb3JtYXQgYmxpbmRseSBhZGRzIGl0cyBvd24gc2V0IG9mIGJyYWNrZXRzXG4gIC8vIGlmIHRoZSBob3N0IHN0cmluZyBjb250YWlucyBjb2xvbnMuIFRoYXQgd291bGQgbGVhZCB0byBub24td29ya2luZ1xuICAvLyBkb3VibGUgYnJhY2tldHMgKGUuZy4gW1s6Ol1dKSBob3N0XG4gIC8vXG4gIC8vIEFsbCBvZiB0aGVzZSB3ZWIgc29ja2V0IHVybCBwYXJhbXMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIGluIHRocm91Z2ggcmVzb3VyY2VRdWVyeSxcbiAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkXG5cblxuICB2YXIgc29ja2V0VVJMSG9zdG5hbWUgPSAoaG9zdG5hbWUgfHwgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiKS5yZXBsYWNlKC9eXFxbKC4qKVxcXSQvLCBcIiQxXCIpO1xuICB2YXIgc29ja2V0VVJMUG9ydCA9IHBhcnNlZFVSTC5wb3J0O1xuXG4gIGlmICghc29ja2V0VVJMUG9ydCB8fCBzb2NrZXRVUkxQb3J0ID09PSBcIjBcIikge1xuICAgIHNvY2tldFVSTFBvcnQgPSBzZWxmLmxvY2F0aW9uLnBvcnQ7XG4gIH0gLy8gSWYgcGF0aCBpcyBwcm92aWRlZCBpdCdsbCBiZSBwYXNzZWQgaW4gdmlhIHRoZSByZXNvdXJjZVF1ZXJ5IGFzIGFcbiAgLy8gcXVlcnkgcGFyYW0gc28gaXQgaGFzIHRvIGJlIHBhcnNlZCBvdXQgb2YgdGhlIHF1ZXJ5c3RyaW5nIGluIG9yZGVyIGZvciB0aGVcbiAgLy8gY2xpZW50IHRvIG9wZW4gdGhlIHNvY2tldCB0byB0aGUgY29ycmVjdCBsb2NhdGlvbi5cblxuXG4gIHZhciBzb2NrZXRVUkxQYXRobmFtZSA9IFwiL3dzXCI7XG5cbiAgaWYgKHBhcnNlZFVSTC5wYXRobmFtZSAmJiAhcGFyc2VkVVJMLmZyb21DdXJyZW50U2NyaXB0KSB7XG4gICAgc29ja2V0VVJMUGF0aG5hbWUgPSBwYXJzZWRVUkwucGF0aG5hbWU7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHtcbiAgICBwcm90b2NvbDogc29ja2V0VVJMUHJvdG9jb2wsXG4gICAgYXV0aDogc29ja2V0VVJMQXV0aCxcbiAgICBob3N0bmFtZTogc29ja2V0VVJMSG9zdG5hbWUsXG4gICAgcG9ydDogc29ja2V0VVJMUG9ydCxcbiAgICBwYXRobmFtZTogc29ja2V0VVJMUGF0aG5hbWUsXG4gICAgc2xhc2hlczogdHJ1ZVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU29ja2V0VVJMOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdC8qKiBAdHlwZSB7dW5kZWZpbmVkfHN0cmluZ30gKi9cblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChsYXN0SGFzaCkuaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZS4gXCIgK1xuXHRcdFx0XHRcdFx0XHQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiUGxlYXNlIHJlbG9hZCBtYW51YWxseSFcIilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGNoZWNrKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cblx0XHRcdFx0aWYgKHVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQXBwIGlzIHVwIHRvIGRhdGUuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS4gXCIgK1xuXHRcdFx0XHRcdFx0XHQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiUGxlYXNlIHJlbG9hZCBtYW51YWxseSFcIilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gVXBkYXRlIGZhaWxlZDogXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXHR2YXIgaG90RW1pdHRlciA9IHJlcXVpcmUoXCIuL2VtaXR0ZXJcIik7XG5cdGhvdEVtaXR0ZXIub24oXCJ3ZWJwYWNrSG90VXBkYXRlXCIsIGZ1bmN0aW9uIChjdXJyZW50SGFzaCkge1xuXHRcdGxhc3RIYXNoID0gY3VycmVudEhhc2g7XG5cdFx0aWYgKCF1cFRvRGF0ZSgpICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgb24gdGhlIHNlcnZlci4uLlwiKTtcblx0XHRcdGNoZWNrKCk7XG5cdFx0fVxuXHR9KTtcblx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFdhaXRpbmcgZm9yIHVwZGF0ZSBzaWduYWwgZnJvbSBXRFMuLi5cIik7XG59IGVsc2Uge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbi8qKlxuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdfSB1cGRhdGVkTW9kdWxlcyB1cGRhdGVkIG1vZHVsZXNcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXSB8IG51bGx9IHJlbmV3ZWRNb2R1bGVzIHJlbmV3ZWQgbW9kdWxlc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcywgcmVuZXdlZE1vZHVsZXMpIHtcblx0dmFyIHVuYWNjZXB0ZWRNb2R1bGVzID0gdXBkYXRlZE1vZHVsZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdHJldHVybiByZW5ld2VkTW9kdWxlcyAmJiByZW5ld2VkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDA7XG5cdH0pO1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXG5cdGlmICh1bmFjY2VwdGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG5cdFx0bG9nKFxuXHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcIltITVJdIFRoZSBmb2xsb3dpbmcgbW9kdWxlcyBjb3VsZG4ndCBiZSBob3QgdXBkYXRlZDogKFRoZXkgd291bGQgbmVlZCBhIGZ1bGwgcmVsb2FkISlcIlxuXHRcdCk7XG5cdFx0dW5hY2NlcHRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICghcmVuZXdlZE1vZHVsZXMgfHwgcmVuZXdlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIE5vdGhpbmcgaG90IHVwZGF0ZWQuXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBVcGRhdGVkIG1vZHVsZXM6XCIpO1xuXHRcdHJlbmV3ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1vZHVsZUlkID09PSBcInN0cmluZ1wiICYmIG1vZHVsZUlkLmluZGV4T2YoXCIhXCIpICE9PSAtMSkge1xuXHRcdFx0XHR2YXIgcGFydHMgPSBtb2R1bGVJZC5zcGxpdChcIiFcIik7XG5cdFx0XHRcdGxvZy5ncm91cENvbGxhcHNlZChcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIHBhcnRzLnBvcCgpKTtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0XHRsb2cuZ3JvdXBFbmQoXCJpbmZvXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHZhciBudW1iZXJJZHMgPSByZW5ld2VkTW9kdWxlcy5ldmVyeShmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdHJldHVybiB0eXBlb2YgbW9kdWxlSWQgPT09IFwibnVtYmVyXCI7XG5cdFx0fSk7XG5cdFx0aWYgKG51bWJlcklkcylcblx0XHRcdGxvZyhcblx0XHRcdFx0XCJpbmZvXCIsXG5cdFx0XHRcdCdbSE1SXSBDb25zaWRlciB1c2luZyB0aGUgb3B0aW1pemF0aW9uLm1vZHVsZUlkczogXCJuYW1lZFwiIGZvciBtb2R1bGUgbmFtZXMuJ1xuXHRcdFx0KTtcblx0fVxufTtcbiIsImltcG9ydCBjb25maWcgZnJvbSAnLy5jb25maWcuanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLmNvbnRhaW5lcicpO1xuY29uc3QgbW9kdWxlVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kdWxlX193ZWF0aGVyJylcblxuY29uc3QgZ2V0Rm9yZWNhc3REYXkgPSAoY3VycmVudERhdGUpID0+IHtcbiAgICBjb25zdCBkYXlzT2ZXZWVrID0gWydOaWVkemllbGEnLCAnUG9uaWVkemlhxYJlaycsICdXdG9yZWsnLCAnxZpyb2RhJywgJ0N6d2FydGVrJywgJ1BpxIV0ZWsnLCAnU29ib3RhJ107XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlKTtcbiAgICBjb25zdCBkYXlJbmRleCA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICByZXR1cm4gZGF5c09mV2Vla1tkYXlJbmRleF07XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZSA9IGFzeW5jIGZ1bmN0aW9uIChBUElLZXkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElLZXl9JnE9YXV0bzppcCZkYXlzPTVcbiAgICAgICAgYCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG1vZHVsZVRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJylcblxuICAgICAgICAvLyBHZXQgbmVjZXNzYXJ5IGVsZW1lbnRzOlxuICAgICAgICBjb25zdCBjaXR5TmFtZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5X19uYW1lJyk7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlTGFiZWwgPSBtb2R1bGUucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlX192YWx1ZScpO1xuICAgICAgICBjb25zdCBwcmVzc3VyZUxhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZV9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgaHVtaWRpdHlMYWJlbCA9IG1vZHVsZS5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHlfX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHdpbmRTcGVlZExhYmVsID0gbW9kdWxlLnF1ZXJ5U2VsZWN0b3IoJy53aW5kLXNwZWVkX192YWx1ZScpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBtb2R1bGUucXVlcnlTZWxlY3RvcigndWwud2VhdGhlcl9fZm9yZWNhc3QnKTtcblxuICAgICAgICAvLyBTaG93IEFQSSBkYXRhOlxuICAgICAgICBjaXR5TmFtZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZVxuICAgICAgICB0ZW1wZXJhdHVyZUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC50ZW1wX2NcbiAgICAgICAgcHJlc3N1cmVMYWJlbC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyBcIiBoUGFcIlxuICAgICAgICBodW1pZGl0eUxhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiXG4gICAgICAgIHdpbmRTcGVlZExhYmVsLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX2twaCArIFwiIGtwaFwiXG5cbiAgICAgICAgLy8gRm9yZWNhc3Q6XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlcbiAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgZm9yZWNhc3REYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBkYXkgPSBmb3JlY2FzdERheXNbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXkuZGF5LmNvbmRpdGlvbi50ZXh0KVxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGdldEZvcmVjYXN0RGF5KGRheS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF2Z1RlbXAgPSBkYXkuZGF5LmF2Z3RlbXBfYztcblxuICAgICAgICAgICAgY29uc3QgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBuZXdMaS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXlcIj4ke2RheU5hbWV9PC9zcGFuPiA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9zbm93LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPiR7YXZnVGVtcH08L3NwYW4+JmRlZztDPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG5cbiAgICAgICAgICAgIGZvcmVjYXN0TGlzdC5hcHBlbmQobmV3TGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEhUTUw6XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobW9kdWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY3JlYXRlTW9kdWxlKGNvbmZpZy5XZWF0aGVyQVBJS2V5KTtcbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChuLCB0LCBlLCByLCBvLCBhLCBjKSB7XG4gIHRyeSB7XG4gICAgdmFyIGkgPSBuW2FdKGMpLFxuICAgICAgdSA9IGkudmFsdWU7XG4gIH0gY2F0Y2ggKG4pIHtcbiAgICByZXR1cm4gdm9pZCBlKG4pO1xuICB9XG4gIGkuZG9uZSA/IHQodSkgOiBQcm9taXNlLnJlc29sdmUodSkudGhlbihyLCBvKTtcbn1cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKG4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAociwgbykge1xuICAgICAgdmFyIGEgPSBuLmFwcGx5KHQsIGUpO1xuICAgICAgZnVuY3Rpb24gX25leHQobikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoYSwgciwgbywgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIG4pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KG4pIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGEsIHIsIG8sIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgbik7XG4gICAgICB9XG4gICAgICBfbmV4dCh2b2lkIDApO1xuICAgIH0pO1xuICB9O1xufVxuZXhwb3J0IHsgX2FzeW5jVG9HZW5lcmF0b3IgYXMgZGVmYXVsdCB9OyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKHIubWV0aG9kID0gXCJyZXR1cm5cIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCBcInRocm93XCIgPT09IHIubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBuICYmIChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBuICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgdmFyIGkgPSB0cnlDYXRjaChvLCBlLml0ZXJhdG9yLCByLmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gaS50eXBlKSByZXR1cm4gci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gaS5hcmcsIHIuZGVsZWdhdGUgPSBudWxsLCB5O1xuICAgIHZhciBhID0gaS5hcmc7XG4gICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSByLm1ldGhvZCAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpIDogYSA6IChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIHIuZGVsZWdhdGUgPSBudWxsLCB5KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkodCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdHJ5TG9jOiB0WzBdXG4gICAgfTtcbiAgICAxIGluIHQgJiYgKGUuY2F0Y2hMb2MgPSB0WzFdKSwgMiBpbiB0ICYmIChlLmZpbmFsbHlMb2MgPSB0WzJdLCBlLmFmdGVyTG9jID0gdFszXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkodCkge1xuICAgIHZhciBlID0gdC5jb21wbGV0aW9uIHx8IHt9O1xuICAgIGUudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSBlLmFyZywgdC5jb21wbGV0aW9uID0gZTtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHQpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGUpIHtcbiAgICBpZiAoZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgciA9IGVbYV07XG4gICAgICBpZiAocikgcmV0dXJuIHIuY2FsbChlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubmV4dCkgcmV0dXJuIGU7XG4gICAgICBpZiAoIWlzTmFOKGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgbyA9IC0xLFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsrbyA8IGUubGVuZ3RoOykgaWYgKG4uY2FsbChlLCBvKSkgcmV0dXJuIG5leHQudmFsdWUgPSBlW29dLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkubmV4dCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoX3R5cGVvZihlKSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIG8oR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7XG4gIH0sIGUubWFyayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZih0LCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAodC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKHQsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZyksIHQ7XG4gIH0sIGUuYXdyYXAgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiB0XG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBlLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBlLmFzeW5jID0gZnVuY3Rpb24gKHQsIHIsIG4sIG8sIGkpIHtcbiAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTtcbiAgICB2YXIgYSA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCwgciwgbiwgbyksIGkpO1xuICAgIHJldHVybiBlLmlzR2VuZXJhdG9yRnVuY3Rpb24ocikgPyBhIDogYS5uZXh0KCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKGcpLCBkZWZpbmUoZywgdSwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShnLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoZywgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gT2JqZWN0KHQpLFxuICAgICAgciA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pO1xuICAgIHJldHVybiByLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyByLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIHQgPSByLnBvcCgpO1xuICAgICAgICBpZiAodCBpbiBlKSByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGUudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgciA+PSAwOyAtLXIpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyeUVudHJpZXNbcl07XG4gICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBvLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgaSA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgJiYgKFwiYnJlYWtcIiA9PT0gdCB8fCBcImNvbnRpbnVlXCIgPT09IHQpICYmIGkudHJ5TG9jIDw9IGUgJiYgZSA8PSBpLmZpbmFsbHlMb2MgJiYgKGkgPSBudWxsKTtcbiAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIGEudHlwZSA9IHQsIGEuYXJnID0gZSwgaSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh0LCBlKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gdC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gdC50eXBlID8gdGhpcy5uZXh0ID0gdC5hcmcgOiBcInJldHVyblwiID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLmZpbmFsbHlMb2MgPT09IHQpIHJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbiwgci5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkociksIHk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci50cnlMb2MgPT09IHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBuLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gbi5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJjb25zdCBjb25maWcgPSB7XG4gICAgV2VhdGhlckFQSUtleTogJzEzNDNmOGVhMGViMjQ0MmVhOWQxODM5MjkyNDIzMTEnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNGJmYTRjZTY5ODJmZGJlN2Q2M1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcImVzNi1hc3luYy1hd2FpdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vIGluaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sIFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVlczZfYXN5bmNfYXdhaXRcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuXHRcdFx0XHQ/IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZClcblx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIxKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuIiwiIl0sIm5hbWVzIjpbImNvbmZpZyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1vZHVsZVRlbXBsYXRlIiwiZ2V0Rm9yZWNhc3REYXkiLCJjdXJyZW50RGF0ZSIsImRheXNPZldlZWsiLCJkYXRlIiwiRGF0ZSIsImRheUluZGV4IiwiZ2V0RGF5IiwiY3JlYXRlTW9kdWxlIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiQVBJS2V5IiwicmVzcG9uc2UiLCJkYXRhIiwibW9kdWxlIiwiY2l0eU5hbWVMYWJlbCIsInRlbXBlcmF0dXJlTGFiZWwiLCJwcmVzc3VyZUxhYmVsIiwiaHVtaWRpdHlMYWJlbCIsIndpbmRTcGVlZExhYmVsIiwiZm9yZWNhc3RMaXN0IiwiZm9yZWNhc3REYXlzIiwiaSIsImRheSIsImRheU5hbWUiLCJhdmdUZW1wIiwibmV3TGkiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJjb25jYXQiLCJzZW50IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjbG9uZU5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJpbm5lclRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwidGVtcF9jIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImNvbmRpdGlvbiIsInRleHQiLCJhdmd0ZW1wX2MiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwidDAiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsIldlYXRoZXJBUElLZXkiXSwic291cmNlUm9vdCI6IiJ9