"use strict";

var __decorate = this && this.__decorate || function(e, o, r, t) {
    var n, p = arguments.length, a = p < 3 ? o : null === t ? t = Object.getOwnPropertyDescriptor(o, r) : t;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, o, r, t); else for (var l = e.length - 1; l >= 0; l--) (n = e[l]) && (a = (p < 3 ? n(a) : p > 3 ? n(o, r, a) : n(o, r)) || a);
    return p > 3 && a && Object.defineProperty(o, r, a), a;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var core_1 = require("@angular/core"), ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload"), URL = "https://evening-anchorage-3159.herokuapp.com/api/", FormUploadComponent = function() {
    function e() {
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: URL,
            isHTML5: !0
        }), this.hasBaseDropZoneOver = !1, this.hasAnotherDropZoneOver = !1;
    }
    return e.prototype.fileOverBase = function(e) {
        this.hasBaseDropZoneOver = e;
    }, e.prototype.fileOverAnother = function(e) {
        this.hasAnotherDropZoneOver = e;
    }, e;
}();

FormUploadComponent = __decorate([ core_1.Component({
    selector: "app-form-upload",
    templateUrl: "./form-upload.component.html",
    styleUrls: [ "./form-upload.component.scss" ]
}) ], FormUploadComponent), exports.FormUploadComponent = FormUploadComponent;