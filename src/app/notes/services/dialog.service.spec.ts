import { TestBed } from '@angular/core/testing';

import { DeleteDialogService } from './dialog.service';

describe('DeleteDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteDialogService = TestBed.get(DeleteDialogService);
    expect(service).toBeTruthy();
  });
});
