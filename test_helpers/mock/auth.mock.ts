import { FirebaseError } from 'firebase';
import { EMPTY, Observable, Operator } from 'rxjs';

export class MockObservable<T> extends Observable<T> {
  public source: Observable<any> = EMPTY;

  /**
   * Overriding lift function mocks .pipe() function
   */
  public lift<R>(operator: Operator<T, R>): Observable<R> {
    const observable = new MockObservable<R>();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }

  /**
   * Set's source for mock observable
   */
  public setSource(source: Observable<T>): void {
    this.source = source;
  }
}

import { AuthError, AuthErrorsEnum, AuthLoginMail, LoggedUser, parseLoginError } from '@mod/auth';

export const testUserCredentials: AuthLoginMail = {
  email: 'barahona.braulio@gmail.com',
  password: '123pass'
};

export const loggedTestUser: LoggedUser = {
  email: 'barahona.braulio@gmail.com',
  emailVerified: false
};

export const wrongCredentialsTestError: AuthError = parseLoginError({
  code: AuthErrorsEnum.WRONG_PASSWORD
} as FirebaseError);

export const genericTestError: AuthError = parseLoginError({
  code: 'generic'
} as FirebaseError);

export const angularFireMock: {
  auth: {
    signInWithEmailAndPassword: () => any;
    signOut: () => any;
  };
  user: MockObservable<any>;
} = {
  auth: {
    signInWithEmailAndPassword: jest.fn(),
    signOut: jest.fn()
  },
  user: new MockObservable()
};
