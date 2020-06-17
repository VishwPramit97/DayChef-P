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


const routes: Routes = [
 { path:"",component:WebsiteComponent,children:[
                                 {   
                                    path:"Register",component:RegisterComponent
                                 },
                                 {   
                                  path:"Login",component:LoginComponent
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
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
