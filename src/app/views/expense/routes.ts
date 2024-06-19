import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./expense.component').then((m) => m.ExpenseComponent),
    data: {
      title: 'Despesas',
    },
  },
];
