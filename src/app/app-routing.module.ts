import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./core/core.module").then(m => m.CoreModule)
  },
  {
    path: "new-note",
    loadChildren: () =>
      import("./new-note/new-note.module").then(m => m.NewNoteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
