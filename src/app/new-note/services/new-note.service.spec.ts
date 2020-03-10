import { TestBed } from '@angular/core/testing';

import { NewNoteService } from './new-note.service';

describe('NewNoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewNoteService = TestBed.get(NewNoteService);
    expect(service).toBeTruthy();
  });
});
