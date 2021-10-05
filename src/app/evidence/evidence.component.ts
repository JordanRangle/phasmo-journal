import { EvidenceService } from './../evidence-service.service';
import { Component, ElementRef, OnInit, Query, QueryList, ViewChildren } from '@angular/core';
import { Evidence } from '../evidence-interface';

import { GhostService } from '../ghost-service.service';
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
  ghosts: Ghost[] = [];
  filteredGhosts: Ghost[] = [];

  constructor(private evidenceService: EvidenceService, private ghostService: GhostService) { }

  ngOnInit(): void {
    this.getEvidence();
    this.getGhosts();
  }

  getEvidence(): void {
    this.evidenceService.getEvidence().subscribe(evidence => this.evidence = evidence);
  }

  getGhosts(): void {
    this.ghostService.getGhosts().subscribe(ghosts => {
      this.ghosts = ghosts;
      this.filteredGhosts = ghosts;
    });
  }
  
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
      if (this.selectedEvidence.every(item => ghost.evidence.includes(item))) {
        this.filteredGhosts.push(ghost);
      }
    });
  }

  // @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @ViewChildren("checkboxes") checkboxes: any;

  resetEvidence() {
    this.filteredGhosts = this.ghosts;

    console.log('children', this.checkboxes);
    this.selectedEvidence = [];
    this.checkboxes.forEach((element: ElementRef) => {
      element.nativeElement.checked = false;
      element.nativeElement.disabled = false;
    });
  }

}
