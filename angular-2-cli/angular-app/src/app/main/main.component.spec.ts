import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Component, OnInit } from '@angular/core';

import { MainComponent } from './main.component';
import { LogoComponent } from '../logo/logo.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LanguagesBarComponent } from '../languages-bar/languages-bar.component';

import { MainService } from '../service/main-service.service';


describe('MainComponent: ', () => {

  let main: MainComponent;

  let mockLang = {
    isShowSpinner() { return false }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
      providers: [{provide: MainService, useValue: mockLang }],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    const mainComponent = TestBed.createComponent(MainComponent);
    main = mainComponent.componentInstance;
  }));


  it('Should work', async(() => {
    expect(main).toBeDefined();
  }));

});