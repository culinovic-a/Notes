import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { CoreRoutingModule } from './core-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AngularFirestoreModule,
  ],
  providers: [ApiService],
  exports: [LayoutComponent],
})
export class CoreModule {}
