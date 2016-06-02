import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Card, CardContent } from '../../components/card/card';
import { DeckService } from '../../services/deck.service';

@Component({
  moduleId: module.id,
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  directives: [CardComponent],
  providers: [DeckService],
  styleUrls: ['gallery.component.css']
})
export class GalleryComponent implements OnInit {
	public myDeck: Card[];
  constructor(private _deckService: DeckService) {}

  ngOnInit() {
		this._deckService.readDeck()
			.subscribe(
				data => {
          this._deckService.initDeck(data);
          this.myDeck = this._deckService.deck;
        },
				error => console.error(error),
				() => console.log("Finish Get JSON")
			);
  }

}
