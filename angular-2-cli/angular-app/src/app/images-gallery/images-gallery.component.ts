import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Image } from './image.interface';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

	@Input() images: Array<Image>;
    @Input() removable: boolean;
	@Output() removeAction: EventEmitter<any> = new EventEmitter();
    newImages: Array<{}>;
    currentUrl: object;
    currentName: string;
    currentIndex: number;
    isOpenedSlider: boolean = false;


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
        console.log(images);
        return images;
    }

    getCurrentImage(index, url, name) {
        this.currentIndex = index;
        this.currentUrl = url;
        this.currentName = name;
        this.isOpenedSlider = true;
        console.log(this.currentIndex, this.currentUrl);
    }

    closeSlider() {
        this.isOpenedSlider = false;
    }

    showNextSlide() {
        this.currentIndex = ++this.currentIndex;
        this.findCurrentImage(this.currentIndex);

    }

    showPrevSlide() {
        this.currentIndex = --this.currentIndex;
        this.findCurrentImage(this.currentIndex);
        console.log(this.currentIndex);
    }

    findCurrentImage(index) {
        for(var i = 0; i < this.images.length; i++) {
            if(index = this.images[i].index) {
                this.currentName = this.images[i].name;
                this.currentUrl = this.images[i]._links;
                console.log(index, this.images[i].index, this.images[i].name, this.currentName);
            }
        }
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
