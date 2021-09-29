import { EvidenceService } from './../evidence-service.service';
import { Component, OnInit } from '@angular/core';
import { Evidence } from '../evidence-interface';
import { EVIDENCELIST } from '../mock-evidence';

import { Ghost } from '../ghost-interface';
import { GHOSTS } from '../mock-ghosts';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.less']
})
export class EvidenceComponent implements OnInit {
  evidence: Evidence[] = [];
  selectedEvidence: string[] = [];

  constructor(private evidenceService: EvidenceService) { }

  ngOnInit(): void {
    this.getEvidence();
    this.filteredGhosts = this.ghosts;
  }

  getEvidence(): void {
    // this.evidenceService.getEvidence().subscribe(evidence => this.evidence = evidence);
    this.evidence = EVIDENCELIST;
  }

  // getGhosts(): void {}
  ghosts: Ghost[] = GHOSTS;
  filteredGhosts: Ghost[] = [];

  setEvidenceData(ghost: Ghost) {
    return ghost.evidence.toString();
  }

  evidenceSelect(target:any):void {
    let index = this.selectedEvidence.indexOf(target.id);
    // if selected item does not exist in selected array, add it; else remove it
    if (index === -1) {
      this.selectedEvidence.push(target.id);
    } else {
      this.selectedEvidence.splice(index, 1);
    }

    // disable opposing checkbox
    if (target.dataset.cancels) {
      (<HTMLInputElement>document.getElementById(target.dataset.cancels)).disabled = !(<HTMLInputElement>document.getElementById(target.dataset.cancels)).disabled;
    }
    
    // filter ghosts
    if (this.selectedEvidence.length) {
      this.filterGhosts();
    }
    else {
      this.filteredGhosts = this.ghosts;
    }
  }

  filterGhosts() {
    // if ghost includes an item that does not appear in the selectedEvidence array, hide it
    this.filteredGhosts = [];
    
    this.ghosts.forEach(ghost => {
      // if (ghost.evidence.some(item => this.selectedEvidence.includes(item))) {
      //   this.filteredGhosts.push(ghost);
      // }
      if (this.selectedEvidence.every(item => ghost.evidence.includes(item))) {
        this.filteredGhosts.push(ghost);
      }
    });

    this.selectedEvidence.forEach(item => {
      // this.ghosts.forEach(ghost => {
      //   if (ghost.evidence.includes(item)) {
      //     this.filteredGhosts.push(ghost);
      //   }
      // })



      // if(ghost.evidence.includes(item)){
      //   return true;
      // }
      // else {
      //   return false;
      // }
    })
  }

  disableCheck(id: number): void {
    if (id) {

    }
  }

  
  // freezing (no conflicts)

  // if option A is checked, uncheck option B and disable the input
  // do the opposite when option A is unchecked
  // style the ghost list to cross out the ghosts that do not match the evidence

}
