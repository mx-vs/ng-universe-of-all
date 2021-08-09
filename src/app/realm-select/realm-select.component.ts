import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-realm-select',
  templateUrl: './realm-select.component.html',
  styleUrls: ['./realm-select.component.css']
})
export class RealmSelectComponent implements OnInit {

  @Output() realmSelect = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRealm(value: string) {
    this.realmSelect.emit(value);
  }
}
