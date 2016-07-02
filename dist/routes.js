"use strict";
var router_1 = require('@angular/router');
var books_listing_component_1 = require('./components/books-listing.component');
var book_detail_component_1 = require('./components/book-detail.component');
exports.routes = [
    { path: 'bookslisting', component: books_listing_component_1.BooksListing },
    { path: 'bookdetail/:id', component: book_detail_component_1.BookDetail },
    { path: '', redirectTo: 'bookslisting', terminal: true }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

//# sourceMappingURL=routes.js.map
