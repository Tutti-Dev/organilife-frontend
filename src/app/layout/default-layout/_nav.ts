import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Despesas',
    url: '/despesas',
    iconComponent: { name: 'cil-dollar' },
  },
  {
    name: 'Parâmetros',
    url: '/parametros',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Categorias',
        url: '/parametros/categorias',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Estabelecimentos',
        url: '/parametros/estabelecimentos',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Métodos de pagamento',
        url: '/parametros/metodos-de-pagamento',
        icon: 'nav-icon-bullet',
      },
    ],
  },
];
