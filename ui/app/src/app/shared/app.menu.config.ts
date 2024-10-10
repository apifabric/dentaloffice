import { MenuRootItem } from 'ontimize-web-ngx';

import { AppointmentCardComponent } from './Appointment-card/Appointment-card.component';

import { AppointmentTreatmentCardComponent } from './AppointmentTreatment-card/AppointmentTreatment-card.component';

import { DentistCardComponent } from './Dentist-card/Dentist-card.component';

import { InsuranceCardComponent } from './Insurance-card/Insurance-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { PatientCardComponent } from './Patient-card/Patient-card.component';

import { PatientInsuranceCardComponent } from './PatientInsurance-card/PatientInsurance-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { PrescriptionCardComponent } from './Prescription-card/Prescription-card.component';

import { StaffCardComponent } from './Staff-card/Staff-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { TreatmentCardComponent } from './Treatment-card/Treatment-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Appointment', name: 'APPOINTMENT', icon: 'view_list', route: '/main/Appointment' }
    
        ,{ id: 'AppointmentTreatment', name: 'APPOINTMENTTREATMENT', icon: 'view_list', route: '/main/AppointmentTreatment' }
    
        ,{ id: 'Dentist', name: 'DENTIST', icon: 'view_list', route: '/main/Dentist' }
    
        ,{ id: 'Insurance', name: 'INSURANCE', icon: 'view_list', route: '/main/Insurance' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Patient', name: 'PATIENT', icon: 'view_list', route: '/main/Patient' }
    
        ,{ id: 'PatientInsurance', name: 'PATIENTINSURANCE', icon: 'view_list', route: '/main/PatientInsurance' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Prescription', name: 'PRESCRIPTION', icon: 'view_list', route: '/main/Prescription' }
    
        ,{ id: 'Staff', name: 'STAFF', icon: 'view_list', route: '/main/Staff' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'Treatment', name: 'TREATMENT', icon: 'view_list', route: '/main/Treatment' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AppointmentCardComponent

    ,AppointmentTreatmentCardComponent

    ,DentistCardComponent

    ,InsuranceCardComponent

    ,InventoryCardComponent

    ,PatientCardComponent

    ,PatientInsuranceCardComponent

    ,PaymentCardComponent

    ,PrescriptionCardComponent

    ,StaffCardComponent

    ,SupplierCardComponent

    ,TreatmentCardComponent

];