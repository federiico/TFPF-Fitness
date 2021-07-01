import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userForm: FormGroup;

  constructor( 
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private database: AngularFirestore,
    public toastController: ToastController
    ) { }

    async openToastBenvenuto(){
      const toast = await this.toastController.create({
        message: "Benvenuto in TFPF-Fitness.",
        duration: 2500
      });
      toast.present();
    }

    ngOnInit() {
      this.userForm = this.fb.group({
        nome: new FormControl('', Validators.compose([
          Validators.required
        ])),
        cognome: new FormControl('', Validators.compose([
          Validators.required
        ])),
        username: new FormControl('', Validators.compose([
          Validators.required
        ])),
        email: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])),
      });
    }

    ionViewWillEnter(){
      this.ngOnInit();
    }
  
  
  signUp(value){
    this.ionicAuthService.createUser(value)
    .then((response) => {

      this.database.collection("utente").add({   nome: value.nome,    cognome: value.cognome, email: value.email, username: value.username, usernameLC: value.username.toLowerCase(), password:value.password})
      .then((docRef) => {  

        var UtenteRef = this.database.collection("utente").doc(docRef.id);

        return UtenteRef.update({
            uid: docRef.id
        })
        .then(() => {
            this.openToastBenvenuto();
            console.log("Document successfully updated!");
            this.router.navigate(['/home', docRef.id]);
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        })
      .catch((error) => {    console.error("Error adding document: ", error);});

    }, error => {
    });

    console.log(this.fb);

  }

  logme(){
    this.router.navigate(['/login']);
  }
}
