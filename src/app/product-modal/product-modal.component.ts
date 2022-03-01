import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from 'src/model/products.modul';
import { CategoriesService } from '../service/categories.service';
import { ProductsService } from '../service/products.service';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  //data
  _productValue: Product;
  @Input() set productvalue(newProduct: Product) {
    this._productValue = newProduct;
    this.valori = newProduct;
    this.modifyProductsForm.patchValue(newProduct);
  }

  valori: Product;
  isModifica: boolean;
  categories: Array<any> = [];
  errors: Array<string> = [];

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductsService
  ) {}

  //formgroup creazione
  newProductsForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    cover: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });

  // taking all the categories for the select field
  ngOnInit(): void {
    this.callCategories();
    if (this.productvalue) {
      this.isModifica = true;
      console.log('sono entrato nell if');
      console.log(this.isModifica);
    }
  }

  callCategories() {
    this.categoriesService.getCategories().subscribe((res: any) => {
      this.categories = res.result;
    });
  }

  modifyProductsForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    cover: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });
  //checking all parameters
  checkNewProduct(): void {
    this.errors = [];

    //name check
    if (this.newProductsForm.value.name.trim() == '') {
      this.errors.push('Nome non valido o inesistente');
    }

    //description check
    if (this.newProductsForm.value.description.trim() == '') {
      this.errors.push('Scrivi una descrizione');
    }

    //cover check
    if (
      this.newProductsForm.value.cover.trim() == '' &&
      !this.newProductsForm.value.cover.includes('.jpeg')
    ) {
      this.errors.push('Immagine non valida');
    }

    //price check
    if (!this.newProductsForm.value.price) {
      this.errors.push('Prezzo non valido');
    }

    //category check
    if (this.newProductsForm.value.category == '-') {
      this.errors.push('Inserisci una categoria prima di procedere');
    }
    console.log(this.errors);

    if (this.errors.length == 0) {
      this.productService.createNewProduct(this.newProductsForm.value);
    }
  }

  checkModifiedProduct(): void {
    this.errors = [];

    //name check
    if (this.modifyProductsForm.value.name.trim() == '') {
      this.errors.push('Nome non valido o inesistente');
    }

    //description check
    if (this.modifyProductsForm.value.description.trim() == '') {
      this.errors.push('Scrivi una descrizione');
    }

    //cover check
    if (
      this.modifyProductsForm.value.cover.trim() == '' &&
      !this.modifyProductsForm.value.cover.includes('.jpeg')
    ) {
      this.errors.push('Immagine non valida');
    }

    //price check
    if (!this.modifyProductsForm.value.price) {
      this.errors.push('Prezzo non valido');
    }

    //category check
    if (this.modifyProductsForm.value.category == '-') {
      this.errors.push('Inserisci una categoria prima di procedere');
    }
    console.log(this.errors);

    if (this.errors.length == 0) {
      console.log(this.modifyProductsForm.value);
      this.productService.modifyProduct(
        this.valori._id,
        this.modifyProductsForm.value
      );
    }
  }
}
