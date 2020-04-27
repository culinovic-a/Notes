import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListItemComponent } from './notes-list-item.component';

describe('NotesListItemComponent', () => {
  let component: NotesListItemComponent;
  let fixture: ComponentFixture<NotesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
