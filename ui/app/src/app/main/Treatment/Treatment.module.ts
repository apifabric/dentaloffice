import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TREATMENT_MODULE_DECLARATIONS, TreatmentRoutingModule} from  './Treatment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TreatmentRoutingModule
  ],
  declarations: TREATMENT_MODULE_DECLARATIONS,
  exports: TREATMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreatmentModule { }