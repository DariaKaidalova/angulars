import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { Exercise } from './exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';

@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
})
export class ExercisesBlocksComponent implements OnInit, OnChanges {
    @Input() newName: string = '';
    @Input() newDescription: string = '';
    
    editableId:number = 0;
    editableName: string = '';
    editableDescription: string = '';
    isOpenedPopup: boolean = false;

    messageError: string = '';
    messageSuccess: string = '';
    isUsed: boolean = false;

    messageEditableError: string = '';
    messageEditableSuccess: string = '';
    isEditableUsed: boolean = false;
    
    constructor(private _exercisesService: ExercisesService, private _exercisesRestService: ExercisesRestService) {}

    ngOnInit() {

        this.getExerciseBlock();

    }

    ngOnChanges(changes:any) {

        this.getExerciseBlock();

    }

    @ViewChild(FileUploaderComponent)
    private _fileUploaderComponent: FileUploaderComponent;

    onSubmit(): void {}

    getExerciseBlock() {

        this._exercisesRestService.get().subscribe(
            exercises => {this._exercisesService.exercises = exercises;}, 
            err => { console.log(err); console.error('cannot GET data from the database'); }
        );
    }

    addExerciseBlock(): void {

        let exercisesOperation:Observable<Exercise[]>;
        const newExersices = {name: this.newName, description: this.newDescription /*, images: this.imagesArray*/};
        this._exercisesService.add(null, this.newName, this.newDescription, this._fileUploaderComponent.uploader.queue);

        this.isUsed = this._exercisesService.isUsed;

        if(!this.isUsed) {
            exercisesOperation = this._exercisesRestService.add(newExersices);
            exercisesOperation.subscribe(
                exercises => {  }, 
                err => { console.log(err); console.error('cannot ADD entry in the database using NAME = '+this.newName); });
        }

        this.messageSuccess = this._exercisesService.messageSuccess;
        this.messageError = this._exercisesService.messageError;
        this.newName = this._exercisesService.name;
        this.newDescription = this._exercisesService.description;
        //this._fileUploaderComponent.uploader.queue = this._exercisesService.imagesArray;

    }

    removeExerciseBlock(id) {

        this._exercisesRestService.remove(id).subscribe(
            exercises => {  }, 
            err => { console.log(err); console.error('cannot REMOVE entry in the database using ID = '+id); }
        );
        this._exercisesService.remove(id);

    }

   
    updateExerciseBlock() {

        this._exercisesService.update(this.editableId, this.editableName, this.editableDescription);

        this.isEditableUsed = this._exercisesService.isUsed;

        if(!this.isEditableUsed) {
            let exercisesOperation:Observable<Exercise[]>;
            const editableExersices = { id: this.editableId, name: this.editableName, description: this.editableDescription };
            exercisesOperation = this._exercisesRestService.update(editableExersices);
            exercisesOperation.subscribe(
                exercises => {}, 
                err => { console.log(err); console.error('cannot UPDATE entry in the database using ID = '+this.editableId); }
            );
        }

        this.messageEditableSuccess = this._exercisesService.messageSuccess;
        this.messageEditableError = this._exercisesService.messageError;
    }

    openPopup(id) {

        this.isOpenedPopup = true;
        this._exercisesService.find(id);
        this.editableName = this._exercisesService.editableName;
        this.editableDescription = this._exercisesService.editableDescription;
        this.editableId = id;

    }


    closePopup() {

        this.isOpenedPopup = false;
        this.messageEditableSuccess = '';
        this.messageEditableError = '';

    }
}