import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DeleteDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    return this.dialog.open(DeleteModalComponent, {
      width: '450px',
    });
  }
}
