import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
  moduleId: module.id,
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  inputs: ['character'],
  styleUrls: ['hero.component.css']
})
export class HeroComponent implements OnInit {
	public character: Character;
	public img: string;
  constructor() {}

  ngOnInit() {
    if (this.character) {
      this.img = 'url("imgs/' + this.character.name + '.jpg")';
    }
  }

}
