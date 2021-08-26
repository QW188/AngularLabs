import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = "";
  
  password: string = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  itemClicked() {
    let login = this.login;
    let password = this.password;
    let validate = false;
    var users = [
      {
          "username": "kenneth",
          "password": "kenneth"
      },
      {
          "username": "cassie",
          "password": "cassie"
      },
      {
          "username": "sundayDate",
          "password": "sundayDate"
      }
  ];
  
   users.forEach(function (user) {
   if(user.username ==login && user.password == password) {
    validate = true;    
    
     }
   })  
   if(!validate) {
    alert("Wrong Password");
}
else {
  this.route.navigateByUrl('/account');

}
  }
}
