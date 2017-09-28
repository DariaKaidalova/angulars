import { Component, OnInit, DoCheck, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit, OnChanges {
	@Input() message: any;
	@Input() parameter: number;
	@Input() isOpenedPopup: boolean;

	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<number> = new EventEmitter();

	isOpenedPopupMark: boolean = false;

	constructor() {}

	ngOnInit() {

		this.isOpenedPopup = false;

	}

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {

        if (changes['isOpenedPopup']) {
            if(this.isOpenedPopup) {
                this.showPopup();
                this.hideScroll();
            }
        }

    }

    closeActionPerformed(): void {

    	this.hidePopup();
    	this.showScroll();
		this.closeAction.emit();
		
    }

    confirmActionPerformed(): void {

    	this.hidePopup();
    	this.showScroll();
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

    hideScroll() {

        jQuery('.l-body').addClass('-scroll_hidden');

    }

    showScroll() {

        jQuery('.l-body').removeClass('-scroll_hidden');

    }

}
