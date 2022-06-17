import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationField } from './registration-field';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  readonly registrationFieldList$: Observable<RegistrationField[]>;

  constructor(private readonly registrationService: RegistrationService) {
    this.registrationFieldList$ = this.registrationService.getRegistrationFieldList();
  }

  ngOnInit(): void {
  }

}
