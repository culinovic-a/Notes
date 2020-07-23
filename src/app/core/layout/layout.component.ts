import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SnackService } from '../services/snack.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLightTheme = false;
  userIsLoggedIn = localStorage.getItem('userUid') != null ? true : false;

  constructor(
    private authService: AuthService,
    private snackService: SnackService
  ) {}

  ngOnInit() {
    this.checkIfUserIsLoggedIn();
  }

  changeTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    if (this.isLightTheme) {
      document.getElementById('themeTag').classList.add('light-theme');
    } else {
      document.getElementById('themeTag').classList.remove('light-theme');
    }
  }

  logOut(): void {
    this.authService.signOut();
    this.authService.userIsLoggedIn.next(false);
    this.snackService.openSnackBar('Goodbye! :)');
  }

  checkIfUserIsLoggedIn(): void {
    this.authService.userIsLoggedIn.subscribe((logged) => {
      this.userIsLoggedIn = logged;
    });
  }
}
