import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GameConfigService } from './game-config.service';

describe('GameConfig Service', () => {
  beforeEachProviders(() => [GameConfigService]);

  it('should ...',
      inject([GameConfigService], (service: GameConfigService) => {
    expect(service).toBeTruthy();
  }));
});
