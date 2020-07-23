import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../core/models/note';
import { ApiService } from '../../core/services/api.service';
import { DialogService } from '../services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { NewNoteComponent } from '../../new-note/new-note/new-note.component';
import { SnackService } from '../../core/services/snack.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss'],
})
export class NotesListItemComponent implements OnInit {
  @Input() note: Note;

  constructor(
    private apiService: ApiService,
    private deleteDialogService: DialogService,
    private matDialog: MatDialog,
    private snackService: SnackService
  ) {}

  ngOnInit() {}

  editNote(id: string) {
    const dialogRef = this.matDialog.open(NewNoteComponent, {
      data: {
        id: this.note.id,
        noteTitle: this.note.noteTitle,
        noteText: this.note.noteText,
        isEdit: true,
      },
      disableClose: true,
      autoFocus: true,
      height: '350px',
      width: '550px',
    });
  }

  deleteNote(note: Note) {
    this.deleteDialogService
      .openDialogDelete()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.apiService.deleteNote(note);
          this.snackService.openSnackBar('Note Deleted!');
        }
      });
  }
}
