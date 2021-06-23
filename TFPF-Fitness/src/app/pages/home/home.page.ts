import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOnInit(){
    
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

  paginascheda($value){
    if($value == 1)
      this.router.navigate(['/categoriascheda-calisthenics']);
    if($value == 2)
      this.router.navigate(['/categoriascheda-yoga']);
    if($value == 3)
      this.router.navigate(['/categoriascheda-power-lifting']);
    if($value == 4)
      this.router.navigate(['/categoriascheda-cardio']);
    if($value == 5)
      this.router.navigate(['/categoriascheda-crossfit']);
    if($value == 6)
      this.router.navigate(['/categoriascheda-pesistica']);
    }
}
