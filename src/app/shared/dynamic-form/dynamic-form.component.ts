import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DynamicField } from './dynamic-field';
import { FieldValidation } from './field-validation';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() formFields: DynamicField[] = [];
  form = new FormGroup({});

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    for (const formField of this.formFields) {
      const validators = [];
      this.form.addControl(formField.name, new FormControl('', this.getValidators(formField.validations)));
    }
    this.formFields = this.formFields;
  }

  getValidators(validations: FieldValidation[] = []): ValidatorFn[] {
    const validators = [];
    for (const validation of validations) {
      // Regex
      if (validation.name === 'regex') {
        if (typeof validation.value === 'string') {
          validators.push(Validators.pattern(validation.value))
        }
      }
      // Maxlength
      if (validation.name === 'maxlength') {
        validators.push(Validators.maxLength(+validation.value))
      }
      // Minlength
      if (validation.name === 'minlength') {
        validators.push(Validators.minLength(+validation.value))
      }
    }
    return validators;
  }

  getErrorMessage(error: ValidationErrors | null | undefined, validations: FieldValidation[] = []): string {
    if (!error) return '';
    console.log(error, validations);
    let firstErrorName = Object.keys(error)[0];
    if (firstErrorName === 'pattern') {
      firstErrorName = 'regex';
    }
    const firstErrorValidation = validations.find(validation => validation.name === firstErrorName);
    console.log(firstErrorValidation)
    if (!firstErrorValidation) return '';
    return firstErrorValidation.message;
  }

}
