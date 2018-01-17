import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'nut-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.scss'],
})
export class RootComponent {
	private visibleBasket: boolean;

	constructor() { }

	toggleBasket(visible) {
		this.visibleBasket = visible;
	}
}
