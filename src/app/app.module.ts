import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { RegisterAndLoginComponent } from './register-and-login/register-and-login.component';
import { AddCardsComponent } from './add-cards/add-cards.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import{MatStepperModule} from '@angular/material/stepper';
import { CardDetailsComponent } from './card-details/card-details.component';
import { LandingComponent } from './landing/landing.component';

import {NgChartsModule} from 'ng2-charts';
import { MainComponent } from './main/main.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { SetLimitsComponent } from './set-limits/set-limits.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
    RegisterAndLoginComponent,
    AddCardsComponent,
    MyProfileComponent,
    CardDetailsComponent,
    LandingComponent,
    MainComponent,
    UploadFilesComponent,
    SetLimitsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatStepperModule,
    AsyncPipe,
    HttpClientModule,
    MatDatepickerModule,
    MatSliderModule,
    NgChartsModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
