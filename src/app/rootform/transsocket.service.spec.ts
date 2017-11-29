import { TestBed, inject } from '@angular/core/testing';

import { TranssocketService } from './transsocket.service';

describe('TranssocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranssocketService]
    });
  });

  it('should be created', inject([TranssocketService], (service: TranssocketService) => {
    expect(service).toBeTruthy();
  }));
});
