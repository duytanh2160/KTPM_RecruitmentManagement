import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HelloworldComponent } from './helloworld/helloworld.component';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';
import { InterviewinglistComponent } from './interviewing-list/interviewinglist/interviewinglist.component';
import { OfferinglistComponent } from './offering-list/offeringlist/offeringlist.component';
import { ProbationlistComponent } from './probation-list/probationlist/probationlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  { path : '', component : CandidatelistComponent, data: {title: 'Candidate List'} },
  { path : 'Interviewing', component : InterviewinglistComponent, data: {title: 'Interviewing List'} },
  { path : 'Offering', component : OfferinglistComponent, data: {title: 'Offering List'} },
  { path : 'Probation', component : ProbationlistComponent, data: {title: 'Probation List'} },
  { path : 'dev', component : HelloworldComponent },
  { path: '**', redirectTo: '/404'},
  { path: '404', component : PageNotFoundComponent, data: {title: 'Page Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
