import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  RowComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'expense.component.html',
  styleUrls: ['expense.component.scss'],
  standalone: true,
  imports: [CardComponent, CardBodyComponent, RowComponent, ColComponent],
})
export class ExpenseComponent {}
