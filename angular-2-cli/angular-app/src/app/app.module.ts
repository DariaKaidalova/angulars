import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { RoutingModule } from './module/routing/routing.module';
import { ExercisesBlocksComponent } from './exercises-blocks/exercises-blocks.component';
import { ExercisesService } from './service/exercises-blocks-service.service';
import { ExercisesRestService } from './service/exercises-blocks-rest-service.service';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TypesBlocksComponent } from './types-blocks/types-blocks.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { ExercisesDetailsComponent } from './exercises-details/exercises-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisesBlocksComponent,
    FileUploaderComponent,
    TypesBlocksComponent,
    NavigationComponent,
    LogoComponent,
    ExercisesDetailsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FileUploadModule
  ],
  providers: [ExercisesService, ExercisesRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
