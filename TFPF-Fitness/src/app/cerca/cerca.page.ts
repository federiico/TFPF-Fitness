import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.page.html',
  styleUrls: ['./cerca.page.scss'],
})
export class CercaPage implements OnInit {

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
    this.router.navigate(['/aggiungi_scheda']);
  }

  preferiti(){
    this.router.navigate(['/preferiti']);
  }

  profilo(){
    this.router.navigate(['/profilo']);
  }

}
