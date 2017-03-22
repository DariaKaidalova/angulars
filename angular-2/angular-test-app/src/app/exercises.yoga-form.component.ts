import { Component } from '@angular/core';
import { exerciseYoga }  from './exercises.yoga';

@Component({
    selector: 'yoga-form',
    templateUrl: './yoga.exercises-form.component.html'
})
export class YogaExercisesFormComponent {
    
  model = new exerciseYoga(1, 'test', 'test', 'test');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newExerciseYoga() {
    this.model = new exerciseYoga(2, '', '', '');
  }
}
