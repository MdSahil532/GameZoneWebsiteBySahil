import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
