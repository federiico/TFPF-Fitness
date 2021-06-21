import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Inserisci Email.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Inserisci password.' 
      }
    ]
  };

  constructor(
    private router: Router, 
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  logmeIN(value) {
    this.ionicAuthService.signinUser(value)
      .then((response) => {
        console.log(response)
        this.errorMsg = "";
        this.router.navigate(['home']);
      }, error => {
        this.errorMsg = error.message;
        this.successMsg = "Email/password non validi";
      })
  }

  signinpage(){

    this.router.navigate(['signin']);

  }

}
