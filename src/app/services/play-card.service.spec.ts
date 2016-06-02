import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PlayCardService } from './play-card.service';

describe('PlayCard Service', () => {
  beforeEachProviders(() => [PlayCardService]);

  it('should ...',
      inject([PlayCardService], (service: PlayCardService) => {
    expect(service).toBeTruthy();
  }));
});
