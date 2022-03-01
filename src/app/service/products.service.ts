import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { Product } from 'src/model/products.modul';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<any> {
    return this._http.get(`${this.url}/products`);
  }

  findProduct(id: number) {
    return this._http.get(`${this.url}/find/${id}`);
  }

  getFilteredProducts(id: number): Observable<any> {
    return this._http.get(`${this.url}/products/category/${id}`);
  }

  createNewProduct(obj: object) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .post(`${this.url}/new/product`, body, {
        headers: headers,
      })
      .subscribe();
  }

  modifyProduct(id: number, obj: Product): void {
    console.log('entro nella funzione di modifica');

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    console.log(body);
    this._http
      .put(`${this.url}/modify/product/${id}`, body, {
        headers: headers,
      })
      .subscribe();
  }

  deleteProduct(id: number) {
    console.log(id);
    this._http.delete(`${this.url}/delete/product/${id}`).subscribe();
  }
}
