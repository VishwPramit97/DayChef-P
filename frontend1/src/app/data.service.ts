
import { Injectable } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http:HttpClient) { }
 
  SignUp(d):any
  {
      
     return this.http.post('http://localhost:3000/sign-up',d);
  }
  SignIn(d):any
  {
     return this.http.post('http://localhost:3000/sign-in',d);
  }
  reg(d):any
  {
    
     return this.http.post('http://localhost:3000/reg',d);
  }
}