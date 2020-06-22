import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nameProp;
  emailProp;
  cityProp;
  mobileProp
  constructor(private dsa:DataService ) { }

  ngOnInit(): void {
  }
  reg()
  { 
    // alert(JSON.stringify({name:this.nameProp, email:this.emailProp, city:this.cityProp, mobile:this.mobileProp}))
    
     this.dsa.reg({name:this.nameProp, email:this.emailProp, city:this.cityProp, mobile:this.mobileProp})
     .subscribe((response)=>{

       if(response.status=="ok")
       {
         
         alert("registration successfully you will be get in touch shortly");
  
       }
       else{
         alert("could not register");
       }
     })
  }
}
