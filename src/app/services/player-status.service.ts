import { Injectable } from '@angular/core';
import { Player, Identity } from '../components/player/player';
import { Character } from '../components/player/character';
import { Card, CardContent } from '../components/card/card';

import { CharacterService } from './character.service';
import { DeckService } from './deck.service';
import { InTurnState } from './state-machine.service';

@Injectable()
export class PlayerStatusService {
	public players: Player[] = [];
	public playersIDList: string[] = [];

  constructor(private _chs: CharacterService, private _ds: DeckService) { }

  getHumanPlayer() {
		return this.players.filter(p => !p.isBot);
  }
  pickBotCharacter(num: number) {
  	this.players.map(p=>{
  		if(p.isBot && p.characters.length===0){
				for (let i = 0; i < num; i++){
					let c: Character = this._chs.drawCharacter();
					p.addCharacter(c);
				}
  		}
  	});
  }

  initPlayer(num: number) {
    this.playersIDList.push('human');
    // insert bot to playerIDList
    for (let i = 1; i < num; i++){
      this.playersIDList.push('cpu');
    }

  }
  equip(c:Card, pos:number) {
    let p: Player = this.players.filter(f=>f.position===pos)[0];
    if (p) {
      console.log(c.type);
      switch (c.type) {
        case 'weapon':
          if (p.weapon) {
            this._ds.discard(p.weapon);
            console.log(this._ds.dirtyDeck);
            p.weapon = c;
          } else {
            p.weapon = c;
          }
          p.removeCardinHand(c);
        break;
        case 'armor':
          if (p.armor) {
            this._ds.discard(p.armor);
            console.log(this._ds.dirtyDeck);
            p.armor = c;
          } else {
            p.armor = c;
          }
          p.removeCardinHand(c);
        break;
        case '+1horse':
          if (p.horsePlus) {
            this._ds.discard(p.horsePlus);
            console.log(this._ds.dirtyDeck);
            p.horsePlus = c;
          } else {
            p.horsePlus = c;
          }
          p.removeCardinHand(c);
        break;
        case '-1horse':
          if (p.horseMinus) {
            this._ds.discard(p.horseMinus);
            console.log(this._ds.dirtyDeck);
            p.horseMinus = c;
          } else {
            p.horseMinus = c;
          }
          p.removeCardinHand(c);
        break;
        default:
          console.log("not an equipment!");
        break;
      }
    }
    console.log(p.weapon);
  }
}
