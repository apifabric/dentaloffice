import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'PatientInsurance-new',
  templateUrl: './PatientInsurance-new.component.html',
  styleUrls: ['./PatientInsurance-new.component.scss']
})
export class PatientInsuranceNewComponent {
  @ViewChild("PatientInsuranceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}