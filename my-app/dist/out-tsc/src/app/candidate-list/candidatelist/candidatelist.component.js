import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
var CandidatelistComponent = /** @class */ (function () {
    function CandidatelistComponent(apiService) {
        this.apiService = apiService;
        this.JobList = [
            { id: 1, name: 'R&D' },
            { id: 2, name: 'Testing' },
            { id: 3, name: 'Accountant' },
            { id: 4, name: 'Staff' },
            { id: 5, name: 'Trainee' }
        ];
    }
    CandidatelistComponent.prototype.ngOnInit = function () {
    };
    CandidatelistComponent.prototype.onFileChangeEvent = function (event) {
        this.files = event.target.files;
        console.log(this.files);
    };
    CandidatelistComponent.prototype.onSubmit = function (cand, ID, photo) {
        var _this = this;
        cand.PositionApply = ID;
        console.log(photo);
        console.log(cand);
        var file = new FormData();
        file.append('photo', photo);
        this.apiService.uploadAvatarImage(file).subscribe(function (res) {
            cand.Image = res.path;
            console.log("After upload image - ", cand);
            _this.apiService.addCandidate(cand).subscribe(function (res) {
                console.log(JSON.stringify(cand));
                console.log(JSON.stringify(res));
            });
        }, function (err) { return console.log(err); });
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