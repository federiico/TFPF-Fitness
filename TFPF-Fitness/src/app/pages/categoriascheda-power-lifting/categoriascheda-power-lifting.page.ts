import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoriascheda-power-lifting',
  templateUrl: './categoriascheda-power-lifting.page.html',
  styleUrls: ['./categoriascheda-power-lifting.page.scss'],
})
export class CategoriaschedaPowerLiftingPage implements OnInit {

  public SchedeList: Observable<Schede[]>;

  constructor(private router: Router,private database: AngularFirestore) { }

  ngOnInit() {
    this.SchedeList = this.database.collection<Schede>(`SchedePowerLifting`).valueChanges();
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

  scheda(){
    this.router.navigate(['/scheda']);
  }

}
