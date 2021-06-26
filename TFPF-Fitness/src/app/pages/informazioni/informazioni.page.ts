import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.page.html',
  styleUrls: ['./informazioni.page.scss'],
})
export class InformazioniPage implements OnInit {

  userForm: FormGroup;
  idUtente: any;
  Username: any;
  Nome: any;
  Cognome: any;
  Email: any;
  Password: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private database: AngularFirestore,
    private fb: FormBuilder
    ) { 
      this.idUtente = this.route.snapshot.paramMap.get('idUtente');
    }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      nome: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      cognome: new FormControl('', Validators.compose([
        Validators.minLength(2),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

    var docRef = this.database.collection("utente", ref => ref.where('id','==',this.idUtente));
    docRef.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach( (doc) => {
        this.Username = doc.data()['username'];
        this.Nome = doc.data()['nome'];
        this.Cognome = doc.data()['cognome'];
        this.Email = doc.data()['email'];
        this.Password = doc.data()['password'];

      });
    });
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

  modificaprofilo(value){
    var utenteRef = this.database.collection("utente").doc(this.idUtente);

   
    return utenteRef.update({
        nome: value.nome,
        cognome: value.cognome,
        username: value.username,
        email: value.email,
        password: value.password
    })
    .then(() => {
        console.log("Document successfully updated!");
        this.router.navigate(['/profilo', this.idUtente]);
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

  }

}
