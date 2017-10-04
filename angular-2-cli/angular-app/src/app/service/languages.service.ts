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
		back_to_exercises: "Back to exercises",
		menu_main: "Home",
		menu_yoga_types: "Yoga types",
		exercise_name: "Name of the exercise",
		exercise_description: "Description of the exercise",
		exercise_images: "Photos",
		upload_images: "Upload images",
		message_is_used: 'The exercise with this name has already been added!',
		message_added: 'The exercise has been added!',
		message_updated: 'The exercise has been updated!',
		message_required: 'Please fill in all required fields!',
		message_delete_exercise: 'Are you sure you want to delete the exercise?',
		message_is_400_empty_file: 'Upload error: an empty file was uploaded!',
		message_is_400_upload_error: 'Upload error!',
		message_is_400_too_large_size: 'Upload error: too large file was uploaded!',
		message_is_400_unknown_error: 'Unknown upload error!',
		yes: 'Yes',
		no: 'No'
	}
	public ruTitles = {
		add_exercise: "Добавить упражнение",
		edit: "Редактирвоть",
		delete: "Удалить",
		cancel: "Отмена",
		save: "Сохранить",
		clear: "Очистить",
		upload: "Загрузить",
		add: "Добавить",
		delete_all_images: 'Удалить все изображения',
		back_to_exercises: "Вернуться к упражнениям",
		menu_main: "Главная",
		menu_yoga_types: "Виды йоги",
		exercise_name: "Название упражнения",
		exercise_description: "Описание упражнения",
		exercise_images: "Фотографии",
		upload_images: "Загрузить изображения",
		message_is_used: 'Упражнение c данным названием уже добавлено!',
		message_added: 'Упражнение добавлено!',
		message_updated: 'Упражнение обновлено!',
		message_required: 'Пожалуйста заполните все обязательные поля!',
		message_delete_exercise: 'Вы уверены, что хотите удалить упражнение?',
		message_is_400_empty_file: 'Ошибка загрузки: был загружен пустой файл!',
		message_is_400_upload_error: 'Ошибка загрузки!',
		message_is_400_too_large_size: 'Ошибка загрузки: был загружен файл слишком большого размера!',
		message_is_400_unknown_error: 'Неизвестная ошибка загрузки!',
		yes: 'Да',
		no: 'Нет'
	}
	public plTitles = {
		add_exercise: "Dodaj ćwiczenie",
		edit: "Edytuj",
		delete: "Usuń",
		cancel: "Anuluj",
		save: "Zapisz",
		clear: "Wyczyść",
		upload: "Załaduj",
		add: "Dodaj",
		delete_all_images: 'Usuń wszystkie obrazki',
		back_to_exercises: "Cofnij do ćwiczeń",
		menu_main: "Strona główna",
		menu_yoga_types: "Rodzaje jogi",
		exercise_name: "Nazwa ćwiczenia",
		exercise_description: "Opis ćwiczenia",
		exercise_images: "Zdięcia",
		upload_images: " Załaduj obrazki",
		message_is_used: 'Ćwiczenie z tą nazwą zostało już dodane!',
		message_added: 'Ćwiczenie dodane!',
		message_updated: 'Ćwiczenie zostało zaktualizowane!',
		message_required: 'Proszę wypełnić wszystkie wymagane pola!',
		message_delete_exercise: 'Czy na pewno chcesz usunąć ćwiczenie?',
		message_is_400_empty_file: '',
		message_is_400_upload_error: '',
		message_is_400_too_large_size: '',
		message_is_400_unknown_error: '',
		yes: 'Tak',
		no: 'Nie'
	}

	constructor(private _translateService: TranslateService) {}

	ngOnInit() {}

	determineLanguage() {

		var en = 'en', ru = 'ru', pl = 'pl';
		var currentLanguage = localStorage.getItem('currentLanguage');

		this._translateService.addLangs([en, ru, pl]);

		if(!currentLanguage || currentLanguage === en) {

			this.setLanguage(en, this.enTitles, true, false, false);
			localStorage.setItem('currentLanguage', en);

		}
		else {

			if(currentLanguage === ru) {
				this.setLanguage(ru, this.ruTitles, false, true, false);
			}
			if(currentLanguage === pl) {
				this.setLanguage(pl, this.plTitles, false, false, true);
			}

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

	setLanguage(currentLanguage: string, languageObject, isEn:boolean, isRu:boolean, isPl:boolean) {

		this._translateService.setDefaultLang(currentLanguage);
		this._translateService.use(currentLanguage);
		this._translateService.setTranslation(currentLanguage, languageObject);
		this.isEn = isEn;
		this.isRu = isRu;
		this.isPl = isPl;

	}


}
