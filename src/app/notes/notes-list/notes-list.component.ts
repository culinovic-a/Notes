import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Note } from '../../core/models/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {
  public note: Note[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    return this.apiService.getNotes().subscribe((data) => {
      this.note = data;
    });
  }
}
