// import { selectGhost } from './store/ghosts.actions';
import { Component, OnInit } from '@angular/core';
import { Ghost } from '../ghost-interface';
import { GHOSTS } from '../mock-ghosts';
import { GhostService } from '../ghost-service.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

import * as SelectGhostActions from "./store/ghosts.actions";

@Component({
  selector: 'app-ghosts',
  templateUrl: './ghosts.component.html',
  styleUrls: ['./ghosts.component.less']
})
export class GhostsComponent implements OnInit {
  ghosts: Ghost[] = [];
  selectedGhost!: Ghost;

  newGhost: Observable<Ghost>;

  constructor(private ghostService: GhostService, private store: Store<AppState>) {
    this.newGhost = store.select('ghost');
    console.log('newGhost', this.newGhost);
  }

  ngOnInit(): void {
    this.getGhosts();
    this.store.select
  }

  getGhosts(): void {
    this.ghostService.getGhosts().subscribe(ghosts => {
      this.ghosts = ghosts;
    });
  }

  selectGhost(ghost: Ghost) {
    this.selectedGhost = ghost;
    this.store.dispatch(SelectGhostActions.selectGhost({payload: ghost}));
  }

}
