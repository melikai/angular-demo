import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'todo-component',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
    // template can used to inline the HTML in the component
    // template: `<div>{{ title }}</div>`,
    // styles can be used to inline the styles in the component
    // styles: [
    //    'div { display: none; }'
    // ],
    // Emulated encapsulation is the default. Adding encapsulation is optional
    // encapsulation: ViewEncapsulation.Emulated
})
export class ToDoComponent implements OnInit, OnDestroy {
    // Put anything that the template needs at the top.
    // add a todo array
    private todos: string[];

    // create the newTodo item used in the template
    private newTodo: string;

    // First the component constructor is run. The constructor should be used to initialize component variables. No logic
    constructor() { }

    // Second the component init function is run. The init function is where the starting logic of the component should occur
    ngOnInit() {
        // add some todos to the array
        this.todos = ['Homework', 'B507'];
    }

    // function to add a new todo to the todos list
    private addTodo(newTodo: string) {
        // newTodo is the parameter from the submit form
        // push is a native javascript function to add to an array
        this.todos.push(newTodo);
        // Angular will automatically update the template
        // clear the input box after submitting
        this.newTodo = '';
    }

    // Function to remove a todo from the todos list
    private deleteTodo(index) {
        // remove the todo at index
        this.todos.splice(index, 1);
    }

    // The last thing a component does is get destroyed. This happens when a component is no longer valid either by removal or page transition
    // This is a good place to destroy component variables to help with memory
    ngOnDestroy() { }
}