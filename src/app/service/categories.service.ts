import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/model/categories.modul';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private _http: HttpClient) {}

  url: string = 'http://localhost:3000';

  getCategories() {
    return this._http.get(`${this.url}/categories`);
  }
  //category creation
  createNewCategory(obj: object) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/new/category`, body, {
        headers: headers,
      })
      .subscribe();
  }

  //modification
  modifyCategory(id: number, obj: Category): void {
    console.log('entro nella funzione di modifica');

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/category/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }
  //delete category
  deleteCategory(id: number) {
    console.log(id);
    this._http.delete(`${this.url}/delete/category/${id}`).subscribe();
  }
}
