import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Global } from '../global'
import { MainService } from '../service/main-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _mainService: MainService) {}

  ngOnInit() {

    //setTimeout(()=> { 
      this._mainService.isShowSpinner = false; 
    //}, 1000);

    console.log('main', this._mainService.isShowSpinner);
  }

}
