import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { YogaExercisesFormComponent } from './exercises.yoga-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , YogaExercisesFormComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
