"use strict";
exports.__esModule = true;
exports.getWidget = void 0;
;
function getWidget(s) {
    if (s == 'array') {
        var pnt = /** @class */ (function () {
            function pnt() {
            }
            pnt.prototype.add = function (obj) {
                this.slf = obj;
            };
            ;
            return pnt;
        }());
        var p = new pnt;
        p.x = 10;
        p.y = 12;
        p.add(p);
        return [p, p, p];
    }
    return [];
}
exports.getWidget = getWidget;
;
exports["default"] = getWidget;
