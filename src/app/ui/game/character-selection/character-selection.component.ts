import { Component, OnInit } from '@angular/core';
import { GameConfigService } from '../../../services/game-config.service';
import { GameState, GameStatusService } from '../../../services/game-status.service';
import { PlayerStatusService } from '../../../services/player-status.service';
import { StateMachineService } from '../../../services/state-machine.service';
import { HeroComponent } from '../../../components/player/hero/hero.component';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../components/player/character';

type CharacterSelected = {
  character: Character;
  isSelected: boolean;
};

@Component({
  moduleId: module.id,
  selector: 'app-character-selection',
  templateUrl: 'character-selection.component.html',
  styleUrls: ['character-selection.component.css'],
  directives: [HeroComponent]
})
export class CharacterSelectionComponent implements OnInit {
  characters: CharacterSelected[] = [];
  selected: CharacterSelected[] = [];
  characterNum: number;
  start: boolean;
  constructor(private _gss: GameStatusService, private _gcs: GameConfigService, private _chs: CharacterService, private _pss: PlayerStatusService, private _sms: StateMachineService) { }

  ngOnInit() {
    console.log(this._chs.charDeckReady);
    this._chs.charDeckReady.subscribe(ready => {
      if(ready) {
        console.log("character deck is ready");
        this.startGame();
      }
    });
  }
  startGame() {
    this._gss.setLordPlayer();
    for (let i = 0; i < this._gcs.characterSelectRange; i++) {
      this.characters.push({ character: this._chs.drawCharacter(), isSelected: false });
    }
    this.characterNum = this._gcs.doubleCharacter ? 2 : 1;
    this.start = true;
  }
  select(c: CharacterSelected) {
    c.isSelected = !c.isSelected;
    this.selected.push(c);
    if(this.selected.length > this.characterNum){
      this.selected[0].isSelected = false;
      this.selected.splice(0, 1);
    }
  }
  confirmCharacterSelection() {
    for (let i = 0; i < this.selected.length; i++) {
      this._pss.getHumanPlayer()[0].characters.push(this.selected[i].character);
    }
    // return other unselected characters back to deck
    this.characters.map(char => {
      if (!char.isSelected) {
        this._chs.discard(char.character);
      }
    });
    this._chs.recycle();
    this._chs.shuffle();
    this._gss.setOtherPlayerCharacter();
		this._gss.gameState = GameState['发初始牌'];
    this._gss.initCardSpread();
    this._sms.start();
  }
}
