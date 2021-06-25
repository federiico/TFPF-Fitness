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
    this.router.navigate(['/cerca']);
  }

  aggiungi(){
    this.router.navigate(['/aggiungi']);
  }

  preferiti(){
    this.router.navigate(['/preferiti']);
  }

  profilo(){
    this.router.navigate(['/profilo', this.idUtente]);
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
