import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, mapTo, withLatestFrom } from 'rxjs/operators';

import { AuthActionTypes, AuthLoadedAction, getAuthLoadingState } from '@mod/auth';
import { AppLoadedAction } from './app.actions';
import { AppState } from './app.state';
import { UiEffects } from './ui';

@Injectable()
export class AppEffects {
  @Effect()
  public modulesLoadedAction$: Observable<AppLoadedAction> = this.actions$.pipe(
    ofType<AuthLoadedAction>(AuthActionTypes.LOADED),
    withLatestFrom(this.store.pipe(select(getAuthLoadingState))),
    filter(([, authLoading]) => !authLoading),
    mapTo(new AppLoadedAction())
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}

export const AllEffects: any[] = [AppEffects, UiEffects];
