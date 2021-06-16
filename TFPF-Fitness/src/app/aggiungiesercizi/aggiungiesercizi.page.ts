import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungiesercizi',
  templateUrl: './aggiungiesercizi.page.html',
  styleUrls: ['./aggiungiesercizi.page.scss'],
})
export class AggiungieserciziPage implements OnInit {

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
}
