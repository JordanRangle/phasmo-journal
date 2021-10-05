import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceComponent } from './evidence/evidence.component';
import { GhostsComponent } from './ghosts/ghosts.component';
import { GhostDetailComponent } from './ghost-detail/ghost-detail.component';
import { SpiritBoxComponent } from './spirit-box/spirit-box.component';
import { OuijaComponent } from './ouija/ouija.component';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
  { path: 'evidence', component: EvidenceComponent },
  { path: 'ghosts', component: GhostsComponent },
  { path: 'detail/:id', component: GhostDetailComponent },
  { path: 'spiritbox', component: SpiritBoxComponent},
  { path: 'ouija', component: OuijaComponent },
  { path: 'examples', component: ExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }