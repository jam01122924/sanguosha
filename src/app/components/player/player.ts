import {Card, CardContent} from '../card/card';
import {Character, Nation} from './character';
import { Skill } from './skill';
import { InTurnState } from '../../services/state-machine.service';

export enum Identity {
	'主',
	'忠',
	'内',
	'反'
}
export enum Debuff {
	'乐不思蜀',
	'闪电',
	'兵粮寸断'
}
export class Player {
	weapon: Card = null;
	armor: Card = null;
	horsePlus: Card = null;
	horseMinus: Card = null;
	cards: Card[] = [];
	characters: Character[] = [];
	hp: number = 3;
	nation: Nation;
	debuff: Debuff[];
	ownerId: string;
	position: number;
	identity: Identity;
	guessIdentity: Identity;
	isBot: boolean;
	backwards: boolean;
	state: InTurnState = null;
	//TODO: debuffs

	constructor() {
	}

	addCharacter(c: Character) {
		this.characters.map(myChar => {
			if (c.name === myChar.name) {
				console.log("Already has this charater: " + c.name);
				return;
			}
		});
		this.nation = this.nation ? this.nation : c.nation;
		this.hp += c.hp - 3;
		this.characters.push(c);
	}
	removeCharacter(c: Character) {
		this.characters.map((myChar, index) => {
			if (c.name === myChar.name) {
				this.characters.splice(index, 1);
				return;
			}
		});
		console.error("Can't find Character: " + c.name);
	}
	cleanCharacter() {
		this.characters.length = 0;
	}
	findCharacterById(id: string){
		return this.characters.map(c => c.id === id);
	}
	findCharacterByName(name: string) {
		return this.characters.filter(c => c.name === name);
	}
	drawCard(c: Card) {
		this.cards.push(c);
	}
	removeCardinHand(c: Card) {
		console.log(this.cards.indexOf(c));
		this.cards.splice(this.cards.indexOf(c), 1);
	}
	selectCard(c:Card) {
		c.selected = !c.selected;
	}
	hightlightCards(contents: CardContent[]) {
		this.cards.map(c => {
			c.darken = true;
			for (let i = 0; i < contents.length; i++){
				if (c.content === contents[i]){
					c.darken = false;
				}
			}
		});
	}
	flip() {
		this.backwards = !this.backwards;
	}
	getSkills() {
		let skillArray: Skill[] = [];
		for (let i = 0; i < this.characters.length; i++){
			skillArray = skillArray.concat(this.characters[i].skills);
		}
		return skillArray;
	}

}