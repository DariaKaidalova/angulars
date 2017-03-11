import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ], // the BrowserModule that this and every application needs to run in a browser
  declarations: [ AppComponent ], //the application's lone component: components, directives and pipes
  bootstrap:    [ AppComponent ] //the root component that Angular creates and inserts into the index.html host web page.
})
export class AppModule { }
