
import { Injectable } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
}
  SignUp(d):any
  {
     return this.http.post('http://localhost:3000/sign-up',d);
  }
  SignIn(d):any
  {
     return this.http.post('http://localhost:3000/sign-in',d);
  }