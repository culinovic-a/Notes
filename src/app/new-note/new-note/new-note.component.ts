import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  newNoteForm = new FormGroup({
    noteName: new FormControl(''),
    noteText: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<NewNoteComponent>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.newNoteForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
