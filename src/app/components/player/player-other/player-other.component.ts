import { Component, OnInit } from '@angular/core';
import { Player, Identity } from '../player';


@Component({
  moduleId: module.id,
  selector: 'app-player-other',
  inputs: ['player'],
  templateUrl: 'player-other.component.html',
  styleUrls: ['player-other.component.css']
})
export class PlayerOtherComponent implements OnInit {
	player: Player = null;
	identityEnum = Identity;
  constructor() {}

  ngOnInit() {
  }

}
