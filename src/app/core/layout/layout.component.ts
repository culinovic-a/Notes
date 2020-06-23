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

  ngOnInit() {}

  changeTheme() {
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      document.getElementById('themeTag').classList.add('light-theme');
    } else {
      document.getElementById('themeTag').classList.remove('light-theme');
    }
  }

  logOut() {
    this.authService.signOut();
  }
}
