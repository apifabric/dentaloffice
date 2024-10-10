import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './home/Patient-home.component';
import { PatientNewComponent } from './new/Patient-new.component';
import { PatientDetailComponent } from './detail/Patient-detail.component';

const routes: Routes = [
  {path: '', component: PatientHomeComponent},
  { path: 'new', component: PatientNewComponent },
  { path: ':id', component: PatientDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Patient-detail-permissions'
      }
    }
  },{
    path: ':patient_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
},{
    path: ':patient_id/PatientInsurance', loadChildren: () => import('../PatientInsurance/PatientInsurance.module').then(m => m.PatientInsuranceModule),
    data: {
        oPermission: {
            permissionId: 'PatientInsurance-detail-permissions'
        }
    }
},{
    path: ':patient_id/Prescription', loadChildren: () => import('../Prescription/Prescription.module').then(m => m.PrescriptionModule),
    data: {
        oPermission: {
            permissionId: 'Prescription-detail-permissions'
        }
    }
}
];

export const PATIENT_MODULE_DECLARATIONS = [
    PatientHomeComponent,
    PatientNewComponent,
    PatientDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }