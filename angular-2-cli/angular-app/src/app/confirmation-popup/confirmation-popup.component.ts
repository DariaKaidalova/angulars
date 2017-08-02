import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit {
	@Input() message: string;
	@Input() isOpenedPopup: boolean;
	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<any> = new EventEmitter();

    closeActionPerformed(): void {
    	
        this.closeAction.emit();
        this.isOpenedPopup = false;
    }

    confirmActionPerformed(confirmEntry: SomeModel): void {
    	
        this.confirmAction.emit([confirmEntry]);

        this.closeActionPerformed();
        this.isOpenedPopup = false;
    }

	constructor() { }

	ngOnInit() {
		this.isOpenedPopup = false;
	}

}
