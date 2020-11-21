"use strict";

var __decorate = this && this.__decorate || function(e, t, o, n) {
    var r, p = arguments.length, u = p < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (r = e[c]) && (u = (p < 3 ? r(u) : p > 3 ? r(t, o, u) : r(t, o)) || u);
    return p > 3 && u && Object.defineProperty(t, o, u), u;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), max = 5, InputComponent = function() {
    function e() {
        this.items = [ {
            value: 10
        }, {
            value: 20
        }, {
            value: 30
        }, {
            value: 40
        }, {
            value: 50
        } ], this.rows = 8;
    }
    return e.prototype.addABunch = function(e) {
        for (var t = 0; t < e; t++) this.items.push({
            value: ++max
        });
    }, e;
}();

InputComponent = __decorate([ core_1.Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: [ "./input.component.scss" ]
}) ], InputComponent), exports.InputComponent = InputComponent;