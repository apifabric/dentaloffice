import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './PatientInsurance-card.component.html',
  styleUrls: ['./PatientInsurance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.PatientInsurance-card]': 'true'
  }
})

export class PatientInsuranceCardComponent {


}