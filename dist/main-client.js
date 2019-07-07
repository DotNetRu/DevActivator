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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 114);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(2);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__constants__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_module__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__date_converter_service__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__date_converter_service__["a"]; });







/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_454be2cd869feb6c027e;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(246);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(248);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(8);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(5);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(22);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(4);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_component__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__autocomplete_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autocomplete_module__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__autocomplete_module__["a"]; });




/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__speaker_list_component__ = __webpack_require__(32);
/* unused harmony reexport SpeakerListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_list_module__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__speaker_list_module__["a"]; });




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__speaker_editor_module__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__speaker_editor_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_editor_dialog_component__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__speaker_editor_dialog_component__["a"]; });




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return City; });
var City;
(function (City) {
    City[City["Spb"] = 1] = "Spb";
    City[City["Msk"] = 2] = "Msk";
    City[City["Sar"] = 3] = "Sar";
    City[City["Kry"] = 4] = "Kry";
    City[City["Kzn"] = 5] = "Kzn";
    City[City["Nsk"] = 6] = "Nsk";
    City[City["Nnv"] = 7] = "Nnv";
    City[City["Ufa"] = 8] = "Ufa";
})(City || (City = {}));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__enums__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_dialog_module__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__file_dialog_module__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(1);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__friend_list_component__ = __webpack_require__(27);
/* unused harmony reexport FriendListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friend_list_module__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__friend_list_module__["a"]; });




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__venue_list_component__ = __webpack_require__(37);
/* unused harmony reexport VenueListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__venue_list_module__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__venue_list_module__["a"]; });




/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateConverterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

__WEBPACK_IMPORTED_MODULE_0_moment__["locale"]("ru");
var DateConverterService = /** @class */ (function () {
    function DateConverterService() {
    }
    DateConverterService.toMoment = function (date) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__(date).clone();
    };
    DateConverterService.toString = function (date, format) {
        if (!date) {
            return "";
        }
        return date.format(format || "YYYY-MM-DDTHH:mm:ss");
    };
    DateConverterService.toApiString = function (date) {
        return DateConverterService.toString(date);
    };
    return DateConverterService;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this._messages$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        this._progress$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
    }
    Object.defineProperty(LayoutService.prototype, "messages$", {
        get: function () {
            return this._messages$.pipe();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutService.prototype, "progress$", {
        get: function () {
            return this._progress$.pipe();
        },
        enumerable: true,
        configurable: true
    });
    LayoutService.prototype.showInfo = function (text) {
        var message = {
            duration: 3000,
            severity: "info",
            text: text,
        };
        this._messages$.next(message);
    };
    LayoutService.prototype.showWarning = function (text) {
        var message = {
            duration: 10000,
            severity: "warn",
            text: text,
        };
        this._messages$.next(message);
    };
    LayoutService.prototype.showError = function (text) {
        var message = {
            duration: 60000,
            severity: "error",
            text: text,
        };
        this._messages$.next(message);
    };
    LayoutService.prototype.showProgress = function (percentage) {
        if (percentage === void 0) { percentage = 0; }
        this._progress$.next(percentage || true);
    };
    LayoutService.prototype.hideProgress = function () {
        this._progress$.next(false);
    };
    LayoutService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Community; });
var Community;
(function (Community) {
    Community[Community["SpbDotNet"] = 1] = "SpbDotNet";
    Community[Community["MskDotNet"] = 2] = "MskDotNet";
    Community[Community["SarDotNet"] = 3] = "SarDotNet";
    Community[Community["KryDotNet"] = 4] = "KryDotNet";
    Community[Community["KznDotNet"] = 5] = "KznDotNet";
    Community[Community["NskDotNet"] = 6] = "NskDotNet";
    Community[Community["NnvDotNet"] = 7] = "NnvDotNet";
    Community[Community["UfaDotNet"] = 8] = "UfaDotNet";
})(Community || (Community = {}));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__talk_editor_dialog_component__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__talk_editor_dialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__talk_editor_module__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__talk_editor_module__["a"]; });




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__venue_editor_dialog_component__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__venue_editor_dialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__venue_editor_module__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__venue_editor_module__["a"]; });




/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DragDrop */
/* unused harmony export DragRef */
/* unused harmony export DropListRef */
/* unused harmony export CdkDropList */
/* unused harmony export CDK_DROP_LIST */
/* unused harmony export CDK_DROP_LIST_CONTAINER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return moveItemInArray; });
/* unused harmony export transferArrayItem */
/* unused harmony export copyArrayItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropModule; });
/* unused harmony export DragDropRegistry */
/* unused harmony export CdkDropListGroup */
/* unused harmony export CDK_DRAG_CONFIG_FACTORY */
/* unused harmony export CDK_DRAG_CONFIG */
/* unused harmony export CdkDrag */
/* unused harmony export CdkDragHandle */
/* unused harmony export CdkDragPreview */
/* unused harmony export CdkDragPlaceholder */
/* unused harmony export ɵb */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_platform__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_scrolling__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_bidi__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(5);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_platform__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_platform__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Amount of subscriptions to the move event. Used to avoid
         * hitting the zone if the consumer didn't subscribe to it.
         */
        this._moveEventSubscriptions = 0;
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._moveEvents.subscribe(observer);
            _this._moveEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._moveEventSubscriptions--;
            };
        });
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find(function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (distanceX + distanceY >= _this._config.dragStartThreshold) {
                    _this._hasStartedDragging = true;
                    _this._ngZone.run(function () { return _this._startDragSequence(event); });
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                /** @type {?} */
                var transform = getTransform(activeTransform.x, activeTransform.y);
                // Preserve the previous `transform` value, if there was one. Note that we apply our own
                // transform before the user's, because things like rotation can affect which direction
                // the element will be translated towards.
                _this._rootElement.style.transform = _this._initialTransform ?
                    transform + ' ' + _this._initialTransform : transform;
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEventSubscriptions > 0) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = function (event) {
            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!_this._dragDropRegistry.isDragging(_this)) {
                return;
            }
            _this._removeSubscriptions();
            _this._dragDropRegistry.stopDragging(_this);
            if (_this._handles) {
                _this._rootElement.style.webkitTapHighlightColor = _this._rootElementTapHighlight;
            }
            if (!_this._hasStartedDragging) {
                return;
            }
            _this.released.next({ source: _this });
            if (!_this._dropContainer) {
                // Convert the active transform into a passive one. This means that next time
                // the user starts dragging the item, its position will be calculated relatively
                // to the new passive transform.
                _this._passiveTransform.x = _this._activeTransform.x;
                _this._passiveTransform.y = _this._activeTransform.y;
                _this._ngZone.run(function () { return _this.ended.next({ source: _this }); });
                _this._dragDropRegistry.stopDragging(_this);
                return;
            }
            _this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._dragDropRegistry.stopDragging(_this);
            });
        };
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map(function (handle) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceElement"])(handle); });
        (/** @type {?} */ (this))._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceElement"])(boundaryElement) : null;
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            this._document.body.appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._toggleNativeDragInteractions();
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            this._initialContainer.element.appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            var _a = _this._getPointerPositionOnPage(event), x = _a.x, y = _a.y;
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(x, y);
            _this.ended.next({ source: _this });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = (/** @type {?} */ (this._dropContainer))._getSiblingContainerFromPosition(this, x, y) ||
            this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left it's
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this.entered.next({ item: _this, container: (/** @type {?} */ (newContainer)) });
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
            });
        }
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = viewRef.rootNodes[0];
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ ((function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                })));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = this._placeholderRef.rootNodes[0];
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            point.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            point.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            point.x = clamp(point.x, minX, maxX);
            point.y = clamp(point.y, minY, maxY);
        }
        return point;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this.disabled || this._handles.length > 0;
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document) {
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        _dragDropRegistry.registerDropContainer(this);
        this._document = _document;
        this.element = element instanceof __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] ? element.nativeElement : element;
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeStarted.next();
        this._isDragging = true;
        this._activeDraggables = this._draggables.slice();
        this._cacheOwnPosition();
        this._cacheItemPositions();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.entered.next({ item: item, container: this });
        this.start();
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        /** @type {?} */
        var currentIndex = this._activeDraggables.indexOf(item);
        /** @type {?} */
        var newPositionReference = this._activeDraggables[newIndex];
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            this._activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            this._activeDraggables.splice(newIndex, 0, item);
        }
        else {
            this.element.appendChild(placeholder);
            this._activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items.slice();
        items.forEach(function (item) { return item._withDropContainer((/** @type {?} */ (_this))); });
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if it's out of range.
        if (!this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        this._clientRect = this.element.getBoundingClientRect();
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            /** @type {?} */
            var clientRect = elementToMeasure.getBoundingClientRect();
            return {
                drag: drag,
                offset: 0,
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                }
            };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) { return item.getRootElement().style.transform = ''; });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        });
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = this._document.elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === this.element || this.element.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.find` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_platform__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); },
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // TODO(crisbeto): prevent mouse wheel scrolling while
            // dragging until we've set up proper scroll handling.
            if (!isTouchEvent) {
                this._globalListeners.set('wheel', {
                    handler: this._preventDefaultWhileDragging,
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find(function (instance) { return instance.id === id; });
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["defineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document);
    };
    DragDrop.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"],] }] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"] },
        { type: __WEBPACK_IMPORTED_MODULE_5__angular_cdk_scrolling__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["defineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_scrolling__["ViewportRuler"]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["inject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, viewportRuler, dragDropRegistry, config, _dir, 
    /**
     * @deprecated `viewportRuler` and `dragDropRegistry` parameters
     * to be removed. Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        // @breaking-change 8.0.0 Remove null check once the paramter is made required.
        if (dragDrop) {
            this._dragRef = dragDrop.createDrag(element, config);
        }
        else {
            this._dragRef = new DragRef(element, config, _document, _ngZone, viewportRuler, dragDropRegistry);
        }
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._proxyEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["take"])(1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["takeUntil"])(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (handles) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["merge"].apply(void 0, handles.map(function (item) { return item._stateChanges; }));
            }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["takeUntil"])(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes.rootElementSelector;
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElementSelector`. */
    /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = this.boundaryElementSelector;
        return selector ? getClosestMatchingAncestor(this.element.nativeElement, selector) : null;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     */
    /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._proxyEvents = /**
     * Proxies the events from a DragRef to events that
     * match the interfaces of the CdkDrag outputs.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function () {
            _this.ended.emit({ source: _this });
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this
            });
        });
    };
    CdkDrag.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [CDK_DROP_LIST,] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"],] }] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewContainerRef"] },
        { type: __WEBPACK_IMPORTED_MODULE_5__angular_cdk_scrolling__["ViewportRuler"] },
        { type: DragDropRegistry },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_6__angular_cdk_bidi__["Directionality"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }] },
        { type: DragDrop }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ContentChild"], args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ContentChild"], args: [CdkDragPlaceholder,] }],
        data: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElementSelector: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragBoundary',] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDragDisabled',] }],
        started: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDropRegistry, _changeDetectorRef, _dir, _group, _document, 
    /**
     * @deprecated `dragDropRegistry` and `_document` parameters to be removed.
     * Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        // @breaking-change 8.0.0 Remove null check once `dragDrop` parameter is made required.
        if (dragDrop) {
            this._dropListRef = dragDrop.createDropList(element);
        }
        else {
            this._dropListRef = new DropListRef(element, dragDropRegistry, _document || document);
        }
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(this._draggables), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["takeUntil"])(this._destroyed))
            .subscribe(function (items) {
            _this._dropListRef.withItems(items.map(function (drag) { return drag._dragRef; }));
        });
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["startWith"])(this._dir.value), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["takeUntil"])(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            /** @type {?} */
            var siblings = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_coercion__["coerceArray"])(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find(function (list) { return list.id === drop; }))) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            ref.lockAxis = _this.lockAxis;
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] },
        { type: DragDropRegistry },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ChangeDetectorRef"] },
        { type: __WEBPACK_IMPORTED_MODULE_6__angular_cdk_bidi__["Directionality"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["DOCUMENT"],] }] },
        { type: DragDrop }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ContentChildren"], args: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["forwardRef"])(function () { return CdkDrag; }), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"] }],
        lockAxis: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListDisabled',] }],
        enterPredicate: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"], args: ['cdkDropListEnterPredicate',] }],
        dropped: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NativeDatetimeModule */
/* unused harmony export MatNativeDatetimeModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DatetimeAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MAT_DATETIME_FORMATS; });
/* unused harmony export NativeDatetimeAdapter */
/* unused harmony export MAT_NATIVE_DATETIME_FORMATS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatDatetimepickerModule; });
/* unused harmony export MatDatetimepickerCalendar */
/* unused harmony export MatDatetimepickerCalendarCell */
/* unused harmony export MatDatetimepickerCalendarBody */
/* unused harmony export MatDatetimepickerContent */
/* unused harmony export MatDatetimepicker */
/* unused harmony export MatDatetimepickerFilterType */
/* unused harmony export MAT_DATETIMEPICKER_VALUE_ACCESSOR */
/* unused harmony export MAT_DATETIMEPICKER_VALIDATORS */
/* unused harmony export MatDatetimepickerInputEvent */
/* unused harmony export MatDatetimepickerInput */
/* unused harmony export MatDatetimepickerToggle */
/* unused harmony export MatDatetimepickerMonthView */
/* unused harmony export MatDatetimepickerYearView */
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_core__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_cdk_bidi__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_overlay__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_cdk_portal__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_cdk_a11y__ = __webpack_require__(150);


















/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template D
 */
var  /**
 * @abstract
 * @template D
 */
DatetimeAdapter = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(DatetimeAdapter, _super);
    function DatetimeAdapter(_delegate) {
        var _this = _super.call(this) || this;
        _this._delegate = _delegate;
        return _this;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    DatetimeAdapter.prototype.getValidDateOrNull = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return (this.isDateInstance(obj) && this.isValid(obj)) ? obj : null;
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.compareDatetime = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        return this.compareDate(first$$1, second) ||
            this.getHour(first$$1) - this.getHour(second) ||
            this.getMinute(first$$1) - this.getMinute(second);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameDatetime = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        if (first$$1 && second) {
            /** @type {?} */
            var firstValid = this.isValid(first$$1);
            /** @type {?} */
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDatetime(first$$1, second);
            }
            return firstValid === secondValid;
        }
        return first$$1 === second;
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameYear = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        return first$$1 && second && this.getYear(first$$1) === this.getYear(second);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameDay = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        return first$$1 && second && this.getDate(first$$1) === this.getDate(second) && this.sameMonthAndYear(first$$1, second);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameHour = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        return first$$1 && second && this.getHour(first$$1) === this.getHour(second) && this.sameDay(first$$1, second);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameMinute = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        return first$$1 && second && this.getMinute(first$$1) === this.getMinute(second) && this.sameHour(first$$1, second);
    };
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    DatetimeAdapter.prototype.sameMonthAndYear = /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */
    function (first$$1, second) {
        if (first$$1 && second) {
            /** @type {?} */
            var firstValid = this.isValid(first$$1);
            /** @type {?} */
            var secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !(this.getYear(first$$1) - this.getYear(second) ||
                    this.getMonth(first$$1) - this.getMonth(second));
            }
            return firstValid === secondValid;
        }
        return first$$1 === second;
    };
    // delegate
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.clone(date);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    DatetimeAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this._delegate.addCalendarYears(date, years);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    DatetimeAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        return this._delegate.addCalendarMonths(date, months);
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    DatetimeAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this._delegate.addCalendarDays(date, days);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getYear(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getMonth(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getDate(date);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getDayOfWeek(date);
    };
    /**
     * @param {?} style
     * @return {?}
     */
    DatetimeAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style$$1) {
        return this._delegate.getMonthNames(style$$1);
    };
    /**
     * @return {?}
     */
    DatetimeAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        return this._delegate.getDateNames();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    DatetimeAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style$$1) {
        return this._delegate.getDayOfWeekNames(style$$1);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getYearName(date);
    };
    /**
     * @return {?}
     */
    DatetimeAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._delegate.getFirstDayOfWeek();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.getNumDaysInMonth(date);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        return this._delegate.createDate(year, month, date);
    };
    /**
     * @return {?}
     */
    DatetimeAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return this._delegate.today();
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    DatetimeAdapter.prototype.parse = /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    function (value, parseFormat) {
        return this._delegate.parse(value, parseFormat);
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    DatetimeAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        return this._delegate.format(date, displayFormat);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.toIso8601(date);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DatetimeAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return this._delegate.isDateInstance(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DatetimeAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._delegate.isValid(date);
    };
    /**
     * @return {?}
     */
    DatetimeAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return this._delegate.invalid();
    };
    /**
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    DatetimeAdapter.prototype.clampDate = /**
     * @param {?} date
     * @param {?=} min
     * @param {?=} max
     * @return {?}
     */
    function (date, min, max) {
        if (min && this.compareDatetime(date, min) < 0) {
            return min;
        }
        if (max && this.compareDatetime(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DatetimeAdapter;
}(__WEBPACK_IMPORTED_MODULE_1__angular_material_core__["DateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_DATETIME_FORMATS = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]("mat-datetime-formats");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ɵ0 = function (i) { return String(i); };
/** *
 * The default hour names to use if Intl API is not available.
  @type {?} */
var DEFAULT_HOUR_NAMES = range(24, ɵ0);
var ɵ1 = function (i) { return String(i); };
/** *
 * The default minute names to use if Intl API is not available.
  @type {?} */
var DEFAULT_MINUTE_NAMES = range(60, ɵ1);
/**
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var NativeDatetimeAdapter = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(NativeDatetimeAdapter, _super);
    function NativeDatetimeAdapter(matDateLocale, _delegate) {
        var _this = _super.call(this, _delegate) || this;
        _this.setLocale(matDateLocale);
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.createDatetime(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getHours();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getMinutes();
    };
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.isInNextMonth = /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    function (startDate, endDate) {
        /** @type {?} */
        var nextMonth = this.getDateInNextMonth(startDate);
        return this.sameMonthAndYear(nextMonth, endDate);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.createDatetime = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    function (year, month, date, hour, minute) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hour < 0 || hour > 23) {
            throw Error("Invalid hour \"" + hour + "\". Hour has to be between 0 and 23.");
        }
        if (minute < 0 || minute > 59) {
            throw Error("Invalid minute \"" + minute + "\". Minute has to be between 0 and 59.");
        }
        /** @type {?} */
        var result = this._createDateWithOverflow(year, month, date, hour, minute);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() !== month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getDateInNextMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours(), date.getMinutes());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getFirstDateOfMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var result = new Date();
        result.setFullYear(date.getFullYear(), date.getMonth(), 1);
        return result;
    };
    /**
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getHourNames = /**
     * @return {?}
     */
    function () {
        return DEFAULT_HOUR_NAMES;
    };
    /**
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.getMinuteNames = /**
     * @return {?}
     */
    function () {
        return DEFAULT_MINUTE_NAMES;
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        /** @type {?} */
        var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date), this.getHour(date), this.getMinute(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) !== ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0, this.getHour(date), this.getMinute(date));
        }
        return newDate;
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days, this.getHour(date), this.getMinute(date));
    };
    /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.addCalendarHours = /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    function (date, hours) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date) + hours, this.getMinute(date));
    };
    /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.addCalendarMinutes = /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    function (date, minutes) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date), this.getHour(date), this.getMinute(date) + minutes);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDatetimeAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return _super.prototype.toIso8601.call(this, date) + "T" + [
            this._2digit(date.getUTCHours()),
            this._2digit(date.getUTCMinutes())
        ].join(":");
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    NativeDatetimeAdapter.prototype._stripDirectionalityCharacters = /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    function (str) {
        return str.replace(/[\u200e\u200f]/g, "");
    };
    /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    NativeDatetimeAdapter.prototype._2digit = /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    function (n) {
        return ("00" + n).slice(-2);
    };
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hours
     * @param {?} minutes
     * @return {?}
     */
    NativeDatetimeAdapter.prototype._createDateWithOverflow = /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hours
     * @param {?} minutes
     * @return {?}
     */
    function (year, month, date, hours, minutes) {
        /** @type {?} */
        var result = new Date(year, month, date, hours, minutes);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    NativeDatetimeAdapter.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    NativeDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["MAT_DATE_LOCALE"],] }] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_material__["DateAdapter"] }
    ]; };
    return NativeDatetimeAdapter;
}(DatetimeAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_NATIVE_DATETIME_FORMATS = {
    parse: {},
    display: {
        dateInput: { year: "numeric", month: "2-digit", day: "2-digit" },
        monthInput: { month: "long" },
        datetimeInput: { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" },
        timeInput: { hour: "2-digit", minute: "2-digit" },
        monthYearLabel: { year: "numeric", month: "short" },
        dateA11yLabel: { year: "numeric", month: "long", day: "numeric" },
        monthYearA11yLabel: { year: "numeric", month: "long" },
        popupHeaderDateLabel: { weekday: "short", month: "short", day: "2-digit" }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NativeDatetimeModule = /** @class */ (function () {
    function NativeDatetimeModule() {
    }
    NativeDatetimeModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["NativeDateModule"]],
                    providers: [
                        {
                            provide: DatetimeAdapter,
                            useClass: NativeDatetimeAdapter
                        }
                    ]
                },] },
    ];
    return NativeDatetimeModule;
}());
var ɵ0$1 = MAT_NATIVE_DATETIME_FORMATS;
var MatNativeDatetimeModule = /** @class */ (function () {
    function MatNativeDatetimeModule() {
    }
    MatNativeDatetimeModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                    imports: [
                        NativeDatetimeModule,
                        __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatNativeDateModule"]
                    ],
                    providers: [{ provide: MAT_DATETIME_FORMATS, useValue: ɵ0$1 }]
                },] },
    ];
    return MatNativeDatetimeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
  @type {?} */
var fadeInContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])("fadeInContent", [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["state"])("showing", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ opacity: 1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])("void => showing", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);
/** @type {?} */
var slideCalendar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])("slideCalendar", [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])("* => left", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])(180, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(100%)", offset: 0.5 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(-100%)", offset: 0.51 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(0)", offset: 1 })
        ]))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])("* => right", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])(180, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["keyframes"])([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(-100%)", offset: 0.5 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(100%)", offset: 0.51 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({ transform: "translateX(0)", offset: 1 })
        ]))
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 * @param {?} provider
 * @return {?}
 */
function createMissingDateImplError(provider) {
    return Error("MatDatetimepicker: No provider found for " + provider + ". You must import one of the following " +
        "modules at your application root: MatNativeDatetimeModule, MatMomentDatetimeModule, or provide a " +
        "custom implementation.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
var MatDatetimepickerFilterType = {
    DATE: 0, HOUR: 1, MINUTE: 2,
};
MatDatetimepickerFilterType[MatDatetimepickerFilterType.DATE] = 'DATE';
MatDatetimepickerFilterType[MatDatetimepickerFilterType.HOUR] = 'HOUR';
MatDatetimepickerFilterType[MatDatetimepickerFilterType.MINUTE] = 'MINUTE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * A calendar that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
var MatDatetimepickerCalendar = /** @class */ (function () {
    function MatDatetimepickerCalendar(_elementRef, _intl, _ngZone, _adapter, _dateFormats, changeDetectorRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._intl = _intl;
        this._ngZone = _ngZone;
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.type = "date";
        /**
         * Whether the calendar should be started in month or year view.
         */
        this.startView = "month";
        this.timeInterval = 1;
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Date filter for the month and year views.
         */
        this._dateFilterForViews = function (date) {
            return !!date &&
                (!_this.dateFilter || _this.dateFilter(date, MatDatetimepickerFilterType.DATE)) &&
                (!_this.minDate || _this._adapter.compareDate(date, _this.minDate) >= 0) &&
                (!_this.maxDate || _this._adapter.compareDate(date, _this.maxDate) <= 0);
        };
        /**
         * Whether the calendar is in month view.
         */
        this._currentView = "month";
        this._clockView = "hour";
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        this._intlChanges = _intl.changes.subscribe(function () { return changeDetectorRef.markForCheck(); });
    }
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "startAt", {
        /** A date representing the period (month or year) to start the calendar in. */
        get: /**
         * A date representing the period (month or year) to start the calendar in.
         * @return {?}
         */
        function () {
            return this._startAt;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._startAt = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._minDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._maxDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._adapter.getValidDateOrNull(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_activeDate", {
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         */
        get: /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */
        function () {
            return this._clampedActiveDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._clampedActiveDate;
            this._clampedActiveDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
            if (oldActiveDate && this._clampedActiveDate && this._currentView === "month" &&
                !this._adapter.sameMonthAndYear(oldActiveDate, this._clampedActiveDate)) {
                if (this._adapter.isInNextMonth(oldActiveDate, this._clampedActiveDate)) {
                    this.calendarState("right");
                }
                else {
                    this.calendarState("left");
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._userSelected = /**
     * @return {?}
     */
    function () {
        this._userSelection.emit();
    };
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_yearLabel", {
        /** The label for the current calendar view. */
        get: /**
         * The label for the current calendar view.
         * @return {?}
         */
        function () {
            return this._adapter.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_monthYearLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentView === "month" ? this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)] :
                this._adapter.getYearName(this._activeDate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_dateLabel", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.type) {
                case "month":
                    return this._adapter.getMonthNames("long")[this._adapter.getMonth(this._activeDate)];
                default:
                    return this._adapter.format(this._activeDate, this._dateFormats.display.popupHeaderDateLabel);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_hoursLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._2digit(this._adapter.getHour(this._activeDate));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerCalendar.prototype, "_minutesLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this._2digit(this._adapter.getMinute(this._activeDate));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._activeDate = this.startAt || this._adapter.today();
        this._focusActiveCell();
        if (this.type === "month") {
            this._currentView = "year";
        }
        else if (this.type === "time") {
            this._currentView = "clock";
        }
        else {
            this._currentView = this.startView || "month";
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._intlChanges.unsubscribe();
    };
    /** Handles date selection in the month view. */
    /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._dateSelected = /**
     * Handles date selection in the month view.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this.type == "date") {
            if (!this._adapter.sameDate(date, this.selected)) {
                this.selectedChange.emit(date);
            }
        }
        else {
            this._activeDate = date;
            this._currentView = "clock";
        }
    };
    /** Handles month selection in the year view. */
    /**
     * Handles month selection in the year view.
     * @param {?} month
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._monthSelected = /**
     * Handles month selection in the year view.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (this.type == "month") {
            if (!this._adapter.sameMonthAndYear(month, this.selected)) {
                this.selectedChange.emit(this._adapter.getFirstDateOfMonth(month));
            }
        }
        else {
            this._activeDate = month;
            this._currentView = "month";
            this._clockView = "hour";
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._timeSelected = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (this._clockView !== "minute") {
            this._activeDate = date;
            this._clockView = "minute";
        }
        else {
            if (!this._adapter.sameDatetime(date, this.selected)) {
                this.selectedChange.emit(date);
            }
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._onActiveDateChange = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this._activeDate = date;
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._yearClicked = /**
     * @return {?}
     */
    function () {
        this._currentView = "year";
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._dateClicked = /**
     * @return {?}
     */
    function () {
        if (this.type !== "month") {
            this._currentView = "month";
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._hoursClicked = /**
     * @return {?}
     */
    function () {
        this._currentView = "clock";
        this._clockView = "hour";
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._minutesClicked = /**
     * @return {?}
     */
    function () {
        this._currentView = "clock";
        this._clockView = "minute";
    };
    /** Handles user clicks on the previous button. */
    /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._previousClicked = /**
     * Handles user clicks on the previous button.
     * @return {?}
     */
    function () {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, -1) :
            this._adapter.addCalendarYears(this._activeDate, -1);
    };
    /** Handles user clicks on the next button. */
    /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._nextClicked = /**
     * Handles user clicks on the next button.
     * @return {?}
     */
    function () {
        this._activeDate = this._currentView === "month" ?
            this._adapter.addCalendarMonths(this._activeDate, 1) :
            this._adapter.addCalendarYears(this._activeDate, 1);
    };
    /** Whether the previous period button is enabled. */
    /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._previousEnabled = /**
     * Whether the previous period button is enabled.
     * @return {?}
     */
    function () {
        if (!this.minDate) {
            return true;
        }
        return !this.minDate || !this._isSameView(this._activeDate, this.minDate);
    };
    /** Whether the next period button is enabled. */
    /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._nextEnabled = /**
     * Whether the next period button is enabled.
     * @return {?}
     */
    function () {
        return !this.maxDate || !this._isSameView(this._activeDate, this.maxDate);
    };
    /** Handles keydown events on the calendar body. */
    /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydown = /**
     * Handles keydown events on the calendar body.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        if (this._currentView === "month") {
            this._handleCalendarBodyKeydownInMonthView(event);
        }
        else if (this._currentView === "year") {
            this._handleCalendarBodyKeydownInYearView(event);
        }
        else {
            this._handleCalendarBodyKeydownInClockView(event);
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._focusActiveCell = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._ngZone.onStable.asObservable().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["first"])()).subscribe(function () {
                _this._elementRef.nativeElement.focus();
            });
        });
    };
    /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._isSameView = /**
     * Whether the two dates represent the same view in the current view mode (month or year).
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        return this._currentView === "month" ?
            this._adapter.getYear(date1) == this._adapter.getYear(date2) &&
                this._adapter.getMonth(date1) == this._adapter.getMonth(date2) :
            this._adapter.getYear(date1) == this._adapter.getYear(date2);
    };
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInMonthView = /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["LEFT_ARROW"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["RIGHT_ARROW"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["UP_ARROW"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, -7);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["DOWN_ARROW"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 7);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["HOME"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, 1 - this._adapter.getDate(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["END"]:
                this._activeDate = this._adapter.addCalendarDays(this._activeDate, (this._adapter.getNumDaysInMonth(this._activeDate) -
                    this._adapter.getDate(this._activeDate)));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["PAGE_UP"]:
                this._activeDate = event.altKey ?
                    this._adapter.addCalendarYears(this._activeDate, -1) :
                    this._adapter.addCalendarMonths(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["PAGE_DOWN"]:
                this._activeDate = event.altKey ?
                    this._adapter.addCalendarYears(this._activeDate, 1) :
                    this._adapter.addCalendarMonths(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["ENTER"]:
                if (this._dateFilterForViews(this._activeDate)) {
                    this._dateSelected(this._activeDate);
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInYearView = /**
     * Handles keydown events on the calendar body when calendar is in year view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["LEFT_ARROW"]:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["RIGHT_ARROW"]:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["UP_ARROW"]:
                this._activeDate = this._prevMonthInSameCol(this._activeDate);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["DOWN_ARROW"]:
                this._activeDate = this._nextMonthInSameCol(this._activeDate);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["HOME"]:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, -this._adapter.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["END"]:
                this._activeDate = this._adapter.addCalendarMonths(this._activeDate, 11 - this._adapter.getMonth(this._activeDate));
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["PAGE_UP"]:
                this._activeDate =
                    this._adapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["PAGE_DOWN"]:
                this._activeDate =
                    this._adapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["ENTER"]:
                this._monthSelected(this._activeDate);
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._handleCalendarBodyKeydownInClockView = /**
     * Handles keydown events on the calendar body when calendar is in month view.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["UP_ARROW"]:
                this._activeDate = this._clockView == "hour" ?
                    this._adapter.addCalendarHours(this._activeDate, 1) :
                    this._adapter.addCalendarMinutes(this._activeDate, 1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["DOWN_ARROW"]:
                this._activeDate = this._clockView == "hour" ?
                    this._adapter.addCalendarHours(this._activeDate, -1) :
                    this._adapter.addCalendarMinutes(this._activeDate, -1);
                break;
            case __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["ENTER"]:
                this._timeSelected(this._activeDate);
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    };
    /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._prevMonthInSameCol = /**
     * Determine the date for the month that comes before the given month in the same column in the
     * calendar table.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var increment = this._adapter.getMonth(date) <= 4 ? -5 :
            (this._adapter.getMonth(date) >= 7 ? -7 : -12);
        return this._adapter.addCalendarMonths(date, increment);
    };
    /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._nextMonthInSameCol = /**
     * Determine the date for the month that comes after the given month in the same column in the
     * calendar table.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var increment = this._adapter.getMonth(date) <= 4 ? 7 :
            (this._adapter.getMonth(date) >= 7 ? 5 : 12);
        return this._adapter.addCalendarMonths(date, increment);
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype.calendarState = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this._calendarState = direction;
    };
    /**
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._calendarStateDone = /**
     * @return {?}
     */
    function () {
        this._calendarState = "";
    };
    /**
     * @param {?} n
     * @return {?}
     */
    MatDatetimepickerCalendar.prototype._2digit = /**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        return ("00" + n).slice(-2);
    };
    MatDatetimepickerCalendar.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-calendar",
                    template: "<div class=\"mat-datetimepicker-calendar-header\">\n  <div *ngIf=\"type !== 'time'\"\n       class=\"mat-datetimepicker-calendar-header-year\"\n       [class.active]=\"_currentView == 'year'\"\n       (click)=\"_yearClicked()\">{{ _yearLabel }}</div>\n  <div class=\"mat-datetimepicker-calendar-header-date-time\">\n    <span *ngIf=\"type !== 'time'\"\n          class=\"mat-datetimepicker-calendar-header-date\"\n          [class.active]=\"_currentView == 'month'\"\n          [class.not-clickable]=\"type === 'month'\"\n          (click)=\"_dateClicked()\">{{ _dateLabel }}</span>\n    <span *ngIf=\"type.endsWith('time')\"\n          class=\"mat-datetimepicker-calendar-header-time\"\n          [class.active]=\"_currentView == 'clock'\">\n      <span class=\"mat-datetimepicker-calendar-header-hours\"\n            [class.active]=\"_clockView == 'hour'\"\n            (click)=\"_hoursClicked()\">{{ _hoursLabel }}</span>:<span class=\"mat-datetimepicker-calendar-header-minutes\"\n                                                                     [class.active]=\"_clockView == 'minute'\"\n                                                                     (click)=\"_minutesClicked()\">{{ _minutesLabel }}</span>\n    </span>\n  </div>\n</div>\n<div class=\"mat-datetimepicker-calendar-content\" [ngSwitch]=\"_currentView\">\n  <div class=\"mat-month-content\" *ngIf=\"_currentView === 'month' || _currentView === 'year'\">\n    <div class=\"mat-datetimepicker-calendar-controls\">\n      <div class=\"mat-datetimepicker-calendar-previous-button\"\n           [class.disabled]=\"!_previousEnabled()\" (click)=\"_previousClicked()\"\n           aria-label=\"Previous month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"></path>\n        </svg>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-period-button\" [@slideCalendar]=\"_calendarState\" (@slideCalendar.done)=\"_calendarStateDone()\">\n        <strong>{{ _monthYearLabel }}</strong>\n      </div>\n      <div class=\"mat-datetimepicker-calendar-next-button\"\n           [class.disabled]=\"!_nextEnabled()\" (click)=\"_nextClicked()\"\n           aria-label=\"Next month\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"></path>\n        </svg>\n      </div>\n    </div>\n  </div>\n  <mat-datetimepicker-month-view *ngSwitchCase=\"'month'\"\n                  [activeDate]=\"_activeDate\"\n                  [type]=\"type\"\n                  [selected]=\"selected\"\n                  [dateFilter]=\"_dateFilterForViews\"\n                  (selectedChange)=\"_dateSelected($event)\"\n                  (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-month-view>\n  <mat-datetimepicker-year-view *ngSwitchCase=\"'year'\"\n                 [activeDate]=\"_activeDate\"\n                 [type]=\"type\"\n                 [selected]=\"selected\"\n                 [dateFilter]=\"_dateFilterForViews\"\n                 (selectedChange)=\"_monthSelected($event)\"\n                 (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-year-view>\n  <mat-datetimepicker-clock *ngSwitchDefault\n             [startView]=\"_clockView\"\n             [interval]=\"timeInterval\"\n             [minDate]=\"minDate\"\n             [maxDate]=\"maxDate\"\n             [dateFilter]=\"dateFilter\"\n             [selected]=\"_activeDate\"\n             (activeDateChange)=\"_onActiveDateChange($event)\"\n             (selectedChange)=\"_timeSelected($event)\"\n             (_userSelection)=\"_userSelected()\">\n  </mat-datetimepicker-clock>\n</div>\n",
                    styles: [".mat-datetimepicker-calendar{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;outline:0}.mat-datetimepicker-calendar[mode=landscape]{display:flex}.mat-datetimepicker-calendar-header{padding:16px;font-size:14px;color:#fff;box-sizing:border-box}[mode=landscape] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar-header-date-time,.mat-datetimepicker-calendar-header-year{width:100%;font-weight:500;white-space:nowrap}.mat-datetimepicker-calendar-header-date-time{font-size:30px;line-height:34px}[mode=landscape] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar-header-date:not(.active),.mat-datetimepicker-calendar-header-hours:not(.active),.mat-datetimepicker-calendar-header-minutes:not(.active),.mat-datetimepicker-calendar-header-year:not(.active){cursor:pointer;opacity:.6}.mat-datetimepicker-calendar-header-date.not-clickable,.mat-datetimepicker-calendar-header-hours.not-clickable,.mat-datetimepicker-calendar-header-minutes.not-clickable,.mat-datetimepicker-calendar-header-year.not-clickable{cursor:initial}.mat-datetimepicker-calendar-header-time{padding-left:8px}.mat-datetimepicker-calendar-header-time:not(.active){opacity:.6}.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-hours,.mat-datetimepicker-calendar-header-time:not(.active) .mat-datetimepicker-calendar-header-minutes{cursor:pointer;opacity:1}[mode=landscape] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar-content{width:100%;padding:0 8px 8px;outline:0;box-sizing:border-box;overflow:hidden}[mode=landscape] .mat-datetimepicker-calendar-content{padding-top:8px}.mat-datetimepicker-calendar-controls{display:flex;justify-content:space-between}.mat-datetimepicker-calendar-period-button{display:inline-block;height:48px;padding:12px;outline:0;border:0;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button,.mat-datetimepicker-calendar-previous-button{display:inline-block;width:48px;height:48px;padding:12px;outline:0;border:0;cursor:pointer;background:0 0;box-sizing:border-box}.mat-datetimepicker-calendar-next-button.disabled,.mat-datetimepicker-calendar-previous-button.disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-calendar-next-button svg,.mat-datetimepicker-calendar-previous-button svg{fill:currentColor;vertical-align:top}.mat-datetimepicker-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-datetimepicker-calendar-table-header{color:rgba(0,0,0,.38)}.mat-datetimepicker-calendar-table-header th{text-align:center;font-size:11px;padding:0 0 8px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{display:flex}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header{width:150px;min-width:150px}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-date-time{white-space:normal;word-wrap:break-word}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-header-time{display:block;padding-left:0}.mat-datetimepicker-calendar[mode=auto] .mat-datetimepicker-calendar-content{padding-top:8px}}"],
                    host: {
                        "[class.mat-datetimepicker-calendar]": "true",
                        "tabindex": "0",
                        "(keydown)": "_handleCalendarBodyKeydown($event)"
                    },
                    animations: [slideCalendar],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerCalendar.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] },
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatDatepickerIntl"] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"] },
        { type: DatetimeAdapter, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [MAT_DATETIME_FORMATS,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"] }
    ]; };
    MatDatetimepickerCalendar.propDecorators = {
        _userSelection: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        type: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        startAt: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        startView: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selected: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        minDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        maxDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        timeInterval: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        dateFilter: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerCalendar;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
var  /**
 * An internal class that represents the data corresponding to a single calendar cell.
 * \@docs-private
 */
MatDatetimepickerCalendarCell = /** @class */ (function () {
    function MatDatetimepickerCalendarCell(value, displayValue, ariaLabel, enabled) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
    }
    return MatDatetimepickerCalendarCell;
}());
/**
 * An internal component used to display calendar data in a table.
 * \@docs-private
 */
var MatDatetimepickerCalendarBody = /** @class */ (function () {
    function MatDatetimepickerCalendarBody() {
        /**
         * The number of columns in the table.
         */
        this.numCols = 7;
        /**
         * Whether to allow selection of disabled cells.
         */
        this.allowDisabledSelection = false;
        /**
         * The cell number of the active cell in the table.
         */
        this.activeCell = 0;
        /**
         * Emits when a new value is selected.
         */
        this.selectedValueChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    MatDatetimepickerCalendarBody.prototype._cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        if (!this.allowDisabledSelection && !cell.enabled) {
            return;
        }
        this.selectedValueChange.emit(cell.value);
    };
    Object.defineProperty(MatDatetimepickerCalendarBody.prototype, "_firstRowOffset", {
        /** The number of blank cells to put at the beginning for the first row. */
        get: /**
         * The number of blank cells to put at the beginning for the first row.
         * @return {?}
         */
        function () {
            return this.rows && this.rows.length && this.rows[0].length ?
                this.numCols - this.rows[0].length : 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    MatDatetimepickerCalendarBody.prototype._isActiveCell = /**
     * @param {?} rowIndex
     * @param {?} colIndex
     * @return {?}
     */
    function (rowIndex, colIndex) {
        /** @type {?} */
        var cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber === this.activeCell;
    };
    MatDatetimepickerCalendarBody.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "[mat-datetimepicker-calendar-body]",
                    template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-datetimepicker-calendar-body-label\" [attr.colspan]=\"numCols\" >{{ label }}</td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-datetimepicker-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\">\n    {{ _firstRowOffset >= labelMinRequiredCells ? label : '' }}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-datetimepicker-calendar-body-cell\"\n      [class.mat-datetimepicker-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-datetimepicker-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      (click)=\"_cellClicked(item)\">\n    <div class=\"mat-datetimepicker-calendar-body-cell-content\"\n         [class.mat-datetimepicker-calendar-body-selected]=\"selectedValue === item.value\"\n         [class.mat-datetimepicker-calendar-body-today]=\"todayValue === item.value\">\n      {{ item.displayValue }}\n    </div>\n  </td>\n</tr>\n",
                    styles: [".mat-datetimepicker-calendar-body{font-size:13px;min-width:224px}.mat-datetimepicker-calendar-body-label{padding:7.14286% 0 7.14286% 7.14286%;height:0;line-height:0;color:rgba(0,0,0,.54);-webkit-transform:translateX(-6px);transform:translateX(-6px);text-align:left}.mat-datetimepicker-calendar-body-cell{position:relative;width:14.28571%;height:0;line-height:0;padding:7.14286% 0;text-align:center;outline:0;cursor:pointer}.mat-datetimepicker-calendar-body-disabled{cursor:default;pointer-events:none}.mat-datetimepicker-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;color:rgba(0,0,0,.87);border:1px solid transparent;border-radius:50%}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){color:rgba(0,0,0,.38)}.mat-calendar:focus .mat-datetimepicker-calendar-body-active>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected),:not(.mat-datetimepicker-calendar-body-disabled):hover>.mat-datetimepicker-calendar-body-cell-content:not(.mat-datetimepicker-calendar-body-selected){background-color:rgba(0,0,0,.12)}.mat-datetimepicker-calendar-body-disabled>.mat-datetimepicker-calendar-body-today:not(.mat-datetimepicker-calendar-body-selected){border-color:rgba(0,0,0,.18)}[dir=rtl] .mat-datetimepicker-calendar-body-label{padding:0 7.14286% 0 0;-webkit-transform:translateX(6px);transform:translateX(6px);text-align:right}"],
                    host: {
                        "class": "mat-datetimepicker-calendar-body"
                    },
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    MatDatetimepickerCalendarBody.propDecorators = {
        label: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        rows: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        todayValue: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedValue: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        labelMinRequiredCells: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        numCols: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        allowDisabledSelection: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        activeCell: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedValueChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerCalendarBody;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CLOCK_RADIUS = 50;
/** @type {?} */
var CLOCK_INNER_RADIUS = 27.5;
/** @type {?} */
var CLOCK_OUTER_RADIUS = 41.25;
/** @type {?} */
var CLOCK_TICK_RADIUS = 7.0833;
/**
 * A clock that is used as part of the datepicker.
 * \@docs-private
 * @template D
 */
var MatDatetimepickerClock = /** @class */ (function () {
    function MatDatetimepickerClock(_element, _adapter) {
        var _this = this;
        this._element = _element;
        this._adapter = _adapter;
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this._timeChanged = false;
        this.interval = 1;
        this.twelvehour = false;
        /**
         * Emits when the currently selected date changes.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.activeDateChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Hours and Minutes representing the clock view.
         */
        this._hours = [];
        this._minutes = [];
        /**
         * Whether the clock is in hour view.
         */
        this._hourView = true;
        this.mouseMoveListener = function (event) {
            _this._handleMousemove(event);
        };
        this.mouseUpListener = function () {
            _this._handleMouseup();
        };
    }
    Object.defineProperty(MatDatetimepickerClock.prototype, "activeDate", {
        /**
         * The date to display in this clock view.
         */
        get: /**
         * The date to display in this clock view.
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            this._activeDate = this._adapter.clampDate(value, this.minDate, this.maxDate);
            if (!this._adapter.sameMinute(oldActiveDate, this._activeDate)) {
                this._init();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
            if (this._selected) {
                this.activeDate = this._selected;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._minDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._maxDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxDate = this._adapter.getValidDateOrNull(this._adapter.deserialize(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "startView", {
        /** Whether the clock should be started in hour or minute view. */
        set: /**
         * Whether the clock should be started in hour or minute view.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hourView = value != "minute";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerClock.prototype, "_hand", {
        get: /**
         * @return {?}
         */
        function () {
            this._selectedHour = this._adapter.getHour(this.activeDate);
            this._selectedMinute = this._adapter.getMinute(this.activeDate);
            /** @type {?} */
            var deg = 0;
            /** @type {?} */
            var radius = CLOCK_OUTER_RADIUS;
            if (this._hourView) {
                /** @type {?} */
                var outer = this._selectedHour > 0 && this._selectedHour < 13;
                radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                if (this.twelvehour) {
                    radius = CLOCK_OUTER_RADIUS;
                }
                deg = Math.round(this._selectedHour * (360 / (24 / 2)));
            }
            else {
                deg = Math.round(this._selectedMinute * (360 / 60));
            }
            return {
                "transform": "rotate(" + deg + "deg)",
                "height": radius + "%",
                "margin-top": 50 - radius + "%"
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerClock.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.activeDate = this._activeDate || this._adapter.today();
        this._init();
    };
    /** Handles mousedown events on the clock body. */
    /**
     * Handles mousedown events on the clock body.
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerClock.prototype._handleMousedown = /**
     * Handles mousedown events on the clock body.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._timeChanged = false;
        this.setTime(event);
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchmove", this.mouseMoveListener);
        document.addEventListener("mouseup", this.mouseUpListener);
        document.addEventListener("touchend", this.mouseUpListener);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerClock.prototype._handleMousemove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setTime(event);
    };
    /**
     * @return {?}
     */
    MatDatetimepickerClock.prototype._handleMouseup = /**
     * @return {?}
     */
    function () {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchmove", this.mouseMoveListener);
        document.removeEventListener("mouseup", this.mouseUpListener);
        document.removeEventListener("touchend", this.mouseUpListener);
        if (this._timeChanged) {
            this.selectedChange.emit(this.activeDate);
            if (!this._hourView) {
                this._userSelection.emit();
            }
        }
    };
    /**
     * Initializes this clock view.
     * @return {?}
     */
    MatDatetimepickerClock.prototype._init = /**
     * Initializes this clock view.
     * @return {?}
     */
    function () {
        this._hours.length = 0;
        this._minutes.length = 0;
        /** @type {?} */
        var hourNames = this._adapter.getHourNames();
        /** @type {?} */
        var minuteNames = this._adapter.getMinuteNames();
        if (this.twelvehour) {
            for (var i = 1; i < (hourNames.length / 2) + 1; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var radius = CLOCK_OUTER_RADIUS;
                /** @type {?} */
                var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i + 1, 0);
                /** @type {?} */
                var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0);
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS
                });
            }
        }
        else {
            for (var i = 0; i < hourNames.length; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var outer = i > 0 && i < 13;
                /** @type {?} */
                var radius = outer ? CLOCK_OUTER_RADIUS : CLOCK_INNER_RADIUS;
                /** @type {?} */
                var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), i, 0);
                /** @type {?} */
                var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                    (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                    (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.HOUR));
                this._hours.push({
                    value: i,
                    displayValue: i === 0 ? "00" : hourNames[i],
                    enabled: enabled,
                    top: CLOCK_RADIUS - Math.cos(radian) * radius - CLOCK_TICK_RADIUS,
                    left: CLOCK_RADIUS + Math.sin(radian) * radius - CLOCK_TICK_RADIUS,
                    fontSize: i > 0 && i < 13 ? "" : "80%"
                });
            }
        }
        for (var i = 0; i < minuteNames.length; i += 5) {
            /** @type {?} */
            var radian = i / 30 * Math.PI;
            /** @type {?} */
            var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), i);
            /** @type {?} */
            var enabled = (!this.minDate || this._adapter.compareDatetime(date, this.minDate) >= 0) &&
                (!this.maxDate || this._adapter.compareDatetime(date, this.maxDate) <= 0) &&
                (!this.dateFilter || this.dateFilter(date, MatDatetimepickerFilterType.MINUTE));
            this._minutes.push({
                value: i,
                displayValue: i === 0 ? "00" : minuteNames[i],
                enabled: enabled,
                top: CLOCK_RADIUS - Math.cos(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS,
                left: CLOCK_RADIUS + Math.sin(radian) * CLOCK_OUTER_RADIUS - CLOCK_TICK_RADIUS
            });
        }
    };
    /**
     * Set Time
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerClock.prototype.setTime = /**
     * Set Time
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var trigger$$1 = this._element.nativeElement;
        /** @type {?} */
        var triggerRect = trigger$$1.getBoundingClientRect();
        /** @type {?} */
        var width = trigger$$1.offsetWidth;
        /** @type {?} */
        var height = trigger$$1.offsetHeight;
        /** @type {?} */
        var pageX = event.pageX !== undefined ? event.pageX : event.touches[0].pageX;
        /** @type {?} */
        var pageY = event.pageY !== undefined ? event.pageY : event.touches[0].pageY;
        /** @type {?} */
        var x = (width / 2) - (pageX - triggerRect.left - window.pageXOffset);
        /** @type {?} */
        var y = (height / 2) - (pageY - triggerRect.top - window.pageYOffset);
        /** @type {?} */
        var radian = Math.atan2(-x, y);
        /** @type {?} */
        var unit = Math.PI / (this._hourView ? 6 : (this.interval ? (30 / this.interval) : 30));
        /** @type {?} */
        var z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        var outer = this._hourView && z > ((width * (CLOCK_OUTER_RADIUS / 100)) +
            (width * (CLOCK_INNER_RADIUS / 100))) / 2;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        /** @type {?} */
        var value = Math.round(radian / unit);
        /** @type {?} */
        var date;
        if (this._hourView) {
            if (this.twelvehour) {
                value = value === 0 ? 12 : value;
            }
            else {
                if (value === 12) {
                    value = 0;
                }
                value = outer ? (value === 0 ? 12 : value) : value === 0 ? 0 : value + 12;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), value, this._adapter.getMinute(this.activeDate));
        }
        else {
            if (this.interval) {
                value *= this.interval;
            }
            if (value === 60) {
                value = 0;
            }
            date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), value);
        }
        /** @type {?} */
        var clamped = this._adapter.clampDate(date, this.minDate, this.maxDate);
        if (date === clamped) {
            this._timeChanged = true;
            this.activeDate = clamped;
            this.activeDateChange.emit(this.activeDate);
        }
    };
    MatDatetimepickerClock.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-clock",
                    template: "<div class=\"mat-datetimepicker-clock\">\n  <div class=\"mat-datetimepicker-clock-center\"></div>\n  <div class=\"mat-datetimepicker-clock-hand\" [ngStyle]=\"_hand\"></div>\n  <div class=\"mat-datetimepicker-clock-hours\" [class.active]=\"_hourView\">\n    <div *ngFor=\"let item of _hours\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedHour == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\"\n         [style.fontSize]=\"item.fontSize\">{{ item.displayValue }}</div>\n  </div>\n  <div class=\"mat-datetimepicker-clock-minutes\" [class.active]=\"!_hourView\">\n    <div *ngFor=\"let item of _minutes\"\n         class=\"mat-datetimepicker-clock-cell\"\n         [class.mat-datetimepicker-clock-cell-selected]=\"_selectedMinute == item.value\"\n         [class.mat-datetimepicker-clock-cell-disabled]=\"!item.enabled\"\n         [style.top]=\"item.top+'%'\"\n         [style.left]=\"item.left+'%'\">{{ item.displayValue }}</div>\n  </div>\n</div>\n",
                    styles: [":host{position:relative;display:block;min-width:224px;margin:8px;font-size:14px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mat-datetimepicker-clock{position:relative;width:100%;height:0;padding-top:100%;background-color:#e0e0e0;border-radius:50%}.mat-datetimepicker-clock-center{position:absolute;top:50%;left:50%;width:2%;height:2%;margin:-1%;border-radius:50%}.mat-datetimepicker-clock-hand{position:absolute;top:0;right:0;bottom:0;left:0;width:1px;margin:0 auto;-webkit-transform-origin:bottom;transform-origin:bottom}.mat-datetimepicker-clock-hand::before{content:'';position:absolute;top:-4px;left:-4px;width:8px;height:8px;border-radius:50%}.mat-datetimepicker-clock-hours,.mat-datetimepicker-clock-minutes{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;visibility:hidden;transition:350ms;-webkit-transform:scale(1.2);transform:scale(1.2)}.mat-datetimepicker-clock-hours.active,.mat-datetimepicker-clock-minutes.active{opacity:1;visibility:visible;-webkit-transform:scale(1);transform:scale(1)}.mat-datetimepicker-clock-minutes{-webkit-transform:scale(.8);transform:scale(.8)}.mat-datetimepicker-clock-cell{position:absolute;display:flex;width:14.1666%;height:14.1666%;color:rgba(0,0,0,.87);justify-content:center;box-sizing:border-box;border-radius:50%;align-items:center;cursor:pointer}.mat-datetimepicker-clock-cell:not(.mat-datetimepicker-clock-cell-selected):not(.mat-datetimepicker-clock-cell-disabled):hover{background-color:rgba(0,0,0,.1)}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-disabled{color:rgba(0,0,0,.38);pointer-events:none}.mat-datetimepicker-clock-cell.mat-datetimepicker-clock-cell-selected{color:#fff}"],
                    host: {
                        "role": "clock",
                        "(mousedown)": "_handleMousedown($event)"
                    }
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerClock.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] },
        { type: DatetimeAdapter }
    ]; };
    MatDatetimepickerClock.propDecorators = {
        _userSelection: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        activeDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selected: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        minDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        maxDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        startView: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        dateFilter: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        interval: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        twelvehour: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        activeDateChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerClock;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Used to generate a unique ID for each datepicker instance.
  @type {?} */
var datetimepickerUid = 0;
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * \@docs-private
 * @template D
 */
var MatDatetimepickerContent = /** @class */ (function () {
    function MatDatetimepickerContent() {
    }
    /**
     * @return {?}
     */
    MatDatetimepickerContent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._calendar._focusActiveCell();
    };
    /**
     * Handles keydown event on datepicker content.
     * @param event The event.
     */
    /**
     * Handles keydown event on datepicker content.
     * @param {?} event The event.
     * @return {?}
     */
    MatDatetimepickerContent.prototype._handleKeydown = /**
     * Handles keydown event on datepicker content.
     * @param {?} event The event.
     * @return {?}
     */
    function (event) {
        if (event.keyCode === __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["ESCAPE"]) {
            this.datetimepicker.close();
            event.preventDefault();
            event.stopPropagation();
        }
    };
    MatDatetimepickerContent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-content",
                    template: "<mat-datetimepicker-calendar class=\"mat-typography\" cdkTrapFocus\n              [id]=\"datetimepicker.id\"\n              [attr.mode]=\"datetimepicker.mode\"\n              [startView]=\"datetimepicker.startView\"\n              [type]=\"datetimepicker.type\"\n              [timeInterval]=\"datetimepicker.timeInterval\"\n              [minDate]=\"datetimepicker._minDate\"\n              [maxDate]=\"datetimepicker._maxDate\"\n              [dateFilter]=\"datetimepicker._dateFilter\"\n              [selected]=\"datetimepicker._selected\"\n              [startAt]=\"datetimepicker.startAt\"\n              (selectedChange)=\"datetimepicker._select($event)\"\n              (_userSelection)=\"datetimepicker.close()\">\n</mat-datetimepicker-calendar>\n",
                    styles: [".mat-datetimepicker-content{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:block;background-color:#fff;border-radius:2px;overflow:hidden}.mat-datetimepicker-calendar{width:296px;height:405px}.mat-datetimepicker-calendar[mode=landscape]{width:446px;height:328px}@media (min-width:480px){.mat-datetimepicker-calendar[mode=auto]{width:446px;height:328px}}.mat-datetimepicker-content-touch{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);display:block;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.48}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.6)}.mat-datetimepicker-dialog .mat-dialog-container{padding:0}"],
                    host: {
                        "class": "mat-datetimepicker-content",
                        "[class.mat-datetimepicker-content-touch]": "datetimepicker?.touchUi",
                        "(keydown)": "_handleKeydown($event)"
                    },
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    MatDatetimepickerContent.propDecorators = {
        _calendar: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"], args: [MatDatetimepickerCalendar,] }]
    };
    return MatDatetimepickerContent;
}());
/**
 * @template D
 */
var MatDatetimepicker = /** @class */ (function () {
    function MatDatetimepicker(_dialog, _overlay, _ngZone, _viewContainerRef, _scrollStrategy, _dateAdapter, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._scrollStrategy = _scrollStrategy;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */
        this.startView = "month";
        this.mode = "auto";
        this.timeInterval = 1;
        this._type = "date";
        this._touchUi = false;
        /**
         * Emits new selected date when selected date changes.
         * @deprecated Switch to the `dateChange` and `dateInput` binding on the input element.
         */
        this.selectedChanged = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */
        this.openedStream = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */
        this.closedStream = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Whether the calendar is open.
         */
        this.opened = false;
        /**
         * The id for the datepicker calendar.
         */
        this.id = "mat-datetimepicker-" + datetimepickerUid++;
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */
        this._focusedElementBeforeOpen = null;
        this._inputSubscription = __WEBPACK_IMPORTED_MODULE_13_rxjs__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */
        this._disabledChange = new __WEBPACK_IMPORTED_MODULE_13_rxjs__["Subject"]();
        if (!this._dateAdapter) {
            throw createMissingDateImplError("DateAdapter");
        }
    }
    Object.defineProperty(MatDatetimepicker.prototype, "startAt", {
        /** The date to open the calendar to initially. */
        get: /**
         * The date to open the calendar to initially.
         * @return {?}
         */
        function () {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        },
        set: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            this._startAt = this._dateAdapter.getValidDateOrNull(date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "openOnFocus", {
        get: /**
         * @return {?}
         */
        function () { return this._openOnFocus; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._openOnFocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepicker.prototype._handleFocus = /**
     * @return {?}
     */
    function () {
        if (!this.opened && this.openOnFocus) {
            this.open();
        }
    };
    Object.defineProperty(MatDatetimepicker.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value || "date";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "touchUi", {
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         */
        get: /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */
        function () {
            return this._touchUi;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._touchUi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "disabled", {
        /** Whether the datepicker pop-up should be disabled. */
        get: /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined && this._datepickerInput ?
                this._datepickerInput.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._disabledChange.next(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._validSelected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._validSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_minDate", {
        /** The minimum selectable date. */
        get: /**
         * The minimum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_maxDate", {
        /** The maximum selectable date. */
        get: /**
         * The maximum selectable date.
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepicker.prototype, "_dateFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._datepickerInput && this._datepickerInput._dateFilter;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepicker.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.close();
        this._inputSubscription.unsubscribe();
        this._disabledChange.complete();
        if (this._popupRef) {
            this._popupRef.dispose();
        }
    };
    /** Selects the given date */
    /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    MatDatetimepicker.prototype._select = /**
     * Selects the given date
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var oldValue = this._selected;
        this._selected = date;
        if (!this._dateAdapter.sameDatetime(oldValue, this._selected)) {
            // tslint:disable-next-line deprecation
            this.selectedChanged.emit(date);
        }
    };
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    MatDatetimepicker.prototype._registerInput = /**
     * Register an input with this datepicker.
     * @param {?} input The datepicker input to register with this datepicker.
     * @return {?}
     */
    function (input) {
        var _this = this;
        if (this._datepickerInput) {
            throw Error("A MatDatepicker can only be associated with a single input.");
        }
        this._datepickerInput = input;
        this._inputSubscription =
            this._datepickerInput._valueChange.subscribe(function (value) { return _this._selected = value; });
    };
    /** Open the calendar. */
    /**
     * Open the calendar.
     * @return {?}
     */
    MatDatetimepicker.prototype.open = /**
     * Open the calendar.
     * @return {?}
     */
    function () {
        if (this.opened || this.disabled) {
            return;
        }
        if (!this._datepickerInput) {
            throw Error("Attempted to open an MatDatepicker with no associated input.");
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this.opened = true;
        this.openedStream.emit();
    };
    /** Close the calendar. */
    /**
     * Close the calendar.
     * @return {?}
     */
    MatDatetimepicker.prototype.close = /**
     * Close the calendar.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._calendarPortal && this._calendarPortal.isAttached) {
            this._calendarPortal.detach();
        }
        /** @type {?} */
        var completeClose = function () {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this.opened) {
                _this.opened = false;
                _this.closedStream.emit();
                _this._focusedElementBeforeOpen = null;
            }
        };
        if (this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === "function") {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    };
    /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    MatDatetimepicker.prototype._openAsDialog = /**
     * Open the calendar as a dialog.
     * @return {?}
     */
    function () {
        var _this = this;
        this._dialogRef = this._dialog.open(MatDatetimepickerContent, {
            direction: this._dir ? this._dir.value : "ltr",
            viewContainerRef: this._viewContainerRef,
            panelClass: "mat-datetimepicker-dialog"
        });
        this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
        this._dialogRef.componentInstance.datetimepicker = this;
    };
    /**
     * Open the calendar as a popup.
     * @return {?}
     */
    MatDatetimepicker.prototype._openAsPopup = /**
     * Open the calendar as a popup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._calendarPortal) {
            this._calendarPortal = new __WEBPACK_IMPORTED_MODULE_10__angular_cdk_portal__["ComponentPortal"](MatDatetimepickerContent, this._viewContainerRef);
        }
        if (!this._popupRef) {
            this._createPopup();
        }
        if (!this._popupRef.hasAttached()) {
            /** @type {?} */
            var componentRef = this._popupRef.attach(this._calendarPortal);
            componentRef.instance.datetimepicker = this;
            // Update the position once the calendar has rendered.
            this._ngZone.onStable.asObservable().pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["first"])()).subscribe(function () {
                _this._popupRef.updatePosition();
            });
        }
        this._popupRef.backdropClick().subscribe(function () { return _this.close(); });
    };
    /**
     * Create the popup.
     * @return {?}
     */
    MatDatetimepicker.prototype._createPopup = /**
     * Create the popup.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overlayConfig = new __WEBPACK_IMPORTED_MODULE_9__angular_cdk_overlay__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: "mat-overlay-transparent-backdrop",
            direction: this._dir ? this._dir.value : "ltr",
            scrollStrategy: this._scrollStrategy(),
            panelClass: "mat-datetimepicker-popup"
        });
        this._popupRef = this._overlay.create(overlayConfig);
    };
    /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    MatDatetimepicker.prototype._createPopupPositionStrategy = /**
     * Create the popup PositionStrategy.
     * @return {?}
     */
    function () {
        return this._overlay.position()
            .connectedTo(this._datepickerInput.getPopupConnectionElementRef(), { originX: "start", originY: "bottom" }, { overlayX: "start", overlayY: "top" })
            .withFallbackPosition({ originX: "start", originY: "top" }, { overlayX: "start", overlayY: "bottom" })
            .withFallbackPosition({ originX: "end", originY: "bottom" }, { overlayX: "end", overlayY: "top" })
            .withFallbackPosition({ originX: "end", originY: "top" }, { overlayX: "end", overlayY: "bottom" });
    };
    MatDatetimepicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker",
                    exportAs: "matDatetimepicker",
                    template: "",
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    MatDatetimepicker.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_12__angular_material_dialog__["MatDialog"] },
        { type: __WEBPACK_IMPORTED_MODULE_9__angular_cdk_overlay__["Overlay"] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["MAT_DATEPICKER_SCROLL_STRATEGY"],] }] },
        { type: DatetimeAdapter, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: __WEBPACK_IMPORTED_MODULE_7__angular_cdk_bidi__["Directionality"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_11__angular_common__["DOCUMENT"],] }] }
    ]; };
    MatDatetimepicker.propDecorators = {
        startAt: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        startView: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        mode: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        timeInterval: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        openOnFocus: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        type: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        touchUi: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedChanged: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        panelClass: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        openedStream: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"], args: ["opened",] }],
        closedStream: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"], args: ["closed",] }]
    };
    return MatDatetimepicker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_DATETIMEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_14__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return MatDatetimepickerInput; }),
    multi: true
};
/** @type {?} */
var MAT_DATETIMEPICKER_VALIDATORS = {
    provide: __WEBPACK_IMPORTED_MODULE_14__angular_forms__["NG_VALIDATORS"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return MatDatetimepickerInput; }),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
var  /**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 * @template D
 */
MatDatetimepickerInputEvent = /** @class */ (function () {
    function MatDatetimepickerInputEvent(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
    return MatDatetimepickerInputEvent;
}());
/**
 * Directive used to connect an input to a MatDatepicker.
 * @template D
 */
var MatDatetimepickerInput = /** @class */ (function () {
    function MatDatetimepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this = this;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */
        this.dateChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */
        this.dateInput = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */
        this._valueChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */
        this._disabledChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this._onTouched = function () {
        };
        this._cvaOnChange = function () {
        };
        this._validatorOnChange = function () {
        };
        this._datepickerSubscription = __WEBPACK_IMPORTED_MODULE_13_rxjs__["Subscription"].EMPTY;
        this._localeSubscription = __WEBPACK_IMPORTED_MODULE_13_rxjs__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */
        this._parseValidator = function () {
            return _this._lastValueValid ?
                null : { "matDatepickerParse": { "text": _this._elementRef.nativeElement.value } };
        };
        /**
         * The form control validator for the min date.
         */
        this._minValidator = function (control) {
            /** @type {?} */
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.min || !controlValue ||
                _this._dateAdapter.compareDatetime(_this.min, controlValue) <= 0) ?
                null : { "matDatepickerMin": { "min": _this.min, "actual": controlValue } };
        };
        /**
         * The form control validator for the max date.
         */
        this._maxValidator = function (control) {
            /** @type {?} */
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return (!_this.max || !controlValue ||
                _this._dateAdapter.compareDatetime(_this.max, controlValue) >= 0) ?
                null : { "matDatepickerMax": { "max": _this.max, "actual": controlValue } };
        };
        /**
         * The form control validator for the date filter.
         */
        this._filterValidator = function (control) {
            /** @type {?} */
            var controlValue = _this._dateAdapter.getValidDateOrNull(_this._dateAdapter.deserialize(control.value));
            return !_this._dateFilter || !controlValue || _this._dateFilter(controlValue, MatDatetimepickerFilterType.DATE) ?
                null : { "matDatepickerFilter": true };
        };
        /**
         * The combined form control validator for this input.
         */
        this._validator = __WEBPACK_IMPORTED_MODULE_14__angular_forms__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */
        this._lastValueValid = false;
        if (!this._dateAdapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(function () {
            _this.value = _this.value;
        });
    }
    Object.defineProperty(MatDatetimepickerInput.prototype, "matDatetimepicker", {
        /** The datepicker that this input is associated with. */
        set: /**
         * The datepicker that this input is associated with.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.registerDatepicker(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatetimepickerInput.prototype.registerDatepicker = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this._datepicker = value;
            this._datepicker._registerInput(this);
        }
    };
    Object.defineProperty(MatDatetimepickerInput.prototype, "matDatepickerFilter", {
        set: /**
         * @param {?} filter
         * @return {?}
         */
        function (filter) {
            this._dateFilter = filter;
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "value", {
        /** The value of the input. */
        get: /**
         * The value of the input.
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            value = this._dateAdapter.deserialize(value);
            this._lastValueValid = !value || this._dateAdapter.isValid(value);
            value = this._dateAdapter.getValidDateOrNull(value);
            /** @type {?} */
            var oldDate = this.value;
            this._value = value;
            this._formatValue(value);
            // use timeout to ensure the datetimepicker is instantiated and we get the correct format
            setTimeout(function () {
                if (!_this._dateAdapter.sameDatetime(oldDate, value)) {
                    _this._valueChange.emit(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerInput.prototype.getDisplayFormat = /**
     * @return {?}
     */
    function () {
        switch (this._datepicker.type) {
            case "date":
                return this._dateFormats.display.dateInput;
            case "datetime":
                return this._dateFormats.display.datetimeInput;
            case "time":
                return this._dateFormats.display.timeInput;
            case "month":
                return this._dateFormats.display.monthInput;
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerInput.prototype.getParseFormat = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parseFormat;
        switch (this._datepicker.type) {
            case "date":
                parseFormat = this._dateFormats.parse.dateInput;
                break;
            case "datetime":
                parseFormat = this._dateFormats.parse.datetimeInput;
                break;
            case "time":
                parseFormat = this._dateFormats.parse.timeInput;
                break;
            case "month":
                parseFormat = this._dateFormats.parse.monthInput;
                break;
        }
        if (!parseFormat) {
            parseFormat = this._dateFormats.parse.dateInput;
        }
        return parseFormat;
    };
    Object.defineProperty(MatDatetimepickerInput.prototype, "min", {
        /** The minimum valid date. */
        get: /**
         * The minimum valid date.
         * @return {?}
         */
        function () {
            return this._min;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "max", {
        /** The maximum valid date. */
        get: /**
         * The maximum valid date.
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
            this._validatorOnChange();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerInput.prototype, "disabled", {
        /** Whether the datepicker-input is disabled. */
        get: /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */
        function () {
            return !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["coerceBooleanProperty"])(value);
            if (this._disabled !== newValue) {
                this._disabled = newValue;
                this._disabledChange.emit(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerInput.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker) {
            // tslint:disable-next-line deprecation
            this._datepickerSubscription = this._datepicker.selectedChanged.subscribe(function (selected) {
                _this.value = selected;
                _this._cvaOnChange(selected);
                _this._onTouched();
                _this.dateInput.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
                _this.dateChange.emit(new MatDatetimepickerInputEvent(_this, _this._elementRef.nativeElement));
            });
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepickerSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this._valueChange.complete();
        this._disabledChange.complete();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatetimepickerInput.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorOnChange = fn;
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MatDatetimepickerInput.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this._validator ? this._validator(c) : null;
    };
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    MatDatetimepickerInput.prototype.getPopupConnectionElementRef = /**
     * Gets the element that the datepicker popup should be connected to.
     * @return {?} The element to connect the popup to.
     */
    function () {
        return this._formField ? this._formField.underlineRef : this._elementRef;
    };
    // Implemented as part of ControlValueAccessor
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatetimepickerInput.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    // Implemented as part of ControlValueAccessor
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatetimepickerInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._cvaOnChange = fn;
    };
    // Implemented as part of ControlValueAccessor
    /**
     * @param {?} fn
     * @return {?}
     */
    MatDatetimepickerInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    // Implemented as part of ControlValueAccessor
    /**
     * @param {?} disabled
     * @return {?}
     */
    MatDatetimepickerInput.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerInput.prototype._onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.altKey && event.keyCode === __WEBPACK_IMPORTED_MODULE_5__angular_cdk_keycodes__["DOWN_ARROW"]) {
            this._datepicker.open();
            event.preventDefault();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MatDatetimepickerInput.prototype._onInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date = this._dateAdapter.parse(value, this.getParseFormat());
        this._lastValueValid = !date || this._dateAdapter.isValid(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        this._value = date;
        this._cvaOnChange(date);
        this._valueChange.emit(date);
        this.dateInput.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /**
     * @return {?}
     */
    MatDatetimepickerInput.prototype._onChange = /**
     * @return {?}
     */
    function () {
        this.dateChange.emit(new MatDatetimepickerInputEvent(this, this._elementRef.nativeElement));
    };
    /** Handles blur events on the input. */
    /**
     * Handles blur events on the input.
     * @return {?}
     */
    MatDatetimepickerInput.prototype._onBlur = /**
     * Handles blur events on the input.
     * @return {?}
     */
    function () {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    };
    /**
     * Formats a value and sets it on the input element.
     * @param {?} value
     * @return {?}
     */
    MatDatetimepickerInput.prototype._formatValue = /**
     * Formats a value and sets it on the input element.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this.getDisplayFormat()) : "";
    };
    MatDatetimepickerInput.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"], args: [{
                    selector: "input[matDatetimepicker]",
                    providers: [
                        MAT_DATETIMEPICKER_VALUE_ACCESSOR,
                        MAT_DATETIMEPICKER_VALIDATORS,
                        { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatetimepickerInput },
                    ],
                    host: {
                        "[attr.aria-haspopup]": "true",
                        "[attr.aria-owns]": "(_datepicker?.opened && _datepicker.id) || null",
                        "[attr.min]": "min ? _dateAdapter.toIso8601(min) : null",
                        "[attr.max]": "max ? _dateAdapter.toIso8601(max) : null",
                        "[disabled]": "disabled",
                        "(focus)": "_datepicker._handleFocus()",
                        "(input)": "_onInput($event.target.value)",
                        "(change)": "_onChange()",
                        "(blur)": "_onBlur()",
                        "(keydown)": "_onKeydown($event)"
                    },
                    exportAs: "matDatepickerInput"
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerInput.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] },
        { type: DatetimeAdapter, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [MAT_DATETIME_FORMATS,] }] },
        { type: __WEBPACK_IMPORTED_MODULE_15__angular_material_form_field__["MatFormField"], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] }
    ]; };
    MatDatetimepickerInput.propDecorators = {
        matDatetimepicker: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        matDatepickerFilter: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        value: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        min: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        max: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        dateChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        dateInput: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template D
 */
var MatDatetimepickerToggle = /** @class */ (function () {
    function MatDatetimepickerToggle(_intl, _changeDetectorRef) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = __WEBPACK_IMPORTED_MODULE_13_rxjs__["Subscription"].EMPTY;
    }
    Object.defineProperty(MatDatetimepickerToggle.prototype, "disabled", {
        /** Whether the toggle button is disabled. */
        get: /**
         * Whether the toggle button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled === undefined ? this.datetimepicker.disabled : !!this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_cdk_coercion__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    MatDatetimepickerToggle.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["datepicker"]) {
            this._watchStateChanges();
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerToggle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.unsubscribe();
    };
    /**
     * @return {?}
     */
    MatDatetimepickerToggle.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._watchStateChanges();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatDatetimepickerToggle.prototype._open = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.datetimepicker && !this.disabled) {
            this.datetimepicker.open();
            event.stopPropagation();
        }
    };
    /**
     * @return {?}
     */
    MatDatetimepickerToggle.prototype._watchStateChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datepickerDisabled = this.datetimepicker ? this.datetimepicker._disabledChange : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_rxjs__["of"])();
        /** @type {?} */
        var inputDisabled = this.datetimepicker && this.datetimepicker._datepickerInput ?
            this.datetimepicker._datepickerInput._disabledChange : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_rxjs__["of"])();
        this._stateChanges.unsubscribe();
        this._stateChanges = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13_rxjs__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled)
            .subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
    };
    MatDatetimepickerToggle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-toggle",
                    template: "<button mat-icon-button type=\"button\" [attr.aria-label]=\"_intl.openCalendarLabel\"\n        [disabled]=\"disabled\" (click)=\"_open($event)\">\n  <mat-icon [ngSwitch]=\"datetimepicker.type\">\n    <svg *ngSwitchCase=\"'time'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z\"></path>\n    </svg>\n    <svg *ngSwitchCase=\"'datetime'\" viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n            style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z\"></path>\n    </svg>\n    <svg *ngSwitchDefault viewBox=\"0 0 24 24\" width=\"100%\" height=\"100%\" fill=\"currentColor\"\n        style=\"vertical-align: top\" focusable=\"false\">\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n      <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n    </svg>\n  </mat-icon>\n</button>\n",
                    host: {
                        "class": "mat-datetimepicker-toggle"
                    },
                    exportAs: "matDatetimepickerToggle",
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    preserveWhitespaces: false,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerToggle.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatDatepickerIntl"] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"] }
    ]; };
    MatDatetimepickerToggle.propDecorators = {
        datetimepicker: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"], args: ["for",] }],
        disabled: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }]
    };
    return MatDatetimepickerToggle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * \@docs-private
 * @template D
 */
var MatDatetimepickerMonthView = /** @class */ (function () {
    function MatDatetimepickerMonthView(_adapter, _dateFormats) {
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this.type = "date";
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        /**
         * Emits when a new date is selected.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        /** @type {?} */
        var firstDayOfWeek = this._adapter.getFirstDayOfWeek();
        /** @type {?} */
        var narrowWeekdays = this._adapter.getDayOfWeekNames("narrow");
        /** @type {?} */
        var longWeekdays = this._adapter.getDayOfWeekNames("long");
        /** @type {?} */
        var weekdays = longWeekdays.map(function (long, i) {
            return { long: long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this._adapter.today();
    }
    Object.defineProperty(MatDatetimepickerMonthView.prototype, "activeDate", {
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */
        get: /**
         * The date to display in this month view (everything other than the month and year is ignored).
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            this._activeDate = value || this._adapter.today();
            if (oldActiveDate && this._activeDate &&
                !this._adapter.sameMonthAndYear(oldActiveDate, this._activeDate)) {
                this._init();
                if (this._adapter.isInNextMonth(oldActiveDate, this._activeDate)) {
                    this.calendarState("right");
                }
                else {
                    this.calendarState("left");
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerMonthView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = value;
            this._selectedDate = this._getDateInCurrentMonth(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new date is selected. */
    /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype._dateSelected = /**
     * Handles when a new date is selected.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectedChange.emit(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), date, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)));
        if (this.type === "date") {
            this._userSelection.emit();
        }
    };
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        this._selectedDate = this._getDateInCurrentMonth(this.selected);
        this._todayDate = this._getDateInCurrentMonth(this._adapter.today());
        /** @type {?} */
        var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._adapter.getDayOfWeek(firstOfMonth) -
                this._adapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._createWeekCells();
    };
    /**
     * Creates MdCalendarCells for the dates in this month.
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype._createWeekCells = /**
     * Creates MdCalendarCells for the dates in this month.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var daysInMonth = this._adapter.getNumDaysInMonth(this.activeDate);
        /** @type {?} */
        var dateNames = this._adapter.getDateNames();
        this._weeks = [[]];
        for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            /** @type {?} */
            var date = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), this._adapter.getMonth(this.activeDate), i + 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
            /** @type {?} */
            var enabled = !this.dateFilter ||
                this.dateFilter(date);
            /** @type {?} */
            var ariaLabel = this._adapter.format(date, this._dateFormats.display.dateA11yLabel);
            this._weeks[this._weeks.length - 1]
                .push(new MatDatetimepickerCalendarCell(i + 1, dateNames[i], ariaLabel, enabled));
        }
    };
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype._getDateInCurrentMonth = /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._adapter.sameMonthAndYear(date, this.activeDate) ?
            this._adapter.getDate(date) : null;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype.calendarState = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        this._calendarState = direction;
    };
    /**
     * @return {?}
     */
    MatDatetimepickerMonthView.prototype._calendarStateDone = /**
     * @return {?}
     */
    function () {
        this._calendarState = "";
    };
    MatDatetimepickerMonthView.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-month-view",
                    template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\">\n    <tr><th *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th></tr>\n  </thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate\"\n         [selectedValue]=\"_selectedDate\"\n         [activeCell]=\"_adapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"></tbody>\n</table>\n",
                    animations: [slideCalendar],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerMonthView.ctorParameters = function () { return [
        { type: DatetimeAdapter, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [MAT_DATETIME_FORMATS,] }] }
    ]; };
    MatDatetimepickerMonthView.propDecorators = {
        type: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        _userSelection: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        activeDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selected: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        dateFilter: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerMonthView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * An internal component used to display a single year in the datepicker.
 * \@docs-private
 * @template D
 */
var MatDatetimepickerYearView = /** @class */ (function () {
    function MatDatetimepickerYearView(_adapter, _dateFormats) {
        this._adapter = _adapter;
        this._dateFormats = _dateFormats;
        this._userSelection = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.type = "date";
        /**
         * Emits when a new month is selected.
         */
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        if (!this._adapter) {
            throw createMissingDateImplError("DatetimeAdapter");
        }
        if (!this._dateFormats) {
            throw createMissingDateImplError("MAT_DATETIME_FORMATS");
        }
        this._activeDate = this._adapter.today();
    }
    Object.defineProperty(MatDatetimepickerYearView.prototype, "activeDate", {
        /** The date to display in this year view (everything other than the year is ignored). */
        get: /**
         * The date to display in this year view (everything other than the year is ignored).
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var oldActiveDate = this._activeDate;
            this._activeDate = value || this._adapter.today();
            if (oldActiveDate && this._activeDate &&
                !this._adapter.sameYear(oldActiveDate, this._activeDate)) {
                this._init();
                // if (oldActiveDate < this._activeDate) {
                //  this.calendarState('right');
                // } else {
                //  this.calendarState('left');
                // }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDatetimepickerYearView.prototype, "selected", {
        /** The currently selected date. */
        get: /**
         * The currently selected date.
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selected = value;
            this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatDatetimepickerYearView.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._init();
    };
    /** Handles when a new month is selected. */
    /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._monthSelected = /**
     * Handles when a new month is selected.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.selectedChange.emit(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, this._adapter.getDate(this.activeDate), this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)));
        if (this.type === "month") {
            this._userSelection.emit();
        }
    };
    /**
     * Initializes this month view.
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._init = /**
     * Initializes this month view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._selectedMonth = this._getMonthInCurrentYear(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._adapter.today());
        this._yearLabel = this._adapter.getYearName(this.activeDate);
        /** @type {?} */
        var monthNames = this._adapter.getMonthNames("short");
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11]].map(function (row) { return row.map(function (month) { return _this._createCellForMonth(month, monthNames[month]); }); });
    };
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._getMonthInCurrentYear = /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this._adapter.sameYear(date, this.activeDate) ?
            this._adapter.getMonth(date) : null;
    };
    /**
     * Creates an MdCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._createCellForMonth = /**
     * Creates an MdCalendarCell for the given month.
     * @param {?} month
     * @param {?} monthName
     * @return {?}
     */
    function (month, monthName) {
        /** @type {?} */
        var ariaLabel = this._adapter.format(this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate)), this._dateFormats.display.monthYearA11yLabel);
        return new MatDatetimepickerCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._isMonthEnabled(month));
    };
    /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._isMonthEnabled = /**
     * Whether the given month is enabled.
     * @param {?} month
     * @return {?}
     */
    function (month) {
        if (!this.dateFilter) {
            return true;
        }
        /** @type {?} */
        var firstOfMonth = this._adapter.createDatetime(this._adapter.getYear(this.activeDate), month, 1, this._adapter.getHour(this.activeDate), this._adapter.getMinute(this.activeDate));
        // If any date in the month is enabled count the month as enabled.
        for (var date = firstOfMonth; this._adapter.getMonth(date) == month; date = this._adapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    };
    // private calendarState(direction: string): void {
    //   this._calendarState = direction;
    // }
    /**
     * @return {?}
     */
    MatDatetimepickerYearView.prototype._calendarStateDone = /**
     * @return {?}
     */
    function () {
        this._calendarState = "";
    };
    MatDatetimepickerYearView.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"], args: [{
                    selector: "mat-datetimepicker-year-view",
                    template: "<table class=\"mat-datetimepicker-calendar-table\">\n  <thead class=\"mat-datetimepicker-calendar-table-header\"></thead>\n  <tbody [@slideCalendar]=\"_calendarState\"\n         (@slideCalendar.done)=\"_calendarStateDone()\"\n         mat-datetimepicker-calendar-body\n         role=\"grid\"\n         allowDisabledSelection=\"true\"\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth\"\n         [selectedValue]=\"_selectedMonth\"\n         [labelMinRequiredCells]=\"2\"\n         [activeCell]=\"_adapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"></tbody>\n</table>\n",
                    animations: [slideCalendar],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
                    changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush
                },] },
    ];
    /** @nocollapse */
    MatDatetimepickerYearView.ctorParameters = function () { return [
        { type: DatetimeAdapter, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [MAT_DATETIME_FORMATS,] }] }
    ]; };
    MatDatetimepickerYearView.propDecorators = {
        _userSelection: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }],
        type: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        activeDate: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selected: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        dateFilter: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] }],
        selectedChange: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"] }]
    };
    return MatDatetimepickerYearView;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatDatetimepickerModule = /** @class */ (function () {
    function MatDatetimepickerModule() {
    }
    MatDatetimepickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
                        __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                        __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatDialogModule"],
                        __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                        __WEBPACK_IMPORTED_MODULE_9__angular_cdk_overlay__["OverlayModule"],
                        __WEBPACK_IMPORTED_MODULE_16__angular_cdk_a11y__["A11yModule"]
                    ],
                    entryComponents: [
                        MatDatetimepickerContent
                    ],
                    declarations: [
                        MatDatetimepickerCalendar,
                        MatDatetimepickerCalendarBody,
                        MatDatetimepickerClock,
                        MatDatetimepicker,
                        MatDatetimepickerToggle,
                        MatDatetimepickerInput,
                        MatDatetimepickerContent,
                        MatDatetimepickerMonthView,
                        MatDatetimepickerYearView
                    ],
                    exports: [
                        MatDatetimepickerCalendar,
                        MatDatetimepickerCalendarBody,
                        MatDatetimepickerClock,
                        MatDatetimepicker,
                        MatDatetimepickerToggle,
                        MatDatetimepickerInput,
                        MatDatetimepickerContent,
                        MatDatetimepickerMonthView,
                        MatDatetimepickerYearView
                    ]
                },] },
    ];
    return MatDatetimepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGV0aW1lcGlja2VyLWNvcmUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXIudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHMudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9hZGFwdGVyL25hdGl2ZS1kYXRldGltZS1hZGFwdGVyLnRzIiwibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvYWRhcHRlci9uYXRpdmUtZGF0ZXRpbWUtZm9ybWF0cy50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlL2FkYXB0ZXIvYWRhcHRlci5tb2R1bGUudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1hbmltYXRpb25zLnRzIiwibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItZXJyb3JzLnRzIiwibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZS50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2NhbGVuZGFyLnRzIiwibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvY2FsZW5kYXItYm9keS50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2Nsb2NrLnRzIiwibmc6Ly9AbWF0LWRhdGV0aW1lcGlja2VyL2NvcmUvZGF0ZXRpbWVwaWNrZXIvZGF0ZXRpbWVwaWNrZXIudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci1pbnB1dC50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLXRvZ2dsZS50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9jb3JlL2RhdGV0aW1lcGlja2VyL21vbnRoLXZpZXcudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci95ZWFyLXZpZXcudHMiLCJuZzovL0BtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZS9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGF0ZXRpbWVBZGFwdGVyPEQ+IGV4dGVuZHMgRGF0ZUFkYXB0ZXI8RD4ge1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPEQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldEhvdXIoZGF0ZTogRCk6IG51bWJlcjtcblxuICBhYnN0cmFjdCBnZXRNaW51dGUoZGF0ZTogRCk6IG51bWJlcjtcblxuICBhYnN0cmFjdCBnZXRGaXJzdERhdGVPZk1vbnRoKGRhdGU6IEQpOiBEO1xuXG4gIGFic3RyYWN0IGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBELCBlbmREYXRlOiBEKTogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW107XG5cbiAgYWJzdHJhY3QgZ2V0TWludXRlTmFtZXMoKTogc3RyaW5nW107XG5cbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJIb3VycyhkYXRlOiBELCBtb250aHM6IG51bWJlcik6IEQ7XG5cbiAgYWJzdHJhY3QgYWRkQ2FsZW5kYXJNaW51dGVzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRDtcblxuICBhYnN0cmFjdCBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IEQ7XG5cbiAgZ2V0VmFsaWREYXRlT3JOdWxsKG9iajogYW55KTogRCB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5pc0RhdGVJbnN0YW5jZShvYmopICYmIHRoaXMuaXNWYWxpZChvYmopKSA/IG9iaiA6IG51bGw7XG4gIH1cblxuICBjb21wYXJlRGF0ZXRpbWUoZmlyc3Q6IEQsIHNlY29uZDogRCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyZURhdGUoZmlyc3QsIHNlY29uZCkgfHxcbiAgICAgIHRoaXMuZ2V0SG91cihmaXJzdCkgLSB0aGlzLmdldEhvdXIoc2Vjb25kKSB8fFxuICAgICAgdGhpcy5nZXRNaW51dGUoZmlyc3QpIC0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKTtcbiAgfVxuXG4gIHNhbWVEYXRldGltZShmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuY29tcGFyZURhdGV0aW1lKGZpcnN0LCBzZWNvbmQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpcnN0VmFsaWQgPT09IHNlY29uZFZhbGlkO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3QgPT09IHNlY29uZDtcbiAgfVxuXG4gIHNhbWVZZWFyKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0WWVhcihmaXJzdCkgPT09IHRoaXMuZ2V0WWVhcihzZWNvbmQpO1xuICB9XG5cbiAgc2FtZURheShmaXJzdDogRCwgc2Vjb25kOiBEKSB7XG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldERhdGUoZmlyc3QpID09PSB0aGlzLmdldERhdGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVNb250aEFuZFllYXIoZmlyc3QsIHNlY29uZCk7XG4gIH1cblxuICBzYW1lSG91cihmaXJzdDogRCwgc2Vjb25kOiBEKSB7XG4gICAgcmV0dXJuIGZpcnN0ICYmIHNlY29uZCAmJiB0aGlzLmdldEhvdXIoZmlyc3QpID09PSB0aGlzLmdldEhvdXIoc2Vjb25kKSAmJiB0aGlzLnNhbWVEYXkoZmlyc3QsIHNlY29uZCk7XG4gIH1cblxuICBzYW1lTWludXRlKGZpcnN0OiBELCBzZWNvbmQ6IEQpIHtcbiAgICByZXR1cm4gZmlyc3QgJiYgc2Vjb25kICYmIHRoaXMuZ2V0TWludXRlKGZpcnN0KSA9PT0gdGhpcy5nZXRNaW51dGUoc2Vjb25kKSAmJiB0aGlzLnNhbWVIb3VyKGZpcnN0LCBzZWNvbmQpO1xuICB9XG5cbiAgc2FtZU1vbnRoQW5kWWVhcihmaXJzdDogRCB8IG51bGwsIHNlY29uZDogRCB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAoZmlyc3QgJiYgc2Vjb25kKSB7XG4gICAgICBjb25zdCBmaXJzdFZhbGlkID0gdGhpcy5pc1ZhbGlkKGZpcnN0KTtcbiAgICAgIGNvbnN0IHNlY29uZFZhbGlkID0gdGhpcy5pc1ZhbGlkKHNlY29uZCk7XG4gICAgICBpZiAoZmlyc3RWYWxpZCAmJiBzZWNvbmRWYWxpZCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLmdldFllYXIoZmlyc3QpIC0gdGhpcy5nZXRZZWFyKHNlY29uZCkgfHxcbiAgICAgICAgICB0aGlzLmdldE1vbnRoKGZpcnN0KSAtIHRoaXMuZ2V0TW9udGgoc2Vjb25kKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlyc3RWYWxpZCA9PT0gc2Vjb25kVmFsaWQ7XG4gICAgfVxuICAgIHJldHVybiBmaXJzdCA9PT0gc2Vjb25kO1xuICB9XG5cbiAgLy8gZGVsZWdhdGVcbiAgY2xvbmUoZGF0ZTogRCk6IEQge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5jbG9uZShkYXRlKTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyWWVhcnMoZGF0ZTogRCwgeWVhcnM6IG51bWJlcik6IEQge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5hZGRDYWxlbmRhclllYXJzKGRhdGUsIHllYXJzKTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyTW9udGhzKGRhdGU6IEQsIG1vbnRoczogbnVtYmVyKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIG1vbnRocyk7XG4gIH1cblxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRCwgZGF5czogbnVtYmVyKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmFkZENhbGVuZGFyRGF5cyhkYXRlLCBkYXlzKTtcbiAgfVxuXG4gIGdldFllYXIoZGF0ZTogRCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldFllYXIoZGF0ZSk7XG4gIH1cblxuICBnZXRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TW9udGgoZGF0ZSk7XG4gIH1cblxuICBnZXREYXRlKGRhdGU6IEQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXRlKGRhdGUpO1xuICB9XG5cbiAgZ2V0RGF5T2ZXZWVrKGRhdGU6IEQpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXREYXlPZldlZWsoZGF0ZSk7XG4gIH1cblxuICBnZXRNb250aE5hbWVzKHN0eWxlKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRNb250aE5hbWVzKHN0eWxlKTtcbiAgfVxuXG4gIGdldERhdGVOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERhdGVOYW1lcygpO1xuICB9XG5cbiAgZ2V0RGF5T2ZXZWVrTmFtZXMoc3R5bGUpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldERheU9mV2Vla05hbWVzKHN0eWxlKTtcbiAgfVxuXG4gIGdldFllYXJOYW1lKGRhdGU6IEQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5nZXRZZWFyTmFtZShkYXRlKTtcbiAgfVxuXG4gIGdldEZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gIH1cblxuICBnZXROdW1EYXlzSW5Nb250aChkYXRlOiBEKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZ2V0TnVtRGF5c0luTW9udGgoZGF0ZSk7XG4gIH1cblxuICBjcmVhdGVEYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmNyZWF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpO1xuICB9XG5cbiAgdG9kYXkoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLnRvZGF5KCk7XG4gIH1cblxuICBwYXJzZSh2YWx1ZTogYW55LCBwYXJzZUZvcm1hdDogYW55KTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5wYXJzZSh2YWx1ZSwgcGFyc2VGb3JtYXQpO1xuICB9XG5cbiAgZm9ybWF0KGRhdGU6IEQsIGRpc3BsYXlGb3JtYXQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGVnYXRlLmZvcm1hdChkYXRlLCBkaXNwbGF5Rm9ybWF0KTtcbiAgfVxuXG4gIHRvSXNvODYwMShkYXRlOiBEKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUudG9Jc284NjAxKGRhdGUpO1xuICB9XG5cbiAgaXNEYXRlSW5zdGFuY2Uob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaXNEYXRlSW5zdGFuY2Uob2JqKTtcbiAgfVxuXG4gIGlzVmFsaWQoZGF0ZTogRCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxlZ2F0ZS5pc1ZhbGlkKGRhdGUpO1xuICB9XG5cbiAgaW52YWxpZCgpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuaW52YWxpZCgpO1xuICB9XG5cbiAgY2xhbXBEYXRlKGRhdGU6IEQsIG1pbj86IEQgfCBudWxsLCBtYXg/OiBEIHwgbnVsbCk6IEQge1xuICAgIGlmIChtaW4gJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWluKSA8IDApIHtcbiAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGlmIChtYXggJiYgdGhpcy5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgbWF4KSA+IDApIHtcbiAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWF0RGF0ZXRpbWVGb3JtYXRzIHtcbiAgcGFyc2U6IHtcbiAgICBkYXRlSW5wdXQ/OiBhbnk7XG4gICAgbW9udGhJbnB1dD86IGFueTtcbiAgICB0aW1lSW5wdXQ/OiBhbnk7XG4gICAgZGF0ZXRpbWVJbnB1dD86IGFueTtcbiAgfTtcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogYW55O1xuICAgIG1vbnRoSW5wdXQ6IGFueTtcbiAgICB0aW1lSW5wdXQ6IGFueTtcbiAgICBkYXRldGltZUlucHV0OiBhbnk7XG4gICAgbW9udGhZZWFyTGFiZWw6IGFueTtcbiAgICBkYXRlQTExeUxhYmVsOiBhbnk7XG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiBhbnk7XG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IGFueTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRV9GT1JNQVRTID0gbmV3IEluamVjdGlvblRva2VuPE1hdERhdGV0aW1lRm9ybWF0cz4oXCJtYXQtZGF0ZXRpbWUtZm9ybWF0c1wiKTtcbiIsImltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgT3B0aW9uYWxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIERhdGVBZGFwdGVyLFxuICBNQVRfREFURV9MT0NBTEVcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9kYXRldGltZS1hZGFwdGVyXCI7XG5cbi8qKiBUaGUgZGVmYXVsdCBob3VyIG5hbWVzIHRvIHVzZSBpZiBJbnRsIEFQSSBpcyBub3QgYXZhaWxhYmxlLiAqL1xuY29uc3QgREVGQVVMVF9IT1VSX05BTUVTID0gcmFuZ2UoMjQsIGkgPT4gU3RyaW5nKGkpKTtcblxuLyoqIFRoZSBkZWZhdWx0IG1pbnV0ZSBuYW1lcyB0byB1c2UgaWYgSW50bCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gKi9cbmNvbnN0IERFRkFVTFRfTUlOVVRFX05BTUVTID0gcmFuZ2UoNjAsIGkgPT4gU3RyaW5nKGkpKTtcblxuZnVuY3Rpb24gcmFuZ2U8VD4obGVuZ3RoOiBudW1iZXIsIHZhbHVlRnVuY3Rpb246IChpbmRleDogbnVtYmVyKSA9PiBUKTogVFtdIHtcbiAgY29uc3QgdmFsdWVzQXJyYXkgPSBBcnJheShsZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzQXJyYXlbaV0gPSB2YWx1ZUZ1bmN0aW9uKGkpO1xuICB9XG4gIHJldHVybiB2YWx1ZXNBcnJheTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdGl2ZURhdGV0aW1lQWRhcHRlciBleHRlbmRzIERhdGV0aW1lQWRhcHRlcjxEYXRlPiB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURV9MT0NBTEUpIG1hdERhdGVMb2NhbGU6IHN0cmluZywgX2RlbGVnYXRlOiBEYXRlQWRhcHRlcjxEYXRlPikge1xuICAgIHN1cGVyKF9kZWxlZ2F0ZSk7XG4gICAgdGhpcy5zZXRMb2NhbGUobWF0RGF0ZUxvY2FsZSk7XG4gIH1cblxuICBjbG9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0ZXRpbWUodGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpLCB0aGlzLmdldERhdGUoZGF0ZSksIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xuICB9XG5cbiAgZ2V0SG91cihkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0TWludXRlKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGlzSW5OZXh0TW9udGgoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXREYXRlSW5OZXh0TW9udGgoc3RhcnREYXRlKTtcbiAgICByZXR1cm4gdGhpcy5zYW1lTW9udGhBbmRZZWFyKG5leHRNb250aCwgZW5kRGF0ZSk7XG4gIH1cblxuICBjcmVhdGVEYXRldGltZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRhdGU6IG51bWJlciwgaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcik6IERhdGUge1xuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxuICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZSA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xuICAgIH1cblxuICAgIGlmIChob3VyIDwgMCB8fCBob3VyID4gMjMpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGhvdXIgXCIke2hvdXJ9XCIuIEhvdXIgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjMuYCk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZSA8IDAgfHwgbWludXRlID4gNTkpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyh5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlKTtcblxuICAgIC8vIENoZWNrIHRoYXQgdGhlIGRhdGUgd2Fzbid0IGFib3ZlIHRoZSB1cHBlciBib3VuZCBmb3IgdGhlIG1vbnRoLCBjYXVzaW5nIHRoZSBtb250aCB0byBvdmVyZmxvd1xuICAgIGlmIChyZXN1bHQuZ2V0TW9udGgoKSAhPT0gbW9udGgpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIgZm9yIG1vbnRoIHdpdGggaW5kZXggXCIke21vbnRofVwiLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVJbk5leHRNb250aChkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpICsgMSwgMSxcbiAgICAgIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCkpO1xuICB9XG5cbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IERhdGUoKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBERUZBVUxUX0hPVVJfTkFNRVM7XG4gIH1cblxuICBnZXRNaW51dGVOYW1lcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIERFRkFVTFRfTUlOVVRFX05BTUVTO1xuICB9XG5cbiAgYWRkQ2FsZW5kYXJZZWFycyhkYXRlOiBEYXRlLCB5ZWFyczogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgeWVhcnMgKiAxMik7XG4gIH1cblxuICBhZGRDYWxlbmRhck1vbnRocyhkYXRlOiBEYXRlLCBtb250aHM6IG51bWJlcik6IERhdGUge1xuICAgIGxldCBuZXdEYXRlID0gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcbiAgICAgICAgdGhpcy5nZXRZZWFyKGRhdGUpLCB0aGlzLmdldE1vbnRoKGRhdGUpICsgbW9udGhzLCB0aGlzLmdldERhdGUoZGF0ZSksIHRoaXMuZ2V0SG91cihkYXRlKSwgdGhpcy5nZXRNaW51dGUoZGF0ZSkpO1xuXG4gICAgLy8gSXQncyBwb3NzaWJsZSB0byB3aW5kIHVwIGluIHRoZSB3cm9uZyBtb250aCBpZiB0aGUgb3JpZ2luYWwgbW9udGggaGFzIG1vcmUgZGF5cyB0aGFuIHRoZSBuZXdcbiAgICAvLyBtb250aC4gSW4gdGhpcyBjYXNlIHdlIHdhbnQgdG8gZ28gdG8gdGhlIGxhc3QgZGF5IG9mIHRoZSBkZXNpcmVkIG1vbnRoLlxuICAgIC8vIE5vdGU6IHRoZSBhZGRpdGlvbmFsICsgMTIgJSAxMiBlbnN1cmVzIHdlIGVuZCB1cCB3aXRoIGEgcG9zaXRpdmUgbnVtYmVyLCBzaW5jZSBKUyAlIGRvZXNuJ3RcbiAgICAvLyBndWFyYW50ZWUgdGhpcy5cbiAgICBpZiAodGhpcy5nZXRNb250aChuZXdEYXRlKSAhPT0gKCh0aGlzLmdldE1vbnRoKGRhdGUpICsgbW9udGhzKSAlIDEyICsgMTIpICUgMTIpIHtcbiAgICAgIG5ld0RhdGUgPSB0aGlzLl9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHRoaXMuZ2V0WWVhcihuZXdEYXRlKSwgdGhpcy5nZXRNb250aChuZXdEYXRlKSwgMCwgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0RhdGU7XG4gIH1cblxuICBhZGRDYWxlbmRhckRheXMoZGF0ZTogRGF0ZSwgZGF5czogbnVtYmVyKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZURhdGVXaXRoT3ZlcmZsb3coXG4gICAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpICsgZGF5cywgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSk7XG4gIH1cblxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IERhdGUsIGhvdXJzOiBudW1iZXIpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcbiAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpLFxuICAgICAgdGhpcy5nZXRIb3VyKGRhdGUpICsgaG91cnMsIHRoaXMuZ2V0TWludXRlKGRhdGUpKTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBEYXRlLCBtaW51dGVzOiBudW1iZXIpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fY3JlYXRlRGF0ZVdpdGhPdmVyZmxvdyhcbiAgICAgIHRoaXMuZ2V0WWVhcihkYXRlKSwgdGhpcy5nZXRNb250aChkYXRlKSwgdGhpcy5nZXREYXRlKGRhdGUpLFxuICAgICAgdGhpcy5nZXRIb3VyKGRhdGUpLCB0aGlzLmdldE1pbnV0ZShkYXRlKSArIG1pbnV0ZXMpO1xuICB9XG5cbiAgdG9Jc284NjAxKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdXBlci50b0lzbzg2MDEoZGF0ZSkgKyBcIlRcIiArIFtcbiAgICAgIHRoaXMuXzJkaWdpdChkYXRlLmdldFVUQ0hvdXJzKCkpLFxuICAgICAgdGhpcy5fMmRpZ2l0KGRhdGUuZ2V0VVRDTWludXRlcygpKVxuICAgIF0uam9pbihcIjpcIik7XG4gIH1cblxuICAvKipcbiAgICogU3RyaXAgb3V0IHVuaWNvZGUgTFRSIGFuZCBSVEwgY2hhcmFjdGVycy4gRWRnZSBhbmQgSUUgaW5zZXJ0IHRoZXNlIGludG8gZm9ybWF0dGVkIGRhdGVzIHdoaWxlXG4gICAqIG90aGVyIGJyb3dzZXJzIGRvIG5vdC4gV2UgcmVtb3ZlIHRoZW0gdG8gbWFrZSBvdXRwdXQgY29uc2lzdGVudCBhbmQgYmVjYXVzZSB0aGV5IGludGVyZmVyZSB3aXRoXG4gICAqIGRhdGUgcGFyc2luZy5cbiAgICogQHBhcmFtIHN0ciBUaGUgc3RyaW5nIHRvIHN0cmlwIGRpcmVjdGlvbiBjaGFyYWN0ZXJzIGZyb20uXG4gICAqIEByZXR1cm5zIFRoZSBzdHJpcHBlZCBzdHJpbmcuXG4gICAqL1xuICBwcml2YXRlIF9zdHJpcERpcmVjdGlvbmFsaXR5Q2hhcmFjdGVycyhzdHI6IHN0cmluZykge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcdTIwMGVcXHUyMDBmXS9nLCBcIlwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYWRzIGEgbnVtYmVyIHRvIG1ha2UgaXQgdHdvIGRpZ2l0cy5cbiAgICogQHBhcmFtIG4gVGhlIG51bWJlciB0byBwYWQuXG4gICAqIEByZXR1cm5zIFRoZSBwYWRkZWQgbnVtYmVyLlxuICAgKi9cbiAgcHJpdmF0ZSBfMmRpZ2l0KG46IG51bWJlcikge1xuICAgIHJldHVybiAoXCIwMFwiICsgbikuc2xpY2UoLTIpO1xuICB9XG5cbiAgLyoqIENyZWF0ZXMgYSBkYXRlIGJ1dCBhbGxvd3MgdGhlIG1vbnRoIGFuZCBkYXRlIHRvIG92ZXJmbG93LiAqL1xuICBwcml2YXRlIF9jcmVhdGVEYXRlV2l0aE92ZXJmbG93KHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF0ZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXRlLCBob3VycywgbWludXRlcyk7XG5cbiAgICAvLyBXZSBuZWVkIHRvIGNvcnJlY3QgZm9yIHRoZSBmYWN0IHRoYXQgSlMgbmF0aXZlIERhdGUgdHJlYXRzIHllYXJzIGluIHJhbmdlIFswLCA5OV0gYXNcbiAgICAvLyBhYmJyZXZpYXRpb25zIGZvciAxOXh4LlxuICAgIGlmICh5ZWFyID49IDAgJiYgeWVhciA8IDEwMCkge1xuICAgICAgcmVzdWx0LnNldEZ1bGxZZWFyKHRoaXMuZ2V0WWVhcihyZXN1bHQpIC0gMTkwMCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hdERhdGV0aW1lRm9ybWF0cyB9IGZyb20gXCIuL2RhdGV0aW1lLWZvcm1hdHNcIjtcblxuZXhwb3J0IGNvbnN0IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUUzogTWF0RGF0ZXRpbWVGb3JtYXRzID0ge1xuICBwYXJzZToge30sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6IHt5ZWFyOiBcIm51bWVyaWNcIiwgbW9udGg6IFwiMi1kaWdpdFwiLCBkYXk6IFwiMi1kaWdpdFwifSxcbiAgICBtb250aElucHV0OiB7bW9udGg6IFwibG9uZ1wifSxcbiAgICBkYXRldGltZUlucHV0OiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcIjItZGlnaXRcIiwgZGF5OiBcIjItZGlnaXRcIiwgaG91cjogXCIyLWRpZ2l0XCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCJ9LFxuICAgIHRpbWVJbnB1dDoge2hvdXI6IFwiMi1kaWdpdFwiLCBtaW51dGU6IFwiMi1kaWdpdFwifSxcbiAgICBtb250aFllYXJMYWJlbDoge3llYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwifSxcbiAgICBkYXRlQTExeUxhYmVsOiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIiwgZGF5OiBcIm51bWVyaWNcIn0sXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiB7eWVhcjogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIn0sXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IHt3ZWVrZGF5OiBcInNob3J0XCIsIG1vbnRoOiBcInNob3J0XCIsIGRheTogXCIyLWRpZ2l0XCJ9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICBOYXRpdmVEYXRlTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vZGF0ZXRpbWUtYWRhcHRlclwiO1xuaW1wb3J0IHsgTUFUX0RBVEVUSU1FX0ZPUk1BVFMgfSBmcm9tIFwiLi9kYXRldGltZS1mb3JtYXRzXCI7XG5pbXBvcnQgeyBOYXRpdmVEYXRldGltZUFkYXB0ZXIgfSBmcm9tIFwiLi9uYXRpdmUtZGF0ZXRpbWUtYWRhcHRlclwiO1xuaW1wb3J0IHsgTUFUX05BVElWRV9EQVRFVElNRV9GT1JNQVRTIH0gZnJvbSBcIi4vbmF0aXZlLWRhdGV0aW1lLWZvcm1hdHNcIjtcblxuLy8gdHNsaW50OmRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVEYXRlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogRGF0ZXRpbWVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE5hdGl2ZURhdGV0aW1lQWRhcHRlclxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOYXRpdmVEYXRldGltZU1vZHVsZSB7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVEYXRldGltZU1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNQVRfREFURVRJTUVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9OQVRJVkVfREFURVRJTUVfRk9STUFUU31dXG59KVxuZXhwb3J0IGNsYXNzIE1hdE5hdGl2ZURhdGV0aW1lTW9kdWxlIHtcbn1cbiIsImltcG9ydCB7XG4gIGFuaW1hdGUsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcbiAga2V5ZnJhbWVzLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcblxuLyoqXG4gKiBUaGlzIGFuaW1hdGlvbiBmYWRlcyBpbiB0aGUgYmFja2dyb3VuZCBjb2xvciBhbmQgdGV4dCBjb250ZW50IG9mIHRoZVxuICogc2VsZWN0J3Mgb3B0aW9ucy4gSXQgaXMgdGltZSBkZWxheWVkIHRvIG9jY3VyIDEwMG1zIGFmdGVyIHRoZSBvdmVybGF5XG4gKiBwYW5lbCBoYXMgdHJhbnNmb3JtZWQgaW4uXG4gKi9cbmV4cG9ydCBjb25zdCBmYWRlSW5Db250ZW50OiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKFwiZmFkZUluQ29udGVudFwiLCBbXG4gIHN0YXRlKFwic2hvd2luZ1wiLCBzdHlsZSh7b3BhY2l0eTogMX0pKSxcbiAgdHJhbnNpdGlvbihcInZvaWQgPT4gc2hvd2luZ1wiLCBbXG4gICAgc3R5bGUoe29wYWNpdHk6IDB9KSxcbiAgICBhbmltYXRlKGAxNTBtcyAxMDBtcyBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKWApXG4gIF0pXG5dKTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlQ2FsZW5kYXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoXCJzbGlkZUNhbGVuZGFyXCIsIFtcbiAgdHJhbnNpdGlvbihcIiogPT4gbGVmdFwiLCBbXG4gICAgYW5pbWF0ZSgxODAsIGtleWZyYW1lcyhbXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMTAwJSlcIiwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIiwgb2Zmc2V0OiAwLjUxfSksXG4gICAgICBzdHlsZSh7dHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiwgb2Zmc2V0OiAxfSlcbiAgICBdKSlcbiAgXSksXG4gIHRyYW5zaXRpb24oXCIqID0+IHJpZ2h0XCIsIFtcbiAgICBhbmltYXRlKDE4MCwga2V5ZnJhbWVzKFtcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwJSlcIiwgb2Zmc2V0OiAwLjV9KSxcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgxMDAlKVwiLCBvZmZzZXQ6IDAuNTF9KSxcbiAgICAgIHN0eWxlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgwKVwiLCBvZmZzZXQ6IDF9KVxuICAgIF0pKVxuICBdKVxuXSk7XG4iLCIvKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yKHByb3ZpZGVyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIEVycm9yKFxuICAgICAgYE1hdERhdGV0aW1lcGlja2VyOiBObyBwcm92aWRlciBmb3VuZCBmb3IgJHtwcm92aWRlcn0uIFlvdSBtdXN0IGltcG9ydCBvbmUgb2YgdGhlIGZvbGxvd2luZyBgICtcbiAgICAgIGBtb2R1bGVzIGF0IHlvdXIgYXBwbGljYXRpb24gcm9vdDogTWF0TmF0aXZlRGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGV0aW1lTW9kdWxlLCBvciBwcm92aWRlIGEgYCArXG4gICAgICBgY3VzdG9tIGltcGxlbWVudGF0aW9uLmApO1xufVxuIiwiZXhwb3J0IGVudW0gTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIHtcbiAgREFURSwgSE9VUiwgTUlOVVRFXG59XG4iLCJpbXBvcnQge1xuICBET1dOX0FSUk9XLFxuICBFTkQsXG4gIEVOVEVSLFxuICBIT01FLFxuICBMRUZUX0FSUk9XLFxuICBQQUdFX0RPV04sXG4gIFBBR0VfVVAsXG4gIFJJR0hUX0FSUk9XLFxuICBVUF9BUlJPV1xufSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJJbnRsIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcbmltcG9ydCB7XG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxuICBNYXREYXRldGltZUZvcm1hdHNcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xuaW1wb3J0IHsgc2xpZGVDYWxlbmRhciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1maWx0ZXJ0eXBlXCI7XG5cbi8qKlxuICogQSBjYWxlbmRhciB0aGF0IGlzIHVzZWQgYXMgcGFydCBvZiB0aGUgZGF0ZXBpY2tlci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclwiLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyXCI+XG4gIDxkaXYgKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxuICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci15ZWFyXCJcbiAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jdXJyZW50VmlldyA9PSAneWVhcidcIlxuICAgICAgIChjbGljayk9XCJfeWVhckNsaWNrZWQoKVwiPnt7IF95ZWFyTGFiZWwgfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1lXCI+XG4gICAgPHNwYW4gKm5nSWY9XCJ0eXBlICE9PSAndGltZSdcIlxuICAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jdXJyZW50VmlldyA9PSAnbW9udGgnXCJcbiAgICAgICAgICBbY2xhc3Mubm90LWNsaWNrYWJsZV09XCJ0eXBlID09PSAnbW9udGgnXCJcbiAgICAgICAgICAoY2xpY2spPVwiX2RhdGVDbGlja2VkKClcIj57eyBfZGF0ZUxhYmVsIH19PC9zcGFuPlxuICAgIDxzcGFuICpuZ0lmPVwidHlwZS5lbmRzV2l0aCgndGltZScpXCJcbiAgICAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZVwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJfY3VycmVudFZpZXcgPT0gJ2Nsb2NrJ1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzXCJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiX2Nsb2NrVmlldyA9PSAnaG91cidcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9ob3Vyc0NsaWNrZWQoKVwiPnt7IF9ob3Vyc0xhYmVsIH19PC9zcGFuPjo8c3BhbiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIl9jbG9ja1ZpZXcgPT0gJ21pbnV0ZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9taW51dGVzQ2xpY2tlZCgpXCI+e3sgX21pbnV0ZXNMYWJlbCB9fTwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnRcIiBbbmdTd2l0Y2hdPVwiX2N1cnJlbnRWaWV3XCI+XG4gIDxkaXYgY2xhc3M9XCJtYXQtbW9udGgtY29udGVudFwiICpuZ0lmPVwiX2N1cnJlbnRWaWV3ID09PSAnbW9udGgnIHx8IF9jdXJyZW50VmlldyA9PT0gJ3llYXInXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250cm9sc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1wcmV2aW91cy1idXR0b25cIlxuICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIV9wcmV2aW91c0VuYWJsZWQoKVwiIChjbGljayk9XCJfcHJldmlvdXNDbGlja2VkKClcIlxuICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgbW9udGhcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xNS40MSA3LjQxTDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxTDEwLjgzIDEyelwiPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcGVyaW9kLWJ1dHRvblwiIFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiIChAc2xpZGVDYWxlbmRhci5kb25lKT1cIl9jYWxlbmRhclN0YXRlRG9uZSgpXCI+XG4gICAgICAgIDxzdHJvbmc+e3sgX21vbnRoWWVhckxhYmVsIH19PC9zdHJvbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItbmV4dC1idXR0b25cIlxuICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIV9uZXh0RW5hYmxlZCgpXCIgKGNsaWNrKT1cIl9uZXh0Q2xpY2tlZCgpXCJcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgbW9udGhcIj5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMCA2TDguNTkgNy40MSAxMy4xNyAxMmwtNC41OCA0LjU5TDEwIDE4bDYtNnpcIj48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8bWF0LWRhdGV0aW1lcGlja2VyLW1vbnRoLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIlxuICAgICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiX2FjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgW2RhdGVGaWx0ZXJdPVwiX2RhdGVGaWx0ZXJGb3JWaWV3c1wiXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX2RhdGVTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJfdXNlclNlbGVjdGVkKClcIj5cbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlldz5cbiAgPG1hdC1kYXRldGltZXBpY2tlci15ZWFyLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiXG4gICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cIl9hY3RpdmVEYXRlXCJcbiAgICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cIl9kYXRlRmlsdGVyRm9yVmlld3NcIlxuICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJfdXNlclNlbGVjdGVkKClcIj5cbiAgPC9tYXQtZGF0ZXRpbWVwaWNrZXIteWVhci12aWV3PlxuICA8bWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICBbc3RhcnRWaWV3XT1cIl9jbG9ja1ZpZXdcIlxuICAgICAgICAgICAgIFtpbnRlcnZhbF09XCJ0aW1lSW50ZXJ2YWxcIlxuICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxuICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVcIlxuICAgICAgICAgICAgIFtkYXRlRmlsdGVyXT1cImRhdGVGaWx0ZXJcIlxuICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJfYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwiX29uQWN0aXZlRGF0ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiX3RpbWVTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAoX3VzZXJTZWxlY3Rpb24pPVwiX3VzZXJTZWxlY3RlZCgpXCI+XG4gIDwvbWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrPlxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhcnstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7ZGlzcGxheTpibG9jaztvdXRsaW5lOjB9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWxhbmRzY2FwZV17ZGlzcGxheTpmbGV4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVye3BhZGRpbmc6MTZweDtmb250LXNpemU6MTRweDtjb2xvcjojZmZmO2JveC1zaXppbmc6Ym9yZGVyLWJveH1bbW9kZT1sYW5kc2NhcGVdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVye3dpZHRoOjE1MHB4O21pbi13aWR0aDoxNTBweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWUsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXIteWVhcnt3aWR0aDoxMDAlO2ZvbnQtd2VpZ2h0OjUwMDt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItZGF0ZS10aW1le2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjM0cHh9W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1kYXRlLXRpbWV7d2hpdGUtc3BhY2U6bm9ybWFsO3dvcmQtd3JhcDpicmVhay13b3JkfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGU6bm90KC5hY3RpdmUpLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWhvdXJzOm5vdCguYWN0aXZlKSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1taW51dGVzOm5vdCguYWN0aXZlKSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci15ZWFyOm5vdCguYWN0aXZlKXtjdXJzb3I6cG9pbnRlcjtvcGFjaXR5Oi42fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUubm90LWNsaWNrYWJsZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci1ob3Vycy5ub3QtY2xpY2thYmxlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLW1pbnV0ZXMubm90LWNsaWNrYWJsZSwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci15ZWFyLm5vdC1jbGlja2FibGV7Y3Vyc29yOmluaXRpYWx9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZXtwYWRkaW5nLWxlZnQ6OHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWU6bm90KC5hY3RpdmUpe29wYWNpdHk6LjZ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSkgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItaG91cnMsLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItdGltZTpub3QoLmFjdGl2ZSkgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1oZWFkZXItbWludXRlc3tjdXJzb3I6cG9pbnRlcjtvcGFjaXR5OjF9W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlci10aW1le2Rpc3BsYXk6YmxvY2s7cGFkZGluZy1sZWZ0OjB9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3dpZHRoOjEwMCU7cGFkZGluZzowIDhweCA4cHg7b3V0bGluZTowO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpoaWRkZW59W21vZGU9bGFuZHNjYXBlXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWNvbnRlbnR7cGFkZGluZy10b3A6OHB4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItY29udHJvbHN7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcGVyaW9kLWJ1dHRvbntkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NDhweDtwYWRkaW5nOjEycHg7b3V0bGluZTowO2JvcmRlcjowO2JhY2tncm91bmQ6MCAwO2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItcHJldmlvdXMtYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjQ4cHg7aGVpZ2h0OjQ4cHg7cGFkZGluZzoxMnB4O291dGxpbmU6MDtib3JkZXI6MDtjdXJzb3I6cG9pbnRlcjtiYWNrZ3JvdW5kOjAgMDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1uZXh0LWJ1dHRvbi5kaXNhYmxlZCwubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbi5kaXNhYmxlZHtjb2xvcjpyZ2JhKDAsMCwwLC4zOCk7cG9pbnRlci1ldmVudHM6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLW5leHQtYnV0dG9uIHN2ZywubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiBzdmd7ZmlsbDpjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246dG9wfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGV7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7d2lkdGg6MTAwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLXRhYmxlLWhlYWRlcntjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGh7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHg7cGFkZGluZzowIDAgOHB4fUBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXsubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b117ZGlzcGxheTpmbGV4fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXSAubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWhlYWRlcnt3aWR0aDoxNTBweDttaW4td2lkdGg6MTUwcHh9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLWRhdGUtdGltZXt3aGl0ZS1zcGFjZTpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhclttb2RlPWF1dG9dIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItaGVhZGVyLXRpbWV7ZGlzcGxheTpibG9jaztwYWRkaW5nLWxlZnQ6MH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9YXV0b10gLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1jb250ZW50e3BhZGRpbmctdG9wOjhweH19YF0sXG4gIGhvc3Q6IHtcbiAgICBcIltjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJdXCI6IFwidHJ1ZVwiLFxuICAgIFwidGFiaW5kZXhcIjogXCIwXCIsXG4gICAgXCIoa2V5ZG93bilcIjogXCJfaGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bigkZXZlbnQpXCJcbiAgfSxcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9pbnRsQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xuXG4gIEBPdXRwdXQoKSBfdXNlclNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XG5cbiAgLyoqIEEgZGF0ZSByZXByZXNlbnRpbmcgdGhlIHBlcmlvZCAobW9udGggb3IgeWVhcikgdG8gc3RhcnQgdGhlIGNhbGVuZGFyIGluLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc3RhcnRBdCgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0QXQ7XG4gIH1cblxuICBzZXQgc3RhcnRBdCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zdGFydEF0ID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRBdDogRCB8IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIHNob3VsZCBiZSBzdGFydGVkIGluIG1vbnRoIG9yIHllYXIgdmlldy4gKi9cbiAgQElucHV0KCkgc3RhcnRWaWV3OiBcImNsb2NrXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiA9IFwibW9udGhcIjtcblxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWQoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIHNldCBzZWxlY3RlZCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEIHwgbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluRGF0ZSgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX21pbkRhdGU7XG4gIH1cblxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9taW5EYXRlID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWluRGF0ZTogRCB8IG51bGw7XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHNlbGVjdGFibGUgZGF0ZS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG1heERhdGUoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9tYXhEYXRlO1xuICB9XG5cbiAgc2V0IG1heERhdGUodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgdGhpcy5fbWF4RGF0ZSA9IHRoaXMuX2FkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX21heERhdGU6IEQgfCBudWxsO1xuXG4gIEBJbnB1dCgpIHRpbWVJbnRlcnZhbDogbnVtYmVyID0gMTtcblxuICAvKiogQSBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB3aGljaCBkYXRlcyBhcmUgc2VsZWN0YWJsZS4gKi9cbiAgQElucHV0KCkgZGF0ZUZpbHRlcjogKGRhdGU6IEQsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUgY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKiBEYXRlIGZpbHRlciBmb3IgdGhlIG1vbnRoIGFuZCB5ZWFyIHZpZXdzLiAqL1xuICBfZGF0ZUZpbHRlckZvclZpZXdzID0gKGRhdGU6IEQpID0+IHtcbiAgICByZXR1cm4gISFkYXRlICYmXG4gICAgICAoIXRoaXMuZGF0ZUZpbHRlciB8fCB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlLkRBVEUpKSAmJlxuICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZShkYXRlLCB0aGlzLm1pbkRhdGUpID49IDApICYmXG4gICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPD0gMCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgYWN0aXZlIGRhdGUuIFRoaXMgZGV0ZXJtaW5lcyB3aGljaCB0aW1lIHBlcmlvZCBpcyBzaG93biBhbmQgd2hpY2ggZGF0ZSBpc1xuICAgKiBoaWdobGlnaHRlZCB3aGVuIHVzaW5nIGtleWJvYXJkIG5hdmlnYXRpb24uXG4gICAqL1xuICBnZXQgX2FjdGl2ZURhdGUoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xuICB9XG5cbiAgc2V0IF9hY3RpdmVEYXRlKHZhbHVlOiBEKSB7XG4gICAgY29uc3Qgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlO1xuICAgIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUodmFsdWUsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKTtcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSAmJiB0aGlzLl9jdXJyZW50VmlldyA9PT0gXCJtb250aFwiICYmXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2NsYW1wZWRBY3RpdmVEYXRlKSkge1xuICAgICAgaWYgKHRoaXMuX2FkYXB0ZXIuaXNJbk5leHRNb250aChvbGRBY3RpdmVEYXRlLCB0aGlzLl9jbGFtcGVkQWN0aXZlRGF0ZSkpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwicmlnaHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGVuZGFyU3RhdGUoXCJsZWZ0XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsYW1wZWRBY3RpdmVEYXRlOiBEO1xuXG4gIF91c2VyU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgY2FsZW5kYXIgaXMgaW4gbW9udGggdmlldy4gKi9cbiAgX2N1cnJlbnRWaWV3OiBcImNsb2NrXCIgfCBcIm1vbnRoXCIgfCBcInllYXJcIiA9IFwibW9udGhcIjtcbiAgX2Nsb2NrVmlldzogXCJob3VyXCIgfCBcIm1pbnV0ZVwiID0gXCJob3VyXCI7XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGN1cnJlbnQgY2FsZW5kYXIgdmlldy4gKi9cbiAgZ2V0IF95ZWFyTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIGdldCBfbW9udGhZZWFyTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiA/IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGhOYW1lcyhcImxvbmdcIilbdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKV0gOlxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyTmFtZSh0aGlzLl9hY3RpdmVEYXRlKTtcbiAgfVxuXG4gIGdldCBfZGF0ZUxhYmVsKCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwibG9uZ1wiKVt0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpXTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmZvcm1hdCh0aGlzLl9hY3RpdmVEYXRlLCB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LnBvcHVwSGVhZGVyRGF0ZUxhYmVsKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX2hvdXJzTGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fMmRpZ2l0KHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLl9hY3RpdmVEYXRlKSk7XG4gIH1cblxuICBnZXQgX21pbnV0ZXNMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl8yZGlnaXQodGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5fYWN0aXZlRGF0ZSkpO1xuICB9XG5cbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcbiAgICAgICAgICAgICAgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2RhdGVGb3JtYXRzKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIk1BVF9EQVRFVElNRV9GT1JNQVRTXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX2ludGxDaGFuZ2VzID0gX2ludGwuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLnN0YXJ0QXQgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xuICAgIHRoaXMuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwibW9udGhcIikge1xuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcInllYXJcIjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gXCJ0aW1lXCIpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJjbG9ja1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jdXJyZW50VmlldyA9IHRoaXMuc3RhcnRWaWV3IHx8IFwibW9udGhcIjtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9pbnRsQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgZGF0ZSBzZWxlY3Rpb24gaW4gdGhlIG1vbnRoIHZpZXcuICovXG4gIF9kYXRlU2VsZWN0ZWQoZGF0ZTogRCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgPT0gXCJkYXRlXCIpIHtcbiAgICAgIGlmICghdGhpcy5fYWRhcHRlci5zYW1lRGF0ZShkYXRlLCB0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcImNsb2NrXCI7XG4gICAgfVxuICB9XG5cbiAgLyoqIEhhbmRsZXMgbW9udGggc2VsZWN0aW9uIGluIHRoZSB5ZWFyIHZpZXcuICovXG4gIF9tb250aFNlbGVjdGVkKG1vbnRoOiBEKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHlwZSA9PSBcIm1vbnRoXCIpIHtcbiAgICAgIGlmICghdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG1vbnRoLCB0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5fYWRhcHRlci5nZXRGaXJzdERhdGVPZk1vbnRoKG1vbnRoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBtb250aDtcbiAgICAgIHRoaXMuX2N1cnJlbnRWaWV3ID0gXCJtb250aFwiO1xuICAgICAgdGhpcy5fY2xvY2tWaWV3ID0gXCJob3VyXCI7XG4gICAgfVxuICB9XG5cbiAgX3RpbWVTZWxlY3RlZChkYXRlOiBEKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2Nsb2NrVmlldyAhPT0gXCJtaW51dGVcIikge1xuICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGRhdGU7XG4gICAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuX2FkYXB0ZXIuc2FtZURhdGV0aW1lKGRhdGUsIHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25BY3RpdmVEYXRlQ2hhbmdlKGRhdGU6IEQpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gZGF0ZTtcbiAgfVxuXG4gIF95ZWFyQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwieWVhclwiO1xuICB9XG5cbiAgX2RhdGVDbGlja2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnR5cGUgIT09IFwibW9udGhcIikge1xuICAgICAgdGhpcy5fY3VycmVudFZpZXcgPSBcIm1vbnRoXCI7XG4gICAgfVxuICB9XG5cbiAgX2hvdXJzQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcImhvdXJcIjtcbiAgfVxuXG4gIF9taW51dGVzQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jdXJyZW50VmlldyA9IFwiY2xvY2tcIjtcbiAgICB0aGlzLl9jbG9ja1ZpZXcgPSBcIm1pbnV0ZVwiO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIHByZXZpb3VzIGJ1dHRvbi4gKi9cbiAgX3ByZXZpb3VzQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIiA/XG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgdXNlciBjbGlja3Mgb24gdGhlIG5leHQgYnV0dG9uLiAqL1xuICBfbmV4dENsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xuICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XG4gICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgMSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgcHJldmlvdXMgcGVyaW9kIGJ1dHRvbiBpcyBlbmFibGVkLiAqL1xuICBfcHJldmlvdXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5taW5EYXRlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLm1pbkRhdGUgfHwgIXRoaXMuX2lzU2FtZVZpZXcodGhpcy5fYWN0aXZlRGF0ZSwgdGhpcy5taW5EYXRlKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBuZXh0IHBlcmlvZCBidXR0b24gaXMgZW5hYmxlZC4gKi9cbiAgX25leHRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5tYXhEYXRlIHx8ICF0aGlzLl9pc1NhbWVWaWV3KHRoaXMuX2FjdGl2ZURhdGUsIHRoaXMubWF4RGF0ZSk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keS4gKi9cbiAgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBUT0RPKG1tYWxlcmJhKTogV2UgY3VycmVudGx5IGFsbG93IGtleWJvYXJkIG5hdmlnYXRpb24gdG8gZGlzYWJsZWQgZGF0ZXMsIGJ1dCBqdXN0IHByZXZlbnRcbiAgICAvLyBkaXNhYmxlZCBvbmVzIGZyb20gYmVpbmcgc2VsZWN0ZWQuIFRoaXMgbWF5IG5vdCBiZSBpZGVhbCwgd2Ugc2hvdWxkIGxvb2sgaW50byB3aGV0aGVyXG4gICAgLy8gbmF2aWdhdGlvbiBzaG91bGQgc2tpcCBvdmVyIGRpc2FibGVkIGRhdGVzLCBhbmQgaWYgc28sIGhvdyB0byBpbXBsZW1lbnQgdGhhdCBlZmZpY2llbnRseS5cbiAgICBpZiAodGhpcy5fY3VycmVudFZpZXcgPT09IFwibW9udGhcIikge1xuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluTW9udGhWaWV3KGV2ZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcInllYXJcIikge1xuICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJCb2R5S2V5ZG93bkluWWVhclZpZXcoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oYW5kbGVDYWxlbmRhckJvZHlLZXlkb3duSW5DbG9ja1ZpZXcoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0FjdGl2ZUNlbGwoKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdHdvIGRhdGVzIHJlcHJlc2VudCB0aGUgc2FtZSB2aWV3IGluIHRoZSBjdXJyZW50IHZpZXcgbW9kZSAobW9udGggb3IgeWVhcikuICovXG4gIHByaXZhdGUgX2lzU2FtZVZpZXcoZGF0ZTE6IEQsIGRhdGUyOiBEKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRWaWV3ID09PSBcIm1vbnRoXCIgP1xuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTIpICYmXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUxKSA9PSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUyKSA6XG4gICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIoZGF0ZTEpID09IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcihkYXRlMik7XG4gIH1cblxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25Jbk1vbnRoVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUklHSFRfQVJST1c6XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXModGhpcy5fYWN0aXZlRGF0ZSwgLTcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsIDcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSE9NRTpcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJEYXlzKHRoaXMuX2FjdGl2ZURhdGUsXG4gICAgICAgICAgMSAtIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTkQ6XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyRGF5cyh0aGlzLl9hY3RpdmVEYXRlLFxuICAgICAgICAgICh0aGlzLl9hZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuX2FjdGl2ZURhdGUpIC1cbiAgICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLl9hY3RpdmVEYXRlKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9VUDpcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IGV2ZW50LmFsdEtleSA/XG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhclllYXJzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKSA6XG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0RPV046XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSBldmVudC5hbHRLZXkgP1xuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJZZWFycyh0aGlzLl9hY3RpdmVEYXRlLCAxKSA6XG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBpZiAodGhpcy5fZGF0ZUZpbHRlckZvclZpZXdzKHRoaXMuX2FjdGl2ZURhdGUpKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZVNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xuICAgICAgICAgIC8vIFByZXZlbnQgdW5leHBlY3RlZCBkZWZhdWx0IGFjdGlvbnMgc3VjaCBhcyBmb3JtIHN1Ym1pc3Npb24uXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBEb24ndCBwcmV2ZW50IGRlZmF1bHQgb3IgZm9jdXMgYWN0aXZlIGNlbGwgb24ga2V5cyB0aGF0IHdlIGRvbid0IGV4cGxpY2l0bHkgaGFuZGxlLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCB1bmV4cGVjdGVkIGRlZmF1bHQgYWN0aW9ucyBzdWNoIGFzIGZvcm0gc3VibWlzc2lvbi5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMga2V5ZG93biBldmVudHMgb24gdGhlIGNhbGVuZGFyIGJvZHkgd2hlbiBjYWxlbmRhciBpcyBpbiB5ZWFyIHZpZXcuICovXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JblllYXJWaWV3KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fcHJldk1vbnRoSW5TYW1lQ29sKHRoaXMuX2FjdGl2ZURhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX25leHRNb250aEluU2FtZUNvbCh0aGlzLl9hY3RpdmVEYXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEhPTUU6XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKHRoaXMuX2FjdGl2ZURhdGUsXG4gICAgICAgICAgLXRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5fYWN0aXZlRGF0ZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5EOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhck1vbnRocyh0aGlzLl9hY3RpdmVEYXRlLFxuICAgICAgICAgIDExIC0gdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLl9hY3RpdmVEYXRlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX1VQOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID1cbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gLTEwIDogLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9ET1dOOlxuICAgICAgICB0aGlzLl9hY3RpdmVEYXRlID1cbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyWWVhcnModGhpcy5fYWN0aXZlRGF0ZSwgZXZlbnQuYWx0S2V5ID8gMTAgOiAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICB0aGlzLl9tb250aFNlbGVjdGVkKHRoaXMuX2FjdGl2ZURhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBrZXlkb3duIGV2ZW50cyBvbiB0aGUgY2FsZW5kYXIgYm9keSB3aGVuIGNhbGVuZGFyIGlzIGluIG1vbnRoIHZpZXcuICovXG4gIHByaXZhdGUgX2hhbmRsZUNhbGVuZGFyQm9keUtleWRvd25JbkNsb2NrVmlldyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2Nsb2NrVmlldyA9PSBcImhvdXJcIiA/XG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckhvdXJzKHRoaXMuX2FjdGl2ZURhdGUsIDEpIDpcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTWludXRlcyh0aGlzLl9hY3RpdmVEYXRlLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9jbG9ja1ZpZXcgPT0gXCJob3VyXCIgP1xuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJIb3Vycyh0aGlzLl9hY3RpdmVEYXRlLCAtMSkgOlxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNaW51dGVzKHRoaXMuX2FjdGl2ZURhdGUsIC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICB0aGlzLl90aW1lU2VsZWN0ZWQodGhpcy5fYWN0aXZlRGF0ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIERvbid0IHByZXZlbnQgZGVmYXVsdCBvciBmb2N1cyBhY3RpdmUgY2VsbCBvbiBrZXlzIHRoYXQgd2UgZG9uJ3QgZXhwbGljaXRseSBoYW5kbGUuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmV2ZW50IHVuZXhwZWN0ZWQgZGVmYXVsdCBhY3Rpb25zIHN1Y2ggYXMgZm9ybSBzdWJtaXNzaW9uLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBkYXRlIGZvciB0aGUgbW9udGggdGhhdCBjb21lcyBiZWZvcmUgdGhlIGdpdmVuIG1vbnRoIGluIHRoZSBzYW1lIGNvbHVtbiBpbiB0aGVcbiAgICogY2FsZW5kYXIgdGFibGUuXG4gICAqL1xuICBwcml2YXRlIF9wcmV2TW9udGhJblNhbWVDb2woZGF0ZTogRCk6IEQge1xuICAgIC8vIERldGVybWluZSBob3cgbWFueSBtb250aHMgdG8ganVtcCBmb3J3YXJkIGdpdmVuIHRoYXQgdGhlcmUgYXJlIDIgZW1wdHkgc2xvdHMgYXQgdGhlIGJlZ2lubmluZ1xuICAgIC8vIG9mIGVhY2ggeWVhci5cbiAgICBjb25zdCBpbmNyZW1lbnQgPSB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKGRhdGUpIDw9IDQgPyAtNSA6XG4gICAgICAodGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA+PSA3ID8gLTcgOiAtMTIpO1xuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLmFkZENhbGVuZGFyTW9udGhzKGRhdGUsIGluY3JlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSBkYXRlIGZvciB0aGUgbW9udGggdGhhdCBjb21lcyBhZnRlciB0aGUgZ2l2ZW4gbW9udGggaW4gdGhlIHNhbWUgY29sdW1uIGluIHRoZVxuICAgKiBjYWxlbmRhciB0YWJsZS5cbiAgICovXG4gIHByaXZhdGUgX25leHRNb250aEluU2FtZUNvbChkYXRlOiBEKTogRCB7XG4gICAgLy8gRGV0ZXJtaW5lIGhvdyBtYW55IG1vbnRocyB0byBqdW1wIGZvcndhcmQgZ2l2ZW4gdGhhdCB0aGVyZSBhcmUgMiBlbXB0eSBzbG90cyBhdCB0aGUgYmVnaW5uaW5nXG4gICAgLy8gb2YgZWFjaCB5ZWFyLlxuICAgIGNvbnN0IGluY3JlbWVudCA9IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPD0gNCA/IDcgOlxuICAgICAgKHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPj0gNyA/IDUgOiAxMik7XG4gICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXIuYWRkQ2FsZW5kYXJNb250aHMoZGF0ZSwgaW5jcmVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XG4gIH1cblxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF8yZGlnaXQobjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChcIjAwXCIgKyBuKS5zbGljZSgtMik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuLyoqXG4gKiBBbiBpbnRlcm5hbCBjbGFzcyB0aGF0IHJlcHJlc2VudHMgdGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byBhIHNpbmdsZSBjYWxlbmRhciBjZWxsLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsdWU6IG51bWJlcixcbiAgICAgICAgICAgICAgcHVibGljIGRpc3BsYXlWYWx1ZTogc3RyaW5nLFxuICAgICAgICAgICAgICBwdWJsaWMgYXJpYUxhYmVsOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuKSB7XG4gIH1cbn1cblxuLyoqXG4gKiBBbiBpbnRlcm5hbCBjb21wb25lbnQgdXNlZCB0byBkaXNwbGF5IGNhbGVuZGFyIGRhdGEgaW4gYSB0YWJsZS5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIlttYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keV1cIixcbiAgdGVtcGxhdGU6IGA8IS0tXG4gIElmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBpbiB0aGUgZmlyc3Qgcm93LCBjcmVhdGUgYSBzZXBhcmF0ZSBsYWJlbCByb3cuIFdlIG1hcmsgdGhpcyByb3cgYXNcbiAgYXJpYS1oaWRkZW4gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGl0IHRvIGJlIHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgd2Vla3MgaW4gdGhlIG1vbnRoLlxuLS0+XG48dHIgKm5nSWY9XCJfZmlyc3RSb3dPZmZzZXQgPCBsYWJlbE1pblJlcXVpcmVkQ2VsbHNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgPHRkIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWxcIiBbYXR0ci5jb2xzcGFuXT1cIm51bUNvbHNcIiA+e3sgbGFiZWwgfX08L3RkPlxuPC90cj5cblxuPCEtLSBDcmVhdGUgdGhlIGZpcnN0IHJvdyBzZXBhcmF0ZWx5IHNvIHdlIGNhbiBpbmNsdWRlIGEgc3BlY2lhbCBzcGFjZXIgY2VsbC4gLS0+XG48dHIgKm5nRm9yPVwibGV0IHJvdyBvZiByb3dzOyBsZXQgcm93SW5kZXggPSBpbmRleFwiIHJvbGU9XCJyb3dcIj5cbiAgPCEtLVxuICAgIFdlIG1hcmsgdGhpcyBjZWxsIGFzIGFyaWEtaGlkZGVuIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlYWQgb3V0IGFzIG9uZSBvZiB0aGUgZGF5cyBpbiB0aGUgd2Vlay5cbiAgLS0+XG4gIDx0ZCAqbmdJZj1cInJvd0luZGV4ID09PSAwICYmIF9maXJzdFJvd09mZnNldFwiXG4gICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbFwiXG4gICAgICBbYXR0ci5jb2xzcGFuXT1cIl9maXJzdFJvd09mZnNldFwiPlxuICAgIHt7IF9maXJzdFJvd09mZnNldCA+PSBsYWJlbE1pblJlcXVpcmVkQ2VsbHMgPyBsYWJlbCA6ICcnIH19XG4gIDwvdGQ+XG4gIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IGxldCBjb2xJbmRleCA9IGluZGV4XCJcbiAgICAgIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGxcIlxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxuICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWFjdGl2ZV09XCJfaXNBY3RpdmVDZWxsKHJvd0luZGV4LCBjb2xJbmRleClcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmFyaWFMYWJlbFwiXG4gICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWQgfHwgbnVsbFwiXG4gICAgICAoY2xpY2spPVwiX2NlbGxDbGlja2VkKGl0ZW0pXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudFwiXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWRdPVwic2VsZWN0ZWRWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiXG4gICAgICAgICBbY2xhc3MubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktdG9kYXldPVwidG9kYXlWYWx1ZSA9PT0gaXRlbS52YWx1ZVwiPlxuICAgICAge3sgaXRlbS5kaXNwbGF5VmFsdWUgfX1cbiAgICA8L2Rpdj5cbiAgPC90ZD5cbjwvdHI+XG5gLFxuICBzdHlsZXM6IFtgLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5e2ZvbnQtc2l6ZToxM3B4O21pbi13aWR0aDoyMjRweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktbGFiZWx7cGFkZGluZzo3LjE0Mjg2JSAwIDcuMTQyODYlIDcuMTQyODYlO2hlaWdodDowO2xpbmUtaGVpZ2h0OjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTZweCk7dGV4dC1hbGlnbjpsZWZ0fS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1jZWxse3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjE0LjI4NTcxJTtoZWlnaHQ6MDtsaW5lLWhlaWdodDowO3BhZGRpbmc6Ny4xNDI4NiUgMDt0ZXh0LWFsaWduOmNlbnRlcjtvdXRsaW5lOjA7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NSU7bGVmdDo1JTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjkwJTtoZWlnaHQ6OTAlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZD4ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWF0LWNhbGVuZGFyOmZvY3VzIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1hY3RpdmU+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSw6bm90KC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXI+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjEyKX0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktZGlzYWJsZWQ+Lm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpe2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4xOCl9W2Rpcj1ydGxdIC5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keS1sYWJlbHtwYWRkaW5nOjAgNy4xNDI4NiUgMCAwOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg2cHgpO3RleHQtYWxpZ246cmlnaHR9YF0sXG4gIGhvc3Q6IHtcbiAgICBcImNsYXNzXCI6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyLWJvZHlcIlxuICB9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSB7XG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSB0YWJsZS4gKGUuZy4gXCJKYW4gMjAxN1wiKS4gKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKiogVGhlIGNlbGxzIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlLiAqL1xuICBASW5wdXQoKSByb3dzOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbFtdW107XG5cbiAgLyoqIFRoZSB2YWx1ZSBpbiB0aGUgdGFibGUgdGhhdCBjb3JyZXNwb25kcyB0byB0b2RheS4gKi9cbiAgQElucHV0KCkgdG9kYXlWYWx1ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgdmFsdWUgaW4gdGhlIHRhYmxlIHRoYXQgaXMgY3VycmVudGx5IHNlbGVjdGVkLiAqL1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIG51bWJlciBvZiBmcmVlIGNlbGxzIG5lZWRlZCB0byBmaXQgdGhlIGxhYmVsIGluIHRoZSBmaXJzdCByb3cuICovXG4gIEBJbnB1dCgpIGxhYmVsTWluUmVxdWlyZWRDZWxsczogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIHRhYmxlLiAqL1xuICBASW5wdXQoKSBudW1Db2xzID0gNztcblxuICAvKiogV2hldGhlciB0byBhbGxvdyBzZWxlY3Rpb24gb2YgZGlzYWJsZWQgY2VsbHMuICovXG4gIEBJbnB1dCgpIGFsbG93RGlzYWJsZWRTZWxlY3Rpb24gPSBmYWxzZTtcblxuICAvKiogVGhlIGNlbGwgbnVtYmVyIG9mIHRoZSBhY3RpdmUgY2VsbCBpbiB0aGUgdGFibGUuICovXG4gIEBJbnB1dCgpIGFjdGl2ZUNlbGwgPSAwO1xuXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIF9jZWxsQ2xpY2tlZChjZWxsOiBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbGxvd0Rpc2FibGVkU2VsZWN0aW9uICYmICFjZWxsLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlQ2hhbmdlLmVtaXQoY2VsbC52YWx1ZSk7XG4gIH1cblxuICAvKiogVGhlIG51bWJlciBvZiBibGFuayBjZWxscyB0byBwdXQgYXQgdGhlIGJlZ2lubmluZyBmb3IgdGhlIGZpcnN0IHJvdy4gKi9cbiAgZ2V0IF9maXJzdFJvd09mZnNldCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCAmJiB0aGlzLnJvd3NbMF0ubGVuZ3RoID9cbiAgICAgIHRoaXMubnVtQ29scyAtIHRoaXMucm93c1swXS5sZW5ndGggOiAwO1xuICB9XG5cbiAgX2lzQWN0aXZlQ2VsbChyb3dJbmRleDogbnVtYmVyLCBjb2xJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IGNlbGxOdW1iZXIgPSByb3dJbmRleCAqIHRoaXMubnVtQ29scyArIGNvbEluZGV4O1xuXG4gICAgLy8gQWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgZmlyc3Qgcm93IG1heSBub3QgaGF2ZSBhcyBtYW55IGNlbGxzLlxuICAgIGlmIChyb3dJbmRleCkge1xuICAgICAgY2VsbE51bWJlciAtPSB0aGlzLl9maXJzdFJvd09mZnNldDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2VsbE51bWJlciA9PT0gdGhpcy5hY3RpdmVDZWxsO1xuICB9XG59XG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcblxuZXhwb3J0IGNvbnN0IENMT0NLX1JBRElVUyA9IDUwO1xuZXhwb3J0IGNvbnN0IENMT0NLX0lOTkVSX1JBRElVUyA9IDI3LjU7XG5leHBvcnQgY29uc3QgQ0xPQ0tfT1VURVJfUkFESVVTID0gNDEuMjU7XG5leHBvcnQgY29uc3QgQ0xPQ0tfVElDS19SQURJVVMgPSA3LjA4MzM7XG5cbmV4cG9ydCB0eXBlIENsb2NrVmlldyA9IFwiaG91clwiIHwgXCJtaW51dGVcIjtcblxuLyoqXG4gKiBBIGNsb2NrIHRoYXQgaXMgdXNlZCBhcyBwYXJ0IG9mIHRoZSBkYXRlcGlja2VyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrXCIsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9ja1wiPlxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbnRlclwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmRcIiBbbmdTdHlsZV09XCJfaGFuZFwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzXCIgW2NsYXNzLmFjdGl2ZV09XCJfaG91clZpZXdcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ob3Vyc1wiXG4gICAgICAgICBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsXCJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZF09XCJfc2VsZWN0ZWRIb3VyID09IGl0ZW0udmFsdWVcIlxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVkXT1cIiFpdGVtLmVuYWJsZWRcIlxuICAgICAgICAgW3N0eWxlLnRvcF09XCJpdGVtLnRvcCsnJSdcIlxuICAgICAgICAgW3N0eWxlLmxlZnRdPVwiaXRlbS5sZWZ0KyclJ1wiXG4gICAgICAgICBbc3R5bGUuZm9udFNpemVdPVwiaXRlbS5mb250U2l6ZVwiPnt7IGl0ZW0uZGlzcGxheVZhbHVlIH19PC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLW1pbnV0ZXNcIiBbY2xhc3MuYWN0aXZlXT1cIiFfaG91clZpZXdcIj5cbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9taW51dGVzXCJcbiAgICAgICAgIGNsYXNzPVwibWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGxcIlxuICAgICAgICAgW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLXNlbGVjdGVkXT1cIl9zZWxlY3RlZE1pbnV0ZSA9PSBpdGVtLnZhbHVlXCJcbiAgICAgICAgIFtjbGFzcy5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1kaXNhYmxlZF09XCIhaXRlbS5lbmFibGVkXCJcbiAgICAgICAgIFtzdHlsZS50b3BdPVwiaXRlbS50b3ArJyUnXCJcbiAgICAgICAgIFtzdHlsZS5sZWZ0XT1cIml0ZW0ubGVmdCsnJSdcIj57eyBpdGVtLmRpc3BsYXlWYWx1ZSB9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7bWluLXdpZHRoOjIyNHB4O21hcmdpbjo4cHg7Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy10b3A6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNlMGUwZTA7Ym9yZGVyLXJhZGl1czo1MCV9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZW50ZXJ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt3aWR0aDoyJTtoZWlnaHQ6MiU7bWFyZ2luOi0xJTtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MXB4O21hcmdpbjowIGF1dG87LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhhbmQ6OmJlZm9yZXtjb250ZW50OicnO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotNHB4O2xlZnQ6LTRweDt3aWR0aDo4cHg7aGVpZ2h0OjhweDtib3JkZXItcmFkaXVzOjUwJX0ubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWhvdXJzLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlc3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNpdGlvbjozNTBtczstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjIpO3RyYW5zZm9ybTpzY2FsZSgxLjIpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2staG91cnMuYWN0aXZlLC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stbWludXRlcy5hY3RpdmV7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1taW51dGVzey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC44KTt0cmFuc2Zvcm06c2NhbGUoLjgpfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbHtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmZsZXg7d2lkdGg6MTQuMTY2NiU7aGVpZ2h0OjE0LjE2NjYlO2NvbG9yOnJnYmEoMCwwLDAsLjg3KTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItcmFkaXVzOjUwJTthbGlnbi1pdGVtczpjZW50ZXI7Y3Vyc29yOnBvaW50ZXJ9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtc2VsZWN0ZWQpOm5vdCgubWF0LWRhdGV0aW1lcGlja2VyLWNsb2NrLWNlbGwtZGlzYWJsZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSl9Lm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLm1hdC1kYXRldGltZXBpY2tlci1jbG9jay1jZWxsLWRpc2FibGVke2NvbG9yOnJnYmEoMCwwLDAsLjM4KTtwb2ludGVyLWV2ZW50czpub25lfS5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC5tYXQtZGF0ZXRpbWVwaWNrZXItY2xvY2stY2VsbC1zZWxlY3RlZHtjb2xvcjojZmZmfWBdLFxuICBob3N0OiB7XG4gICAgXCJyb2xlXCI6IFwiY2xvY2tcIixcbiAgICBcIihtb3VzZWRvd24pXCI6IFwiX2hhbmRsZU1vdXNlZG93bigkZXZlbnQpXCJcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlckNsb2NrPEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgY2xvY2sgdmlldy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY2xhbXBEYXRlKHZhbHVlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSk7XG4gICAgaWYgKCF0aGlzLl9hZGFwdGVyLnNhbWVNaW51dGUob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xuXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fYWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fYWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQgfCBudWxsO1xuXG4gIC8qKiBUaGUgbWluaW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtaW5EYXRlKCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbWluRGF0ZTtcbiAgfVxuXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbkRhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9taW5EYXRlOiBEIHwgbnVsbDtcblxuICBwcml2YXRlIF90aW1lQ2hhbmdlZCA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXhEYXRlKCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4RGF0ZTtcbiAgfVxuXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21heERhdGUgPSB0aGlzLl9hZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9hZGFwdGVyLmRlc2VyaWFsaXplKHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIF9tYXhEYXRlOiBEIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgY2xvY2sgc2hvdWxkIGJlIHN0YXJ0ZWQgaW4gaG91ciBvciBtaW51dGUgdmlldy4gKi9cbiAgQElucHV0KClcbiAgc2V0IHN0YXJ0Vmlldyh2YWx1ZTogQ2xvY2tWaWV3KSB7XG4gICAgdGhpcy5faG91clZpZXcgPSB2YWx1ZSAhPSBcIm1pbnV0ZVwiO1xuICB9XG5cbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBELCB0eXBlOiBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUpID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlciA9IDE7XG5cbiAgQElucHV0KCkgdHdlbHZlaG91cjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIEhvdXJzIGFuZCBNaW51dGVzIHJlcHJlc2VudGluZyB0aGUgY2xvY2sgdmlldy4gKi9cbiAgX2hvdXJzOiBBcnJheTxPYmplY3Q+ID0gW107XG4gIF9taW51dGVzOiBBcnJheTxPYmplY3Q+ID0gW107XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNsb2NrIGlzIGluIGhvdXIgdmlldy4gKi9cbiAgX2hvdXJWaWV3OiBib29sZWFuID0gdHJ1ZTtcblxuICBfc2VsZWN0ZWRIb3VyOiBudW1iZXI7XG4gIF9zZWxlY3RlZE1pbnV0ZTogbnVtYmVyO1xuXG4gIGdldCBfaGFuZCgpOiBhbnkge1xuICAgIHRoaXMuX3NlbGVjdGVkSG91ciA9IHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpO1xuICAgIHRoaXMuX3NlbGVjdGVkTWludXRlID0gdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBsZXQgZGVnID0gMDtcbiAgICBsZXQgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xuICAgIGlmICh0aGlzLl9ob3VyVmlldykge1xuICAgICAgbGV0IG91dGVyID0gdGhpcy5fc2VsZWN0ZWRIb3VyID4gMCAmJiB0aGlzLl9zZWxlY3RlZEhvdXIgPCAxMztcbiAgICAgIHJhZGl1cyA9IG91dGVyID8gQ0xPQ0tfT1VURVJfUkFESVVTIDogQ0xPQ0tfSU5ORVJfUkFESVVTO1xuICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xuICAgICAgICByYWRpdXMgPSBDTE9DS19PVVRFUl9SQURJVVM7XG4gICAgICB9XG4gICAgICBkZWcgPSBNYXRoLnJvdW5kKHRoaXMuX3NlbGVjdGVkSG91ciAqICgzNjAgLyAoMjQgLyAyKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWcgPSBNYXRoLnJvdW5kKHRoaXMuX3NlbGVjdGVkTWludXRlICogKDM2MCAvIDYwKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBcInRyYW5zZm9ybVwiOiBgcm90YXRlKCR7ZGVnfWRlZylgLFxuICAgICAgXCJoZWlnaHRcIjogYCR7cmFkaXVzfSVgLFxuICAgICAgXCJtYXJnaW4tdG9wXCI6IGAkezUwIC0gcmFkaXVzfSVgXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2VNb3ZlTGlzdGVuZXI6IGFueTtcbiAgcHJpdmF0ZSBtb3VzZVVwTGlzdGVuZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4pIHtcbiAgICB0aGlzLm1vdXNlTW92ZUxpc3RlbmVyID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vdXNlbW92ZShldmVudCk7XG4gICAgfTtcbiAgICB0aGlzLm1vdXNlVXBMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZU1vdXNldXAoKTtcbiAgICB9O1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGUgfHwgdGhpcy5fYWRhcHRlci50b2RheSgpO1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIG1vdXNlZG93biBldmVudHMgb24gdGhlIGNsb2NrIGJvZHkuICovXG4gIF9oYW5kbGVNb3VzZWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuX3RpbWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgdGhpcy5zZXRUaW1lKGV2ZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XG4gIH1cblxuICBfaGFuZGxlTW91c2Vtb3ZlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0VGltZShldmVudCk7XG4gIH1cblxuICBfaGFuZGxlTW91c2V1cCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5tb3VzZU1vdmVMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm1vdXNlVXBMaXN0ZW5lcik7XG4gICAgaWYgKHRoaXMuX3RpbWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICAgIGlmICghdGhpcy5faG91clZpZXcpIHtcbiAgICAgICAgdGhpcy5fdXNlclNlbGVjdGlvbi5lbWl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIEluaXRpYWxpemVzIHRoaXMgY2xvY2sgdmlldy4gKi9cbiAgcHJpdmF0ZSBfaW5pdCgpIHtcbiAgICB0aGlzLl9ob3Vycy5sZW5ndGggPSAwO1xuICAgIHRoaXMuX21pbnV0ZXMubGVuZ3RoID0gMDtcblxuICAgIGxldCBob3VyTmFtZXMgPSB0aGlzLl9hZGFwdGVyLmdldEhvdXJOYW1lcygpO1xuICAgIGxldCBtaW51dGVOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlTmFtZXMoKTtcblxuICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgKGhvdXJOYW1lcy5sZW5ndGggLyAyKSArIDE7IGkrKykge1xuICAgICAgICBsZXQgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xuICAgICAgICBsZXQgcmFkaXVzID0gQ0xPQ0tfT1VURVJfUkFESVVTO1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIGkgKyAxLCAwKTtcbiAgICAgICAgbGV0IGVuYWJsZWQgPVxuICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApO1xuICAgICAgICB0aGlzLl9ob3Vycy5wdXNoKHtcbiAgICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgICBkaXNwbGF5VmFsdWU6IGkgPT09IDAgPyBcIjAwXCIgOiBob3VyTmFtZXNbaV0sXG4gICAgICAgICAgZW5hYmxlZDogZW5hYmxlZCxcbiAgICAgICAgICB0b3A6IENMT0NLX1JBRElVUyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcbiAgICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gQ0xPQ0tfVElDS19SQURJVVNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91ck5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XG4gICAgICAgIGxldCBvdXRlciA9IGkgPiAwICYmIGkgPCAxMyxcbiAgICAgICAgICByYWRpdXMgPSBvdXRlciA/IENMT0NLX09VVEVSX1JBRElVUyA6IENMT0NLX0lOTkVSX1JBRElVUztcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCBpLCAwKTtcbiAgICAgICAgbGV0IGVuYWJsZWQgPVxuICAgICAgICAgICghdGhpcy5taW5EYXRlIHx8IHRoaXMuX2FkYXB0ZXIuY29tcGFyZURhdGV0aW1lKGRhdGUsIHRoaXMubWluRGF0ZSkgPj0gMCkgJiZcbiAgICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXG4gICAgICAgICAgKCF0aGlzLmRhdGVGaWx0ZXIgfHwgdGhpcy5kYXRlRmlsdGVyKGRhdGUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5IT1VSKSk7XG4gICAgICAgIHRoaXMuX2hvdXJzLnB1c2goe1xuICAgICAgICAgIHZhbHVlOiBpLFxuICAgICAgICAgIGRpc3BsYXlWYWx1ZTogaSA9PT0gMCA/IFwiMDBcIiA6IGhvdXJOYW1lc1tpXSxcbiAgICAgICAgICBlbmFibGVkOiBlbmFibGVkLFxuICAgICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIENMT0NLX1RJQ0tfUkFESVVTLFxuICAgICAgICAgIGxlZnQ6IENMT0NLX1JBRElVUyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSBDTE9DS19USUNLX1JBRElVUyxcbiAgICAgICAgICBmb250U2l6ZTogaSA+IDAgJiYgaSA8IDEzID8gXCJcIiA6IFwiODAlXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW51dGVOYW1lcy5sZW5ndGg7IGkgKz0gNSkge1xuICAgICAgbGV0IHJhZGlhbiA9IGkgLyAzMCAqIE1hdGguUEk7XG4gICAgICBjb25zdCBkYXRlID0gdGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLCBpKTtcbiAgICAgIGxldCBlbmFibGVkID1cbiAgICAgICAgKCF0aGlzLm1pbkRhdGUgfHwgdGhpcy5fYWRhcHRlci5jb21wYXJlRGF0ZXRpbWUoZGF0ZSwgdGhpcy5taW5EYXRlKSA+PSAwKSAmJlxuICAgICAgICAoIXRoaXMubWF4RGF0ZSB8fCB0aGlzLl9hZGFwdGVyLmNvbXBhcmVEYXRldGltZShkYXRlLCB0aGlzLm1heERhdGUpIDw9IDApICYmXG4gICAgICAgICghdGhpcy5kYXRlRmlsdGVyIHx8IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBNYXREYXRldGltZXBpY2tlckZpbHRlclR5cGUuTUlOVVRFKSk7XG4gICAgICB0aGlzLl9taW51dGVzLnB1c2goe1xuICAgICAgICB2YWx1ZTogaSxcbiAgICAgICAgZGlzcGxheVZhbHVlOiBpID09PSAwID8gXCIwMFwiIDogbWludXRlTmFtZXNbaV0sXG4gICAgICAgIGVuYWJsZWQ6IGVuYWJsZWQsXG4gICAgICAgIHRvcDogQ0xPQ0tfUkFESVVTIC0gTWF0aC5jb3MocmFkaWFuKSAqIENMT0NLX09VVEVSX1JBRElVUyAtIENMT0NLX1RJQ0tfUkFESVVTLFxuICAgICAgICBsZWZ0OiBDTE9DS19SQURJVVMgKyBNYXRoLnNpbihyYWRpYW4pICogQ0xPQ0tfT1VURVJfUkFESVVTIC0gQ0xPQ0tfVElDS19SQURJVVNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgVGltZVxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIHByaXZhdGUgc2V0VGltZShldmVudDogYW55KSB7XG4gICAgbGV0IHRyaWdnZXIgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IHRyaWdnZXJSZWN0ID0gdHJpZ2dlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgd2lkdGggPSB0cmlnZ2VyLm9mZnNldFdpZHRoO1xuICAgIGxldCBoZWlnaHQgPSB0cmlnZ2VyLm9mZnNldEhlaWdodDtcbiAgICBsZXQgcGFnZVggPSBldmVudC5wYWdlWCAhPT0gdW5kZWZpbmVkID8gZXZlbnQucGFnZVggOiBldmVudC50b3VjaGVzWzBdLnBhZ2VYO1xuICAgIGxldCBwYWdlWSA9IGV2ZW50LnBhZ2VZICE9PSB1bmRlZmluZWQgPyBldmVudC5wYWdlWSA6IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XG4gICAgbGV0IHggPSAod2lkdGggLyAyKSAtIChwYWdlWCAtIHRyaWdnZXJSZWN0LmxlZnQgLSB3aW5kb3cucGFnZVhPZmZzZXQpO1xuICAgIGxldCB5ID0gKGhlaWdodCAvIDIpIC0gKHBhZ2VZIC0gdHJpZ2dlclJlY3QudG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0KTtcbiAgICBsZXQgcmFkaWFuID0gTWF0aC5hdGFuMigteCwgeSk7XG4gICAgbGV0IHVuaXQgPSBNYXRoLlBJIC8gKHRoaXMuX2hvdXJWaWV3ID8gNiA6ICh0aGlzLmludGVydmFsID8gKDMwIC8gdGhpcy5pbnRlcnZhbCkgOiAzMCkpO1xuICAgIGxldCB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIGxldCBvdXRlciA9IHRoaXMuX2hvdXJWaWV3ICYmIHogPiAoKHdpZHRoICogKENMT0NLX09VVEVSX1JBRElVUyAvIDEwMCkpICtcbiAgICAgICh3aWR0aCAqIChDTE9DS19JTk5FUl9SQURJVVMgLyAxMDApKSkgLyAyO1xuXG4gICAgaWYgKHJhZGlhbiA8IDApIHtcbiAgICAgIHJhZGlhbiA9IE1hdGguUEkgKiAyICsgcmFkaWFuO1xuICAgIH1cbiAgICBsZXQgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xuXG4gICAgbGV0IGRhdGU7XG4gICAgaWYgKHRoaXMuX2hvdXJWaWV3KSB7XG4gICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAxMikge1xuICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IG91dGVyID8gKHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZSkgOiB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSArIDEyO1xuICAgICAgfVxuICAgICAgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLCB2YWx1ZSwgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICAgIHZhbHVlICo9IHRoaXMuaW50ZXJ2YWw7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IDYwKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgIH1cbiAgICAgIGRhdGUgPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldFllYXIodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldERhdGUodGhpcy5hY3RpdmVEYXRlKSwgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGFtcGVkID0gdGhpcy5fYWRhcHRlci5jbGFtcERhdGUoZGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpO1xuICAgIGlmIChkYXRlID09PSBjbGFtcGVkKSB7XG4gICAgICB0aGlzLl90aW1lQ2hhbmdlZCA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBjbGFtcGVkO1xuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGlvbmFsaXR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9iaWRpXCI7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XG5pbXBvcnQgeyBFU0NBUEUgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2tleWNvZGVzXCI7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9wb3J0YWxcIjtcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29tcG9uZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNQVRfREFURVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7XG4gIE1hdERpYWxvZyxcbiAgTWF0RGlhbG9nUmVmXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dcIjtcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtYWRhcHRlclwiO1xuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhciB9IGZyb20gXCIuL2NhbGVuZGFyXCI7XG5pbXBvcnQgeyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWVycm9yc1wiO1xuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZmlsdGVydHlwZVwiO1xuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWlucHV0XCI7XG5cbi8qKiBVc2VkIHRvIGdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciBlYWNoIGRhdGVwaWNrZXIgaW5zdGFuY2UuICovXG5sZXQgZGF0ZXRpbWVwaWNrZXJVaWQgPSAwO1xuXG4vKipcbiAqIENvbXBvbmVudCB1c2VkIGFzIHRoZSBjb250ZW50IGZvciB0aGUgZGF0ZXBpY2tlciBkaWFsb2cgYW5kIHBvcHVwLiBXZSB1c2UgdGhpcyBpbnN0ZWFkIG9mIHVzaW5nXG4gKiBNYXRDYWxlbmRhciBkaXJlY3RseSBhcyB0aGUgY29udGVudCBzbyB3ZSBjYW4gY29udHJvbCB0aGUgaW5pdGlhbCBmb2N1cy4gVGhpcyBhbHNvIGdpdmVzIHVzIGFcbiAqIHBsYWNlIHRvIHB1dCBhZGRpdGlvbmFsIGZlYXR1cmVzIG9mIHRoZSBwb3B1cCB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgY2FsZW5kYXIgaXRzZWxmIGluIHRoZVxuICogZnV0dXJlLiAoZS5nLiBjb25maXJtYXRpb24gYnV0dG9ucykuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxuICB0ZW1wbGF0ZTogYDxtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXIgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeVwiIGNka1RyYXBGb2N1c1xuICAgICAgICAgICAgICBbaWRdPVwiZGF0ZXRpbWVwaWNrZXIuaWRcIlxuICAgICAgICAgICAgICBbYXR0ci5tb2RlXT1cImRhdGV0aW1lcGlja2VyLm1vZGVcIlxuICAgICAgICAgICAgICBbc3RhcnRWaWV3XT1cImRhdGV0aW1lcGlja2VyLnN0YXJ0Vmlld1wiXG4gICAgICAgICAgICAgIFt0eXBlXT1cImRhdGV0aW1lcGlja2VyLnR5cGVcIlxuICAgICAgICAgICAgICBbdGltZUludGVydmFsXT1cImRhdGV0aW1lcGlja2VyLnRpbWVJbnRlcnZhbFwiXG4gICAgICAgICAgICAgIFttaW5EYXRlXT1cImRhdGV0aW1lcGlja2VyLl9taW5EYXRlXCJcbiAgICAgICAgICAgICAgW21heERhdGVdPVwiZGF0ZXRpbWVwaWNrZXIuX21heERhdGVcIlxuICAgICAgICAgICAgICBbZGF0ZUZpbHRlcl09XCJkYXRldGltZXBpY2tlci5fZGF0ZUZpbHRlclwiXG4gICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJkYXRldGltZXBpY2tlci5fc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICBbc3RhcnRBdF09XCJkYXRldGltZXBpY2tlci5zdGFydEF0XCJcbiAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cImRhdGV0aW1lcGlja2VyLl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChfdXNlclNlbGVjdGlvbik9XCJkYXRldGltZXBpY2tlci5jbG9zZSgpXCI+XG48L21hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhcj5cbmAsXG4gIHN0eWxlczogW2AubWF0LWRhdGV0aW1lcGlja2VyLWNvbnRlbnR7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O292ZXJmbG93OmhpZGRlbn0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFye3dpZHRoOjI5NnB4O2hlaWdodDo0MDVweH0ubWF0LWRhdGV0aW1lcGlja2VyLWNhbGVuZGFyW21vZGU9bGFuZHNjYXBlXXt3aWR0aDo0NDZweDtoZWlnaHQ6MzI4cHh9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5tYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXJbbW9kZT1hdXRvXXt3aWR0aDo0NDZweDtoZWlnaHQ6MzI4cHh9fS5tYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudC10b3VjaHtib3gtc2hhZG93OjAgMCAwIDAgcmdiYSgwLDAsMCwuMiksMCAwIDAgMCByZ2JhKDAsMCwwLC4xNCksMCAwIDAgMCByZ2JhKDAsMCwwLC4xMik7ZGlzcGxheTpibG9jaztib3gtc2hhZG93OjAgMTFweCAxNXB4IC03cHggcmdiYSgwLDAsMCwuMiksMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwwLDAsLjE0KSwwIDlweCA0NnB4IDhweCByZ2JhKDAsMCwwLC4xMil9LmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyLC5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6MDtsZWZ0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uY2RrLW92ZXJsYXktY29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMH0uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTAwMH0uY2RrLW92ZXJsYXktcGFuZXtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveDt6LWluZGV4OjEwMDB9LmNkay1vdmVybGF5LWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO3otaW5kZXg6MTAwMDtwb2ludGVyLWV2ZW50czphdXRvO3RyYW5zaXRpb246b3BhY2l0eSAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7b3BhY2l0eTowfS5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjQ4fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuNil9Lm1hdC1kYXRldGltZXBpY2tlci1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVye3BhZGRpbmc6MH1gXSxcbiAgaG9zdDoge1xuICAgIFwiY2xhc3NcIjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItY29udGVudFwiLFxuICAgIFwiW2NsYXNzLm1hdC1kYXRldGltZXBpY2tlci1jb250ZW50LXRvdWNoXVwiOiBcImRhdGV0aW1lcGlja2VyPy50b3VjaFVpXCIsXG4gICAgXCIoa2V5ZG93bilcIjogXCJfaGFuZGxlS2V5ZG93bigkZXZlbnQpXCJcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIGRhdGV0aW1lcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcblxuICBAVmlld0NoaWxkKE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXIpIF9jYWxlbmRhcjogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcjxEPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIuX2ZvY3VzQWN0aXZlQ2VsbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMga2V5ZG93biBldmVudCBvbiBkYXRlcGlja2VyIGNvbnRlbnQuXG4gICAqIEBwYXJhbSBldmVudCBUaGUgZXZlbnQuXG4gICAqL1xuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIuY2xvc2UoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1hdC1kYXRldGltZXBpY2tlclwiLFxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclwiLFxuICB0ZW1wbGF0ZTogXCJcIixcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VyPEQ+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIFRoZSBkYXRlIHRvIG9wZW4gdGhlIGNhbGVuZGFyIHRvIGluaXRpYWxseS4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHN0YXJ0QXQoKTogRCB8IG51bGwge1xuICAgIC8vIElmIGFuIGV4cGxpY2l0IHN0YXJ0QXQgaXMgc2V0IHdlIHN0YXJ0IHRoZXJlLCBvdGhlcndpc2Ugd2Ugc3RhcnQgYXQgd2hhdGV2ZXIgdGhlIGN1cnJlbnRseVxuICAgIC8vIHNlbGVjdGVkIHZhbHVlIGlzLlxuICAgIHJldHVybiB0aGlzLl9zdGFydEF0IHx8ICh0aGlzLl9kYXRlcGlja2VySW5wdXQgPyB0aGlzLl9kYXRlcGlja2VySW5wdXQudmFsdWUgOiBudWxsKTtcbiAgfVxuXG4gIHNldCBzdGFydEF0KGRhdGU6IEQgfCBudWxsKSB7XG4gICAgdGhpcy5fc3RhcnRBdCA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbChkYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXJ0QXQ6IEQgfCBudWxsO1xuXG4gIC8qKiBUaGUgdmlldyB0aGF0IHRoZSBjYWxlbmRhciBzaG91bGQgc3RhcnQgaW4uICovXG4gIEBJbnB1dCgpIHN0YXJ0VmlldzogXCJjbG9ja1wiIHwgXCJtb250aFwiIHwgXCJ5ZWFyXCIgPSBcIm1vbnRoXCI7XG4gIEBJbnB1dCgpIG1vZGU6IFwiYXV0b1wiIHwgXCJwb3J0cmFpdFwiIHwgXCJsYW5kc2NhcGVcIiA9IFwiYXV0b1wiO1xuICBASW5wdXQoKSB0aW1lSW50ZXJ2YWw6IG51bWJlciA9IDE7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wZW5PbkZvY3VzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3Blbk9uRm9jdXM7IH1cbiAgc2V0IG9wZW5PbkZvY3VzKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX29wZW5PbkZvY3VzID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBwcml2YXRlIF9vcGVuT25Gb2N1czogYm9vbGVhbjtcblxuICBfaGFuZGxlRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiB0aGlzLm9wZW5PbkZvY3VzKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIHNldCB0eXBlKHZhbHVlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlIHx8IFwiZGF0ZVwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHlwZTogXCJkYXRlXCIgfCBcInRpbWVcIiB8IFwibW9udGhcIiB8IFwiZGF0ZXRpbWVcIiA9IFwiZGF0ZVwiO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjYWxlbmRhciBVSSBpcyBpbiB0b3VjaCBtb2RlLiBJbiB0b3VjaCBtb2RlIHRoZSBjYWxlbmRhciBvcGVucyBpbiBhIGRpYWxvZyByYXRoZXJcbiAgICogdGhhbiBhIHBvcHVwIGFuZCBlbGVtZW50cyBoYXZlIG1vcmUgcGFkZGluZyB0byBhbGxvdyBmb3IgYmlnZ2VyIHRvdWNoIHRhcmdldHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgdG91Y2hVaSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG91Y2hVaTtcbiAgfVxuXG4gIHNldCB0b3VjaFVpKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdG91Y2hVaSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF90b3VjaFVpID0gZmFsc2U7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRhdGVwaWNrZXIgcG9wLXVwIHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA/XG4gICAgICB0aGlzLl9kYXRlcGlja2VySW5wdXQuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl9kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLm5leHQobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBuZXcgc2VsZWN0ZWQgZGF0ZSB3aGVuIHNlbGVjdGVkIGRhdGUgY2hhbmdlcy5cbiAgICogQGRlcHJlY2F0ZWQgU3dpdGNoIHRvIHRoZSBgZGF0ZUNoYW5nZWAgYW5kIGBkYXRlSW5wdXRgIGJpbmRpbmcgb24gdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxEPigpO1xuXG4gIC8qKiBDbGFzc2VzIHRvIGJlIHBhc3NlZCB0byB0aGUgZGF0ZSBwaWNrZXIgcGFuZWwuIFN1cHBvcnRzIHRoZSBzYW1lIHN5bnRheCBhcyBgbmdDbGFzc2AuICovXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBkYXRlcGlja2VyIGhhcyBiZWVuIG9wZW5lZC4gKi9cbiAgQE91dHB1dChcIm9wZW5lZFwiKSBvcGVuZWRTdHJlYW06IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGF0ZXBpY2tlciBoYXMgYmVlbiBjbG9zZWQuICovXG4gIEBPdXRwdXQoXCJjbG9zZWRcIikgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNhbGVuZGFyIGlzIG9wZW4uICovXG4gIG9wZW5lZCA9IGZhbHNlO1xuXG4gIC8qKiBUaGUgaWQgZm9yIHRoZSBkYXRlcGlja2VyIGNhbGVuZGFyLiAqL1xuICBpZCA9IGBtYXQtZGF0ZXRpbWVwaWNrZXItJHtkYXRldGltZXBpY2tlclVpZCsrfWA7XG5cbiAgLyoqIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgZGF0ZS4gKi9cbiAgZ2V0IF9zZWxlY3RlZCgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkU2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgX3NlbGVjdGVkKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbGlkU2VsZWN0ZWQ6IEQgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gc2VsZWN0YWJsZSBkYXRlLiAqL1xuICBnZXQgX21pbkRhdGUoKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VySW5wdXQgJiYgdGhpcy5fZGF0ZXBpY2tlcklucHV0Lm1pbjtcbiAgfVxuXG4gIC8qKiBUaGUgbWF4aW11bSBzZWxlY3RhYmxlIGRhdGUuICovXG4gIGdldCBfbWF4RGF0ZSgpOiBEIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCAmJiB0aGlzLl9kYXRlcGlja2VySW5wdXQubWF4O1xuICB9XG5cbiAgZ2V0IF9kYXRlRmlsdGVyKCk6IChkYXRlOiBEIHwgbnVsbCwgdHlwZTogTWF0RGF0ZXRpbWVwaWNrZXJGaWx0ZXJUeXBlKSA9PiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlcklucHV0ICYmIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fZGF0ZUZpbHRlcjtcbiAgfVxuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGVuIHRoZSBjYWxlbmRhciBpcyBvcGVuZWQgYXMgYSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfcG9wdXBSZWY6IE92ZXJsYXlSZWY7XG5cbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2cgd2hlbiB0aGUgY2FsZW5kYXIgaXMgb3BlbmVkIGFzIGEgZGlhbG9nLiAqL1xuICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxhbnk+IHwgbnVsbDtcblxuICAvKiogQSBwb3J0YWwgY29udGFpbmluZyB0aGUgY2FsZW5kYXIgZm9yIHRoaXMgZGF0ZXBpY2tlci4gKi9cbiAgcHJpdmF0ZSBfY2FsZW5kYXJQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxNYXREYXRldGltZXBpY2tlckNvbnRlbnQ8RD4+O1xuXG4gIC8qKiBUaGUgZWxlbWVudCB0aGF0IHdhcyBmb2N1c2VkIGJlZm9yZSB0aGUgZGF0ZXBpY2tlciB3YXMgb3BlbmVkLiAqL1xuICBwcml2YXRlIF9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW46IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfaW5wdXRTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgLyoqIFRoZSBpbnB1dCBlbGVtZW50IHRoaXMgZGF0ZXBpY2tlciBpcyBhc3NvY2lhdGVkIHdpdGguICovXG4gIF9kYXRlcGlja2VySW5wdXQ6IE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD47XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGRhdGVwaWNrZXIgaXMgZGlzYWJsZWQuICovXG4gIF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXG4gICAgICAgICAgICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgICAgICAgICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBASW5qZWN0KE1BVF9EQVRFUElDS0VSX1NDUk9MTF9TVFJBVEVHWSkgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3ksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RhdGVBZGFwdGVyOiBEYXRldGltZUFkYXB0ZXI8RD4sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uYWxpdHksXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGVBZGFwdGVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLl9pbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG5cbiAgICBpZiAodGhpcy5fcG9wdXBSZWYpIHtcbiAgICAgIHRoaXMuX3BvcHVwUmVmLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyB0aGUgZ2l2ZW4gZGF0ZSAqL1xuICBfc2VsZWN0KGRhdGU6IEQpOiB2b2lkIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3NlbGVjdGVkO1xuICAgIHRoaXMuX3NlbGVjdGVkID0gZGF0ZTtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRldGltZShvbGRWYWx1ZSwgdGhpcy5fc2VsZWN0ZWQpKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgZGVwcmVjYXRpb25cbiAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2VkLmVtaXQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGlucHV0IHdpdGggdGhpcyBkYXRlcGlja2VyLlxuICAgKiBAcGFyYW0gaW5wdXQgVGhlIGRhdGVwaWNrZXIgaW5wdXQgdG8gcmVnaXN0ZXIgd2l0aCB0aGlzIGRhdGVwaWNrZXIuXG4gICAqL1xuICBfcmVnaXN0ZXJJbnB1dChpbnB1dDogTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dDxEPik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kYXRlcGlja2VySW5wdXQpIHtcbiAgICAgIHRocm93IEVycm9yKFwiQSBNYXREYXRlcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC5cIik7XG4gICAgfVxuICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2lucHV0U3Vic2NyaXB0aW9uID1cbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5fdmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRCB8IG51bGwpID0+IHRoaXMuX3NlbGVjdGVkID0gdmFsdWUpO1xuICB9XG5cbiAgLyoqIE9wZW4gdGhlIGNhbGVuZGFyLiAqL1xuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlcklucHV0KSB7XG4gICAgICB0aHJvdyBFcnJvcihcIkF0dGVtcHRlZCB0byBvcGVuIGFuIE1hdERhdGVwaWNrZXIgd2l0aCBubyBhc3NvY2lhdGVkIGlucHV0LlwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2RvY3VtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIHRoaXMudG91Y2hVaSA/IHRoaXMuX29wZW5Bc0RpYWxvZygpIDogdGhpcy5fb3BlbkFzUG9wdXAoKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgdGhpcy5vcGVuZWRTdHJlYW0uZW1pdCgpO1xuICB9XG5cbiAgLyoqIENsb3NlIHRoZSBjYWxlbmRhci4gKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcG9wdXBSZWYgJiYgdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jbG9zZSgpO1xuICAgICAgdGhpcy5fZGlhbG9nUmVmID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NhbGVuZGFyUG9ydGFsICYmIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2NhbGVuZGFyUG9ydGFsLmRldGFjaCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAvLyBUaGUgYF9vcGVuZWRgIGNvdWxkJ3ZlIGJlZW4gcmVzZXQgYWxyZWFkeSBpZlxuICAgICAgLy8gd2UgZ290IHR3byBldmVudHMgaW4gcXVpY2sgc3VjY2Vzc2lvbi5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gJiZcbiAgICAgIHR5cGVvZiB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgLy8gQmVjYXVzZSBJRSBtb3ZlcyBmb2N1cyBhc3luY2hyb25vdXNseSwgd2UgY2FuJ3QgY291bnQgb24gaXQgYmVpbmcgcmVzdG9yZWQgYmVmb3JlIHdlJ3ZlXG4gICAgICAvLyBtYXJrZWQgdGhlIGRhdGVwaWNrZXIgYXMgY2xvc2VkLiBJZiB0aGUgZXZlbnQgZmlyZXMgb3V0IG9mIHNlcXVlbmNlIGFuZCB0aGUgZWxlbWVudCB0aGF0XG4gICAgICAvLyB3ZSdyZSByZWZvY3VzaW5nIG9wZW5zIHRoZSBkYXRlcGlja2VyIG9uIGZvY3VzLCB0aGUgdXNlciBjb3VsZCBiZSBzdHVjayB3aXRoIG5vdCBiZWluZ1xuICAgICAgLy8gYWJsZSB0byBjbG9zZSB0aGUgY2FsZW5kYXIgYXQgYWxsLiBXZSB3b3JrIGFyb3VuZCBpdCBieSBtYWtpbmcgdGhlIGxvZ2ljLCB0aGF0IG1hcmtzXG4gICAgICAvLyB0aGUgZGF0ZXBpY2tlciBhcyBjbG9zZWQsIGFzeW5jIGFzIHdlbGwuXG4gICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4uZm9jdXMoKTtcbiAgICAgIHNldFRpbWVvdXQoY29tcGxldGVDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBkaWFsb2cuICovXG4gIHByaXZhdGUgX29wZW5Bc0RpYWxvZygpOiB2b2lkIHtcbiAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbihNYXREYXRldGltZXBpY2tlckNvbnRlbnQsIHtcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fZGlyID8gdGhpcy5fZGlyLnZhbHVlIDogXCJsdHJcIixcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMuX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICBwYW5lbENsYXNzOiBcIm1hdC1kYXRldGltZXBpY2tlci1kaWFsb2dcIlxuICAgIH0pO1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xuICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRldGltZXBpY2tlciA9IHRoaXM7XG4gIH1cblxuICAvKiogT3BlbiB0aGUgY2FsZW5kYXIgYXMgYSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfb3BlbkFzUG9wdXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jYWxlbmRhclBvcnRhbCkge1xuICAgICAgdGhpcy5fY2FsZW5kYXJQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsPE1hdERhdGV0aW1lcGlja2VyQ29udGVudDxEPj4oTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BvcHVwUmVmKSB7XG4gICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcG9wdXBSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8TWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50PEQ+PiA9XG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLmF0dGFjaCh0aGlzLl9jYWxlbmRhclBvcnRhbCk7XG4gICAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuZGF0ZXRpbWVwaWNrZXIgPSB0aGlzO1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIHBvc2l0aW9uIG9uY2UgdGhlIGNhbGVuZGFyIGhhcyByZW5kZXJlZC5cbiAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3B1cFJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuX2NyZWF0ZVBvcHVwUG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgaGFzQmFja2Ryb3A6IHRydWUsXG4gICAgICBiYWNrZHJvcENsYXNzOiBcIm1hdC1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wXCIsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6IFwibHRyXCIsXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fc2Nyb2xsU3RyYXRlZ3koKSxcbiAgICAgIHBhbmVsQ2xhc3M6IFwibWF0LWRhdGV0aW1lcGlja2VyLXBvcHVwXCJcbiAgICB9KTtcblxuICAgIHRoaXMuX3BvcHVwUmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUob3ZlcmxheUNvbmZpZyk7XG4gIH1cblxuICAvKiogQ3JlYXRlIHRoZSBwb3B1cCBQb3NpdGlvblN0cmF0ZWd5LiAqL1xuICBwcml2YXRlIF9jcmVhdGVQb3B1cFBvc2l0aW9uU3RyYXRlZ3koKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXkucG9zaXRpb24oKVxuICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuX2RhdGVwaWNrZXJJbnB1dC5nZXRQb3B1cENvbm5lY3Rpb25FbGVtZW50UmVmKCksXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwiYm90dG9tXCJ9LFxuICAgICAgICB7b3ZlcmxheVg6IFwic3RhcnRcIiwgb3ZlcmxheVk6IFwidG9wXCJ9XG4gICAgICApXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXG4gICAgICAgIHtvcmlnaW5YOiBcInN0YXJ0XCIsIG9yaWdpblk6IFwidG9wXCJ9LFxuICAgICAgICB7b3ZlcmxheVg6IFwic3RhcnRcIiwgb3ZlcmxheVk6IFwiYm90dG9tXCJ9XG4gICAgICApXG4gICAgICAud2l0aEZhbGxiYWNrUG9zaXRpb24oXG4gICAgICAgIHtvcmlnaW5YOiBcImVuZFwiLCBvcmlnaW5ZOiBcImJvdHRvbVwifSxcbiAgICAgICAge292ZXJsYXlYOiBcImVuZFwiLCBvdmVybGF5WTogXCJ0b3BcIn1cbiAgICAgIClcbiAgICAgIC53aXRoRmFsbGJhY2tQb3NpdGlvbihcbiAgICAgICAge29yaWdpblg6IFwiZW5kXCIsIG9yaWdpblk6IFwidG9wXCJ9LFxuICAgICAgICB7b3ZlcmxheVg6IFwiZW5kXCIsIG92ZXJsYXlZOiBcImJvdHRvbVwifVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9jb2VyY2lvblwiO1xuaW1wb3J0IHsgRE9XTl9BUlJPVyB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIE5HX1ZBTElEQVRPUlMsXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3IsXG4gIFZhbGlkYXRvckZuLFxuICBWYWxpZGF0b3JzXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZFwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IERhdGV0aW1lQWRhcHRlciB9IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcbmltcG9ydCB7XG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxuICBNYXREYXRldGltZUZvcm1hdHNcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlclwiO1xuaW1wb3J0IHsgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1lcnJvcnNcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWZpbHRlcnR5cGVcIjtcblxuLy8gdHNsaW50OmRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG5cbmV4cG9ydCBjb25zdCBNQVRfREFURVRJTUVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IE1BVF9EQVRFVElNRVBJQ0tFUl9WQUxJREFUT1JTOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdERhdGV0aW1lcGlja2VySW5wdXQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuLyoqXG4gKiBBbiBldmVudCB1c2VkIGZvciBkYXRlcGlja2VyIGlucHV0IGFuZCBjaGFuZ2UgZXZlbnRzLiBXZSBkb24ndCBhbHdheXMgaGF2ZSBhY2Nlc3MgdG8gYSBuYXRpdmVcbiAqIGlucHV0IG9yIGNoYW5nZSBldmVudCBiZWNhdXNlIHRoZSBldmVudCBtYXkgaGF2ZSBiZWVuIHRyaWdnZXJlZCBieSB0aGUgdXNlciBjbGlja2luZyBvbiB0aGVcbiAqIGNhbGVuZGFyIHBvcHVwLiBGb3IgY29uc2lzdGVuY3ksIHdlIGFsd2F5cyB1c2UgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPiB7XG4gIC8qKiBUaGUgbmV3IHZhbHVlIGZvciB0aGUgdGFyZ2V0IGRhdGVwaWNrZXIgaW5wdXQuICovXG4gIHZhbHVlOiBEIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFyZ2V0OiBNYXREYXRldGltZXBpY2tlcklucHV0PEQ+LCBwdWJsaWMgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50YXJnZXQudmFsdWU7XG4gIH1cbn1cblxuLyoqIERpcmVjdGl2ZSB1c2VkIHRvIGNvbm5lY3QgYW4gaW5wdXQgdG8gYSBNYXREYXRlcGlja2VyLiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcImlucHV0W21hdERhdGV0aW1lcGlja2VyXVwiLFxuICBwcm92aWRlcnM6IFtcbiAgICBNQVRfREFURVRJTUVQSUNLRVJfVkFMVUVfQUNDRVNTT1IsXG4gICAgTUFUX0RBVEVUSU1FUElDS0VSX1ZBTElEQVRPUlMsXG4gICAge3Byb3ZpZGU6IE1BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IE1hdERhdGV0aW1lcGlja2VySW5wdXR9LFxuICBdLFxuICBob3N0OiB7XG4gICAgXCJbYXR0ci5hcmlhLWhhc3BvcHVwXVwiOiBcInRydWVcIixcbiAgICBcIlthdHRyLmFyaWEtb3duc11cIjogXCIoX2RhdGVwaWNrZXI/Lm9wZW5lZCAmJiBfZGF0ZXBpY2tlci5pZCkgfHwgbnVsbFwiLFxuICAgIFwiW2F0dHIubWluXVwiOiBcIm1pbiA/IF9kYXRlQWRhcHRlci50b0lzbzg2MDEobWluKSA6IG51bGxcIixcbiAgICBcIlthdHRyLm1heF1cIjogXCJtYXggPyBfZGF0ZUFkYXB0ZXIudG9Jc284NjAxKG1heCkgOiBudWxsXCIsXG4gICAgXCJbZGlzYWJsZWRdXCI6IFwiZGlzYWJsZWRcIixcbiAgICBcIihmb2N1cylcIjogXCJfZGF0ZXBpY2tlci5faGFuZGxlRm9jdXMoKVwiLFxuICAgIFwiKGlucHV0KVwiOiBcIl9vbklucHV0KCRldmVudC50YXJnZXQudmFsdWUpXCIsXG4gICAgXCIoY2hhbmdlKVwiOiBcIl9vbkNoYW5nZSgpXCIsXG4gICAgXCIoYmx1cilcIjogXCJfb25CbHVyKClcIixcbiAgICBcIihrZXlkb3duKVwiOiBcIl9vbktleWRvd24oJGV2ZW50KVwiXG4gIH0sXG4gIGV4cG9ydEFzOiBcIm1hdERhdGVwaWNrZXJJbnB1dFwiXG59KVxuZXhwb3J0IGNsYXNzIE1hdERhdGV0aW1lcGlja2VySW5wdXQ8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95LFxuICBWYWxpZGF0b3Ige1xuICAvKiogVGhlIGRhdGVwaWNrZXIgdGhhdCB0aGlzIGlucHV0IGlzIGFzc29jaWF0ZWQgd2l0aC4gKi9cbiAgQElucHV0KClcbiAgc2V0IG1hdERhdGV0aW1lcGlja2VyKHZhbHVlOiBNYXREYXRldGltZXBpY2tlcjxEPikge1xuICAgIHRoaXMucmVnaXN0ZXJEYXRlcGlja2VyKHZhbHVlKTtcbiAgfVxuXG4gIF9kYXRlcGlja2VyOiBNYXREYXRldGltZXBpY2tlcjxEPjtcblxuICBwcml2YXRlIHJlZ2lzdGVyRGF0ZXBpY2tlcih2YWx1ZTogTWF0RGF0ZXRpbWVwaWNrZXI8RD4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuX3JlZ2lzdGVySW5wdXQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc2V0IG1hdERhdGVwaWNrZXJGaWx0ZXIoZmlsdGVyOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbikge1xuICAgIHRoaXMuX2RhdGVGaWx0ZXIgPSBmaWx0ZXI7XG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UoKTtcbiAgfVxuXG4gIF9kYXRlRmlsdGVyOiAoZGF0ZTogRCB8IG51bGwsIHR5cGU6IE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZSkgPT4gYm9vbGVhbjtcblxuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgdmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhdmFsdWUgfHwgdGhpcy5fZGF0ZUFkYXB0ZXIuaXNWYWxpZCh2YWx1ZSk7XG4gICAgdmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodmFsdWUpO1xuICAgIGNvbnN0IG9sZERhdGUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fZm9ybWF0VmFsdWUodmFsdWUpO1xuXG4gICAgLy8gdXNlIHRpbWVvdXQgdG8gZW5zdXJlIHRoZSBkYXRldGltZXBpY2tlciBpcyBpbnN0YW50aWF0ZWQgYW5kIHdlIGdldCB0aGUgY29ycmVjdCBmb3JtYXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fZGF0ZUFkYXB0ZXIuc2FtZURhdGV0aW1lKG9sZERhdGUsIHZhbHVlKSkge1xuICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGlzcGxheUZvcm1hdCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMuX2RhdGVwaWNrZXIudHlwZSkge1xuICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUlucHV0O1xuICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRlRm9ybWF0cy5kaXNwbGF5LmRhdGV0aW1lSW5wdXQ7XG4gICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS50aW1lSW5wdXQ7XG4gICAgICBjYXNlIFwibW9udGhcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkubW9udGhJbnB1dDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBhcnNlRm9ybWF0KCkge1xuICAgIGxldCBwYXJzZUZvcm1hdDtcblxuICAgIHN3aXRjaCAodGhpcy5fZGF0ZXBpY2tlci50eXBlKSB7XG4gICAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgcGFyc2VGb3JtYXQgPSB0aGlzLl9kYXRlRm9ybWF0cy5wYXJzZS5kYXRldGltZUlucHV0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHBhcnNlRm9ybWF0ID0gdGhpcy5fZGF0ZUZvcm1hdHMucGFyc2UudGltZUlucHV0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtb250aFwiOlxuICAgICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLm1vbnRoSW5wdXQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoIXBhcnNlRm9ybWF0KSB7XG4gICAgICBwYXJzZUZvcm1hdCA9IHRoaXMuX2RhdGVGb3JtYXRzLnBhcnNlLmRhdGVJbnB1dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VGb3JtYXQ7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZTogRCB8IG51bGw7XG5cbiAgLyoqIFRoZSBtaW5pbXVtIHZhbGlkIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBtaW4oKTogRCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9taW47XG4gIH1cblxuICBzZXQgbWluKHZhbHVlOiBEIHwgbnVsbCkge1xuICAgIHRoaXMuX21pbiA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZSh2YWx1ZSkpO1xuICAgIHRoaXMuX3ZhbGlkYXRvck9uQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIF9taW46IEQgfCBudWxsO1xuXG4gIC8qKiBUaGUgbWF4aW11bSB2YWxpZCBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgbWF4KCk6IEQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgc2V0IG1heCh2YWx1ZTogRCB8IG51bGwpIHtcbiAgICB0aGlzLl9tYXggPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUodmFsdWUpKTtcbiAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbWF4OiBEIHwgbnVsbDtcblxuICAvKiogV2hldGhlciB0aGUgZGF0ZXBpY2tlci1pbnB1dCBpcyBkaXNhYmxlZC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG5cbiAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuZW1pdChuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIEVtaXRzIHdoZW4gYSBgY2hhbmdlYCBldmVudCBpcyBmaXJlZCBvbiB0aGlzIGA8aW5wdXQ+YC4gKi9cbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1hdERhdGV0aW1lcGlja2VySW5wdXRFdmVudDxEPj4oKTtcblxuICAvKiogRW1pdHMgd2hlbiBhbiBgaW5wdXRgIGV2ZW50IGlzIGZpcmVkIG9uIHRoaXMgYDxpbnB1dD5gLiAqL1xuICBAT3V0cHV0KCkgZGF0ZUlucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQ8RD4+KCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgKGVpdGhlciBkdWUgdG8gdXNlciBpbnB1dCBvciBwcm9ncmFtbWF0aWMgY2hhbmdlKS4gKi9cbiAgX3ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEIHwgbnVsbD4oKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgZGlzYWJsZWQgc3RhdGUgaGFzIGNoYW5nZWQgKi9cbiAgX2Rpc2FibGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7XG4gIH1cblxuICBwcml2YXRlIF9jdmFPbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZGF0b3JPbkNoYW5nZSA9ICgpID0+IHtcbiAgfVxuXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XG5cbiAgcHJpdmF0ZSBfbG9jYWxlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xuXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3Igd2hldGhlciB0aGUgaW5wdXQgcGFyc2VzLiAqL1xuICBwcml2YXRlIF9wYXJzZVZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiB0aGlzLl9sYXN0VmFsdWVWYWxpZCA/XG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlclBhcnNlXCI6IHtcInRleHRcIjogdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlfX07XG4gIH1cblxuICAvKiogVGhlIGZvcm0gY29udHJvbCB2YWxpZGF0b3IgZm9yIHRoZSBtaW4gZGF0ZS4gKi9cbiAgcHJpdmF0ZSBfbWluVmFsaWRhdG9yOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgY29uc3QgY29udHJvbFZhbHVlID0gdGhpcy5fZGF0ZUFkYXB0ZXIuZ2V0VmFsaWREYXRlT3JOdWxsKHRoaXMuX2RhdGVBZGFwdGVyLmRlc2VyaWFsaXplKGNvbnRyb2wudmFsdWUpKTtcbiAgICByZXR1cm4gKCF0aGlzLm1pbiB8fCAhY29udHJvbFZhbHVlIHx8XG4gICAgICB0aGlzLl9kYXRlQWRhcHRlci5jb21wYXJlRGF0ZXRpbWUodGhpcy5taW4sIGNvbnRyb2xWYWx1ZSkgPD0gMCkgP1xuICAgICAgbnVsbCA6IHtcIm1hdERhdGVwaWNrZXJNaW5cIjoge1wibWluXCI6IHRoaXMubWluLCBcImFjdHVhbFwiOiBjb250cm9sVmFsdWV9fTtcbiAgfVxuXG4gIC8qKiBUaGUgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhlIG1heCBkYXRlLiAqL1xuICBwcml2YXRlIF9tYXhWYWxpZGF0b3I6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwodGhpcy5fZGF0ZUFkYXB0ZXIuZGVzZXJpYWxpemUoY29udHJvbC52YWx1ZSkpO1xuICAgIHJldHVybiAoIXRoaXMubWF4IHx8ICFjb250cm9sVmFsdWUgfHxcbiAgICAgIHRoaXMuX2RhdGVBZGFwdGVyLmNvbXBhcmVEYXRldGltZSh0aGlzLm1heCwgY29udHJvbFZhbHVlKSA+PSAwKSA/XG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlck1heFwiOiB7XCJtYXhcIjogdGhpcy5tYXgsIFwiYWN0dWFsXCI6IGNvbnRyb2xWYWx1ZX19O1xuICB9XG5cbiAgLyoqIFRoZSBmb3JtIGNvbnRyb2wgdmFsaWRhdG9yIGZvciB0aGUgZGF0ZSBmaWx0ZXIuICovXG4gIHByaXZhdGUgX2ZpbHRlclZhbGlkYXRvcjogVmFsaWRhdG9yRm4gPSAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IGNvbnRyb2xWYWx1ZSA9IHRoaXMuX2RhdGVBZGFwdGVyLmdldFZhbGlkRGF0ZU9yTnVsbCh0aGlzLl9kYXRlQWRhcHRlci5kZXNlcmlhbGl6ZShjb250cm9sLnZhbHVlKSk7XG4gICAgcmV0dXJuICF0aGlzLl9kYXRlRmlsdGVyIHx8ICFjb250cm9sVmFsdWUgfHwgdGhpcy5fZGF0ZUZpbHRlcihjb250cm9sVmFsdWUsIE1hdERhdGV0aW1lcGlja2VyRmlsdGVyVHlwZS5EQVRFKSA/XG4gICAgICBudWxsIDoge1wibWF0RGF0ZXBpY2tlckZpbHRlclwiOiB0cnVlfTtcbiAgfVxuXG4gIC8qKiBUaGUgY29tYmluZWQgZm9ybSBjb250cm9sIHZhbGlkYXRvciBmb3IgdGhpcyBpbnB1dC4gKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IG51bGwgPVxuICAgIFZhbGlkYXRvcnMuY29tcG9zZShcbiAgICAgIFt0aGlzLl9wYXJzZVZhbGlkYXRvciwgdGhpcy5fbWluVmFsaWRhdG9yLCB0aGlzLl9tYXhWYWxpZGF0b3IsIHRoaXMuX2ZpbHRlclZhbGlkYXRvcl0pO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBsYXN0IHZhbHVlIHNldCBvbiB0aGUgaW5wdXQgd2FzIHZhbGlkLiAqL1xuICBwcml2YXRlIF9sYXN0VmFsdWVWYWxpZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIHB1YmxpYyBfZGF0ZUFkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cyxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGQpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyKSB7XG4gICAgICB0aHJvdyBjcmVhdGVNaXNzaW5nRGF0ZUltcGxFcnJvcihcIkRhdGV0aW1lQWRhcHRlclwiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGRpc3BsYXllZCBkYXRlIHdoZW4gdGhlIGxvY2FsZSBjaGFuZ2VzLlxuICAgIHRoaXMuX2xvY2FsZVN1YnNjcmlwdGlvbiA9IF9kYXRlQWRhcHRlci5sb2NhbGVDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlcikge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGRlcHJlY2F0aW9uXG4gICAgICB0aGlzLl9kYXRlcGlja2VyU3Vic2NyaXB0aW9uID0gdGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZENoYW5nZWQuc3Vic2NyaWJlKChzZWxlY3RlZDogRCkgPT4ge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgICAgICB0aGlzLl9jdmFPbkNoYW5nZShzZWxlY3RlZCk7XG4gICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgICAgdGhpcy5kYXRlSW5wdXQuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2RhdGVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9sb2NhbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl92YWx1ZUNoYW5nZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmNvbXBsZXRlKCk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsaWRhdG9yT25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yID8gdGhpcy5fdmFsaWRhdG9yKGMpIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBlbGVtZW50IHRoYXQgdGhlIGRhdGVwaWNrZXIgcG9wdXAgc2hvdWxkIGJlIGNvbm5lY3RlZCB0by5cbiAgICogQHJldHVybiBUaGUgZWxlbWVudCB0byBjb25uZWN0IHRoZSBwb3B1cCB0by5cbiAgICovXG4gIGdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZCA/IHRoaXMuX2Zvcm1GaWVsZC51bmRlcmxpbmVSZWYgOiB0aGlzLl9lbGVtZW50UmVmO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgLy8gSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBDb250cm9sVmFsdWVBY2Nlc3NvclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX2N2YU9uQ2hhbmdlID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICAvLyBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cblxuICBfb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLm9wZW4oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX29uSW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgIGxldCBkYXRlID0gdGhpcy5fZGF0ZUFkYXB0ZXIucGFyc2UodmFsdWUsIHRoaXMuZ2V0UGFyc2VGb3JtYXQoKSk7XG4gICAgdGhpcy5fbGFzdFZhbHVlVmFsaWQgPSAhZGF0ZSB8fCB0aGlzLl9kYXRlQWRhcHRlci5pc1ZhbGlkKGRhdGUpO1xuICAgIGRhdGUgPSB0aGlzLl9kYXRlQWRhcHRlci5nZXRWYWxpZERhdGVPck51bGwoZGF0ZSk7XG4gICAgdGhpcy5fdmFsdWUgPSBkYXRlO1xuICAgIHRoaXMuX2N2YU9uQ2hhbmdlKGRhdGUpO1xuICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgdGhpcy5kYXRlSW5wdXQuZW1pdChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuICB9XG5cbiAgX29uQ2hhbmdlKCkge1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KG5ldyBNYXREYXRldGltZXBpY2tlcklucHV0RXZlbnQodGhpcywgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSk7XG4gIH1cblxuICAvKiogSGFuZGxlcyBibHVyIGV2ZW50cyBvbiB0aGUgaW5wdXQuICovXG4gIF9vbkJsdXIoKSB7XG4gICAgLy8gUmVmb3JtYXQgdGhlIGlucHV0IG9ubHkgaWYgd2UgaGF2ZSBhIHZhbGlkIHZhbHVlLlxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLl9mb3JtYXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gICAvKiogRm9ybWF0cyBhIHZhbHVlIGFuZCBzZXRzIGl0IG9uIHRoZSBpbnB1dCBlbGVtZW50LiAqL1xuICAgcHJpdmF0ZSBfZm9ybWF0VmFsdWUodmFsdWU6IEQgfCBudWxsKSB7XG4gICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9XG4gICAgICAgdmFsdWUgPyB0aGlzLl9kYXRlQWRhcHRlci5mb3JtYXQodmFsdWUsIHRoaXMuZ2V0RGlzcGxheUZvcm1hdCgpKSA6IFwiXCI7XG4gICB9XG59XG4iLCJpbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2NvZXJjaW9uXCI7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlckludGwgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IG1lcmdlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCIsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIFthdHRyLmFyaWEtbGFiZWxdPVwiX2ludGwub3BlbkNhbGVuZGFyTGFiZWxcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiAoY2xpY2spPVwiX29wZW4oJGV2ZW50KVwiPlxuICA8bWF0LWljb24gW25nU3dpdGNoXT1cImRhdGV0aW1lcGlja2VyLnR5cGVcIj5cbiAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCIndGltZSdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMTIsMjBBOCw4IDAgMCwwIDIwLDEyQTgsOCAwIDAsMCAxMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyME0xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQzYuNDcsMjIgMiwxNy41IDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMi41LDdWMTIuMjVMMTcsMTQuOTJMMTYuMjUsMTYuMTVMMTEsMTNWN0gxMi41WlwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgICA8c3ZnICpuZ1N3aXRjaENhc2U9XCInZGF0ZXRpbWUnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICA8cGF0aCBkPVwiTTE1LDEzSDE2LjVWMTUuODJMMTguOTQsMTcuMjNMMTguMTksMTguNTNMMTUsMTYuNjlWMTNNMTksOEg1VjE5SDkuNjdDOS4yNCwxOC4wOSA5LDE3LjA3IDksMTZBNyw3IDAgMCwxIDE2LDlDMTcuMDcsOSAxOC4wOSw5LjI0IDE5LDkuNjdWOE01LDIxQzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM0g2VjFIOFYzSDE2VjFIMThWM0gxOUEyLDIgMCAwLDEgMjEsNVYxMS4xQzIyLjI0LDEyLjM2IDIzLDE0LjA5IDIzLDE2QTcsNyAwIDAsMSAxNiwyM0MxNC4wOSwyMyAxMi4zNiwyMi4yNCAxMS4xLDIxSDVNMTYsMTEuMTVBNC44NSw0Ljg1IDAgMCwwIDExLjE1LDE2QzExLjE1LDE4LjY4IDEzLjMyLDIwLjg1IDE2LDIwLjg1QTQuODUsNC44NSAwIDAsMCAyMC44NSwxNkMyMC44NSwxMy4zMiAxOC42OCwxMS4xNSAxNiwxMS4xNVpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gICAgPHN2ZyAqbmdTd2l0Y2hEZWZhdWx0IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0eWxlPVwidmVydGljYWwtYWxpZ246IHRvcFwiIGZvY3VzYWJsZT1cImZhbHNlXCI+XG4gICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgPHBhdGggZD1cIk0xOSAzaC0xVjFoLTJ2Mkg4VjFINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMTljMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjhoMTR2MTF6TTcgMTBoNXY1SDd6XCIvPlxuICAgIDwvc3ZnPlxuICA8L21hdC1pY29uPlxuPC9idXR0b24+XG5gLFxuICBob3N0OiB7XG4gICAgXCJjbGFzc1wiOiBcIm1hdC1kYXRldGltZXBpY2tlci10b2dnbGVcIlxuICB9LFxuICBleHBvcnRBczogXCJtYXREYXRldGltZXBpY2tlclRvZ2dsZVwiLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGU8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlQ2hhbmdlcyA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcblxuICAvKiogRGF0ZXBpY2tlciBpbnN0YW5jZSB0aGF0IHRoZSBidXR0b24gd2lsbCB0b2dnbGUuICovXG4gIEBJbnB1dChcImZvclwiKSBkYXRldGltZXBpY2tlcjogTWF0RGF0ZXRpbWVwaWNrZXI8RD47XG5cbiAgLyoqIFdoZXRoZXIgdGhlIHRvZ2dsZSBidXR0b24gaXMgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IHRoaXMuZGF0ZXRpbWVwaWNrZXIuZGlzYWJsZWQgOiAhIXRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmRhdGVwaWNrZXIpIHtcbiAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc3RhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fd2F0Y2hTdGF0ZUNoYW5nZXMoKTtcbiAgfVxuXG4gIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGV0aW1lcGlja2VyICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRhdGV0aW1lcGlja2VyLm9wZW4oKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3dhdGNoU3RhdGVDaGFuZ2VzKCkge1xuICAgIGNvbnN0IGRhdGVwaWNrZXJEaXNhYmxlZCA9IHRoaXMuZGF0ZXRpbWVwaWNrZXIgPyB0aGlzLmRhdGV0aW1lcGlja2VyLl9kaXNhYmxlZENoYW5nZSA6IG9ic2VydmFibGVPZigpO1xuICAgIGNvbnN0IGlucHV0RGlzYWJsZWQgPSB0aGlzLmRhdGV0aW1lcGlja2VyICYmIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dCA/XG4gICAgICAgIHRoaXMuZGF0ZXRpbWVwaWNrZXIuX2RhdGVwaWNrZXJJbnB1dC5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcblxuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuX3N0YXRlQ2hhbmdlcyA9IG1lcmdlKHRoaXMuX2ludGwuY2hhbmdlcywgZGF0ZXBpY2tlckRpc2FibGVkLCBpbnB1dERpc2FibGVkKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxufVxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIE1BVF9EQVRFVElNRV9GT1JNQVRTLFxuICBNYXREYXRldGltZUZvcm1hdHNcbn0gZnJvbSBcIi4uL2FkYXB0ZXIvZGF0ZXRpbWUtZm9ybWF0c1wiO1xuaW1wb3J0IHtcbiAgRGF0ZXRpbWVBZGFwdGVyXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWFkYXB0ZXJcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsIH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xuaW1wb3J0IHsgc2xpZGVDYWxlbmRhciB9IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyLWFuaW1hdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XG5cbmNvbnN0IERBWVNfUEVSX1dFRUsgPSA3O1xuXG4vKipcbiAqIEFuIGludGVybmFsIGNvbXBvbmVudCB1c2VkIHRvIGRpc3BsYXkgYSBzaW5nbGUgbW9udGggaW4gdGhlIGRhdGVwaWNrZXIuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJtYXQtZGF0ZXRpbWVwaWNrZXItbW9udGgtdmlld1wiLFxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZVwiPlxuICA8dGhlYWQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyXCI+XG4gICAgPHRyPjx0aCAqbmdGb3I9XCJsZXQgZGF5IG9mIF93ZWVrZGF5c1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5LmxvbmdcIj57e2RheS5uYXJyb3d9fTwvdGg+PC90cj5cbiAgPC90aGVhZD5cbiAgPHRib2R5IFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiXG4gICAgICAgICAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiXG4gICAgICAgICBtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVxuICAgICAgICAgcm9sZT1cImdyaWRcIlxuICAgICAgICAgW3Jvd3NdPVwiX3dlZWtzXCJcbiAgICAgICAgIFt0b2RheVZhbHVlXT1cIl90b2RheURhdGVcIlxuICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwiX3NlbGVjdGVkRGF0ZVwiXG4gICAgICAgICBbYWN0aXZlQ2VsbF09XCJfYWRhcHRlci5nZXREYXRlKGFjdGl2ZURhdGUpIC0gMVwiXG4gICAgICAgICAoc2VsZWN0ZWRWYWx1ZUNoYW5nZSk9XCJfZGF0ZVNlbGVjdGVkKCRldmVudClcIj48L3Rib2R5PlxuPC90YWJsZT5cbmAsXG4gIGFuaW1hdGlvbnM6IFtzbGlkZUNhbGVuZGFyXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXc8RD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSB0eXBlOiBcImRhdGVcIiB8IFwidGltZVwiIHwgXCJtb250aFwiIHwgXCJkYXRldGltZVwiID0gXCJkYXRlXCI7XG5cbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF0ZSB0byBkaXNwbGF5IGluIHRoaXMgbW9udGggdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSBtb250aCBhbmQgeWVhciBpcyBpZ25vcmVkKS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBhY3RpdmVEYXRlKCk6IEQge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xuICB9XG5cbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IEQpIHtcbiAgICBsZXQgb2xkQWN0aXZlRGF0ZSA9IHRoaXMuX2FjdGl2ZURhdGU7XG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlIHx8IHRoaXMuX2FkYXB0ZXIudG9kYXkoKTtcbiAgICBpZiAob2xkQWN0aXZlRGF0ZSAmJiB0aGlzLl9hY3RpdmVEYXRlICYmXG4gICAgICAhdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XG4gICAgICB0aGlzLl9pbml0KCk7XG4gICAgICBpZiAodGhpcy5fYWRhcHRlci5pc0luTmV4dE1vbnRoKG9sZEFjdGl2ZURhdGUsIHRoaXMuX2FjdGl2ZURhdGUpKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJTdGF0ZShcInJpZ2h0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhclN0YXRlKFwibGVmdFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmVEYXRlOiBEO1xuXG4gIC8qKiBUaGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuICovXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3RlZCgpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IEQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLnNlbGVjdGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBEO1xuXG4gIC8qKiBBIGZ1bmN0aW9uIHVzZWQgdG8gZmlsdGVyIHdoaWNoIGRhdGVzIGFyZSBzZWxlY3RhYmxlLiAqL1xuICBASW5wdXQoKSBkYXRlRmlsdGVyOiAoZGF0ZTogRCkgPT4gYm9vbGVhbjtcblxuICAvKiogRW1pdHMgd2hlbiBhIG5ldyBkYXRlIGlzIHNlbGVjdGVkLiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBkYXRlcyBvZiB0aGUgbW9udGguICovXG4gIF93ZWVrczogTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGxbXVtdO1xuXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJsYW5rIGNlbGxzIGluIHRoZSBmaXJzdCByb3cgYmVmb3JlIHRoZSAxc3Qgb2YgdGhlIG1vbnRoLiAqL1xuICBfZmlyc3RXZWVrT2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIG9mIHRoZSBtb250aCB0aGF0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgRGF0ZSBmYWxscyBvbi5cbiAgICogTnVsbCBpZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cbiAgICovXG4gIF9zZWxlY3RlZERhdGU6IG51bWJlcjtcblxuICAvKiogVGhlIGRhdGUgb2YgdGhlIG1vbnRoIHRoYXQgdG9kYXkgZmFsbHMgb24uIE51bGwgaWYgdG9kYXkgaXMgaW4gYW5vdGhlciBtb250aC4gKi9cbiAgX3RvZGF5RGF0ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbmFtZXMgb2YgdGhlIHdlZWtkYXlzLiAqL1xuICBfd2Vla2RheXM6IHsgbG9uZzogc3RyaW5nLCBuYXJyb3c6IHN0cmluZyB9W107XG5cbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IHRoaXMuX2FkYXB0ZXIuZ2V0Rmlyc3REYXlPZldlZWsoKTtcbiAgICBjb25zdCBuYXJyb3dXZWVrZGF5cyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF5T2ZXZWVrTmFtZXMoXCJuYXJyb3dcIik7XG4gICAgY29uc3QgbG9uZ1dlZWtkYXlzID0gdGhpcy5fYWRhcHRlci5nZXREYXlPZldlZWtOYW1lcyhcImxvbmdcIik7XG5cbiAgICAvLyBSb3RhdGUgdGhlIGxhYmVscyBmb3IgZGF5cyBvZiB0aGUgd2VlayBiYXNlZCBvbiB0aGUgY29uZmlndXJlZCBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgbGV0IHdlZWtkYXlzID0gbG9uZ1dlZWtkYXlzLm1hcCgobG9uZywgaSkgPT4ge1xuICAgICAgcmV0dXJuIHtsb25nLCBuYXJyb3c6IG5hcnJvd1dlZWtkYXlzW2ldfTtcbiAgICB9KTtcbiAgICB0aGlzLl93ZWVrZGF5cyA9IHdlZWtkYXlzLnNsaWNlKGZpcnN0RGF5T2ZXZWVrKS5jb25jYXQod2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcblxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdCgpO1xuICB9XG5cbiAgLyoqIEhhbmRsZXMgd2hlbiBhIG5ldyBkYXRlIGlzIHNlbGVjdGVkLiAqL1xuICBfZGF0ZVNlbGVjdGVkKGRhdGU6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgIGRhdGUsIHRoaXMuX2FkYXB0ZXIuZ2V0SG91cih0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSkpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtb250aCB2aWV3LiAqL1xuICBwcml2YXRlIF9pbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX2dldERhdGVJbkN1cnJlbnRNb250aCh0aGlzLnNlbGVjdGVkKTtcbiAgICB0aGlzLl90b2RheURhdGUgPSB0aGlzLl9nZXREYXRlSW5DdXJyZW50TW9udGgodGhpcy5fYWRhcHRlci50b2RheSgpKTtcblxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aCh0aGlzLmFjdGl2ZURhdGUpLCAxLFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcbiAgICB0aGlzLl9maXJzdFdlZWtPZmZzZXQgPVxuICAgICAgKERBWVNfUEVSX1dFRUsgKyB0aGlzLl9hZGFwdGVyLmdldERheU9mV2VlayhmaXJzdE9mTW9udGgpIC1cbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRGaXJzdERheU9mV2VlaygpKSAlIERBWVNfUEVSX1dFRUs7XG5cbiAgICB0aGlzLl9jcmVhdGVXZWVrQ2VsbHMoKTtcbiAgfVxuXG4gIC8qKiBDcmVhdGVzIE1kQ2FsZW5kYXJDZWxscyBmb3IgdGhlIGRhdGVzIGluIHRoaXMgbW9udGguICovXG4gIHByaXZhdGUgX2NyZWF0ZVdlZWtDZWxscygpIHtcbiAgICBsZXQgZGF5c0luTW9udGggPSB0aGlzLl9hZGFwdGVyLmdldE51bURheXNJbk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgbGV0IGRhdGVOYW1lcyA9IHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZU5hbWVzKCk7XG4gICAgdGhpcy5fd2Vla3MgPSBbW11dO1xuICAgIGZvciAobGV0IGkgPSAwLCBjZWxsID0gdGhpcy5fZmlyc3RXZWVrT2Zmc2V0OyBpIDwgZGF5c0luTW9udGg7IGkrKyAsIGNlbGwrKykge1xuICAgICAgaWYgKGNlbGwgPT0gREFZU19QRVJfV0VFSykge1xuICAgICAgICB0aGlzLl93ZWVrcy5wdXNoKFtdKTtcbiAgICAgICAgY2VsbCA9IDA7XG4gICAgICB9XG4gICAgICBsZXQgZGF0ZSA9IHRoaXMuX2FkYXB0ZXIuY3JlYXRlRGF0ZXRpbWUoXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSksIGkgKyAxLFxuICAgICAgICB0aGlzLl9hZGFwdGVyLmdldEhvdXIodGhpcy5hY3RpdmVEYXRlKSxcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRNaW51dGUodGhpcy5hY3RpdmVEYXRlKSk7XG4gICAgICBsZXQgZW5hYmxlZCA9ICF0aGlzLmRhdGVGaWx0ZXIgfHxcbiAgICAgICAgdGhpcy5kYXRlRmlsdGVyKGRhdGUpO1xuICAgICAgbGV0IGFyaWFMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZm9ybWF0KGRhdGUsIHRoaXMuX2RhdGVGb3JtYXRzLmRpc3BsYXkuZGF0ZUExMXlMYWJlbCk7XG4gICAgICB0aGlzLl93ZWVrc1t0aGlzLl93ZWVrcy5sZW5ndGggLSAxXVxuICAgICAgICAucHVzaChuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoaSArIDEsIGRhdGVOYW1lc1tpXSwgYXJpYUxhYmVsLCBlbmFibGVkKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGRhdGUgaW4gdGhpcyBtb250aCB0aGF0IHRoZSBnaXZlbiBEYXRlIGZhbGxzIG9uLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGdpdmVuIERhdGUgaXMgaW4gYW5vdGhlciBtb250aC5cbiAgICovXG4gIHByaXZhdGUgX2dldERhdGVJbkN1cnJlbnRNb250aChkYXRlOiBEKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYWRhcHRlci5zYW1lTW9udGhBbmRZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xuICAgICAgdGhpcy5fYWRhcHRlci5nZXREYXRlKGRhdGUpIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2FsZW5kYXJTdGF0ZShkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuX2NhbGVuZGFyU3RhdGUgPSBkaXJlY3Rpb247XG4gIH1cblxuICBfY2FsZW5kYXJTdGF0ZURvbmUoKSB7XG4gICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IFwiXCI7XG4gIH1cblxufVxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdEYXRlSW1wbEVycm9yIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItZXJyb3JzXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQ2VsbCB9IGZyb20gXCIuL2NhbGVuZGFyLWJvZHlcIjtcbmltcG9ydCB7IHNsaWRlQ2FsZW5kYXIgfSBmcm9tIFwiLi9kYXRldGltZXBpY2tlci1hbmltYXRpb25zXCI7XG5pbXBvcnQge1xuICBNQVRfREFURVRJTUVfRk9STUFUUyxcbiAgTWF0RGF0ZXRpbWVGb3JtYXRzXG59IGZyb20gXCIuLi9hZGFwdGVyL2RhdGV0aW1lLWZvcm1hdHNcIjtcbmltcG9ydCB7XG4gIERhdGV0aW1lQWRhcHRlclxufSBmcm9tIFwiLi4vYWRhcHRlci9kYXRldGltZS1hZGFwdGVyXCI7XG5cbi8qKlxuICogQW4gaW50ZXJuYWwgY29tcG9uZW50IHVzZWQgdG8gZGlzcGxheSBhIHNpbmdsZSB5ZWFyIGluIHRoZSBkYXRlcGlja2VyLlxuICogQGRvY3MtcHJpdmF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWF0LWRhdGV0aW1lcGlja2VyLXllYXItdmlld1wiLFxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cIm1hdC1kYXRldGltZXBpY2tlci1jYWxlbmRhci10YWJsZVwiPlxuICA8dGhlYWQgY2xhc3M9XCJtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItdGFibGUtaGVhZGVyXCI+PC90aGVhZD5cbiAgPHRib2R5IFtAc2xpZGVDYWxlbmRhcl09XCJfY2FsZW5kYXJTdGF0ZVwiXG4gICAgICAgICAoQHNsaWRlQ2FsZW5kYXIuZG9uZSk9XCJfY2FsZW5kYXJTdGF0ZURvbmUoKVwiXG4gICAgICAgICBtYXQtZGF0ZXRpbWVwaWNrZXItY2FsZW5kYXItYm9keVxuICAgICAgICAgcm9sZT1cImdyaWRcIlxuICAgICAgICAgYWxsb3dEaXNhYmxlZFNlbGVjdGlvbj1cInRydWVcIlxuICAgICAgICAgW2xhYmVsXT1cIl95ZWFyTGFiZWxcIlxuICAgICAgICAgW3Jvd3NdPVwiX21vbnRoc1wiXG4gICAgICAgICBbdG9kYXlWYWx1ZV09XCJfdG9kYXlNb250aFwiXG4gICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJfc2VsZWN0ZWRNb250aFwiXG4gICAgICAgICBbbGFiZWxNaW5SZXF1aXJlZENlbGxzXT1cIjJcIlxuICAgICAgICAgW2FjdGl2ZUNlbGxdPVwiX2FkYXB0ZXIuZ2V0TW9udGgoYWN0aXZlRGF0ZSlcIlxuICAgICAgICAgKHNlbGVjdGVkVmFsdWVDaGFuZ2UpPVwiX21vbnRoU2VsZWN0ZWQoJGV2ZW50KVwiPjwvdGJvZHk+XG48L3RhYmxlPlxuYCxcbiAgYW5pbWF0aW9uczogW3NsaWRlQ2FsZW5kYXJdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlclllYXJWaWV3PEQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgQE91dHB1dCgpIF91c2VyU2VsZWN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBJbnB1dCgpIHR5cGU6IFwiZGF0ZVwiIHwgXCJ0aW1lXCIgfCBcIm1vbnRoXCIgfCBcImRhdGV0aW1lXCIgPSBcImRhdGVcIjtcblxuICAvKiogVGhlIGRhdGUgdG8gZGlzcGxheSBpbiB0aGlzIHllYXIgdmlldyAoZXZlcnl0aGluZyBvdGhlciB0aGFuIHRoZSB5ZWFyIGlzIGlnbm9yZWQpLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcbiAgfVxuXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEKSB7XG4gICAgbGV0IG9sZEFjdGl2ZURhdGUgPSB0aGlzLl9hY3RpdmVEYXRlO1xuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZSB8fCB0aGlzLl9hZGFwdGVyLnRvZGF5KCk7XG4gICAgaWYgKG9sZEFjdGl2ZURhdGUgJiYgdGhpcy5fYWN0aXZlRGF0ZSAmJlxuICAgICAgIXRoaXMuX2FkYXB0ZXIuc2FtZVllYXIob2xkQWN0aXZlRGF0ZSwgdGhpcy5fYWN0aXZlRGF0ZSkpIHtcbiAgICAgIHRoaXMuX2luaXQoKTtcbiAgICAgIC8vIGlmIChvbGRBY3RpdmVEYXRlIDwgdGhpcy5fYWN0aXZlRGF0ZSkge1xuICAgICAgLy8gIHRoaXMuY2FsZW5kYXJTdGF0ZSgncmlnaHQnKTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgdGhpcy5jYWxlbmRhclN0YXRlKCdsZWZ0Jyk7XG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZlRGF0ZTogRDtcblxuICAvKiogVGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0ZWQoKTogRCB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICB9XG5cbiAgc2V0IHNlbGVjdGVkKHZhbHVlOiBEKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdGhpcy5fZ2V0TW9udGhJbkN1cnJlbnRZZWFyKHRoaXMuc2VsZWN0ZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQ6IEQ7XG5cbiAgLyoqIEEgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgd2hpY2ggZGF0ZXMgYXJlIHNlbGVjdGFibGUuICovXG4gIEBJbnB1dCgpIGRhdGVGaWx0ZXI6IChkYXRlOiBEKSA9PiBib29sZWFuO1xuXG4gIC8qKiBFbWl0cyB3aGVuIGEgbmV3IG1vbnRoIGlzIHNlbGVjdGVkLiAqL1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEQ+KCk7XG5cbiAgLyoqIEdyaWQgb2YgY2FsZW5kYXIgY2VsbHMgcmVwcmVzZW50aW5nIHRoZSBtb250aHMgb2YgdGhlIHllYXIuICovXG4gIF9tb250aHM6IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJDZWxsW11bXTtcblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGlzIHllYXIgKGUuZy4gXCIyMDE3XCIpLiAqL1xuICBfeWVhckxhYmVsOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBtb250aCBpbiB0aGlzIHllYXIgdGhhdCB0b2RheSBmYWxscyBvbi4gTnVsbCBpZiB0b2RheSBpcyBpbiBhIGRpZmZlcmVudCB5ZWFyLiAqL1xuICBfdG9kYXlNb250aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIHNlbGVjdGVkIERhdGUgZmFsbHMgb24uXG4gICAqIE51bGwgaWYgdGhlIHNlbGVjdGVkIERhdGUgaXMgaW4gYSBkaWZmZXJlbnQgeWVhci5cbiAgICovXG4gIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG5cbiAgX2NhbGVuZGFyU3RhdGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgX2FkYXB0ZXI6IERhdGV0aW1lQWRhcHRlcjxEPixcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChNQVRfREFURVRJTUVfRk9STUFUUykgcHJpdmF0ZSBfZGF0ZUZvcm1hdHM6IE1hdERhdGV0aW1lRm9ybWF0cykge1xuICAgIGlmICghdGhpcy5fYWRhcHRlcikge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJEYXRldGltZUFkYXB0ZXJcIik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9kYXRlRm9ybWF0cykge1xuICAgICAgdGhyb3cgY3JlYXRlTWlzc2luZ0RhdGVJbXBsRXJyb3IoXCJNQVRfREFURVRJTUVfRk9STUFUU1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdGhpcy5fYWRhcHRlci50b2RheSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2luaXQoKTtcbiAgfVxuXG4gIC8qKiBIYW5kbGVzIHdoZW4gYSBuZXcgbW9udGggaXMgc2VsZWN0ZWQuICovXG4gIF9tb250aFNlbGVjdGVkKG1vbnRoOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5fYWRhcHRlci5jcmVhdGVEYXRldGltZShcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCxcbiAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0RGF0ZSh0aGlzLmFjdGl2ZURhdGUpLFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKSk7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJtb250aFwiKSB7XG4gICAgICB0aGlzLl91c2VyU2VsZWN0aW9uLmVtaXQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogSW5pdGlhbGl6ZXMgdGhpcyBtb250aCB2aWV3LiAqL1xuICBwcml2YXRlIF9pbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB0aGlzLl9nZXRNb250aEluQ3VycmVudFllYXIodGhpcy5zZWxlY3RlZCk7XG4gICAgdGhpcy5fdG9kYXlNb250aCA9IHRoaXMuX2dldE1vbnRoSW5DdXJyZW50WWVhcih0aGlzLl9hZGFwdGVyLnRvZGF5KCkpO1xuICAgIHRoaXMuX3llYXJMYWJlbCA9IHRoaXMuX2FkYXB0ZXIuZ2V0WWVhck5hbWUodGhpcy5hY3RpdmVEYXRlKTtcblxuICAgIGxldCBtb250aE5hbWVzID0gdGhpcy5fYWRhcHRlci5nZXRNb250aE5hbWVzKFwic2hvcnRcIik7XG4gICAgLy8gRmlyc3Qgcm93IG9mIG1vbnRocyBvbmx5IGNvbnRhaW5zIDUgZWxlbWVudHMgc28gd2UgY2FuIGZpdCB0aGUgeWVhciBsYWJlbCBvbiB0aGUgc2FtZSByb3cuXG4gICAgdGhpcy5fbW9udGhzID0gW1swLCAxLCAyLCAzLCA0XSwgWzUsIDYsIDcsIDgsIDksIDEwLCAxMV1dLm1hcChyb3cgPT4gcm93Lm1hcChcbiAgICAgIG1vbnRoID0+IHRoaXMuX2NyZWF0ZUNlbGxGb3JNb250aChtb250aCwgbW9udGhOYW1lc1ttb250aF0pKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbW9udGggaW4gdGhpcyB5ZWFyIHRoYXQgdGhlIGdpdmVuIERhdGUgZmFsbHMgb24uXG4gICAqIFJldHVybnMgbnVsbCBpZiB0aGUgZ2l2ZW4gRGF0ZSBpcyBpbiBhbm90aGVyIHllYXIuXG4gICAqL1xuICBwcml2YXRlIF9nZXRNb250aEluQ3VycmVudFllYXIoZGF0ZTogRCkge1xuICAgIHJldHVybiB0aGlzLl9hZGFwdGVyLnNhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgP1xuICAgICAgdGhpcy5fYWRhcHRlci5nZXRNb250aChkYXRlKSA6IG51bGw7XG4gIH1cblxuICAvKiogQ3JlYXRlcyBhbiBNZENhbGVuZGFyQ2VsbCBmb3IgdGhlIGdpdmVuIG1vbnRoLiAqL1xuICBwcml2YXRlIF9jcmVhdGVDZWxsRm9yTW9udGgobW9udGg6IG51bWJlciwgbW9udGhOYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgYXJpYUxhYmVsID0gdGhpcy5fYWRhcHRlci5mb3JtYXQoXG4gICAgICB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKHRoaXMuX2FkYXB0ZXIuZ2V0WWVhcih0aGlzLmFjdGl2ZURhdGUpLCBtb250aCwgMSxcbiAgICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICAgIHRoaXMuX2FkYXB0ZXIuZ2V0TWludXRlKHRoaXMuYWN0aXZlRGF0ZSkpLFxuICAgICAgdGhpcy5fZGF0ZUZvcm1hdHMuZGlzcGxheS5tb250aFllYXJBMTF5TGFiZWwpO1xuICAgIHJldHVybiBuZXcgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhckNlbGwoXG4gICAgICBtb250aCwgbW9udGhOYW1lLnRvTG9jYWxlVXBwZXJDYXNlKCksIGFyaWFMYWJlbCwgdGhpcy5faXNNb250aEVuYWJsZWQobW9udGgpKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBnaXZlbiBtb250aCBpcyBlbmFibGVkLiAqL1xuICBwcml2YXRlIF9pc01vbnRoRW5hYmxlZChtb250aDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmRhdGVGaWx0ZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCBmaXJzdE9mTW9udGggPSB0aGlzLl9hZGFwdGVyLmNyZWF0ZURhdGV0aW1lKFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRZZWFyKHRoaXMuYWN0aXZlRGF0ZSksIG1vbnRoLCAxLFxuICAgICAgdGhpcy5fYWRhcHRlci5nZXRIb3VyKHRoaXMuYWN0aXZlRGF0ZSksXG4gICAgICB0aGlzLl9hZGFwdGVyLmdldE1pbnV0ZSh0aGlzLmFjdGl2ZURhdGUpKTtcblxuICAgIC8vIElmIGFueSBkYXRlIGluIHRoZSBtb250aCBpcyBlbmFibGVkIGNvdW50IHRoZSBtb250aCBhcyBlbmFibGVkLlxuICAgIGZvciAobGV0IGRhdGUgPSBmaXJzdE9mTW9udGg7IHRoaXMuX2FkYXB0ZXIuZ2V0TW9udGgoZGF0ZSkgPT0gbW9udGg7XG4gICAgICAgICBkYXRlID0gdGhpcy5fYWRhcHRlci5hZGRDYWxlbmRhckRheXMoZGF0ZSwgMSkpIHtcbiAgICAgIGlmICh0aGlzLmRhdGVGaWx0ZXIoZGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBjYWxlbmRhclN0YXRlKGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gIC8vICAgdGhpcy5fY2FsZW5kYXJTdGF0ZSA9IGRpcmVjdGlvbjtcbiAgLy8gfVxuXG4gIF9jYWxlbmRhclN0YXRlRG9uZSgpIHtcbiAgICB0aGlzLl9jYWxlbmRhclN0YXRlID0gXCJcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQTExeU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvYTExeVwiO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jZGsvb3ZlcmxheVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXREaWFsb2dNb2R1bGUsXG4gIE1hdEljb25Nb2R1bGVcbn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyIH0gZnJvbSBcIi4vY2FsZW5kYXJcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5IH0gZnJvbSBcIi4vY2FsZW5kYXItYm9keVwiO1xuaW1wb3J0IHsgTWF0RGF0ZXRpbWVwaWNrZXJDbG9jayB9IGZyb20gXCIuL2Nsb2NrXCI7XG5pbXBvcnQge1xuICBNYXREYXRldGltZXBpY2tlcixcbiAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50XG59IGZyb20gXCIuL2RhdGV0aW1lcGlja2VyXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlcklucHV0IH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItaW5wdXRcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlIH0gZnJvbSBcIi4vZGF0ZXRpbWVwaWNrZXItdG9nZ2xlXCI7XG5pbXBvcnQgeyBNYXREYXRldGltZXBpY2tlck1vbnRoVmlldyB9IGZyb20gXCIuL21vbnRoLXZpZXdcIjtcbmltcG9ydCB7IE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXcgfSBmcm9tIFwiLi95ZWFyLXZpZXdcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBBMTF5TW9kdWxlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIE1hdERhdGV0aW1lcGlja2VyQ29udGVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyLFxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2FsZW5kYXJCb2R5LFxuICAgIE1hdERhdGV0aW1lcGlja2VyQ2xvY2ssXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXIsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJUb2dnbGUsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJJbnB1dCxcbiAgICBNYXREYXRldGltZXBpY2tlckNvbnRlbnQsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJNb250aFZpZXcsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJZZWFyVmlld1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDYWxlbmRhcixcbiAgICBNYXREYXRldGltZXBpY2tlckNhbGVuZGFyQm9keSxcbiAgICBNYXREYXRldGltZXBpY2tlckNsb2NrLFxuICAgIE1hdERhdGV0aW1lcGlja2VyLFxuICAgIE1hdERhdGV0aW1lcGlja2VyVG9nZ2xlLFxuICAgIE1hdERhdGV0aW1lcGlja2VySW5wdXQsXG4gICAgTWF0RGF0ZXRpbWVwaWNrZXJDb250ZW50LFxuICAgIE1hdERhdGV0aW1lcGlja2VyTW9udGhWaWV3LFxuICAgIE1hdERhdGV0aW1lcGlja2VyWWVhclZpZXdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXREYXRldGltZXBpY2tlck1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJmaXJzdCIsInN0eWxlIiwiRGF0ZUFk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

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "app";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: "app",
            styles: [__webpack_require__(142)],
            template: __webpack_require__(126),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_list_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendListComponent = /** @class */ (function () {
    function FriendListComponent(_friendListService, _changeDetectorRef) {
        this._friendListService = _friendListService;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "Поиск друга";
        this.iconName = "add";
        this.iconText = "Добавить";
        this.clearOnSelect = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.friends = [];
        this._friendId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this._subs = [];
    }
    Object.defineProperty(FriendListComponent.prototype, "friendLink", {
        set: function (value) {
            if (value && value.friendId) {
                this._friendId$.next(value.friendId);
            }
        },
        enumerable: true,
        configurable: true
    });
    FriendListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._friendListService.friends$
                .subscribe(function (friends) {
                _this.friends = friends;
                _this._changeDetectorRef.detectChanges();
            }),
            this._friendListService.friends$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_) { return _this._friendId$.pipe(); }))
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(100))
                .subscribe(function (friendId) {
                var friend = _this.friends.find(function (x) { return x.id === friendId; });
                if (friend) {
                    _this.autocomplete.queryControl.patchValue(friend.name);
                }
                else {
                    console.warn("friend not found", friendId);
                }
            }),
        ];
        this._friendListService.fetchFriends();
    };
    FriendListComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe(); });
    };
    FriendListComponent.prototype.onSelected = function (row) {
        this.selected.emit(row.id);
    };
    FriendListComponent.prototype.onIconClicked = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FriendListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FriendListComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FriendListComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FriendListComponent.prototype, "clearOnSelect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FriendListComponent.prototype, "friendLink", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("autocomplete"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__["b" /* AutocompleteComponent */])
    ], FriendListComponent.prototype, "autocomplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FriendListComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FriendListComponent.prototype, "iconClicked", void 0);
    FriendListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-friend-list",
            template: __webpack_require__(127),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__friend_list_service__["a" /* FriendListService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FriendListComponent);
    return FriendListComponent;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendListService = /** @class */ (function () {
    function FriendListService(_httpService) {
        this._httpService = _httpService;
        this._friends$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    Object.defineProperty(FriendListService.prototype, "friends$", {
        get: function () {
            return this._friends$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    FriendListService.prototype.fetchFriends = function () {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getFriendsUrl, function (friends) { return _this._friends$.next(friends); });
    };
    FriendListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], FriendListService);
    return FriendListService;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meetup_list_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeetupListComponent = /** @class */ (function () {
    function MeetupListComponent(_meetupListService, _changeDetectorRef) {
        this._meetupListService = _meetupListService;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "Поиск встречи";
        this.iconName = "add";
        this.iconText = "Добавить";
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.meetups = [];
        this._meetupId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this._subs = [];
    }
    Object.defineProperty(MeetupListComponent.prototype, "meetupLink", {
        set: function (value) {
            if (value && value.meetupId) {
                this._meetupId$.next(value.meetupId);
            }
        },
        enumerable: true,
        configurable: true
    });
    MeetupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._meetupListService.meetups$
                .subscribe(function (meetups) {
                _this.meetups = meetups;
                _this._changeDetectorRef.detectChanges();
            }),
            this._meetupListService.meetups$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_) { return _this._meetupId$.pipe(); }))
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(100))
                .subscribe(function (meetupId) {
                var meetup = _this.meetups.find(function (x) { return x.id === meetupId; });
                if (meetup) {
                    _this.autocomplete.queryControl.patchValue(meetup.name);
                }
                else {
                    console.warn("meetup not found", meetupId);
                }
            }),
        ];
        this._meetupListService.fetchMeetups();
    };
    MeetupListComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe(); });
    };
    MeetupListComponent.prototype.onSelected = function (row) {
        this.selected.emit(row);
    };
    MeetupListComponent.prototype.onIconClicked = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MeetupListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MeetupListComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MeetupListComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MeetupListComponent.prototype, "meetupLink", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("autocomplete"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__["b" /* AutocompleteComponent */])
    ], MeetupListComponent.prototype, "autocomplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MeetupListComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MeetupListComponent.prototype, "iconClicked", void 0);
    MeetupListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-meetup-list",
            template: __webpack_require__(128),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__meetup_list_service__["a" /* MeetupListService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], MeetupListComponent);
    return MeetupListComponent;
}());



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetupListService = /** @class */ (function () {
    function MeetupListService(_httpService) {
        this._httpService = _httpService;
        this._meetups$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    Object.defineProperty(MeetupListService.prototype, "meetups$", {
        get: function () {
            return this._meetups$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    MeetupListService.prototype.fetchMeetups = function () {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getMeetupsUrl, function (meetups) { return _this._meetups$.next(meetups); });
    };
    MeetupListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], MeetupListService);
    return MeetupListService;
}());



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navmenu_component__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavMenuModule = /** @class */ (function () {
    function NavMenuModule() {
    }
    NavMenuModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__navmenu_component__["a" /* NavMenuComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__navmenu_component__["a" /* NavMenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatMenuModule"],
            ],
        })
    ], NavMenuModule);
    return NavMenuModule;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_list_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeakerListComponent = /** @class */ (function () {
    function SpeakerListComponent(_speakerListService, _changeDetectorRef) {
        this._speakerListService = _speakerListService;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "Поиск докладчика";
        this.iconName = "add";
        this.iconText = "Добавить";
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.speakers = [];
        this._speakerId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this._subs = [];
    }
    Object.defineProperty(SpeakerListComponent.prototype, "speakerLink", {
        set: function (value) {
            if (value && value.speakerId) {
                this._speakerId$.next(value.speakerId);
            }
        },
        enumerable: true,
        configurable: true
    });
    SpeakerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._speakerListService.speakers$
                .subscribe(function (speakers) {
                _this.speakers = speakers;
                _this._changeDetectorRef.detectChanges();
            }),
            this._speakerListService.speakers$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_) { return _this._speakerId$.pipe(); }))
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(100))
                .subscribe(function (speakerId) {
                var speaker = _this.speakers.find(function (x) { return x.id === speakerId; });
                if (speaker) {
                    _this.autocomplete.queryControl.patchValue(speaker.name);
                }
                else {
                    console.warn("speaker not found", speakerId);
                }
            }),
        ];
        this._speakerListService.fetchSpeakers();
    };
    SpeakerListComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe(); });
    };
    SpeakerListComponent.prototype.onSelected = function (row) {
        this.selected.emit(row);
    };
    SpeakerListComponent.prototype.onIconClicked = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SpeakerListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SpeakerListComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SpeakerListComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SpeakerListComponent.prototype, "speakerLink", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("autocomplete"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__["b" /* AutocompleteComponent */])
    ], SpeakerListComponent.prototype, "autocomplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SpeakerListComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SpeakerListComponent.prototype, "iconClicked", void 0);
    SpeakerListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-speaker-list",
            template: __webpack_require__(130),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__speaker_list_service__["a" /* SpeakerListService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SpeakerListComponent);
    return SpeakerListComponent;
}());



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerListService = /** @class */ (function () {
    function SpeakerListService(_httpService) {
        this._httpService = _httpService;
        this._speakers$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    Object.defineProperty(SpeakerListService.prototype, "speakers$", {
        get: function () {
            return this._speakers$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    SpeakerListService.prototype.fetchSpeakers = function () {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getSpeakersUrl, function (speakers) { return _this._speakers$.next(speakers); });
    };
    SpeakerListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], SpeakerListService);
    return SpeakerListService;
}());



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__talk_list_component__ = __webpack_require__(35);
/* unused harmony reexport TalkListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__talk_list_module__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__talk_list_module__["a"]; });




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_list_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TalkListComponent = /** @class */ (function () {
    function TalkListComponent(_talkListService, _changeDetectorRef) {
        this._talkListService = _talkListService;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "Поиск доклада";
        this.iconName = "add";
        this.iconText = "Добавить";
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.talks = [];
        this._talkId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this._subs = [];
    }
    Object.defineProperty(TalkListComponent.prototype, "talkLink", {
        set: function (value) {
            if (value && value.talkId) {
                this._talkId$.next(value.talkId);
            }
        },
        enumerable: true,
        configurable: true
    });
    TalkListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._talkListService.talks$
                .subscribe(function (talks) {
                _this.talks = talks;
                _this._changeDetectorRef.detectChanges();
            }),
            this._talkListService.talks$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_) { return _this._talkId$.pipe(); }))
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(100))
                .subscribe(function (talkId) {
                var talk = _this.talks.find(function (x) { return x.id === talkId; });
                if (talk) {
                    _this.autocomplete.queryControl.patchValue(talk.name);
                }
                else {
                    console.warn("talk not found", talkId);
                }
            }),
        ];
        this._talkListService.fetchTalks();
    };
    TalkListComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe(); });
    };
    TalkListComponent.prototype.onSelected = function (row) {
        this.selected.emit(row);
    };
    TalkListComponent.prototype.onIconClicked = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TalkListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TalkListComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TalkListComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TalkListComponent.prototype, "talkLink", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("autocomplete"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__["b" /* AutocompleteComponent */])
    ], TalkListComponent.prototype, "autocomplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TalkListComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TalkListComponent.prototype, "iconClicked", void 0);
    TalkListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-talk-list",
            template: __webpack_require__(131),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__talk_list_service__["a" /* TalkListService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TalkListComponent);
    return TalkListComponent;
}());



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TalkListService = /** @class */ (function () {
    function TalkListService(_httpService) {
        this._httpService = _httpService;
        this._talks$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    Object.defineProperty(TalkListService.prototype, "talks$", {
        get: function () {
            return this._talks$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    TalkListService.prototype.fetchTalks = function () {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getTalksUrl, function (talks) { return _this._talks$.next(talks); });
    };
    TalkListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], TalkListService);
    return TalkListService;
}());



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_list_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VenueListComponent = /** @class */ (function () {
    function VenueListComponent(_venueListService, _changeDetectorRef) {
        this._venueListService = _venueListService;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "Поиск площадки";
        this.iconName = "add";
        this.iconText = "Добавить";
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.venues = [];
        this._venueId$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this._subs = [];
    }
    Object.defineProperty(VenueListComponent.prototype, "venueLink", {
        set: function (value) {
            if (value && value.venueId) {
                this._venueId$.next(value.venueId);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VenueListComponent.prototype, "venueId", {
        set: function (venueId) {
            if (venueId) {
                this._venueId$.next(venueId);
            }
        },
        enumerable: true,
        configurable: true
    });
    VenueListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._venueListService.venues$
                .subscribe(function (venues) {
                _this.venues = venues;
                _this._changeDetectorRef.detectChanges();
            }),
            this._venueListService.venues$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (_) { return _this._venueId$.pipe(); }))
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(100))
                .subscribe(function (venueId) {
                var venue = _this.venues.find(function (x) { return x.id === venueId; });
                if (venue) {
                    _this.autocomplete.queryControl.patchValue(venue.name);
                }
                else {
                    console.warn("venue not found", venueId);
                }
            }),
        ];
        this._venueListService.fetchVenues();
    };
    VenueListComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe(); });
    };
    VenueListComponent.prototype.onSelected = function (row) {
        this.selected.emit(row.id);
    };
    VenueListComponent.prototype.onIconClicked = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VenueListComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VenueListComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VenueListComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], VenueListComponent.prototype, "venueLink", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], VenueListComponent.prototype, "venueId", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("autocomplete"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dotnetru_shared_autocomplete__["b" /* AutocompleteComponent */])
    ], VenueListComponent.prototype, "autocomplete", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VenueListComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VenueListComponent.prototype, "iconClicked", void 0);
    VenueListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-venue-list",
            template: __webpack_require__(133),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__venue_list_service__["a" /* VenueListService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], VenueListComponent);
    return VenueListComponent;
}());



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VenueListService = /** @class */ (function () {
    function VenueListService(_httpService) {
        this._httpService = _httpService;
        this._venues$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
    }
    Object.defineProperty(VenueListService.prototype, "venues$", {
        get: function () {
            return this._venues$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x.length > 0; }));
        },
        enumerable: true,
        configurable: true
    });
    VenueListService.prototype.fetchVenues = function () {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getVenuesUrl, function (venues) { return _this._venues$.next(venues); });
    };
    VenueListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], VenueListService);
    return VenueListService;
}());



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var HttpService = /** @class */ (function () {
    function HttpService(_baseUrl, _httpClient, _layoutService) {
        var _this = this;
        this._baseUrl = _baseUrl;
        this._httpClient = _httpClient;
        this._layoutService = _layoutService;
        this._requestsCount = 0;
        this.onError = function (err, errCb) {
            _this.requestEnded();
            console.error(err);
            if (errCb) {
                errCb(err);
            }
            else {
                var message = "Неопознанная ошибка!";
                if (err.status === 400 || err.status === 404 || err.status === 405) {
                    message = err.error;
                }
                else if (err.status === 500) {
                    message = "Возникла непредвиденная ошибка на сервере";
                }
                else if (err.status <= 0) {
                    message = "Api не запущен";
                }
                else {
                    throw err;
                }
                _this._layoutService.showError(message);
            }
        };
    }
    HttpService.prototype.get = function (url, cb, errCb) {
        var _this = this;
        this.requestStarted();
        this._httpClient.get(this.fromBase(url)).subscribe(function (res) { return _this.onSuccess(res, cb); }, function (err) { return _this.onError(err, errCb); }, function () { return _this.onComplete(); });
    };
    HttpService.prototype.post = function (url, body, cb, errCb) {
        var _this = this;
        this.requestStarted();
        this._httpClient.post(this.fromBase(url), body).subscribe(function (res) { return _this.onSuccess(res, cb); }, function (err) { return _this.onError(err, errCb); }, function () { return _this.onComplete(); });
    };
    HttpService.prototype.put = function (url, body, cb, errCb) {
        var _this = this;
        this.requestStarted();
        this._httpClient.put(this.fromBase(url), body).subscribe(function (res) { return _this.onSuccess(res, cb); }, function (err) { return _this.onError(err, errCb); }, function () { return _this.onComplete(); });
    };
    HttpService.prototype.fromBase = function (url) {
        return "" + this._baseUrl + url;
    };
    HttpService.prototype.requestStarted = function () {
        ++this._requestsCount;
        this._layoutService.showProgress();
    };
    HttpService.prototype.requestEnded = function () {
        if (this._requestsCount > 0) {
            --this._requestsCount;
            if (this._requestsCount === 0) {
                this._layoutService.hideProgress();
            }
        }
        else {
            console.warn("try decrease requestsCount below zero");
        }
    };
    HttpService.prototype.onSuccess = function (res, cb) {
        this.requestEnded();
        cb(res);
    };
    HttpService.prototype.onComplete = function () {
        // ignore
    };
    HttpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])("BASE_URL")),
        __metadata("design:paramtypes", [String, __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendEditorService = /** @class */ (function () {
    function FriendEditorService(_layoutService, _httpService, _router) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._router = _router;
        this._friend$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this._dataStore = {
            friend: {},
        };
    }
    FriendEditorService.getDefaultFriend = function () {
        return { id: "", name: "", url: "", description: "" };
    };
    Object.defineProperty(FriendEditorService.prototype, "friend$", {
        get: function () {
            return this._friend$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    FriendEditorService.prototype.hasChanges = function (friend) {
        return JSON.stringify(friend) !== JSON.stringify(this._dataStore.friend);
    };
    FriendEditorService.prototype.fetchFriend = function (friendId) {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].getFriendUrl.replace("{{friendId}}", friendId), function (friend) {
            _this._dataStore.friend = friend;
            _this._friend$.next(Object.assign({}, _this._dataStore.friend));
        });
    };
    FriendEditorService.prototype.addFriend = function (friend, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].addFriendUrl, friend, function (res) {
            _this._layoutService.showInfo("Друг добавлен успешно");
            cb(res);
        });
    };
    FriendEditorService.prototype.updateFriend = function (friend, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].updateFriendUrl, friend, function (x) {
            _this._layoutService.showInfo("Друг изменён успешно");
            _this._dataStore.friend = x;
            _this._friend$.next(Object.assign({}, _this._dataStore.friend));
            cb();
        });
    };
    FriendEditorService.prototype.reset = function () {
        this._friend$.next(Object.assign({}, this._dataStore.friend));
    };
    FriendEditorService.prototype.storeFriendAvatar = function (friendId, blob) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].storeFriendAvatarUrl
            .replace("{{friendId}}", friendId);
        var formData = new FormData();
        formData.append("formFile", blob, "avatar.jpg");
        this._httpService.put(url, formData, function () {
            _this._layoutService.showInfo("Аватар загружен успешно");
        });
    };
    FriendEditorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["c" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], FriendEditorService);
    return FriendEditorService;
}());



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__friend_editor_module__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__friend_editor_module__["a"]; });



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMUNITIES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(20);

var COMMUNITIES = [
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].SpbDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].MskDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].SarDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].KryDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].KznDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].NskDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].NnvDotNet,
    __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* Community */].UfaDotNet,
];


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meetup_editor_module__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__meetup_editor_module__["a"]; });



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(_router) {
        this._router = _router;
    }
    SearchPageComponent.prototype.onSpeakerSelected = function (speaker) {
        this._router.navigateByUrl("speaker-editor/" + speaker.id);
    };
    SearchPageComponent.prototype.addSpeaker = function () {
        this._router.navigateByUrl("speaker-creator");
    };
    SearchPageComponent.prototype.onTalkSelected = function (talk) {
        this._router.navigateByUrl("talk-editor/" + talk.id);
    };
    SearchPageComponent.prototype.addTalk = function () {
        this._router.navigateByUrl("talk-creator");
    };
    SearchPageComponent.prototype.onVenueSelected = function (venueId) {
        this._router.navigateByUrl("venue-editor/" + venueId);
    };
    SearchPageComponent.prototype.addVenue = function () {
        this._router.navigateByUrl("venue-creator");
    };
    SearchPageComponent.prototype.onFriendSelected = function (friendId) {
        this._router.navigateByUrl("friend-editor/" + friendId);
    };
    SearchPageComponent.prototype.addFriend = function () {
        this._router.navigateByUrl("friend-creator");
    };
    SearchPageComponent.prototype.onMeetupSelected = function (meetup) {
        this._router.navigateByUrl("meetup-editor/" + meetup.id);
    };
    SearchPageComponent.prototype.addMeetup = function () {
        this._router.navigateByUrl("meetup-creator");
    };
    SearchPageComponent.prototype.addTimepad = function () {
        this._router.navigateByUrl("timepad");
    };
    SearchPageComponent.prototype.onTimepadSelected = function (meetup) {
        this._router.navigateByUrl("timepad/" + meetup.id);
    };
    SearchPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-search",
            template: __webpack_require__(137),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerEditorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_editor_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_editor_service__ = __webpack_require__(47);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpeakerEditorDialogComponent = /** @class */ (function (_super) {
    __extends(SpeakerEditorDialogComponent, _super);
    function SpeakerEditorDialogComponent(_dialogRef, speakerEditorService, layoutService, activatedRoute, router, changeDetectorRef) {
        var _this = _super.call(this, speakerEditorService, layoutService, activatedRoute, router, changeDetectorRef) || this;
        _this._dialogRef = _dialogRef;
        _this.isDialog = true;
        return _this;
    }
    SpeakerEditorDialogComponent.prototype.save = function (cb) {
        var _this = this;
        _super.prototype.save.call(this, function (speaker) {
            _this._dialogRef.close(speaker);
        });
    };
    SpeakerEditorDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    SpeakerEditorDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__speaker_editor_service__["a" /* SpeakerEditorService */]],
            selector: "mtp-speaker-editor-dialog",
            styles: [__webpack_require__(61)],
            template: __webpack_require__(58),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialogRef"],
            __WEBPACK_IMPORTED_MODULE_5__speaker_editor_service__["a" /* SpeakerEditorService */],
            __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SpeakerEditorDialogComponent);
    return SpeakerEditorDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_4__speaker_editor_component__["a" /* SpeakerEditorComponent */]));



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_editor_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpeakerEditorComponent = /** @class */ (function () {
    function SpeakerEditorComponent(_speakerEditorService, _layoutService, _activatedRoute, _router, _changeDetectorRef) {
        this._speakerEditorService = _speakerEditorService;
        this._layoutService = _layoutService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._changeDetectorRef = _changeDetectorRef;
        this.LABELS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["e" /* PATTERNS */];
        this.AVATAR_MIME_TYPES = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["h" /* MIME_TYPES */].JPEG;
        this.AVATAR_MAX_SIZE = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["i" /* FILE_SIZES */].AVATAR_MAX_SIZE;
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // todo: create service method getDefaultSpeaker
        this.speaker = {
            companyName: "",
            description: "",
            id: "",
            name: "",
        };
        this.editMode = false;
        this.isDialog = false;
        this._subs = [];
    }
    Object.defineProperty(SpeakerEditorComponent.prototype, "speakerId", {
        set: function (value) {
            this._speakerId = value;
            this.editMode = typeof this._speakerId === "string" && this._speakerId.length > 0;
            this._speakerEditorService.fetchSpeaker(this._speakerId);
        },
        enumerable: true,
        configurable: true
    });
    SpeakerEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .subscribe(function (params) {
                if (typeof params.speakerId === "string") {
                    _this.speakerId = params.speakerId;
                }
            }),
            this._speakerEditorService.speaker$
                .subscribe(function (speaker) {
                _this.speaker = speaker;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    SpeakerEditorComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    SpeakerEditorComponent.prototype.save = function (cb) {
        var _this = this;
        if (this.editMode) {
            this._speakerEditorService.updateSpeaker(this.speaker, function () {
                _this.saved.emit(_this.speaker);
            });
        }
        else {
            cb = cb || (function (speaker) {
                _this._router.navigateByUrl("speaker-editor" + (speaker ? "/" + speaker.id : ""));
            });
            this._speakerEditorService.addSpeaker(this.speaker, cb);
        }
    };
    SpeakerEditorComponent.prototype.reset = function () {
        this._speakerEditorService.reset();
    };
    SpeakerEditorComponent.prototype.close = function () {
        console.warn(this.constructor.name + " => close");
    };
    SpeakerEditorComponent.prototype.onFilesAccepted = function (files) {
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var acceptedFile = files_1[_i];
            this._speakerEditorService.storeSpeakerAvatar(this.speaker.id, acceptedFile.file);
        }
    };
    SpeakerEditorComponent.prototype.onFilesRejected = function (files) {
        var msg = "Невозможно загрузить файлы.";
        var oversized = files
            .find(function (x) { return x.reason === __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__["a" /* RejectionReason */].FileSize; });
        if (oversized) {
            msg += " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C [" + this.AVATAR_MAX_SIZE + "].";
        }
        // unique file types
        var fileTypes = files
            .filter(function (x) { return x.reason === __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__["a" /* RejectionReason */].FileType; })
            .map(function (x) { return x.file.type; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        if (fileTypes.length > 0) {
            msg += "\u0422\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F [" + fileTypes.join(", ") + "].";
        }
        this._layoutService.showWarning(msg);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SpeakerEditorComponent.prototype, "speakerId", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SpeakerEditorComponent.prototype, "saved", void 0);
    SpeakerEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_4__speaker_editor_service__["a" /* SpeakerEditorService */]],
            selector: "mtp-speaker-editor",
            styles: [__webpack_require__(61)],
            template: __webpack_require__(58),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__speaker_editor_service__["a" /* SpeakerEditorService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SpeakerEditorComponent);
    return SpeakerEditorComponent;
}());



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpeakerEditorService = /** @class */ (function () {
    function SpeakerEditorService(_layoutService, _httpService) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._speaker$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this._dataStore = {
            speaker: {},
        };
    }
    Object.defineProperty(SpeakerEditorService.prototype, "speaker$", {
        get: function () {
            return this._speaker$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    SpeakerEditorService.prototype.hasChanges = function (speaker) {
        return JSON.stringify(speaker) !== JSON.stringify(this._dataStore.speaker);
    };
    SpeakerEditorService.prototype.fetchSpeaker = function (speakerId) {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getSpeakerUrl.replace("{{speakerId}}", speakerId), function (speaker) {
            _this._dataStore.speaker = speaker;
            _this._speaker$.next(Object.assign({}, _this._dataStore.speaker));
        });
    };
    SpeakerEditorService.prototype.addSpeaker = function (speaker, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].addSpeakerUrl, speaker, function (res) {
            _this._layoutService.showInfo("Докладчик добавлен успешно");
            cb(res);
        });
    };
    SpeakerEditorService.prototype.updateSpeaker = function (speaker, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].updateSpeakerUrl, speaker, function (x) {
            _this._layoutService.showInfo("Докладчик изменён успешно");
            _this._dataStore.speaker = x;
            _this._speaker$.next(Object.assign({}, _this._dataStore.speaker));
            cb();
        });
    };
    SpeakerEditorService.prototype.reset = function () {
        this._speaker$.next(Object.assign({}, this._dataStore.speaker));
    };
    SpeakerEditorService.prototype.storeSpeakerAvatar = function (speakerId, blob) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].storeSpeakerAvatarUrl
            .replace("{{speakerId}}", speakerId);
        var formData = new FormData();
        formData.append("formFile", blob, "avatar.jpg");
        this._httpService.put(url, formData, function () {
            _this._layoutService.showInfo("Аватар загружен успешно");
        });
    };
    SpeakerEditorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], SpeakerEditorService);
    return SpeakerEditorService;
}());



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkEditorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__talk_editor_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__talk_editor_service__ = __webpack_require__(50);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TalkEditorDialogComponent = /** @class */ (function (_super) {
    __extends(TalkEditorDialogComponent, _super);
    function TalkEditorDialogComponent(_dialogRef, talkEditorService, layoutService, dialog, activatedRoute, router, changeDetectorRef) {
        var _this = _super.call(this, talkEditorService, layoutService, dialog, activatedRoute, router, changeDetectorRef) || this;
        _this._dialogRef = _dialogRef;
        _this.isDialog = true;
        return _this;
    }
    TalkEditorDialogComponent.prototype.save = function (cb) {
        var _this = this;
        _super.prototype.save.call(this, function (talk) {
            _this._dialogRef.close(talk);
        });
    };
    TalkEditorDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    TalkEditorDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__talk_editor_service__["a" /* TalkEditorService */]],
            selector: "mtp-talk-editor-dialog",
            styles: [__webpack_require__(62)],
            template: __webpack_require__(59),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialogRef"],
            __WEBPACK_IMPORTED_MODULE_5__talk_editor_service__["a" /* TalkEditorService */],
            __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialog"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TalkEditorDialogComponent);
    return TalkEditorDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_4__talk_editor_component__["a" /* TalkEditorComponent */]));



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_pages_speaker_editor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__talk_editor_service__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TalkEditorComponent = /** @class */ (function () {
    function TalkEditorComponent(_talkEditorService, _layoutService, _dialog, _activatedRoute, _router, _changeDetectorRef) {
        this._talkEditorService = _talkEditorService;
        this._layoutService = _layoutService;
        this._dialog = _dialog;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._changeDetectorRef = _changeDetectorRef;
        this.LABELS = __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["e" /* PATTERNS */];
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // todo: create service method getDefaultTalk
        this.talk = {
            description: "",
            id: "",
            speakerIds: [],
            title: "",
        };
        this.editMode = false;
        this.isDialog = false;
        this._subs = [];
    }
    Object.defineProperty(TalkEditorComponent.prototype, "talkId", {
        set: function (value) {
            this._talkId = value;
            this.editMode = typeof this._talkId === "string" && this._talkId.length > 0;
            this._talkEditorService.fetchTalk(this._talkId);
        },
        enumerable: true,
        configurable: true
    });
    TalkEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .subscribe(function (params) {
                if (typeof params.talkId === "string") {
                    _this.talkId = params.talkId;
                }
            }),
            this._talkEditorService.talk$
                .subscribe(function (talk) {
                _this.talk = talk;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    TalkEditorComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    TalkEditorComponent.prototype.save = function (cb) {
        var _this = this;
        if (this.editMode) {
            this._talkEditorService.updateTalk(this.talk, function () {
                _this.saved.emit(_this.talk);
            });
        }
        else {
            cb = cb || (function (talk) {
                _this._router.navigateByUrl("talk-editor" + (talk ? "/" + talk.id : ""));
            });
            this._talkEditorService.addTalk(this.talk, cb);
        }
    };
    TalkEditorComponent.prototype.reset = function () {
        this._talkEditorService.reset();
    };
    TalkEditorComponent.prototype.close = function () {
        console.warn(this.constructor.name + " => close");
    };
    TalkEditorComponent.prototype.onSpeakerSelected = function (row, index) {
        this.talk.speakerIds[index] = { speakerId: row.id };
    };
    TalkEditorComponent.prototype.removeSpeaker = function (index) {
        this.talk.speakerIds.splice(index, 1);
    };
    TalkEditorComponent.prototype.addSpeaker = function () {
        this.talk.speakerIds.push({ speakerId: "" });
    };
    TalkEditorComponent.prototype.createSpeaker = function () {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_4__dotnetru_pages_speaker_editor__["b" /* SpeakerEditorDialogComponent */], {
            panelClass: "full-height",
            width: "640px",
        });
        dialogRef.afterClosed().subscribe(function (speaker) {
            if (speaker && speaker.id) {
                _this.talk.speakerIds.push({ speakerId: speaker.id });
                _this._changeDetectorRef.detectChanges();
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TalkEditorComponent.prototype, "talkId", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TalkEditorComponent.prototype, "saved", void 0);
    TalkEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__talk_editor_service__["a" /* TalkEditorService */]],
            selector: "mtp-talk-editor",
            styles: [__webpack_require__(62)],
            template: __webpack_require__(59),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__talk_editor_service__["a" /* TalkEditorService */],
            __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialog"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TalkEditorComponent);
    return TalkEditorComponent;
}());



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TalkEditorService = /** @class */ (function () {
    function TalkEditorService(_layoutService, _httpService) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._talk$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this._dataStore = {
            talk: {},
        };
    }
    Object.defineProperty(TalkEditorService.prototype, "talk$", {
        get: function () {
            return this._talk$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    TalkEditorService.prototype.hasChanges = function (talk) {
        return JSON.stringify(talk) !== JSON.stringify(this._dataStore.talk);
    };
    TalkEditorService.prototype.fetchTalk = function (talkId) {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getTalkUrl.replace("{{talkId}}", talkId), function (talk) {
            _this._dataStore.talk = talk;
            _this._talk$.next(Object.assign({}, _this._dataStore.talk));
        });
    };
    TalkEditorService.prototype.addTalk = function (talk, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].addTalkUrl, talk, function (res) {
            _this._layoutService.showInfo("Доклад добавлен успешно");
            cb(res);
        });
    };
    TalkEditorService.prototype.updateTalk = function (talk, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].updateTalkUrl, talk, function (x) {
            _this._layoutService.showInfo("Доклад изменён успешно");
            _this._dataStore.talk = x;
            _this._talk$.next(Object.assign({}, _this._dataStore.talk));
            cb();
        });
    };
    TalkEditorService.prototype.reset = function () {
        this._talk$.next(Object.assign({}, this._dataStore.talk));
    };
    TalkEditorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], TalkEditorService);
    return TalkEditorService;
}());



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueEditorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_editor_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_editor_service__ = __webpack_require__(53);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var VenueEditorDialogComponent = /** @class */ (function (_super) {
    __extends(VenueEditorDialogComponent, _super);
    function VenueEditorDialogComponent(_dialogRef, _data, venueEditorService, layoutService, activatedRoute, router, changeDetectorRef) {
        var _this = _super.call(this, venueEditorService, layoutService, activatedRoute, router, changeDetectorRef) || this;
        _this._dialogRef = _dialogRef;
        _this._data = _data;
        _this.isDialog = true;
        return _this;
    }
    VenueEditorDialogComponent.prototype.ngAfterViewInit = function () {
        // todo: remove code duplication in VenueEditorComponent
        // find: this._venueEditorService.venue$    .subscribe(
        if (this._data) {
            this.venue = this._data;
            this.editMode = true;
            this._changeDetectorRef.detectChanges();
        }
    };
    VenueEditorDialogComponent.prototype.save = function (cb) {
        var _this = this;
        _super.prototype.save.call(this, function (venue) {
            _this._dialogRef.close(venue);
        });
    };
    VenueEditorDialogComponent.prototype.close = function () {
        this._dialogRef.close();
    };
    VenueEditorDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__venue_editor_service__["a" /* VenueEditorService */]],
            selector: "mtp-venue-editor-dialog",
            styles: [__webpack_require__(63)],
            template: __webpack_require__(60),
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialogRef"], Object, __WEBPACK_IMPORTED_MODULE_5__venue_editor_service__["a" /* VenueEditorService */],
            __WEBPACK_IMPORTED_MODULE_3__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], VenueEditorDialogComponent);
    return VenueEditorDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_4__venue_editor_component__["a" /* VenueEditorComponent */]));



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_city_select__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__venue_editor_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VenueEditorComponent = /** @class */ (function () {
    function VenueEditorComponent(_venueEditorService, _layoutService, _activatedRoute, _router, _changeDetectorRef) {
        this._venueEditorService = _venueEditorService;
        this._layoutService = _layoutService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._changeDetectorRef = _changeDetectorRef;
        this.LABELS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["e" /* PATTERNS */];
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // todo: create service method getDefaultVenue
        this.venue = { id: "", city: __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_city_select__["b" /* City */].Spb, name: "", address: "", mapUrl: "" };
        this.editMode = true;
        this.isDialog = false;
        this._subs = [];
    }
    VenueEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .subscribe(function (params) {
                if (typeof params.venueId === "string" && params.venueId.length > 0) {
                    _this._venueEditorService.fetchVenue(params.venueId);
                }
                else {
                    _this.editMode = false;
                }
            }),
            this._venueEditorService.venue$
                .subscribe(function (venue) {
                _this.venue = venue;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    VenueEditorComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    VenueEditorComponent.prototype.save = function (cb) {
        var _this = this;
        if (this.editMode) {
            this._venueEditorService.updateVenue(this.venue, function () {
                _this.saved.emit(_this.venue);
                if (cb) {
                    cb(_this.venue);
                }
            });
        }
        else {
            cb = cb || (function (venue) {
                _this._router.navigateByUrl("venue-editor" + (venue ? "/" + venue.id : ""));
            });
            this._venueEditorService.addVenue(this.venue, cb);
        }
    };
    VenueEditorComponent.prototype.reset = function () {
        this._venueEditorService.reset();
    };
    VenueEditorComponent.prototype.close = function () {
        console.warn(this.constructor.name + " => close");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VenueEditorComponent.prototype, "saved", void 0);
    VenueEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_4__venue_editor_service__["a" /* VenueEditorService */]],
            selector: "mtp-venue-editor",
            styles: [__webpack_require__(63)],
            template: __webpack_require__(60),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__venue_editor_service__["a" /* VenueEditorService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], VenueEditorComponent);
    return VenueEditorComponent;
}());



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VenueEditorService = /** @class */ (function () {
    function VenueEditorService(_layoutService, _httpService) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._venue$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this._dataStore = {
            venue: {},
        };
    }
    Object.defineProperty(VenueEditorService.prototype, "venue$", {
        get: function () {
            return this._venue$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    VenueEditorService.prototype.hasChanges = function (venue) {
        return JSON.stringify(venue) !== JSON.stringify(this._dataStore.venue);
    };
    VenueEditorService.prototype.fetchVenue = function (venueId) {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getVenueUrl.replace("{{venueId}}", venueId), function (venue) {
            _this._dataStore.venue = venue;
            _this._venue$.next(Object.assign({}, _this._dataStore.venue));
        });
    };
    VenueEditorService.prototype.addVenue = function (venue, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].addVenueUrl, venue, function (res) {
            _this._layoutService.showInfo("Площадка добавлена успешно");
            cb(res);
        });
    };
    VenueEditorService.prototype.updateVenue = function (venue, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].updateVenueUrl, venue, function (x) {
            _this._layoutService.showInfo("Площадка изменена успешно");
            _this._dataStore.venue = x;
            _this._venue$.next(Object.assign({}, _this._dataStore.venue));
            cb();
        });
    };
    VenueEditorService.prototype.reset = function () {
        this._venue$.next(Object.assign({}, this._dataStore.venue));
    };
    VenueEditorService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], VenueEditorService);
    return VenueEditorService;
}());



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        var _this = this;
        this.title = "";
        this.iconName = "";
        this.iconText = "";
        this.data = [];
        this.clearOnSelect = false;
        this.selected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iconClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.queryControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](undefined);
        this.data$ = this.queryControl.valueChanges
            .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (val) { return typeof val === "string"; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(300), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (query) {
            var searchPhrases = (query || "")
                .toLowerCase()
                .replace(/\s+/, " ")
                .split(" ")
                .map(function (x) { return x.replace(/[^а-яёa-z\d]/gi, ""); });
            return _this.data.filter(function (x) {
                var lowerName = x.name.toLowerCase();
                var ix = 0;
                for (var _i = 0, searchPhrases_1 = searchPhrases; _i < searchPhrases_1.length; _i++) {
                    var searchPhrase = searchPhrases_1[_i];
                    // important order
                    ix = lowerName /* .substring(ix) */.indexOf(searchPhrase);
                    if (ix < 0) {
                        return false;
                    }
                }
                return true;
            });
        }));
    }
    AutocompleteComponent.prototype.onSelected = function (row) {
        this.queryControl.patchValue(row.name);
        this.selected.emit(row);
        if (this.clearOnSelect === true) {
            this.queryControl.markAsPristine();
            this.queryControl.markAsUntouched();
            if (this.queryInput) {
                this.queryInput.value = "";
            }
            this.queryControl.setValue(null);
        }
    };
    AutocompleteComponent.prototype.onIconClick = function () {
        this.iconClicked.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "iconName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AutocompleteComponent.prototype, "iconText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AutocompleteComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AutocompleteComponent.prototype, "clearOnSelect", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AutocompleteComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AutocompleteComponent.prototype, "iconClicked", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("queryInput"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["MatInput"])
    ], AutocompleteComponent.prototype, "queryInput", void 0);
    AutocompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-autocomplete",
            template: __webpack_require__(139),
        }),
        __metadata("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitySelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CitySelectComponent = /** @class */ (function () {
    function CitySelectComponent() {
        this.CITIES = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* CITIES */];
        this._value = __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* City */].Spb;
        this._changed = new Array();
        this._touched = new Array();
    }
    CitySelectComponent_1 = CitySelectComponent;
    Object.defineProperty(CitySelectComponent.prototype, "readonly", {
        set: function (newValue) {
            if (newValue === true) {
                this.CITIES = [this._value];
            }
            else {
                this.CITIES = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* CITIES */];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CitySelectComponent.prototype, "value", {
        get: function () { return this._value; },
        set: function (newValue) {
            if (newValue && newValue !== this._value) {
                this._value = newValue;
                this._changed.forEach(function (f) { return f(newValue); });
            }
        },
        enumerable: true,
        configurable: true
    });
    CitySelectComponent.prototype.touch = function () {
        this._touched.forEach(function (f) { return f(); });
    };
    CitySelectComponent.prototype.writeValue = function (newValue) {
        this._value = newValue;
    };
    CitySelectComponent.prototype.registerOnChange = function (fn) {
        this._changed.push(fn);
    };
    CitySelectComponent.prototype.registerOnTouched = function (fn) {
        this._touched.push(fn);
    };
    var CitySelectComponent_1;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CitySelectComponent.prototype, "readonly", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CitySelectComponent.prototype, "value", null);
    CitySelectComponent = CitySelectComponent_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: CitySelectComponent_1, multi: true },
            ],
            selector: "mtp-city-select",
            styles: [__webpack_require__(149)],
            template: __webpack_require__(140),
        })
    ], CitySelectComponent);
    return CitySelectComponent;
}());



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__city_select_component__ = __webpack_require__(55);
/* unused harmony reexport CitySelectComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__city_select_module__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__city_select_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__enums__["a"]; });





/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectionReason; });
var RejectionReason;
(function (RejectionReason) {
    RejectionReason[RejectionReason["FileType"] = 1] = "FileType";
    RejectionReason[RejectionReason["FileSize"] = 2] = "FileSize";
})(RejectionReason || (RejectionReason = {}));


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<form #speakerForm=\"ngForm\"\n      class=\"base-component-container\">\n\n    <pre>{{ speaker.lastUpdateDate | json }}</pre>\n\n    <div class=\"actions__space-between\">\n        <span class=\"text bold no-wrap\">{{ editMode ? 'Редактирование' : 'Добавление' }} докладчика</span>\n        <div class=\"actions\">\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    *ngIf=\"editMode\"\n                    (click)=\"reset()\">\n                <mat-icon>close</mat-icon>\n                <span>Сбросить</span>\n            </button>\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    [disabled]=\"speakerForm.invalid\"\n                    (click)=\"save()\">\n                <mat-icon>{{ editMode ? 'save' : 'add' }}</mat-icon>\n                <span>{{ editMode ? 'Сохранить' : 'Добавить' }}</span>\n            </button>\n            <button *ngIf=\"isDialog\"\n                    type=\"button\"\n                    color=\"primary\"\n                    mat-icon-button\n                    (click)=\"close()\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"image-container\"\n         *ngIf=\"editMode\">\n        <img class=\"avatar\"\n             [src]=\"speaker.id | speakerImageUrl\">\n        <mtp-file-dialog [accept]=\"AVATAR_MIME_TYPES\"\n                         [maxFileSize]=\"AVATAR_MAX_SIZE\"\n                         (filesAccepted)=\"onFilesAccepted($event)\"\n                         (filesRejected)=\"onFilesRejected($event)\"></mtp-file-dialog>\n    </div>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"speakerId\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #speakerId=\"ngModel\"\n               [(ngModel)]=\"speaker.id\">\n        <mat-error *ngIf=\"speakerId.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"speakerId.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"speakerName\"\n               matInput\n               [placeholder]=\"LABELS.NAME\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #speakerName=\"ngModel\"\n               [(ngModel)]=\"speaker.name\">\n        <mat-error *ngIf=\"speakerName.getError('required')\">\n            {{ LABELS.NAME | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"speakerName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"companyName\"\n               matInput\n               [placeholder]=\"LABELS.COMPANY\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #companyName=\"ngModel\"\n               [(ngModel)]=\"speaker.companyName\">\n        <mat-error *ngIf=\"companyName.getError('required')\">\n            {{ LABELS.COMPANY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"companyName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"companyUrl\"\n               matInput\n               [placeholder]=\"LABELS.COMPANY_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #companyUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.companyUrl\">\n        <mat-error *ngIf=\"companyUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea name=\"description\"\n                  matInput\n                  [cdkTextareaAutosize]=\"true\"\n                  [cdkAutosizeMinRows]=\"2\"\n                  [placeholder]=\"LABELS.DESCRIPTION\"\n                  required\n                  [pattern]=\"PATTERNS.REQUIRED_STRING\"\n                  #description=\"ngModel\"\n                  [(ngModel)]=\"speaker.description\"></textarea>\n        <mat-error *ngIf=\"description.getError('required')\">\n            {{ LABELS.DESCRIPTION | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"description.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"blogUrl\"\n               matInput\n               [placeholder]=\"LABELS.BLOG_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #blogUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.blogUrl\">\n        <mat-error *ngIf=\"blogUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"contactsUrl\"\n               matInput\n               [placeholder]=\"LABELS.CONTACTS_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #contactsUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.contactsUrl\">\n        <mat-error *ngIf=\"contactsUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"twitterUrl\"\n               matInput\n               [placeholder]=\"LABELS.TWITTER_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #twitterUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.twitterUrl\">\n        <mat-error *ngIf=\"twitterUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"habrUrl\"\n               matInput\n               [placeholder]=\"LABELS.HABR_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #habrUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.habrUrl\">\n        <mat-error *ngIf=\"habrUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"gitHubUrl\"\n               matInput\n               [placeholder]=\"LABELS.GIT_HUB_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #gitHubUrl=\"ngModel\"\n               [(ngModel)]=\"speaker.gitHubUrl\">\n        <mat-error *ngIf=\"gitHubUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n</form>";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<form #talkForm=\"ngForm\"\n      class=\"base-component-container\">\n\n    <div class=\"actions__space-between\">\n        <span class=\"text bold no-wrap\">{{ editMode ? 'Редактирование' : 'Добавление' }} доклада</span>\n        <div class=\"actions\">\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    *ngIf=\"editMode\"\n                    (click)=\"reset()\">\n                <mat-icon>close</mat-icon>\n                <span>Сбросить</span>\n            </button>\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    [disabled]=\"talkForm.invalid\"\n                    (click)=\"save()\">\n                <mat-icon>{{ editMode ? 'save' : 'add' }}</mat-icon>\n                <span>{{ editMode ? 'Сохранить' : 'Добавить' }}</span>\n            </button>\n            <button *ngIf=\"isDialog\"\n                    type=\"button\"\n                    color=\"primary\"\n                    mat-icon-button\n                    (click)=\"close()\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"talkId\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #talkId=\"ngModel\"\n               [(ngModel)]=\"talk.id\">\n        <mat-error *ngIf=\"talkId.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"talkId.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"talkTitle\"\n               matInput\n               [placeholder]=\"LABELS.TITLE\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #talkTitle=\"ngModel\"\n               [(ngModel)]=\"talk.title\">\n        <mat-error *ngIf=\"talkTitle.getError('required')\">\n            {{ LABELS.TITLE | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"talkTitle.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-card>\n        <mtp-speaker-list *ngFor=\"let rel of talk.speakerIds; let idx = index\"\n                          [title]=\"'Докладчик №' + (idx+1)\"\n                          [iconName]=\"'delete_forever'\"\n                          [iconText]=\"'Убрать'\"\n                          [speakerLink]=\"rel\"\n                          (selected)=\"onSpeakerSelected($event, idx)\"\n                          (iconClicked)=\"removeSpeaker(idx)\"></mtp-speaker-list>\n        <div class=\"actions__space-between\">\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    (click)=\"addSpeaker()\">\n                <mat-icon>person_add</mat-icon>\n                <span *ngIf=\"talk.speakerIds.length === 0\">Добавить докладчика</span>\n                <span *ngIf=\"talk.speakerIds.length === 1\">Это парный доклад</span>\n                <span *ngIf=\"talk.speakerIds.length === 2\">Это тройничок</span>\n                <span *ngIf=\"talk.speakerIds.length >=3\">Это круглый стол</span>\n            </button>\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    (click)=\"createSpeaker()\">\n                <mat-icon>fiber_new</mat-icon>\n                <span>Создать докладчика</span>\n            </button>\n        </div>\n    </mat-card>\n\n    <mat-form-field>\n        <textarea name=\"description\"\n                  matInput\n                  [cdkTextareaAutosize]=\"true\"\n                  [placeholder]=\"LABELS.DESCRIPTION\"\n                  required\n                  [pattern]=\"PATTERNS.REQUIRED_STRING\"\n                  #description=\"ngModel\"\n                  [(ngModel)]=\"talk.description\"></textarea>\n        <mat-error *ngIf=\"description.getError('required')\">\n            {{ LABELS.DESCRIPTION | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"description.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"codeUrl\"\n               matInput\n               [placeholder]=\"LABELS.CODE_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #codeUrl=\"ngModel\"\n               [(ngModel)]=\"talk.codeUrl\">\n        <mat-error *ngIf=\"codeUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"slidesUrl\"\n               matInput\n               [placeholder]=\"LABELS.SLIDES_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #slidesUrl=\"ngModel\"\n               [(ngModel)]=\"talk.slidesUrl\">\n        <mat-error *ngIf=\"slidesUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"videoUrl\"\n               matInput\n               [placeholder]=\"LABELS.VIDEO_URL\"\n               [pattern]=\"PATTERNS.URI\"\n               #videoUrl=\"ngModel\"\n               [(ngModel)]=\"talk.videoUrl\">\n        <mat-error *ngIf=\"videoUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n</form>";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<form #venueForm=\"ngForm\"\n      class=\"base-component-container\">\n\n    <div class=\"actions__space-between\">\n        <span class=\"text bold no-wrap\">{{ editMode ? 'Редактирование' : 'Добавление' }} площадки</span>\n        <div class=\"actions\">\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    *ngIf=\"editMode\"\n                    (click)=\"reset()\">\n                <mat-icon>close</mat-icon>\n                <span>Сбросить</span>\n            </button>\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    [disabled]=\"venueForm.invalid\"\n                    (click)=\"save()\">\n                <mat-icon>{{ editMode ? 'save' : 'add' }}</mat-icon>\n                <span>{{ editMode ? 'Сохранить' : 'Добавить' }}</span>\n            </button>\n            <button *ngIf=\"isDialog\"\n                    type=\"button\"\n                    color=\"primary\"\n                    mat-icon-button\n                    (click)=\"close()\">\n                <mat-icon>close</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <mtp-city-select name=\"city\"\n                     [readonly]=\"editMode\"\n                     [(ngModel)]=\"venue.city\"></mtp-city-select>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"venueId\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #venueId=\"ngModel\"\n               [(ngModel)]=\"venue.id\">\n        <mat-error *ngIf=\"venueId.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"venueId.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"venueName\"\n               matInput\n               [placeholder]=\"LABELS.TITLE\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #venueName=\"ngModel\"\n               [(ngModel)]=\"venue.name\">\n        <mat-error *ngIf=\"venueName.getError('required')\">\n            {{ LABELS.TITLE | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"venueName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea name=\"address\"\n                  matInput\n                  [cdkTextareaAutosize]=\"true\"\n                  [placeholder]=\"LABELS.ADDRESS\"\n                  required\n                  [pattern]=\"PATTERNS.REQUIRED_STRING\"\n                  #address=\"ngModel\"\n                  [(ngModel)]=\"venue.address\"></textarea>\n        <mat-error *ngIf=\"address.getError('required')\">\n            {{ LABELS.ADDRESS | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"address.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"mapUrl\"\n               matInput\n               [placeholder]=\"LABELS.MAP_URL\"\n               required\n               [pattern]=\"PATTERNS.URI\"\n               #mapUrl=\"ngModel\"\n               [(ngModel)]=\"venue.mapUrl\">\n        <mat-error *ngIf=\"mapUrl.getError('required')\">\n            {{ LABELS.MAP_URL | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"mapUrl.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n</form>";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(121);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(122);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(124);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(13);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(6);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(7);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(78);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export getBaseUrl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_module__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["BrowserAnimationsModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_shared_module__["a" /* AppModuleShared */],
            ],
            providers: [
                { provide: "BASE_URL", useFactory: getBaseUrl },
            ],
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return localStorage.getItem("BASE_URL") || "https://server-dotnetru.azurewebsites.net/";
}


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(161), __webpack_require__(160)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(247);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(253);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatMomentDateModule; });
/* unused harmony export MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY */
/* unused harmony export MAT_MOMENT_DATE_ADAPTER_OPTIONS */
/* unused harmony export MomentDateAdapter */
/* unused harmony export MAT_MOMENT_DATE_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = __WEBPACK_IMPORTED_MODULE_3_moment___default.a || __WEBPACK_IMPORTED_MODULE_3_moment__;
/**
 * InjectionToken for moment date adapter to configure options.
 * @type {?}
 */
var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
    providedIn: 'root',
    factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
    return {
        useUtc: false
    };
}
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts Moment.js Dates for use with Angular Material.
 */
var MomentDateAdapter = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(MomentDateAdapter, _super);
    function MomentDateAdapter(dateLocale, options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.setLocale(dateLocale || moment.locale());
        return _this;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    MomentDateAdapter.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        /** @type {?} */
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).year();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).month();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).date();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).day();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
        return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.dates;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    MomentDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        if (style == 'long') {
            return this._localeData.longDaysOfWeek;
        }
        if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
        }
        return this._localeData.narrowDaysOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format('YYYY');
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._localeData.firstDayOfWeek;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).daysInMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.clone().locale(this.locale);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Moment.js will create an invalid date if any of the components are out of bounds, but we
        // explicitly check each case so we can throw more descriptive errors.
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        /** @type {?} */
        var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return this._createMoment().locale(this.locale);
    };
    /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.parse = /**
     * @param {?} value
     * @param {?} parseFormat
     * @return {?}
     */
    function (value, parseFormat) {
        if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
        }
        return value ? this._createMoment(value).locale(this.locale) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    MomentDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        date = this.clone(date);
        if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
        }
        return date.format(displayFormat);
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.clone(date).add({ years: years });
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        return this.clone(date).add({ months: months });
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    MomentDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this.clone(date).add({ days: days });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).format();
    };
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    MomentDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
     * string into null. Returns an invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var date;
        if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
        }
        else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
        }
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
        }
        if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    MomentDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return moment.isMoment(obj);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.clone(date).isValid();
    };
    /**
     * @return {?}
     */
    MomentDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return moment.invalid();
    };
    /** Creates a Moment instance while respecting the current UTC settings. */
    /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @private
     * @param {...?} args
     * @return {?}
     */
    MomentDateAdapter.prototype._createMoment = /**
     * Creates a Moment instance while respecting the current UTC settings.
     * @private
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.options && this.options.useUtc) ? moment.utc.apply(moment, args) : moment.apply(void 0, args);
    };
    MomentDateAdapter.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    MomentDateAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["MAT_DATE_LOCALE"],] }] },
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS,] }] }
    ]; };
    return MomentDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["DateAdapter"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
var MAT_MOMENT_DATE_FORMATS = {
    parse: {
        dateInput: 'l',
    },
    display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MomentDateModule = /** @class */ (function () {
    function MomentDateModule() {
    }
    MomentDateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["DateAdapter"],
                            useClass: MomentDateAdapter,
                            deps: [__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        }
                    ],
                },] },
    ];
    return MomentDateModule;
}());
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var MatMomentDateModule = /** @class */ (function () {
    function MatMomentDateModule() {
    }
    MatMomentDateModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [MomentDateModule],
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["MAT_DATE_FORMATS"], useValue: ɵ0 }],
                },] },
    ];
    return MatMomentDateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=material-moment-adapter.es5.js.map


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MomentDatetimeModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatMomentDatetimeModule; });
/* unused harmony export MomentDatetimeAdapter */
/* unused harmony export MAT_MOMENT_DATETIME_FORMATS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mat_datetimepicker_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_moment_adapter__ = __webpack_require__(72);







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var moment = __WEBPACK_IMPORTED_MODULE_4_moment__;
/**
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    /** @type {?} */
    var valuesArray = Array(length);
    for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
var MomentDatetimeAdapter = /** @class */ (function (_super) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"])(MomentDatetimeAdapter, _super);
    function MomentDatetimeAdapter(matDateLocale, _delegate) {
        var _this = _super.call(this, _delegate) || this;
        _this.setLocale(matDateLocale || moment.locale());
        return _this;
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        _super.prototype.setLocale.call(this, locale);
        /** @type {?} */
        var momentLocaleData = moment.localeData(locale);
        this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31, function (i) { return _super.prototype.createDate.call(_this, 2017, 0, i + 1).format("D"); }),
            hours: range(24, function (i) { return _this.createDatetime(2017, 0, 1, i, 0).format("H"); }),
            minutes: range(60, function (i) { return _this.createDatetime(2017, 0, 1, 1, i).format("m"); }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin()
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getHour = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return _super.prototype.clone.call(this, date).hour();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getMinute = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return _super.prototype.clone.call(this, date).minute();
    };
    /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.isInNextMonth = /**
     * @param {?} startDate
     * @param {?} endDate
     * @return {?}
     */
    function (startDate, endDate) {
        /** @type {?} */
        var nextMonth = this.getDateInNextMonth(startDate);
        return _super.prototype.sameMonthAndYear.call(this, nextMonth, endDate);
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.createDatetime = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    function (year, month, date, hour, minute) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        if (hour < 0 || hour > 23) {
            throw Error("Invalid hour \"" + hour + "\". Hour has to be between 0 and 23.");
        }
        if (minute < 0 || minute > 59) {
            throw Error("Invalid minute \"" + minute + "\". Minute has to be between 0 and 59.");
        }
        /** @type {?} */
        var result = moment({ year: year, month: month, date: date, hour: hour, minute: minute });
        // If the result isn't valid, the date must have been out of bounds for this month.
        if (!result.isValid()) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getDateInNextMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return _super.prototype.clone.call(this, date).date(1).add({ month: 1 });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getFirstDateOfMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return _super.prototype.clone.call(this, date).startOf("month");
    };
    /**
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getHourNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.hours;
    };
    /**
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.getMinuteNames = /**
     * @return {?}
     */
    function () {
        return this._localeData.minutes;
    };
    /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.addCalendarHours = /**
     * @param {?} date
     * @param {?} hours
     * @return {?}
     */
    function (date, hours) {
        return _super.prototype.clone.call(this, date).add({ hours: hours });
    };
    /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.addCalendarMinutes = /**
     * @param {?} date
     * @param {?} minutes
     * @return {?}
     */
    function (date, minutes) {
        return _super.prototype.clone.call(this, date).add({ minutes: minutes });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MomentDatetimeAdapter.prototype.deserialize = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._delegate.deserialize(value);
    };
    MomentDatetimeAdapter.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    MomentDatetimeAdapter.ctorParameters = function () { return [
        { type: String, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_2__angular_material__["MAT_DATE_LOCALE"],] }] },
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_material__["DateAdapter"] }
    ]; };
    return MomentDatetimeAdapter;
}(__WEBPACK_IMPORTED_MODULE_3__mat_datetimepicker_core__["b" /* DatetimeAdapter */]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_MOMENT_DATETIME_FORMATS = {
    parse: {
        dateInput: "L",
        monthInput: "MMMM",
        timeInput: "LT",
        datetimeInput: "L LT"
    },
    display: {
        dateInput: "L",
        monthInput: "MMMM",
        datetimeInput: "L LT",
        timeInput: "LT",
        monthYearLabel: "MMM YYYY",
        dateA11yLabel: "LL",
        monthYearA11yLabel: "MMMM YYYY",
        popupHeaderDateLabel: "ddd, DD MMM"
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MomentDatetimeModule = /** @class */ (function () {
    function MomentDatetimeModule() {
    }
    MomentDatetimeModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_5__angular_material_moment_adapter__["a" /* MomentDateModule */]],
                    providers: [
                        {
                            provide: __WEBPACK_IMPORTED_MODULE_3__mat_datetimepicker_core__["b" /* DatetimeAdapter */],
                            useClass: MomentDatetimeAdapter
                        }
                    ]
                },] },
    ];
    return MomentDatetimeModule;
}());
var ɵ0 = MAT_MOMENT_DATETIME_FORMATS;
var MatMomentDatetimeModule = /** @class */ (function () {
    function MatMomentDatetimeModule() {
    }
    MatMomentDatetimeModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [MomentDatetimeModule, __WEBPACK_IMPORTED_MODULE_5__angular_material_moment_adapter__["b" /* MatMomentDateModule */]],
                    providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__mat_datetimepicker_core__["c" /* MAT_DATETIME_FORMATS */], useValue: ɵ0 }]
                },] },
    ];
    return MatMomentDatetimeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRhdGV0aW1lcGlja2VyLW1vbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9tb21lbnQvYWRhcHRlci9tb21lbnQtZGF0ZXRpbWUtYWRhcHRlci50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9tb21lbnQvYWRhcHRlci9tb21lbnQtZGF0ZXRpbWUtZm9ybWF0cy50cyIsIm5nOi8vQG1hdC1kYXRldGltZXBpY2tlci9tb21lbnQvYWRhcHRlci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIE9wdGlvbmFsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBEYXRlQWRhcHRlcixcbiAgTUFUX0RBVEVfTE9DQUxFXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgRGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIkBtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZVwiO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gXCJtb21lbnRcIjtcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbmZ1bmN0aW9uIHJhbmdlPFQ+KGxlbmd0aDogbnVtYmVyLCB2YWx1ZUZ1bmN0aW9uOiAoaW5kZXg6IG51bWJlcikgPT4gVCk6IFRbXSB7XG4gIGNvbnN0IHZhbHVlc0FycmF5ID0gQXJyYXkobGVuZ3RoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhbHVlc0FycmF5W2ldID0gdmFsdWVGdW5jdGlvbihpKTtcbiAgfVxuICByZXR1cm4gdmFsdWVzQXJyYXk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb21lbnREYXRldGltZUFkYXB0ZXIgZXh0ZW5kcyBEYXRldGltZUFkYXB0ZXI8TW9tZW50PiB7XG5cbiAgcHJpdmF0ZSBfbG9jYWxlRGF0YToge1xuICAgIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIsXG4gICAgbG9uZ01vbnRoczogc3RyaW5nW10sXG4gICAgc2hvcnRNb250aHM6IHN0cmluZ1tdLFxuICAgIGRhdGVzOiBzdHJpbmdbXSxcbiAgICBob3Vyczogc3RyaW5nW10sXG4gICAgbWludXRlczogc3RyaW5nW10sXG4gICAgbG9uZ0RheXNPZldlZWs6IHN0cmluZ1tdLFxuICAgIHNob3J0RGF5c09mV2Vlazogc3RyaW5nW10sXG4gICAgbmFycm93RGF5c09mV2Vlazogc3RyaW5nW11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgbWF0RGF0ZUxvY2FsZTogc3RyaW5nLCBfZGVsZWdhdGU6IERhdGVBZGFwdGVyPE1vbWVudD4pIHtcbiAgICBzdXBlcihfZGVsZWdhdGUpO1xuICAgIHRoaXMuc2V0TG9jYWxlKG1hdERhdGVMb2NhbGUgfHwgbW9tZW50LmxvY2FsZSgpKTtcbiAgfVxuXG4gIHNldExvY2FsZShsb2NhbGU6IHN0cmluZykge1xuICAgIHN1cGVyLnNldExvY2FsZShsb2NhbGUpO1xuXG4gICAgY29uc3QgbW9tZW50TG9jYWxlRGF0YSA9IG1vbWVudC5sb2NhbGVEYXRhKGxvY2FsZSk7XG4gICAgdGhpcy5fbG9jYWxlRGF0YSA9IHtcbiAgICAgIGZpcnN0RGF5T2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLmZpcnN0RGF5T2ZXZWVrKCksXG4gICAgICBsb25nTW9udGhzOiBtb21lbnRMb2NhbGVEYXRhLm1vbnRocygpLFxuICAgICAgc2hvcnRNb250aHM6IG1vbWVudExvY2FsZURhdGEubW9udGhzU2hvcnQoKSxcbiAgICAgIGRhdGVzOiByYW5nZSgzMSwgKGkpID0+IHN1cGVyLmNyZWF0ZURhdGUoMjAxNywgMCwgaSArIDEpLmZvcm1hdChcIkRcIikpLFxuICAgICAgaG91cnM6IHJhbmdlKDI0LCAoaSkgPT4gdGhpcy5jcmVhdGVEYXRldGltZSgyMDE3LCAwLCAxLCBpLCAwKS5mb3JtYXQoXCJIXCIpKSxcbiAgICAgIG1pbnV0ZXM6IHJhbmdlKDYwLCAoaSkgPT4gdGhpcy5jcmVhdGVEYXRldGltZSgyMDE3LCAwLCAxLCAxLCBpKS5mb3JtYXQoXCJtXCIpKSxcbiAgICAgIGxvbmdEYXlzT2ZXZWVrOiBtb21lbnRMb2NhbGVEYXRhLndlZWtkYXlzKCksXG4gICAgICBzaG9ydERheXNPZldlZWs6IG1vbWVudExvY2FsZURhdGEud2Vla2RheXNTaG9ydCgpLFxuICAgICAgbmFycm93RGF5c09mV2VlazogbW9tZW50TG9jYWxlRGF0YS53ZWVrZGF5c01pbigpXG4gICAgfTtcbiAgfVxuXG4gIGdldEhvdXIoZGF0ZTogTW9tZW50KTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3VwZXIuY2xvbmUoZGF0ZSkuaG91cigpO1xuICB9XG5cbiAgZ2V0TWludXRlKGRhdGU6IE1vbWVudCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLm1pbnV0ZSgpO1xuICB9XG5cbiAgaXNJbk5leHRNb250aChzdGFydERhdGU6IE1vbWVudCwgZW5kRGF0ZTogTW9tZW50KTogYm9vbGVhbiB7XG4gICAgY29uc3QgbmV4dE1vbnRoID0gdGhpcy5nZXREYXRlSW5OZXh0TW9udGgoc3RhcnREYXRlKTtcbiAgICByZXR1cm4gc3VwZXIuc2FtZU1vbnRoQW5kWWVhcihuZXh0TW9udGgsIGVuZERhdGUpO1xuICB9XG5cbiAgY3JlYXRlRGF0ZXRpbWUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXRlOiBudW1iZXIsIGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBNb21lbnQge1xuICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIG1vbnRoIGFuZCBkYXRlIChleGNlcHQgdXBwZXIgYm91bmQgb24gZGF0ZSB3aGljaCB3ZSBoYXZlIHRvIGNoZWNrIGFmdGVyXG4gICAgLy8gY3JlYXRpbmcgdGhlIERhdGUpLlxuICAgIGlmIChtb250aCA8IDAgfHwgbW9udGggPiAxMSkge1xuICAgICAgdGhyb3cgRXJyb3IoYEludmFsaWQgbW9udGggaW5kZXggXCIke21vbnRofVwiLiBNb250aCBpbmRleCBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAxMS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0ZSA8IDEpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGRhdGUgXCIke2RhdGV9XCIuIERhdGUgaGFzIHRvIGJlIGdyZWF0ZXIgdGhhbiAwLmApO1xuICAgIH1cblxuICAgIGlmIChob3VyIDwgMCB8fCBob3VyID4gMjMpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIGhvdXIgXCIke2hvdXJ9XCIuIEhvdXIgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgMjMuYCk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZSA8IDAgfHwgbWludXRlID4gNTkpIHtcbiAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIG1pbnV0ZSBcIiR7bWludXRlfVwiLiBNaW51dGUgaGFzIHRvIGJlIGJldHdlZW4gMCBhbmQgNTkuYCk7XG4gICAgfVxuXG4gICAgLy8gY29uc3QgcmVzdWx0ID0gbW9tZW50KHt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlfSkubG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgICBjb25zdCByZXN1bHQgPSBtb21lbnQoe3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGV9KTtcblxuICAgIC8vIElmIHRoZSByZXN1bHQgaXNuJ3QgdmFsaWQsIHRoZSBkYXRlIG11c3QgaGF2ZSBiZWVuIG91dCBvZiBib3VuZHMgZm9yIHRoaXMgbW9udGguXG4gICAgaWYgKCFyZXN1bHQuaXNWYWxpZCgpKSB7XG4gICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBkYXRlIFwiJHtkYXRlfVwiIGZvciBtb250aCB3aXRoIGluZGV4IFwiJHttb250aH1cIi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRlSW5OZXh0TW9udGgoZGF0ZTogTW9tZW50KSB7XG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmRhdGUoMSkuYWRkKHttb250aDogMX0pO1xuICB9XG5cbiAgZ2V0Rmlyc3REYXRlT2ZNb250aChkYXRlOiBNb21lbnQpOiBNb21lbnQge1xuICAgIHJldHVybiBzdXBlci5jbG9uZShkYXRlKS5zdGFydE9mKFwibW9udGhcIik7XG4gIH1cblxuICBnZXRIb3VyTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLmhvdXJzO1xuICB9XG5cbiAgZ2V0TWludXRlTmFtZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9sb2NhbGVEYXRhLm1pbnV0ZXM7XG4gIH1cblxuICBhZGRDYWxlbmRhckhvdXJzKGRhdGU6IE1vbWVudCwgaG91cnM6IG51bWJlcik6IE1vbWVudCB7XG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmFkZCh7aG91cnN9KTtcbiAgfVxuXG4gIGFkZENhbGVuZGFyTWludXRlcyhkYXRlOiBNb21lbnQsIG1pbnV0ZXM6IG51bWJlcik6IE1vbWVudCB7XG4gICAgcmV0dXJuIHN1cGVyLmNsb25lKGRhdGUpLmFkZCh7bWludXRlc30pO1xuICB9XG5cbiAgZGVzZXJpYWxpemUodmFsdWU6IGFueSk6IE1vbWVudCB8IG51bGwge1xuICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGUuZGVzZXJpYWxpemUodmFsdWUpO1xuICAgfVxufVxuIiwiaW1wb3J0IHsgTWF0RGF0ZXRpbWVGb3JtYXRzIH0gZnJvbSBcIkBtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZVwiO1xuXG5leHBvcnQgY29uc3QgTUFUX01PTUVOVF9EQVRFVElNRV9GT1JNQVRTOiBNYXREYXRldGltZUZvcm1hdHMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiBcIkxcIixcbiAgICBtb250aElucHV0OiBcIk1NTU1cIixcbiAgICB0aW1lSW5wdXQ6IFwiTFRcIixcbiAgICBkYXRldGltZUlucHV0OiBcIkwgTFRcIlxuICB9LFxuICBkaXNwbGF5OiB7XG4gICAgZGF0ZUlucHV0OiBcIkxcIixcbiAgICBtb250aElucHV0OiBcIk1NTU1cIixcbiAgICBkYXRldGltZUlucHV0OiBcIkwgTFRcIixcbiAgICB0aW1lSW5wdXQ6IFwiTFRcIixcbiAgICBtb250aFllYXJMYWJlbDogXCJNTU0gWVlZWVwiLFxuICAgIGRhdGVBMTF5TGFiZWw6IFwiTExcIixcbiAgICBtb250aFllYXJBMTF5TGFiZWw6IFwiTU1NTSBZWVlZXCIsXG4gICAgcG9wdXBIZWFkZXJEYXRlTGFiZWw6IFwiZGRkLCBERCBNTU1cIlxuICB9XG59O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgTWF0TW9tZW50RGF0ZU1vZHVsZSxcbiAgTW9tZW50RGF0ZU1vZHVsZVxufSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXJcIjtcbmltcG9ydCB7XG4gIERhdGV0aW1lQWRhcHRlcixcbiAgTUFUX0RBVEVUSU1FX0ZPUk1BVFNcbn0gZnJvbSBcIkBtYXQtZGF0ZXRpbWVwaWNrZXIvY29yZVwiO1xuaW1wb3J0IHsgTW9tZW50RGF0ZXRpbWVBZGFwdGVyIH0gZnJvbSBcIi4vbW9tZW50LWRhdGV0aW1lLWFkYXB0ZXJcIjtcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURVRJTUVfRk9STUFUUyB9IGZyb20gXCIuL21vbWVudC1kYXRldGltZS1mb3JtYXRzXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL21vbWVudC1kYXRldGltZS1hZGFwdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb21lbnQtZGF0ZXRpbWUtZm9ybWF0c1wiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTW9tZW50RGF0ZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IERhdGV0aW1lQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRldGltZUFkYXB0ZXJcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9tZW50RGF0ZXRpbWVNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTW9tZW50RGF0ZXRpbWVNb2R1bGUsIE1hdE1vbWVudERhdGVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTUFUX0RBVEVUSU1FX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVUSU1FX0ZPUk1BVFN9XVxufSlcbmV4cG9ydCBjbGFzcyBNYXRNb21lbnREYXRldGltZU1vZHVsZSB7XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWFBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQzs7Ozs7OztBQUV2QixlQUFrQixNQUFjLEVBQUUsYUFBbUM7O0lBQ25FLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7SUFDRCxPQUFPLFdBQVcsQ0FBQztDQUNwQjs7SUFHMENBLHlDQUF1QjtJQWNoRSwrQkFBaUQsYUFBcUIsRUFBRSxTQUE4QjtRQUF0RyxZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUVqQjtRQURDLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztLQUNsRDs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUF4QixpQkFlQztRQWRDLGlCQUFNLFNBQVMsWUFBQyxNQUFNLENBQUMsQ0FBQzs7UUFFeEIsSUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsY0FBYyxFQUFFLGdCQUFnQixDQUFDLGNBQWMsRUFBRTtZQUNqRCxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ3JDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7WUFDM0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxpQkFBTSxVQUFVLGFBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUM7WUFDckUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUEsQ0FBQztZQUMxRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxVQUFDLENBQUMsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDO1lBQzVFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFDM0MsZUFBZSxFQUFFLGdCQUFnQixDQUFDLGFBQWEsRUFBRTtZQUNqRCxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7U0FDakQsQ0FBQztLQUNIOzs7OztJQUVELHVDQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2xCLE9BQU8saUJBQU0sS0FBSyxZQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pDOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxJQUFZO1FBQ3BCLE9BQU8saUJBQU0sS0FBSyxZQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ25DOzs7Ozs7SUFFRCw2Q0FBYTs7Ozs7SUFBYixVQUFjLFNBQWlCLEVBQUUsT0FBZTs7UUFDOUMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8saUJBQU0sZ0JBQWdCLFlBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ25EOzs7Ozs7Ozs7SUFFRCw4Q0FBYzs7Ozs7Ozs7SUFBZCxVQUFlLElBQVksRUFBRSxLQUFhLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxNQUFjOzs7UUFHcEYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDM0IsTUFBTSxLQUFLLENBQUMsMkJBQXdCLEtBQUssZ0RBQTRDLENBQUMsQ0FBQztTQUN4RjtRQUVELElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE1BQU0sS0FBSyxDQUFDLG9CQUFpQixJQUFJLHVDQUFtQyxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUN6QixNQUFNLEtBQUssQ0FBQyxvQkFBaUIsSUFBSSx5Q0FBcUMsQ0FBQyxDQUFDO1NBQ3pFO1FBRUQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxLQUFLLENBQUMsc0JBQW1CLE1BQU0sMkNBQXVDLENBQUMsQ0FBQztTQUMvRTs7UUFHRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBQyxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDLENBQUM7O1FBR3pELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsTUFBTSxLQUFLLENBQUMsb0JBQWlCLElBQUksa0NBQTJCLEtBQUssUUFBSSxDQUFDLENBQUM7U0FDeEU7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7OztJQUVPLGtEQUFrQjs7OztjQUFDLElBQVk7UUFDckMsT0FBTyxpQkFBTSxLQUFLLFlBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHbkQsbURBQW1COzs7O0lBQW5CLFVBQW9CLElBQVk7UUFDOUIsT0FBTyxpQkFBTSxLQUFLLFlBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztLQUMvQjs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7S0FDakM7Ozs7OztJQUVELGdEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsSUFBWSxFQUFFLEtBQWE7UUFDMUMsT0FBTyxpQkFBTSxLQUFLLFlBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7SUFFRCxrREFBa0I7Ozs7O0lBQWxCLFVBQW1CLElBQVksRUFBRSxPQUFlO1FBQzlDLE9BQU8saUJBQU0sS0FBSyxZQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sU0FBQSxFQUFDLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksS0FBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFDOztnQkExR0gsVUFBVTs7Ozs2Q0FlSSxRQUFRLFlBQUksTUFBTSxTQUFDLGVBQWU7Z0JBaEMvQyxXQUFXOztnQ0FOYjtFQXdCMkMsZUFBZTs7Ozs7OztBQ3RCMUQsSUFBYSwyQkFBMkIsR0FBdUI7SUFDN0QsS0FBSyxFQUFFO1FBQ0wsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsTUFBTTtRQUNsQixTQUFTLEVBQUUsSUFBSTtRQUNmLGFBQWEsRUFBRSxNQUFNO0tBQ3RCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxFQUFFLEdBQUc7UUFDZCxVQUFVLEVBQUUsTUFBTTtRQUNsQixhQUFhLEVBQUUsTUFBTTtRQUNyQixTQUFTLEVBQUUsSUFBSTtRQUNmLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7UUFDL0Isb0JBQW9CLEVBQUUsYUFBYTtLQUNwQztDQUNGOzs7Ozs7QUNuQkQ7Ozs7Z0JBZUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUMzQixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7eUJBQ2hDO3FCQUNGO2lCQUNGOzsrQkF2QkQ7O1NBNkJ3RCwyQkFBMkI7Ozs7O2dCQUZsRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3BELFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsSUFBNkIsRUFBQyxDQUFDO2lCQUNwRjs7a0NBOUJEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleShared; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_pages_friend_editor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dotnetru_pages_meetup_editor__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dotnetru_pages_search__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dotnetru_pages_speaker_editor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dotnetru_pages_talk_editor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dotnetru_pages_timepad__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dotnetru_pages_venue_editor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dotnetru_speaker_list__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navmenu_navmenu_module__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_toolbar_toolbar_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_search_component__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModuleShared = /** @class */ (function () {
    function AppModuleShared() {
    }
    AppModuleShared = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatSidenavModule"],
                __WEBPACK_IMPORTED_MODULE_17__components_toolbar_toolbar_module__["a" /* ToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_navmenu_navmenu_module__["a" /* NavMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_13__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_9__dotnetru_pages_speaker_editor__["a" /* SpeakerEditorModule */],
                __WEBPACK_IMPORTED_MODULE_14__dotnetru_speaker_list__["a" /* SpeakerListModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_pages_friend_editor__["a" /* FriendEditorModule */],
                __WEBPACK_IMPORTED_MODULE_7__dotnetru_pages_meetup_editor__["a" /* MeetupEditorModule */],
                __WEBPACK_IMPORTED_MODULE_10__dotnetru_pages_talk_editor__["a" /* TalkEditorModule */],
                __WEBPACK_IMPORTED_MODULE_12__dotnetru_pages_venue_editor__["a" /* VenueEditorModule */],
                __WEBPACK_IMPORTED_MODULE_11__dotnetru_pages_timepad__["a" /* TimepadModule */],
                __WEBPACK_IMPORTED_MODULE_8__dotnetru_pages_search__["a" /* SearchPageModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot([
                    { path: "", redirectTo: "search", pathMatch: "full" },
                    { path: "search", component: __WEBPACK_IMPORTED_MODULE_18__pages_search_search_component__["a" /* SearchPageComponent */] },
                    { path: "**", redirectTo: "search" },
                ]),
            ],
        })
    ], AppModuleShared);
    return AppModuleShared;
}());



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friend_list_component__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__friend_list_service__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FriendListModule = /** @class */ (function () {
    function FriendListModule() {
    }
    FriendListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__friend_list_component__["a" /* FriendListComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__friend_list_component__["a" /* FriendListComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__friend_list_component__["a" /* FriendListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__friend_list_service__["a" /* FriendListService */],
            ],
        })
    ], FriendListModule);
    return FriendListModule;
}());



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__meetup_list_component__ = __webpack_require__(29);
/* unused harmony reexport MeetupListComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meetup_list_module__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__meetup_list_module__["a"]; });




/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meetup_list_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meetup_list_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MeetupListModule = /** @class */ (function () {
    function MeetupListModule() {
    }
    MeetupListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__meetup_list_component__["a" /* MeetupListComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__meetup_list_component__["a" /* MeetupListComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__meetup_list_component__["a" /* MeetupListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__meetup_list_service__["a" /* MeetupListService */],
            ],
        })
    ], MeetupListModule);
    return MeetupListModule;
}());



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navmenu_module__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navmenu_module__["a"]; });



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "mtp-menu",
            styles: [__webpack_require__(143)],
            template: __webpack_require__(129),
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speaker_list_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SpeakerListModule = /** @class */ (function () {
    function SpeakerListModule() {
    }
    SpeakerListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__speaker_list_component__["a" /* SpeakerListComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__speaker_list_component__["a" /* SpeakerListComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__speaker_list_component__["a" /* SpeakerListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__speaker_list_service__["a" /* SpeakerListService */],
            ],
        })
    ], SpeakerListModule);
    return SpeakerListModule;
}());



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__talk_list_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__talk_list_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TalkListModule = /** @class */ (function () {
    function TalkListModule() {
    }
    TalkListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__talk_list_component__["a" /* TalkListComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__talk_list_component__["a" /* TalkListComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__talk_list_component__["a" /* TalkListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__talk_list_service__["a" /* TalkListService */],
            ],
        })
    ], TalkListModule);
    return TalkListModule;
}());



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(_snackBar, _layoutService, _changeDetectorRef) {
        var _this = this;
        this._snackBar = _snackBar;
        this._layoutService = _layoutService;
        this._changeDetectorRef = _changeDetectorRef;
        this.percentage = 0;
        this.showProgressBar = false;
        this.getProgressMode = function () {
            return !_this.percentage
                ? "indeterminate"
                : (_this.percentage < 100 ? "determinate" : "query");
        };
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._layoutService.messages$.subscribe(function (message) {
            var snackBarConfig = {
                direction: "ltr",
                duration: message.duration,
                horizontalPosition: "center",
                panelClass: "snack-bar-" + message.severity,
                politeness: "assertive",
                verticalPosition: "top",
            };
            _this._snackBar.open(message.text, "Закрыть", snackBarConfig);
        });
        this._layoutService.progress$.subscribe(function (progress) {
            _this.showProgressBar = !!progress;
            _this.percentage = _this.showProgressBar && typeof progress === "number" ? progress : 0;
            _this._changeDetectorRef.detectChanges();
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDrawer"])
    ], ToolbarComponent.prototype, "drawer", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-toolbar",
            styles: [__webpack_require__(144)],
            template: __webpack_require__(132),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["MatSnackBar"],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_navmenu__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toolbar_component__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ToolbarModule = /** @class */ (function () {
    function ToolbarModule() {
    }
    ToolbarModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__toolbar_component__["a" /* ToolbarComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__toolbar_component__["a" /* ToolbarComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__dotnetru_navmenu__["a" /* NavMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatSnackBarModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatToolbarModule"],
            ],
        })
    ], ToolbarModule);
    return ToolbarModule;
}());



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__venue_list_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__venue_list_service__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VenueListModule = /** @class */ (function () {
    function VenueListModule() {
    }
    VenueListModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__venue_list_component__["a" /* VenueListComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__venue_list_component__["a" /* VenueListComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__venue_list_component__["a" /* VenueListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_shared_autocomplete__["a" /* AutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__venue_list_service__["a" /* VenueListService */],
            ],
        })
    ], VenueListModule);
    return VenueListModule;
}());



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ENDPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PATTERNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MIME_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FILE_SIZES; });
var API_ENDPOINTS = {
    addFriendUrl: "api/Friend/AddFriend",
    addMeetupUrl: "api/Meetup/AddMeetup",
    addSpeakerUrl: "api/Speaker/AddSpeaker",
    addTalkUrl: "api/Talk/AddTalk",
    addVenueUrl: "api/Venue/AddVenue",
    getCompositeMeetupUrl: "api/Composite/GetMeetup/{{meetupId}}",
    saveCompositeMeetupUrl: "api/Composite/SaveMeetup/{{meetupId}}",
    getFriendUrl: "api/Friend/GetFriend/{{friendId}}",
    getFriendsUrl: "api/Friend/GetFriends",
    getMeetupUrl: "api/Meetup/GetMeetup/{{meetupId}}",
    getMeetupsUrl: "api/Meetup/GetMeetups",
    getSpeakerUrl: "api/Speaker/GetSpeaker/{{speakerId}}",
    getSpeakersUrl: "api/Speaker/GetSpeakers",
    getTalkUrl: "api/Talk/GetTalk/{{talkId}}",
    getTalksUrl: "api/Talk/GetTalks",
    getVenueUrl: "api/Venue/GetVenue/{{venueId}}",
    getVenuesUrl: "api/Venue/GetVenues",
    storeFriendAvatarUrl: "api/File/StoreFriendAvatar/{{friendId}}",
    storeSpeakerAvatarUrl: "api/File/StoreSpeakerAvatar/{{speakerId}}",
    updateFriendUrl: "api/Friend/UpdateFriend",
    updateMeetupUrl: "api/Meetup/UpdateMeetup",
    updateSpeakerUrl: "api/Speaker/UpdateSpeaker",
    updateTalkUrl: "api/Talk/UpdateTalk",
    updateVenueUrl: "api/Venue/UpdateVenue",
};
var LABELS = {
    ADDRESS: "Адрес",
    BLOG_URL: "Ссылка на блог",
    CODE_URL: "Ссылка на код",
    COMPANY: "Компания",
    COMPANY_URL: "Сайт компании",
    CONTACTS_URL: "Ссылка на контакты",
    DESCRIPTION: "Описание",
    GIT_HUB_URL: "Ссылка на GitHub",
    HABR_URL: "Ссылка на хабр",
    IDENTITY: "Идентификатор",
    MAP_URL: "Ссылка на карту",
    NAME: "Имя",
    SLIDES_URL: "Ссылка на слайды",
    TITLE: "Название",
    TWITTER_URL: "Ссылка на твиттер",
    URL: "Ссылка",
    VIDEO_URL: "Ссылка на видео",
};
var PATTERNS = {
    IDENTITY: "^[A-Z][\\w-]{2,}$",
    REQUIRED_STRING: "^\\S[\\s\\S]*\\S$",
    URI: "^https?://.+\\..+$",
};
var MIME_TYPES = {
    JPEG: "image/jpeg",
    PNG: "image/png",
};
var FILE_SIZES = {
    AVATAR_MAX_SIZE: 40000,
};


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_converter_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datetime_pipe__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pattern_error_message_pipe__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__required_error_message_pipe__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* DatetimePipe */],
                __WEBPACK_IMPORTED_MODULE_5__pattern_error_message_pipe__["a" /* PatternErrorMessagePipe */],
                __WEBPACK_IMPORTED_MODULE_6__required_error_message_pipe__["a" /* RequiredErrorMessagePipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__datetime_pipe__["a" /* DatetimePipe */],
                __WEBPACK_IMPORTED_MODULE_5__pattern_error_message_pipe__["a" /* PatternErrorMessagePipe */],
                __WEBPACK_IMPORTED_MODULE_6__required_error_message_pipe__["a" /* RequiredErrorMessagePipe */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__date_converter_service__["a" /* DateConverterService */],
                __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */],
                __WEBPACK_IMPORTED_MODULE_4__layout_service__["a" /* LayoutService */],
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__date_converter_service__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DatetimePipe = /** @class */ (function () {
    function DatetimePipe() {
    }
    DatetimePipe.prototype.transform = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_1__date_converter_service__["a" /* DateConverterService */].toString(date, format);
    };
    DatetimePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "datetime" })
    ], DatetimePipe);
    return DatetimePipe;
}());



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatternErrorMessagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatternErrorMessagePipe = /** @class */ (function () {
    function PatternErrorMessagePipe() {
        this.transform = function (pattern) { return "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043A\u0430 \u043D\u0435 \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u0430: " + pattern; };
    }
    PatternErrorMessagePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "patternErrorMessage" })
    ], PatternErrorMessagePipe);
    return PatternErrorMessagePipe;
}());



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequiredErrorMessagePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RequiredErrorMessagePipe = /** @class */ (function () {
    function RequiredErrorMessagePipe() {
        this.transform = function (fieldName) { return "\"" + fieldName + "\" \u043D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E"; };
    }
    RequiredErrorMessagePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "requiredErrorMessage" })
    ], RequiredErrorMessagePipe);
    return RequiredErrorMessagePipe;
}());



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friend_editor_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FriendEditorComponent = /** @class */ (function () {
    function FriendEditorComponent(_friendEditorService, _layoutService, _activatedRoute, _router, _changeDetectorRef) {
        this._friendEditorService = _friendEditorService;
        this._layoutService = _layoutService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._changeDetectorRef = _changeDetectorRef;
        this.LABELS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["e" /* PATTERNS */];
        this.AVATAR_MIME_TYPES = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["h" /* MIME_TYPES */].PNG;
        this.AVATAR_MAX_SIZE = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["i" /* FILE_SIZES */].AVATAR_MAX_SIZE;
        this.friend = __WEBPACK_IMPORTED_MODULE_5__friend_editor_service__["a" /* FriendEditorService */].getDefaultFriend();
        this.suppressNavigation = false;
        this.saved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.editMode = false;
        this._subs = [];
    }
    Object.defineProperty(FriendEditorComponent.prototype, "friendId", {
        set: function (value) {
            if (typeof value === "string" && value.length > 0) {
                this._friendEditorService.fetchFriend(value);
                this.editMode = true;
            }
            else {
                this.editMode = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    FriendEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (x) { return x.friendId; }))
                .subscribe(function (params) { return _this.friendId = params.friendId; }),
            this._friendEditorService.friend$
                .subscribe(function (friend) {
                _this.friend = friend;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    FriendEditorComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    FriendEditorComponent.prototype.save = function (cb) {
        var _this = this;
        if (this.editMode) {
            this._friendEditorService.updateFriend(this.friend, function () {
                _this.saved.emit(_this.friend);
            });
        }
        else {
            if (!cb) {
                cb = (function (friend) {
                    _this.saved.emit(friend);
                    if (!_this.suppressNavigation) {
                        _this._router.navigateByUrl("friend-editor" + (friend ? "/" + friend.id : ""));
                    }
                });
            }
            this._friendEditorService.addFriend(this.friend, cb);
        }
    };
    FriendEditorComponent.prototype.reset = function () {
        this._friendEditorService.reset();
    };
    FriendEditorComponent.prototype.onFilesAccepted = function (files) {
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var acceptedFile = files_1[_i];
            this._friendEditorService.storeFriendAvatar(this.friend.id, acceptedFile.file);
        }
    };
    FriendEditorComponent.prototype.onFilesRejected = function (files) {
        var msg = "Невозможно загрузить файлы.";
        var oversized = files
            .find(function (x) { return x.reason === __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__["a" /* RejectionReason */].FileSize; });
        if (oversized) {
            msg += " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C [" + this.AVATAR_MAX_SIZE + "].";
        }
        // unique file types
        var fileTypes = files
            .filter(function (x) { return x.reason === __WEBPACK_IMPORTED_MODULE_3__dotnetru_shared_file_dialog__["a" /* RejectionReason */].FileType; })
            .map(function (x) { return x.file.type; })
            .filter(function (value, index, self) { return self.indexOf(value) === index; });
        if (fileTypes.length > 0) {
            msg += "\u0422\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442\u0441\u044F [" + fileTypes.join(", ") + "].";
        }
        this._layoutService.showWarning(msg);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FriendEditorComponent.prototype, "suppressNavigation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FriendEditorComponent.prototype, "friendId", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FriendEditorComponent.prototype, "saved", void 0);
    FriendEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__friend_editor_service__["a" /* FriendEditorService */]],
            selector: "mtp-friend-editor",
            styles: [__webpack_require__(145)],
            template: __webpack_require__(134),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__friend_editor_service__["a" /* FriendEditorService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], FriendEditorComponent);
    return FriendEditorComponent;
}());



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_file_dialog__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FriendEditorModule = /** @class */ (function () {
    function FriendEditorModule() {
    }
    FriendEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__["a" /* FriendEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes__["a" /* FriendImageUrlPipe */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__["a" /* FriendEditorComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__["a" /* FriendEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes__["a" /* FriendImageUrlPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "friend-creator", component: __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__["a" /* FriendEditorComponent */] },
                    { path: "friend-editor/:friendId", component: __WEBPACK_IMPORTED_MODULE_7__friend_editor_component__["a" /* FriendEditorComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_file_dialog__["b" /* FileDialogModule */],
            ],
        })
    ], FriendEditorModule);
    return FriendEditorModule;
}());



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendImageUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendImageUrlPipe = /** @class */ (function () {
    function FriendImageUrlPipe() {
    }
    FriendImageUrlPipe.prototype.transform = function (friendId) {
        return friendId
            ? "/static/db/friends/" + friendId + "/logo.png"
            : "";
    };
    FriendImageUrlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "friendImageUrl" })
    ], FriendImageUrlPipe);
    return FriendImageUrlPipe;
}());



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meetup_editor_service__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MeetupEditorComponent = /** @class */ (function () {
    function MeetupEditorComponent(_meetupEditorService, _layoutService, _activatedRoute, _router, _changeDetectorRef) {
        this._meetupEditorService = _meetupEditorService;
        this._layoutService = _layoutService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._changeDetectorRef = _changeDetectorRef;
        this.LABELS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["e" /* PATTERNS */];
        this.Community = __WEBPACK_IMPORTED_MODULE_4__enums__["a" /* Community */];
        this.COMMUNITIES = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* COMMUNITIES */];
        // todo: create service method getDefaultMeetup
        this.meetup = {
            communityId: __WEBPACK_IMPORTED_MODULE_4__enums__["a" /* Community */].SpbDotNet,
            friendIds: [],
            id: "",
            name: "",
            sessions: [],
            venueId: "",
        };
        this.editMode = true;
        this._subs = [];
    }
    MeetupEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .subscribe(function (params) {
                if (typeof params.meetupId === "string" && params.meetupId.length > 0) {
                    _this._meetupEditorService.fetchMeetup(params.meetupId);
                }
                else {
                    _this.editMode = false;
                }
            }),
            this._meetupEditorService.meetup$
                .subscribe(function (meetup) {
                _this.meetup = meetup;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    MeetupEditorComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    MeetupEditorComponent.prototype.save = function () {
        if (this.editMode) {
            this._meetupEditorService.updateMeetup(this.meetup);
        }
        else {
            this._meetupEditorService.addMeetup(this.meetup);
        }
    };
    MeetupEditorComponent.prototype.reset = function () {
        this._meetupEditorService.reset();
    };
    MeetupEditorComponent.prototype.onFriendSelected = function (friendId, index) {
        this.meetup.friendIds[index] = { friendId: friendId };
    };
    MeetupEditorComponent.prototype.removeFriend = function (index) {
        this.meetup.friendIds.splice(index, 1);
    };
    MeetupEditorComponent.prototype.addFriend = function () {
        this.meetup.friendIds.push({ friendId: "" });
    };
    MeetupEditorComponent.prototype.onVenueSelected = function (venueId) {
        this.meetup.venueId = venueId;
    };
    MeetupEditorComponent.prototype.onTalkSelected = function (talkId, index) {
        this.meetup.sessions[index] = Object.assign({}, this.meetup.sessions[index], {
            talkId: talkId,
        });
    };
    MeetupEditorComponent.prototype.onRemoveSession = function (index) {
        this.meetup.sessions.splice(index, 1);
    };
    MeetupEditorComponent.prototype.tryFillEndTime = function (session) {
        if (session.startTime && !session.endTime) {
            session.endTime = session.startTime.clone().add(1, "hour");
        }
    };
    MeetupEditorComponent.prototype.addSession = function () {
        var startTime;
        if (this.meetup.sessions.length > 0) {
            var lastSession = this.meetup.sessions[this.meetup.sessions.length - 1];
            if (lastSession.endTime) {
                startTime = lastSession.endTime.clone().add(30, "minutes");
            }
        }
        var endTime;
        if (startTime) {
            endTime = startTime.clone().add(1, "hour");
        }
        this.meetup.sessions.push({ talkId: "", startTime: startTime, endTime: endTime });
    };
    MeetupEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_5__meetup_editor_service__["a" /* MeetupEditorService */]],
            selector: "mtp-meetup-editor",
            styles: [__webpack_require__(146)],
            template: __webpack_require__(135),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__meetup_editor_service__["a" /* MeetupEditorService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], MeetupEditorComponent);
    return MeetupEditorComponent;
}());



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_friend_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dotnetru_talk_list__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dotnetru_venue_list__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mat_datetimepicker_core__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mat_datetimepicker_moment__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__session_editor_component__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var MeetupEditorModule = /** @class */ (function () {
    function MeetupEditorModule() {
    }
    MeetupEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__["a" /* MeetupEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__session_editor_component__["a" /* SessionEditorComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__["a" /* MeetupEditorComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__["a" /* MeetupEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__session_editor_component__["a" /* SessionEditorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "meetup-creator", component: __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__["a" /* MeetupEditorComponent */] },
                    { path: "meetup-editor/:meetupId", component: __WEBPACK_IMPORTED_MODULE_11__meetup_editor_component__["a" /* MeetupEditorComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatDatepickerModule"],
                __WEBPACK_IMPORTED_MODULE_10__mat_datetimepicker_moment__["a" /* MatMomentDatetimeModule */],
                __WEBPACK_IMPORTED_MODULE_9__mat_datetimepicker_core__["a" /* MatDatetimepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatCardModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatSelectModule"],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_friend_list__["a" /* FriendListModule */],
                __WEBPACK_IMPORTED_MODULE_8__dotnetru_venue_list__["a" /* VenueListModule */],
                __WEBPACK_IMPORTED_MODULE_7__dotnetru_talk_list__["a" /* TalkListModule */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["MAT_DATE_LOCALE"], useValue: "ru-RU" },
            ],
        })
    ], MeetupEditorModule);
    return MeetupEditorModule;
}());



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupEditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeetupEditorService = /** @class */ (function () {
    function MeetupEditorService(_layoutService, _httpService, _router) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._router = _router;
        this._meetup$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        this._dataStore = {
            meetup: {},
        };
    }
    MeetupEditorService_1 = MeetupEditorService;
    Object.defineProperty(MeetupEditorService.prototype, "meetup$", {
        get: function () {
            return this._meetup$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    MeetupEditorService.prototype.hasChanges = function (meetup) {
        return JSON.stringify(meetup) !== JSON.stringify(this._dataStore.meetup);
    };
    MeetupEditorService.prototype.fetchMeetup = function (meetupId) {
        var _this = this;
        this._httpService.get(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].getMeetupUrl.replace("{{meetupId}}", meetupId), function (meetup) {
            _this._dataStore.meetup = MeetupEditorService_1.toMeetup(meetup);
            _this._meetup$.next(Object.assign({}, _this._dataStore.meetup));
        });
    };
    MeetupEditorService.prototype.addMeetup = function (meetup) {
        var _this = this;
        var data = this.toApiMeetup(meetup);
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].addMeetupUrl, data, function (x) {
            _this._layoutService.showInfo("Доклад добавлен успешно");
            _this._router.navigateByUrl("meetup-editor" + (meetup ? "/" + meetup.id : ""));
        });
    };
    MeetupEditorService.prototype.updateMeetup = function (meetup) {
        var _this = this;
        var data = this.toApiMeetup(meetup);
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["b" /* API_ENDPOINTS */].updateMeetupUrl, data, function (x) {
            _this._layoutService.showInfo("Доклад изменён успешно");
            _this._dataStore.meetup = MeetupEditorService_1.toMeetup(x);
            _this._meetup$.next(Object.assign({}, _this._dataStore.meetup));
        });
    };
    MeetupEditorService.prototype.reset = function () {
        this._meetup$.next(Object.assign({}, this._dataStore.meetup));
    };
    MeetupEditorService.prototype.toApiMeetup = function (meetup) {
        var res = Object.assign({}, meetup, {
            sessions: meetup.sessions.map(function (x) { return Object.assign({}, x, {
                endTime: x.endTime ? __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["f" /* DateConverterService */].toApiString(x.endTime) : "",
                startTime: x.startTime ? __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["f" /* DateConverterService */].toApiString(x.startTime) : "",
            }); }),
        });
        return res;
    };
    var MeetupEditorService_1;
    MeetupEditorService.toMeetup = function (meetup) { return Object.assign({}, meetup, {
        sessions: meetup.sessions.map(function (x) { return Object.assign({}, x, {
            endTime: __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["f" /* DateConverterService */].toMoment(x.endTime),
            startTime: __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["f" /* DateConverterService */].toMoment(x.startTime),
        }); }),
    }); };
    MeetupEditorService = MeetupEditorService_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_2__dotnetru_core__["c" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], MeetupEditorService);
    return MeetupEditorService;
}());



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_pages_talk_editor__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionEditorComponent = /** @class */ (function () {
    function SessionEditorComponent(_dialog, _changeDetectorRef) {
        this._dialog = _dialog;
        this._changeDetectorRef = _changeDetectorRef;
        this.title = "";
        this.talkSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeSession = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._session = { talkId: "" };
    }
    Object.defineProperty(SessionEditorComponent.prototype, "session", {
        get: function () {
            return this._session;
        },
        set: function (value) {
            this._session = value;
        },
        enumerable: true,
        configurable: true
    });
    SessionEditorComponent.prototype.onTalkSelected = function (row) {
        this.talkSelected.emit(row.id);
    };
    SessionEditorComponent.prototype.onRemoveSession = function () {
        this.removeSession.emit();
    };
    SessionEditorComponent.prototype.tryFillEndTime = function () {
        if (this.session.startTime && !this.session.endTime) {
            this.session.endTime = this.session.startTime.clone().add(1, "hour");
        }
    };
    SessionEditorComponent.prototype.createTalk = function () {
        var _this = this;
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_2__dotnetru_pages_talk_editor__["b" /* TalkEditorDialogComponent */], {
            panelClass: "full-height",
            width: "640px",
        });
        dialogRef.afterClosed().subscribe(function (talk) {
            if (talk && talk.id) {
                _this.talkSelected.emit(talk.id);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SessionEditorComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SessionEditorComponent.prototype, "session", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SessionEditorComponent.prototype, "talkSelected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SessionEditorComponent.prototype, "removeSession", void 0);
    SessionEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            selector: "mtp-session-editor",
            styles: [__webpack_require__(147)],
            template: __webpack_require__(136),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["MatDialog"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SessionEditorComponent);
    return SessionEditorComponent;
}());



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_module__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__search_module__["a"]; });



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dotnetru_friend_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dotnetru_meetup_list__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_speaker_list__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_talk_list__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_venue_list__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_component__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__search_component__["a" /* SearchPageComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__search_component__["a" /* SearchPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild([
                    { path: "search", component: __WEBPACK_IMPORTED_MODULE_7__search_component__["a" /* SearchPageComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_2__dotnetru_friend_list__["a" /* FriendListModule */],
                __WEBPACK_IMPORTED_MODULE_3__dotnetru_meetup_list__["a" /* MeetupListModule */],
                __WEBPACK_IMPORTED_MODULE_4__dotnetru_speaker_list__["a" /* SpeakerListModule */],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_talk_list__["a" /* TalkListModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_venue_list__["a" /* VenueListModule */],
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerImageUrlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpeakerImageUrlPipe = /** @class */ (function () {
    function SpeakerImageUrlPipe() {
    }
    SpeakerImageUrlPipe.prototype.transform = function (speakerId) {
        return speakerId
            ? "/static/db/speakers/" + speakerId + "/avatar.jpg"
            : "";
    };
    SpeakerImageUrlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "speakerImageUrl" })
    ], SpeakerImageUrlPipe);
    return SpeakerImageUrlPipe;
}());



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_file_dialog__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__speaker_editor_dialog_component__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SpeakerEditorModule = /** @class */ (function () {
    function SpeakerEditorModule() {
    }
    SpeakerEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__["a" /* SpeakerEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__speaker_editor_dialog_component__["a" /* SpeakerEditorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes__["a" /* SpeakerImageUrlPipe */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__["a" /* SpeakerEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__speaker_editor_dialog_component__["a" /* SpeakerEditorDialogComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__["a" /* SpeakerEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pipes__["a" /* SpeakerImageUrlPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "speaker-creator", component: __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__["a" /* SpeakerEditorComponent */] },
                    { path: "speaker-editor/:speakerId", component: __WEBPACK_IMPORTED_MODULE_9__speaker_editor_component__["a" /* SpeakerEditorComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_file_dialog__["b" /* FileDialogModule */],
            ],
        })
    ], SpeakerEditorModule);
    return SpeakerEditorModule;
}());



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TalkEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_pages_speaker_editor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dotnetru_speaker_list__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__talk_editor_dialog_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TalkEditorModule = /** @class */ (function () {
    function TalkEditorModule() {
    }
    TalkEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__["a" /* TalkEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__talk_editor_dialog_component__["a" /* TalkEditorDialogComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__["a" /* TalkEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__talk_editor_dialog_component__["a" /* TalkEditorDialogComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__["a" /* TalkEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__talk_editor_dialog_component__["a" /* TalkEditorDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "talk-creator", component: __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__["a" /* TalkEditorComponent */] },
                    { path: "talk-editor/:talkId", component: __WEBPACK_IMPORTED_MODULE_9__talk_editor_component__["a" /* TalkEditorComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatCardModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__dotnetru_speaker_list__["a" /* SpeakerListModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_pages_speaker_editor__["a" /* SpeakerEditorModule */],
            ],
        })
    ], TalkEditorModule);
    return TalkEditorModule;
}());



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timepad_module__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__timepad_module__["a"]; });



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_drag_drop__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friend_editor_friend_editor_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meetup_editor_constants__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meetup_editor_enums__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__venue_editor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timepad_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// todo: regular service method
var DEFAULT_VENUE = {};
var TimepadComponent = /** @class */ (function () {
    function TimepadComponent(_dialog, _compositeService, _activatedRoute, _changeDetectorRef) {
        this._dialog = _dialog;
        this._compositeService = _compositeService;
        this._activatedRoute = _activatedRoute;
        this._changeDetectorRef = _changeDetectorRef;
        this.Community = __WEBPACK_IMPORTED_MODULE_7__meetup_editor_enums__["a" /* Community */];
        this.COMMUNITIES = __WEBPACK_IMPORTED_MODULE_6__meetup_editor_constants__["a" /* COMMUNITIES */];
        this.LABELS = __WEBPACK_IMPORTED_MODULE_4__dotnetru_core__["d" /* LABELS */];
        this.PATTERNS = __WEBPACK_IMPORTED_MODULE_4__dotnetru_core__["e" /* PATTERNS */];
        this.timeFormat = "HH:mm";
        this.editMode = true;
        this.name = undefined;
        this.venue = Object.assign({}, DEFAULT_VENUE);
        this.sessions = [];
        this.talks = {};
        this.speakers = {};
        this.friends = [];
        this._subs = [];
    }
    Object.defineProperty(TimepadComponent.prototype, "meetupId", {
        get: function () {
            return this._meetupId || "";
        },
        set: function (value) {
            this._meetupId = value;
            if (this.editMode) {
                this._compositeService.fetchMeetup(this._meetupId, this.descriptor);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepadComponent.prototype, "descriptor", {
        get: function () {
            return {
                name: this.name,
                communityId: String(this.communityId || ""),
                venueId: this.venue ? this.venue.id : undefined,
                friendIds: this.friends.map(function (x) { return x.id; }),
                sessions: this.sessions.map(function (x) { return Object.assign({}, x, {
                    endTime: x.endTime ? __WEBPACK_IMPORTED_MODULE_4__dotnetru_core__["f" /* DateConverterService */].toApiString(x.endTime) : "",
                    startTime: x.startTime ? __WEBPACK_IMPORTED_MODULE_4__dotnetru_core__["f" /* DateConverterService */].toApiString(x.startTime) : "",
                }); }),
                speakerIds: Object.keys(this.speakers),
                talkIds: Object.keys(this.talks),
            };
        },
        enumerable: true,
        configurable: true
    });
    TimepadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subs = [
            this._activatedRoute.params
                .subscribe(function (params) {
                _this.editMode = typeof params.meetupId === "string" && params.meetupId.length > 0;
                if (_this.editMode) {
                    _this.meetupId = params.meetupId;
                }
            }),
            this._compositeService.meetup$
                .subscribe(function (data) {
                _this._meetupId = data.id;
                _this.name = data.name;
                _this.communityId = data.communityId;
                _this.venue = data.venue || Object.assign({}, DEFAULT_VENUE);
                _this.sessions = data.sessions;
                _this.talks = data.talks;
                _this.speakers = data.speakers;
                _this.friends = data.friends;
                _this._changeDetectorRef.detectChanges();
            }),
        ];
    };
    TimepadComponent.prototype.ngOnDestroy = function () {
        this._subs.forEach(function (x) { return x.unsubscribe; });
    };
    TimepadComponent.prototype.save = function () {
        this._compositeService.saveMeetup(this._meetupId, this.descriptor);
    };
    TimepadComponent.prototype.addSession = function (talkId) {
        if (talkId === void 0) { talkId = ""; }
        // todo: remove code duplication, see meetup-editor.component.ts
        var startTime;
        if (this.sessions.length > 0) {
            var lastSession = this.sessions[this.sessions.length - 1];
            if (lastSession.endTime) {
                startTime = lastSession.endTime.clone().add(30, "minutes");
            }
        }
        var endTime;
        if (startTime) {
            endTime = startTime.clone().add(1, "hour");
        }
        this.sessions.push({ talkId: talkId, startTime: startTime, endTime: endTime });
    };
    TimepadComponent.prototype.deleteSession = function (index) {
        this.sessions.splice(index, 1);
    };
    TimepadComponent.prototype.onTalkSelected = function (talkId, index) {
        var _this = this;
        var descriptor = this.descriptor;
        if (descriptor.talkIds.some(function (x) { return x === talkId; })) {
            this.sessions[index].talkId = talkId;
        }
        else {
            descriptor.talkIds.push(talkId);
            this._compositeService.fetchMeetup(this._meetupId, descriptor, function () {
                var session = _this.sessions[index];
                if (session) {
                    _this.sessions[index] = Object.assign({}, session, { talkId: talkId });
                }
                else {
                    _this.addSession(talkId);
                }
            });
        }
    };
    TimepadComponent.prototype.onTalkSaved = function (talk) {
        var _this = this;
        if (talk.speakerIds.some(function (x) {
            return !_this.speakers[x.speakerId];
        })) {
            this._compositeService.fetchMeetup(this._meetupId, this.descriptor);
        }
        else {
            this.talks[talk.id] = talk;
        }
    };
    TimepadComponent.prototype.onSpeakerSaved = function (speaker, talk) {
        this.speakers[speaker.id] = speaker;
        var hasRef = talk.speakerIds.find(function (x) { return x.speakerId === speaker.id; });
        if (!hasRef) {
            talk.speakerIds.push({ speakerId: speaker.id });
        }
    };
    TimepadComponent.prototype.onSessionDrop = function (event) {
        var tempTalkId = this.sessions[event.previousIndex].talkId;
        this.sessions[event.previousIndex].talkId = this.sessions[event.currentIndex].talkId;
        this.sessions[event.currentIndex].talkId = tempTalkId;
    };
    TimepadComponent.prototype.deleteFriend = function (ev, index) {
        this.friends.splice(index, 1);
    };
    TimepadComponent.prototype.onFriendDrop = function (event) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_drag_drop__["b" /* moveItemInArray */])(this.friends, event.previousIndex, event.currentIndex);
    };
    TimepadComponent.prototype.onFriendSaved = function (friend, index) {
        this.friends[index] = friend;
    };
    TimepadComponent.prototype.onFriendSelected = function (friendId) {
        var descriptor = this.descriptor;
        descriptor.friendIds.push(friendId);
        this._compositeService.fetchMeetup(this._meetupId, descriptor);
    };
    TimepadComponent.prototype.createFriend = function () {
        this.friends.push(__WEBPACK_IMPORTED_MODULE_5__friend_editor_friend_editor_service__["a" /* FriendEditorService */].getDefaultFriend());
    };
    TimepadComponent.prototype.onVenueSelected = function (venueId) {
        var descriptor = this.descriptor;
        descriptor.venueId = venueId;
        this._compositeService.fetchMeetup(this._meetupId, descriptor);
    };
    TimepadComponent.prototype.createVenue = function () {
        this.openVenueDialog(undefined);
    };
    TimepadComponent.prototype.editVenue = function () {
        this.openVenueDialog(this.venue);
    };
    TimepadComponent.prototype.openVenueDialog = function (data) {
        var _this = this;
        var config = {
            panelClass: "full-height",
            width: "640px",
        };
        if (data) {
            config.data = data;
        }
        var dialogRef = this._dialog.open(__WEBPACK_IMPORTED_MODULE_8__venue_editor__["b" /* VenueEditorDialogComponent */], config);
        dialogRef.afterClosed().subscribe(function (venue) {
            if (venue && venue.id) {
                _this.onVenueSelected(venue.id);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TimepadComponent.prototype, "meetupId", null);
    TimepadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_9__timepad_service__["a" /* CompositeService */]],
            selector: "mtp-timepad",
            styles: [__webpack_require__(148)],
            template: __webpack_require__(138),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["MatDialog"],
            __WEBPACK_IMPORTED_MODULE_9__timepad_service__["a" /* CompositeService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
    ], TimepadComponent);
    return TimepadComponent;
}());



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_drag_drop__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dotnetru_friend_list__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dotnetru_pages_friend_editor__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dotnetru_pages_meetup_editor__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dotnetru_pages_speaker_editor__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dotnetru_pages_talk_editor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dotnetru_pages_venue_editor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dotnetru_venue_list__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepad_component__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var TimepadModule = /** @class */ (function () {
    function TimepadModule() {
    }
    TimepadModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__timepad_component__["a" /* TimepadComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__timepad_component__["a" /* TimepadComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forChild([
                    { path: "timepad", component: __WEBPACK_IMPORTED_MODULE_14__timepad_component__["a" /* TimepadComponent */] },
                    { path: "timepad/:meetupId", component: __WEBPACK_IMPORTED_MODULE_14__timepad_component__["a" /* TimepadComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_cdk_drag_drop__["a" /* DragDropModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatExpansionModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatListModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MatSelectModule"],
                __WEBPACK_IMPORTED_MODULE_7__dotnetru_friend_list__["a" /* FriendListModule */],
                __WEBPACK_IMPORTED_MODULE_8__dotnetru_pages_friend_editor__["a" /* FriendEditorModule */],
                __WEBPACK_IMPORTED_MODULE_9__dotnetru_pages_meetup_editor__["a" /* MeetupEditorModule */],
                __WEBPACK_IMPORTED_MODULE_10__dotnetru_pages_speaker_editor__["a" /* SpeakerEditorModule */],
                __WEBPACK_IMPORTED_MODULE_11__dotnetru_pages_talk_editor__["a" /* TalkEditorModule */],
                __WEBPACK_IMPORTED_MODULE_12__dotnetru_pages_venue_editor__["a" /* VenueEditorModule */],
                __WEBPACK_IMPORTED_MODULE_13__dotnetru_venue_list__["a" /* VenueListModule */],
            ],
        })
    ], TimepadModule);
    return TimepadModule;
}());



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompositeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompositeService = /** @class */ (function () {
    function CompositeService(_layoutService, _httpService) {
        this._layoutService = _layoutService;
        this._httpService = _httpService;
        this._meetup$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
    }
    Object.defineProperty(CompositeService.prototype, "meetup$", {
        get: function () {
            return this._meetup$.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (x) { return x !== null; }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (x) { return x; }));
        },
        enumerable: true,
        configurable: true
    });
    CompositeService.prototype.fetchMeetup = function (meetupId, descriptor, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].getCompositeMeetupUrl.replace("{{meetupId}}", meetupId || ""), descriptor, function (res) {
            var model = _this.toCompositeMeetup(meetupId, res);
            _this._meetup$.next(model);
            if (cb) {
                cb();
            }
        });
    };
    CompositeService.prototype.saveMeetup = function (meetupId, descriptor, cb) {
        var _this = this;
        this._httpService.post(__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["b" /* API_ENDPOINTS */].saveCompositeMeetupUrl.replace("{{meetupId}}", meetupId || ""), descriptor, function (res) {
            var model = _this.toCompositeMeetup(meetupId, res);
            _this._layoutService.showInfo("Встреча изменена успешно");
            _this._meetup$.next(model);
            if (cb) {
                cb();
            }
        });
    };
    CompositeService.prototype.toCompositeMeetup = function (meetupId, data) {
        return Object.assign({}, {
            id: meetupId,
            name: data.name,
            communityId: data.communityId,
            venue: data.venue,
            friends: data.friends,
            sessions: data.sessions.map(function (x) { return Object.assign({}, x, {
                endTime: __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["f" /* DateConverterService */].toMoment(x.endTime),
                startTime: __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["f" /* DateConverterService */].toMoment(x.startTime),
            }); }),
            speakers: data.speakers,
            talks: data.talks,
        });
    };
    CompositeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["g" /* LayoutService */],
            __WEBPACK_IMPORTED_MODULE_1__dotnetru_core__["c" /* HttpService */]])
    ], CompositeService);
    return CompositeService;
}());



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueEditorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_city_select__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dotnetru_speaker_list__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__venue_editor_dialog_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var VenueEditorModule = /** @class */ (function () {
    function VenueEditorModule() {
    }
    VenueEditorModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__["a" /* VenueEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__venue_editor_dialog_component__["a" /* VenueEditorDialogComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__["a" /* VenueEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__venue_editor_dialog_component__["a" /* VenueEditorDialogComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__["a" /* VenueEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_8__venue_editor_dialog_component__["a" /* VenueEditorDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    { path: "venue-creator", component: __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__["a" /* VenueEditorComponent */] },
                    { path: "venue-editor/:venueId", component: __WEBPACK_IMPORTED_MODULE_9__venue_editor_component__["a" /* VenueEditorComponent */] },
                ]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
                __WEBPACK_IMPORTED_MODULE_5__dotnetru_core__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__dotnetru_shared_city_select__["a" /* CitySelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__dotnetru_speaker_list__["a" /* SpeakerListModule */],
            ],
        })
    ], VenueEditorModule);
    return VenueEditorModule;
}());



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete_component__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__autocomplete_component__["a" /* AutocompleteComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__autocomplete_component__["a" /* AutocompleteComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatAutocompleteModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatButtonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatInputModule"],
            ],
        })
    ], AutocompleteModule);
    return AutocompleteModule;
}());



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CityNamePipe = /** @class */ (function () {
    function CityNamePipe() {
    }
    CityNamePipe.prototype.transform = function (city) {
        switch (city) {
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Spb:
                return "Санкт-Петербург";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Msk:
                return "Москва";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Sar:
                return "Саратов";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Kry:
                return "Красноярск";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Kzn:
                return "Казань";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Nsk:
                return "Новосибирск";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Nnv:
                return "Нижний Новгород";
            case __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* City */].Ufa:
                return "Уфа";
        }
        var exhaustingCheck = city;
    };
    CityNamePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: "cityName" })
    ], CityNamePipe);
    return CityNamePipe;
}());



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitySelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__city_name_pipe__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__city_select_component__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CitySelectModule = /** @class */ (function () {
    function CitySelectModule() {
    }
    CitySelectModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__city_name_pipe__["a" /* CityNamePipe */],
                __WEBPACK_IMPORTED_MODULE_5__city_select_component__["a" /* CitySelectComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__city_name_pipe__["a" /* CityNamePipe */],
                __WEBPACK_IMPORTED_MODULE_5__city_select_component__["a" /* CitySelectComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatFormFieldModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MatSelectModule"],
            ],
        })
    ], CitySelectModule);
    return CitySelectModule;
}());



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CITIES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(13);

var CITIES = [__WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Spb, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Msk, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Sar, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Kry, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Kzn, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Nsk, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Nnv, __WEBPACK_IMPORTED_MODULE_0__enums__["a" /* City */].Ufa];


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__file_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileDialogComponent = /** @class */ (function () {
    function FileDialogComponent(_fileService) {
        this._fileService = _fileService;
        this.disabled = false;
        this.accept = "";
        this.multiple = true;
        this.maxFileSize = 0;
        this.filesAccepted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.filesRejected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FileDialogComponent.prototype.onNativeInputFileSelect = function (event) {
        this._fileService.configure(this.accept.split(",").filter(function (x) { return x !== ""; }), this.maxFileSize);
        var result = this._fileService.verifyFiles(event);
        this.filesAccepted.emit(result.acceptedFiles);
        this.filesRejected.emit(result.rejectedFiles);
        if (this.nativeInputFile) {
            this.nativeInputFile.nativeElement.value = "";
        }
        this.preventAndStopEventPropagation(event);
    };
    FileDialogComponent.prototype.uploadFile = function () {
        this.nativeInputFile.nativeElement.click();
    };
    FileDialogComponent.prototype.preventAndStopEventPropagation = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inputFile"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FileDialogComponent.prototype, "nativeInputFile", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileDialogComponent.prototype, "disabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FileDialogComponent.prototype, "accept", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FileDialogComponent.prototype, "multiple", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FileDialogComponent.prototype, "maxFileSize", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FileDialogComponent.prototype, "filesAccepted", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FileDialogComponent.prototype, "filesRejected", void 0);
    FileDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            providers: [__WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]],
            selector: "mtp-file-dialog",
            template: __webpack_require__(141),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__file_service__["a" /* FileService */]])
    ], FileDialogComponent);
    return FileDialogComponent;
}());



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDialogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_dialog_component__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileDialogModule = /** @class */ (function () {
    function FileDialogModule() {
    }
    FileDialogModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_dialog_component__["a" /* FileDialogComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__file_dialog_component__["a" /* FileDialogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatIconModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["MatButtonModule"],
            ],
        })
    ], FileDialogModule);
    return FileDialogModule;
}());



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileService = /** @class */ (function () {
    function FileService() {
        this._supportedFileTypes = [];
        this._maximumFileSizeInBytes = 0;
    }
    FileService.prototype.configure = function (supportFileFormats, maximumFileSize) {
        this._supportedFileTypes = supportFileFormats;
        this._maximumFileSizeInBytes = maximumFileSize;
        console.warn(this._supportedFileTypes);
    };
    FileService.prototype.verifyFiles = function (event) {
        var result = {
            acceptedFiles: [],
            rejectedFiles: [],
        };
        var target = event.target || event.srcElement;
        if (!(target instanceof HTMLInputElement)) {
            return result;
        }
        if (target.files === null || target.files.length === 0) {
            return result;
        }
        for (var _i = 0, _a = Array.from(target.files); _i < _a.length; _i++) {
            var currentFile = _a[_i];
            if (this._supportedFileTypes.length > 0) {
                var fileTypeIndex = this._supportedFileTypes.indexOf(currentFile.type);
                if (fileTypeIndex === -1) {
                    result.rejectedFiles.push({ file: currentFile, reason: __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* RejectionReason */].FileType });
                    continue;
                }
            }
            if (this._maximumFileSizeInBytes > 0) {
                if (this._maximumFileSizeInBytes < currentFile.size) {
                    result.rejectedFiles.push({ file: currentFile, reason: __WEBPACK_IMPORTED_MODULE_1__enums__["a" /* RejectionReason */].FileSize });
                    continue;
                }
            }
            result.acceptedFiles.push({ file: currentFile });
        }
        return result;
    };
    FileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FileService);
    return FileService;
}());



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__ = __webpack_require__(68);


// tslint:disable-next-line:ordered-imports



if (false) {
    module.hot.accept();
    module.hot.dispose(function () {
        // Before restarting the app, we create a new root element and dispose the old one
        var oldRootElem = document.querySelector("app");
        var newRootElem = document.createElement("app");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        modulePromise.then(function (appModule) {
            appModule.destroy();
            oldRootElem.innerHTML = "";
            var elements = document.getElementsByClassName("cdk-overlay-container");
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < elements.length; i++) {
                elements[i].innerHTML = "";
            }
        });
    });
}
else {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
var modulePromise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__["a" /* AppModule */]);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host,\n.mat-drawer-container {\n    height: 100%;\n    display: block;\n}\n\n.router-container {\n    /* 64px - toolbar */\n    height: calc(100% - 64px);\n}", ""]);

// exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host {\n    display: flex;\n    flex-direction: column;\n}", ""]);

// exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n}\n\nmtp-menu {\n    flex-direction: row;\n}", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".mat-form-field {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.actions {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.avatar {\n    max-width: 200px;\n    max-height: 200px;\n}", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    height: 100%;\n}\n\n.mat-form-field {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.actions {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}", ""]);

// exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".mat-form-field {\n    width: 100%;\n}", ""]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    height: 100%;\n}\n\n.mat-form-field {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.actions {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.avatar {\n    max-width: 200px;\n    max-height: 200px;\n}", ""]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".mat-form-field {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.actions {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}", ""]);

// exports


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ":host {\n    display: block;\n    height: 100%;\n}\n\n.save-action {\n    height: 36px;\n    padding-bottom: 4px;\n    display: flex;\n    justify-content: flex-end;\n    max-width: 640px;\n    width: 100%;\n    margin: 0 auto;\n}\n\n.container {\n    max-width: 640px;\n    margin: 0 auto;\n    height: calc(100% - 40px);\n    overflow: auto;\n}\n\n.mat-list-item {\n    height: auto !important;\n    padding: 12px 0 !important;\n}\n\n.session-content,\n.friend-content {\n    display: flex;\n    align-items: center;\n    padding: 8px 0;\n    justify-content: space-between;\n}\n\n.nowrap {\n    white-space: nowrap;\n}\n\n.session-description {\n    padding-left: 8px;\n}\n\nh3,\np {\n    white-space: pre-wrap;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.about {\n    display: flex;\n}\n\n.avatar {\n    max-width: 200px;\n}\n\n.mat-expansion-panel-header-title {\n    flex-direction: column;\n}\n\n.handle {\n    padding-right: 4px;\n}\n\n.header {\n    height: 40px;\n    display: flex;\n    align-items: center;\n}", ""]);

// exports


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, ".mat-form-field {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.actions {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n}", ""]);

// exports


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(undefined);
// imports


// module
exports.push([module.i, "mat-form-field {\n    width: 100%;\n}", ""]);

// exports


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize>\n\n    <mat-drawer #drawer>\n        <mtp-menu></mtp-menu>\n    </mat-drawer>\n\n    <mtp-toolbar [drawer]=\"drawer\"></mtp-toolbar>\n\n    <div class=\"router-container\">\n        <router-outlet></router-outlet>\n    </div>\n\n</mat-drawer-container>";

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<mtp-autocomplete #autocomplete\n                  [title]=\"title\"\n                  [data]=\"friends\"\n                  [iconName]=\"iconName\"\n                  [iconText]=\"iconText\"\n                  [clearOnSelect]=\"clearOnSelect\"\n                  (selected)=\"onSelected($event)\"\n                  (iconClicked)=\"onIconClicked()\"></mtp-autocomplete>";

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "<mtp-autocomplete #autocomplete\n                  [title]=\"title\"\n                  [data]=\"meetups\"\n                  [iconName]=\"iconName\"\n                  [iconText]=\"iconText\"\n                  (selected)=\"onSelected($event)\"\n                  (iconClicked)=\"onIconClicked()\"></mtp-autocomplete>";

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<button mat-button\n        [matMenuTriggerFor]=\"createEntityMenu\">\n    <mat-icon>fiber_new</mat-icon>\n    <span>Создать</span>\n</button>\n\n<a mat-button\n   [routerLink]=\"['/search']\">\n    <mat-icon>search</mat-icon>\n    <span>Поиск</span>\n</a>\n\n<a mat-button\n   [routerLink]=\"['/timepad/SpbDotNet-30']\">\n    <mat-icon>developer_mode</mat-icon>\n    <span>В разработке</span>\n</a>\n\n<mat-menu #createEntityMenu=\"matMenu\">\n    <a mat-menu-item\n       [routerLink]=\"['/timepad']\">\n        <img class=\"mat-icon\"\n             src=\"/icons/meetup.svg\">\n        <span>Встречу</span>\n    </a>\n    <a mat-menu-item\n       [routerLink]=\"['/speaker-creator']\">\n        <mat-icon>person</mat-icon>\n        <span>Докладчика</span>\n    </a>\n    <a mat-menu-item\n       [routerLink]=\"['/talk-creator']\">\n        <mat-icon>speaker_notes</mat-icon>\n        <span>Доклад</span>\n    </a>\n    <a mat-menu-item\n       [routerLink]=\"['/venue-creator']\">\n        <mat-icon>account_balance</mat-icon>\n        <span>Площадку</span>\n    </a>\n    <a mat-menu-item\n       [routerLink]=\"['/friend-creator']\">\n        <mat-icon>loyalty</mat-icon>\n        <span>Друга</span>\n    </a>\n</mat-menu>";

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "<mtp-autocomplete #autocomplete\n                  [title]=\"title\"\n                  [data]=\"speakers\"\n                  [iconName]=\"iconName\"\n                  [iconText]=\"iconText\"\n                  (selected)=\"onSelected($event)\"\n                  (iconClicked)=\"onIconClicked()\"></mtp-autocomplete>";

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "<mtp-autocomplete #autocomplete\n                  [title]=\"title\"\n                  [data]=\"talks\"\n                  [iconName]=\"iconName\"\n                  [iconText]=\"iconText\"\n                  (selected)=\"onSelected($event)\"\n                  (iconClicked)=\"onIconClicked()\"></mtp-autocomplete>";

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: absolute; width: 100%;\"\n     [hidden]=\"!showProgressBar\">\n    <mat-progress-bar [mode]=\"getProgressMode()\"\n                      [value]=\"percentage\"></mat-progress-bar>\n</div>\n\n<mat-toolbar>\n    <button type=\"button\"\n            color=\"primary\"\n            mat-button\n            (click)=\"drawer?.toggle()\">\n        <mat-icon>menu</mat-icon>\n        <span>Меню</span>\n    </button>\n    <span class=\"actions__space-between\">\n        <mtp-menu></mtp-menu>\n        <span>DevActivator v0.0.1-alpha</span>\n    </span>\n</mat-toolbar>";

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "<mtp-autocomplete #autocomplete\n                  [title]=\"title\"\n                  [data]=\"venues\"\n                  [iconName]=\"iconName\"\n                  [iconText]=\"iconText\"\n                  (selected)=\"onSelected($event)\"\n                  (iconClicked)=\"onIconClicked()\"></mtp-autocomplete>";

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "<form #friendForm=\"ngForm\"\n      class=\"base-component-container\">\n\n    <div class=\"actions__space-between\">\n        <span class=\"text bold no-wrap\">{{ editMode ? 'Редактирование' : 'Добавление' }} друга</span>\n        <div class=\"actions\">\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    *ngIf=\"editMode\"\n                    (click)=\"reset()\">\n                <mat-icon>close</mat-icon>\n                <span>Сбросить</span>\n            </button>\n            <button type=\"button\"\n                    color=\"primary\"\n                    mat-button\n                    [disabled]=\"friendForm.invalid\"\n                    (click)=\"save()\">\n                <mat-icon>{{ editMode ? 'save' : 'add' }}</mat-icon>\n                <span>{{ editMode ? 'Сохранить' : 'Добавить' }}</span>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"image-container\"\n         *ngIf=\"editMode\">\n        <img class=\"avatar\"\n             [src]=\"friend.id | friendImageUrl\">\n        <mtp-file-dialog [accept]=\"AVATAR_MIME_TYPES\"\n                         [maxFileSize]=\"AVATAR_MAX_SIZE\"\n                         (filesAccepted)=\"onFilesAccepted($event)\"\n                         (filesRejected)=\"onFilesRejected($event)\"></mtp-file-dialog>\n    </div>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"friendId\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #friendId=\"ngModel\"\n               [(ngModel)]=\"friend.id\">\n        <mat-error *ngIf=\"friendId.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"friendId.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"friendName\"\n               matInput\n               [placeholder]=\"LABELS.NAME\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #friendName=\"ngModel\"\n               [(ngModel)]=\"friend.name\">\n        <mat-error *ngIf=\"friendName.getError('required')\">\n            {{ LABELS.NAME | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"friendName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"url\"\n               matInput\n               [placeholder]=\"LABELS.URL\"\n               required\n               [pattern]=\"PATTERNS.URI\"\n               #url=\"ngModel\"\n               [(ngModel)]=\"friend.url\">\n        <mat-error *ngIf=\"url.getError('pattern')\">\n            {{ PATTERNS.URI | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <textarea name=\"description\"\n                  matInput\n                  [cdkTextareaAutosize]=\"true\"\n                  [placeholder]=\"LABELS.DESCRIPTION\"\n                  required\n                  [pattern]=\"PATTERNS.REQUIRED_STRING\"\n                  #description=\"ngModel\"\n                  [(ngModel)]=\"friend.description\"></textarea>\n        <mat-error *ngIf=\"description.getError('required')\">\n            {{ LABELS.DESCRIPTION | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"description.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n</form>";

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "<form #meetupForm=\"ngForm\"\n      class=\"base-component-container\">\n\n    <div class=\"actions\">\n        <button type=\"button\"\n                color=\"primary\"\n                mat-button\n                *ngIf=\"editMode\"\n                (click)=\"reset()\">\n            <mat-icon>close</mat-icon>\n            <span>Сбросить</span>\n        </button>\n        <button type=\"button\"\n                color=\"primary\"\n                mat-button\n                [disabled]=\"meetupForm.invalid\"\n                (click)=\"save()\">\n            <mat-icon>{{ editMode ? 'save' : 'add' }}</mat-icon>\n            <span>{{ editMode ? 'Сохранить' : 'Добавить' }}</span>\n        </button>\n    </div>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"meetupId\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #meetupId=\"ngModel\"\n               [(ngModel)]=\"meetup.id\">\n        <mat-error *ngIf=\"meetupId.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"meetupId.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input type=\"text\"\n               name=\"meetupName\"\n               matInput\n               [placeholder]=\"LABELS.TITLE\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #meetupName=\"ngModel\"\n               [(ngModel)]=\"meetup.name\">\n        <mat-error *ngIf=\"meetupName.getError('required')\">\n            {{ LABELS.TITLE | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"meetupName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <mat-select name=\"communityId\"\n                    placeholder=\"Сообщество\"\n                    [(ngModel)]=\"meetup.communityId\"\n                    required>\n            <mat-option *ngFor=\"let community of COMMUNITIES\"\n                        [value]=\"community\">\n                {{ Community[community] }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <mat-card>\n        <mtp-friend-list *ngFor=\"let rel of meetup.friendIds; let idx = index\"\n                         [title]=\"'Друг №' + (idx+1)\"\n                         [iconName]=\"'delete_forever'\"\n                         [iconText]=\"'Убрать'\"\n                         [friendLink]=\"rel\"\n                         (selected)=\"onFriendSelected($event, idx)\"\n                         (iconClicked)=\"removeFriend(idx)\"></mtp-friend-list>\n        <button type=\"button\"\n                color=\"primary\"\n                mat-button\n                (click)=\"addFriend()\">\n            <mat-icon>exposure_plus_1</mat-icon>\n            <span>Добавить друга</span>\n        </button>\n    </mat-card>\n\n    <mtp-venue-list [title]=\"'Площадка'\"\n                    [venueLink]=\"meetup\"\n                    (selected)=\"onVenueSelected($event)\"></mtp-venue-list>\n\n    <mat-card>\n        <mtp-session-editor *ngFor=\"let session of meetup.sessions; let idx = index\"\n                            [title]=\"'Сессия №' + (idx+1)\"\n                            [session]=\"session\"\n                            (talkSelected)=\"onTalkSelected($event, idx)\"\n                            (removeSession)=\"onRemoveSession(idx)\"></mtp-session-editor>\n        <button type=\"button\"\n                color=\"primary\"\n                mat-button\n                (click)=\"addSession()\">\n            <mat-icon>exposure_plus_1</mat-icon>\n            <span>Добавить сессию</span>\n        </button>\n    </mat-card>\n\n</form>";

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "<!-- <mtp-talk-list [title]=\"title\"\n               [iconName]=\"'delete_forever'\"\n               [iconText]=\"'Убрать'\"\n               [talkLink]=\"session\"\n               (selected)=\"onTalkSelected($event)\"\n               (iconClicked)=\"onRemoveSession()\"></mtp-talk-list> -->\n\n<mat-form-field>\n    <mat-placeholder>Время начала</mat-placeholder>\n    <mat-datetimepicker-toggle [for]=\"startDatetimePicker\"\n                               matSuffix></mat-datetimepicker-toggle>\n    <mat-datetimepicker #startDatetimePicker\n                        type=\"datetime\"\n                        openOnFocus=\"true\"\n                        timeInterval=\"5\"\n                        [startView]=\"!session.startTime ? 'month' : 'clock'\"></mat-datetimepicker>\n    <input matInput\n           [max]=\"session.endTime\"\n           [matDatetimepicker]=\"startDatetimePicker\"\n           required\n           autocomplete=\"false\"\n           [(ngModel)]=\"session.startTime\"\n           (ngModelChange)=\"tryFillEndTime()\">\n</mat-form-field>\n\n<mat-form-field>\n    <mat-placeholder>Время окончания</mat-placeholder>\n    <mat-datetimepicker-toggle [for]=\"endDatetimePicker\"\n                               matSuffix></mat-datetimepicker-toggle>\n    <mat-datetimepicker #endDatetimePicker\n                        type=\"datetime\"\n                        openOnFocus=\"true\"\n                        timeInterval=\"5\"\n                        [startView]=\"!session.endTime ? 'month' : 'clock'\"></mat-datetimepicker>\n    <input matInput\n           [min]=\"session.startTime\"\n           [matDatetimepicker]=\"endDatetimePicker\"\n           required\n           autocomplete=\"false\"\n           [(ngModel)]=\"session.endTime\">\n</mat-form-field>\n\n<div class=\"actions__right\">\n    <button type=\"button\"\n            color=\"primary\"\n            mat-button\n            (click)=\"createTalk()\">\n        <mat-icon>fiber_new</mat-icon>\n        <span>Создать доклад</span>\n    </button>\n</div>";

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "<div class=\"base-component-container\">\n\n    <mtp-speaker-list (selected)=\"onSpeakerSelected($event)\"\n                      (iconClicked)=\"addSpeaker()\"></mtp-speaker-list>\n\n    <mtp-talk-list (selected)=\"onTalkSelected($event)\"\n                   (iconClicked)=\"addTalk()\"></mtp-talk-list>\n\n    <mtp-venue-list (selected)=\"onVenueSelected($event)\"\n                    (iconClicked)=\"addVenue()\"></mtp-venue-list>\n\n    <mtp-friend-list (selected)=\"onFriendSelected($event)\"\n                     (iconClicked)=\"addFriend()\"></mtp-friend-list>\n\n    <mtp-meetup-list (selected)=\"onMeetupSelected($event)\"\n                     (iconClicked)=\"addMeetup()\"></mtp-meetup-list>\n\n    <mtp-meetup-list [title]=\"'Поиск на timepad'\"\n                     (selected)=\"onTimepadSelected($event)\"\n                     (iconClicked)=\"addTimepad()\"></mtp-meetup-list>\n\n</div>";

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"header\">\n        <span class=\"text bold no-wrap\">{{ editMode ? 'Редактирование' : 'Добавление' }} встречи</span>\n    </div>\n\n    <mat-form-field class=\"full-width\">\n        <input type=\"text\"\n               name=\"meetupIdField\"\n               matInput\n               [placeholder]=\"LABELS.IDENTITY\"\n               required\n               [pattern]=\"PATTERNS.IDENTITY\"\n               [readonly]=\"editMode\"\n               #meetupIdField=\"ngModel\"\n               [(ngModel)]=\"meetupId\">\n        <mat-error *ngIf=\"meetupIdField.getError('required')\">\n            {{ LABELS.IDENTITY | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"meetupIdField.getError('pattern')\">\n            {{ PATTERNS.IDENTITY | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n        <input type=\"text\"\n               name=\"meetupName\"\n               matInput\n               [placeholder]=\"LABELS.TITLE\"\n               required\n               [pattern]=\"PATTERNS.REQUIRED_STRING\"\n               #meetupName=\"ngModel\"\n               [(ngModel)]=\"name\">\n        <mat-error *ngIf=\"meetupName.getError('required')\">\n            {{ LABELS.TITLE | requiredErrorMessage }}\n        </mat-error>\n        <mat-error *ngIf=\"meetupName.getError('pattern')\">\n            {{ PATTERNS.REQUIRED_STRING | patternErrorMessage }}\n        </mat-error>\n    </mat-form-field>\n\n\n    <h3>Сообщество</h3>\n    <mat-form-field class=\"full-width\">\n        <mat-select name=\"communityId\"\n                    placeholder=\"Сообщество\"\n                    [(ngModel)]=\"communityId\"\n                    required>\n            <mat-option *ngFor=\"let community of COMMUNITIES\"\n                        [value]=\"community\">\n                {{ Community[community] }}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n\n    <h3>\n        <span>Площадка</span>\n        <button type=\"button\"\n                color=\"primary\"\n                mat-button\n                (click)=\"createVenue()\">\n            <mat-icon>fiber_new</mat-icon>\n            <span>Создать</span>\n        </button>\n    </h3>\n\n    <ng-container *ngFor=\"let _ of [venue]\">\n        <mtp-venue-list [title]=\"'Площадка'\"\n                        [iconName]=\"'edit'\"\n                        [iconText]=\"'Изменить'\"\n                        [venueId]=\"venue.id\"\n                        (selected)=\"onVenueSelected($event)\"\n                        (iconClicked)=\"editVenue()\"></mtp-venue-list>\n        <!-- <pre>{{ venue | json }}</pre> -->\n    </ng-container>\n\n    <h3>Друзья</h3>\n    <mat-accordion cdkDropList\n                   (cdkDropListDropped)=\"onFriendDrop($event)\">\n        <ng-container *ngFor=\"let friend of friends; let i = index\">\n            <mat-expansion-panel [expanded]=\"!friend.id\"\n                                 #friendPanel\n                                 cdkDrag>\n\n                <mat-expansion-panel-header collapsedHeight=\"auto\"\n                                            expandedHeight=\"auto\">\n\n                    <mat-panel-title>\n                        <div class=\"friend-content\">\n                            <span class=\"handle\"\n                                  cdkDragHandle>\n                                <svg width=\"24px\"\n                                     fill=\"currentColor\"\n                                     viewBox=\"0 0 24 24\">\n                                    <path\n                                          d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n                                    </path>\n                                    <path d=\"M0 0h24v24H0z\"\n                                          fill=\"none\"></path>\n                                </svg>\n                            </span>\n                            <ng-container *ngIf=\"!friendPanel.expanded\">\n                                <img class=\"avatar\"\n                                     [src]=\"friend.id | friendImageUrl\">\n                                <span>«{{ friend.name }}»</span>\n                                <span>\n                                    <a target=\"_blank\"\n                                       [href]=\"friend.url\"\n                                       mat-button\n                                       onclick=\"event.stopPropagation()\">\n                                        <mat-icon>public</mat-icon>\n                                        <span>На сайт</span>\n                                    </a>\n                                </span>\n                            </ng-container>\n                            <span>\n                                <button type=\"button\"\n                                        mat-icon-button\n                                        (click)=\"deleteFriend($event, i)\">\n                                    <mat-icon>delete_forever</mat-icon>\n                                </button>\n                            </span>\n                        </div>\n                    </mat-panel-title>\n\n                </mat-expansion-panel-header>\n\n                <ng-template matExpansionPanelContent>\n                    <div>\n                        <mtp-friend-editor [suppressNavigation]=\"true\"\n                                           [friendId]=\"friend.id\"\n                                           (saved)=\"onFriendSaved($event, i)\"></mtp-friend-editor>\n                    </div>\n                    <!-- <pre>{{ friend | json }}</pre> -->\n                </ng-template>\n\n            </mat-expansion-panel>\n        </ng-container>\n    </mat-accordion>\n\n    <mtp-friend-list [title]=\"'Добавить друга'\"\n                     [iconName]=\"'fiber_new'\"\n                     [iconText]=\"'Создать друга'\"\n                     [friendLink]=\"{ friendId: '' }\"\n                     [clearOnSelect]=\"true\"\n                     (selected)=\"onFriendSelected($event)\"\n                     (iconClicked)=\"createFriend()\"></mtp-friend-list>\n\n    <h3 mat-subheader>Программа встречи</h3>\n    <mat-accordion cdkDropList\n                   (cdkDropListDropped)=\"onSessionDrop($event)\">\n\n        <ng-container *ngFor=\"let session of sessions; let i = index; let last = last\">\n\n            <mat-expansion-panel [expanded]=\"!session.talkId\"\n                                 cdkDrag>\n                <mat-expansion-panel-header collapsedHeight=\"auto\"\n                                            expandedHeight=\"auto\">\n                    <mat-panel-title>\n                        <div class=\"session-content\">\n                            <span class=\"handle\"\n                                  cdkDragHandle>\n                                <svg width=\"24px\"\n                                     fill=\"currentColor\"\n                                     viewBox=\"0 0 24 24\">\n                                    <path\n                                          d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n                                    </path>\n                                    <path d=\"M0 0h24v24H0z\"\n                                          fill=\"none\"></path>\n                                </svg>\n                            </span>\n                            <span>\n                                <span class=\"nowrap\">\n                                    <span>{{ session.startTime | datetime : timeFormat }}</span>\n                                    <span> - </span>\n                                    <span>{{ session.endTime | datetime : timeFormat }}</span>\n                                </span>\n                                <span class=\"session-description\">\n                                    <ng-container *ngIf=\"talks[session.talkId]\">\n                                        <ng-container *ngFor=\"let ref of talks[session.talkId].speakerIds\">\n                                            <span> {{ speakers[ref.speakerId].name }}</span>\n                                            <span> ({{ speakers[ref.speakerId].companyName }})</span>\n                                        </ng-container>\n                                        <span> «{{ talks[session.talkId].title }}»</span>\n                                    </ng-container>\n                                </span>\n                            </span>\n                            <button type=\"button\"\n                                    mat-icon-button\n                                    (click)=\"deleteSession(i)\">\n                                <mat-icon>delete_forever</mat-icon>\n                            </button>\n                        </div>\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <ng-template matExpansionPanelContent>\n                    <mtp-session-editor [title]=\"(!session.talkId ? 'Добавление' : 'Редактирование') + ' слота'\"\n                                        [session]=\"session\"\n                                        (talkSelected)=\"onTalkSelected($event, i)\"\n                                        (removeSession)=\"deleteSession(i)\"></mtp-session-editor>\n                    <!-- <pre>{{ session | json }}</pre> -->\n                </ng-template>\n            </mat-expansion-panel>\n\n        </ng-container>\n\n    </mat-accordion>\n\n    <button type=\"button\"\n            color=\"primary\"\n            mat-button\n            (click)=\"addSession()\">\n        <mat-icon>add</mat-icon>\n        <span>Добавить слот</span>\n    </button>\n\n    <h3>Доклады</h3>\n    <mat-accordion>\n\n        <ng-container *ngFor=\"let session of sessions; let sessionIx = index\">\n            <ng-container *ngIf=\"talks[session.talkId]\">\n                <ng-container *ngFor=\"let talk of [talks[session.talkId]]\">\n\n                    <mat-expansion-panel>\n                        <mat-expansion-panel-header collapsedHeight=\"auto\"\n                                                    expandedHeight=\"auto\">\n                            <mat-panel-title>\n                                <h4>{{ sessionIx + 1 }}. «{{ talk.title }}»</h4>\n                                <p>{{ talk.description }}</p>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <ng-template matExpansionPanelContent>\n                            <mtp-talk-editor [talkId]=\"talk.id\"\n                                             (saved)=\"onTalkSaved($event)\"></mtp-talk-editor>\n                            <!-- <pre>{{ talk | json }}</pre> -->\n                        </ng-template>\n                    </mat-expansion-panel>\n\n                    <ng-container *ngFor=\"let ref of talk.speakerIds\">\n                        <ng-container *ngFor=\"let speaker of [speakers[ref.speakerId]]\">\n\n                            <mat-expansion-panel>\n                                <mat-expansion-panel-header collapsedHeight=\"auto\"\n                                                            expandedHeight=\"auto\">\n                                    <mat-panel-title>\n                                        <h4>{{ speaker.name }}</h4>\n                                        <div class=\"about\">\n                                            <div>\n                                                <img class=\"avatar\"\n                                                     [src]=\"speaker.id | speakerImageUrl\">\n                                            </div>\n                                            <p>{{ speaker.description }}</p>\n                                        </div>\n                                    </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <ng-template matExpansionPanelContent>\n                                    <mtp-speaker-editor [speakerId]=\"speaker.id\"\n                                                        (saved)=\"onSpeakerSaved($event, talk)\"></mtp-speaker-editor>\n                                    <!-- <pre>{{ speaker | json }}</pre> -->\n                                </ng-template>\n                            </mat-expansion-panel>\n\n                        </ng-container>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n\n    </mat-accordion>\n</div>\n<div class=\"save-action\">\n    <button type=\"button\"\n            color=\"primary\"\n            mat-button\n            (click)=\"save()\">\n        <mat-icon>save</mat-icon>\n        <span>Сохранить</span>\n    </button>\n</div>";

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-width\">\n\n    <input type=\"text\"\n           [placeholder]=\"title\"\n           matInput\n           #queryInput=\"matInput\"\n           [formControl]=\"queryControl\"\n           [matAutocomplete]=\"auto\">\n\n    <mat-autocomplete autoActiveFirstOption\n                      #auto=\"matAutocomplete\"\n                      (optionSelected)=\"onSelected($event.option.value)\">\n        <mat-option *ngFor=\"let data of data$ | async\"\n                    [value]=\"data\">\n            {{ data.name }}\n        </mat-option>\n    </mat-autocomplete>\n\n    <a color=\"primary\"\n       mat-button\n       matSuffix\n       *ngIf=\"iconName || iconText\"\n       (click)=\"onIconClick()\">\n        <mat-icon>{{ iconName }}</mat-icon>\n        <span>{{ iconText }}</span>\n    </a>\n\n</mat-form-field>";

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-select placeholder=\"Город\"\n                [(ngModel)]=\"value\"\n                required>\n        <mat-option *ngFor=\"let city of CITIES\"\n                    [value]=\"city\">\n            {{ city | cityName }}\n        </mat-option>\n    </mat-select>\n</mat-form-field>";

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "<input type=\"file\"\n       [accept]=\"accept\"\n       [multiple]=\"multiple\"\n       (change)=\"onNativeInputFileSelect($event)\"\n       #inputFile\n       hidden>\n<button type=\"button\"\n        color=\"primary\"\n        mat-button\n        [disabled]=\"disabled\"\n        (click)=\"uploadFile()\">\n    <mat-icon>file_upload</mat-icon>\n    <span>Загрузить</span>\n</button>";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(115);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(116);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(117);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(118);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(119);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(120);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(123);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(125);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(12);

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(14);

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(16);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(17);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(25);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(26);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(28);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(30);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(33);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(34);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(49);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(60);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(81);

/***/ })
/******/ ]);
//# sourceMappingURL=main-client.js.map