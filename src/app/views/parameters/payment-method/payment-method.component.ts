import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  RowComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'payment-method.component.html',
  styleUrls: ['payment-method.component.scss'],
  standalone: true,
  imports: [CardComponent, CardBodyComponent, RowComponent, ColComponent],
})
export class PaymentMethodComponent {}
