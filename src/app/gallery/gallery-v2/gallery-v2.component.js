"use strict";

var __decorate = this && this.__decorate || function(e, o, t, r) {
    var n, l = arguments.length, c = l < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, t) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, o, t, r); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (c = (l < 3 ? n(c) : l > 3 ? n(o, t, c) : n(o, t)) || c);
    return l > 3 && c && Object.defineProperty(o, t, c), c;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), GalleryTwoComponent = function() {
    function e() {}
    return e.prototype.ngOnInit = function() {}, e;
}();

GalleryTwoComponent = __decorate([ core_1.Component({
    selector: "ms-gallery-v2",
    templateUrl: "./gallery-v2-component.html",
    styleUrls: [ "./gallery-v2-component.scss" ],
    encapsulation: core_1.ViewEncapsulation.None
}) ], GalleryTwoComponent), exports.GalleryTwoComponent = GalleryTwoComponent;