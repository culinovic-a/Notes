import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  userUid: string;
  userIsLoggedIn = new Subject<boolean>();

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.storeUserUid();
      });
  }

  signInWithGithub() {
    return this.firebaseAuth.auth
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(() => {
        this.storeUserUid();
      });
  }

  signOut() {
    localStorage.removeItem('userUid');
    return this.firebaseAuth.auth
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/auth');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  storeUserUid() {
    this.userUid = this.firebaseAuth.auth.currentUser.uid;
    localStorage.setItem('userUid', this.userUid);
    this.userIsLoggedIn.next(true);
  }
}
