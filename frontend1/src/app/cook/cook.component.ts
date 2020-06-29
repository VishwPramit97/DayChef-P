import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookconfirmComponent } from '../cookconfirm/cookconfirm.component';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  peopleprop;
  Demandprop;
  timeprop;
  earriveprop;
  arriveprop;
  tarriveprop

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   booking()
   {
    this.router.navigate(['/dashboard/cookconfirm'],{queryParams:{people:this.peopleprop,demand:this.Demandprop,time:this.tarriveprop,term:this.timeprop,startdate:this.arriveprop,enddate:this.earriveprop}});
   }
}
