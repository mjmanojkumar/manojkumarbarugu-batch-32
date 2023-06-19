import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
fName: string='';
lName: string = '';
pnumber: string = '';
email: string = '';
pword: string = '';

cluster: string = "Login";

showlogin = true;
signup = true;
profile = false;



onSubmit(){
this.signup = false;
this.showlogin = false;
this.profile = true;
}

onChange(){
  this.cluster = this.cluster === "Login" ? "Logout" : "Login"
}
}
