import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ChangeDetectionStrategy } from "@angular/core";
var CandidateListGroupItemComponent = /** @class */ (function () {
    function CandidateListGroupItemComponent(apiService) {
        this.apiService = apiService;
        this.searchCandidates("");
    }
    CandidateListGroupItemComponent.prototype.ngOnInit = function () {
    };
    CandidateListGroupItemComponent.prototype.receiveMessage = function ($event) {
        this.search = $event;
    };
    CandidateListGroupItemComponent.prototype.searchCandidates = function (searchStr) {
        var _this = this;
        if (searchStr == undefined) {
            searchStr = "";
        }
        this.apiService.searchCandidates(searchStr).subscribe(function (res) {
            var _loop_1 = function (cand) {
                _this.apiService.getPositionApply(cand.ID).subscribe(function (pos) {
                    cand.PositionApply = pos;
                });
            };
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var cand = res_1[_i];
                _loop_1(cand);
            }
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