import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import {
  AuthState,
  AuthInitCheck,
  AuthLoginRequest,
  AuthLogoutRequest,
  getLoggedUser,
  initialAuthState
} from '../../../store';

import { DashboardComponent } from '../dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore<AuthState>;
  let dispatchSpy: any;
  let selectSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [provideMockStore<AuthState>({ initialState: initialAuthState })],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    store = TestBed.get<Store<AuthState>>(Store);
    dispatchSpy = jest.spyOn(store, 'dispatch');
    selectSpy = jest.spyOn(store, 'select');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('onInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should dispatch init auth action', () => {
      const action = new AuthInitCheck();
      expect(dispatchSpy).toBeCalledWith(action);
    });

    it('should fetch user data', () => {
      expect(selectSpy).toBeCalledWith(getLoggedUser);
    });
  });

  describe('login', () => {
    it('should dispatch login request action', () => {
      const credentials = { email: '', password: '' };
      component.login(credentials);
      const action = new AuthLoginRequest(credentials);
      expect(dispatchSpy).toBeCalledWith(action);
    });
  });

  describe('logout', () => {
    it('should dispatch logout request action', () => {
      component.logout();
      const action = new AuthLogoutRequest();
      expect(dispatchSpy).toBeCalledWith(action);
    });
  });
});
