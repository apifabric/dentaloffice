import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentTreatmentHomeComponent } from './home/AppointmentTreatment-home.component';
import { AppointmentTreatmentNewComponent } from './new/AppointmentTreatment-new.component';
import { AppointmentTreatmentDetailComponent } from './detail/AppointmentTreatment-detail.component';

const routes: Routes = [
  {path: '', component: AppointmentTreatmentHomeComponent},
  { path: 'new', component: AppointmentTreatmentNewComponent },
  { path: ':id', component: AppointmentTreatmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AppointmentTreatment-detail-permissions'
      }
    }
  }
];

export const APPOINTMENTTREATMENT_MODULE_DECLARATIONS = [
    AppointmentTreatmentHomeComponent,
    AppointmentTreatmentNewComponent,
    AppointmentTreatmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentTreatmentRoutingModule { }