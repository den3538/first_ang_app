import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingsComponent } from './attribute-bindings.component';

describe('AttributeBindingsComponent', () => {
  let component: AttributeBindingsComponent;
  let fixture: ComponentFixture<AttributeBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
