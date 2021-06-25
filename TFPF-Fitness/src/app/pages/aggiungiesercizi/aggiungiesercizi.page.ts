import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Esercizio } from 'src/app/modal/Esercizio';

@Component({
  selector: 'app-aggiungiesercizi',
  templateUrl: './aggiungiesercizi.page.html',
  styleUrls: ['./aggiungiesercizi.page.scss'],
})
export class AggiungieserciziPage implements OnInit {

  id: any;
  ExplusForm: FormGroup;
  public ExList: Observable<Esercizio[]>;
  toast: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private database: AngularFirestore,
    public toastController: ToastController
    ) { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: "Esercizio aggiunto alla tua scheda.",
      duration: 2000

    });
    toast.present();
  }

  async openToastF(){
    const toast = await this.toastController.create({
      message: "Scheda Completata!",
      duration: 2000

    });
    toast.present();
  }

  ngOnInit() {
    this.ExplusForm = this.fb.group({
      serie: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ripetizioni: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.ExList = this.database.collection<Esercizio>("esercizio").valueChanges();
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
