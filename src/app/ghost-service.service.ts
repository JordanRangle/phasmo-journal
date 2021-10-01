import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Ghost } from './ghost-interface';

@Injectable({
  providedIn: 'root'
})
export class GhostService {
  private ghostsUrl = 'api/ghosts';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // GET evidence from the server
  getGhosts(): Observable<Ghost[]> {
    return this.http.get<Ghost[]>(this.ghostsUrl)
      .pipe(
        // tap(_ => this.log('fetched evidence')),
        catchError(this.handleError<Ghost[]>('getGhosts', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
