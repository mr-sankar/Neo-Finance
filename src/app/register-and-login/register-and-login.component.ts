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


// .........................user data.....................
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
    this.user=JSON.parse(res);
    this.uname1=this.user.userName;
    this.password1=this.user.password;
    this.email1=this.user.email;
    // console.log(this.san.userName)
    
    
 
    
 
 
  if((this.Uname!=undefined ||this.email1!=undefined)&&(this.Uname== this.uname1 || this.Uname==this.email1)&& this.password==this.password1){
    Swal.fire({
      title:'login success',
      icon:'success',
      text:'welcome our site'
    })
  this.s.navigateByUrl("/");
  }
  else if(this.Uname=="sankar" && this.password=="sankar@123"){

    Swal.fire({
      title:'login success',
      icon:'success',
      text:'welcome admin'
    })

    this.s.navigateByUrl("");
    this.admin={
      admine:this.Uname,
      password:this.password
    }
    localStorage.setItem("admin",JSON.stringify(this.admin));

  }
  else{

    if(localStorage.getItem('users')!=null){

      Swal.fire({
        icon:'question',
        title:'Wrong details',
       
        text:'plz check your details'
      })
      this.s.navigateByUrl("/login");
      
    }
else{

    Swal.fire({
      icon:'error',
      title:"login failed",
      text: " Plz Registar Now",
    })

    this.s.navigateByUrl("/");
  }

}
})



}
cancle(){
  this.s.navigateByUrl("/");
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
input(){
  this.Users=localStorage.getItem('users');
  this.Users=JSON.parse(this.Users);
  this.checkuname=this.Users.username;

  if(this.forgotUname==this.checkuname){
this.flag=true;
  }
  else{
    alert('UserName not matched...!')
  }
}

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
