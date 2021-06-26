import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preferiticat',
  templateUrl: './preferiticat.page.html',
  styleUrls: ['./preferiticat.page.scss'],
})
export class PreferiticatPage implements OnInit {

  idUtente: any;
  cat: any;
  public SchedePref: Observable<Schede[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    this.cat = this.route.snapshot.paramMap.get('cat');
  }

  ngOnInit() {
    this.SchedePref = this.database.collection<Schede>("utente/"+this.idUtente+"/preferiti", ref => ref.where('genere', '==', this.cat)).valueChanges();
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

  scheda(value){
    this.router.navigate(['/scheda', value, this.idUtente]);
  }

  aggpreferiti(value){

    
      var docRef = this.database.collection("utente/"+this.idUtente+"/preferiti", ref => ref.where('uid', "==", value.uid));
      docRef.get().toPromise().then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
          this.database.collection("utente/"+this.idUtente+"/preferiti").doc(doc.data()["uid"]).delete().then(() => {
            console.log(doc.data());
            console.log("Document successfully deleted!");
          }).catch((error) => {
            console.error("Error removing document: ", error);
          });
        });
      });

    }



}
