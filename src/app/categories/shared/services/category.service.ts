import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interface/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor( private http : HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiBaseUrl + "/api/v1/categories");
  }


  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('${this.apiServerUrl}/add', category);
  }


  public getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>('${this.apiServerUrl}/categories/${id}');
  }

}
