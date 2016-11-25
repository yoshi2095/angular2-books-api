import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppRoutingModule } from './routes';
import { Api } from './services/api.service';
import { LocalStorage } from './services/localStorage.service';
import { Utils } from './services/utils.service';

import { AppHeader } from './components/header.component';
import { App } from './components/app.component';
import { BooksListing } from './components/books-listing.component';
import { BookDetail } from './components/book-detail.component';

import {CollapseTitle} from './directives/collapse-title.directive';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, JsonpModule ],
  declarations: [ AppHeader, App, BooksListing, BookDetail, CollapseTitle ],
  providers: [ Api, LocalStorage, Utils ],
  bootstrap: [ App ]
})

export class AppModule { }
