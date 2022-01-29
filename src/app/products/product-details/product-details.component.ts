import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/interface/Product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public currentProduct: Product = new Product();

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = +this.route.snapshot.params['id'];
   this.getProductById(id);
  }

  public getProductById(id : number): void {
    this.productService.getProductById(id).subscribe(

      (response: Product) => {
        this.currentProduct = response;
    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }


    );
  }

  

}
