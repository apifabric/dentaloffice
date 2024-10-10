import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Dentist-new',
  templateUrl: './Dentist-new.component.html',
  styleUrls: ['./Dentist-new.component.scss']
})
export class DentistNewComponent {
  @ViewChild("DentistForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}