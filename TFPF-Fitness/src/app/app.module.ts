import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/*import { SQLitePorter, SQLitePorterOriginal } from '@ionic-native/sqlite-porter';
import { SQLite, SQLiteOriginal } from '@ionic-native/sqlite';

import { HttpClientModule } from '@angular/common/http';*/


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    //HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    /*SQLitePorterOriginal,
    SQLiteOriginal*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
