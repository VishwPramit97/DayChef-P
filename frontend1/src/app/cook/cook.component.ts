import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   booking()
   {
    this.router.navigate(['/cookconfirm']);
   }
}
