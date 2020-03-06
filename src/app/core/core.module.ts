import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from "./layout/layout.component";
import { CoreRoutingModule } from "./core-routing.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../../environments/environment";
import { AuthService } from "./services/auth.service";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [LayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    AngularFireModule.initializeApp(
      environment.firebase,
      "angular-auth-firebase"
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCardModule
  ],
  providers: [AuthService],
  exports: [LayoutComponent]
})
export class CoreModule {}
