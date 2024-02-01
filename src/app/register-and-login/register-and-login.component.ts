import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../expressdb/services.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-and-login',
  templateUrl: './register-and-login.component.html',
  styleUrl: './register-and-login.component.css'
})
export class RegisterAndLoginComponent {
 
 
constructor(private s:Router,private db:ServicesService,private _bottomSheet: MatBottomSheet){}
// registation in database
runame1:any;
remail1:any;
rpassword1:any;
rpassword2:any;
passwordcheck:any;
submit(){
  console.log(this.runame1)
var data
  data=
    {
      "userName":this.runame1,
      "password":this.rpassword1,
      "email":this.remail1
    }
    this.db.register(data).subscribe((res)=>{
      alert(res);
    })
}
// ......................... user login data.....................

Uname:any;
password:any;
admin:any;
details:any;
user:any;

uname1:any;
password1:any;
email1:any;
Login(){

  this.details={
    userName:this.Uname,
    password:this.password
  }
  this.db.loginnow(this.details).subscribe((res)=>{
   
    
  if(res=="wrong password ........!"){
    
      Swal.fire({
        icon:'question',
        title:'Wrong password',
        text:'plz check your details'
      })
      this.s.navigateByUrl("/registerAndLogin");
    }
   else if(res=="user not found......!"){
    Swal.fire({
      icon:'error',
      title:"User Not Found",
      text: " Plz Registar Now",
    })
    this.s.navigateByUrl("/registerAndLogin");
  }
  else if(res!="wrong password ........!" && res!="user not found......!"){
 this.user=JSON.parse(res);
    this.uname1=this.user.userName;
    this.password1=this.user.password;
    this.email1=this.user.email;
    Swal.fire({
      title:'login success',
      icon:'success',
      text:'welcome our site'
    })
  this.s.navigateByUrl("/home");
  }
  })

  }




// forgot password

forgotUname:any;



Caption1:string="";
Caption:string="";

passwordf:any;
passwordl:any;

modaltwo=false;
//  i=0;
 userInput(){
  this.Caption="";
  
  // if(this.i==0){
  var s = new Set();
       for(var i=97;i<=122;i++){
         s.add(String.fromCharCode(i));
       }
       for(let i=65;i<=90;i++){
         s.add(String.fromCharCode(i));
       }
      
 
       var arr=[...s];
      
       for(var i=1;i<=5;i++){
         var otp=Math.round(Math.random()*52);
        this.Caption+=arr[otp];
       }
      //  this.i++;
      // }

      
}

// submit1(){
//   alert('your password has been changed successfully');
//   this.Users=localStorage.getItem('users');
//   this.Users=JSON.parse(this.Users);
//   this.checkuname=this.Users.username;
//   this.Users.password=this.passwordl;
//   localStorage.setItem('users',JSON.stringify(this.Users));
//   this.modaltwo=false;
//   this.passwords=false;
//   // this.flag=false;

// }
flag=false;
Users:any;
checkuname:any;


FindAC(){
  console.log(this.passwordf, this.passwordl)
  if(this.Caption!=this.Caption1){
    alert('Caption MisMatched...!');   
  }
  else{
    this.modaltwo=true;
    this.flag=false;
  }
  

}
passwords=false;
pass(){
  this.passwords=true;

}
newAccount(){
  this.s.navigateByUrl("register")
}


}
