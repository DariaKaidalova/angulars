import { Component } from '@angular/core';
import { Framework } from './frameworks';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div #newFramework>
      <input (keyup.enter)="addFramework(newFramework.value)"
      (blur)="addFramework(newFramework.value); newFramework.value=''">
      <button (click)="addFramework(newFramework.value)">Add</button>
    </div>
    <ul>
       <li *ngFor="let framework of frameworks"> {{framework.name}} </li>
     </ul>`
})

export class AppComponent  { 
  title = 'Frameworks';
  frameworks = [
    new Framework(1, 'Angular 1'),
    new Framework(2, 'Angular 2'),
    new Framework(3, 'React'),
    new Framework(4, 'Vou')
  ];

  console.log(this.frameworks);
  
  addFramework(newFramework: string) {
    if(newFramework) {
      console.log(this.frameworks.length);
      this.frameworks.push(this.frameworks.length, new Framework(newFramework));
      //this.frameworks.push(newFramework);
    }
  }
}
