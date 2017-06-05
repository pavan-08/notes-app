// angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// libs
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';

// module
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  private base_url: string = 'https://notes-api-pavan-8.c9users.io/';

  constructor(
    private http: Http,
    private auth: AuthService
  ) {}

  signUp(email: string, password: string, name: string): Observable<any> {
    let body = {
      'email': email,
      'password': password,
      'name': name
    }
    return this.auth.getClientCredentialToken()
    				.switchMap(res => {
    					let headers = new Headers();
    					headers.append('Authorization', res.token_type + ' ' + res.access_token);
    					let options = new RequestOptions({headers: headers});
    					return this.http.post(this.base_url + 'signup', body, options)
    				})
            .map(res => res.json());
  }

  login(): Observable<any> {
  	return null;
  }
}