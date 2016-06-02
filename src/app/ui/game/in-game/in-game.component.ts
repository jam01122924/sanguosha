import { Component, OnInit } from '@angular/core';


// components:
import { PlayerCardsComponent } from '../../../components/player/player-cards/player-cards.component';
import { PlayerCharacterComponent } from '../../../components/player/player-character/player-character.component';
import { PlayerEquipmentComponent } from '../../../components/player/player-equipment/player-equipment.component';
import { BattleFieldComponent } from '../battle-field/battle-field.component';
//  type & class:
import { Player } from '../../../components/player/player';
// service:
import { DeckService } from '../../../services/deck.service';
import { CharacterService } from '../../../services/character.service';
import { GameConfigService } from '../../../services/game-config.service';
import { GameState, GameStatusService } from '../../../services/game-status.service';
import { PlayerStatusService } from '../../../services/player-status.service';
import { CommonService } from '../../../services/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-in-game',
  templateUrl: 'in-game.component.html',
  directives: [PlayerCardsComponent, PlayerCharacterComponent, PlayerEquipmentComponent, BattleFieldComponent],
  styleUrls: ['in-game.component.css']
})
export class InGameComponent implements OnInit {
	player: Player;
	constructor(
		private _ds: DeckService,
    private _gcs: GameConfigService,
    private _gss: GameStatusService,
    private _pss: PlayerStatusService,
    private _chs: CharacterService
  ) { }

  ngOnInit() {
    // Mock user selection for game mode
    this._gcs.doubleCharacter = false;
    // Mock Human player list:
    this._pss.initPlayer(this._gcs.lordNum + this._gcs.loyalNum + this._gcs.traitorNum + this._gcs.rebelNum);
    this._gss.initGame();
    this._gss.gameState = GameState['选将'];

    this._ds.readDeck()
      .subscribe(
      data => {
        this._ds.initDeck(data, this._gcs.useEx);
      },
      error => console.error(error)
      );
    this._chs.readDeck()
      .subscribe(
      data => {
        this._chs.initDeck(data);
      },
      error => console.error(error)
      );

    let humanPlayerList: Player[] = this._pss.players.filter(p => {
			return !p.isBot;
		});
		if(humanPlayerList&&humanPlayerList.length){
			this.player = humanPlayerList[0];
		}else{
			console.error('Can not get any human player');
		}
  }


}
