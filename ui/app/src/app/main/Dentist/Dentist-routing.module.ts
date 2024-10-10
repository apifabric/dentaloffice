import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentistHomeComponent } from './home/Dentist-home.component';
import { DentistNewComponent } from './new/Dentist-new.component';
import { DentistDetailComponent } from './detail/Dentist-detail.component';

const routes: Routes = [
  {path: '', component: DentistHomeComponent},
  { path: 'new', component: DentistNewComponent },
  { path: ':id', component: DentistDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Dentist-detail-permissions'
      }
    }
  },{
    path: ':dentist_id/Appointment', loadChildren: () => import('../Appointment/Appointment.module').then(m => m.AppointmentModule),
    data: {
        oPermission: {
            permissionId: 'Appointment-detail-permissions'
        }
    }
}
];

export const DENTIST_MODULE_DECLARATIONS = [
    DentistHomeComponent,
    DentistNewComponent,
    DentistDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentistRoutingModule { }