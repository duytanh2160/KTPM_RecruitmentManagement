import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';
import { InterviewinglistComponent } from './interviewing-list/interviewinglist/interviewinglist.component';
import { OfferinglistComponent } from './offering-list/offeringlist/offeringlist.component';
import { ProbationlistComponent } from './probation-list/probationlist/probationlist.component';
import { JoblistComponent } from './job-list/joblist/joblist.component';
import { AccountlistComponent } from './account-list/accountlist/accountlist.component';
import { CandidateinfoComponent } from './candidate-info/candidateinfo/candidateinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { InterviewingListModule } from './interviewing-list/interviewing-list.module';
import { OfferingListModule } from './offering-list/offering-list.module';
import { ProbationListModule } from './probation-list/probation-list.module';
import { CandidateListModule } from './candidate-list/candidate-list.module';
import { JobListModule } from './job-list/job-list.module';
import { AccountListModule } from './account-list/account-list.module';
import { CandidateInfoModule } from './candidate-info/candidate-info.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';



const routes : Routes = [
    { path : '', component : CandidatelistComponent, data: {title: 'Candidate List'} },
    { path : 'Interviewing', component : InterviewinglistComponent, data: {title: 'Interviewing List'} },
    { path : 'Offering', component : OfferinglistComponent, data: {title: 'Offering List'} },
    { path : 'Probation', component : ProbationlistComponent, data: {title: 'Probation List'} },
    { path : 'Job', component : JoblistComponent, data: {title: 'Job List'} },
    { path : 'Account', component : AccountlistComponent, data: {title: 'Account List'} },
    { path : 'Info/:candidateID', component : CandidateinfoComponent, data: {title: 'Candidate Info'} },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    HttpClientModule,
    InterviewingListModule,
    OfferingListModule,
    ProbationListModule,
    CandidateListModule,
    JobListModule,
    AccountListModule,
    CandidateInfoModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    Title
  ],
})
export class MainPageModule { }
