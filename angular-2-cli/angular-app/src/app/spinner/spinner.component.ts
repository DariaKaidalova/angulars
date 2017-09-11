import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { MainService } from '../service/main-service.service'

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

	constructor(private _mainService: MainService) {}

	ngOnInit() {
		console.log('spinner this._mainService.isShowSpinner = ', this._mainService.isShowSpinner);
	}

}
