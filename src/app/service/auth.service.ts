import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: boolean = false;
  name: string;
  constructor(private _http: HttpClient) {}

  isLogged(username: string): void {
    //
    this.logged = true;
    this.name = username;
  }
}
