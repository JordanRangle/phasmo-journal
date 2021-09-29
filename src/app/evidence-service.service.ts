import { Injectable } from '@angular/core';
import { EVIDENCELIST } from './mock-evidence';
import { Evidence } from './evidence-interface';

@Injectable({
  providedIn: 'root'
})
export class EvidenceService {

  constructor() { }

  getEvidence(): void {
    // return this.http.get<Hero[]>(this.heroesUrl)
    //   .pipe(
    //     tap(_ => this.log('fetched heroes')),
    //     catchError(this.handleError<Hero[]>('getHeroes', []))
    //   );
    // return EVIDENCELIST
  }
}
