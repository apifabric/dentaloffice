import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Dentist-card.component.html',
  styleUrls: ['./Dentist-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Dentist-card]': 'true'
  }
})

export class DentistCardComponent {


}