import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  up_down(str:any){
    let ele = document.getElementById(str);
    if(ele.innerHTML == "+"){
      ele.innerHTML="-";
    }else{
      ele.innerHTML="+";
    }
  }
    
  public val:any = 1;

  ngOnInit(): void {

    setTimeout(() => {
      this.val = 2;
    }, 2000);

    
  }

}
