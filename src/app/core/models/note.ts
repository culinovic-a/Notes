export interface Note {
  userId: string;
  id: string;
  noteTitle: string;
  noteText: string;
  labels: Labels;
  timestamp: string;
}

export interface Labels {
  labelText: string;
  labelColor: string;
}
