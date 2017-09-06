import { Component, OnInit, OnChanges } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { Image } from '../interface/image.interface';

// const URL = '/api/';
const URL = '/api/v1/images';

@Component({
	selector: 'file-uploader',
	templateUrl: './file-uploader.component.html',
	styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit, OnChanges {
	public uploader: FileUploader = new FileUploader({url: URL});
	public hasBaseDropZoneOver: boolean = false;
	public hasAnotherDropZoneOver: boolean = false;
	public loadedImages: Array<Image> = [];
	public imagesNames: Array<{}> = [];
	public isUpload: boolean;

	constructor() {}

	ngOnInit() {
		this.checkLoadedImagesArray();
	}

	ngOnChanges(changes: any) {

	}

	getImages():void {

		this.isUpload = false;
		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			var newImage = JSON.parse(response);

			var newImageObject = {
				id: newImage.id,
				name: newImage.name,
				_links: {
					self: {
						href: newImage._links.self.href
					}
				}
			};

			this.loadedImages.push(newImageObject);
			this.checkLoadedImagesArray();
  	};
	}

	removeImages():void {
		this.loadedImages = [];
		this.isUpload = false;
	}

	removeImage(currentId):void {
		for(var i = 0; i < this.loadedImages.length; i++) {
			if(currentId === this.loadedImages[i].id) {
				this.loadedImages.splice(i, 1);
			}
		}
		this.checkLoadedImagesArray();
	}

	checkLoadedImagesArray():void {
		if(this.loadedImages.length === 0) {
			this.isUpload = false;
		}
		else {
			this.isUpload = true;
		}
	}

	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}
}
