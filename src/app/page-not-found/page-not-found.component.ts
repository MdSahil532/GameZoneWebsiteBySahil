import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {
    
    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
