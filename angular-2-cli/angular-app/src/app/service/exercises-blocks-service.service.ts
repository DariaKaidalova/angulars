import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesRestService } from './exercises-blocks-rest-service.service';
import { Exercise } from '../interface/exercise.interface';
import { Image } from '../interface/image.interface';

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
	images: any = [];
	editableName: string = '';
    editableDescription: string = '';
    editableImages: Array<Image>;

	constructor(private _exercisesRestService: ExercisesRestService) {}

	сheckIdenticalNames(comparableName) {

		for(var i = 0; i < this.exercises.length; i++) { //this.name
			if(this.exercises[i].name === comparableName) {
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
		this.images = imagesArray;

		this.сheckIdenticalNames(this.name);

		console.log('this.images from exercices-blocks-service:');
		console.log(this.images);

		if(!this.isUsed) {
			const newExersices = {id: null, name: this.name, description: this.description, images: this.images};
			this.exercises.push(newExersices);
	  		this.messageError = '';
	  		this.messageSuccess = this.messageAdded;
	  		this.name = '';
	  		this.description = '';
			this.images = [];

			console.log('this.exercises from exercices-blocks-service:');
			console.log(this.exercises);
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

    removeImages():void {
        this.editableImages = [];
    }

    addImages(editableImagesArray, newImagesArray) {

    	if(editableImagesArray.length === 0 && newImagesArray.length !== 0) {
    		this.editableImages = newImagesArray;
    	}
		if(editableImagesArray.length !== 0 && newImagesArray.length === 0) {
    		this.editableImages = editableImagesArray;
    	}  
    	else {
    		this.editableImages = editableImagesArray.concat(newImagesArray);
    	}
    	
    }

	removeImage(imageId, imageArray) {
        for(var i = 0; i < imageArray.length; i++) {
            if(imageId === imageArray[i].id) {
                imageArray.splice(i, 1);
                this.editableImages = imageArray;
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

	update(id, name, description, imagesArray) {

		for(var i = 0; i < this.exercises.length; i++) {
			if(this.exercises[i].id === id) {
				if(this.exercises[i].name != name.trim()) this.сheckIdenticalNames(name);
				if(!this.isUsed) {
					this.exercises[i].name = name; 
					this.exercises[i].description = description;
					this.exercises[i].images = imagesArray;
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
