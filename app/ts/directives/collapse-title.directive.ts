import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { _settings } from '../helpers/settings';

@Component({
	selector: 'collapse-title, [collapse-title]',
	inputs: ['imageLinks', 'volumeInfo', 'saleInfo', 'bookId'],
	// directives: [ROUTER_DIRECTIVES],
	// templateUrl: _settings.buildPath + '/directives/collapse-title.template.html'
	templateUrl: '../../../app/templates/directives/collapse-title.template.html'
})

export class CollapseTitle {
	isVisible: Boolean;

	constructor(
		private router: Router
	) {
		this.isVisible = true;
	}

	toggleSection() {
		this.isVisible = !this.isVisible;
	}

	onSelect(bookId: string) {
		this.router.navigate(['/bookdetail', bookId]);
	}
}
