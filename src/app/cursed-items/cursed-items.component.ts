import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursed-items',
  templateUrl: './cursed-items.component.html',
  styleUrls: ['./cursed-items.component.less']
})
export class CursedItemsComponent implements OnInit {
  tarotCards: any = [
    {
      title: 'The Sun',
      description: 'Restores 100% of sanity.',
    },
    {
      title: 'The Moon',
      description: 'Drops sanity to 0%.',
    },
    {
      title: 'The Tower',
      description: 'Triggers a ghost interaction',
    },
    {
      title: 'The Wheel of Fortune',
      description: 'If the card burns green your sanity is increased by 25%. IF the card burns red your sanity is decrased by 25%.',
    },
    {
      title: 'The Devil',
      description: 'Triggers a ghost event.',
    },
    {
      title: 'The High Priestess',
      description: 'Resurrects a random dead player.',
    },
    {
      title: 'The Hanged Man',
      description: 'Instantly kills you.',
    },
    {
      title: 'Death',
      description: 'Triggers a cursed hunt.*',
    },
    {
      title: 'The Hermit',
      description: 'Traps the ghost in its room for 1 minute.',
    },
    {
      title: 'The Fool',
      description: 'Appears after a card is drawn and replaces it. This card has no effect.',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
