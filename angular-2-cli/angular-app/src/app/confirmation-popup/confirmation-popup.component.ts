import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';

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

	isOpenedPopupMark: boolean = false;

	constructor() {}

	ngOnInit() {

		this.isOpenedPopup = false;

	}

    ngDoCheck() {

        if(this.isOpenedPopup === true) {
        	this.showPopup();
        }

    }

    closeActionPerformed(): void {

    	this.hidePopup();
		this.closeAction.emit();
		
    }

    confirmActionPerformed(): void {

    	this.hidePopup();
		this.confirmAction.emit(this.parameter);
		this.closeActionPerformed(); //do NOT remove again!!!!!!!!!

    }

    hidePopup() {

    	setTimeout(()=> {
			this.isOpenedPopupMark = false;
		}, 200);

    }

    showPopup() {

		setTimeout(()=> {
			this.isOpenedPopupMark = true;
		}, 200);
		
    }

}
