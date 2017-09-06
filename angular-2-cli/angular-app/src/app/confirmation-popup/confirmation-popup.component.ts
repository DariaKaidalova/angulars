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
	wasPopupClosed: boolean = false;

	constructor() {}

	ngOnInit() {

		console.log(this.isOpenedPopup);

	}

    ngDoCheck() {

        if(this.isOpenedPopup === true && !this.wasPopupClosed) {
    		setTimeout(()=> {
				this.isOpenedPopupMark = true;
			}, 200);
        }

    }

    closeActionPerformed(): void {

    	this.closePopup();
    	setTimeout(()=> {
			this.closeAction.emit();
		}, 200);
		
    }

    confirmActionPerformed(): void {

    	this.closePopup();
    	setTimeout(()=> {
			this.confirmAction.emit(this.parameter);
		}, 200);
		
    }

    closePopup() {

		this.isOpenedPopupMark = false;
		this.wasPopupClosed = true;

    }

}
