import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { SnackService } from '../services/snack.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLightTheme = false;
  userIsLoggedIn = localStorage.getItem('userUid') != null ? true : false;
  checkTheme: string;
  toggleButton;

  constructor(
    private authService: AuthService,
    private snackService: SnackService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.checkIfUserIsLoggedIn();
    this.checkThemeState();
    this.toggleButton = JSON.parse(localStorage.getItem('toggleButtonState'));
  }

  checkThemeState(): void {
    this.checkTheme = localStorage.getItem('theme');
    if (this.checkTheme === 'light-theme') {
      this.isLightTheme = true;
      document.getElementById('themeTag').classList.add('light-theme');
    }
  }

  changeTheme(): void {
    this.isLightTheme = !this.isLightTheme;

    this.storageService.setToggleButtonState(this.isLightTheme);

    if (this.isLightTheme) {
      this.storageService.setTheme();
      document.getElementById('themeTag').classList.add('light-theme');
    } else {
      this.storageService.removeTheme();
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
