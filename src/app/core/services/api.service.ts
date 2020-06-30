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
export class ApiService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  user = localStorage.getItem('userUid');

  constructor(public firestore: AngularFirestore) {
    this.notesCollection = this.firestore.collection('notes', (ref) =>
      ref.where('userId', '==', this.user).orderBy('timestamp', 'desc')
    );

    this.notes = this.notesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Note;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  public createNote(newNote: Note): Promise<DocumentReference> {
    return this.notesCollection.add(newNote);
  }

  public updateNote(note: Note) {
    this.notesCollection.doc(`/${note.id}`).update(note);
  }

  public getNotes() {
    return this.notes;
  }

  public getNote(id: string): Observable<Action<DocumentSnapshot<Note>>> {
    return this.notesCollection.doc<Note>(`/${id}`).snapshotChanges();
  }

  public deleteNote(note: Note) {
    this.notesCollection.doc(`/${note.id}`).delete();
  }
}
