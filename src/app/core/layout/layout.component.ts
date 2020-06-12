import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) {}

  isLightTheme = false;

  ngOnInit() {
  }

  changeTheme() {
    if (this.isLightTheme) {
      this.isLightTheme = false;
    } else {
      this.isLightTheme = true;
    }
  }

  logOut() {
    this.authService.signOut();
  }
}
