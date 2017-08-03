import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
	@Input() message: string;
	@Input() parameter: number;
	
	@Input() isOpenedPopup: boolean;
	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<number> = new EventEmitter();

    closeActionPerformed(): void {
    	
        this.closeAction.emit();
        this.isOpenedPopup = false;

    }

    confirmActionPerformed(): void {

        this.confirmAction.emit(this.parameter);
        this.closeActionPerformed();
    }

	constructor() {}

	ngOnInit() {

		console.log('popup');
		this.isOpenedPopup = false;

	}

}
