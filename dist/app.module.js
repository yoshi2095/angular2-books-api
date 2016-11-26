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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var routes_1 = require('./routes');
var api_service_1 = require('./services/api.service');
var localStorage_service_1 = require('./services/localStorage.service');
var utils_service_1 = require('./services/utils.service');
var header_component_1 = require('./components/header.component');
var app_component_1 = require('./components/app.component');
var books_listing_component_1 = require('./components/books-listing.component');
var book_detail_component_1 = require('./components/book-detail.component');
var collapse_title_directive_1 = require('./directives/collapse-title.directive');
var links_directive_1 = require('./directives/links.directive');
var generic_info_directive_1 = require('./directives/generic-info.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routes_1.AppRoutingModule, http_1.HttpModule, http_1.JsonpModule],
            declarations: [header_component_1.AppHeader, app_component_1.App, books_listing_component_1.BooksListing, book_detail_component_1.BookDetail, collapse_title_directive_1.CollapseTitle, links_directive_1.Links, generic_info_directive_1.GenericInfo],
            providers: [api_service_1.Api, localStorage_service_1.LocalStorage, utils_service_1.Utils],
            bootstrap: [app_component_1.App]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
