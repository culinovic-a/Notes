import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      'angular-auth-firebase'
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class AuthModule {}
