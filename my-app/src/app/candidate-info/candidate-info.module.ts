import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateinfoComponent } from './candidateinfo/candidateinfo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';

@NgModule({
  declarations: [
    CandidateinfoComponent,
    LoadingpageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule, //pagination module
    FormsModule,
    ReactiveFormsModule ,
    NgSelectModule
  ]
})
export class CandidateInfoModule { }
