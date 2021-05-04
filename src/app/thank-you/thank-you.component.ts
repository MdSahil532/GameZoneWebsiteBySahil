import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private _router:ActivatedRoute, private _navigateRouter:Router) { }
  public val:any = 1;
  public orderPName:any;
  public orderPQuan:any;
  public orderPPrice:any;

  
  ngOnInit(): void {


    this.orderPName = this._router.snapshot.paramMap.get("oname");
    this.orderPQuan = this._router.snapshot.paramMap.get("oquan");
    this.orderPPrice = this._router.snapshot.paramMap.get("ototal");


    setTimeout(() => {
      this.val = 2;
    }, 2000);
    
  }

  ngOnDestroy() {
    
  }

}
