(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./src/app/gallery/gallery-v1/gallery-v1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gallery/gallery-v1/gallery-v1.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryOneComponent", function() { return GalleryOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");






function GalleryOneComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blue Sky");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var id_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/images/unsplash/", id_r1, ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gallery image: ", id_r1, "");
} }
var GalleryOneComponent = /** @class */ (function () {
    function GalleryOneComponent() {
        this.images = [];
        this.num = 1;
        for (this.num; this.num <= 9; this.num += 1) {
            this.images.push(this.num);
        }
    }
    GalleryOneComponent.prototype.ngOnInit = function () { };
    GalleryOneComponent.ɵfac = function GalleryOneComponent_Factory(t) { return new (t || GalleryOneComponent)(); };
    GalleryOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryOneComponent, selectors: [["ms-gallery-v1"]], decls: 8, vars: 1, consts: [[1, "mt-0"], [1, "mb-2"], ["fxLayout", "row wrap"], ["fxFlex.md", "33.33", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", "class", "mat-pad mb-1", 4, "ngFor", "ngForOf"], ["fxFlex.md", "33.33", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", 1, "mat-pad", "mb-1"], [1, "hover-parent"], ["alt", "Card image cap", 3, "src"], [1, "hover-overlay"], [1, "hover-overlay-content"], ["mat-line", ""]], template: function GalleryOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery Simple");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleryOneComponent_div_7_Template, 9, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS12MS9nYWxsZXJ5LXYxLWNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
    return GalleryOneComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-gallery-v1',
                templateUrl: './gallery-v1-component.html',
                styleUrls: ['./gallery-v1-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery-v2/gallery-v2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gallery/gallery-v2/gallery-v2.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryTwoComponent", function() { return GalleryTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");




var GalleryTwoComponent = /** @class */ (function () {
    function GalleryTwoComponent() {
    }
    GalleryTwoComponent.prototype.ngOnInit = function () {
    };
    GalleryTwoComponent.ɵfac = function GalleryTwoComponent_Factory(t) { return new (t || GalleryTwoComponent)(); };
    GalleryTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryTwoComponent, selectors: [["ms-gallery-v2"]], decls: 295, vars: 0, consts: [[1, "mt-0"], [1, "mb-2"], ["fxLayout", "row wrap", 1, "row"], ["fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxFlex.md", "50", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", 1, "example-2", "card", "mat-pad", "mb-1"], [1, "wrapper", 2, "background", "url('assets/images/curve.jpg') center / cover no-repeat"], [1, "header"], [1, "date"], [1, "day"], [1, "month"], [1, "year"], [1, "menu-content"], ["href", "#", 1, "fa", "fa-bookmark-o"], ["href", "#", 1, "fa", "fa-heart-o"], ["href", "#", 1, "fa", "fa-comment-o"], [1, "data"], [1, "content"], [1, "author"], [1, "title"], ["href", "#"], [1, "text"], ["href", "#", 1, "button"], [1, "wrapper", 2, "background", "url('assets/images/notfound.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/login.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/man.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/coridoor.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/shutter.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/night.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/green.jpg') center / cover no-repeat"], [1, "wrapper", 2, "background", "url('assets/images/flowers.jpg') center / cover no-repeat"]], template: function GalleryTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery with Background Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Even the tiny frog is spoilt by its mouth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, eveniet.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "An unjust law is no law at all.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Leave the world a little better than you found it.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "The more a man judges, the less he loves.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "The mind is the reality. You are what you think.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "That which is man-made can be unmade.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Dissent is the mark of freedom.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "War is a crime which involves all other crimes.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "12");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Aug");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "2016");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "ul", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "18");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h1", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "The only true wisdom is knowing that you know nothing.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nihil.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Read more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n.card .menu-content {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.card .menu-content li {\n  display: inline-block;\n}\n.card .menu-content a {\n  color: #fff;\n}\n.card .menu-content span {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 10px;\n  font-weight: 700;\n  font-family: 'Open Sans';\n  transform: translate(-50%, 0);\n}\n.card .wrapper {\n  background-color: #fff;\n  min-height: 540px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2);\n}\n.card .wrapper:hover .data {\n  transform: translateY(0);\n}\n.card .data {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  transform: translateY(calc(70px + 1em));\n  transition: transform 0.3s;\n}\n.card .data .content {\n  padding: 1em;\n  position: relative;\n  z-index: 1;\n}\n.card .author {\n  font-size: 12px;\n}\n.card .title {\n  margin-top: 10px;\n}\n.card .text {\n  height: 70px;\n  margin: 0;\n}\n.card input[type='checkbox'] {\n  display: none;\n}\n.card input[type='checkbox']:checked + .menu-content {\n  transform: translateY(-60px);\n}\n.example-1 .wrapper {\n  background: url(http://res.cloudinary.com/thedailybeast/image/upload/v1492110403/articles/2016/08/12/whose-gold-medal-is-worth-the-most/160811-glasser-olympic-medal-tease_mvemzf.jpg) center/cover no-repeat;\n}\n.example-1 .date {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #77d7b9;\n  color: #fff;\n  padding: 0.8em;\n}\n.example-1 .date span {\n  display: block;\n  text-align: center;\n}\n.example-1 .date .day {\n  font-weight: 700;\n  font-size: 24px;\n  text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18);\n}\n.example-1 .date .month {\n  text-transform: uppercase;\n}\n.example-1 .date .month,\n.example-1 .date .year {\n  font-size: 12px;\n}\n.example-1 .content {\n  background-color: #fff;\n  box-shadow: 0 5px 30px 10px rgba(0, 0, 0, 0.3);\n}\n.example-1 .title a {\n  color: #807f7f;\n}\n.example-1 .menu-button {\n  position: absolute;\n  z-index: 999;\n  top: 16px;\n  right: 16px;\n  width: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n.example-1 .menu-button span {\n  width: 5px;\n  height: 5px;\n  background-color: #807f7f;\n  color: #807f7f;\n  position: relative;\n  display: inline-block;\n  border-radius: 50%;\n}\n.example-1 .menu-button span::after, .example-1 .menu-button span::before {\n  content: '';\n  display: block;\n  width: 5px;\n  height: 5px;\n  background-color: currentColor;\n  position: absolute;\n  border-radius: 50%;\n}\n.example-1 .menu-button span::before {\n  left: -10px;\n}\n.example-1 .menu-button span::after {\n  right: -10px;\n}\n.example-1 .menu-content {\n  text-align: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: -1;\n  transition: transform 0.3s;\n  transform: translateY(0);\n}\n.example-1 .menu-content li {\n  width: 33.333333%;\n  float: left;\n  background-color: #77d7b9;\n  height: 60px;\n  position: relative;\n}\n.example-1 .menu-content a {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 24px;\n}\n.example-1 .menu-content span {\n  top: -10px;\n}\n.example-2 .wrapper:hover .menu-content span {\n  transform: translate(-50%, -10px);\n  opacity: 1;\n}\n.example-2 .header {\n  color: #fff;\n  padding: 1em;\n}\n.example-2 .header .date {\n  float: left;\n  font-size: 12px;\n}\n.example-2 .menu-content {\n  float: right;\n}\n.example-2 .menu-content li {\n  margin: 0 5px;\n  position: relative;\n}\n.example-2 .menu-content span {\n  transition: all 0.3s;\n  opacity: 0;\n}\n.example-2 .data {\n  color: #fff;\n  transform: translateY(calc(70px + 4em));\n}\n.example-2 .title a {\n  color: #fff;\n}\n.example-2 .button {\n  display: block;\n  width: 100px;\n  margin: 2em auto 1em;\n  text-align: center;\n  font-size: 12px;\n  color: #fff;\n  line-height: 1;\n  position: relative;\n  font-weight: 700;\n}\n.example-2 .button::after {\n  content: '\\2192';\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  transform: translate(0, -50%);\n  transition: all 0.3s;\n}\n.example-2 .button:hover::after {\n  transform: translate(5px, -50%);\n  opacity: 1;\n}\n@media (max-width: 991px) {\n  .text {\n    opacity: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LXYyL0M6XFxVc2Vyc1xcS2FyaW1cXERlc2t0b3BcXHBpbVdlYlxcQmFoYVYxL3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LXYyXFxnYWxsZXJ5LXYyLWNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktdjIvZ2FsbGVyeS12Mi1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBWTtBQVFaO0VBRVEsU0FBUztFQUNULFVBQVU7RUFDVixxQkFBcUI7QUNQN0I7QURHQTtFQU1ZLHFCQUFxQjtBQ0xqQztBRERBO0VBU1ksV0FaQTtBQ1FaO0FETEE7RUFZWSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE1BQU07RUFDTixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUNIekM7QURmQTtFQXNCUSxzQkF6Qkk7RUEwQkosaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEVBNUJJO0FDeUJaO0FEdkJBO0VBNkJnQix3QkFBd0I7QUNGeEM7QUQzQkE7RUFrQ1Esa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLDBCQUEwQjtBQ0hsQztBRG5DQTtFQXdDWSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7QUNEdEI7QUR6Q0E7RUE4Q1EsZUFBZTtBQ0R2QjtBRDdDQTtFQWlEUSxnQkFBZ0I7QUNBeEI7QURqREE7RUFvRFEsWUFBWTtFQUNaLFNBQVM7QUNDakI7QUR0REE7RUF3RFEsYUFBYTtBQ0VyQjtBRDFEQTtFQTJEUSw0QkFBNEI7QUNHcEM7QURFQTtFQUVRLDZNQUErTTtBQ0F2TjtBREZBO0VBS1Esa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AseUJBNUVTO0VBNkVULFdBNUVJO0VBNkVKLGNBQWM7QUNDdEI7QURYQTtFQVlZLGNBQWM7RUFDZCxrQkFBa0I7QUNHOUI7QURoQkE7RUFnQlksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0Q0FwRkE7QUN3Rlo7QUR0QkE7RUFxQlkseUJBQXlCO0FDS3JDO0FEMUJBOztFQXlCWSxlQUFlO0FDTTNCO0FEL0JBO0VBNkJRLHNCQWhHSTtFQWlHSiw4Q0FoR0k7QUNzR1o7QURwQ0E7RUFrQ1ksY0FBMkI7QUNNdkM7QUR4Q0E7RUFzQ1Esa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQ012QjtBRGxEQTtFQThDWSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUFzQztFQUN0QyxjQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQ1E5QjtBRDVEQTtFQXVEZ0IsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FDU2xDO0FEdEVBO0VBZ0VnQixXQUFXO0FDVTNCO0FEMUVBO0VBbUVnQixZQUFZO0FDVzVCO0FEOUVBO0VBd0VRLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLDBCQUEwQjtFQUMxQix3QkFBd0I7QUNVaEM7QUR6RkE7RUFpRlksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkF2Sks7RUF3SkwsWUFBWTtFQUNaLGtCQUFrQjtBQ1k5QjtBRGpHQTtFQXdGWSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZUFBZTtBQ2EzQjtBRHpHQTtFQStGWSxVQUFVO0FDY3RCO0FEUkE7RUFLb0IsaUNBQWlDO0VBQ2pDLFVBQVU7QUNPOUI7QURiQTtFQVlRLFdBcExJO0VBcUxKLFlBQVk7QUNLcEI7QURsQkE7RUFlWSxXQUFXO0VBQ1gsZUFBZTtBQ08zQjtBRHZCQTtFQW9CUSxZQUFZO0FDT3BCO0FEM0JBO0VBc0JZLGFBQWE7RUFDYixrQkFBa0I7QUNTOUI7QURoQ0E7RUEwQlksb0JBQW9CO0VBQ3BCLFVBQVU7QUNVdEI7QURyQ0E7RUErQlEsV0F2TUk7RUF3TUosdUNBQXVDO0FDVS9DO0FEMUNBO0VBb0NZLFdBNU1BO0FDc05aO0FEOUNBO0VBd0NRLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FyTkk7RUFzTkosY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUNVeEI7QUQxREE7RUFrRFksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isb0JBQW9CO0FDWWhDO0FEcEVBO0VBNERnQiwrQkFBK0I7RUFDL0IsVUFBVTtBQ1kxQjtBRE5BO0VBQ0k7SUFDSSxVQUFVO0VDU2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktdjIvZ2FsbGVyeS12Mi1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDQwMCw3MDApO1xuLy8gVmFyaWFibGVzXG4kcmVnYWwtYmx1ZTogIzAzNDM3ODtcbiRzYW4tanVhbjogIzJkNGU2ODtcbiRiZXJtdWRhOiAjNzdkN2I5O1xuJHdoaXRlOiAjZmZmO1xuJGJsYWNrOiAjMDAwO1xuLy8gQmFzZSBzdHlsZXNcbi5jYXJkIHtcbiAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLndyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU0MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoJGJsYWNrLCAwLjMpLCAwIDE1cHggMTJweCByZ2JhKCRibGFjaywgMC4yKTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyg3MHB4ICsgMWVtKSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hdXRob3Ige1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLm1lbnUtY29udGVudCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7XG4gICAgfVxufVxuXG4vLyBGaXJzdCBleGFtcGxlIHN0eWxlc1xuLmV4YW1wbGUtMSB7XG4gICAgLndyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS90aGVkYWlseWJlYXN0L2ltYWdlL3VwbG9hZC92MTQ5MjExMDQwMy9hcnRpY2xlcy8yMDE2LzA4LzEyL3dob3NlLWdvbGQtbWVkYWwtaXMtd29ydGgtdGhlLW1vc3QvMTYwODExLWdsYXNzZXItb2x5bXBpYy1tZWRhbC10ZWFzZV9tdmVtemYuanBnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5kYXRlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZXJtdWRhO1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwLjhlbTtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGF5IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgkYmxhY2ssIDAuMTgpO1xuICAgICAgICB9XG4gICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5tb250aCxcbiAgICAgICAgLnllYXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDEwcHggcmdiYSgkYmxhY2ssIDAuMyk7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0ZW4oJGJsYWNrLCA1MCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tZW51LWJ1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkYmxhY2ssIDUwJSk7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkYmxhY2ssIDUwJSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAmOjphZnRlcixcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5tZW51LWNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMy4zMzMzMzMlO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmVybXVkYTtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBTZWNvbmQgZXhhbXBsZSBzdHlsZXNcbi5leGFtcGxlLTIge1xuICAgIC53cmFwcGVyIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwcHgpO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWVudS1jb250ZW50IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kYXRhIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoNzBweCArIDRlbSkpO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJ1xcMjE5Mic7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNTAlKTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLnRleHQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDAsNzAwKTtcbi5jYXJkIC5tZW51LWNvbnRlbnQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmNhcmQgLm1lbnUtY29udGVudCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmQgLm1lbnUtY29udGVudCBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkIC5tZW51LWNvbnRlbnQgc3BhbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNhcmQgLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiA1NDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQgLndyYXBwZXI6aG92ZXIgLmRhdGEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5jYXJkIC5kYXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyg3MHB4ICsgMWVtKSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xufVxuXG4uY2FyZCAuZGF0YSAuY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZCAuYXV0aG9yIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2FyZCAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZCAudGV4dCB7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhcmQgaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkICsgLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCk7XG59XG5cbi5leGFtcGxlLTEgLndyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS90aGVkYWlseWJlYXN0L2ltYWdlL3VwbG9hZC92MTQ5MjExMDQwMy9hcnRpY2xlcy8yMDE2LzA4LzEyL3dob3NlLWdvbGQtbWVkYWwtaXMtd29ydGgtdGhlLW1vc3QvMTYwODExLWdsYXNzZXItb2x5bXBpYy1tZWRhbC10ZWFzZV9tdmVtemYuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xufVxuXG4uZXhhbXBsZS0xIC5kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2Q3Yjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjhlbTtcbn1cblxuLmV4YW1wbGUtMSAuZGF0ZSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtMSAuZGF0ZSAuZGF5IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLmV4YW1wbGUtMSAuZGF0ZSAubW9udGgge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZXhhbXBsZS0xIC5kYXRlIC5tb250aCxcbi5leGFtcGxlLTEgLmRhdGUgLnllYXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5leGFtcGxlLTEgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uZXhhbXBsZS0xIC50aXRsZSBhIHtcbiAgY29sb3I6ICM4MDdmN2Y7XG59XG5cbi5leGFtcGxlLTEgLm1lbnUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4YW1wbGUtMSAubWVudS1idXR0b24gc3BhbiB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA3ZjdmO1xuICBjb2xvcjogIzgwN2Y3ZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmV4YW1wbGUtMSAubWVudS1idXR0b24gc3Bhbjo6YWZ0ZXIsIC5leGFtcGxlLTEgLm1lbnUtYnV0dG9uIHNwYW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5leGFtcGxlLTEgLm1lbnUtYnV0dG9uIHNwYW46OmJlZm9yZSB7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4uZXhhbXBsZS0xIC5tZW51LWJ1dHRvbiBzcGFuOjphZnRlciB7XG4gIHJpZ2h0OiAtMTBweDtcbn1cblxuLmV4YW1wbGUtMSAubWVudS1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xufVxuXG4uZXhhbXBsZS0xIC5tZW51LWNvbnRlbnQgbGkge1xuICB3aWR0aDogMzMuMzMzMzMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2Q3Yjk7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhhbXBsZS0xIC5tZW51LWNvbnRlbnQgYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmV4YW1wbGUtMSAubWVudS1jb250ZW50IHNwYW4ge1xuICB0b3A6IC0xMHB4O1xufVxuXG4uZXhhbXBsZS0yIC53cmFwcGVyOmhvdmVyIC5tZW51LWNvbnRlbnQgc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMHB4KTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmV4YW1wbGUtMiAuaGVhZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmV4YW1wbGUtMiAuaGVhZGVyIC5kYXRlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmV4YW1wbGUtMiAubWVudS1jb250ZW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZXhhbXBsZS0yIC5tZW51LWNvbnRlbnQgbGkge1xuICBtYXJnaW46IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5leGFtcGxlLTIgLm1lbnUtY29udGVudCBzcGFuIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5leGFtcGxlLTIgLmRhdGEge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoNzBweCArIDRlbSkpO1xufVxuXG4uZXhhbXBsZS0yIC50aXRsZSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5leGFtcGxlLTIgLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG8gMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5leGFtcGxlLTIgLmJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiAnXFwyMTkyJztcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmV4YW1wbGUtMiAuYnV0dG9uOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTUwJSk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAudGV4dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
    return GalleryTwoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-gallery-v2',
                templateUrl: './gallery-v2-component.html',
                styleUrls: ['./gallery-v2-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery-v3/gallery-v3.component.ts":
/*!************************************************************!*\
  !*** ./src/app/gallery/gallery-v3/gallery-v3.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryThreeComponent", function() { return GalleryThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");



var GalleryThreeComponent = /** @class */ (function () {
    function GalleryThreeComponent() {
    }
    GalleryThreeComponent.prototype.ngOnInit = function () {
    };
    GalleryThreeComponent.ɵfac = function GalleryThreeComponent_Factory(t) { return new (t || GalleryThreeComponent)(); };
    GalleryThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryThreeComponent, selectors: [["ms-gallery-v3"]], decls: 397, vars: 0, consts: [[1, "mt-0"], [1, "content", "p-2"], [1, "grid", "clearfix"], [1, "effect-lily"], ["src", "assets/images/img/12.jpg", "alt", "img12"], ["href", "#"], ["src", "assets/images/img/1.jpg", "alt", "img1"], [1, "effect-sadie"], ["src", "assets/images/img/2.jpg", "alt", "img02"], ["src", "assets/images/img/14.jpg", "alt", "img14"], [1, "effect-honey"], ["src", "assets/images/img/4.jpg", "alt", "img04"], ["src", "assets/images/img/5.jpg", "alt", "img05"], [1, "effect-layla"], ["src", "assets/images/img/6.jpg", "alt", "img06"], ["src", "assets/images/img/3.jpg", "alt", "img03"], [1, "effect-zoe"], ["src", "assets/images/img/25.jpg", "alt", "img25"], [1, "icon-links"], [1, "icon-heart"], [1, "icon-eye"], [1, "icon-paper-clip"], [1, "description"], ["src", "assets/images/img/26.jpg", "alt", "img26"], [1, "effect-oscar"], ["src", "assets/images/img/9.jpg", "alt", "img09"], ["src", "assets/images/img/10.jpg", "alt", "img10"], [1, "effect-marley"], ["src", "assets/images/img/11.jpg", "alt", "img11"], [1, "effect-ruby"], ["src", "assets/images/img/13.jpg", "alt", "img13"], [1, "effect-roxy"], ["src", "assets/images/img/15.jpg", "alt", "img15"], ["src", "assets/images/img/1.jpg", "alt", "img01"], [1, "effect-bubba"], ["src", "assets/images/img/16.jpg", "alt", "img16"], [1, "effect-romeo"], ["src", "assets/images/img/17.jpg", "alt", "img17"], ["src", "assets/images/img/18.jpg", "alt", "img18"], [1, "effect-dexter"], ["src", "assets/images/img/19.jpg", "alt", "img19"], [1, "effect-sarah"], ["src", "assets/images/img/20.jpg", "alt", "img20"], [1, "effect-chico"], [1, "effect-milo"]], template: function GalleryThreeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gallery Third Party");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lily");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nice ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lily");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lily likes to play with crayons and pencils");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nice ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lily");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lily likes to play with crayons and pencils");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sadie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figure", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Holy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sadie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sadie never took her eyes off me. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "She had a dark soul.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "figure", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Holy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sadie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sadie never took her eyes off me. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "She had a dark soul.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Honey");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "figure", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Dreamy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Honey");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "figure", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Dreamy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Honey");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Layla");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "figure", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Crazy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Layla");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "When Layla appears, she brings an eternal summer along.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "figure", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Crazy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Layla");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "When Layla appears, she brings an eternal summer along.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Zoe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "figure", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Creative ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Zoe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Zoe never had the patience of her sisters. She deliberately punched the bear in his face.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "figure", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Creative ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Zoe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Zoe never had the patience of her sisters. She deliberately punched the bear in his face.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Oscar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "figure", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Warm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Oscar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Oscar is a decent man. He used to clean porches with pleasure.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "figure", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Warm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Oscar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Oscar is a decent man. He used to clean porches with pleasure.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Marley");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "figure", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Sweet ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Marley");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Marley tried to convince her but she was not interested.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "figure", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Sweet ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Marley");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Marley tried to convince her but she was not interested.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Ruby");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "figure", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Glowing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Ruby");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Ruby did not need any help. Everybody knew that.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "figure", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Glowing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Ruby");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Ruby did not need any help. Everybody knew that.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Roxy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "figure", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Charming ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Roxy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Roxy was my best friend. She'd cross any border for me.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "figure", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Charming ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Roxy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Roxy was my best friend. She'd cross any border for me.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Bubba");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "figure", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Fresh ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Bubba");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Bubba likes to appear out of thin air.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "figure", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "img", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Fresh ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Bubba");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Bubba likes to appear out of thin air.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Romeo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "figure", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Wild ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Romeo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Romeo never knows what he wants. He seemed to be very cross about something.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "figure", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Wild ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Romeo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Romeo never knows what he wants. He seemed to be very cross about something.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Dexter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "figure", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Strange ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Dexter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Dexter had his own strange way. You could watch him training ants.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "figure", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Strange ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Dexter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Dexter had his own strange way. You could watch him training ants.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Sarah");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "figure", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Free ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Sarah");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Sarah likes to watch clouds. She's quite depressed.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "figure", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "img", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Free ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Sarah");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Sarah likes to watch clouds. She's quite depressed.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Chico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Silly ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Chico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Chico's main fear was missing the morning bus.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "figure", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Silly ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Chico");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "Chico's main fear was missing the morning bus.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Milo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "figure", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Faithful ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Milo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Milo went to the woods. He took a fun ride and never came back.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "figure", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "img", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "figcaption");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Faithful ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Milo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Milo went to the woods. He took a fun ride and never came back.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "View more");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"]], styles: [".grid {\n  position: relative;\n  margin: 0 auto;\n  padding: 1em 0 4em;\n  max-width: 1000px;\n  list-style: none;\n  text-align: center;\n}\n\n/* Common style */\n\n.grid figure {\n  position: relative;\n  float: left;\n  overflow: hidden;\n  margin: 10px 1%;\n  min-width: 320px;\n  max-width: 480px;\n  max-height: 360px;\n  width: 48%;\n  background: #3085a3;\n  text-align: center;\n  cursor: pointer;\n}\n\n.grid figure img {\n  position: relative;\n  display: block;\n  min-height: 100%;\n  max-width: 100%;\n  opacity: 0.8;\n}\n\n.grid figure figcaption {\n  padding: 2em;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1.25em;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.grid figure figcaption::before,\n.grid figure figcaption::after {\n  pointer-events: none;\n}\n\n.grid figure figcaption,\n.grid figure figcaption > a {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/* Anchor will cover the whole item by default */\n\n/* For some effects it will show as a button */\n\n.grid figure figcaption > a {\n  z-index: 1000;\n  text-indent: 200%;\n  white-space: nowrap;\n  font-size: 0;\n  opacity: 0;\n}\n\n.grid figure h2 {\n  word-spacing: -0.15em;\n  font-weight: 300;\n}\n\n.grid figure h2 span {\n  font-weight: 800;\n}\n\n.grid figure h2,\n.grid figure p {\n  margin: 0;\n}\n\n.grid figure p {\n  letter-spacing: 1px;\n  font-size: 68.5%;\n}\n\n/* Individual effects */\n\n/*---------------*/\n\n/***** Lily *****/\n\n/*---------------*/\n\nfigure.effect-lily img {\n  max-width: none;\n  width: calc(100% + 50px);\n  opacity: 0.7;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-40px, 0, 0);\n}\n\nfigure.effect-lily figcaption {\n  text-align: left;\n}\n\nfigure.effect-lily figcaption > div {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 2em;\n  width: 100%;\n  height: 50%;\n}\n\nfigure.effect-lily h2,\nfigure.effect-lily p {\n  transform: translate3d(0, 40px, 0);\n}\n\nfigure.effect-lily h2 {\n  transition: transform 0.35s;\n}\n\nfigure.effect-lily p {\n  color: rgba(255, 255, 255, 0.8);\n  opacity: 0;\n  transition: opacity 0.2s, transform 0.35s;\n}\n\nfigure.effect-lily:hover img,\nfigure.effect-lily:hover p {\n  opacity: 1;\n}\n\nfigure.effect-lily:hover img,\nfigure.effect-lily:hover h2,\nfigure.effect-lily:hover p {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-lily:hover p {\n  transition-delay: 0.05s;\n  transition-duration: 0.35s;\n}\n\n/*---------------*/\n\n/***** Sadie *****/\n\n/*---------------*/\n\nfigure.effect-sadie figcaption::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to bottom, rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);\n  content: '';\n  opacity: 0;\n  transform: translate3d(0, 50%, 0);\n}\n\nfigure.effect-sadie h2 {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  color: #484c61;\n  transition: transform 0.35s, color 0.35s;\n  transform: translate3d(0, -50%, 0);\n}\n\nfigure.effect-sadie figcaption::before,\nfigure.effect-sadie p {\n  transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.effect-sadie p {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 2em;\n  width: 100%;\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\nfigure.effect-sadie:hover h2 {\n  color: #fff;\n  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);\n}\n\nfigure.effect-sadie:hover figcaption::before,\nfigure.effect-sadie:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Roxy *****/\n\n/*---------------*/\n\nfigure.effect-roxy {\n  background: linear-gradient(45deg, #ff89e9 0%, #05abe0 100%);\n}\n\nfigure.effect-roxy img {\n  max-width: none;\n  width: calc(100% + 60px);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-50px, 0, 0);\n}\n\nfigure.effect-roxy figcaption::before {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  bottom: 30px;\n  left: 30px;\n  border: 1px solid #fff;\n  content: '';\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-20px, 0, 0);\n}\n\nfigure.effect-roxy figcaption {\n  padding: 3em;\n  text-align: left;\n}\n\nfigure.effect-roxy h2 {\n  padding: 30% 0 10px 0;\n}\n\nfigure.effect-roxy p {\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-10px, 0, 0);\n}\n\nfigure.effect-roxy:hover img {\n  opacity: 0.7;\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-roxy:hover figcaption::before,\nfigure.effect-roxy:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Bubba *****/\n\n/*---------------*/\n\nfigure.effect-bubba {\n  background: #9e5406;\n}\n\nfigure.effect-bubba img {\n  opacity: 0.7;\n  transition: opacity 0.35s;\n}\n\nfigure.effect-bubba:hover img {\n  opacity: 0.4;\n}\n\nfigure.effect-bubba figcaption::before,\nfigure.effect-bubba figcaption::after {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  bottom: 30px;\n  left: 30px;\n  content: '';\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.effect-bubba figcaption::before {\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: scale(0, 1);\n}\n\nfigure.effect-bubba figcaption::after {\n  border-right: 1px solid #fff;\n  border-left: 1px solid #fff;\n  transform: scale(1, 0);\n}\n\nfigure.effect-bubba h2 {\n  padding-top: 30%;\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0);\n}\n\nfigure.effect-bubba p {\n  padding: 20px 2.5em;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, 20px, 0);\n}\n\nfigure.effect-bubba:hover figcaption::before,\nfigure.effect-bubba:hover figcaption::after {\n  opacity: 1;\n  transform: scale(1);\n}\n\nfigure.effect-bubba:hover h2,\nfigure.effect-bubba:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Romeo *****/\n\n/*---------------*/\n\nfigure.effect-romeo {\n  perspective: 1000px;\n}\n\nfigure.effect-romeo img {\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, 0, 300px);\n}\n\nfigure.effect-romeo:hover img {\n  opacity: 0.6;\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-romeo figcaption::before,\nfigure.effect-romeo figcaption::after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  height: 1px;\n  background: #fff;\n  content: '';\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-50%, -50%, 0);\n}\n\nfigure.effect-romeo:hover figcaption::before {\n  opacity: 0.5;\n  transform: translate3d(-50%, -50%, 0) rotate(45deg);\n}\n\nfigure.effect-romeo:hover figcaption::after {\n  opacity: 0.5;\n  transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n}\n\nfigure.effect-romeo h2,\nfigure.effect-romeo p {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  transition: transform 0.35s;\n}\n\nfigure.effect-romeo h2 {\n  transform: translate3d(0, -50%, 0) translate3d(0, -150%, 0);\n}\n\nfigure.effect-romeo p {\n  padding: 0.25em 2em;\n  transform: translate3d(0, -50%, 0) translate3d(0, 150%, 0);\n}\n\nfigure.effect-romeo:hover h2 {\n  transform: translate3d(0, -50%, 0) translate3d(0, -100%, 0);\n}\n\nfigure.effect-romeo:hover p {\n  transform: translate3d(0, -50%, 0) translate3d(0, 100%, 0);\n}\n\n/*---------------*/\n\n/***** Layla *****/\n\n/*---------------*/\n\nfigure.effect-layla {\n  background: #18a367;\n}\n\nfigure.effect-layla img {\n  height: 390px;\n}\n\nfigure.effect-layla figcaption {\n  padding: 3em;\n}\n\nfigure.effect-layla figcaption::before,\nfigure.effect-layla figcaption::after {\n  position: absolute;\n  content: '';\n  opacity: 0;\n}\n\nfigure.effect-layla figcaption::before {\n  top: 50px;\n  right: 30px;\n  bottom: 50px;\n  left: 30px;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n  transform: scale(0, 1);\n  transform-origin: 0 0;\n}\n\nfigure.effect-layla figcaption::after {\n  top: 30px;\n  right: 50px;\n  bottom: 30px;\n  left: 50px;\n  border-right: 1px solid #fff;\n  border-left: 1px solid #fff;\n  transform: scale(1, 0);\n  transform-origin: 100% 0;\n}\n\nfigure.effect-layla h2 {\n  padding-top: 26%;\n  transition: transform 0.35s;\n}\n\nfigure.effect-layla p {\n  padding: 0.5em 2em;\n  text-transform: none;\n  opacity: 0;\n  transform: translate3d(0, -10px, 0);\n}\n\nfigure.effect-layla img,\nfigure.effect-layla h2 {\n  transform: translate3d(0, -30px, 0);\n}\n\nfigure.effect-layla img,\nfigure.effect-layla figcaption::before,\nfigure.effect-layla figcaption::after,\nfigure.effect-layla p {\n  transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.effect-layla:hover img {\n  opacity: 0.7;\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-layla:hover figcaption::before,\nfigure.effect-layla:hover figcaption::after {\n  opacity: 1;\n  transform: scale(1);\n}\n\nfigure.effect-layla:hover h2,\nfigure.effect-layla:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-layla:hover figcaption::after,\nfigure.effect-layla:hover h2,\nfigure.effect-layla:hover p,\nfigure.effect-layla:hover img {\n  transition-delay: 0.15s;\n}\n\n/*---------------*/\n\n/***** Honey *****/\n\n/*---------------*/\n\nfigure.effect-honey {\n  background: #4a3753;\n}\n\nfigure.effect-honey img {\n  opacity: 0.9;\n  transition: opacity 0.35s;\n}\n\nfigure.effect-honey:hover img {\n  opacity: 0.5;\n}\n\nfigure.effect-honey figcaption::before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  background: #fff;\n  content: '';\n  transform: translate3d(0, 10px, 0);\n}\n\nfigure.effect-honey h2 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 1em 1.5em;\n  width: 100%;\n  text-align: left;\n  transform: translate3d(0, -30px, 0);\n}\n\nfigure.effect-honey h2 i {\n  font-style: normal;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, -30px, 0);\n}\n\nfigure.effect-honey figcaption::before,\nfigure.effect-honey h2 {\n  transition: transform 0.35s;\n}\n\nfigure.effect-honey:hover figcaption::before,\nfigure.effect-honey:hover h2,\nfigure.effect-honey:hover h2 i {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Oscar *****/\n\n/*---------------*/\n\nfigure.effect-oscar {\n  background: linear-gradient(45deg, #22682a 0%, #9b4a1b 40%, #3a342a 100%);\n}\n\nfigure.effect-oscar img {\n  opacity: 0.9;\n  transition: opacity 0.35s;\n}\n\nfigure.effect-oscar figcaption {\n  padding: 3em;\n  background-color: rgba(58, 52, 42, 0.7);\n  transition: background-color 0.35s;\n}\n\nfigure.effect-oscar figcaption::before {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  bottom: 30px;\n  left: 30px;\n  border: 1px solid #fff;\n  content: '';\n}\n\nfigure.effect-oscar h2 {\n  margin: 20% 0 10px 0;\n  transition: transform 0.35s;\n  transform: translate3d(0, 100%, 0);\n}\n\nfigure.effect-oscar figcaption::before,\nfigure.effect-oscar p {\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: scale(0);\n}\n\nfigure.effect-oscar:hover h2 {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-oscar:hover figcaption::before,\nfigure.effect-oscar:hover p {\n  opacity: 1;\n  transform: scale(1);\n}\n\nfigure.effect-oscar:hover figcaption {\n  background-color: rgba(58, 52, 42, 0);\n}\n\nfigure.effect-oscar:hover img {\n  opacity: 0.4;\n}\n\n/*---------------*/\n\n/***** Marley *****/\n\n/*---------------*/\n\nfigure.effect-marley figcaption {\n  text-align: right;\n}\n\nfigure.effect-marley h2,\nfigure.effect-marley p {\n  position: absolute;\n  right: 30px;\n  left: 30px;\n  padding: 10px 0;\n}\n\nfigure.effect-marley p {\n  bottom: 30px;\n  line-height: 1.5;\n  transform: translate3d(0, 100%, 0);\n}\n\nfigure.effect-marley h2 {\n  top: 30px;\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0);\n}\n\nfigure.effect-marley:hover h2 {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-marley h2::after {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  height: 4px;\n  background: #fff;\n  content: '';\n  transform: translate3d(0, 40px, 0);\n}\n\nfigure.effect-marley h2::after,\nfigure.effect-marley p {\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.effect-marley:hover h2::after,\nfigure.effect-marley:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Ruby *****/\n\n/*---------------*/\n\nfigure.effect-ruby {\n  background-color: #17819c;\n}\n\nfigure.effect-ruby img {\n  opacity: 0.7;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: scale(1.15);\n}\n\nfigure.effect-ruby:hover img {\n  opacity: 0.5;\n  transform: scale(1);\n}\n\nfigure.effect-ruby h2 {\n  margin-top: 20%;\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0);\n}\n\nfigure.effect-ruby p {\n  margin: 1em 0 0;\n  padding: 3em;\n  border: 1px solid #fff;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale(1.1);\n}\n\nfigure.effect-ruby:hover h2 {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-ruby:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0) scale(1);\n}\n\n/*---------------*/\n\n/***** Milo *****/\n\n/*---------------*/\n\nfigure.effect-milo {\n  background: #2e5d5a;\n}\n\nfigure.effect-milo img {\n  max-width: none;\n  width: calc(100% + 60px);\n  opacity: 1;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-30px, 0, 0) scale(1.12);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\nfigure.effect-milo:hover img {\n  opacity: 0.5;\n  transform: translate3d(0, 0, 0) scale(1);\n}\n\nfigure.effect-milo h2 {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  padding: 1em 1.2em;\n}\n\nfigure.effect-milo p {\n  padding: 0 10px 0 0;\n  width: 50%;\n  border-right: 1px solid #fff;\n  text-align: right;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-40px, 0, 0);\n}\n\nfigure.effect-milo:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Dexter *****/\n\n/*---------------*/\n\nfigure.effect-dexter {\n  background: linear-gradient(to bottom, #258dc8 0%, #683c13 100%);\n}\n\nfigure.effect-dexter img {\n  transition: opacity 0.35s;\n}\n\nfigure.effect-dexter:hover img {\n  opacity: 0.4;\n}\n\nfigure.effect-dexter figcaption::after {\n  position: absolute;\n  right: 30px;\n  bottom: 30px;\n  left: 30px;\n  height: calc(50% - 30px);\n  border: 7px solid #fff;\n  content: '';\n  transition: transform 0.35s;\n  transform: translate3d(0, -100%, 0);\n}\n\nfigure.effect-dexter:hover figcaption::after {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-dexter figcaption {\n  padding: 3em;\n  text-align: left;\n}\n\nfigure.effect-dexter p {\n  position: absolute;\n  right: 60px;\n  bottom: 60px;\n  left: 60px;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(0, -100px, 0);\n}\n\nfigure.effect-dexter:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Sarah *****/\n\n/*---------------*/\n\nfigure.effect-sarah {\n  background: #42b078;\n}\n\nfigure.effect-sarah img {\n  max-width: none;\n  width: calc(100% + 20px);\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(-10px, 0, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\nfigure.effect-sarah:hover img {\n  opacity: 0.4;\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-sarah figcaption {\n  text-align: left;\n}\n\nfigure.effect-sarah h2 {\n  position: relative;\n  overflow: hidden;\n  padding: 0.5em 0;\n}\n\nfigure.effect-sarah h2::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  content: '';\n  transition: transform 0.35s;\n  transform: translate3d(-100%, 0, 0);\n}\n\nfigure.effect-sarah:hover h2::after {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-sarah p {\n  padding: 1em 0;\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n  transform: translate3d(100%, 0, 0);\n}\n\nfigure.effect-sarah:hover p {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n\n/*---------------*/\n\n/***** Zoe *****/\n\n/*---------------*/\n\nfigure.effect-zoe figcaption {\n  top: auto;\n  bottom: 0;\n  padding: 1em;\n  height: 3.75em;\n  background: #fff;\n  color: #3c4a50;\n  transition: transform 0.35s;\n  transform: translate3d(0, 100%, 0);\n}\n\nfigure.effect-zoe h2 {\n  float: left;\n}\n\nfigure.effect-zoe p.icon-links a {\n  float: right;\n  color: #3c4a50;\n  font-size: 1.4em;\n}\n\nfigure.effect-zoe:hover p.icon-links a:hover,\nfigure.effect-zoe:hover p.icon-links a:focus {\n  color: #252d31;\n}\n\nfigure.effect-zoe p.description {\n  position: absolute;\n  bottom: 8em;\n  padding: 2em;\n  color: #fff;\n  text-transform: none;\n  font-size: 90%;\n  opacity: 0;\n  transition: opacity 0.35s;\n  -webkit-backface-visibility: hidden;\n  /* Fix for Chrome 37.0.2062.120 (Mac) */\n}\n\nfigure.effect-zoe h2,\nfigure.effect-zoe p.icon-links a {\n  transition: transform 0.35s;\n  transform: translate3d(0, 200%, 0);\n}\n\nfigure.effect-zoe p.icon-links a span::before {\n  display: inline-block;\n  padding: 8px 10px;\n  font-family: 'feathericons';\n  speak: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-eye::before {\n  content: '\\e000';\n}\n\n.icon-paper-clip::before {\n  content: '\\e001';\n}\n\n.icon-heart::before {\n  content: '\\e024';\n}\n\nfigure.effect-zoe h2 {\n  display: inline-block;\n}\n\nfigure.effect-zoe:hover p.description {\n  opacity: 1;\n}\n\nfigure.effect-zoe:hover figcaption,\nfigure.effect-zoe:hover h2,\nfigure.effect-zoe:hover p.icon-links a {\n  transform: translate3d(0, 0, 0);\n}\n\nfigure.effect-zoe:hover h2 {\n  transition-delay: 0.05s;\n}\n\nfigure.effect-zoe:hover p.icon-links a:nth-child(3) {\n  transition-delay: 0.1s;\n}\n\nfigure.effect-zoe:hover p.icon-links a:nth-child(2) {\n  transition-delay: 0.15s;\n}\n\nfigure.effect-zoe:hover p.icon-links a:first-child {\n  transition-delay: 0.2s;\n}\n\n/*---------------*/\n\n/***** Chico *****/\n\n/*---------------*/\n\nfigure.effect-chico img {\n  transition: opacity 0.35s, transform 0.35s;\n  transform: scale(1.12);\n}\n\nfigure.effect-chico:hover img {\n  opacity: 0.5;\n  transform: scale(1);\n}\n\nfigure.effect-chico figcaption {\n  padding: 3em;\n}\n\nfigure.effect-chico figcaption::before {\n  position: absolute;\n  top: 30px;\n  right: 30px;\n  bottom: 30px;\n  left: 30px;\n  border: 1px solid #fff;\n  content: '';\n  transform: scale(1.1);\n}\n\nfigure.effect-chico figcaption::before,\nfigure.effect-chico p {\n  opacity: 0;\n  transition: opacity 0.35s, transform 0.35s;\n}\n\nfigure.effect-chico h2 {\n  padding: 20% 0 20px 0;\n}\n\nfigure.effect-chico p {\n  margin: 0 auto;\n  max-width: 200px;\n  transform: scale(1.5);\n}\n\nfigure.effect-chico:hover figcaption::before,\nfigure.effect-chico:hover p {\n  opacity: 1;\n  transform: scale(1);\n}\n\n@media screen and (max-width: 50em) {\n  .content {\n    padding: 0 10px;\n    text-align: center;\n  }\n  .grid figure {\n    display: inline-block;\n    float: none;\n    margin: 10px auto;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LXYzL0M6XFxVc2Vyc1xcS2FyaW1cXERlc2t0b3BcXHBpbVdlYlxcQmFoYVYxL3NyY1xcYXBwXFxnYWxsZXJ5XFxnYWxsZXJ5LXYzXFxnYWxsZXJ5LXYzLWNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktdjMvZ2FsbGVyeS12My1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDQ3RCOztBREdBLGlCQUFBOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUNEbkI7O0FESUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQ0RoQjs7QURJQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsMkJBQTJCO0FDRC9COztBRElBOztFQUVJLG9CQUFvQjtBQ0R4Qjs7QURJQTs7RUFFSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQ0RoQjs7QURLQSxnREFBQTs7QUFHQSw4Q0FBQTs7QUFFQTtFQUNJLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixVQUFVO0FDTGQ7O0FEUUE7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FDTHBCOztBRFFBO0VBQ0ksZ0JBQWdCO0FDTHBCOztBRFFBOztFQUVJLFNBQVM7QUNMYjs7QURRQTtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUNMcEI7O0FEU0EsdUJBQUE7O0FBR0Esa0JBQUE7O0FBR0EsaUJBQUE7O0FBR0Esa0JBQUE7O0FBRUE7RUFDSSxlQUFlO0VBRWYsd0JBQXdCO0VBQ3hCLFlBQVk7RUFFWiwwQ0FBMEM7RUFFMUMsbUNBQW1DO0FDYnZDOztBRGdCQTtFQUNJLGdCQUFnQjtBQ2JwQjs7QURnQkE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUNiZjs7QURnQkE7O0VBR0ksa0NBQWtDO0FDYnRDOztBRGdCQTtFQUVJLDJCQUEyQjtBQ2IvQjs7QURnQkE7RUFDSSwrQkFBK0I7RUFDL0IsVUFBVTtFQUVWLHlDQUF5QztBQ2I3Qzs7QURnQkE7O0VBRUksVUFBVTtBQ2JkOztBRGdCQTs7O0VBSUksK0JBQStCO0FDYm5DOztBRGdCQTtFQUVJLHVCQUF1QjtFQUV2QiwwQkFBMEI7QUNiOUI7O0FEaUJBLGtCQUFBOztBQUdBLGtCQUFBOztBQUdBLGtCQUFBOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFFWix5RkFBeUY7RUFDekYsV0FBVztFQUNYLFVBQVU7RUFFVixpQ0FBaUM7QUNuQnJDOztBRHNCQTtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBRWQsd0NBQXdDO0VBRXhDLGtDQUFrQztBQ25CdEM7O0FEc0JBOztFQUdJLDBDQUEwQztBQ25COUM7O0FEc0JBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBRVYsa0NBQWtDO0FDbkJ0Qzs7QURzQkE7RUFDSSxXQUFXO0VBRVgsMkRBQTJEO0FDbkIvRDs7QURzQkE7O0VBRUksVUFBVTtFQUVWLCtCQUErQjtBQ25CbkM7O0FEdUJBLGtCQUFBOztBQUdBLGlCQUFBOztBQUdBLGtCQUFBOztBQUVBO0VBRUksNERBQTREO0FDekJoRTs7QUQ0QkE7RUFDSSxlQUFlO0VBRWYsd0JBQXdCO0VBRXhCLDBDQUEwQztFQUUxQyxtQ0FBbUM7QUN6QnZDOztBRDRCQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxVQUFVO0VBRVYsMENBQTBDO0VBRTFDLG1DQUFtQztBQ3pCdkM7O0FENEJBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtBQ3pCcEI7O0FENEJBO0VBQ0kscUJBQXFCO0FDekJ6Qjs7QUQ0QkE7RUFDSSxVQUFVO0VBRVYsMENBQTBDO0VBRTFDLG1DQUFtQztBQ3pCdkM7O0FENEJBO0VBQ0ksWUFBWTtFQUVaLCtCQUErQjtBQ3pCbkM7O0FENEJBOztFQUVJLFVBQVU7RUFFViwrQkFBK0I7QUN6Qm5DOztBRDZCQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLG1CQUFtQjtBQy9CdkI7O0FEa0NBO0VBQ0ksWUFBWTtFQUVaLHlCQUF5QjtBQy9CN0I7O0FEa0NBO0VBQ0ksWUFBWTtBQy9CaEI7O0FEa0NBOztFQUVJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFFViwwQ0FBMEM7QUMvQjlDOztBRGtDQTtFQUNJLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFFN0Isc0JBQXNCO0FDL0IxQjs7QURrQ0E7RUFDSSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBRTNCLHNCQUFzQjtBQy9CMUI7O0FEa0NBO0VBQ0ksZ0JBQWdCO0VBRWhCLDJCQUEyQjtFQUUzQixtQ0FBbUM7QUMvQnZDOztBRGtDQTtFQUNJLG1CQUFtQjtFQUNuQixVQUFVO0VBRVYsMENBQTBDO0VBRTFDLGtDQUFrQztBQy9CdEM7O0FEa0NBOztFQUVJLFVBQVU7RUFFVixtQkFBbUI7QUMvQnZCOztBRGtDQTs7RUFFSSxVQUFVO0VBRVYsK0JBQStCO0FDL0JuQzs7QURtQ0Esa0JBQUE7O0FBR0Esa0JBQUE7O0FBR0Esa0JBQUE7O0FBRUE7RUFFSSxtQkFBbUI7QUNyQ3ZCOztBRHdDQTtFQUVJLDBDQUEwQztFQUUxQyxtQ0FBbUM7QUNyQ3ZDOztBRHdDQTtFQUNJLFlBQVk7RUFFWiwrQkFBK0I7QUNyQ25DOztBRHdDQTs7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgsMENBQTBDO0VBRTFDLHFDQUFxQztBQ3JDekM7O0FEd0NBO0VBQ0ksWUFBWTtFQUVaLG1EQUFtRDtBQ3JDdkQ7O0FEd0NBO0VBQ0ksWUFBWTtFQUVaLG9EQUFvRDtBQ3JDeEQ7O0FEd0NBOztFQUVJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLFdBQVc7RUFFWCwyQkFBMkI7QUNyQy9COztBRHdDQTtFQUVJLDJEQUEyRDtBQ3JDL0Q7O0FEd0NBO0VBQ0ksbUJBQW1CO0VBRW5CLDBEQUEwRDtBQ3JDOUQ7O0FEd0NBO0VBRUksMkRBQTJEO0FDckMvRDs7QUR3Q0E7RUFFSSwwREFBMEQ7QUNyQzlEOztBRHlDQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLG1CQUFtQjtBQzNDdkI7O0FEOENBO0VBQ0ksYUFBYTtBQzNDakI7O0FEOENBO0VBQ0ksWUFBWTtBQzNDaEI7O0FEOENBOztFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQzNDZDs7QUQ4Q0E7RUFDSSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUU3QixzQkFBc0I7RUFFdEIscUJBQXFCO0FDM0N6Qjs7QUQ4Q0E7RUFDSSxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUUzQixzQkFBc0I7RUFFdEIsd0JBQXdCO0FDM0M1Qjs7QUQ4Q0E7RUFDSSxnQkFBZ0I7RUFFaEIsMkJBQTJCO0FDM0MvQjs7QUQ4Q0E7RUFDSSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFFVixtQ0FBbUM7QUMzQ3ZDOztBRDhDQTs7RUFHSSxtQ0FBbUM7QUMzQ3ZDOztBRDhDQTs7OztFQUtJLDBDQUEwQztBQzNDOUM7O0FEOENBO0VBQ0ksWUFBWTtFQUVaLCtCQUErQjtBQzNDbkM7O0FEOENBOztFQUVJLFVBQVU7RUFFVixtQkFBbUI7QUMzQ3ZCOztBRDhDQTs7RUFFSSxVQUFVO0VBRVYsK0JBQStCO0FDM0NuQzs7QUQ4Q0E7Ozs7RUFLSSx1QkFBdUI7QUMzQzNCOztBRCtDQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLG1CQUFtQjtBQ2pEdkI7O0FEb0RBO0VBQ0ksWUFBWTtFQUVaLHlCQUF5QjtBQ2pEN0I7O0FEb0RBO0VBQ0ksWUFBWTtBQ2pEaEI7O0FEb0RBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUVYLGtDQUFrQztBQ2pEdEM7O0FEb0RBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsbUNBQW1DO0FDakR2Qzs7QURvREE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUVWLDBDQUEwQztFQUUxQyxtQ0FBbUM7QUNqRHZDOztBRG9EQTs7RUFHSSwyQkFBMkI7QUNqRC9COztBRG9EQTs7O0VBR0ksVUFBVTtFQUVWLCtCQUErQjtBQ2pEbkM7O0FEcURBLGtCQUFBOztBQUdBLGtCQUFBOztBQUdBLGtCQUFBOztBQUVBO0VBRUkseUVBQXlFO0FDdkQ3RTs7QUQwREE7RUFDSSxZQUFZO0VBRVoseUJBQXlCO0FDdkQ3Qjs7QUQwREE7RUFDSSxZQUFZO0VBQ1osdUNBQXVDO0VBRXZDLGtDQUFrQztBQ3ZEdEM7O0FEMERBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsV0FBVztBQ3ZEZjs7QUQwREE7RUFDSSxvQkFBb0I7RUFFcEIsMkJBQTJCO0VBRTNCLGtDQUFrQztBQ3ZEdEM7O0FEMERBOztFQUVJLFVBQVU7RUFFViwwQ0FBMEM7RUFFMUMsbUJBQW1CO0FDdkR2Qjs7QUQwREE7RUFFSSwrQkFBK0I7QUN2RG5DOztBRDBEQTs7RUFFSSxVQUFVO0VBRVYsbUJBQW1CO0FDdkR2Qjs7QUQwREE7RUFDSSxxQ0FBcUM7QUN2RHpDOztBRDBEQTtFQUNJLFlBQVk7QUN2RGhCOztBRDJEQSxrQkFBQTs7QUFHQSxtQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLGlCQUFpQjtBQzdEckI7O0FEZ0VBOztFQUVJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7QUM3RG5COztBRGdFQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFFaEIsa0NBQWtDO0FDN0R0Qzs7QURnRUE7RUFDSSxTQUFTO0VBRVQsMkJBQTJCO0VBRTNCLGtDQUFrQztBQzdEdEM7O0FEZ0VBO0VBRUksK0JBQStCO0FDN0RuQzs7QURnRUE7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgsa0NBQWtDO0FDN0R0Qzs7QURnRUE7O0VBRUksVUFBVTtFQUVWLDBDQUEwQztBQzdEOUM7O0FEZ0VBOztFQUVJLFVBQVU7RUFFViwrQkFBK0I7QUM3RG5DOztBRGlFQSxrQkFBQTs7QUFHQSxpQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLHlCQUF5QjtBQ25FN0I7O0FEc0VBO0VBQ0ksWUFBWTtFQUVaLDBDQUEwQztFQUUxQyxzQkFBc0I7QUNuRTFCOztBRHNFQTtFQUNJLFlBQVk7RUFFWixtQkFBbUI7QUNuRXZCOztBRHNFQTtFQUNJLGVBQWU7RUFFZiwyQkFBMkI7RUFFM0Isa0NBQWtDO0FDbkV0Qzs7QURzRUE7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixVQUFVO0VBRVYsMENBQTBDO0VBRTFDLDZDQUE2QztBQ25FakQ7O0FEc0VBO0VBRUksK0JBQStCO0FDbkVuQzs7QURzRUE7RUFDSSxVQUFVO0VBRVYsd0NBQXdDO0FDbkU1Qzs7QUR1RUEsa0JBQUE7O0FBR0EsaUJBQUE7O0FBR0Esa0JBQUE7O0FBRUE7RUFDSSxtQkFBbUI7QUN6RXZCOztBRDRFQTtFQUNJLGVBQWU7RUFFZix3QkFBd0I7RUFDeEIsVUFBVTtFQUVWLDBDQUEwQztFQUUxQywrQ0FBK0M7RUFDL0MsbUNBQW1DO0VBQ25DLDJCQUEyQjtBQ3pFL0I7O0FENEVBO0VBQ0ksWUFBWTtFQUVaLHdDQUF3QztBQ3pFNUM7O0FENEVBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FDekV0Qjs7QUQ0RUE7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsVUFBVTtFQUVWLDBDQUEwQztFQUUxQyxtQ0FBbUM7QUN6RXZDOztBRDRFQTtFQUNJLFVBQVU7RUFFViwrQkFBK0I7QUN6RW5DOztBRDZFQSxrQkFBQTs7QUFHQSxtQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUVJLGdFQUEyRjtBQy9FL0Y7O0FEa0ZBO0VBRUkseUJBQXlCO0FDL0U3Qjs7QURrRkE7RUFDSSxZQUFZO0FDL0VoQjs7QURrRkE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBRVYsd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixXQUFXO0VBRVgsMkJBQTJCO0VBRTNCLG1DQUFtQztBQy9FdkM7O0FEa0ZBO0VBRUksK0JBQStCO0FDL0VuQzs7QURrRkE7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0FDL0VwQjs7QURrRkE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUVWLDBDQUEwQztFQUUxQyxvQ0FBb0M7QUMvRXhDOztBRGtGQTtFQUNJLFVBQVU7RUFFViwrQkFBK0I7QUMvRW5DOztBRG1GQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUNJLG1CQUFtQjtBQ3JGdkI7O0FEd0ZBO0VBQ0ksZUFBZTtFQUVmLHdCQUF3QjtFQUV4QiwwQ0FBMEM7RUFFMUMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQywyQkFBMkI7QUNyRi9COztBRHdGQTtFQUNJLFlBQVk7RUFFWiwrQkFBK0I7QUNyRm5DOztBRHdGQTtFQUNJLGdCQUFnQjtBQ3JGcEI7O0FEd0ZBO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUNyRnBCOztBRHdGQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFFWCwyQkFBMkI7RUFFM0IsbUNBQW1DO0FDckZ2Qzs7QUR3RkE7RUFFSSwrQkFBK0I7QUNyRm5DOztBRHdGQTtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBRVYsMENBQTBDO0VBRTFDLGtDQUFrQztBQ3JGdEM7O0FEd0ZBO0VBQ0ksVUFBVTtFQUVWLCtCQUErQjtBQ3JGbkM7O0FEeUZBLGtCQUFBOztBQUdBLGdCQUFBOztBQUdBLGtCQUFBOztBQUVBO0VBQ0ksU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBRWQsMkJBQTJCO0VBRTNCLGtDQUFrQztBQzNGdEM7O0FEOEZBO0VBQ0ksV0FBVztBQzNGZjs7QUQ4RkE7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQzNGcEI7O0FEOEZBOztFQUVJLGNBQWM7QUMzRmxCOztBRDhGQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLFVBQVU7RUFFVix5QkFBeUI7RUFDekIsbUNBQW1DO0VBQ25DLHVDQUFBO0FDM0ZKOztBRDhGQTs7RUFHSSwyQkFBMkI7RUFFM0Isa0NBQWtDO0FDM0Z0Qzs7QUQ4RkE7RUFDSSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtDQUFrQztBQzNGdEM7O0FEOEZBO0VBQ0ksZ0JBQWdCO0FDM0ZwQjs7QUQ4RkE7RUFDSSxnQkFBZ0I7QUMzRnBCOztBRDhGQTtFQUNJLGdCQUFnQjtBQzNGcEI7O0FEOEZBO0VBQ0kscUJBQXFCO0FDM0Z6Qjs7QUQ4RkE7RUFDSSxVQUFVO0FDM0ZkOztBRDhGQTs7O0VBSUksK0JBQStCO0FDM0ZuQzs7QUQ4RkE7RUFFSSx1QkFBdUI7QUMzRjNCOztBRDhGQTtFQUVJLHNCQUFzQjtBQzNGMUI7O0FEOEZBO0VBRUksdUJBQXVCO0FDM0YzQjs7QUQ4RkE7RUFFSSxzQkFBc0I7QUMzRjFCOztBRCtGQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFHQSxrQkFBQTs7QUFFQTtFQUVJLDBDQUEwQztFQUUxQyxzQkFBc0I7QUNqRzFCOztBRG9HQTtFQUNJLFlBQVk7RUFFWixtQkFBbUI7QUNqR3ZCOztBRG9HQTtFQUNJLFlBQVk7QUNqR2hCOztBRG9HQTtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFdBQVc7RUFFWCxxQkFBcUI7QUNqR3pCOztBRG9HQTs7RUFFSSxVQUFVO0VBRVYsMENBQTBDO0FDakc5Qzs7QURvR0E7RUFDSSxxQkFBcUI7QUNqR3pCOztBRG9HQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFFaEIscUJBQXFCO0FDakd6Qjs7QURvR0E7O0VBRUksVUFBVTtFQUVWLG1CQUFtQjtBQ2pHdkI7O0FEb0dBO0VBQ0k7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0VDakd4QjtFRG1HRTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7RUNqR2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnktdjMvZ2FsbGVyeS12My1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMWVtIDAgNGVtO1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIENvbW1vbiBzdHlsZSAqL1xuXG4uZ3JpZCBmaWd1cmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMTBweCAxJTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbWF4LWhlaWdodDogMzYwcHg7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBiYWNrZ3JvdW5kOiAjMzA4NWEzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkIGZpZ3VyZSBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG5cbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uOjpiZWZvcmUsXG4uZ3JpZCBmaWd1cmUgZmlnY2FwdGlvbjo6YWZ0ZXIge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ3JpZCBmaWd1cmUgZmlnY2FwdGlvbixcbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uPmEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLyogQW5jaG9yIHdpbGwgY292ZXIgdGhlIHdob2xlIGl0ZW0gYnkgZGVmYXVsdCAqL1xuXG5cbi8qIEZvciBzb21lIGVmZmVjdHMgaXQgd2lsbCBzaG93IGFzIGEgYnV0dG9uICovXG5cbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uPmEge1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgdGV4dC1pbmRlbnQ6IDIwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IDA7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmdyaWQgZmlndXJlIGgyIHtcbiAgICB3b3JkLXNwYWNpbmc6IC0wLjE1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmdyaWQgZmlndXJlIGgyIHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5ncmlkIGZpZ3VyZSBoMixcbi5ncmlkIGZpZ3VyZSBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5ncmlkIGZpZ3VyZSBwIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogNjguNSU7XG59XG5cblxuLyogSW5kaXZpZHVhbCBlZmZlY3RzICovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBMaWx5ICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1saWx5IGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSArIDUwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA1MHB4KTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5IGZpZ2NhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGlseSBmaWdjYXB0aW9uPmRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5IGgyLFxuZmlndXJlLmVmZmVjdC1saWx5IHAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHkgaDIge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHkgcCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5OmhvdmVyIGltZyxcbmZpZ3VyZS5lZmZlY3QtbGlseTpob3ZlciBwIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHk6aG92ZXIgaW1nLFxuZmlndXJlLmVmZmVjdC1saWx5OmhvdmVyIGgyLFxuZmlndXJlLmVmZmVjdC1saWx5OmhvdmVyIHAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHk6aG92ZXIgcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4vKioqKiogU2FkaWUgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LXNhZGllIGZpZ2NhcHRpb246OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNzIsIDc2LCA5NywgMCkgMCUsIHJnYmEoNzIsIDc2LCA5NywgMC44KSA3NSUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoNzIsIDc2LCA5NywgMCkgMCUsIHJnYmEoNzIsIDc2LCA5NywgMC44KSA3NSUpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDUwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllIGgyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogIzQ4NGM2MTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzLCBjb2xvciAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMsIGNvbG9yIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3Qtc2FkaWUgcCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtc2FkaWUgcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllOmhvdmVyIGgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTQwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTQwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllOmhvdmVyIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3Qtc2FkaWU6aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIFJveHkgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LXJveHkge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY4OWU5IDAlLCAjMDVhYmUwIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmODllOSAwJSwgIzA1YWJlMCAxMDAlKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb3h5IGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSArIDYwcHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA2MHB4KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJveHkgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgY29udGVudDogJyc7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJveHkgZmlnY2FwdGlvbiB7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm94eSBoMiB7XG4gICAgcGFkZGluZzogMzAlIDAgMTBweCAwO1xufVxuXG5maWd1cmUuZWZmZWN0LXJveHkgcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJveHk6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm94eTpob3ZlciBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LXJveHk6aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIEJ1YmJhICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1idWJiYSB7XG4gICAgYmFja2dyb3VuZDogIzllNTQwNjtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBpbWcge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYTpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LWJ1YmJhIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmEgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBmaWdjYXB0aW9uOjphZnRlciB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmEgaDIge1xuICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBwIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIuNWVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmE6aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1idWJiYTpob3ZlciBmaWdjYXB0aW9uOjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtYnViYmE6aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIFJvbWVvICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1yb21lbyB7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm9tZW8gaW1nIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMzAwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMzAwcHgpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3Qtcm9tZW8gZmlnY2FwdGlvbjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIGZpZ2NhcHRpb246OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgcm90YXRlKDQ1ZGVnKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb21lbzpob3ZlciBmaWdjYXB0aW9uOjphZnRlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApIHJvdGF0ZSgtNDVkZWcpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvIGgyLFxuZmlndXJlLmVmZmVjdC1yb21lbyBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1yb21lbyBoMiB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIC0xNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIC0xNTAlLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb21lbyBwIHtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMmVtO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAxNTAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIDE1MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIGgyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIHAge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4vKioqKiogTGF5bGEgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LWxheWxhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMThhMzY3O1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGltZyB7XG4gICAgaGVpZ2h0OiAzOTBweDtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBmaWdjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGEgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1sYXlsYSBmaWdjYXB0aW9uOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGEgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDUwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGgyIHtcbiAgICBwYWRkaW5nLXRvcDogMjYlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIHAge1xuICAgIHBhZGRpbmc6IDAuNWVtIDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGEgaW1nLFxuZmlndXJlLmVmZmVjdC1sYXlsYSBoMiB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBpbWcsXG5maWd1cmUuZWZmZWN0LWxheWxhIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtbGF5bGEgZmlnY2FwdGlvbjo6YWZ0ZXIsXG5maWd1cmUuZWZmZWN0LWxheWxhIHAge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtbGF5bGE6aG92ZXIgZmlnY2FwdGlvbjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGE6aG92ZXIgaDIsXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIHAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGE6aG92ZXIgZmlnY2FwdGlvbjo6YWZ0ZXIsXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGgyLFxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBwLFxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBpbWcge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBIb25leSAqKioqKi9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXkge1xuICAgIGJhY2tncm91bmQ6ICM0YTM3NTM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXkgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXk6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXkgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29udGVudDogJyc7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXkgaDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWhvbmV5IGgyIGkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXkgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1ob25leSBoMiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXk6aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1ob25leTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtaG9uZXk6aG92ZXIgaDIgaSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIE9zY2FyICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1vc2NhciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMyMjY4MmEgMCUsICM5YjRhMWIgNDAlLCAjM2EzNDJhIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzIyNjgyYSAwJSwgIzliNGExYiA0MCUsICMzYTM0MmEgMTAwJSk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXIgZmlnY2FwdGlvbiB7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUyLCA0MiwgMC43KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1vc2NhciBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwcHg7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBjb250ZW50OiAnJztcbn1cblxuZmlndXJlLmVmZmVjdC1vc2NhciBoMiB7XG4gICAgbWFyZ2luOiAyMCUgMCAxMHB4IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1vc2NhciBwIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5maWd1cmUuZWZmZWN0LW9zY2FyOmhvdmVyIGgyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1vc2Nhcjpob3ZlciBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LW9zY2FyOmhvdmVyIHAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXI6aG92ZXIgZmlnY2FwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTIsIDQyLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1vc2Nhcjpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIE1hcmxleSAqKioqKi9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGZpZ2NhcHRpb24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5maWd1cmUuZWZmZWN0LW1hcmxleSBoMixcbmZpZ3VyZS5lZmZlY3QtbWFybGV5IHAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXkgcCB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGgyIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5OmhvdmVyIGgyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXkgaDI6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb250ZW50OiAnJztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA0MHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXkgaDI6OmFmdGVyLFxuZmlndXJlLmVmZmVjdC1tYXJsZXkgcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXk6aG92ZXIgaDI6OmFmdGVyLFxuZmlndXJlLmVmZmVjdC1tYXJsZXk6aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIFJ1YnkgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LXJ1Ynkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzgxOWM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtcnVieSBpbWcge1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5OmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJ1YnkgaDIge1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5IHAge1xuICAgIG1hcmdpbjogMWVtIDAgMDtcbiAgICBwYWRkaW5nOiAzZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZSgxLjEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGUoMS4xKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5OmhvdmVyIGgyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5OmhvdmVyIHAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBNaWxvICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1taWxvIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmU1ZDVhO1xufVxuXG5maWd1cmUuZWZmZWN0LW1pbG8gaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlICsgNjBweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDYwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMHB4LCAwLCAwKSBzY2FsZSgxLjEyKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMHB4LCAwLCAwKSBzY2FsZSgxLjEyKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWlsbzpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1taWxvIGgyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDFlbSAxLjJlbTtcbn1cblxuZmlndXJlLmVmZmVjdC1taWxvIHAge1xuICAgIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1taWxvOmhvdmVyIHAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBEZXh0ZXIgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LWRleHRlciB7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDM3LCAxNDEsIDIwMCwgMSkgMCUsIHJnYmEoMTA0LCA2MCwgMTksIDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMzcsIDE0MSwgMjAwLCAxKSAwJSwgcmdiYSgxMDQsIDYwLCAxOSwgMSkgMTAwJSk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyIGltZyB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG5maWd1cmUuZWZmZWN0LWRleHRlciBmaWdjYXB0aW9uOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDUwJSAtIDMwcHgpO1xuICAgIGhlaWdodDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjZmZmO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyOmhvdmVyIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1kZXh0ZXIgZmlnY2FwdGlvbiB7XG4gICAgcGFkZGluZzogM2VtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyIHAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNjBweDtcbiAgICBib3R0b206IDYwcHg7XG4gICAgbGVmdDogNjBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1kZXh0ZXI6aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyoqKioqIFNhcmFoICoqKioqL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cblxuZmlndXJlLmVmZmVjdC1zYXJhaCB7XG4gICAgYmFja2dyb3VuZDogIzQyYjA3ODtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBpbWcge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgKyAyMHB4KTtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmZpZ3VyZS5lZmZlY3Qtc2FyYWg6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtc2FyYWggZmlnY2FwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBoMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMC41ZW0gMDtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBoMjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtc2FyYWg6aG92ZXIgaDI6OmFmdGVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBwIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhcmFoOmhvdmVyIHAge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBab2UgKioqKiovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5maWd1cmUuZWZmZWN0LXpvZSBmaWdjYXB0aW9uIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBoZWlnaHQ6IDMuNzVlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGNvbG9yOiAjM2M0YTUwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZSBoMiB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIHAuaWNvbi1saW5rcyBhIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMzYzRhNTA7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGE6aG92ZXIsXG5maWd1cmUuZWZmZWN0LXpvZTpob3ZlciBwLmljb24tbGlua3MgYTpmb2N1cyB7XG4gICAgY29sb3I6ICMyNTJkMzE7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIHAuZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDhlbTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvKiBGaXggZm9yIENocm9tZSAzNy4wLjIwNjIuMTIwIChNYWMpICovXG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIGgyLFxuZmlndXJlLmVmZmVjdC16b2UgcC5pY29uLWxpbmtzIGEge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZSBwLmljb24tbGlua3MgYSBzcGFuOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBmb250LWZhbWlseTogJ2ZlYXRoZXJpY29ucyc7XG4gICAgc3BlYWs6IG5vbmU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmljb24tZXllOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXGUwMDAnO1xufVxuXG4uaWNvbi1wYXBlci1jbGlwOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdcXGUwMDEnO1xufVxuXG4uaWNvbi1oZWFydDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFxlMDI0Jztcbn1cblxuZmlndXJlLmVmZmVjdC16b2UgaDIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5kZXNjcmlwdGlvbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgZmlnY2FwdGlvbixcbmZpZ3VyZS5lZmZlY3Qtem9lOmhvdmVyIGgyLFxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGEge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZTpob3ZlciBoMiB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGE6bnRoLWNoaWxkKDMpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGE6bnRoLWNoaWxkKDIpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZTpob3ZlciBwLmljb24tbGlua3MgYTpmaXJzdC1jaGlsZCB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qKioqKiBDaGljbyAqKioqKi9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5cbmZpZ3VyZS5lZmZlY3QtY2hpY28gaW1nIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEyKTtcbn1cblxuZmlndXJlLmVmZmVjdC1jaGljbzpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1jaGljbyBmaWdjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbmZpZ3VyZS5lZmZlY3QtY2hpY28gZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvdHRvbTogMzBweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgY29udGVudDogJyc7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtY2hpY28gcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1jaGljbyBoMiB7XG4gICAgcGFkZGluZzogMjAlIDAgMjBweCAwO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvIHAge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvOmhvdmVyIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtY2hpY286aG92ZXIgcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTBlbSkge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5ncmlkIGZpZ3VyZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59IiwiLmdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxZW0gMCA0ZW07XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIENvbW1vbiBzdHlsZSAqL1xuLmdyaWQgZmlndXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4IDElO1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xuICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgd2lkdGg6IDQ4JTtcbiAgYmFja2dyb3VuZDogIzMwODVhMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkIGZpZ3VyZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmdyaWQgZmlndXJlIGZpZ2NhcHRpb24ge1xuICBwYWRkaW5nOiAyZW07XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEuMjVlbTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmdyaWQgZmlndXJlIGZpZ2NhcHRpb246OmJlZm9yZSxcbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uOjphZnRlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ3JpZCBmaWd1cmUgZmlnY2FwdGlvbixcbi5ncmlkIGZpZ3VyZSBmaWdjYXB0aW9uID4gYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBBbmNob3Igd2lsbCBjb3ZlciB0aGUgd2hvbGUgaXRlbSBieSBkZWZhdWx0ICovXG4vKiBGb3Igc29tZSBlZmZlY3RzIGl0IHdpbGwgc2hvdyBhcyBhIGJ1dHRvbiAqL1xuLmdyaWQgZmlndXJlIGZpZ2NhcHRpb24gPiBhIHtcbiAgei1pbmRleDogMTAwMDtcbiAgdGV4dC1pbmRlbnQ6IDIwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmdyaWQgZmlndXJlIGgyIHtcbiAgd29yZC1zcGFjaW5nOiAtMC4xNWVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZ3JpZCBmaWd1cmUgaDIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5ncmlkIGZpZ3VyZSBoMixcbi5ncmlkIGZpZ3VyZSBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZ3JpZCBmaWd1cmUgcCB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogNjguNSU7XG59XG5cbi8qIEluZGl2aWR1YWwgZWZmZWN0cyAqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIExpbHkgKioqKiovXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5maWd1cmUuZWZmZWN0LWxpbHkgaW1nIHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgKyA1MHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDUwcHgpO1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDBweCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGlseSBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5IGZpZ2NhcHRpb24gPiBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGlseSBoMixcbmZpZ3VyZS5lZmZlY3QtbGlseSBwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDQwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHkgaDIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGlseSBwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5OmhvdmVyIGltZyxcbmZpZ3VyZS5lZmZlY3QtbGlseTpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuZmlndXJlLmVmZmVjdC1saWx5OmhvdmVyIGltZyxcbmZpZ3VyZS5lZmZlY3QtbGlseTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtbGlseTpob3ZlciBwIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxpbHk6aG92ZXIgcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIFNhZGllICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1zYWRpZSBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDcyLCA3NiwgOTcsIDApIDAlLCByZ2JhKDcyLCA3NiwgOTcsIDAuOCkgNzUlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSg3MiwgNzYsIDk3LCAwKSAwJSwgcmdiYSg3MiwgNzYsIDk3LCAwLjgpIDc1JSk7XG4gIGNvbnRlbnQ6ICcnO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNTAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNDg0YzYxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzLCBjb2xvciAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzLCBjb2xvciAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXNhZGllIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3Qtc2FkaWUgcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1zYWRpZSBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYWRpZTpob3ZlciBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTQwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIC00MHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYWRpZTpob3ZlciBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LXNhZGllOmhvdmVyIHAge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbi8qKioqKiBSb3h5ICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1yb3h5IHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjg5ZTkgMCUsICMwNWFiZTAgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmODllOSAwJSwgIzA1YWJlMCAxMDAlKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb3h5IGltZyB7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlICsgNjBweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA2MHB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwcHgsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MHB4LCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb3h5IGZpZ2NhcHRpb246OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjb250ZW50OiAnJztcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwcHgsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb3h5IGZpZ2NhcHRpb24ge1xuICBwYWRkaW5nOiAzZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm94eSBoMiB7XG4gIHBhZGRpbmc6IDMwJSAwIDEwcHggMDtcbn1cblxuZmlndXJlLmVmZmVjdC1yb3h5IHAge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJveHk6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC43O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm94eTpob3ZlciBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LXJveHk6aG92ZXIgcCB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIEJ1YmJhICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1idWJiYSB7XG4gIGJhY2tncm91bmQ6ICM5ZTU0MDY7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmEgaW1nIHtcbiAgb3BhY2l0eTogMC43O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmE6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5maWd1cmUuZWZmZWN0LWJ1YmJhIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtYnViYmEgZmlnY2FwdGlvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgY29udGVudDogJyc7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBmaWdjYXB0aW9uOjphZnRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWJ1YmJhIGgyIHtcbiAgcGFkZGluZy10b3A6IDMwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYSBwIHtcbiAgcGFkZGluZzogMjBweCAyLjVlbTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtYnViYmE6aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1idWJiYTpob3ZlciBmaWdjYXB0aW9uOjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1idWJiYTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtYnViYmE6aG92ZXIgcCB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIFJvbWVvICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1yb21lbyB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuZmlndXJlLmVmZmVjdC1yb21lbyBpbWcge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAzMDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMzAwcHgpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3Qtcm9tZW8gZmlnY2FwdGlvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb250ZW50OiAnJztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm9tZW86aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKSByb3RhdGUoNDVkZWcpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCkgcm90YXRlKC00NWRlZyk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm9tZW8gaDIsXG5maWd1cmUuZWZmZWN0LXJvbWVvIHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvIGgyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC01MCUsIDApIHRyYW5zbGF0ZTNkKDAsIC0xNTAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAtMTUwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtcm9tZW8gcCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAyZW07XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAxNTAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAxNTAlLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1yb21lbzpob3ZlciBoMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKSB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LXJvbWVvOmhvdmVyIHAge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTUwJSwgMCkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbi8qKioqKiBMYXlsYSAqKioqKi9cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbmZpZ3VyZS5lZmZlY3QtbGF5bGEge1xuICBiYWNrZ3JvdW5kOiAjMThhMzY3O1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGltZyB7XG4gIGhlaWdodDogMzkwcHg7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGEgZmlnY2FwdGlvbiB7XG4gIHBhZGRpbmc6IDNlbTtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LWxheWxhIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiAnJztcbiAgb3BhY2l0eTogMDtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiAzMHB4O1xuICBsZWZ0OiA1MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBoMiB7XG4gIHBhZGRpbmctdG9wOiAyNiU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYSBwIHtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbGF5bGEgaW1nLFxuZmlndXJlLmVmZmVjdC1sYXlsYSBoMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhIGltZyxcbmZpZ3VyZS5lZmZlY3QtbGF5bGEgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1sYXlsYSBmaWdjYXB0aW9uOjphZnRlcixcbmZpZ3VyZS5lZmZlY3QtbGF5bGEgcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBmaWdjYXB0aW9uOjpiZWZvcmUsXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGgyLFxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWxheWxhOmhvdmVyIGZpZ2NhcHRpb246OmFmdGVyLFxuZmlndXJlLmVmZmVjdC1sYXlsYTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtbGF5bGE6aG92ZXIgcCxcbmZpZ3VyZS5lZmZlY3QtbGF5bGE6aG92ZXIgaW1nIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbi8qKioqKiBIb25leSAqKioqKi9cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbmZpZ3VyZS5lZmZlY3QtaG9uZXkge1xuICBiYWNrZ3JvdW5kOiAjNGEzNzUzO1xufVxuXG5maWd1cmUuZWZmZWN0LWhvbmV5IGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzO1xufVxuXG5maWd1cmUuZWZmZWN0LWhvbmV5OmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuZmlndXJlLmVmZmVjdC1ob25leSBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29udGVudDogJyc7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ob25leSBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ob25leSBoMiBpIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWhvbmV5IGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtaG9uZXkgaDIge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtaG9uZXk6aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1ob25leTpob3ZlciBoMixcbmZpZ3VyZS5lZmZlY3QtaG9uZXk6aG92ZXIgaDIgaSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIE9zY2FyICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1vc2NhciB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjI2ODJhIDAlLCAjOWI0YTFiIDQwJSwgIzNhMzQyYSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMjI2ODJhIDAlLCAjOWI0YTFiIDQwJSwgIzNhMzQyYSAxMDAlKTtcbn1cblxuZmlndXJlLmVmZmVjdC1vc2NhciBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1vc2NhciBmaWdjYXB0aW9uIHtcbiAgcGFkZGluZzogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MiwgNDIsIDAuNyk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1vc2NhciBmaWdjYXB0aW9uOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29udGVudDogJyc7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXIgaDIge1xuICBtYXJnaW46IDIwJSAwIDEwcHggMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1vc2NhciBwIHtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXI6aG92ZXIgaDIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtb3NjYXI6aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1vc2Nhcjpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5maWd1cmUuZWZmZWN0LW9zY2FyOmhvdmVyIGZpZ2NhcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MiwgNDIsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LW9zY2FyOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0qL1xuLyoqKioqIE1hcmxleSAqKioqKi9cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGZpZ2NhcHRpb24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXkgaDIsXG5maWd1cmUuZWZmZWN0LW1hcmxleSBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG5maWd1cmUuZWZmZWN0LW1hcmxleSBwIHtcbiAgYm90dG9tOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGgyIHtcbiAgdG9wOiAzMHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1tYXJsZXk6aG92ZXIgaDIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGgyOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbnRlbnQ6ICcnO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNDBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5IGgyOjphZnRlcixcbmZpZ3VyZS5lZmZlY3QtbWFybGV5IHAge1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWFybGV5OmhvdmVyIGgyOjphZnRlcixcbmZpZ3VyZS5lZmZlY3QtbWFybGV5OmhvdmVyIHAge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbi8qKioqKiBSdWJ5ICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1ydWJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3ODE5Yztcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5IGltZyB7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtcnVieTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5IGgyIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1ydWJ5IHAge1xuICBtYXJnaW46IDFlbSAwIDA7XG4gIHBhZGRpbmc6IDNlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCkgc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKSBzY2FsZSgxLjEpO1xufVxuXG5maWd1cmUuZWZmZWN0LXJ1Ynk6aG92ZXIgaDIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtcnVieTpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG4vKioqKiogTWlsbyAqKioqKi9cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbmZpZ3VyZS5lZmZlY3QtbWlsbyB7XG4gIGJhY2tncm91bmQ6ICMyZTVkNWE7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWlsbyBpbWcge1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSArIDYwcHgpO1xuICB3aWR0aDogY2FsYygxMDAlICsgNjBweCk7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMHB4LCAwLCAwKSBzY2FsZSgxLjEyKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzBweCwgMCwgMCkgc2NhbGUoMS4xMik7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWlsbzpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbn1cblxuZmlndXJlLmVmZmVjdC1taWxvIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxZW0gMS4yZW07XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWlsbyBwIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgd2lkdGg6IDUwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC00MHB4LCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDBweCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtbWlsbzpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG4vKioqKiogRGV4dGVyICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC1kZXh0ZXIge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyNThkYzggMCUsICM2ODNjMTMgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyNThkYzggMCUsICM2ODNjMTMgMTAwJSk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyIGltZyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1kZXh0ZXI6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5maWd1cmUuZWZmZWN0LWRleHRlciBmaWdjYXB0aW9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMzBweDtcbiAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoNTAlIC0gMzBweCk7XG4gIGhlaWdodDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgYm9yZGVyOiA3cHggc29saWQgI2ZmZjtcbiAgY29udGVudDogJyc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyOmhvdmVyIGZpZ2NhcHRpb246OmFmdGVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG5maWd1cmUuZWZmZWN0LWRleHRlciBmaWdjYXB0aW9uIHtcbiAgcGFkZGluZzogM2VtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5maWd1cmUuZWZmZWN0LWRleHRlciBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNjBweDtcbiAgYm90dG9tOiA2MHB4O1xuICBsZWZ0OiA2MHB4O1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwcHgsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDBweCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtZGV4dGVyOmhvdmVyIHAge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbi8qKioqKiBTYXJhaCAqKioqKi9cbi8qLS0tLS0tLS0tLS0tLS0tKi9cbmZpZ3VyZS5lZmZlY3Qtc2FyYWgge1xuICBiYWNrZ3JvdW5kOiAjNDJiMDc4O1xufVxuXG5maWd1cmUuZWZmZWN0LXNhcmFoIGltZyB7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlICsgMjBweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaDpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBmaWdjYXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC41ZW0gMDtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaCBoMjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb250ZW50OiAnJztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaDpob3ZlciBoMjo6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtc2FyYWggcCB7XG4gIHBhZGRpbmc6IDFlbSAwO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC1zYXJhaDpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG4vKioqKiogWm9lICoqKioqL1xuLyotLS0tLS0tLS0tLS0tLS0qL1xuZmlndXJlLmVmZmVjdC16b2UgZmlnY2FwdGlvbiB7XG4gIHRvcDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAxZW07XG4gIGhlaWdodDogMy43NWVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzNjNGE1MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIGgyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIHAuaWNvbi1saW5rcyBhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzNjNGE1MDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGE6aG92ZXIsXG5maWd1cmUuZWZmZWN0LXpvZTpob3ZlciBwLmljb24tbGlua3MgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMjUyZDMxO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZSBwLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhlbTtcbiAgcGFkZGluZzogMmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXM7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiBGaXggZm9yIENocm9tZSAzNy4wLjIwNjIuMTIwIChNYWMpICovXG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIGgyLFxuZmlndXJlLmVmZmVjdC16b2UgcC5pY29uLWxpbmtzIGEge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMzVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAlLCAwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMDAlLCAwKTtcbn1cblxuZmlndXJlLmVmZmVjdC16b2UgcC5pY29uLWxpbmtzIGEgc3Bhbjo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgZm9udC1mYW1pbHk6ICdmZWF0aGVyaWNvbnMnO1xuICBzcGVhazogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5pY29uLWV5ZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcZTAwMCc7XG59XG5cbi5pY29uLXBhcGVyLWNsaXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXGUwMDEnO1xufVxuXG4uaWNvbi1oZWFydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcZTAyNCc7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5maWd1cmUuZWZmZWN0LXpvZTpob3ZlciBwLmRlc2NyaXB0aW9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgZmlnY2FwdGlvbixcbmZpZ3VyZS5lZmZlY3Qtem9lOmhvdmVyIGgyLFxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGEge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lOmhvdmVyIGgyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lOmhvdmVyIHAuaWNvbi1saW5rcyBhOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cblxuZmlndXJlLmVmZmVjdC16b2U6aG92ZXIgcC5pY29uLWxpbmtzIGE6bnRoLWNoaWxkKDIpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59XG5cbmZpZ3VyZS5lZmZlY3Qtem9lOmhvdmVyIHAuaWNvbi1saW5rcyBhOmZpcnN0LWNoaWxkIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLSovXG4vKioqKiogQ2hpY28gKioqKiovXG4vKi0tLS0tLS0tLS0tLS0tLSovXG5maWd1cmUuZWZmZWN0LWNoaWNvIGltZyB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvIGZpZ2NhcHRpb24ge1xuICBwYWRkaW5nOiAzZW07XG59XG5cbmZpZ3VyZS5lZmZlY3QtY2hpY28gZmlnY2FwdGlvbjo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbnRlbnQ6ICcnO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG5maWd1cmUuZWZmZWN0LWNoaWNvIGZpZ2NhcHRpb246OmJlZm9yZSxcbmZpZ3VyZS5lZmZlY3QtY2hpY28gcCB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cywgLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMsIHRyYW5zZm9ybSAwLjM1cztcbn1cblxuZmlndXJlLmVmZmVjdC1jaGljbyBoMiB7XG4gIHBhZGRpbmc6IDIwJSAwIDIwcHggMDtcbn1cblxuZmlndXJlLmVmZmVjdC1jaGljbyBwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbmZpZ3VyZS5lZmZlY3QtY2hpY286aG92ZXIgZmlnY2FwdGlvbjo6YmVmb3JlLFxuZmlndXJlLmVmZmVjdC1jaGljbzpob3ZlciBwIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MGVtKSB7XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ncmlkIGZpZ3VyZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iXX0= */"], encapsulation: 2 });
    return GalleryThreeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-gallery-v3',
                templateUrl: './gallery-v3-component.html',
                styleUrls: ['./gallery-v3-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDemoModule", function() { return GalleryDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _gallery_v1_gallery_v1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gallery-v1/gallery-v1.component */ "./src/app/gallery/gallery-v1/gallery-v1.component.ts");
/* harmony import */ var _gallery_v2_gallery_v2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gallery-v2/gallery-v2.component */ "./src/app/gallery/gallery-v2/gallery-v2.component.ts");
/* harmony import */ var _gallery_v3_gallery_v3_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./gallery-v3/gallery-v3.component */ "./src/app/gallery/gallery-v3/gallery-v3.component.ts");
/* harmony import */ var _gallery_routing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gallery.routing */ "./src/app/gallery/gallery.routing.ts");
























var GalleryDemoModule = /** @class */ (function () {
    function GalleryDemoModule() {
    }
    GalleryDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleryDemoModule });
    GalleryDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GalleryDemoModule_Factory(t) { return new (t || GalleryDemoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_gallery_routing__WEBPACK_IMPORTED_MODULE_21__["GalleryRoutes"])
            ]] });
    return GalleryDemoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleryDemoModule, { declarations: [_gallery_v1_gallery_v1_component__WEBPACK_IMPORTED_MODULE_18__["GalleryOneComponent"],
        _gallery_v2_gallery_v2_component__WEBPACK_IMPORTED_MODULE_19__["GalleryTwoComponent"],
        _gallery_v3_gallery_v3_component__WEBPACK_IMPORTED_MODULE_20__["GalleryThreeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_gallery_routing__WEBPACK_IMPORTED_MODULE_21__["GalleryRoutes"])
                ],
                declarations: [
                    _gallery_v1_gallery_v1_component__WEBPACK_IMPORTED_MODULE_18__["GalleryOneComponent"],
                    _gallery_v2_gallery_v2_component__WEBPACK_IMPORTED_MODULE_19__["GalleryTwoComponent"],
                    _gallery_v3_gallery_v3_component__WEBPACK_IMPORTED_MODULE_20__["GalleryThreeComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/gallery/gallery.routing.ts":
/*!********************************************!*\
  !*** ./src/app/gallery/gallery.routing.ts ***!
  \********************************************/
/*! exports provided: GalleryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryRoutes", function() { return GalleryRoutes; });
/* harmony import */ var _gallery_v1_gallery_v1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-v1/gallery-v1.component */ "./src/app/gallery/gallery-v1/gallery-v1.component.ts");
/* harmony import */ var _gallery_v2_gallery_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-v2/gallery-v2.component */ "./src/app/gallery/gallery-v2/gallery-v2.component.ts");
/* harmony import */ var _gallery_v3_gallery_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery-v3/gallery-v3.component */ "./src/app/gallery/gallery-v3/gallery-v3.component.ts");



var GalleryRoutes = [{
        path: '',
        redirectTo: 'gallery-v1',
        pathMatch: 'full',
    }, {
        path: '',
        children: [{
                path: 'gallery-v1',
                component: _gallery_v1_gallery_v1_component__WEBPACK_IMPORTED_MODULE_0__["GalleryOneComponent"]
            }, {
                path: 'gallery-v2',
                component: _gallery_v2_gallery_v2_component__WEBPACK_IMPORTED_MODULE_1__["GalleryTwoComponent"]
            }, {
                path: 'gallery-v3',
                component: _gallery_v3_gallery_v3_component__WEBPACK_IMPORTED_MODULE_2__["GalleryThreeComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module.js.map