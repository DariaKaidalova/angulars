import { Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesRestService } from './exercises-blocks-rest-service.service';
import { Exercise } from '../interface/exercise.interface';
import { LanguagesService } from './languages.service';
import { Image } from '../interface/image.interface';

@Injectable()
export class ExercisesService {
	exercises: Array<Exercise> = [];
	messageIsUsed: string = '';
	messageAdded: string = '';
	messageUpdated: string = '';
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
	  		this.messageError = '';
	  		this.messageSuccess = this.messageAdded;
	  		this.name = '';
	  		this.description = '';
			this.images = [];
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

		this.checkLanguage();

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

		this.checkLanguage();

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

	checkLanguage() {


		if(this._languagesService.isEn) {
			this.messageIsUsed = this._languagesService.enTitles.messageIsUsed;
			this.messageAdded = this._languagesService.enTitles.messageAdded;
			this.messageUpdated = this._languagesService.enTitles.messageUpdated;
			console.log('isEn = '+this._languagesService.isEn);
		}
		if(this._languagesService.isRu) {
			this.messageIsUsed = this._languagesService.ruTitles.messageIsUsed;
			this.messageAdded = this._languagesService.ruTitles.messageAdded;
			this.messageUpdated = this._languagesService.ruTitles.messageUpdated;
			console.log('isRu = '+this._languagesService.isRu);
		}
		if(this._languagesService.isPl) {
			this.messageIsUsed = this._languagesService.plTitles.messageIsUsed;
			this.messageAdded = this._languagesService.plTitles.messageAdded;
			this.messageUpdated = this._languagesService.plTitles.messageUpdated;
			console.log('isPl = '+this._languagesService.isPl);
		}

	}

}
