import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit {
	// addNewExBlock(newExTitle, newExText) {
	// 	let newEx = {title: newExTitle, text: newExText}
	// 	if(newEx) {
	// 		this.exercises.push(newEx);
	// 	}
	// }
	exercise = new Exercise(0, '', '');

 	submitted = false;
  onSubmit() { this.submitted = true; }

  exercises = [
  	{title: 'test', text: 'test'}
  ];

  addNewExBlock(newExTitle, newExText) {
 		this.exercise = new Exercise(this.exercises.length+1, newExTitle, newExText);
    this.exercises.push(
  		{title: this.exercise.title, text: this.exercise.text}
		);
		this.exercise = new Exercise(1, '', '');
		console.log('this.exercises.length:'+this.exercises.length);
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
