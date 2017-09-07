import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from '@angular/core';
import { Globals } from '../globals.vars';

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

	constructor(private _globals: Globals) {}

	ngOnInit() {

		this.isOpenedPopup = false;
		console.log(this._globals);

	}

    ngDoCheck() {

        if(this.isOpenedPopup === true) {
        	this.showScroll()
        	this.showPopup();
        }

    }

    closeActionPerformed(): void {

    	this.hidePopup();
    	this.hideScroll();
		this.closeAction.emit();
		
    }

    confirmActionPerformed(): void {

    	this.hidePopup();
    	this.hideScroll();
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
    	this._globals.isHideScroll = false;
    }

    showScroll() {
    	this._globals.isHideScroll = true;
    }

}
