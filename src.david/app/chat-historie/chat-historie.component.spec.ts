import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistorieComponent } from './chat-historie.component';

describe('ChatHistorieComponent', () => {
  let component: ChatHistorieComponent;
  let fixture: ComponentFixture<ChatHistorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHistorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHistorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
