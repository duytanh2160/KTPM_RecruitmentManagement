(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// Tutorial from: https://www.techiediaries.com/angular-httpclient/
var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:8000';
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
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _candidatelist_candidatelist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidatelist/candidatelist.component */ "./src/app/candidatelist/candidatelist.component.ts");





var routes = [
    { path: '', component: _candidatelist_candidatelist_component__WEBPACK_IMPORTED_MODULE_4__["CandidatelistComponent"], data: { title: 'Candidate list' } },
    { path: 'Interviewing', component: _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_3__["HelloworldComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-web-template></app-web-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-template/web-template.component */ "./src/app/web-template/web-template.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topnav/topnav.component */ "./src/app/topnav/topnav.component.ts");
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./right-sidebar/right-sidebar.component */ "./src/app/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _candidatelist_candidatelist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./candidatelist/candidatelist.component */ "./src/app/candidatelist/candidatelist.component.ts");
/* harmony import */ var _candidate_list_search_candidate_list_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./candidate-list-search/candidate-list-search.component */ "./src/app/candidate-list-search/candidate-list-search.component.ts");
/* harmony import */ var _import_add_section_import_add_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./import-add-section/import-add-section.component */ "./src/app/import-add-section/import-add-section.component.ts");
/* harmony import */ var _paging_paging_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./paging/paging.component */ "./src/app/paging/paging.component.ts");
/* harmony import */ var _candidate_list_group_item_candidate_list_group_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./candidate-list-group-item/candidate-list-group-item.component */ "./src/app/candidate-list-group-item/candidate-list-group-item.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _string_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./string-filter.pipe */ "./src/app/string-filter.pipe.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_5__["HelloworldComponent"],
                _web_template_web_template_component__WEBPACK_IMPORTED_MODULE_6__["WebTemplateComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _topnav_topnav_component__WEBPACK_IMPORTED_MODULE_8__["TopnavComponent"],
                _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["RightSidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _candidatelist_candidatelist_component__WEBPACK_IMPORTED_MODULE_11__["CandidatelistComponent"],
                _candidate_list_search_candidate_list_search_component__WEBPACK_IMPORTED_MODULE_12__["CandidateListSearchComponent"],
                _import_add_section_import_add_section_component__WEBPACK_IMPORTED_MODULE_13__["ImportAddSectionComponent"],
                _paging_paging_component__WEBPACK_IMPORTED_MODULE_14__["PagingComponent"],
                _candidate_list_group_item_candidate_list_group_item_component__WEBPACK_IMPORTED_MODULE_15__["CandidateListGroupItemComponent"],
                _string_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["StringFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/candidate-list-group-item/candidate-list-group-item.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/candidate-list-group-item/candidate-list-group-item.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .my-pagination /deep/ .ngx-pagination  {\r\n    margin-top:20px;\r\n    position:absolute;\r\n    bottom:0;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, 0);\r\n            transform: translate(-50%, 0);\r\n}\r\n\r\n.list-group{\r\n    height:750px;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWxpc3QtZ3JvdXAtaXRlbS9jYW5kaWRhdGUtbGlzdC1ncm91cC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUtbGlzdC1ncm91cC1pdGVtL2NhbmRpZGF0ZS1saXN0LWdyb3VwLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uICB7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XHJcbn1cclxuXHJcbi5saXN0LWdyb3Vwe1xyXG4gICAgaGVpZ2h0Ojc1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/candidate-list-group-item/candidate-list-group-item.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/candidate-list-group-item/candidate-list-group-item.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Search -->\n<app-candidate-list-search (messageEvent)=\"receiveMessage($event)\"></app-candidate-list-search>\n\n<app-import-add-section></app-import-add-section>\n\n\n<div class=\"list-group\" style=\"margin-top:10px\">\n<div class=\"list-group-item\" *ngFor=\"let cand of candidates | stringFilter : search | paginate: { itemsPerPage: 4, currentPage: p }\"> \n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <a href=\"candidates/info/{{cand.ID}}\">\n        <div class=\"profile-img\">\n          <img src=\"{{cand.Image}}\" alt=\"\">\n        </div>\n      </a>\n    </div>\n    <div class=\"col-sm-10\">\n      <div class=\"row\">\n        <div class=\"col-sm-7\">\n          <h2 class=\"profile-name\"><span>ID : {{cand.ID}}  - {{cand.Fullname}}</span></h2>\n        </div>\n        <div class=\"col-sm-5 d-flex justify-content-between align-items-center\">\n          <div class=\"info\" style=\"margin-top: 15px\"><span>Gender: </span>{{cand.Sex}}</div>\n          <input type=\"checkbox\" class=\"ckb-export\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <div class=\"info\">\n            <div><span>Job:</span> </div>\n            <div><span>Level: </span> Junior</div>\n          </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"info\">\n            <div><span>Skills:</span> a</div>\n            <div style=\"display: inline-block\"><span>Exp. :</span> A</div>\n            <div style=\"display: inline-block; margin-left: 5px\"><span>University:</span>\n              A</div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"info\">\n            <div><span>Source:</span> A</div>\n            <div style=\"display: inline-block\"><span>CV: </span> <a href=\"#\">\n              <i class=\"fa fa-file\"></i>\n            </a></div>\n\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <div class=\"info\">\n            <div><span>Action:</span> Interview</div>\n            <div><span>Result:</span> Fail</div>\n          </div>\n        </div>\n        <div class=\"col-sm-3\">\n          <div class=\"action\">\n            <button class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#editCandidateForm\"><a class=\"fa fa-pencil\"></a></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<pagination-controls class=\"my-pagination text-center\" (pageChange)=\"p = $event\"></pagination-controls>\n</div>"

/***/ }),

/***/ "./src/app/candidate-list-group-item/candidate-list-group-item.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/candidate-list-group-item/candidate-list-group-item.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CandidateListGroupItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateListGroupItemComponent", function() { return CandidateListGroupItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




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
            _this.candidates = res;
        });
    };
    CandidateListGroupItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-list-group-item',
            template: __webpack_require__(/*! ./candidate-list-group-item.component.html */ "./src/app/candidate-list-group-item/candidate-list-group-item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
            styles: [__webpack_require__(/*! ./candidate-list-group-item.component.css */ "./src/app/candidate-list-group-item/candidate-list-group-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CandidateListGroupItemComponent);
    return CandidateListGroupItemComponent;
}());



/***/ }),

/***/ "./src/app/candidate-list-search/candidate-list-search.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/candidate-list-search/candidate-list-search.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS1saXN0LXNlYXJjaC9jYW5kaWRhdGUtbGlzdC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/candidate-list-search/candidate-list-search.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/candidate-list-search/candidate-list-search.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 20px;\">\n    <div class=\"col-sm-10\" style=\"padding-right:0;\">\n        <form>\n            <input [(ngModel)]=\"search\" name=\"search\" (ngModelChange)=\"onSearchSubmit({searchVal : search, jobSearch : job})\" required ngModel id=\"searchBar\" type=\"text\" placeholder=\"Search..\">\n        </form>\n    </div>\n    <div class=\"col-sm-2\" style=\"padding-left:0;\">\n        <button onclick=\"w3_toggle()\" class=\"btn btn-primary infoButton\" style=\"margin-left:10px;\">\n            <i class=\"fa fa-info\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"btn btn-primary\" style=\"float:right;width:100px;height:52px;\"\n                data-toggle=\"modal\" data-target=\"#advSearchCand\">Filter</button>\n    </div>\n  </div>\n\n\n\n  <!-- The AdvSearch Modal -->\n<div class=\"modal fade\" id=\"advSearchCand\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Advance Search</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <label class=\"font-weight-bold\" for=\"job\">Job</label>\n                <select [(ngModel)]=\"job\" name=\"job\" class=\"form-control\" id=\"job\">\n                    <option value=\"\">All</option>\n                    <option value=\"R&D\">R&D</option>\n                    <option value=\"Testing\">Testing</option>\n                    <option value=\"Accountant\">Accountant</option>\n                    <option value=\"Staff\">Staff</option>\n                    <option value=\"Trainee\">Trainee</option>\n                </select>\n                <label class=\"font-weight-bold\" for=\"level\">Level</label>\n                <select class=\"form-control\" id=\"job\">\n                    <option value=\"\">All</option>\n                    <option value=\"Fresher\">Fresher/Entry</option>\n                    <option value=\"Junior\">Junior</option>\n                    <option value=\"Senior\">Senior</option>\n                    <option value=\"Leader\">Leader</option>\n                    <option value=\"Manager\">Manager</option>\n                </select>\n                <label class=\"font-weight-bold\" for=\"level\">Skills</label>\n                <input class=\"form-control\" type=\"text\" id=\"skills\">\n                <label class=\"font-weight-bold\" for=\"stage\">Stage</label>\n                <select class=\"form-control\" id=\"stage\">\n                    <option value=\"\">All</option>\n                    <option value=\"Interviewing\">Interviewing</option>\n                    <option value=\"Offering\">Offering</option>\n                    <option value=\"Probation\">Probation</option>\n                </select>\n                <label class=\"font-weight-bold\" for=\"stage\">Experience year</label>\n                <input class=\"form-control\" type=\"number\" id=\"expYears\" min=\"1\" max=\"30\">\n                <label class=\"font-weight-bold\" for=\"stage\">Result</label>\n                <select class=\"form-control\" id=\"result\">\n                    <option value=\"\">All</option>\n                    <option value=\"null\">Waiting</option>\n                    <option value=\"pass\">Passed</option>\n                    <option value=\"fail\">Failed</option>\n                    <option value=\"null\">Other</option>\n                </select>\n                <label class=\"font-weight-bold\" for=\"stage\">Gender</label>\n                <select required class=\"form-control\" id=\"sex\">\n                    <option value=\"\">All</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"female\">Female</option>\n                    <option value=\"any\">Any</option>\n                </select>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"onSearchSubmit({searchVal : search, jobSearch : job})\">Search</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/candidate-list-search/candidate-list-search.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/candidate-list-search/candidate-list-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: CandidateListSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateListSearchComponent", function() { return CandidateListSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _candidate_list_group_item_candidate_list_group_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidate-list-group-item/candidate-list-group-item.component */ "./src/app/candidate-list-group-item/candidate-list-group-item.component.ts");



var CandidateListSearchComponent = /** @class */ (function () {
    function CandidateListSearchComponent(candidateList) {
        this.candidateList = candidateList;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CandidateListSearchComponent.prototype.ngOnInit = function () {
    };
    CandidateListSearchComponent.prototype.onSearchSubmit = function (search) {
        this.messageEvent.emit(search);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CandidateListSearchComponent.prototype, "messageEvent", void 0);
    CandidateListSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [_candidate_list_group_item_candidate_list_group_item_component__WEBPACK_IMPORTED_MODULE_2__["CandidateListGroupItemComponent"]],
            selector: 'app-candidate-list-search',
            template: __webpack_require__(/*! ./candidate-list-search.component.html */ "./src/app/candidate-list-search/candidate-list-search.component.html"),
            styles: [__webpack_require__(/*! ./candidate-list-search.component.css */ "./src/app/candidate-list-search/candidate-list-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_candidate_list_group_item_candidate_list_group_item_component__WEBPACK_IMPORTED_MODULE_2__["CandidateListGroupItemComponent"]])
    ], CandidateListSearchComponent);
    return CandidateListSearchComponent;
}());



/***/ }),

/***/ "./src/app/candidatelist/candidatelist.component.css":
/*!***********************************************************!*\
  !*** ./src/app/candidatelist/candidatelist.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZWxpc3QvY2FuZGlkYXRlbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/candidatelist/candidatelist.component.html":
/*!************************************************************!*\
  !*** ./src/app/candidatelist/candidatelist.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--ADD CANDIDATE-->\n\n<div class=\"modal fade\" id=\"addCandidateForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n    <div style=\"max-width:900px;\" class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"model-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-header\">\n                <div class=\"picture-container\">\n                    <div class=\"picture\">\n                        <img src=\"../../assets/images/image-select-default.png\"\n                             class=\"picture-src\" id=\"wizardPicturePreview\"\n                             title=\"\">\n                        <input type=\"file\" accept=\"image/*\" id=\"wizard-picture\" class=\"\">\n                    </div>\n                    <h6 style=\"margin-top: 20px;\" class=\"\">Choose Picture</h6>\n\n                </div>\n            </div>\n\n            <div class=\"modal-body\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f.value)\" ngNativeValidate> \n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-9\">\n                                    <label class=\"font-weight-bold\" for=\"Name\">Name</label>\n                                    <input ngModel required type=\"text\" class=\"form-control\" name=\"Fullname\" id=\"Name\" placeholder=\"Name\" required>\n                                </div>\n                                <div class=\"form-group col-md-3\">\n                                    <label class=\"font-weight-bold\" for=\"sex\">Gender</label>\n                                    <select ngModel name=\"Sex\" id=\"sex\" class=\"form-control\" required>\n                                        <option selected></option>\n                                        <option value=\"male\">Male</option>\n                                        <option value=\"female\" required>Female</option>\n                                        <option value=\"other\" required>Other</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <form>\n                                    <label class=\"font-weight-bold\" for=\"birthdayInput\">Birthday</label>\n                                    <input ngModel name=\"BirthDay\" required class=\"form-control\" type=\"text\" datetime=\"yyyy-MM-dd HH:mm:ss\">\n                                </form>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"font-weight-bold\" for=\"inputPhone\">Phone</label>\n                                <input ngModel name=\"PhoneNumber\" type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Input Phone Number\"\n                                       required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"font-weight-bold\" for=\"inputEmail\">Email</label>\n                                <input ngModel name=\"email\" type=\"Email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"example@gmail.com\"\n                                       required>\n                            </div>\n                            <div class=\"form-group col-13\">\n                                <label class=\"font-weight-bold\" for=\"job\">Job</label>\n                                <select name=\"job\" required id=\"candidateJob\" class=\"form-control\">\n                                    <option selected></option>\n                                    <option value=\"developer\">Developer</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"font-weight-bold\" for=\"skill\">Skill</label>\n                                <input name=\"skill\" type=\"text\" class=\"form-control\" id=\"skill\" placeholder=\"Input information about skill\"\n                                       required>\n                            </div>\n                        </div>\n                        <div></div>\n                        <div class=\"form-group col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"font-weight-bold\" for=\"skill\">Level Applied</label>\n                                <select required id=\"candidateLevel\" class=\"form-control\">\n                                    <option selected></option>\n                                    <option value=\"fresher\">Fresher</option>\n                                </select>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label class=\"font-weight-bold\" for=\"inputExp\">Exp</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"inputExp\">\n                                </div>\n                                <div class=\"form-group col-md-6\">\n                                    <label class=\"font-weight-bold\" for=\"inputUniversity\">University</label>\n                                    <input id=\"inputUniversity\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-6\">\n                                    <label class=\"font-weight-bold\" for=\"Source\">Source</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"Source\">\n                                </div>\n                                <div class=\"form-group col-md-6\">\n                                    <label class=\"font-weight-bold\">Add CV</label>\n                                    <div class=\"custom-file\">\n                                            <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile01\"\n                                              aria-describedby=\"inputGroupFileAddon01\">\n                                            <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-12\">\n                                    <label class=\"font-weight-bold\" for=\"inputAction\">Action</label>\n                                    <select id=\"inputAction\" class=\"form-control\">\n                                        <option selected>None</option>\n                                        <option>Interview</option>\n                                        <option>Offering</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-col\">\n                                <label class=\"font-weight-bold\" for=\"inputNote\">Note</label>\n                                <textarea style=\"height:125px\" type=\"text\" rows=\"5\" cols=\"45\" class=\"form-control\" id=\"inputNote\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"modal-footer\">\n                        <input type=\"submit\" value=\"Save\" class=\"btn btn-success\">\n                        <!-- <input type=\"submit\" onclick=\"//addCandidate()\" class=\"btn btn-success\">Save</button> -->\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<app-candidate-list-group-item></app-candidate-list-group-item>\n\n\n\n\n<!--EDIT CANDIDATE-->\n<div class=\"modal fade\" id=\"editCandidateForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n     aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"model-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-header\">\n                <div class=\"picture-container\">\n                    <div class=\"picture\">\n                        <img src=\"\"\n                             alt=\"Smiley face\" class=\"picture-src\" id=\"wizardPicturePreview2\"\n                             title=\"\">\n                        <input type=\"file\" id=\"wizard-picture2\" class=\"\">\n                    </div>\n                    <h6 style=\"margin-top: 20px;\" class=\"\">Choose Picture</h6>\n\n                </div>\n            </div>\n\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-9\">\n                            <label for=\"Name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"Name\" placeholder=\"Name\">\n                        </div>\n                        <div class=\"form-group col-md-3\">\n                            <label for=\"sex\">Gender</label>\n                            <select id=\"sex\" class=\"form-control\">\n                                <option selected>Choose...</option>\n                                <option>Male</option>\n                                <option>Female</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <form>\n                            <label for=\"birthdayInput\">Birthday</label>\n                            <input class=\"form-control\" type=\"date\" name=\"\" id=\"\" >\n                        </form>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputPhone\">Phone</label>\n                        <input type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"Input Phone Number\"\n                               required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail\">Email</label>\n                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"example@gmail.com\"\n                               required>\n                    </div>\n                    <div class=\"form-group col-13\">\n                        <label for=\"job\">Job</label>\n                        <select id=\"job\" class=\"form-control\">\n                            <option selected>Choose...</option>\n                            <option>Java Developer</option>\n                            <option>Project Manager</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"skill\">Skill</label>\n                        <input type=\"text\" class=\"form-control\" id=\"skill\" placeholder=\"Input information about skill\"\n                               required>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"skill\">Level Applied</label>\n                        <input type=\"text\" class=\"form-control\" id=\"level\" placeholder=\"Input level applied\"\n                               required>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputExp\">Exp</label>\n                            <input type=\"text\" class=\"form-control\" id=\"inputExp\">\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <label for=\"inputUniversity\">University</label>\n                            <input id=\"inputUniversity\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-6\">\n                            <label for=\"Source\">Source</label>\n                            <input type=\"text\" class=\"form-control\" id=\"Source\">\n                        </div>\n                        <div class=\"form-group col-6\">\n                            <label>Add CV</label>\n                            <input type=\"file\" class=\"\">\n                        </div>\n                    </div>\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-6\">\n                            <label for=\"inputAction\">Action</label>\n                            <select id=\"inputAction\" class=\"form-control\">\n                                <option selected>None</option>\n                                <option>Interview</option>\n                                <option>Offering</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-6\">\n                            <label for=\"inputAction\">Result</label>\n                            <select id=\"inputAction\" class=\"form-control\">\n                                <option selected>Waiting</option>\n                                <option>Fail</option>\n                                <option>Pass</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-col\">\n                        <label for=\"inputNote\">Note</label>\n                        <textarea type=\"text\" rows=\"5\" cols=\"45\" class=\"form-control\" id=\"inputNote\"></textarea>\n                    </div>\n                </form>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" onclick=\"notify()\" class=\"btn btn-success\">Save</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/candidatelist/candidatelist.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/candidatelist/candidatelist.component.ts ***!
  \**********************************************************/
/*! exports provided: CandidatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatelistComponent", function() { return CandidatelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



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
    CandidatelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidatelist',
            template: __webpack_require__(/*! ./candidatelist.component.html */ "./src/app/candidatelist/candidatelist.component.html"),
            styles: [__webpack_require__(/*! ./candidatelist.component.css */ "./src/app/candidatelist/candidatelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CandidatelistComponent);
    return CandidatelistComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <span>@2019 Dounetworks All Rights Reserved</span>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/helloworld/helloworld.component.css":
/*!*****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbGxvd29ybGQvaGVsbG93b3JsZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.html":
/*!******************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <title>Upload Images to Server</title>\n    <meta charset=\"utf-8\">\n    \n</head>\n<body>\n\n<h1>Upload Image</h1>\n \n<form action=\"http://localhost:8000/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input type=\"file\" accept=\"image/*\" name=\"photo\" >\n        <input type=\"submit\" value=\"upload\" onsubmit=\"return false\">\n</form>\n            \n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.ts":
/*!****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.ts ***!
  \****************************************************/
/*! exports provided: HelloworldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloworldComponent", function() { return HelloworldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelloworldComponent = /** @class */ (function () {
    function HelloworldComponent() {
    }
    HelloworldComponent.prototype.ngOnInit = function () {
    };
    HelloworldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-helloworld',
            template: __webpack_require__(/*! ./helloworld.component.html */ "./src/app/helloworld/helloworld.component.html"),
            styles: [__webpack_require__(/*! ./helloworld.component.css */ "./src/app/helloworld/helloworld.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelloworldComponent);
    return HelloworldComponent;
}());



/***/ }),

/***/ "./src/app/import-add-section/import-add-section.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/import-add-section/import-add-section.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltcG9ydC1hZGQtc2VjdGlvbi9pbXBvcnQtYWRkLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/import-add-section/import-add-section.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/import-add-section/import-add-section.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top: 80px;\">\n    <div class=\"col-sm-12\">\n        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addCandidateForm\"\n                style=\"float:right;width:200px;height:52px;\" onclick=\"openCandidateForm()\">Add</button>\n        <button class=\"btn btn-primary mr-2\" id=\"btn-export\" style=\"float:right;width:200px;height:52px;\"\n                onclick=\"Export()\">Export</button>\n        <button class=\"btn btn-success mr-2\" id=\"btn-export-accept\" style=\"float:right;width:200px;height:52px;\"\n                onclick=\"ExportAccept()\">Export</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/import-add-section/import-add-section.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/import-add-section/import-add-section.component.ts ***!
  \********************************************************************/
/*! exports provided: ImportAddSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportAddSectionComponent", function() { return ImportAddSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImportAddSectionComponent = /** @class */ (function () {
    function ImportAddSectionComponent() {
    }
    ImportAddSectionComponent.prototype.ngOnInit = function () {
    };
    ImportAddSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-import-add-section',
            template: __webpack_require__(/*! ./import-add-section.component.html */ "./src/app/import-add-section/import-add-section.component.html"),
            styles: [__webpack_require__(/*! ./import-add-section.component.css */ "./src/app/import-add-section/import-add-section.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImportAddSectionComponent);
    return ImportAddSectionComponent;
}());



/***/ }),

/***/ "./src/app/paging/paging.component.css":
/*!*********************************************!*\
  !*** ./src/app/paging/paging.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZy9wYWdpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/paging/paging.component.html":
/*!**********************************************!*\
  !*** ./src/app/paging/paging.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:50px;\">\n    <div class=\"col-sm-12\">\n        <div class=\"pagination\">\n            <a href=\"javascript:previousPage()\">&laquo;</a>\n            <div id=\"pagination-contents\">\n                \n            </div>\n            <a href=\"javascript:nextPage()\">&raquo;</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/paging/paging.component.ts":
/*!********************************************!*\
  !*** ./src/app/paging/paging.component.ts ***!
  \********************************************/
/*! exports provided: PagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingComponent", function() { return PagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



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
    PagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paging',
            template: __webpack_require__(/*! ./paging.component.html */ "./src/app/paging/paging.component.html"),
            styles: [__webpack_require__(/*! ./paging.component.css */ "./src/app/paging/paging.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PagingComponent);
    return PagingComponent;
}());



/***/ }),

/***/ "./src/app/right-sidebar/right-sidebar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/right-sidebar/right-sidebar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JpZ2h0LXNpZGViYXIvcmlnaHQtc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/right-sidebar/right-sidebar.component.html":
/*!************************************************************!*\
  !*** ./src/app/right-sidebar/right-sidebar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-sidebar w3-bar-block w3-card w3-animate-right \" style=\"display:none;width:22%;right:0\" id=\"mySideBar\">\n  <button class=\"w3-bar-item w3-button w3-large\" onclick=\"w3_toggle()\" style=\"float:right;\">\n      ×</button>\n  <ul class=\"list-unstyled components\">\n      <!--CANDIDATE-HISTORY-->\n      <li class=\"active\">\n          <div style=\"text-align: center\">\n              <img src=\"../../assets/images/avatar.jpg\" class=\"profileImg\" alt=\"\">\n              <div style=\"margin-top:10px;\">\n                  <span style=\"font-size: 160%;\">Nguyen Huy Vuong Nam</span>\n              </div>\n              <div style=\"font-size: 100%;\">\n                  <label>Job: </label><span> Java</span>\n              </div>\n          </div>\n          <div class=\"card\" style=\"border:0;\">\n              <!--Tab Select-->\n              <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link active show\" id=\"detail-tab\" data-toggle=\"tab\" href=\"#detail\" role=\"tab\" aria-controls=\"detail\" aria-selected=\"true\">Detail</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" id=\"history-tab\" data-toggle=\"tab\" href=\"#history\" role=\"tab\" aria-controls=\"history\" aria-selected=\"true\">History</a>\n                  </li>\n              </ul>\n              <div class=\"card-body\">\n                  <!--Tab Content-->\n                  <div class=\"tab-content\" id=\"detailTabContent\">\n                      <div class=\"tab-pane fade in active show\" id=\"detail\">\n                          <div class=\"tab-item\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Name: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candName\">Nguyen Huy Vuong Nam</span>\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Gender: </span>\n                                  </div>\n                                  <div class=\"col-md-7\">\n                                      <span id=\"candGender\">Female</span>\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Birthday: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candBirthday\"></span>\n                                      JAN 01 1970\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Phone: </span>\n                                  </div>\n                                  <div class=\"col-md-7\">\n                                      <span id=\"candPhone\"></span>0776946434\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Email: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candEmail\"></span>huydeftry@gmail.com\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Address: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candAddress\"></span>396/18C10/1\n                                      Truong Chinh P14 Q12\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Job: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candJob\"></span>Java Developer\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Level: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candPos\"></span>Senior\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Skill: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candSkill\"></span>Java,\n                                      ReactJS, NodeJS\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Exp: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candExp\"></span>4 years\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>University: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candUniversity\"></span>HSU\n                                      University\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Source: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candSource\"></span>itviet.net\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Action: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candAction\"></span>Interview\n                                  </div>\n                              </div>\n                              <div class=\"row\">\n                                  <div class=\"col-md-5 itemLabel\">\n                                      <span>Result: </span>\n                                  </div>\n                                  <div class=\"col-md-7\"><span id=\"candResult\"></span>Pass\n                                  </div>\n                              </div>\n                              <div><span class=\"itemLabel\">Evaluation</span>\n                                  <p>\n                                              <textarea name=\"noteHR\" rows=\"5\" cols=\"28\" disabled=\"\" style=\"margin-top:10px;width:105%;\" placeholder=\"Hello...\"></textarea>\n                                  </p>\n                              </div>\n                          </div>\n                      </div>\n\n                      <div class=\"tab-pane fade\" id=\"history\">\n                          <h3>Today</h3>\n                          <div class=\"changed#1\">\n                              <label>01:02:03</label>\n                              <div class=\"info-edited\">\n                                  <img src=\"\" style=\"border-radius:50%\" width=\"50\" alt=\"\">\n                                  <label>Username: </label> <span>Thu Dao</span> <br>\n                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                  <label>Name: </label><label> \"Nu\"</label> → <label>\"Nam\"</label>\n                              </div>\n                          </div>\n\n                          <div class=\"change#2\">\n                              <label>00:30:02</label>\n                              <div class=\"info-edited\">\n                                  <img src=\"\" style=\"border-radius:50%\" width=\"50\" alt=\"\">\n                                  <label>Username: </label> <span>Thu Dao</span> <br>\n                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                  <label>Gender: </label><label> \"Male\"</label> → <label>\"Female\"</label>\n                              </div>\n                          </div>\n\n\n                          <h3>16/09/2019</h3>\n                          <div class=\"change#3\">\n                              <label>09:55:43</label>\n                              <div class=\"info-edited\">\n                                  <img src=\"\" style=\"border-radius:50%\" width=\"50\" alt=\"\">\n                                  <label>Username: </label> <span>Thuan Tran</span> <br>\n                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                                  <label>Job: </label><label> \"R&amp;D\"</label> → <label>\"Java\n                                  Developer\"</label>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/right-sidebar/right-sidebar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/right-sidebar/right-sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RightSidebarComponent = /** @class */ (function () {
    function RightSidebarComponent() {
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
    };
    RightSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-right-sidebar',
            template: __webpack_require__(/*! ./right-sidebar.component.html */ "./src/app/right-sidebar/right-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./right-sidebar.component.css */ "./src/app/right-sidebar/right-sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RightSidebarComponent);
    return RightSidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" class=\"active\">\n  <div id=\"logo\" style=\"width: 250px;height: 74px;\">\n      <a href=\"/\"><img src=\"assets/images/logo.jpg\"></a>\n  </div>\n\n  <ul class=\"list-unstyled components\">\n      <!--CANDIDATE MANAGEMENT-->\n      <li class=\"active\">\n          <a href=\"#candidateSubmenu\" data-toggle=\"collapse\" aria-expanded=\"true\" class=\"dropdown-toggle\">Candidate\n              Management</a>\n          <ul class=\"collapse list-unstyled\" id=\"candidateSubmenu\">\n              <!--bỏ cái \"show\" đi nếu không muốn list không tự show khi vừa vào trang-->\n              <li>\n                  <a href=\"/\">Candidate list</a>\n              </li>\n              <li>\n                  <a href=\"/Interviewing.html\">Interviewing</a>\n              </li>\n              <li>\n                  <a href=\"/Offering.html\">Offering</a>\n              </li>\n              <li>\n                  <a href=\"/Probation.html\">Probation</a>\n              </li>\n          </ul>\n      </li>\n\n      <!--JOB-->\n      <li>\n          <a href=\"Job.html\">Job</a>\n      </li>\n\n      <!--ACCOUNT-->\n      <li>\n          <a href=\"Account.html\">Account</a>\n      </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/string-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/string-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: StringFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function() { return StringFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (value, q) {
        if (!q) {
            return value;
        }
        //filter Job if q.jobSearch != undefined
        if (q.jobSearch !== undefined) {
            value = value.filter(function (item) { return -1 < item.Fullname.toLowerCase().indexOf(q.jobSearch.toLowerCase().trim()); });
        }
        //filter ID and Fullname
        if (q.searchVal !== undefined) {
            value = value.filter(function (item) { return -1 < item.Fullname.toLowerCase().indexOf(q.searchVal.toLowerCase().trim())
                || -1 < item.ID.toString().indexOf(q.searchVal.toLowerCase().trim()); });
        }
        return value;
    };
    StringFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());



/***/ }),

/***/ "./src/app/topnav/topnav.component.css":
/*!*********************************************!*\
  !*** ./src/app/topnav/topnav.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcG5hdi90b3BuYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topnav/topnav.component.html":
/*!**********************************************!*\
  !*** ./src/app/topnav/topnav.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\n  <p id=\"title\">Candidate list</p>\n  <div id=\"navRightSide\">\n      <img id=\"avatar\" src=\"assets/images/avatar.jpg\">\n      <p id=\"helloLabel\">Hello, Admin !</p>\n      <a href=\"javascript:logOut();\">Log out</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/topnav/topnav.component.ts":
/*!********************************************!*\
  !*** ./src/app/topnav/topnav.component.ts ***!
  \********************************************/
/*! exports provided: TopnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopnavComponent", function() { return TopnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopnavComponent = /** @class */ (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    TopnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topnav',
            template: __webpack_require__(/*! ./topnav.component.html */ "./src/app/topnav/topnav.component.html"),
            styles: [__webpack_require__(/*! ./topnav.component.css */ "./src/app/topnav/topnav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopnavComponent);
    return TopnavComponent;
}());



/***/ }),

/***/ "./src/app/web-template/web-template.component.css":
/*!*********************************************************!*\
  !*** ./src/app/web-template/web-template.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYi10ZW1wbGF0ZS93ZWItdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/web-template/web-template.component.html":
/*!**********************************************************!*\
  !*** ./src/app/web-template/web-template.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"wrapper\">\n  \n      <!-- Sidebar -->\n      <app-sidebar></app-sidebar>\n      <div id=\"content\">\n          <div class=\"icon-bar\">\n              <a id=\"sidebarCollapse\"><img src=\"assets/images/arrow_button.png\" height=\"42\" width=\"42\" style=\"transform: scaleX(-1);\"></a>\n          </div>\n          <div class=\"container-fluid\" style=\"padding-left:0px;padding-right:0px;\">\n              <app-topnav></app-topnav>\n  \n              <!--Main page content put inside here-->\n              <div class=\"wrapper\">\n                <div class=\"container\">\n                    <router-outlet></router-outlet> \n                </div>\n                  <!--End of Container-->\n                  \n                  <!--Right SideBar-->\n                  <app-right-sidebar></app-right-sidebar>\n  \n              </div>\n  \n          </div>\n      </div>\n  </div>\n  \n  <app-footer></app-footer>\n\n  \n\n  "

/***/ }),

/***/ "./src/app/web-template/web-template.component.ts":
/*!********************************************************!*\
  !*** ./src/app/web-template/web-template.component.ts ***!
  \********************************************************/
/*! exports provided: WebTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTemplateComponent", function() { return WebTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebTemplateComponent = /** @class */ (function () {
    function WebTemplateComponent() {
    }
    WebTemplateComponent.prototype.ngOnInit = function () {
    };
    WebTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-web-template',
            template: __webpack_require__(/*! ./web-template.component.html */ "./src/app/web-template/web-template.component.html"),
            styles: [__webpack_require__(/*! ./web-template.component.css */ "./src/app/web-template/web-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebTemplateComponent);
    return WebTemplateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ForStudyFiles\Nodeprojects\DemoProject\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map