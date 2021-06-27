import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {

  idUtente: any;
  Username: any;
  Nome: any;
  Cognome: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    var docRef = this.database.collection("utente", ref => ref.where('uid','==',this.id));
        docRef.get().toPromise().then((querySnapshot) => {
          querySnapshot.forEach( (doc) => {
            this.Username = doc.data()['username'];
            this.Nome = doc.data()['nome'];
            this.Cognome = doc.data()['cognome'];
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

  modificaprofilo(){
    this.router.navigate(['/informazioni', this.idUtente]);
  }

  paginascheda($value){
    if($value == 1)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Calisthenics"]);
    if($value == 2)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Yoga"]);
    if($value == 3)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Powerlifting"]);
    if($value == 4)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Cardio"]);
    if($value == 5)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Crossfit"]);
    if($value == 6)
      this.router.navigate(['/schede-profilo-utente', this.id, this.idUtente, "Pesistica"]);
    }

}
