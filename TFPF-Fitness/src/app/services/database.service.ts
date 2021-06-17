import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
 
export interface Utente {
  id: number,
  nome: string,
  cognome: string,
  email: string,
  username: string,
  password:string
}
 
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  utenti = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'tfpf-fitness',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/database/tfpf-fitness.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadUtenti();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
 
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getUtenti(): Observable<Utente[]> {
    return this.utenti.asObservable();
  }
  
  loadUtenti() {
    return this.database.executeSql('SELECT * FROM utente', []).then(data => {
      let utenti: Utente[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          utenti.push({ 
            id: data.rows.item(i).id,
            nome: data.rows.item(i).nome, 
            cognome: data.rows.item(i).nome, 
            email: data.rows.item(i).email,
            username: data.rows.item(i).username,
            password: data.rows.item(i).password
           });
        }
      }
      this.utenti.next(utenti);
    });
  }

  addUtente(nome, cognome, email, username, password) {
    let data = [nome, cognome, email, username , password];
    return this.database.executeSql('INSERT INTO utente (nome, cognome, email, username) VALUES (?,?,?,?,?)', data).then( data => {
      this.loadUtenti();
    });
  }

  getUtente(id){
    return this.database.executeSql('SELECT * FROM utente WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).id,
        nome: data.rows.item(0).nome, 
        cognome: data.rows.item(0).nome, 
        email: data.rows.item(0).email,
        username: data.rows.item(0).username,
        password: data.rows.item(0).password
      }
    });
  }

  updateUtente(Utente: Utente) {
    let data = [Utente.nome, Utente.cognome , Utente.email, Utente.password, Utente.username];
    return this.database.executeSql(`UPDATE Utenteeloper SET name = ?, skills = ?, img = ? WHERE id = ${Utente.id}`, data).then(data => {
      this.loadUtenti();
    })
  }

  //Nuova scheda, ricerca, login, caccia scheda, aggiungi esercizio a una scheda, preferiti, schede di un utente,
  
}
