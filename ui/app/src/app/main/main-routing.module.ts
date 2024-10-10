import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Appointment', loadChildren: () => import('./Appointment/Appointment.module').then(m => m.AppointmentModule) },
    
        { path: 'AppointmentTreatment', loadChildren: () => import('./AppointmentTreatment/AppointmentTreatment.module').then(m => m.AppointmentTreatmentModule) },
    
        { path: 'Dentist', loadChildren: () => import('./Dentist/Dentist.module').then(m => m.DentistModule) },
    
        { path: 'Insurance', loadChildren: () => import('./Insurance/Insurance.module').then(m => m.InsuranceModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Patient', loadChildren: () => import('./Patient/Patient.module').then(m => m.PatientModule) },
    
        { path: 'PatientInsurance', loadChildren: () => import('./PatientInsurance/PatientInsurance.module').then(m => m.PatientInsuranceModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Prescription', loadChildren: () => import('./Prescription/Prescription.module').then(m => m.PrescriptionModule) },
    
        { path: 'Staff', loadChildren: () => import('./Staff/Staff.module').then(m => m.StaffModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'Treatment', loadChildren: () => import('./Treatment/Treatment.module').then(m => m.TreatmentModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }