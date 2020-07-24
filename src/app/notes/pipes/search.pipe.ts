import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'src/app/core/models/note';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: Note[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter((it) => {
      return it.noteTitle.toLowerCase().includes(searchText);
    });
  }
}
