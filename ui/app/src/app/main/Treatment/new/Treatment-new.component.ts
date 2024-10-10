import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Treatment-new',
  templateUrl: './Treatment-new.component.html',
  styleUrls: ['./Treatment-new.component.scss']
})
export class TreatmentNewComponent {
  @ViewChild("TreatmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}