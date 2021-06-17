import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.page.html',
  styleUrls: ['./aggiungi.page.scss'],
})

export class AggiungiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  esercizipage(){
    this.router.navigate(['/aggiungiesercizi']);
  }

}
