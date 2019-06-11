import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Tutorial from: https://www.techiediaries.com/angular-httpclient/
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = window.location.origin.replace("7777", "8000");
    }
    //Get Candidate list
    //@params: page,offset
    //@return: Candidate[]
    ApiService.prototype.getCandidates = function (page, offset) {
        if (null == page) {
            page = "";
        }
        if (null == offset) {
            offset = "";
        }
        return this.httpClient.get(this.apiURL + "/candidates?page=" + page + "&offset=" + offset);
    };
    ApiService.prototype.searchCandidates = function (searchStr) {
        return this.httpClient.get(this.apiURL + "/candidates/search?searchStr=" + searchStr);
    };
    ApiService.prototype.getPagination = function () {
        return this.httpClient.get(this.apiURL + "/candidates/count");
    };
    ApiService.prototype.addCandidate = function (cand) {
        return this.httpClient.post(this.apiURL + "/candidates/add", cand);
    };
    ApiService.prototype.getPositionApply = function (ID) {
        return this.httpClient.get(this.apiURL + "/candidates/apply?ID=" + ID);
    };
    ApiService.prototype.uploadAvatarImage = function (file) {
        return this.httpClient.post(this.apiURL + "/upload", file);
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map