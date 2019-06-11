import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ChangeDetectionStrategy } from "@angular/core";
var CandidateListGroupItemComponent = /** @class */ (function () {
    function CandidateListGroupItemComponent(apiService) {
        this.apiService = apiService;
        this.nameSearch = '';
        this.config = {
            id: 'advanced',
            itemsPerPage: 4,
            currentPage: 1
        };
        this.searchCandidates("");
    }
    CandidateListGroupItemComponent.prototype.ngOnInit = function () {
    };
    CandidateListGroupItemComponent.prototype.searchCandidates = function (searchStr) {
        var _this = this;
        if (searchStr == undefined) {
            searchStr = "";
        }
        this.apiService.searchCandidates(searchStr).subscribe(function (res) {
            _this.candidates = res;
        });
    };
    CandidateListGroupItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-candidate-list-group-item',
            templateUrl: './candidate-list-group-item.component.html',
            styleUrls: ['./candidate-list-group-item.component.css'],
            changeDetection: ChangeDetectionStrategy.Default
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], CandidateListGroupItemComponent);
    return CandidateListGroupItemComponent;
}());
export { CandidateListGroupItemComponent };
//# sourceMappingURL=candidate-list-group-item.component.js.map