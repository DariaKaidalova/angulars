import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise-interface';
//import { exercises } from '../exercises-blocks/exercise-array';

@Injectable()
export class ExercisesService {
 	exercises: Array<Exercise> = [];
 	newId: number = 0;
	
	add(title, text) {
		const newExersices = {id: this.newId, title: title, text: text};
    	this.exercises.push(newExersices);
    	this.newId++;
	}

	remove(id) {		
		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].id === id) {
				this.exercises.splice(i, 1);
			}
		}
	}

	constructor() { }
}
