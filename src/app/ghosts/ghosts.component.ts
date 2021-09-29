import { Component, OnInit } from '@angular/core';
import { Ghost } from '../ghost-interface';
import { GHOSTS } from '../mock-ghosts';

@Component({
  selector: 'app-ghosts',
  templateUrl: './ghosts.component.html',
  styleUrls: ['./ghosts.component.less']
})
export class GhostsComponent implements OnInit {
  ghosts: Ghost[] = GHOSTS;

  constructor() { }

  ngOnInit(): void {
  }

}
