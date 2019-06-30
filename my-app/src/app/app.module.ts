import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';

import { HelloworldComponent } from './main-page/helloworld/helloworld.component';
import { WebTemplateComponent } from './main-page/web-template/web-template.component';
import { SidebarComponent } from './main-page/sidebar/sidebar.component';
import { TopnavComponent } from './main-page/topnav/topnav.component';
import { RightSidebarComponent } from './main-page/right-sidebar/right-sidebar.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { PagingComponent } from './main-page/paging/paging.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidateListModule } from './main-page/candidate-list/candidate-list.module';
import { InterviewingListModule } from './main-page/interviewing-list/interviewing-list.module';
import { OfferingListModule } from './main-page/offering-list/offering-list.module';
import { ProbationListModule } from './main-page/probation-list/probation-list.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobListModule } from './main-page/job-list/job-list.module';
import { CandidateInfoModule } from './main-page/candidate-info/candidate-info.module';
import { AccountListModule } from './main-page/account-list/account-list.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';




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
    PageNotFoundComponent,
    LoginPageComponent,
    LoadingpageComponent
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
    AccountListModule,
    CandidateInfoModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
