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

		console.log(this.isOpenedPopup);

	}

    ngDoCheck() {

        if(this.isOpenedPopup === true && this.isOpenedPopupMark === false) {
			setTimeout(() => { 
				this.isOpenedPopupMark = true;
			}, 300); 
        }

    }

    closeActionPerformed(): void {

    	this.closePopup();
		this.closeAction.emit();
		
    }

    confirmActionPerformed(): void {

    	this.closePopup();
		this.confirmAction.emit(this.parameter);
		
    }

    closePopup() {

    	setTimeout(()=> { 
    		this.isOpenedPopupMark = false;
    	}, 200);
        setTimeout(()=> { 
            this.isOpenedPopup = false;
        }, 200);
        
    }

}
