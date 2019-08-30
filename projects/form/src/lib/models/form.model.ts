import { FormSizes } from '../form.enum';

export interface FormRow {
  fields: FormField[];
  sizes?: FormRowSizes;
}

export interface FormField {
  default?: any;
  error?: string;
  label?: string;
  name: string;
  type: string;
  validators?: any[];
}

export interface FormRowSizes {
  [FormSizes.Small]?: number;
  [FormSizes.Medium]?: number;
  [FormSizes.Large]?: number;
  [FormSizes.ExtraLarge]?: number;
}

export interface FormResult {
  [name: string]: any;
}

export interface ParsedData {
  [name: string]: any;
}
