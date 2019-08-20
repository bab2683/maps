import { FirebaseError, User } from 'firebase';

import { AuthErrors } from '../auth.enum';
import { AuthError, LoggedUser } from '../auth.model';

export function parseLoginError({ code }: FirebaseError): AuthError {
  switch (code) {
    case AuthErrors.WRONG_PASSWORD:
      return {
        message: 'wrong credentials'
      };
    default:
      return {
        message: 'generic error'
      };
  }
}

export function getRelevantUserData({
  displayName,
  email,
  emailVerified,
  phoneNumber,
  photoURL
}: User): LoggedUser {
  return {
    displayName,
    email,
    emailVerified,
    phoneNumber,
    photoURL
  };
}
