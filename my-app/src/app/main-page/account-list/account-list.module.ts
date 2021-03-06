import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { StringFilterPipe } from './accountlist/string-filter.pipe';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';

@NgModule({
  declarations: [
    AccountlistComponent, 
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
  ]
})
export class AccountListModule { }
