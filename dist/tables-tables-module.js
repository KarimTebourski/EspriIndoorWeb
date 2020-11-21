(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/tables/data-table/data-table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/data-table/data-table.component.ts ***!
  \***********************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");



var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    DataTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DataTableComponent.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(); };
    DataTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableComponent, selectors: [["app-data-table"]], decls: 7, vars: 11, consts: [[1, "material", "fullscreen", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["name", "Id", 3, "width"], ["name", "Name", 3, "width"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-datatable-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-datatable-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-datatable-column", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-datatable-column", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-datatable-column", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-datatable-column", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 0)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"]], styles: [".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL2RhdGEtdGFibGUvQzpcXFVzZXJzXFxLYXJpbVxcRGVza3RvcFxccGltV2ViXFxCYWhhVjEvc3JjXFxhcHBcXHRhYmxlc1xcZGF0YS10YWJsZVxcZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGVzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsWUFBWTtBQ0NkIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUsXG4uZGF0YXRhYmxlID4gZGl2LFxuLmRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
    return DataTableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-table',
                templateUrl: './data-table.component.html',
                styleUrls: ['./data-table.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/table-editing/table-editing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-editing/table-editing.component.ts ***!
  \*****************************************************************/
/*! exports provided: TableEditingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditingComponent", function() { return TableEditingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




function TableEditingComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TableEditingComponent_ng_template_3_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r8.editing[row_r5.$$index + "-name"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r4, " ");
} }
function TableEditingComponent_ng_template_3_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TableEditingComponent_ng_template_3_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var value_r4 = ctx_r14.value; var row_r5 = ctx_r14.row; var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateValue($event, "name", value_r4, row_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r4);
} }
function TableEditingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableEditingComponent_ng_template_3_span_0_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableEditingComponent_ng_template_3_input_1_Template, 1, 1, "input", 7);
} if (rf & 2) {
    var row_r5 = ctx.row;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editing[row_r5.$$index + "-name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.editing[row_r5.$$index + "-name"]);
} }
function TableEditingComponent_ng_template_5_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TableEditingComponent_ng_template_5_span_0_Template_span_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().row; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r20.editing[row_r16.$$index + "-gender"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r17, " ");
} }
function TableEditingComponent_ng_template_5_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableEditingComponent_ng_template_5_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var value_r17 = ctx_r26.value; var row_r16 = ctx_r26.row; var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.updateValue($event, "gender", value_r17, row_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Male");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Female");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r17);
} }
function TableEditingComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableEditingComponent_ng_template_5_span_0_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableEditingComponent_ng_template_5_select_1_Template, 5, 1, "select", 10);
} if (rf & 2) {
    var row_r16 = ctx.row;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.editing[row_r16.$$index + "-gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.editing[row_r16.$$index + "-gender"]);
} }
function TableEditingComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r28 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r28, " ");
} }
var TableEditingComponent = /** @class */ (function () {
    function TableEditingComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableEditingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableEditingComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    TableEditingComponent.ɵfac = function TableEditingComponent_Factory(t) { return new (t || TableEditingComponent)(); };
    TableEditingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableEditingComponent, selectors: [["app-table-editing"]], decls: 8, vars: 6, consts: [[1, "material", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rowHeight", "rows"], ["mydatatable", ""], ["name", "Name"], ["ngx-datatable-cell-template", ""], ["name", "Gender"], ["name", "Age"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 3, "value", "blur"], [3, "value", "change", 4, "ngIf"], [3, "value", "change"], ["value", "male"], ["value", "female"]], template: function TableEditingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-datatable-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableEditingComponent_ng_template_3_Template, 2, 2, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableEditingComponent_ng_template_5_Template, 2, 2, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngx-datatable-column", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableEditingComponent_ng_template_7_Template, 1, 1, "ng-template", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerHeight", 50)("limit", 5)("columnMode", "force")("footerHeight", 50)("rowHeight", "auto")("rows", ctx.rows);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1lZGl0aW5nL3RhYmxlLWVkaXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
    return TableEditingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-editing',
                templateUrl: './table-editing.component.html',
                styleUrls: ['./table-editing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/table-filter/table-filter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/table-filter/table-filter.component.ts ***!
  \***************************************************************/
/*! exports provided: TableFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableFilterComponent", function() { return TableFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var TableFilterComponent = /** @class */ (function () {
    function TableFilterComponent() {
        var _this = this;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            // cache our list
            _this.temp = __spreadArrays(data);
            // push our inital complete list
            _this.rows = data;
        });
    }
    TableFilterComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableFilterComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    TableFilterComponent.ɵfac = function TableFilterComponent_Factory(t) { return new (t || TableFilterComponent)(); };
    TableFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableFilterComponent, selectors: [["app-table-filter"]], decls: 3, vars: 7, consts: [[1, "mb-1", 2, "width", "100%"], ["matInput", "", "placeholder", "Type to filter the name column...", "required", "", 3, "keyup"], [1, "material", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"]], template: function TableFilterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableFilterComponent_Template_input_keyup_1_listener($event) { return ctx.updateFilter($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-datatable", 2);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10)("rows", ctx.rows);
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1maWx0ZXIvdGFibGUtZmlsdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TableFilterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-filter',
                templateUrl: './table-filter.component.html',
                styleUrls: ['./table-filter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/table-paging/table-paging.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/table-paging/table-paging.component.ts ***!
  \***************************************************************/
/*! exports provided: TablePagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePagingComponent", function() { return TablePagingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var _c0 = function () { return { name: "Name" }; };
var _c1 = function () { return { name: "Gender" }; };
var _c2 = function () { return { name: "Company" }; };
var _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
var TablePagingComponent = /** @class */ (function () {
    function TablePagingComponent() {
        this.rows = [];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
    }
    TablePagingComponent.prototype.ngOnInit = function () {
        this.page(this.offset, this.limit);
    };
    TablePagingComponent.prototype.page = function (offset, limit) {
        var _this = this;
        this.fetch(function (results) {
            _this.count = results.length;
            var start = offset * limit;
            var end = start + limit;
            var rows = __spreadArrays(_this.rows);
            for (var i = start; i < end; i++) {
                rows[i] = results[i];
            }
            _this.rows = rows;
            console.log('Page Results', start, end, rows);
        });
    };
    TablePagingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePagingComponent.prototype.onPage = function (event) {
        console.log('Page Event', event);
        this.page(event.offset, event.limit);
    };
    TablePagingComponent.ɵfac = function TablePagingComponent_Factory(t) { return new (t || TablePagingComponent)(); };
    TablePagingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablePagingComponent, selectors: [["app-table-paging"]], decls: 1, vars: 17, consts: [[1, "material", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "externalPaging", "count", "offset", "limit", "page"]], template: function TablePagingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function TablePagingComponent_Template_ngx_datatable_page_0_listener($event) { return ctx.onPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2)))("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("externalPaging", true)("count", ctx.count)("offset", ctx.offset)("limit", ctx.limit);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1wYWdpbmcvdGFibGUtcGFnaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TablePagingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablePagingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-paging',
                templateUrl: './table-paging.component.html',
                styleUrls: ['./table-paging.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-pinning/table-pinning.component.ts ***!
  \*****************************************************************/
/*! exports provided: TablePinningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablePinningComponent", function() { return TablePinningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");



var TablePinningComponent = /** @class */ (function () {
    function TablePinningComponent() {
        var _this = this;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TablePinningComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TablePinningComponent.ɵfac = function TablePinningComponent_Factory(t) { return new (t || TablePinningComponent)(); };
    TablePinningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TablePinningComponent, selectors: [["app-table-pinning"]], decls: 6, vars: 12, consts: [[1, "material", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "scrollbarH", "rows"], ["name", "Name", 3, "width", "frozenLeft"], ["name", "Gender"], ["name", "Age"], ["name", "City", "prop", "address.city", 3, "width"], ["name", "State", "prop", "address.state", 3, "width", "frozenRight"]], template: function TablePinningComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-datatable-column", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-datatable-column", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-datatable-column", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-datatable-column", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-datatable-column", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("scrollbarV", true)("scrollbarH", true)("rows", ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300)("frozenLeft", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300)("frozenRight", true);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"]], styles: [".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3RhYmxlLXBpbm5pbmcvQzpcXFVzZXJzXFxLYXJpbVxcRGVza3RvcFxccGltV2ViXFxCYWhhVjEvc3JjXFxhcHBcXHRhYmxlc1xcdGFibGUtcGlubmluZ1xcdGFibGUtcGlubmluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGVzL3RhYmxlLXBpbm5pbmcvdGFibGUtcGlubmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0MsWUFBWTtBQ0NiIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL3RhYmxlLXBpbm5pbmcvdGFibGUtcGlubmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUsXG4uZGF0YXRhYmxlID4gZGl2LFxuLmRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG59IiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
    return TablePinningComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablePinningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-pinning',
                templateUrl: './table-pinning.component.html',
                styleUrls: ['./table-pinning.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/table-selection/table-selection.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/table-selection/table-selection.component.ts ***!
  \*********************************************************************/
/*! exports provided: TableSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionComponent", function() { return TableSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");



var TableSelectionComponent = /** @class */ (function () {
    function TableSelectionComponent() {
        var _this = this;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSelectionComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    TableSelectionComponent.prototype.onSelect = function (event) {
        console.log('Event: select', event, this.selected);
    };
    TableSelectionComponent.prototype.onActivate = function (event) {
        console.log('Event: activate', event);
    };
    TableSelectionComponent.ɵfac = function TableSelectionComponent_Factory(t) { return new (t || TableSelectionComponent)(); };
    TableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableSelectionComponent, selectors: [["app-table-selection"]], decls: 1, vars: 8, consts: [[1, "material", "selection-cell", 3, "rows", "columnMode", "columns", "headerHeight", "footerHeight", "rowHeight", "selected", "selectionType", "select", "activate"]], template: function TableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function TableSelectionComponent_Template_ngx_datatable_select_0_listener($event) { return ctx.onSelect($event); })("activate", function TableSelectionComponent_Template_ngx_datatable_activate_0_listener($event) { return ctx.onActivate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columnMode", "force")("columns", ctx.columns)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("selected", ctx.selected)("selectionType", "cell");
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return TableSelectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-selection',
                templateUrl: './table-selection.component.html',
                styleUrls: ['./table-selection.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-sorting/table-sorting.component.ts ***!
  \*****************************************************************/
/*! exports provided: TableSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingComponent", function() { return TableSortingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");



var TableSortingComponent = /** @class */ (function () {
    function TableSortingComponent() {
        var _this = this;
        this.rows = [];
        this.columns = [
            { name: 'Company' },
            { name: 'Name' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    TableSortingComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    TableSortingComponent.ɵfac = function TableSortingComponent_Factory(t) { return new (t || TableSortingComponent)(); };
    TableSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableSortingComponent, selectors: [["app-table-sorting"]], decls: 1, vars: 7, consts: [[1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight"]], template: function TableSortingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-datatable", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 50);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]], styles: [".datatable[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFibGVzL3RhYmxlLXNvcnRpbmcvQzpcXFVzZXJzXFxLYXJpbVxcRGVza3RvcFxccGltV2ViXFxCYWhhVjEvc3JjXFxhcHBcXHRhYmxlc1xcdGFibGUtc29ydGluZ1xcdGFibGUtc29ydGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFibGVzL3RhYmxlLXNvcnRpbmcvdGFibGUtc29ydGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0MsWUFBWTtBQ0NiIiwiZmlsZSI6InNyYy9hcHAvdGFibGVzL3RhYmxlLXNvcnRpbmcvdGFibGUtc29ydGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRhdGFibGUsXG4uZGF0YXRhYmxlID4gZGl2LFxuLmRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuXHRoZWlnaHQ6IDEwMCU7XG59IiwiLmRhdGF0YWJsZSxcbi5kYXRhdGFibGUgPiBkaXYsXG4uZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
    return TableSortingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableSortingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-sorting',
                templateUrl: './table-sorting.component.html',
                styleUrls: ['./table-sorting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tables.routing */ "./src/app/tables/tables.routing.ts");
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/tables/table-sorting/table-sorting.component.ts");















var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TablesModule });
    TablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TablesModule_Factory(t) { return new (t || TablesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_5__["TablesRoutes"]),
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"]
            ]] });
    return TablesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TablesModule, { declarations: [_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"],
        _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_7__["TableEditingComponent"],
        _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_8__["TableFilterComponent"],
        _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_9__["TablePagingComponent"],
        _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_10__["TablePinningComponent"],
        _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_11__["TableSelectionComponent"],
        _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__["TableSortingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_5__["TablesRoutes"]),
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"]
                ],
                declarations: [
                    _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"],
                    _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_7__["TableEditingComponent"],
                    _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_8__["TableFilterComponent"],
                    _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_9__["TablePagingComponent"],
                    _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_10__["TablePinningComponent"],
                    _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_11__["TableSelectionComponent"],
                    _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__["TableSortingComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/*!******************************************!*\
  !*** ./src/app/tables/tables.routing.ts ***!
  \******************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-table/data-table.component */ "./src/app/tables/data-table/data-table.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/tables/table-sorting/table-sorting.component.ts");







var TablesRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: _data_table_data_table_component__WEBPACK_IMPORTED_MODULE_0__["DataTableComponent"]
            }, {
                path: 'editing',
                component: _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__["TableEditingComponent"]
            }, {
                path: 'filter',
                component: _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__["TableFilterComponent"]
            }, {
                path: 'paging',
                component: _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__["TablePagingComponent"]
            }, {
                path: 'pinning',
                component: _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_4__["TablePinningComponent"]
            }, {
                path: 'selection',
                component: _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_5__["TableSelectionComponent"]
            }, {
                path: 'sorting',
                component: _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_6__["TableSortingComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map