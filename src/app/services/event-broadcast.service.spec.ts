import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EventBroadcastService } from './event-broadcast.service';

describe('EventBroadcast Service', () => {
  beforeEachProviders(() => [EventBroadcastService]);

  it('should ...',
      inject([EventBroadcastService], (service: EventBroadcastService) => {
    expect(service).toBeTruthy();
  }));
});
