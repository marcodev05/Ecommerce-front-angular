import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../core/modules/material/material.module';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { ProductNewComponent } from './product-new/product-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const productRoutes: Routes = [
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent},
  { path: "admin/products/new", pathMatch:"full", component: ProductNewComponent }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductListItemComponent,
    ProductNewComponent
  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(productRoutes),
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductModule { }
