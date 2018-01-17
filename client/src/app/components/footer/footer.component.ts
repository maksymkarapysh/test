import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../../shared/feedback.service';

@Component({
	selector: 'nut-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],

})
export class FooterComponent implements OnInit {

	feedbackForm: FormGroup;

	constructor(private feedbackService: FeedbackService) { }

	ngOnInit() {
	}

	private sendData(name, email, subject, message) {
		let data = {
			name,
			email,
			subject,
			message
		};

		this.feedbackService.sendMessage(data).subscribe(() => console.log('send data'));
	}
}
