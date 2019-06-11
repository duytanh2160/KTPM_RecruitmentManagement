import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { StringFilterPipe } from '../string-filter.pipe';
import { CandidatelistComponent } from './candidatelist/candidatelist.component';
import { CandidateListSearchComponent } from './candidate-list-search/candidate-list-search.component';
import { AddButtonSectionComponent } from './add-button-section/add-button-section.component';
import { CandidateListGroupItemComponent } from './candidate-list-group-item/candidate-list-group-item.component';
var CandidateListModule = /** @class */ (function () {
    function CandidateListModule() {
    }
    CandidateListModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                CandidatelistComponent,
                CandidateListSearchComponent,
                AddButtonSectionComponent,
                CandidateListGroupItemComponent,
                StringFilterPipe
            ],
            imports: [
                CommonModule,
                HttpClientModule,
                NgxPaginationModule,
                FormsModule,
                NgSelectModule
            ],
            providers: [],
            bootstrap: [CandidatelistComponent]
        })
    ], CandidateListModule);
    return CandidateListModule;
}());
export { CandidateListModule };
//# sourceMappingURL=candidate-list.module.js.map