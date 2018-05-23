(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_block_ui_block_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/block-ui/block-ui.service */ "./src/app/core/block-ui/block-ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, blockUiService) {
        this.router = router;
        this.blockUiService = blockUiService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (route) {
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.blockUiService.isLoading('body', true);
            }
            if (route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]
                || route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]
                || route instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                _this.blockUiService.isLoading('body', false);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_block_ui_block_ui_service__WEBPACK_IMPORTED_MODULE_2__["BlockUiService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _signin_signin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.module */ "./src/app/signin/signin.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.module */ "./src/app/signup/signup.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _interceptors_url_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/url.interceptor */ "./src/app/interceptors/url.interceptor.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _signin_signin_module__WEBPACK_IMPORTED_MODULE_4__["SigninModule"],
                _signup_signup_module__WEBPACK_IMPORTED_MODULE_5__["SignupModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_url_interceptor__WEBPACK_IMPORTED_MODULE_7__["UrlInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container.module */ "./src/app/container/container.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'container',
        loadChildren: function () { return _container_container_module__WEBPACK_IMPORTED_MODULE_3__["ContainerModule"]; }
    }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/container/container.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/container/container.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/container/container.module.ts":
/*!***********************************************!*\
  !*** ./src/app/container/container.module.ts ***!
  \***********************************************/
/*! exports provided: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerModule", function() { return ContainerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _container_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.routing */ "./src/app/container/container.routing.ts");
/* harmony import */ var _header_nav_header_nav_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-nav/header-nav.module */ "./src/app/container/header-nav/header-nav.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContainerModule = /** @class */ (function () {
    function ContainerModule() {
    }
    ContainerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _container_routing__WEBPACK_IMPORTED_MODULE_3__["ContainerRouting"],
                _header_nav_header_nav_module__WEBPACK_IMPORTED_MODULE_4__["HeaderNavModule"]
            ],
            declarations: [_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]],
            exports: [_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"]]
        })
    ], ContainerModule);
    return ContainerModule;
}());



/***/ }),

/***/ "./src/app/container/container.routing.ts":
/*!************************************************!*\
  !*** ./src/app/container/container.routing.ts ***!
  \************************************************/
/*! exports provided: ContainerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRouting", function() { return ContainerRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container.component */ "./src/app/container/container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _container_component__WEBPACK_IMPORTED_MODULE_3__["ContainerComponent"]
    }
];
var ContainerRouting = /** @class */ (function () {
    function ContainerRouting() {
    }
    ContainerRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], ContainerRouting);
    return ContainerRouting;
}());



/***/ }),

/***/ "./src/app/container/header-nav/header-nav.component.html":
/*!****************************************************************!*\
  !*** ./src/app/container/header-nav/header-nav.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\n<header id=\"m_header\"\n        class=\"m-grid__item    m-header\"\n        m-minimize-offset=\"200\"\n        m-minimize-mobile-offset=\"200\"\n        appunwraptag=\"\">\n  <div class=\"m-container m-container--fluid m-container--full-height\">\n    <div class=\"m-stack m-stack--ver m-stack--desktop\">\n      <!-- BEGIN: Brand -->\n      <div class=\"m-stack__item m-brand  m-brand--skin-dark\">\n        <div class=\"m-stack m-stack--ver m-stack--general\">\n          <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\n            <a routerLink=\"/index\"\n               class=\"m-brand__logo-wrapper\">\n\t\t\t\t\t\t\t<img alt=\"\" src=\"assets/icons/brand.png\" />\n\t\t\t\t\t\t</a>\n          </div>\n          <div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\n            <!-- BEGIN: Left Aside Minimize Toggle -->\n            <a href=\"javascript:;\"\n               id=\"m_aside_left_minimize_toggle\"\n               class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n            <!-- END -->\n            <!-- BEGIN: Responsive Aside Left Menu Toggler -->\n            <a href=\"javascript:;\"\n               id=\"m_aside_left_offcanvas_toggle\"\n               class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n            <!-- END -->\n            <!-- BEGIN: Responsive Header Menu Toggler -->\n            <a id=\"m_aside_header_menu_mobile_toggle\"\n               href=\"javascript:;\"\n               class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t</a>\n            <!-- END -->\n            <!-- BEGIN: Topbar Toggler -->\n            <a id=\"m_aside_header_topbar_mobile_toggle\"\n               href=\"javascript:;\"\n               class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\n\t\t\t\t\t\t</a>\n            <!-- BEGIN: Topbar Toggler -->\n          </div>\n        </div>\n      </div>\n      <!-- END: Brand -->\n      <div class=\"m-stack__item m-stack__item--fluid m-header-head\"\n           id=\"m_header_nav\">\n        <!-- BEGIN: Horizontal Menu -->\n        <button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\"\n                id=\"m_aside_header_menu_mobile_close_btn\">\n\t\t\t\t\t<i class=\"la la-close\"></i>\n\t\t\t\t</button>\n        <div id=\"m_header_menu\"\n             class=\"m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark\">\n          <ul class=\"m-menu__nav\">\n            <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\n                routerLinkActive=\"m-menu__item--open\"\n                routerLinkActiveOptions=\"{ exact: true }\"\n                m-menu-submenu-toggle=\"click\"\n                m-menu-link-redirect=\"1\"\n                aria-haspopup=\"true\">\n              <a href=\"javascript:;\"\n                 class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n              <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n                <ul class=\"m-menu__subnav\">\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCreate New Post\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-diagram\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                  <li class=\"m-menu__item  m-menu__item--submenu\"\n                      routerLinkActive=\"m-menu__item--open\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-submenu-toggle=\"hover\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a href=\"javascript:;\"\n                       class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tManage Orders\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n                    <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n                      <span class=\"m-menu__arrow\"></span>\n                      <ul class=\"m-menu__subnav\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLatest Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPending Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProcessed Orders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelivery Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPayments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomers\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n                  <li class=\"m-menu__item  m-menu__item--submenu\"\n                      routerLinkActive=\"m-menu__item--open\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-submenu-toggle=\"hover\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a href=\"#\"\n                       class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n                    <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n                      <span class=\"m-menu__arrow\"></span>\n                      <ul class=\"m-menu__subnav\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCustomer Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupplier Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReviewed Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tResolved Feedbacks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFeedback Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tRegister Member\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\n                routerLinkActive=\"m-menu__item--open\"\n                routerLinkActiveOptions=\"{ exact: true }\"\n                m-menu-submenu-toggle=\"click\"\n                m-menu-link-redirect=\"1\"\n                aria-haspopup=\"true\">\n              <a href=\"javascript:;\"\n                 class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-line-graph\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\tReports\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n              <div class=\"m-menu__submenu  m-menu__submenu--fixed m-menu__submenu--left\"\n                   style=\"width:1000px\">\n                <div class=\"m-menu__subnav\">\n                  <ul class=\"m-menu__content\">\n                    <li class=\"m-menu__item\"\n                        routerLinkActive=\"m-menu__item--active\"\n                        routerLinkActiveOptions=\"{ exact: true }\">\n                      <h3 class=\"m-menu__heading m-menu__toggle\">\n                        <span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                        <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n                      </h3>\n                      <ul class=\"m-menu__inner\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAnnual Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-user\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tIPO Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFinance Margins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRevenue Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li class=\"m-menu__item\"\n                        routerLinkActive=\"m-menu__item--active\"\n                        routerLinkActiveOptions=\"{ exact: true }\">\n                      <h3 class=\"m-menu__heading m-menu__toggle\">\n                        <span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tProject Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                        <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n                      </h3>\n                      <ul class=\"m-menu__inner\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCoca Cola CRM\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDelta Airlines Booking Site\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMalibu Accounting\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tVineseed Website Rewamp\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tZircon Mobile App\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--line\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMercury CMS\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li class=\"m-menu__item\"\n                        routerLinkActive=\"m-menu__item--active\"\n                        routerLinkActiveOptions=\"{ exact: true }\">\n                      <h3 class=\"m-menu__heading m-menu__toggle\">\n                        <span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tHR Reports\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                        <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n                      </h3>\n                      <ul class=\"m-menu__inner\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tClient Directory\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSalary Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tStaff Payslips\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCorporate Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet m-menu__link-bullet--dot\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProject Expenses\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </li>\n                    <li class=\"m-menu__item\"\n                        routerLinkActive=\"m-menu__item--active\"\n                        routerLinkActiveOptions=\"{ exact: true }\">\n                      <h3 class=\"m-menu__heading m-menu__toggle\">\n                        <span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Apps\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                        <i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n                      </h3>\n                      <ul class=\"m-menu__inner\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Adjusments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSources & Mediums\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReporting Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tConversions\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReport Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAudit & Logs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </li>\n            <li class=\"m-menu__item  m-menu__item--submenu m-menu__item--rel\"\n                routerLinkActive=\"m-menu__item--open\"\n                routerLinkActiveOptions=\"{ exact: true }\"\n                m-menu-submenu-toggle=\"click\"\n                m-menu-link-redirect=\"1\"\n                aria-haspopup=\"true\">\n              <a href=\"javascript:;\"\n                 class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-paper-plane\"></i>\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\tApps\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--brand m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\tnew\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t</a>\n              <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n                <ul class=\"m-menu__subnav\">\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-business\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\teCommerce\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                  <li class=\"m-menu__item  m-menu__item--submenu\"\n                      routerLinkActive=\"m-menu__item--open\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-submenu-toggle=\"hover\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/crud/datatable_v1\"\n                       class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-computer\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tAudience\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n                    <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--right\">\n                      <span class=\"m-menu__arrow\"></span>\n                      <ul class=\"m-menu__subnav\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActive Users\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-interface-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Explorer\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUsers Flows\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMarket Segments\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tUser Reports\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-map\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tMarketing\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                  <li class=\"m-menu__item\"\n                      routerLinkActive=\"m-menu__item--active\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a routerLink=\"/actions\"\n                       class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-graphic-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tCampaigns\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n                  </li>\n                  <li class=\"m-menu__item  m-menu__item--submenu\"\n                      routerLinkActive=\"m-menu__item--open\"\n                      routerLinkActiveOptions=\"{ exact: true }\"\n                      m-menu-submenu-toggle=\"hover\"\n                      m-menu-link-redirect=\"1\"\n                      aria-haspopup=\"true\">\n                    <a href=\"javascript:;\"\n                       class=\"m-menu__link m-menu__toggle\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-infinity\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\tCloud Manager\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n                    <div class=\"m-menu__submenu m-menu__submenu--classic m-menu__submenu--left\">\n                      <span class=\"m-menu__arrow\"></span>\n                      <ul class=\"m-menu__subnav\">\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-add\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Upload\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-signs-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Attributes\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFolders\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                        <li class=\"m-menu__item\"\n                            routerLinkActive=\"m-menu__item--active\"\n                            routerLinkActiveOptions=\"{ exact: true }\"\n                            m-menu-link-redirect=\"1\"\n                            aria-haspopup=\"true\">\n                          <a routerLink=\"/actions\"\n                             class=\"m-menu__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-icon flaticon-cogwheel-2\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem Settings\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <!-- END: Horizontal Menu -->\n        <!-- BEGIN: Topbar -->\n        <div id=\"m_header_topbar\"\n             class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\n          <div class=\"m-stack__item m-topbar__nav-wrapper\">\n            <ul class=\"m-topbar__nav m-nav m-nav--inline\">\n              <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"\n            \n                  m-dropdown-toggle=\"click\"\n                  id=\"m_quicksearch\"\n                  m-quicksearch-mode=\"dropdown\"\n                  m-dropdown-persistent=\"1\">\n                <a href=\"#\"\n                   class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header\">\n                      <form class=\"m-list-search__form\">\n                        <div class=\"m-list-search__form-wrapper\">\n                          <span class=\"m-list-search__form-input-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                          <span class=\"m-list-search__form-icon-close\"\n                                id=\"m_quicksearch_close\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"m-dropdown__body\">\n                      <div class=\"m-dropdown__scrollable m-scrollable\"\n                           data-scrollable=\"true\"\n                           data-max-height=\"300\"\n                           data-mobile-max-height=\"200\">\n                        <div class=\"m-dropdown__content\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"m-nav__item m-topbar__notifications m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\"\n            \n                  m-dropdown-toggle=\"click\"\n                  m-dropdown-persistent=\"1\">\n                <a href=\"#\"\n                   class=\"m-nav__link m-dropdown__toggle\"\n                   id=\"m_topbar_notification_icon\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--danger\">\n\t\t\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header m--align-center\">\n                      <span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\n\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\n\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                    <div class=\"m-dropdown__body\">\n                      <div class=\"m-dropdown__content\">\n                        <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\"\n                            role=\"tablist\">\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link active\"\n                               data-toggle=\"tab\"\n                               href=\"#topbar_notifications_notifications\"\n                               role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link\"\n                               data-toggle=\"tab\"\n                               href=\"#topbar_notifications_events\"\n                               role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"nav-item m-tabs__item\">\n                            <a class=\"nav-link m-tabs__link\"\n                               data-toggle=\"tab\"\n                               href=\"#topbar_notifications_logs\"\n                               role=\"tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                        </ul>\n                        <div class=\"tab-content\">\n                          <div class=\"tab-pane active\"\n                               id=\"topbar_notifications_notifications\"\n                               role=\"tabpanel\">\n                            <div class=\"m-scrollable\"\n                                 data-scrollable=\"true\"\n                                 data-max-height=\"250\"\n                                 data-mobile-max-height=\"200\">\n                              <div class=\"m-list-timeline m-list-timeline--skin-light\">\n                                <div class=\"m-list-timeline__items\">\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t12 new users registered\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDB overloaded 80%\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tsettled\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem error -\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCheck\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item m-list-timeline__item--read\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span href=\"\"\n                                          class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    </span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item m-list-timeline__item--read\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge\"></span>\n                                    <span class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\"\n                               id=\"topbar_notifications_events\"\n                               role=\"tabpanel\">\n                            <div class=\"m-scrollable\"\n                                 data-scrollable=\"true\"\n                                 data-max-height=\"250\"\n                                 data-mobile-max-height=\"200\">\n                              <div class=\"m-list-timeline m-list-timeline--skin-light\">\n                                <div class=\"m-list-timeline__items\">\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                  <div class=\"m-list-timeline__item\">\n                                    <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\n                                    <a href=\"\"\n                                       class=\"m-list-timeline__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                                    <span class=\"m-list-timeline__time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\"\n                               id=\"topbar_notifications_logs\"\n                               role=\"tabpanel\">\n                            <div class=\"m-stack m-stack--ver m-stack--general\"\n                                 style=\"min-height: 180px;\">\n                              <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\n                                <span class=\"\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"m-nav__item m-topbar__quick-actions m-dropdown m-dropdown--skin-light m-dropdown--large m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"\n            \n                  m-dropdown-toggle=\"click\">\n                <a href=\"#\"\n                   class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--accent\">\n\t\t\t\t\t\t\t\t\t\t\t5\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header m--align-center\">\n                      <span class=\"m-dropdown__header-title\">\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\n\t\t\t\t\t\t\t\t\t\t\t</span>\n                      <span class=\"m-dropdown__header-subtitle\">\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\n\t\t\t\t\t\t\t\t\t\t\t</span>\n                    </div>\n                    <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\n                      <div class=\"m-dropdown__content\">\n                        <div class=\"m-scrollable\"\n                             data-scrollable=\"false\"\n                             data-max-height=\"380\"\n                             data-mobile-max-height=\"200\">\n                          <div class=\"m-nav-grid m-nav-grid--skin-light\">\n                            <div class=\"m-nav-grid__row\">\n                              <a href=\"#\"\n                                 class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                              <a href=\"#\"\n                                 class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                            </div>\n                            <div class=\"m-nav-grid__row\">\n                              <a href=\"#\"\n                                 class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                              <a href=\"#\"\n                                 class=\"m-nav-grid__item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li class=\"m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\"\n            \n                  m-dropdown-toggle=\"click\">\n                <a href=\"#\"\n                   class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon m-topbar__usericon  m--hide\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-user-ok\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username m--hide\">\n\t\t\t\t\t\t\t\t\t\tNick\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n                <div class=\"m-dropdown__wrapper\">\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\n                  <div class=\"m-dropdown__inner\">\n                    <div class=\"m-dropdown__header m--align-center\">\n                      <div class=\"m-card-user m-card-user--skin-light\">\n                        <div class=\"m-card-user__pic\">\n                          <img src=\"./assets/app/media/img/users/user4.jpg\"\n                               class=\"m--img-rounded m--marginless\"\n                               alt=\"\" />\n                        </div>\n                        <div class=\"m-card-user__details\">\n                          <span class=\"m-card-user__name m--font-weight-500\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tMark Andre\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                          <a href=\"\"\n                             class=\"m-card-user__email m--font-weight-300 m-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tmark.andre@gmail.com\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"m-dropdown__body\">\n                      <div class=\"m-dropdown__content\">\n                        <ul class=\"m-nav m-nav--skin-light\">\n                          <li class=\"m-nav__section m--hide\">\n                            <span class=\"m-nav__section-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/profile\"\n                               class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/profile\"\n                               class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/profile\"\n                               class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/profile\"\n                               class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/profile\"\n                               class=\"m-nav__link\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                          <li class=\"m-nav__separator m-nav__separator--fit\"></li>\n                          <li class=\"m-nav__item\">\n                            <a routerLink=\"/snippets/pages/user/login-1\"\n                               class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\"\n                               routerLink=\"/logout\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n              <li id=\"m_quick_sidebar_toggle\"\n                  class=\"m-nav__item\">\n                <a href=\"#\"\n                   class=\"m-nav__link m-dropdown__toggle\">\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <!-- END: Topbar -->\n      </div>\n    </div>\n  </div>\n</header>\n<!-- END: Header -->"

/***/ }),

/***/ "./src/app/container/header-nav/header-nav.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/container/header-nav/header-nav.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/container/header-nav/header-nav.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/container/header-nav/header-nav.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-nav',
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/container/header-nav/header-nav.component.html"),
            styles: [__webpack_require__(/*! ./header-nav.component.scss */ "./src/app/container/header-nav/header-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/container/header-nav/header-nav.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/container/header-nav/header-nav.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavModule", function() { return HeaderNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-nav.component */ "./src/app/container/header-nav/header-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeaderNavModule = /** @class */ (function () {
    function HeaderNavModule() {
    }
    HeaderNavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"]],
            exports: [_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"]]
        })
    ], HeaderNavModule);
    return HeaderNavModule;
}());



/***/ }),

/***/ "./src/app/core/block-ui/block-ui.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/block-ui/block-ui.module.ts ***!
  \**************************************************/
/*! exports provided: BlockUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockUiModule", function() { return BlockUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _block_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-ui.service */ "./src/app/core/block-ui/block-ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlockUiModule = /** @class */ (function () {
    function BlockUiModule() {
    }
    BlockUiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            providers: [_block_ui_service__WEBPACK_IMPORTED_MODULE_2__["BlockUiService"]]
        })
    ], BlockUiModule);
    return BlockUiModule;
}());



/***/ }),

/***/ "./src/app/core/block-ui/block-ui.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/block-ui/block-ui.service.ts ***!
  \***************************************************/
/*! exports provided: BlockUiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockUiService", function() { return BlockUiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockUiService = /** @class */ (function () {
    function BlockUiService() {
    }
    BlockUiService.prototype.isLoading = function (element, enable) {
        if (enable) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(element).addClass('m-page--loading-non-block');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_1__(element).removeClass('m-page--loading-non-block');
        }
    };
    BlockUiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], BlockUiService);
    return BlockUiService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toastr_toastr_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr/toastr.module */ "./src/app/core/toastr/toastr.module.ts");
/* harmony import */ var _translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translate/translate-hub.module */ "./src/app/core/translate/translate-hub.module.ts");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _block_ui_block_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-ui/block-ui.module */ "./src/app/core/block-ui/block-ui.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_3__["TranslateHubModule"], _block_ui_block_ui_module__WEBPACK_IMPORTED_MODULE_5__["BlockUiModule"], _toastr_toastr_module__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"]],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/error-messages/error-messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/error-messages/error-messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-{{i}}\"\n     *ngFor=\"let message of errorMessage; let i = index\"\n     class=\"form-control-feedback\">\n  {{message}}\n</div>\n"

/***/ }),

/***/ "./src/app/core/error-messages/error-messages.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/error-messages/error-messages.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/error-messages/error-messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/error-messages/error-messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: ErrorMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesComponent", function() { return ErrorMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorMessagesComponent = /** @class */ (function () {
    function ErrorMessagesComponent() {
    }
    ErrorMessagesComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ErrorMessagesComponent.prototype, "errorMessage", {
        get: function () {
            var _this = this;
            this.messages = [];
            if (!this.control.valid && this.control.touched) {
                Object.keys(this.control.errors || {}).forEach(function (error) {
                    _this.messages.push(_this.errors[error]);
                });
            }
            return this.messages;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"])
    ], ErrorMessagesComponent.prototype, "control", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ErrorMessagesComponent.prototype, "errors", void 0);
    ErrorMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-messages',
            template: __webpack_require__(/*! ./error-messages.component.html */ "./src/app/core/error-messages/error-messages.component.html"),
            styles: [__webpack_require__(/*! ./error-messages.component.scss */ "./src/app/core/error-messages/error-messages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessagesComponent);
    return ErrorMessagesComponent;
}());



/***/ }),

/***/ "./src/app/core/error-messages/error-messages.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/error-messages/error-messages.module.ts ***!
  \**************************************************************/
/*! exports provided: ErrorMessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesModule", function() { return ErrorMessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-messages.component */ "./src/app/core/error-messages/error-messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorMessagesModule = /** @class */ (function () {
    function ErrorMessagesModule() {
    }
    ErrorMessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesComponent"]],
            exports: [_error_messages_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessagesComponent"]]
        })
    ], ErrorMessagesModule);
    return ErrorMessagesModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: ErrorMessagesModule, createTranslateLoader, appInitializerFactory, TranslateHubModule, CoreModule, throwIfAlreadyLoaded, ToastrModule, ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-messages/error-messages.module */ "./src/app/core/error-messages/error-messages.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessagesModule", function() { return _error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_0__["ErrorMessagesModule"]; });

/* harmony import */ var _toastr___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toastr/ */ "./src/app/core/toastr/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return _toastr___WEBPACK_IMPORTED_MODULE_1__["ToastrModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return _toastr___WEBPACK_IMPORTED_MODULE_1__["ToastrService"]; });

/* harmony import */ var _translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translate/translate-hub.module */ "./src/app/core/translate/translate-hub.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return _translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_2__["createTranslateLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appInitializerFactory", function() { return _translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_2__["appInitializerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TranslateHubModule", function() { return _translate_translate_hub_module__WEBPACK_IMPORTED_MODULE_2__["TranslateHubModule"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_4__["throwIfAlreadyLoaded"]; });








/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/toastr/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/toastr/index.ts ***!
  \**************************************/
/*! exports provided: ToastrModule, ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toastr_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastr.module */ "./src/app/core/toastr/toastr.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return _toastr_module__WEBPACK_IMPORTED_MODULE_0__["ToastrModule"]; });

/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toastr.service */ "./src/app/core/toastr/toastr.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return _toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]; });





/***/ }),

/***/ "./src/app/core/toastr/toastr.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/toastr/toastr.module.ts ***!
  \**********************************************/
/*! exports provided: ToastrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr.service */ "./src/app/core/toastr/toastr.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            providers: [_toastr_service__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]]
        })
    ], ToastrModule);
    return ToastrModule;
}());



/***/ }),

/***/ "./src/app/core/toastr/toastr.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/toastr/toastr.service.ts ***!
  \***********************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrService = /** @class */ (function () {
    function ToastrService() {
        this.options = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': false,
            'progressBar': false,
            'positionClass': 'toast-top-right',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '300',
            'hideDuration': '1000',
            'timeOut': '5000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }
    ToastrService.prototype.success = function (message, title, options) {
        if (title === void 0) { title = 'Success'; }
        toastr.options = __assign({}, this.options, options);
        toastr.success(message, title);
    };
    ToastrService.prototype.error = function (message, title, options) {
        if (title === void 0) { title = 'Error'; }
        toastr.options = __assign({}, this.options, options);
        toastr.error(message, title);
    };
    ToastrService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/core/translate/translate-hub.module.ts":
/*!********************************************************!*\
  !*** ./src/app/core/translate/translate-hub.module.ts ***!
  \********************************************************/
/*! exports provided: createTranslateLoader, appInitializerFactory, TranslateHubModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appInitializerFactory", function() { return appInitializerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateHubModule", function() { return TranslateHubModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http, './assets/locale/', '.json');
}
function appInitializerFactory(translate, injector) {
    return function () { return new Promise(function (resolve) {
        translate.setDefaultLang('pt-BR');
        resolve();
    }); };
}
var TranslateHubModule = /** @class */ (function () {
    function TranslateHubModule() {
    }
    TranslateHubModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    },
                })
            ],
            exports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]
            ],
            declarations: [],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                    useFactory: appInitializerFactory,
                    deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]],
                    multi: true
                }
            ]
        })
    ], TranslateHubModule);
    return TranslateHubModule;
}());



/***/ }),

/***/ "./src/app/interceptors/url.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/url.interceptor.ts ***!
  \*************************************************/
/*! exports provided: UrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlInterceptor", function() { return UrlInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UrlInterceptor = /** @class */ (function () {
    function UrlInterceptor() {
    }
    UrlInterceptor.prototype.intercept = function (request, next) {
        if (!request.url.includes('://') && !request.url.includes('assets/local')) {
            var apiReq = request.clone({ url: "http://localhost:3000/" + request.url });
            return next.handle(apiReq);
        }
        return next.handle(request);
    };
    UrlInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UrlInterceptor);
    return UrlInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/error-messages/error-messages.module */ "./src/app/core/error-messages/error-messages.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _core_error_messages_error_messages_module__WEBPACK_IMPORTED_MODULE_3__["ErrorMessagesModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid m-grid--hor m-grid--root m-page\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2\"\n       id=\"m_login\"\n       style=\"background-image: url(assets/img/bg/bg-3.jpg);\">\n    <div class=\"m-grid__item m-grid__item--fluid\tm-login__wrapper\">\n      <div class=\"m-login__container\">\n        <div class=\"m-login__logo\">\n          <a href=\"javascript:\">\n            <img src=\"assets/icons/favicon-96x96.png\">\n          </a>\n        </div>\n        <div class=\"m-login__signin\">\n          <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n              {{'signin.title'|translate}}\n            </h3>\n          </div>\n          <form (ngSubmit)=\"signin()\"\n                [formGroup]=\"signinForm\"\n                class=\"m-login__form m-form\"\n                action=\"\">\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('email')}\">\n              <input class=\"form-control m-input\"\n                     type=\"text\"\n                     placeholder=\"{{'signin.email'|translate}}\"\n                     name=\"email\"\n                     formControlName=\"email\"\n                     autocomplete=\"off\">\n              <app-error-messages id=\"email-error\"\n                                  [control]=\"signinForm.get('email')\"\n                                  [errors]=\"{\n                                           'required': translateService.instant('general.required'),\n                                           'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('email')}),\n                                           'email': translateService.instant('general.email')\n                                         }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('password')}\">\n              <input class=\"form-control m-input m-login__form-input--last\"\n                     type=\"password\"\n                     placeholder=\"{{'signin.password'|translate}}\"\n                     name=\"password\"\n                     formControlName=\"password\">\n              <app-error-messages id=\"password-error\"\n                                  [control]=\"signinForm.get('password')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('password')})\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"row m-login__form-sub\">\n              <div class=\"col m--align-left m-login__form-left\">\n                <label class=\"m-checkbox  m-checkbox--focus\">\n                  <input type=\"checkbox\" name=\"remember\">\n                  {{'signin.remember_me'|translate}}\n                  <span></span>\n                </label>\n              </div>\n              <div class=\"col m--align-right m-login__form-right\">\n                <a href=\"javascript:;\"\n                   id=\"m_login_forget_password\"\n                   class=\"m-link\">\n                   {{'signin.forget_password'|translate}} ?\n                </a>\n              </div>\n            </div>\n            <div class=\"m-login__form-action\">\n              <button id=\"m_login_signin_submit\"\n                      class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air m-login__btn m-login__btn--primary\">\n                      {{'signin.login'|translate}}\n              </button>\n            </div>\n          </form>\n        </div>\n        <div class=\"m-login__account\">\n          <span class=\"m-login__account-msg\">\n            {{'signin.has_account'|translate}} ?\n          </span> &nbsp;&nbsp;\n          <a id=\"m_login_signup\"\n             class=\"m-link m-link--focus m-login__account-link\"\n             [routerLink]=\"['/signup']\">\n            {{'signin.signup'|translate}}\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin.service */ "./src/app/signin/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninComponent = /** @class */ (function () {
    function SigninComponent(signinService, router, translateService, toastrService) {
        this.signinService = signinService;
        this.router = router;
        this.translateService = translateService;
        this.toastrService = toastrService;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SigninComponent.prototype.createForm = function () {
        this.signinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])),
            remember: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        if (this.signinForm.valid) {
            return this.signinService.signin(this.signinForm.getRawValue()).subscribe(function (success) {
                _this.toastrService.success('You successfully logged in!', 'Success');
                _this.router.navigate(['container']);
            }, function (exception) {
                return _this.toastrService.error(exception.error.message, exception.error.title);
            });
        }
        Object.keys(this.signinForm.controls).forEach(function (control) {
            _this.signinForm.get(control).markAsTouched();
            _this.signinForm.get(control).updateValueAndValidity();
        });
    };
    SigninComponent.prototype.isFieldInvalid = function (field) {
        return (this.signinForm.get(field).touched && !this.signinForm.get(field).valid);
    };
    SigninComponent.prototype.getMinimumLength = function (control) {
        return (this.signinForm.get(control).errors &&
            this.signinForm.get(control).errors.minlength &&
            this.signinForm.get(control).errors.minlength.requiredLength);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_signin_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _signin_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.routing */ "./src/app/signin/signin.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin.service */ "./src/app/signin/signin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _signin_routing__WEBPACK_IMPORTED_MODULE_3__["SigninRouting"]],
            declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]],
            providers: [_signin_service__WEBPACK_IMPORTED_MODULE_5__["SigninService"]]
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.routing.ts":
/*!******************************************!*\
  !*** ./src/app/signin/signin.routing.ts ***!
  \******************************************/
/*! exports provided: SigninRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninRouting", function() { return SigninRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.component */ "./src/app/signin/signin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'signin',
        component: _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }
];
var SigninRouting = /** @class */ (function () {
    function SigninRouting() {
    }
    SigninRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], SigninRouting);
    return SigninRouting;
}());



/***/ }),

/***/ "./src/app/signin/signin.service.ts":
/*!******************************************!*\
  !*** ./src/app/signin/signin.service.ts ***!
  \******************************************/
/*! exports provided: SigninService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninService", function() { return SigninService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninService = /** @class */ (function () {
    function SigninService(http) {
        this.http = http;
    }
    SigninService.prototype.signin = function (body) {
        return this.http.post('signin', body);
    };
    SigninService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SigninService);
    return SigninService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid m-grid--hor m-grid--root m-page\">\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--hor m-login m-login--signin m-login--2 m-login-2--skin-2\"\n       id=\"m_login\"\n       style=\"background-image: url(assets/img/bg/bg-3.jpg);\">\n    <div class=\"m-grid__item m-grid__item--fluid\tm-login__wrapper\">\n      <div class=\"m-login__container\">\n        <div class=\"m-login__logo\">\n          <a href=\"#\">\n            <img src=\"assets/icons/favicon-96x96.png\">\n          </a>\n        </div>\n        <div class=\"m-login__signin\">\n          <div class=\"m-login__head\">\n            <h3 class=\"m-login__title\">\n              {{'signup.title'|translate}}\n            </h3>\n            <div class=\"m-login__desc\">\n              {{'signup.create_account_detail'|translate}}\n            </div>\n          </div>\n          <form (ngSubmit)=\"signup()\"\n                [formGroup]=\"signupForm\"\n                class=\"m-login__form m-form\"\n                action=\"\">\n            <ng-template #alertSignup></ng-template>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('firstname')}\">\n              <input class=\"form-control m-input\"\n                     type=\"text\"\n                     placeholder=\"{{'signup.firstname'|translate}}\"\n                     name=\"firstname\"\n                     formControlName=\"firstname\">\n              <app-error-messages id=\"firstname-error\"\n                                  [control]=\"signupForm.get('firstname')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('firstname')})\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('lastname')}\">\n              <input class=\"form-control m-input\"\n                     type=\"text\"\n                     placeholder=\"{{'signup.lastname'|translate}}\"\n                     name=\"lastname\"\n                     formControlName=\"lastname\">\n              <app-error-messages id=\"lastname-error\"\n                                  [control]=\"signupForm.get('lastname')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('lastname')})\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('email')}\">\n              <input class=\" form-control m-input\"\n                     type=\"email\"\n                     placeholder=\"{{'signup.email'|translate}}\"\n                     name=\"email\"\n                     formControlName=\"email\"\n                     autocomplete=\"off\">\n              <app-error-messages id=\"email-error\"\n                                  [control]=\"signupForm.get('email')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('email')}),\n                                            'email': translateService.instant('general.email')\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('password')}\">\n              <input class=\"form-control m-input\"\n                     type=\"password\"\n                     placeholder=\"{{'signup.password'|translate}}\"\n                     name=\"password\"\n                     formControlName=\"password\">\n              <app-error-messages id=\"password-error\"\n                                  [control]=\"signupForm.get('password')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('password')})\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('rpassword')}\">\n              <input class=\"form-control m-input m-login__form-input--last\"\n                     type=\"password\"\n                     placeholder=\"{{'signup.confirm_password'|translate}}\"\n                     name=\"rpassword\"\n                     formControlName=\"rpassword\">\n              <app-error-messages id=\"rpassword-error\"\n                                  [control]=\"signupForm.get('rpassword')\"\n                                  [errors]=\"{\n                                            'required': translateService.instant('general.required'),\n                                            'minlength': translateService.instant('general.min_length', {'value':  getMinimumLength('rpassword')}),\n                                            'not_match': translateService.instant('general.password_not_match')\n                                          }\">\n              </app-error-messages>\n            </div>\n            <div class=\"form-group m-form__group m-login__form-sub\"\n                 [ngClass]=\"{'has-danger': isFieldInvalid('agreed')}\">\n              <div class=\"row\">\n                <div class=\"col m--align-left\">\n                  <label class=\"m-checkbox m-checkbox--focus\">\n                              <input type=\"checkbox\"\n                                    name=\"agreed\"\n                                    formControlName=\"agreed\"> {{'signup.agreed'|translate}}\n                              <a class=\"m-link m-link--focus\" data-toggle=\"modal\" href=\"#m_modal_6\">\n                                {{'signup.terms_and_conditions'|translate}}\n                              </a>\n                              .\n                              <span></span>\n                            </label>\n                  <span class=\"m-form__help\"></span>\n                </div>\n              </div>\n              <div class=\"row\">\n                <app-error-messages id=\"agreed-error\"\n                                    [ngStyle]=\"{'padding-left': '1.2em'}\"\n                                    [control]=\"signupForm.get('agreed')\"\n                                    [errors]=\"{\n                                            'not_agreed': translateService.instant('general.not_agreed')\n                                          }\">\n                </app-error-messages>\n              </div>\n            </div>\n            <div class=\"m-login__form-action\">\n              <button id=\"m_login_signup_submit\"\n                      type=\"submit\"\n                      class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\n                            {{'signup.btn_sign'|translate}}\n            </button>\n              <button id=\"m_login_signup_cancel\"\n                      type=\"button\"\n                      class=\"btn btn-outline-focus m-btn m-btn--pill m-btn--custom\"\n                      [routerLink]=\"[ '/signin']\">\n                          {{'signup.btn_cancel'|translate}}\n            </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<app-terms-conditions></app-terms-conditions>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core */ "./src/app/core/index.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup/signup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService, router, translateService, toastrService) {
        this.signupService = signupService;
        this.router = router;
        this.translateService = translateService;
        this.toastrService = toastrService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SignupComponent.prototype.createForm = function () {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])),
            rpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                this.isPasswordEqual.call(this)
            ])),
            agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.isAgreed)
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        if (this.signupForm.valid) {
            return this.signupService
                .signup(this.signupForm.getRawValue())
                .subscribe(function (success) { return _this.router.navigate(['signin']); }, function (exception) {
                return _this.toastrService.error(exception.error.message, exception.error.title);
            });
        }
        Object.keys(this.signupForm.controls).forEach(function (control) {
            _this.signupForm.get(control).markAsTouched();
            _this.signupForm.get(control).updateValueAndValidity();
        });
    };
    SignupComponent.prototype.isFieldInvalid = function (field) {
        return (this.signupForm.get(field).touched && !this.signupForm.get(field).valid);
    };
    SignupComponent.prototype.getMinimumLength = function (control) {
        return (this.signupForm.get(control).errors &&
            this.signupForm.get(control).errors.minlength &&
            this.signupForm.get(control).errors.minlength.requiredLength);
    };
    SignupComponent.prototype.isPasswordEqual = function (password) {
        var _this = this;
        return function (control) {
            if (control.valid && control.value !== _this.password) {
                return { not_match: true };
            }
            return null;
        };
    };
    SignupComponent.prototype.isAgreed = function (control) {
        return !control.value ? { not_agreed: true } : null;
    };
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return (this.signupForm &&
                this.signupForm.get('password') &&
                this.signupForm.get('password').value);
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _signup_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.routing */ "./src/app/signup/signup.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup/signup.service.ts");
/* harmony import */ var _terms_conditions_terms_conditions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.module */ "./src/app/signup/terms-conditions/terms-conditions.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _signup_routing__WEBPACK_IMPORTED_MODULE_3__["SignupRouting"],
                _terms_conditions_terms_conditions_module__WEBPACK_IMPORTED_MODULE_7__["TermsConditionsModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]],
            providers: [_signup_service__WEBPACK_IMPORTED_MODULE_6__["SignupService"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.routing.ts":
/*!******************************************!*\
  !*** ./src/app/signup/signup.routing.ts ***!
  \******************************************/
/*! exports provided: SignupRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRouting", function() { return SignupRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'signup',
        component: _signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }
];
var SignupRouting = /** @class */ (function () {
    function SignupRouting() {
    }
    SignupRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], SignupRouting);
    return SignupRouting;
}());



/***/ }),

/***/ "./src/app/signup/signup.service.ts":
/*!******************************************!*\
  !*** ./src/app/signup/signup.service.ts ***!
  \******************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.signup = function (body) {
        console.log(body);
        return this.http.post('signup', body);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/signup/terms-conditions/terms-conditions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/signup/terms-conditions/terms-conditions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div aria-hidden=\"true\"\n     aria-labelledby=\"exampleModalCenterTitle\"\n     class=\"modal fade\"\n     [ngClass]=\"{'show': showModal}\"\n     id=\"m_modal_6\"\n     role=\"dialog\"\n     tabindex=\"-1\">\n  <div class=\"modal-dialog modal-dialog-centered\"\n       role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\"\n            id=\"exampleModalLongTitle\">\n          {{'terms_conditions.title'|translate}}\n        </h5>\n        <button aria-label=\"Close\"\n                class=\"close\"\n                data-dismiss=\"modal\"\n                type=\"button\">\n          <span aria-hidden=\"true\">\n            ×\n          </span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>\n          {{'terms_conditions.descrition'|translate}}\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\"\n                data-dismiss=\"modal\"\n                type=\"button\">\n            {{'terms_conditions.close'|translate}}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/terms-conditions/terms-conditions.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/signup/terms-conditions/terms-conditions.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/terms-conditions/terms-conditions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/signup/terms-conditions/terms-conditions.component.ts ***!
  \***********************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/signup/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.scss */ "./src/app/signup/terms-conditions/terms-conditions.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());



/***/ }),

/***/ "./src/app/signup/terms-conditions/terms-conditions.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/signup/terms-conditions/terms-conditions.module.ts ***!
  \********************************************************************/
/*! exports provided: TermsConditionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsModule", function() { return TermsConditionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-conditions.component */ "./src/app/signup/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TermsConditionsModule = /** @class */ (function () {
    function TermsConditionsModule() {
    }
    TermsConditionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]],
            declarations: [_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionsComponent"]],
            exports: [_terms_conditions_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionsComponent"]]
        })
    ], TermsConditionsModule);
    return TermsConditionsModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/csvinhal/bill-management-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map