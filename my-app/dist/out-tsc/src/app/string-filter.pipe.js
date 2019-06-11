import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
/**
 * A simple string filter, since Angular does not yet have a filter pipe built in.
 */
var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (value, q) {
        var _this = this;
        if (!q) {
            return value;
        }
        //filter Job if q.jobSearch != undefined
        if (q.jobSearch !== undefined) {
            value = value.filter(function (item) { return -1 < _this.lowerCaseThisList(item.PositionApply.split(',')).indexOf(q.jobSearch.toLowerCase().trim()); });
        }
        //filter ID and Fullname
        if (q.searchVal !== undefined) {
            value = value.filter(function (item) { return -1 < item.Fullname.toLowerCase().indexOf(q.searchVal.toLowerCase().trim())
                || -1 < item.ID.toString().indexOf(q.searchVal.toLowerCase().trim()); });
        }
        return value;
    };
    StringFilterPipe.prototype.lowerCaseThisList = function (list) {
        for (var i = 0; i < list.length; i++) {
            list[i] = list[i].toLowerCase();
        }
        return list;
    };
    StringFilterPipe = tslib_1.__decorate([
        Pipe({
            name: 'stringFilter'
        })
    ], StringFilterPipe);
    return StringFilterPipe;
}());
export { StringFilterPipe };
//# sourceMappingURL=string-filter.pipe.js.map