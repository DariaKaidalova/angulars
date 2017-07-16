import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router, ActivatedRoute, Params }  from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { Exercise } from '../exercises-blocks/exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
	selector: 'app-exercises-details',
	templateUrl: './exercises-details.component.html',
	styleUrls: ['./exercises-details.component.css']
})
export class ExercisesDetailsComponent implements OnInit {
	exercise;
	editableId: number = 0;
    editableName: string = '';
    editableDescription: string = '';

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
                            },
                err => { console.log(err); console.error('cannot GET editable entry in the database using using ID = '+this.editableId); }
            );
                    
	}

    navigateToExercises() {
        this._router.navigate(['/exercises']);
    }

}
