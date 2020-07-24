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
  notesLayout = false;
  gridIcon = 'border_all';
  listIcon = 'list';
  state: boolean;
  loading: boolean;
  searchText: '';
  tooltip = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.loading = true;
    return this.apiService.getNotes().subscribe((data) => {
      this.notes = data;
      this.loading = false;
    });
  }

  reverse() {
    this.notes.reverse();
    this.tooltip = !this.tooltip;
  }

  changeLayout() {
    this.notesLayout = !this.notesLayout;
  }

  onIconToggleStateChange(nextState: boolean) {
    this.state = nextState;
  }
}
