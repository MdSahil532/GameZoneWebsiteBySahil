import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExampleWebsite';
  
  constructor(private router:Router) {
    this.router.events.subscribe(evt => {

        if(evt instanceof NavigationEnd){
          window.scrollTo(0,0)
        }
    })

  }


}
