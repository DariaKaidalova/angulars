import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

	@Input() images: Array<{}>;
	@Output() removeAction: EventEmitter<any> = new EventEmitter();

    removeActionPerformed(id): void {
    	
        this.removeAction.emit(id);

    }

	constructor() {}

	ngOnInit() {}

}
