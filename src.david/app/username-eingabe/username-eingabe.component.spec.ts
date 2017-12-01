import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameEingabeComponent } from './username-eingabe.component';

describe('UsernameEingabeComponent', () => {
  let component: UsernameEingabeComponent;
  let fixture: ComponentFixture<UsernameEingabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameEingabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameEingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
