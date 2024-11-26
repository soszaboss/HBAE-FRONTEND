import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path:'equipements',
    loadChildren: () => import('../modules/equipements/equipements.module').then(m => m.EquipementsModule)

  },
  {
    path:'activities',
    loadChildren: () => import('../modules/activities/activities.module').then(m => m.ActivitiesModule)

  },
  {
    path:'salles',
    loadChildren: () => import('../modules/salles/salles.module').then(m => m.SallesModule)

  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
