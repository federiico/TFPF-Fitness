import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaschedaPowerLiftingPage } from './categoriascheda-power-lifting.page';

describe('CategoriaschedaPowerLiftingPage', () => {
  let component: CategoriaschedaPowerLiftingPage;
  let fixture: ComponentFixture<CategoriaschedaPowerLiftingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaschedaPowerLiftingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaschedaPowerLiftingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
