import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'categorias',
    loadComponent: () =>
      import('./category/category.component').then((m) => m.CategoryComponent),
    data: {
      title: 'Categorias',
    },
  },
  {
    path: 'estabelecimentos',
    loadComponent: () =>
      import('./store/store.component').then((m) => m.StoreComponent),
    data: {
      title: 'Estabelecimentos',
    },
  },
  {
    path: 'metodos-de-pagamento',
    loadComponent: () =>
      import('./payment-method/payment-method.component').then(
        (m) => m.PaymentMethodComponent
      ),
    data: {
      title: 'Métodos de Pagamento',
    },
  },
];
