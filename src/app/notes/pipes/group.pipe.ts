import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'src/app/core/models/note';

@Pipe({
  name: 'group',
})
export class GroupPipe implements PipeTransform {
  transform(collection: Note[], property: string): any[] {
    if (!collection) {
      return null;
    }

    const mappedCollection = collection.map((note) => ({
      ...note,
      timestamp: note.timestamp.split('T')[0],
      newTimestamp: note.timestamp,
    }));

    const groupedCollection = mappedCollection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map((key) => ({
      key,
      value: groupedCollection[key],
    }));
  }
}
