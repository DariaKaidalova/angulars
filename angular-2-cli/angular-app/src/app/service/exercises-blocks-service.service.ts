import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise.interface';

@Injectable()
export class ExercisesService {
 	exercises: Array<Exercise> = [];
 	newId: number = 0;
 	messageIsUsed: string = 'Это упражнение уже добавлено!';
 	messageNotUploaded: string = 'Пожалуйста загрузите картинку';
 	messageAdded: string = 'Упражнение добавлено!';
 	messageSuccess: string = '';
 	messageError: string = ''; 
 	isUsed: boolean = false;
	
	add(title, text, numabersImages) {

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].title === title) {
				this.isUsed = true; break;
			}
			else this.isUsed = false;
		}

		if(!this.isUsed) {

			if(!numabersImages) {
				this.messageSuccess = '';
  			this.messageError = this.messageNotUploaded;	
  		}
  		else {
				const newExersices = {id: this.newId, title: title, text: text};
		  	this.exercises.push(newExersices);
		  	this.newId++;
		  	this.messageError = '';
		  	this.messageSuccess = this.messageAdded;
	  	}

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

	constructor() {}
}
