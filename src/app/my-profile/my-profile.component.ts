import { Component } from '@angular/core';
import { ServicesService } from '../expressdb/services.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css',
})
export class MyProfileComponent {
  constructor(private db: ServicesService) {}
userData:any;
  ngOnInit(){
    this.userData=this.db.giveuser();

  }
  userName: any;
  email: any;
 
  // buttons work
  temp = false;
  temp1 = false;
  temp2 = false;
  Userdetails() {
    this.temp = true;
    this.temp1 = false;
    this.temp2 = false;
   
    this.userName = this.userData.userName;
    this.email = this.userData.email;
  }

  Userdetails2() {
    this.temp = false;
    this.temp1 = true;
    this.temp2 = false;
  }

  // cards work
  cards: any;
  section1: any;
  section2: any;
  section3: any;
  section4: any;
  exdate: any;
  cardholder: any;
  cvv: any;

  Userdetails1() {
    this.temp = false;
    this.temp1 = false;
    this.temp2 = true;

    this.userData=localStorage.getItem("users");

  this.userData=JSON.parse(this.userData);
  this.userName=this.userData.username;
  this.email=this.userData.email;

    this.db.getcards(this.userData).subscribe((result) => {
      this.cards = result;
     
    });
    // this.cards = JSON.parse(this.cards);
    
  }
}
