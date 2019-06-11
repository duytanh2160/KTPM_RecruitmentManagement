import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
var PagingComponent = /** @class */ (function () {
    function PagingComponent(apiService) {
        this.apiService = apiService;
        this.currentPage = 1;
    }
    PagingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getPagination().subscribe(function (res) {
            var pagination = document.getElementById("pagination-contents");
            pagination.innerHTML = "";
            _this.Count = res[0].Count;
            var pageNumber = _this.Count / 6;
            if (_this.Count % 6 > 0) {
                pageNumber += 1;
            }
            for (var i = 1; i <= pageNumber; i++) {
                pagination.innerHTML += "<a href='javascript:getCandidates(" + i + ")'>" + i + "</a>";
                if (i == _this.currentPage) {
                    pagination.getElementsByTagName("a")[i - 1].className += " active";
                }
            }
        });
    };
    PagingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-paging',
            templateUrl: './paging.component.html',
            styleUrls: ['./paging.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], PagingComponent);
    return PagingComponent;
}());
export { PagingComponent };
//# sourceMappingURL=paging.component.js.map