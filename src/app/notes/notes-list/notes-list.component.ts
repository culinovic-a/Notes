import { Component, OnInit } from '@angular/core';
import { NewNoteService } from '../../new-note/services/new-note.service';
import { Note } from '../../new-note/models/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  public note: Note[];

  constructor(private newNoteService: NewNoteService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    return this.newNoteService.getNotes().subscribe((data) => {
      this.note = data;
    });
  }
}
