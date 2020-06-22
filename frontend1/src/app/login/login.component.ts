import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private ds:DataService) { }
     emailProp;
     passwordProp;
     ngOnInit(): void {

    // alert(localStorage.getItem('email'));


    if(localStorage.getItem('email')){
      this.router.navigate(['/dashboard']);
    }
  }
  login()
  {
    
    this.ds.SignIn({ email:this.emailProp, password:this.passwordProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
         localStorage.setItem('name', response.data[0].name);
         localStorage.setItem('email', response.data[0].email);
         this.router.navigate(['/dashboard']);
      }
      else{
        alert("credentials are incorrect");
        
      }
    })
    
  }

}
