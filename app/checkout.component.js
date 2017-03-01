"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var CheckoutComponent = (function () {
    function CheckoutComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.filteredProducts = [];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        console.log("CHECKOUT oninit");
        this.products = this.productService.getProducts();
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.numberOrderedTotal > 0) {
                this.filteredProducts.push(product);
            }
        }
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'my-checkout',
            templateUrl: 'app/checkout.component.html',
            styleUrls: ['app/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map