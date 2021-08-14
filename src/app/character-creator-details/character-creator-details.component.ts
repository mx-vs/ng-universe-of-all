import { Component, OnInit, Input } from '@angular/core';
import { CreateCharacterService } from '../create-character.service';
import Character from "../character";
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creator-details',
  templateUrl: './character-creator-details.component.html',
  styleUrls: ['./character-creator-details.component.css']
})
export class CharacterCreatorDetailsComponent /*implements OnInit*/ {

  @Input() race = '';
  character: Character = new Character();
  fetchedClasses: [];

  constructor(private createCharacterService: CreateCharacterService, private router: Router) { }

  ngOnInit(): void {
    fetch("https://www.dnd5eapi.co/api/classes")
        .then(res => res.json())
        .then(data => {
            this.fetchedClasses = data.results.map((classDnd) => {
                return classDnd.name;
            })
        })
   }

  onSubmit(formData) {
    if (formData.valid) {
      this.createCharacterService.saveCharToDatabase(this.character);
      alert("Character has been created! You will now be redirected to your characters page!") 
    } else {
      alert('Please fill in all fields')
    }
  }

  openRoller() {
    window.open("https://rgbstudios.org/dnd-dice/char?r=#");
  }
}
