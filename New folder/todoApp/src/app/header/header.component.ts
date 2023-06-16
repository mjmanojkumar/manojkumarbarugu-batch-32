import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cluster: String = "Login"
  showText = true;

  constructor() { }

  ngOnInit() {
  }


  onChange(){
      this.cluster = (this.cluster == "Login" )? "Logout" : "Login";
  }
  // toggleMenu(){

  //   //this.showText = !this.showText
  //   // if (this.showText) {
  //   //   this.showText = false;
  //   // } else {
  //   //   this.showText = true;
  //   // }
    
  // }

}
