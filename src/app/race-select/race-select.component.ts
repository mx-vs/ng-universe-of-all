import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-race-select',
  templateUrl: './race-select.component.html',
  styleUrls: ['./race-select.component.css']
})
export class RaceSelectComponent implements OnInit {

  @Input() realm = '';
  @Output() raceSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  selectRace(value: string) {
    this.raceSelect.emit(value);
  }
}
