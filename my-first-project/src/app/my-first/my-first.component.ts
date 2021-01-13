
import { Component } from "@angular/core";

@Component({ // decorator to give compiler additional info and inform that the code below is an angular component
    // here goes the metadata 
    selector: 'my-first-component', // creation of HTML tag that we create to use this component
    template: `
     <p>Meu primeiro component com Angular 2!!</p>
    `
}) 

export class MyFirstComponent { } // only visible in this file without export + declaration in app.module.ts!