import { Injectable, EventEmitter } from '@angular/core';

export class eventBroadcast {
	constructor(public name: string, public data: any){}
}
@Injectable()
export class EventBroadcastService {
	public events;
  
  constructor() {
  }
  castEvent(name: string, data: any) {
		let eventEmit: EventEmitter<eventBroadcast> = new EventEmitter();
		let content = new eventBroadcast(name, data);
		eventEmit.emit(content);
  }
}
