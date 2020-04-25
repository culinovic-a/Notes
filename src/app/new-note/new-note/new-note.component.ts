import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { NewNoteService } from '../services/new-note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  newNoteForm = this.fb.group({
    noteTitle: [''],
    noteText: [''],
    timestamp: new Date().toISOString(),
  });

  constructor(
    public dialogRef: MatDialogRef<NewNoteComponent>,
    private fb: FormBuilder,
    private newNoteService: NewNoteService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.newNoteService.createNote(this.newNoteForm.value);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
