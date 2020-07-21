import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Note } from '../../core/models/note';
import { staggeredList } from '../../shared/animations/staggered-list.animation';
import { DATABASE_URL } from '@angular/fire';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [staggeredList],
})
export class NotesListComponent implements OnInit {
  public notes: Note[];
  notesLayout = false;
  gridIcon = 'border_all';
  listIcon = 'list';
  state: boolean;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    return this.apiService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  reverse() {
    this.notes.reverse();
  }

  changeLayout() {
    this.notesLayout = !this.notesLayout;
  }

  onIconToggleStateChange(nextState: boolean) {
    this.state = nextState;
  }
}
