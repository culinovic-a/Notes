import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
