import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logmein(){
    // codice per entrare nel portale

    this.router.navigate(['home']);
  }

  signinpage(){
    // Registrati

    this.router.navigate(['signin']);

  }

}