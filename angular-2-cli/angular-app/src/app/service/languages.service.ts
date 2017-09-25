import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class LanguagesService {

	public isEn: boolean = true;
	public isRu: boolean = false;
	public isPl: boolean = false;

	public enTitles = {
		add_exercise: "Add exercise",
		edit: "Edit",
		delete: "Delete",
		cancel: "Cancel",
		save: "Save",
		clear: "Clear",
		upload: "Upload",
		add: "Add",
		delete_all_images: 'Delete all images',
		back_to_exercises: "Back to exercises"
	}
	public ruTitles = {
		add_exercise: "Добавить упражнение",
		edit: "Редактирвоть",
		delete: "Удалить",
		cancel: "Отмена",
		save: "Сохранить",
		clear: "Очистить",
		pload: "Загрузить",
		add: "Добавить",
		delete_all_images: 'Удалить все изображения',
		back_to_exercises: "Вернуться к упражнениям"
	}
	public plTitles = {
		add_exercise: "Dodaj ćwiczenie",
		edit: "Edytuj",
		delete: "Usuń",
		cancel: "Anuluj",
		save: "Zapisz",
		clear: "Wyczyść",
		pload: "Załaduj",
		add: "Dodaj",
		delete_all_images: 'Usuń wszystkie obrazki',
		back_to_exercises: "Cofnij do ćwiczeń"
	}

	constructor(private _translateService: TranslateService) {}

	ngOnInit() {
		console.log('lang.serv');
	}

	determineLanguage() {
		console.log('determineLanguage');
		var en = 'en', ru = 'ru', pl = 'pl';

		this._translateService.addLangs([en, ru, pl]);
		
		if(localStorage.getItem('currentLanguage') === ru) {

			this.setLanguage(ru, this.ruTitles, false, true, false);

		}
		if(localStorage.getItem('currentLanguage') === pl) {

			this.setLanguage(pl, this.plTitles, false, false, true);

		}
		else {

			this.setLanguage(en, this.enTitles, true, false, false);

		}

	}

	changeLanguage(lang: string) {

		var en = 'en', ru = 'ru', pl = 'pl';

		if(lang === en && !this.isEn) {
			this.setLanguage(en, this.enTitles, true, false, false);
			localStorage.setItem('currentLanguage', en);
		}
		if(lang === ru && !this.isRu) {
			this.setLanguage(ru, this.ruTitles, false, true, false);
			localStorage.setItem('currentLanguage', ru);
		}
		if(lang === pl && !this.isPl) {
			this.setLanguage(pl, this.plTitles, false, false, true);
			localStorage.setItem('currentLanguage', pl);
		}
		
	}

	setLanguage(currentLanguage, languageArray, isEn, isRu, isPl) {

		this._translateService.setDefaultLang(currentLanguage);
		this._translateService.use(currentLanguage);
		this._translateService.setTranslation(currentLanguage, languageArray);
		this.isEn = isEn;
		this.isRu = isRu;
		this.isPl = isPl;

	}


}
