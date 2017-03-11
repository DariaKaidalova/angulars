import { Component } from '@angular/core';
import { Framework } from './frameworks';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
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
}
