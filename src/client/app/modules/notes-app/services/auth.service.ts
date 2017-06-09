// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// libs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/pairs';

//app
import { StorageService } from '../../core/services/storage.service';
import { StorageKey } from '../../core/interfaces/istorage';

@Injectable()
export class AuthService {
	
	private base_url: string      = 'https://notes-api-pavan-8.c9users.io/';
	private client_id: number     = 2;
	private client_secret: string = 'VCjjoCCRZi5TQcg8G8Q8o53lCBoM1s1oCwE3At36';
	private accessToken: string = null;
	private accessLife: number = null;

	constructor(private http: Http,
				private storage: StorageService) {}
	//all methods required for auth2.0 common workflow
	getClientCredentialToken(): Observable<any> {
		let body = {
			'client_id': this.client_id,
			'client_secret': this.client_secret,
			'grant_type': 'client_credentials'
		}
		return this.http.post(this.base_url + 'oauth/token', body)
						.map(res => res.json());
	}

	getAccessToken(): Observable<any> {
		if(this.accessToken !== null && this.accessLife !== null && new Date().getTime() < this.accessLife)
			return Observable.pairs({
				'token_type': 'Bearer',
				'access_token': this.accessToken
			});
		let body = {
			'client_id': this.client_id,
			'client_secret': this.client_secret,
			'grant_type': 'password',
			'username': this.storage.getItem(StorageKey['USERNAME']),
			'password': this.storage.getItem(StorageKey['PASSWORD'])
		}
		return this.http.post(this.base_url + 'oauth/token', body)
						.map(res => res.json())
						.map(res => {
							this.accessToken = res.access_token;
							this.accessLife = new Date(new Date().getTime() + res.expires_in*1000).getTime();
							return res;
						});
	}

	
}