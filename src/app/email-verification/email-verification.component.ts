import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  public val:any = 1;
  public isDisabledBtn:boolean = false;
  public errorInVerify:boolean = false;

  constructor(public serviceAuth:AuthServiceService) { }


  hideErrorMsg(){
    if(this.errorInVerify){
      this.errorInVerify = false;
    }
    this.serviceAuth.verifyErr = "";
  }
  hideSuccessMsg(){
    if(this.serviceAuth.hasVerified){
      this.serviceAuth.hasVerified = false;
    }

  }



  onButtonClick(){

    this.isDisabledBtn = true;
    this.hideErrorMsg();
    this.hideSuccessMsg();
    setTimeout(() => {

      this.isDisabledBtn = false;
      setTimeout(() => {
        this.errorInVerify = true;
        this.serviceAuth.SendVerificationMail();
      }, 500);

    }, 3000);
    
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.val =2;
      
    }, 2000);
  }

}
