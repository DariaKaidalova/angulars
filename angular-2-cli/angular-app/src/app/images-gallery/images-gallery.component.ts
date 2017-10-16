import { Component, OnInit, OnChanges, DoCheck, Input, Output, EventEmitter, SimpleChange, HostListener } from '@angular/core';
import { Image } from '../interface/image-gallery.interface';
import * as jQuery from 'jquery';
import { WindowService } from '../service/window.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit, OnChanges {

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
    WW: number;
    WH: number;
    maxIW: number;
    maxIH: number;
    
    constructor(private _windowService: WindowService) {}

    ngOnInit() {
        this._oldArray = this.images;
        this.checkInputs();
        this.addIndex(this.images);
        this.calculateSizes();
           
    }

    @HostListener('window:resize', [])
    onResize() {
        this.calculateSizes();
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {

        //check changes of array with images: this works on init.
        this._oldArray = changes['images'].previousValue;
        this.images = changes['images'].currentValue;
        if (changes['images'].firstChange) {
            if(this._oldArray !== this.images && this._oldArray !== undefined) {
                this.checkInputs();
                this.addIndex(this.images);
            }
            else {
                this.addIndex(this.images);
            }
        }

    }

    ngDoCheck() {
        
        //check changes of array with images: this works on changes.
        if(this._oldArray !== this.images) {
            this.checkInputs();
            this.addIndex(this.images);
        }
        else {
            this._oldArray = this.images;
            this.addIndex(this.images);
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

    getCurrentImage(index, url, name) {;
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

    @HostListener('window:keyup', ['$event'])
    keyboardSlideSwitch(event: KeyboardEvent) {

        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            this.showNextSlide();
        }

        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            this.showPrevSlide();
        }
        
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

    calculateSizes() {
        this.WW = this._windowService.nativeWindow.window.innerWidth;
        this.WH = this._windowService.nativeWindow.window.innerHeight;
        this.maxIW = this.WW - 50;
        this.maxIH = this.WH - 50;
    }

    hideScroll() {

        jQuery('.l-body').addClass('-scroll_hidden');

    }

    showScroll() {

        jQuery('.l-body').removeClass('-scroll_hidden');

    }


}
