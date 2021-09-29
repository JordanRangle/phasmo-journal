import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceComponent } from './evidence/evidence.component';
import { GhostsComponent } from './ghosts/ghosts.component';
import { GhostDetailComponent } from './ghost-detail/ghost-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/evidence', pathMatch: 'full' },
  { path: 'evidence', component: EvidenceComponent },
  { path: 'ghosts', component: GhostsComponent },
  { path: 'detail/:id', component: GhostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }