import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  idUtente: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
  }

  ngOnInit(){
    
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

  paginascheda($value){
    if($value == 1)
    this.router.navigate(['/schede-categoria', this.idUtente, "Calisthenics"]);
  if($value == 2)
    this.router.navigate(['/schede-categoria', this.idUtente, "Yoga"]);
  if($value == 3)
    this.router.navigate(['/schede-categoria', this.idUtente, "Powerlifting"]);
  if($value == 4)
    this.router.navigate(['/schede-categoria', this.idUtente, "Cardio"]);
  if($value == 5)
    this.router.navigate(['/schede-categoria', this.idUtente, "Crossfit"]);
  if($value == 6)
    this.router.navigate(['/schede-categoria', this.idUtente, "Pesistica"]);
    }
}
