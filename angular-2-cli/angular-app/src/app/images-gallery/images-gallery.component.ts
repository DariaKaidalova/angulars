import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

	@Input() images: Array<{}>;
	@Output() removeAction: EventEmitter<any> = new EventEmitter();
    indexArray: Array<number> = [];

    constructor() {}

    ngOnInit() {
        this.addIndex(this.images);
    }

    ngOnChanges(changes:any) {

        this.addIndex(this.images);

    }

    addIndex(images) {
        var index = 0;
        for(var i = 0; i < images.length; i++) {
            images[i].index = index;
            index++;
        }
        console.log(images);
    }

    getIndex(index) {
        console.log(index);
    }

    removeActionPerformed(id): void {
    	
        this.removeAction.emit(id);

    }



}
