import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DestinationComponent } from './destination/destination.component';
import { SignupComponent } from './signup/signup.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BackpackingComponent } from './backpacking/backpacking.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DestinationComponent,
    SignupComponent,
    BookNowComponent,
    BackpackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
