import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInsuranceHomeComponent } from './home/PatientInsurance-home.component';
import { PatientInsuranceNewComponent } from './new/PatientInsurance-new.component';
import { PatientInsuranceDetailComponent } from './detail/PatientInsurance-detail.component';

const routes: Routes = [
  {path: '', component: PatientInsuranceHomeComponent},
  { path: 'new', component: PatientInsuranceNewComponent },
  { path: ':id', component: PatientInsuranceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'PatientInsurance-detail-permissions'
      }
    }
  }
];

export const PATIENTINSURANCE_MODULE_DECLARATIONS = [
    PatientInsuranceHomeComponent,
    PatientInsuranceNewComponent,
    PatientInsuranceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientInsuranceRoutingModule { }