import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewNoteComponent } from './new-note/new-note.component';

const routes: Routes = [
  {
    path: 'new-note',
    component: NewNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewNoteRoutingModule {}
