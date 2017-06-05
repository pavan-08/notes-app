// angular
import { Injectable } from '@angular/core';

// libs
import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

// module
import { NotesService } from '../services/notes.service';
import { Notes } from '../actions/index';

@Injectable()
export class NotesEffects {

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(Notes.ActionTypes.INIT)
    .startWith(new Notes.InitAction)
    .switchMap(() => this.notesService.getNotes())
    .map(payload => {
      let notes = payload;
      return new Notes.InitializedAction(notes);
    })
    // nothing reacting to failure at moment but you could if you want (here for example)
    .catch(() => Observable.of(new Notes.InitFailedAction()));

  @Effect() add$: Observable<Action> = this.actions$
    .ofType(Notes.ActionTypes.ADD)
    .map(action => {
      let note = action.payload;
      // analytics
      //this.nameListService.track(NameList.ActionTypes.NAME_ADDED, { label: name });
      //service call here
      return new Notes.AddedAction(note);
    });

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private notesService: NotesService
  ) { }
}