import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { NewNoteComponent } from 'src/app/new-note/new-note/new-note.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialogDelete() {
    return this.dialog.open(DeleteModalComponent, {
      width: '450px',
    });
  }
}
