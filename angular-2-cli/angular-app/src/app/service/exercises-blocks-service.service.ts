import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise.interface';

@Injectable()
export class ExercisesService {
 	exercises: Array<Exercise> = [];
 	newId: number = 0;
 	messageIsUsed: string = 'Упражнение c данным названием уже добавлено!';
 	messageAdded: string = 'Упражнение добавлено!';
 	messageSuccess: string = '';
 	messageError: string = ''; 
 	isUsed: boolean = false;
 	title: string = '';
  text: string = '';
  imagesArray: any = [];

  clearMessageBlock() {
  	this.messageSuccess = '';
  	console.log('test');
	}
	
	add(title, text, imagesArray) {
		this.title = title.trim();
		this.text = text;
		this.imagesArray = imagesArray;

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].title === this.title) {
				this.isUsed = true; break;
			}
			else this.isUsed = false;
		}

		if(!this.isUsed) {
			console.log(this.imagesArray);
			const newExersices = {id: this.newId, title: this.title, text: this.text, images: this.imagesArray};
	  	this.exercises.push(newExersices);
	  	this.newId++;
	  	this.messageError = '';
	  	this.messageSuccess = this.messageAdded;
	  	this.title = '';	
			this.text = '';
			this.imagesArray = [];

			//setTimeout(this.clearMessageBlock(), 10000);
			// setTimeout(() => {
   //    	this.messageSuccess = '';
   //  	}, 1000);
			// console.log('cleared message', this.messageSuccess);
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
