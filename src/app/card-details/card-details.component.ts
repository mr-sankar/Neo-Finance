import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServicesService } from '../expressdb/services.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css',
})
export class CardDetailsComponent {
  private breakpointObserver = inject(BreakpointObserver);
constructor(private db:ServicesService){}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
       userData:any;

    userName: any;
    section1: any;
    section2: any;
    section3: any;
    section4: any;
    exdate: any;
    limit:number=0;
    card_id: any;
    ngOnInit(){
      this.userData=localStorage.getItem("users");
      this.userData=JSON.parse(this.userData);
      this.userName=this.userData.userName;
      
    }
   
  AddCard() {
    var AtmCard = {
      "userName": this.userName,
      "section1": this.section1,
      "section2": this.section2,
      "section3": this.section3,
      "section4": this.section4,
      "exdate": this.exdate,
      "limit":this.limit,
      "card_id": this.card_id
    };
    this.db.addcard(AtmCard).subscribe((result)=>{
      alert(result);
    })
  }


}
