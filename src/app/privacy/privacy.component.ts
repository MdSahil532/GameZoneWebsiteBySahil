import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
