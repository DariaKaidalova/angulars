import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { Exercise } from '../exercises-blocks/exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { Image } from '../file-uploader/image.interface';

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

    messageEditableError: string = '';
    messageEditableSuccess: string = '';
    isEditableUsed: boolean = false;

	constructor(
		private _exercisesService: ExercisesService, 
		private _exercisesRestService: ExercisesRestService, 
		private _route: ActivatedRoute,
		private _router: Router
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
            exercises => {  }, 
            err => { console.log(err); console.error('cannot REMOVE entry from the database using ID = '+this.editableId); }
        );
        this._exercisesService.remove(this.editableId);
        this._router.navigate(['/exercises']);
    }

    removeImages():void {
        this._exercisesService.removeImages();
        this.editableImages = this._exercisesService.editableImages;
    }

    removeImage(currentImageId):void {
        this._exercisesService.removeImage(currentImageId, this.editableImages);
        this.editableImages = this._exercisesService.editableImages;
    }


	updateExerciseBlock() {

        console.log('updateExerciseBlock');

        this._exercisesService.update(this.editableId, this.editableName, this.editableDescription);

        this.isEditableUsed = this._exercisesService.isUsed;

        if(!this.isEditableUsed) {
            let exercisesOperation:Observable<Exercise[]>;
            const editableExersices = { id: this.editableId, name: this.editableName, description: this.editableDescription, images: this.editableImages};
            exercisesOperation = this._exercisesRestService.update(editableExersices);
            exercisesOperation.subscribe(
                exercises => {
                    this.getExerciseBlocks();
                    this._router.navigate(['/exercises']);
                }, 
                err => { console.log(err); console.error('cannot UPDATE entry in the database using ID = '+this.editableId); }
            );
        }

        this.messageEditableSuccess = this._exercisesService.messageSuccess;
        this.messageEditableError = this._exercisesService.messageError;
    }
}
