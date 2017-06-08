import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { Exercise } from './exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit, OnChanges {
  @Input() newName: string = '';
  @Input() newDescription: string = '';
  newId: number = 0;
  messageError: string = '';
  messageSuccess: string = '';
  isUsed: boolean = false;

  constructor(private _exercisesService: ExercisesService, private _exercisesRestService: ExercisesRestService) {}

  ngOnInit() {
    this.getExerciseBlock();
  }

  ngOnChanges(changes:any) {
    this.getExerciseBlock();
  }

  @ViewChild(FileUploaderComponent)
  private _fileUploaderComponent: FileUploaderComponent;
  onSubmit(): void {}

  getExerciseBlock() {
    this._exercisesRestService.get().subscribe(
      exercises => {this._exercisesService.exercises = exercises;}, 
      err => { console.log(err); }
    );
  }
  
  addExerciseBlock(): void {
    let exercisesOperation:Observable<Exercise[]>;
    const newExersices = {name: this.newName, description: this.newDescription /*, images: this.imagesArray*/};
    this._exercisesService.add(null, this.newName, this.newDescription, this._fileUploaderComponent.uploader.queue);

    this.isUsed = this._exercisesService.isUsed;

    if(!this.isUsed) {
      exercisesOperation = this._exercisesRestService.add(newExersices);
      exercisesOperation.subscribe(
      exercises => {}, 
      err => { console.log(err); });
      //this.getExerciseBlock();
    }

    this.messageSuccess = this._exercisesService.messageSuccess;
    this.messageError = this._exercisesService.messageError;
    this.newName = this._exercisesService.name;
    this.newDescription = this._exercisesService.description;
    //this._fileUploaderComponent.uploader.queue = this._exercisesService.imagesArray;
  }

  removeExerciseBlock(id){
    this._exercisesService.remove(id);
  }
}