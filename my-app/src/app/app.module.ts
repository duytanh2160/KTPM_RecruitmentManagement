import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';

import { HelloworldComponent } from './helloworld/helloworld.component';
import { WebTemplateComponent } from './web-template/web-template.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PagingComponent } from './paging/paging.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidateListModule } from './candidate-list/candidate-list.module';
import { InterviewingListModule } from './interviewing-list/interviewing-list.module';
import { OfferingListModule } from './offering-list/offering-list.module';
import { ProbationListModule } from './probation-list/probation-list.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobListModule } from './job-list/job-list.module';




@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    WebTemplateComponent,
    SidebarComponent,
    TopnavComponent,
    RightSidebarComponent,
    FooterComponent,
    PagingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterviewingListModule,
    OfferingListModule,
    ProbationListModule,
    CandidateListModule,
    JobListModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
