import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedeProfiloUtentePage } from './schede-profilo-utente.page';

describe('SchedeProfiloUtentePage', () => {
  let component: SchedeProfiloUtentePage;
  let fixture: ComponentFixture<SchedeProfiloUtentePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedeProfiloUtentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedeProfiloUtentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
