import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.page.html',
  styleUrls: ['./informazioni.page.scss'],
})
export class InformazioniPage implements OnInit {

  userForm: FormGroup;
  idUtente: any;
  Username: any;
  Nome: any;
  Cognome: any;
  Email: any;
  Password: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore,
    private fb: FormBuilder,
    public toastController: ToastController
    ) { 
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      cognome: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

    var docRef = this.database.collection("utente", ref => ref.where('uid','==',this.idUtente));
    docRef.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach( (doc) => {
        this.Username = doc.data()['username'];
        this.Nome = doc.data()['nome'];
        this.Cognome = doc.data()['cognome'];
        this.Email = doc.data()['email'];
        this.Password = doc.data()['password'];

      });
    });
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: "Profilo aggiornato.",
      duration: 2000
    });
    toast.present();
  }

  home(){
    this.router.navigate(['/home', this.idUtente]);
  }

  cerca(){
    this.router.navigate(['/cerca', this.idUtente]);
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

  modificaprofilo(value){


    var utenteRef = this.database.collection("utente").doc(this.idUtente);
    utenteRef.get().toPromise().then((doc) => {
      if (doc.exists) {
        this.database.collection("scheda", ref => ref.where('creatore','==',doc.data()['username']))
        .get().toPromise()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc2) => {
                // doc.data() is never undefined for query doc snapshots
                var schedaRef = this.database.collection("scheda").doc(doc2.data()['uid']);
                schedaRef.update({
                  creatore: value.username
                })
                .then( () => {
                  console.log("Scheda aggiornata");
                })
            });
            var utenteRef2 = this.database.collection("utente").doc(this.idUtente);
            utenteRef2.update({
              nome: value.nome,
              cognome: value.cognome,
              username: value.username,
              email: value.email,
              password: value.password
          })
          .then(() => {
              console.log("Tutti i dati sono aggiornati");
              this.openToast();
              this.router.navigate(['/profilo', this.idUtente]);
          })
          .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
          });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch((error) => {
          console.log("Error getting document:", error);
    });
  }

}
