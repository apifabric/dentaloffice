import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AppointmentTreatment-card.component.html',
  styleUrls: ['./AppointmentTreatment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AppointmentTreatment-card]': 'true'
  }
})

export class AppointmentTreatmentCardComponent {


}