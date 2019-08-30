import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
//  import { Store } from '@ngrx/store';
import { /*MockStore*/ provideMockStore } from '@ngrx/store/testing';
import { ReplaySubject } from 'rxjs';

import { AuthLoadedAction, getAuthLoadingState } from '@bab/auth';
import { AppActionTypes } from '../app.actions';
import { AppEffects } from '../app.effects';

describe('AppEffects', () => {
  let effects: AppEffects;
  let actions: ReplaySubject<any>;
  // let store: MockStore<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions),
        provideMockStore({
          selectors: [
            {
              selector: getAuthLoadingState,
              value: true
            }
          ]
        })
      ]
    });

    effects = TestBed.get(AppEffects);
    // store = TestBed.get(Store);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  describe('#modulesLoadedAction$', () => {
    it('should dispatch AppLoadedAction when external modules are loaded', async(async () => {
      actions = new ReplaySubject(1);

      // console.log(store);

      actions.next(new AuthLoadedAction(null));

      effects.modulesLoadedAction$.subscribe(result => {
        expect(result.type).toEqual(AppActionTypes.LOADED);
      });
    }));
  });
});
