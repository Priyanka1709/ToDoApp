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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js_event_utils__ = __webpack_require__(1);


class ToDoApp {
    constructor() {
        // initialize application
        this.initialize();

        // render initial to do list
        this.renderList();

        // attach event handlers to various UI elements
        this.attachEventHandlers();
    }

    initialize() {
        // utility to access various js event functions
        this.jsUtils = new __WEBPACK_IMPORTED_MODULE_0__utils_js_event_utils__["a" /* JSEventUtils */]();

        // initial to do list
        this.toDoItems = [];

        // reference to panel holding list items
        this.listItemsPane = document.getElementsByClassName('toDoItems')[0];

        // reference to input textbox and add button
        this.taskInput = document.getElementById('taskInput');
        this.addButton = document.getElementsByClassName('addButton')[0];
    }

    renderList() {
        // for rendering initial list
        for (let i = 0; i < this.toDoItems.length; i++) {
            this.listItemsPane.appendChild(this.createListItem(this.toDoItems[i]));
        }
    }

    updateListFromInput() {
        // function to update todo list on adding any task in input box

        // add item only if task input has some value
        if (this.taskInput.value) {
            this.listItemsPane.appendChild(this.createListItem(this.taskInput.value));
            this.resetInput();
        }
    }

    resetInput() {
        // reset task input to blank
        this.taskInput.value = "";

        // trigger input event so that its handler is invoked on value change
        this.jsUtils.fireEvent(this.taskInput, 'input');
    }

    createListItem(toDoItem) {
        // function for creating list item for every to do item

        let li = document.createElement('li');
        li.className += 'list-group-item';
        li.innerText = toDoItem;

        li.appendChild(this.addCheckbox());
        li.appendChild(this.addCloseButton());

        return li;
    }

    addCheckbox() {
        // add checkbox corresponding to a list item

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        checkbox.addEventListener("change", function (e) {
            // toggle checked class on list item on checkbox selection
            if (this.parentElement.classList.contains('checked')) {
                this.parentElement.classList.remove('checked');
            } else {
                this.parentElement.classList.add('checked');
            }

        });

        return checkbox;
    }

    addCloseButton() {
        // add close button corresponding to a list item

        let closeButton = document.createElement('a');
        closeButton.classList.add('close');
        closeButton.innerText = 'x';

        closeButton.addEventListener("click", function (e) {
            // remove the li corresponding to list item
            this.parentElement.remove();
        });

        return closeButton;
    }

    attachEventHandlers() {
        this.attachEventsToTaskInput();
        this.attachEventsToAddButton();
    }

    attachEventsToAddButton() {
        // event handlers for add button

        this.addButton.addEventListener('click', e => {
            this.updateListFromInput();
        });
    }

    attachEventsToTaskInput() {
        // event handlers for task input box

        this.taskInput.addEventListener("keydown", e => {
            // prevent default browser behaviour on enter key and update the to do list 
            if (e.keyCode === 13) {
                e.preventDefault();
                this.updateListFromInput();
            }
        });

        this.taskInput.addEventListener("input", e => {
            // enable disable add button based on the value in input box
            if (this.taskInput.value) {
                this.addButton.removeAttribute("disabled");
            } else {
                this.addButton.setAttribute("disabled", true);
            }
        });
    }
}

new ToDoApp();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const eventMap = {
    input: {
        'bubbles': true,
        'cancelable': true
    }
};

class JSEventUtils {
    fireEvent(elem, event) {
        var event = new Event(event, eventMap[event]);
        elem.dispatchEvent(event);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = JSEventUtils;


/***/ })
/******/ ]);