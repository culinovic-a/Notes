import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../new-note/models/note';
import { NewNoteService } from '../../new-note/services/new-note.service';
import { DeleteDialogService } from '../services/delete-dialog.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss'],
})
export class NotesListItemComponent implements OnInit {
  @Input() note: Note;
  constructor(
    private newNoteService: NewNoteService,
    private deleteDialogService: DeleteDialogService
  ) {}

  ngOnInit() {}

  deleteNote(note: Note) {
    this.deleteDialogService
      .openDialog()
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.newNoteService.deleteNote(note);
        }
      });
  }
}
