import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
