import { Component } from '@angular/core';
import { Globals } from './globals.vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   constructor(private _globals: Globals) {}

}
