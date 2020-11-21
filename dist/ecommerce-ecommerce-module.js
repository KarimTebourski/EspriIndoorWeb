(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecommerce-module"],{

/***/ "./src/app/ecommerce/ecommerce-cart/ecommerce-cart.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ecommerce/ecommerce-cart/ecommerce-cart.component.ts ***!
  \**********************************************************************/
/*! exports provided: EcommerceCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceCartComponent", function() { return EcommerceCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");





var EcommerceCartComponent = /** @class */ (function () {
    function EcommerceCartComponent() {
    }
    EcommerceCartComponent.prototype.ngOnInit = function () {
    };
    EcommerceCartComponent.ɵfac = function EcommerceCartComponent_Factory(t) { return new (t || EcommerceCartComponent)(); };
    EcommerceCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceCartComponent, selectors: [["ms-ecommerce-cart"]], decls: 97, vars: 0, consts: [[1, "mt-0"], ["method", "post"], ["cellspacing", "0", 1, "shop-table", "table-responsive"], [1, "product-remove"], [1, "product-thumbnail"], [1, "product-name"], [1, "product-price"], [1, "product-quantity"], [1, "product-subtotal"], [1, "cart_item"], ["href", "#", "title", "Remove this item", 1, "remove"], ["href", "#"], ["src", "assets/images/nike.jpg", "alt", "", "width", "100"], [1, "amount"], [1, "price"], ["data-title", "Quantity", 1, "product-quantity"], [1, "quantity", "buttons_added"], ["step", "1", "min", "0", "max", "", "value", "3", "title", "Qty", "size", "4", "type", "number", 1, "text"], ["data-title", "Total", 1, "product-subtotal"], [1, "price-amount"], ["colspan", "6", 1, "actions"], ["mat-raised-button", "", "color", "primary", 1, "mr-1", "update-btn"], [1, "clearfix", "order-total"], [1, "calculated-shipping"], ["cellspacing", "0", 1, "table-responsive"], [1, "cart-subtotal"], [1, "currency-symbol"], [1, "order-total"], [1, "order-checkout"], ["mat-raised-button", "", "color", "primary", 1, "mr-1"]], template: function EcommerceCartComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Quantity");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "External Flash");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "23.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "69.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00D7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "External Flash");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "23.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "69.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Update");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cart Totals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "table", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Subtotal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "167.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "$");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "167.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Checkout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["table.shop-table {\n  border-collapse: separate;\n  border-spacing: 0;\n  border-width: 1px 0 0 1px;\n  table-layout: fixed;\n  width: 100%;\n  padding: 1rem;\n}\n\ntable {\n  width: 100%;\n}\n\n.m-t-0 {\n  margin-top: 0;\n}\n\n.table-responsive {\n  text-align: left;\n}\n\n.calculated-shipping {\n  width: 50%;\n  float: right;\n  padding: 1rem;\n}\n\n.update-btn {\n  float: right;\n}\n\n.order-checkout {\n  margin-top: 1rem;\n}\n\ntable.shop-table th {\n  text-align: left;\n}\n\ntable td,\ntable th {\n  border: none;\n  border-bottom: 1px solid #e9e9e9;\n  padding: 12px;\n  vertical-align: middle;\n}\n\n.order-total {\n  padding-bottom: 2rem;\n}\n\n.product-name {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.product-remove {\n  width: 7%;\n}\n\n.product-remove .remove {\n  font-size: 2rem;\n}\n\n.quantity.buttons_added input {\n  width: 50px;\n}\n\n@media (max-width: 768px) {\n  .main-detail-product {\n    padding: 0.3rem !important;\n  }\n}\n\n@media (max-width: 580px) {\n  .product-thumbnail {\n    display: none;\n  }\n  .calculated-shipping {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1jYXJ0L0M6XFxVc2Vyc1xcS2FyaW1cXERlc2t0b3BcXHBpbVdlYlxcQmFoYVYxL3NyY1xcYXBwXFxlY29tbWVyY2VcXGVjb21tZXJjZS1jYXJ0XFxlY29tbWVyY2UtY2FydC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1jYXJ0L2Vjb21tZXJjZS1jYXJ0LWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FDQ2pCOztBREVBO0VBQ0ksV0FBVztBQ0NmOztBREVBO0VBQ0ksYUFBYTtBQ0NqQjs7QURFQTtFQUNJLGdCQUFnQjtBQ0NwQjs7QURFQTtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtBQ0NqQjs7QURFQTtFQUNJLFlBQVk7QUNDaEI7O0FERUE7RUFDSSxnQkFBZ0I7QUNDcEI7O0FERUE7RUFDSSxnQkFBZ0I7QUNDcEI7O0FERUE7O0VBRUksWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0FDQzFCOztBREVBO0VBQ0ksb0JBQW9CO0FDQ3hCOztBREVBO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtBQ0NyQjs7QURFQTtFQUNJLFNBQVM7QUNDYjs7QURGQTtFQUdRLGVBQWU7QUNHdkI7O0FEQUE7RUFFUSxXQUFXO0FDRW5COztBREVBO0VBQ0k7SUFDSSwwQkFBMEI7RUNDaEM7QUFDRjs7QURFQTtFQUNFO0lBQ0QsYUFBYTtFQ0NaO0VEQ0U7SUFDSSxXQUFXO0VDQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvZWNvbW1lcmNlLWNhcnQvZWNvbW1lcmNlLWNhcnQtY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZS5zaG9wLXRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tLXQtMCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYWxjdWxhdGVkLXNoaXBwaW5nIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udXBkYXRlLWJ0biB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ub3JkZXItY2hlY2tvdXQge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbnRhYmxlLnNob3AtdGFibGUgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRhYmxlIHRkLFxudGFibGUgdGgge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5vcmRlci10b3RhbCB7XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5wcm9kdWN0LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3QtcmVtb3ZlIHtcbiAgICB3aWR0aDogNyU7XG4gICAgLnJlbW92ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59XG4ucXVhbnRpdHkuYnV0dG9uc19hZGRlZHtcbiAgICBpbnB1dHtcbiAgICAgICAgd2lkdGg6IDUwcHg7ICBcbiAgICB9XG4gIFxufVxuQG1lZGlhKG1heC13aWR0aDo3NjhweCkge1xuICAgIC5tYWluLWRldGFpbC1wcm9kdWN0IHtcbiAgICAgICAgcGFkZGluZzogMC4zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuQG1lZGlhKG1heC13aWR0aDo1ODBweCl7XG4gIC5wcm9kdWN0LXRodW1ibmFpbCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4gICAgLmNhbGN1bGF0ZWQtc2hpcHBpbmd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCJ0YWJsZS5zaG9wLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAxcHg7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubS10LTAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jYWxjdWxhdGVkLXNoaXBwaW5nIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4udXBkYXRlLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm9yZGVyLWNoZWNrb3V0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxudGFibGUuc2hvcC10YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnRhYmxlIHRkLFxudGFibGUgdGgge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xuICBwYWRkaW5nOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ub3JkZXItdG90YWwge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0LXJlbW92ZSB7XG4gIHdpZHRoOiA3JTtcbn1cblxuLnByb2R1Y3QtcmVtb3ZlIC5yZW1vdmUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5xdWFudGl0eS5idXR0b25zX2FkZGVkIGlucHV0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1kZXRhaWwtcHJvZHVjdCB7XG4gICAgcGFkZGluZzogMC4zcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5wcm9kdWN0LXRodW1ibmFpbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2FsY3VsYXRlZC1zaGlwcGluZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return EcommerceCartComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-ecommerce-cart',
                templateUrl: './ecommerce-cart-component.html',
                styleUrls: ['./ecommerce-cart-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce-checkout/ecommerce-checkout.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ecommerce/ecommerce-checkout/ecommerce-checkout.component.ts ***!
  \******************************************************************************/
/*! exports provided: EcommerceCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceCheckoutComponent", function() { return EcommerceCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");









function EcommerceCheckoutComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Credit/Debit Cards");
} }
function EcommerceCheckoutComponent_ng_template_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Paypal");
} }
var EcommerceCheckoutComponent = /** @class */ (function () {
    function EcommerceCheckoutComponent() {
    }
    EcommerceCheckoutComponent.prototype.ngOnInit = function () {
    };
    EcommerceCheckoutComponent.ɵfac = function EcommerceCheckoutComponent_Factory(t) { return new (t || EcommerceCheckoutComponent)(); };
    EcommerceCheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceCheckoutComponent, selectors: [["ms-ecommerce-checkout"]], decls: 103, vars: 0, consts: [[1, "p-2"], [1, "mb-2"], ["fxLayout", "row wrap"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50", 1, "column"], ["form", "ngForm"], ["fxLayout", "column", "fxLayoutAlign", "start stretch"], [2, "width", "100%"], ["matInput", "", "placeholder", "First Name", "type", "text", "name", "name", "required", ""], ["matInput", "", "placeholder", "Last Name", "type", "text", "name", "name", "required", ""], ["matInput", "", "placeholder", "Company Name", "type", "text", "name", "cname", "required", ""], ["matInput", "", "placeholder", "Country", "type", "text", "name", "ctry", "required", ""], ["matInput", "", "placeholder", "E Mail", "type", "email", "name", "email", "required", ""], [1, "mb-1", 2, "width", "100%"], ["matInput", "", "placeholder", "Phone", "type", "text", "name", "password1", "required", ""], ["matInput", "", "placeholder", "Address", "type", "text", "name", "password16", "required", ""], ["mat-raised-button", "", 1, "mat-green"], ["matInput", "", "placeholder", "Notes", "type", "text", "name", "password16", "required", ""], [1, "p-2", "mb-3"], [1, "shop_table", "woocommerce-checkout-review-order-table"], [1, "product-name"], [1, "product-total"], [1, "cart_item"], [1, "product-quantity"], [1, "woocommerce-Price-amount", "amount"], [1, "woocommerce-Price-currencySymbol"], [1, "cart-subtotal"], [1, "order-total"], [1, "mt-2"], ["mat-tab-label", ""], ["matInput", "", "placeholder", "Card Holder Name", "type", "text", "name", "name", "required", ""], ["matInput", "", "placeholder", "CVV", "type", "text", "name", "name", "required", ""], ["matInput", "", "placeholder", "Card Number", "type", "text", "name", "cname", "required", ""], ["matInput", "", "placeholder", "Expiration Date: 01/16", "type", "text", "name", "ctry", "required", ""]], template: function EcommerceCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Billing Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Additional Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Your order");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Bonsai Cutter\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u00D7 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "249.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tfoot");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Subtotal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "249.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u00A3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "249.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Payment By");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-tab-group", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, EcommerceCheckoutComponent_ng_template_78_Template, 1, 0, "ng-template", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "form", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, EcommerceCheckoutComponent_ng_template_94_Template, 1, 0, "ng-template", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Paypal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Pay via PayPal; you can pay with your credit card if you don\u2019t have a PayPal account.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Proceed To Paypal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: ["table {\n  width: 100%;\n}\n\ntable th,\ntable td {\n  padding: 0.5rem;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1jaGVja291dC9DOlxcVXNlcnNcXEthcmltXFxEZXNrdG9wXFxwaW1XZWJcXEJhaGFWMS9zcmNcXGFwcFxcZWNvbW1lcmNlXFxlY29tbWVyY2UtY2hlY2tvdXRcXGVjb21tZXJjZS1jaGVja291dC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1jaGVja291dC9lY29tbWVyY2UtY2hlY2tvdXQtY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFXO0FDRGY7O0FEQUE7O0VBSVEsZUFBZTtFQUNmLGtCQUFrQjtBQ0MxQiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UtY2hlY2tvdXQvZWNvbW1lcmNlLWNoZWNrb3V0LWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"], encapsulation: 2 });
    return EcommerceCheckoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceCheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-ecommerce-checkout',
                templateUrl: './ecommerce-checkout-component.html',
                styleUrls: ['./ecommerce-checkout-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce-product-detail/ecommerce-product-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ecommerce/ecommerce-product-detail/ecommerce-product-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EcommerceProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductDetailComponent", function() { return EcommerceProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");






function EcommerceProductDetailComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Additional Info");
} }
function EcommerceProductDetailComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Activities");
} }
var EcommerceProductDetailComponent = /** @class */ (function () {
    function EcommerceProductDetailComponent() {
    }
    EcommerceProductDetailComponent.prototype.ngOnInit = function () {
    };
    EcommerceProductDetailComponent.ɵfac = function EcommerceProductDetailComponent_Factory(t) { return new (t || EcommerceProductDetailComponent)(); };
    EcommerceProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceProductDetailComponent, selectors: [["ms-ecommerce-product-detail"]], decls: 145, vars: 0, consts: [[1, "p-2", "main-detail-product"], ["fxLayout", "row wrap", 1, "product-detail"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50", 1, "column", "m-gap", "p-gap", "product-img"], [1, "img-thumbnail"], ["src", "assets/images/nike.jpg", 1, "left"], ["fxFlex.xs", "100", "fxFlex.sm", "100", "fxFlex.md", "50", "fxFlex.lg", "50", "fxFlex.xl", "50", 1, "column", "m-gap", "p-gap", "product-info"], [1, ""], [1, "price"], [1, "sale"], ["mat-raised-button", "", "color", "primary", 1, "mr-1"], [1, "separator"], [1, "share-with"], [1, "fa", "fa-eye", "fa-2x"], [1, "fa", "fa-heart-o", "fa-2x"], [1, "fa", "fa-envelope-o", "fa-2x"], [1, "fa", "fa-share-alt", "fa-2x"], [1, "p-2"], [1, "mt-2"], ["mat-tab-label", ""], [1, "activity-stream"], [1, "shadow-none"], ["mat-card-avatar", "", "src", "assets/images/avatar.jpg"], [1, "product-review"], [1, "fa", "fa-star"], ["href", "javascript:;", 1, "mr-1"], ["href", "javascript:;"], [1, "fa", "fa-star-half"], [1, "fa", "fa-star-o"]], template: function EcommerceProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nike Gym Shoe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "$120");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "$129");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add To Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About Nike Gym Shoe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab-group", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EcommerceProductDetailComponent_ng_template_33_Template, 1, 0, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatum nisi est? Libero obcaecati ipsam culpa quas! Dolorem assumenda inventore, officiis quia neque nihil possimus a nemo, doloribus, non omnis!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Article No");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " : N-12043433B");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Weight");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " : 2 kg");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dimensions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " : 5 x 3 x 1 cm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " : 42M");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " : Gray,Blue,White");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, EcommerceProductDetailComponent_ng_template_58_Template, 1, 0, "ng-template", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Reviews");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur voluptatum nisi est? Libero obcaecati ipsam culpa quas! Dolorem assumenda inventore, officiis quia neque nihil possimus a nemo, doloribus, non omnis! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Kylie Woods");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "June 01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "consectetur adipisicing elit. Sapiente accusantium eaque dolor aspernatur tempore officia inventore qui provident, architecto, iste!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Reply");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-card", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Kylie Woods");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "June 01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "consectetur adipisicing elit. Sapiente accusantium eaque dolor aspernatur tempore officia inventore qui provident, architecto, iste!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Reply");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Kylie Woods");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "June 01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "consectetur adipisicing elit. Sapiente accusantium eaque dolor aspernatur tempore officia inventore qui provident, architecto, iste!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Reply");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-card", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Kylie Woods");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "June 01");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "consectetur adipisicing elit. Sapiente accusantium eaque dolor aspernatur tempore officia inventore qui provident, architecto, iste!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Like");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Reply");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"]], styles: [".product-detail {\n  margin-top: 3rem;\n  padding-top: 4rem;\n  padding-bottom: 2rem;\n}\n\n.img-thumbnail {\n  box-shadow: 10px 10px 18px 0px rgba(0, 0, 0, 0.25);\n}\n\n.product-review i {\n  color: #f44336;\n}\n\n.fab {\n  position: absolute;\n  right: 50px;\n  bottom: -40px;\n  box-sizing: border-box;\n  padding-top: 18px;\n  background-color: #1875D0;\n  width: 80px;\n  height: 80px;\n  color: white;\n  text-align: center;\n  border-radius: 50%;\n  box-shadow: 10px 10px 50px 0px rgba(0, 0, 0, 0.75);\n}\n\n.product-img {\n  margin-top: -20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.sale {\n  text-decoration: line-through;\n  font-size: 1rem;\n  display: inline-block;\n  margin: 1rem;\n}\n\n.share-with {\n  margin-top: 2rem;\n  padding: 0;\n}\n\n.share-with li {\n  display: inline-block;\n  margin: 0 1rem;\n}\n\n.share-with li:first-child {\n  margin-left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1wcm9kdWN0LWRldGFpbC9DOlxcVXNlcnNcXEthcmltXFxEZXNrdG9wXFxwaW1XZWJcXEJhaGFWMS9zcmNcXGFwcFxcZWNvbW1lcmNlXFxlY29tbWVyY2UtcHJvZHVjdC1kZXRhaWxcXGVjb21tZXJjZS1wcm9kdWN0LWRldGFpbC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1wcm9kdWN0LWRldGFpbC9lY29tbWVyY2UtcHJvZHVjdC1kZXRhaWwtY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQ0N4Qjs7QURFQTtFQUNJLGtEQUFrRDtBQ0N0RDs7QURFQTtFQUVRLGNBQWM7QUNBdEI7O0FESUE7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBR2xCLGtEQUFrRDtBQ0R0RDs7QURJQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDRHZCOztBRElBO0VBQ0ksNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsWUFBWTtBQ0RoQjs7QURJQTtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0FDRGQ7O0FEREE7RUFJUSxxQkFBcUI7RUFDckIsY0FBYztBQ0N0Qjs7QUROQTtFQU9ZLGNBQWM7QUNHMUIiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvZWNvbW1lcmNlLXByb2R1Y3QtZGV0YWlsL2Vjb21tZXJjZS1wcm9kdWN0LWRldGFpbC1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRldGFpbCB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLmltZy10aHVtYm5haWwge1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4ucHJvZHVjdC1yZXZpZXcge1xuICAgIGkge1xuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG59XG5cbi5mYWIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICBib3R0b206IC00MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzVEMDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2FsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDFyZW07XG59XG5cbi5zaGFyZS13aXRoIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnByb2R1Y3QtZGV0YWlsIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZy10b3A6IDRyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uaW1nLXRodW1ibmFpbCB7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG4ucHJvZHVjdC1yZXZpZXcgaSB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZmFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiAtNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODc1RDA7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDUwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2FsZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uc2hhcmUtd2l0aCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaGFyZS13aXRoIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXJlbTtcbn1cblxuLnNoYXJlLXdpdGggbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbiJdfQ== */"], encapsulation: 2 });
    return EcommerceProductDetailComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-ecommerce-product-detail',
                templateUrl: './ecommerce-product-detail-component.html',
                styleUrls: ['./ecommerce-product-detail-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce-product/ecommerce-product.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ecommerce/ecommerce-product/ecommerce-product.component.ts ***!
  \****************************************************************************/
/*! exports provided: EcommerceProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceProductComponent", function() { return EcommerceProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex.es5.js");




var EcommerceProductComponent = /** @class */ (function () {
    function EcommerceProductComponent() {
    }
    EcommerceProductComponent.prototype.ngOnInit = function () {
    };
    EcommerceProductComponent.ɵfac = function EcommerceProductComponent_Factory(t) { return new (t || EcommerceProductComponent)(); };
    EcommerceProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceProductComponent, selectors: [["ms-ecommerce-product"]], decls: 376, vars: 0, consts: [[1, "mt-0"], [1, "mb-2"], ["fxLayout", "row wrap"], ["fxFlex.sm", "33.33", "fxFlex.xs", "100", "fxFlex.sm", "50", "fxFlex.md", "33.33", "fxFlex.lg", "33.33", "fxFlex.xl", "33.33", 1, "m-gap", "p-gap"], [1, "p-list-main", "mb-2"], [1, "p-list"], [1, "top"], ["src", "assets/images/nike.jpg", "alt", ""], [1, "bottom"], [1, "left"], [1, "details"], [1, "buy"], [1, "material-icons"], [1, "inside"], [1, "icon"], [1, "contents"], ["src", "assets/images/p-1.jpg", "alt", ""], ["src", "assets/images/p-2.jpg", "alt", ""], ["src", "assets/images/p-3.jpg", "alt", ""], ["src", "assets/images/p-4.jpg", "alt", ""], ["src", "assets/images/p-5.jpg", "alt", ""], ["src", "assets/images/p-6.jpg", "alt", ""], ["src", "assets/images/p-7.jpg", "alt", ""], ["src", "assets/images/p-8.jpg", "alt", ""]], template: function EcommerceProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Sneaker");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u00A3250");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "add_shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "i", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "info_outline");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Width");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Height");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "3000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "4000mm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Custuert");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "cutaeyw");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "45");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "29901");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"]], styles: [".p-list-main {\n  background: white;\n  margin: auto;\n  position: relative;\n  overflow: hidden !important;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 1.5px 2.6px 24px 0 rgba(0, 35, 136, 0.08) !important;\n  transform: scale(0.95);\n  transition: box-shadow 0.5s, transform 0.5s;\n}\n\n.p-list-main:hover {\n  transform: scale(1);\n  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);\n}\n\n.p-list-main .p-list {\n  position: relative;\n}\n\n.p-list-main .p-list .top {\n  height: 100%;\n  width: 100%;\n  background-size: 100%;\n}\n\n.p-list-main .p-list .bottom {\n  width: 200%;\n  height: 20%;\n  transition: transform 0.5s;\n}\n\n.p-list-main .p-list .bottom h1 {\n  margin: 0;\n  padding: 0;\n}\n\n.p-list-main .p-list .bottom p {\n  margin: 0;\n  padding: 0;\n}\n\n.p-list-main .p-list .bottom .left {\n  height: 100%;\n  width: 50%;\n  background: #f4f4f4;\n  position: relative;\n  float: left;\n}\n\n.p-list-main .p-list .bottom .left .details {\n  padding: 20px;\n  float: left;\n  width: calc(70% - 40px);\n}\n\n.p-list-main .p-list .bottom .left .buy {\n  float: right;\n  width: calc(30% - 2px);\n  height: 100%;\n  transition: background 0.5s;\n}\n\n.p-list-main .p-list .bottom .left .buy i {\n  font-size: 30px;\n  padding: 30px;\n  color: #254053;\n  transition: transform 0.5s;\n}\n\n.p-list-main .p-list .bottom .left .buy:hover i {\n  transform: translateY(5px);\n  color: #00394B;\n}\n\n.p-list-main .p-list .bottom .right {\n  width: 50%;\n  background: #A6CDDE;\n  color: white;\n  float: right;\n  height: 200%;\n  overflow: hidden;\n}\n\n.p-list-main .p-list .bottom .right .details {\n  padding: 20px;\n  float: right;\n  width: calc(70% - 40px);\n}\n\n.p-list-main .p-list .bottom .right .done {\n  width: calc(30% - 2px);\n  float: left;\n  transition: transform 0.5s;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n}\n\n.p-list-main .p-list .bottom .right .done i {\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.p-list-main .p-list .bottom .right .remove {\n  width: calc(30% - 1px);\n  clear: both;\n  border-right: solid thin rgba(255, 255, 255, 0.3);\n  height: 50%;\n  background: #BC3B59;\n  transition: transform 0.5s, background 0.5s;\n}\n\n.p-list-main .p-list .bottom .right .remove:hover {\n  background: #9B2847;\n}\n\n.p-list-main .p-list .bottom .right .remove:hover i {\n  transform: translateY(5px);\n}\n\n.p-list-main .p-list .bottom .right .remove i {\n  transition: transform 0.5s;\n  font-size: 30px;\n  padding: 30px;\n  color: white;\n}\n\n.p-list-main .p-list .bottom .right:hover .remove,\n.p-list-main .p-list .bottom .right:hover .done {\n  transform: translateY(-100%);\n}\n\n.p-list-main .inside {\n  z-index: 9;\n  background: rgba(103, 58, 183, 0.7);\n  width: 140px;\n  height: 140px;\n  position: absolute;\n  top: -70px;\n  right: -70px;\n  border-radius: 0px 0px 200px 200px;\n  transition: all 0.5s, border-radius 2s, top 1s;\n  overflow: hidden;\n}\n\n.p-list-main .inside .icon {\n  position: absolute;\n  right: 85px;\n  top: 85px;\n  color: white;\n  opacity: 1;\n}\n\n.p-list-main .inside:hover {\n  width: 100%;\n  right: 0;\n  top: 0;\n  border-radius: 0;\n  height: 100%;\n}\n\n.p-list-main .inside:hover .icon {\n  opacity: 0;\n  right: 15px;\n  top: 15px;\n}\n\n.p-list-main .inside:hover .contents {\n  opacity: 1;\n  transform: scale(1);\n  transform: translateY(0);\n}\n\n.p-list-main .inside .contents {\n  padding: 5%;\n  opacity: 0;\n  transform: scale(0.5);\n  transform: translateY(-200%);\n  transition: opacity 0.2s, transform 0.8s;\n}\n\n.p-list-main .inside .contents table {\n  text-align: left;\n  width: 100%;\n}\n\n.p-list-main .inside .contents h1,\n.p-list-main .inside .contents p,\n.p-list-main .inside .contents table {\n  color: white;\n}\n\n.p-list-main .inside .contents p {\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1wcm9kdWN0L0M6XFxVc2Vyc1xcS2FyaW1cXERlc2t0b3BcXHBpbVdlYlxcQmFoYVYxL3NyY1xcYXBwXFxlY29tbWVyY2VcXGVjb21tZXJjZS1wcm9kdWN0XFxlY29tbWVyY2UtcHJvZHVjdC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1wcm9kdWN0L2Vjb21tZXJjZS1wcm9kdWN0LWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxnRUFSc0U7RUFTdEUsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQ0QvQzs7QURQQTtFQVVRLG1CQUFtQjtFQUNuQiw0Q0FBNEM7QUNDcEQ7O0FEWkE7RUFjUSxrQkFBa0I7QUNFMUI7O0FEaEJBO0VBZ0JZLFlBQVk7RUFDWixXQUFXO0VBS1gscUJBQXFCO0FDR2pDOztBRHpCQTtFQXlCWSxXQUFXO0VBQ1gsV0FBVztFQUNYLDBCQUEwQjtBQ0l0Qzs7QUQvQkE7RUE2QmdCLFNBQVM7RUFDVCxVQUFVO0FDTTFCOztBRHBDQTtFQWlDZ0IsU0FBUztFQUNULFVBQVU7QUNPMUI7O0FEekNBO0VBcUNnQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQ1EzQjs7QURqREE7RUEyQ29CLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0FDVTNDOztBRHZEQTtFQWdEb0IsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMkJBQTJCO0FDVy9DOztBRDlEQTtFQXFEd0IsZUFBZTtFQUNmLGFBQWE7RUFDYixjQUFjO0VBQ2QsMEJBQTBCO0FDYWxEOztBRHJFQTtFQTJEd0IsMEJBQTBCO0VBQzFCLGNBQWM7QUNjdEM7O0FEMUVBO0VBaUVnQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQ2FoQzs7QURuRkE7RUF3RW9CLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FDZTNDOztBRHpGQTtFQTZFb0Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsaURBQWlEO0VBQ2pELFdBQVc7QUNnQi9COztBRGpHQTtFQW1Gd0IsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0FDa0JwQzs7QUR2R0E7RUF5Rm9CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaURBQWlEO0VBQ2pELFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMkNBQTJDO0FDa0IvRDs7QURoSEE7RUFnR3dCLG1CQUFtQjtBQ29CM0M7O0FEcEhBO0VBbUd3QiwwQkFBMEI7QUNxQmxEOztBRHhIQTtFQXNHd0IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQ3NCcEM7O0FEL0hBOztFQStHd0IsNEJBQTRCO0FDcUJwRDs7QURwSUE7RUFzSFEsVUFBVTtFQUNWLG1DQXhId0M7RUF5SHhDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDhDQUE4QztFQUM5QyxnQkFBZ0I7QUNrQnhCOztBRGpKQTtFQWlJWSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtBQ29CdEI7O0FEekpBO0VBd0lZLFdBQVc7RUFDWCxRQUFRO0VBQ1IsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixZQUFZO0FDcUJ4Qjs7QURqS0E7RUE4SWdCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztBQ3VCekI7O0FEdktBO0VBbUpnQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHdCQUF3QjtBQ3dCeEM7O0FEN0tBO0VBeUpZLFdBQVc7RUFDWCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qix3Q0FBd0M7QUN3QnBEOztBRHJMQTtFQStKZ0IsZ0JBQWdCO0VBQ2hCLFdBQVc7QUMwQjNCOztBRDFMQTs7O0VBcUtnQixZQUFZO0FDMkI1Qjs7QURoTUE7RUF3S2dCLGVBQWU7QUM0Qi9CIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL2Vjb21tZXJjZS1wcm9kdWN0L2Vjb21tZXJjZS1wcm9kdWN0LWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtY2FyZC1ib3gtc2hhZG93OjEuNXB4IDIuNnB4IDI0cHggMCByZ2JhKDAsIDM1LCAxMzYsIDAuMDgpICFpbXBvcnRhbnQ7XG4kcHJvZHVjdC1iZy1jb2xvci1ob3ZlcjogcmdiYSgxMDMsIDU4LCAxODMsIDAuNyk7XG4ucC1saXN0LW1haW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgYm94LXNoYWRvdzogJGJhc2UtY2FyZC1ib3gtc2hhZG93O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzLCB0cmFuc2Zvcm0gMC41cztcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIC5wLWxpc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC50b3Age1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAvLyAgICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNzM2eC80OS84MC82Zi80OTgwNmYzZjFjNzQ4MzA5Mzg1NWViY2ExYjhhZTJjNC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyOyBcbiAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICAtby1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICB3aWR0aDogMjAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg3MCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJ1eSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjU0MDUzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDM5NEI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0E2Q0RERTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg3MCUgLSA0MHB4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRvbmUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygzMCUgLSAycHgpO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogc29saWQgdGhpbiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlbW92ZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDMwJSAtIDFweCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIHRoaW4gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0JDM0I1OTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIGJhY2tncm91bmQgMC41cztcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOUIyODQ3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgLmRvbmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5zaWRlIHtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgYmFja2dyb3VuZDogJHByb2R1Y3QtYmctY29sb3ItaG92ZXI7XG4gICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC03MHB4O1xuICAgICAgICByaWdodDogLTcwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMjAwcHggMjAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzLCBib3JkZXItcmFkaXVzIDJzLCB0b3AgMXM7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA4NXB4O1xuICAgICAgICAgICAgdG9wOiA4NXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcbiAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEsXG4gICAgICAgICAgICBwLFxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5wLWxpc3QtbWFpbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBib3gtc2hhZG93OiAxLjVweCAyLjZweCAyNHB4IDAgcmdiYSgwLCAzNSwgMTM2LCAwLjA4KSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIHRyYW5zZm9ybSAwLjVzO1xufVxuXG4ucC1saXN0LW1haW46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICBib3gtc2hhZG93OiA1cHggMjBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wLWxpc3QtbWFpbiAucC1saXN0IC50b3Age1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIHtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5sZWZ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5sZWZ0IC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKDcwJSAtIDQwcHgpO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5sZWZ0IC5idXkge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDMwJSAtIDJweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5sZWZ0IC5idXkgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6ICMyNTQwNTM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5sZWZ0IC5idXk6aG92ZXIgaSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICBjb2xvcjogIzAwMzk0Qjtcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSAucmlnaHQge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQTZDRERFO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAyMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5yaWdodCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoNzAlIC0gNDBweCk7XG59XG5cbi5wLWxpc3QtbWFpbiAucC1saXN0IC5ib3R0b20gLnJpZ2h0IC5kb25lIHtcbiAgd2lkdGg6IGNhbGMoMzAlIC0gMnB4KTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIHRoaW4gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSAucmlnaHQgLmRvbmUgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5yaWdodCAucmVtb3ZlIHtcbiAgd2lkdGg6IGNhbGMoMzAlIC0gMXB4KTtcbiAgY2xlYXI6IGJvdGg7XG4gIGJvcmRlci1yaWdodDogc29saWQgdGhpbiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQkMzQjU5O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cywgYmFja2dyb3VuZCAwLjVzO1xufVxuXG4ucC1saXN0LW1haW4gLnAtbGlzdCAuYm90dG9tIC5yaWdodCAucmVtb3ZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzlCMjg0Nztcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSAucmlnaHQgLnJlbW92ZTpob3ZlciBpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG59XG5cbi5wLWxpc3QtbWFpbiAucC1saXN0IC5ib3R0b20gLnJpZ2h0IC5yZW1vdmUgaSB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnAtbGlzdC1tYWluIC5wLWxpc3QgLmJvdHRvbSAucmlnaHQ6aG92ZXIgLnJlbW92ZSxcbi5wLWxpc3QtbWFpbiAucC1saXN0IC5ib3R0b20gLnJpZ2h0OmhvdmVyIC5kb25lIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbn1cblxuLnAtbGlzdC1tYWluIC5pbnNpZGUge1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMywgNTgsIDE4MywgMC43KTtcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTcwcHg7XG4gIHJpZ2h0OiAtNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMDBweCAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMsIGJvcmRlci1yYWRpdXMgMnMsIHRvcCAxcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnAtbGlzdC1tYWluIC5pbnNpZGUgLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4NXB4O1xuICB0b3A6IDg1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnAtbGlzdC1tYWluIC5pbnNpZGU6aG92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucC1saXN0LW1haW4gLmluc2lkZTpob3ZlciAuaWNvbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5wLWxpc3QtbWFpbiAuaW5zaWRlOmhvdmVyIC5jb250ZW50cyB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cblxuLnAtbGlzdC1tYWluIC5pbnNpZGUgLmNvbnRlbnRzIHtcbiAgcGFkZGluZzogNSU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC44cztcbn1cblxuLnAtbGlzdC1tYWluIC5pbnNpZGUgLmNvbnRlbnRzIHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLWxpc3QtbWFpbiAuaW5zaWRlIC5jb250ZW50cyBoMSxcbi5wLWxpc3QtbWFpbiAuaW5zaWRlIC5jb250ZW50cyBwLFxuLnAtbGlzdC1tYWluIC5pbnNpZGUgLmNvbnRlbnRzIHRhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucC1saXN0LW1haW4gLmluc2lkZSAuY29udGVudHMgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */"], encapsulation: 2 });
    return EcommerceProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                'selector': 'ms-ecommerce-product',
                templateUrl: './ecommerce-product-component.html',
                styleUrls: ['./ecommerce-product-component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ecommerce/ecommerce.module.ts ***!
  \***********************************************/
/*! exports provided: EcommerceDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceDemoModule", function() { return EcommerceDemoModule; });
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
/* harmony import */ var _ecommerce_product_ecommerce_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ecommerce-product/ecommerce-product.component */ "./src/app/ecommerce/ecommerce-product/ecommerce-product.component.ts");
/* harmony import */ var _ecommerce_product_detail_ecommerce_product_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ecommerce-product-detail/ecommerce-product-detail.component */ "./src/app/ecommerce/ecommerce-product-detail/ecommerce-product-detail.component.ts");
/* harmony import */ var _ecommerce_cart_ecommerce_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ecommerce-cart/ecommerce-cart.component */ "./src/app/ecommerce/ecommerce-cart/ecommerce-cart.component.ts");
/* harmony import */ var _ecommerce_checkout_ecommerce_checkout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ecommerce-checkout/ecommerce-checkout.component */ "./src/app/ecommerce/ecommerce-checkout/ecommerce-checkout.component.ts");
/* harmony import */ var _ecommerce_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ecommerce.routing */ "./src/app/ecommerce/ecommerce.routing.ts");

























var EcommerceDemoModule = /** @class */ (function () {
    function EcommerceDemoModule() {
    }
    EcommerceDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceDemoModule });
    EcommerceDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcommerceDemoModule_Factory(t) { return new (t || EcommerceDemoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ecommerce_routing__WEBPACK_IMPORTED_MODULE_22__["EcommerceRoutes"])
            ]] });
    return EcommerceDemoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceDemoModule, { declarations: [_ecommerce_product_ecommerce_product_component__WEBPACK_IMPORTED_MODULE_18__["EcommerceProductComponent"],
        _ecommerce_product_detail_ecommerce_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["EcommerceProductDetailComponent"],
        _ecommerce_cart_ecommerce_cart_component__WEBPACK_IMPORTED_MODULE_20__["EcommerceCartComponent"],
        _ecommerce_checkout_ecommerce_checkout_component__WEBPACK_IMPORTED_MODULE_21__["EcommerceCheckoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_ecommerce_routing__WEBPACK_IMPORTED_MODULE_22__["EcommerceRoutes"])
                ],
                declarations: [
                    _ecommerce_product_ecommerce_product_component__WEBPACK_IMPORTED_MODULE_18__["EcommerceProductComponent"],
                    _ecommerce_product_detail_ecommerce_product_detail_component__WEBPACK_IMPORTED_MODULE_19__["EcommerceProductDetailComponent"],
                    _ecommerce_cart_ecommerce_cart_component__WEBPACK_IMPORTED_MODULE_20__["EcommerceCartComponent"],
                    _ecommerce_checkout_ecommerce_checkout_component__WEBPACK_IMPORTED_MODULE_21__["EcommerceCheckoutComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce.routing.ts":
/*!************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.routing.ts ***!
  \************************************************/
/*! exports provided: EcommerceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceRoutes", function() { return EcommerceRoutes; });
/* harmony import */ var _ecommerce_product_ecommerce_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ecommerce-product/ecommerce-product.component */ "./src/app/ecommerce/ecommerce-product/ecommerce-product.component.ts");
/* harmony import */ var _ecommerce_product_detail_ecommerce_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecommerce-product-detail/ecommerce-product-detail.component */ "./src/app/ecommerce/ecommerce-product-detail/ecommerce-product-detail.component.ts");
/* harmony import */ var _ecommerce_cart_ecommerce_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce-cart/ecommerce-cart.component */ "./src/app/ecommerce/ecommerce-cart/ecommerce-cart.component.ts");
/* harmony import */ var _ecommerce_checkout_ecommerce_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce-checkout/ecommerce-checkout.component */ "./src/app/ecommerce/ecommerce-checkout/ecommerce-checkout.component.ts");




var EcommerceRoutes = [{
        path: '',
        redirectTo: 'ecommerce-product',
        pathMatch: 'full',
    }, {
        path: '',
        children: [{
                path: 'ecommerce-product',
                component: _ecommerce_product_ecommerce_product_component__WEBPACK_IMPORTED_MODULE_0__["EcommerceProductComponent"]
            }, {
                path: 'ecommerce-product-detail',
                component: _ecommerce_product_detail_ecommerce_product_detail_component__WEBPACK_IMPORTED_MODULE_1__["EcommerceProductDetailComponent"]
            }, {
                path: 'ecommerce-cart',
                component: _ecommerce_cart_ecommerce_cart_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceCartComponent"]
            }, {
                path: 'ecommerce-checkout',
                component: _ecommerce_checkout_ecommerce_checkout_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceCheckoutComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=ecommerce-ecommerce-module.js.map