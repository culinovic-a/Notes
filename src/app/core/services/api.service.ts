import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
  DocumentSnapshot,
  Action,
} from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  notesCollection: AngularFirestoreCollection<Note>;
  notes: Observable<Note[]>;
  user = this.fAuth.auth.currentUser.uid;
  newNoteForm;

  constructor(
    public firestore: AngularFirestore,
    private fb: FormBuilder,
    private fAuth: AngularFireAuth
  ) {
    this.newNoteForm = this.fb.group({
      userId: this.user,
      id: null,
      noteTitle: [''],
      noteText: [''],
      timestamp: new Date().toISOString(),
    });

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
