import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  signInWithGoogle() {
    this.authService
      .signInWithGoogle()
      .then(res => {
        this.ngZone.run(() => this.router.navigate(["layout"]));
      })
      .catch(err => console.log(err));
  }

  signInWithGithub() {
    this.authService
      .signInWithGithub()
      .then(res => {
        this.ngZone.run(() => this.router.navigate(["layout"]));
      })
      .catch(err => console.log(err));
  }
}
