import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise-interface';
//import { exercises } from '../exercises-blocks/exercise-array';

@Injectable()
export class ExercisesService {
	newId: number = 0;
 	exercises: Array<Exercise> = [];
	
	add(title, text) {
		const newExersices = {id: this.newId, title: title, text: text};
    	this.exercises.push(newExersices);
    	this.newId++;
	}

	remove(id) {
		//this.exercises = this.exercises.filter(id => this.exercises.id !== id);
		for(var i = 0; i <= this.exercises.length-1; i++) {
			if(this.exercises[i] === id) {
				//this.exercises.splice(i, 1, 0);
			}
		}
	}

  	constructor() { }
}
