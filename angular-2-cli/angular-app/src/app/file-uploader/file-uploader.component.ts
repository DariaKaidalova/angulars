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
	public loadedImages: Array<{}>;
	isUpload: boolean;

	constructor() {}

	ngOnInit() {
		this.getImages();
	}

	ngOnChanges(changes: any) {
		this.getImages();
	}

	getImages():void {

		var loadedImagesArray = [];
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

			loadedImagesArray.push(newImageObject);

			this.loadedImages = loadedImagesArray;
			this.isUpload = true;
			console.log('this.loadedImages from file-uploader:');
			console.log(this.loadedImages);
			console.log('this.isUpload = '+this.isUpload);
    	};
	}

	removeImages():void {
		this.loadedImages = [];
		this.isUpload = false;
		console.log('this.isUpload = '+this.isUpload);
	}

	removeImage():void {}

	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	public fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}
}
