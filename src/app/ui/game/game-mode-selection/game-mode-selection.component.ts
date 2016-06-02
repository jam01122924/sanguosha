import { Component, OnInit } from '@angular/core';
import { GameModes, GameConfigService } from '../../../services/game-config.service';
import { GameState, GameStatusService } from '../../../services/game-status.service';

@Component({
  moduleId: module.id,
  selector: 'app-game-mode-selection',
  templateUrl: 'game-mode-selection.component.html',
  styleUrls: ['game-mode-selection.component.css']
})
export class GameModeSelectionComponent implements OnInit {
	selectedMode: GameModes = 1;
	gm = GameModes;
  constructor(private _gcs: GameConfigService, private _gss: GameStatusService) { }

  ngOnInit() {
  }
  confirm() {
		this._gss.gameState = GameState['初始化游戏参数'];
		this._gcs.setGameMode(this.selectedMode);
		this._gss.gameState = GameState['选将'];
		
  }
}
