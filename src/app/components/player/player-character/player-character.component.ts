import { Component, OnInit } from '@angular/core';
import { Player, Identity } from '../player';

@Component({
  moduleId: module.id,
  selector: 'app-player-character',
  inputs: ['player'],
  templateUrl: 'player-character.component.html',
  styleUrls: ['player-character.component.css']
})
export class PlayerCharacterComponent implements OnInit {
	player: Player = null;
	identityEnum = Identity;
	
  constructor() {}

  ngOnInit() {
		console.log(this.player);
  }

}
