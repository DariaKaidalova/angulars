import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
// import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';

describe('Component: ', () => {

  let component: MainComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent
      ],
    }).compileComponents();

    const spinnerComponent = TestBed.createComponent(MainComponent);
    component = spinnerComponent.componentInstance;
  }));

  it('MainComponent should be difined in the AppComponent', () => {
    expect(component).toBeDefined();
  });


});
