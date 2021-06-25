import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicAuthService } from '../../services/ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.page.html',
  styleUrls: ['./aggiungi.page.scss'],
})

export class AggiungiPage implements OnInit {

  ExForm: FormGroup;


  error_msg = {
    'nome': [
      { 
        type: 'required', 
        message: 'Inserisci un nome.' 
      }
    ],
    'intensita': [
      { 
        type: 'required', 
        message: 'Inserisci un intensità.' 
      }
    ],
    'genere': [
      { 
        type: 'required', 
        message: 'Inserisci un genere.' 
      }
    ]
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private database: AngularFirestore
    ) { }

  ngOnInit() {

    this.ExForm = new FormGroup({
      nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      intensita: new FormControl('', Validators.compose([
        Validators.required
      ])),
      genere: new FormControl('', Validators.compose([
        Validators.required
      ]))
   });

  }

  home(){
    this.router.navigate(['/home']);
  }

  cerca(){
    this.router.navigate(['/cerca']);
  }

  aggiungi(){
    this.router.navigate(['/aggiungi']);
  }

  preferiti(){
    this.router.navigate(['/preferiti']);
  }

  profilo(){
    this.router.navigate(['/profilo']);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  eserizipage(value){

    this.database.collection("scheda").add({   nome: value.nome, genere: value.genere, intensita: value.intensita, creatore: "",})
      .then((docRef) => {  

        var ExRef = this.database.collection("scheda").doc(docRef.id);
        this.router.navigate(['/aggiungiesercizi', docRef.id]);

        return ExRef.update({
            id: docRef.id
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

    console.log(value.nome);
    console.log(value.genere);
    console.log(value.intensita);

    

  }

}
