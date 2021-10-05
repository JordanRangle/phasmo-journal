import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { GhostsComponent } from './ghosts/ghosts.component';
import { GhostDetailComponent } from './ghost-detail/ghost-detail.component';
import { reducer } from './ghosts/store/ghosts-reducer';

@NgModule({
  declarations: [
    AppComponent,
    EvidenceComponent,
    GhostsComponent,
    GhostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({ selectedGhost: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }