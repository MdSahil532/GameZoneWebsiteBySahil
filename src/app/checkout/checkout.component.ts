import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _aRoute:ActivatedRoute) { }
  public nam:any;
  public quan:any;
  public total:any;

  public val:any=1;

  ngOnInit(): void {

    this.nam = this._aRoute.snapshot.paramMap.get("name");
    this.quan = this._aRoute.snapshot.paramMap.get("quan");
    this.total = this._aRoute.snapshot.paramMap.get("total");    
    console.log(this.nam);
    console.log(this.quan);
    console.log(this.total);

    setTimeout(() => {

      this.val = 2;
      
    }, 2000);

    
  }

}
