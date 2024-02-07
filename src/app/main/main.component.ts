import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ServicesService } from '../expressdb/services.service';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private db: ServicesService) {}
  chart:any = [];
  ctx: any;
  config: any;
  chartData: ChartData<'pie', number[], string | string[]> = {datasets:[]};
  chartDatalabels: any[] = [];
  data1: any;
  userdata: any;
  // userName:any;
  card_id: any;
  record: any;
  userName: any;
  totalAmount:number=0;




  disabled = false;
  max = 100000;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  limit:number=20000;
 cards1:any;

  onemonth() {
   
    var totalPC: number = 0;
     var totalAcc: number = 0;
    var totalTran: number = 0;
    var totalEnter: number = 0;
   
    this.userdata = localStorage.getItem('users');
    this.userdata = JSON.parse(this.userdata);
    (this.userName = this.userdata.userName),
      (this.data1 = {
        userName: this.userName,
        card_id: this.card_id,
      });
    this.db.piechartrecords(this.data1).subscribe((result) => {
      this.record =(result);
      // console.log(this.record);
      for(let i of this.record){
        if(i.date_range=="1"){
          totalPC+=parseInt(i.Personal_Care);
          totalAcc+=parseInt(i.Accommodation);
          totalTran+=parseInt(i.Transport);
          totalEnter+=parseInt(i.Entertainment);
      }
    }
    this.totalAmount=totalPC+totalAcc+totalTran+totalEnter;
  
  
    this.printpie(totalPC,totalAcc,totalTran,totalEnter);
    });
    this.db.getcards(this.data1).subscribe((result)=>{
this.cards1=result;
    for(let j of this.cards1){
      if(this.card_id==j.card_id)
      this.limit=j.limit;
    }
    })
    
  }

  

  ThreeMonths() {

    var totalPC: number = 0;
     var totalAcc: number = 0;
    var totalTran: number = 0;
    var totalEnter: number = 0;

    this.userdata = localStorage.getItem('users');
    this.userdata = JSON.parse(this.userdata);
    (this.userName = this.userdata.userName),
      (this.data1 = {
        userName: this.userName,
        card_id: this.card_id,
      });
    this.db.piechartrecords(this.data1).subscribe((result) => {
      this.record =(result);
      console.log(this.record);
      for(let i of this.record){
        if(i.date_range=="3"){
          totalPC+=parseInt(i.Personal_Care);
          totalAcc+=parseInt(i.Accommodation);
          totalTran+=parseInt(i.Transport);
          totalEnter+=parseInt(i.Entertainment);

      }
    }
    this.totalAmount=totalPC+totalAcc+totalTran+totalEnter;
    this.value=this.totalAmount;
    this.printpie(totalPC,totalAcc,totalTran,totalEnter);

    
    });
    this.db.getcards(this.data1).subscribe((result)=>{
      this.cards1=result;
          for(let j of this.cards1){
            if(this.card_id==j.card_id)
            this.limit=j.limit;
          }
          })

  }
 
  SixMonths(){
    
    var totalPC: number = 0;
     var totalAcc: number = 0;
    var totalTran: number = 0;
    var totalEnter: number = 0;

    this.userdata = localStorage.getItem('users');
    this.userdata = JSON.parse(this.userdata);
    (this.userName = this.userdata.userName),
      (this.data1 = {
        userName: this.userName,
        card_id: this.card_id,
      });
    this.db.piechartrecords(this.data1).subscribe((result) => {
      this.record =(result);
      console.log(this.record);
      for(let i of this.record){
        if(i.date_range=="6"){
          totalPC+=parseInt(i.Personal_Care);
          totalAcc+=parseInt(i.Accommodation);
          totalTran+=parseInt(i.Transport);
          totalEnter+=parseInt(i.Entertainment);
      }
    }
    this.totalAmount=totalPC+totalAcc+totalTran+totalEnter;
    this.value=this.totalAmount;
    this.printpie(totalPC,totalAcc,totalTran,totalEnter);
    });
    this.db.getcards(this.data1).subscribe((result)=>{
      this.cards1=result;
          for(let j of this.cards1){
            if(this.card_id==j.card_id)
            this.limit=j.limit;
          }
          })

  }
  OneYear(){
    
    var totalPC: number = 0;
     var totalAcc: number = 0;
    var totalTran: number = 0;
    var totalEnter: number = 0;

    this.userdata = localStorage.getItem('users');
    this.userdata = JSON.parse(this.userdata);
    (this.userName = this.userdata.userName),
      (this.data1 = {
        userName: this.userName,
        card_id: this.card_id,
      });
    this.db.piechartrecords(this.data1).subscribe((result) => {
      this.record =(result);
      console.log(this.record);
      for(let i of this.record){
        if(i.date_range=="12"){
          totalPC+=parseInt(i.Personal_Care);
          totalAcc+=parseInt(i.Accommodation);
          totalTran+=parseInt(i.Transport);
          totalEnter+=parseInt(i.Entertainment);
      }
    }
    this.totalAmount=totalPC+totalAcc+totalTran+totalEnter;
    this.value=this.totalAmount;
    this.printpie(totalPC,totalAcc,totalTran,totalEnter);
    });
    this.db.getcards(this.data1).subscribe((result)=>{
      this.cards1=result;
          for(let j of this.cards1){
            if(this.card_id==j.card_id)
            this.limit=j.limit;
          }
          })

  }

  printpie(totalPC:number,totalAcc:number,totalTran:number,totalEnter:number){

   let data:number[] = [];
    data.push(totalPC);
    data.push(totalAcc);
    data.push(totalTran);
    data.push(totalEnter);
    this.chartData = {
      labels: [['Personal'], ['Accommodation'],['Entertainment'], 'Transport'],
      datasets: [
        {
          data: data,
          borderWidth: 1,
         borderColor: 'grey',
         backgroundColor: ['#A2C3DB', '#DCB12D', '#c2fc03', '#3F9F9F'],
        },
      ],
    };

    this.chartDatalabels.push('Personal Care');
    this.chartDatalabels.push('Accommodation');
    this.chartDatalabels.push('Transport');
    this.chartDatalabels.push('Entertainment');

    // this.config = {
    //   type: 'pie',
    //   options: {},
    //   data: {
    //     labels: this.chartDatalabels,
    //     datasets: [
    //       {
    //         label: 'Chart Data',
    //         data: this.chartData,
    //         borderWidth: 1,
    //         borderColor: 'grey',
    //         backgroundColor: ['pink', 'yellow', 'red', 'green'],
    //       },
    //     ],
    //   },
    // };
    //  this.chart = new Chart('myChart', this.config);
    //  this.chart.chart.update();
    
  }
  cardLimit(){


  }
 
   cards:any
numberofcards:any;
  ngOnInit(){
 
    this.userdata = localStorage.getItem('users');
    this.userdata = JSON.parse(this.userdata);
    (this.userName = this.userdata.userName)
    console.log(this.userName)
    this.userdata={
      "userName":this.userName
    }
    this.db.getcards(this.userdata).subscribe((result)=>{
    this.cards=result;
    console.log(this.cards)
    this.displaycard()
    })
    
    this.card_id=1;
   this.onemonth()

  }
  displaycard(){
    this.numberofcards=this.cards.length
    console.log("len"+this.numberofcards);
    
  }



}
