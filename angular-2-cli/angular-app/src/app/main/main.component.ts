import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../service/main-service.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _mainService: MainService) {}

  ngOnInit() {

    this._mainService.isShowSpinner = false; 
    
  }

}
