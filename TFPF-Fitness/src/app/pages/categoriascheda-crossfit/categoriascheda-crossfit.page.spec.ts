import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaschedaCrossfitPage } from './categoriascheda-crossfit.page';

describe('CategoriaschedaCrossfitPage', () => {
  let component: CategoriaschedaCrossfitPage;
  let fixture: ComponentFixture<CategoriaschedaCrossfitPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaschedaCrossfitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaschedaCrossfitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
