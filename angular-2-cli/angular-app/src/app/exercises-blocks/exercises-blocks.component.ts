import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit {

	exercises = ['jjhjhh', 'kjkjkjkj'];
	addNewExBlock(newEx: string) {
		if(newEx) {
			this.exercises.push(newEx);
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
