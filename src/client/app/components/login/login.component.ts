// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// app
import { RouterExtensions, StorageService, StorageKey } from '../../modules/core/index';
import { UserService } from '../../modules/notes-app/index';

@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
	
	public email: string;
	public password: string;
	public error: string;

	constructor(
		private routerext: RouterExtensions,
		private storage: StorageService,
		private userService: UserService
		){}

	ngOnInit() {
		this.email = '';
		this.password = '';
		this.error = '';
		if(this.userService.isLoggedIn()) {
			this.goToHome();
		}
	}

	login() {
		this.email = this.email.trim();
		this.password = this.password.trim();
		if(this.email !== '' && this.password !== '') {
			this.storage.setItem(StorageKey['USERNAME'], this.email);
			this.storage.setItem(StorageKey['PASSWORD'], this.password);
			this.userService.login()
				.subscribe(res => {
					this.error = '';
					this.goToHome();
				}, err => {
					console.error('error', err);
					this.error = 'Incorrect email or password';
				});
		}
	}

	goToHome() {
		this.routerext.navigate(['/home'],{
			transition: {
				name: 'slideTop',
				duration: 1000
			}
		});
	}
}
