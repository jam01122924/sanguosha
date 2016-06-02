import { Injectable } from '@angular/core';
import { Player, Identity } from '../components/player/player';
import { PlayerStatusService } from './player-status.service';


@Injectable()
export class StateMachineService {
	num: number = 0;
	running: boolean = false;
  constructor(private _pss: PlayerStatusService) {}
  gameloop;
  inital() {
		this.running = false;
		for (let i = 0; i < this._pss.players.length; i++){
			this._pss.players[i].state = this._pss.players[i].identity === Identity['主'] ? InTurnState['回合开始'] : InTurnState['等待状态'];
		}
  }

  update() {
		let self = this;
		console.log(this.num);
		this.num++;
		this.gameloop = setTimeout(function() { self.update() }, 2000);
  }
  start() {
		if (!this.running){
			this.running = true;
			this.update();
		}
  }
  stop() {
		if (this.running) {
			this.running = false;
			clearTimeout(this.gameloop);
		}
  }

  
}



















































export enum InTurnState {
	"回合开始", "判定翻面",
	"判定状态前", "判定状态", "判定状态后", "决定状态",
	"摸牌阶段前", "摸牌阶段", "摸牌阶段后",
	"出牌阶段前", "出牌阶段", "出牌阶段后",
	"弃牌阶段前", "弃牌阶段", "弃牌阶段后",
	"回合结束", "等待状态",
	"触发状态前", "触发状态", "触发状态后"
}