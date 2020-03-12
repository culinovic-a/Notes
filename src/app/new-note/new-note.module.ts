import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewNoteComponent } from "./new-note/new-note.component";
import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [NewNoteComponent],
  imports: [CommonModule, AngularFirestoreModule]
})
export class NewNoteModule {}
