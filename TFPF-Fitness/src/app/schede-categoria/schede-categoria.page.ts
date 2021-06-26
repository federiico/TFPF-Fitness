import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-schede-categoria',
  templateUrl: './schede-categoria.page.html',
  styleUrls: ['./schede-categoria.page.scss'],
})
export class SchedeCategoriaPage implements OnInit {

  idUtente: any;
  cat: any;
  public SchedeProfilo: Observable<Schede[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    this.cat = this.route.snapshot.paramMap.get('cat');
  }

  ngOnInit() {
    this.SchedeProfilo = this.database.collection<Schede>("scheda", ref => ref.where('genere','==',this.cat)).valueChanges();
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
