import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiloutente',
  templateUrl: './profiloutente.page.html',
  styleUrls: ['./profiloutente.page.scss'],
})
export class ProfiloutentePage implements OnInit {

  idUtente: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
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
    this.router.navigate(['/preferiti', this.idUtente]);
  }

  profilo(){
    this.router.navigate(['/profilo', this.idUtente]);
  }

}
