import { Component, OnInit } from '@angular/core';
import { Card, CardContent } from '../../components/card/card';
// sub ui Component
import { CardComponent } from '../../components/card/card.component';
import { GameModeSelectionComponent } from './game-mode-selection/game-mode-selection.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';
import { InGameComponent } from './in-game/in-game.component';

import { DeckService } from '../../services/deck.service';
import { CharacterService } from '../../services/character.service';
import { GameConfigService } from '../../services/game-config.service';
import { GameState, GameStatusService } from '../../services/game-status.service';
import { PlayerStatusService } from '../../services/player-status.service';
import { PlayCardService } from '../../services/play-card.service';
import { StateMachineService } from '../../services/state-machine.service';
import { CommonService } from '../../services/common.service';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  directives: [CardComponent, GameModeSelectionComponent, CharacterSelectionComponent, InGameComponent],
  providers: [DeckService, CharacterService, GameConfigService, GameStatusService, PlayerStatusService, PlayCardService, StateMachineService],
  styleUrls: ['game.component.css']
})
export class GameComponent implements OnInit {

  gameState: string; // TODO: create class for gameState later
  constructor(
  	private _deckService: DeckService,
    private _characterService: CharacterService,
    private _gameConfigService: GameConfigService,
    private _gameStatusService: GameStatusService,
    private _playerStatusService: PlayerStatusService,
    private _playCardService: PlayCardService,
    private _stateMachineService: StateMachineService
  ) { }

  ngOnInit() {
    // Read card deck and character deck
  }

}
