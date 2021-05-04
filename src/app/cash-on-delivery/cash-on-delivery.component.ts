import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cash-on-delivery',
  templateUrl: './cash-on-delivery.component.html',
  styleUrls: ['./cash-on-delivery.component.css']
})
export class CashOnDeliveryComponent implements OnInit {

  constructor (private _cRouter:ActivatedRoute, private _router:Router) { }

  public deliverPName:any;
  public deliverPQuan:any;
  public deliverPTotal:any;

  public val:any = 1;
  public isAgree:boolean = true;
  public isToastShow:boolean = false;
  public isProgress:boolean = false;
  public isDisabled:boolean = false;


  hideToast(){
    if(this.isToastShow){
      this.isToastShow = false;
    }
  }

  acceptOrnot(){
    if(this.isAgree){
      this.isAgree=false;
    }else{
      this.isAgree=true;
    }
  }

  public states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  
  validStateName(control: AbstractControl): { [key: string]: boolean } | null{

    if (control.value == "Choose...") {
        return { 'invalidState': true };
    }
    return null;
}


  form = new FormGroup({
    state: new FormControl('', [Validators.required, this.validStateName]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$")]),
    zip: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]),
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){

    this.isProgress = true;
    this.isDisabled = true;
    setTimeout(() => {
      if(this.form.valid){
        this._router.navigate(['/thank-you',this.deliverPName,this.deliverPQuan,this.deliverPTotal]);
      }else{
        this.isToastShow = true;
      }
      this.isProgress = false;
      this.isDisabled = false;
    }, 3000);
    
  }

 

  ngOnInit(): void {

    this.deliverPName = this._cRouter.snapshot.paramMap.get("namec");
    this.deliverPQuan = this._cRouter.snapshot.paramMap.get("quanc");
    this.deliverPTotal = this._cRouter.snapshot.paramMap.get("totalc");

    
    setTimeout(() => {
      this.val = 2;
    }, 2000);


  }


}
