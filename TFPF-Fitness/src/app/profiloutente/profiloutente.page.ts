import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {

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
