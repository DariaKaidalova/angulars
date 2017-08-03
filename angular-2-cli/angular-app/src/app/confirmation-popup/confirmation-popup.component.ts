import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
	@Input() message: string;
	@Input() parameter: any;
	
	@Input() isOpenedPopup: boolean;
	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<any> = new EventEmitter();

    closeActionPerformed(): void {
    	
        this.closeAction.emit();
        this.isOpenedPopup = false;
    }

    confirmActionPerformed() {
    	console.log('confirmActionPerformed');
    	
        this.confirmAction.emit(this.parameter);

        this.closeActionPerformed();
        this.isOpenedPopup = false;
    }

	constructor() { }

	ngOnInit() {
		this.isOpenedPopup = false;
		console.log('this.parameter = '+this.parameter);
	}

}
