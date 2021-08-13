import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  repeatPassword = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(formData) {
    if (formData.valid) {
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password,
        formData.value.repeatPassword
      );
    }
  }
}
