import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Category } from 'src/model/categories.modul';
import { CategoriesService } from '../service/categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  valori: Category;
  isCreation: boolean = false;
  error: boolean = false;

  _categoryValue: Category;
  @Input() set categoryValue(newCategory: Category) {
    this._categoryValue = newCategory;
    this.valori = newCategory;
    this.modifyCategoryForm.patchValue(newCategory);
  }

  constructor(private categoriesService: CategoriesService) {}

  newCategoryForm = new FormGroup({
    name: new FormControl(''),
  });

  modifyCategoryForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit(): void {}

  check() {
    //data
    this.error = false;
    let errors: number = 0;

    //creation
    if (this.newCategoryForm.value.name != '') {
      console.log('sto verificando la creazione');
      console.log(this.newCategoryForm.value);
      if (this.newCategoryForm.value.name == '') {
        this.error = true;
        errors++;
      }

      console.log(errors);

      if (errors == 0) {
        this.categoriesService.createNewCategory(this.newCategoryForm.value);
      }
    }

    //modify
    if (this.modifyCategoryForm.value.name != '') {
      console.log('sto verificando la moidifca');
      console.log(this.modifyCategoryForm.value);
      if (this.modifyCategoryForm.value.name == '') {
        this.error = true;
        errors++;
      }

      console.log(errors);

      if (errors == 0) {
        this.categoriesService.modifyCategory(
          this.valori._id,
          this.modifyCategoryForm.value
        );
      }
    }
  }
}
