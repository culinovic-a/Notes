import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { SnackService } from '../../core/services/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private ngZone: NgZone,
    private snackService: SnackService
  ) {}

  ngOnInit() {}

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/notes'));
        this.snackService.openSnackBar(
          'Welcome to the Notes App! Press Shift+Alt to create a new note and Enter+Control to submit it!'
        );
      })
      .catch((err) =>
        this.snackService.openSnackBar('An error occured. Please try again!')
      );
  }

  signInWithGithub() {
    this.authService
      .signInWithGithub()
      .then((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/notes'));
        this.snackService.openSnackBar(
          'Welcome to the Notes App! Press Shift+Alt to create a new note and Enter+Control to submit it!'
        );
      })
      .catch((err) =>
        this.snackService.openSnackBar('An error occured. Please try again!')
      );
  }
}
