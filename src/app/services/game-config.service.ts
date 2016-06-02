import { Injectable } from '@angular/core';

export enum GameModes { "普通5人" = 1, "普通8人" = 2, "军争5人" = 3, "军争8人" = 4, "1v1" = 5, "3v3" = 6, "国战" = 7 };

@Injectable()
export class GameConfigService {
	private _gameMode: GameModes = GameModes["普通8人"];
	private _characterPackage: string[] = ["基本"];
	private _doubleCharacter: boolean = false;
	private _characterSelectRange: number = 6;
	private _lordNum: number = 1;
	private _loyalNum: number = 2;
	private _traitorNum: number = 1;
	private _rebelNum: number = 4;
	private _useEx: boolean = true;
	private _initCardNum: number = 10;

  constructor() {}

  setGameMode(g: GameModes) {
  	switch(g) {
			case GameModes["普通5人"]:
				this._gameMode = GameModes["普通5人"];
				this._lordNum = 1;
				this._loyalNum = 1;
				this._traitorNum = 1;
				this._rebelNum = 2;
				this._useEx = false;
				break;
			case GameModes["普通8人"]:
				this._gameMode = GameModes["普通8人"];
				this._lordNum = 1;
				this._loyalNum = 2;
				this._traitorNum = 1;
				this._rebelNum = 4;
				this._useEx = false;
				break;
			case GameModes["军争5人"]:
				this._gameMode = GameModes["军争5人"];
				this._lordNum = 1;
				this._loyalNum = 1;
				this._traitorNum = 1;
				this._rebelNum = 2;
				this._useEx = true;
				break;
			case GameModes["军争8人"]:
				this._gameMode = GameModes["军争8人"];
				this._lordNum = 1;
				this._loyalNum = 2;
				this._traitorNum = 1;
				this._rebelNum = 4;
				this._useEx = true;
				break;
			case GameModes["1v1"]:
				this._gameMode = GameModes["1v1"];
				this._lordNum = 1;
				this._loyalNum = 0;
				this._traitorNum = 0;
				this._rebelNum = 1;
				this._useEx = true;
				break;
			case GameModes["3v3"]:
				this._gameMode = GameModes["3v3"];
				this._lordNum = 1;
				this._loyalNum = 2;
				this._traitorNum = 1;
				this._rebelNum = 2;
				this._useEx = true;
				break;
			case GameModes["国战"]:
				this._gameMode = GameModes["国战"];
				this._lordNum = 0;
				this._loyalNum = 0;
				this._traitorNum = 0;
				this._rebelNum = 0;
				this._useEx = true;
				break;
			default: 
				break;
  	}
  }

	get gameMode() : GameModes {
		return this._gameMode;
	}
	get characterPackage(): string[] {
		return this._characterPackage;
	}
	set characterPackage(characterPackage: string[]) {
		this._characterPackage = characterPackage;
	}
	get doubleCharacter(): boolean {
		return this._doubleCharacter;
	}
	set doubleCharacter(d: boolean) {
		this._doubleCharacter = d;
	}
	get characterSelectRange(): number {
		return this._characterSelectRange;
	}
	set characterSelectRange(r: number) {
		this._characterSelectRange = r;
	}
	get lordNum() : number {
		return this._lordNum;
	}
	get loyalNum() : number {
		return this._loyalNum;
	}
	get traitorNum() : number {
		return this._traitorNum;
	}
	get rebelNum() : number {
		return this._rebelNum;
	}
	get useEx(): boolean {
		return this._useEx;
	}
	get initCardNum(): number {
		return this._initCardNum;
	}
}
