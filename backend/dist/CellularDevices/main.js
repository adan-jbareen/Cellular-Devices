(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _prudects_prudects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prudects/prudects.component */ "./src/app/prudects/prudects.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./catagories-prud/catagories-prud.component */ "./src/app/catagories-prud/catagories-prud.component.ts");
/* harmony import */ var _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-products/show-products.component */ "./src/app/show-products/show-products.component.ts");












const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'catagoriesPrud',
        component: _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_8__["CatagoriesPrudComponent"]
    },
    {
        path: 'ShowProducts',
        component: _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_9__["ShowProductsComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    },
    {
        path: 'Prudects',
        component: _prudects_prudects_component__WEBPACK_IMPORTED_MODULE_5__["PrudectsComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: '**',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'CellularDevices';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _prudects_prudects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prudects/prudects.component */ "./src/app/prudects/prudects.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./catagories-prud/catagories-prud.component */ "./src/app/catagories-prud/catagories-prud.component.ts");
/* harmony import */ var _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-products/show-products.component */ "./src/app/show-products/show-products.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");


















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
        _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
        _prudects_prudects_component__WEBPACK_IMPORTED_MODULE_11__["PrudectsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
        _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_13__["CatagoriesPrudComponent"],
        _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_14__["ShowProductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                    _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__["ContactsComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                    _prudects_prudects_component__WEBPACK_IMPORTED_MODULE_11__["PrudectsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                    _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_13__["CatagoriesPrudComponent"],
                    _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_14__["ShowProductsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService, cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return cart; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _prudects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prudects.service */ "./src/app/prudects.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");





class CartService {
    constructor(http, prudectsService, userService) {
        this.http = http;
        this.prudectsService = prudectsService;
        this.userService = userService;
        this.baseURL = 'http://localhost:8000/api/';
        this.headers = { 'content-type': 'application/json' };
        this.order = [];
        this.totalPrice = 0;
        this.totalItems = 0;
        this.order = [];
    }
    getCart() {
        return this.http.get(this.baseURL + 'getCart');
    }
    // addToCartt(Cart: any): Observable<any> {
    //   let body = JSON.stringify(Cart);
    //   return this.http.post(this.baseURL + 'create', body, {
    //     headers: this.headers,
    //   });
    // }
    addToCartt(pro) {
        let Cart = new cart(pro.Name, pro.Price, this.userService.nameUser);
        let body = JSON.stringify(Cart);
        console.log(body);
        return this.http.post(this.baseURL + 'create', body, {
            headers: this.headers,
        });
    }
    deleteCart(Cart) {
        return this.http.delete(this.baseURL + 'deleteCart/' + Cart._id);
    }
    addToCart(product) {
        this.order.push(product);
        this.totalPrice += product.Price;
        this.totalItems++;
    }
    getOrder() {
        return this.order;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
    getTotalItems() {
        return this.totalItems;
    }
    buttonPurchaseClicked() {
        for (let p of this.order) {
            this.order.pop();
        }
        this.order.pop();
        //this.order.length=0;
        this.totalPrice = 0;
        this.totalItems = 0;
    }
}
CartService.??fac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_prudects_service__WEBPACK_IMPORTED_MODULE_2__["PrudectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"])); };
CartService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CartService, factory: CartService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _prudects_service__WEBPACK_IMPORTED_MODULE_2__["PrudectsService"] }, { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }]; }, null); })();
class cart {
    constructor(Name, Price, nameUser) {
        this.Name = Name;
        this.Price = Price;
        this.nameUser = nameUser;
    }
}


/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");








function CartComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](p_r1.Price);
} }
class CartComponent {
    constructor(usersService, cartService, activeRoute) {
        this.usersService = usersService;
        this.cartService = cartService;
        this.activeRoute = activeRoute;
        //[x: string]: any;
        this.addToCart = [];
        this.totalPrice = 0;
        this.totalItems = 0;
        this.Products = [];
        this.addToCart = [];
    }
    ngOnInit() {
        // this.addToCart = this.cartService.getOrder();
        // this.totalPrice=this.cartService.getTotalPrice();
        // this.totalItems=this.cartService.getTotalItems();
        this.getCartt();
    }
    getCartt() {
        this.cartService.getCart().subscribe((cartsData) => {
            for (var i of cartsData) {
                console.log(i);
                if (i.nameUser == this.usersService.nameUser) {
                    this.addToCart.push(i);
                    this.totalItems++;
                    this.totalPrice += i.Price;
                }
            }
        });
    }
    deletepro() {
        for (var i of this.addToCart) {
            this.cartService.deleteCart(i).subscribe();
        }
        this.addToCart = [];
        this.totalItems = 0;
        this.totalPrice = 0;
    }
}
CartComponent.??fac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CartComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 29, vars: 3, consts: [[1, "table-responsive"], [1, "table", "table-bordered"], ["width", "20%"], [4, "ngFor", "ngForOf"], ["colspan", "3"], ["type", "button", 1, "btn-btn-warning", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "your cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "product Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CartComponent_ng_container_12_Template, 6, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CartComponent_Template_button_click_23_listener() { return ctx.deletepro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "clear your cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.addToCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("The quantity of prodeucts in cart: ", ctx.totalItems, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("The price of prodeucts in cart: : ", ctx.totalPrice, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["h1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color:black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/catagories-prud/catagories-prud.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/catagories-prud/catagories-prud.component.ts ***!
  \**************************************************************/
/*! exports provided: CatagoriesPrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoriesPrudComponent", function() { return CatagoriesPrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _prudects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prudects.service */ "./src/app/prudects.service.ts");



class CatagoriesPrudComponent {
    constructor(prudectsService) {
        this.prudectsService = prudectsService;
        this.category = [
            { Name: "Samsung" },
            { Name: "Apple" },
            { Name: "Xiaomi" },
            { Name: "LG" },
            { Name: "Huawei" },
        ];
        this.products = [];
        this.selectedCategory = "";
        this.showCategoryComponent = false;
    }
    ngOnInit() {
        //this.products=this.prudectsService.getPrudects();
        this.prudectsService.getProduct().subscribe((productsData) => {
            this.products = productsData;
        });
    }
    ;
    showSamsung() {
        this.selectedCategory = "Samsung";
        this.showCategoryComponent = true;
    }
    showApple() {
        this.selectedCategory = "Apple";
        this.showCategoryComponent = true;
    }
    showXiaomi() {
        this.selectedCategory = "Xiaomi";
        this.showCategoryComponent = true;
    }
    showLG() {
        this.selectedCategory = "LG";
        this.showCategoryComponent = true;
    }
    showHuawei() {
        this.selectedCategory = "Huawei";
        this.showCategoryComponent = true;
    }
}
CatagoriesPrudComponent.??fac = function CatagoriesPrudComponent_Factory(t) { return new (t || CatagoriesPrudComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"])); };
CatagoriesPrudComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CatagoriesPrudComponent, selectors: [["app-catagories-prud"]], decls: 30, vars: 5, consts: [[1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "width", 3, "click"], [1, "badge", "badge-primary", "badge-pill"]], template: function CatagoriesPrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Catagories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatagoriesPrudComponent_Template_a_click_6_listener() { return ctx.showSamsung(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatagoriesPrudComponent_Template_a_click_10_listener() { return ctx.showApple(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatagoriesPrudComponent_Template_a_click_14_listener() { return ctx.showXiaomi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatagoriesPrudComponent_Template_a_click_18_listener() { return ctx.showLG(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CatagoriesPrudComponent_Template_a_click_22_listener() { return ctx.showHuawei(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.category[0].Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.category[1].Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.category[2].Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.category[3].Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.category[4].Name, " ");
    } }, styles: [".width[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0YWdvcmllcy1wcnVkL2NhdGFnb3JpZXMtcHJ1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvY2F0YWdvcmllcy1wcnVkL2NhdGFnb3JpZXMtcHJ1ZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZHRoe1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi8qIC5zcGFue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CatagoriesPrudComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catagories-prud',
                templateUrl: './catagories-prud.component.html',
                styleUrls: ['./catagories-prud.component.css']
            }]
    }], function () { return [{ type: _prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class ContactsComponent {
    constructor() {
        this.name1 = "Adan Jbareen";
        this.address1 = "Um-alfahem";
        this.email1 = "adan.jbaren.99@gmail.com";
        this.id1 = 206681553;
        this.name2 = "Fatima Badran";
        this.address2 = "Bine";
        this.email2 = "fatme.b1999@gmail.com";
        this.id2 = 207659384;
    }
    ngOnInit() {
    }
}
ContactsComponent.??fac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 25, vars: 8, consts: [["id", "#contacts", "src", "https://th.bing.com/th/id/R98d07b66f659fa8972435b76d4a925ab?rik=Cw6rjiy%2bn8fv%2fg&riu=http%3a%2f%2fkdwa-kw.org%2fimages%2fpic1.png&ehk=jjwEZflnC0TVSATZggbRGULRiUv74Ndr5Mk4Xz7X9IQ%3d&risl=&pid=ImgRaw", "height", "150", "width", "150", 1, "center"], ["id", "#contacts", 1, "center"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.name1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.address1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.email1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.id1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.name2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.address2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.email2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", ctx.id2, "\n");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: [".center[_ngcontent-%COMP%] {\r\n    text-align: center\r\n    }\r\n  img[_ngcontent-%COMP%] {\r\n      border-radius: 50%;\r\n      display: block;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      width: 10%;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0lBQ0E7RUFDRjtNQUNJLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogMTAlO1xyXG4gICAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contacts',
                templateUrl: './contacts.component.html',
                styleUrls: ['./contacts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.NameShop = "Cellular Device";
        this.tel = "1-700-50-62-00";
        this.NameStu1 = "Adan Jbareen";
        this.NameStu2 = "Fatima Badran";
    }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 4, consts: [[1, "py-4", "bg-dark", "text-white-50"], ["href", "https://www.ivory.co.il/cellphones.html"], [1, "container", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "copy &Copyright ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.NameShop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.tel, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.NameStu1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.NameStu2, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 16, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarColor02", "aria-controls", "navbarColor02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarColor02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/Prudects", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/cart", "routerLinkActive", "activeStyle", 1, "nav-link"], ["routerLink", "/contacts", "routerLinkActive", "activeStyle", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Cellular Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _prudects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prudects.service */ "./src/app/prudects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");








function HomeComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_7_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r6); const prudect_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r4.addToCart(prudect_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r2.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", prudect_r2.ImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", prudect_r2.Price, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r2.Description);
} }
function HomeComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_ng_container_7_ng_container_1_Template, 19, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", prudect_r2.Price > 3980);
} }
function HomeComponent_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HomeComponent_ng_container_14_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r12); const prudect_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r10.addToCart(prudect_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r8.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r8.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", prudect_r8.ImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", prudect_r8.Price, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r8.Description);
} }
function HomeComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, HomeComponent_ng_container_14_ng_container_1_Template, 19, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", prudect_r8.Category == "Samsung");
} }
class HomeComponent {
    constructor(prudectsService, router, cartService) {
        this.prudectsService = prudectsService;
        this.router = router;
        this.cartService = cartService;
        this.Products = [];
    }
    ngOnInit() {
        //this.Products = this.prudectsService.getPrudects()
        this.prudectsService.getProduct().subscribe((productsData) => {
            this.Products = productsData;
        });
    }
    addToCart(product) {
        this.cartService.addToCartt(product).subscribe();
        window.alert("product added to card");
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 2, consts: [[1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [3, "src"], [1, "price"], ["type", "button", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Products of the week");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, HomeComponent_ng_container_7_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "The new products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, HomeComponent_ng_container_14_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Products);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".card[_ngcontent-%COMP%]{\r\n  margin-left: 5px;   \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n  box-shadow: 8px 8px 8px black;\r\n  transform: translatey(-10px);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color:black;\r\n  }\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    color:red;\r\n  }\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    height: 250px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFNBQVM7RUFDWDs7QUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICBtYXJnaW4tbGVmdDogNXB4OyAgIFxyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICBib3gtc2hhZG93OiA4cHggOHB4IDhweCBibGFjaztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTEwcHgpO1xyXG59XHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICB9XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIGltZ3tcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function LoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoginComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Invalid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.users = this.userService.getUsers();
        this.createLoginForm();
        this.userService.getUser().subscribe((data) => {
            console.log(data);
            this.users = data;
        });
    }
    createLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    onSubmit(loginForm) {
        for (let user of this.users) {
            if (user.name == loginForm.value.name && user.password == loginForm.value.password) {
                console.log('valid user');
                this.router.navigateByUrl('home');
                this.userService.nameUser = loginForm.value.name;
                return;
            }
        }
        console.log('Invalid user');
        window.alert('Your name or password incorrect!');
    }
}
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 40, vars: 4, consts: [[1, "home-banner"], [1, "card", "border-success", "mb-100", 2, "max-width", "40rem"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "col-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "name", "placeholder", "Enter Name", "name", "name", "formControlName", "name", "required", "", 1, "ng-invalid"], ["style", "color:red", 4, "ngIf"], ["type", "password", "name", "password", "placeholder", "Enter password", "formControlName", "password", "required", "", 1, "ng-invalid"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input"], [1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_14_listener() { return ctx.onSubmit(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, LoginComponent_div_22_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, LoginComponent_div_31_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Check me out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.loginForm.controls.name == null ? null : ctx.loginForm.controls.name.valid) && ((ctx.loginForm.controls.name == null ? null : ctx.loginForm.controls.name.dirty) || (ctx.loginForm.controls.name == null ? null : ctx.loginForm.controls.name.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !(ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.valid) && ((ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.dirty) || (ctx.loginForm.controls.password == null ? null : ctx.loginForm.controls.password.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".ng-valid[required][_ngcontent-%COMP%]{\r\n    border-left: 5px solid #42a948;\r\n}\r\n\r\n.ng-invalid[_ngcontent-%COMP%]:not(form){\r\n    border-left: 5px solid #a94442;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    color:black;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(14, 5, 5, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n  }\r\n\r\ndiv[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    color:black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0UsMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF17XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MmE5NDg7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkOm5vdChmb3JtKXtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDE0LCA1LCA1LCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICB9XHJcblxyXG4gIGRpdntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.??fac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 6, vars: 0, consts: [["src", "https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg", "height", "400"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\u00A0\u00A0\u00A0You have reached an unspecified thyme and must return to the previous page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/prudects.service.ts":
/*!*************************************!*\
  !*** ./src/app/prudects.service.ts ***!
  \*************************************/
/*! exports provided: PrudectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrudectsService", function() { return PrudectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class PrudectsService {
    constructor(http) {
        this.http = http;
        this.baseURL = 'http://localhost:8000/api/';
        this.headers = { 'content-type': 'application/json' };
    }
    getProduct() {
        return this.http.get(this.baseURL + '/getProducts');
    }
}
PrudectsService.??fac = function PrudectsService_Factory(t) { return new (t || PrudectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PrudectsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: PrudectsService, factory: PrudectsService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrudectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class Products {
    constructor(SerialNumber, Name, Price, Category, Description, ImgUrl) {
        this.SerialNumber = SerialNumber;
        this.Name = Name;
        this.Price = Price;
        this.Category = Category;
        this.Description = Description;
        this.ImgUrl = ImgUrl;
    }
}


/***/ }),

/***/ "./src/app/prudects/prudects.component.ts":
/*!************************************************!*\
  !*** ./src/app/prudects/prudects.component.ts ***!
  \************************************************/
/*! exports provided: PrudectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrudectsComponent", function() { return PrudectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catagories-prud/catagories-prud.component */ "./src/app/catagories-prud/catagories-prud.component.ts");
/* harmony import */ var _prudects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prudects.service */ "./src/app/prudects.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../show-products/show-products.component */ "./src/app/show-products/show-products.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");









class PrudectsComponent {
    constructor(prudectsService, CartService) {
        this.prudectsService = prudectsService;
        this.CartService = CartService;
    }
    ngOnInit() {
    }
    addToCart(product) {
        this.CartService.addToCartt(product);
        window.alert("the product added to card");
    }
}
PrudectsComponent.??fac = function PrudectsComponent_Factory(t) { return new (t || PrudectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_prudects_service__WEBPACK_IMPORTED_MODULE_2__["PrudectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
PrudectsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrudectsComponent, selectors: [["app-prudects"]], viewQuery: function PrudectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_1__["CatagoriesPrudComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.category = _t.first);
    } }, decls: 7, vars: 1, consts: [[1, "d-flex", "flex-row", "p-2", "justify-content-between"], [1, "column"], [1, "column", "np-2", "bd-highlight"], [3, "selectedCategory"]], template: function PrudectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-catagories-prud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-show-products", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selectedCategory", ctx.category == null ? null : ctx.category.selectedCategory);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_1__["CatagoriesPrudComponent"], _show_products_show_products_component__WEBPACK_IMPORTED_MODULE_5__["ShowProductsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".card[_ngcontent-%COMP%]{\r\n    margin-left: 5px;   \r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 8px 8px 8px black;\r\n    transform: translatey(-10px);\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center\r\n    }\r\n\r\n.selected[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJ1ZGVjdHMvcHJ1ZGVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJO0lBQ0E7O0FBRUo7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcnVkZWN0cy9wcnVkZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAgIFxyXG59XHJcblxyXG4uY2FyZDpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDhweCA4cHggOHB4IGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0xMHB4KTtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuXHJcbi5zZWxlY3RlZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrudectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prudects',
                templateUrl: './prudects.component.html',
                styleUrls: ['./prudects.component.css']
            }]
    }], function () { return [{ type: _prudects_service__WEBPACK_IMPORTED_MODULE_2__["PrudectsService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_catagories_prud_catagories_prud_component__WEBPACK_IMPORTED_MODULE_1__["CatagoriesPrudComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/show-products/show-products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/show-products/show-products.component.ts ***!
  \**********************************************************/
/*! exports provided: ShowProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProductsComponent", function() { return ShowProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _prudects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prudects.service */ "./src/app/prudects.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ShowProductsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ShowProductsComponent_ng_container_1_ng_container_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5); const prudect_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r3.addToCart(prudect_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r1.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", prudect_r1.ImgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", prudect_r1.Price, "\u20AA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prudect_r1.Description);
} }
function ShowProductsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShowProductsComponent_ng_container_1_ng_container_1_Template, 19, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    const prudect_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.selectedCategory == prudect_r1.Category);
} }
class ShowProductsComponent {
    constructor(prudectsService, cartService) {
        this.prudectsService = prudectsService;
        this.cartService = cartService;
        this.Products = [];
    }
    ngOnInit() {
        //this.Products = this.prudectsService.getPrudects()
        this.prudectsService.getProduct().subscribe((productsData) => {
            this.Products = productsData;
        });
    }
    addToCart(product) {
        this.cartService.addToCartt(product).subscribe();
        window.alert("product added to card");
    }
}
ShowProductsComponent.??fac = function ShowProductsComponent_Factory(t) { return new (t || ShowProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ShowProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ShowProductsComponent, selectors: [["app-show-products"]], inputs: { selectedCategory: "selectedCategory" }, decls: 2, vars: 1, consts: [[1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card", "border-primary", "mb-3", 2, "max-width", "20rem"], [1, "card-header"], [1, "card-body"], ["name", "Name", 1, "card-title"], [1, "card-text"], [3, "src"], ["name", "Price", 1, "price"], ["type", "button", 3, "click"]], template: function ShowProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ShowProductsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.Products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["img[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(14, 5, 5, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n  }\r\n\r\n.card[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 8px 8px 8px black;\r\n    transform: translatey(-10px);\r\n  }\r\n\r\n.price[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n\r\ndetails[_ngcontent-%COMP%]    > summary[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 2px;\r\n    width: 200px;\r\n    box-shadow: 1px 1px 1px #bbbbbb;\r\n    cursor: pointer;\r\n  }\r\n\r\ndetails[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 4px;\r\n    margin: 0;\r\n    \r\n  }\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvdy1wcm9kdWN0cy9zaG93LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCOztBQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUzs7RUFFWDs7QUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcHJvZHVjdHMvc2hvdy1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgxNCwgNSwgNSwgMC4yKTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogOHB4IDhweCA4cHggYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTEwcHgpO1xyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICBkZXRhaWxzID4gc3VtbWFyeSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggI2JiYmJiYjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgZGV0YWlscyA+IHAge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIFxyXG4gIH1cclxuICAuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ShowProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-show-products',
                templateUrl: './show-products.component.html',
                styleUrls: ['./show-products.component.css']
            }]
    }], function () { return [{ type: _prudects_service__WEBPACK_IMPORTED_MODULE_1__["PrudectsService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }]; }, { selectedCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class UsersService {
    constructor(http) {
        this.http = http;
        this.nameUser = "";
        this.baseURL = 'http://localhost:8000/api/';
        this.headers = { 'content-type': 'application/json' };
    }
    getUser() {
        return this.http.get(this.baseURL + 'user');
    }
    getUsers() {
        return [
            new User('Adan', 'Adan1234567'),
            new User('Fatima', 'Fatima123789')
        ];
    }
}
UsersService.??fac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UsersService, factory: UsersService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\windows 10\Dropbox\My PC (DESKTOP-6BG2989)\Desktop\CellularDevices\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map