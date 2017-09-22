import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FileUploadModule } from 'ng2-file-upload';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

/*app component*/
import { AppComponent } from './app.component';
/*file for global thinfs*/
import { Global } from './global';
/*routing*/
import { RoutingModule } from './module/routing/routing.module';

/* services */
import { ExercisesService } from './service/exercises-blocks-service.service';
import { ExercisesRestService } from './service/exercises-blocks-rest-service.service';
import { MainService } from './service/main-service.service';
import { WindowService } from './service/window.service';

/* components */
import { ExercisesBlocksComponent } from './exercises-blocks/exercises-blocks.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TypesBlocksComponent } from './types-blocks/types-blocks.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { ExercisesDetailsComponent } from './exercises-details/exercises-details.component';
import { ExercisesAddingComponent } from './exercises-adding/exercises-adding.component';
import { ExercisesEditingComponent } from './exercises-editing/exercises-editing.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';
import { СropTextPipe } from './pipe/сrop-text-pipe.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';
import { LanguagesBarComponent } from './languages-bar/languages-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExercisesBlocksComponent,
    FileUploaderComponent,
    TypesBlocksComponent,
    NavigationComponent,
    LogoComponent,
    ExercisesDetailsComponent,
    ExercisesAddingComponent,
    ExercisesEditingComponent,
    ConfirmationPopupComponent,
    ImagesGalleryComponent,
    СropTextPipe,
    SpinnerComponent,
    LanguagesBarComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FileUploadModule,
    TranslateModule.forRoot()
  ],
  providers: [
    ExercisesService, 
    ExercisesRestService,
    MainService,
    WindowService,
    Global
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
