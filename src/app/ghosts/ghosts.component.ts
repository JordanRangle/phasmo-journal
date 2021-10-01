import { Component, OnInit } from '@angular/core';
import { Ghost } from '../ghost-interface';
import { GHOSTS } from '../mock-ghosts';
import { GhostService } from '../ghost-service.service';

@Component({
  selector: 'app-ghosts',
  templateUrl: './ghosts.component.html',
  styleUrls: ['./ghosts.component.less']
})
export class GhostsComponent implements OnInit {
  ghosts: Ghost[] = [];
  selectedGhost!: Ghost;

  constructor(private ghostService: GhostService) { }

  ngOnInit(): void {
    this.getGhosts();
  }

  getGhosts(): void {
    this.ghostService.getGhosts().subscribe(ghosts => {
      this.ghosts = ghosts;
    });
  }

  selectGhost(ghost: Ghost) {
    this.selectedGhost = ghost;
  }

}
