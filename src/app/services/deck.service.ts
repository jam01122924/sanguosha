import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Card, CardSuit, CardContent } from '../components/card/card';
import { CommonService } from './common.service';
import 'rxjs/add/operator/map';

@Injectable()
export class DeckService {
	private _deck: Card[] = [];
  private _dirtyDeck: Card[] = [];
  private _useExCards: boolean = true;

  public deckReady: EventEmitter<boolean>;

  constructor(private _http: Http, private _cs: CommonService) {
    this.deckReady = new EventEmitter();
  }

  readDeck() {
		return this._http.get('/app/source/deck.json').map(res => res.json());
  }
  initDeck(data, ex?:boolean, pair?:number) {
    this._useExCards = !!ex;
    if (data && data.data && data.data.length) {
      pair = pair ? pair : 2;
      for (let p = 0; p < pair; p++) {
        let id = 0;
        data.data.map(d => {
          if (this.useExCards || d.package === 'std') {
            for (let i: number = 0; i < d.cards.length; i++) {
              for (let j: number = 0; j < d.cards[i].nums.length; j++) {
                let card = new Card(d.cards[i].nums[j], d.cards[i].suit, d.content, id);
                this._deck.push(card);
                id++;
              }
            }
          }
        });
        // shuffle 3 times
        this._cs.shuffle(this._deck, 3);
        this.deckReady.emit(true);
      }
    }
  }

  drawCard(): Card {
		if (this._deck.length > 0) {
			return this._deck.pop();
		} else {
			this.recycle();
			this._cs.shuffle(this._deck, 3);
			return this._deck.pop();
  	}
  }
  discard(c: Card) {
		this._dirtyDeck.push(c);
  }
  recycle() {
    this._deck = this._deck.concat(this._dirtyDeck);
    this.shuffle(3);
  }
  shuffle(time?: number) {
    this._cs.shuffle(this._deck, time ? time : 1);
  }



  // Accessor:
  get deck(): Card[] {
    return this._deck;
  }
  get dirtyDeck(): Card[] {
    return this._dirtyDeck;
  }
  get useExCards(): boolean {
    return this._useExCards;
  }


}
