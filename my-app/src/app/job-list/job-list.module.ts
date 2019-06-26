import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoblistComponent } from './joblist/joblist.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { StringFilterPipe } from './string-filter.pipe';

@NgModule({
  declarations: [
    JoblistComponent,
    LoadingpageComponent,
    StringFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule, //pagination module
    FormsModule,
    ReactiveFormsModule ,
    NgSelectModule
  ]
})
export class JobListModule { }
