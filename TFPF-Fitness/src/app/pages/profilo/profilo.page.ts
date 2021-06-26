import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {

  idUtente: any;
  Username: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
  }

  ngOnInit() {
    var docRef = this.database.collection("utente", ref => ref.where('id','==',this.idUtente));
        docRef.get().toPromise().then((querySnapshot) => {
          querySnapshot.forEach( (doc) => {
            this.Username = doc.data()['username'];
          });
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
    this.router.navigate(['/preferiti']);
  }

  profilo(){
    this.router.navigate(['/profilo', this.idUtente]);
  }

  modificaprofilo(){
    this.router.navigate(['/informazioni', this.idUtente]);
  }
}
