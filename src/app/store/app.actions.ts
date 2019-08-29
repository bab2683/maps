import { Action } from '@ngrx/store';

export enum AppActionTypes {
  LOADED = '[App] loaded'
}

export class AppLoadedAction implements Action {
  public readonly type: string = AppActionTypes.LOADED;
}

export type AppActions = AppLoadedAction;
