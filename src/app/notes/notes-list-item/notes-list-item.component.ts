import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../new-note/models/note';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss'],
})
export class NotesListItemComponent implements OnInit {
  @Input() note: Note;
  constructor() {}

  ngOnInit() {}
}
