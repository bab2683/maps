import { async, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, of } from 'rxjs';

import {
  genericTestError,
  loggedTestUser,
  testUserCredentials,
  wrongCredentialsTestError
} from '@tst/mock';

import { AuthErrorsEnum } from '../../auth.enum';
import { AuthEffects } from '../auth.effects';
import {
  AuthInitCheck,
  AuthLoginRequest,
  AuthLogoutRequest,
  AuthActionTypes
} from '../auth.actions';

describe('AuthEffects', () => {
  let effects: AuthEffects;
  let actions: ReplaySubject<any>;

  let angularFireMock: any = {
    auth: {
      signInWithEmailAndPassword: jest.fn(),
      signOut: jest.fn()
    },
    user: of(null)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions),
        {
          provide: AngularFireAuth,
          useValue: angularFireMock
        }
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  it('should be created', async () => {
    expect(effects).toBeTruthy();
  });

  describe('#initAuth$', () => {
    it('should dispatch AuthLoadedAction', async(async () => {
      actions = new ReplaySubject(1);

      actions.next(new AuthInitCheck());
      effects.initAuth$.subscribe(result => {
        expect(result.payload).toEqual(null);
        expect(result.type).toEqual(AuthActionTypes.LOADED);
      });
    }));
  });

  describe('#loginRequest$', () => {
    it('#loginRequest$ should dispatch AuthLoadedAction if credentials are correct', async(async () => {
      actions = new ReplaySubject(1);

      jest.spyOn(angularFireMock.auth, 'signInWithEmailAndPassword').mockReturnValue(
        new Promise(resolve => {
          resolve({ user: loggedTestUser });
        })
      );
      actions.next(new AuthLoginRequest(testUserCredentials));
      effects.loginRequest$.subscribe(result => {
        expect(result.payload).toEqual(loggedTestUser);
        expect(result.type).toEqual(AuthActionTypes.LOGIN_SUCCESS);
      });
    }));

    it('#loginRequest$ should dispatch AuthLoginFail if credentials are wrong', async(async () => {
      actions = new ReplaySubject(1);

      jest.spyOn(angularFireMock.auth, 'signInWithEmailAndPassword').mockReturnValue(
        new Promise((__, reject) => {
          reject({ code: AuthErrorsEnum.WRONG_PASSWORD });
        })
      );
      actions.next(new AuthLoginRequest(testUserCredentials));
      effects.loginRequest$.subscribe(result => {
        expect(result.payload).toEqual(wrongCredentialsTestError);
        expect(result.type).toEqual(AuthActionTypes.LOGIN_ERROR);
      });
    }));
  });

  describe('#logoutRequest$', () => {
    it('should dispatch AuthLogoutSuccess', async(async () => {
      actions = new ReplaySubject(1);

      jest.spyOn(angularFireMock.auth, 'signOut').mockReturnValue(
        new Promise(resolve => {
          resolve();
        })
      );

      actions.next(new AuthLogoutRequest());
      effects.initAuth$.subscribe(result => {
        expect(result.type).toEqual(AuthActionTypes.LOGOUT_SUCCESS);
      });
    }));

    it('should dispatch AuthLogoutSuccess', async(async () => {
      actions = new ReplaySubject(1);

      jest.spyOn(angularFireMock.auth, 'signOut').mockReturnValue(
        new Promise(resolve => {
          resolve();
        })
      );

      actions.next(new AuthLogoutRequest());
      effects.initAuth$.subscribe(result => {
        expect(result.type).toEqual(AuthActionTypes.LOGOUT_SUCCESS);
      });
    }));
  });
});
