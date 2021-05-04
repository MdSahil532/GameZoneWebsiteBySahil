import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from '../services/auth-service.service';
import { User } from '../shared/services/user';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor(public authService:AuthServiceService, public FireBas:AngularFireAuth) { 
    
  }


 

  ngOnInit(): void {
  
   this.FireBas.authState.subscribe((user)=>{
     if(user){
      console.log("log in");
      console.log(user.email);
      console.log(user.uid);
      console.log(user.emailVerified);
     }else{
      console.log("log out");
     }
   });

  }

}
