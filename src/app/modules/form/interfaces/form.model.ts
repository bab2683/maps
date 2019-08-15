import { FormSizes } from '../enums';

export interface FormComposer {
  rows: FormRow[];
  submitText: string;
}

export interface FormRow {
  [FormSizes.Base]?: number;
  [FormSizes.Small]?: number;
  [FormSizes.Medium]?: number;
  [FormSizes.Large]?: number;
  [FormSizes.ExtraLarge]?: number;
  fields: FormField[];
}

export interface FormField {
  default?: any;
  error?: string;
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  validators?: any[];
}

export interface ParsedData {
  [name: string]: any;
}
