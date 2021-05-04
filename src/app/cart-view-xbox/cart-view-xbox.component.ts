import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-cart-view-xbox',
  templateUrl: './cart-view-xbox.component.html',
  styleUrls: ['./cart-view-xbox.component.css']
})
export class CartViewXboxComponent implements OnInit {

  constructor(private _activeRouter:ActivatedRoute) { }

  public val:any=1;
  public count:any = 1;
  public nameXProduct:any;
  public imgXProduct:any;
  public xboxN:any;
  public priceXProduct:any;
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

    this.nameXProduct = this._activeRouter.snapshot.paramMap.get("nameX");
    this.imgXProduct = this._activeRouter.snapshot.paramMap.get("imgX");
    this.priceXProduct = parseInt(this._activeRouter.snapshot.paramMap.get("priceX"));
    this.xboxN = this.nameXProduct + " (Xbox)";
  
    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
