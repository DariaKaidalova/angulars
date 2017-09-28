import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { LanguagesService } from '../service/languages.service';
import { Exercise } from '../interface/exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { Image } from '../interface/image.interface';

@Component({
  selector: 'app-exercises-editing',
  templateUrl: './exercises-editing.component.html',
  styleUrls: ['./exercises-editing.component.css']
})
export class ExercisesEditingComponent implements OnInit {
	exercise;
	editableId: number = 0;
    editableName: string = '';
    editableDescription: string = '';
    editableImages: Array<Image>;
    newImages: Array<Image>;

    isUsed: boolean = false;
    isUpdated: boolean = false;

    confirmRemoveMessage: string = '';
    isOpenedPopup: boolean = false;

    @ViewChild(FileUploaderComponent)
    private _fileUploader: FileUploaderComponent;



	constructor(
		private _exercisesService: ExercisesService, 
		private _exercisesRestService: ExercisesRestService, 
		private _route: ActivatedRoute,
		private _router: Router,
        private _languagesService: LanguagesService
	) {}

	ngOnInit() {

		this.getExerciseBlock();

	}

    ngOnChanges(changes:any) {

        this.getExerciseBlock();

    }

	getExerciseBlock() {

    	this._route.params
            .switchMap((params: Params) => this._exercisesRestService.getById(params['id']) ) // (+) converts string 'id' to a number
            .subscribe(
                exercise => { this.exercise = exercise; 
                                this.editableId = this.exercise.id; 
                                this._exercisesService.find(this.editableId);
                                this.editableName = this.exercise.name;
                                this.editableDescription =  this.exercise.description;
                                this.editableImages = this.exercise.images;
                            },
                err => { console.log(err); console.error('cannot GET editable entry in the database using using ID = '+this.editableId); }
            );
                    
	}

    getExerciseBlocks() {

        this._exercisesRestService.get().subscribe(
            exercises => {this._exercisesService.exercises = exercises;}, 
            err => { console.log(err); console.error('cannot GET data from the database'); }
        );
    }

    removeExerciseBlock() {

        this._exercisesRestService.remove( String(this.editableId) ).subscribe(
            exercises => { 
                this._exercisesService.remove(this.editableId);
                this.getExerciseBlocks();
                this.navigateToExercises();
             }, 
            err => { console.log(err); console.error('cannot REMOVE entry from the database using ID = '+this.editableId); }
        );

    }

    removeImages():void {

        this._exercisesService.removeImages();
        this.editableImages = this._exercisesService.editableImages;

    }

    removeImage(currentImageId):void {

        this._exercisesService.removeImage(currentImageId, this.editableImages);
        this.editableImages = this._exercisesService.editableImages;

    }

    addImages() {

        this._exercisesService.addImages(this.editableImages, this._fileUploader.loadedImages);
        this.editableImages = this._exercisesService.editableImages;
        
    }


	updateExerciseBlock() {

        this.addImages();

        this._exercisesService.update(this.editableId, this.editableName, this.editableDescription, this.editableImages);

        this.isUsed = this._exercisesService.isUsed;

        if(!this.isUsed) {
            let exercisesOperation:Observable<Exercise[]>;
            const editableExersices = { id: this.editableId, name: this.editableName, description: this.editableDescription, images: this.editableImages};
            exercisesOperation = this._exercisesRestService.update(editableExersices);
            exercisesOperation.subscribe(
                exercises => {
                    this.getExerciseBlocks();
                    this.isUpdated = this._exercisesService.isUpdated;
                    setTimeout( 
                        () => { this.navigateToExercises(); }, 1000
                    );
                }, 
                err => { console.log(err); console.error('cannot UPDATE entry in the database using ID = '+this.editableId); }
            );
        }
    }

    openConfirmPopup() {

        if(!this._languagesService.isEn) {
            if(this._languagesService.isRu) {
            this.confirmRemoveMessage = this._languagesService.ruTitles.message_delete_exercise;
            }
            if(this._languagesService.isPl) {
            this.confirmRemoveMessage = this._languagesService.plTitles.message_delete_exercise;
            }
        }
        else {
            this.confirmRemoveMessage = this._languagesService.enTitles.message_delete_exercise;
        }
        this.isOpenedPopup = true;

    }

    closeConfirmPopup() {

        this.isOpenedPopup = false;
        this.confirmRemoveMessage = '';

    }

    navigateToExercises() {
        this._router.navigate(['/exercises']);
    }
}
