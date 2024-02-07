import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  user:any;
  
  

  constructor( private http:HttpClient) { }
  register(user:any){
     return this.http.post("http://localhost:4300/users/register",user,{responseType:'text'});
  }
  loginnow(details:any){
    
    return this.http.post("http://localhost:4300/users/login",details,{responseType:"text"});
    
  }
  // user details
  getUser(user1:any){
    this.user=user1;
  }
  giveuser(){
    console.log(this.user)
    return this.user;
  }
  // card details
  addcard(AtmCard:any){
    console.log(AtmCard);
    return this.http.post("http://localhost:4300/addcard",AtmCard,{responseType:'text'});
  }
  // get cards
  getcards(userData:any){
    // var userName = this.user.userName;
    return this.http.post("http://localhost:4300/getCards",userData,{responseType:"json"});
  }
  postStatement(statement:any){
    return this.http.post("http://localhost:4300/statement",statement,{responseType:"text"});
  }
  piechartrecords(data:any){
    return this.http.post(" http://localhost:4300/getbills",data);
  }
}
