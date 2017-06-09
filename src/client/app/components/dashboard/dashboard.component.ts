// libs
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

// app
import { RouterExtensions, StorageService, StorageKey } from '../../modules/core/index';
import { UserService } from '../../modules/notes-app/index';

@Component({
  moduleId: module.id,
  selector: 'sd-dash',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	
	public notes: any;
	constructor(
		private routerext: RouterExtensions,
		private storage: StorageService
		) {}

	ngOnInit() {}

}