import { Injectable } from '@angular/core';
import { CardSuit, CardType, CardContent, Card } from '../components/card/card';
import { Player } from '../components/player/player';
//service:
import { PlayerStatusService } from './player-status.service';
import { DeckService } from './deck.service'; 

@Injectable()
export class PlayCardService {
  constructor(private _pss: PlayerStatusService, private _ds: DeckService) { }

}
