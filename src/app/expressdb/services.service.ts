import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http:HttpClient) { }
  register(user:any){
     return this.http.post("http://localhost:4300/users/register",user,{responseType:'text'});
  }
  loginnow(details:any){
    return this.http.post("http://localhost:4300/users/login",details,{responseType:"text"});
  }

}
