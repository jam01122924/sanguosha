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
import { PlayerEquipmentComponent } from './player-equipment.component';

describe('Component: PlayerEquipment', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [PlayerEquipmentComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PlayerEquipmentComponent],
      (component: PlayerEquipmentComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PlayerEquipmentComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PlayerEquipmentComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-player-equipment></app-player-equipment>
  `,
  directives: [PlayerEquipmentComponent]
})
class PlayerEquipmentComponentTestController {
}

