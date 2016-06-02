import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PlayerStatusService } from './player-status.service';

describe('PlayerStatus Service', () => {
  beforeEachProviders(() => [PlayerStatusService]);

  it('should ...',
      inject([PlayerStatusService], (service: PlayerStatusService) => {
    expect(service).toBeTruthy();
  }));
});
