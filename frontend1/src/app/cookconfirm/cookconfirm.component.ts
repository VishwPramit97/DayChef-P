import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cookconfirm',
  templateUrl: './cookconfirm.component.html',
  styleUrls: ['./cookconfirm.component.css']
})
export class CookconfirmComponent implements OnInit {
  @Input() peopleprop;
  @Input() Demandprop;
  @Input() timeprop;
  @Input() earriveprop;
  @Input() arriveprop;
  @Input() tarriveprop;
  firstnameprop;
  chefprop1;
  pinprop1;
  stateprop1;
  cityprop1;
  addressprop1;
  emailprop1;
 


  constructor(private dst:DataService) { }

  ngOnInit(): void {
  }
  bookin(dt)
  {
    this.dst.confirm({dt,firstname:this.firstnameprop,chefno:this.chefprop1,pinno:this. pinprop1,state:this.stateprop1,city:this.cityprop1,addres:this.addressprop1,email:this.emailprop1})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
         localStorage.setItem('name', response.data[0].name);
         localStorage.setItem('email', response.data[0].email);
         alert("your booking is successfull")
      }
    })
  }
}
