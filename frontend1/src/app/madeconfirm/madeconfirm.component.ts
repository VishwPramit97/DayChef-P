import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-madeconfirm',
  templateUrl: './madeconfirm.component.html',
  styleUrls: ['./madeconfirm.component.css']
})
export class MadeconfirmComponent implements OnInit {

  firstnameprop1;
  chefprop1;
  pinprop1;
  stateprop1;
  cityprop1;
  addressprop1;
  emailprop1;
  bookdetail;
  bookdetail1;
  bookdetail2;
  bookdetail3;
  bookdetail4;
  bookdetail5;
  constructor(private dst:DataService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
      this.bookdetail=d.get("people");
      this.bookdetail1=d.get("demand");
      this.bookdetail2=d.get("time");
      this.bookdetail3=d.get("shtime");
      this.bookdetail4=d.get("startdate");
      this.bookdetail5=d.get("enddate");
      alert(this.bookdetail);
      alert(this.bookdetail1);
      alert(this.bookdetail2);
      alert(this.bookdetail3);
      alert(this.bookdetail4);
      alert(this.bookdetail5);
  })
  

  }
 
  booking()
  {
     if(!(this. firstnameprop1==undefined && this.chefprop1==undefined && this. pinprop1==undefined && this.stateprop1==undefined && this.cityprop1==undefined && this.addressprop1==undefined && this.emailprop1==undefined))
    {
    this.dst.mconfirm({bdetail:this.bookdetail,bdetail1:this.bookdetail1,bdetail2:this.bookdetail2,bdetail3:this.bookdetail3,bdetail4:this.bookdetail4,bdetail5:this.bookdetail5,firstname:this.firstnameprop1,chefno:this.chefprop1,pinno:this. pinprop1,state:this.stateprop1,city:this.cityprop1,addres:this.addressprop1,email:this.emailprop1})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
         localStorage.setItem('name', response.data[0].name);
         localStorage.setItem('email', response.data[0].email); 
         alert("your booking is successfull");
         alert("made will continue on behalf your date");
         this.routes.navigate(['/']);
      }
    
    })
  }
  else {
    alert("please fill the required field");
  }

}
}