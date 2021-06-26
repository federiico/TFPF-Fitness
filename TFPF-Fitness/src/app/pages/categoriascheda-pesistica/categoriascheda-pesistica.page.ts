import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoriascheda-pesistica',
  templateUrl: './categoriascheda-pesistica.page.html',
  styleUrls: ['./categoriascheda-pesistica.page.scss'],
})
export class CategoriaschedaPesisticaPage implements OnInit {

  idUtente: any;
  public SchedeList: Observable<Schede[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute) {
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
     }

  ngOnInit() {
    this.SchedeList = this.database.collection<Schede>("scheda", ref => ref.where('genere', '==', 'Pesistica')).valueChanges();
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

  scheda(value){
    this.router.navigate(['/scheda', value]);
  }

}
