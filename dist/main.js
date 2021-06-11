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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nconst init = () => {\n  let temperature = 'celsius';\n  const proxy = 'http://cors-anywhere.herokuapp.com/';\n  const apiKey = 'f7c2cc6f11db4a4873f18ec881fd1be0';\n\n  window.addEventListener('load', () => {\n    let lat;\n    let lon;\n\n    if (navigator.geolocation) {\n      navigator.geolocation.getCurrentPosition((position) => {\n        lat = position.coords.latitude;\n        lon = position.coords.longitude;\n\n        const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;\n\n        const showData = async () => {\n          try {\n            const response = await fetch(api);\n            const data = await response.json();\n            _view__WEBPACK_IMPORTED_MODULE_0__.renderWeather(data);\n            _view__WEBPACK_IMPORTED_MODULE_0__.fahrenheit.addEventListener('click', () => {\n              if (temperature === 'celsius') {\n                _view__WEBPACK_IMPORTED_MODULE_0__.tempElement.textContent = `${Math.floor(data.main.temp * 1.8 + 32)} °`;\n                _view__WEBPACK_IMPORTED_MODULE_0__.feelLike.textContent = `${Math.floor(data.main.feels_like * 1.8 + 32)} °F`;\n                temperature = 'kelvin';\n                _view__WEBPACK_IMPORTED_MODULE_0__.celsius.classList.remove('font-extrabold');\n                _view__WEBPACK_IMPORTED_MODULE_0__.fahrenheit.classList.add('font-extrabold');\n              }\n            });\n\n            _view__WEBPACK_IMPORTED_MODULE_0__.celsius.addEventListener('click', () => {\n              if (temperature === 'kelvin') {\n                _view__WEBPACK_IMPORTED_MODULE_0__.tempElement.textContent = `${Math.floor(data.main.temp)} °`;\n                temperature = 'celsius';\n                _view__WEBPACK_IMPORTED_MODULE_0__.fahrenheit.classList.remove('font-extrabold');\n                _view__WEBPACK_IMPORTED_MODULE_0__.celsius.classList.add('font-extrabold');\n                _view__WEBPACK_IMPORTED_MODULE_0__.feelLike.textContent = `${Math.floor(data.main.feels_like)} °C`;\n              }\n            });\n          } catch (error) {\n            _view__WEBPACK_IMPORTED_MODULE_0__.showError(error);\n          }\n        };\n\n        showData();\n      });\n    } else {\n      _view__WEBPACK_IMPORTED_MODULE_0__.geoError();\n    }\n  });\n\n  _view__WEBPACK_IMPORTED_MODULE_0__.searchCity.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    if (_view__WEBPACK_IMPORTED_MODULE_0__.cityInput.value === '' || _view__WEBPACK_IMPORTED_MODULE_0__.cityInput === null) return;\n\n    const city = _view__WEBPACK_IMPORTED_MODULE_0__.cityInput.value;\n    _view__WEBPACK_IMPORTED_MODULE_0__.cityInput.value = null;\n\n    const anotherCityApi = `${proxy}api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;\n\n    const showAnotherCityData = async () => {\n      try {\n        const anotherCityResponse = await fetch(anotherCityApi);\n        const anotherCityData = await anotherCityResponse.json();\n        _view__WEBPACK_IMPORTED_MODULE_0__.renderWeather(anotherCityData);\n      } catch (error) {\n        _view__WEBPACK_IMPORTED_MODULE_0__.showError(error);\n      }\n    };\n    showAnotherCityData();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://weather-app/./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n\n\n(0,_controller__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tempElement\": () => (/* binding */ tempElement),\n/* harmony export */   \"feelLike\": () => (/* binding */ feelLike),\n/* harmony export */   \"celsius\": () => (/* binding */ celsius),\n/* harmony export */   \"fahrenheit\": () => (/* binding */ fahrenheit),\n/* harmony export */   \"searchCity\": () => (/* binding */ searchCity),\n/* harmony export */   \"cityInput\": () => (/* binding */ cityInput),\n/* harmony export */   \"renderWeather\": () => (/* binding */ renderWeather),\n/* harmony export */   \"showError\": () => (/* binding */ showError),\n/* harmony export */   \"geoError\": () => (/* binding */ geoError)\n/* harmony export */ });\nconst tempElement = document.querySelector('.temperature');\nconst locationElement = document.querySelector('.location');\nconst description = document.getElementById('description');\nconst pressure = document.getElementById('pressure');\nconst feelLike = document.getElementById('feel-like');\nconst humidity = document.getElementById('humidity');\nconst celsius = document.getElementById('celsius');\nconst fahrenheit = document.getElementById('fahrenheit');\nconst icon = document.getElementById('icon');\nconst alert = document.getElementById('alert');\nconst searchCity = document.getElementById('search-city');\nconst cityInput = document.getElementById('city-input');\n\nconst renderWeather = (item) => {\n  icon.innerHTML = `<img src='./icons/${item.weather[0].icon}.png'>`;\n  tempElement.textContent = `${Math.floor(item.main.temp)} °`;\n  locationElement.textContent = `${item.name}, ${item.sys.country}`;\n  description.textContent = `${item.weather[0].description}`;\n  pressure.textContent = `Pressure: ${item.main.pressure}`;\n  feelLike.textContent = `Feels like: ${Math.floor(item.main.feels_like)} °C`;\n  humidity.textContent = `Humidity: ${item.main.humidity}`;\n  celsius.textContent = 'C';\n  fahrenheit.textContent = 'F';\n};\n\nconst showError = (err) => {\n  alert.innerHTML = `<p>${err.message}</p>`;\n  alert.classList.remove('hidden');\n};\n\nconst geoError = () => {\n  alert.innerHTML = '<p>User browser does not support geolocation</p>';\n  alert.classList.remove('hidden');\n};\n\n//# sourceURL=webpack://weather-app/./src/view.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;