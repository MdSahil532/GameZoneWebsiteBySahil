import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router, public authService:AuthServiceService) { }

  public val:any = 1;
  public errorInLog:boolean = false;
  public isToastShow:boolean = false;
  public isDisabledBtn:boolean = false
  

  public emailAddressErr:string = "";
  public passwordErr:string = "";

  public emailAddress:string = "";
  public password:string = "";


  inputEmailBlur(){
    if(this.emailAddress == ""){
      this.emailAddressErr = "Email address is required for login!";
    }
    else{
     this.emailAddressErr = ""; 
    }
    this.hideToast();
    this.hideErrorMsg();
  }


  hideToast(){
    if(this.isToastShow){
      this.isToastShow = false;
    }
  }

  inputPassBlur(){
    if(this.password == ""){
      this.passwordErr = "Password is required for login!";
    }
    else{
     this.passwordErr = ""; 
    }
    this.hideToast();
    this.hideErrorMsg();
  }


  isStrEmpty( str:string): boolean{
    if(str.length == 0 && str == ""){
      return true;
    }else{
      return false;
    }
  }

  hideErrorMsg(){
    if(this.errorInLog){
      this.errorInLog = false;
    }
    this.authService.logErr = "";
  }


  
onSubmitform(){

  this.isDisabledBtn = true;
  this.hideToast();
  this.hideErrorMsg();
  setTimeout(() => {
    this.isDisabledBtn = false;
    if( this.isStrEmpty(this.emailAddressErr) && this.isStrEmpty(this.passwordErr)){

      if(!this.isStrEmpty(this.emailAddress) && !this.isStrEmpty(this.password)){

        setTimeout(() => {
          this.errorInLog = true;
          this.authService.SignIn(this.emailAddress, this.password);
        }, 500);
  
      }else{
  
        if(this.isStrEmpty(this.emailAddress)){
          this.emailAddressErr = "Email address is required for login!";
        }
        if(this.isStrEmpty(this.password)){
          this.passwordErr = "Password is required for login!";
        }

      }
  
    }else{

      if(this.isStrEmpty(this.emailAddress)){
        this.emailAddressErr = "Email address is required for login!";
      }
      if(this.isStrEmpty(this.password)){
        this.passwordErr = "Password is required for login!";
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
