import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../core/services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
})
export class NewNoteComponent implements OnInit {
  newNoteForm: FormGroup;
  user = localStorage.getItem('userUid');

  id: string;
  noteTitle: string;
  noteText: string;
  isEdit: boolean;

  constructor(
    public dialogRef: MatDialogRef<NewNoteComponent>,
    public apiService: ApiService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data ? data.id : '';
    this.noteTitle = data ? data.noteTitle : '';
    this.noteText = data ? data.noteText : '';
    this.isEdit = data ? data.isEdit : false;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.newNoteForm = this.fb.group({
      userId: this.user,
      id: !this.isEdit ? null : this.id,
      noteTitle: !this.isEdit ? '' : this.noteTitle,
      noteText: !this.noteText ? '' : this.noteText,
      timestamp: new Date().toISOString(),
    });
  }

  onSubmit() {
    if (this.newNoteForm.value.id === null) {
      delete this.newNoteForm.value.id;
      this.apiService.createNote(this.newNoteForm.value);
    } else {
      this.apiService.updateNote(this.newNoteForm.value);
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
