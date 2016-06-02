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
import { PlayerCharacterComponent } from './player-character.component';

describe('Component: PlayerCharacter', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PlayerCharacterComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PlayerCharacterComponent],
      (component: PlayerCharacterComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PlayerCharacterComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PlayerCharacterComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-player-character></app-player-character>
  `,
  directives: [PlayerCharacterComponent]
})
class PlayerCharacterComponentTestController {
}

