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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"12 august 2024\");\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(100);\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\".portfolio-content\", \".portfolio-item\", \".dot\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = (price = 100) => {\n  const calcBlock = document.querySelector(\".calc-block\");\n  const calcType = document.querySelector(\".calc-type\");\n  const calcSquare = document.querySelector(\".calc-square\");\n  const calcCount = document.querySelector(\".calc-count\");\n  const calcDay = document.querySelector(\".calc-day\");\n  const total = document.getElementById(\"total\");\n  const calcInputs = document.querySelectorAll(\"input.calc-item\");\n\n  calcInputs.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\n    });\n  });\n\n  const countCalc = () => {\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n    const calcSquareValue = calcSquare.value;\n\n    let totalValue = 0;\n    let calcCountValue = 1;\n    let calcDayValue = 1;\n\n    if (calcCount.value > 1) {\n      calcCountValue += +calcCount.value / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      calcDayValue = 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      calcDayValue = 1.5;\n    }\n\n    if (calcType.value && calcSquare.value) {\n      totalValue =\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n    } else {\n      totalValue = 0;\n    }\n\n    total.textContent = totalValue;\n  };\n\n  calcBlock.addEventListener(\"input\", (e) => {\n    if (\n      e.target === calcType ||\n      e.target === calcSquare ||\n      e.target === calcCount ||\n      e.target === calcDay\n    ) {\n      countCalc();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\n  const nameInputs = document.querySelectorAll(\"input[placeholder='Ваше имя']\");\n  const textInputs = document.querySelectorAll(\n    \"input[placeholder='Ваше сообщение']\"\n  );\n  const mailInputs = document.querySelectorAll(\"input[type='email']\");\n  const telInputs = document.querySelectorAll(\"input[type='tel']\");\n\n  nameInputs.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\n    });\n  });\n  textInputs.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\n    });\n  });\n  mailInputs.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\w@-_.!~*']/gi, \"\");\n    });\n  });\n  telInputs.forEach((item) => {\n    item.addEventListener(\"input\", (e) => {\n      e.target.value = e.target.value.replace(/[^\\d()-]/g, \"\");\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menu = document.querySelector(\"menu\");\n\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  document.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".close-btn\")) {\n      handleMenu();\n    }\n    if (e.target.closest(\".active-menu\") && e.target.hasAttribute(\"href\")) {\n      handleMenu();\n    }\n    if (!e.target.closest(\"menu\") && menu.classList.contains(\"active-menu\")) {\n      handleMenu();\n    } else if (e.target.closest(\".menu\")) {\n      handleMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modal = document.querySelector(\".popup\");\n  const buttons = document.querySelectorAll(\".popup-btn\");\n  const closeBtn = modal.querySelector(\".popup-close\");\n  const media = window.matchMedia(\"(min-width: 768px)\");\n\n  let count = 0;\n  let idInterval;\n\n  if (media.matches) {\n    const animatePopup = () => {\n      count = count + 5;\n      idInterval = requestAnimationFrame(animatePopup);\n      modal.style.display = \"block\";\n\n      if (count < 100) {\n        modal.style.opacity = count + \"%\";\n      } else {\n        cancelAnimationFrame(idInterval);\n      }\n    };\n\n    const unpopup = () => {\n      count = count - 5;\n      idInterval = requestAnimationFrame(unpopup);\n\n      if (count > 0) {\n        modal.style.opacity = count + \"%\";\n      } else {\n        cancelAnimationFrame(idInterval);\n        modal.style.display = \"none\";\n      }\n    };\n\n    buttons.forEach((btn) => {\n      btn.addEventListener(\"click\", animatePopup);\n    });\n    closeBtn.addEventListener(\"click\", unpopup);\n  } else {\n    buttons.forEach((btn) => {\n      btn.addEventListener(\"click\", () => {\n        modal.style.display = \"block\";\n      });\n    });\n\n    // closeBtn.addEventListener(\"click\", () => {\n    //   modal.style.display = \"none\";\n    // });\n  }\n  modal.addEventListener(\"click\", (e) => {\n    if (\n      !e.target.closest(\".popup-content\") ||\n      e.target.classList.contains(\".popup-close\")\n    ) {\n      modal.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n  const menu = document.querySelector(\"menu\");\n  const links = menu.querySelectorAll(\"ul>li>a\");\n  const scrollBtn = document.querySelector(\"main>a\");\n  const allLinks = [...links, scrollBtn];\n\n  allLinks.forEach((link) => {\n    link.addEventListener(\"click\", (event) => {\n      event.preventDefault();\n      const id = link.getAttribute(\"href\").substring(1);\n      const section = document.getElementById(id);\n\n      if (section) {\n        section.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = (classSlider, classSlides, classDots) => {\r\n  if (!document.querySelector(classSlider)) {\r\n    return;\r\n  } else if (!document.querySelectorAll(classSlides)) {\r\n    return;\r\n  } else if (!document.querySelectorAll(classDots)) {\r\n    return;\r\n  }\r\n\r\n  const sliderBlock = document.querySelector(classSlider);\r\n  const slides = document.querySelectorAll(classSlides);\r\n  const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  slides.forEach(() => {\r\n    dotsBlock.insertAdjacentHTML(\"beforeend\", `<li class=\"dot\"></li>`);\r\n  });\r\n  const dots = document.querySelectorAll(classDots);\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabPanel = document.querySelector(\".service-header\");\n  const tabs = document.querySelectorAll(\".service-header-tab\");\n  const tabContent = document.querySelectorAll(\".service-tab\");\n\n  tabPanel.addEventListener(\"click\", (e) => {\n    if (e.target.closest(\".service-header-tab\")) {\n      const tabBtn = e.target.closest(\".service-header-tab\");\n      tabs.forEach((tab, index) => {\n        if (tab === tabBtn) {\n          tab.classList.add(\"active\");\n          tabContent[index].classList.remove(\"d-none\");\n        } else {\n          tab.classList.remove(\"active\");\n          tabContent[index].classList.add(\"d-none\");\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  const zero = (el) => {\n    if (String(el).length === 1) {\n      return \"0\" + el;\n    } else {\n      return String(el);\n    }\n  };\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadLine).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n    let hours = Math.floor(timeRemaining / 3600);\n    let minutes = Math.floor((timeRemaining / 60) % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n    hours = zero(hours);\n    minutes = zero(minutes);\n    seconds = zero(seconds);\n\n    return { timeRemaining, hours, minutes, seconds };\n  };\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n\n    timerHours.textContent = getTime.hours;\n    timerMinutes.textContent = getTime.minutes;\n    timerSeconds.textContent = getTime.seconds;\n\n    if (getTime.timeRemaining <= 0) {\n      clearInterval();\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n  };\n  setInterval(updateClock, 1000);\n  updateClock();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;