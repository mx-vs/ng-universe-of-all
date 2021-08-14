import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import Character from './character';
import { GetUserService } from './get-user.service';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterService {
  character: Character;

  constructor(private db: AngularFirestore, private getUserService: GetUserService, private router: Router) { }

  saveCharToDatabase(character: Character) {
    const currentUser = this.getUserService.getUser();
    this.db.collection(currentUser).add({...character}).then(() => {
      this.router.navigateByUrl('/my-characters');
    })
  }
}
