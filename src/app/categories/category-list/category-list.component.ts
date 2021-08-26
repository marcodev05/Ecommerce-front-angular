import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/interface/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories: Category[] = [];
  public test = "";

  constructor(private categoryService: CategoryService) { }



  ngOnInit(): void {
    this.getCategories();
 
      localStorage.setItem("test","rien dans la categorie");

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

  

}
