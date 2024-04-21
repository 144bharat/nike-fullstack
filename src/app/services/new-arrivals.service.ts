import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFilteringInterface } from '../interfaces/product-filtering-interface';

@Injectable({
  providedIn: 'root'
})
export class NewArrivalsService {
  baseurl:string='https://localhost:7042/api/';
  constructor(private http:HttpClient) { }
  postnewarrivalsCSV(files:FormData):Observable<any>
  {
    return this.http.post<string>(this.baseurl+'Products'+'/postnewarrivalsCSV',files);
  }
  postProductsJSON(files:FormData):Observable<any>
  {
    return this.http.post<string>(this.baseurl+'Products'+'/PostProductsJSON',files);
  }
  GetProducts(paramsList:any):Observable<any>
  {
    return this.http.post<any>(`${this.baseurl}Products/getProducts`,paramsList, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
