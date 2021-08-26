import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../core/modules/material/material.module';


const categoryRoutes: Routes = [
  { path: "categories", component: CategoryListComponent}
];

@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(categoryRoutes),
    MaterialModule
  ]
})
export class CategoryModule { }
