import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {AppHeader} from './header.component';
import { _settings } from '../helpers/settings';

@Component({
	selector: 'books-app',
	templateUrl: _settings.buildPath + 'app.template.html',
	directives: [AppHeader, ROUTER_DIRECTIVES]
})

export class App {
	constructor() { }
}
