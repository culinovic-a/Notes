import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class NewNoteService {
  constructor(private firestore: AngularFirestore) {}

  public createNote(newNote: Note) {
    this.firestore.collection("notes").add(newNote);
  }

  getNotes() {
    return this.firestore.collection("notes").snapshotChanges();
  }

  getNote(id: string) {
    return this.firestore
      .collection("notes")
      .doc(id)
      .snapshotChanges();
  }
}
