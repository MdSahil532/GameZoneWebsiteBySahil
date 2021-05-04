import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
declare var $:any;


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private _activeRouter:ActivatedRoute) { }

  public val:any=1;
  public count:any = 1;
  public nameProduct:any;
  public imgProduct:any;
  public pcN:any;
  public priceProduct:any;
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
    
    this.nameProduct = this._activeRouter.snapshot.paramMap.get("name");
    this.imgProduct = this._activeRouter.snapshot.paramMap.get("img");
    this.priceProduct = parseInt(this._activeRouter.snapshot.paramMap.get("price"));
    this.pcN = this.nameProduct +" (Pc)";

  
    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

  
  
  
}
