import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComposerComponent } from '../composer.component';

describe('ComposerComponent', () => {
  let component: ComposerComponent;
  let fixture: ComponentFixture<ComposerComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  const testData = [
    {
      fields: [
        {
          label: 'Your email',
          name: 'email',
          type: 'email'
        },
        {
          label: 'Your password',
          name: 'password',
          type: 'password'
        }
      ]
    }
  ];

  let fbGroupSpy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComposerComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: FormBuilder,
          useValue: formBuilder
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerComponent);
    component = fixture.componentInstance;
    fbGroupSpy = jest.spyOn(formBuilder, 'group');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('onInit', () => {
    it('should create the form with formbuilder', () => {
      component.rows = testData;
      fixture.detectChanges();
      component.ngOnInit();
      expect(fbGroupSpy).toHaveBeenCalled();
    });
  });

  describe('submit', () => {
    beforeEach(() => {
      component.rows = testData;
      fixture.detectChanges();
      component.ngOnInit();
    });

    it('should return an object with values if form is valid', () => {
      // Null because I'm forcing the behavior
      const expectedResponse: { email: any; password: any } = { email: null, password: null };

      jest.spyOn(component.formGroup, 'valid', 'get').mockReturnValue(true);
      const result = component.submit();
      expect(result).toEqual(expectedResponse);
    });
    it('should return null if form is not valid', () => {
      const expectedResponse: any = null;

      jest.spyOn(component.formGroup, 'valid', 'get').mockReturnValue(false);
      const result = component.submit();
      expect(result).toEqual(expectedResponse);
    });
  });
});
