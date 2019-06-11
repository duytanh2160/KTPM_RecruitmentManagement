import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
var CandidatelistComponent = /** @class */ (function () {
    function CandidatelistComponent(apiService) {
        this.apiService = apiService;
    }
    CandidatelistComponent.prototype.ngOnInit = function () {
    };
    CandidatelistComponent.prototype.addCandidate = function () {
        alert("WOW");
    };
    CandidatelistComponent.prototype.onSubmit = function (cand) {
        this.apiService.addCandidate(cand).subscribe(function (res) {
            console.log(JSON.stringify(cand));
            console.log(JSON.stringify(res));
        });
    };
    CandidatelistComponent = tslib_1.__decorate([
        Component({
            selector: 'app-candidatelist',
            templateUrl: './candidatelist.component.html',
            styleUrls: ['./candidatelist.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], CandidatelistComponent);
    return CandidatelistComponent;
}());
export { CandidatelistComponent };
//# sourceMappingURL=candidatelist.component.js.map