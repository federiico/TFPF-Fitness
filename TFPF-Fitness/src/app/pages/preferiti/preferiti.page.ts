import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.page.html',
  styleUrls: ['./preferiti.page.scss'],
})
export class PreferitiPage implements OnInit {

  idUtente: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore
    
    ) {
    
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
   }

  ngOnInit() {
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

  paginascheda($value){
    if($value == 1)
      this.router.navigate(['/preferiticat', this.idUtente, "Calisthenics"]);
    if($value == 2)
      this.router.navigate(['/preferiticat', this.idUtente, "Yoga"]);
    if($value == 3)
      this.router.navigate(['/preferiticat', this.idUtente, "Powerlifting"]);
    if($value == 4)
      this.router.navigate(['/preferiticat', this.idUtente, "Cardio"]);
    if($value == 5)
      this.router.navigate(['/preferiticat', this.idUtente, "Crossfit"]);
    if($value == 6)
      this.router.navigate(['/preferiticat', this.idUtente, "Pesistica"]);
    }

}
