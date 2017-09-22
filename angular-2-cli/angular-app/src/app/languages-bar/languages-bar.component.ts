import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Global } from '../global';

@Component({
  selector: 'app-languages-bar',
  templateUrl: './languages-bar.component.html',
  styleUrls: ['./languages-bar.component.css']
})
export class LanguagesBarComponent implements OnInit {

	isEn: boolean = true;
	isRu: boolean = false;

  	constructor(private _translateService: TranslateService, private _global: Global) {}

	ngOnInit() {}

	changeLanguage(lang: string) {

		if(lang === 'en' && !this.isEn) {
			this._translateService.use(lang);
			this._translateService.setTranslation('en', this._global.enTitles);
			this.isEn = true;
			this.isRu = false;
			localStorage.setItem('currentLanguage', 'en');
		}
		if(lang === 'ru' && !this.isRu) {
			this._translateService.use(lang);
			this._translateService.setTranslation('ru', this._global.ruTitles);
			this.isRu = true;
			this.isEn = false;
			localStorage.setItem('currentLanguage', 'ru');
		}
		
	}

}
