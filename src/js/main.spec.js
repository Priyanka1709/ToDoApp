import {ToDoApp} from "./main";

describe("Test ToDoApp", function() {
    var todoApp;

    beforeEach(function(){
      debugger;
      todoApp= new ToDoApp();
    }); 
    // it("test checkbox",function(){
    //    expect(todoApp.addCheckbox("say hello")).toBe(8);
    // });
    // it("test close button",function(){
    //    expect(todoApp.addCloseButton("say hello")).toBe(8);
    // });
    it("test list item creation",function(){
       expect(todoApp.createListItem("say hello")).toHaveText("say hello");
    });
});