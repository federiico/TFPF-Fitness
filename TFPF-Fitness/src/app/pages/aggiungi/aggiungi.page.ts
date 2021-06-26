import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
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

  idUtente: any;


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
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private database: AngularFirestore
    ) {
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
     }

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
    this.router.navigate(['/home', this.idUtente]);
  }

  cerca(){
    this.router.navigate(['/cerca']);
  }

  aggiungi(){
    this.router.navigate(['/aggiungi', this.idUtente]);
  }

  preferiti(){
    this.router.navigate(['/preferiti', this.idUtente]);
  }

  profilo(){
    this.router.navigate(['/profilo', this.idUtente]);
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  esercizipage(value){
    var docRef = this.database.collection("utente", ref => ref.where('uid','==',this.idUtente));
        docRef.get().toPromise().then((querySnapshot) => {
          querySnapshot.forEach( (doc) => {
            this.database.collection("scheda").add({   nome: value.nome, genere: value.genere, intensita: value.intensita, creatore: doc.data()['username'],})
            .then((docRef) => {  

              var ExRef = this.database.collection("scheda").doc(docRef.id);
              this.router.navigate(['/aggiungiesercizi', docRef.id, this.idUtente]);

              return ExRef.update({
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

          });
        });
    console.log(value.nome);
    console.log(value.genere);
    console.log(value.intensita);

    

  }

}
