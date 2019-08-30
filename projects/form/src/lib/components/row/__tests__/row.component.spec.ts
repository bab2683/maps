import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRow } from '@mod/form';

import { RowComponent } from '../row.component';

describe('RowComponent', () => {
  let component: RowComponent;
  let fixture: ComponentFixture<RowComponent>;

  const testData: FormRow = {
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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('onInit', () => {
    it('should create the classes according to content only', () => {
      component.data = testData;
      fixture.detectChanges();
      component.ngOnInit();

      expect(component.classes).toBeDefined();
      expect(component.classes).toEqual(['row--b2']);
    });
    it('should create the classes according to content only', () => {
      const modifiedData: FormRow = {
        ...testData,
        sizes: {
          s: 1
        }
      };

      component.data = modifiedData;
      fixture.detectChanges();
      component.ngOnInit();

      expect(component.classes).toBeDefined();
      expect(component.classes).toEqual(['row--s1']);
    });
  });
});
