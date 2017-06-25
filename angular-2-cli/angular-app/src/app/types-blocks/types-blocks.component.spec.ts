import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesBlocksComponent } from './types-blocks.component';

describe('TypesBlocksComponent', () => {
  let component: TypesBlocksComponent;
  let fixture: ComponentFixture<TypesBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
