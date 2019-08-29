import { routerReducer } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

import { AppActions, AppActionTypes } from './app.actions';
import { AppState, initialAppState } from './app.state';
import { uiReducer } from './ui';

export function appReducer(state: AppState = initialAppState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.LOADED:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export const appReducers: { [key: string]: ActionReducer<any> } = {
  app: appReducer,
  router: routerReducer,
  ui: uiReducer
};
