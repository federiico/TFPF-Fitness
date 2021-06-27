import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-schede-profilo',
  templateUrl: './schede-profilo.page.html',
  styleUrls: ['./schede-profilo.page.scss'],
})
export class SchedeProfiloPage implements OnInit {

  idUtente: any;
  cat: any;
  public SchedeProfilo: Observable<Schede[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute,
    public toastController: ToastController
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    this.cat = this.route.snapshot.paramMap.get('cat');
  }

  async openToast(){
    const toast = await this.toastController.create({
      message: "Non hai creato schede di questa categoria.",
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    var docRef = this.database.collection("utente", ref => ref.where('uid','==',this.idUtente));
    docRef.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach( (doc) => {
        this.SchedeProfilo = this.database.collection<Schede>("scheda", ref => ref.where('creatore', '==', doc.data()['username']).where('genere','==',this.cat)).valueChanges();
        this.SchedeProfilo.subscribe(result => {
          if(result.length == 0)
            this.openToast();
        });
      });
    });
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

  scheda(value){
    this.router.navigate(['/scheda', value, this.idUtente]);
  }

}
