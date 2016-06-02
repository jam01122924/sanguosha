import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GameStatusService } from './game-status.service';

describe('GameStatus Service', () => {
  beforeEachProviders(() => [GameStatusService]);

  it('should ...',
      inject([GameStatusService], (service: GameStatusService) => {
    expect(service).toBeTruthy();
  }));
});
