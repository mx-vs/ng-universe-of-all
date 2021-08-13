import { Component, OnInit } from '@angular/core';
import { GetCharactersService } from '../get-characters.service';
import Character from '../character';

@Component({
  selector: 'app-my-characters',
  templateUrl: './my-characters.component.html',
  styleUrls: ['./my-characters.component.css']
})
export class MyCharactersComponent implements OnInit {
  Characters?: Character[];

  constructor(private getCharactersService: GetCharactersService) { }

  ngOnInit(): void {
    this.getCharactersService.getCharacters().subscribe(res => {
      this.Characters = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Character;
      })
    });
  }

  deleteCharacter = character => this.getCharactersService.deleteCharacter(character);
}
