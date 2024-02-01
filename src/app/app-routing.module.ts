import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';


import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';
import { AddCardsComponent } from './add-cards/add-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [

  {path:'',component:LandingComponent},
 
  {path:'registerAndLogin',component:RegisterAndLoginComponent},
  {path:'home',component:HomeComponent,
  children:[
  {path:'offers',component:AddCardsComponent},
  {path:'cardDetails',component:CardDetailsComponent}
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
