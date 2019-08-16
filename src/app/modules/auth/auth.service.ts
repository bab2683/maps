import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  public getUser(): Observable<User | null> {
    return this.afAuth.user;
  }

  public login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout(): void {
    this.afAuth.auth.signOut();
  }
}
