import { FirebaseError } from 'firebase';

import { AuthError, AuthErrorsEnum, AuthLoginMail, parseLoginError, LoggedUser } from '@mod/auth';

export const testUserCredentials: AuthLoginMail = {
  email: 'barahona.braulio@gmail.com',
  password: '123pass'
};

export const loggedTestUser: LoggedUser = {
  email: 'barahona.braulio@gmail.com',
  emailVerified: false
};

export const wrongCredentialsTestError: AuthError = parseLoginError(<FirebaseError>{
  code: AuthErrorsEnum.WRONG_PASSWORD
});

export const genericTestError: AuthError = parseLoginError(<FirebaseError>{
  code: 'generic'
});
