import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note/new-note.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewNoteRoutingModule } from './new-note-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatChipsModule,
    MatIconModule,
    MatRadioModule,
    MatTooltipModule
  ],
  exports: [NewNoteComponent],
})
export class NewNoteModule {}
