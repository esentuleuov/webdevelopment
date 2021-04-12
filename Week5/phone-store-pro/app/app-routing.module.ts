import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoriesDetailComponent } from "./categories-detail/categories-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CategoriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
