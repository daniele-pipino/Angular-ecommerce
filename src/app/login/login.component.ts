import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  url: string = 'http://localhost:3000';
  message: string;
  isLogged: boolean = false;
  error: boolean = false;

  constructor() {}

  login(): void {
    console.log('sono entrato nella funzione');
    //reset
    this.error = false;
    this.isLogged = false;

    //taking the data from the form
    const data = {
      email: this.email,
      password: this.password,
    };

    fetch(`${this.url}/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    })
      .then((result) => result.json())
      .then((data) => {
        const user = data.result;
        console.log(user);
        //verify the login
        if (user) {
          this.isLogged = true;
          this.message = `Login avvenuto con successo`;
          localStorage.setItem('role', `${user.role}`);
        } else {
          this.error = true;
          this.message = 'Email o password errati';
        }

        //redirect
        if (this.isLogged == true && localStorage.getItem('role') == 'admin') {
          window.location.assign('/dashboard');
        } else if (
          this.isLogged == true &&
          localStorage.getItem('role') == 'user'
        ) {
          window.location.assign('/');
        }
      });
  }

  ngOnInit(): void {}
}
