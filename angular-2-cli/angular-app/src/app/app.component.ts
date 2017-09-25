import { Component, OnInit} from '@angular/core';
import { LanguagesService } from './service/languages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private _languagesService: LanguagesService) {}

	ngOnInit() {

		console.log('app.comp');
		this._languagesService.determineLanguage();

	}

}
