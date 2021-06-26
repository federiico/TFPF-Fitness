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
  idUtente: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore
    ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
   }

  ngOnInit() {
    this.Scheda = this.database.collection<Schede>("scheda", ref => ref.where('uid', '==', this.id)).valueChanges();



    this.ExScheda = this.database.collection<EsercizioScheda>("scheda/"+this.id+"/esercizi").valueChanges();
    

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

  esercizio(id){
    var id2 = this.id;
    this.router.navigate(['/esercizio', id, id2, this.idUtente]);
  }

  paginaprima($value){

    if($value == "Calisthenics")
      this.router.navigate(['/categoriascheda-calisthenics', this.idUtente]);
    if($value == "Yoga")
      this.router.navigate(['/categoriascheda-yoga', this.idUtente]);
    if($value == "Powerlifting")
      this.router.navigate(['/categoriascheda-power-lifting', this.idUtente]);
    if($value == "Cardio")
      this.router.navigate(['/categoriascheda-cardio', this.idUtente]);
    if($value == "Crossfit")
      this.router.navigate(['/categoriascheda-crossfit', this.idUtente]);
    if($value == "Pesistica")
      this.router.navigate(['/categoriascheda-pesistica', this.idUtente]);
  }

 

}
