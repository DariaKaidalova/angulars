import { Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Global } from './global';
//import {  } from './languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ru']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    console.log(this.translate);
	translate.setTranslation('en', {
		add_exercises : "Add exercises",
		edit : "Edit",
		delete : "Delete"
	});
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }

	ngOnInit() {}

}
