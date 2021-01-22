import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';

import { CoursesModule } from './courses/courses.module';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [ // declare of all the components, directives and pipes of the project
    AppComponent,
    MyFirstComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
