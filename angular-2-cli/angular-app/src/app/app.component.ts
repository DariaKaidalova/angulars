import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Global } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private _translateService: TranslateService, private _global: Global) {}

	ngOnInit() {
		this._translateService.addLangs(['en', 'ru']);
		this._translateService.setDefaultLang('en');
		this._translateService.use('en');
		// if(localStorage.getItem('currentLanguage') === 'ru') {
		// 	this._translateService.setTranslation('ru', this._global.ruTitles);
		// 	console.log(localStorage.getItem('currentLanguage'));
		// }
		// else {
		// 	this._translateService.setTranslation('en', this._global.enTitles);
		// }
		this._translateService.setTranslation('en', this._global.enTitles);
	}

}
