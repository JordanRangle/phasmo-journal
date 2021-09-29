import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { GhostsComponent } from './ghosts/ghosts.component';
import { GhostDetailComponent } from './ghost-detail/ghost-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EvidenceComponent,
    GhostsComponent,
    GhostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
