import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Treatment-card.component.html',
  styleUrls: ['./Treatment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Treatment-card]': 'true'
  }
})

export class TreatmentCardComponent {


}