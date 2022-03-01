import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products.modul';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/model/categories.modul';
import { User } from 'src/model/users.modul';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //boolean value
  isModifica: boolean = false;
  isProductVisible: boolean = false;
  isCategoryVisible: boolean = false;
  isUserVisible: boolean = false;

  // data
  productValues: Product;
  categoryValues: Category;
  userValues: User;

  products: Array<Product> = [];
  categories: Array<Category> = [];
  users: Array<User> = [];
  constructor(
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private usersService: UserService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllUsers();
  }
  //get all categories
  getAllCategories(): void {
    this.categoriesService.getCategories().subscribe((res: any) => {
      this.categories = res.result;
    });
  }

  //get all products
  getAllProducts(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res.result;
      console.log(this.products);
    });
  }

  //all user

  getAllUsers(): void {
    this.usersService.getUsers().subscribe((res: any) => {
      this.users = res.result;
      console.log('user', this.users);
    });
  }
  //see products
  seeProducts(): void {
    if (this.isUserVisible == true) {
      this.isUserVisible = false;
    }
    if (this.isCategoryVisible == true) {
      this.isCategoryVisible = false;
    }
    if (this.isProductVisible == false) {
      this.isProductVisible = true;
    } else {
      this.isProductVisible = false;
    }
  }
  // see categories
  seeCategories(): void {
    if (this.isUserVisible == true) {
      this.isUserVisible = false;
    }
    if (this.isProductVisible == true) {
      this.isProductVisible = false;
    }

    if (this.isCategoryVisible == false) {
      this.isCategoryVisible = true;
    } else {
      this.isCategoryVisible = false;
    }
  }

  seeUsers(): void {
    if (this.isCategoryVisible == true) {
      this.isCategoryVisible = false;
    }
    if (this.isProductVisible == true) {
      this.isProductVisible = false;
    }

    if (this.isUserVisible == false) {
      this.isUserVisible = true;
    } else {
      this.isUserVisible = false;
    }
  }

  //take the product value
  getProductValue(obj: Product): void {
    this.productValues = obj;
    console.log(this.productValues);
    if (this.productValues) {
      this.isModifica = true;
      console.log(this.isModifica);
    }
  }
  //take the category value
  getCategoryValue(obj: Category): void {
    this.categoryValues = obj;
    console.log(this.categoryValues);
    if (this.categoryValues) {
      this.isModifica = true;
      console.log(this.isModifica);
    }
  }

  //take the category value
  getUserValue(obj: User): void {
    this.userValues = obj;
    console.log(this.userValues);
    if (this.categoryValues) {
      this.isModifica = true;
      console.log(this.isModifica);
    }
  }

  // ask deleting confirmation
  askDeleting(id: number): void {
    //products deleting
    if (this.isProductVisible) {
      console.log(id);
      let confirmation = window.confirm(
        `Sei sicuro di voler eliminare il prodotto n°: ${id}`
      );

      if (confirmation) {
        this.productService.deleteProduct(id);
        this.getAllProducts();
      }
    }

    //category deleting
    if (this.isCategoryVisible) {
      let confirmation = window.confirm(
        `Sei sicuro di voler eliminare la categoria n°: ${id}`
      );

      if (confirmation) {
        this.categoriesService.deleteCategory(id);
        this.getAllCategories();
      }
    }

    //user deleting

    if (this.isUserVisible) {
      let confirmation = window.confirm(
        `Sei sicuro di voler eliminare l'utente n°: ${id}`
      );

      if (confirmation) {
        this.usersService.deleteUser(id);
        this.getAllUsers();
      }
    }
  }
}
