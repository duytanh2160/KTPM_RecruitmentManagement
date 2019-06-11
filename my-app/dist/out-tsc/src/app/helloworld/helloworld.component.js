import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HelloworldComponent = /** @class */ (function () {
    function HelloworldComponent() {
        this.JobList = [
            { id: 1, name: 'R&D' },
            { id: 2, name: 'Testing' },
            { id: 3, name: 'Accountant' },
            { id: 4, name: 'Staff' },
            { id: 5, name: 'Trainee' }
        ];
    }
    HelloworldComponent.prototype.ngOnInit = function () {
    };
    HelloworldComponent = tslib_1.__decorate([
        Component({
            selector: 'app-helloworld',
            templateUrl: './helloworld.component.html',
            styleUrls: ['./helloworld.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HelloworldComponent);
    return HelloworldComponent;
}());
export { HelloworldComponent };
//# sourceMappingURL=helloworld.component.js.map