import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: any = '';
  isLogged: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    console.log(this.role);
    if (this.role) {
      this.isLogged = true;
    }
  }

  logout(): void {
    console.log('sono entrato nella funzione');
    localStorage.clear();
    this.isLogged = false;
    console.log(this.isLogged);
    console.log(this.role);
    location.assign('/');
  }
}
