import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    // TypeScript helps check code before runtime. Here title is always a string so we initialize title to be a string
    title: string;

    // First the component constructor is run. The constructor should be used to initialize component variables. No logic
    constructor() { }

    // Second the component init function is run. The init function is where the starting logic of the component should occur
    ngOnInit() {
        // here we give title a value
        // `this` is the component
        this.title = 'ToDo App';
    }

    // The last thing a component does is get destroyed. This happens when a component is no longer valid either by removal or page transition
    // This is a good place to destroy component variables to help with memory
    ngOnDestroy() { }
}
