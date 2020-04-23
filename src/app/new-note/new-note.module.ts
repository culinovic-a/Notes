import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note/new-note.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewNoteRoutingModule } from './new-note-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewNoteComponent],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    NewNoteRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [NewNoteComponent],
})
export class NewNoteModule {}
