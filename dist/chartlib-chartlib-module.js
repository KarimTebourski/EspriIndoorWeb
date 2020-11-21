(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chartlib-chartlib-module"],{

/***/ "./src/app/chartlib/bar-charts/bar-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chartlib/bar-charts/bar-chart.component.ts ***!
  \************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../charts.data */ "./src/app/chartlib/charts.data.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");






var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
        };
        Object.assign(this, { single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"], multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"] });
    }
    BarChartComponent.prototype.ngOnInit = function () {
    };
    BarChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
    BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["ms-bar-charts"]], decls: 73, vars: 80, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "w-100", "h-300px"], [3, "scheme", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "results", "select"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vertical Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-charts-bar-vertical", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_vertical_select_9_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Horizontal Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-charts-bar-horizontal", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_horizontal_select_18_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bar Chart 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-charts-bar-vertical-2d", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_vertical_2d_select_27_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Bar Chart 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-charts-bar-horizontal-2d", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_horizontal_2d_select_36_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Bar Chart 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-charts-bar-vertical-stacked", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_vertical_stacked_select_45_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Bar Chart 4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngx-charts-bar-horizontal-stacked", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_horizontal_stacked_select_54_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Bar Chart 5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ngx-charts-bar-vertical-normalized", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_vertical_normalized_select_63_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Bar Chart 6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ngx-charts-bar-horizontal-normalized", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function BarChartComponent_Template_ngx_charts_bar_horizontal_normalized_select_72_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("results", ctx.single);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.yAxisLabel)("yAxisLabel", ctx.xAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.yAxisLabel)("yAxisLabel", ctx.xAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.yAxisLabel)("yAxisLabel", ctx.xAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.yAxisLabel)("yAxisLabel", ctx.xAxisLabel);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVerticalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarHorizontalComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVertical2DComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarHorizontal2DComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVerticalStackedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarHorizontalStackedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarVerticalNormalizedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["BarHorizontalNormalizedComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0bGliL2Jhci1jaGFydHMvYmFyLWNoYXJ0LWNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
    return BarChartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ms-bar-charts',
                templateUrl: './bar-chart-component.html',
                styleUrls: ['./bar-chart-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chartlib/chartlib.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chartlib/chartlib.module.ts ***!
  \*********************************************/
/*! exports provided: ChartlibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartlibModule", function() { return ChartlibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm5/ng2-charts.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");
/* harmony import */ var _ng2_charts_ng2charts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng2-charts/ng2charts.component */ "./src/app/chartlib/ng2-charts/ng2charts.component.ts");
/* harmony import */ var _bar_charts_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-charts/bar-chart.component */ "./src/app/chartlib/bar-charts/bar-chart.component.ts");
/* harmony import */ var _pie_charts_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pie-charts/pie-chart.component */ "./src/app/chartlib/pie-charts/pie-chart.component.ts");
/* harmony import */ var _line_charts_line_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-charts/line-chart.component */ "./src/app/chartlib/line-charts/line-chart.component.ts");
/* harmony import */ var _mixed_charts_mixed_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mixed-charts/mixed-chart.component */ "./src/app/chartlib/mixed-charts/mixed-chart.component.ts");
/* harmony import */ var _chartlib_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chartlib.routing */ "./src/app/chartlib/chartlib.routing.ts");















var ChartlibModule = /** @class */ (function () {
    function ChartlibModule() {
    }
    ChartlibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChartlibModule });
    ChartlibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChartlibModule_Factory(t) { return new (t || ChartlibModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_chartlib_routing__WEBPACK_IMPORTED_MODULE_12__["ChartlibRoutes"]),
                ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ]] });
    return ChartlibModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChartlibModule, { declarations: [_ng2_charts_ng2charts_component__WEBPACK_IMPORTED_MODULE_7__["Ng2ChartsComponent"],
        _bar_charts_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"],
        _pie_charts_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartDemoComponent"],
        _line_charts_line_chart_component__WEBPACK_IMPORTED_MODULE_10__["LineChartDemoComponent"],
        _mixed_charts_mixed_chart_component__WEBPACK_IMPORTED_MODULE_11__["MixedChartDemoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartlibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_chartlib_routing__WEBPACK_IMPORTED_MODULE_12__["ChartlibRoutes"]),
                    ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
                ],
                declarations: [
                    _ng2_charts_ng2charts_component__WEBPACK_IMPORTED_MODULE_7__["Ng2ChartsComponent"],
                    _bar_charts_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"],
                    _pie_charts_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["PieChartDemoComponent"],
                    _line_charts_line_chart_component__WEBPACK_IMPORTED_MODULE_10__["LineChartDemoComponent"],
                    _mixed_charts_mixed_chart_component__WEBPACK_IMPORTED_MODULE_11__["MixedChartDemoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chartlib/chartlib.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/chartlib/chartlib.routing.ts ***!
  \**********************************************/
/*! exports provided: ChartlibRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartlibRoutes", function() { return ChartlibRoutes; });
/* harmony import */ var _ng2_charts_ng2charts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng2-charts/ng2charts.component */ "./src/app/chartlib/ng2-charts/ng2charts.component.ts");
/* harmony import */ var _bar_charts_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-charts/bar-chart.component */ "./src/app/chartlib/bar-charts/bar-chart.component.ts");
/* harmony import */ var _pie_charts_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-charts/pie-chart.component */ "./src/app/chartlib/pie-charts/pie-chart.component.ts");
/* harmony import */ var _line_charts_line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-charts/line-chart.component */ "./src/app/chartlib/line-charts/line-chart.component.ts");
/* harmony import */ var _mixed_charts_mixed_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixed-charts/mixed-chart.component */ "./src/app/chartlib/mixed-charts/mixed-chart.component.ts");





var ChartlibRoutes = [{
        path: '',
        redirectTo: 'ng2-charts',
        pathMatch: 'full',
    }, {
        path: '',
        children: [{
                path: 'ng2-charts',
                component: _ng2_charts_ng2charts_component__WEBPACK_IMPORTED_MODULE_0__["Ng2ChartsComponent"]
            }, {
                path: 'bar-charts',
                component: _bar_charts_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__["BarChartComponent"]
            }, {
                path: 'pie-charts',
                component: _pie_charts_pie_chart_component__WEBPACK_IMPORTED_MODULE_2__["PieChartDemoComponent"]
            }, {
                path: 'line-charts',
                component: _line_charts_line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartDemoComponent"]
            }, {
                path: 'mixed-charts',
                component: _mixed_charts_mixed_chart_component__WEBPACK_IMPORTED_MODULE_4__["MixedChartDemoComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/chartlib/charts.data.ts":
/*!*****************************************!*\
  !*** ./src/app/chartlib/charts.data.ts ***!
  \*****************************************/
/*! exports provided: single, multi, bubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multi", function() { return multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
var single = [
    {
        name: 'Germany',
        value: 40632
    },
    {
        name: 'USA',
        value: 49737
    },
    {
        name: 'France',
        value: 36745
    },
    {
        name: 'UK',
        value: 36240
    },
    {
        name: 'Spain',
        value: 33000
    },
    {
        name: 'Italy',
        value: 35800
    }
];
var multi = [
    {
        name: 'Germany',
        series: [
            {
                name: '2017',
                value: 71632
            },
            {
                name: '2010',
                value: 40632
            },
            {
                name: '2000',
                value: 76953
            },
            {
                name: '1990',
                value: 31476
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2017',
                value: 82632
            },
            {
                name: '2010',
                value: 49737
            },
            {
                name: '2000',
                value: 55986
            },
            {
                name: '1990',
                value: 37060
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2017',
                value: 51732
            },
            {
                name: '2010',
                value: 36745
            },
            {
                name: '2000',
                value: 34774
            },
            {
                name: '1990',
                value: 29476
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: '2017',
                value: 95652
            },
            {
                name: '2010',
                value: 36240
            },
            {
                name: '2000',
                value: 32543
            },
            {
                name: '1990',
                value: 26424
            }
        ]
    }
];
var bubble = [
    {
        name: 'Germany',
        series: [
            {
                name: '2009',
                x: new Date(2009, 0, 1),
                y: 80.3,
                r: 80.4
            },
            {
                name: '2006',
                x: new Date(2006, 0, 1),
                y: 80.3,
                r: 78
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 77.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 79
            }
        ]
    },
    {
        name: 'USA',
        series: [
            {
                name: '2010',
                x: new Date(2010, 0, 1),
                y: 78.8,
                r: 310
            },
            {
                name: '2005',
                x: new Date(2005, 0, 1),
                y: 76.9,
                r: 283
            },
            {
                name: '1996',
                x: new Date(1996, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.4,
                r: 253
            }
        ]
    },
    {
        name: 'France',
        series: [
            {
                name: '2008',
                x: new Date(2008, 0, 1),
                y: 81.4,
                r: 63
            },
            {
                name: '2000',
                x: new Date(2000, 0, 1),
                y: 79.1,
                r: 59.4
            },
            {
                name: '1994',
                x: new Date(1994, 0, 1),
                y: 76.7,
                r: 58.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 77.2,
                r: 56.9
            }
        ]
    },
    {
        name: 'UK',
        series: [
            {
                name: '2007',
                x: new Date(2007, 0, 1),
                y: 80.2,
                r: 62.7
            },
            {
                name: '2003',
                x: new Date(2003, 0, 1),
                y: 77.8,
                r: 58.9
            },
            {
                name: '1995',
                x: new Date(1995, 0, 1),
                y: 78.7,
                r: 59.1
            },
            {
                name: '1990',
                x: new Date(1990, 0, 1),
                y: 75.7,
                r: 57.1
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/chartlib/line-charts/line-chart.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/chartlib/line-charts/line-chart.component.ts ***!
  \**************************************************************/
/*! exports provided: LineChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartDemoComponent", function() { return LineChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../charts.data */ "./src/app/chartlib/charts.data.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");






var LineChartDemoComponent = /** @class */ (function () {
    function LineChartDemoComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
        };
        this.autoScale = true;
        Object.assign(this, { single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"], multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"] });
    }
    LineChartDemoComponent.prototype.ngOnInit = function () { };
    LineChartDemoComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    LineChartDemoComponent.ɵfac = function LineChartDemoComponent_Factory(t) { return new (t || LineChartDemoComponent)(); };
    LineChartDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartDemoComponent, selectors: [["ms-line-charts"]], decls: 37, vars: 42, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "w-100", "h-300px"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "autoScale", "select"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "select"]], template: function LineChartDemoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Line Chart 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-charts-line-chart", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function LineChartDemoComponent_Template_ngx_charts_line_chart_select_9_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Line Chart 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-charts-area-chart", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function LineChartDemoComponent_Template_ngx_charts_area_chart_select_18_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Line Chart 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-charts-area-chart-stacked", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function LineChartDemoComponent_Template_ngx_charts_area_chart_stacked_select_27_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Line Chart 4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-charts-area-chart-normalized", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function LineChartDemoComponent_Template_ngx_charts_area_chart_normalized_select_36_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel)("autoScale", ctx.autoScale);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.multi)("gradient", ctx.gradient)("xAxis", ctx.showXAxis)("yAxis", ctx.showYAxis)("legend", ctx.showLegend)("showXAxisLabel", ctx.showXAxisLabel)("showYAxisLabel", ctx.showYAxisLabel)("xAxisLabel", ctx.xAxisLabel)("yAxisLabel", ctx.yAxisLabel);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["AreaChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["AreaChartStackedComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["AreaChartNormalizedComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0bGliL2xpbmUtY2hhcnRzL2xpbmUtY2hhcnQtY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
    return LineChartDemoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ms-line-charts',
                templateUrl: './line-chart-component.html',
                styleUrls: ['./line-chart-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chartlib/mixed-charts/mixed-chart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chartlib/mixed-charts/mixed-chart.component.ts ***!
  \****************************************************************/
/*! exports provided: MixedChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixedChartDemoComponent", function() { return MixedChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../charts.data */ "./src/app/chartlib/charts.data.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");






var MixedChartDemoComponent = /** @class */ (function () {
    function MixedChartDemoComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
        };
        this.autoScale = true;
        Object.assign(this, { single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"], multi: _charts_data__WEBPACK_IMPORTED_MODULE_1__["multi"] });
    }
    MixedChartDemoComponent.prototype.ngOnInit = function () {
    };
    MixedChartDemoComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    MixedChartDemoComponent.ɵfac = function MixedChartDemoComponent_Factory(t) { return new (t || MixedChartDemoComponent)(); };
    MixedChartDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MixedChartDemoComponent, selectors: [["ms-mixed-charts"]], decls: 28, vars: 13, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "w-100", "h-300px"], [3, "scheme", "results", "select"], [3, "scheme", "results", "min", "max", "angleSpan", "startAngle", "units", "bigSegments", "smallSegments", "select"]], template: function MixedChartDemoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mixed Chart 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-charts-tree-map", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MixedChartDemoComponent_Template_ngx_charts_tree_map_select_9_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mixed Chart 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-charts-number-card", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MixedChartDemoComponent_Template_ngx_charts_number_card_select_18_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mixed Chart 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-charts-gauge", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function MixedChartDemoComponent_Template_ngx_charts_gauge_select_27_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("min", 0)("max", 100)("angleSpan", 240)("startAngle", 0 - 120)("units", "alerts")("bigSegments", 10)("smallSegments", 5);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["TreeMapComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NumberCardComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["GaugeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0bGliL21peGVkLWNoYXJ0cy9taXhlZC1jaGFydC1jb21wb25lbnQuc2NzcyJ9 */"], encapsulation: 2 });
    return MixedChartDemoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MixedChartDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ms-mixed-charts',
                templateUrl: './mixed-chart-component.html',
                styleUrls: ['./mixed-chart-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chartlib/ng2-charts/ng2charts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chartlib/ng2-charts/ng2charts.component.ts ***!
  \************************************************************/
/*! exports provided: Ng2ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2ChartsComponent", function() { return Ng2ChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm5/ng2-charts.js");





var Ng2ChartsComponent = /** @class */ (function () {
    function Ng2ChartsComponent() {
        this.globalChartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        // Bar
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        position: 'left',
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Horizontal Bar Chart
        this.barChartHorizontalType = 'horizontalBar';
        this.barChartHorizontalOptions = Object.assign({
            scaleShowVerticalLines: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Bar Chart Stacked
        this.barChartStackedOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.globalChartOptions);
        // Doughnut
        this.doughnutChartColors = [{
                backgroundColor: ['#f44336', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f']
            }];
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.doughnutOptions = Object.assign({
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        }, this.globalChartOptions);
        // Line Chart
        this.lineChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1
            }];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.lineChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        this.lineChartColors = [{
                backgroundColor: '#7986cb',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartSteppedData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }];
        this.lineChartPointsData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.lineChartPointsOptions = Object.assign({
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        }, this.globalChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        // Combo Chart
        this.ComboChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.ComboChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.ComboChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [{
                data: [65, 59, 90, 81, 56, 55, 40],
                label: 'Series A'
            }, {
                data: [28, 48, 40, 19, 96, 27, 100],
                label: 'Series B'
            }];
        this.radarChartType = 'radar';
    }
    Ng2ChartsComponent.ɵfac = function Ng2ChartsComponent_Factory(t) { return new (t || Ng2ChartsComponent)(); };
    Ng2ChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Ng2ChartsComponent, selectors: [["app-ng2charts"]], decls: 109, vars: 69, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "33.33", "fxFlex.gt-xs", "50", "fxFlex", "100"], ["height", "200", "baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], ["height", "200", "baseChart", "", 1, "chart", 3, "data", "labels", "options", "colors", "chartType"], ["height", "200", "baseChart", "", 1, "chart", 3, "data", "options", "colors", "labels", "chartType"], ["height", "200", "baseChart", "", 1, "chart", 3, "data", "options", "colors", "labels", "legend", "chartType"], ["height", "200", "baseChart", "", 1, "chart", 3, "datasets", "options", "colors", "labels", "chartType"]], template: function Ng2ChartsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stacked");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Line");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Line");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Stepped");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Line");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Points");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Mixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Mix different charts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Bubble");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Display three dimensions of data");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "canvas", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Doughnut");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Pie chart with a cutout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "canvas", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Pie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Without the cutout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "canvas", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Polar area");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Each segment has the same angle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "canvas", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Radar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Multiple data points and the variation between them");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "canvas", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("colors", ctx.lineChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartHorizontalOptions)("colors", ctx.lineChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartHorizontalType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartStackedOptions)("colors", ctx.lineChartColors)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartSteppedData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartPointsData)("labels", ctx.lineChartLabels)("options", ctx.lineChartPointsOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.ComboChartData)("labels", ctx.lineChartLabels)("options", ctx.ComboChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.barChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.bubbleChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.bubbleChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.doughnutChartData)("labels", ctx.doughnutChartLabels)("options", ctx.doughnutOptions)("colors", ctx.doughnutChartColors)("chartType", ctx.doughnutChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("options", ctx.doughnutOptions)("colors", ctx.doughnutChartColors)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.polarAreaChartData)("options", ctx.doughnutOptions)("colors", ctx.doughnutChartColors)("labels", ctx.polarAreaChartLabels)("legend", ctx.polarAreaLegend)("chartType", ctx.polarAreaChartType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.radarChartData)("options", ctx.globalChartOptions)("colors", ctx.lineChartColors)("labels", ctx.radarChartLabels)("chartType", ctx.radarChartType);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0bGliL25nMi1jaGFydHMvbmcyY2hhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return Ng2ChartsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2ChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng2charts',
                templateUrl: './ng2charts.component.html',
                styleUrls: ['./ng2charts.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/chartlib/pie-charts/pie-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chartlib/pie-charts/pie-chart.component.ts ***!
  \************************************************************/
/*! exports provided: PieChartDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartDemoComponent", function() { return PieChartDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _charts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../charts.data */ "./src/app/chartlib/charts.data.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/__ivy_ngcc__/fesm5/swimlane-ngx-charts.js");






var PieChartDemoComponent = /** @class */ (function () {
    function PieChartDemoComponent() {
        this.showLegend = true;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#673ab7', '#f44336', '#009688 ', '#2196f3']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        Object.assign(this, { single: _charts_data__WEBPACK_IMPORTED_MODULE_1__["single"] });
    }
    PieChartDemoComponent.prototype.ngOnInit = function () {
    };
    PieChartDemoComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PieChartDemoComponent.ɵfac = function PieChartDemoComponent_Factory(t) { return new (t || PieChartDemoComponent)(); };
    PieChartDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartDemoComponent, selectors: [["ms-pie-charts"]], decls: 28, vars: 12, consts: [["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "w-100", "h-300px"], [3, "scheme", "results", "legend", "explodeSlices", "labels", "doughnut", "gradient", "select"], [3, "scheme", "results", "gradient", "select"], [3, "scheme", "results", "select"]], template: function PieChartDemoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pie Chart 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-charts-pie-chart", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PieChartDemoComponent_Template_ngx_charts_pie_chart_select_9_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pie Chart 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ngx-charts-advanced-pie-chart", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PieChartDemoComponent_Template_ngx_charts_advanced_pie_chart_select_18_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pie Chart 3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ngx-charts-pie-grid", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function PieChartDemoComponent_Template_ngx_charts_pie_grid_select_27_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("legend", ctx.showLegend)("explodeSlices", ctx.explodeSlices)("labels", ctx.showLabels)("doughnut", ctx.doughnut)("gradient", ctx.gradient);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single)("gradient", ctx.gradient);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scheme", ctx.colorScheme)("results", ctx.single);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["PieChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["AdvancedPieChartComponent"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["PieGridComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0bGliL3BpZS1jaGFydHMvcGllLWNoYXJ0LWNvbXBvbmVudC5zY3NzIn0= */"], encapsulation: 2 });
    return PieChartDemoComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ms-pie-charts',
                templateUrl: './pie-chart-component.html',
                styleUrls: ['./pie-chart-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=chartlib-chartlib-module.js.map