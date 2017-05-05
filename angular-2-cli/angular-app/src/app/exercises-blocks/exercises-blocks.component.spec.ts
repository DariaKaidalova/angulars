import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesBlocksComponent } from './exercises-blocks.component';

describe('ExercisesBlocksComponent', () => {
  let component: ExercisesBlocksComponent;
  let fixture: ComponentFixture<ExercisesBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
