import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
	@Input() message: string;

	constructor() { }

	ngOnInit() {
	}

}
