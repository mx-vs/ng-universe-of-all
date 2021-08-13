import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { GetUserService } from './get-user.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersService {

  constructor(private router: Router, private db: AngularFirestore, private getUserService: GetUserService) { }

  getCharacters() {
    const currentUser = this.getUserService.getUser();
    return this.db.collection(currentUser).snapshotChanges();
  }

  deleteCharacter(character) {
    const currentUser = this.getUserService.getUser();
    this.router.navigateByUrl('/');
    return this.db.collection(currentUser).doc(character.id).delete();
  }
}
