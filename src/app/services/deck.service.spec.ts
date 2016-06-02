import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DeckService } from './deck.service';

describe('Deck Service', () => {
  beforeEachProviders(() => [DeckService]);

  it('should ...',
      inject([DeckService], (service: DeckService) => {
    expect(service).toBeTruthy();
  }));
});
