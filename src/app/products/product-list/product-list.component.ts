
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Product } from '../shared/interface/Product';
import { ProductService } from '../shared/services/product.service';
import { ProductModule } from '../product.module';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 3, rows: 1 },
  //         { title: 'Card 2', cols: 3, rows: 1 },
  //         { title: 'Card 3', cols: 3, rows: 1 },
  //         { title: 'Card 4', cols: 3, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 1, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 1 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );


  public products: Product[] = [];

  constructor(private breakpointObserver: BreakpointObserver,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void{
    this.productService.getProducts().subscribe(

      (response: Product[]) => {
          this.products = response;
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }

    );
  }

}
