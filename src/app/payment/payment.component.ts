import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _activeR:ActivatedRoute) { }

  public val:any =1;
  public isAgree:boolean = true;
  public productPName:any;
  public prodQuantity:any;
  public totalPrice:any;


  acceptOrnot(){

    if(this.isAgree){
      this.isAgree=false;
    }else{
      this.isAgree=true;
    }
  }

  ngOnInit(): void {

    this.productPName = this._activeR.snapshot.paramMap.get("namep");
    this.prodQuantity = this._activeR.snapshot.paramMap.get("quanp");
    this.totalPrice = this._activeR.snapshot.paramMap.get("totalp");

    setTimeout(() => {
      
      this.val = 2;
    }, 2000);
  }

}
