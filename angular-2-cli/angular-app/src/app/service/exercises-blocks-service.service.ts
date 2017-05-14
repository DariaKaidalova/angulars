import { Injectable } from '@angular/core';

@Injectable()
export class ExercisesService {
	newId: number = 0;

	this.addExersice(): void {
		const newExersices = {id: this.newId, title: this.newTitle, text: this.newText};
    	this.exercises.push(newExersices);
    	this.newId++;
	}

  	constructor() { }
}
