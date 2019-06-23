import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { OfferinglistComponent } from './offeringlist/offeringlist.component';
import { OfferingListGroupItemComponent } from './offering-list-group-item/offering-list-group-item.component';
import { OfferingListSearchComponent } from './offering-list-search/offering-list-search.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { StringFilterPipe } from './string-filter.pipe';

@NgModule({
  declarations: [
  LoadingpageComponent,
  OfferinglistComponent,
  OfferingListGroupItemComponent,
  OfferingListSearchComponent,
  StringFilterPipe
],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule, //pagination module
    FormsModule,
    ReactiveFormsModule ,
    NgSelectModule
  ],
  providers: [],
  bootstrap: []
})
export class OfferingListModule { }
