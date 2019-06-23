import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HelloworldComponent } from './helloworld/helloworld.component';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';
import { InterviewinglistComponent } from './interviewing-list/interviewinglist/interviewinglist.component';
import { OfferinglistComponent } from './offering-list/offeringlist/offeringlist.component';

const routes : Routes = [
  { path : '', component : CandidatelistComponent },
  { path : 'Interviewing', component : InterviewinglistComponent },
  { path : 'Offering', component : OfferinglistComponent },
  { path : 'dev', component : HelloworldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
