import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter, SimpleChange, } from '@angular/core';
import { Image } from '../interface/image-gallery.interface';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

	@Input() images: Array<Image>;
    @Input() removable: boolean;
	@Output() removeAction: EventEmitter<any> = new EventEmitter();
    private _oldArray: Array<Image>;
    currentUrl: object;
    currentName: string;
    currentIndex: number;
    isOpenedSlider: boolean = false;
    isOpenedSliderMark: boolean = false;
    isCurrentSlideMark: boolean = false;
    
    constructor() {}

    ngOnInit() {

        this.checkInputs();
        this.addIndex(this.images);
        
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {

        if (changes['images']) {
            if(this._oldArray !== this.images) {
                this.checkInputs();
                this.addIndex(this.images);
            }
            else {
               this._oldArray = this.images; 
            }
        }

    }

    addIndex(images) {

        if(images.length > 0) {
            var index = 0;
            for(var i = 0; i < images.length; i++) {
                images[i].index = index;
                index++;
            }
        }

        return images;

    }

    getCurrentImage(index, url, name) {
        this.hideScroll();
        this.currentIndex = index;
        this.currentUrl = url;
        this.currentName = name;

        this.isOpenedSlider = true;
        this.isOpenedSliderMark = true;
        setTimeout(()=> { 
            this.isCurrentSlideMark = true; 
        }, 200);
    }

    closeSlider() {

        this.isCurrentSlideMark = false; 
        setTimeout(()=> { 
            this.isOpenedSliderMark = false;
        }, 300);
        setTimeout(()=> { 
            this.isOpenedSlider = false;
        }, 200);
        this.showScroll();

    }

    showNextSlide() {
        
        this.isCurrentSlideMark = false;

        this.currentIndex = this.checkSlide(this.currentIndex, 'next');
        this.findCurrentImage(this.currentIndex);

        setTimeout(()=> { 
           this.isCurrentSlideMark = true;  
        }, 200);

    }

    showPrevSlide() {

        this.isCurrentSlideMark = false;

        this.currentIndex = this.checkSlide(this.currentIndex, 'prev');
        this.findCurrentImage(this.currentIndex);

        setTimeout(()=> { 
           this.isCurrentSlideMark = true;  
        }, 200);

    }

    checkSlide(index, direction) {

        if(index === 0 && direction === 'prev') {
            index = this.images.length -1;
        }
        if(index === this.images.length -1 && direction === 'next') {
            index = 0;
        }
        else {
            if(direction === 'next') {
                index = index+1;
            }
            if(direction === 'prev') {
                index = index-1;
            }
        }

        return index;

    }

    findCurrentImage(index) {

        for(var i = 0; i < this.images.length; i++) {
            if(index === this.images[i].index) {
                this.currentName = this.images[i].name;
                this.currentUrl = this.images[i]._links;
                break;
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

    hideScroll() {

        jQuery('.l-body').addClass('-scroll_hidden');

    }

    showScroll() {

        jQuery('.l-body').removeClass('-scroll_hidden');

    }


}
