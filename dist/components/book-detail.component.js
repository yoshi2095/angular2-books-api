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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var links_directive_1 = require('../directives/links.directive');
var generic_info_directive_1 = require('../directives/generic-info.directive');
var api_service_1 = require('../services/api.service');
var settings_1 = require('../helpers/settings');
var BookDetail = (function () {
    function BookDetail(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.showLoader = false;
    }
    BookDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader = true;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.api.getData('https://www.googleapis.com/books/v1/volumes/' + id + '?projection=full').subscribe(function (data) { return _this.bookData = data; }, function (error) { return console.error('Error: ' + error); }, function () { return _this.showLoader = false; });
        });
    };
    BookDetail.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BookDetail = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS, api_service_1.api],
            directives: [links_directive_1.Links, generic_info_directive_1.GenericInfo],
            templateUrl: settings_1._settings.buildPath + 'bookDetail.template.html'
        }), 
        __metadata('design:paramtypes', [api_service_1.api, router_1.ActivatedRoute, router_1.Router])
    ], BookDetail);
    return BookDetail;
}());
exports.BookDetail = BookDetail;

//# sourceMappingURL=book-detail.component.js.map
