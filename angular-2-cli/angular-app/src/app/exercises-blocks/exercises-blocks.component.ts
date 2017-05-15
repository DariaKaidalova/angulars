import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../service/exercises-blocks-service.service';
import { Exercise } from './exercise-interface';


@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css'],
  providers: [ExercisesService]
})
export class ExercisesBlocksComponent {
  newTitle: string;
  newText: string;
  exercises: Array<Exercise> = [
    {id: 0, title: 'test test', text: 'ytyty'}
  ];
  submitted: boolean = false;

 	constructor(private _exercisesService: ExercisesService) {}

  onSubmit() { 
    this.submitted = true; 
  }

  addNewExBlock(): void {
    this._exercisesService.add(this.newTitle, this.newText); 
  }
}