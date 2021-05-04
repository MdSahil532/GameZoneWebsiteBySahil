import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-cart-view-ps',
  templateUrl: './cart-view-ps.component.html',
  styleUrls: ['./cart-view-ps.component.css']
})
export class CartViewPsComponent implements OnInit {

  constructor(private _activedRouter:ActivatedRoute) { }

  public val:any=1;
  public count:any = 1;
  public namePsProduct:any;
  public imgPsProduct:any;
  public psN:any;
  public pricePsProduct:any;
  public isToastShow:boolean = false;

  quantityIncreament(){
    if(this.count == 10){
      this.isToastShow = true;
    }
    if(this.count < 10){
      this.count += 1;
    }
  }
  quantityDecreament(){

    if(this.count > 1){
      this.count -= 1;
      this.hideToast();
    }  
  }
  hideToast(){
    if(this.isToastShow){
      this.isToastShow = false;
    }
  }

  ngOnInit(): void {

    this.namePsProduct = this._activedRouter.snapshot.paramMap.get("namePs");
    this.imgPsProduct = this._activedRouter.snapshot.paramMap.get("imgPs");
    this.pricePsProduct = parseInt(this._activedRouter.snapshot.paramMap.get("pricePs"));
    this.psN = this.namePsProduct + " (PlayStation)";
  
    setTimeout(() => {
      this.val = 2;
    }, 2000);
  }

}
