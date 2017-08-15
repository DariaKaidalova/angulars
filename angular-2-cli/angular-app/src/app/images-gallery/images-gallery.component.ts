import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

	@Input() images: Array<{}>;
    @Input() removable: boolean;
	@Output() removeAction: EventEmitter<any> = new EventEmitter();
    // indexArray: Array<number> = [];

    constructor() {}

    ngOnInit() {

        this.checkInputs();
        this.addIndex(this.images);
        
    }

    ngOnChanges(changes:any) {

        this.checkInputs();
        this.addIndex(this.images);

    }

    addIndex(images) {
        if(images.length > 0) {
            var index = 0;
            for(var i = 0; i < images.length; i++) {
                images[i].index = index;
                index++;
            }
        }
    }

    getIndex(index) {
        console.log(index);
    }

    removeActionPerformed(id): void {
    	
        this.removeAction.emit(id);

    }

    checkInputs() {
        if(!this.removable && this.removable !== false) {
            this.removable = true;
        }
        if(!this.images) {
           this.images = []; 
        }
    }

}
