import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterService {

  constructor() { }
  /* const saveCharToDatabase = (event) => {
    event.preventDefault();
    firebase.firestore().collection(currentUser).add({
        name: name,
        raceDnd: raceDnd,
        classNameDND: classNameDND,
        alignment: alignment,
        imageUrl: imageUrl,
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha,
        desc: desc,
        features: features
    }).then(() => {
        alert("Character has been created! You will now be redirected to your characters page!")
        history.push("/my-characters");
    })} */
}
