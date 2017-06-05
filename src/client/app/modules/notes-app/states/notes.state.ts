import { Observable } from 'rxjs/Observable';

export interface INoteState {
  notes: Array<any>;
}

export const noteInitialState: INoteState = {
  notes: <Array<any>>[]
};

// selects specific slice from sample state
export function getNotes(state$: Observable<INoteState>) {
  return state$.select(state => state.notes);
}
