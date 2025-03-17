import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl:string='https://shopvillaapi.vercel.app/'; //'https://localhost:7042/api/';
  constructor(private http:HttpClient) { }
  signupuser(userJson:object):Observable<any>
  {
    return this.http.post<string>(this.baseurl+'Users',userJson, { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}); //this.baseurl+'Users'+'/signupuser'
  }
}
