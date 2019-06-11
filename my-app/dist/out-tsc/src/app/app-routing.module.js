import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { CandidatelistComponent } from './candidate-list/candidatelist/candidatelist.component';
var routes = [
    { path: '', component: CandidatelistComponent, data: { title: 'Candidate list' } },
    { path: 'Interviewing', component: HelloworldComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map