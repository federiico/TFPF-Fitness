import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavComponentWithProps, NavController,Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  
  errore: string = '';

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: "Inserisci l'email." 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: "Inserisci la password." 
      }
    ]
  };

  constructor(
    private router: Router, 
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private nav: NavController,
    private database: AngularFirestore,
    private platform: Platform
    ) {}

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
        var docRef = this.database.collection("utente", ref => ref.where('email','==',value.email));
        docRef.get().toPromise().then((querySnapshot) => {
          querySnapshot.forEach( (doc) => {
            var idUtente = doc.data()['uid'];
            this.router.navigate(['home', idUtente]);
          });
        });
        this.errorMsg = "";
      }, error => {
        this.errorMsg = error.message;
        this.successMsg ="";
      })
    this.ionicAuthService.signinUser(value).catch((response) => {
      this.errore = "Email e/o password errati.";
    })

  }

  signinpage(){

    this.router.navigate(['signin']);

  }

}
