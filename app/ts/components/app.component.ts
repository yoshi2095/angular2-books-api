import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES, RouterLink } from '@angular/router';

import {AppHeader} from './header.component';
import { _settings } from '../helpers/settings';

@Component({
	selector: 'books-app',
	templateUrl: _settings.buildPath + 'app.template.html',
	directives: [AppHeader, ROUTER_DIRECTIVES, RouterLink]
})

export class App {
	constructor() { }
}
