import { Component, OnInit } from '@angular/core';
import { GetUserService } from "../get-user.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser = '';

  constructor(private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.currentUser = this.getUserService.getUser();
  }
}
