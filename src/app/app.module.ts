import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewNoteModule } from './new-note/new-note.module';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconToggleModule } from './shared/components/icon-toggle/icon-toggle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NewNoteModule,
    AuthModule,
    NotesModule,
    OverlayModule,
    IconToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
