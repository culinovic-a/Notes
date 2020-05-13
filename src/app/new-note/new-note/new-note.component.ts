import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewNoteComponent>,
    public apiService: ApiService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.apiService.newNoteForm.value.id === null) {
      delete this.apiService.newNoteForm.value.id;
      this.apiService.createNote(this.apiService.newNoteForm.value);
    } else {
      this.apiService.updateNote(this.apiService.newNoteForm.value);
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
