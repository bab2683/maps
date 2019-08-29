import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

import { AppActionTypes, AppLoadedAction } from '../app.actions';
import { UiLoadedAction } from './ui.actions';

@Injectable()
export class UiEffects {
  @Effect()
  public UiLoaded$: Observable<UiLoadedAction> = this.actions$.pipe(
    ofType<AppLoadedAction>(AppActionTypes.LOADED),
    mapTo(new UiLoadedAction())
  );

  constructor(private actions$: Actions) {}
}
