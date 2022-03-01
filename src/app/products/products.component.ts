import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products.modul';

import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res: any) => {
      this.products = res.result;
    });
  }
}
