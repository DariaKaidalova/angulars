import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExercisesBlocksComponent } from './exercises-blocks/exercises-blocks.component';
import { ExercisesService } from './service/exercises-blocks-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesBlocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ExercisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
