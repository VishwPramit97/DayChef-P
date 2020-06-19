import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 namee;
 email;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("eamil");
    this.route.queryParamMap.subscribe((d)=>{
    this.namee=d.get("name1");
    });
  }
  
   
}
