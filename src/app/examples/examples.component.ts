import { Component, OnInit } from '@angular/core';
import { Evidence } from '../evidence-interface';
import { EvidenceService } from '../evidence-service.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.less']
})
export class ExamplesComponent implements OnInit {
  evidence: Evidence[] = [];

  constructor(private evidenceService: EvidenceService) { }

  ngOnInit(): void {
    this.getEvidence();
  }

  getEvidence(): void {
    this.evidenceService.getEvidence().subscribe(evidence => this.evidence = evidence);
  }

}
