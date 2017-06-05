import { INoteState, noteInitialState } from '../states/index';
import { Notes } from '../actions/index';

export function reducer(
  state: INoteState = noteInitialState,
  // could support multiple state actions via union type here
  // ie: NameList.Actions | Other.Actions
  // the seed's example just has one set of actions: NameList.Actions
  action: Notes.Actions
): INoteState {
  switch (action.type) {
    case Notes.ActionTypes.INITIALIZED:
      return (<any>Object).assign({}, state, {
        notes: action.payload
      });

    case Notes.ActionTypes.ADDED:
      return (<any>Object).assign({}, state, {
        notes: [...state.notes, action.payload]
      });

    default:
      return state;
  }
}
