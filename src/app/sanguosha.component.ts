import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { GameComponent } from './ui/game/game.component';
import { GalleryComponent } from './ui/gallery/gallery.component';


@Component({
  moduleId: module.id,
  selector: 'sanguosha-app',
  templateUrl: 'sanguosha.component.html',
  directives: [ROUTER_DIRECTIVES, HomeComponent, GalleryComponent],
  styleUrls: ['sanguosha.component.css']
})

@Routes([
	{ path: '/home', component: HomeComponent },
	{ path: '/game', component: GameComponent },
	{ path: '/gallery', component: GalleryComponent },
	{ path: '*', component: HomeComponent },
])

export class SanguoshaAppComponent {
  constructor() {}

}
