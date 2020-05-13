import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../core/models/note';
import { ApiService } from '../../core/services/api.service';
import { DeleteDialogService } from '../services/delete-dialog.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss'],
})
export class NotesListItemComponent implements OnInit {
  @Input() note: Note;

  constructor(
    private apiService: ApiService,
    private deleteDialogService: DeleteDialogService
  ) {}

  ngOnInit() {}

  editNote(id: string) {
    this.deleteDialogService.openDialogNew();
    this.apiService.getNote(id).subscribe((res) => {
      this.apiService.newNoteForm.controls.id.setValue(res.payload.id);
      this.apiService.newNoteForm.controls.noteTitle.setValue(
        res.payload.data().noteTitle
      );
      this.apiService.newNoteForm.controls.noteText.setValue(
        res.payload.data().noteText
      );
    });
  }

  deleteNote(note: Note) {
    this.deleteDialogService
      .openDialog()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.apiService.deleteNote(note);
        }
      });
  }
}
