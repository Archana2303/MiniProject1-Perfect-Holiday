import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { SignupComponent } from './signup/signup.component';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { BackpackingComponent } from './backpacking/backpacking.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Aboutus',component:AboutUsComponent},
  {path:'Destination',component:DestinationComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Booknow',component:BookNowComponent},
  {path:'Backpacking',component:BackpackingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
