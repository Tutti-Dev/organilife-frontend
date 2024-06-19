import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  RowComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'store.component.html',
  styleUrls: ['store.component.scss'],
  standalone: true,
  imports: [CardComponent, CardBodyComponent, RowComponent, ColComponent],
})
export class StoreComponent {}
