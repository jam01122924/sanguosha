import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() {}

  shuffle(array : Array<any>, n?: number) {
		let times : number = n ? n : 1;

		// While there are elements in the array
		for (let i = 0; i < times; i++) {
			let counter = array.length;
			while (counter > 0) {
				// Pick a random index
				let index = Math.floor(Math.random() * counter);

				// Decrease counter by 1
				counter--;

				// And swap the last element with it
				let temp = array[counter];
				array[counter] = array[index];
				array[index] = temp;
			}
		}
  }

}
