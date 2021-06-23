import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaschedaCalisthenicsPage } from './categoriascheda-calisthenics.page';

describe('CategoriaschedaCalisthenicsPage', () => {
  let component: CategoriaschedaCalisthenicsPage;
  let fixture: ComponentFixture<CategoriaschedaCalisthenicsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaschedaCalisthenicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaschedaCalisthenicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
