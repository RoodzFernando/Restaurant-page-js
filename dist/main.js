/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./imgs/restaurant-bg.jpg */ \"./src/imgs/restaurant-bg.jpg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./imgs/twitter.svg */ \"./src/imgs/twitter.svg\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./imgs/linkedin.svg */ \"./src/imgs/linkedin.svg\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./imgs/github.svg */ \"./src/imgs/github.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"*,\\n:before,\\n:after {\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  height: 100vh;\\n  color: #FFF;\\n}\\n\\nnav {\\n  background: rgba(0, 0, 0, 0.7);\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 20px;\\n}\\nnav .logo {\\n  text-transform: uppercase;\\n}\\nnav .navigation-links {\\n  display: flex;\\n}\\nnav .navigation-links a {\\n  padding: 25px;\\n  color: #FFF;\\n  text-decoration: none;\\n  text-transform: uppercase;\\n}\\nnav .navigation-links a:nth-child(2) {\\n  border-right: 1px solid gray;\\n  border-left: 1px solid gray;\\n}\\nnav .navigation-links a:hover {\\n  background: #277E1F;\\n  color: #000;\\n}\\nnav .navigation-links .active {\\n  border-bottom: 4px solid #AB450A;\\n}\\n\\nsection {\\n  height: 84vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\nsection .jumbo {\\n  border-radius: 5px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 40%;\\n}\\nsection .jumbo .resto-motto {\\n  background: rgba(0, 0, 0, 0.7);\\n  padding: 40px;\\n  height: 105%;\\n  width: 100%;\\n  border-radius: 6px;\\n}\\n\\nform {\\n  background: rgba(0, 0, 0, 0.7);\\n  padding: 35px;\\n}\\nform input[type=text],\\nform input[type=email] {\\n  padding: 6px;\\n  color: #000;\\n}\\nform input[type=text],\\nform input[type=email],\\nform textarea {\\n  width: 300px;\\n}\\nform input[type=email] {\\n  margin: 16px 0 16px 0;\\n}\\nform textarea {\\n  height: 100px;\\n  margin-bottom: 16px;\\n}\\nform button {\\n  background: teal;\\n  border: none;\\n  border-radius: 6px;\\n  padding: 10px;\\n  width: 60px;\\n  color: #FFF;\\n  cursor: pointer;\\n  text-transform: uppercase;\\n}\\nform button:hover {\\n  color: #000;\\n  background: #277E20;\\n}\\nform div:last-child {\\n  text-align: center;\\n}\\n\\nsection {\\n  display: flex;\\n  flex-direction: column;\\n}\\nsection .menu {\\n  text-align: center;\\n  background: rgba(0, 0, 0, 0.7);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  padding: 25px;\\n}\\nsection .menu .menu-cards {\\n  display: flex;\\n  justify-content: space-between;\\n}\\nsection .menu .menu-cards .menu-card {\\n  border: 1px solid #FFF;\\n  margin: 5px;\\n}\\nsection .menu .menu-cards .menu-card img {\\n  width: 200px;\\n  height: 200px;\\n  object-fit: cover;\\n}\\nsection .menu .menu-cards .menu-card .title {\\n  padding-top: 10px;\\n  padding-bottom: 10px;\\n  text-transform: uppercase;\\n}\\n\\nfooter {\\n  border-top: 2px solid #000;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px 25px 10px 25px;\\n  background: rgba(0, 0, 0, 0.7);\\n}\\nfooter .footer-logo {\\n  display: flex;\\n  width: 28%;\\n  justify-content: space-between;\\n  align-items: center;\\n  color: #FFF;\\n}\\nfooter .footer-logo p a {\\n  color: #FFF;\\n  text-decoration: none;\\n}\\nfooter .footer-logo p a:hover {\\n  text-decoration: underline;\\n  color: blue;\\n}\\nfooter .footer-logo div {\\n  text-transform: uppercase;\\n}\\nfooter .footer-links .social-link {\\n  display: inline-block;\\n  border: 1px solid #fff;\\n  height: 40px;\\n  width: 40px;\\n  border-radius: 50%;\\n}\\nfooter .footer-links .social-link:hover {\\n  background: #DBA470;\\n  border: 1px solid #DBA470;\\n}\\nfooter .footer-links #twitter {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 22px;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  margin-right: 10px;\\n}\\nfooter .footer-links #linkedin {\\n  margin-right: 10px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: 20px;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\nfooter .footer-links #github {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: 20px;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/body-page.js":
/*!**************************!*\
  !*** ./src/body-page.js ***!
  \**************************/
/*! exports provided: pageContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageContent\", function() { return pageContent; });\nfunction pageContent() {\n  const bodySection = document.createElement('section');\n  const bodyDiv = document.createElement('div');\n  bodyDiv.classList.add('jumbo');\n  const mottoDiv = document.createElement('div');\n  mottoDiv.classList.add('resto-motto');\n  mottoDiv.innerHTML = \"<h2>Welcome to Restaurant Page, your number one source for all sane food. We're dedicated to providing you the very best of recipes</h2>\";\n  bodyDiv.appendChild(mottoDiv);\n  bodySection.appendChild(bodyDiv);\n  document.getElementById('content').appendChild(bodySection);\n}\n\n\n//# sourceURL=webpack:///./src/body-page.js?");

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/*! exports provided: createForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForm\", function() { return createForm; });\nfunction createForm() {\n  const myForm = document.createElement('form');\n  // 2 inputs\n  const nameInp = document.createElement('input');\n  nameInp.placeholder = 'Name';\n  nameInp.type = 'text';\n\n  const emailInp = document.createElement('input');\n  emailInp.placeholder = 'Email';\n  emailInp.type = 'email';\n  // 1 textarea\n  const messageText = document.createElement('textarea');\n  messageText.placeholder = 'Message';\n  // 1 button\n  const sendMess = document.createElement('button');\n  sendMess.textContent = 'Send';\n  const formArr = [nameInp, emailInp, messageText, sendMess];\n  for (const field of formArr) {\n    const wrapDiv = document.createElement('div');\n    wrapDiv.appendChild(field);\n    myForm.appendChild(wrapDiv);\n  }\n  document.querySelector('section > div.jumbo').appendChild(myForm);\n}\n\n\n//# sourceURL=webpack:///./src/contact-page.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return footer; });\nfunction footer() {\n  const footerLinks = {\n    links: ['https://twitter.com/RoodzFernando',\n      'https://www.linkedin.com/in/roodz-fernando-fleurant/',\n      'https://github.com/RoodzFernando',\n    ],\n\n    ids: ['twitter', 'linkedin', 'github'],\n  };\n  const footerTag = document.createElement('footer');\n  const divLogo = document.createElement('div');\n  divLogo.classList.add('footer-logo');\n  const newDivLogo = document.createElement('div');\n  newDivLogo.textContent = 'Restaurant Page';\n  divLogo.appendChild(newDivLogo);\n\n  const para = document.createElement('p');\n  para.innerHTML = '2020&copy; |  <a href=\"https: //twitter.com/RoodzFernando\">@RoodzFernando</a>';\n  divLogo.appendChild(para);\n\n  footerTag.appendChild(divLogo);\n  const footerLink = document.createElement('div');\n  footerLink.classList.add('footer-links');\n\n  for (let elem = 0; elem < footerLinks.links.length; elem++) {\n    const insideDiv = document.createElement('div');\n    const linkTag = document.createElement('a');\n    linkTag.href = footerLinks.links[elem];\n    insideDiv.classList.add('social-link');\n    insideDiv.id = footerLinks.ids[elem];\n    linkTag.appendChild(insideDiv);\n    footerLink.appendChild(linkTag);\n  }\n\n  footerTag.appendChild(footerLink);\n  document.getElementById('content').appendChild(footerTag);\n}\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/*! exports provided: homePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePage\", function() { return homePage; });\nfunction homePage() {\n  const textWrap = document.createElement('div');\n  textWrap.classList.add('resto-motto');\n  textWrap.innerHTML = \"<h2>Welcome to Restaurant Page, your number one source for all sane food. We're dedicated to providing you the very best of recipes</h2>\";\n  document.querySelector('section > div.jumbo').appendChild(textWrap);\n}\n\n\n//# sourceURL=webpack:///./src/home-page.js?");

/***/ }),

/***/ "./src/imgs/chinese.jpg":
/*!******************************!*\
  !*** ./src/imgs/chinese.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ada887e80ccd3f7e4fcb4ae4dd74a63c.jpg\");\n\n//# sourceURL=webpack:///./src/imgs/chinese.jpg?");

/***/ }),

/***/ "./src/imgs/fish-n-chips.jpg":
/*!***********************************!*\
  !*** ./src/imgs/fish-n-chips.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6a6f39f34ac2e309cbb178ccf7855510.jpg\");\n\n//# sourceURL=webpack:///./src/imgs/fish-n-chips.jpg?");

/***/ }),

/***/ "./src/imgs/github.svg":
/*!*****************************!*\
  !*** ./src/imgs/github.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"146e30eb12f12f0078841918fde09889.svg\");\n\n//# sourceURL=webpack:///./src/imgs/github.svg?");

/***/ }),

/***/ "./src/imgs/linkedin.svg":
/*!*******************************!*\
  !*** ./src/imgs/linkedin.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3ab0008feac4dd2efb3b2fdd51a6d261.svg\");\n\n//# sourceURL=webpack:///./src/imgs/linkedin.svg?");

/***/ }),

/***/ "./src/imgs/pizza.jpg":
/*!****************************!*\
  !*** ./src/imgs/pizza.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"533367b014f0fa92c376264fb3989ea3.jpg\");\n\n//# sourceURL=webpack:///./src/imgs/pizza.jpg?");

/***/ }),

/***/ "./src/imgs/restaurant-bg.jpg":
/*!************************************!*\
  !*** ./src/imgs/restaurant-bg.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e976598113144e21ec44116398e9bda8.jpg\");\n\n//# sourceURL=webpack:///./src/imgs/restaurant-bg.jpg?");

/***/ }),

/***/ "./src/imgs/twitter.svg":
/*!******************************!*\
  !*** ./src/imgs/twitter.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"88d497ccd95f265768e5018dcea1f886.svg\");\n\n//# sourceURL=webpack:///./src/imgs/twitter.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav_bar */ \"./src/nav_bar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _body_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body-page */ \"./src/body-page.js\");\n/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-page */ \"./src/contact-page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nObject(_nav_bar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_body_page__WEBPACK_IMPORTED_MODULE_2__[\"pageContent\"])();\nObject(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst homeBtn = document.getElementById('home');\nconst menuBtn = document.getElementById('menu');\nconst contactBtn = document.getElementById('contact');\nconst querySearch = document.querySelector('section > div.jumbo');\nconst homeBtns = [homeBtn, menuBtn, contactBtn];\n\n\nfunction clickEvent(e) {\n  switch (e.target.id) {\n    case 'home':\n      homeBtn.classList.add('active');\n      menuBtn.classList.remove('active');\n      contactBtn.classList.remove('active');\n      querySearch.textContent = ' ';\n      Object(_home_page__WEBPACK_IMPORTED_MODULE_5__[\"homePage\"])();\n      break;\n    case 'menu':\n      homeBtn.classList.remove('active');\n      contactBtn.classList.remove('active');\n      menuBtn.classList.add('active');\n      querySearch.textContent = ' ';\n      Object(_menu_page__WEBPACK_IMPORTED_MODULE_4__[\"menuCards\"])();\n      break;\n    case 'contact':\n      homeBtn.classList.remove('active');\n      menuBtn.classList.remove('active');\n      contactBtn.classList.add('active');\n      querySearch.textContent = ' ';\n      Object(_contact_page__WEBPACK_IMPORTED_MODULE_3__[\"createForm\"])();\n      break;\n  }\n}\nfor (const elem of homeBtns) {\n  elem.addEventListener('click', clickEvent);\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/*! exports provided: menuCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuCards\", function() { return menuCards; });\n/* harmony import */ var _imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/pizza.jpg */ \"./src/imgs/pizza.jpg\");\n/* harmony import */ var _imgs_fish_n_chips_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/fish-n-chips.jpg */ \"./src/imgs/fish-n-chips.jpg\");\n/* harmony import */ var _imgs_chinese_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/chinese.jpg */ \"./src/imgs/chinese.jpg\");\n\n\n\n\nfunction menuCards() {\n  // create the image and title object\n  const menuElements = {\n    source: [_imgs_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _imgs_fish_n_chips_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _imgs_chinese_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\n    title: ['Pizza', 'Fish and Chips', 'Chinese'],\n  };\n  // create the wrapper div with the class of menu-cards\n  const wrapperDiv = document.createElement('div');\n  wrapperDiv.classList.add('menu');\n  wrapperDiv.innerHTML = '<h1>Menu</h1>';\n  const menuCards = document.createElement('div');\n  menuCards.classList.add('menu-cards');\n  wrapperDiv.appendChild(menuCards);\n  // loop through the menuElements object\n  for (let index = 0; index < menuElements.source.length; index += 1) {\n    // create a div with the class of menu-card\n    const menuCard = document.createElement('div');\n    menuCard.classList.add('menu-card');\n    menuCards.appendChild(menuCard);\n    // create a div with the class img\n    const divImg = document.createElement('div');\n    divImg.classList.add('img');\n    divImg.setAttribute('class', `${menuElements.title[index]}`);\n    const servingImg = document.createElement('img');\n    servingImg.src = menuElements.source[index];\n    servingImg.alt = menuElements.title[index];\n    divImg.appendChild(servingImg);\n    menuCard.appendChild(divImg);\n    // create the title div with the class of title\n    const titleDiv = document.createElement('div');\n    titleDiv.classList.add('title');\n    titleDiv.textContent = menuElements.title[index];\n    menuCard.appendChild(titleDiv);\n  }\n  // append the elements to the DOM\n  document.querySelector('section > div.jumbo').appendChild(wrapperDiv);\n}\n\n\n//# sourceURL=webpack:///./src/menu-page.js?");

/***/ }),

/***/ "./src/nav_bar.js":
/*!************************!*\
  !*** ./src/nav_bar.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navigationBar; });\nfunction navigationBar() {\n  const linksArr = ['home', 'menu', 'contact'];\n  const mainContent = document.getElementById('content');\n  const navBar = document.createElement('nav');\n  const logo = document.createElement('div');\n  logo.classList.add('logo');\n  logo.innerText = 'Restaurant Page';\n  navBar.appendChild(logo);\n  mainContent.appendChild(navBar);\n  const navLinks = document.createElement('div');\n  navLinks.classList.add('navigation-links');\n  const myNavLink = [];\n  for (const link of linksArr) {\n    const myLink = document.createElement('a');\n    myLink.href = '#';\n    myLink.id = link;\n    myLink.textContent = link;\n    navLinks.appendChild(myLink);\n    myNavLink.push(link);\n  }\n  navBar.appendChild(navLinks);\n  document.getElementById(myNavLink[0]).setAttribute('class', 'active');\n}\n\n\n//# sourceURL=webpack:///./src/nav_bar.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });