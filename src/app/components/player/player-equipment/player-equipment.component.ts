import { Component, OnInit } from '@angular/core';
import { Card, CardContent } from '../../card/card';

@Component({
  moduleId: module.id,
  selector: 'app-player-equipment',
	inputs: ['weapon', 'armor', 'horsePlus', 'horseMinus'],
  templateUrl: 'player-equipment.component.html',
  styleUrls: ['player-equipment.component.css']
})
export class PlayerEquipmentComponent implements OnInit {
	weapon: Card;
	armor: Card;
	horsePlus: Card;
	horseMinus: Card;

  constructor() {}

  ngOnInit() {
  }

}
