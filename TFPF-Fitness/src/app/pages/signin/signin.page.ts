import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage{

  constructor(private router: Router) { }

  form =new FormGroup({
    nome : new FormControl('', [Validators.required]),
    cognome : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  });
  
  onSubmit(){
    console.log(this.form.value);
    this.router.navigate(['/home']);
  }
  
  logme(){
    this.router.navigate(['/login']);
  }
}
