import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesRestService } from './exercises-blocks-rest-service.service';
import { Exercise } from '../exercises-blocks/exercise.interface';

@Injectable()
export class ExercisesService {
	exercises: Array<Exercise> = [];
	messageIsUsed: string = 'Упражнение c данным названием уже добавлено!';
	messageAdded: string = 'Упражнение добавлено!';
	messageUpdated: string = 'Упражнение обновлено!';
	messageSuccess: string = '';
	messageError: string = ''; 
	isUsed: boolean = false;
	id: number = 0;
	name: string = '';
	description: string = '';
	imagesArray: any = [];
	editableName: string = '';
    editableDescription: string = '';

	constructor(private _exercisesRestService: ExercisesRestService) {}

	сheckIdenticalNames(comparable_name) {

		for(var i = 0; i < this.exercises.length; i++) { //this.name
			if(this.exercises[i].name === comparable_name) {
				this.isUsed = true; 
				break;
			}
			else this.isUsed = false;
		}

	}

	add(id, name, description, imagesArray) {
		this.id = id;
		this.name = name.trim();
		this.description = description;
		//this.imagesArray = imagesArray;

		this.сheckIdenticalNames(this.name);

		if(!this.isUsed) {
			const newExersices = {id: null, name: this.name, description: this.description /*, images: this.imagesArray*/};
			this.exercises.push(newExersices);
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
				break;
			}
		}

	}

	find(id) {

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].id === id) {
				this.editableName = this.exercises[i].name; 
				this.editableDescription = this.exercises[i].description;
				console.log(this.editableName, this.editableDescription);
				break;
			}
		}

	}

	update(id, name, description) {

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].id === id) {
				if(this.exercises[i].name != name.trim()) this.сheckIdenticalNames(name);
				if(!this.isUsed) {
					this.exercises[i].name = name; 
					this.exercises[i].description = description;
					this.messageError = '';
	  				this.messageSuccess = this.messageUpdated;
				}
				else {
					this.messageSuccess = '';
	  				this.messageError = this.messageIsUsed;
				}
				break;
				
			}
		}
	}

}
