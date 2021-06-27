import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Esercizio } from 'src/app/modal/Esercizio';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.page.html',
  styleUrls: ['./esercizio.page.scss'],
})
export class EsercizioPage implements OnInit {

  id: any;
  id2: any;
  idUtente: any;
  private Esercizio: Observable<Esercizio[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore,
    public toastController: ToastController
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.id2 = this.route.snapshot.paramMap.get('id2'); 
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    }

  ngOnInit() {
    
    this.Esercizio = this.database.collection<Esercizio>("esercizio", ref => ref.where('id', '==', this.id)).valueChanges();
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

  scheda(){
    this.router.navigate(['/scheda', this.id2, this.idUtente]);
  }

  video(url){
    window.open(url, '_system');
  }
}
