import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EsercizioScheda } from 'src/app/modal/EsecizioScheda';
import { Schede } from 'src/app/modal/Schede';
import { Esercizio } from 'src/app/modal/Esercizio';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.page.html',
  styleUrls: ['./scheda.page.scss'],
})
export class SchedaPage implements OnInit {

  id: any;
  Scheda: Observable<Schede[]>;
  ExScheda: Observable<EsercizioScheda[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore
    ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.Scheda = this.database.collection<Schede>("scheda", ref => ref.where('id', '==', this.id)).valueChanges();



    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    

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

  esercizio(id){
    var id2 = this.id;
    this.router.navigate(['/esercizio', id, id2]);
  }

}
