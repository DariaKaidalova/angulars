import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit {

	exercises = [ 
		{title: 'test', text: 'test test'}, 
		{title: 'test', text: 'test test test test'}
	];
	addNewExBlock(newExTitle, newExText) {
		let newEx = {title: newExTitle, text: newExText}
		if(newEx) {
			this.exercises.push(newEx);
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
