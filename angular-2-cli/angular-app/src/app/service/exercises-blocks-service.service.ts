import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesRestService } from './exercises-blocks-rest-service.service';
import { Exercise } from '../exercises-blocks/exercise.interface';

@Injectable()
export class ExercisesService {
 	exercises: Array<Exercise> = [];
 	messageIsUsed: string = 'Упражнение c данным названием уже добавлено!';
 	messageAdded: string = 'Упражнение добавлено!';
 	messageSuccess: string = '';
 	messageError: string = ''; 
 	isUsed: boolean = false;
 	id: number = 0;
 	name: string = '';
  description: string = '';
  imagesArray: any = [];

  constructor(private _exercisesRestService: ExercisesRestService) {}

	add(id, name, description, imagesArray) {
		this.id = id;
		this.name = name.trim();
		this.description = description;
		//this.imagesArray = imagesArray;

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].name === this.name) {
				this.isUsed = true; break;
			}
			else this.isUsed = false;
		}

		if(!this.isUsed) {
			const newExersices = {id: this.id, name: this.name, description: this.description /*, images: this.imagesArray*/};
	  	this.exercises.push(newExersices);
	  	this._exercisesRestService.add(newExersices);
	  	this.messageError = '';
	  	this.messageSuccess = this.messageAdded;
	  	this.name = '';
	  	this.description = '';
			//this.imagesArray = [];
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
