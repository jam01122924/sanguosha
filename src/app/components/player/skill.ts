import { InTurnState } from '../../services/state-machine.service';

export class Skill {

	constructor(public name: string, public data?: any, public activeState?: InTurnState[]) { }
}