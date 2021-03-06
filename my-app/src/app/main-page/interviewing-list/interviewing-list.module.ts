import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewinglistComponent } from './interviewinglist/interviewinglist.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { InterviewingListSearchComponent } from './interviewing-list-search/interviewing-list-search.component';
import { InterviewingListGroupItemComponent } from './interviewing-list-group-item/interviewing-list-group-item.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { StringFilterPipe } from './string-filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InterviewinglistComponent,
    LoadingpageComponent,
    InterviewingListSearchComponent,
    InterviewingListGroupItemComponent,
    StringFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule, //pagination module
    FormsModule,
    RouterModule,
    ReactiveFormsModule ,
    NgSelectModule
  ],
  providers: [],
  bootstrap: []
})
export class InterviewingListModule { }
