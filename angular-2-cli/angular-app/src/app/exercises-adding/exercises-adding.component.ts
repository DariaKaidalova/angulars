import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router }  from '@angular/router';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { Exercise } from '../exercises-blocks/exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-exercises-adding',
  templateUrl: './exercises-adding.component.html',
  styleUrls: ['./exercises-adding.component.css']
})
export class ExercisesAddingComponent implements OnInit, OnChanges {

	@Input() newName: string = '';
	@Input() newDescription: string = '';
    @Input() newImages: Array<{}>;
    @ViewChild(FileUploaderComponent)
    private _fileUploader: FileUploaderComponent;

	messageError: string = '';
	messageSuccess: string = '';
	isUsed: boolean = false;

	constructor(
		private _exercisesService: ExercisesService, 
		private _exercisesRestService: ExercisesRestService, 
		private _router: Router) {}

	ngOnInit() {}

    ngOnChanges(changes: any) {}

    onSubmit(): void {}

    getExerciseBlocks() {

        this._exercisesRestService.get().subscribe(
            exercises => {
                this._exercisesService.exercises = exercises;
            }, 
            err => { console.log(err); console.error('cannot GET data from the database'); }
        );
    }

    addExerciseBlock(): void {
    
        let exercisesOperation:Observable<Exercise[]>;
        const newExersices = {
            name: (this.newName).trim(), 
            description: this.newDescription, 
            images: this._fileUploader.loadedImages
        };

        this._exercisesService.add(null, newExersices.name, newExersices.description, newExersices.images);

        this.isUsed = this._exercisesService.isUsed;

        if(!this.isUsed) {
            exercisesOperation = this._exercisesRestService.add(newExersices);
            exercisesOperation.subscribe(
                exercises => { 
                    this.getExerciseBlocks();
                    this._router.navigate(['/exercises']); 
                }, 
                err => { console.log(err); console.error('cannot ADD entry into the database using NAME = '+newExersices.name); });
        }

        this.messageSuccess = this._exercisesService.messageSuccess;
        this.messageError = this._exercisesService.messageError;
        this.newName = this._exercisesService.name;
        this.newDescription = this._exercisesService.description;
        this.newImages = this._exercisesService.images;

    }

}
