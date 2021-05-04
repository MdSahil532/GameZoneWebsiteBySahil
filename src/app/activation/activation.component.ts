import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  constructor() { }
  
  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);
    
  }

}
