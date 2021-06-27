import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/modal/Utente';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.page.html',
  styleUrls: ['./cerca.page.scss'],
})
export class CercaPage implements OnInit {

  idUtente: any;
  public listaUtenti: Observable<Utente[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute,
  ) {
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
   }

  ngOnInit() {
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

  profiloutente(id){
    this.router.navigate(['/profiloutente', id, this.idUtente]);
  }

  cercaUtenti($value){
    this.listaUtenti = this.database.collection<Utente>("utente", ref => ref.orderBy('usernameLC').startAt($value.toLowerCase()).endAt($value.toLowerCase()+'\uf8ff')).valueChanges();
  }

}
