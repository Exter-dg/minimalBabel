import dotenv from "dotenv";    if(process.env.RUNTIME_NODE_ENV === "test") {      dotenv.config({path: ".env.test"});    } else {      dotenv.config();    }  
import sourceMapSupport from "source-map-support"; sourceMapSupport.install();

/******/ var __webpack_modules__ = ({

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");
var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));
// Import moment

// Get the current date and time
var now = (0, _moment.default)();

// Print the formatted date and time
console.log("Current date and time: ".concat(now.format('MMMM Do YYYY, h:mm:ss a')));
})();


//# sourceMappingURL=index.js.map