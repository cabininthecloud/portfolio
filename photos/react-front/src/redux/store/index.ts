import { createStore, Action, applyMiddleware, Store } from 'redux';
import Thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducer from '../reducers';
import { State } from '../state';
import { ActionsType } from '../actions';

const configureStore = (state?: Partial<State>): Store => {
  return createStore(
    Reducer,
    state || {},
    composeWithDevTools(
      applyMiddleware(
        Thunk as ThunkMiddleware<State, Action<ActionsType['type']>>
      )
    )
  );
};

export default configureStore;
