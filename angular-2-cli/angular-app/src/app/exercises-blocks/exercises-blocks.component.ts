import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent {
  newTitle: string;
  newText: string;
  newId: number = 0;
  exercises: Array<Exercise> = [];
  submitted: boolean = false;

 	constructor() {}

  onSubmit() { 
    this.submitted = true; 
  }

  addNewExBlock(): void {
 		const newExersices = {id: this.newId, title: this.newTitle, text: this.newText};
    this.exercises.push(
  		newExersices
		);
    //this.exersiceService.add(this.newTitle, this.newText)
    console.log(this.exercises)
    this.newId++;
  }
}

export interface Exercise {
  id: number;
  title: string;
  text: string;
}
