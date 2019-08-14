import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  public isLoggedIn(): Observable<boolean> {
    return this.afAuth.user.pipe(
      switchMap(result => {
        if (result) {
          return of(true);
        }
        return of(false);
      })
    );
  }

  public login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
