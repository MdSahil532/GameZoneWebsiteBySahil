import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {

  emailRegX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public authService:AuthServiceService) { }

  public isDisabledBtn:boolean = false;
  public isToastShow:boolean = false;
  public errorInReset:boolean = false;
  
  public emailAddress:any = "";
  public emailErr:any = "";
  public val:any =1;

  inputEmailId(){
    if(this.emailAddress == ""){
      this.emailErr = "Email Address is required for password reset!";
    }else if(!this.emailRegX.test(this.emailAddress)){
      this.emailErr = "Invalid email format pls provide valid email address!";
    }
    else{
      this.emailErr = "";
    }
    this.hideToast();
    this.hideErrorMsg();
    this.hideSuccessMsg();
  }

  isStrEmpty( str:string): boolean{
    if(str.length == 0 && str == ""){
      return true;
    }else{
      return false;
    }
  }

  hideToast(){
    if(this.isToastShow){
      this.isToastShow = false;
    }
  }

  hideErrorMsg(){
    if(this.errorInReset){
      this.errorInReset = false;
    }
    this.authService.resetErr = "";
  }
  hideSuccessMsg(){
    if(this.authService.hasReset){
      this.authService.hasReset = false;
    }

  }


    
onSubmit(){

  this.isDisabledBtn = true;
  this.hideErrorMsg();
  this.hideSuccessMsg();
  this.hideToast();
  setTimeout(() => {
    this.isDisabledBtn = false;
    if( this.isStrEmpty(this.emailErr)){

      if(!this.isStrEmpty(this.emailAddress)){

        setTimeout(() => {
          this.errorInReset = true;
          this.authService.ForgotPassword(this.emailAddress);
        }, 500);
       
      }else{
  
        if(this.isStrEmpty(this.emailAddress)){
          this.emailErr = "Email address is required for password reset!";
        }  
      }
    }else{

      if(this.isStrEmpty(this.emailAddress)){
        this.emailErr = "Email address is required for password reset!";
      }
      this.isToastShow = true;
    }
    
  }, 3000);
}



  ngOnInit(): void {
    setTimeout(() => {
      this.val = 2;
      
    }, 2000);
  }

}
