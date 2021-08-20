import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../core/modules/material/material.module';

const productRoutes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "details", component: ProductDetailsComponent }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListItemComponent  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes),
    MaterialModule
  ]
})
export class ProductModule { }
