import { Component, OnInit } from '@angular/core';
import { ProtractorExpectedConditions } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maid',
  templateUrl: './maid.component.html',
  styleUrls: ['./maid.component.css']
})
export class MaidComponent implements OnInit {
  earriveprop;
  arriveprop;
  timeprop;
  ttimeprop;
  demandprop;
  peopleprop;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  process()
{

  this.route.navigate(['/dashboard/madeconfirm'],{queryParams:{startdate:this.earriveprop,enddate:this.arriveprop,time:this.timeprop,shtime:this.ttimeprop,demand:this.demandprop,people:this.peopleprop}})

}

}
