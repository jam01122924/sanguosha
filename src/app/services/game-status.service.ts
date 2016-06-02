import { Injectable } from '@angular/core';
import { Player, Identity } from '../components/player/player';
import { GameConfigService, GameModes } from './game-config.service';

import { DeckService } from './deck.service';
import { CharacterService } from './character.service';
import { PlayerStatusService } from './player-status.service';
import { StateMachineService } from './state-machine.service';
import { CommonService } from './common.service';

export enum GameState {
	'选择模式'=0,					//select game mode
	'初始化游戏参数',		//set players number, identity, etc based on game mode
	'选将',
	'发初始牌',
	'游戏中',
	'游戏结束',
	'结算画面'
}

@Injectable()
export class GameStatusService {
	public gameState: GameState = GameState['选择模式'];
  constructor(private _gcs: GameConfigService, private _ds: DeckService, private _chs: CharacterService, private _cs: CommonService, private _pss: PlayerStatusService, private _sms: StateMachineService) { }

  initGame() {
		this._pss.players.length = this._gcs.lordNum +
			this._gcs.loyalNum +
			this._gcs.traitorNum +
			this._gcs.rebelNum;
		for (let i = 0; i < this._pss.players.length; i++) {
			this._pss.players[i] = new Player();
			this._pss.players[i].ownerId = this._pss.playersIDList[i];
			this._pss.players[i].isBot = this._pss.players[i].ownerId === 'cpu';
		}
		this.setIdentity();
		this.setPosition();
		this.sortPlayer();
		this._sms.inital();
		console.log(this._pss.players);

  }
  endGame() {
		this._pss.players.length = 0;
		this.gameState = GameState['选择模式'];
		this._pss.playersIDList.length = 0;
  }

  setIdentity() {
		let idArray = [];
		for (let i = 0; i < this._gcs.lordNum; i++){
			idArray.push(Identity['主']);
		}
		for (let i = 0; i < this._gcs.loyalNum; i++) {
			idArray.push(Identity['忠']);
		}
		for (let i = 0; i < this._gcs.traitorNum; i++) {
			idArray.push(Identity['内']);
		}
		for (let i = 0; i < this._gcs.rebelNum; i++) {
			idArray.push(Identity['反']);
		}
		this._cs.shuffle(idArray, 3);

		for (let i = 0; i < idArray.length; i++){
			this._pss.players[i].identity = idArray[i];
		}
  }

  setPosition() {
		let pos = [];
		for (let i = 0; i < this._pss.players.length; i++) {
			pos.push(i);
		}
		this._cs.shuffle(pos, 3);
		for (let i = 0; i < pos.length; i++) {
			this._pss.players[i].position = pos[i];
		}
		// Sort players by position
		this._pss.players.sort((a, b) => a.position - b.position);
		// always put human player at 1st slot. followed by the next position player
		// 1. find player position:
		let humans = this._pss.getHumanPlayer();
		// cut any player before human player, and concat them at the end of players.
		if (humans && humans.length === 1) {
			let temp = this._pss.players.splice(0, humans[0].position);
			this._pss.players = this._pss.players.concat(temp);
		} else {
			console.error('human player is 0 or more than 1');
		}
  }


	// Sort players by position
  sortPlayer() {
		switch (this._gcs.gameMode) {
			case GameModes["普通5人"]:
				this.sortPlayerNormal();
				break;
			case GameModes["普通8人"]:
				this.sortPlayerNormal();
				break;
			case GameModes["军争5人"]:
				this.sortPlayerNormal();
				break;
			case GameModes["军争8人"]:
				this.sortPlayerNormal();
				break;
			case GameModes["1v1"]:
				this.sortPlayerNormal();
				break;
			case GameModes["3v3"]:
				//TODO: Change player's position and sort, so that 3v3 can be played
				break;
			case GameModes["国战"]:
				break;
			default:
				break;
		}
  }

  sortPlayerNormal() {
		this._pss.players.sort((a, b) => a.position - b.position);
		// always put human player at 1st slot. followed by the next position player
		// 1. find player position:
		let humans = this._pss.getHumanPlayer();
		// cut any player before human player, and concat them at the end of players.
		if (humans && humans.length === 1) {
			let temp = this._pss.players.splice(0, humans[0].position);
			this._pss.players = this._pss.players.concat(temp);
		} else {
			console.error('human player is 0 or more than 1');
		}
  }

  SortPlayer3v3() {

  }
  // Set Lord Character if lord is not a human player
  setLordPlayer(){
		this._pss.players.map(p => {
			if (p.identity === Identity['主']) {
				if (p.isBot) {
					//TODO: Add function to pick lord for bot
					this.setCharacter(p);
				} else {
					this._chs.putLordOnTop();
				}
			}
		});
  }
  // Set Character for other bot players:
  setOtherPlayerCharacter() {
  	this._pss.pickBotCharacter(this._gcs.doubleCharacter?2:1)
  }
  setCharacter(p: Player) {
		p.characters.push(this._chs.drawCharacter());
		if (this._gcs.doubleCharacter) {
			p.characters.push(this._chs.drawCharacter());
		}
  }
  // spread out the init cards for every player
  initCardSpread() {
		for (let i = 0; i < this._pss.players.length; i++) {
			for (let j = 0; j < this._gcs.initCardNum; j++) {
				this._pss.players[i].cards.push(this._ds.drawCard());
			}
		}
		console.log(this._pss.players);
  }

}
