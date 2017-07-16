import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesEditingComponent } from './exercises-editing.component';

describe('ExercisesEditingComponent', () => {
  let component: ExercisesEditingComponent;
  let fixture: ComponentFixture<ExercisesEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
