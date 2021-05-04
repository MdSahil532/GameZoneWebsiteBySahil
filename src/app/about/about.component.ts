import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val=2;
    }, 2000);
  }

}
