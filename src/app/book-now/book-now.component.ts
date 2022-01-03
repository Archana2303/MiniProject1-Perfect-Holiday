import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  constructor(private router : Router) { }
  booknow: any;
  
  ngOnInit(): void {
    this.booknow = new FormGroup({
      "emailId": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required])
        });
  
  }
  submitData()
  {
     console.log(this.booknow.value);
  }
  get emailId()
  {
    return this.booknow.get('emailId');
  }

  get password()
  {
    return this.booknow.get('password');  
  }
  onLogin()
  {
     if( this.booknow.get('emailId').value === 'archana.bathula@gmail.com' && this.booknow.get('password').value === 'Archana@23') {
     this.router.navigate(['/Destination']);
    }
  }
}
