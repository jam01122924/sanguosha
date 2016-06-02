import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CharacterService } from './character.service';

describe('Character Service', () => {
  beforeEachProviders(() => [CharacterService]);

  it('should ...',
      inject([CharacterService], (service: CharacterService) => {
    expect(service).toBeTruthy();
  }));
});
