import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesService } from '../service/languages.service';

@Component({
  selector: 'app-languages-bar',
  templateUrl: './languages-bar.component.html',
  styleUrls: ['./languages-bar.component.css']
})
export class LanguagesBarComponent implements OnInit {

  	constructor(private _translateService: TranslateService, private _languagesService: LanguagesService) {}

	ngOnInit() {
		console.log('languages');
	}

	changeLanguage(lang: string) {

		if(lang === 'en' && !this._languagesService.isEn) {
			this._translateService.use(lang);
			this._translateService.setTranslation('en', this._languagesService.enTitles);
			this._languagesService.isEn = true;
			this._languagesService.isRu = false;
			localStorage.setItem('currentLanguage', 'en');
		}
		if(lang === 'ru' && !this._languagesService.isRu) {
			this._translateService.use(lang);
			this._translateService.setTranslation('ru', this._languagesService.ruTitles);
			this._languagesService.isRu = true;
			this._languagesService.isEn = false;
			localStorage.setItem('currentLanguage', 'ru');
		}
		
	}

}
