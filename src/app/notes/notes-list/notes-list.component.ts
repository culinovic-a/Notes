import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Note } from '../../core/models/note';
import { staggeredList } from '../../shared/animations/staggered-list.animation';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [staggeredList],
})
export class NotesListComponent implements OnInit {
  public notes: Note[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    return this.apiService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }
}
