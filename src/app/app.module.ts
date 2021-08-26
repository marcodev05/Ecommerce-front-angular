import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductModule } from './products/product.module';
import { MaterialModule } from './core/modules/material/material.module';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryModule } from './categories/category.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductModule,
    MaterialModule,
    CategoryModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
