import { Component, OnInit } from '@angular/core';
import { Card } from '../../card/card';
import { CardComponent } from '../../card/card.component';

@Component({
  moduleId: module.id,
  selector: 'app-player-cards',
  inputs: ['cards'],
  templateUrl: 'player-cards.component.html',
	directives: [CardComponent],
  styleUrls: ['player-cards.component.css']
})
export class PlayerCardsComponent implements OnInit {

	public cards: Card[];
	public cardPosition: number[];
  constructor() {}

  ngOnInit() {
  }
  cardClick(c: Card) {
		c.selected = !c.selected;
  }
}
