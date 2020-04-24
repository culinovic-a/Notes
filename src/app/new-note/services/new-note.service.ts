import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  DocumentSnapshot,
  Action,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewNoteService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;

  constructor(public firestore: AngularFirestore) {
    this.notesCollection = this.firestore.collection('notes');

    this.notes = this.notesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Note;
          return data;
        });
      })
    );
  }

  public createNote(newNote: Note): Promise<DocumentReference> {
    return this.notesCollection.add(newNote);
  }

  public getNotes() {
    return this.notes;
  }

  public getNote(id: string): Observable<Action<DocumentSnapshot<any>>> {
    // todo
    return this.notesCollection.doc('notes/' + id).snapshotChanges();
  }
}
