import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { CustomcardComponent } from './customcard/customcard.component';
import { FormsModule } from '@angular/forms';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { HttpClientModule } from '@angular/common/http';
import { CookComponent } from './cook/cook.component';
import { MaidComponent } from './maid/maid.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    DashboardComponent,
    DashboardheaderComponent,
    CustomcardComponent,
    ListstudentComponent,
    CookComponent,
    MaidComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
