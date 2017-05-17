import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise-interface';
//import { exercises } from '../exercises-blocks/exercise-array';

@Injectable()
export class ExercisesService {
 	exercises: Array<Exercise> = [];
 	newId: number = 0;
 	messageIsUsed: string = 'Это упражнение уже добавлено!';
 	messageAdded: string = 'Упражнение добавлено!';
 	messageSuccess: string = '';
 	messageError: string = ''; 
 	isUsed: boolean = false;
	
	add(title, text) {

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].title === title) {
				this.isUsed = true; break;
			}
			else this.isUsed = false;
		}

		if(!this.isUsed) {
			const newExersices = {id: this.newId, title: title, text: text};
	  	this.exercises.push(newExersices);
	  	this.newId++;
	  	this.messageError = '';
	  	this.messageSuccess = this.messageAdded;
  	}
  	else {
  		this.messageSuccess = '';
  		this.messageError = this.messageIsUsed;	
  	}

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
