import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List2ComponentComponent } from './list2-component.component';

describe('List2ComponentComponent', () => {
  let component: List2ComponentComponent;
  let fixture: ComponentFixture<List2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
