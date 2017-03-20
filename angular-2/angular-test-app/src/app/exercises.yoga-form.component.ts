import { Component } from '@angular/core';

import { exerciseYoga }  from './exercises.yoga';

@Component({
    selector: 'yoga-form',
    //templateUrl: './yoga.exercises-form.component.html'
    template: `
        <div class="container">
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div class="form-group">
                    <label for="name">Description</label>
                    <textarea class="form-control" id="description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="alterEgo">Link</label>
                    <input type="text" class="form-control" id="link">
                </div>
                <button type="submit" class="btn btn-success">Add</button>
            </form>
        </div>
    `
})
export class YogaExercisesFormComponent {
    debugger;
    model = new exerciseYoga(0, 'Баддха Конасана', 'test', 'test');
    submitted = false;
    onSubmit() { 
        this.submitted = true; 
    }
    // TODO: Remove this when we're done
    get diagnostic() { 
        return JSON.stringify(this.model); 
    }
}
