import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Esercizio } from 'src/app/modal/Esercizio';
import { EsercizioScheda } from 'src/app/modal/EsecizioScheda';

@Component({
  selector: 'app-aggiungiesercizi',
  templateUrl: './aggiungiesercizi.page.html',
  styleUrls: ['./aggiungiesercizi.page.scss'],
})
export class AggiungieserciziPage implements OnInit {

  idUtente: any;
  id: any;
  ExplusForm: FormGroup;
  public ExList: Observable<Esercizio[]>;
  public ExScheda: Observable<EsercizioScheda[]>;
  toast: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private database: AngularFirestore,
    public toastController: ToastController
    ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: "Esercizio aggiunto alla tua scheda.",
      duration: 2000
    });
    toast.present();
  }

  async openToastError(){
    const toast = await this.toastController.create({
      message: "Aggiungi almeno un esercizio prima di caricare la scheda.",
      duration: 2000
    });
    toast.present();
  }

  async openToastF(){
    const toast = await this.toastController.create({
      message: "Nuova scheda creata.",
      duration: 2000

    });
    toast.present();
  }

  ngOnInit() {
    this.ExplusForm = this.fb.group({
      serie: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ])),
      ripetizioni: new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1)
      ]))
    });

    this.ExList = this.database.collection<Esercizio>("esercizio").valueChanges();
  }

  cercaEsercizi($value){
    this.ExList = this.database.collection<Esercizio>("esercizio", ref => ref.orderBy('nomeLC').startAt($value.toLowerCase()).endAt($value.toLowerCase()+'\uf8ff')).valueChanges();
  }

  checkScheda(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0)
        this.openToastError();
      else{
        this.openToastF();
        this.home();
      }
    });
  }

  

  home(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0){
        this.database.collection("scheda").doc(this.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
    this.router.navigate(['/home', this.idUtente]);
  }

  cerca(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0){
        this.database.collection("scheda").doc(this.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
    this.router.navigate(['/cerca', this.idUtente]);
  }

  aggiungi(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0){
        this.database.collection("scheda").doc(this.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
    this.router.navigate(['/aggiungi', this.idUtente]);
  }

  preferiti(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0){
        this.database.collection("scheda").doc(this.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
    this.router.navigate(['/preferiti', this.idUtente]);
  }

  profilo(){
    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    this.ExScheda.subscribe(result => {
      if(result.length == 0){
        this.database.collection("scheda").doc(this.id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }
    });
    this.router.navigate(['/profilo', this.idUtente]);
  }
  
  aggiungiex(value, RifEx, nome, muscoli, tipologia){

    this.database.collection("scheda/"+ this.id +"/esercizi").add({ idex: RifEx ,serie:value.serie, ripetizioni: value.ripetizioni, nome:nome, muscoli:muscoli, tipologia: tipologia })
      .then((docRef) => {  

        var explusRef = this.database.collection("scheda/"+ this.id +"/esercizi").doc(docRef.id);

        return explusRef.update({
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

  }

}
