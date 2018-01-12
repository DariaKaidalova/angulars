import { TestBed, async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LanguagesService } from './service/languages.service';

describe('AppComponent: ', () => {

  let app: AppComponent;

  let mockLang = {
    determineLanguage() { return true }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [{provide: LanguagesService, useValue: mockLang }],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    const appComponent = TestBed.createComponent(AppComponent);
    app = appComponent.componentInstance;
  }));


  it('Should work', async(() => {
    expect(app).toBeDefined();
  }));

});
