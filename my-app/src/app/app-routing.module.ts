import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HelloworldComponent } from './helloworld/helloworld.component';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';

const routes : Routes = [
  { path : '', component : CandidatelistComponent, data: { title: 'Candidate list' }},
  { path : 'dev', component : HelloworldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
