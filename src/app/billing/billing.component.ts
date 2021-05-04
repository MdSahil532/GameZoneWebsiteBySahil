import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private _routerActive:ActivatedRoute, private _router:Router) { }

  public isToastShow:boolean = false;
  public pName:any;
  public pQuantity:any;
  public pTotalP:any;
  public isProgress:boolean = false;

  public val:any=1;

 numberRegX = /^\d+$/;
 lettersRegX =/^(?![\s.]+$)[a-zA-Z\s.]*$/
 emailRegX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 public firstNameErr:string = "";
 public lastNameErr:string = "";
 public phoneNoErr:string = "";
 public emailIdErr:string = "";
 public isDisabledBtn:boolean = false

 public firstName:string = "";
 public lastName:string = "";
 public phoneNo:string = "";
 public emailId:string = "";

 hideToast(){
   if(this.isToastShow){
     this.isToastShow = false;
   }
 }

 inputFirstBlur(){
   if(this.firstName == ""){
     this.firstNameErr = "This field is required!";
   }else if(!this.lettersRegX.test(this.firstName)){
     this.firstNameErr="Only letter allowed!";
   }
   else{
    this.firstNameErr = ""; 
   }
   this.hideToast();
 }

 inputLastBlur(){
  if(this.lastName == ""){
    this.lastNameErr = "This field is required!";
  }else if(!this.lettersRegX.test(this.lastName)){
    this.lastNameErr="Only letter allowed!";
  }
  else{
   this.lastNameErr = ""; 
  }
  this.hideToast();
}

inputPhoneBlur(){
  if(this.phoneNo == ""){
    this.phoneNoErr = "This field is required!";
  }else if(!this.numberRegX.test(this.phoneNo)){
    this.phoneNoErr="Invalid phone no!";
  }else if(this.phoneNo.length != 10){
    this.phoneNoErr="Phone no must be 10 digit!";
  }
  else{
   this.phoneNoErr = ""; 
  }
  this.hideToast();
}

inputEmailBlur(){
  if(this.emailId == ""){
    this.emailIdErr = "This field is required!";
  }else if(!this.emailRegX.test(this.emailId)){
    this.emailIdErr="Invalid email adress!";
  }
  else{
   this.emailIdErr = ""; 
  }
  this.hideToast();
}

isStrEmpty( str:string): boolean{
  if(str.length == 0 && str == ""){
    return true;
  }else{
    return false;
  }
}


onSubmitform(){

  this.isDisabledBtn = true;

  setTimeout(() => {
    this.isDisabledBtn = false;
    if( this.isStrEmpty(this.firstNameErr) && this.isStrEmpty(this.lastNameErr) && this.isStrEmpty(this.phoneNoErr) && this.isStrEmpty(this.emailIdErr)){

      if(!this.isStrEmpty(this.firstName) && !this.isStrEmpty(this.lastName) && !this.isStrEmpty(this.phoneNo) && !this.isStrEmpty(this.emailId)){
        
          this._router.navigate(['/payment',this.pName,this.pQuantity,this.pTotalP]);
  
      }else{
  
        if(this.isStrEmpty(this.firstName)){
          this.firstNameErr = "This field is required!";
        }
        if(this.isStrEmpty(this.lastName)){
          this.lastNameErr = "This field is required!";
        }
        if(this.isStrEmpty(this.phoneNo)){
          this.phoneNoErr = "This field is required!";
        }
        if(this.isStrEmpty(this.emailId)){
          this.emailIdErr = "This field is required!";
        }
      }
  
    }else{
  
      if(this.isStrEmpty(this.firstName)){
        this.firstNameErr = "This field is required!";
      }
      if(this.isStrEmpty(this.lastName)){
        this.lastNameErr = "This field is required!";
      }
      if(this.isStrEmpty(this.phoneNo)){
        this.phoneNoErr = "This field is required!";
      }
      if(this.isStrEmpty(this.emailId)){
        this.emailIdErr = "This field is required!";
      }
      this.isToastShow = true;
    }
    
  }, 3000);

}


  public interval:any;

  ngOnInit(): void {

    this.pName = this._routerActive.snapshot.paramMap.get("pname");
    this.pQuantity = this._routerActive.snapshot.paramMap.get("pquan");
    this.pTotalP = this._routerActive.snapshot.paramMap.get("ptotal");

    setTimeout(() => {
      this.val = 2;
    }, 2000);

    this.interval = setInterval(()=>{
      this.hideToast();
    },15000);
  
  }

  ngOnDestroy() {
    if(this.interval){
      clearInterval(this.interval);
    }
  }


}
