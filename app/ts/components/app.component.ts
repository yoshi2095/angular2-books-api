import { Component } from '@angular/core';

import { AppHeader } from './header.component';
import { _settings } from '../helpers/settings';

@Component({
	selector: 'books-app',
	templateUrl: _settings.buildPath + 'app.template.html',
	// directives: [AppHeader, ROUTER_DIRECTIVES]
})

export class App {
	constructor() { }
}
