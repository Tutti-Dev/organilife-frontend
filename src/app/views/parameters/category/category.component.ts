import { Component } from '@angular/core';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  RowComponent,
} from '@coreui/angular';

@Component({
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss'],
  standalone: true,
  imports: [CardComponent, CardBodyComponent, RowComponent, ColComponent],
})
export class CategoryComponent {}
