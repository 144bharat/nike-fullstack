import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  postnewarrivalsJSON(files:FormData):Observable<any>
  {
    return this.http.post<string>(this.baseurl+'Products'+'/postnewarrivalsJSON',files);
  }
  GetProducts(Category:string,TypeOfProductRoute:string):Observable<any>
  {
    let params = new HttpParams();
    params = params.append('category', Category);
    params = params.append('typeOfProductRoute', TypeOfProductRoute);
    return this.http.get<any>(`${this.baseurl}Products/getProducts`,{params:params});
  }
}
