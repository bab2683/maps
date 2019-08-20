import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../login.component';
import { FormModule } from '@mod/form';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginDataSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    loginDataSpy = jest.spyOn(component.loginData, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('emailAndPasswordLogin', () => {
    it('should emit the values if form is valid', () => {
      const result = { email: '', password: '' };
      jest.spyOn(component.form, 'submit').mockReturnValue(result);
      component.emailAndPasswordLogin();
      expect(loginDataSpy).toBeCalledWith(result);
    });
  });
});
