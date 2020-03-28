import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNoteComponent } from './new-note/new-note.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NewNoteRoutingModule } from './new-note-routing.module';

@NgModule({
  declarations: [NewNoteComponent],
  imports: [CommonModule, AngularFirestoreModule, NewNoteRoutingModule],
  exports: [NewNoteComponent]
})
export class NewNoteModule {}
