import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  user:string = "";
  
  constructor(public router:Router){
    
  }

  getRouter(){
    return this.router.routerState;
  }

  ngOnInit(){
    // if(this.router.url == "/"){
    //   this.router.navigateByUrl("/login")
    // }
  }
  

}
