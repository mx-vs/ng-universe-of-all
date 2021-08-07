import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication.service';
import { Router } from '@angular/router';
import { GetUserService } from "../get-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser = '';

  constructor(private router: Router, public authService: AuthService, private getUserService: GetUserService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.currentUser = this.getUserService.getUser();
      }
    })
  }

  signOut() {
    this.authService.logout();
  }
}
