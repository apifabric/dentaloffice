import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {APPOINTMENTTREATMENT_MODULE_DECLARATIONS, AppointmentTreatmentRoutingModule} from  './AppointmentTreatment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AppointmentTreatmentRoutingModule
  ],
  declarations: APPOINTMENTTREATMENT_MODULE_DECLARATIONS,
  exports: APPOINTMENTTREATMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentTreatmentModule { }