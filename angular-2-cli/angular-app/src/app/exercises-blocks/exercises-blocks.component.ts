import { Component, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from '../service/exercises-blocks-service.service';
import { Exercise } from './exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent {
  newTitle: string = '';
  newText: string = '';
  submitted: boolean = false;
  messageError: string = '';
  messageSuccess: string = '';

  constructor(private _exercisesService: ExercisesService) {}

  @ViewChild(FileUploaderComponent)
  private _fileUploaderComponent: FileUploaderComponent;
  
  onSubmit() { 
    this.submitted = true;
  }

  addNewExBlock(): void {
    // console.log('addNewExBlock');
    // console.log(this._fileUploaderComponent.uploader.queue);
    this._exercisesService.add(this.newTitle, this.newText, this._fileUploaderComponent.uploader.queue);
    this.messageSuccess = this._exercisesService.messageSuccess;
    this.messageError = this._exercisesService.messageError;
    this.newTitle = this._exercisesService.title;
    this.newText = this._exercisesService.text; 
    this._fileUploaderComponent.uploader.queue = this._exercisesService.imagesArray;
  }

  removeExBlock(id){
    this._exercisesService.remove(id);
  }
}