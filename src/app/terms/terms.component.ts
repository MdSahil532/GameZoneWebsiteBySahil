import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
