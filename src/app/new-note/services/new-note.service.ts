import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewNoteService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(public firestore: AngularFirestore) {
    this.notesCollection = this.firestore.collection("notes");

    this.notes = this.notesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Note;
        return data;
      });
    });
  }

  // public createNote(newNote: Note) {
  //   this.firestore.collection("notes").add(newNote);
  // }

  public createNote(newNote: Note) {
    return new Promise<any>((resolve, reject) => {
      this.notesCollection.add(newNote).then(
        res => {},
        err => reject(err)
      );
    });
  }

  // getNotes(): Observable<Note> {
  //   return this.firestore.collection("notes").snapshotChanges();
  // }

  public getNotes() {
    return this.notes;
  }

  // public getNote() {
  //   return this.notesCollection
  //     .doc()
  //     .snapshotChanges();
  // }

  public getNote(id: string) {
    return new Promise<any>((resolve, reject) => {
      this.notesCollection.doc("notes/" + id).snapshotChanges();
    });
  }
}
