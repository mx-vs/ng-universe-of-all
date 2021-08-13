import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem("currentUser", email);
        this.router.navigateByUrl('/');
      })
      .catch(err => {
        alert(err.message);
      });
  }

  emailSignup(email: string, password: string, repeatPassword: string) {
    if (password === repeatPassword) {
      this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        localStorage.setItem("currentUser", email);
        this.router.navigateByUrl('/');
      })
      .catch(error => {
        alert(error);
      });
    } else {
      alert('Passwords don\'t match');
    }
  }

  logout() {
    this.afAuth.signOut().then(() => {
      localStorage.removeItem("currentUser");
      this.router.navigateByUrl('/login');
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
