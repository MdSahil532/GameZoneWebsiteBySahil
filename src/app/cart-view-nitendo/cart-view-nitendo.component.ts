import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-view-nitendo',
  templateUrl: './cart-view-nitendo.component.html',
  styleUrls: ['./cart-view-nitendo.component.css'],
})
export class CartViewNitendoComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute) {}

  public val: any = 1;
  public count: any = 1;
  public nameNProduct: any;
  public imgNProduct: any;
  public nitendoName: any;
  public priceNProduct: any;
  public isToastShow: boolean = false;

  quantityIncreament() {
    if (this.count == 10) {
      this.isToastShow = true;
    }
    if (this.count < 10) {
      this.count += 1;
    }
  }
  quantityDecreament() {
    if (this.count > 1) {
      this.count -= 1;
      this.hideToast();
    }
  }
  hideToast() {
    if (this.isToastShow) {
      this.isToastShow = false;
    }
  }

  ngOnInit(): void {
    this.nameNProduct = this._activatedRoute.snapshot.paramMap.get('nName');
    this.imgNProduct = this._activatedRoute.snapshot.paramMap.get('nImg');
    this.priceNProduct = parseInt(
      this._activatedRoute.snapshot.paramMap.get('nPrice')
    );
    this.nitendoName = this.nameNProduct + ' (Nitendo)';

    setTimeout(() => {
      this.val = 2;
    }, 2000);
  }
}
