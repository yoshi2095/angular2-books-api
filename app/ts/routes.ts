import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListing } from './components/books-listing.component';
import { BookDetail } from './components/book-detail.component';

export const routes: Routes = [
	{path: 'bookslisting', component: BooksListing},
	{path: 'bookdetail/:id', component: BookDetail},
	{ path: '', redirectTo: '/bookslisting', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
