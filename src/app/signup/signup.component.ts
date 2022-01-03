import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  Signup: any;
  ngOnInit(): void {
    this.Signup = new FormGroup({
      "userName": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "mobileNumber": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/)])
        });
   
  }
  submitData()
  {
     console.log(this.Signup.value);
  }
  get userName()
  {
    return this.Signup.get('userName');
  }
  get mobileNumber()
  {
    return this.Signup.get('mobileNumber');
  }
  get emailId()
  {
    return this.Signup.get('emailId');
  }
  get password()
  {
    return this.Signup.get('password');
  }
}
  
