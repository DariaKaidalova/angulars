import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router }  from '@angular/router';

import { ExercisesService } from '../service/exercises-blocks-service.service';
import { ExercisesRestService } from '../service/exercises-blocks-rest-service.service';
import { LanguagesService } from '../service/languages.service';
import { Exercise } from '../interface/exercise.interface';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { СropTextPipe } from '../pipe/сrop-text-pipe.pipe';


@Component({
  selector: 'app-exercises-blocks',
  templateUrl: './exercises-blocks.component.html',
  styleUrls: ['./exercises-blocks.component.css']
  
})
export class ExercisesBlocksComponent implements OnInit, OnChanges {
    @Input() newName: string = '';
    @Input() newDescription: string = '';
    @Input() removeId: number = 0;
    
    messageError: string = '';
    messageSuccess: string = '';
    confirmRemoveMessage: string = '';
    isOpenedPopup: boolean = false;
    isUsed: boolean = false;
    
    
    constructor(
        private _exercisesService: ExercisesService, 
        private _exercisesRestService: ExercisesRestService, 
        private _router: Router,
        private _languagesService: LanguagesService) {}

    ngOnInit() {

        this.getExerciseBlocks();

    }

    ngOnChanges(changes:any) {

        this.getExerciseBlocks();

    }

    @ViewChild(FileUploaderComponent)
    private _fileUploaderComponent: FileUploaderComponent;

    onSubmit(): void {}

    getExerciseBlocks() {

        this._exercisesRestService.get().subscribe(
            exercises => {
                this._exercisesService.exercises = exercises; 
            }, 
            err => { console.log(err); console.error('cannot GET data from the database'); }
        );

    }

    removeExerciseBlock(id) {

        this._exercisesRestService.remove(id).subscribe(
            exercises => { 
                this._exercisesService.remove(id);
                this.getExerciseBlocks();
            }, 
            err => { console.log(err); console.error('cannot REMOVE entry from the database using ID = '+id); }
        );
        

    }

    navigateToDetail(exercise: Exercise) {

        this._router.navigate(['/exercise/review', exercise.id]);

    }

    navigateToEditing(exercise: Exercise) {

        this._router.navigate(['/exercise/update', exercise.id]);

    }

    navigateToAdding() {

        this._router.navigate(['/exercise/add']);
        
    }

    openConfirmPopup(id) {

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
        this.removeId = id;
        this.isOpenedPopup = true;
    }

    closeConfirmPopup() {

        this.isOpenedPopup = false;
        this.confirmRemoveMessage = '';
        this.removeId = 0;

    }

}