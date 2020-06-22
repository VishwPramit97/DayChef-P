import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  nameProp;
  mobileProp;
  emailProp;
  passwordProp;
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }
    signUp()
    { 
    //  alert(JSON.stringify({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileProp}))
      
       this.ds.SignUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileProp})
       .subscribe((response)=>{
        //  alert(JSON.stringify(response));
         if(response.status=="ok")
         {
           
           alert("registration successfully you will be redirected to login");
           this.router.navigate(['/login']);
         }
         else{
           alert("could not register");
         }
       })
    }
}
