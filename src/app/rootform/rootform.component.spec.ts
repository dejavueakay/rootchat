import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootformComponent } from './rootform.component';

describe('RootformComponent', () => {
  let component: RootformComponent;
  let fixture: ComponentFixture<RootformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
