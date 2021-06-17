import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  
  signin(){

    this.router.navigate(['/home']);

  }

  logme(){
    this.router.navigate(['/login']);
  }
}