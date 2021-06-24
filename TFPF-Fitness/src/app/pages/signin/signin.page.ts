import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Inserisci un email.' 
      },
      { 
        type: 'pattern', 
        message: 'Email non valida.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Password necessaria.' 
      },
      { 
        type: 'minlength', 
        message: 'Password deve essere di almeno 6 caratteri' 
      }
    ]
  };

  constructor( 
    private router: Router,
    private ionicAuthService: IonicAuthService,
    private fb: FormBuilder,
    private database: AngularFirestore
    ) { }

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
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required
        ])),
      });
    }
  
  
  signUp(value){
    this.ionicAuthService.createUser(value)
    .then((response) => {

      this.database.collection("Utenti").add({   nome: value.nome,    cognome: value.cognome, email: value.email, username: value.username, password:value.password})
      .then((docRef) => {  

        var UtenteRef = this.database.collection("Utenti").doc(docRef.id);

        return UtenteRef.update({
            uid: docRef.id
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        })
      .catch((error) => {    console.error("Error adding document: ", error);});


      this.errorMsg = "Nope";
      this.successMsg = "Nuovo Utente creato.";
      this.router.navigate(['/home']);
    }, error => {
      this.errorMsg = error.message;
      this.successMsg = "Nope";
    });

    console.log(this.fb);

  }

  logme(){
    this.router.navigate(['/login']);
  }
}
