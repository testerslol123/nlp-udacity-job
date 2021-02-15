/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Client;Client =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/register/lib/browser.js":
/*!*****************************************************!*\
  !*** ./node_modules/@babel/register/lib/browser.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default = register;\nexports.revert = revert;\n\nfunction register() {}\n\nfunction revert() {}\n\n//# sourceURL=webpack://Client/./node_modules/@babel/register/lib/browser.js?");

/***/ }),

/***/ "./node_modules/@babel/register/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@babel/register/lib/index.js ***!
  \***************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("exports = module.exports = function (...args) {\n  return register(...args);\n};\n\nexports.__esModule = true;\n\nconst node = __webpack_require__(/*! ./nodeWrapper */ \"./node_modules/@babel/register/lib/browser.js\");\n\nconst register = node.default;\nObject.assign(exports, node);\n\n//# sourceURL=webpack://Client/./node_modules/@babel/register/lib/index.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClick\": () => (/* reexport safe */ _js_handleClick__WEBPACK_IMPORTED_MODULE_3__.handleClick),\n/* harmony export */   \"cleanData\": () => (/* reexport safe */ _js_cleanData__WEBPACK_IMPORTED_MODULE_2__.cleanData),\n/* harmony export */   \"checkURL\": () => (/* reexport safe */ _js_checkURL__WEBPACK_IMPORTED_MODULE_1__.checkURL),\n/* harmony export */   \"callAPI\": () => (/* reexport safe */ _js_callAPI__WEBPACK_IMPORTED_MODULE_0__.callAPI)\n/* harmony export */ });\n/* harmony import */ var _js_callAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/callAPI */ \"./src/client/js/callAPI.js\");\n/* harmony import */ var _js_checkURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/checkURL */ \"./src/client/js/checkURL.js\");\n/* harmony import */ var _js_cleanData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/cleanData */ \"./src/client/js/cleanData.js\");\n/* harmony import */ var _js_handleClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/handleClick */ \"./src/client/js/handleClick.js\");\n__webpack_require__(/*! @babel/register */ \"./node_modules/@babel/register/lib/index.js\")\r\n\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/callAPI.js":
/*!**********************************!*\
  !*** ./src/client/js/callAPI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callAPI\": () => (/* binding */ callAPI)\n/* harmony export */ });\n/* harmony import */ var _src_client_js_cleanData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/client/js/cleanData.js */ \"./src/client/js/cleanData.js\");\n// import {checkURL} from checkURL\r\n\r\n\r\n\r\nasync function callAPI(){\r\n\r\n    fetch('/api', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            'Accept': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            url: url.value\r\n        })\r\n\r\n    }).then(res => res.json()).then(data => {\r\n        console.log(data);\r\n        (0,_src_client_js_cleanData_js__WEBPACK_IMPORTED_MODULE_0__.cleanData)(data);\r\n    });\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/js/callAPI.js?");

/***/ }),

/***/ "./src/client/js/checkURL.js":
/*!***********************************!*\
  !*** ./src/client/js/checkURL.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkURL\": () => (/* binding */ checkURL)\n/* harmony export */ });\nfunction checkURL(url) {\r\n    console.log(\"::: RUNING URL VALIDATION :::\", url);\r\n\r\n    var regexp =  /^(?:(?:https?|ftp):\\/\\/)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:\\/\\S*)?$/;\r\n    if(regexp.test(url)){\r\n        return true;\r\n    }\r\n    \r\n    return false;\r\n    \r\n }\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/js/checkURL.js?");

/***/ }),

/***/ "./src/client/js/cleanData.js":
/*!************************************!*\
  !*** ./src/client/js/cleanData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanData\": () => (/* binding */ cleanData)\n/* harmony export */ });\nfunction cleanData(data) {\r\n\r\n    irony.textContent = `IRONY: ${data.irony}`;\r\n    confidence.textContent = `CONFIDENCE: ${data.confidence}`;\r\n    agreement.textContent = `AGREEMENT: ${data.agreement}`;\r\n    subjectivity.textContent = `SUBJECTIVITY: ${data.subjectivity}`;\r\n    console.log()\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/js/cleanData.js?");

/***/ }),

/***/ "./src/client/js/handleClick.js":
/*!**************************************!*\
  !*** ./src/client/js/handleClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClick\": () => (/* binding */ handleClick)\n/* harmony export */ });\n/* harmony import */ var _checkURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkURL */ \"./src/client/js/checkURL.js\");\n/* harmony import */ var _callAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callAPI */ \"./src/client/js/callAPI.js\");\n\r\n\r\n\r\nfunction handleClick()\r\n    {\r\n        const btn = document.getElementById('btn');\r\n        const url = document.getElementById('url');\r\n        \r\n        const irony = document.getElementById('irony');\r\n        const confidence = document.getElementById('confidence'); \r\n        const agreement = document.getElementById('agreement'); \r\n        const subjectivity = document.getElementById('subjectivity'); \r\n        \r\n        console.log('button pressed')\r\n        \r\n        \r\n        if ((0,_checkURL__WEBPACK_IMPORTED_MODULE_0__.checkURL)(url.value)) {\r\n            console.log(url.value);\r\n            (0,_callAPI__WEBPACK_IMPORTED_MODULE_1__.callAPI)();\r\n            }\r\n        else \r\n            {\r\n                console.log('Invalid URL')\r\n            };\r\n    \r\n    };\r\n\r\n \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Client/./src/client/js/handleClick.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/client/index.js");
/******/ })()
;