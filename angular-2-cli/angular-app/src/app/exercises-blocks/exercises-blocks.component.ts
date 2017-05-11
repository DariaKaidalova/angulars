import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit {
	exercise = new Exercise(0, '', '');

 	submitted = false;
  onSubmit() { 
    this.submitted = true; 
  }

  exercises = [];

  addNewExBlock(newExTitle, newExText) {
 		this.exercise = new Exercise(this.exercises.length+1, newExTitle, newExText);
    this.exercises.push(
  		{id: this.exercises.length+1, title: this.exercise.title, text: this.exercise.text}
		);
		this.exercise = new Exercise(0, '', '');
    console.log(this.exercises);
  }

  constructor() {}
  ngOnInit() {}
}

export class Exercise {
  constructor(
    public id: number,
    public title: string,
    public text: string,
  ) {  }
}
