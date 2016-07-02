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
var collapse_title_directive_1 = require('../directives/collapse-title.directive');
var settings_1 = require('../helpers/settings');
var api_service_1 = require('../services/api.service');
var localStorage_service_1 = require('../services/localStorage.service');
var utils_service_1 = require('../services/utils.service');
var BooksListing = (function () {
    function BooksListing(api, LS, utils) {
        this.api = api;
        this.LS = LS;
        this.utils = utils;
        this.booksData = [];
        this.showLoader = false;
        this.inputError = false;
        this.searchLimitVals = [10, 20, 30, 40];
        this.sortOrderVals = ['relevance', 'newest'];
        this.localSortOrderVals = [{
                'text': 'By: Name',
                'sortValue': '+volumeInfo.title'
            }, {
                'text': 'By: Price Descending',
                'sortValue': '-saleInfo.listPrice.amount'
            }, {
                'text': 'By: Price Ascending',
                'sortValue': '+saleInfo.listPrice.amount'
            }];
        this.checkLSForData();
    }
    BooksListing.prototype.checkLSForData = function () {
        var searchQuery = this.LS.getValue('searchQuery'), searchLimit = this.LS.getValue('searchLimit'), sortOrder = this.LS.getValue('sortOrder'), localSortKey = this.LS.getValue('localSortKey');
        if (!this.utils.isNullUndefined(searchQuery) &&
            !this.utils.isNullUndefined(searchLimit) &&
            !this.utils.isNullUndefined(sortOrder) &&
            !this.utils.isNullUndefined(localSortKey)) {
            this.utils.log('ls value obtained: ', searchQuery);
            this.model = {
                searchQuery: searchQuery,
                searchLimit: searchLimit,
                sortOrder: sortOrder,
                localSortKey: localSortKey
            };
            this.sendSearchRequest();
        }
        else {
            this.utils.log('ls value not obtained');
            this.model = {
                searchQuery: '',
                searchLimit: 10,
                sortOrder: 'relevance',
                localSortKey: '+volumeInfo.title'
            };
        }
    };
    BooksListing.prototype.ngOnInit = function () { };
    BooksListing.prototype.searchBooks = function ($event) {
        this.model.searchQuery = this.model.searchQuery.trim();
        this.utils.log('searchBooks, searchQuery: ', this.model.searchQuery, ', :searchLimit: ', this.model.searchLimit);
        if (this.pendingRequest) {
            this.pendingRequest = this.pendingRequest.unsubscribe();
        }
        if (this.model.searchQuery.length > 2) {
            this.sendSearchRequest();
            this.inputError = false;
        }
        else {
            this.inputError = true;
            if (this.model.searchQuery.length === 0) {
                this.booksData = [];
            }
        }
        this.LS.setValue({
            'searchQuery': this.model.searchQuery,
            'searchLimit': this.model.searchLimit,
            'sortOrder': this.model.sortOrder,
            'localSortKey': this.model.localSortKey
        });
    };
    BooksListing.prototype.sendSearchRequest = function () {
        var _this = this;
        this.showLoader = true;
        this.pendingRequest = this.api.getData('https://www.googleapis.com/books/v1/volumes?q=' + this.model.searchQuery + '&maxResults=' + this.model.searchLimit + '&orderBy=' + this.model.sortOrder).
            // delay(500).
            subscribe(function (data) { return _this.booksData = data.items; }, function (error) { return console.error('Error: ' + error); }, function () { return _this.sortData(); });
    };
    BooksListing.prototype.sortData = function ($event) {
        this.showLoader = false;
        var sortkey = this.model.localSortKey, sortDirection = 1;
        if (sortkey.indexOf('-') > 0) {
            sortkey = sortkey.replace(/-/, '');
            sortDirection = -1;
        }
        else {
            sortkey = sortkey.replace(/\+/, '');
            sortDirection = 1;
        }
        if (!this.utils.isNullUndefined(this.booksData)) {
            this.utils.sortArrayObject(sortkey, this.booksData, sortDirection);
        }
    };
    BooksListing = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS, api_service_1.api, localStorage_service_1.LocalStorage, utils_service_1.Utils],
            directives: [collapse_title_directive_1.CollapseTitle],
            templateUrl: settings_1._settings.buildPath + 'booksListing.template.html'
        }), 
        __metadata('design:paramtypes', [api_service_1.api, localStorage_service_1.LocalStorage, utils_service_1.Utils])
    ], BooksListing);
    return BooksListing;
}());
exports.BooksListing = BooksListing;

//# sourceMappingURL=books-listing.component.js.map
