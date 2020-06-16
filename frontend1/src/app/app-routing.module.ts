import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { WebsiteComponent } from './website/website.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
 { path:"",component:WebsiteComponent,children:[
                                 {   
                                    path:"Register",component:RegisterComponent
                                 },
                                 {   
                                  path:"Login",component:LoginComponent
                                 },
                                 {   
                                  path:"SignUp",component:SignUpComponent
                                 }
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
