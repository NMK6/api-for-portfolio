/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Search */ \"./src/js/models/Search.js\");\n/* harmony import */ var _views_searchView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/searchView */ \"./src/js/views/searchView.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar state = {};\n\nvar handleSearch = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e) {\n    e.preventDefault();\n    var query = _views_searchView__WEBPACK_IMPORTED_MODULE_1__.getInput();\n    console.log(query);\n\n    if (query) {\n      state.search = new _models_Search__WEBPACK_IMPORTED_MODULE_0__.default(query);\n      _views_searchView__WEBPACK_IMPORTED_MODULE_1__.clearInput();\n      _views_searchView__WEBPACK_IMPORTED_MODULE_1__.clearRecepes();\n      yield state.search.getResult();\n      console.log(state.search.result);\n      _views_searchView__WEBPACK_IMPORTED_MODULE_1__.renderResults(state.search.result.meals);\n    }\n  });\n\n  return function handleSearch(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_views_base__WEBPACK_IMPORTED_MODULE_2__.elements.searchForm.addEventListener('submit', handleSearch);\n\n//# sourceURL=webpack://public_html/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Search.js":
/*!*********************************!*\
  !*** ./src/js/models/Search.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nclass Search {\n  constructor(query) {\n    this.query = query;\n  }\n\n  getResult() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      try {\n        var url = \"https://www.themealdb.com/\";\n        var key = \"9973533\";\n        var res = yield fetch(\"\".concat(url, \"api/json/v2/\").concat(key, \"/search.php?s=\").concat(_this.query));\n        _this.result = yield res.json();\n      } catch (error) {}\n    })();\n  }\n\n}\n\n//# sourceURL=webpack://public_html/./src/js/models/Search.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elements\": function() { return /* binding */ elements; }\n/* harmony export */ });\nvar elements = {\n  firstScreen: document.querySelector('.first-screen'),\n  searchForm: document.querySelector('.search__form'),\n  searchInput: document.querySelector('.search__field'),\n  searchRecepesList: document.querySelector('.recepes__list')\n};\n\n//# sourceURL=webpack://public_html/./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/searchView.js":
/*!************************************!*\
  !*** ./src/js/views/searchView.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": function() { return /* binding */ getInput; },\n/* harmony export */   \"clearInput\": function() { return /* binding */ clearInput; },\n/* harmony export */   \"clearRecepes\": function() { return /* binding */ clearRecepes; },\n/* harmony export */   \"renderResults\": function() { return /* binding */ renderResults; }\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nvar getInput = () => _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchInput.value;\nvar clearInput = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchInput.value = '';\n};\nvar clearRecepes = () => {\n  /// /change to while firstchild\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchRecepesList.innerHtml = '';\n};\n\nvar renderRecepe = recepe => {\n  console.log(recepe);\n  var markup = \"<div>\".concat(recepe.strMeal, \"</div><img src=\").concat(recepe.strMealThumb, \"/preview alt=\").concat(recepe.strMeal, \" width=\\\"200\\\"><p>\").concat(recepe.strInstructions, \"</p>\");\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchRecepesList.insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderResults = recepes => {\n  recepes.forEach(renderRecepe);\n};\n\n//# sourceURL=webpack://public_html/./src/js/views/searchView.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/main.css\");\n\n//# sourceURL=webpack://public_html/./src/sass/main.scss?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/sass/main.scss");
/******/ })()
;