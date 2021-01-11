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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Search */ \"./src/js/models/Search.js\");\n/* harmony import */ var _models_Recepe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Recepe */ \"./src/js/models/Recepe.js\");\n/* harmony import */ var _views_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/base */ \"./src/js/views/base.js\");\n/* harmony import */ var _views_searchView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/searchView */ \"./src/js/views/searchView.js\");\n/* harmony import */ var _views_recepeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/recepeView */ \"./src/js/views/recepeView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar state = {};\n\nvar handleSearch = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (e) {\n    e.preventDefault();\n    var query = _views_searchView__WEBPACK_IMPORTED_MODULE_3__.getInput();\n    console.log(query);\n\n    if (query) {\n      state.search = new _models_Search__WEBPACK_IMPORTED_MODULE_0__.default(query);\n      _views_searchView__WEBPACK_IMPORTED_MODULE_3__.clearInput();\n      _views_searchView__WEBPACK_IMPORTED_MODULE_3__.clearRecepes();\n      yield state.search.getResult();\n      state.recepe = new _models_Recepe__WEBPACK_IMPORTED_MODULE_1__.default(state.search.result.meals[0]); // console.log(await state.recepe.getIngredients());\n\n      _views_searchView__WEBPACK_IMPORTED_MODULE_3__.squeezeFirstscreen();\n      yield _views_recepeView__WEBPACK_IMPORTED_MODULE_4__.renderRecepes(state.recepe);\n      _views_searchView__WEBPACK_IMPORTED_MODULE_3__.renderResults(state.search.result.meals);\n    }\n  });\n\n  return function handleSearch(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n_views_base__WEBPACK_IMPORTED_MODULE_2__.elements.searchForm.addEventListener('submit', handleSearch);\n\n//# sourceURL=webpack://public_html/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Recepe.js":
/*!*********************************!*\
  !*** ./src/js/models/Recepe.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Recepe; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nclass Recepe {\n  constructor(recepe) {\n    this.recepe = recepe;\n    this.id = recepe.idMeal;\n    this.title = recepe.strMeal;\n    this.category = recepe.strCategory;\n    this.cuisine = recepe.strArea;\n    this.description = recepe.strInstructions;\n    this.link = recepe.strSource;\n    this.video = recepe.strYoutube;\n  }\n\n  getIngredients() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      _this.ingredients = [];\n\n      for (var i = 1; i < 21; i++) {\n        if (_this.recepe[\"strIngredient\".concat(i)] != '') {\n          var v = _this.recepe[\"strIngredient\".concat(i)];\n\n          try {\n            _this.ingredientsImage = yield fetch(\"https://www.themealdb.com/images/ingredients/\".concat(v, \"-Small.png\"));\n            _this.ingredientsImage = \"https://www.themealdb.com/images/ingredients/\".concat(v, \"-Small.png\");\n          } catch (_unused) {\n            _this.ingredientsImage = '';\n          }\n\n          _this.ingredients.push([_this.recepe[\"strIngredient\".concat(i)], _this.recepe[\"strMeasure\".concat(i)], _this.ingredientsImage]);\n        }\n      }\n\n      return _this.ingredients;\n    })();\n  } // async getVideoClip() {\n  //   this.video = await fetch(\n  //     `https://cors-anywhere.herokuapp.com/${this.recepe.strYoutube}`\n  //   );\n  //   console.log(this.video);\n  // }\n\n\n  getImage() {\n    var _this2 = this;\n\n    return _asyncToGenerator(function* () {\n      _this2.image = yield fetch(_this2.recepe.strMealThumb);\n    })();\n  }\n\n  getSmallImage() {\n    var _this3 = this;\n\n    return _asyncToGenerator(function* () {\n      _this3.image = yield fetch(\"\".concat(_this3.recepe.strMealThumb, \"/preview\"));\n    })();\n  }\n\n}\n\n//# sourceURL=webpack://public_html/./src/js/models/Recepe.js?");

/***/ }),

/***/ "./src/js/models/Search.js":
/*!*********************************!*\
  !*** ./src/js/models/Search.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nclass Search {\n  constructor(query) {\n    this.query = query;\n  }\n\n  getResult() {\n    var _this = this;\n\n    return _asyncToGenerator(function* () {\n      try {\n        var url = \"https://www.themealdb.com/\";\n        var key = \"9973533\";\n        var res = yield fetch(\"\".concat(url, \"api/json/v2/\").concat(key, \"/search.php?s=\").concat(_this.query));\n        _this.result = yield res.json();\n      } catch (error) {\n        _this.error = \"Sorry, the meal you are looking for can't be found.\";\n      }\n    })();\n  }\n\n}\n\n//# sourceURL=webpack://public_html/./src/js/models/Search.js?");

/***/ }),

/***/ "./src/js/views/base.js":
/*!******************************!*\
  !*** ./src/js/views/base.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elements\": function() { return /* binding */ elements; }\n/* harmony export */ });\nvar elements = {\n  main: document.querySelector('.main'),\n  firstScreen: document.querySelector('.first-screen'),\n  searchContainer: document.querySelector('.search'),\n  searchForm: document.querySelector('.search__form'),\n  searchInput: document.querySelector('.search__field'),\n  searchRecepesList: document.querySelector('.recepes__list'),\n  searchTitle: document.querySelector('.search__title'),\n  searchBtn: document.querySelector('.search__btn'),\n  searchBtnSpan: document.querySelector('.search__icon')\n};\n\n//# sourceURL=webpack://public_html/./src/js/views/base.js?");

/***/ }),

/***/ "./src/js/views/recepeView.js":
/*!************************************!*\
  !*** ./src/js/views/recepeView.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderRecepes\": function() { return /* binding */ renderRecepes; }\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar renderIngredients = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (recepe) {\n    var ingredientsContainer = document.createElement('div');\n    ingredientsContainer.className = 'recepe__ingredients-container';\n    var recepeContainer = document.querySelector('.recepe');\n    recepeContainer.appendChild(ingredientsContainer);\n    var ingredientsTitleContainer = document.createElement('div');\n    ingredientsTitleContainer.className = 'recepe__ingredients-title-container';\n    var ingredientsTitle = document.createElement('h4');\n    ingredientsTitle.textContent = 'Ingredients';\n    ingredientsTitle.className = 'recepe__ingredients-title';\n    ingredientsTitleContainer.appendChild(ingredientsTitle);\n    ingredientsContainer.appendChild(ingredientsTitleContainer);\n    var ingredients = yield recepe.getIngredients();\n    console.log(ingredients);\n\n    for (var i = 0; i < ingredients.length; i++) {\n      var container = document.createElement('div');\n      container.className = 'recepe__one-ingredient visually-hidden';\n      ingredientsContainer.appendChild(container);\n      var ingredientName = document.createElement('h5');\n      ingredientName.textContent = ingredients[i][0];\n      ingredientName.className = 'recepe__ingredients-name';\n      var ingredientMeasure = document.createElement('p');\n      ingredientMeasure.textContent = ingredients[i][1];\n      ingredientMeasure.className = 'recepe__ingredients-measure';\n      var ingredientImage = document.createElement('img');\n      ingredientImage.src = ingredients[i][2];\n      ingredientImage.alt = ingredients[i][0];\n      ingredientImage.className = 'recepe__ingredients-img';\n      container.appendChild(ingredientName);\n      container.appendChild(ingredientMeasure);\n      container.appendChild(ingredientImage);\n    }\n  });\n\n  return function renderIngredients(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar renderRecepes = recepe => {\n  var markup = \"<section class=\\\"second-screen\\\">\\n  <div class=\\\"recepe\\\">\\n  <h3 class=\\\"recepe__title\\\">\".concat(recepe.title, \"</h3>\\n  </div>\\n  </section>\");\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.main.insertAdjacentHTML('beforeend', markup);\n  renderIngredients(recepe);\n};\n\n//# sourceURL=webpack://public_html/./src/js/views/recepeView.js?");

/***/ }),

/***/ "./src/js/views/searchView.js":
/*!************************************!*\
  !*** ./src/js/views/searchView.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInput\": function() { return /* binding */ getInput; },\n/* harmony export */   \"clearInput\": function() { return /* binding */ clearInput; },\n/* harmony export */   \"clearRecepes\": function() { return /* binding */ clearRecepes; },\n/* harmony export */   \"renderResults\": function() { return /* binding */ renderResults; },\n/* harmony export */   \"squeezeFirstscreen\": function() { return /* binding */ squeezeFirstscreen; }\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/js/views/base.js\");\n\nvar getInput = () => _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchInput.value;\nvar clearInput = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchInput.value = '';\n};\nvar clearRecepes = () => {\n  /// /change to while firstchild\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchRecepesList.innerHtml = '';\n};\n\nvar renderRecepe = recepe => {\n  var markup = \"<div>\".concat(recepe.strMeal, \"</div><img src=\").concat(recepe.strMealThumb, \"/preview alt=\").concat(recepe.strMeal, \" width=\\\"200\\\"><p>\").concat(recepe.strInstructions, \"</p>\");\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchRecepesList.insertAdjacentHTML('beforeend', markup);\n};\n\nvar renderResults = recepes => {\n  recepes.forEach(renderRecepe);\n};\nvar squeezeFirstscreen = () => {\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.firstScreen.classList.add('first-screen__squeeze');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchContainer.classList.add('search-squeeze');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchForm.classList.add('search-squeeze__form');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchInput.classList.add('search-squeeze__field');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchTitle.classList.add('search-squeeze__title');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchBtn.classList.add('search-squeeze__btn');\n  _base__WEBPACK_IMPORTED_MODULE_0__.elements.searchBtnSpan.classList.add('search-squeeze__icon');\n};\n\n//# sourceURL=webpack://public_html/./src/js/views/searchView.js?");

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