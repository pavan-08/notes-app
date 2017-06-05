// angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// libs
import { Observable } from 'rxjs/Observable';

// app
import { Config } from '../../core/index';

// module
import { Notes } from '../actions/index';
import { AuthService } from './auth.service';

@Injectable()
export class NotesService {

  private category:string;
  constructor(
    private http: Http,
    private auth: AuthService
  ) {
    this.category = Notes.CATEGORY;
  }

  getNotes(): Observable<Array<any>> {
    return null;
  }

  addNote(): Observable<any> {
    return null;
  }

  updateNote(): Observable<any> {
    return null;
  }

  deleteNote(): Observable<any> {
    return null;
  }
}
