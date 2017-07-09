import { Component, OnInit, OnChanges, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router }  from '@angular/router';

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
    
    messageError: string = '';
    messageSuccess: string = '';
    isUsed: boolean = false;
    
    constructor(
        private _exercisesService: ExercisesService, 
        private _exercisesRestService: ExercisesRestService, 
        private _router: Router) {}

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

    removeExerciseBlock(id) {

        this._exercisesRestService.remove(id).subscribe(
            exercises => {  }, 
            err => { console.log(err); console.error('cannot REMOVE entry from the database using ID = '+id); }
        );
        this._exercisesService.remove(id);

    }

    navigateToDetails(exercise: Exercise) {

        console.log(exercise.id);
        this._router.navigate(['/exercise', exercise.id]);

    }

    navigateToAdding() {

        this._router.navigate(['/adding']);
        
    }
}