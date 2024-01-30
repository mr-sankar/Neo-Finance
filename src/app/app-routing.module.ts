import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';
import { AddCardsComponent } from './add-cards/add-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CardDetailsComponent } from './card-details/card-details.component';

const routes: Routes = [

      
  {path:'registerLogin',component:RegisterAndLoginComponent},
  {path:'',component:HomeComponent, 
   children : [

  {path:'add-cards',component:AddCardsComponent},
  {path:'navbar',component:NavbarComponent,},
  {path:'myprofile',component:MyProfileComponent},
  {path:'card',component:CardDetailsComponent}
   ]
}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
