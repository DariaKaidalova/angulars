import { Component, OnInit, DoCheck, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';
import * as jQuery from 'jquery';
import { Globals } from '../globals.vars';

@Component({
	selector: 'app-confirmation-popup',
	templateUrl: './confirmation-popup.component.html',
	styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent implements OnInit, OnChanges {
	@Input() message: string;
	@Input() parameter: number;
	@Input() isOpenedPopup: boolean;

	@Output() closeAction: EventEmitter<any> = new EventEmitter();
	@Output() confirmAction: EventEmitter<number> = new EventEmitter();

	isOpenedPopupMark: boolean = false;

	constructor(private _globals: Globals) {}

	ngOnInit() {

		this.isOpenedPopup = false;
		console.log('isHideScroll = '+this._globals.isHideScroll);

	}

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {

        if (changes['isOpenedPopup']) {
            this.showPopup();
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

    toggleScroll() {

        jQuery('.l-body').toggleClass('-scroll_hidden');
    }

    hideScroll() {

        jQuery('.l-body').addClass('-scroll_hidden');
    }

    showScroll() {

        jQuery('.l-body').removeClass('-scroll_hidden');
       
    }

}
