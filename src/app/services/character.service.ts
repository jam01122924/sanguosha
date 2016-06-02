import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Character, Nation } from '../components/player/character';
import { Skill } from '../components/player/skill';
import { CommonService } from './common.service';
import { GameConfigService } from './game-config.service';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
	private _charDeck: Character[] = [];
  private _recycleDeck: Character[] = [];
  charDeckReady: EventEmitter<boolean>;

  constructor(private _http: Http, private _cs: CommonService, private _gcs: GameConfigService) {
    this.charDeckReady = new EventEmitter();
  }

  readDeck() {
		return this._http.get('/app/source/character.json').map(res => res.json());
  }
  initDeck(data) {
    if (data && data.data && data.data.length) {
      data.data.map(characterPackage => {
      	// check character package is allowed
        if (this._gcs.characterPackage.indexOf(characterPackage.package) > -1) {
          for (let i: number = 0; i < characterPackage.characters.length; i++) {
            // initial skills
            let tempSkill: Skill[] = [];
            for (let j: number = 0; j < characterPackage.characters[i].skills.length; j++){
              console.log(characterPackage.characters[i].skills[j]);
              tempSkill.push(new Skill(characterPackage.characters[i].skills[j]));
            }
            // initial character with skills
            let char = new Character(characterPackage.characters[i].name, characterPackage.characters[i].id, characterPackage.characters[i].hp, characterPackage.characters[i].nation, characterPackage.characters[i].lord, tempSkill);
            this._charDeck.push(char);
          }
        }
      });
      // shuffle 3 times
      this._cs.shuffle(this._charDeck, 3);
      this.charDeckReady.emit(true);
      // this.putLordOnTop();
      // console.log(this.charDeck);
    }
  }

  drawCharacter(): Character {
		if (this._charDeck.length > 0) {
			return this._charDeck.pop();
		} else {
			this.recycle();
			return this._charDeck.pop();
		}
  }
  drawCharacterById(id: string): Character {
    for (let i = 0; i < this._charDeck.length; i++){
      if (this._charDeck[i].id === id) {
        return this._charDeck.splice(i, 1)[0];
      }
    }
  }
  putLordOnTop() {
    let lordArray: Character[] = [];
    for (let i = 0; i < this._charDeck.length; i++){
      if(this._charDeck[i].lord){
        lordArray.push(this._charDeck.splice(i, 1)[0]);
        i--;
      }
    }
    lordArray.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    console.log(lordArray);
    this._charDeck = this._charDeck.concat(lordArray);
  }
  discard(c: Character) {
		this._recycleDeck.push(c);
  }
  recycle() {
    this._charDeck = this._charDeck.concat(this._recycleDeck);
    this._cs.shuffle(this._charDeck, 3);
  }
  shuffle(time?: number) {
    this._cs.shuffle(this._charDeck, time?time:1);
  }

  get charDeck(): Character[] {
    return this._charDeck;
  };
  get recycleDeck(): Character[] {
    return this._recycleDeck;
  };
}
