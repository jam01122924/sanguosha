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
import { GameModeSelectionComponent } from './game-mode-selection.component';

describe('Component: GameModeSelection', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [GameModeSelectionComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([GameModeSelectionComponent],
      (component: GameModeSelectionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(GameModeSelectionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(GameModeSelectionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-game-mode-selection></app-game-mode-selection>
  `,
  directives: [GameModeSelectionComponent]
})
class GameModeSelectionComponentTestController {
}

