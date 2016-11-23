import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppRoutingModule } from './routes';

import { App } from './components/app.component';
import { BooksListing } from './components/books-listing.component';
import { BookDetail } from './components/book-detail.component';

import { Api } from './services/api.service';
import { LocalStorage } from './services/localStorage.service';
import { Utils } from './services/utils.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, JsonpModule ],
  declarations: [ App, BooksListing, BookDetail ],
  providers: [ Api, LocalStorage, Utils ],
  bootstrap: [ App ]
})

export class AppModule { }
