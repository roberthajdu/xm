import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';



@NgModule({
  declarations: [
    DynamicFormComponent,
    PasswordInputComponent,
    PhoneInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    PhoneInputComponent,
    DynamicFormComponent
  ]
})
export class SharedModule { }
