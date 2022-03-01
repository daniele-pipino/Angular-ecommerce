import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/users.modul';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //data
  url: string = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  //all user
  getUsers(): Observable<any> {
    return this._http.get(`${this.url}/users`);
  }

  //modify user
  modifyProduct(id: number, obj: User): void {
    console.log('entro nella funzione di modifica');

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/user/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }

  //delete user
  deleteUser(id: number) {
    console.log(id);
    this._http.delete(`${this.url}/delete/user/${id}`).subscribe();
  }
}
