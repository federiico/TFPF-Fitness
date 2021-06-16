import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggiungieserciziPage } from './aggiungiesercizi.page';

describe('AggiungieserciziPage', () => {
  let component: AggiungieserciziPage;
  let fixture: ComponentFixture<AggiungieserciziPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungieserciziPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungieserciziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
