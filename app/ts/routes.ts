import {provideRouter, RouterConfig} from '@angular/router';

import {BooksListing} from './components/books-listing.component';
import {BookDetail} from './components/book-detail.component';

export const routes:RouterConfig = [
	{path: 'bookslisting', component: BooksListing},
	{path: 'bookdetail/:id', component: BookDetail},
	{path: '', redirectTo: 'bookslisting', terminal: true}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];