import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequent',
  templateUrl: './frequent.component.html',
  styleUrls: ['./frequent.component.css']
})
export class FrequentComponent implements OnInit {

  constructor() {
   
  }

  public val:any = 1;

  plusMinus(id:any){
    let ele = document.getElementById(id);
    if(ele.innerHTML == "+"){
      ele.innerHTML="-";
    }else{
      ele.innerHTML="+";
    }
  }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.val = 2;
    }, 2000);

  }

}
