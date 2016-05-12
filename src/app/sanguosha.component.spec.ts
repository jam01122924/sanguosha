import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SanguoshaAppComponent } from '../app/sanguosha.component';

beforeEachProviders(() => [SanguoshaAppComponent]);

describe('App: Sanguosha', () => {
  it('should create the app',
      inject([SanguoshaAppComponent], (app: SanguoshaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sanguosha works!\'',
      inject([SanguoshaAppComponent], (app: SanguoshaAppComponent) => {
    expect(app.title).toEqual('sanguosha works!');
  }));
});
