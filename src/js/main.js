import '../styles/style.less';
import {JSEventUtils} from "./utils/js-event-utils";
import _ from 'lodash';

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
        this.jsUtils = new JSEventUtils();

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
        _.each(this.toDoItems, function (value) {
          this.listItemsPane.appendChild(this.createListItem(value));
        });
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