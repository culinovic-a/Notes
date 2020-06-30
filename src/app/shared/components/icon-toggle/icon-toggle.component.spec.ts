import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconToggleComponent } from './icon-toggle.component';

describe('IconToggleComponent', () => {
  let component: IconToggleComponent;
  let fixture: ComponentFixture<IconToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
