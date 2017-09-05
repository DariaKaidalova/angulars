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
	@Input() isOpenedPopupMark: boolean;
	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<number> = new EventEmitter();

	constructor() {}

	ngOnInit() {

		this.isOpenedPopupMark = false;
		this.isOpenedPopup = false;

	}

    closeActionPerformed(): void {

    	this.isOpenedPopupMark = false;

    	setTimeout(()=> { 

			this.closeAction.emit();
			this.isOpenedPopup = false;

		}, 300);   

    }

    confirmActionPerformed(): void {

    	this.isOpenedPopupMark = false;

		setTimeout(()=> { 

	        this.confirmAction.emit(this.parameter);
	        this.closeActionPerformed();
	        this.isOpenedPopup = false;  
		      
		}, 300);


    }

}
