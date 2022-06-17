import { FieldValidation } from "./field-validation";

export interface DynamicField {
    type: 'text' | 'email' | 'phone' | 'password';
    name: string;
    label: string;
    required: boolean;
    validations?: FieldValidation[];
}