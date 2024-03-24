import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post<string>(this.baseurl+'Newarrivals'+'/postnewarrivalsCSV',files);
  }
  postnewarrivalsJSON(files:FormData):Observable<any>
  {
    return this.http.post<string>(this.baseurl+'Newarrivals'+'/postnewarrivalsJSON',files);
  }
  getnewarrivals():Observable<any>
  {
    return this.http.get<any>(this.baseurl+'Newarrivals'+'/getnewarrivals');
  }
}
