import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Image } from 'angular-modal-gallery';

@Component({
	selector: 'nut-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GalleryComponent implements OnInit {

	imagesArray: Array<Image> = [
		new Image('../assets/images/gallery/0011.jpg'),
		new Image('../assets/images/gallery/0021.jpg'),
		new Image('../assets/images/gallery/0031.jpg'),
		new Image('../assets/images/gallery/0041.jpg'),
		new Image('../assets/images/gallery/0051.jpg'),
		new Image('../assets/images/bg-main.jpg'),
		new Image('../assets/images/bg-read-more.jpg'),
		new Image('../assets/images/gallery/0021.jpg'),
	];

	constructor() { }

	ngOnInit() {
	}

}
