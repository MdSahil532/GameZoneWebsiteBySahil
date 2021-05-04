import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public val:any = 1;

  ngOnInit(): void {
    
    setTimeout(() => {
      this.val = 2;
    }, 2000);
  }

}
