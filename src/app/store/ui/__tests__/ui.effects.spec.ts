import { async, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { UiActionTypes, UiLoadedAction } from '../ui.actions';
import { UiEffects } from '../ui.effects';

describe('UiEffects', () => {
  let effects: UiEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiEffects, provideMockActions(() => actions)]
    });

    effects = TestBed.get(UiEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  describe('#UiLoaded$', () => {
    it('should dispatch UiLoadedAction when app is loaded', async(async () => {
      actions = new ReplaySubject(1);

      actions.next(new UiLoadedAction());
      effects.UiLoaded$.subscribe(result => {
        expect(result.type).toEqual(UiActionTypes.LOADED);
      });
    }));
  });
});
