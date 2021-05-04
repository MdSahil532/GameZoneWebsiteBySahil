import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dmca',
  templateUrl: './dmca.component.html',
  styleUrls: ['./dmca.component.css']
})
export class DmcaComponent implements OnInit {

  constructor() { }

  public val:any = 1;


  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);
    
  }

}
