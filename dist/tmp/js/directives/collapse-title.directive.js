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
var router_1 = require('@angular/router');
var settings_1 = require('../helpers/settings');
var CollapseTitle = (function () {
    function CollapseTitle(router) {
        this.router = router;
        this.isVisible = true;
    }
    CollapseTitle.prototype.toggleSection = function () {
        this.isVisible = !this.isVisible;
    };
    CollapseTitle.prototype.onSelect = function (bookId) {
        this.router.navigate(['/bookdetail', bookId]);
    };
    CollapseTitle = __decorate([
        core_1.Component({
            selector: 'collapse-title, [collapse-title]',
            inputs: ['imageLinks', 'volumeInfo', 'saleInfo', 'bookId'],
            // directives: [ROUTER_DIRECTIVES],
            templateUrl: settings_1._settings.buildPath + '/directives/collapse-title.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CollapseTitle);
    return CollapseTitle;
}());
exports.CollapseTitle = CollapseTitle;

//# sourceMappingURL=../sourcemaps/directives/collapse-title.directive.js.map
