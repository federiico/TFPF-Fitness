import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavComponentWithProps, NavController,Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userForm: FormGroup;
  pw: any;
  mail: any;

  constructor(
    private router: Router, 
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private nav: NavController,
    private database: AngularFirestore,
    private platform: Platform,
    public toastController: ToastController
    ) {}

    async openToastBadLogin(){
      const toast = await this.toastController.create({
        message: "Email e/o password errati.",
        duration: 2000
      });
      toast.present();
    }

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

  ionViewWillEnter(){
    this.pw = "";
    this.mail = "";
    this.ngOnInit();
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
      })
    this.ionicAuthService.signinUser(value).catch((response) => {
      this.openToastBadLogin();
    })
  }

  signinpage(){

    this.router.navigate(['signin']);

  }

}
