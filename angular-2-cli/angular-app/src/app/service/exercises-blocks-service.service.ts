import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesRestService } from './exercises-blocks-rest-service.service';
import { Exercise } from '../interface/exercise.interface';
import { LanguagesService } from './languages.service';
import { Image } from '../interface/image.interface';

@Injectable()
export class ExercisesService {
	exercises: Array<Exercise> = [];
	id: number = 0;
	name: string = '';
	description: string = '';
	images: any = [];
	editableName: string = '';
    editableDescription: string = '';
    editableImages: Array<Image>;

    isUsed: boolean = false;
    isAdded: boolean = false;
    isUpdated: boolean = false;

	constructor(private _exercisesRestService: ExercisesRestService, private _languagesService: LanguagesService) {}

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

		if(!this.isUsed) {
			const newExersices = {id: null, name: this.name, description: this.description, images: this.images};
			this.exercises.push(newExersices);
			this.isAdded = true;
	  		this.name = '';
	  		this.description = '';
			this.images = [];
	  	}
	  	else {
			this.isAdded = false;
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
					this.isUpdated = true;
				}
				else {
					this.isUpdated = false;
				}
				break;
			}
		}
	}

}
