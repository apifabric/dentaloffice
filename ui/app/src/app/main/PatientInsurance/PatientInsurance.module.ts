import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PATIENTINSURANCE_MODULE_DECLARATIONS, PatientInsuranceRoutingModule} from  './PatientInsurance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PatientInsuranceRoutingModule
  ],
  declarations: PATIENTINSURANCE_MODULE_DECLARATIONS,
  exports: PATIENTINSURANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientInsuranceModule { }