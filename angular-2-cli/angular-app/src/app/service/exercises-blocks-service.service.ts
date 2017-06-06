import { Injectable } from '@angular/core';
import { Exercise } from '../exercises-blocks/exercise.interface';
import { ExercisesRestService } from './exercises-blocks-rest-service.service';

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

  constructor(private _exercisesRestService: ExercisesRestService) {}

  get() {
  	this._exercisesRestService.get().subscribe(
			exercises => this.exercises = exercises, 
			err => { console.log(err); }
		);
		console.log('test:');
		console.log(this.exercises);
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
			const newExersices = {id: this.newId, title: this.title, text: this.text, images: this.imagesArray};
	  	this.exercises.push(newExersices);
	  	this.newId++;
	  	this.messageError = '';
	  	this.messageSuccess = this.messageAdded;
	  	this.title = '';
	  	this.text = '';
			this.imagesArray = [];
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

}
