import { Component } from '@angular/core';

import { exerciseYoga }  from './exercises.yoga';

@Component({
    selector: 'yoga-exercises-form',
    templateUrl: './yoga.exercises-form.component.html'
})
export class YogaExercisesFormComponent {

    model = new exerciseYoga(0, 'Баддха Конасана', 'test', 'http://yogasecrets.ru/praktika/asany-yogi/baddha-konasana');
    submitted = false;
    onSubmit() { 
        this.submitted = true; 
    }
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }

}
