import { Component, OnInit } from '@angular/core';
import {NgSwitch, NgSwitchWhen, NgSwitchDefault} from '@angular/common';
import { Card, CardContent } from './card';

@Component({
	moduleId: module.id,
	selector: 'card',
	templateUrl: 'card.component.html',
	directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault],
	inputs: ['card'],
	styleUrls: ['card.component.css']
})

export class CardComponent implements OnInit {
	public card: Card;
	public isRed: boolean;
	public content: string;
	public img: string;
	constructor() {}

	ngOnInit() {
		this.isRed = this.card.isRed();
		this.content = CardContent[this.card.content];
		this.img = 'url("imgs/' + this.card.content + '.jpg")';
	}
}
