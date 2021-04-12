import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from "../category";
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {
  category:Category;
  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriesService.getCategory(id)
      .subscribe(category => this.category = category);
  }
  goBack(): void {
    this.location.back();
  }

}
