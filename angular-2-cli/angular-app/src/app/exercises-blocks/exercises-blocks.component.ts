import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../service/exercises-blocks-service.service';
import { Exercise } from './exercise-interface';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent {
  newTitle: string;
  newText: string;
  submitted: boolean = false;
  messageError: string = '';
  messageSuccess: string = '';

 	constructor(private _exercisesService: ExercisesService) {}

  onSubmit() { 
    this.submitted = true; 
  }

  addNewExBlock(): void {
    this._exercisesService.add(this.newTitle, this.newText);
    this.messageSuccess = this._exercisesService.messageSuccess;
    this.messageError = this._exercisesService.messageError;
  }

  removeExBlock(id){
    this._exercisesService.remove(id);
  }
}