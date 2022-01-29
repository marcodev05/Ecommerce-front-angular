import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from 'src/app/core/models/Picture';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor( private http : HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiBaseUrl + "/api/v1/products");
  }


  public getProductById(id : number): Observable<Product> {
    return this.http.get<Product>(this.apiBaseUrl + "/api/v1/products/" + id);
  }


  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiBaseUrl + "/api/v1/products/add", product);
  }


  public uploadFiles(file: File, id: Number): Observable<Product> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<Product>(this.apiBaseUrl + "/api/v1/uploadFile/" + id, formData);
  }

}
