import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StateMachineService } from './state-machine.service';

describe('StateMachine Service', () => {
  beforeEachProviders(() => [StateMachineService]);

  it('should ...',
      inject([StateMachineService], (service: StateMachineService) => {
    expect(service).toBeTruthy();
  }));
});
