import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()

export class LanguagesService {

	public isEn: boolean = true;
	public isRu: boolean = false;
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

	constructor(private _translateService: TranslateService) {}

	ngOnInit() {}

	determineLanguage() {

		this._translateService.addLangs(['en', 'ru']);
		
		if(localStorage.getItem('currentLanguage') === 'ru') {
			this._translateService.setDefaultLang('ru');
			this._translateService.use('ru');
			this._translateService.setTranslation('ru', this.ruTitles);
			this.isRu = true;
			this.isEn = false;
		}
		else {
			this._translateService.setDefaultLang('en');
			this._translateService.use('en');
			this._translateService.setTranslation('en', this.enTitles);
		}

	}

}
