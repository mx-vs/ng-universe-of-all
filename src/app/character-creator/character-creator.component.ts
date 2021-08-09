import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  realm = '';
  race = '';

  constructor() { }

  ngOnInit(): void { }

  selectRealm(realmSelect: string) {
    this.realm = realmSelect;
  }

  selectRace(raceSelect: string) {
    this.race = raceSelect;
  }
}
