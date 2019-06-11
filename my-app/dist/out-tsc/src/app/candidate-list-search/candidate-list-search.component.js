import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CandidateListGroupItemComponent } from '../candidate-list-group-item/candidate-list-group-item.component';
var CandidateListSearchComponent = /** @class */ (function () {
    function CandidateListSearchComponent(candidateList) {
        this.candidateList = candidateList;
    }
    CandidateListSearchComponent.prototype.ngOnInit = function () {
    };
    CandidateListSearchComponent.prototype.onSearchSubmit = function (search) {
        console.log(this.candidateList.candidates);
        this.candidateList.searchCandidates(search);
        this.candidateList.ngOnInit();
    };
    CandidateListSearchComponent = tslib_1.__decorate([
        Component({
            providers: [CandidateListGroupItemComponent],
            selector: 'app-candidate-list-search',
            templateUrl: './candidate-list-search.component.html',
            styleUrls: ['./candidate-list-search.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CandidateListGroupItemComponent])
    ], CandidateListSearchComponent);
    return CandidateListSearchComponent;
}());
export { CandidateListSearchComponent };
//# sourceMappingURL=candidate-list-search.component.js.map