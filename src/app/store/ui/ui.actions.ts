import { Action } from '@ngrx/store';

export enum UiActionTypes {
  LOADED = '[Ui] loaded'
}

export class UiLoadedAction implements Action {
  public readonly type: string = UiActionTypes.LOADED;
}

export type UiActions = UiLoadedAction;
