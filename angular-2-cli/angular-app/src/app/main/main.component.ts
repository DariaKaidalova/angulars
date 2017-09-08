import { Component, OnInit, Input } from '@angular/core';
import { Global } from '../global'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _global: Global) {}

  @Input() isShowSpinner: boolean;

  ngOnInit() {

  	//this._global.isShowSpinner = false;
  	//this.isShowSpinner = false;

  }

  ngAfterContentInit() {
  	this.isShowSpinner = false;
  }

}
