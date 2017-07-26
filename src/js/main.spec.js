import {ToDoApp} from "./main";
import {JSEventUtils} from "./utils/js-event-utils";

describe("Test ToDoApp", function() {
    var todoApp;

    beforeAll(function(){
      todoApp= new ToDoApp();

      // var containerDiv= document.createElement('div');

      // var form= document.createElement('form');

      // var taskInput= document.createElement('input');
      // taskInput.id= 'taskInput';

      // form.appendChild(taskInput);
      // containerDiv.appendChild(form);

      // var addButton= document.createElement('button');
      // addButton.classList.add('addButton');
      // containerDiv.appendChild(addButton);

      // var toDoItems= document.createElement('ul');
      // toDoItems.classList.add('toDoItems');
      // containerDiv.appendChild(toDoItems);

      // var body = document.getElementsByTagName("body")[0];
      // body.appendChild(containerDiv);
    });

    describe("Test LoadApp", function() {
        beforeEach(function(){
          spyOn(todoApp, "initialize");
          spyOn(todoApp, "renderList");
          spyOn(todoApp, "attachEventHandlers");

          todoApp.loadApp();
        }); 

        it("test that loadApp has called all the functions",function(){         
          expect(todoApp.initialize).toHaveBeenCalled();
          expect(todoApp.renderList).toHaveBeenCalled();
          expect(todoApp.attachEventHandlers).toHaveBeenCalled();
        });
    });

    // describe("Test RenderList", function() {
    //     beforeEach(function(){
    //       jasmine.stub(todoApp, "toDoItems", 2);

    //       spyOn(todoApp, "createListItem");

    //       todoApp.renderList();
    //     }); 

    //     it("test that createListItem has been called the required number of times",function(){         
    //       expect(todoApp.createListItem).toHaveBeenCalled(2);
    //     });
    // });

    afterAll(function(){
      todoApp= undefined;
    });
    
});