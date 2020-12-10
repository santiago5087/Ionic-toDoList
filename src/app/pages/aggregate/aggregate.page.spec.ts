import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggregatePage } from './aggregate.page';

describe('AggregatePage', () => {
  let component: AggregatePage;
  let fixture: ComponentFixture<AggregatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggregatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggregatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
