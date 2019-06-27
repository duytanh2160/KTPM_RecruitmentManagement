import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProbationlistComponent } from './probationlist/probationlist.component';
import { ProbationListGroupItemComponent } from './probation-list-group-item/probation-list-group-item.component';
import { ProbationListSearchComponent } from './probation-list-search/probation-list-search.component';
import { StringFilterPipe } from './string-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProbationlistComponent,
    ProbationListGroupItemComponent, 
    ProbationListSearchComponent,
    LoadingpageComponent,
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
export class ProbationListModule { }
