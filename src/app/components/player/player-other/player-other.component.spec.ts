import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PlayerOtherComponent } from './player-other.component';

describe('Component: PlayerOther', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PlayerOtherComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PlayerOtherComponent],
      (component: PlayerOtherComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PlayerOtherComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PlayerOtherComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-player-other></app-player-other>
  `,
  directives: [PlayerOtherComponent]
})
class PlayerOtherComponentTestController {
}

