import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesAddingComponent } from './exercises-adding.component';

describe('ExercisesAddingComponent', () => {
  let component: ExercisesAddingComponent;
  let fixture: ComponentFixture<ExercisesAddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesAddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
