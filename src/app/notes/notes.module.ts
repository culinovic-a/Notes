import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes/notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewNoteModule } from '../new-note/new-note.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesListItemComponent } from './notes-list-item/notes-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { IconToggleModule } from '../shared/components/icon-toggle/icon-toggle.module';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    NotesComponent,
    NotesListComponent,
    NotesListItemComponent,
    DeleteModalComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    MatButtonModule,
    MatIconModule,
    NewNoteModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
    IconToggleModule,
    FormsModule,
    MatInputModule,
  ],
  entryComponents: [DeleteModalComponent],
})
export class NotesModule {}
