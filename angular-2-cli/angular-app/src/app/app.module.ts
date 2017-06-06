import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ExercisesBlocksComponent } from './exercises-blocks/exercises-blocks.component';
import { ExercisesService } from './service/exercises-blocks-service.service';
import { ExercisesRestService } from './service/exercises-blocks-rest-service.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesBlocksComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FileUploadModule
  ],
  providers: [ExercisesService, ExercisesRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
