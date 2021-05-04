import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router, public authService:AuthServiceService) { }
  public isToastShow:boolean = false;
  public isDisabledBtn:boolean = false
  public errorInReg:boolean = false;
  public isPasswordVisible:boolean = false;

  lettersRegX =/^(?![\s.]+$)[a-zA-Z\s.]*$/
  emailRegX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


 public userNameErr:string = "";
 public emailIdErr:string = "";
 public passWordErr:string = "";
 public confirmPasssErr:string = "";

 public userName:string = "";
 public emailId:string = "";
 public passWord:string = "";
 public confirmPasss:string = "";

 hideToast(){
  if(this.isToastShow){
    this.isToastShow = false;
  }
}
hideErrorMsg(){
  if(this.errorInReg){
    this.errorInReg = false;
  }
  this.authService.regErr = "";
}

 inputUserNameBlur(){
  if(this.userName == ""){
    this.userNameErr = "UserName is required!";
  }else if(!this.lettersRegX.test(this.userName)){
    this.userNameErr="Only letter allowed!";
  }
  else{
   this.userNameErr = ""; 
  }
  this.hideToast();
  this.hideErrorMsg();
}

inputEmailIdBlur(){
  if(this.emailId == ""){
    this.emailIdErr = "Email address is required!";
  }else if(!this.emailRegX.test(this.emailId)){
    this.emailIdErr="Invalid email adress format!";
  }
  else{
   this.emailIdErr = ""; 
  }
  this.hideToast();
  this.hideErrorMsg();
}

inputPasswordBlur(){
  if(this.passWord == ""){
    this.passWordErr = "Password is required!"
  }else if(this.passWord.length < 8){
    this.passWordErr = "Password  must have atleast 8 character!";
  }else if(this.hasWhiteSpace(this.passWord)){
    this.passWordErr = "WhiteSpace not allowed!";
  }
  else{
    this.passWordErr = "";
  }
  this.hideToast();
  this.hideErrorMsg();
}
inputConfirmPassBlur(){
  if(this.confirmPasss == ""){
    this.confirmPasssErr = "Password confirmation is required!"
  }else if(this.passWord != this.confirmPasss){
    this.confirmPasssErr = "Password miss match!";
  }
  else{
    this.confirmPasssErr = "";
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

showOrHidePassword(){
  if(this.isPasswordVisible){
    this.isPasswordVisible = false;
  }else{
    this.isPasswordVisible = true;
  }
}

hasWhiteSpace(str:string): boolean{
  for(let i=0; i<str.length; i++){
    if(str.charAt(i) == ' '){
      return true;
    }
  }
  return false;
}


onSubmitform(){

  this.isDisabledBtn = true;
  this.hideToast();
  this.hideErrorMsg();
  
  setTimeout(() => {
    this.isDisabledBtn = false;
    if( this.isStrEmpty(this.userNameErr) && this.isStrEmpty(this.confirmPasssErr) && this.isStrEmpty(this.passWordErr) && this.isStrEmpty(this.emailIdErr)){

      if(!this.isStrEmpty(this.userName) && !this.isStrEmpty(this.emailId) && !this.isStrEmpty(this.passWord) && !this.isStrEmpty(this.confirmPasss)){
        
        if(this.confirmPasss != this.passWord){
          this.confirmPasssErr = "Password miss match!";
        }else{
          setTimeout(() => {
            this.errorInReg = true;
            this.authService.SignUp(this.emailId, this.passWord, this.userName);
          }, 500);
        }
        
      }else{
  
        if(this.isStrEmpty(this.userName)){
          this.userNameErr = "UserName is required!";
        }
        if(this.isStrEmpty(this.emailId)){
          this.emailIdErr = "Email address is required!";
        }
        if(this.isStrEmpty(this.passWord)){
          this.passWordErr = "Password is required!";
        }
        if(this.isStrEmpty(this.confirmPasss)){
          this.confirmPasssErr = "Password confirmation is required!";
        }

      }
  
    }else{

      if(this.isStrEmpty(this.userName)){
        this.userNameErr = "UserName is required!";
      }
      if(this.isStrEmpty(this.emailId)){
        this.emailIdErr = "Email address is required!";
      }
      if(this.isStrEmpty(this.passWord)){
        this.passWordErr = "Password is required!";
      }
      if(this.isStrEmpty(this.confirmPasss)){
        this.confirmPasssErr = "Password confirmation is required!";
      }

      this.isToastShow = true;
    }
    
  }, 3000);

}


 



  public val:any = 1;

  ngOnInit(): void {
  

    setTimeout(() => {
      this.val = 2;
    }, 2000);
    

  }

}
