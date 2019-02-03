import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionalComponent } from './bidirectional.component';

describe('BidirectionalComponent', () => {
  let component: BidirectionalComponent;
  let fixture: ComponentFixture<BidirectionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidirectionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirectionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
