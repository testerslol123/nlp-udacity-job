/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/views/app.js":
/*!*********************************!*\
  !*** ./src/client/views/app.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_client_views_js_callAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/client/views/js/callAPI.js */ \"./src/client/views/js/callAPI.js\");\n/* harmony import */ var _src_client_views_js_checkURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/client/views/js/checkURL.js */ \"./src/client/views/js/checkURL.js\");\n\r\n\r\n\r\nconst btn = document.getElementById('btn');\r\nconst url = document.getElementById('url');\r\n\r\nconst irony = document.getElementById('irony');\r\nconst confidence = document.getElementById('confidence'); \r\nconst agreement = document.getElementById('agreement'); \r\nconst subjectivity = document.getElementById('subjectivity'); \r\n\r\n\r\n\r\nbtn.addEventListener(\"click\", function() {\r\n\r\n    if ((0,_src_client_views_js_checkURL_js__WEBPACK_IMPORTED_MODULE_1__.checkURL)(url.value)) \r\n        {\r\n        console.log(url.value);\r\n        (0,_src_client_views_js_callAPI_js__WEBPACK_IMPORTED_MODULE_0__.callAPI)();\r\n        }\r\n    else \r\n        {\r\n            console.log('Invalid URL')\r\n        };\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://nlp/./src/client/views/app.js?");

/***/ }),

/***/ "./src/client/views/js/callAPI.js":
/*!****************************************!*\
  !*** ./src/client/views/js/callAPI.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"callAPI\": () => (/* binding */ callAPI)\n/* harmony export */ });\n/* harmony import */ var _src_client_views_js_cleanData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/client/views/js/cleanData.js */ \"./src/client/views/js/cleanData.js\");\n// import {checkURL} from checkURL\r\n\r\n\r\n\r\nasync function callAPI(){\r\n\r\n    fetch('/api', {\r\n        method: 'POST',\r\n        headers: {\r\n            'Content-Type': 'application/json',\r\n            'Accept': 'application/json'\r\n        },\r\n        body: JSON.stringify({\r\n            url: url.value\r\n        })\r\n\r\n    }).then(res => res.json()).then(data => {\r\n        console.log(data);\r\n        (0,_src_client_views_js_cleanData_js__WEBPACK_IMPORTED_MODULE_0__.cleanData)(data);\r\n    });\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://nlp/./src/client/views/js/callAPI.js?");

/***/ }),

/***/ "./src/client/views/js/checkURL.js":
/*!*****************************************!*\
  !*** ./src/client/views/js/checkURL.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkURL\": () => (/* binding */ checkURL)\n/* harmony export */ });\nfunction checkURL(url) {\r\n    console.log(\"::: RUNING URL VALIDATION :::\", url);\r\n\r\n    var regexp =  /^(?:(?:https?|ftp):\\/\\/)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:\\/\\S*)?$/;\r\n    if(regexp.test(url)){\r\n        return true;\r\n    }\r\n    \r\n    return false;\r\n    \r\n }\r\n\r\n\r\n\n\n//# sourceURL=webpack://nlp/./src/client/views/js/checkURL.js?");

/***/ }),

/***/ "./src/client/views/js/cleanData.js":
/*!******************************************!*\
  !*** ./src/client/views/js/cleanData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanData\": () => (/* binding */ cleanData)\n/* harmony export */ });\nfunction cleanData(data) {\r\n\r\n    irony.textContent = `IRONY: ${data.irony}`;\r\n    confidence.textContent = `CONFIDENCE: ${data.confidence}`;\r\n    agreement.textContent = `AGREEMENT: ${data.agreement}`;\r\n    subjectivity.textContent = `SUBJECTIVITY: ${data.subjectivity}`;\r\n    console.log()\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://nlp/./src/client/views/js/cleanData.js?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/client/views/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;