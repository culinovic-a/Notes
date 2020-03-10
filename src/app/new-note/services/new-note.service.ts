import { Injectable } from "@angular/core";
import { Note } from "../models/note";

@Injectable({
  providedIn: "root"
})
export class NewNoteService {
  constructor() {}

  public addNote(newNote: Note) {}
}
