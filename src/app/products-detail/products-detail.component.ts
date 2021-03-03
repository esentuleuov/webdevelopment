import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "../product";
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  goBack(): void {
    this.location.back();
  }
}
