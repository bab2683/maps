import { Action } from '@ngrx/store';

import { actionNameCreation } from '@utl/index';

const actionGroup = actionNameCreation('App');

export const AppActionTypes: { [key: string]: string } = {
  LOADED: actionGroup('loaded')
};

export class AppLoadedAction implements Action {
  public readonly type: string = AppActionTypes.LOADED;
}

export type AppActions = AppLoadedAction;
