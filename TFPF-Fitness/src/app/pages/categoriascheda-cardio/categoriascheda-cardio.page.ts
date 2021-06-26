import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Schede } from 'src/app/modal/Schede';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoriascheda-cardio',
  templateUrl: './categoriascheda-cardio.page.html',
  styleUrls: ['./categoriascheda-cardio.page.scss'],
})
export class CategoriaschedaCardioPage implements OnInit {

  idUtente: any;
  public SchedeList: Observable<Schede[]>;

  constructor(
    private router: Router,
    private database: AngularFirestore,
    private route: ActivatedRoute
  ) { 
    this.idUtente = this.route.snapshot.paramMap.get('idUtente');
  }

  ngOnInit() {
    this.SchedeList = this.database.collection<Schede>("scheda", ref => ref.where('genere', '==', 'Cardio')).valueChanges();
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

  scheda(value){
    this.router.navigate(['/scheda', value, this.idUtente]);
  }

  aggpreferiti(value){
    var token = 0;

    console.log(value.uid);
    this.database.collection("utente/"+this.idUtente+"/preferiti", ref => ref.where('idScheda', "==", value.uid)).snapshotChanges().subscribe(res => {
    if (res.length <= 0 && token == 0)
    {
      this.database.collection("utente/"+this.idUtente+"/preferiti").add({ idScheda:value.uid, creatore: value.creatore, genere: value.genere, intensita: value.intensita, nome: value.nome })
      .then((docRef) => {  

        var SchedaRef = this.database.collection("utente/"+this.idUtente+"/preferiti").doc(docRef.id);

        return SchedaRef.update({
            uid: docRef.id
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        
        })
      .catch((error) => {    console.error("Error adding document: ", error);});

      token=1;
    }
    else if(res.length > 0 && token == 0)
    {
      var docRef = this.database.collection("utente/"+this.idUtente+"/preferiti", ref => ref.where('idScheda', "==", value.id));
      docRef.get().toPromise().then((querySnapshot) => {
        querySnapshot.forEach( (doc) => {
          this.database.collection("utente/"+this.idUtente+"/preferiti").doc(doc.data()["uid"]).delete().then(() => {
            console.log(doc.data());
            console.log("Document successfully deleted!");
          }).catch((error) => {
            console.error("Error removing document: ", error);
          });
        });
      });
      token=1;
    }
});
}

}
