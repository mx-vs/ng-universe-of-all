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

  constructor(private createCharacterService: CreateCharacterService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(formData) {
    this.createCharacterService.saveCharToDatabase(this.character);
    this.router.navigateByUrl('/');
  }
}
