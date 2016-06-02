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
import { CharacterSelectionComponent } from './character-selection.component';

describe('Component: CharacterSelection', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CharacterSelectionComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CharacterSelectionComponent],
      (component: CharacterSelectionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CharacterSelectionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(CharacterSelectionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-character-selection></app-character-selection>
  `,
  directives: [CharacterSelectionComponent]
})
class CharacterSelectionComponentTestController {
}

