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

	ngOnInit() {}

}
