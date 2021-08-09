import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-creator-details',
  templateUrl: './character-creator-details.component.html',
  styleUrls: ['./character-creator-details.component.css']
})
export class CharacterCreatorDetailsComponent implements OnInit {

  @Input() race = '';

  constructor() { }

  ngOnInit(): void {}
}
