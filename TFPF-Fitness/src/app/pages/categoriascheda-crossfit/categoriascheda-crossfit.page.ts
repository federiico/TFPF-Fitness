import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoriascheda-crossfit',
  templateUrl: './categoriascheda-crossfit.page.html',
  styleUrls: ['./categoriascheda-crossfit.page.scss'],
})
export class CategoriaschedaCrossfitPage implements OnInit {

  public SchedeList: Observable<Schede[]>;

  constructor(private router: Router,private database: AngularFirestore) { }

  ngOnInit() {
    this.SchedeList = this.database.collection<Schede>("scheda", ref => ref.where('genere', '==', 'Crossfit')).valueChanges();
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

  scheda(value){
    console.log(value);
    this.router.navigate(['/scheda', value]);
  }

}
