import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( public authService:AuthServiceService) { }
  public val:any = 1;

  ngOnInit(): void {
    
    
    setTimeout(() => {
      this.val = 2;
    }, 2000);
  

  }

}
