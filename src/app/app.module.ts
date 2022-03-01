import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { MainComponent } from './main/main.component';
import { FeaturetteComponent } from './featurette/featurette.component';
import { ProductShowcaseComponent } from './product-showcase/product-showcase.component';
import { ValueComponent } from './value/value.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from './service/products.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductModalComponent } from './product-modal/product-modal.component';
import { CategoryModalComponent } from './category-modal/category-modal.component';
import { UserModalComponent } from './user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JumboComponent,
    MainComponent,
    FeaturetteComponent,
    ProductShowcaseComponent,
    ValueComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductCardComponent,
    CategoriesComponent,
    CategoryCardComponent,
    DashboardComponent,
    ProductModalComponent,
    CategoryModalComponent,
    UserModalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
