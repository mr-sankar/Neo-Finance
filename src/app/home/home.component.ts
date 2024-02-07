import {  inject , Component, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


import { Chart } from 'chart.js';
import { ServicesService } from '../expressdb/services.service';
import { Router } from '@angular/router';

// import { NgApexchartsModule } from 'ng-apexcharts';
export type ChartOptions = {

  labels: any;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private ex:ServicesService,private r:Router){}
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );  

    logout(){
this.r.navigateByUrl("/")
    }
    
    
  
  
   

}
