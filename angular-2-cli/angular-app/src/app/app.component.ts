import { Component, OnInit, } from '@angular/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	isShowSpinner: boolean = false;

	constructor(private _global: Global) {}

	ngOnInit() {

		this._global.isShowSpinner = true;

		this.isShowSpinner = true;

	}

}
