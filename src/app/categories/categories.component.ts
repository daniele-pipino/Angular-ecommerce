import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<any>;

  @Output() filterProducts = new EventEmitter<number>();

  constructor(private service: CategoriesService) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((res: any) => {
      this.categories = res.result;
    });
  }
  launchFilter(id: number): void {
    this.filterProducts.emit(id);
  }
}
