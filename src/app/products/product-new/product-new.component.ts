import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Category } from 'src/app/categories/shared/interface/category';
import { CategoryService } from 'src/app/categories/shared/services/category.service';
import { Product } from '../shared/interface/Product';
import { ProductService } from '../shared/services/product.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
 
  public categories: Category[] = [];
  public currentCategory:any;
  public idCateg : number= 0;
  public product: Product = new Product();

  selectedFiles?: FileList;
  fileInfos?: Observable<any>;

  

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router) { }



  ngOnInit(): void {
    this.getCategories();
  }




  
  public getCategories(): void{
    this.categoryService.getCategories().subscribe(

      (response: Category[]) => {
          this.categories = response;
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }

    );
  }






  public getCategoryById(id:number): void{
    this.categoryService.getCategoryById(id).subscribe(

      (response: Category) => {
          console.log(response);
          this.product.category = response;
          return response;
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
        return null;
      }

    );
  }





  
  public uploadFiles(idProduct: number): void{
        
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
       this.upload(this.selectedFiles[i], idProduct);
      }
    }
  }




private  upload( file: File, id: number): void{
  
      this.productService.uploadFiles(file, id).subscribe(
        (response: Product) => {
          
         
          console.log(response);
          return response;
           
        },
        (err: HttpErrorResponse) => {
          const msg = 'Could not upload the file: ' + file.name;
          
        });

  }



  public addProduct(product: Product): void{
    this.productService.addProduct(product).subscribe(
      (response: any) => {
          
          this.uploadFiles(response.idProduct);
          console.log(response);
          this.router.navigate(["/products"])
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }

    );
  }



  public onAddProduct(){
    this.getCategoryById(this.idCateg);
    this.addProduct(this.product);

  }



   public onSelectedFiles(event : any) : void {
     this.selectedFiles = event.target.files;

   }


   


}
