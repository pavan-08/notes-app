// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions } from '../../modules/core/index';
import { UserService } from '../../modules/notes-app/index';

@Component({
  moduleId: module.id,
  selector: 'sd-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
	public error:string = '';
	public form: any = [
		{
			name: 'name',
			label: 'Full Name',
			value: '',
			type: 'text',
			placeholder: 'Enter fullname',
			error: ''
		},
		{
			name: 'email',
			label: 'Email ID',
			value: '',
			type: 'email',
			placeholder: 'Enter email id',
			error: ''
		},
		{
			name: 'password',
			label: 'Password',
			value: '',
			type: 'password',
			placeholder: 'Enter password',
			error: ''
		},
		{
			name: 'cpassword',
			label: 'Confirm password',
			value: '',
			type: 'password',
			placeholder: 'Renter password',
			error: ''
		}
	];
	constructor(private userService: UserService){}

	ngOnInit() {}

	validate(): boolean {
		for(var i=0; i<this.form.length; i++) {
			this.form[i].error = ''; //reset errors here
			this.form[i].value = this.form[i].value.trim();
			if(this.form[i].value === '') {
				this.form[i].error = 'Fill this field';
				return false;
			}
		}
		if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form[1].value)) {
			this.form[1].error = 'Invalid email address';
			return false;
		}
		if(this.form[2].value !== this.form[3].value) {
			this.form[3].error = 'Passwords don\'t match!';
			this.form[3].value = '';
			return false;
		}
		return true;
	}

	submit(): boolean {
		if(this.validate()) {
			this.userService.signUp(this.form[1].value, this.form[2].value, this.form[0].value)
					.subscribe(res => {
						console.log(res);
						//redirect to home
					},
					err => {
						this.error = JSON.parse(err._body).message;
					});
		}
		return false;
	}
}