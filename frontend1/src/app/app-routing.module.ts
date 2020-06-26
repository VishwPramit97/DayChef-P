import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { WebsiteComponent } from './website/website.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { CookComponent } from './cook/cook.component';
import { MaidComponent } from './maid/maid.component';


const routes: Routes = [
 { path:"", component:WebsiteComponent, children:[
                                 {   
                                    path:"Register",component:RegisterComponent
                                 },
                                 {   
                                  path:"login",component:LoginComponent

                                 },
                                 {   
                                  path:"signup",component:SignUpComponent

                                 },
                                 {   
                                  path:"home",component:HomeComponent
                                 },
                                 {   
                                  path:"about",component:AboutComponent
                                 },
                                 {   
                                   path:"gallery",component:GalleryComponent
                                 },
                                 {   
                                  path:"contact",component:ContactComponent
                                 }
 ]},
 {
  path:"dashboard",component:DashboardComponent, canActivate:[AuthGuard],children:[
                
                                 {
                                   path:"cook1",component:CookComponent
                                 },
                                {
                                   path:"maid",component:MaidComponent
                                },
    
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
