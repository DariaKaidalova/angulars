import { Component, OnInit, OnChanges } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

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

	public loadedImages: any;

	constructor() {}

	ngOnInit() {
		this.getImages();
	}

	ngOnChanges(changes: any) {
		this.getImages();
	}

	public getImages():void {
		var loadedImagesArray = [];
		this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
			var newImage = JSON.parse(response);
			var newLink = newImage._links.self.href;
			var newName = newImage.name;
			var newImageObject = {
				name: newName, 
				link: newLink
			};
			loadedImagesArray.push(newImageObject);
			this.loadedImages = loadedImagesArray;
    	};
	}

	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}
}
