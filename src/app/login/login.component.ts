import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginObj: any;
  constructor(private route: Router) {
    this.loginObj = {
      username: '',
      password: '',
    };
  }

  ngOnInit() {}

  login() {
    if (
      this.loginObj.username == 'admin' &&
      this.loginObj.password == 'admin'
    ) {
      this.route.navigateByUrl('customers');
    } else {
      alert('wrong credentials');
    }
  }
}
