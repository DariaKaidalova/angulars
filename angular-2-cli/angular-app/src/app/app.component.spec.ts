import { TestBed, async } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MainComponent } from './main/main.component';

describe('AppComponent: ', () => {

  let spinner: SpinnerComponent, main: MainComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SpinnerComponent,
        MainComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const spinnerComponent = TestBed.createComponent(SpinnerComponent);
    spinner = spinnerComponent.componentInstance;
    
    const mainComponent = TestBed.createComponent(MainComponent);
    main = mainComponent.componentInstance;
  }));

  it('Should create the App', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('Should contain SpinnerComponent', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(spinner)).not.toBe(null);
  // }));

  // it('Should contain MainComponent', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector(main)).not.toBe(null);
  // }));

  // it('MainComponent should be difined in the AppComponent', () => {
  //   expect(main).not.toBeDefined();
  // });

});
