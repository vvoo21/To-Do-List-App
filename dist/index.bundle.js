"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_app"] = self["webpackChunkto_do_list_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary: #fc466b;\\r\\n  --light: #eee;\\r\\n  --dark: #313154;\\r\\n  --danger: #c9d3fd;\\r\\n  --grey: #888;\\r\\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background: rgb(63, 94, 251);\\r\\n  background: radial-gradient(circle, #3f5efb 0%, rgba(252, 70, 107, 1) 100%);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  width: 70%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  background: var(--light);\\r\\n  border: 1px solid var(--grey);\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.greeting {\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid var(--grey);\\r\\n}\\r\\n\\r\\n.greeting .tittle {\\r\\n  display: flex;\\r\\n  color: var(--dark);\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#new-todo-form {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.create-todo input {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  padding: 1rem 1.5rem;\\r\\n  margin-right: 0.5rem;\\r\\n  color: var(--dark);\\r\\n  background-color: #fff;\\r\\n  box-shadow: var(--shadow);\\r\\n  font-style: italic;\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\ninput:not([type=\\\"radio\\\"]):not([type=\\\"checkbox\\\"]),\\r\\nbutton {\\r\\n  appearance: none;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  cursor: initial;\\r\\n}\\r\\n\\r\\ninput[type=\\\"checkbox\\\"] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.bubble {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border-radius: 50%;\\r\\n  border: 2px solid var(--primary);\\r\\n}\\r\\n\\r\\n.bubble::after {\\r\\n  content: \\\"\\\";\\r\\n  display: flex;\\r\\n  opacity: 0;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n  background-color: var(--primary);\\r\\n  border-radius: 50%;\\r\\n  transition: 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\ninput:checked ~ .bubble::after {\\r\\n  width: 10px;\\r\\n  height: 10px;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.create-todo img,\\r\\n.greeting img {\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.create-todo img:hover,\\r\\n.greeting img:hover {\\r\\n  opacity: 0.75;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.todo-list .list {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.todo-list .todo-item {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 1rem;\\r\\n  border-radius: 0.5rem;\\r\\n  box-shadow: var(--shadow);\\r\\n}\\r\\n\\r\\n.todo-item .label {\\r\\n  display: flex;\\r\\n  margin-right: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-item .todo-content {\\r\\n  flex: 1 1 0%;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-item .todo-content input {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  max-height: 100%;\\r\\n  color: var(--dark);\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\n.todo-item .actions {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todo-list button {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  border: 1px solid var(--grey);\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.25rem;\\r\\n  color: var(--dark);\\r\\n  font-size: 1rem;\\r\\n  font-weight: 500;\\r\\n  background-color: #c7c7c7;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.todo-item .actions button {\\r\\n  display: flex;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.25rem;\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.todo-list button:hover {\\r\\n  background-color: var(--light);\\r\\n}\\r\\n\\r\\n.todo-item .actions .edit {\\r\\n  margin-right: 0.5rem;\\r\\n  background-color: #fcb0c3;\\r\\n  color: var(--dark);\\r\\n}\\r\\n\\r\\n.todo-item .actions .remove {\\r\\n  background-color: var(--danger);\\r\\n  color: var(--dark);\\r\\n}\\r\\n\\r\\n.todo-item.done .todo-content input {\\r\\n  text-decoration: line-through;\\r\\n  color: var(--grey);\\r\\n}\\r\\n\\r\\n.todo-item .actions button:hover {\\r\\n  background-color: var(--light);\\r\\n  color: var(--dark);\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  main {\\r\\n    width: 55%;\\r\\n  }\\r\\n\\r\\n  .greeting .tittle {\\r\\n    font-size: 1.7rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addTodo.js */ \"./src/modules/addTodo.js\");\n\n\n\n\nwindow.addEventListener('load', () => {\n  const newTodoForm = document.querySelector('#new-todo-form');\n\n  newTodoForm.addEventListener('submit', _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://to-do-list-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./src/modules/functions.js\");\n\n\nconst addTodo = (e) => {\n  e.preventDefault();\n\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  const todo = {\n    content: e.target.elements.content.value,\n    done: false,\n    id: todos.length + 1,\n  };\n\n  todos.push(todo);\n\n  localStorage.setItem('todos', JSON.stringify(todos));\n\n  e.target.reset();\n\n  (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodo);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/addTodo.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _strRemove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strRemove.js */ \"./src/modules/strRemove.js\");\n\n\nconst DisplayTodos = () => {\n  const todoList = document.querySelector('#todo-list-wrap');\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  todoList.innerHTML = '';\n\n  todos.forEach((todo) => {\n    const todoItem = document.createElement('div');\n    todoItem.classList.add('todo-item', todo.done ? 'done' : 'a');\n\n    const label = document.createElement('label');\n    const input = document.createElement('input');\n    const span = document.createElement('span');\n    const content = document.createElement('div');\n    const actions = document.createElement('div');\n    const editBtn = document.createElement('button');\n    const removeBtn = document.createElement('button');\n\n    input.type = 'checkbox';\n    input.checked = todo.done;\n\n    span.classList.add('bubble');\n    content.classList.add('todo-content');\n    actions.classList.add('actions');\n    editBtn.classList.add('edit');\n    removeBtn.classList.add('remove');\n\n    content.innerHTML = `<input type=\"text\" value=\"${todo.content}\" readonly>`;\n    editBtn.innerHTML = 'Edit';\n    removeBtn.innerHTML = 'Delete';\n\n    todoList.appendChild(todoItem);\n    todoItem.appendChild(label);\n    todoItem.appendChild(content);\n    todoItem.appendChild(actions);\n    label.appendChild(input);\n    label.appendChild(span);\n    actions.appendChild(editBtn);\n    actions.appendChild(removeBtn);\n\n    input.addEventListener('change', () => {\n      todo.done = !todo.done;\n      localStorage.setItem('todos', JSON.stringify(todos));\n      if (todo.done) {\n        todoItem.classList.add('done');\n      } else {\n        todoItem.classList.remove('done');\n      }\n    });\n\n    editBtn.addEventListener('click', () => {\n      const inpunt = content.querySelector('input');\n      inpunt.removeAttribute('readonly');\n      inpunt.focus();\n      inpunt.addEventListener('blur', (e) => {\n        inpunt.setAttribute('readonly', true);\n        todo.content = e.target.value;\n        localStorage.setItem('todos', JSON.stringify(todos));\n        DisplayTodos();\n      });\n    });\n\n    removeBtn.addEventListener('click', (e) => {\n      _strRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo(todo.id);\n      e.target.parentElement.parentElement.remove();\n    });\n  });\n};\n\nconst clearBtn = document.querySelector('.clear-all');\n\nclearBtn.addEventListener('click', () => {\n  _strRemove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allCompleted();\n  DisplayTodos();\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTodos);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/setIds.js":
/*!*******************************!*\
  !*** ./src/modules/setIds.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst setIds = () => {\n  const todos = JSON.parse(localStorage.getItem('todos')) || [];\n  todos.forEach((todo, index) => {\n    todo.id = index + 1;\n  });\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setIds);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/setIds.js?");

/***/ }),

/***/ "./src/modules/strRemove.js":
/*!**********************************!*\
  !*** ./src/modules/strRemove.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _setIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setIds.js */ \"./src/modules/setIds.js\");\n\n\nconst strRemove = {\n  todo(id) {\n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    const newToDos = todos.filter((todo) => todo.id !== id);\n    localStorage.setItem('todos', JSON.stringify(newToDos));\n    (0,_setIds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  },\n\n  allCompleted() {\n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    const newToDos = todos.filter((todo) => todo.done === false);\n    localStorage.setItem('todos', JSON.stringify(newToDos));\n    (0,_setIds_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strRemove);\n\n//# sourceURL=webpack://to-do-list-app/./src/modules/strRemove.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);