import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';

import { StringFilterPipe } from '../string-filter.pipe';

import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CandidateListSearchComponent } from './candidate-list-search/candidate-list-search.component';
import { AddButtonSectionComponent } from './add-button-section/add-button-section.component';
import { CandidateListGroupItemComponent } from './candidate-list-group-item/candidate-list-group-item.component';
import { LoadingpageComponent } from '../loadingpage/loadingpage.component';

import * as $ from "jquery";



@NgModule({
  declarations: [
    CandidatelistComponent,
    CandidateListSearchComponent,
    AddButtonSectionComponent,
    CandidateListGroupItemComponent,
    LoadingpageComponent,
    StringFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule ,
    NgxPaginationModule, //pagination module
    FormsModule,
    ReactiveFormsModule ,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [CandidatelistComponent]
})
export class CandidateListModule { }
