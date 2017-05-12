webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".discount-grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-left: -10px;\n    margin-right: -10px;\n}\n\n.discount-grid-item {\n    padding: 0 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".form-component-grid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: -10px;\n    margin-right: -10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.form-component-grid-item {\n    padding: 0 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".list-component-table {\n    display: table;\n    width: 100%;\n}\n\n.list-component-table-row {\n    display: table-row;\n}\n.list-component-table-row:nth-child(2n + 1){\n    background-color: rgba(0, 0, 0, .12);\n}\n.list-component-table-row:first-child {\n    background-color: rgba(0, 0, 0, .20);\n    color: rgba(0, 0, 0, .38);\n}\n.list-component-table-row:first-child .list-component-table-col {\n    border-bottom: 1px solid rgba(0, 0, 0, .15);\n}\n\n.list-component-table-col {\n    display: table-cell;\n    padding: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-form (addProduct)=\"addProduct($event)\"></app-form>\n    <div class=\"space\"></div>\n    <app-list [data]=\"data\"></app-list>\n    <div class=\"space\"></div>\n    <app-discount (makeDiscount)=\"updateDiscount($event)\"></app-discount>\n</div>"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <form (ngSubmit)=\"onSubmit();\" #form=\"ngForm\">\n        <div class=\"discount-grid\">\n            <div class=\"discount-grid-item\">\n                <md-input-container>\n                    <input mdInput type=\"number\" name=\"discount\" placeholder=\"Применить скидку\" required [(ngModel)]=\"discount\">\n                </md-input-container>\n            </div>\n            <div class=\"discount-grid-item\">\n                <button type=\"submit\" md-button color=\"primary\" [disabled]=\"form.form.invalid\">Применить</button>\n            </div>\n        </div>\n    </form>\n</md-card>"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"form-component\">\n    <div class=\"title\">\n        Добавить продукт\n    </div>\n    <form (ngSubmit)=\"onSubmit(); form.reset();\" #form=\"ngForm\">\n        <div class=\"form-component-grid\">\n            <div class=\"form-component-grid-item\">\n                <md-input-container>\n                    <input required mdInput placeholder=\"Продукт\" type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n                </md-input-container>\n            </div>\n            <div class=\"form-component-grid-item\">\n                <md-input-container>\n                    <input required mdInput placeholder=\"Цена\" type=\"number\" name=\"price\" [(ngModel)]=\"price\">\n                </md-input-container>\n            </div>\n            <div class=\"form-component-grid-item\">\n                <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"form.form.invalid\">Добавить</button>\n            </div>\n        </div>\n    </form>\n</md-card>"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<md-card>\n    <div class=\"list-component-table\">\n        <div class=\"list-component-table-row\">\n            <div class=\"list-component-table-col\">Продукт</div>\n            <div class=\"list-component-table-col\">Цена</div>\n            <div class=\"list-component-table-col\">Цена со скидкой</div>\n        </div>\n        <div class=\"list-component-table-row\" *ngFor=\"let item of data;\">\n            <div class=\"list-component-table-col\">{{item.name}}</div>\n            <div class=\"list-component-table-col\">{{item.price}}</div>\n            <div class=\"list-component-table-col\">{{item.discount}}</div>\n        </div>\n    </div>\n</md-card>"

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 81;


/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(94);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_data__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.data = __WEBPACK_IMPORTED_MODULE_1__public_data__["a" /* default */];
        this.discount = 0;
    }
    AppComponent.prototype.addProduct = function (product) {
        this.data.push(product);
        if (this.discount > 0) {
            this.calcDiscountPrice();
        }
    };
    AppComponent.prototype.updateDiscount = function (discount) {
        this.discount = discount;
        this.calcDiscountPrice();
    };
    AppComponent.prototype.calcDiscountPrice = function () {
        var data = this.data;
        var discount = this.discount;
        var quantity = this.data.length;
        var prices = [];
        var sum = 0;
        var biggestPrice = 0;
        data.forEach(function (item) {
            sum += item.price;
            prices.push(item.price);
            if (item.price > biggestPrice) {
                biggestPrice = item.price;
            }
        });
        var percents = prices.map(function (value) {
            var newValue = (100 / sum * value / 100).toFixed(1);
            return parseFloat(newValue);
        });
        var discountedSum = 0;
        var discountedPrices = prices.map(function (value, index) {
            var percent = percents[index];
            var newValue = Math.round(value - discount * percent);
            discountedSum += newValue;
            return newValue;
        });
        this.data.forEach(function (item, index) {
            item.discount = discountedPrices[index] > 0 ? discountedPrices[index] : 0;
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "data", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(155),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discount_discount_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__discount_discount_component__["a" /* DiscountComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdButtonModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscountComponent = (function () {
    function DiscountComponent() {
        this.makeDiscount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
    }
    DiscountComponent.prototype.ngOnInit = function () {
    };
    DiscountComponent.prototype.onSubmit = function () {
        this.makeDiscount.emit(this.discount);
    };
    return DiscountComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], DiscountComponent.prototype, "makeDiscount", void 0);
DiscountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-discount',
        template: __webpack_require__(156),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [])
], DiscountComponent);

var _a;
//# sourceMappingURL=discount.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__public_product__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent() {
        this.addProduct = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.onSubmit = function () {
        var product = new __WEBPACK_IMPORTED_MODULE_1__public_product__["a" /* Product */](this.name, this.price);
        this.addProduct.emit(product);
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], FormComponent.prototype, "addProduct", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__(157),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [])
], FormComponent);

var _a;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "data", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__(158),
        styles: [__webpack_require__(153)]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = [
    {
        name: 'Телефон',
        price: 129
    },
    {
        name: 'Апельсин',
        price: 226
    },
    {
        name: 'Шоколад',
        price: 321
    },
    {
        name: 'Машина',
        price: 424
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map