import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { PlayerOtherComponent } from '../../../components/player/player-other/player-other.component';
//service:
import { PlayerStatusService } from '../../../services/player-status.service';
import { PlayCardService } from '../../../services/play-card.service';
import { GameConfigService } from '../../../services/game-config.service';
import { StateMachineService } from '../../../services/state-machine.service';

@Component({
  moduleId: module.id,
  selector: 'app-battle-field',
  templateUrl: 'battle-field.component.html',
  styleUrls: ['battle-field.component.css'],
  directives: [CardComponent, PlayerOtherComponent]
})
export class BattleFieldComponent implements OnInit {
	players = [];
  constructor(private _pss: PlayerStatusService, private _pcs: PlayCardService, private _gcs: GameConfigService, private _sms: StateMachineService) { }

  ngOnInit() {
    // re-arrange player position:
    this.players.length = 0;
    //this.players = this._pss.players;
    switch (this._pss.players.length) {
      // fisrt slot would always be true as it's the human player
      case 2:
        this.players = [true, false, false, false, true, false, false, false];
        break;
      case 5:
        this.players = [true, true, false, true, false, true, false, true];
        break;
      case 6:
        this.players = [true, true, false, true, true, true, false, true];
        break;
      case 8:
        this.players = [true, true, true, true, true, true, true, true];
        break;
      default:
        this.players = [true, false, false, false, false, false, false, false];
        break;
    }
    this.arrangePlayer();
    console.log(this.players);
  }
  arrangePlayer() {
    let index = 0;
    for (let i = 0; i < 8; i++){
      if(this.players[i]){
        this.players[i] = this._pss.players[index];
        index++;
      }
    }
  }
  testPlayers() {
  	console.log(this.players);
  }
  testEquip() {
    this._pss.equip(this._pss.getHumanPlayer()[0].cards.filter(c => c.selected)[0], this._pss.getHumanPlayer()[0].position);
  }
  testEquipBot() {
    this._pss.equip(this._pss.getHumanPlayer()[0].cards.filter(c => c.selected)[0], 1);
    console.log(this._pss.players[1]);
  }
  testLoop() {
    this._sms.start();
  }
  testLoopStop() {
    this._sms.stop();
  }
}
