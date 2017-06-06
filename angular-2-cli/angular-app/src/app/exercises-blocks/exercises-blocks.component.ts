import { Component, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from '../service/exercises-blocks-service.service';
import { Exercise } from './exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit {
  newTitle: string = '';
  newText: string = '';
  messageError: string = '';
  messageSuccess: string = '';

  constructor(private _exercisesService: ExercisesService) {}

  ngOnInit() {
    this.getExercises();
    console.log('exercises:');
    console.log(this._exercisesService.exercises);
  }

  @ViewChild(FileUploaderComponent)
  private _fileUploaderComponent: FileUploaderComponent;
  onSubmit(): void {}

  getExercises() {
    this._exercisesService.get();
  }
  
  addExerciseBlock(): void {
    this._exercisesService.add(this.newTitle, this.newText, this._fileUploaderComponent.uploader.queue);
    this.messageSuccess = this._exercisesService.messageSuccess;
    this.messageError = this._exercisesService.messageError;
    this.newTitle = this._exercisesService.title;
    this.newText = this._exercisesService.text;
    this._fileUploaderComponent.uploader.queue = this._exercisesService.imagesArray;
  }

  removeExerciseBlock(id){
    this._exercisesService.remove(id);
  }
}